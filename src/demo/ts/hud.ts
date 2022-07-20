import { strict as assert } from 'assert';
import ready from 'document-ready';

const defaultConsoleHeight = 30;

function hud() {
  const searchParams = new URLSearchParams(window.location.search);
  const showConsole = searchParams.has('console');
  const consoleHeight = Number.parseFloat(searchParams.get('console') ?? 'NaN');
  const consoleHeightFinite = Number.isFinite(consoleHeight)
    ? consoleHeight
    : defaultConsoleHeight;

  const hudElement =
    document.querySelector<HTMLFieldSetElement>('#console-log-div');
  assert(hudElement !== null);
  if (showConsole) {
    hudElement.style.height = `${consoleHeightFinite}%`;
    hudElement.style.removeProperty('display');
  } else {
    hudElement.style.display = 'none';
  }
}

window.addEventListener('error', (e) => {
  console.error(e);
  return false;
});
window.addEventListener('unhandledrejection', (e) => {
  console.error(e);
  return false;
});

ready(hud);
