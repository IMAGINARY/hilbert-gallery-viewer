/* eslint-disable import/prefer-default-export */
import { Log } from './log';

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

type State = {
  log: Log;
  shadowRoot: ShadowRoot;
  container: HTMLDivElement;
};

type RequiredKeys<T> = {
  [K in keyof T]-?: Record<string, never> extends Pick<T, K> ? never : K;
}[keyof T];

type OptionalKeys<T> = {
  [K in keyof T]-?: Record<string, never> extends Pick<T, K> ? K : never;
}[keyof T];

type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export {
  staticImplements,
  RequireOnlyOne,
  Optional,
  State,
  RequiredKeys,
  OptionalKeys,
  AtLeast,
};
