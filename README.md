# Hilbert Gallery Viewer

This is a viewer component intended to serve as a client for
[`hilbert-gallery`](https://github.com/IMAGINARY/hilbert-gallery). However, the
viewer can also be used on its own. It is supposed to be remote-controlled from
a separate server which is not part of this package.

Features:

- display images and videos
- preload of the media content to be prepared when it needs to be displayed
- fit the media content to the viewer if the aspect ratios don't match up
- transition between consecutive media
- animate the current media
- transitions and animations are based on CSS animation to support low-power
  devices
- volume control for videos
- single interface for all actions
- validation of action arguments via JSON Schema
- supports semi-legacy web browsers: tested with Chrome 56

## Usage

Install the package via `npm`:

```shell
npm install @imaginary-maths/hilbert-gallery-viewer
```

### Initialization

There are two ways to initialize the viewer: `HilbertGalleryViewer` class or
`<hilbert-gallery-viewer>` custom HTML element.

#### Via the class

Import the class and instantiate it with an already present HTML element:

```javascript
import HilbertGalleryViewer from '@imaginary-maths/hilbert-gallery-viewer';

const container = document.querySelector('#my-container'); // use your own id here
const viewer = new HilbertGalleryViewer(container);
```

#### Via the custom HTML element

The custom HTML element needs to be registered before it is first used and the
module should do this automatically upon import:

```javascript
import '@imaginary-maths/hilbert-gallery-viewer';
```

The registration of the custom HTML element relies on side effects of the
module, which some bundlers do not include in the final bundle. In this case,
register the custom HTML element manually:

```javascript
import HilbertGalleryViewer from '@imaginary-maths/hilbert-gallery-viewer';

HilbertGalleryViewer.defineCustomElement();
```

Then, add the `<hilbert-gallery-viewer>` to your static HTML file or add it
dynamically through JS:

```javascript
const viewer = document.createElement('hilbert-gallery-viewer');
document.body.appendChild(viewer);
```

### Actions

The viewer exposes only one method:

```javascript
viewer.execute(type, args);
```

`type` is the name of the action (`show`, `clear`, `preload`, `mute`, `unmute`,
`set-volume` or `reload`) and `args` are the arguments to the action (differs
from action to action).

#### The `show` action

This is the principal action supported by the viewer for displaying media files:

```javascript
viewer.execute('show', showArgs);
```

with `showArgs` being of type

```typescript
interface ShowActionOptions {
  mimetype: string;
  url: string;
  fit?: FitType;
  color?: string;
  startDelay?: number;
  volume?: number;
  muted?: boolean;
  transition?: { type: string; options?: Record<string, unknown> };
  animation?: { type: string; options?: Record<string, unknown> };
}
```

- `mimetype`: MIME type of the media to show. Must start with either `image/` or
  `video/`.
- `url`: The URL of the media to show.
- `fit` (default: `cover`): Fit the media to the viewer if their aspect ratios
  don't match up. `contain` scales the media such that it is completely visible.
  Some parts of the background may be visible. `cover` will scale the media such
  that it covers to full area of the viewer.
- `color` (default: `black`): The background color of the media as a CSS color
  string. Will only be visible when `fit` is set to `contain`, if the media file
  contains (semi-)transparent parts or if the media's position is changed by an
  animation.
- `startDelay`: (default: depends on the transition): If the media file is a
  video: Start playback after the given number of seconds. Useful for delaying
  the playback to the point where the media is visible during a transition.
- `volume` (default `1`): If the media file is a video: Use this audio volume.
  The value must be in `[0, 1]`.
- `muted` (default `false`): If the media file is a video: When `true`, mute the
  video initially. See the [`unmute` action](#the-mute-and-unmute-actions).
- `transition` (default `{ type: 'none' }`): Define how to visually transition
  from the currently displayed media to the one defined by this action. See the
  section about [transitions](#transitions).
- `animation` (default `{ type: 'none' }`): Define how to animate the media
  defined by this action. See the section about [animations](#animations).

Note that the media will be added to the DOM tree as soon as the action is
issued. Therefore, other actions like changing the audio volume also apply to
the media file, even though its actual display may be delayed due to the
transition.

##### Transitions

By default, media files are displayed immediately during the `show` action.
However, in most cases a smooth transition just looks better. Delaying media
display is also supported.

Similar to actions, transitions are defined by their type and have certain
options:

```typescript
interface Transition {
  type: string;
  options?: Record<string, unknown>;
}
```

Currently, all transitions support at least the following options:

```typescript
interface TransitionOptions {
  delay?: number;
  duration?: number;
}
```

- `delay` (default: `0`): Delay the transition to the new media file by this
  number of seconds. The corresponding HTML element will already be part of the
  DOM tree beforehand, but will be hidden.
- `duration` (default: depends on the transition): Duration of the transition in
  seconds.

The previous media will be removed after `delay + duration` seconds, i.e. the
audio of the previously displayed video will continue playing for this amount of
time.

###### The `none` transition

Display the media abruptly after `delay` seconds.

When this transition is used by the `show` action, the `startDelay` option
defaults to `delay`.

###### The `cross-fade` transition

Cross-fade between the previous media and the current one, i.e. the current
media is displayed with opacity `0` after `delay` seconds and gradually
increases opacity to `1` within `duration` seconds.

When this transition is used by the `show` action, the `startDelay` option
defaults to `delay`.

###### The `fade` transition

After `delay` seconds, fade-out the previous media to `color` for `duration / 2`
(seconds), then, fade-in the current media for `duration / 2` (seconds).

```typescript
interface FadeTransitionOptions extends TransitionOptions {
  color?: string;
}
```

- `color` (default: `black`): The CSS color to fade-out to and fade-in from.

When this transition is used by the `show` action, the `startDelay` option
defaults to `delay + duration / 2`.

##### Animations

Animation can be used to bring some movement into otherwise static images while
they are on display. Animation can also be applied to videos. However, they
should not be overused. Good candidates for video animations are videos with
only slow moving content.

Currently, all animations support at least the following options:

```typescript
interface AnimationOptions {
  delay?: number;
  duration?: number;
}
```

- `delay` (default: `0`): Delay the beginning of the animation by this number of
  seconds. Note that the initial state of the animation will be set immediately,
  regardless of the delay.
- `duration` (default: depends on the animation): Duration of the animation in
  seconds.

Animations will currently only run once, then stop and stay in their final
position.

###### The `none` animation

This animation does nothing. It is used internally as a placeholder whenever
animations are optional.

###### The `pan-zoom` animation

This animates the position and zoom level of the media file on a linear path
over time.

```typescript
interface PanZoomAnimationOptions extends AnimationOptions {
  from?: Partial<View>;
  to?: Partial<View>;
}
```

- `from` (default: `{ x: 0.5, y: 0.5, scale: 1 }`): The initial view after
  applying the animation.
- `to` (default: `{ x: 0.5, y: 0.5, scale: 1 }`): The final view at the end of
  the animation.

```typescript
interface View {
  x: number;
  y: number;
  scale: number;
}
```

- `x`: The horizontal coordinate to center.
- `y`: The vertical coordinate of center.
- `scale`: The scale factor to apply after re-centering.

The view options should be chosen with care. `{ x: 0, y: 0 }` is a valid view,
but will center the upper left corner of the media such that the background will
become visible. Note that negative number are supported as well, even though
their usefulness is questionable.

For media files that are displayed by the `show` action with the `fit` option
set to `cover`, the minimum value of `scale` can be determined as follows:

```typescript
// assumption: ( 0 <= x && x <= 1 ) && ( 0 <= y && y <= 1 )
const borderDistance = Math.min(x, 1 - x, y, 1 - y);
const minScale = 1 / borderDistance;
```

#### The `clear` action

Removes all media from the viewer and clears the background to a certain color,
optionally using a transition:

```javascript
viewer.execute('clear', clearArgs);
```

with `clearArgs` being of type

```typescript
interface ClearActionOptions {
  color?: string;
  transition?: { type: string; options?: Record<string, unknown> };
}
```

- `color` (default: `black`): The background color to clear to.
- `transition` (default `{ type: 'none' }`): Define how to visually transition
  from the currently displayed media to the solid color. See the section about
  [transitions](#transitions).

#### The `preload` action

Preload media files before showing them. Preloading should happen early enough
such that the following is true when the corresponding `show` action is issued:

- Images: Completely downloaded (equivalent to the image's `load` event having
  fired).
- Video: Buffered such that playback can start immediately and can continue to
  the end if download continues at the current download rate (equivalent to the
  video's `canplaythrough` having fired).

The syntax is

```javascript
viewer.execute('preload', preloadArgs);
```

with `preloadArgs` being an array of items of type

```typescript
type PreloadItem = {
  mimetype: string;
  url: string;
};
```

where `mimetype` and `url` are defined as in the arguments to the
[`show` action](#the-show-action).

The action will return an array containing a `Promise` for each item which
resolves once the items has been sufficiently preloaded.

The viewer will create an `<img>` or `<video>` tag for each preload item and, if
necessary, apply the right settings to start buffering. The tags will be
inserted into a hidden area in the viewer's DOM tree. When the media file is
supposed to be displayed through a `show` action, the corresponding HTML element
from the preloading area will be just be moved into the visible area of the
viewer's DOM tree, keeping a cloned element in the preload area for later use.
This makes it possible to display media files directly after `show` action
without having any visual interruption or flickering.

#### The `mute` and `unmute` actions

Mute or unmute the audio of videos:

```javascript
viewer.execute('mute');
viewer.execute('unmute');
```

The action will apply to all currently active media elements, i.e. it also
applies to media currently transitioning in or out of view.

#### The `set-volume` action

Set the audio volume of videos:

```javascript
viewer.execute('set-volume', setVolumeArgs);
```

with `setVolumeArgs` being of type

```typescript
interface SetVolumeActionOptions {
  volume: number;
  mode?: 'absolute' | 'relative';
}
```

- `volume`: The volume to apply. Needs to be in `[0, 1]` for `absolute` mode and
  in `[0,∞)` for `relative` mode.
- `mode` (default: `absolute`): In `absolute` mode, the volume will be applied
  as is to all videos. In `relative` mode, the given volume will be multiplied
  with the current volume of each video, e.g. a value of `0.5` reduces the audio
  volume of all video elements to half of their current volume.

The action will apply to all currently media elements, i.e. it also applies to
media currently transitioning in or out of view.

Note that the volume can also be set for muted elements, i.e. the change in
volume has no immediate effect and will only apply after the element is unmuted.

# The `reload` action

Since the viewer is intended to be controlled from a remote server, the `reload`
action offers a convenient way to reload the client, possibly fetching a new
client version from the server.

```javascript
viewer.execute('reload');
```

Note that the whole page will be reloaded, not just the current viewer instance.

## Build

Install the dependencies:

```shell
npm install
```

Build the redistributable files to the `dist` folder using

```shell
npm run build
```

or start a development server using

```shell
npm run serve
```

Before sending any pull requests, your changes should be properly formatted
using

```shell
npm run format
```

and the linter should not have any complaints:

```shell
npm run lint
```

Check out `package.json` for additional `run` scripts.

This project is using Parcel as a build system. The viewer is written in HTML,
SCSS and Typescript.

## Credits

Developed by Christian Stussak for IMAGINARY gGmbH.

## License

Copyright 2022 IMAGINARY gGmbH

Licensed under the MIT license (see the [`LICENSE`](LICENSE) file).
