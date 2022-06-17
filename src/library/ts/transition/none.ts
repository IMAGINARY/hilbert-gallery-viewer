import { BaseTransition } from './base';
import { State } from '../util/types';

type NoneTransitionOptions = Record<string, never>;

export default class NoneTransition extends BaseTransition<NoneTransitionOptions> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(state: State) {
    super(state);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  to(content: HTMLElement, options: NoneTransitionOptions = {}): void {
    this.addLayer(content);

    if (content.tagName === 'IMG') {
      const image = content as HTMLImageElement;
      if (image.complete) {
        this.done();
      } else {
        const handler = () => {
          image.removeEventListener('load', handler);
          image.removeEventListener('error', handler);
          requestAnimationFrame(() => this.done());
        };
        image.addEventListener('load', handler);
        image.addEventListener('error', handler);
      }
    } else {
      // consider the transition done after a grace period of 2s
      setTimeout(() => this.done(), 2000);
    }
  }
}

export { NoneTransition };
