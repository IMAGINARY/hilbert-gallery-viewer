import CssBasedAnimation, {
  CssBasedAnimationOptions,
  cssBasedAnimationOptionsDefaults,
} from '../animation/css-based';
import { Transition } from './transition';
import { PromiseExecutorCallbacks } from '../util/promise';
import { OptionalKeys } from '../util/types';

interface CssBasedTransitionOptions extends CssBasedAnimationOptions {
  targetShowUpDelay: number;
  outEndEventFilter?: (e: AnimationEvent) => boolean;
}

const cssBasedTransitionOptionsDefaults: () => Required<
  Pick<CssBasedTransitionOptions, OptionalKeys<CssBasedTransitionOptions>>
> = () => ({
  ...cssBasedAnimationOptionsDefaults(),
  outEndEventFilter: () => true,
});

abstract class CssBasedTransition
  extends CssBasedAnimation
  implements Transition
{
  readonly targetShowUpDelay: number;

  protected _isOut = false;

  protected outPEC: PromiseExecutorCallbacks<void>;

  protected outEndHandler: (event: AnimationEvent) => void;

  protected constructor(
    content: HTMLElement,
    options: CssBasedTransitionOptions,
  ) {
    super(content, options);
    this.targetShowUpDelay = options.targetShowUpDelay;

    this.outPEC = new PromiseExecutorCallbacks<void>();

    // prevent uncaught exceptions in promise
    this.outPEC.promise().catch(() => {});

    const { outEndEventFilter } = {
      ...cssBasedTransitionOptionsDefaults(),
      ...options,
    };

    this.outEndHandler = (ae) => {
      if (outEndEventFilter(ae)) {
        this.outEnd();
      }
    };

    content.addEventListener('animationend', this.outEndHandler);
  }

  protected outEnd() {
    if (!this.isCancelled() && !this.isOut()) {
      this.element.removeEventListener('animationend', this.outEndHandler);
      this._isOut = true;
      this.outPEC.resolve();
    }
  }

  out(): Promise<void> {
    return this.outPEC.promise();
  }

  isOut(): boolean {
    return this._isOut;
  }

  cancel() {
    if (!this.isCancelled() && !this.isDone()) {
      this.outPEC.reject();
      super.cancel();
    }
  }
}

export default CssBasedTransition;
export { CssBasedTransitionOptions, cssBasedTransitionOptionsDefaults };
