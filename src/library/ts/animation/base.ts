import { Animation } from './animation';
import { PromiseExecutorCallbacks } from '../util/promise';

export default abstract class BaseAnimation implements Animation {
  public readonly element: HTMLElement;

  protected _isCancelled = false;

  protected _isDone = false;

  protected donePEC: PromiseExecutorCallbacks<void>;

  protected constructor(element: HTMLElement) {
    this.element = element;

    this.donePEC = new PromiseExecutorCallbacks<void>();

    // prevent uncaught exceptions in promise
    this.donePEC.promise().catch(() => {});
  }

  abstract cancel(): void;

  isCancelled(): boolean {
    return this._isCancelled;
  }

  done(): Promise<void> {
    return this.donePEC.promise();
  }

  isDone(): boolean {
    return this._isDone;
  }
}

export { BaseAnimation };
