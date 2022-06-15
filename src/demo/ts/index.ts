import ready from 'document-ready';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as lib from '../../library/ts/index';

// eslint-disable-next-line @typescript-eslint/no-empty-function
async function mainAsync() {}

function main() {
  mainAsync().then(
    () => {},
    () => {},
  );
}

ready(main);
