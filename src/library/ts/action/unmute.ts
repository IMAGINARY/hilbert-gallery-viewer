import Base from './base';
import { State } from '../util/types';
import ContentCreator from '../util/content-creator';

class UnmuteAction extends Base<void, void> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(state: State) {
    super(state);
  }

  // eslint-disable-next-line class-methods-use-this
  async execute(): Promise<void> {
    this.state.activeSlides.forEach(({ contentElement }) =>
      ContentCreator.setMuted(contentElement, false),
    );
    this.state.muted = false;
    return Promise.resolve();
  }

  // eslint-disable-next-line class-methods-use-this
  unpack(): void {}
}

export default UnmuteAction;
