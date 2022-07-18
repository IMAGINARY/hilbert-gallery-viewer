import Base from './base';
import { OptionalKeys, State } from '../util/types';
import { ajvCompile, JSONSchemaType } from '../util/validate';
import ContentCreator from '../util/content-creator';

interface SetVolumeActionOptions {
  volume: number;
  mode?: 'absolute' | 'relative';
}

// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const setVolumeActionOptionsSchema = {
  type: 'object',
  properties: {
    volume: { type: 'number', minimum: 0 },
  },
  required: ['volume'],
} as unknown as JSONSchemaType<SetVolumeActionOptions>;

const validateSetVolumeActionOptions = ajvCompile(setVolumeActionOptionsSchema);

const defaultOptionalSetVolumeArgs: Required<
  Pick<SetVolumeActionOptions, OptionalKeys<SetVolumeActionOptions>>
> = {
  mode: 'absolute',
};

class SetVolumeAction extends Base<SetVolumeActionOptions, void> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(state: State) {
    super(state);
  }

  // eslint-disable-next-line class-methods-use-this
  async execute(arg: SetVolumeActionOptions): Promise<void> {
    const { volume, mode } = {
      ...defaultOptionalSetVolumeArgs,
      ...arg,
    };
    this.state.activeSlides.forEach(({ contentElement }) =>
      ContentCreator.setVolume(contentElement, volume, mode),
    );
    return Promise.resolve();
  }

  // eslint-disable-next-line class-methods-use-this
  unpack(options: unknown): SetVolumeActionOptions {
    return validateSetVolumeActionOptions(options);
  }
}

export default SetVolumeAction;
export { SetVolumeActionOptions };
