import { Base } from './base';
import { Optional, OptionalKeys, State } from '../util/types';
import { ContentCreator } from '../util/content-creator';
import { TransitionFactory } from '../transition/factory';
import { Transition } from '../transition/transition';
import { AnimationFactory } from '../animation/factory';
import { Animation } from '../animation/animation';
import { ajvCompile, JSONSchemaType } from '../util/validate';
import fitObject, { FitType } from '../util/object-fit';

interface ShowActionOptions {
  mimetype: string;
  url: string;
  fit?: FitType;
  color?: string;
  delay?: number;
  startDelay?: number;
  transition?: { type: string; options?: Record<string, unknown> };
  animation?: { type: string; options?: Record<string, unknown> };
}

// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const showActionOptionsSchema = {
  type: 'object',
  properties: {
    mimetype: { type: 'string' },
    url: { type: 'string' },
    fit: { type: 'string', enum: ['cover', 'contain'] },
    color: { type: 'string' },
    delay: { type: 'number', minimum: 0 },
    startDelay: { type: 'number', minimum: 0 },
    transition: {
      type: 'object',
      properties: {
        type: { type: 'string' },
        options: { type: 'object' },
      },
      required: ['type'],
    },
    animation: {
      type: 'object',
      properties: {
        type: { type: 'string' },
        options: { type: 'object' },
      },
      required: ['type'],
    },
  },
  required: ['mimetype', 'url'],
} as unknown as JSONSchemaType<ShowActionOptions>;

const validateShowActionOptions = ajvCompile(showActionOptionsSchema);

const defaultOptionalShowArgs: Optional<
  Required<Pick<ShowActionOptions, OptionalKeys<ShowActionOptions>>>,
  'startDelay' // is optional, but will be derived from the transition if not present
> = {
  fit: 'cover',
  color: 'black',
  delay: 0,
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

export default class ShowAction extends Base<ShowActionOptions, void> {
  protected readonly transitionFactory: TransitionFactory;

  protected readonly animationFactory: AnimationFactory;

  protected readonly activeSlides: SlideData[];

  constructor(state: State) {
    super(state);

    this.transitionFactory = new TransitionFactory(state.shadowRoot);
    this.animationFactory = new AnimationFactory(state.shadowRoot);

    this.activeSlides = [];
  }

  appendCurrentContent(
    contentElement: HTMLElement,
    color = 'black',
  ): DOMStructure {
    contentElement.classList.add('content');

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

  protected removePreviousSlides(s: SlideData) {
    const index = this.activeSlides.indexOf(s);
    if (index !== -1) {
      const previousSlides = this.activeSlides.slice(0, index);
      this.activeSlides.splice(0, index);
      previousSlides.forEach((ps) => {
        const { parentNode } = ps.slideOuterWrapperElement;
        if (parentNode !== null) {
          parentNode.removeChild(ps.slideOuterWrapperElement);
        }
        ps.transition.cancel();
        ps.animation.cancel();
      });
    }
  }

  async execute(arg: ShowActionOptions): Promise<void> {
    // first parse args and prepare transition and animation
    const transitionCreator = this.prepareTransition(arg);
    const animationCreator = this.prepareAnimation(arg);

    // args are parsed and considered OK
    const { mimetype, url, fit, color, startDelay } = {
      ...defaultOptionalShowArgs,
      ...arg,
    };

    const content = ContentCreator.create(mimetype, url);
    const currentDomStructure = this.appendCurrentContent(
      content,
      color ?? 'black',
    );
    fitObject(currentDomStructure.slideElement, content, fit);
    const transition = transitionCreator(
      currentDomStructure.slideOuterWrapperElement,
    );
    const animation = animationCreator(currentDomStructure.slideElement);

    const { targetShowUpDelay } = transition;
    const contentPlayDelay = startDelay ?? targetShowUpDelay;

    const contentPlayTimeoutId = setTimeout(
      () => ContentCreator.play(content),
      contentPlayDelay * 1000,
    );

    const slideData = {
      ...currentDomStructure,
      transition,
      animation,
      contentPlayTimeoutId,
    };
    this.activeSlides.push(slideData);

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
    this.removePreviousSlides(slideData);
  }

  protected prepareTransition({
    transition,
  }: ShowActionOptions): ReturnType<TransitionFactory['prepare']> {
    const { type, options } = transition ?? { type: 'none', options: {} };
    return this.transitionFactory.prepare(type, options);
  }

  protected prepareAnimation({
    animation,
  }: ShowActionOptions): ReturnType<AnimationFactory['prepare']> {
    const { type, options } = animation ?? { type: 'none', options: {} };
    return this.animationFactory.prepare(type, options);
  }

  // eslint-disable-next-line class-methods-use-this
  unpack(options: unknown): ShowActionOptions {
    return validateShowActionOptions(options);
  }
}

export { ShowAction };
