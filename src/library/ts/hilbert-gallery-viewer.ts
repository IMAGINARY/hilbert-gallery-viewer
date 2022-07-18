import cssText from 'bundle-text:../scss/viewer.scss';

import 'core-js/actual/promise';
import 'resize-observer-polyfill';

import assert from 'assert';
import Action from './action/action';
import PreloadAction from './action/preload';
import { Log, LogLevel } from './util/log';
import { SlideData, State } from './util/types';
import ReloadAction from './action/reload';
import ShowAction from './action/show';
import ClearAction from './action/clear';
import { appendStyle } from './util/style';
import AnimationFactory from './animation/factory';
import TransitionFactory from './transition/factory';
import MuteAction from './action/mute';
import UnmuteAction from './action/unmute';
import SetVolumeAction from './action/set-volume';

type ActionRegistry = Map<string, Action<unknown, unknown>>;

class HilbertGalleryViewer extends HTMLElement {
  protected actionRegistry: ActionRegistry;

  protected state: State;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    appendStyle(shadowRoot, cssText);

    const container = document.createElement('div');
    container.classList.add('container');
    shadowRoot.appendChild(container);

    const transitionFactory = new TransitionFactory(shadowRoot);
    const animationFactory = new AnimationFactory(shadowRoot);

    const activeSlides: SlideData[] = [];

    this.state = {
      viewer: this,
      log: new Log(LogLevel.WARN),
      shadowRoot,
      container,
      transitionFactory,
      animationFactory,
      activeSlides,
      muted: false,
    };

    this.actionRegistry = HilbertGalleryViewer.createActionRegistry(this.state);
  }

  protected static createActionRegistry(state: State): ActionRegistry {
    const registry = new Map<string, Action<unknown, unknown>>();
    registry.set('reload', new ReloadAction(state));
    registry.set('preload', new PreloadAction(state));
    registry.set('show', new ShowAction(state));
    registry.set('clear', new ClearAction(state));
    registry.set('mute', new MuteAction(state));
    registry.set('unmute', new UnmuteAction(state));
    registry.set('set-volume', new SetVolumeAction(state));
    return registry;
  }

  async execute(action: string, arg: unknown): Promise<void> {
    // executeImpl only exists for the purpose of renaming the parameters
    await this.executeImpl(action, arg);
  }

  private async executeImpl(actionName: string, arg: unknown): Promise<void> {
    const action = this.actionRegistry.get(actionName);
    if (action) {
      // this may throw an exception if arg has invalid type
      const executor = action.buildExecutor(arg);
      // the executor encapsulates the preprocessed arg
      // and allows type-safe execution
      await executor();
    } else {
      throw new TypeError('HilbertGalleryViewer.execute(): unknown action');
    }
  }
}

customElements.define('hilbert-gallery-viewer', HilbertGalleryViewer);

export default HilbertGalleryViewer;
