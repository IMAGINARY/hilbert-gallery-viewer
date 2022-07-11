import cssText from 'bundle-text:../../scss/transition/none.scss';

import { BaseTransition } from './base';
import { TransitionOptions, TransitionStatic } from './transition';
import { staticImplements } from '../util/types';
import { setCSSPropertyIfDefined } from '../util/style';
import { CrossFadeTransitionOptions } from './cross-fade';

type NoneTransitionOptions = TransitionOptions;

// @staticImplements<TransitionStatic<NoneTransition, NoneTransitionOptions>>()
export default class NoneTransition extends BaseTransition {
  protected toEndHandler: (event: AnimationEvent) => void;

  protected toCancelHandler: (event: AnimationEvent) => void;

  constructor(
    container: HTMLDivElement,
    from: HTMLElement,
    to: HTMLElement,
    options: NoneTransitionOptions,
  ) {
    super(container, from, to);

    this.setDefinedCssProperties(options);

    to.classList.add('none');

    this.toEndHandler = ({ animationName }: AnimationEvent) => {
      if (animationName === 'transition-none') {
        this.end();
      }
    };
    this.toCancelHandler = ({ animationName }: AnimationEvent) => {
      if (animationName === 'transition-none') {
        this.cancel();
      }
    };
    to.addEventListener('animationend', this.toEndHandler);
    to.addEventListener('animationcancel', this.toCancelHandler);
  }

  protected setDefinedCssProperties(options: NoneTransitionOptions) {
    const { delay, duration } = options;
    const { container: c } = this;
    const s = setCSSPropertyIfDefined;
    s(c, '--transition-none-delay', (v) => `${v}s`, delay);
    s(c, '--transition-none-duration', (v) => `${v}s`, duration);
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
    style.removeProperty('--transition-none-delay');
    style.removeProperty('--transition-none-duration');

    this.to.classList.remove('none');
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
  ) => NoneTransition {
    const unpackedOptions = NoneTransition.unpack(options);
    return (container: HTMLDivElement, from: HTMLElement, to: HTMLElement) =>
      new NoneTransition(container, from, to, unpackedOptions);
  }

  static getStyleSheetAsString(): string {
    return cssText;
  }
}

export { NoneTransition };
