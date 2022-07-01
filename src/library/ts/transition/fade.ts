// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cssText from 'bundle-text:../../scss/transition/fade.scss';

import { BaseTransition } from './base';
import { TransitionStatic } from './transition';
import { staticImplements } from '../util/types';

type FadeTransitionOptions = {
  duration: number;
  color: string;
};

const defaultOptions: FadeTransitionOptions = {
  duration: 500,
  color: '#000',
};

// @staticImplements<TransitionStatic<FadeTransition, FadeTransitionOptions>>()
export default class FadeTransition extends BaseTransition {
  protected toEndHandler: (event: AnimationEvent) => void;

  protected toCancelHandler: (event: AnimationEvent) => void;

  constructor(
    container: HTMLDivElement,
    from: HTMLElement,
    to: HTMLElement,
    options: FadeTransitionOptions,
  ) {
    super(container, from, to);

    const { duration, color } = { ...defaultOptions, ...(options ?? {}) };

    const { style } = container;
    style.setProperty('--transition-fade-duration', `${duration}s`);
    style.setProperty('--transition-fade-color', `${color}`);

    to.classList.add('fade');

    this.toEndHandler = ({ animationName, pseudoElement }: AnimationEvent) => {
      if (animationName === 'transition-fade-in') {
        if (pseudoElement === '::before') {
          this.targetVisiblePEC.resolve();
        } else {
          this.end();
        }
      }
    };
    this.toCancelHandler = ({ animationName }: AnimationEvent) => {
      if (animationName === 'transition-fade-in') {
        this.cancel();
      }
    };
    to.addEventListener('animationend', this.toEndHandler);
    to.addEventListener('animationcancel', this.toCancelHandler);
  }

  protected end(): void {
    if (!this.isCancelled() && !this.isDone()) {
      this.cleanup();
      this._isDone = true;
      this.targetVisiblePEC.resolve();
      this.donePEC.resolve();
    }
  }

  cancel(): void {
    if (!this.isCancelled() && !this.isDone()) {
      this.cleanup();
      this._isCancelled = true;
      this.targetVisiblePEC.resolve();
      this.donePEC.reject();
    }
  }

  protected cleanup() {
    this.to.removeEventListener('animationend', this.toEndHandler);
    this.to.removeEventListener('animationcancel', this.toCancelHandler);

    const { style } = this.container;
    style.removeProperty('--transition-fade-duration');
    style.removeProperty('--transition-fade-color');

    this.from.classList.remove('fade');

    this.to.classList.remove('fade');
  }

  static unpack(options: unknown): FadeTransitionOptions {
    return options as FadeTransitionOptions;
  }

  static prepare(
    options: unknown,
  ): (
    container: HTMLDivElement,
    from: HTMLElement,
    to: HTMLElement,
  ) => FadeTransition {
    const unpackedOptions = FadeTransition.unpack(options);
    return (container: HTMLDivElement, from: HTMLElement, to: HTMLElement) =>
      new FadeTransition(container, from, to, unpackedOptions);
  }

  static getStyleSheetAsString(): string {
    return cssText as string;
  }
}

export { FadeTransition, FadeTransitionOptions };
