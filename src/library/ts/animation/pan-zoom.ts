import cssText from 'bundle-text:../../scss/animation/pan-zoom.scss';

import { BaseAnimation } from './base';
import { AnimationStatic } from './animation';
import { RequireOnlyOne, staticImplements } from '../util/types';

type View = {
  x: number;
  y: number;
  scale: number;
};

type PanZoomAnimationOptions = {
  duration: number;
  from?: Partial<View>;
  to?: Partial<View>;
};

function setCSSPropertyIfDefined<T>(
  elem: HTMLElement,
  property: string,
  formatter: (v: Exclude<T, undefined>) => string,
  value: T,
) {
  if (typeof value !== 'undefined')
    elem.style.setProperty(property, formatter(value as Exclude<T, undefined>));
}

// @staticImplements<AnimationStatic<PanZoomAnimation, PanZoomAnimationOptions>>()
export default class PanZoomAnimation extends BaseAnimation {
  protected endHandler: (event: AnimationEvent) => void;

  protected cancelHandler: (event: AnimationEvent) => void;

  constructor(
    wrapper: HTMLDivElement,
    content: HTMLElement,
    options: PanZoomAnimationOptions,
  ) {
    super(wrapper, content);
    this.endHandler = () => {};
    this.cancelHandler = () => {};

    this.wrapper.classList.add('animation-pan-zoom');

    const { duration, from, to } = options;
    this.setDefinedCssProperties(duration, from ?? {}, to ?? {});

    this.endHandler = ({ animationName }) => {
      if (animationName === 'animation-pan-zoom-animation') {
        this.end();
      }
    };
    this.cancelHandler = ({ animationName }) => {
      if (animationName === 'animation-pan-zoom-animation') {
        this.cancel();
      }
    };

    this.wrapper.addEventListener('animationend', this.endHandler);
    this.wrapper.addEventListener('animationcancel', this.cancelHandler);
  }

  protected setDefinedCssProperties(
    duration: number,
    origin: Partial<View>,
    target: Partial<View>,
  ) {
    const { wrapper: w } = this;
    const s = setCSSPropertyIfDefined;
    s(w, '--animation-pan-zoom-duration', (v) => `${v}s`, duration);
    s(w, '--animation-pan-zoom-origin-x', (v) => `${v}`, origin.x);
    s(w, '--animation-pan-zoom-origin-y', (v) => `${v}`, origin.y);
    s(w, '--animation-pan-zoom-origin-scale', (v) => `${v}`, origin.scale);
    s(w, '--animation-pan-zoom-target-x', (v) => `${v}`, target.x);
    s(w, '--animation-pan-zoom-target-y', (v) => `${v}`, target.y);
    s(w, '--animation-pan-zoom-target-scale', (v) => `${v}`, target.scale);
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

    wrapper.addEventListener('animationend', this.endHandler);
    wrapper.addEventListener('animationcancel', this.cancelHandler);

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
