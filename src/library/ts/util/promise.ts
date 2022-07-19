class PromiseExecutorCallbacks<T> {
  private readonly _promise: Promise<T>;

  private readonly _resolve: (result: T) => void;

  private readonly _reject: () => void;

  constructor() {
    // dummy initialization required to satisfy TS2564 (definite assignment)
    let tmpResolve: (result: T) => void = () => {};
    let tmpReject: () => void = () => {};
    this._promise = new Promise((resolve, reject) => {
      tmpResolve = resolve;
      tmpReject = reject;
    });
    this._resolve = tmpResolve;
    this._reject = tmpReject;
  }

  promise(): Promise<T> {
    return this._promise;
  }

  resolve(result: T) {
    return this._resolve(result);
  }

  reject() {
    return this._reject();
  }
}

export { PromiseExecutorCallbacks };
