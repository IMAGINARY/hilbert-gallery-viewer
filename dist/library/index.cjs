var $iBAnd$swchelperslib_assert_this_initializedjs = require("@swc/helpers/lib/_assert_this_initialized.js");
var $iBAnd$swchelperslib_async_to_generatorjs = require("@swc/helpers/lib/_async_to_generator.js");
var $iBAnd$swchelperslib_class_call_checkjs = require("@swc/helpers/lib/_class_call_check.js");
var $iBAnd$swchelperslib_create_classjs = require("@swc/helpers/lib/_create_class.js");
var $iBAnd$swchelperslib_define_propertyjs = require("@swc/helpers/lib/_define_property.js");
var $iBAnd$swchelperslib_inheritsjs = require("@swc/helpers/lib/_inherits.js");
var $iBAnd$swchelperslib_wrap_native_superjs = require("@swc/helpers/lib/_wrap_native_super.js");
var $iBAnd$swchelperslib_create_superjs = require("@swc/helpers/lib/_create_super.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.promise.finally.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
var $iBAnd$regeneratorruntime = require("regenerator-runtime");
var $iBAnd$swchelperslib_to_consumable_arrayjs = require("@swc/helpers/lib/_to_consumable_array.js");
var $iBAnd$ajv = require("ajv");
var $iBAnd$swchelperslib_object_spreadjs = require("@swc/helpers/lib/_object_spread.js");
var $iBAnd$swchelperslib_object_spread_propsjs = require("@swc/helpers/lib/_object_spread_props.js");
var $iBAnd$juggleresizeobserver = require("@juggle/resize-observer");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $d55053c922b025eb$export$2e2bcd8739ae039; });















var $fcd220369608a622$exports = {};
$fcd220369608a622$exports = ":host {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n}\n\n:host > .container, :host > .container > .slide-outer-wrapper, :host > .container > .slide-outer-wrapper > .slide-inner-wrapper {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide {\n  --slide-background-color: black;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  background-color: var(--slide-background-color);\n  --fit-cover-max-width: auto;\n  --fit-cover-max-height: auto;\n  --fit-contain-min-width: auto;\n  --fit-contain-min-height: auto;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  position: absolute;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide > .content {\n  position: absolute;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide > .content.fit-cover {\n  max-width: var(--fit-contain-max-width);\n  max-height: var(--fit-contain-max-height);\n  min-width: 100%;\n  min-height: 100%;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide > .content.fit-contain {\n  min-width: var(--fit-contain-min-width);\n  min-height: var(--fit-contain-min-height);\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.preload-area {\n  display: none;\n}\n\n";












var $ceab516818f51ad5$var$Base = /*#__PURE__*/ function() {
    "use strict";
    function Base(state) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, Base);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "state", void 0);
        this.state = state;
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(Base, [
        {
            key: "buildExecutor",
            value: function buildExecutor(arg) {
                var _this = this;
                var unpackedArg = this.unpack(arg);
                return function() {
                    return _this.execute(unpackedArg);
                };
            }
        }
    ]);
    return Base;
}();
var $ceab516818f51ad5$export$2e2bcd8739ae039 = $ceab516818f51ad5$var$Base;


/* class decorator for ensuring static elements on classes */ function $3f2808a10fe174a4$export$77e1154930d99c3d() {
    return function(constructor) {
        return constructor;
    };
}
/**
 * This function can be used to check if the type of a variable has been
 * narrowed down to the `never` type, i.e. that at the time of calling this
 * function, all other possible types have been covered beforehand.
 * @param n The variable to check for the `never` type.
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
function $3f2808a10fe174a4$export$57b5e12ee8bbcf57(n) {
    throw new TypeError("This function should never be called. If it has been called, your type narrowing is incomplete.");
}



var $ba615e619b379cb9$var$ajv = new (0, ($parcel$interopDefault($iBAnd$ajv)))();
function $ba615e619b379cb9$export$edf3ed1163beae37(validate) {
    return function(data, dataCtx) {
        if (typeof dataCtx === "undefined") {
            if (validate(data)) return data;
        } else if (validate(data)) return data;
        throw new TypeError(JSON.stringify(validate.errors));
    };
}
function $ba615e619b379cb9$export$9ea1f4fe5062c6d(schema, _meta) {
    return $ba615e619b379cb9$export$edf3ed1163beae37(typeof _meta === "undefined" ? $ba615e619b379cb9$var$ajv.compile(schema) : $ba615e619b379cb9$var$ajv.compile(schema, _meta));
}


var $4f42560bd79c319d$var$preloadActionOptionsSchema = {
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
var $4f42560bd79c319d$var$validatePreloadActionOptions = (0, $ba615e619b379cb9$export$9ea1f4fe5062c6d)($4f42560bd79c319d$var$preloadActionOptionsSchema);
var $4f42560bd79c319d$var$PreloadAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(PreloadAction, Base1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(PreloadAction);
    function PreloadAction(state) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, PreloadAction);
        return _super.call(this, state);
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(PreloadAction, [
        {
            key: "execute",
            value: function execute(items) {
                var _this = this;
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    var _preloader, preloader;
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                ;
                                preloader = _this.state.preloader;
                                preloader.clear();
                                _ctx.next = 5;
                                return Promise.resolve();
                            case 5:
                                return _ctx.abrupt("return", (_preloader = preloader).preload.apply(_preloader, (0, ($parcel$interopDefault($iBAnd$swchelperslib_to_consumable_arrayjs)))(items)));
                            case 6:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "unpack",
            value: function unpack(options) {
                return $4f42560bd79c319d$var$validatePreloadActionOptions(options);
            }
        }
    ]);
    return PreloadAction;
}((0, $ceab516818f51ad5$export$2e2bcd8739ae039));
var $4f42560bd79c319d$export$2e2bcd8739ae039 = $4f42560bd79c319d$var$PreloadAction;






/* eslint-disable no-console */ var $58895dfb79dba5a2$export$243e62d78d3b544d;
(function(LogLevel1) {
    LogLevel1[LogLevel1["OFF"] = 0] = "OFF";
    LogLevel1[LogLevel1["ERROR"] = 200] = "ERROR";
    LogLevel1[LogLevel1["WARN"] = 300] = "WARN";
    LogLevel1[LogLevel1["INFO"] = 400] = "INFO";
    LogLevel1[LogLevel1["DEBUG"] = 500] = "DEBUG";
    LogLevel1[LogLevel1["TRACE"] = 600] = "TRACE";
})($58895dfb79dba5a2$export$243e62d78d3b544d || ($58895dfb79dba5a2$export$243e62d78d3b544d = {}));
var $58895dfb79dba5a2$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function Log() {
        var level = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $58895dfb79dba5a2$export$243e62d78d3b544d.INFO;
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, Log);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "level", void 0);
        this.level = level;
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(Log, [
        {
            key: "error",
            value: function error() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $58895dfb79dba5a2$export$243e62d78d3b544d.ERROR) (_console = console).error.apply(_console, (0, ($parcel$interopDefault($iBAnd$swchelperslib_to_consumable_arrayjs)))(args));
            }
        },
        {
            key: "assert",
            value: function assert(assertion) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                var _console;
                if (this.level >= $58895dfb79dba5a2$export$243e62d78d3b544d.ERROR) (_console = console).assert.apply(_console, [
                    assertion
                ].concat((0, ($parcel$interopDefault($iBAnd$swchelperslib_to_consumable_arrayjs)))(args)));
            }
        },
        {
            key: "warn",
            value: function warn() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $58895dfb79dba5a2$export$243e62d78d3b544d.WARN) (_console = console).warn.apply(_console, (0, ($parcel$interopDefault($iBAnd$swchelperslib_to_consumable_arrayjs)))(args));
            }
        },
        {
            key: "info",
            value: function info() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $58895dfb79dba5a2$export$243e62d78d3b544d.INFO) (_console = console).info.apply(_console, (0, ($parcel$interopDefault($iBAnd$swchelperslib_to_consumable_arrayjs)))(args));
            }
        },
        {
            key: "debug",
            value: function debug() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $58895dfb79dba5a2$export$243e62d78d3b544d.DEBUG) (_console = console).debug.apply(_console, (0, ($parcel$interopDefault($iBAnd$swchelperslib_to_consumable_arrayjs)))(args));
            }
        },
        {
            key: "trace",
            value: function trace() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $58895dfb79dba5a2$export$243e62d78d3b544d.TRACE) (_console = console).trace.apply(_console, (0, ($parcel$interopDefault($iBAnd$swchelperslib_to_consumable_arrayjs)))(args));
            }
        }
    ]);
    return Log;
}();









var $4fcaa8c8db08f630$var$ReloadAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(ReloadAction, Base1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(ReloadAction);
    function ReloadAction(state) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, ReloadAction);
        return _super.call(this, state);
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(ReloadAction, [
        {
            key: "execute",
            value: // eslint-disable-next-line class-methods-use-this
            function execute() {
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                window.location.reload();
                                return _ctx.abrupt("return", Promise.resolve());
                            case 2:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "unpack",
            value: function unpack() {}
        }
    ]);
    return ReloadAction;
}((0, $ceab516818f51ad5$export$2e2bcd8739ae039));
var $4fcaa8c8db08f630$export$2e2bcd8739ae039 = $4fcaa8c8db08f630$var$ReloadAction;





















