import $9vIO6$swchelperssrc_define_propertymjs from "@swc/helpers/src/_define_property.mjs";
import "core-js/modules/es.promise.finally.js";
import "core-js/modules/web.dom-collections.iterator.js";
import $9vIO6$ajv, {JSONSchemaType as $9vIO6$JSONSchemaType} from "ajv";
import {ResizeObserver as $9vIO6$ResizeObserver} from "@juggle/resize-observer";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}



var $6a82cea56a5d57cd$exports = {};
$6a82cea56a5d57cd$exports = ":host {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n}\n\n:host > .container, :host > .container > .slide-outer-wrapper, :host > .container > .slide-outer-wrapper > .slide-inner-wrapper {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide {\n  --slide-background-color: black;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  background-color: var(--slide-background-color);\n  --fit-cover-max-width: auto;\n  --fit-cover-max-height: auto;\n  --fit-contain-min-width: auto;\n  --fit-contain-min-height: auto;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  position: absolute;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide > .content {\n  position: absolute;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide > .content.fit-cover {\n  max-width: var(--fit-contain-max-width);\n  max-height: var(--fit-contain-max-height);\n  min-width: 100%;\n  min-height: 100%;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide > .content.fit-contain {\n  min-width: var(--fit-contain-min-width);\n  min-height: var(--fit-contain-min-height);\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.preload-area {\n  display: none;\n}\n\n";



class $c8dd2254d196ae65$var$Base {
    buildExecutor(arg) {
        const unpackedArg = this.unpack(arg);
        return ()=>this.execute(unpackedArg);
    }
    constructor(state){
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "state", void 0);
        this.state = state;
    }
}
var $c8dd2254d196ae65$export$2e2bcd8739ae039 = $c8dd2254d196ae65$var$Base;


/* class decorator for ensuring static elements on classes */ function $45504323f366cd38$export$77e1154930d99c3d() {
    return (constructor)=>constructor;
}
/**
 * This function can be used to check if the type of a variable has been
 * narrowed down to the `never` type, i.e. that at the time of calling this
 * function, all other possible types have been covered beforehand.
 * @param n The variable to check for the `never` type.
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
function $45504323f366cd38$export$57b5e12ee8bbcf57(n) {
    throw new TypeError("This function should never be called. If it has been called, your type narrowing is incomplete.");
}



const $fa7c9eff966cd673$var$ajv = new (0, $9vIO6$ajv)();
function $fa7c9eff966cd673$export$edf3ed1163beae37(validate) {
    return (data, dataCtx)=>{
        if (typeof dataCtx === "undefined") {
            if (validate(data)) return data;
        } else if (validate(data)) return data;
        throw new TypeError(JSON.stringify(validate.errors));
    };
}
function $fa7c9eff966cd673$export$9ea1f4fe5062c6d(schema, _meta) {
    return $fa7c9eff966cd673$export$edf3ed1163beae37(typeof _meta === "undefined" ? $fa7c9eff966cd673$var$ajv.compile(schema) : $fa7c9eff966cd673$var$ajv.compile(schema, _meta));
}


const $d25ad1ee5461b425$var$preloadActionOptionsSchema = {
    type: "array",
    items: {
        type: "object",
        properties: {
            mimetype: {
                type: "string"
            },
            url: {
                type: "string"
            }
        },
        required: [
            "mimetype",
            "url"
        ]
    }
};
const $d25ad1ee5461b425$var$validatePreloadActionOptions = (0, $fa7c9eff966cd673$export$9ea1f4fe5062c6d)($d25ad1ee5461b425$var$preloadActionOptionsSchema);
class $d25ad1ee5461b425$var$PreloadAction extends (0, $c8dd2254d196ae65$export$2e2bcd8739ae039) {
    async execute(items) {
        const { preloader: preloader  } = this.state;
        preloader.clear();
        preloader.preload(...items);
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    unpack(options) {
        return $d25ad1ee5461b425$var$validatePreloadActionOptions(options);
    }
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $d25ad1ee5461b425$export$2e2bcd8739ae039 = $d25ad1ee5461b425$var$PreloadAction;



/* eslint-disable no-console */ var $06da9e0071dc9699$export$243e62d78d3b544d;
(function(LogLevel1) {
    LogLevel1[LogLevel1["OFF"] = 0] = "OFF";
    LogLevel1[LogLevel1["ERROR"] = 200] = "ERROR";
    LogLevel1[LogLevel1["WARN"] = 300] = "WARN";
    LogLevel1[LogLevel1["INFO"] = 400] = "INFO";
    LogLevel1[LogLevel1["DEBUG"] = 500] = "DEBUG";
    LogLevel1[LogLevel1["TRACE"] = 600] = "TRACE";
})($06da9e0071dc9699$export$243e62d78d3b544d || ($06da9e0071dc9699$export$243e62d78d3b544d = {}));
class $06da9e0071dc9699$export$2e2bcd8739ae039 {
    error(...args) {
        if (this.level >= $06da9e0071dc9699$export$243e62d78d3b544d.ERROR) console.error(...args);
    }
    assert(assertion, ...args) {
        if (this.level >= $06da9e0071dc9699$export$243e62d78d3b544d.ERROR) console.assert(assertion, ...args);
    }
    warn(...args) {
        if (this.level >= $06da9e0071dc9699$export$243e62d78d3b544d.WARN) console.warn(...args);
    }
    info(...args) {
        if (this.level >= $06da9e0071dc9699$export$243e62d78d3b544d.INFO) console.info(...args);
    }
    debug(...args) {
        if (this.level >= $06da9e0071dc9699$export$243e62d78d3b544d.DEBUG) console.debug(...args);
    }
    trace(...args) {
        if (this.level >= $06da9e0071dc9699$export$243e62d78d3b544d.TRACE) console.trace(...args);
    }
    constructor(level = $06da9e0071dc9699$export$243e62d78d3b544d.INFO){
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "level", void 0);
        this.level = level;
    }
}



class $4e99b53c19192378$var$ReloadAction extends (0, $c8dd2254d196ae65$export$2e2bcd8739ae039) {
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
var $4e99b53c19192378$export$2e2bcd8739ae039 = $4e99b53c19192378$var$ReloadAction;





class $940da77736a2a569$var$Preloader {
    static key(mimetype, url) {
        return `{${mimetype}}{${url}}`;
    }
    preloadImpl(mimetype, url) {
        const key = $940da77736a2a569$var$Preloader.key(mimetype, url);
        const cpe = $940da77736a2a569$var$Preloader.createPreloadingElement.bind($940da77736a2a569$var$Preloader);
        var ref;
        const element = (ref = this.refs.get(key)) !== null && ref !== void 0 ? ref : cpe(mimetype, url);
        this.container.appendChild(element);
        this.refs.set(key, element);
        return {
            key: key,
            element: element
        };
    }
    preload(...items) {
        items.forEach(({ mimetype: mimetype , url: url  })=>this.preloadImpl(mimetype, url));
    }
    get(mimetype, url) {
        const { key: key , element: element  } = this.preloadImpl(mimetype, url);
        element.remove();
        const clonedElement = element.cloneNode(true);
        this.container.appendChild(clonedElement);
        this.refs.set(key, clonedElement);
        return element;
    }
    static createPreloadingElement(mimetype, url) {
        const type = mimetype.split("/", 1)[0];
        switch(type){
            case "image":
                return $940da77736a2a569$var$Preloader.createPreloadingImage(url);
            case "video":
                return $940da77736a2a569$var$Preloader.createPreloadingVideo(url);
            default:
                throw new TypeError(`Unsupported MIME type: ${type} (${mimetype})`);
        }
    }
    static createPreloadingImage(url) {
        const { href: href  } = new URL(url);
        const image = new Image();
        image.src = href;
        return image;
    }
    static createPreloadingVideo(url) {
        const video = document.createElement("video");
        video.preload = "auto";
        video.src = url;
        video.autoplay = false;
        return video;
    }
    unrefImpl(...keys) {
        keys.forEach((key)=>{
            const element = this.refs.get(key);
            element === null || element === void 0 ? void 0 : element.remove();
            this.refs.delete(key);
        });
    }
    unref(...refs) {
        const keys = refs.map(({ mimetype: mimetype , url: url  })=>$940da77736a2a569$var$Preloader.key(mimetype, url));
        this.unrefImpl(...keys);
    }
    clear() {
        this.unrefImpl(...this.refs.keys());
    }
    constructor(container = document.createElement("div")){
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "container", void 0);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "refs", new Map());
        this.container = container;
    }
}
var $940da77736a2a569$export$2e2bcd8739ae039 = $940da77736a2a569$var$Preloader;


