export default interface Action<A, R> {
  execute(arg: A): Promise<R>;
  unpack(arg: unknown): A;
  buildExecutor(arg: unknown): () => Promise<R>;
}

export { Action };
