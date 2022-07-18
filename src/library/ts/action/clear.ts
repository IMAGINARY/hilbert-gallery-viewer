import Base from './base';
import { OptionalKeys, State } from '../util/types';
import { ajvCompile, JSONSchemaType } from '../util/validate';
import { ShowActionOptions } from './show';

interface ClearActionOptions {
  color?: string;
  transition?: { type: string; options?: Record<string, unknown> };
}

// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const clearActionOptionsSchema = {
  type: 'object',
  properties: {
    color: { type: 'string' },
    transition: {
      type: 'object',
      properties: {
        type: { type: 'string' },
        options: { type: 'object' },
      },
      required: ['type'],
    },
  },
} as unknown as JSONSchemaType<ClearActionOptions>;

const validateClearActionOptions = ajvCompile(clearActionOptionsSchema);

const defaultOptionalClearArgs: Required<
  Pick<ClearActionOptions, OptionalKeys<ClearActionOptions>>
> = {
  color: 'black',
  transition: { type: 'none', options: {} },
};

class ClearAction extends Base<ClearActionOptions, void> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(state: State) {
    super(state);
  }

  // eslint-disable-next-line class-methods-use-this
  async execute(arg: ClearActionOptions): Promise<void> {
    const showActionOptions: ShowActionOptions = {
      ...defaultOptionalClearArgs,
      ...arg,
      mimetype: 'image/gif',
      url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      animation: { type: 'none' },
    };
    const { viewer } = this.state;
    return viewer.execute('show', showActionOptions);
  }

  // eslint-disable-next-line class-methods-use-this
  unpack(options: unknown): ClearActionOptions {
    return validateClearActionOptions(options);
  }
}

export default ClearAction;
export { ClearActionOptions };
