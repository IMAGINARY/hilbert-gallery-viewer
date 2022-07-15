import { Animation, AnimationOptions } from '../animation/animation';

interface Transition extends Animation {
  readonly targetShowUpDelay: number;
}

type TransitionOptions = AnimationOptions;

interface TransitionStatic<T extends Transition, O extends TransitionOptions> {
  new (element: HTMLElement, options: O): T;
  unpack(options: unknown): O;
  prepare(options: unknown): (element: HTMLElement) => T;
  getStyleSheetAsString(): string;
}

export { Transition, TransitionOptions, TransitionStatic };
