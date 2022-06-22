import "core-js/modules/es.promise.finally.js";
import "core-js/modules/web.dom-collections.iterator.js";
import {defineProperty as $2JoAv$defineProperty} from "@swc/helpers";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5e87484880275560$exports = {};

$parcel$defineInteropFlag($5e87484880275560$exports);

$parcel$export($5e87484880275560$exports, "default", function () { return $5e87484880275560$export$2e2bcd8739ae039; });
$parcel$export($5e87484880275560$exports, "HilbertGalleryViewer", function () { return $5e87484880275560$export$2e2bcd8739ae039; });


var $7fdddbbc3df71205$exports = {};
$7fdddbbc3df71205$exports = ":host {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n:host > .container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n:host > .container > .transition {\n  --transition-background-color: black;\n  background-color: var(--transition-background-color);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n:host > .container > .transition > .animation, :host > .container > .transition > .animation > .content {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n:host > .container > .transition > .animation > .content.fit-contain {\n  object-fit: contain;\n}\n\n:host > .container > .transition > .animation > .content.fit-cover {\n  object-fit: cover;\n}\n\n";


class $142b3925b03aaffd$export$2e2bcd8739ae039 {
    buildExecutor(arg) {
        const unpackedArg = this.unpack(arg);
        return ()=>this.execute(unpackedArg)
        ;
    }
    constructor(state){
        this.state = state;
    }
}


var $3615d664d4864d67$exports = {};

$parcel$defineInteropFlag($3615d664d4864d67$exports);

$parcel$export($3615d664d4864d67$exports, "default", function () { return $3615d664d4864d67$export$2e2bcd8739ae039; });
$parcel$export($3615d664d4864d67$exports, "Preloader", function () { return $3615d664d4864d67$export$2e2bcd8739ae039; });

class $3615d664d4864d67$export$2e2bcd8739ae039 {
    preload(mimetype, url) {
        const type = mimetype.split('/', 1)[0];
        const preloadFunc = this.typeRegistry.get(type);
        if (preloadFunc) {
            preloadFunc(url);
            return true;
        }
        return false;
    }
    preloadImage(url) {
        const { href: href  } = new URL(url);
        const image = new Image();
        image.src = href;
        this.refs.set(href, image);
    }
    preloadVideo(url) {
        const { href: href  } = new URL(url);
        const video = document.createElement('video');
        video.preload = 'auto';
        video.src = href;
        this.refs.set(href, video);
    }
    unref(...refs) {
        if (refs.length === 0) this.refs.clear();
        else refs.forEach((ref)=>this.refs.delete(ref)
        );
    }
    constructor(){
        $2JoAv$defineProperty(this, "refs", new Map());
        $2JoAv$defineProperty(this, "typeRegistry", new Map());
        this.typeRegistry.set('image', this.preloadImage.bind(this));
        this.typeRegistry.set('video', this.preloadVideo.bind(this));
    }
}


