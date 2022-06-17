export default class Preloader {
  protected refs = new Map<string, unknown>();

  protected typeRegistry = new Map<string, (url: URL | string) => void>();

  constructor() {
    this.typeRegistry.set('image', this.preloadImage.bind(this));
    this.typeRegistry.set('video', this.preloadVideo.bind(this));
  }

  preload(mimetype: string, url: URL | string): boolean {
    const type = mimetype.split('/', 1)[0];
    const preloadFunc = this.typeRegistry.get(type);
    if (preloadFunc) {
      preloadFunc(url);
      return true;
    }
    return false;
  }

  preloadImage(url: URL | string): void {
    const { href } = new URL(url);
    const image = new Image();
    image.src = href;
    this.refs.set(href, image);
  }

  preloadVideo(url: URL | string) {
    const { href } = new URL(url);
    const video = document.createElement('video');
    video.preload = 'auto';
    video.src = href;
    this.refs.set(href, video);
  }

  unref(...refs: string[]) {
    if (refs.length === 0) {
      this.refs.clear();
    } else {
      refs.forEach((ref) => this.refs.delete(ref));
    }
  }
}

export { Preloader };
