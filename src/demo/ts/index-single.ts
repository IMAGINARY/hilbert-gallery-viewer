/* eslint-disable no-console */
import ready from 'document-ready';

import '../../library/ts/hilbert-gallery-viewer';
import { HilbertGalleryViewer } from '../../library/ts/hilbert-gallery-viewer';

async function main() {
  await new Promise<void>(ready);

  const hGViewer = document.querySelector(
    'hilbert-gallery-viewer',
  ) as HilbertGalleryViewer;

  const action = 'show';
  const args = {
    mimetype: 'image/jpeg',
    url: 'https://placekitten.com/349/326',
    fit: 'cover',
    color: 'black',
    transition: {
      type: 'fade',
      options: {
        duration: 2,
        color: 'cyan',
      },
    },
    animation: {
      type: 'none',
      options: {},
    },
  };
  const executeDefault = () => hGViewer.execute(action, args);
  Object.assign(window, { viewer: hGViewer, executeDefault });
  console.info('Call executeDefault() to execute the default action:', {
    action,
    args,
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
