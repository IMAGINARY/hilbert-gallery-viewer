import { Transition, TransitionStatic } from './transition';
import { NoneTransition } from './none';
import { FadeTransition } from './fade';
import { CrossFadeTransition } from './cross-fade';
import { appendStyle } from '../util/style';

export default class TransitionFactory {
  protected root: DocumentFragment;

  protected transitionRegistry: Map<string, TransitionStatic<Transition, any>> =
    new Map();

  constructor(root: DocumentFragment) {
    this.root = root;
    this.registerKnownTransitions();
  }

  protected registerKnownTransitions() {
    this.register('none', NoneTransition);
    this.register('fade', FadeTransition);
    this.register('cross-fade', CrossFadeTransition);
  }

  public register(
    id: string,
    transitionClass: TransitionStatic<Transition, any>,
  ) {
    if (this.transitionRegistry.has(id)) {
      throw new Error('Transition type already registered');
    }
    appendStyle(
      this.root,
      transitionClass.getStyleSheetAsString(),
      `transition-${id}`,
    );
    this.transitionRegistry.set(id, transitionClass);
  }

  public prepare(
    type = 'none',
    options: unknown = {},
  ): (
    container: HTMLDivElement,
    from: HTMLElement,
    to: HTMLElement,
  ) => Transition {
    const TransitionClass = this.transitionRegistry.get(type);
    if (!TransitionClass) {
      throw new Error(`Unknown transition type: ${type}`);
    }

    // unpacks the options and throws an exception if they are invalid,
    // but does create the actual transition yet
    return TransitionClass.prepare(options);
  }
}

export { TransitionFactory };
