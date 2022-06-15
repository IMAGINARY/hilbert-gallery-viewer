export default class Preloader {
  protected refs = new Map<string, unknown>();

  preloadImage(url: URL | string): void {
    const { href } = new URL(url);
    const image = new Image();
    image.src = href;
    this.refs.set(href, image);
  }

  preloadVideo(url: URL | string) {
    const { href } = new URL(url);
    const video = new HTMLVideoElement();
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
