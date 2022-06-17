import { Action } from './action';
import { Scope } from '../util/types';

export default abstract class Base<A, R> implements Action<A, R> {
  protected readonly scope: Scope;

  protected constructor(scope: Scope) {
    this.scope = scope;
  }

  abstract execute(arg: A): R;

  abstract unpack(arg: unknown): A;

  buildExecutor(arg: unknown): () => R {
    const unpackedArg: A = this.unpack(arg);
    return () => this.execute(unpackedArg);
  }
}

export { Base };
