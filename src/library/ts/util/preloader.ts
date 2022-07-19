import { SupportedContentElement, PreloadItem } from './types';

class Preloader {
  protected container: HTMLElement;

  protected readonly refs = new Map<string, SupportedContentElement>();

  constructor(container: HTMLElement = document.createElement('div')) {
    this.container = container;
  }

  public static key(mimetype: string, url: string) {
    return `{${mimetype}}{${url}}`;
  }

  protected preloadImpl(
    mimetype: string,
    url: string,
  ): { key: string; element: SupportedContentElement } {
    const key = Preloader.key(mimetype, url);
    const cpe = Preloader.createPreloadingElement.bind(Preloader);
    const element = this.refs.get(key) ?? cpe(mimetype, url);
    this.container.appendChild(element);
    this.refs.set(key, element);
    return { key, element };
  }

  public preload(...items: PreloadItem[]): void {
    items.forEach(({ mimetype, url }) => this.preloadImpl(mimetype, url));
  }

  public get(mimetype: string, url: string): SupportedContentElement {
    const { key, element } = this.preloadImpl(mimetype, url);
    element.remove();
    const clonedElement = element.cloneNode(true) as SupportedContentElement;
    this.container.appendChild(clonedElement);
    this.refs.set(key, clonedElement);
    return element;
  }

  protected static createPreloadingElement(mimetype: string, url: string) {
    const type = mimetype.split('/', 1)[0];
    switch (type) {
      case 'image':
        return Preloader.createPreloadingImage(url);
      case 'video':
        return Preloader.createPreloadingVideo(url);
      default:
        throw new TypeError(`Unsupported MIME type: ${type} (${mimetype})`);
    }
  }

  protected static createPreloadingImage(url: string): HTMLImageElement {
    const { href } = new URL(url);
    const image = new Image();
    image.src = href;
    return image;
  }

  protected static createPreloadingVideo(url: string): HTMLVideoElement {
    const video = document.createElement('video');
    video.preload = 'auto';
    video.src = url;
    video.autoplay = false;
    return video;
  }

  protected unrefImpl(...keys: string[]) {
    keys.forEach((key) => {
      const element = this.refs.get(key);
      element?.remove();
      this.refs.delete(key);
    });
  }

  unref(...refs: PreloadItem[]) {
    const keys = refs.map(({ mimetype, url }) => Preloader.key(mimetype, url));
    this.unrefImpl(...keys);
  }

  clear() {
    this.unrefImpl(...this.refs.keys());
  }
}

export default Preloader;
