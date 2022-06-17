export default interface Transition<TransitionOptions> {
  to(content: HTMLElement, options?: TransitionOptions): void;
  done(): void;
}

export { Transition };
