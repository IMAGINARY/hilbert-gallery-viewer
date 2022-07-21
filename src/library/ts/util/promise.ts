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

async function waitForEvents<T extends EventTarget>(
  element: T,
  resolveEventNames: string[],
  rejectEventNames: string[],
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const [resolveHandler, rejectHandler] = [
      () => {
        resolveEventNames.forEach((name) =>
          element.removeEventListener(name, resolveHandler),
        );
        rejectEventNames.forEach((name) =>
          element.removeEventListener(name, rejectHandler),
        );
        resolve(element);
      },
      (e: Event) => {
        resolveEventNames.forEach((name) =>
          element.removeEventListener(name, resolveHandler),
        );
        rejectEventNames.forEach((name) =>
          element.removeEventListener(name, rejectHandler),
        );
        reject(e);
      },
    ];
    resolveEventNames.forEach((e) =>
      element.addEventListener(e, resolveHandler),
    );
    rejectEventNames.forEach((e) => element.addEventListener(e, rejectHandler));
  });
}

export { PromiseExecutorCallbacks, waitForEvents };
