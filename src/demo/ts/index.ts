import ready from 'document-ready';

import '../../library/ts/hilbert-gallery-viewer';
import { HilbertGalleryViewer } from '../../library/ts/hilbert-gallery-viewer';

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

type Content = {
  mimetype: string;
  url: string;
};

function randomFit() {
  return ['contain', 'cover'][Math.floor(Math.random() * 2)];
}

function randomTransition() {
  const types = [
    () => ({ type: 'none', options: {} }),
    () => ({
      type: 'fade',
      options: { duration: 1 + Math.random() * 5, color: 'black' },
    }),
    () => ({
      type: 'cross-fade',
      options: { duration: 1 + Math.random() * 5 },
    }),
  ];
  return types[Math.floor(Math.random() * types.length)]();
}

function randomAnimation() {
  const types = [
    () => ({ type: 'none', options: {} }),
    () => {
      const x = 0.25 + Math.random() * 0.5;
      const y = 0.25 + Math.random() * 0.5;
      const minDistance = Math.min(x, 1 - x, y, 1 - y);
      const scale = 1 / minDistance;
      return {
        type: 'pan-zoom',
        options: { duration: 1 + Math.random() * 30, to: { x, y, scale } },
      };
    },
  ];
  return types[Math.floor(Math.random() * types.length)]();
}

function randomShowCommand(content: Content) {
  return {
    action: 'show',
    args: {
      ...content,
      fit: randomFit(),
      color: 'black',
      transition: randomTransition(),
      animation: randomAnimation(),
    },
  };
}

function createPlaylist() {
  const images = Array.from({ length: 5 }, () => ({
    mimetype: 'image/jpeg',
    url: randomKittenUrl(),
  }));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  const content = shuffle([...images, ...videos]);

  const preloadCommand = {
    action: 'preload',
    args: content.map((c) => ({ ...c })),
  };

  const showCommands = content.map((c) => randomShowCommand({ ...c }));

  return {
    oneShot: [preloadCommand],
    loop: showCommands,
  };
}

let shouldStop = false;
function stopPlayback() {
  shouldStop = true;
}
Object.assign(window, { stopPlayback });
console.info(
  'Call stopPlayback() to stop the default playlist (will finish the current playlist item).',
);

async function main() {
  await new Promise<void>(ready);

  const hGViewer = document.querySelector(
    'hilbert-gallery-viewer',
  ) as HilbertGalleryViewer;

  Object.assign(window, { viewer: hGViewer });
  console.info(
    'Call viewer.execute(action, args) to execute your own actions.',
  );

  const playlist = createPlaylist();
  console.log(JSON.stringify(playlist, null, 2), playlist);

  playlist.oneShot.forEach(({ action, args }) => {
    // eslint-disable-next-line no-console
    hGViewer.execute(action, args).catch((e) => console.error(e));
  });

  for (
    let i = 0;
    i < playlist.loop.length && !shouldStop;
    i = (i + 1) % playlist.loop.length
  ) {
    const { action, args } = playlist.loop[i];
    // eslint-disable-next-line no-console,no-await-in-loop
    console.log({ action, args });
    await hGViewer.execute(action, args).catch((e) => console.error(e));

    if (action === 'show') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const animationDuration =
        (args?.animationElement?.duration as number) ?? 0;
      const delay = animationDuration > 5 ? 1 : 1 + Math.random() * 5;

      // eslint-disable-next-line no-await-in-loop
      await sleep(animationDuration + delay);
    }
  }
}

function uncaughtErrorHandler(error: Error) {
  console.error('Uncaught error', error);
}

main().catch(uncaughtErrorHandler);
