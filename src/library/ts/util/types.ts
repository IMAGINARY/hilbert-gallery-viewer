/* eslint-disable import/prefer-default-export */
import { Log } from './log';
import type TransitionFactory from '../transition/factory';
import type AnimationFactory from '../animation/factory';
import type HilbertGalleryViewer from '../hilbert-gallery-viewer';
import { Transition } from '../transition/transition';
import { Animation } from '../animation/animation';
import { type SupportedContentElement } from './content-creator';

/* class decorator for ensuring static elements on classes */
function staticImplements<T>() {
  return <U extends T>(constructor: U) => constructor;
}

type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

type DOMStructure = {
  slideOuterWrapperElement: HTMLDivElement;
  slideInnerWrapperElement: HTMLDivElement;
  slideElement: HTMLDivElement;
  contentElement: SupportedContentElement;
};

type SlideData = DOMStructure & {
  transition: Transition;
  animation: Animation;
  contentPlayTimeoutId: ReturnType<typeof setTimeout>;
};

type State = {
  viewer: HilbertGalleryViewer;
  log: Log;
  shadowRoot: ShadowRoot;
  container: HTMLDivElement;
  activeSlides: SlideData[];
  transitionFactory: TransitionFactory;
  animationFactory: AnimationFactory;
  muted: boolean;
};

type RequiredKeys<T> = {
  [K in keyof T]-?: Record<string, never> extends Pick<T, K> ? never : K;
}[keyof T];

type OptionalKeys<T> = {
  [K in keyof T]-?: Record<string, never> extends Pick<T, K> ? K : never;
}[keyof T];

type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

/**
 * This function can be used to check if the type of a variable has been
 * narrowed down to the `never` type, i.e. that at the time of calling this
 * function, all other possible types have been covered beforehand.
 * @param n The variable to check for the `never` type.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function exhaustiveTypeCheck<T>(n: never): T {
  throw new TypeError(
    'This function should never be called. If it has been called, your type narrowing is incomplete.',
  );
}

export {
  staticImplements,
  RequireOnlyOne,
  Optional,
  DOMStructure,
  SlideData,
  State,
  RequiredKeys,
  OptionalKeys,
  AtLeast,
  exhaustiveTypeCheck,
};
