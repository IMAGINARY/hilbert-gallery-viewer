import { Animation, AnimationStatic } from './animation';
import { appendStyle } from '../util/style';
import { NoneAnimation } from './none';
import { PanZoomAnimation } from './pan-zoom';

class AnimationFactory {
  protected root: DocumentFragment;

  protected animationRegistry: Map<string, AnimationStatic<Animation, any>> =
    new Map();

  constructor(root: DocumentFragment) {
    this.root = root;
    this.registerKnownTransitions();
  }

  protected registerKnownTransitions() {
    this.register('none', NoneAnimation);
    this.register('pan-zoom', PanZoomAnimation);
  }

  public register(id: string, AnimationClass: AnimationStatic<Animation, any>) {
    if (this.animationRegistry.has(id)) {
      throw new Error('Animation type already registered');
    }
    appendStyle(
      this.root,
      AnimationClass.getStyleSheetAsString(),
      `animation-${id}`,
    );
    this.animationRegistry.set(id, AnimationClass);
  }

  public prepare(
    type = 'none',
    options: unknown = {},
  ): (element: HTMLDivElement) => Animation {
    const AnimationClass = this.animationRegistry.get(type);
    if (!AnimationClass) {
      throw new Error(`Unknown animation type: ${type}`);
    }

    // unpacks the options and throws an exception if they are invalid,
    // but does create the actual transition yet
    return AnimationClass.prepare(options);
  }
}

export default AnimationFactory;
