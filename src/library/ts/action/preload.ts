import Base from './base';
import { State, PreloadItem } from '../util/types';
import { ajvCompile, JSONSchemaType } from '../util/validate';

type PreloadActionOptions = PreloadItem[];

const preloadActionOptionsSchema: JSONSchemaType<PreloadActionOptions> = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      mimetype: { type: 'string' },
      url: { type: 'string' },
    },
    required: ['mimetype', 'url'],
  },
};

const validatePreloadActionOptions = ajvCompile(preloadActionOptionsSchema);

class PreloadAction extends Base<PreloadItem[], Promise<void>[]> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(state: State) {
    super(state);
  }

  async execute(items: PreloadActionOptions): Promise<Promise<void>[]> {
    const { preloader } = this.state;
    preloader.clear();
    await Promise.resolve(); // this is just to make the method actually async
    return preloader.preload(...items);
  }

  // eslint-disable-next-line class-methods-use-this
  unpack(options: unknown): PreloadActionOptions {
    return validatePreloadActionOptions(options);
  }
}

export default PreloadAction;
export { PreloadItem };
