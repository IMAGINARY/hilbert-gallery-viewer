import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';

const ajv = new Ajv();

function validateThrowError<T>(
  validate: ValidateFunction<T>,
): (
  data: Parameters<ValidateFunction<T>>[0],
  dataCtx?: Parameters<ValidateFunction<T>>[1],
) => T {
  return (
    data: Parameters<ValidateFunction<T>>[0],
    dataCtx?: Parameters<ValidateFunction<T>>[1],
  ): T => {
    if (typeof dataCtx === 'undefined') {
      if (validate(data)) {
        return data;
      }
    } else if (validate(data)) {
      return data;
    }
    throw new TypeError(JSON.stringify(validate.errors));
  };
}

function ajvCompile<T>(
  schema: JSONSchemaType<T>,
  _meta?: boolean,
): (
  data: Parameters<ValidateFunction<T>>[0],
  dataCtx?: Parameters<ValidateFunction<T>>[1],
) => T {
  return validateThrowError<T>(
    typeof _meta === 'undefined'
      ? ajv.compile(schema)
      : ajv.compile(schema, _meta),
  );
}

export { JSONSchemaType, ajvCompile, validateThrowError };
