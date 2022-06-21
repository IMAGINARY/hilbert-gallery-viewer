// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cssText from 'bundle-text:../scss/viewer.scss';

import { Action } from './action/action';
import { PreloadAction } from './action/preload';
import { Log, LogLevel } from './util/log';
import { State } from './util/types';
import { ReloadAction } from './action/reload';
import { ShowAction } from './action/show';
import assert from 'assert';
import { appendStyle } from './util/style';

type ActionRegistry = Map<string, Action<unknown, unknown>>;

export default class HilbertGalleryViewer extends HTMLElement {
  protected actionRegistry: ActionRegistry;

  protected state: State;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    appendStyle(shadowRoot, cssText as string);

    const main = document.createElement('div');
    main.classList.add('main');
    shadowRoot.appendChild(main);

    const container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);

    this.state = {
      log: new Log(LogLevel.WARN),
      shadowRoot,
      container,
    };

    this.actionRegistry = this.createActionRegistry();
  }

  protected createActionRegistry(): ActionRegistry {
    const registry = new Map<string, Action<unknown, unknown>>();
    registry.set('reload', new ReloadAction(this.state));
    registry.set('preload', new PreloadAction(this.state));
    registry.set('show', new ShowAction(this.state));
    return registry;
  }

  execute(action: string, arg: unknown): void {
    // executeImpl only exists for the purpose of renaming the parameters
    return this.executeImpl(action, arg);
  }

  private executeImpl(actionName: string, arg: unknown): void {
    const action = this.actionRegistry.get(actionName);
    if (action) {
      // this may throw an exception if arg has invalid type
      const executor = action.buildExecutor(arg);
      // the executor encapsulates the preprocessed arg
      // and allows type-safe execution
      executor();
    } else {
      throw new TypeError('HilbertGalleryViewer.execute(): unknown action');
    }
  }
}

customElements.define('hilbert-gallery-viewer', HilbertGalleryViewer);

export { HilbertGalleryViewer };