class $211cca56a875d2d3$var$ContentCreator {
    static create(mimetype, url, preloader = new (0, $940da77736a2a569$export$2e2bcd8739ae039)()) {
        return preloader.get(mimetype, url);
    }
    static async readyForDisplay(content) {
        if ($211cca56a875d2d3$var$ContentCreator.isImage(content)) await $211cca56a875d2d3$var$ContentCreator.readyForDisplayImage(content);
        else if ($211cca56a875d2d3$var$ContentCreator.isVideo(content)) await $211cca56a875d2d3$var$ContentCreator.readyForDisplayVideo(content);
        else (0, $45504323f366cd38$export$57b5e12ee8bbcf57)(content);
        return content;
    }
    static async readyForDisplayImage(image) {
        if (!image.complete) await $211cca56a875d2d3$var$ContentCreator.waitForEvents(image, [
            "load"
        ], [
            "abort",
            "error"
        ]);
        return image;
    }
    static async readyForDisplayVideo(video) {
        if (video.readyState < HTMLMediaElement.HAVE_ENOUGH_DATA) await $211cca56a875d2d3$var$ContentCreator.waitForEvents(video, [
            "canplaythrough"
        ], [
            "abort",
            "error"
        ]);
        return video;
    }
    static play(content) {
        if ($211cca56a875d2d3$var$ContentCreator.isImage(content)) // NOOP
        return content;
        if ($211cca56a875d2d3$var$ContentCreator.isVideo(content)) {
            content.play().finally(()=>{});
            return content;
        }
        return (0, $45504323f366cd38$export$57b5e12ee8bbcf57)(content);
    }
    static setVolume(content, volume, mode) {
        if ($211cca56a875d2d3$var$ContentCreator.isImage(content)) // NOOP
        return content;
        if ($211cca56a875d2d3$var$ContentCreator.isVideo(content)) {
            switch(mode){
                case "absolute":
                    // eslint-disable-next-line no-param-reassign
                    content.volume = Math.min(1, Math.max(volume, 0));
                    break;
                case "relative":
                    // eslint-disable-next-line no-param-reassign
                    content.volume = Math.min(1, Math.max(content.volume * volume, 0));
                    break;
                default:
                    (0, $45504323f366cd38$export$57b5e12ee8bbcf57)(mode);
            }
            return content;
        }
        return (0, $45504323f366cd38$export$57b5e12ee8bbcf57)(content);
    }
    static setMuted(content, value) {
        if ($211cca56a875d2d3$var$ContentCreator.isImage(content)) // NOOP
        return content;
        if ($211cca56a875d2d3$var$ContentCreator.isVideo(content)) {
            // eslint-disable-next-line no-param-reassign
            content.muted = value;
            return content;
        }
        return (0, $45504323f366cd38$export$57b5e12ee8bbcf57)(content);
    }
    static async getDimensions(content) {
        if ($211cca56a875d2d3$var$ContentCreator.isImage(content)) return $211cca56a875d2d3$var$ContentCreator.getDimensionsImage(content);
        if ($211cca56a875d2d3$var$ContentCreator.isVideo(content)) return $211cca56a875d2d3$var$ContentCreator.getDimensionsVideo(content);
        return (0, $45504323f366cd38$export$57b5e12ee8bbcf57)(content);
    }
    static async getDimensionsImage(image) {
        if (!image.complete) await $211cca56a875d2d3$var$ContentCreator.waitForEvents(image, [
            "load"
        ], [
            "abort",
            "error"
        ]);
        return {
            width: image.naturalWidth,
            height: image.naturalHeight
        };
    }
    static async getDimensionsVideo(video) {
        if (video.readyState < HTMLMediaElement.HAVE_METADATA) await $211cca56a875d2d3$var$ContentCreator.waitForEvents(video, [
            "loadedmetadata"
        ], [
            "abort",
            "error"
        ]);
        return {
            width: video.videoWidth,
            height: video.videoHeight
        };
    }
    static async waitForEvents(element, resolveEventNames, rejectEventNames) {
        return new Promise((resolve, reject)=>{
            const [resolveHandler, rejectHandler] = [
                ()=>{
                    resolveEventNames.forEach((name)=>element.removeEventListener(name, resolveHandler));
                    rejectEventNames.forEach((name)=>element.removeEventListener(name, rejectHandler));
                    resolve(element);
                },
                (e)=>{
                    resolveEventNames.forEach((name)=>element.removeEventListener(name, resolveHandler));
                    rejectEventNames.forEach((name)=>element.removeEventListener(name, rejectHandler));
                    reject(e);
                }, 
            ];
            resolveEventNames.forEach((e)=>element.addEventListener(e, resolveHandler));
            rejectEventNames.forEach((e)=>element.addEventListener(e, rejectHandler));
        });
    }
    static isImage(element) {
        return element instanceof HTMLImageElement;
    }
    static isVideo(element) {
        return element instanceof HTMLVideoElement;
    }
}
var $211cca56a875d2d3$export$2e2bcd8739ae039 = $211cca56a875d2d3$var$ContentCreator;






