function removePreviousSiblings<T extends Node>(node: T): T {
  const parent = node.parentNode;
  if (parent !== null) {
    while (node.previousSibling !== null) {
      parent.removeChild(node.previousSibling);
    }
  }
  return node;
}

export { removePreviousSiblings };
