import CssBasedAnimation, {
  CssBasedAnimationOptions,
} from '../animation/css-based';
import { Transition } from './transition';

abstract class CssBasedTransition
  extends CssBasedAnimation
  implements Transition
{
  readonly targetShowUpDelay: number;

  protected constructor(
    content: HTMLElement,
    options: CssBasedTransitionOptions,
  ) {
    super(content, options);
    this.targetShowUpDelay = options.targetShowUpDelay;
  }
}

interface CssBasedTransitionOptions extends CssBasedAnimationOptions {
  targetShowUpDelay: number;
}

export default CssBasedTransition;
export { CssBasedTransitionOptions };