var $a8735f73fa579b7c$export$af22135957e110d7 = /*#__PURE__*/ function() {
    "use strict";
    function PromiseExecutorCallbacks() {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, PromiseExecutorCallbacks);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "_promise", void 0);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "_resolve", void 0);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "_reject", void 0);
        // dummy initialization required to satisfy TS2564 (definite assignment)
        var tmpResolve = function() {};
        var tmpReject = function() {};
        this._promise = new Promise(function(resolve, reject) {
            tmpResolve = resolve;
            tmpReject = reject;
        });
        this._resolve = tmpResolve;
        this._reject = tmpReject;
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(PromiseExecutorCallbacks, [
        {
            key: "promise",
            value: function promise() {
                return this._promise;
            }
        },
        {
            key: "resolve",
            value: function resolve(result) {
                return this._resolve(result);
            }
        },
        {
            key: "reject",
            value: function reject() {
                return this._reject();
            }
        }
    ]);
    return PromiseExecutorCallbacks;
}();
function $a8735f73fa579b7c$export$1f4f18df0126964a(element, resolveEventNames, rejectEventNames) {
    return $a8735f73fa579b7c$var$_waitForEvents.apply(this, arguments);
}
function $a8735f73fa579b7c$var$_waitForEvents() {
    $a8735f73fa579b7c$var$_waitForEvents = (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee(element, resolveEventNames, rejectEventNames) {
        return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.abrupt("return", new Promise(function(resolve, reject) {
                        var ref = [
                            function() {
                                resolveEventNames.forEach(function(name) {
                                    return element.removeEventListener(name, resolveHandler);
                                });
                                rejectEventNames.forEach(function(name) {
                                    return element.removeEventListener(name, rejectHandler);
                                });
                                resolve(element);
                            },
                            function(e) {
                                resolveEventNames.forEach(function(name) {
                                    return element.removeEventListener(name, resolveHandler);
                                });
                                rejectEventNames.forEach(function(name) {
                                    return element.removeEventListener(name, rejectHandler);
                                });
                                reject(e);
                            }, 
                        ], resolveHandler = ref[0], rejectHandler = ref[1];
                        resolveEventNames.forEach(function(e) {
                            return element.addEventListener(e, resolveHandler);
                        });
                        rejectEventNames.forEach(function(e) {
                            return element.addEventListener(e, rejectHandler);
                        });
                    }));
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return $a8735f73fa579b7c$var$_waitForEvents.apply(this, arguments);
}










var $8bbfb6fe1ceb6076$var$Preloader = /*#__PURE__*/ function() {
    "use strict";
    function Preloader() {
        var container = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.createElement("div");
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, Preloader);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "container", void 0);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "refs", new Map());
        this.container = container;
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(Preloader, [
        {
            key: "preloadImpl",
            value: function preloadImpl(mimetype, url) {
                var key = Preloader.key(mimetype, url);
                var cpe = Preloader.createPreloadingElement.bind(Preloader);
                var ref;
                var element = (ref = this.refs.get(key)) !== null && ref !== void 0 ? ref : cpe(mimetype, url);
                this.container.appendChild(element);
                this.refs.set(key, element);
                return {
                    key: key,
                    element: element
                };
            }
        },
        {
            key: "preload",
            value: function preload() {
                for(var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++){
                    items[_key] = arguments[_key];
                }
                var _this = this;
                return items.map(function(param) {
                    var mimetype = param.mimetype, url = param.url;
                    return _this.preloadImpl(mimetype, url);
                }).map(function(param) {
                    var element = param.element;
                    return Preloader.readyForDisplay(element).then();
                });
            }
        },
        {
            key: "get",
            value: function get(mimetype, url) {
                var ref = this.preloadImpl(mimetype, url), key = ref.key, element = ref.element;
                element.remove();
                var clonedElement = element.cloneNode(true);
                this.container.appendChild(clonedElement);
                this.refs.set(key, clonedElement);
                return element;
            }
        },
        {
            key: "unrefImpl",
            value: function unrefImpl() {
                for(var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++){
                    keys[_key] = arguments[_key];
                }
                var _this = this;
                keys.forEach(function(key) {
                    var element = _this.refs.get(key);
                    element === null || element === void 0 ? void 0 : element.remove();
                    _this.refs.delete(key);
                });
            }
        },
        {
            key: "unref",
            value: function unref() {
                for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
                    refs[_key] = arguments[_key];
                }
                var keys = refs.map(function(param) {
                    var mimetype = param.mimetype, url = param.url;
                    return Preloader.key(mimetype, url);
                });
                this.unrefImpl.apply(this, (0, ($parcel$interopDefault($iBAnd$swchelperslib_to_consumable_arrayjs)))(keys));
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.unrefImpl.apply(this, (0, ($parcel$interopDefault($iBAnd$swchelperslib_to_consumable_arrayjs)))(this.refs.keys()));
            }
        }
    ], [
        {
            key: "key",
            value: function key(mimetype, url) {
                return "{".concat(mimetype, "}{").concat(url, "}");
            }
        },
        {
            key: "readyForDisplay",
            value: function readyForDisplay(content) {
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (!(content instanceof HTMLImageElement)) {
                                    _ctx.next = 5;
                                    break;
                                }
                                _ctx.next = 3;
                                return Preloader.readyForDisplayImage(content);
                            case 3:
                                _ctx.next = 11;
                                break;
                            case 5:
                                if (!(content instanceof HTMLVideoElement)) {
                                    _ctx.next = 10;
                                    break;
                                }
                                _ctx.next = 8;
                                return Preloader.readyForDisplayVideo(content);
                            case 8:
                                _ctx.next = 11;
                                break;
                            case 10:
                                (0, $3f2808a10fe174a4$export$57b5e12ee8bbcf57)(content);
                            case 11:
                                return _ctx.abrupt("return", content);
                            case 12:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "readyForDisplayImage",
            value: function readyForDisplayImage(image) {
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (image.complete) {
                                    _ctx.next = 3;
                                    break;
                                }
                                _ctx.next = 3;
                                return (0, $a8735f73fa579b7c$export$1f4f18df0126964a)(image, [
                                    "load"
                                ], [
                                    "abort",
                                    "error"
                                ]);
                            case 3:
                                return _ctx.abrupt("return", image);
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "readyForDisplayVideo",
            value: function readyForDisplayVideo(video) {
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (!(video.readyState < HTMLMediaElement.HAVE_ENOUGH_DATA)) {
                                    _ctx.next = 3;
                                    break;
                                }
                                _ctx.next = 3;
                                return (0, $a8735f73fa579b7c$export$1f4f18df0126964a)(video, [
                                    "canplaythrough"
                                ], [
                                    "abort",
                                    "error"
                                ]);
                            case 3:
                                return _ctx.abrupt("return", video);
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "createPreloadingElement",
            value: function createPreloadingElement(mimetype, url) {
                var type = mimetype.split("/", 1)[0];
                switch(type){
                    case "image":
                        return Preloader.createPreloadingImage(url);
                    case "video":
                        return Preloader.createPreloadingVideo(url);
                    default:
                        throw new TypeError("Unsupported MIME type: ".concat(type, " (").concat(mimetype, ")"));
                }
            }
        },
        {
            key: "createPreloadingImage",
            value: function createPreloadingImage(url) {
                var href = new URL(url).href;
                var image = new Image();
                image.src = href;
                return image;
            }
        },
        {
            key: "createPreloadingVideo",
            value: function createPreloadingVideo(url) {
                var video = document.createElement("video");
                video.preload = "auto";
                video.src = url;
                video.autoplay = false;
                return video;
            }
        }
    ]);
    return Preloader;
}();
var $8bbfb6fe1ceb6076$export$2e2bcd8739ae039 = $8bbfb6fe1ceb6076$var$Preloader;


var $5c6aef9cc60ab4fd$var$ContentCreator = /*#__PURE__*/ function() {
    "use strict";
    function ContentCreator() {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, ContentCreator);
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(ContentCreator, null, [
        {
            key: "create",
            value: function create(mimetype, url) {
                var preloader = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new (0, $8bbfb6fe1ceb6076$export$2e2bcd8739ae039)();
                return preloader.get(mimetype, url);
            }
        },
        {
            key: "play",
            value: function play(content) {
                if (content instanceof HTMLImageElement) // NOOP
                return content;
                if (content instanceof HTMLVideoElement) {
                    content.play().finally(function() {});
                    return content;
                }
                return (0, $3f2808a10fe174a4$export$57b5e12ee8bbcf57)(content);
            }
        },
        {
            key: "setVolume",
            value: function setVolume(content, volume, mode) {
                if (content instanceof HTMLImageElement) // NOOP
                return content;
                if (content instanceof HTMLVideoElement) {
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
                            (0, $3f2808a10fe174a4$export$57b5e12ee8bbcf57)(mode);
                    }
                    return content;
                }
                return (0, $3f2808a10fe174a4$export$57b5e12ee8bbcf57)(content);
            }
        },
        {
            key: "setMuted",
            value: function setMuted(content, value) {
                if (content instanceof HTMLImageElement) // NOOP
                return content;
                if (content instanceof HTMLVideoElement) {
                    // eslint-disable-next-line no-param-reassign
                    content.muted = value;
                    return content;
                }
                return (0, $3f2808a10fe174a4$export$57b5e12ee8bbcf57)(content);
            }
        },
        {
            key: "getDimensions",
            value: function getDimensions(content) {
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (!(content instanceof HTMLImageElement)) {
                                    _ctx.next = 2;
                                    break;
                                }
                                return _ctx.abrupt("return", ContentCreator.getDimensionsImage(content));
                            case 2:
                                if (!(content instanceof HTMLVideoElement)) {
                                    _ctx.next = 4;
                                    break;
                                }
                                return _ctx.abrupt("return", ContentCreator.getDimensionsVideo(content));
                            case 4:
                                return _ctx.abrupt("return", (0, $3f2808a10fe174a4$export$57b5e12ee8bbcf57)(content));
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "getDimensionsImage",
            value: function getDimensionsImage(image) {
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (image.complete) {
                                    _ctx.next = 3;
                                    break;
                                }
                                _ctx.next = 3;
                                return (0, $a8735f73fa579b7c$export$1f4f18df0126964a)(image, [
                                    "load"
                                ], [
                                    "abort",
                                    "error"
                                ]);
                            case 3:
                                return _ctx.abrupt("return", {
                                    width: image.naturalWidth,
                                    height: image.naturalHeight
                                });
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "getDimensionsVideo",
            value: function getDimensionsVideo(video) {
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (!(video.readyState < HTMLMediaElement.HAVE_METADATA)) {
                                    _ctx.next = 3;
                                    break;
                                }
                                _ctx.next = 3;
                                return (0, $a8735f73fa579b7c$export$1f4f18df0126964a)(video, [
                                    "loadedmetadata"
                                ], [
                                    "abort",
                                    "error"
                                ]);
                            case 3:
                                return _ctx.abrupt("return", {
                                    width: video.videoWidth,
                                    height: video.videoHeight
                                });
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return ContentCreator;
}();
var $5c6aef9cc60ab4fd$export$2e2bcd8739ae039 = $5c6aef9cc60ab4fd$var$ContentCreator;









// eslint-disable-next-line compat/compat
var $70ed559d3149ea88$var$ResizeObserverOnWindow = window.ResizeObserver;
var $70ed559d3149ea88$var$ResizeObserver = $70ed559d3149ea88$var$ResizeObserverOnWindow || (0, $iBAnd$juggleresizeobserver.ResizeObserver);
var $70ed559d3149ea88$export$894f970d1d5db986 = /*#__PURE__*/ function() {
    "use strict";
    function FitUpdater(container, content) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, FitUpdater);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "container", void 0);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "content", void 0);
        this.container = container;
        this.content = content;
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(FitUpdater, [
        {
            key: "update",
            value: function update() {
                var contentSize = FitUpdater.elementSizes.get(this.content);
                if (typeof contentSize === "undefined") return;
                var containerSize = FitUpdater.elementSizes.get(this.container);
                if (typeof containerSize === "undefined") return;
                var containerAspectRatio = containerSize.width / containerSize.height;
                var contentAspectRatio = contentSize.width / contentSize.height;
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
        }
    ], [
        {
            key: "register",
            value: function register(container, content) {
                var updater = new FitUpdater(container, content);
                FitUpdater.addInstance(container, updater);
                FitUpdater.addInstance(content, updater);
                FitUpdater.resizeObserver.observe(container);
                (0, $5c6aef9cc60ab4fd$export$2e2bcd8739ae039).getDimensions(content).then(function(size) {
                    FitUpdater.elementSizes.set(content, size);
                    updater.update();
                }).catch(function(reason) {
                    // eslint-disable-next-line no-console
                    console.error("Could not retrieve size of content element.", content, reason, "Content fitting will most likely not work for this element.");
                });
                return updater;
            }
        },
        {
            key: "unregister",
            value: function unregister(updater) {
                var container = updater.container, content = updater.content;
                FitUpdater.removeInstance(container, updater);
                FitUpdater.removeInstance(content, updater);
            }
        },
        {
            key: "addInstance",
            value: function addInstance(elem, updater) {
                var instances = FitUpdater.getInstances(elem);
                instances.push(updater);
                FitUpdater.fitUpdaterInstances.set(elem, instances);
            }
        },
        {
            key: "removeInstance",
            value: function removeInstance(elem, updater) {
                var instances = FitUpdater.getInstances(elem);
                var idx = instances.indexOf(updater);
                if (idx !== -1) FitUpdater.fitUpdaterInstances.set(elem, instances.splice(idx, 1));
            }
        },
        {
            key: "getInstances",
            value: function getInstances(elem) {
                var instances = FitUpdater.fitUpdaterInstances.get(elem);
                if (typeof instances === "undefined") return [];
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_to_consumable_arrayjs)))(instances);
            }
        },
        {
            key: "resizeObserverCallback",
            value: function resizeObserverCallback(roes) {
                roes.filter(function(param) {
                    var target = param.target;
                    return target instanceof HTMLElement;
                }).forEach(function(param) {
                    var target = param.target, _contentRect = param.contentRect, width = _contentRect.width, height = _contentRect.height;
                    var element = target;
                    FitUpdater.elementSizes.set(element, {
                        width: width,
                        height: height
                    });
                    FitUpdater.getInstances(element).forEach(function(i) {
                        return i.update();
                    });
                });
            }
        }
    ]);
    return FitUpdater;
}();
(0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))($70ed559d3149ea88$export$894f970d1d5db986, "resizeObserver", new $70ed559d3149ea88$var$ResizeObserver($70ed559d3149ea88$export$894f970d1d5db986.resizeObserverCallback.bind($70ed559d3149ea88$export$894f970d1d5db986)));
(0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))($70ed559d3149ea88$export$894f970d1d5db986, "elementSizes", new WeakMap());
(0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))($70ed559d3149ea88$export$894f970d1d5db986, "fitUpdaterInstances", new WeakMap());
function $70ed559d3149ea88$var$fitObject(container, content, type) {
    content.classList.add("fit-".concat(type));
    $70ed559d3149ea88$export$894f970d1d5db986.register(container, content);
}
var $70ed559d3149ea88$export$2e2bcd8739ae039 = $70ed559d3149ea88$var$fitObject;


// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $3299c570dc483b7a$var$showActionOptionsSchema = {
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
var $3299c570dc483b7a$var$validateShowActionOptions = (0, $ba615e619b379cb9$export$9ea1f4fe5062c6d)($3299c570dc483b7a$var$showActionOptionsSchema);
var $3299c570dc483b7a$var$defaultOptionalShowArgs = {
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
var $3299c570dc483b7a$var$ShowAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(ShowAction, Base1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(ShowAction);
    function ShowAction(state) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, ShowAction);
        return _super.call(this, state);
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(ShowAction, [
        {
            key: "appendCurrentContent",
            value: function appendCurrentContent(contentElement) {
                var color = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "black";
                contentElement.classList.add("content");
                var slideElement = document.createElement("div");
                slideElement.style.setProperty("--slide-background-color", color);
                slideElement.classList.add("slide");
                slideElement.appendChild(contentElement);
                var slideInnerWrapperElement = document.createElement("div");
                slideInnerWrapperElement.classList.add("slide-inner-wrapper");
                slideInnerWrapperElement.appendChild(slideElement);
                var slideOuterWrapperElement = document.createElement("div");
                slideOuterWrapperElement.classList.add("slide-outer-wrapper");
                slideOuterWrapperElement.appendChild(slideInnerWrapperElement);
                var container = this.state.container;
                container.appendChild(slideOuterWrapperElement);
                return {
                    slideOuterWrapperElement: slideOuterWrapperElement,
                    slideInnerWrapperElement: slideInnerWrapperElement,
                    slideElement: slideElement,
                    contentElement: contentElement
                };
            }
        },
        {
            key: "removePreviousSlides",
            value: function removePreviousSlides(s) {
                var activeSlides = this.state.activeSlides;
                var index = activeSlides.indexOf(s);
                if (index !== -1) {
                    var previousSlides = activeSlides.slice(0, index);
                    activeSlides.splice(0, index);
                    previousSlides.forEach(function(ps) {
                        var parentNode = ps.slideOuterWrapperElement.parentNode;
                        if (parentNode !== null) parentNode.removeChild(ps.slideOuterWrapperElement);
                        ps.transition.cancel();
                        ps.animation.cancel();
                    });
                }
            }
        },
        {
            key: "execute",
            value: function execute(arg) {
                var _this = this;
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    var transitionCreator, animationCreator, ref, mimetype, url, fit, color, startDelay, volume, muted, preloader, content, currentDomStructure, transition, animation, targetShowUpDelay, contentPlayDelay, contentPlayTimeoutId, slideData, activeSlides, msg;
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                transitionCreator = _this.prepareTransition(arg);
                                animationCreator = _this.prepareAnimation(arg);
                                ref = (0, ($parcel$interopDefault($iBAnd$swchelperslib_object_spreadjs)))({}, $3299c570dc483b7a$var$defaultOptionalShowArgs, arg), mimetype = ref.mimetype, url = ref.url, fit = ref.fit, color = ref.color, startDelay = ref.startDelay, volume = ref.volume, muted = ref.muted;
                                preloader = _this.state.preloader;
                                content = (0, $5c6aef9cc60ab4fd$export$2e2bcd8739ae039).create(mimetype, url, preloader);
                                currentDomStructure = _this.appendCurrentContent(content, color !== null && color !== void 0 ? color : "black");
                                (0, $70ed559d3149ea88$export$2e2bcd8739ae039)(currentDomStructure.slideElement, content, fit);
                                (0, $5c6aef9cc60ab4fd$export$2e2bcd8739ae039).setMuted(content, _this.state.muted || muted);
                                (0, $5c6aef9cc60ab4fd$export$2e2bcd8739ae039).setVolume(content, volume, "absolute");
                                transition = transitionCreator(currentDomStructure.slideOuterWrapperElement);
                                animation = animationCreator(currentDomStructure.slideElement);
                                targetShowUpDelay = transition.targetShowUpDelay;
                                contentPlayDelay = startDelay !== null && startDelay !== void 0 ? startDelay : targetShowUpDelay;
                                contentPlayTimeoutId = setTimeout(function() {
                                    return (0, $5c6aef9cc60ab4fd$export$2e2bcd8739ae039).play(content);
                                }, contentPlayDelay * 1000);
                                slideData = (0, ($parcel$interopDefault($iBAnd$swchelperslib_object_spread_propsjs)))((0, ($parcel$interopDefault($iBAnd$swchelperslib_object_spreadjs)))({}, currentDomStructure), {
                                    transition: transition,
                                    animation: animation,
                                    contentPlayTimeoutId: contentPlayTimeoutId
                                });
                                activeSlides = _this.state.activeSlides;
                                activeSlides.push(slideData);
                                _ctx.prev = 17;
                                _ctx.next = 20;
                                return transition.done();
                            case 20:
                                _ctx.next = 26;
                                break;
                            case 22:
                                _ctx.prev = 22;
                                _ctx.t0 = _ctx["catch"](17);
                                msg = "Waiting for transition to end failed. Proceeding anyway";
                                if (_ctx.t0) _this.state.log.warn(msg, _ctx.t0);
                                else _this.state.log.warn(msg);
                            case 26:
                                _this.removePreviousSlides(slideData);
                            case 27:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            17,
                            22
                        ]
                    ]);
                }))();
            }
        },
        {
            key: "prepareTransition",
            value: function prepareTransition(param) {
                var transition = param.transition;
                var ref = transition !== null && transition !== void 0 ? transition : {
                    type: "none",
                    options: {}
                }, type = ref.type, options = ref.options;
                var transitionFactory = this.state.transitionFactory;
                return transitionFactory.prepare(type, options);
            }
        },
        {
            key: "prepareAnimation",
            value: function prepareAnimation(param) {
                var animation = param.animation;
                var ref = animation !== null && animation !== void 0 ? animation : {
                    type: "none",
                    options: {}
                }, type = ref.type, options = ref.options;
                var animationFactory = this.state.animationFactory;
                return animationFactory.prepare(type, options);
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "unpack",
            value: function unpack(options) {
                return $3299c570dc483b7a$var$validateShowActionOptions(options);
            }
        }
    ]);
    return ShowAction;
}((0, $ceab516818f51ad5$export$2e2bcd8739ae039));
var $3299c570dc483b7a$export$2e2bcd8739ae039 = $3299c570dc483b7a$var$ShowAction;












// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $6cac68e21ab2a4a9$var$clearActionOptionsSchema = {
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
var $6cac68e21ab2a4a9$var$validateClearActionOptions = (0, $ba615e619b379cb9$export$9ea1f4fe5062c6d)($6cac68e21ab2a4a9$var$clearActionOptionsSchema);
var $6cac68e21ab2a4a9$var$defaultOptionalClearArgs = {
    color: "black",
    transition: {
        type: "none",
        options: {}
    }
};
var $6cac68e21ab2a4a9$var$ClearAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(ClearAction, Base1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(ClearAction);
    function ClearAction(state) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, ClearAction);
        return _super.call(this, state);
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(ClearAction, [
        {
            key: "execute",
            value: // eslint-disable-next-line class-methods-use-this
            function execute(arg) {
                var _this = this;
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    var showActionOptions, viewer;
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                showActionOptions = (0, ($parcel$interopDefault($iBAnd$swchelperslib_object_spread_propsjs)))((0, ($parcel$interopDefault($iBAnd$swchelperslib_object_spreadjs)))({}, $6cac68e21ab2a4a9$var$defaultOptionalClearArgs, arg), {
                                    mimetype: "image/gif",
                                    url: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                                    animation: {
                                        type: "none"
                                    }
                                });
                                viewer = _this.state.viewer;
                                _ctx.next = 4;
                                return viewer.execute("show", showActionOptions);
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "unpack",
            value: function unpack(options) {
                return $6cac68e21ab2a4a9$var$validateClearActionOptions(options);
            }
        }
    ]);
    return ClearAction;
}((0, $ceab516818f51ad5$export$2e2bcd8739ae039));
var $6cac68e21ab2a4a9$export$2e2bcd8739ae039 = $6cac68e21ab2a4a9$var$ClearAction;


/* eslint-disable import/prefer-default-export */ function $50f38f10471e978d$export$c2aff9e92362a9b2(root, stylesheetText, id) {
    var style = document.createElement("style");
    if (typeof id !== "undefined") style.id = id;
    style.textContent = stylesheetText;
    var selector = "style[type='text/css']:last-of-type, style:not([type]):last-of-type";
    var lastStyleElem = root.querySelector(selector);
    if (lastStyleElem === null) root.prepend(style);
    else lastStyleElem.after(style);
}
function $50f38f10471e978d$export$d5858ef5ae9c7e87(elem, property, formatter, value) {
    if (typeof value !== "undefined") elem.style.setProperty(property, formatter(value));
}






var $8b239050a9eaf89b$exports = {};

$parcel$export($8b239050a9eaf89b$exports, "NoneAnimation", function () { return $8b239050a9eaf89b$export$a27a75f1864d99f4; }, function (v) { return $8b239050a9eaf89b$export$a27a75f1864d99f4 = v; });




var $7d8361fea80b2f58$exports = {};
$7d8361fea80b2f58$exports = "@-webkit-keyframes animation-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n@keyframes animation-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n.animation-none {\n  --animation-none-delay: 0s;\n  --animation-none-duration: 0s;\n}\n\n.animation-none > .content {\n  -webkit-animation-delay: var(--animation-none-delay);\n  animation-delay: var(--animation-none-delay);\n  -webkit-animation-duration: var(--animation-none-duration);\n  animation-duration: var(--animation-none-duration);\n  -webkit-animation-name: animation-none;\n  animation-name: animation-none;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";















var $82b9c80dd0edcbfa$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function BaseAnimation(element) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, BaseAnimation);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "element", void 0);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "_isCancelled", false);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "_isDone", false);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "donePEC", void 0);
        this.element = element;
        this.donePEC = new (0, $a8735f73fa579b7c$export$af22135957e110d7)();
        // prevent uncaught exceptions in promise
        this.donePEC.promise().catch(function() {});
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(BaseAnimation, [
        {
            key: "isCancelled",
            value: function isCancelled() {
                return this._isCancelled;
            }
        },
        {
            key: "done",
            value: function done() {
                return this.donePEC.promise();
            }
        },
        {
            key: "isDone",
            value: function isDone() {
                return this._isDone;
            }
        }
    ]);
    return BaseAnimation;
}();


