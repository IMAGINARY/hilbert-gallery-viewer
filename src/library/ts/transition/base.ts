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
