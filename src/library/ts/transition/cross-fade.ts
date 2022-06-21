// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cssText from 'bundle-text:../../scss/transition/cross-fade.scss';

import { BaseTransition } from './base';
import { TransitionStatic } from './transition';
import { staticImplements } from '../util/types';

type CrossFadeTransitionOptions = {
  duration: number;
};

const defaultOptions: CrossFadeTransitionOptions = {
  duration: 500,
};

// @staticImplements<TransitionStatic<CrossFadeTransition, CrossFadeTransitionOptions>>()
export default class CrossFadeTransition extends BaseTransition {
  protected toEndHandler: (event: AnimationEvent) => void;

  protected toCancelHandler: (event: AnimationEvent) => void;

  constructor(
    container: HTMLDivElement,
    from: HTMLElement,
    to: HTMLElement,
    options: CrossFadeTransitionOptions,
  ) {
    super(container, from, to);

    const { duration } = { ...defaultOptions, ...(options ?? {}) };

    const { style } = container;
    style.setProperty('--transition-cross-fade-duration', `${duration}s`);

    from.classList.add('cross-fade');
    from.classList.add('cross-fade-out');

    to.classList.add('cross-fade');
    to.classList.add('cross-fade-in');

    this.toEndHandler = ({ animationName }: AnimationEvent) => {
      if (animationName === 'transition-cross-fade-in') {
        this.end();
      }
    };
    this.toCancelHandler = ({ animationName }: AnimationEvent) => {
      if (animationName === 'transition-cross-fade-in') {
        this.cancel();
      }
    };
    to.addEventListener('animationend', this.toEndHandler);
    to.addEventListener('animationcancel', this.toCancelHandler);

    this.targetVisiblePEC.resolve();
  }

  protected end(): void {
    if (!this.isCancelled() && !this.isDone()) {
      this.cleanup();
      this._isDone = true;
      this.donePEC.resolve();
    }
  }

  cancel(): void {
    if (!this.isCancelled() && !this.isDone()) {
      this.cleanup();
      this._isCancelled = true;
      this.donePEC.reject();
    }
  }

  protected cleanup() {
    this.to.removeEventListener('animationend', this.toEndHandler);
    this.to.removeEventListener('animationcancel', this.toCancelHandler);

    const { style } = this.container;
    style.removeProperty('--transition-cross-fade-duration');

    this.from.classList.remove('cross-fade');
    this.from.classList.remove('cross-fade-out');

    this.to.classList.remove('cross-fade');
    this.to.classList.remove('cross-fade-in');
  }

  static unpack(options: unknown): CrossFadeTransitionOptions {
    return options as CrossFadeTransitionOptions;
  }

  static prepare(
    options: unknown,
  ): (
    container: HTMLDivElement,
    from: HTMLElement,
    to: HTMLElement,
  ) => CrossFadeTransition {
    const unpackedOptions = CrossFadeTransition.unpack(options);
    return (container: HTMLDivElement, from: HTMLElement, to: HTMLElement) =>
      new CrossFadeTransition(container, from, to, unpackedOptions);
  }

  static getStyleSheetAsString(): string {
    return cssText as string;
  }
}

export { CrossFadeTransition, CrossFadeTransitionOptions };
