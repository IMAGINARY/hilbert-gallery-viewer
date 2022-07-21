import { exhaustiveTypeCheck, SupportedContentElement } from './types';
import { waitForEvents } from './promise';
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

  public static play<T extends SupportedContentElement>(content: T): T {
    if (content instanceof HTMLImageElement) {
      // NOOP
      return content;
    }
    if (content instanceof HTMLVideoElement) {
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
    if (content instanceof HTMLImageElement) {
      // NOOP
      return content;
    }
    if (content instanceof HTMLVideoElement) {
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
    if (content instanceof HTMLImageElement) {
      // NOOP
      return content;
    }
    if (content instanceof HTMLVideoElement) {
      // eslint-disable-next-line no-param-reassign
      content.muted = value;
      return content;
    }
    return exhaustiveTypeCheck<T>(content);
  }

  public static async getDimensions<T extends SupportedContentElement>(
    content: T,
  ): Promise<Size> {
    if (content instanceof HTMLImageElement) {
      return ContentCreator.getDimensionsImage(content);
    }
    if (content instanceof HTMLVideoElement) {
      return ContentCreator.getDimensionsVideo(content);
    }
    return exhaustiveTypeCheck<Size>(content);
  }

  protected static async getDimensionsImage<T extends HTMLImageElement>(
    image: T,
  ): Promise<Size> {
    if (!image.complete)
      await waitForEvents(image, ['load'], ['abort', 'error']);
    return { width: image.naturalWidth, height: image.naturalHeight };
  }

  protected static async getDimensionsVideo<T extends HTMLVideoElement>(
    video: T,
  ): Promise<Size> {
    if (video.readyState < HTMLMediaElement.HAVE_METADATA) {
      await waitForEvents(video, ['loadedmetadata'], ['abort', 'error']);
    }
    return { width: video.videoWidth, height: video.videoHeight };
  }
}

export default ContentCreator;
export { SupportedContentElement, Size };
