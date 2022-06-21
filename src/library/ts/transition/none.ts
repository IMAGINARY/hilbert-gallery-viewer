import { BaseTransition } from './base';
import { TransitionStatic } from './transition';
import { staticImplements } from '../util/types';

// @staticImplements<TransitionStatic<NoneTransition, void>>()
export default class NoneTransition extends BaseTransition {
  constructor(
    container: HTMLDivElement = document.createElement('div'),
    from: HTMLElement = document.createElement('div'),
    to: HTMLElement = document.createElement('div'),
  ) {
    super(container, from, to);
    this._isCancelled = false;
    this._isDone = true;
  }

  // eslint-disable-next-line class-methods-use-this
  cancel(): void {}

  // eslint-disable-next-line class-methods-use-this
  targetVisible(): Promise<void> {
    return Promise.resolve();
  }

  // eslint-disable-next-line class-methods-use-this
  done(): Promise<void> {
    return Promise.resolve();
  }

  static unpack(): void {}

  static prepare(): (
    container: HTMLDivElement,
    from: HTMLElement,
    to: HTMLElement,
  ) => NoneTransition {
    return (container: HTMLDivElement, from: HTMLElement, to: HTMLElement) =>
      new NoneTransition(container, from, to);
  }

  static getStyleSheetAsString(): string {
    return '';
  }
}

export { NoneTransition };
