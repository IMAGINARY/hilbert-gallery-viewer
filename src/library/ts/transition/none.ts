import { BaseTransition } from './base';
import { State } from '../util/types';

type NoneTransitionOptions = Record<string, never>;

export default class NoneTransition extends BaseTransition<NoneTransitionOptions> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(state: State) {
    super(state);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  to(content: HTMLElement, options: NoneTransitionOptions = {}): void {
    this.addLayer(content);
  }
}

export { NoneTransition };
