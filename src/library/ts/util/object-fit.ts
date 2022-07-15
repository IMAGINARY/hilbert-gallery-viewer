type Size = { width: number; height: number };

type FitType = 'cover' | 'contain';

class FitUpdater {
  protected static resizeObserver = new ResizeObserver(
    FitUpdater.resizeObserverCallback.bind(FitUpdater),
  );

  protected static elementSizes = new WeakMap<HTMLElement, Size>();

  protected static fitUpdaterInstances = new WeakMap<
    HTMLElement,
    FitUpdater[]
  >();

  protected container: HTMLElement;

  protected content: HTMLElement;

  protected constructor(container: HTMLElement, content: HTMLElement) {
    this.container = container;
    this.content = content;
  }

  update() {
    const contentSize = FitUpdater.elementSizes.get(this.content);
    if (typeof contentSize === 'undefined') return;
    const containerSize = FitUpdater.elementSizes.get(this.container);
    if (typeof containerSize === 'undefined') return;

    const containerAspectRatio = containerSize.width / containerSize.height;
    const contentAspectRatio = contentSize.width / contentSize.height;

    if (containerAspectRatio > contentAspectRatio) {
      this.container.style.setProperty('--fit-cover-max-width', '100%');
      this.container.style.setProperty('--fit-cover-max-height', 'auto');
      this.container.style.setProperty('--fit-contain-min-width', 'auto');
      this.container.style.setProperty('--fit-contain-min-height', '100%');
    } else {
      this.container.style.setProperty('--fit-cover-max-width', '100%');
      this.container.style.setProperty('--fit-cover-max-height', 'auto');
      this.container.style.setProperty('--fit-contain-min-width', '100%');
      this.container.style.setProperty('--fit-contain-min-height', 'auto');
    }
  }

  public static register(
    container: HTMLElement,
    content: HTMLElement,
  ): FitUpdater {
    const updater = new FitUpdater(container, content);

    FitUpdater.addInstance(container, updater);
    FitUpdater.addInstance(content, updater);
    FitUpdater.resizeObserver.observe(container);
    if (content instanceof HTMLImageElement) {
      const updateContentSize = () => {
        FitUpdater.elementSizes.set(content, {
          width: content.naturalWidth,
          height: content.naturalHeight,
        });
        updater.update();
      };

      if (content.complete) {
        updateContentSize();
      } else {
        content.addEventListener('load', updateContentSize, { once: true });
      }
    } else {
      throw new TypeError(`Unsupported element: ${content.tagName}`);
    }

    return updater;
  }

  public static unregister(updater: FitUpdater): void {
    const { container, content } = updater;
    FitUpdater.removeInstance(container, updater);
    FitUpdater.removeInstance(content, updater);
  }

  protected static addInstance(elem: HTMLElement, updater: FitUpdater): void {
    const instances = FitUpdater.getInstances(elem);
    instances.push(updater);
    FitUpdater.fitUpdaterInstances.set(elem, instances);
  }

  protected static removeInstance(
    elem: HTMLElement,
    updater: FitUpdater,
  ): void {
    const instances = FitUpdater.getInstances(elem);
    const idx = instances.indexOf(updater);
    if (idx !== -1) {
      FitUpdater.fitUpdaterInstances.set(elem, instances.splice(idx, 1));
    }
  }

  protected static getInstances(elem: HTMLElement): FitUpdater[] {
    const instances = FitUpdater.fitUpdaterInstances.get(elem);
    if (typeof instances === 'undefined') return [];
    return [...instances];
  }

  protected static resizeObserverCallback(roes: ResizeObserverEntry[]) {
    roes
      .filter(({ target }) => target instanceof HTMLElement)
      .forEach(({ target, contentRect: { width, height } }) => {
        const element = target as HTMLElement;
        FitUpdater.elementSizes.set(element, { width, height });
        FitUpdater.getInstances(element).forEach((i) => i.update());
      });
  }
}

function fitObject(
  container: HTMLElement,
  content: HTMLElement,
  type: FitType,
) {
  content.classList.add(`fit-${type}`);
  FitUpdater.register(container, content);
}

export default fitObject;
export { FitType, FitUpdater };
