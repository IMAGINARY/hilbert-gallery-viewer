import { exhaustiveTypeCheck, SupportedContentElement } from './types';
import Preloader from './preloader';

type Size = { width: number; height: number };

class ContentCreator {
  public static create(
    mimetype: string,
    url: string,
    preloader = new Preloader(),
  ): SupportedContentElement {
    return preloader.get(mimetype, url);
  }

  public static async readyForDisplay<T extends SupportedContentElement>(
    content: T,
  ): Promise<T> {
    if (ContentCreator.isImage(content)) {
      await ContentCreator.readyForDisplayImage(content);
    } else if (ContentCreator.isVideo(content)) {
      await ContentCreator.readyForDisplayVideo(content);
    } else {
      exhaustiveTypeCheck(content);
    }
    return content;
  }

  protected static async readyForDisplayImage<T extends HTMLImageElement>(
    image: T,
  ): Promise<T> {
    if (!image.complete)
      await ContentCreator.waitForEvents(image, ['load'], ['abort', 'error']);
    return image;
  }

  protected static async readyForDisplayVideo<T extends HTMLVideoElement>(
    video: T,
  ): Promise<T> {
    if (video.readyState < HTMLMediaElement.HAVE_ENOUGH_DATA) {
      await ContentCreator.waitForEvents(
        video,
        ['canplaythrough'],
        ['abort', 'error'],
      );
    }
    return video;
  }

  public static play<T extends SupportedContentElement>(content: T): T {
    if (ContentCreator.isImage(content)) {
      // NOOP
      return content;
    }
    if (ContentCreator.isVideo(content)) {
      content.play().finally(() => {});
      return content;
    }
    return exhaustiveTypeCheck<T>(content);
  }

  public static setVolume<T extends SupportedContentElement>(
    content: T,
    volume: number,
    mode: 'absolute' | 'relative',
  ): T {
    if (ContentCreator.isImage(content)) {
      // NOOP
      return content;
    }
    if (ContentCreator.isVideo(content)) {
      switch (mode) {
        case 'absolute':
          // eslint-disable-next-line no-param-reassign
          content.volume = Math.min(1, Math.max(volume, 0));
          break;
        case 'relative':
          // eslint-disable-next-line no-param-reassign
          content.volume = Math.min(1, Math.max(content.volume * volume, 0));
          break;
        default:
          exhaustiveTypeCheck<T>(mode);
      }

      return content;
    }
    return exhaustiveTypeCheck<T>(content);
  }

  public static setMuted<T extends SupportedContentElement>(
    content: T,
    value: boolean,
  ): T {
    if (ContentCreator.isImage(content)) {
      // NOOP
      return content;
    }
    if (ContentCreator.isVideo(content)) {
      // eslint-disable-next-line no-param-reassign
      content.muted = value;
      return content;
    }
    return exhaustiveTypeCheck<T>(content);
  }

  public static async getDimensions<T extends SupportedContentElement>(
    content: T,
  ): Promise<Size> {
    if (ContentCreator.isImage(content)) {
      return ContentCreator.getDimensionsImage(content);
    }
    if (ContentCreator.isVideo(content)) {
      return ContentCreator.getDimensionsVideo(content);
    }
    return exhaustiveTypeCheck<Size>(content);
  }

  protected static async getDimensionsImage<T extends HTMLImageElement>(
    image: T,
  ): Promise<Size> {
    if (!image.complete)
      await ContentCreator.waitForEvents(image, ['load'], ['abort', 'error']);
    return { width: image.naturalWidth, height: image.naturalHeight };
  }

  protected static async getDimensionsVideo<T extends HTMLVideoElement>(
    video: T,
  ): Promise<Size> {
    if (video.readyState < HTMLMediaElement.HAVE_METADATA) {
      await ContentCreator.waitForEvents(
        video,
        ['loadedmetadata'],
        ['abort', 'error'],
      );
    }
    return { width: video.videoWidth, height: video.videoHeight };
  }

  protected static async waitForEvents<T extends HTMLElement>(
    element: T,
    resolveEventNames: string[],
    rejectEventNames: string[],
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const [resolveHandler, rejectHandler] = [
        () => {
          resolveEventNames.forEach((name) =>
            element.removeEventListener(name, resolveHandler),
          );
          rejectEventNames.forEach((name) =>
            element.removeEventListener(name, rejectHandler),
          );
          resolve(element);
        },
        (e: Event) => {
          resolveEventNames.forEach((name) =>
            element.removeEventListener(name, resolveHandler),
          );
          rejectEventNames.forEach((name) =>
            element.removeEventListener(name, rejectHandler),
          );
          reject(e);
        },
      ];
      resolveEventNames.forEach((e) =>
        element.addEventListener(e, resolveHandler),
      );
      rejectEventNames.forEach((e) =>
        element.addEventListener(e, rejectHandler),
      );
    });
  }

  public static isImage(element: HTMLElement): element is HTMLImageElement {
    return element instanceof HTMLImageElement;
  }

  public static isVideo(element: HTMLElement): element is HTMLVideoElement {
    return element instanceof HTMLVideoElement;
  }
}

export default ContentCreator;
export { SupportedContentElement, Size };
