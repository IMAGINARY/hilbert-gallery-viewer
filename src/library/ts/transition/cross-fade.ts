import cssText from 'bundle-text:../../scss/transition/cross-fade.scss';

import { BaseTransition } from './base';
import { TransitionOptions, TransitionStatic } from './transition';
import { staticImplements } from '../util/types';
import { setCSSPropertyIfDefined } from '../util/style';

type CrossFadeTransitionOptions = TransitionOptions;

@staticImplements<
  TransitionStatic<CrossFadeTransition, CrossFadeTransitionOptions>
>()
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

    this.setDefinedCssProperties(options);

    to.classList.add('cross-fade');

    this.toEndHandler = ({ animationName }: AnimationEvent) => {
      if (animationName === 'transition-cross-fade') {
        this.end();
      }
    };
    this.toCancelHandler = ({ animationName }: AnimationEvent) => {
      if (animationName === 'transition-cross-fade') {
        this.cancel();
      }
    };
    to.addEventListener('animationend', this.toEndHandler);
    to.addEventListener('animationcancel', this.toCancelHandler);
  }

  protected setDefinedCssProperties(options: CrossFadeTransitionOptions) {
    const { delay, duration } = options;
    const { container: c } = this;
    const s = setCSSPropertyIfDefined;
    s(c, '--transition-cross-fade-delay', (v) => `${v}s`, delay);
    s(c, '--transition-cross-fade-duration', (v) => `${v}s`, duration);
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
    style.removeProperty('--transition-cross-fade-delay');
    style.removeProperty('--transition-cross-fade-duration');

    this.to.classList.remove('cross-fade');
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
    return cssText;
  }
}

export { CrossFadeTransition, CrossFadeTransitionOptions };
