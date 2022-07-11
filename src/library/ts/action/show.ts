import { Base } from './base';
import { OptionalKeys, State } from '../util/types';
import { ContentCreator } from '../util/content-creator';
import { TransitionFactory } from '../transition/factory';
import { Transition } from '../transition/transition';
import { NoneTransition } from '../transition/none';
import { AnimationFactory } from '../animation/factory';
import { Animation } from '../animation/animation';
import { NoneAnimation } from '../animation/none';

type ShowArg = {
  mimetype: string;
  url: string;
  fit?: 'cover' | 'contain';
  color?: string;
  delay?: number;
  startDelay?: number;
  transition?: { type: string; options: unknown };
  animation?: { type: string; options: unknown };
};

const defaultOptionalShowArgs: Required<Pick<ShowArg, OptionalKeys<ShowArg>>> =
  {
    fit: 'cover',
    color: 'black',
    delay: 0,
    startDelay: 0,
    transition: { type: 'none', options: {} },
    animation: { type: 'none', options: {} },
  };

type DOMStructure = {
  transition: HTMLDivElement;
  animation: HTMLDivElement;
  content: HTMLElement;
};

export default class ShowAction extends Base<ShowArg, void> {
  protected transition: Transition;

  protected animation: Animation;

  protected transitionFactory: TransitionFactory;

  protected animationFactory: AnimationFactory;

  protected current: DOMStructure;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(state: State) {
    super(state);
    this.transitionFactory = new TransitionFactory(state.shadowRoot);
    this.animationFactory = new AnimationFactory(state.shadowRoot);

    const dummyContent = ContentCreator.create(
      'image/gif',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    );
    const previous = this.appendCurrentContent(dummyContent, 'transparent');
    this.current = this.appendCurrentContent(dummyContent, 'transparent');

    this.transition = new NoneTransition(
      this.state.container,
      previous.transition,
      this.current.transition,
      {},
    );
    this.animation = new NoneAnimation(
      this.current.animation,
      this.current.content,
      {},
    );
  }

  removePrevious(): void {
    // keep only current content
    const { container } = this.state;
    while (container.children.length > 1) {
      container.children[0].remove();
    }
  }

  cleanup(): void {
    this.transition.cancel();
    this.animation.cancel();
    this.removePrevious();
  }

  appendCurrentContent(content: HTMLElement, color: string): DOMStructure {
    const animation = document.createElement('div');
    animation.classList.add('animation');
    animation.appendChild(content);

    const transition = document.createElement('div');
    transition.classList.add('transition');
    transition.style.setProperty('--transition-background-color', color);
    transition.appendChild(animation);

    const { container } = this.state;
    container.appendChild(transition);

    return {
      transition,
      animation,
      content,
    };
  }

  async execute(arg: ShowArg): Promise<void> {
    const { mimetype, url, fit, color, startDelay } = {
      ...defaultOptionalShowArgs,
      ...arg,
    };

    // first parse args and prepare transition and animation
    const transitionCreator = this.prepareTransition(arg);
    const animationCreator = this.prepareAnimation(arg);

    // now that arguments are parsed: instantiate everything
    const content = ContentCreator.create(mimetype, url, fit);

    this.cleanup();
    const previous = this.current;
    this.current = this.appendCurrentContent(content, color ?? 'black');
    this.transition = this.createTransition(transitionCreator, previous);
    this.animation = this.createAnimation(animationCreator);

    setTimeout(() => ContentCreator.play(content), startDelay * 1000);

    try {
      if (!this.transition.isDone()) await this.transition.done();
      this.removePrevious();
    } catch (e) {
      const msg = 'Waiting for transition to end failed. Proceeding anyway';
      if (e) {
        this.state.log.warn(msg, e);
      } else {
        this.state.log.warn(msg);
      }
    }
  }

  protected prepareTransition(
    arg: ShowArg,
  ): ReturnType<TransitionFactory['prepare']> {
    const { transition } = arg;
    const { type, options } = transition ?? { type: 'none', options: {} };

    return this.transitionFactory.prepare(type, options);
  }

  protected prepareAnimation(
    arg: ShowArg,
  ): ReturnType<AnimationFactory['prepare']> {
    const { animation } = arg;
    const { type, options } = animation ?? { type: 'none', options: {} };

    return this.animationFactory.prepare(type, options);
  }

  protected createTransition(
    creator: ReturnType<TransitionFactory['prepare']>,
    previous: DOMStructure,
  ): Transition {
    const { container } = this.state;
    const from = previous.transition;
    const to = this.current.transition;

    return creator(container, from, to);
  }

  protected createAnimation(
    creator: ReturnType<AnimationFactory['prepare']>,
  ): Animation {
    const { animation: wrapper, content } = this.current;
    return creator(wrapper, content);
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
