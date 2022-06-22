interface Animation {
  cancel(): void;
  isCancelled(): boolean;
  done(): Promise<void>;
  isDone(): boolean;
}

interface AnimationStatic<A extends Animation, P> {
  new (wrapper: HTMLDivElement, content: HTMLElement, options: P): A;
  unpack(options: unknown): P;
  prepare(
    options: unknown,
  ): (wrapper: HTMLDivElement, content: HTMLElement) => A;
  getStyleSheetAsString(): string;
}

export { Animation, AnimationStatic };
