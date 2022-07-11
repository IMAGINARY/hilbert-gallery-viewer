import cssText from 'bundle-text:../../scss/transition/fade.scss';

import { BaseTransition } from './base';
import { TransitionOptions, TransitionStatic } from './transition';
import { staticImplements } from '../util/types';
import { setCSSPropertyIfDefined } from '../util/style';

interface FadeTransitionOptions extends TransitionOptions {
  color?: string;
}

@staticImplements<TransitionStatic<FadeTransition, FadeTransitionOptions>>()
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

    this.setDefinedCssProperties(options);

    to.classList.add('fade');

    this.toEndHandler = ({ animationName, pseudoElement }: AnimationEvent) => {
      if (animationName === 'transition-fade') {
        if (pseudoElement === '::before') {
          this.targetVisiblePEC.resolve();
        } else {
          this.end();
        }
      }
    };
    this.toCancelHandler = ({ animationName }: AnimationEvent) => {
      if (animationName === 'transition-fade') {
        this.cancel();
      }
    };
    to.addEventListener('animationend', this.toEndHandler);
    to.addEventListener('animationcancel', this.toCancelHandler);
  }

  protected setDefinedCssProperties(options: FadeTransitionOptions) {
    const { delay, duration } = options;
    const { container: c } = this;
    const s = setCSSPropertyIfDefined;
    s(c, '--transition-fade-delay', (v) => `${v}s`, delay);
    s(c, '--transition-fade-duration', (v) => `${v}s`, duration);
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
    return cssText;
  }
}

export { FadeTransition, FadeTransitionOptions };
