import {
  SupportedContentElement,
  PreloadItem,
  exhaustiveTypeCheck,
} from './types';
import { waitForEvents } from './promise';

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

  public preload(...items: PreloadItem[]): Promise<void>[] {
    return items
      .map(({ mimetype, url }) => this.preloadImpl(mimetype, url))
      .map(({ element }) => Preloader.readyForDisplay(element).then());
  }

  public get(mimetype: string, url: string): SupportedContentElement {
    const { key, element } = this.preloadImpl(mimetype, url);
    element.remove();
    const clonedElement = element.cloneNode(true) as SupportedContentElement;
    this.container.appendChild(clonedElement);
    this.refs.set(key, clonedElement);
    return element;
  }

  public static async readyForDisplay<T extends SupportedContentElement>(
    content: T,
  ): Promise<T> {
    if (content instanceof HTMLImageElement) {
      await Preloader.readyForDisplayImage(content);
    } else if (content instanceof HTMLVideoElement) {
      await Preloader.readyForDisplayVideo(content);
    } else {
      exhaustiveTypeCheck(content);
    }
    return content;
  }

  protected static async readyForDisplayImage<T extends HTMLImageElement>(
    image: T,
  ): Promise<T> {
    if (!image.complete)
      await waitForEvents(image, ['load'], ['abort', 'error']);
    return image;
  }

  protected static async readyForDisplayVideo<T extends HTMLVideoElement>(
    video: T,
  ): Promise<T> {
    if (video.readyState < HTMLMediaElement.HAVE_ENOUGH_DATA) {
      await waitForEvents(video, ['canplaythrough'], ['abort', 'error']);
    }
    return video;
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