// eslint-disable-next-line compat/compat
const $f36d468bfecab9ea$var$ResizeObserverOnWindow = window.ResizeObserver;
const $f36d468bfecab9ea$var$ResizeObserver = $f36d468bfecab9ea$var$ResizeObserverOnWindow || (0, $9vIO6$ResizeObserver);
class $f36d468bfecab9ea$export$894f970d1d5db986 {
    update() {
        const contentSize = $f36d468bfecab9ea$export$894f970d1d5db986.elementSizes.get(this.content);
        if (typeof contentSize === "undefined") return;
        const containerSize = $f36d468bfecab9ea$export$894f970d1d5db986.elementSizes.get(this.container);
        if (typeof containerSize === "undefined") return;
        const containerAspectRatio = containerSize.width / containerSize.height;
        const contentAspectRatio = contentSize.width / contentSize.height;
        if (containerAspectRatio > contentAspectRatio) {
            this.container.style.setProperty("--fit-cover-max-width", "100%");
            this.container.style.setProperty("--fit-cover-max-height", "auto");
            this.container.style.setProperty("--fit-contain-min-width", "auto");
            this.container.style.setProperty("--fit-contain-min-height", "100%");
        } else {
            this.container.style.setProperty("--fit-cover-max-width", "100%");
            this.container.style.setProperty("--fit-cover-max-height", "auto");
            this.container.style.setProperty("--fit-contain-min-width", "100%");
            this.container.style.setProperty("--fit-contain-min-height", "auto");
        }
    }
    static register(container, content) {
        const updater = new $f36d468bfecab9ea$export$894f970d1d5db986(container, content);
        $f36d468bfecab9ea$export$894f970d1d5db986.addInstance(container, updater);
        $f36d468bfecab9ea$export$894f970d1d5db986.addInstance(content, updater);
        $f36d468bfecab9ea$export$894f970d1d5db986.resizeObserver.observe(container);
        (0, $211cca56a875d2d3$export$2e2bcd8739ae039).getDimensions(content).then((size)=>{
            $f36d468bfecab9ea$export$894f970d1d5db986.elementSizes.set(content, size);
            updater.update();
        }).catch((reason)=>{
            // eslint-disable-next-line no-console
            console.error("Could not retrieve size of content element.", content, reason, "Content fitting will most likely not work for this element.");
        });
        return updater;
    }
    static unregister(updater) {
        const { container: container , content: content  } = updater;
        $f36d468bfecab9ea$export$894f970d1d5db986.removeInstance(container, updater);
        $f36d468bfecab9ea$export$894f970d1d5db986.removeInstance(content, updater);
    }
    static addInstance(elem, updater) {
        const instances = $f36d468bfecab9ea$export$894f970d1d5db986.getInstances(elem);
        instances.push(updater);
        $f36d468bfecab9ea$export$894f970d1d5db986.fitUpdaterInstances.set(elem, instances);
    }
    static removeInstance(elem, updater) {
        const instances = $f36d468bfecab9ea$export$894f970d1d5db986.getInstances(elem);
        const idx = instances.indexOf(updater);
        if (idx !== -1) $f36d468bfecab9ea$export$894f970d1d5db986.fitUpdaterInstances.set(elem, instances.splice(idx, 1));
    }
    static getInstances(elem) {
        const instances = $f36d468bfecab9ea$export$894f970d1d5db986.fitUpdaterInstances.get(elem);
        if (typeof instances === "undefined") return [];
        return [
            ...instances
        ];
    }
    static resizeObserverCallback(roes) {
        roes.filter(({ target: target  })=>target instanceof HTMLElement).forEach(({ target: target , contentRect: { width: width , height: height  }  })=>{
            const element = target;
            $f36d468bfecab9ea$export$894f970d1d5db986.elementSizes.set(element, {
                width: width,
                height: height
            });
            $f36d468bfecab9ea$export$894f970d1d5db986.getInstances(element).forEach((i)=>i.update());
        });
    }
    constructor(container, content){
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "container", void 0);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "content", void 0);
        this.container = container;
        this.content = content;
    }
}
(0, $9vIO6$swchelperssrc_define_propertymjs)($f36d468bfecab9ea$export$894f970d1d5db986, "resizeObserver", new $f36d468bfecab9ea$var$ResizeObserver($f36d468bfecab9ea$export$894f970d1d5db986.resizeObserverCallback.bind($f36d468bfecab9ea$export$894f970d1d5db986)));
(0, $9vIO6$swchelperssrc_define_propertymjs)($f36d468bfecab9ea$export$894f970d1d5db986, "elementSizes", new WeakMap());
(0, $9vIO6$swchelperssrc_define_propertymjs)($f36d468bfecab9ea$export$894f970d1d5db986, "fitUpdaterInstances", new WeakMap());
function $f36d468bfecab9ea$var$fitObject(container, content, type) {
    content.classList.add(`fit-${type}`);
    $f36d468bfecab9ea$export$894f970d1d5db986.register(container, content);
}
var $f36d468bfecab9ea$export$2e2bcd8739ae039 = $f36d468bfecab9ea$var$fitObject;


// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $8f427e2671f84fe6$var$showActionOptionsSchema = {
    type: "object",
    properties: {
        mimetype: {
            type: "string"
        },
        url: {
            type: "string"
        },
        fit: {
            type: "string",
            enum: [
                "cover",
                "contain"
            ]
        },
        color: {
            type: "string"
        },
        startDelay: {
            type: "number",
            minimum: 0
        },
        volume: {
            type: "number",
            minimum: 0,
            maximum: 1
        },
        muted: {
            type: "boolean"
        },
        transition: {
            type: "object",
            properties: {
                type: {
                    type: "string"
                },
                options: {
                    type: "object"
                }
            },
            required: [
                "type"
            ]
        },
        animation: {
            type: "object",
            properties: {
                type: {
                    type: "string"
                },
                options: {
                    type: "object"
                }
            },
            required: [
                "type"
            ]
        }
    },
    required: [
        "mimetype",
        "url"
    ]
};
const $8f427e2671f84fe6$var$validateShowActionOptions = (0, $fa7c9eff966cd673$export$9ea1f4fe5062c6d)($8f427e2671f84fe6$var$showActionOptionsSchema);
const $8f427e2671f84fe6$var$defaultOptionalShowArgs = {
    fit: "cover",
    color: "black",
    volume: 1,
    muted: false,
    transition: {
        type: "none",
        options: {}
    },
    animation: {
        type: "none",
        options: {}
    }
};
class $8f427e2671f84fe6$var$ShowAction extends (0, $c8dd2254d196ae65$export$2e2bcd8739ae039) {
    appendCurrentContent(contentElement, color = "black") {
        contentElement.classList.add("content");
        const slideElement = document.createElement("div");
        slideElement.style.setProperty("--slide-background-color", color);
        slideElement.classList.add("slide");
        slideElement.appendChild(contentElement);
        const slideInnerWrapperElement = document.createElement("div");
        slideInnerWrapperElement.classList.add("slide-inner-wrapper");
        slideInnerWrapperElement.appendChild(slideElement);
        const slideOuterWrapperElement = document.createElement("div");
        slideOuterWrapperElement.classList.add("slide-outer-wrapper");
        slideOuterWrapperElement.appendChild(slideInnerWrapperElement);
        const { container: container  } = this.state;
        container.appendChild(slideOuterWrapperElement);
        return {
            slideOuterWrapperElement: slideOuterWrapperElement,
            slideInnerWrapperElement: slideInnerWrapperElement,
            slideElement: slideElement,
            contentElement: contentElement
        };
    }
    removePreviousSlides(s) {
        const { activeSlides: activeSlides  } = this.state;
        const index = activeSlides.indexOf(s);
        if (index !== -1) {
            const previousSlides = activeSlides.slice(0, index);
            activeSlides.splice(0, index);
            previousSlides.forEach((ps)=>{
                const { parentNode: parentNode  } = ps.slideOuterWrapperElement;
                if (parentNode !== null) parentNode.removeChild(ps.slideOuterWrapperElement);
                ps.transition.cancel();
                ps.animation.cancel();
            });
        }
    }
    async execute(arg) {
        // first parse args and prepare transition and animation
        const transitionCreator = this.prepareTransition(arg);
        const animationCreator = this.prepareAnimation(arg);
        // args are parsed and considered OK
        const { mimetype: mimetype , url: url , fit: fit , color: color , startDelay: startDelay , volume: volume , muted: muted  } = {
            ...$8f427e2671f84fe6$var$defaultOptionalShowArgs,
            ...arg
        };
        const { preloader: preloader  } = this.state;
        const content = (0, $211cca56a875d2d3$export$2e2bcd8739ae039).create(mimetype, url, preloader);
        const currentDomStructure = this.appendCurrentContent(content, color !== null && color !== void 0 ? color : "black");
        (0, $f36d468bfecab9ea$export$2e2bcd8739ae039)(currentDomStructure.slideElement, content, fit);
        (0, $211cca56a875d2d3$export$2e2bcd8739ae039).setMuted(content, this.state.muted || muted);
        (0, $211cca56a875d2d3$export$2e2bcd8739ae039).setVolume(content, volume, "absolute");
        const transition = transitionCreator(currentDomStructure.slideOuterWrapperElement);
        const animation = animationCreator(currentDomStructure.slideElement);
        const { targetShowUpDelay: targetShowUpDelay  } = transition;
        const contentPlayDelay = startDelay !== null && startDelay !== void 0 ? startDelay : targetShowUpDelay;
        const contentPlayTimeoutId = setTimeout(()=>(0, $211cca56a875d2d3$export$2e2bcd8739ae039).play(content), contentPlayDelay * 1000);
        const slideData = {
            ...currentDomStructure,
            transition: transition,
            animation: animation,
            contentPlayTimeoutId: contentPlayTimeoutId
        };
        const { activeSlides: activeSlides  } = this.state;
        activeSlides.push(slideData);
        try {
            await transition.done();
        } catch (e) {
            const msg = "Waiting for transition to end failed. Proceeding anyway";
            if (e) this.state.log.warn(msg, e);
            else this.state.log.warn(msg);
        }
        this.removePreviousSlides(slideData);
    }
    prepareTransition({ transition: transition ,  }) {
        const { type: type , options: options  } = transition !== null && transition !== void 0 ? transition : {
            type: "none",
            options: {}
        };
        const { transitionFactory: transitionFactory  } = this.state;
        return transitionFactory.prepare(type, options);
    }
    prepareAnimation({ animation: animation ,  }) {
        const { type: type , options: options  } = animation !== null && animation !== void 0 ? animation : {
            type: "none",
            options: {}
        };
        const { animationFactory: animationFactory  } = this.state;
        return animationFactory.prepare(type, options);
    }
    // eslint-disable-next-line class-methods-use-this
    unpack(options) {
        return $8f427e2671f84fe6$var$validateShowActionOptions(options);
    }
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $8f427e2671f84fe6$export$2e2bcd8739ae039 = $8f427e2671f84fe6$var$ShowAction;




// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $a05327589db9230d$var$clearActionOptionsSchema = {
    type: "object",
    properties: {
        color: {
            type: "string"
        },
        transition: {
            type: "object",
            properties: {
                type: {
                    type: "string"
                },
                options: {
                    type: "object"
                }
            },
            required: [
                "type"
            ]
        }
    }
};
const $a05327589db9230d$var$validateClearActionOptions = (0, $fa7c9eff966cd673$export$9ea1f4fe5062c6d)($a05327589db9230d$var$clearActionOptionsSchema);
const $a05327589db9230d$var$defaultOptionalClearArgs = {
    color: "black",
    transition: {
        type: "none",
        options: {}
    }
};
class $a05327589db9230d$var$ClearAction extends (0, $c8dd2254d196ae65$export$2e2bcd8739ae039) {
    // eslint-disable-next-line class-methods-use-this
    async execute(arg) {
        const showActionOptions = {
            ...$a05327589db9230d$var$defaultOptionalClearArgs,
            ...arg,
            mimetype: "image/gif",
            url: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            animation: {
                type: "none"
            }
        };
        const { viewer: viewer  } = this.state;
        return viewer.execute("show", showActionOptions);
    }
    // eslint-disable-next-line class-methods-use-this
    unpack(options) {
        return $a05327589db9230d$var$validateClearActionOptions(options);
    }
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $a05327589db9230d$export$2e2bcd8739ae039 = $a05327589db9230d$var$ClearAction;


/* eslint-disable import/prefer-default-export */ function $74a2ff0e4bf74f31$export$c2aff9e92362a9b2(root, stylesheetText, id) {
    const style = document.createElement("style");
    if (typeof id !== "undefined") style.id = id;
    style.textContent = stylesheetText;
    const selector = "style[type='text/css']:last-of-type, style:not([type]):last-of-type";
    const lastStyleElem = root.querySelector(selector);
    if (lastStyleElem === null) root.prepend(style);
    else lastStyleElem.after(style);
}
function $74a2ff0e4bf74f31$export$d5858ef5ae9c7e87(elem, property, formatter, value) {
    if (typeof value !== "undefined") elem.style.setProperty(property, formatter(value));
}




var $c8c354ceab7d57fc$exports = {};

$parcel$export($c8c354ceab7d57fc$exports, "NoneAnimation", function () { return $c8c354ceab7d57fc$export$a27a75f1864d99f4; }, function (v) { return $c8c354ceab7d57fc$export$a27a75f1864d99f4 = v; });
var $2baed1b998f22cc0$exports = {};
$2baed1b998f22cc0$exports = "@-webkit-keyframes animation-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n@keyframes animation-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n.animation-none {\n  --animation-none-delay: 0s;\n  --animation-none-duration: 0s;\n}\n\n.animation-none > .content {\n  -webkit-animation-delay: var(--animation-none-delay);\n  animation-delay: var(--animation-none-delay);\n  -webkit-animation-duration: var(--animation-none-duration);\n  animation-duration: var(--animation-none-duration);\n  -webkit-animation-name: animation-none;\n  animation-name: animation-none;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";







class $bc87f8d7ea698dd0$export$af22135957e110d7 {
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
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "_promise", void 0);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "_resolve", void 0);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "_reject", void 0);
        // dummy initialization required to satisfy TS2564 (definite assignment)
        let tmpResolve = ()=>{};
        let tmpReject = ()=>{};
        this._promise = new Promise((resolve, reject)=>{
            tmpResolve = resolve;
            tmpReject = reject;
        });
        this._resolve = tmpResolve;
        this._reject = tmpReject;
    }
}


