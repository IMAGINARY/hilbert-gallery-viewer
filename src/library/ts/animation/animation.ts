interface Animation {
  cancel(): void;
  isCancelled(): boolean;
  done(): Promise<void>;
  isDone(): boolean;
}

interface AnimationOptions {
  duration?: number;
  delay?: number;
}

interface AnimationStatic<A extends Animation, O extends AnimationOptions> {
  new (wrapper: HTMLDivElement, content: HTMLElement, options: O): A;
  unpack(options: unknown): O;
  prepare(
    options: unknown,
  ): (wrapper: HTMLDivElement, content: HTMLElement) => A;
  getStyleSheetAsString(): string;
}

export { Animation, AnimationOptions, AnimationStatic };
