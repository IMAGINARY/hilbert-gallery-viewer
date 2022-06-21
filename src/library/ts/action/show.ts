import { Base } from './base';
import { State } from '../util/types';
import { ContentCreator } from '../util/content-creator';
import { TransitionFactory } from '../transition/factory';
import { Transition } from '../transition/transition';
import { NoneTransition } from '../transition/none';

type FadeTransitionConfig = {
  type: 'fade';
  options: {
    duration: number;
    background: string;
  };
};

type CrossFadeTransitionConfig = {
  type: 'cross-fade';
  options: {
    duration: number;
  };
};

type PanAndZoomState = { x: number; y: number; scale: number };

type PanAndZoomAnimationConfig = {
  type: 'pan-and-zoom';
  options: {
    duration: number;
    start: PanAndZoomState;
    end: PanAndZoomState;
  };
};

type TransitionConfig = FadeTransitionConfig | CrossFadeTransitionConfig;

type AnimationConfig = PanAndZoomAnimationConfig;

type ShowArg = {
  mimetype: string;
  url: string;
  fit: 'cover' | 'contain';
  transition: TransitionConfig;
  animation: AnimationConfig;
};

export default class ShowAction extends Base<ShowArg, void> {
  protected transition: Transition;

  protected transitionFactory: TransitionFactory;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(state: State) {
    super(state);
    this.transitionFactory = new TransitionFactory(state.shadowRoot);
    this.transition = new NoneTransition();
  }

  cleanup(): void {
    this.transition.cancel();

    // keep only current content
    const { container } = this.state;
    while (container.children.length > 1) {
      container.children[0].remove();
    }
  }

  appendCurrentContent(content: HTMLElement): void {
    const transitionWrapper = document.createElement('div');
    transitionWrapper.classList.add('transition');

    const animationWrapper = document.createElement('div');
    animationWrapper.classList.add('animation');
    transitionWrapper.appendChild(animationWrapper);

    animationWrapper.appendChild(content);

    this.state.container.appendChild(transitionWrapper);
  }

  async execute(arg: ShowArg): Promise<void> {
    const { mimetype, url, fit } = arg;
    const { transition: transitionConfig } = arg;
    const { type: transitionType, options: transitionOptions } =
      transitionConfig;

    // first prepare transitions and animations
    const transitionPreparer = this.transitionFactory.prepare(
      transitionType,
      transitionOptions,
    );

    // now that arguments are parsed: instantiate everything
    const content = ContentCreator.create(mimetype, url, fit);
    try {
      await ContentCreator.awaitLoad(content);
    } catch (e) {
      this.state.log.warn(
        'Waiting for content to load failed. Proceeding anyway.',
      );
    }

    this.cleanup();
    this.appendCurrentContent(content);
    const { container } = this.state;
    const from = this.state.container.children[0] as HTMLElement;
    const to = this.state.container.children[1] as HTMLElement;

    this.transition = transitionPreparer(container, from, to);
    try {
      await this.transition.targetVisible();
    } catch (e) {
      this.state.log.warn(
        'Waiting for target to become visible failed. Proceeding anyway.',
      );
    }
    ContentCreator.play(content);

    try {
      await this.transition.done();
    } catch (e) {
      const msg = 'Waiting for transition to end failed. Proceeding anyway';
      if (e) {
        this.state.log.warn(msg, e);
      } else {
        this.state.log.warn(msg);
      }
    }

    this.cleanup();
  }

  // eslint-disable-next-line class-methods-use-this
  unpack(arg: unknown): ShowArg {
    if (typeof arg !== 'object') {
      throw new TypeError('ShowAction.unpack(arg): arg must be an object');
    }
    // TODO: further type checking
    return arg as ShowArg;
  }
}

export { ShowAction };
