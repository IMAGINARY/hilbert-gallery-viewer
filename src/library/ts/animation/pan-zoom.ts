// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cssText from 'bundle-text:../../scss/animation/pan-zoom.scss';

import { BaseAnimation } from './base';
import { AnimationStatic } from './animation';
import { RequireOnlyOne, staticImplements } from '../util/types';

type Target = {
  x: number;
  y: number;
  scale: number;
};

type PanZoomAnimationOptions = {
  duration: number;
  from?: RequireOnlyOne<Target>;
  to: RequireOnlyOne<Target>;
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
    this.asyncInit(options).finally(() => {});
  }

  async asyncInit(options: PanZoomAnimationOptions) {
    this.wrapper.classList.add('animation-pan-zoom');

    if (typeof options.from !== 'undefined') {
      try {
        const { from } = options;
        this.setDefinedCssProperties(0, from);

        // let the values settle on the next frame
        await new Promise((resolve) => {
          requestAnimationFrame(resolve);
        });
      } catch (e) {
        // eslint-disable-next-line no-empty
      }
    }

    if (!this.isCancelled()) {
      const { duration, to } = options;
      this.setDefinedCssProperties(duration, to);

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
  }

  protected setDefinedCssProperties(
    duration: number,
    { x, y, scale }: RequireOnlyOne<Target>,
  ) {
    const { wrapper: w } = this;
    const s = setCSSPropertyIfDefined;
    s(w, '--animation-pan-zoom-duration', (v) => `${v}s`, duration);
    s(w, '--animation-pan-zoom-target-x', (v) => `${v}`, x);
    s(w, '--animation-pan-zoom-target-y', (v) => `${v}`, y);
    s(w, '--animation-pan-zoom-target-scale', (v) => `${v}`, scale);
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
    return cssText as string;
  }
}

export { PanZoomAnimation, PanZoomAnimationOptions };
