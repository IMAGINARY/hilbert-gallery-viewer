import { Base } from './base';
import { State } from '../util/types';
import { ContentCreator } from '../util/content-creator';
import { NoneTransition, NoneTransitionOptions } from '../transition/none';
import { FadeTransition, FadeTransitionOptions } from '../transition/fade';

type NoneTransitionConfig = {
  type: 'none';
  options: Record<string, never>; // empty object: {}
};

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

type NoneAnimationConfig = {
  type: 'none';
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

type ShowArg = {
  mimetype: string;
  url: string;
  fit: 'cover' | 'contain';
  transition:
    | NoneTransitionConfig
    | FadeTransitionConfig
    | CrossFadeTransitionConfig;
  animation: NoneAnimationConfig | PanAndZoomAnimationConfig;
};

export default class ShowAction extends Base<ShowArg, void> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(state: State) {
    super(state);
  }

  execute(arg: ShowArg): void {
    const { mimetype, url, fit } = arg;
    const { transition: transitionConfig } = arg;
    const { animation: animationConfig } = arg;
    const content = ContentCreator.create(mimetype, url, fit);

    switch (transitionConfig.type) {
      case 'none': {
        const transition = new NoneTransition(this.state);
        const trsnsitionOptions =
          transitionConfig.options as NoneTransitionOptions;
        transition.to(content, trsnsitionOptions);
        break;
      }
      case 'fade': {
        const transition = new FadeTransition(this.state);
        const transitionOptions =
          transitionConfig.options as unknown as FadeTransitionOptions;
        transition.to(content, transitionOptions);
        break;
      }
      default:
        throw new TypeError('unknown transition type');
    }
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
