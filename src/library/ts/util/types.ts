/* eslint-disable import/prefer-default-export */
import { Log } from './log';

/* class decorator for ensuring static elements on classes */
function staticImplements<T>() {
  return <U extends T>(constructor: U) => constructor;
}

type State = {
  log: Log;
  shadowRoot: ShadowRoot;
  container: HTMLDivElement;
};

export { staticImplements, State };
