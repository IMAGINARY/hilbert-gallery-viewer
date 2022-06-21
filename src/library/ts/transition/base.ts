import { Transition } from './transition';
import { PromiseExecutorCallbacks } from '../util/promise';

export default abstract class BaseTransition implements Transition {
  protected container: HTMLDivElement;

  protected from: HTMLElement;

  protected to: HTMLElement;

  protected _isCancelled = false;

  protected _isDone = false;

  protected targetVisiblePEC: PromiseExecutorCallbacks<void>;

  protected donePEC: PromiseExecutorCallbacks<void>;

  protected constructor(
    container: HTMLDivElement,
    from: HTMLElement,
    to: HTMLElement,
  ) {
    this.container = container;
    this.from = from;
    this.to = to;

    this.targetVisiblePEC = new PromiseExecutorCallbacks<void>();
    this.donePEC = new PromiseExecutorCallbacks<void>();

    // prevent uncaught exceptions in promise
    this.targetVisiblePEC.promise().catch(() => {});
    this.donePEC.promise().catch(() => {});
  }

  abstract cancel(): void;

  isCancelled(): boolean {
    return this._isCancelled;
  }

  targetVisible(): Promise<void> {
    return this.targetVisiblePEC.promise();
  }

  done(): Promise<void> {
    return this.donePEC.promise();
  }

  isDone(): boolean {
    return this._isDone;
  }
}

export { BaseTransition };
