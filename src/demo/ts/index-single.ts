/* eslint-disable no-console */
import ready from 'document-ready';

import './side-effects';
import { HilbertGalleryViewer } from '../../library/ts/hilbert-gallery-viewer';

async function main() {
  await new Promise<void>(ready);

  const hGViewer = document.querySelector(
    'hilbert-gallery-viewer',
  ) as HilbertGalleryViewer;

  const action = 'show';
  const args0 = {
    mimetype: 'image/jpeg',
    url: 'https://placekitten.com/349/321',
    fit: 'cover',
    color: 'black',
    transition: {
      type: 'none',
      options: {},
    },
    animation: {
      type: 'none',
      options: {},
    },
  };
  const args1 = {
    mimetype: 'image/jpeg',
    url: 'https://placekitten.com/349/326',
    fit: 'cover',
    color: 'black',
    transition: {
      type: 'fade',
      options: {
        duration: 5,
        color: 'cyan',
      },
    },
    animation: {
      type: 'none',
      options: {},
    },
  };
  const executeDefault = async () => {
    await hGViewer.execute(action, args0);
    await hGViewer.execute(action, args1);
  };
  Object.assign(window, { viewer: hGViewer, executeDefault });
  console.info('Call executeDefault() to execute the default action:', {
    action,
    args1,
  });
  console.info(
    'Call viewer.execute(action, args) to execute your own actions.',
  );
  await executeDefault();
}

function uncaughtErrorHandler(error: Error) {
  console.error('Uncaught error', error);
}

main().catch(uncaughtErrorHandler);
