import ready from 'document-ready';

function zoom(zoomFactor: number, duration = 10) {
  const wrapper = document.querySelector('div.wrapper') as HTMLDivElement;
  wrapper.style.setProperty('--zoom-factor', `${zoomFactor}`);
  wrapper.style.setProperty('--transition-duration', `${duration}s`);
}

function pan(panTarget: { x: number; y: number }, duration = 10) {
  const wrapper = document.querySelector('div.wrapper') as HTMLDivElement;
  wrapper.style.setProperty('--pan-target-x', `${panTarget.x}`);
  wrapper.style.setProperty('--pan-target-y', `${panTarget.y}`);
  wrapper.style.setProperty('--transition-duration', `${duration}s`);
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

async function main() {}

ready(() => {
  main().then(
    () => {},
    () => {},
  );
});
