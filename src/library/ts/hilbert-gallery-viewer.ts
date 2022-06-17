// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cssText from 'bundle-text:../scss/viewer.scss';

import { Action } from './action/action';
import { PreloadAction } from './action/preload';
import { Log, LogLevel } from './util/log';
import { Scope } from './util/types';

type ActionRegistry = Map<string, Action<unknown, unknown>>;

export default class HilbertGalleryViewer extends HTMLElement {
  protected actionRegistry: ActionRegistry;

  protected scope: Scope = {
    log: new Log(LogLevel.WARN),
  };

  constructor() {
    super();

    this.actionRegistry = this.createActionRegistry();

    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = cssText as string;
    shadow.appendChild(style);

    const info = document.createElement('span');
    info.textContent = this.getAttribute('label');
    shadow.appendChild(info);
  }

  protected createActionRegistry(): ActionRegistry {
    const registry = new Map<string, Action<unknown, unknown>>();
    registry.set('preload', new PreloadAction(this.scope));
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
