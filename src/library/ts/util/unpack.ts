type Unpacker<P> = (obj: unknown) => P;

function bindFirstUnpacked<
  FuncHeadArg,
  FuncTailArgs extends unknown[],
  FuncResult,
>(
  obj: unknown,
  unpacker: Unpacker<FuncHeadArg>,
  func: (...args: [FuncHeadArg, ...FuncTailArgs]) => FuncResult,
): (...args: [...FuncTailArgs]) => FuncResult {
  const p = unpacker(obj);
  return (...args: [...FuncTailArgs]) => func(p, ...args);
}

function bindLastUnpacked<
  FuncHeadArgs extends unknown[],
  FuncTailArg,
  FuncResult,
>(
  obj: unknown,
  unpacker: Unpacker<FuncTailArg>,
  func: (...args: [...FuncHeadArgs, FuncTailArg]) => FuncResult,
): (...args: [...FuncHeadArgs]) => FuncResult {
  const p = unpacker(obj);
  return (...args: [...FuncHeadArgs]) => func(...args, p);
}

export { Unpacker, bindFirstUnpacked, bindLastUnpacked };
