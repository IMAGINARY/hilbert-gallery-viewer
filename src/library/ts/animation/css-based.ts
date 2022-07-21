import { OptionalKeys } from '../util/types';
import { BaseAnimation } from './base';

interface CssBasedAnimationOptions {
  classList?: string[];
  cssPropertySetter?: (e: HTMLElement) => void;
  cssPropertyRemover?: (e: HTMLElement) => void;
  endEventFilter?: (e: AnimationEvent) => boolean;
  cancelEventFilter?: (e: AnimationEvent) => boolean;
  removeAtEnd?: boolean;
  removeOnCancel?: boolean;
}

const cssBasedAnimationOptionsDefaults: () => Required<
  Pick<CssBasedAnimationOptions, OptionalKeys<CssBasedAnimationOptions>>
> = () => ({
  classList: [],
  cssPropertySetter: () => {},
  cssPropertyRemover: () => {},
  endEventFilter: () => true,
  cancelEventFilter: () => true,
  removeAtEnd: true,
  removeOnCancel: true,
});

class CssBasedAnimation extends BaseAnimation {
  protected endHandler: (event: AnimationEvent) => void;

  protected cancelHandler: (event: AnimationEvent) => void;

  protected cssBasedAnimationOptions: Required<CssBasedAnimationOptions>;

  constructor(content: HTMLElement, options: CssBasedAnimationOptions) {
    super(content);

    const { element } = this;

    this.cssBasedAnimationOptions = {
      ...cssBasedAnimationOptionsDefaults(),
      ...options,
    };

    const { cssPropertySetter, endEventFilter, cancelEventFilter } =
      this.cssBasedAnimationOptions;

    this.addClasses();
    cssPropertySetter(element);

    this.endHandler = (ae) => {
      if (endEventFilter(ae)) {
        this.end();
      }
    };
    this.cancelHandler = (ae) => {
      if (cancelEventFilter(ae)) {
        this.cancelled();
      }
    };

    element.addEventListener('animationend', this.endHandler);
    element.addEventListener('animationcancel', this.cancelHandler);
  }

  protected addClasses() {
    const { classList } = this.cssBasedAnimationOptions;
    const { element } = this;
    classList.forEach((c) => element.classList.add(c));
  }

  protected removeClasses() {
    const { classList } = this.cssBasedAnimationOptions;
    const { element } = this;
    classList.forEach((c) => element.classList.remove(c));
  }

  protected end(): void {
    if (!this.isCancelled() && !this.isDone()) {
      this.cleanup(this.cssBasedAnimationOptions.removeAtEnd);
      this._isDone = true;
      this.donePEC.resolve();
    }
  }

  protected cancelled(): void {
    if (!this.isCancelled() && !this.isDone()) {
      this.cleanup(this.cssBasedAnimationOptions.removeOnCancel);
      this._isCancelled = true;
      this.donePEC.reject();
    }
  }

  cancel(): void {
    if (!this.isCancelled() && !this.isDone()) {
      if (this.cssBasedAnimationOptions.removeOnCancel) {
        this.removeClasses();
      } else {
        this.cancelled();
      }
    }
  }

  protected cleanup(removeClassesAndProperties: boolean) {
    const { element, cssBasedAnimationOptions } = this;
    const { cssPropertyRemover } = cssBasedAnimationOptions;
    element.removeEventListener('animationend', this.endHandler);
    element.removeEventListener('animationcancel', this.cancelHandler);
    if (removeClassesAndProperties) {
      this.removeClasses();
      cssPropertyRemover(element);
    } else {
      element.style.animationPlayState = 'paused';
    }
  }
}

export default CssBasedAnimation;
export { CssBasedAnimationOptions, cssBasedAnimationOptionsDefaults };
