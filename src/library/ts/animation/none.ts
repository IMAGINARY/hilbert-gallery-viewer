import { BaseAnimation } from './base';
import { AnimationStatic } from './animation';
import { staticImplements } from '../util/types';

// @staticImplements<AnimationStatic<NoneAnimation, void>>()
class NoneAnimation extends BaseAnimation {
  constructor(
    wrapper: HTMLDivElement = document.createElement('div'),
    content: HTMLElement = document.createElement('div'),
  ) {
    super(wrapper, content);
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
    wrapper: HTMLDivElement,
    content: HTMLElement,
  ) => NoneAnimation {
    return (wrapper: HTMLDivElement, content: HTMLElement) =>
      new NoneAnimation(wrapper, content);
  }

  static getStyleSheetAsString(): string {
    return '';
  }
}

export { NoneAnimation };
