interface Transition {
  cancel(): void;
  isCancelled(): boolean;
  targetVisible(): Promise<void>;
  done(): Promise<void>;
  isDone(): boolean;
}

interface TransitionStatic<T extends Transition, P> {
  new (
    container: HTMLDivElement,
    from: HTMLElement,
    to: HTMLElement,
    options: P,
  ): T;
  unpack(options: unknown): P;
  prepare(
    options: unknown,
  ): (container: HTMLDivElement, from: HTMLElement, to: HTMLElement) => T;
  getStyleSheetAsString(): string;
}

export { Transition, TransitionStatic };
