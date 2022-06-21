class ContentCreator {
  static create(
    mimetype: string,
    url: string,
    objectFit: 'contain' | 'cover' = 'cover',
  ): HTMLElement {
    const type = mimetype.split('/', 1)[0];
    let content: HTMLElement;
    switch (type) {
      case 'image':
        content = ContentCreator.createImage(url);
        break;
      case 'video':
        content = ContentCreator.createVideo(url);
        break;
      default:
        content = ContentCreator.createObject(mimetype, url);
        break;
    }
    content.classList.add('content');
    content.classList.add(`fit-${objectFit}`);
    return content;
  }

  protected static createObject(
    mimetype: string,
    url: string,
  ): HTMLObjectElement {
    const object = document.createElement('object');
    object.type = mimetype;
    object.data = url;
    return object;
  }

  protected static createImage(url: string): HTMLImageElement {
    const image = document.createElement('img');
    image.src = url;
    return image;
  }

  protected static createVideo(url: string): HTMLVideoElement {
    const video = document.createElement('video');
    video.preload = 'auto';
    video.src = url;
    video.autoplay = false;
    return video;
  }

  public static async awaitLoad<T extends HTMLElement>(content: T): Promise<T> {
    return new Promise((resolve) => {
      if (content.tagName === 'IMG') {
        const image = content as unknown as HTMLImageElement;
        if (image.complete) {
          resolve(content);
        } else {
          const handler = () => {
            image.removeEventListener('load', handler);
            image.removeEventListener('error', handler);
            requestAnimationFrame(() => resolve(content));
          };
          image.addEventListener('load', handler);
          image.addEventListener('error', handler);
        }
      } else {
        // consider the transition-ol done after a grace period of 1s
        setTimeout(() => resolve(content), 1000);
      }
    });
  }

  public static play<T extends HTMLElement>(content: T) {
    if (content.tagName === 'VIDEO') {
      const video = content as unknown as HTMLVideoElement;
      video.play().finally(() => {});
    }
  }
}

export { ContentCreator };
