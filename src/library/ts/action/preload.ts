import { Base } from './base';
import { Preloader } from '../util/preloader';
import { State } from '../util/types';

type PreloadItem = {
  mimetype: string;
  url: string;
};

export default class PreloadAction extends Base<PreloadItem[], void> {
  protected preloader: Preloader;

  constructor(state: State) {
    super(state);
    this.preloader = new Preloader();
  }

  async execute(items: PreloadItem[]): Promise<void> {
    this.preloader.unref();
    items.forEach(({ mimetype, url }) => this.preloader.preload(mimetype, url));
    return Promise.resolve();
  }

  // eslint-disable-next-line class-methods-use-this
  unpack(arg: unknown): PreloadItem[] {
    if (!Array.isArray(arg)) {
      throw new TypeError('PreloadAction.unpack(arg): arg must be an array');
    }
    const items = arg as unknown[];
    items.forEach((item, index) => {
      const { mimetype, url } = item as { mimetype: unknown; url: unknown };
      if (typeof mimetype !== 'string') {
        throw new TypeError(
          `PreloadAction.unpack(arg): item ${index} of args must have a mimetype`,
        );
      }
      if (typeof url !== 'string') {
        throw new TypeError(
          `PreloadAction.unpack(arg): item ${index} of arg must have an url`,
        );
      }
    });
    return arg as PreloadItem[];
  }
}

export { PreloadAction, PreloadItem };
