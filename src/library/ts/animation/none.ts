import cssText from 'bundle-text:../../scss/animation/none.scss';

import { AnimationOptions, AnimationStatic } from './animation';
import { staticImplements } from '../util/types';
import { setCSSPropertyIfDefined } from '../util/style';
import CssBasedAnimation, { CssBasedAnimationOptions } from './css-based';

type NoneAnimationOptions = AnimationOptions;

@staticImplements<AnimationStatic<NoneAnimation, NoneAnimationOptions>>()
class NoneAnimation extends CssBasedAnimation {
  constructor(element: HTMLElement, options: NoneAnimationOptions) {
    super(element, NoneAnimation.createCssBasedAnimationOptions(options));
  }

  static createCssBasedAnimationOptions(
    options: NoneAnimationOptions,
  ): CssBasedAnimationOptions {
    const animationEventFilter = ({ animationName }: AnimationEvent) =>
      animationName === 'animation-none';

    const cssPropertySetter = (e: HTMLElement) => {
      const { delay, duration } = options;
      const s = setCSSPropertyIfDefined;
      s(e, '--animation-none-delay', (v) => `${v}s`, delay);
      s(e, '--animation-none-duration', (v) => `${v}s`, duration);
    };

    const cssPropertyRemover = (e: HTMLElement) => {
      const propertyNames = [
        '--animation-none-delay',
        '--animation-none-duration',
      ];
      propertyNames.forEach((n) => e.style.removeProperty(n));
    };

    return {
      classList: ['animation', 'animation-none'],
      endEventFilter: animationEventFilter,
      cancelEventFilter: animationEventFilter,
      cssPropertySetter,
      cssPropertyRemover,
      removeAtEnd: false,
      removeOnCancel: false,
    };
  }

  static unpack(options: unknown): NoneAnimationOptions {
    return options as NoneAnimationOptions;
  }

  static prepare(options: unknown): (element: HTMLElement) => NoneAnimation {
    const unpackedOptions = NoneAnimation.unpack(options);
    return (element: HTMLElement) =>
      new NoneAnimation(element, unpackedOptions);
  }

  static getStyleSheetAsString(): string {
    return cssText;
  }
}

export { NoneAnimation };
