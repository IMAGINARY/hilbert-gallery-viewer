import cssText from 'bundle-text:../../scss/animation/pan-zoom.scss';

import { AnimationOptions, AnimationStatic } from './animation';
import CssBasedAnimation, { CssBasedAnimationOptions } from './css-based';
import { staticImplements } from '../util/types';
import { setCSSPropertyIfDefined } from '../util/style';
import { ajvCompile, JSONSchemaType } from '../util/validate';

type View = {
  x: number;
  y: number;
  scale: number;
};

interface PanZoomAnimationOptions extends AnimationOptions {
  from?: Partial<View>;
  to?: Partial<View>;
}

// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const partialViewSchema = {
  type: 'object',
  properties: {
    x: { type: 'number' },
    y: { type: 'number' },
    scale: { type: 'number', minimum: 0 },
  },
} as JSONSchemaType<PanZoomAnimationOptions['from']>;

// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const panZoomAnimationOptionsSchema = {
  type: 'object',
  properties: {
    delay: { type: 'number', minimum: 0 },
    duration: { type: 'number', minimum: 0 },
    from: partialViewSchema,
    to: partialViewSchema,
  },
} as JSONSchemaType<PanZoomAnimationOptions>;

const validatePanZoomAnimationOptions = ajvCompile(
  panZoomAnimationOptionsSchema,
);

@staticImplements<AnimationStatic<PanZoomAnimation, PanZoomAnimationOptions>>()
export default class PanZoomAnimation extends CssBasedAnimation {
  constructor(content: HTMLElement, options: PanZoomAnimationOptions) {
    super(content, PanZoomAnimation.createCssBasedAnimationOptions(options));
  }

  static createCssBasedAnimationOptions(
    options: PanZoomAnimationOptions,
  ): CssBasedAnimationOptions {
    const animationEventFilter = ({ animationName }: AnimationEvent) =>
      animationName === 'animation-pan-zoom';

    const cssPropertySetter = (e: HTMLElement) => {
      const { delay, duration, from, to } = options;
      const s = setCSSPropertyIfDefined;
      s(e, '--animation-pan-zoom-delay', (v) => `${v}s`, delay);
      s(e, '--animation-pan-zoom-duration', (v) => `${v}s`, duration);
      s(e, '--animation-pan-zoom-origin-x', (v) => `${v}`, from?.x);
      s(e, '--animation-pan-zoom-origin-y', (v) => `${v}`, from?.y);
      s(e, '--animation-pan-zoom-origin-scale', (v) => `${v}`, from?.scale);
      s(e, '--animation-pan-zoom-target-x', (v) => `${v}`, to?.x);
      s(e, '--animation-pan-zoom-target-y', (v) => `${v}`, to?.y);
      s(e, '--animation-pan-zoom-target-scale', (v) => `${v}`, to?.scale);
    };

    const cssPropertyRemover = (e: HTMLElement) => {
      const propertyNames = [
        '--animation-pan-zoom-delay',
        '--animation-pan-zoom-duration',
        '--animation-pan-zoom-origin-x',
        '--animation-pan-zoom-origin-y',
        '--animation-pan-zoom-origin-scale',
        '--animation-pan-zoom-target-x',
        '--animation-pan-zoom-target-y',
        '--animation-pan-zoom-target-scale',
      ];
      propertyNames.forEach((n) => e.style.removeProperty(n));
    };

    return {
      classList: ['animation', 'animation-pan-zoom'],
      endEventFilter: animationEventFilter,
      cancelEventFilter: animationEventFilter,
      cssPropertySetter,
      cssPropertyRemover,
      removeAtEnd: false,
      removeOnCancel: false,
    };
  }

  static unpack(options: unknown): PanZoomAnimationOptions {
    return validatePanZoomAnimationOptions(options);
  }

  static prepare(options: unknown): (content: HTMLElement) => PanZoomAnimation {
    const unpackedOptions = PanZoomAnimation.unpack(options);
    return (content: HTMLElement) =>
      new PanZoomAnimation(content, unpackedOptions);
  }

  static getStyleSheetAsString(): string {
    return cssText;
  }
}

export { PanZoomAnimation, PanZoomAnimationOptions };
