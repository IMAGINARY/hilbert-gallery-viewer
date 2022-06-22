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

type State = {
  log: Log;
  shadowRoot: ShadowRoot;
  container: HTMLDivElement;
};

export { staticImplements, RequireOnlyOne, State };