class $63baa6fd7edc5e26$export$2e2bcd8739ae039 {
    isCancelled() {
        return this._isCancelled;
    }
    done() {
        return this.donePEC.promise();
    }
    isDone() {
        return this._isDone;
    }
    constructor(element){
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "element", void 0);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "_isCancelled", false);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "_isDone", false);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "donePEC", void 0);
        this.element = element;
        this.donePEC = new (0, $bc87f8d7ea698dd0$export$af22135957e110d7)();
        // prevent uncaught exceptions in promise
        this.donePEC.promise().catch(()=>{});
    }
}


const $2b70ca53bf780941$var$cssBasedAnimationOptionsDefault = {
    classList: [],
    cssPropertySetter: ()=>{},
    cssPropertyRemover: ()=>{},
    endEventFilter: ()=>true,
    cancelEventFilter: ()=>true,
    removeAtEnd: true,
    removeOnCancel: true
};
class $2b70ca53bf780941$var$CssBasedAnimation extends (0, $63baa6fd7edc5e26$export$2e2bcd8739ae039) {
    addClasses() {
        const { classList: classList  } = this.cssBasedAnimationOptions;
        const { element: element  } = this;
        classList.forEach((c)=>element.classList.add(c));
    }
    removeClasses() {
        const { classList: classList  } = this.cssBasedAnimationOptions;
        const { element: element  } = this;
        classList.forEach((c)=>element.classList.remove(c));
    }
    end() {
        if (!this.isCancelled() && !this.isDone()) {
            this.cleanup(this.cssBasedAnimationOptions.removeAtEnd);
            this._isDone = true;
            this.donePEC.resolve();
        }
    }
    cancelled() {
        if (!this.isCancelled() && !this.isDone()) {
            this.cleanup(this.cssBasedAnimationOptions.removeOnCancel);
            this._isCancelled = true;
            this.donePEC.reject();
        }
    }
    cancel() {
        if (!this.isCancelled() && !this.isDone()) {
            if (this.cssBasedAnimationOptions.removeOnCancel) this.removeClasses();
            else this.cancelled();
        }
    }
    cleanup(removeClassesAndProperties) {
        const { element: element , cssBasedAnimationOptions: cssBasedAnimationOptions  } = this;
        const { cssPropertyRemover: cssPropertyRemover  } = cssBasedAnimationOptions;
        element.removeEventListener("animationend", this.endHandler);
        element.removeEventListener("animationcancel", this.cancelHandler);
        if (removeClassesAndProperties) {
            this.removeClasses();
            cssPropertyRemover(element);
        } else element.style.animationPlayState = "paused";
    }
    constructor(content, options){
        super(content);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "endHandler", void 0);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "cancelHandler", void 0);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "cssBasedAnimationOptions", void 0);
        const { element: element  } = this;
        this.cssBasedAnimationOptions = {
            ...$2b70ca53bf780941$var$cssBasedAnimationOptionsDefault,
            ...options
        };
        const { cssPropertySetter: cssPropertySetter , endEventFilter: endEventFilter , cancelEventFilter: cancelEventFilter  } = this.cssBasedAnimationOptions;
        this.addClasses();
        cssPropertySetter(element);
        this.endHandler = (ae)=>{
            if (endEventFilter(ae)) this.end();
        };
        this.cancelHandler = (ae)=>{
            if (cancelEventFilter(ae)) this.cancelled();
        };
        element.addEventListener("animationend", this.endHandler);
        element.addEventListener("animationcancel", this.cancelHandler);
    }
}
var $2b70ca53bf780941$export$2e2bcd8739ae039 = $2b70ca53bf780941$var$CssBasedAnimation;



