import cssText from 'bundle-text:../../scss/transition/fade.scss';

import CssBasedTransition, { CssBasedTransitionOptions } from './css-based';
import { TransitionOptions, TransitionStatic } from './transition';
import { staticImplements } from '../util/types';
import { setCSSPropertyIfDefined } from '../util/style';

interface FadeTransitionOptions extends TransitionOptions {
  color?: string;
}

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
    return options as FadeTransitionOptions;
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
