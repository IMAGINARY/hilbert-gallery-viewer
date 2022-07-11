import cssText from 'bundle-text:../../scss/animation/pan-zoom.scss';

import { AnimationOptions, AnimationStatic } from './animation';
import { staticImplements } from '../util/types';
import { BaseAnimation } from './base';
import { setCSSPropertyIfDefined } from '../util/style';

type View = {
  x: number;
  y: number;
  scale: number;
};

interface PanZoomAnimationOptions extends AnimationOptions {
  from?: Partial<View>;
  to?: Partial<View>;
}

@staticImplements<AnimationStatic<PanZoomAnimation, PanZoomAnimationOptions>>()
export default class PanZoomAnimation extends BaseAnimation {
  protected endHandler: (event: AnimationEvent) => void;

  protected cancelHandler: (event: AnimationEvent) => void;

  constructor(
    wrapper: HTMLDivElement,
    content: HTMLElement,
    options: PanZoomAnimationOptions,
  ) {
    super(wrapper, content);

    this.wrapper.classList.add('animation-pan-zoom');

    this.setDefinedCssProperties(options);

    this.endHandler = ({ animationName }) => {
      if (animationName === 'animation-pan-zoom') {
        this.end();
      }
    };
    this.cancelHandler = ({ animationName }) => {
      if (animationName === 'animation-pan-zoom') {
        this.cancel();
      }
    };

    this.wrapper.addEventListener('animationend', this.endHandler);
    this.wrapper.addEventListener('animationcancel', this.cancelHandler);
  }

  protected setDefinedCssProperties(options: PanZoomAnimationOptions) {
    const { delay, duration, from, to } = options;

    const { wrapper: w } = this;
    const s = setCSSPropertyIfDefined;
    s(w, '--animation-pan-zoom-delay', (v) => `${v}s`, delay);
    s(w, '--animation-pan-zoom-duration', (v) => `${v}s`, duration);
    s(w, '--animation-pan-zoom-origin-x', (v) => `${v}`, from?.x);
    s(w, '--animation-pan-zoom-origin-y', (v) => `${v}`, from?.y);
    s(w, '--animation-pan-zoom-origin-scale', (v) => `${v}`, from?.scale);
    s(w, '--animation-pan-zoom-target-x', (v) => `${v}`, to?.x);
    s(w, '--animation-pan-zoom-target-y', (v) => `${v}`, to?.y);
    s(w, '--animation-pan-zoom-target-scale', (v) => `${v}`, to?.scale);
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

  static unpack(options: unknown): PanZoomAnimationOptions {
    return options as PanZoomAnimationOptions;
  }

  static prepare(
    options: unknown,
  ): (wrapper: HTMLDivElement, content: HTMLElement) => PanZoomAnimation {
    const unpackedOptions = PanZoomAnimation.unpack(options);
    return (wrapper: HTMLDivElement, content: HTMLElement) =>
      new PanZoomAnimation(wrapper, content, unpackedOptions);
  }

  static getStyleSheetAsString(): string {
    return cssText;
  }
}

export { PanZoomAnimation, PanZoomAnimationOptions };