var $c8c354ceab7d57fc$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $c8c354ceab7d57fc$var$NoneAnimation_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $c8c354ceab7d57fc$var$noneAnimationOptionsSchema = {
    type: "object",
    properties: {
        delay: {
            type: "number",
            minimum: 0
        },
        duration: {
            type: "number",
            minimum: 0
        }
    }
};
const $c8c354ceab7d57fc$var$validateNoneAnimationOptions = (0, $fa7c9eff966cd673$export$9ea1f4fe5062c6d)($c8c354ceab7d57fc$var$noneAnimationOptionsSchema);
let $c8c354ceab7d57fc$export$a27a75f1864d99f4 = $c8c354ceab7d57fc$var$NoneAnimation_1 = class NoneAnimation extends (0, $2b70ca53bf780941$export$2e2bcd8739ae039) {
    static createCssBasedAnimationOptions(options) {
        const animationEventFilter = ({ animationName: animationName  })=>animationName === "animation-none";
        const cssPropertySetter = (e)=>{
            const { delay: delay , duration: duration  } = options;
            const s = (0, $74a2ff0e4bf74f31$export$d5858ef5ae9c7e87);
            s(e, "--animation-none-delay", (v)=>`${v}s`, delay);
            s(e, "--animation-none-duration", (v)=>`${v}s`, duration);
        };
        const cssPropertyRemover = (e)=>{
            const propertyNames = [
                "--animation-none-delay",
                "--animation-none-duration", 
            ];
            propertyNames.forEach((n)=>e.style.removeProperty(n));
        };
        return {
            classList: [
                "animation",
                "animation-none"
            ],
            endEventFilter: animationEventFilter,
            cancelEventFilter: animationEventFilter,
            cssPropertySetter: cssPropertySetter,
            cssPropertyRemover: cssPropertyRemover,
            removeAtEnd: false,
            removeOnCancel: false
        };
    }
    static unpack(options) {
        return $c8c354ceab7d57fc$var$validateNoneAnimationOptions(options);
    }
    static prepare(options) {
        const unpackedOptions = $c8c354ceab7d57fc$var$NoneAnimation_1.unpack(options);
        return (element)=>new $c8c354ceab7d57fc$var$NoneAnimation_1(element, unpackedOptions);
    }
    static getStyleSheetAsString() {
        return 0, (/*@__PURE__*/$parcel$interopDefault($2baed1b998f22cc0$exports));
    }
    constructor(element, options){
        super(element, $c8c354ceab7d57fc$var$NoneAnimation_1.createCssBasedAnimationOptions(options));
    }
};
$c8c354ceab7d57fc$export$a27a75f1864d99f4 = $c8c354ceab7d57fc$var$NoneAnimation_1 = $c8c354ceab7d57fc$var$__decorate([
    (0, $45504323f366cd38$export$77e1154930d99c3d)()
], $c8c354ceab7d57fc$export$a27a75f1864d99f4);


var $a583e60480e0f130$exports = {};

$parcel$export($a583e60480e0f130$exports, "PanZoomAnimation", function () { return $a583e60480e0f130$export$26ae749f2a727050; }, function (v) { return $a583e60480e0f130$export$26ae749f2a727050 = v; });
var $92092241b30434a8$exports = {};
$92092241b30434a8$exports = "@-webkit-keyframes animation-pan-zoom {\n  0% {\n    -webkit-transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n    transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n  }\n\n  100% {\n    -webkit-transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n    transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n  }\n}\n\n@keyframes animation-pan-zoom {\n  0% {\n    -webkit-transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n    transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n  }\n\n  100% {\n    -webkit-transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n    transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n  }\n}\n\n.animation-pan-zoom {\n  --animation-pan-zoom-delay: 0s;\n  --animation-pan-zoom-duration: 0s;\n  --animation-pan-zoom-origin-x: .5;\n  --animation-pan-zoom-origin-y: .5;\n  --animation-pan-zoom-origin-scale: 1;\n  --animation-pan-zoom-target-x: .5;\n  --animation-pan-zoom-target-y: .5;\n  --animation-pan-zoom-target-scale: 1;\n}\n\n.animation-pan-zoom .content {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation-name: animation-pan-zoom;\n  animation-name: animation-pan-zoom;\n  -webkit-animation-delay: var(--animation-pan-zoom-delay);\n  animation-delay: var(--animation-pan-zoom-delay);\n  -webkit-animation-duration: var(--animation-pan-zoom-duration);\n  animation-duration: var(--animation-pan-zoom-duration);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";






var $a583e60480e0f130$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $a583e60480e0f130$var$PanZoomAnimation_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $a583e60480e0f130$var$partialViewSchema = {
    type: "object",
    properties: {
        x: {
            type: "number"
        },
        y: {
            type: "number"
        },
        scale: {
            type: "number",
            minimum: 0
        }
    }
};
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $a583e60480e0f130$var$panZoomAnimationOptionsSchema = {
    type: "object",
    properties: {
        delay: {
            type: "number",
            minimum: 0
        },
        duration: {
            type: "number",
            minimum: 0
        },
        from: $a583e60480e0f130$var$partialViewSchema,
        to: $a583e60480e0f130$var$partialViewSchema
    }
};
const $a583e60480e0f130$var$validatePanZoomAnimationOptions = (0, $fa7c9eff966cd673$export$9ea1f4fe5062c6d)($a583e60480e0f130$var$panZoomAnimationOptionsSchema);
let $a583e60480e0f130$export$26ae749f2a727050 = $a583e60480e0f130$var$PanZoomAnimation_1 = class PanZoomAnimation extends (0, $2b70ca53bf780941$export$2e2bcd8739ae039) {
    static createCssBasedAnimationOptions(options) {
        const animationEventFilter = ({ animationName: animationName  })=>animationName === "animation-pan-zoom";
        const cssPropertySetter = (e)=>{
            const { delay: delay , duration: duration , from: from , to: to  } = options;
            const s = (0, $74a2ff0e4bf74f31$export$d5858ef5ae9c7e87);
            s(e, "--animation-pan-zoom-delay", (v)=>`${v}s`, delay);
            s(e, "--animation-pan-zoom-duration", (v)=>`${v}s`, duration);
            s(e, "--animation-pan-zoom-origin-x", (v)=>`${v}`, from === null || from === void 0 ? void 0 : from.x);
            s(e, "--animation-pan-zoom-origin-y", (v)=>`${v}`, from === null || from === void 0 ? void 0 : from.y);
            s(e, "--animation-pan-zoom-origin-scale", (v)=>`${v}`, from === null || from === void 0 ? void 0 : from.scale);
            s(e, "--animation-pan-zoom-target-x", (v)=>`${v}`, to === null || to === void 0 ? void 0 : to.x);
            s(e, "--animation-pan-zoom-target-y", (v)=>`${v}`, to === null || to === void 0 ? void 0 : to.y);
            s(e, "--animation-pan-zoom-target-scale", (v)=>`${v}`, to === null || to === void 0 ? void 0 : to.scale);
        };
        const cssPropertyRemover = (e)=>{
            const propertyNames = [
                "--animation-pan-zoom-delay",
                "--animation-pan-zoom-duration",
                "--animation-pan-zoom-origin-x",
                "--animation-pan-zoom-origin-y",
                "--animation-pan-zoom-origin-scale",
                "--animation-pan-zoom-target-x",
                "--animation-pan-zoom-target-y",
                "--animation-pan-zoom-target-scale", 
            ];
            propertyNames.forEach((n)=>e.style.removeProperty(n));
        };
        return {
            classList: [
                "animation",
                "animation-pan-zoom"
            ],
            endEventFilter: animationEventFilter,
            cancelEventFilter: animationEventFilter,
            cssPropertySetter: cssPropertySetter,
            cssPropertyRemover: cssPropertyRemover,
            removeAtEnd: false,
            removeOnCancel: false
        };
    }
    static unpack(options) {
        return $a583e60480e0f130$var$validatePanZoomAnimationOptions(options);
    }
    static prepare(options) {
        const unpackedOptions = $a583e60480e0f130$var$PanZoomAnimation_1.unpack(options);
        return (content)=>new $a583e60480e0f130$var$PanZoomAnimation_1(content, unpackedOptions);
    }
    static getStyleSheetAsString() {
        return 0, (/*@__PURE__*/$parcel$interopDefault($92092241b30434a8$exports));
    }
    constructor(content, options){
        super(content, $a583e60480e0f130$var$PanZoomAnimation_1.createCssBasedAnimationOptions(options));
    }
};
$a583e60480e0f130$export$26ae749f2a727050 = $a583e60480e0f130$var$PanZoomAnimation_1 = $a583e60480e0f130$var$__decorate([
    (0, $45504323f366cd38$export$77e1154930d99c3d)()
], $a583e60480e0f130$export$26ae749f2a727050);
var $a583e60480e0f130$export$2e2bcd8739ae039 = $a583e60480e0f130$export$26ae749f2a727050;


