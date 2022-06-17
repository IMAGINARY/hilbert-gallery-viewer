import { Action } from './action';
import { State } from '../util/types';

export default abstract class Base<A, R> implements Action<A, R> {
  protected readonly state: State;

  protected constructor(state: State) {
    this.state = state;
  }

  abstract execute(arg: A): R;

  abstract unpack(arg: unknown): A;

  buildExecutor(arg: unknown): () => R {
    const unpackedArg: A = this.unpack(arg);
    return () => this.execute(unpackedArg);
  }
}

export { Base };
