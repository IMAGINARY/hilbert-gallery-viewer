import { Transition } from './transition';
import { State } from '../util/types';

export default abstract class BaseTransition<TransitionOptions>
  implements Transition<TransitionOptions>
{
  protected readonly state: State;

  protected constructor(state: State) {
    this.state = state;
  }

  protected addLayer(content: HTMLElement): HTMLDivElement {
    const transitionWrapper = document.createElement('div');
    transitionWrapper.classList.add('transition');

    const animationWrapper = document.createElement('div');
    animationWrapper.classList.add('animation');
    transitionWrapper.appendChild(animationWrapper);

    animationWrapper.appendChild(content);

    this.state.layers.appendChild(transitionWrapper);

    return transitionWrapper;
  }

  // eslint-disable-next-line class-methods-use-this
  protected async awaitLoad<T extends HTMLElement>(content: T): Promise<T> {
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
        // consider the transition done after a grace period of 1s
        setTimeout(() => resolve(content), 1000);
      }
    });
  }

  protected removeAllButLastLayer() {
    const { layers } = this.state;
    while (layers.children.length > 1) {
      layers.children[0].remove();
    }
  }

  abstract to(content: HTMLElement, options?: TransitionOptions): void;

  done() {
    this.removeAllButLastLayer();
  }
}

export { BaseTransition };