class $9d5db11770fa0f19$var$AnimationFactory {
    registerKnownTransitions() {
        this.register("none", (0, $c8c354ceab7d57fc$exports.NoneAnimation));
        this.register("pan-zoom", (0, $a583e60480e0f130$exports.PanZoomAnimation));
    }
    register(id, AnimationClass) {
        if (this.animationRegistry.has(id)) throw new Error("Animation type already registered");
        (0, $74a2ff0e4bf74f31$export$c2aff9e92362a9b2)(this.root, AnimationClass.getStyleSheetAsString(), `animation-${id}`);
        this.animationRegistry.set(id, AnimationClass);
    }
    prepare(type = "none", options = {}) {
        const AnimationClass = this.animationRegistry.get(type);
        if (!AnimationClass) throw new Error(`Unknown animation type: ${type}`);
        // unpacks the options and throws an exception if they are invalid,
        // but does create the actual transition yet
        return AnimationClass.prepare(options);
    }
    constructor(root){
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "root", void 0);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "animationRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
}
var $9d5db11770fa0f19$export$2e2bcd8739ae039 = $9d5db11770fa0f19$var$AnimationFactory;



var $104860e80e838f96$exports = {};

$parcel$export($104860e80e838f96$exports, "NoneTransition", function () { return $104860e80e838f96$export$b1e3715c3749f16; }, function (v) { return $104860e80e838f96$export$b1e3715c3749f16 = v; });

var $b1cba517715e3eda$exports = {};
$b1cba517715e3eda$exports = "@-webkit-keyframes transition-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n.transition-none {\n  --transition-none-delay: 0s;\n  --transition-none-duration: 0s;\n  opacity: 0;\n  -webkit-animation-delay: var(--transition-none-delay);\n  animation-delay: var(--transition-none-delay);\n  -webkit-animation-duration: var(--transition-none-duration);\n  animation-duration: var(--transition-none-duration);\n  -webkit-animation-name: transition-none;\n  animation-name: transition-none;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n";




class $f84afac407c89cb7$var$CssBasedTransition extends (0, $2b70ca53bf780941$export$2e2bcd8739ae039) {
    constructor(content, options){
        super(content, options);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "targetShowUpDelay", void 0);
        this.targetShowUpDelay = options.targetShowUpDelay;
    }
}
var $f84afac407c89cb7$export$2e2bcd8739ae039 = $f84afac407c89cb7$var$CssBasedTransition;





var $104860e80e838f96$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $104860e80e838f96$var$NoneTransition_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $104860e80e838f96$var$noneTransitionOptionsSchema = {
    type: "object",
    properties: {
        delay: {
            type: "number",
            minimum: 0
        },
        duration: {
            type: "number",
            minimum: 0
        }
    }
};
const $104860e80e838f96$var$validateNoneTransitionOptions = (0, $fa7c9eff966cd673$export$9ea1f4fe5062c6d)($104860e80e838f96$var$noneTransitionOptionsSchema);
let $104860e80e838f96$export$b1e3715c3749f16 = $104860e80e838f96$var$NoneTransition_1 = class NoneTransition extends (0, $f84afac407c89cb7$export$2e2bcd8739ae039) {
    static createCssBasedTransitionOptions(options) {
        const animationEventFilter = ({ animationName: animationName  })=>animationName === "transition-none";
        const { delay: delay , duration: duration  } = options;
        const cssPropertySetter = (e)=>{
            const s = (0, $74a2ff0e4bf74f31$export$d5858ef5ae9c7e87);
            s(e, "--transition-none-delay", (v)=>`${v}s`, delay);
            s(e, "--transition-none-duration", (v)=>`${v}s`, duration);
        };
        const cssPropertyRemover = (e)=>{
            const propertyNames = [
                "--transition-none-delay",
                "--transition-none-duration", 
            ];
            propertyNames.forEach((n)=>e.style.removeProperty(n));
        };
        return {
            classList: [
                "transition",
                "transition-none"
            ],
            endEventFilter: animationEventFilter,
            cancelEventFilter: animationEventFilter,
            cssPropertySetter: cssPropertySetter,
            cssPropertyRemover: cssPropertyRemover,
            removeAtEnd: true,
            removeOnCancel: true,
            targetShowUpDelay: delay !== null && delay !== void 0 ? delay : 0
        };
    }
    static unpack(options) {
        return $104860e80e838f96$var$validateNoneTransitionOptions(options);
    }
    static prepare(options) {
        const unpackedOptions = $104860e80e838f96$var$NoneTransition_1.unpack(options);
        return (element)=>new $104860e80e838f96$var$NoneTransition_1(element, unpackedOptions);
    }
    static getStyleSheetAsString() {
        return 0, (/*@__PURE__*/$parcel$interopDefault($b1cba517715e3eda$exports));
    }
    constructor(element, options){
        super(element, $104860e80e838f96$var$NoneTransition_1.createCssBasedTransitionOptions(options));
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "targetShowUpDelay", 0);
    }
};
$104860e80e838f96$export$b1e3715c3749f16 = $104860e80e838f96$var$NoneTransition_1 = $104860e80e838f96$var$__decorate([
    (0, $45504323f366cd38$export$77e1154930d99c3d)()
], $104860e80e838f96$export$b1e3715c3749f16);
var $104860e80e838f96$export$2e2bcd8739ae039 = $104860e80e838f96$export$b1e3715c3749f16;


var $f6966eef3dfe7a78$exports = {};

$parcel$export($f6966eef3dfe7a78$exports, "FadeTransition", function () { return $f6966eef3dfe7a78$export$b4cd2c531e831209; }, function (v) { return $f6966eef3dfe7a78$export$b4cd2c531e831209 = v; });
var $3fccfa8d61b3165a$exports = {};
$3fccfa8d61b3165a$exports = "@-webkit-keyframes transition-fade-overlay {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-fade-overlay {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes transition-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.transition-fade {\n  --transition-fade-delay: 0s;\n  --transition-fade-duration: -1s;\n  --transition-fade-duration-half: calc(var(--transition-fade-duration) / 2);\n  --transition-fade-color: black;\n}\n\n.transition-fade > *, .transition-fade:before {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-duration: var(--transition-fade-duration-half);\n  animation-duration: var(--transition-fade-duration-half);\n}\n\n.transition-fade > * {\n  -webkit-animation-name: transition-fade;\n  animation-name: transition-fade;\n  -webkit-animation-delay: calc(var(--transition-fade-delay)  + var(--transition-fade-duration-half));\n  animation-delay: calc(var(--transition-fade-delay)  + var(--transition-fade-duration-half));\n}\n\n.transition-fade:before {\n  content: \"\";\n  background-color: var(--transition-fade-color);\n  width: 100%;\n  height: 100%;\n  -webkit-animation-name: transition-fade-overlay;\n  animation-name: transition-fade-overlay;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n";






