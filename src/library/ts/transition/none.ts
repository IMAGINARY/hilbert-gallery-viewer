import cssText from 'bundle-text:../../scss/transition/none.scss';

import { JSONSchemaType } from 'ajv';

import CssBasedTransition, { CssBasedTransitionOptions } from './css-based';
import { TransitionOptions, TransitionStatic } from './transition';
import { staticImplements } from '../util/types';
import { setCSSPropertyIfDefined } from '../util/style';
import { ajvCompile } from '../util/validate';

type NoneTransitionOptions = TransitionOptions;

// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const noneTransitionOptionsSchema = {
  type: 'object',
  properties: {
    delay: { type: 'number', minimum: 0 },
    duration: { type: 'number', minimum: 0 },
  },
} as JSONSchemaType<NoneTransitionOptions>;

const validateNoneTransitionOptions = ajvCompile(noneTransitionOptionsSchema);

@staticImplements<TransitionStatic<NoneTransition, NoneTransitionOptions>>()
export default class NoneTransition extends CssBasedTransition {
  readonly targetShowUpDelay: number = 0;

  constructor(element: HTMLElement, options: NoneTransitionOptions) {
    super(element, NoneTransition.createCssBasedTransitionOptions(options));
  }

  static createCssBasedTransitionOptions(
    options: NoneTransitionOptions,
  ): CssBasedTransitionOptions {
    const animationEventFilter = ({ animationName }: AnimationEvent) =>
      animationName === 'transition-none';

    const { delay, duration } = options;

    const cssPropertySetter = (e: HTMLElement) => {
      const s = setCSSPropertyIfDefined;
      s(e, '--transition-none-delay', (v) => `${v}s`, delay);
      s(e, '--transition-none-duration', (v) => `${v}s`, duration);
    };

    const cssPropertyRemover = (e: HTMLElement) => {
      const propertyNames = [
        '--transition-none-delay',
        '--transition-none-duration',
      ];
      propertyNames.forEach((n) => e.style.removeProperty(n));
    };

    return {
      classList: ['transition', 'transition-none'],
      endEventFilter: animationEventFilter,
      cancelEventFilter: animationEventFilter,
      cssPropertySetter,
      cssPropertyRemover,
      removeAtEnd: true,
      removeOnCancel: true,
      targetShowUpDelay: delay ?? 0,
    };
  }

  static unpack(options: unknown): NoneTransitionOptions {
    return validateNoneTransitionOptions(options);
  }

  static prepare(options: unknown): (element: HTMLElement) => NoneTransition {
    const unpackedOptions = NoneTransition.unpack(options);
    return (element: HTMLElement) =>
      new NoneTransition(element, unpackedOptions);
  }

  static getStyleSheetAsString(): string {
    return cssText;
  }
}

export { NoneTransition };
