import cssText from 'bundle-text:../../scss/transition/cross-fade.scss';

import CssBasedTransition, { CssBasedTransitionOptions } from './css-based';
import { TransitionOptions, TransitionStatic } from './transition';
import { staticImplements } from '../util/types';
import { setCSSPropertyIfDefined } from '../util/style';

type CrossFadeTransitionOptions = TransitionOptions;

@staticImplements<
  TransitionStatic<CrossFadeTransition, CrossFadeTransitionOptions>
>()
export default class CrossFadeTransition extends CssBasedTransition {
  constructor(element: HTMLElement, options: CrossFadeTransitionOptions) {
    super(
      element,
      CrossFadeTransition.createCssBasedTransitionOptions(options),
    );
  }

  static createCssBasedTransitionOptions(
    options: CrossFadeTransitionOptions,
  ): CssBasedTransitionOptions {
    const animationEventFilter = ({ animationName }: AnimationEvent) =>
      animationName === 'transition-cross-fade';

    const cssPropertySetter = (e: HTMLElement) => {
      const { delay, duration } = options;
      const s = setCSSPropertyIfDefined;
      s(e, '--transition-cross-fade-delay', (v) => `${v}s`, delay);
      s(e, '--transition-cross-fade-duration', (v) => `${v}s`, duration);
    };

    const cssPropertyRemover = (e: HTMLElement) => {
      const propertyNames = [
        '--transition-cross-fade-delay',
        '--transition-cross-fade-duration',
      ];
      propertyNames.forEach((n) => e.style.removeProperty(n));
    };

    return {
      classList: ['transition', 'transition-cross-fade'],
      endEventFilter: animationEventFilter,
      cancelEventFilter: animationEventFilter,
      cssPropertySetter,
      cssPropertyRemover,
      removeAtEnd: true,
      removeOnCancel: true,
    };
  }

  static unpack(options: unknown): CrossFadeTransitionOptions {
    return options as CrossFadeTransitionOptions;
  }

  static prepare(
    options: unknown,
  ): (element: HTMLElement) => CrossFadeTransition {
    const unpackedOptions = CrossFadeTransition.unpack(options);
    return (element: HTMLElement) =>
      new CrossFadeTransition(element, unpackedOptions);
  }

  static getStyleSheetAsString(): string {
    return cssText;
  }
}

export { CrossFadeTransition, CrossFadeTransitionOptions };
