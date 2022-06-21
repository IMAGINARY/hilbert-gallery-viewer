interface Animation {
  cancel(): void;
  done(): Promise<void>;
}
