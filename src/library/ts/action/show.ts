import { Base } from './base';
import { OptionalKeys, State } from '../util/types';
import { removePreviousSiblings } from '../util/dom';
import { PromiseExecutorCallbacks } from '../util/promise';
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
  slideOuterWrapperElement: HTMLDivElement;
  slideInnerWrapperElement: HTMLDivElement;
  slideElement: HTMLDivElement;
  contentElement: HTMLElement;
};

type SlideData = DOMStructure & {
  transition: Transition;
  animation: Animation;
  contentPlayTimeoutId: ReturnType<typeof setTimeout>;
};

export default class ShowAction extends Base<ShowArg, void> {
  protected transitionFactory: TransitionFactory;

  protected animationFactory: AnimationFactory;

  protected current: SlideData;

  protected executeLock: PromiseExecutorCallbacks<void>;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(state: State) {
    super(state);

    this.executeLock = new PromiseExecutorCallbacks<void>();
    this.executeLock.resolve();

    this.transitionFactory = new TransitionFactory(state.shadowRoot);
    this.animationFactory = new AnimationFactory(state.shadowRoot);

    const dummyContent = ContentCreator.create(
      'image/gif',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    );
    this.appendCurrentContent(dummyContent, 'transparent');
    const domStructure = this.appendCurrentContent(dummyContent, 'transparent');
    const transition = new NoneTransition(this.state.container, {});
    const animation = new NoneAnimation(domStructure.slideElement, {});
    const contentPlayTimeoutId = setTimeout(() => {}, 0);

    this.current = {
      ...domStructure,
      transition,
      animation,
      contentPlayTimeoutId,
    };
  }

  appendCurrentContent(
    contentElement: HTMLElement,
    color = 'black',
  ): DOMStructure {
    const slideElement = document.createElement('div');
    slideElement.style.setProperty('--slide-background-color', color);
    slideElement.classList.add('slide');
    slideElement.appendChild(contentElement);

    const slideInnerWrapperElement = document.createElement('div');
    slideInnerWrapperElement.classList.add('slide-inner-wrapper');
    slideInnerWrapperElement.appendChild(slideElement);

    const slideOuterWrapperElement = document.createElement('div');
    slideOuterWrapperElement.classList.add('slide-outer-wrapper');
    slideOuterWrapperElement.appendChild(slideInnerWrapperElement);

    const { container } = this.state;
    container.appendChild(slideOuterWrapperElement);

    return {
      slideOuterWrapperElement,
      slideInnerWrapperElement,
      slideElement,
      contentElement,
    };
  }

  async execute(arg: ShowArg): Promise<void> {
    const { executeLock } = this;
    const myExecuteLock = new PromiseExecutorCallbacks<void>();
    this.executeLock = myExecuteLock;
    try {
      // first parse args and prepare transition and animation
      const transitionCreator = this.prepareTransition(arg);
      const animationCreator = this.prepareAnimation(arg);

      // args are parsed and considered OK
      const previous = this.current;
      previous.transition.cancel();

      // wait for previous execution to finish
      await executeLock.promise();

      const { mimetype, url, fit, color, startDelay } = {
        ...defaultOptionalShowArgs,
        ...arg,
      };

      const content = ContentCreator.create(mimetype, url, fit);

      const { container } = this.state;

      const currentDomStructure = this.appendCurrentContent(
        content,
        color ?? 'black',
      );
      const transition = transitionCreator(container);
      const animation = animationCreator(currentDomStructure.slideElement);
      const contentPlayTimeoutId = setTimeout(
        () => ContentCreator.play(content),
        startDelay * 1000,
      );

      const current = {
        ...currentDomStructure,
        transition,
        animation,
        contentPlayTimeoutId,
      };
      this.current = current;

      try {
        await transition.done();
      } catch (e) {
        const msg = 'Waiting for transition to end failed. Proceeding anyway';
        if (e) {
          this.state.log.warn(msg, e);
        } else {
          this.state.log.warn(msg);
        }
      }
      previous.animation.cancel();
      clearTimeout(previous.contentPlayTimeoutId);
      removePreviousSiblings(current.slideOuterWrapperElement);
    } finally {
      myExecuteLock.resolve();
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