var $264efb7c27b53520$var$cssBasedAnimationOptionsDefault = {
    classList: [],
    cssPropertySetter: function() {},
    cssPropertyRemover: function() {},
    endEventFilter: function() {
        return true;
    },
    cancelEventFilter: function() {
        return true;
    },
    removeAtEnd: true,
    removeOnCancel: true
};
var $264efb7c27b53520$var$CssBasedAnimation = /*#__PURE__*/ function(BaseAnimation1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(CssBasedAnimation, BaseAnimation1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(CssBasedAnimation);
    function CssBasedAnimation(content, options) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, CssBasedAnimation);
        var _this;
        _this = _super.call(this, content);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))((0, ($parcel$interopDefault($iBAnd$swchelperslib_assert_this_initializedjs)))(_this), "endHandler", void 0);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))((0, ($parcel$interopDefault($iBAnd$swchelperslib_assert_this_initializedjs)))(_this), "cancelHandler", void 0);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))((0, ($parcel$interopDefault($iBAnd$swchelperslib_assert_this_initializedjs)))(_this), "cssBasedAnimationOptions", void 0);
        var element = (0, ($parcel$interopDefault($iBAnd$swchelperslib_assert_this_initializedjs)))(_this).element;
        _this.cssBasedAnimationOptions = (0, ($parcel$interopDefault($iBAnd$swchelperslib_object_spreadjs)))({}, $264efb7c27b53520$var$cssBasedAnimationOptionsDefault, options);
        var _cssBasedAnimationOptions = _this.cssBasedAnimationOptions, cssPropertySetter = _cssBasedAnimationOptions.cssPropertySetter, endEventFilter = _cssBasedAnimationOptions.endEventFilter, cancelEventFilter = _cssBasedAnimationOptions.cancelEventFilter;
        _this.addClasses();
        cssPropertySetter(element);
        _this.endHandler = function(ae) {
            if (endEventFilter(ae)) _this.end();
        };
        _this.cancelHandler = function(ae) {
            if (cancelEventFilter(ae)) _this.cancelled();
        };
        element.addEventListener("animationend", _this.endHandler);
        element.addEventListener("animationcancel", _this.cancelHandler);
        return _this;
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(CssBasedAnimation, [
        {
            key: "addClasses",
            value: function addClasses() {
                var classList = this.cssBasedAnimationOptions.classList;
                var element = this.element;
                classList.forEach(function(c) {
                    return element.classList.add(c);
                });
            }
        },
        {
            key: "removeClasses",
            value: function removeClasses() {
                var classList = this.cssBasedAnimationOptions.classList;
                var element = this.element;
                classList.forEach(function(c) {
                    return element.classList.remove(c);
                });
            }
        },
        {
            key: "end",
            value: function end() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup(this.cssBasedAnimationOptions.removeAtEnd);
                    this._isDone = true;
                    this.donePEC.resolve();
                }
            }
        },
        {
            key: "cancelled",
            value: function cancelled() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup(this.cssBasedAnimationOptions.removeOnCancel);
                    this._isCancelled = true;
                    this.donePEC.reject();
                }
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (!this.isCancelled() && !this.isDone()) {
                    if (this.cssBasedAnimationOptions.removeOnCancel) this.removeClasses();
                    else this.cancelled();
                }
            }
        },
        {
            key: "cleanup",
            value: function cleanup(removeClassesAndProperties) {
                var ref = this, element = ref.element, cssBasedAnimationOptions = ref.cssBasedAnimationOptions;
                var cssPropertyRemover = cssBasedAnimationOptions.cssPropertyRemover;
                element.removeEventListener("animationend", this.endHandler);
                element.removeEventListener("animationcancel", this.cancelHandler);
                if (removeClassesAndProperties) {
                    this.removeClasses();
                    cssPropertyRemover(element);
                } else element.style.animationPlayState = "paused";
            }
        }
    ]);
    return CssBasedAnimation;
}((0, $82b9c80dd0edcbfa$export$2e2bcd8739ae039));
var $264efb7c27b53520$export$2e2bcd8739ae039 = $264efb7c27b53520$var$CssBasedAnimation;