var $f6966eef3dfe7a78$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $f6966eef3dfe7a78$var$FadeTransition_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $f6966eef3dfe7a78$var$fadeTransitionOptionsSchema = {
    type: "object",
    properties: {
        delay: {
            type: "number",
            minimum: 0
        },
        duration: {
            type: "number",
            minimum: 0
        },
        color: {
            type: "string"
        }
    }
};
const $f6966eef3dfe7a78$var$validateFadeTransitionOptions = (0, $fa7c9eff966cd673$export$9ea1f4fe5062c6d)($f6966eef3dfe7a78$var$fadeTransitionOptionsSchema);
// overwrites the (invalid) value set as default in the SCSS file
const $f6966eef3dfe7a78$var$defaultDuration = 2;
let $f6966eef3dfe7a78$export$b4cd2c531e831209 = $f6966eef3dfe7a78$var$FadeTransition_1 = class FadeTransition extends (0, $f84afac407c89cb7$export$2e2bcd8739ae039) {
    static createCssBasedTransitionOptions(options) {
        const animationEventFilter = ({ animationName: animationName  })=>animationName === "transition-fade";
        const { delay: delay , duration: duration  } = {
            duration: $f6966eef3dfe7a78$var$defaultDuration,
            ...options
        };
        const cssPropertySetter = (e)=>{
            const s = (0, $74a2ff0e4bf74f31$export$d5858ef5ae9c7e87);
            s(e, "--transition-fade-delay", (v)=>`${v}s`, delay);
            s(e, "--transition-fade-duration", (v)=>`${v}s`, duration);
        };
        const cssPropertyRemover = (e)=>{
            const propertyNames = [
                "--transition-fade-delay",
                "--transition-fade-duration", 
            ];
            propertyNames.forEach((n)=>e.style.removeProperty(n));
        };
        return {
            classList: [
                "transition",
                "transition-fade"
            ],
            endEventFilter: animationEventFilter,
            cancelEventFilter: animationEventFilter,
            cssPropertySetter: cssPropertySetter,
            cssPropertyRemover: cssPropertyRemover,
            removeAtEnd: true,
            removeOnCancel: true,
            targetShowUpDelay: (delay !== null && delay !== void 0 ? delay : 0) + duration / 2
        };
    }
    static unpack(options) {
        return $f6966eef3dfe7a78$var$validateFadeTransitionOptions(options);
    }
    static prepare(options) {
        const unpackedOptions = $f6966eef3dfe7a78$var$FadeTransition_1.unpack(options);
        return (element)=>new $f6966eef3dfe7a78$var$FadeTransition_1(element, unpackedOptions);
    }
    static getStyleSheetAsString() {
        return 0, (/*@__PURE__*/$parcel$interopDefault($3fccfa8d61b3165a$exports));
    }
    constructor(element, options){
        super(element, $f6966eef3dfe7a78$var$FadeTransition_1.createCssBasedTransitionOptions(options));
    }
};
$f6966eef3dfe7a78$export$b4cd2c531e831209 = $f6966eef3dfe7a78$var$FadeTransition_1 = $f6966eef3dfe7a78$var$__decorate([
    (0, $45504323f366cd38$export$77e1154930d99c3d)()
], $f6966eef3dfe7a78$export$b4cd2c531e831209);
var $f6966eef3dfe7a78$export$2e2bcd8739ae039 = $f6966eef3dfe7a78$export$b4cd2c531e831209;


var $f548bef46e08ae18$exports = {};

$parcel$export($f548bef46e08ae18$exports, "CrossFadeTransition", function () { return $f548bef46e08ae18$export$4143b605098af1c4; }, function (v) { return $f548bef46e08ae18$export$4143b605098af1c4 = v; });
var $4f0c1785359e4341$exports = {};
$4f0c1785359e4341$exports = "@-webkit-keyframes transition-cross-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-cross-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.transition-cross-fade {\n  --transition-cross-fade-delay: 0s;\n  --transition-cross-fade-duration: 1s;\n  -webkit-animation-delay: var(--transition-cross-fade-delay);\n  animation-delay: var(--transition-cross-fade-delay);\n  -webkit-animation-duration: var(--transition-cross-fade-duration);\n  animation-duration: var(--transition-cross-fade-duration);\n  -webkit-animation-name: transition-cross-fade;\n  animation-name: transition-cross-fade;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";






var $f548bef46e08ae18$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $f548bef46e08ae18$var$CrossFadeTransition_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $f548bef46e08ae18$var$crossFadeTransitionOptionsSchema = {
    type: "object",
    properties: {
        delay: {
            type: "number",
            minimum: 0
        },
        duration: {
            type: "number",
            minimum: 0
        }
    }
};
const $f548bef46e08ae18$var$validateCrossFadeTransitionOptions = (0, $fa7c9eff966cd673$export$9ea1f4fe5062c6d)($f548bef46e08ae18$var$crossFadeTransitionOptionsSchema);
let $f548bef46e08ae18$export$4143b605098af1c4 = $f548bef46e08ae18$var$CrossFadeTransition_1 = class CrossFadeTransition extends (0, $f84afac407c89cb7$export$2e2bcd8739ae039) {
    static createCssBasedTransitionOptions(options) {
        const animationEventFilter = ({ animationName: animationName  })=>animationName === "transition-cross-fade";
        const { delay: delay , duration: duration  } = options;
        const cssPropertySetter = (e)=>{
            const s = (0, $74a2ff0e4bf74f31$export$d5858ef5ae9c7e87);
            s(e, "--transition-cross-fade-delay", (v)=>`${v}s`, delay);
            s(e, "--transition-cross-fade-duration", (v)=>`${v}s`, duration);
        };
        const cssPropertyRemover = (e)=>{
            const propertyNames = [
                "--transition-cross-fade-delay",
                "--transition-cross-fade-duration", 
            ];
            propertyNames.forEach((n)=>e.style.removeProperty(n));
        };
        return {
            classList: [
                "transition",
                "transition-cross-fade"
            ],
            endEventFilter: animationEventFilter,
            cancelEventFilter: animationEventFilter,
            cssPropertySetter: cssPropertySetter,
            cssPropertyRemover: cssPropertyRemover,
            removeAtEnd: true,
            removeOnCancel: true,
            targetShowUpDelay: delay !== null && delay !== void 0 ? delay : 0
        };
    }
    static unpack(options) {
        return $f548bef46e08ae18$var$validateCrossFadeTransitionOptions(options);
    }
    static prepare(options) {
        const unpackedOptions = $f548bef46e08ae18$var$CrossFadeTransition_1.unpack(options);
        return (element)=>new $f548bef46e08ae18$var$CrossFadeTransition_1(element, unpackedOptions);
    }
    static getStyleSheetAsString() {
        return 0, (/*@__PURE__*/$parcel$interopDefault($4f0c1785359e4341$exports));
    }
    constructor(element, options){
        super(element, $f548bef46e08ae18$var$CrossFadeTransition_1.createCssBasedTransitionOptions(options));
    }
};
$f548bef46e08ae18$export$4143b605098af1c4 = $f548bef46e08ae18$var$CrossFadeTransition_1 = $f548bef46e08ae18$var$__decorate([
    (0, $45504323f366cd38$export$77e1154930d99c3d)()
], $f548bef46e08ae18$export$4143b605098af1c4);
var $f548bef46e08ae18$export$2e2bcd8739ae039 = $f548bef46e08ae18$export$4143b605098af1c4;



