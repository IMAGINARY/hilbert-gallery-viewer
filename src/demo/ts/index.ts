import ready from 'document-ready';

import { HilbertGalleryViewer } from '../../library/ts/hilbert-gallery-viewer';

function zoom(zoomFactor: number, duration = 10) {
  const wrapper = document.querySelector('div.wrapper') as HTMLDivElement;
  wrapper.style.setProperty('--zoom-factor', `${zoomFactor}`);
  wrapper.style.setProperty('--transition-ol-duration', `${duration}s`);
}

function pan(panTarget: { x: number; y: number }, duration = 10) {
  const wrapper = document.querySelector('div.wrapper') as HTMLDivElement;
  wrapper.style.setProperty('--pan-target-x', `${panTarget.x}`);
  wrapper.style.setProperty('--pan-target-y', `${panTarget.y}`);
  wrapper.style.setProperty('--transition-ol-duration', `${duration}s`);
}

function zoomPan(
  zoomFactor: number,
  panTarget: { x: number; y: number },
  duration = 10,
) {
  zoom(zoomFactor, duration);
  pan(panTarget, duration);
}

const viewer = {
  zoom,
  pan,
  zoomPan,
};

Object.assign(window, { viewer });

function createActionButtons() {
  const buttonActions = [
    () => viewer.zoom(3),
    () => viewer.pan({ x: 0.3, y: 0.7 }),
    () => viewer.zoomPan(2, { x: 0.75, y: 0.25 }),
  ];
  const form = document.querySelector('form[id=actions]') as HTMLFormElement;
  buttonActions.forEach((buttonAction) => {
    const button = document.createElement('input');
    button.type = 'button';
    button.value = buttonAction
      .toString()
      .split(/(\r\n|\n|\r)/)
      .map((s) => s.trim())
      .join(' ');
    button.onclick = buttonAction;
    form.appendChild(button);
  });
}

function randomKittenUrl() {
  return `https://placekitten.com/${300 + Math.floor(Math.random() * 100)}/${
    300 + Math.floor(Math.random() * 100)
  }`;
}

async function sleep(seconds: number) {
  await new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

function shuffle<T>(a: T[]): T[] {
  const result = [...a];
  for (let i = result.length; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const tmp = result[i - 1];
    result[i - 1] = result[j];
    result[j] = tmp;
  }
  return result;
}

async function main() {
  await new Promise<void>(ready);
  createActionButtons();

  console.log(HilbertGalleryViewer);

  const hGViewer = document.querySelector(
    'hilbert-gallery-viewer',
  ) as HilbertGalleryViewer;

  const images = Array.from({ length: 2 }, () => ({
    mimetype: 'image/jpeg',
    url: randomKittenUrl(),
  }));
  const otherPngImages = [
    new URL('../img/red.png', import.meta.url).href,
    new URL('../img/green.png', import.meta.url).href,
    new URL('../img/yellow.png', import.meta.url).href,
  ].map((url) => ({ mimetype: 'image/png', url }));
  const videos = [
    {
      mimetype: 'video/mp4',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  ];
  const content = [...images, ...otherPngImages, ...videos];

  await hGViewer.execute('preload', content);

  const shuffledContent = shuffle(content);
  const animationDuration = 5;
  const transitionDuration = 3;
  const delay = 3;
  await hGViewer.execute('show', {
    ...shuffledContent[shuffledContent.length - 1],
    transition: {
      type: 'none',
      options: {},
    },
  });
  await sleep(1);
  for (
    let i = 0;
    i < shuffledContent.length;
    i = (i + 1) % shuffledContent.length
  ) {
    const x = 0.25 + Math.random() * 0.5;
    const y = 0.25 + Math.random() * 0.5;
    const minDistance = Math.min(x, 1 - x, y, 1 - y);
    const scale = 1 / minDistance;
    // eslint-disable-next-line no-await-in-loop
    await hGViewer.execute('show', {
      ...content[i],
      fit: 'cover',
      transition: {
        type: 'fade',
        options: {
          duration: transitionDuration,
        },
      },
      animation: {
        type: 'pan-zoom',
        options: {
          duration: animationDuration,
          to: { x, y, scale },
        },
      },
    });
    // eslint-disable-next-line no-await-in-loop
    await sleep(animationDuration + delay);
  }
}

function uncaughtErrorHandler(error: Error) {
  console.error('Uncaught error', error);
}

main().catch(uncaughtErrorHandler);