var $8b239050a9eaf89b$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $8b239050a9eaf89b$var$NoneAnimation_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $8b239050a9eaf89b$var$noneAnimationOptionsSchema = {
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
var $8b239050a9eaf89b$var$validateNoneAnimationOptions = (0, $ba615e619b379cb9$export$9ea1f4fe5062c6d)($8b239050a9eaf89b$var$noneAnimationOptionsSchema);
var $8b239050a9eaf89b$export$a27a75f1864d99f4 = $8b239050a9eaf89b$var$NoneAnimation_1 = /*#__PURE__*/ function(CssBasedAnimation1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(NoneAnimation1, CssBasedAnimation1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(NoneAnimation1);
    function NoneAnimation1(element, options) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, NoneAnimation1);
        return _super.call(this, element, $8b239050a9eaf89b$var$NoneAnimation_1.createCssBasedAnimationOptions(options));
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(NoneAnimation1, null, [
        {
            key: "createCssBasedAnimationOptions",
            value: function createCssBasedAnimationOptions(options) {
                var animationEventFilter = function(param) {
                    var animationName = param.animationName;
                    return animationName === "animation-none";
                };
                var cssPropertySetter = function(e) {
                    var delay = options.delay, duration = options.duration;
                    var s = (0, $50f38f10471e978d$export$d5858ef5ae9c7e87);
                    s(e, "--animation-none-delay", function(v) {
                        return "".concat(v, "s");
                    }, delay);
                    s(e, "--animation-none-duration", function(v) {
                        return "".concat(v, "s");
                    }, duration);
                };
                var cssPropertyRemover = function(e) {
                    var propertyNames = [
                        "--animation-none-delay",
                        "--animation-none-duration", 
                    ];
                    propertyNames.forEach(function(n) {
                        return e.style.removeProperty(n);
                    });
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
        },
        {
            key: "unpack",
            value: function unpack(options) {
                return $8b239050a9eaf89b$var$validateNoneAnimationOptions(options);
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $8b239050a9eaf89b$var$NoneAnimation_1.unpack(options);
                return function(element) {
                    return new $8b239050a9eaf89b$var$NoneAnimation_1(element, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return 0, (/*@__PURE__*/$parcel$interopDefault($7d8361fea80b2f58$exports));
            }
        }
    ]);
    return NoneAnimation1;
}((0, $264efb7c27b53520$export$2e2bcd8739ae039));
$8b239050a9eaf89b$export$a27a75f1864d99f4 = $8b239050a9eaf89b$var$NoneAnimation_1 = $8b239050a9eaf89b$var$__decorate([
    (0, $3f2808a10fe174a4$export$77e1154930d99c3d)()
], $8b239050a9eaf89b$export$a27a75f1864d99f4);


var $044393db4e5391e8$exports = {};

$parcel$export($044393db4e5391e8$exports, "PanZoomAnimation", function () { return $044393db4e5391e8$export$26ae749f2a727050; }, function (v) { return $044393db4e5391e8$export$26ae749f2a727050 = v; });




var $c662c3654e7b1ec1$exports = {};
$c662c3654e7b1ec1$exports = "@-webkit-keyframes animation-pan-zoom {\n  0% {\n    -webkit-transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n    transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n  }\n\n  100% {\n    -webkit-transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n    transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n  }\n}\n\n@keyframes animation-pan-zoom {\n  0% {\n    -webkit-transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n    transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n  }\n\n  100% {\n    -webkit-transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n    transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n  }\n}\n\n.animation-pan-zoom {\n  --animation-pan-zoom-delay: 0s;\n  --animation-pan-zoom-duration: 0s;\n  --animation-pan-zoom-origin-x: .5;\n  --animation-pan-zoom-origin-y: .5;\n  --animation-pan-zoom-origin-scale: 1;\n  --animation-pan-zoom-target-x: .5;\n  --animation-pan-zoom-target-y: .5;\n  --animation-pan-zoom-target-scale: 1;\n}\n\n.animation-pan-zoom .content {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation-name: animation-pan-zoom;\n  animation-name: animation-pan-zoom;\n  -webkit-animation-delay: var(--animation-pan-zoom-delay);\n  animation-delay: var(--animation-pan-zoom-delay);\n  -webkit-animation-duration: var(--animation-pan-zoom-duration);\n  animation-duration: var(--animation-pan-zoom-duration);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";






var $044393db4e5391e8$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $044393db4e5391e8$var$PanZoomAnimation_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $044393db4e5391e8$var$partialViewSchema = {
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
var $044393db4e5391e8$var$panZoomAnimationOptionsSchema = {
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
        from: $044393db4e5391e8$var$partialViewSchema,
        to: $044393db4e5391e8$var$partialViewSchema
    }
};
var $044393db4e5391e8$var$validatePanZoomAnimationOptions = (0, $ba615e619b379cb9$export$9ea1f4fe5062c6d)($044393db4e5391e8$var$panZoomAnimationOptionsSchema);
var $044393db4e5391e8$export$26ae749f2a727050 = $044393db4e5391e8$var$PanZoomAnimation_1 = /*#__PURE__*/ function(CssBasedAnimation1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(PanZoomAnimation1, CssBasedAnimation1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(PanZoomAnimation1);
    function PanZoomAnimation1(content, options) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, PanZoomAnimation1);
        return _super.call(this, content, $044393db4e5391e8$var$PanZoomAnimation_1.createCssBasedAnimationOptions(options));
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(PanZoomAnimation1, null, [
        {
            key: "createCssBasedAnimationOptions",
            value: function createCssBasedAnimationOptions(options) {
                var animationEventFilter = function(param) {
                    var animationName = param.animationName;
                    return animationName === "animation-pan-zoom";
                };
                var cssPropertySetter = function(e) {
                    var delay = options.delay, duration = options.duration, from = options.from, to = options.to;
                    var s = (0, $50f38f10471e978d$export$d5858ef5ae9c7e87);
                    s(e, "--animation-pan-zoom-delay", function(v) {
                        return "".concat(v, "s");
                    }, delay);
                    s(e, "--animation-pan-zoom-duration", function(v) {
                        return "".concat(v, "s");
                    }, duration);
                    s(e, "--animation-pan-zoom-origin-x", function(v) {
                        return "".concat(v);
                    }, from === null || from === void 0 ? void 0 : from.x);
                    s(e, "--animation-pan-zoom-origin-y", function(v) {
                        return "".concat(v);
                    }, from === null || from === void 0 ? void 0 : from.y);
                    s(e, "--animation-pan-zoom-origin-scale", function(v) {
                        return "".concat(v);
                    }, from === null || from === void 0 ? void 0 : from.scale);
                    s(e, "--animation-pan-zoom-target-x", function(v) {
                        return "".concat(v);
                    }, to === null || to === void 0 ? void 0 : to.x);
                    s(e, "--animation-pan-zoom-target-y", function(v) {
                        return "".concat(v);
                    }, to === null || to === void 0 ? void 0 : to.y);
                    s(e, "--animation-pan-zoom-target-scale", function(v) {
                        return "".concat(v);
                    }, to === null || to === void 0 ? void 0 : to.scale);
                };
                var cssPropertyRemover = function(e) {
                    var propertyNames = [
                        "--animation-pan-zoom-delay",
                        "--animation-pan-zoom-duration",
                        "--animation-pan-zoom-origin-x",
                        "--animation-pan-zoom-origin-y",
                        "--animation-pan-zoom-origin-scale",
                        "--animation-pan-zoom-target-x",
                        "--animation-pan-zoom-target-y",
                        "--animation-pan-zoom-target-scale", 
                    ];
                    propertyNames.forEach(function(n) {
                        return e.style.removeProperty(n);
                    });
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
        },
        {
            key: "unpack",
            value: function unpack(options) {
                return $044393db4e5391e8$var$validatePanZoomAnimationOptions(options);
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $044393db4e5391e8$var$PanZoomAnimation_1.unpack(options);
                return function(content) {
                    return new $044393db4e5391e8$var$PanZoomAnimation_1(content, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return 0, (/*@__PURE__*/$parcel$interopDefault($c662c3654e7b1ec1$exports));
            }
        }
    ]);
    return PanZoomAnimation1;
}((0, $264efb7c27b53520$export$2e2bcd8739ae039));
$044393db4e5391e8$export$26ae749f2a727050 = $044393db4e5391e8$var$PanZoomAnimation_1 = $044393db4e5391e8$var$__decorate([
    (0, $3f2808a10fe174a4$export$77e1154930d99c3d)()
], $044393db4e5391e8$export$26ae749f2a727050);
var $044393db4e5391e8$export$2e2bcd8739ae039 = $044393db4e5391e8$export$26ae749f2a727050;


var $b64d2ab73d57a1a4$var$AnimationFactory = /*#__PURE__*/ function() {
    "use strict";
    function AnimationFactory(root) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, AnimationFactory);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "root", void 0);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "animationRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(AnimationFactory, [
        {
            key: "registerKnownTransitions",
            value: function registerKnownTransitions() {
                this.register("none", (0, $8b239050a9eaf89b$exports.NoneAnimation));
                this.register("pan-zoom", (0, $044393db4e5391e8$exports.PanZoomAnimation));
            }
        },
        {
            key: "register",
            value: function register(id, AnimationClass) {
                if (this.animationRegistry.has(id)) throw new Error("Animation type already registered");
                (0, $50f38f10471e978d$export$c2aff9e92362a9b2)(this.root, AnimationClass.getStyleSheetAsString(), "animation-".concat(id));
                this.animationRegistry.set(id, AnimationClass);
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "none", options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var AnimationClass = this.animationRegistry.get(type);
                if (!AnimationClass) throw new Error("Unknown animation type: ".concat(type));
                // unpacks the options and throws an exception if they are invalid,
                // but does create the actual transition yet
                return AnimationClass.prepare(options);
            }
        }
    ]);
    return AnimationFactory;
}();
var $b64d2ab73d57a1a4$export$2e2bcd8739ae039 = $b64d2ab73d57a1a4$var$AnimationFactory;





var $acde1d865dc1f262$exports = {};

$parcel$export($acde1d865dc1f262$exports, "NoneTransition", function () { return $acde1d865dc1f262$export$b1e3715c3749f16; }, function (v) { return $acde1d865dc1f262$export$b1e3715c3749f16 = v; });






var $b116bcf776de0afe$exports = {};
$b116bcf776de0afe$exports = "@-webkit-keyframes transition-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n.transition-none {\n  --transition-none-delay: 0s;\n  --transition-none-duration: 0s;\n  opacity: 0;\n  -webkit-animation-delay: var(--transition-none-delay);\n  animation-delay: var(--transition-none-delay);\n  -webkit-animation-duration: var(--transition-none-duration);\n  animation-duration: var(--transition-none-duration);\n  -webkit-animation-name: transition-none;\n  animation-name: transition-none;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n";








var $ac79deeb156c0416$var$CssBasedTransition = /*#__PURE__*/ function(CssBasedAnimation1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(CssBasedTransition, CssBasedAnimation1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(CssBasedTransition);
    function CssBasedTransition(content, options) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, CssBasedTransition);
        var _this;
        _this = _super.call(this, content, options);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))((0, ($parcel$interopDefault($iBAnd$swchelperslib_assert_this_initializedjs)))(_this), "targetShowUpDelay", void 0);
        _this.targetShowUpDelay = options.targetShowUpDelay;
        return _this;
    }
    return CssBasedTransition;
}((0, $264efb7c27b53520$export$2e2bcd8739ae039));
var $ac79deeb156c0416$export$2e2bcd8739ae039 = $ac79deeb156c0416$var$CssBasedTransition;





var $acde1d865dc1f262$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $acde1d865dc1f262$var$NoneTransition_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $acde1d865dc1f262$var$noneTransitionOptionsSchema = {
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
var $acde1d865dc1f262$var$validateNoneTransitionOptions = (0, $ba615e619b379cb9$export$9ea1f4fe5062c6d)($acde1d865dc1f262$var$noneTransitionOptionsSchema);
var $acde1d865dc1f262$export$b1e3715c3749f16 = $acde1d865dc1f262$var$NoneTransition_1 = /*#__PURE__*/ function(CssBasedTransition1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(NoneTransition1, CssBasedTransition1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(NoneTransition1);
    function NoneTransition1(element, options) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, NoneTransition1);
        var _this;
        _this = _super.call(this, element, $acde1d865dc1f262$var$NoneTransition_1.createCssBasedTransitionOptions(options));
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))((0, ($parcel$interopDefault($iBAnd$swchelperslib_assert_this_initializedjs)))(_this), "targetShowUpDelay", 0);
        return _this;
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(NoneTransition1, null, [
        {
            key: "createCssBasedTransitionOptions",
            value: function createCssBasedTransitionOptions(options) {
                var animationEventFilter = function(param) {
                    var animationName = param.animationName;
                    return animationName === "transition-none";
                };
                var delay = options.delay, duration = options.duration;
                var cssPropertySetter = function(e) {
                    var s = (0, $50f38f10471e978d$export$d5858ef5ae9c7e87);
                    s(e, "--transition-none-delay", function(v) {
                        return "".concat(v, "s");
                    }, delay);
                    s(e, "--transition-none-duration", function(v) {
                        return "".concat(v, "s");
                    }, duration);
                };
                var cssPropertyRemover = function(e) {
                    var propertyNames = [
                        "--transition-none-delay",
                        "--transition-none-duration", 
                    ];
                    propertyNames.forEach(function(n) {
                        return e.style.removeProperty(n);
                    });
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
        },
        {
            key: "unpack",
            value: function unpack(options) {
                return $acde1d865dc1f262$var$validateNoneTransitionOptions(options);
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $acde1d865dc1f262$var$NoneTransition_1.unpack(options);
                return function(element) {
                    return new $acde1d865dc1f262$var$NoneTransition_1(element, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return 0, (/*@__PURE__*/$parcel$interopDefault($b116bcf776de0afe$exports));
            }
        }
    ]);
    return NoneTransition1;
}((0, $ac79deeb156c0416$export$2e2bcd8739ae039));
$acde1d865dc1f262$export$b1e3715c3749f16 = $acde1d865dc1f262$var$NoneTransition_1 = $acde1d865dc1f262$var$__decorate([
    (0, $3f2808a10fe174a4$export$77e1154930d99c3d)()
], $acde1d865dc1f262$export$b1e3715c3749f16);
var $acde1d865dc1f262$export$2e2bcd8739ae039 = $acde1d865dc1f262$export$b1e3715c3749f16;


var $0ebdd36f4af69419$exports = {};

$parcel$export($0ebdd36f4af69419$exports, "FadeTransition", function () { return $0ebdd36f4af69419$export$b4cd2c531e831209; }, function (v) { return $0ebdd36f4af69419$export$b4cd2c531e831209 = v; });





var $54c03f63a2495307$exports = {};
$54c03f63a2495307$exports = "@-webkit-keyframes transition-fade-overlay {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-fade-overlay {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes transition-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.transition-fade {\n  --transition-fade-delay: 0s;\n  --transition-fade-duration: -1s;\n  --transition-fade-duration-half: calc(var(--transition-fade-duration) / 2);\n  --transition-fade-color: black;\n}\n\n.transition-fade > *, .transition-fade:before {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-duration: var(--transition-fade-duration-half);\n  animation-duration: var(--transition-fade-duration-half);\n}\n\n.transition-fade > * {\n  -webkit-animation-name: transition-fade;\n  animation-name: transition-fade;\n  -webkit-animation-delay: calc(var(--transition-fade-delay)  + var(--transition-fade-duration-half));\n  animation-delay: calc(var(--transition-fade-delay)  + var(--transition-fade-duration-half));\n}\n\n.transition-fade:before {\n  content: \"\";\n  background-color: var(--transition-fade-color);\n  width: 100%;\n  height: 100%;\n  -webkit-animation-name: transition-fade-overlay;\n  animation-name: transition-fade-overlay;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n";






var $0ebdd36f4af69419$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $0ebdd36f4af69419$var$FadeTransition_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $0ebdd36f4af69419$var$fadeTransitionOptionsSchema = {
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
var $0ebdd36f4af69419$var$validateFadeTransitionOptions = (0, $ba615e619b379cb9$export$9ea1f4fe5062c6d)($0ebdd36f4af69419$var$fadeTransitionOptionsSchema);
// overwrites the (invalid) value set as default in the SCSS file
var $0ebdd36f4af69419$var$defaultDuration = 2;
var $0ebdd36f4af69419$export$b4cd2c531e831209 = $0ebdd36f4af69419$var$FadeTransition_1 = /*#__PURE__*/ function(CssBasedTransition1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(FadeTransition1, CssBasedTransition1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(FadeTransition1);
    function FadeTransition1(element, options) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, FadeTransition1);
        return _super.call(this, element, $0ebdd36f4af69419$var$FadeTransition_1.createCssBasedTransitionOptions(options));
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(FadeTransition1, null, [
        {
            key: "createCssBasedTransitionOptions",
            value: function createCssBasedTransitionOptions(options) {
                var animationEventFilter = function(param) {
                    var animationName = param.animationName;
                    return animationName === "transition-fade";
                };
                var ref = (0, ($parcel$interopDefault($iBAnd$swchelperslib_object_spreadjs)))({
                    duration: $0ebdd36f4af69419$var$defaultDuration
                }, options), delay = ref.delay, duration = ref.duration;
                var cssPropertySetter = function(e) {
                    var s = (0, $50f38f10471e978d$export$d5858ef5ae9c7e87);
                    s(e, "--transition-fade-delay", function(v) {
                        return "".concat(v, "s");
                    }, delay);
                    s(e, "--transition-fade-duration", function(v) {
                        return "".concat(v, "s");
                    }, duration);
                };
                var cssPropertyRemover = function(e) {
                    var propertyNames = [
                        "--transition-fade-delay",
                        "--transition-fade-duration", 
                    ];
                    propertyNames.forEach(function(n) {
                        return e.style.removeProperty(n);
                    });
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
        },
        {
            key: "unpack",
            value: function unpack(options) {
                return $0ebdd36f4af69419$var$validateFadeTransitionOptions(options);
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $0ebdd36f4af69419$var$FadeTransition_1.unpack(options);
                return function(element) {
                    return new $0ebdd36f4af69419$var$FadeTransition_1(element, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return 0, (/*@__PURE__*/$parcel$interopDefault($54c03f63a2495307$exports));
            }
        }
    ]);
    return FadeTransition1;
}((0, $ac79deeb156c0416$export$2e2bcd8739ae039));
$0ebdd36f4af69419$export$b4cd2c531e831209 = $0ebdd36f4af69419$var$FadeTransition_1 = $0ebdd36f4af69419$var$__decorate([
    (0, $3f2808a10fe174a4$export$77e1154930d99c3d)()
], $0ebdd36f4af69419$export$b4cd2c531e831209);
var $0ebdd36f4af69419$export$2e2bcd8739ae039 = $0ebdd36f4af69419$export$b4cd2c531e831209;


var $a96c8cd92d5f89cc$exports = {};

$parcel$export($a96c8cd92d5f89cc$exports, "CrossFadeTransition", function () { return $a96c8cd92d5f89cc$export$4143b605098af1c4; }, function (v) { return $a96c8cd92d5f89cc$export$4143b605098af1c4 = v; });




var $794874df1473f927$exports = {};
$794874df1473f927$exports = "@-webkit-keyframes transition-cross-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-cross-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.transition-cross-fade {\n  --transition-cross-fade-delay: 0s;\n  --transition-cross-fade-duration: 1s;\n  -webkit-animation-delay: var(--transition-cross-fade-delay);\n  animation-delay: var(--transition-cross-fade-delay);\n  -webkit-animation-duration: var(--transition-cross-fade-duration);\n  animation-duration: var(--transition-cross-fade-duration);\n  -webkit-animation-name: transition-cross-fade;\n  animation-name: transition-cross-fade;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";






var $a96c8cd92d5f89cc$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $a96c8cd92d5f89cc$var$CrossFadeTransition_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $a96c8cd92d5f89cc$var$crossFadeTransitionOptionsSchema = {
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
var $a96c8cd92d5f89cc$var$validateCrossFadeTransitionOptions = (0, $ba615e619b379cb9$export$9ea1f4fe5062c6d)($a96c8cd92d5f89cc$var$crossFadeTransitionOptionsSchema);
var $a96c8cd92d5f89cc$export$4143b605098af1c4 = $a96c8cd92d5f89cc$var$CrossFadeTransition_1 = /*#__PURE__*/ function(CssBasedTransition1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(CrossFadeTransition1, CssBasedTransition1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(CrossFadeTransition1);
    function CrossFadeTransition1(element, options) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, CrossFadeTransition1);
        return _super.call(this, element, $a96c8cd92d5f89cc$var$CrossFadeTransition_1.createCssBasedTransitionOptions(options));
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(CrossFadeTransition1, null, [
        {
            key: "createCssBasedTransitionOptions",
            value: function createCssBasedTransitionOptions(options) {
                var animationEventFilter = function(param) {
                    var animationName = param.animationName;
                    return animationName === "transition-cross-fade";
                };
                var delay = options.delay, duration = options.duration;
                var cssPropertySetter = function(e) {
                    var s = (0, $50f38f10471e978d$export$d5858ef5ae9c7e87);
                    s(e, "--transition-cross-fade-delay", function(v) {
                        return "".concat(v, "s");
                    }, delay);
                    s(e, "--transition-cross-fade-duration", function(v) {
                        return "".concat(v, "s");
                    }, duration);
                };
                var cssPropertyRemover = function(e) {
                    var propertyNames = [
                        "--transition-cross-fade-delay",
                        "--transition-cross-fade-duration", 
                    ];
                    propertyNames.forEach(function(n) {
                        return e.style.removeProperty(n);
                    });
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
        },
        {
            key: "unpack",
            value: function unpack(options) {
                return $a96c8cd92d5f89cc$var$validateCrossFadeTransitionOptions(options);
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $a96c8cd92d5f89cc$var$CrossFadeTransition_1.unpack(options);
                return function(element) {
                    return new $a96c8cd92d5f89cc$var$CrossFadeTransition_1(element, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return 0, (/*@__PURE__*/$parcel$interopDefault($794874df1473f927$exports));
            }
        }
    ]);
    return CrossFadeTransition1;
}((0, $ac79deeb156c0416$export$2e2bcd8739ae039));
$a96c8cd92d5f89cc$export$4143b605098af1c4 = $a96c8cd92d5f89cc$var$CrossFadeTransition_1 = $a96c8cd92d5f89cc$var$__decorate([
    (0, $3f2808a10fe174a4$export$77e1154930d99c3d)()
], $a96c8cd92d5f89cc$export$4143b605098af1c4);
var $a96c8cd92d5f89cc$export$2e2bcd8739ae039 = $a96c8cd92d5f89cc$export$4143b605098af1c4;



var $7cd8947aa3ba3640$var$TransitionFactory = /*#__PURE__*/ function() {
    "use strict";
    function TransitionFactory(root) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, TransitionFactory);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "root", void 0);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "transitionRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(TransitionFactory, [
        {
            key: "registerKnownTransitions",
            value: function registerKnownTransitions() {
                this.register("none", (0, $acde1d865dc1f262$exports.NoneTransition));
                this.register("fade", (0, $0ebdd36f4af69419$exports.FadeTransition));
                this.register("cross-fade", (0, $a96c8cd92d5f89cc$exports.CrossFadeTransition));
            }
        },
        {
            key: "register",
            value: function register(id, transitionClass) {
                if (this.transitionRegistry.has(id)) throw new Error("Transition type already registered");
                (0, $50f38f10471e978d$export$c2aff9e92362a9b2)(this.root, transitionClass.getStyleSheetAsString(), "transition-".concat(id));
                this.transitionRegistry.set(id, transitionClass);
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "none", options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var TransitionClass = this.transitionRegistry.get(type);
                if (!TransitionClass) throw new Error("Unknown transition type: ".concat(type));
                // unpacks the options and throws an exception if they are invalid,
                // but does create the actual transition yet
                return TransitionClass.prepare(options);
            }
        }
    ]);
    return TransitionFactory;
}();
var $7cd8947aa3ba3640$export$2e2bcd8739ae039 = $7cd8947aa3ba3640$var$TransitionFactory;










var $d26d9c297c08e1db$var$MuteAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(MuteAction, Base1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(MuteAction);
    function MuteAction(state) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, MuteAction);
        return _super.call(this, state);
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(MuteAction, [
        {
            key: "execute",
            value: // eslint-disable-next-line class-methods-use-this
            function execute() {
                var _this = this;
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.state.activeSlides.forEach(function(param) {
                                    var contentElement = param.contentElement;
                                    return (0, $5c6aef9cc60ab4fd$export$2e2bcd8739ae039).setMuted(contentElement, true);
                                });
                                _this.state.muted = true;
                                return _ctx.abrupt("return", Promise.resolve());
                            case 3:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "unpack",
            value: function unpack() {}
        }
    ]);
    return MuteAction;
}((0, $ceab516818f51ad5$export$2e2bcd8739ae039));
var $d26d9c297c08e1db$export$2e2bcd8739ae039 = $d26d9c297c08e1db$var$MuteAction;










var $36a379aae25259c1$var$UnmuteAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(UnmuteAction, Base1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(UnmuteAction);
    function UnmuteAction(state) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, UnmuteAction);
        return _super.call(this, state);
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(UnmuteAction, [
        {
            key: "execute",
            value: // eslint-disable-next-line class-methods-use-this
            function execute() {
                var _this = this;
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.state.activeSlides.forEach(function(param) {
                                    var contentElement = param.contentElement;
                                    return (0, $5c6aef9cc60ab4fd$export$2e2bcd8739ae039).setMuted(contentElement, false);
                                });
                                _this.state.muted = false;
                                return _ctx.abrupt("return", Promise.resolve());
                            case 3:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "unpack",
            value: function unpack() {}
        }
    ]);
    return UnmuteAction;
}((0, $ceab516818f51ad5$export$2e2bcd8739ae039));
var $36a379aae25259c1$export$2e2bcd8739ae039 = $36a379aae25259c1$var$UnmuteAction;












// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $e14ef421d9ca0a79$var$setVolumeActionOptionsSchema = {
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
var $e14ef421d9ca0a79$var$validateSetVolumeActionOptions = (0, $ba615e619b379cb9$export$9ea1f4fe5062c6d)($e14ef421d9ca0a79$var$setVolumeActionOptionsSchema);
var $e14ef421d9ca0a79$var$defaultOptionalSetVolumeArgs = {
    mode: "absolute"
};
var $e14ef421d9ca0a79$var$SetVolumeAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(SetVolumeAction, Base1);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(SetVolumeAction);
    function SetVolumeAction(state) {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, SetVolumeAction);
        return _super.call(this, state);
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(SetVolumeAction, [
        {
            key: "execute",
            value: // eslint-disable-next-line class-methods-use-this
            function execute(arg) {
                var _this = this;
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    var ref, volume, mode;
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                ref = (0, ($parcel$interopDefault($iBAnd$swchelperslib_object_spreadjs)))({}, $e14ef421d9ca0a79$var$defaultOptionalSetVolumeArgs, arg), volume = ref.volume, mode = ref.mode;
                                _this.state.activeSlides.forEach(function(param) {
                                    var contentElement = param.contentElement;
                                    return (0, $5c6aef9cc60ab4fd$export$2e2bcd8739ae039).setVolume(contentElement, volume, mode);
                                });
                                return _ctx.abrupt("return", Promise.resolve());
                            case 3:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "unpack",
            value: function unpack(options) {
                return $e14ef421d9ca0a79$var$validateSetVolumeActionOptions(options);
            }
        }
    ]);
    return SetVolumeAction;
}((0, $ceab516818f51ad5$export$2e2bcd8739ae039));
var $e14ef421d9ca0a79$export$2e2bcd8739ae039 = $e14ef421d9ca0a79$var$SetVolumeAction;



var $aa6c68a2cb8884dd$export$a3f2a64f39c0a404 = /*#__PURE__*/ function(HTMLElement) {
    "use strict";
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_inheritsjs)))(HilbertGalleryViewerElement, HTMLElement);
    var _super = (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_superjs)))(HilbertGalleryViewerElement);
    function HilbertGalleryViewerElement() {
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, HilbertGalleryViewerElement);
        var _this;
        _this = _super.call(this);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))((0, ($parcel$interopDefault($iBAnd$swchelperslib_assert_this_initializedjs)))(_this), "viewer", void 0);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        _this.viewer = new $aa6c68a2cb8884dd$var$HilbertGalleryViewer((0, ($parcel$interopDefault($iBAnd$swchelperslib_assert_this_initializedjs)))(_this), false);
        return _this;
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(HilbertGalleryViewerElement, [
        {
            key: "execute",
            value: function execute(action, arg) {
                var _this = this;
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                return _ctx.abrupt("return", _this.viewer.execute(action, arg));
                            case 1:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return HilbertGalleryViewerElement;
}((0, ($parcel$interopDefault($iBAnd$swchelperslib_wrap_native_superjs)))(HTMLElement));
var $aa6c68a2cb8884dd$var$HilbertGalleryViewer = /*#__PURE__*/ function() {
    "use strict";
    function HilbertGalleryViewer(parent) {
        var wrap = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_class_call_checkjs)))(this, HilbertGalleryViewer);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "actionRegistry", void 0);
        (0, ($parcel$interopDefault($iBAnd$swchelperslib_define_propertyjs)))(this, "state", void 0);
        var insertWrapper = function(element) {
            var wrapper = document.createElement("div");
            return element.appendChild(wrapper);
        };
        var host = wrap ? insertWrapper(parent) : parent;
        var shadowRoot = host.attachShadow({
            mode: "open"
        });
        (0, $50f38f10471e978d$export$c2aff9e92362a9b2)(shadowRoot, (0, (/*@__PURE__*/$parcel$interopDefault($fcd220369608a622$exports))));
        var preloadArea = document.createElement("div");
        preloadArea.classList.add("preload-area");
        shadowRoot.appendChild(preloadArea);
        var container = document.createElement("div");
        container.classList.add("container");
        shadowRoot.appendChild(container);
        var transitionFactory = new (0, $7cd8947aa3ba3640$export$2e2bcd8739ae039)(shadowRoot);
        var animationFactory = new (0, $b64d2ab73d57a1a4$export$2e2bcd8739ae039)(shadowRoot);
        var activeSlides = [];
        this.state = {
            viewer: this,
            log: new (0, $58895dfb79dba5a2$export$2e2bcd8739ae039)((0, $58895dfb79dba5a2$export$243e62d78d3b544d).WARN),
            preloader: new (0, $8bbfb6fe1ceb6076$export$2e2bcd8739ae039)(preloadArea),
            shadowRoot: shadowRoot,
            container: container,
            transitionFactory: transitionFactory,
            animationFactory: animationFactory,
            activeSlides: activeSlides,
            muted: false
        };
        this.actionRegistry = HilbertGalleryViewer.createActionRegistry(this.state);
    }
    (0, ($parcel$interopDefault($iBAnd$swchelperslib_create_classjs)))(HilbertGalleryViewer, [
        {
            key: "execute",
            value: function execute(action, arg) {
                var _this = this;
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                return _ctx.abrupt("return", _this.executeImpl(action, arg));
                            case 1:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "executeImpl",
            value: function executeImpl(actionName, arg) {
                var _this = this;
                return (0, ($parcel$interopDefault($iBAnd$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).mark(function _callee() {
                    var action, executor;
                    return (0, ($parcel$interopDefault($iBAnd$regeneratorruntime))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                action = _this.actionRegistry.get(actionName);
                                if (!action) {
                                    _ctx.next = 6;
                                    break;
                                }
                                executor = action.buildExecutor(arg);
                                _ctx.next = 5;
                                return executor();
                            case 5:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 6:
                                throw new TypeError("HilbertGalleryViewer.execute(): unknown action");
                            case 7:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ], [
        {
            key: "createActionRegistry",
            value: function createActionRegistry(state) {
                var registry = new Map();
                registry.set("reload", new (0, $4fcaa8c8db08f630$export$2e2bcd8739ae039)(state));
                registry.set("preload", new (0, $4f42560bd79c319d$export$2e2bcd8739ae039)(state));
                registry.set("show", new (0, $3299c570dc483b7a$export$2e2bcd8739ae039)(state));
                registry.set("clear", new (0, $6cac68e21ab2a4a9$export$2e2bcd8739ae039)(state));
                registry.set("mute", new (0, $d26d9c297c08e1db$export$2e2bcd8739ae039)(state));
                registry.set("unmute", new (0, $36a379aae25259c1$export$2e2bcd8739ae039)(state));
                registry.set("set-volume", new (0, $e14ef421d9ca0a79$export$2e2bcd8739ae039)(state));
                return registry;
            }
        },
        {
            key: "defineCustomElement",
            value: function defineCustomElement() {
                customElements.define("hilbert-gallery-viewer", $aa6c68a2cb8884dd$export$a3f2a64f39c0a404);
            }
        }
    ]);
    return HilbertGalleryViewer;
}();
$aa6c68a2cb8884dd$var$HilbertGalleryViewer.defineCustomElement();
var $aa6c68a2cb8884dd$export$2e2bcd8739ae039 = $aa6c68a2cb8884dd$var$HilbertGalleryViewer;


var $d55053c922b025eb$export$2e2bcd8739ae039 = (0, $aa6c68a2cb8884dd$export$2e2bcd8739ae039);


//# sourceMappingURL=index.cjs.map