class $5e6fbd6c6d4e78fc$export$2e2bcd8739ae039 extends $142b3925b03aaffd$export$2e2bcd8739ae039 {
    async execute(items) {
        this.preloader.unref();
        items.forEach(({ mimetype: mimetype , url: url  })=>this.preloader.preload(mimetype, url)
        );
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    unpack(arg) {
        if (!Array.isArray(arg)) throw new TypeError('PreloadAction.unpack(arg): arg must be an array');
        const items = arg;
        items.forEach((item, index)=>{
            const { mimetype: mimetype , url: url  } = item;
            if (typeof mimetype !== 'string') throw new TypeError(`PreloadAction.unpack(arg): item ${index} of args must have a mimetype`);
            if (typeof url !== 'string') throw new TypeError(`PreloadAction.unpack(arg): item ${index} of arg must have an url`);
        });
        return arg;
    }
    constructor(state){
        super(state);
        this.preloader = new $3615d664d4864d67$export$2e2bcd8739ae039();
    }
}


let /* eslint-disable no-console */ $73f0cc697aaef4ab$export$243e62d78d3b544d;
(function($73f0cc697aaef4ab$export$243e62d78d3b544d) {
    $73f0cc697aaef4ab$export$243e62d78d3b544d[$73f0cc697aaef4ab$export$243e62d78d3b544d["OFF"] = 0] = "OFF";
    $73f0cc697aaef4ab$export$243e62d78d3b544d[$73f0cc697aaef4ab$export$243e62d78d3b544d["ERROR"] = 200] = "ERROR";
    $73f0cc697aaef4ab$export$243e62d78d3b544d[$73f0cc697aaef4ab$export$243e62d78d3b544d["WARN"] = 300] = "WARN";
    $73f0cc697aaef4ab$export$243e62d78d3b544d[$73f0cc697aaef4ab$export$243e62d78d3b544d["INFO"] = 400] = "INFO";
    $73f0cc697aaef4ab$export$243e62d78d3b544d[$73f0cc697aaef4ab$export$243e62d78d3b544d["DEBUG"] = 500] = "DEBUG";
    $73f0cc697aaef4ab$export$243e62d78d3b544d[$73f0cc697aaef4ab$export$243e62d78d3b544d["TRACE"] = 600] = "TRACE";
})($73f0cc697aaef4ab$export$243e62d78d3b544d || ($73f0cc697aaef4ab$export$243e62d78d3b544d = {}));
class $73f0cc697aaef4ab$export$2e2bcd8739ae039 {
    error(...args) {
        if (this.level >= $73f0cc697aaef4ab$export$243e62d78d3b544d.ERROR) console.error(...args);
    }
    assert(assertion, ...args) {
        if (this.level >= $73f0cc697aaef4ab$export$243e62d78d3b544d.ERROR) console.assert(assertion, ...args);
    }
    warn(...args) {
        if (this.level >= $73f0cc697aaef4ab$export$243e62d78d3b544d.WARN) console.warn(...args);
    }
    info(...args) {
        if (this.level >= $73f0cc697aaef4ab$export$243e62d78d3b544d.INFO) console.info(...args);
    }
    debug(...args) {
        if (this.level >= $73f0cc697aaef4ab$export$243e62d78d3b544d.DEBUG) console.debug(...args);
    }
    trace(...args) {
        if (this.level >= $73f0cc697aaef4ab$export$243e62d78d3b544d.TRACE) console.trace(...args);
    }
    constructor(level = $73f0cc697aaef4ab$export$243e62d78d3b544d.INFO){
        this.level = level;
    }
}



class $d3a1180d9701768e$export$2e2bcd8739ae039 extends $142b3925b03aaffd$export$2e2bcd8739ae039 {
    // eslint-disable-next-line class-methods-use-this
    async execute() {
        window.location.reload();
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    unpack() {}
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}



class $902852e8711fa3cc$export$c86220c67bdb4242 {
    static create(mimetype, url, objectFit = 'cover') {
        const type = mimetype.split('/', 1)[0];
        let content;
        switch(type){
            case 'image':
                content = $902852e8711fa3cc$export$c86220c67bdb4242.createImage(url);
                break;
            case 'video':
                content = $902852e8711fa3cc$export$c86220c67bdb4242.createVideo(url);
                break;
            default:
                content = $902852e8711fa3cc$export$c86220c67bdb4242.createObject(mimetype, url);
                break;
        }
        content.classList.add('content');
        content.classList.add(`fit-${objectFit}`);
        return content;
    }
    static createObject(mimetype, url) {
        const object = document.createElement('object');
        object.type = mimetype;
        object.data = url;
        return object;
    }
    static createImage(url) {
        const image = document.createElement('img');
        image.src = url;
        return image;
    }
    static createVideo(url) {
        const video = document.createElement('video');
        video.preload = 'auto';
        video.src = url;
        video.autoplay = false;
        return video;
    }
    static async awaitLoad(content) {
        return new Promise((resolve)=>{
            if (content.tagName === 'IMG') {
                const image = content;
                if (image.complete) resolve(content);
                else {
                    const handler = ()=>{
                        image.removeEventListener('load', handler);
                        image.removeEventListener('error', handler);
                        requestAnimationFrame(()=>resolve(content)
                        );
                    };
                    image.addEventListener('load', handler);
                    image.addEventListener('error', handler);
                }
            } else // consider the transition-ol done after a grace period of 1s
            setTimeout(()=>resolve(content)
            , 1000);
        });
    }
    static play(content) {
        if (content.tagName === 'VIDEO') {
            const video = content;
            video.play().finally(()=>{});
        }
    }
}




class $553ffd1aaf201f7b$export$af22135957e110d7 {
    promise() {
        return this._promise;
    }
    resolve(result) {
        return this._resolve(result);
    }
    reject() {
        return this._reject();
    }
    constructor(){
        // dummy initialization required to satisfy TS2564 (definite assignment)
        let tmpResolve = (result)=>{};
        let tmpReject = ()=>{};
        this._promise = new Promise((resolve, reject)=>{
            tmpResolve = resolve;
            tmpReject = reject;
        });
        this._resolve = tmpResolve;
        this._reject = tmpReject;
    }
}


class $064bb8c5ac2b066c$export$2e2bcd8739ae039 {
    isCancelled() {
        return this._isCancelled;
    }
    targetVisible() {
        return this.targetVisiblePEC.promise();
    }
    done() {
        return this.donePEC.promise();
    }
    isDone() {
        return this._isDone;
    }
    constructor(container, from, to){
        $2JoAv$defineProperty(this, "_isCancelled", false);
        $2JoAv$defineProperty(this, "_isDone", false);
        this.container = container;
        this.from = from;
        this.to = to;
        this.targetVisiblePEC = new $553ffd1aaf201f7b$export$af22135957e110d7();
        this.donePEC = new $553ffd1aaf201f7b$export$af22135957e110d7();
        // prevent uncaught exceptions in promise
        this.targetVisiblePEC.promise().catch(()=>{});
        this.donePEC.promise().catch(()=>{});
    }
}


class $f38908b3845be978$export$2e2bcd8739ae039 extends $064bb8c5ac2b066c$export$2e2bcd8739ae039 {
    // eslint-disable-next-line class-methods-use-this
    cancel() {}
    // eslint-disable-next-line class-methods-use-this
    targetVisible() {
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    done() {
        return Promise.resolve();
    }
    static unpack() {}
    static prepare() {
        return (container, from, to)=>new $f38908b3845be978$export$2e2bcd8739ae039(container, from, to)
        ;
    }
    static getStyleSheetAsString() {
        return '';
    }
    constructor(container = document.createElement('div'), from = document.createElement('div'), to = document.createElement('div')){
        super(container, from, to);
        this._isCancelled = false;
        this._isDone = true;
    }
}


var $30e6b4c7ea711f92$exports = {};
$30e6b4c7ea711f92$exports = "@-webkit-keyframes transition-fade-out {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes transition-fade-out {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes transition-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.container {\n  --transition-fade-color: black;\n  --transition-fade-duration: 1s;\n  --transition-fade-duration-half: calc(var(--transition-fade-duration) / 2);\n  background-color: var(--transition-fade-color);\n}\n\n.container > .transition.fade {\n  -webkit-animation-duration: var(--transition-fade-duration-half);\n  animation-duration: var(--transition-fade-duration-half);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.container > .transition.fade.fade-out {\n  -webkit-animation-name: transition-fade-out;\n  animation-name: transition-fade-out;\n}\n\n.container > .transition.fade.fade-in {\n  -webkit-animation-name: transition-fade-in;\n  animation-name: transition-fade-in;\n  -webkit-animation-delay: var(--transition-fade-duration-half);\n  animation-delay: var(--transition-fade-duration-half);\n}\n\n";



const $3c3db86e02d1b928$var$defaultOptions = {
    duration: 500,
    color: '#000'
};
class $3c3db86e02d1b928$export$2e2bcd8739ae039 extends $064bb8c5ac2b066c$export$2e2bcd8739ae039 {
    end() {
        if (!this.isCancelled() && !this.isDone()) {
            this.cleanup();
            this._isDone = true;
            this.targetVisiblePEC.resolve();
            this.donePEC.resolve();
        }
    }
    cancel() {
        if (!this.isCancelled() && !this.isDone()) {
            this.cleanup();
            this._isCancelled = true;
            this.targetVisiblePEC.resolve();
            this.donePEC.reject();
        }
    }
    cleanup() {
        this.from.removeEventListener('animationend', this.fromEndCancelHandler);
        this.from.removeEventListener('animationcancel', this.fromEndCancelHandler);
        this.to.removeEventListener('animationend', this.toEndHandler);
        this.to.removeEventListener('animationcancel', this.toCancelHandler);
        const { style: style  } = this.container;
        style.removeProperty('--transition-fade-duration');
        style.removeProperty('--transition-fade-color');
        this.from.classList.remove('fade');
        this.from.classList.remove('fade-out');
        this.to.classList.remove('fade');
        this.to.classList.remove('fade-in');
    }
    static unpack(options) {
        return options;
    }
    static prepare(options) {
        const unpackedOptions = $3c3db86e02d1b928$export$2e2bcd8739ae039.unpack(options);
        return (container, from, to)=>new $3c3db86e02d1b928$export$2e2bcd8739ae039(container, from, to, unpackedOptions)
        ;
    }
    static getStyleSheetAsString() {
        return (/*@__PURE__*/$parcel$interopDefault($30e6b4c7ea711f92$exports));
    }
    constructor(container, from, to, options){
        super(container, from, to);
        const { duration: duration , color: color  } = {
            ...$3c3db86e02d1b928$var$defaultOptions,
            ...options !== null && options !== void 0 ? options : {}
        };
        const { style: style  } = container;
        style.setProperty('--transition-fade-duration', `${duration}s`);
        style.setProperty('--transition-fade-color', `${color}`);
        from.classList.add('fade');
        from.classList.add('fade-out');
        this.fromEndCancelHandler = ({ animationName: animationName  })=>{
            if (animationName === 'transition-fade-out') this.targetVisiblePEC.resolve();
        };
        from.addEventListener('animationend', this.fromEndCancelHandler);
        from.addEventListener('animationcancel', this.fromEndCancelHandler);
        to.classList.add('fade');
        to.classList.add('fade-in');
        this.toEndHandler = ({ animationName: animationName  })=>{
            if (animationName === 'transition-fade-in') this.end();
        };
        this.toCancelHandler = ({ animationName: animationName  })=>{
            if (animationName === 'transition-fade-in') this.cancel();
        };
        to.addEventListener('animationend', this.toEndHandler);
        to.addEventListener('animationcancel', this.toCancelHandler);
    }
}


var $2daa161ca918db61$exports = {};
$2daa161ca918db61$exports = "@-webkit-keyframes transition-cross-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-cross-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.container {\n  --transition-cross-fade-duration: 1s;\n}\n\n.container > .transition.cross-fade.cross-fade-in {\n  -webkit-animation-duration: var(--transition-cross-fade-duration);\n  animation-duration: var(--transition-cross-fade-duration);\n  -webkit-animation-name: transition-cross-fade-in;\n  animation-name: transition-cross-fade-in;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";



const $a7d684426e40fb59$var$defaultOptions = {
    duration: 500
};
class $a7d684426e40fb59$export$2e2bcd8739ae039 extends $064bb8c5ac2b066c$export$2e2bcd8739ae039 {
    end() {
        if (!this.isCancelled() && !this.isDone()) {
            this.cleanup();
            this._isDone = true;
            this.donePEC.resolve();
        }
    }
    cancel() {
        if (!this.isCancelled() && !this.isDone()) {
            this.cleanup();
            this._isCancelled = true;
            this.donePEC.reject();
        }
    }
    cleanup() {
        this.to.removeEventListener('animationend', this.toEndHandler);
        this.to.removeEventListener('animationcancel', this.toCancelHandler);
        const { style: style  } = this.container;
        style.removeProperty('--transition-cross-fade-duration');
        this.from.classList.remove('cross-fade');
        this.from.classList.remove('cross-fade-out');
        this.to.classList.remove('cross-fade');
        this.to.classList.remove('cross-fade-in');
    }
    static unpack(options) {
        return options;
    }
    static prepare(options) {
        const unpackedOptions = $a7d684426e40fb59$export$2e2bcd8739ae039.unpack(options);
        return (container, from, to)=>new $a7d684426e40fb59$export$2e2bcd8739ae039(container, from, to, unpackedOptions)
        ;
    }
    static getStyleSheetAsString() {
        return (/*@__PURE__*/$parcel$interopDefault($2daa161ca918db61$exports));
    }
    constructor(container, from, to, options){
        super(container, from, to);
        const { duration: duration  } = {
            ...$a7d684426e40fb59$var$defaultOptions,
            ...options !== null && options !== void 0 ? options : {}
        };
        const { style: style  } = container;
        style.setProperty('--transition-cross-fade-duration', `${duration}s`);
        from.classList.add('cross-fade');
        from.classList.add('cross-fade-out');
        to.classList.add('cross-fade');
        to.classList.add('cross-fade-in');
        this.toEndHandler = ({ animationName: animationName  })=>{
            if (animationName === 'transition-cross-fade-in') this.end();
        };
        this.toCancelHandler = ({ animationName: animationName  })=>{
            if (animationName === 'transition-cross-fade-in') this.cancel();
        };
        to.addEventListener('animationend', this.toEndHandler);
        to.addEventListener('animationcancel', this.toCancelHandler);
        this.targetVisiblePEC.resolve();
    }
}


/* eslint-disable import/prefer-default-export */ function $944e67b56b7529be$export$c2aff9e92362a9b2(root, stylesheetText, id) {
    const style = document.createElement('style');
    if (typeof id !== 'undefined') style.id = id;
    style.textContent = stylesheetText;
    const selector = "style[type='text/css']:last-of-type, style:not([type]):last-of-type";
    const lastStyleElem = root.querySelector(selector);
    if (lastStyleElem === null) root.prepend(style);
    else lastStyleElem.after(style);
}


class $4e55626f8e7395c3$export$2e2bcd8739ae039 {
    registerKnownTransitions() {
        this.register('none', $f38908b3845be978$export$2e2bcd8739ae039);
        this.register('fade', $3c3db86e02d1b928$export$2e2bcd8739ae039);
        this.register('cross-fade', $a7d684426e40fb59$export$2e2bcd8739ae039);
    }
    register(id, transitionClass) {
        if (this.transitionRegistry.has(id)) throw new Error('Transition type already registered');
        $944e67b56b7529be$export$c2aff9e92362a9b2(this.root, transitionClass.getStyleSheetAsString(), `transition-${id}`);
        this.transitionRegistry.set(id, transitionClass);
    }
    prepare(type = 'none', options = {}) {
        const TransitionClass = this.transitionRegistry.get(type);
        if (!TransitionClass) throw new Error(`Unknown transition type: ${type}`);
        // unpacks the options and throws an exception if they are invalid,
        // but does create the actual transition yet
        return TransitionClass.prepare(options);
    }
    constructor(root){
        $2JoAv$defineProperty(this, "transitionRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
}







class $58210196cc8b5597$export$2e2bcd8739ae039 {
    isCancelled() {
        return this._isCancelled;
    }
    done() {
        return this.donePEC.promise();
    }
    isDone() {
        return this._isDone;
    }
    constructor(wrapper, content){
        $2JoAv$defineProperty(this, "_isCancelled", false);
        $2JoAv$defineProperty(this, "_isDone", false);
        this.wrapper = wrapper;
        this.content = content;
        this.donePEC = new $553ffd1aaf201f7b$export$af22135957e110d7();
        // prevent uncaught exceptions in promise
        this.donePEC.promise().catch(()=>{});
    }
}


// @staticImplements<AnimationStatic<NoneAnimation, void>>()
class $2fccf8f122ff6983$export$a27a75f1864d99f4 extends $58210196cc8b5597$export$2e2bcd8739ae039 {
    // eslint-disable-next-line class-methods-use-this
    cancel() {}
    // eslint-disable-next-line class-methods-use-this
    targetVisible() {
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    done() {
        return Promise.resolve();
    }
    static unpack() {}
    static prepare() {
        return (wrapper, content)=>new $2fccf8f122ff6983$export$a27a75f1864d99f4(wrapper, content)
        ;
    }
    static getStyleSheetAsString() {
        return '';
    }
    constructor(wrapper = document.createElement('div'), content = document.createElement('div')){
        super(wrapper, content);
        this._isCancelled = false;
        this._isDone = true;
    }
}


var $567faa1941278714$exports = {};
$567faa1941278714$exports = "@-webkit-keyframes animation-pan-zoom-animation {\n  0% {\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    top: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n    left: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n  }\n}\n\n@keyframes animation-pan-zoom-animation {\n  0% {\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    top: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n    left: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n  }\n}\n\n@-webkit-keyframes animation-pan-zoom-content {\n  0% {\n    width: 100%;\n    height: 100%;\n    object-position: 50% 50%;\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    left: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-x) ) );\n    top: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-y) ) );\n    width: calc(100% * var(--animation-pan-zoom-target-scale) );\n    height: calc(100% * var(--animation-pan-zoom-target-scale) );\n    object-position: calc(100% * var(--animation-pan-zoom-target-x) ) calc(100% * var(--animation-pan-zoom-target-y) );\n  }\n}\n\n@keyframes animation-pan-zoom-content {\n  0% {\n    width: 100%;\n    height: 100%;\n    object-position: 50% 50%;\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    left: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-x) ) );\n    top: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-y) ) );\n    width: calc(100% * var(--animation-pan-zoom-target-scale) );\n    height: calc(100% * var(--animation-pan-zoom-target-scale) );\n    object-position: calc(100% * var(--animation-pan-zoom-target-x) ) calc(100% * var(--animation-pan-zoom-target-y) );\n  }\n}\n\n.container > .transition > .animation.animation-pan-zoom {\n  --animation-pan-zoom-duration: 0s;\n  --animation-pan-zoom-target-x: .5;\n  --animation-pan-zoom-target-y: .5;\n  --animation-pan-zoom-target-scale: 1;\n  -webkit-animation-name: animation-pan-zoom-animation;\n  animation-name: animation-pan-zoom-animation;\n}\n\n.container > .transition > .animation.animation-pan-zoom, .container > .transition > .animation.animation-pan-zoom > * {\n  -webkit-animation-duration: var(--animation-pan-zoom-duration);\n  animation-duration: var(--animation-pan-zoom-duration);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.container > .transition > .animation.animation-pan-zoom > * {\n  -webkit-animation-name: animation-pan-zoom-content;\n  animation-name: animation-pan-zoom-content;\n  position: relative;\n}\n\n.sdfdsf-resizable > div {\n  --zoom-factor: 1;\n  --pan-target-x: .5;\n  --pan-target-y: .5;\n  --transition-duration: 10s;\n  width: 100%;\n  height: 100%;\n  top: calc(50% - 50% * var(--zoom-factor) );\n  left: calc(50% - 50% * var(--zoom-factor) );\n  z-index: -1;\n  transition-property: top, left, width, height;\n  position: relative;\n}\n\n.sdfdsf-resizable > div, .sdfdsf-resizable > div * {\n  transition-duration: var(--transition-duration);\n}\n\n.sdfdsf-resizable > div img {\n  left: calc(100% * var(--zoom-factor) * (.5 - var(--pan-target-x) ) );\n  top: calc(100% * var(--zoom-factor) * (.5 - var(--pan-target-y) ) );\n  width: calc(100% * var(--zoom-factor) );\n  height: calc(100% * var(--zoom-factor) );\n  object-fit: cover;\n  object-position: calc(100% * var(--pan-target-x) ) calc(100% * var(--pan-target-y) );\n  transition-property: top, left, width, height, object-position;\n  position: relative;\n}\n\n";



function $6649d6554d6434d8$var$setCSSPropertyIfDefined(elem, property, formatter, value) {
    if (typeof value !== 'undefined') elem.style.setProperty(property, formatter(value));
}
class $6649d6554d6434d8$export$2e2bcd8739ae039 extends $58210196cc8b5597$export$2e2bcd8739ae039 {
    async asyncInit(options) {
        this.wrapper.classList.add('animation-pan-zoom');
        if (typeof options.from !== 'undefined') try {
            const { from: from  } = options;
            this.setDefinedCssProperties(0, from);
            // let the values settle on the next frame
            await new Promise((resolve)=>{
                requestAnimationFrame(resolve);
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        if (!this.isCancelled()) {
            const { duration: duration , to: to  } = options;
            this.setDefinedCssProperties(duration, to);
            this.endHandler = ({ animationName: animationName  })=>{
                if (animationName === 'animation-pan-zoom-animation') this.end();
            };
            this.cancelHandler = ({ animationName: animationName  })=>{
                if (animationName === 'animation-pan-zoom-animation') this.cancel();
            };
            this.wrapper.addEventListener('animationend', this.endHandler);
            this.wrapper.addEventListener('animationcancel', this.cancelHandler);
        }
    }
    setDefinedCssProperties(duration, { x: x , y: y , scale: scale  }) {
        const { wrapper: w  } = this;
        const s = $6649d6554d6434d8$var$setCSSPropertyIfDefined;
        s(w, '--animation-pan-zoom-duration', (v)=>`${v}s`
        , duration);
        s(w, '--animation-pan-zoom-target-x', (v)=>`${v}`
        , x);
        s(w, '--animation-pan-zoom-target-y', (v)=>`${v}`
        , y);
        s(w, '--animation-pan-zoom-target-scale', (v)=>`${v}`
        , scale);
    }
    end() {
        if (!this.isCancelled() && !this.isDone()) {
            this.cleanup();
            this._isDone = true;
            this.donePEC.resolve();
        }
    }
    cancel() {
        if (!this.isCancelled() && !this.isDone()) {
            this.cleanup();
            this._isCancelled = true;
            this.donePEC.reject();
        }
    }
    cleanup() {
        const { wrapper: wrapper  } = this;
        wrapper.addEventListener('animationend', this.endHandler);
        wrapper.addEventListener('animationcancel', this.cancelHandler);
    /**
     * We do not remove the CSS classes and custom properties to keep the
     * forwards fill-mode of the animation (target state).
     */ }
    static unpack(options) {
        return options;
    }
    static prepare(options) {
        const unpackedOptions = $6649d6554d6434d8$export$2e2bcd8739ae039.unpack(options);
        return (wrapper, content)=>new $6649d6554d6434d8$export$2e2bcd8739ae039(wrapper, content, unpackedOptions)
        ;
    }
    static getStyleSheetAsString() {
        return (/*@__PURE__*/$parcel$interopDefault($567faa1941278714$exports));
    }
    constructor(wrapper, content, options){
        super(wrapper, content);
        this.endHandler = ()=>{};
        this.cancelHandler = ()=>{};
        this.asyncInit(options).finally(()=>{});
    }
}


class $440c266c784c3f9b$export$c11ebe2b2060f51f {
    registerKnownTransitions() {
        this.register('none', $2fccf8f122ff6983$export$a27a75f1864d99f4);
        this.register('pan-zoom', $6649d6554d6434d8$export$2e2bcd8739ae039);
    }
    register(id, AnimationClass) {
        if (this.animationRegistry.has(id)) throw new Error('Animation type already registered');
        $944e67b56b7529be$export$c2aff9e92362a9b2(this.root, AnimationClass.getStyleSheetAsString(), `animation-${id}`);
        this.animationRegistry.set(id, AnimationClass);
    }
    prepare(type = 'none', options = {}) {
        const AnimationClass = this.animationRegistry.get(type);
        if (!AnimationClass) throw new Error(`Unknown animation type: ${type}`);
        // unpacks the options and throws an exception if they are invalid,
        // but does create the actual transition yet
        return AnimationClass.prepare(options);
    }
    constructor(root){
        $2JoAv$defineProperty(this, "animationRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
}



class $ba433ce4422f5858$export$2e2bcd8739ae039 extends $142b3925b03aaffd$export$2e2bcd8739ae039 {
    removePrevious() {
        // keep only current content
        const { container: container  } = this.state;
        while(container.children.length > 1)container.children[0].remove();
    }
    cleanup() {
        this.transition.cancel();
        this.animation.cancel();
        this.removePrevious();
    }
    appendCurrentContent(content, color) {
        const animation = document.createElement('div');
        animation.classList.add('animation');
        animation.appendChild(content);
        const transition = document.createElement('div');
        transition.classList.add('transition');
        transition.style.setProperty('--transition-background-color', color);
        transition.appendChild(animation);
        const { container: container  } = this.state;
        container.appendChild(transition);
        return {
            transition: transition,
            animation: animation,
            content: content
        };
    }
    async execute(arg) {
        const { mimetype: mimetype , url: url , fit: fit , color: color  } = arg;
        // first parse args and prepare transition and animation
        const transitionCreator = this.prepareTransition(arg);
        const animationCreator = this.prepareAnimation(arg);
        // now that arguments are parsed: instantiate everything
        const content = $902852e8711fa3cc$export$c86220c67bdb4242.create(mimetype, url, fit);
        try {
            await $902852e8711fa3cc$export$c86220c67bdb4242.awaitLoad(content);
        } catch (e) {
            this.state.log.warn('Waiting for content to load failed. Proceeding anyway.');
        }
        this.cleanup();
        const previous = this.current;
        this.current = this.appendCurrentContent(content, color !== null && color !== void 0 ? color : 'black');
        this.transition = this.createTransition(transitionCreator, previous);
        try {
            await this.transition.targetVisible();
        } catch (e1) {
            this.state.log.warn('Waiting for target to become visible failed. Proceeding anyway.');
        }
        $902852e8711fa3cc$export$c86220c67bdb4242.play(content);
        this.animation = this.createAnimation(animationCreator);
        try {
            await this.transition.done();
        } catch (e2) {
            const msg = 'Waiting for transition to end failed. Proceeding anyway';
            if (e2) this.state.log.warn(msg, e2);
            else this.state.log.warn(msg);
        }
        this.removePrevious();
    }
    prepareTransition(arg) {
        const { transition: transition  } = arg;
        const { type: type , options: options  } = transition !== null && transition !== void 0 ? transition : {
            type: 'none',
            options: {}
        };
        return this.transitionFactory.prepare(type, options);
    }
    prepareAnimation(arg) {
        const { animation: animation  } = arg;
        const { type: type , options: options  } = animation !== null && animation !== void 0 ? animation : {
            type: 'none',
            options: {}
        };
        return this.animationFactory.prepare(type, options);
    }
    createTransition(creator, previous) {
        const { container: container  } = this.state;
        const from = previous.transition;
        const to = this.current.transition;
        return creator(container, from, to);
    }
    createAnimation(creator) {
        const { animation: wrapper , content: content  } = this.current;
        return creator(wrapper, content);
    }
    // eslint-disable-next-line class-methods-use-this
    unpack(arg) {
        if (typeof arg !== 'object') throw new TypeError('ShowAction.unpack(arg): arg must be an object');
        // TODO: further type checking
        return arg;
    }
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
        this.transitionFactory = new $4e55626f8e7395c3$export$2e2bcd8739ae039(state.shadowRoot);
        this.animationFactory = new $440c266c784c3f9b$export$c11ebe2b2060f51f(state.shadowRoot);
        this.transition = new $f38908b3845be978$export$2e2bcd8739ae039();
        this.animation = new $2fccf8f122ff6983$export$a27a75f1864d99f4();
        const dummy = document.createElement('div');
        this.current = this.appendCurrentContent(dummy, 'black');
    }
}



class $5e87484880275560$export$2e2bcd8739ae039 extends HTMLElement {
    createActionRegistry() {
        const registry = new Map();
        registry.set('reload', new $d3a1180d9701768e$export$2e2bcd8739ae039(this.state));
        registry.set('preload', new $5e6fbd6c6d4e78fc$export$2e2bcd8739ae039(this.state));
        registry.set('show', new $ba433ce4422f5858$export$2e2bcd8739ae039(this.state));
        return registry;
    }
    async execute(action, arg) {
        // executeImpl only exists for the purpose of renaming the parameters
        await this.executeImpl(action, arg);
    }
    async executeImpl(actionName, arg) {
        const action = this.actionRegistry.get(actionName);
        if (action) {
            // this may throw an exception if arg has invalid type
            const executor = action.buildExecutor(arg);
            // the executor encapsulates the preprocessed arg
            // and allows type-safe execution
            await executor();
        } else throw new TypeError('HilbertGalleryViewer.execute(): unknown action');
    }
    constructor(){
        super();
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        $944e67b56b7529be$export$c2aff9e92362a9b2(shadowRoot, (/*@__PURE__*/$parcel$interopDefault($7fdddbbc3df71205$exports)));
        const container = document.createElement('div');
        container.classList.add('container');
        shadowRoot.appendChild(container);
        this.state = {
            log: new $73f0cc697aaef4ab$export$2e2bcd8739ae039($73f0cc697aaef4ab$export$243e62d78d3b544d.WARN),
            shadowRoot: shadowRoot,
            container: container
        };
        this.actionRegistry = this.createActionRegistry();
    }
}
customElements.define('hilbert-gallery-viewer', $5e87484880275560$export$2e2bcd8739ae039);





export {$5e87484880275560$export$2e2bcd8739ae039 as HilbertGalleryViewer, $3615d664d4864d67$export$2e2bcd8739ae039 as Preloader};
//# sourceMappingURL=hilbert-gallery-viewer.mjs.map
