import cssText from 'bundle-text:../../scss/animation/none.scss';

import { BaseAnimation } from './base';
import { AnimationOptions, AnimationStatic } from './animation';
import { staticImplements } from '../util/types';
import { setCSSPropertyIfDefined } from '../util/style';

type NoneAnimationOptions = AnimationOptions;

@staticImplements<AnimationStatic<NoneAnimation, NoneAnimationOptions>>()
class NoneAnimation extends BaseAnimation {
  protected endHandler: (event: AnimationEvent) => void;

  protected cancelHandler: (event: AnimationEvent) => void;

  constructor(
    wrapper: HTMLDivElement,
    content: HTMLElement,
    options: NoneAnimationOptions,
  ) {
    super(wrapper, content);

    this.wrapper.classList.add('animation-none');

    this.setDefinedCssProperties(options);

    this.endHandler = ({ animationName }) => {
      if (animationName === 'animation-none') {
        this.end();
      }
    };
    this.cancelHandler = ({ animationName }) => {
      if (animationName === 'animation-none') {
        this.cancel();
      }
    };

    this.wrapper.addEventListener('animationend', this.endHandler);
    this.wrapper.addEventListener('animationcancel', this.cancelHandler);
  }

  protected setDefinedCssProperties(options: NoneAnimationOptions) {
    const { delay, duration } = options;

    const { wrapper: w } = this;
    const s = setCSSPropertyIfDefined;
    s(w, '--animation-none', (v) => `${v}s`, delay);
    s(w, '--animation-none', (v) => `${v}s`, duration);
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
    const { wrapper } = this;

    wrapper.removeEventListener('animationend', this.endHandler);
    wrapper.removeEventListener('animationcancel', this.cancelHandler);

    /**
     * We do not remove the CSS classes and custom properties to keep the
     * forwards fill-mode of the animation (target state).
     */
  }

  static unpack(options: unknown): NoneAnimationOptions {
    return options as NoneAnimationOptions;
  }

  static prepare(
    options: unknown,
  ): (wrapper: HTMLDivElement, content: HTMLElement) => NoneAnimation {
    const unpackedOptions = NoneAnimation.unpack(options);
    return (wrapper: HTMLDivElement, content: HTMLElement) =>
      new NoneAnimation(wrapper, content, unpackedOptions);
  }

  static getStyleSheetAsString(): string {
    return cssText;
  }
}

export { NoneAnimation };
