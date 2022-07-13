import cssText from 'bundle-text:../../scss/transition/fade.scss';

import { JSONSchemaType } from 'ajv';

import CssBasedTransition, { CssBasedTransitionOptions } from './css-based';
import { TransitionOptions, TransitionStatic } from './transition';
import { staticImplements } from '../util/types';
import { setCSSPropertyIfDefined } from '../util/style';
import { ajvCompile } from '../util/validate';

interface FadeTransitionOptions extends TransitionOptions {
  color?: string;
}

// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const fadeTransitionOptionsSchema = {
  type: 'object',
  properties: {
    delay: { type: 'number', minimum: 0 },
    duration: { type: 'number', minimum: 0 },
    color: { type: 'string' },
  },
} as JSONSchemaType<FadeTransitionOptions>;

const validateFadeTransitionOptions = ajvCompile(fadeTransitionOptionsSchema);

@staticImplements<TransitionStatic<FadeTransition, FadeTransitionOptions>>()
export default class FadeTransition extends CssBasedTransition {
  constructor(element: HTMLElement, options: FadeTransitionOptions) {
    super(element, FadeTransition.createCssBasedTransitionOptions(options));
  }

  static createCssBasedTransitionOptions(
    options: FadeTransitionOptions,
  ): CssBasedTransitionOptions {
    /*    const animationEventFilter = ({
      animationName,
      pseudoElement,
    }: AnimationEvent) =>
      animationName === 'transition-fade' && pseudoElement === '';
    */
    const animationEventFilter = (ae: AnimationEvent) => {
      const { animationName, pseudoElement } = ae;
      console.log(ae);
      return animationName === 'transition-fade' && pseudoElement === '';
    };
    const cssPropertySetter = (e: HTMLElement) => {
      const { delay, duration } = options;
      const s = setCSSPropertyIfDefined;
      s(e, '--transition-fade-delay', (v) => `${v}s`, delay);
      s(e, '--transition-fade-duration', (v) => `${v}s`, duration);
    };

    const cssPropertyRemover = (e: HTMLElement) => {
      const propertyNames = [
        '--transition-fade-delay',
        '--transition-fade-duration',
      ];
      propertyNames.forEach((n) => e.style.removeProperty(n));
    };

    return {
      classList: ['transition', 'transition-fade'],
      endEventFilter: animationEventFilter,
      cancelEventFilter: animationEventFilter,
      cssPropertySetter,
      cssPropertyRemover,
      removeAtEnd: true,
      removeOnCancel: true,
    };
  }

  static unpack(options: unknown): FadeTransitionOptions {
    return validateFadeTransitionOptions(options);
  }

  static prepare(options: unknown): (element: HTMLElement) => FadeTransition {
    const unpackedOptions = FadeTransition.unpack(options);
    return (element: HTMLElement) =>
      new FadeTransition(element, unpackedOptions);
  }

  static getStyleSheetAsString(): string {
    return cssText;
  }
}

export { FadeTransition, FadeTransitionOptions };
