interface Transition {
  cancel(): void;
  isCancelled(): boolean;
  targetVisible(): Promise<void>;
  done(): Promise<void>;
  isDone(): boolean;
}

interface TransitionOptions {
  delay?: number;
  duration?: number;
}

interface TransitionStatic<T extends Transition, O extends TransitionOptions> {
  new (
    container: HTMLDivElement,
    from: HTMLElement,
    to: HTMLElement,
    options: O,
  ): T;
  unpack(options: unknown): O;
  prepare(
    options: unknown,
  ): (container: HTMLDivElement, from: HTMLElement, to: HTMLElement) => T;
  getStyleSheetAsString(): string;
}

export { Transition, TransitionOptions, TransitionStatic };
