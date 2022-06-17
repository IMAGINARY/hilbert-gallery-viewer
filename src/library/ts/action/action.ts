export default interface Action<A, R> {
  execute(arg: A): R;
  unpack(arg: unknown): A;
  buildExecutor(arg: unknown): () => R;
}

export { Action };