class $e80dee50e8f366a5$var$TransitionFactory {
    registerKnownTransitions() {
        this.register("none", (0, $104860e80e838f96$exports.NoneTransition));
        this.register("fade", (0, $f6966eef3dfe7a78$exports.FadeTransition));
        this.register("cross-fade", (0, $f548bef46e08ae18$exports.CrossFadeTransition));
    }
    register(id, transitionClass) {
        if (this.transitionRegistry.has(id)) throw new Error("Transition type already registered");
        (0, $74a2ff0e4bf74f31$export$c2aff9e92362a9b2)(this.root, transitionClass.getStyleSheetAsString(), `transition-${id}`);
        this.transitionRegistry.set(id, transitionClass);
    }
    prepare(type = "none", options = {}) {
        const TransitionClass = this.transitionRegistry.get(type);
        if (!TransitionClass) throw new Error(`Unknown transition type: ${type}`);
        // unpacks the options and throws an exception if they are invalid,
        // but does create the actual transition yet
        return TransitionClass.prepare(options);
    }
    constructor(root){
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "root", void 0);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "transitionRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
}
var $e80dee50e8f366a5$export$2e2bcd8739ae039 = $e80dee50e8f366a5$var$TransitionFactory;




class $506fd8579e335bd9$var$MuteAction extends (0, $c8dd2254d196ae65$export$2e2bcd8739ae039) {
    // eslint-disable-next-line class-methods-use-this
    async execute() {
        this.state.activeSlides.forEach(({ contentElement: contentElement  })=>(0, $211cca56a875d2d3$export$2e2bcd8739ae039).setMuted(contentElement, true));
        this.state.muted = true;
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    unpack() {}
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $506fd8579e335bd9$export$2e2bcd8739ae039 = $506fd8579e335bd9$var$MuteAction;




class $a026e59b945a6ef6$var$UnmuteAction extends (0, $c8dd2254d196ae65$export$2e2bcd8739ae039) {
    // eslint-disable-next-line class-methods-use-this
    async execute() {
        this.state.activeSlides.forEach(({ contentElement: contentElement  })=>(0, $211cca56a875d2d3$export$2e2bcd8739ae039).setMuted(contentElement, false));
        this.state.muted = false;
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    unpack() {}
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $a026e59b945a6ef6$export$2e2bcd8739ae039 = $a026e59b945a6ef6$var$UnmuteAction;





// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $6a5d5f2f50049393$var$setVolumeActionOptionsSchema = {
    oneOf: [
        {
            type: "object",
            properties: {
                volume: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                },
                mode: {
                    type: "string",
                    const: "absolute"
                }
            },
            required: [
                "volume"
            ]
        },
        {
            type: "object",
            properties: {
                volume: {
                    type: "number",
                    minimum: 0
                },
                mode: {
                    type: "string",
                    const: "relative"
                }
            },
            required: [
                "volume",
                "mode"
            ]
        }, 
    ]
};
const $6a5d5f2f50049393$var$validateSetVolumeActionOptions = (0, $fa7c9eff966cd673$export$9ea1f4fe5062c6d)($6a5d5f2f50049393$var$setVolumeActionOptionsSchema);
const $6a5d5f2f50049393$var$defaultOptionalSetVolumeArgs = {
    mode: "absolute"
};
class $6a5d5f2f50049393$var$SetVolumeAction extends (0, $c8dd2254d196ae65$export$2e2bcd8739ae039) {
    // eslint-disable-next-line class-methods-use-this
    async execute(arg) {
        const { volume: volume , mode: mode  } = {
            ...$6a5d5f2f50049393$var$defaultOptionalSetVolumeArgs,
            ...arg
        };
        this.state.activeSlides.forEach(({ contentElement: contentElement  })=>(0, $211cca56a875d2d3$export$2e2bcd8739ae039).setVolume(contentElement, volume, mode));
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    unpack(options) {
        return $6a5d5f2f50049393$var$validateSetVolumeActionOptions(options);
    }
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $6a5d5f2f50049393$export$2e2bcd8739ae039 = $6a5d5f2f50049393$var$SetVolumeAction;



class $4640deaaeaf7eefa$export$a3f2a64f39c0a404 extends HTMLElement {
    async execute(action, arg) {
        return this.viewer.execute(action, arg);
    }
    constructor(){
        super();
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "viewer", void 0);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        this.viewer = new $4640deaaeaf7eefa$var$HilbertGalleryViewer(this);
    }
}
class $4640deaaeaf7eefa$var$HilbertGalleryViewer {
    static createActionRegistry(state) {
        const registry = new Map();
        registry.set("reload", new (0, $4e99b53c19192378$export$2e2bcd8739ae039)(state));
        registry.set("preload", new (0, $d25ad1ee5461b425$export$2e2bcd8739ae039)(state));
        registry.set("show", new (0, $8f427e2671f84fe6$export$2e2bcd8739ae039)(state));
        registry.set("clear", new (0, $a05327589db9230d$export$2e2bcd8739ae039)(state));
        registry.set("mute", new (0, $506fd8579e335bd9$export$2e2bcd8739ae039)(state));
        registry.set("unmute", new (0, $a026e59b945a6ef6$export$2e2bcd8739ae039)(state));
        registry.set("set-volume", new (0, $6a5d5f2f50049393$export$2e2bcd8739ae039)(state));
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
        } else throw new TypeError("HilbertGalleryViewer.execute(): unknown action");
    }
    static defineCustomElement() {
        customElements.define("hilbert-gallery-viewer", $4640deaaeaf7eefa$export$a3f2a64f39c0a404);
    }
    constructor(parent){
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "actionRegistry", void 0);
        (0, $9vIO6$swchelperssrc_define_propertymjs)(this, "state", void 0);
        const element = document.createElement("div");
        parent.appendChild(element);
        const shadowRoot = element.attachShadow({
            mode: "open"
        });
        (0, $74a2ff0e4bf74f31$export$c2aff9e92362a9b2)(shadowRoot, (0, (/*@__PURE__*/$parcel$interopDefault($6a82cea56a5d57cd$exports))));
        const preloadArea = document.createElement("div");
        preloadArea.classList.add("preload-area");
        shadowRoot.appendChild(preloadArea);
        const container = document.createElement("div");
        container.classList.add("container");
        shadowRoot.appendChild(container);
        const transitionFactory = new (0, $e80dee50e8f366a5$export$2e2bcd8739ae039)(shadowRoot);
        const animationFactory = new (0, $9d5db11770fa0f19$export$2e2bcd8739ae039)(shadowRoot);
        const activeSlides = [];
        this.state = {
            viewer: this,
            log: new (0, $06da9e0071dc9699$export$2e2bcd8739ae039)((0, $06da9e0071dc9699$export$243e62d78d3b544d).WARN),
            preloader: new (0, $940da77736a2a569$export$2e2bcd8739ae039)(preloadArea),
            shadowRoot: shadowRoot,
            container: container,
            transitionFactory: transitionFactory,
            animationFactory: animationFactory,
            activeSlides: activeSlides,
            muted: false
        };
        this.actionRegistry = $4640deaaeaf7eefa$var$HilbertGalleryViewer.createActionRegistry(this.state);
    }
}
$4640deaaeaf7eefa$var$HilbertGalleryViewer.defineCustomElement();
var $4640deaaeaf7eefa$export$2e2bcd8739ae039 = $4640deaaeaf7eefa$var$HilbertGalleryViewer;


var $ca7c6c7ad50052ff$export$2e2bcd8739ae039 = (0, $4640deaaeaf7eefa$export$2e2bcd8739ae039);


export {$ca7c6c7ad50052ff$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.mjs.map
