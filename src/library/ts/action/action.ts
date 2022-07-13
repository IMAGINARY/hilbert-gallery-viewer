export default interface Action<O, R> {
  execute(arg: O): Promise<R>;
  unpack(arg: unknown): O;
  buildExecutor(arg: unknown): () => Promise<R>;
}

export { Action };
