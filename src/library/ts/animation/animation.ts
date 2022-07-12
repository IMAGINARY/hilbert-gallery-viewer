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
  new (element: HTMLDivElement, options: O): A;
  unpack(options: unknown): O;
  prepare(options: unknown): (element: HTMLElement) => A;
  getStyleSheetAsString(): string;
}

export { Animation, AnimationOptions, AnimationStatic };
