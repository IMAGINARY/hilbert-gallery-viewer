import { BaseTransition } from './base';
import { State } from '../util/types';

type FadeTransitionOptions = {
  duration: number;
  color: string;
};

const defaultOptions = {
  duration: 500,
  background: '#000',
};

export default class FadeTransition extends BaseTransition<
  Partial<FadeTransitionOptions>
> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(state: State) {
    super(state);
  }

  to(content: HTMLElement, options?: Partial<FadeTransitionOptions>): void {
    const { duration, background } = { ...defaultOptions, ...(options ?? {}) };

    const { children } = this.state.layers;
    for (let i = 0; i < children.length; i += 1) {
      const prevTransitionWrapper = children[i] as HTMLDivElement;
      prevTransitionWrapper.style.setProperty(
        '--transition-fade-duration',
        `${duration}s`,
      );
      prevTransitionWrapper.classList.add('fade');
      prevTransitionWrapper.classList.add('fade-out');
    }

    const transitionWrapper = this.addLayer(content);
    transitionWrapper.style.setProperty(
      '--fade-transition-duration',
      `${duration}s`,
    );
    transitionWrapper.style.setProperty(
      '--fade-transition-background',
      `${background}`,
    );
    transitionWrapper.classList.add('fade');
    transitionWrapper.classList.add('fade-in');
  }
}
