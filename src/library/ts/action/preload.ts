import { Base } from './base';
import { Preloader } from '../util/preloader';
import { State } from '../util/types';
import { ajvCompile, JSONSchemaType } from '../util/validate';

type PreloadItem = {
  mimetype: string;
  url: string;
};

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

export default class PreloadAction extends Base<PreloadItem[], void> {
  protected preloader: Preloader;

  constructor(state: State) {
    super(state);
    this.preloader = new Preloader();
  }

  async execute(items: PreloadActionOptions): Promise<void> {
    this.preloader.unref();
    items.forEach(({ mimetype, url }) => this.preloader.preload(mimetype, url));
    return Promise.resolve();
  }

  // eslint-disable-next-line class-methods-use-this
  unpack(options: unknown): PreloadActionOptions {
    return validatePreloadActionOptions(options);
  }
}

export { PreloadAction, PreloadItem };
