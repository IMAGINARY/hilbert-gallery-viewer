/* eslint-disable import/prefer-default-export */

function appendStyle(
  root: DocumentFragment,
  stylesheetText: string,
  id?: string,
) {
  const style: HTMLStyleElement = document.createElement('style');
  if (typeof id !== 'undefined') {
    style.id = id;
  }
  style.textContent = stylesheetText;
  const selector =
    "style[type='text/css']:last-of-type, style:not([type]):last-of-type";
  const lastStyleElem = root.querySelector(selector);
  if (lastStyleElem === null) {
    root.prepend(style);
  } else {
    lastStyleElem.after(style);
  }
}

export { appendStyle };

export function setCSSPropertyIfDefined<T>(
  elem: HTMLElement,
  property: string,
  formatter: (v: Exclude<T, undefined>) => string,
  value: T,
) {
  if (typeof value !== 'undefined')
    elem.style.setProperty(property, formatter(value as Exclude<T, undefined>));
}
