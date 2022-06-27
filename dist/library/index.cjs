var $ga018$swchelpers = require("@swc/helpers");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.promise.finally.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
var $ga018$regeneratorruntime = require("regenerator-runtime");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $7efbf0fab4c9e637$exports = {};

$parcel$defineInteropFlag($7efbf0fab4c9e637$exports);

$parcel$export($7efbf0fab4c9e637$exports, "default", function () { return $7efbf0fab4c9e637$export$2e2bcd8739ae039; });
$parcel$export($7efbf0fab4c9e637$exports, "HilbertGalleryViewer", function () { return $7efbf0fab4c9e637$export$2e2bcd8739ae039; });








var $ba6bb2bc8a1ebb92$exports = {};
$ba6bb2bc8a1ebb92$exports = ":host {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n:host > .container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n:host > .container > .transition {\n  --transition-background-color: black;\n  background-color: var(--transition-background-color);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n:host > .container > .transition > .animation, :host > .container > .transition > .animation > .content {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n:host > .container > .transition > .animation > .content.fit-contain {\n  object-fit: contain;\n}\n\n:host > .container > .transition > .animation > .content.fit-cover {\n  object-fit: cover;\n}\n\n";





var $787860883559bb42$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function $787860883559bb42$export$2e2bcd8739ae039(state) {
        $ga018$swchelpers.classCallCheck(this, $787860883559bb42$export$2e2bcd8739ae039);
        this.state = state;
    }
    $ga018$swchelpers.createClass($787860883559bb42$export$2e2bcd8739ae039, [
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
    return $787860883559bb42$export$2e2bcd8739ae039;
}();


var $d51d22fac5462bdf$exports = {};

$parcel$defineInteropFlag($d51d22fac5462bdf$exports);

$parcel$export($d51d22fac5462bdf$exports, "default", function () { return $d51d22fac5462bdf$export$2e2bcd8739ae039; });
$parcel$export($d51d22fac5462bdf$exports, "Preloader", function () { return $d51d22fac5462bdf$export$2e2bcd8739ae039; });

var $d51d22fac5462bdf$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function $d51d22fac5462bdf$export$2e2bcd8739ae039() {
        $ga018$swchelpers.classCallCheck(this, $d51d22fac5462bdf$export$2e2bcd8739ae039);
        $ga018$swchelpers.defineProperty(this, "refs", new Map());
        $ga018$swchelpers.defineProperty(this, "typeRegistry", new Map());
        this.typeRegistry.set('image', this.preloadImage.bind(this));
        this.typeRegistry.set('video', this.preloadVideo.bind(this));
    }
    $ga018$swchelpers.createClass($d51d22fac5462bdf$export$2e2bcd8739ae039, [
        {
            key: "preload",
            value: function preload(mimetype, url) {
                var type = mimetype.split('/', 1)[0];
                var preloadFunc = this.typeRegistry.get(type);
                if (preloadFunc) {
                    preloadFunc(url);
                    return true;
                }
                return false;
            }
        },
        {
            key: "preloadImage",
            value: function preloadImage(url) {
                var href = new URL(url).href;
                var image = new Image();
                image.src = href;
                this.refs.set(href, image);
            }
        },
        {
            key: "preloadVideo",
            value: function preloadVideo(url) {
                var href = new URL(url).href;
                var video = document.createElement('video');
                video.preload = 'auto';
                video.src = href;
                this.refs.set(href, video);
            }
        },
        {
            key: "unref",
            value: function unref() {
                for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
                    refs[_key] = arguments[_key];
                }
                var _this = this;
                if (refs.length === 0) this.refs.clear();
                else refs.forEach(function(ref) {
                    return _this.refs.delete(ref);
                });
            }
        }
    ]);
    return $d51d22fac5462bdf$export$2e2bcd8739ae039;
}();


var $366fb1bf1ff37ee6$export$2e2bcd8739ae039 = /*#__PURE__*/ function(Base) {
    "use strict";
    $ga018$swchelpers.inherits($366fb1bf1ff37ee6$export$2e2bcd8739ae039, Base);
    var _super = $ga018$swchelpers.createSuper($366fb1bf1ff37ee6$export$2e2bcd8739ae039);
    function $366fb1bf1ff37ee6$export$2e2bcd8739ae039(state) {
        $ga018$swchelpers.classCallCheck(this, $366fb1bf1ff37ee6$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, state);
        _this.preloader = new $d51d22fac5462bdf$export$2e2bcd8739ae039();
        return _this;
    }
    $ga018$swchelpers.createClass($366fb1bf1ff37ee6$export$2e2bcd8739ae039, [
        {
            key: "execute",
            value: function execute(items) {
                var _this = this;
                return $ga018$swchelpers.asyncToGenerator(($parcel$interopDefault($ga018$regeneratorruntime)).mark(function _callee() {
                    return ($parcel$interopDefault($ga018$regeneratorruntime)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.preloader.unref();
                                items.forEach(function(param) {
                                    var mimetype = param.mimetype, url = param.url;
                                    return _this.preloader.preload(mimetype, url);
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
            value: function unpack(arg) {
                if (!Array.isArray(arg)) throw new TypeError('PreloadAction.unpack(arg): arg must be an array');
                var items = arg;
                items.forEach(function(item, index) {
                    var mimetype = item.mimetype, url = item.url;
                    if (typeof mimetype !== 'string') throw new TypeError("PreloadAction.unpack(arg): item ".concat(index, " of args must have a mimetype"));
                    if (typeof url !== 'string') throw new TypeError("PreloadAction.unpack(arg): item ".concat(index, " of arg must have an url"));
                });
                return arg;
            }
        }
    ]);
    return $366fb1bf1ff37ee6$export$2e2bcd8739ae039;
}($787860883559bb42$export$2e2bcd8739ae039);



var /* eslint-disable no-console */ $1bce38ed9229cb3e$export$243e62d78d3b544d;
(function($1bce38ed9229cb3e$export$243e62d78d3b544d) {
    $1bce38ed9229cb3e$export$243e62d78d3b544d[$1bce38ed9229cb3e$export$243e62d78d3b544d["OFF"] = 0] = "OFF";
    $1bce38ed9229cb3e$export$243e62d78d3b544d[$1bce38ed9229cb3e$export$243e62d78d3b544d["ERROR"] = 200] = "ERROR";
    $1bce38ed9229cb3e$export$243e62d78d3b544d[$1bce38ed9229cb3e$export$243e62d78d3b544d["WARN"] = 300] = "WARN";
    $1bce38ed9229cb3e$export$243e62d78d3b544d[$1bce38ed9229cb3e$export$243e62d78d3b544d["INFO"] = 400] = "INFO";
    $1bce38ed9229cb3e$export$243e62d78d3b544d[$1bce38ed9229cb3e$export$243e62d78d3b544d["DEBUG"] = 500] = "DEBUG";
    $1bce38ed9229cb3e$export$243e62d78d3b544d[$1bce38ed9229cb3e$export$243e62d78d3b544d["TRACE"] = 600] = "TRACE";
})($1bce38ed9229cb3e$export$243e62d78d3b544d || ($1bce38ed9229cb3e$export$243e62d78d3b544d = {}));
var $1bce38ed9229cb3e$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function $1bce38ed9229cb3e$export$2e2bcd8739ae039() {
        var level = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $1bce38ed9229cb3e$export$243e62d78d3b544d.INFO;
        $ga018$swchelpers.classCallCheck(this, $1bce38ed9229cb3e$export$2e2bcd8739ae039);
        this.level = level;
    }
    $ga018$swchelpers.createClass($1bce38ed9229cb3e$export$2e2bcd8739ae039, [
        {
            key: "error",
            value: function error() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $1bce38ed9229cb3e$export$243e62d78d3b544d.ERROR) (_console = console).error.apply(_console, $ga018$swchelpers.toConsumableArray(args));
            }
        },
        {
            key: "assert",
            value: function assert(assertion) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                var _console;
                if (this.level >= $1bce38ed9229cb3e$export$243e62d78d3b544d.ERROR) (_console = console).assert.apply(_console, [
                    assertion
                ].concat($ga018$swchelpers.toConsumableArray(args)));
            }
        },
        {
            key: "warn",
            value: function warn() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $1bce38ed9229cb3e$export$243e62d78d3b544d.WARN) (_console = console).warn.apply(_console, $ga018$swchelpers.toConsumableArray(args));
            }
        },
        {
            key: "info",
            value: function info() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $1bce38ed9229cb3e$export$243e62d78d3b544d.INFO) (_console = console).info.apply(_console, $ga018$swchelpers.toConsumableArray(args));
            }
        },
        {
            key: "debug",
            value: function debug() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $1bce38ed9229cb3e$export$243e62d78d3b544d.DEBUG) (_console = console).debug.apply(_console, $ga018$swchelpers.toConsumableArray(args));
            }
        },
        {
            key: "trace",
            value: function trace() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $1bce38ed9229cb3e$export$243e62d78d3b544d.TRACE) (_console = console).trace.apply(_console, $ga018$swchelpers.toConsumableArray(args));
            }
        }
    ]);
    return $1bce38ed9229cb3e$export$2e2bcd8739ae039;
}();





var $ec535cafb0e844d7$export$2e2bcd8739ae039 = /*#__PURE__*/ function(Base) {
    "use strict";
    $ga018$swchelpers.inherits($ec535cafb0e844d7$export$2e2bcd8739ae039, Base);
    var _super = $ga018$swchelpers.createSuper($ec535cafb0e844d7$export$2e2bcd8739ae039);
    function $ec535cafb0e844d7$export$2e2bcd8739ae039(state) {
        $ga018$swchelpers.classCallCheck(this, $ec535cafb0e844d7$export$2e2bcd8739ae039);
        return _super.call(this, state);
    }
    $ga018$swchelpers.createClass($ec535cafb0e844d7$export$2e2bcd8739ae039, [
        {
            key: "execute",
            value: // eslint-disable-next-line class-methods-use-this
            function execute() {
                return $ga018$swchelpers.asyncToGenerator(($parcel$interopDefault($ga018$regeneratorruntime)).mark(function _callee() {
                    return ($parcel$interopDefault($ga018$regeneratorruntime)).wrap(function _callee$(_ctx) {
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
    return $ec535cafb0e844d7$export$2e2bcd8739ae039;
}($787860883559bb42$export$2e2bcd8739ae039);







var $c8c83928e3ce30a9$export$c86220c67bdb4242 = /*#__PURE__*/ function() {
    "use strict";
    function $c8c83928e3ce30a9$export$c86220c67bdb4242() {
        $ga018$swchelpers.classCallCheck(this, $c8c83928e3ce30a9$export$c86220c67bdb4242);
    }
    $ga018$swchelpers.createClass($c8c83928e3ce30a9$export$c86220c67bdb4242, null, [
        {
            key: "create",
            value: function create(mimetype, url) {
                var objectFit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'cover';
                var type = mimetype.split('/', 1)[0];
                var content;
                switch(type){
                    case 'image':
                        content = $c8c83928e3ce30a9$export$c86220c67bdb4242.createImage(url);
                        break;
                    case 'video':
                        content = $c8c83928e3ce30a9$export$c86220c67bdb4242.createVideo(url);
                        break;
                    default:
                        content = $c8c83928e3ce30a9$export$c86220c67bdb4242.createObject(mimetype, url);
                        break;
                }
                content.classList.add('content');
                content.classList.add("fit-".concat(objectFit));
                return content;
            }
        },
        {
            key: "createObject",
            value: function createObject(mimetype, url) {
                var object = document.createElement('object');
                object.type = mimetype;
                object.data = url;
                return object;
            }
        },
        {
            key: "createImage",
            value: function createImage(url) {
                var image = document.createElement('img');
                image.src = url;
                return image;
            }
        },
        {
            key: "createVideo",
            value: function createVideo(url) {
                var video = document.createElement('video');
                video.preload = 'auto';
                video.src = url;
                video.autoplay = false;
                return video;
            }
        },
        {
            key: "awaitLoad",
            value: function awaitLoad(content) {
                return $ga018$swchelpers.asyncToGenerator(($parcel$interopDefault($ga018$regeneratorruntime)).mark(function _callee() {
                    return ($parcel$interopDefault($ga018$regeneratorruntime)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                return _ctx.abrupt("return", new Promise(function(resolve) {
                                    if (content.tagName === 'IMG') {
                                        var image = content;
                                        if (image.complete) resolve(content);
                                        else {
                                            var handler = function() {
                                                image.removeEventListener('load', handler);
                                                image.removeEventListener('error', handler);
                                                requestAnimationFrame(function() {
                                                    return resolve(content);
                                                });
                                            };
                                            image.addEventListener('load', handler);
                                            image.addEventListener('error', handler);
                                        }
                                    } else // consider the transition-ol done after a grace period of 1s
                                    setTimeout(function() {
                                        return resolve(content);
                                    }, 1000);
                                }));
                            case 1:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "play",
            value: function play(content) {
                if (content.tagName === 'VIDEO') {
                    var video = content;
                    video.play().finally(function() {});
                }
            }
        }
    ]);
    return $c8c83928e3ce30a9$export$c86220c67bdb4242;
}();






var $a0d25be4ae6942ff$export$af22135957e110d7 = /*#__PURE__*/ function() {
    "use strict";
    function $a0d25be4ae6942ff$export$af22135957e110d7() {
        $ga018$swchelpers.classCallCheck(this, $a0d25be4ae6942ff$export$af22135957e110d7);
        // dummy initialization required to satisfy TS2564 (definite assignment)
        var tmpResolve = function(result) {};
        var tmpReject = function() {};
        this._promise = new Promise(function(resolve, reject) {
            tmpResolve = resolve;
            tmpReject = reject;
        });
        this._resolve = tmpResolve;
        this._reject = tmpReject;
    }
    $ga018$swchelpers.createClass($a0d25be4ae6942ff$export$af22135957e110d7, [
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
    return $a0d25be4ae6942ff$export$af22135957e110d7;
}();


var $624887d846327322$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function $624887d846327322$export$2e2bcd8739ae039(container, from, to) {
        $ga018$swchelpers.classCallCheck(this, $624887d846327322$export$2e2bcd8739ae039);
        $ga018$swchelpers.defineProperty(this, "_isCancelled", false);
        $ga018$swchelpers.defineProperty(this, "_isDone", false);
        this.container = container;
        this.from = from;
        this.to = to;
        this.targetVisiblePEC = new $a0d25be4ae6942ff$export$af22135957e110d7();
        this.donePEC = new $a0d25be4ae6942ff$export$af22135957e110d7();
        // prevent uncaught exceptions in promise
        this.targetVisiblePEC.promise().catch(function() {});
        this.donePEC.promise().catch(function() {});
    }
    $ga018$swchelpers.createClass($624887d846327322$export$2e2bcd8739ae039, [
        {
            key: "isCancelled",
            value: function isCancelled() {
                return this._isCancelled;
            }
        },
        {
            key: "targetVisible",
            value: function targetVisible() {
                return this.targetVisiblePEC.promise();
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
    return $624887d846327322$export$2e2bcd8739ae039;
}();


var $97722aeaed860b5d$export$2e2bcd8739ae039 = /*#__PURE__*/ function(BaseTransition) {
    "use strict";
    $ga018$swchelpers.inherits($97722aeaed860b5d$export$2e2bcd8739ae039, BaseTransition);
    var _super = $ga018$swchelpers.createSuper($97722aeaed860b5d$export$2e2bcd8739ae039);
    function $97722aeaed860b5d$export$2e2bcd8739ae039() {
        var container = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.createElement('div'), from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.createElement('div'), to = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document.createElement('div');
        $ga018$swchelpers.classCallCheck(this, $97722aeaed860b5d$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, container, from, to);
        _this._isCancelled = false;
        _this._isDone = true;
        return _this;
    }
    $ga018$swchelpers.createClass($97722aeaed860b5d$export$2e2bcd8739ae039, [
        {
            // eslint-disable-next-line class-methods-use-this
            key: "cancel",
            value: function cancel() {}
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "targetVisible",
            value: function targetVisible() {
                return Promise.resolve();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "done",
            value: function done() {
                return Promise.resolve();
            }
        }
    ], [
        {
            key: "unpack",
            value: function unpack() {}
        },
        {
            key: "prepare",
            value: function prepare() {
                return function(container, from, to) {
                    return new $97722aeaed860b5d$export$2e2bcd8739ae039(container, from, to);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return '';
            }
        }
    ]);
    return $97722aeaed860b5d$export$2e2bcd8739ae039;
}($624887d846327322$export$2e2bcd8739ae039);



var $a51aa9cebaef8f99$exports = {};
$a51aa9cebaef8f99$exports = "@-webkit-keyframes transition-fade-out {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes transition-fade-out {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes transition-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.container {\n  --transition-fade-color: black;\n  --transition-fade-duration: 1s;\n  --transition-fade-duration-half: calc(var(--transition-fade-duration) / 2);\n  background-color: var(--transition-fade-color);\n}\n\n.container > .transition.fade {\n  -webkit-animation-duration: var(--transition-fade-duration-half);\n  animation-duration: var(--transition-fade-duration-half);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.container > .transition.fade.fade-out {\n  -webkit-animation-name: transition-fade-out;\n  animation-name: transition-fade-out;\n}\n\n.container > .transition.fade.fade-in {\n  -webkit-animation-name: transition-fade-in;\n  animation-name: transition-fade-in;\n  -webkit-animation-delay: var(--transition-fade-duration-half);\n  animation-delay: var(--transition-fade-duration-half);\n}\n\n";



var $bc992af27a3703d7$var$defaultOptions = {
    duration: 500,
    color: '#000'
};
var $bc992af27a3703d7$export$2e2bcd8739ae039 = /*#__PURE__*/ function(BaseTransition) {
    "use strict";
    $ga018$swchelpers.inherits($bc992af27a3703d7$export$2e2bcd8739ae039, BaseTransition);
    var _super = $ga018$swchelpers.createSuper($bc992af27a3703d7$export$2e2bcd8739ae039);
    function $bc992af27a3703d7$export$2e2bcd8739ae039(container, from, to, options) {
        $ga018$swchelpers.classCallCheck(this, $bc992af27a3703d7$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, container, from, to);
        var ref = $ga018$swchelpers.objectSpread({}, $bc992af27a3703d7$var$defaultOptions, options !== null && options !== void 0 ? options : {}), duration = ref.duration, color = ref.color;
        var style = container.style;
        style.setProperty('--transition-fade-duration', "".concat(duration, "s"));
        style.setProperty('--transition-fade-color', "".concat(color));
        from.classList.add('fade');
        from.classList.add('fade-out');
        _this.fromEndCancelHandler = function(param) {
            var animationName = param.animationName;
            if (animationName === 'transition-fade-out') _this.targetVisiblePEC.resolve();
        };
        from.addEventListener('animationend', _this.fromEndCancelHandler);
        from.addEventListener('animationcancel', _this.fromEndCancelHandler);
        to.classList.add('fade');
        to.classList.add('fade-in');
        _this.toEndHandler = function(param) {
            var animationName = param.animationName;
            if (animationName === 'transition-fade-in') _this.end();
        };
        _this.toCancelHandler = function(param) {
            var animationName = param.animationName;
            if (animationName === 'transition-fade-in') _this.cancel();
        };
        to.addEventListener('animationend', _this.toEndHandler);
        to.addEventListener('animationcancel', _this.toCancelHandler);
        return _this;
    }
    $ga018$swchelpers.createClass($bc992af27a3703d7$export$2e2bcd8739ae039, [
        {
            key: "end",
            value: function end() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup();
                    this._isDone = true;
                    this.targetVisiblePEC.resolve();
                    this.donePEC.resolve();
                }
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup();
                    this._isCancelled = true;
                    this.targetVisiblePEC.resolve();
                    this.donePEC.reject();
                }
            }
        },
        {
            key: "cleanup",
            value: function cleanup() {
                this.from.removeEventListener('animationend', this.fromEndCancelHandler);
                this.from.removeEventListener('animationcancel', this.fromEndCancelHandler);
                this.to.removeEventListener('animationend', this.toEndHandler);
                this.to.removeEventListener('animationcancel', this.toCancelHandler);
                var style = this.container.style;
                style.removeProperty('--transition-fade-duration');
                style.removeProperty('--transition-fade-color');
                this.from.classList.remove('fade');
                this.from.classList.remove('fade-out');
                this.to.classList.remove('fade');
                this.to.classList.remove('fade-in');
            }
        }
    ], [
        {
            key: "unpack",
            value: function unpack(options) {
                return options;
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $bc992af27a3703d7$export$2e2bcd8739ae039.unpack(options);
                return function(container, from, to) {
                    return new $bc992af27a3703d7$export$2e2bcd8739ae039(container, from, to, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return (/*@__PURE__*/$parcel$interopDefault($a51aa9cebaef8f99$exports));
            }
        }
    ]);
    return $bc992af27a3703d7$export$2e2bcd8739ae039;
}($624887d846327322$export$2e2bcd8739ae039);



var $0142de6a73e19488$exports = {};
$0142de6a73e19488$exports = "@-webkit-keyframes transition-cross-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-cross-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.container {\n  --transition-cross-fade-duration: 1s;\n}\n\n.container > .transition.cross-fade.cross-fade-in {\n  -webkit-animation-duration: var(--transition-cross-fade-duration);\n  animation-duration: var(--transition-cross-fade-duration);\n  -webkit-animation-name: transition-cross-fade-in;\n  animation-name: transition-cross-fade-in;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";



var $8b832436a30d5f11$var$defaultOptions = {
    duration: 500
};
var $8b832436a30d5f11$export$2e2bcd8739ae039 = /*#__PURE__*/ function(BaseTransition) {
    "use strict";
    $ga018$swchelpers.inherits($8b832436a30d5f11$export$2e2bcd8739ae039, BaseTransition);
    var _super = $ga018$swchelpers.createSuper($8b832436a30d5f11$export$2e2bcd8739ae039);
    function $8b832436a30d5f11$export$2e2bcd8739ae039(container, from, to, options) {
        $ga018$swchelpers.classCallCheck(this, $8b832436a30d5f11$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, container, from, to);
        var duration = $ga018$swchelpers.objectSpread({}, $8b832436a30d5f11$var$defaultOptions, options !== null && options !== void 0 ? options : {}).duration;
        var style = container.style;
        style.setProperty('--transition-cross-fade-duration', "".concat(duration, "s"));
        from.classList.add('cross-fade');
        from.classList.add('cross-fade-out');
        to.classList.add('cross-fade');
        to.classList.add('cross-fade-in');
        _this.toEndHandler = function(param) {
            var animationName = param.animationName;
            if (animationName === 'transition-cross-fade-in') _this.end();
        };
        _this.toCancelHandler = function(param) {
            var animationName = param.animationName;
            if (animationName === 'transition-cross-fade-in') _this.cancel();
        };
        to.addEventListener('animationend', _this.toEndHandler);
        to.addEventListener('animationcancel', _this.toCancelHandler);
        _this.targetVisiblePEC.resolve();
        return _this;
    }
    $ga018$swchelpers.createClass($8b832436a30d5f11$export$2e2bcd8739ae039, [
        {
            key: "end",
            value: function end() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup();
                    this._isDone = true;
                    this.donePEC.resolve();
                }
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup();
                    this._isCancelled = true;
                    this.donePEC.reject();
                }
            }
        },
        {
            key: "cleanup",
            value: function cleanup() {
                this.to.removeEventListener('animationend', this.toEndHandler);
                this.to.removeEventListener('animationcancel', this.toCancelHandler);
                var style = this.container.style;
                style.removeProperty('--transition-cross-fade-duration');
                this.from.classList.remove('cross-fade');
                this.from.classList.remove('cross-fade-out');
                this.to.classList.remove('cross-fade');
                this.to.classList.remove('cross-fade-in');
            }
        }
    ], [
        {
            key: "unpack",
            value: function unpack(options) {
                return options;
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $8b832436a30d5f11$export$2e2bcd8739ae039.unpack(options);
                return function(container, from, to) {
                    return new $8b832436a30d5f11$export$2e2bcd8739ae039(container, from, to, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return (/*@__PURE__*/$parcel$interopDefault($0142de6a73e19488$exports));
            }
        }
    ]);
    return $8b832436a30d5f11$export$2e2bcd8739ae039;
}($624887d846327322$export$2e2bcd8739ae039);


/* eslint-disable import/prefer-default-export */ function $bd9cb93d2cd1425e$export$c2aff9e92362a9b2(root, stylesheetText, id) {
    var style = document.createElement('style');
    if (typeof id !== 'undefined') style.id = id;
    style.textContent = stylesheetText;
    var selector = "style[type='text/css']:last-of-type, style:not([type]):last-of-type";
    var lastStyleElem = root.querySelector(selector);
    if (lastStyleElem === null) root.prepend(style);
    else lastStyleElem.after(style);
}


var $a7eb2f479cc677f1$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function $a7eb2f479cc677f1$export$2e2bcd8739ae039(root) {
        $ga018$swchelpers.classCallCheck(this, $a7eb2f479cc677f1$export$2e2bcd8739ae039);
        $ga018$swchelpers.defineProperty(this, "transitionRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
    $ga018$swchelpers.createClass($a7eb2f479cc677f1$export$2e2bcd8739ae039, [
        {
            key: "registerKnownTransitions",
            value: function registerKnownTransitions() {
                this.register('none', $97722aeaed860b5d$export$2e2bcd8739ae039);
                this.register('fade', $bc992af27a3703d7$export$2e2bcd8739ae039);
                this.register('cross-fade', $8b832436a30d5f11$export$2e2bcd8739ae039);
            }
        },
        {
            key: "register",
            value: function register(id, transitionClass) {
                if (this.transitionRegistry.has(id)) throw new Error('Transition type already registered');
                $bd9cb93d2cd1425e$export$c2aff9e92362a9b2(this.root, transitionClass.getStyleSheetAsString(), "transition-".concat(id));
                this.transitionRegistry.set(id, transitionClass);
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'none', options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var TransitionClass = this.transitionRegistry.get(type);
                if (!TransitionClass) throw new Error("Unknown transition type: ".concat(type));
                // unpacks the options and throws an exception if they are invalid,
                // but does create the actual transition yet
                return TransitionClass.prepare(options);
            }
        }
    ]);
    return $a7eb2f479cc677f1$export$2e2bcd8739ae039;
}();








var $785ac20f68e37c91$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function $785ac20f68e37c91$export$2e2bcd8739ae039(wrapper, content) {
        $ga018$swchelpers.classCallCheck(this, $785ac20f68e37c91$export$2e2bcd8739ae039);
        $ga018$swchelpers.defineProperty(this, "_isCancelled", false);
        $ga018$swchelpers.defineProperty(this, "_isDone", false);
        this.wrapper = wrapper;
        this.content = content;
        this.donePEC = new $a0d25be4ae6942ff$export$af22135957e110d7();
        // prevent uncaught exceptions in promise
        this.donePEC.promise().catch(function() {});
    }
    $ga018$swchelpers.createClass($785ac20f68e37c91$export$2e2bcd8739ae039, [
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
    return $785ac20f68e37c91$export$2e2bcd8739ae039;
}();


// @staticImplements<AnimationStatic<NoneAnimation, void>>()
var $0be000c534970170$export$a27a75f1864d99f4 = /*#__PURE__*/ function(BaseAnimation) {
    "use strict";
    $ga018$swchelpers.inherits($0be000c534970170$export$a27a75f1864d99f4, BaseAnimation);
    var _super = $ga018$swchelpers.createSuper($0be000c534970170$export$a27a75f1864d99f4);
    function $0be000c534970170$export$a27a75f1864d99f4() {
        var wrapper = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.createElement('div'), content = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.createElement('div');
        $ga018$swchelpers.classCallCheck(this, $0be000c534970170$export$a27a75f1864d99f4);
        var _this;
        _this = _super.call(this, wrapper, content);
        _this._isCancelled = false;
        _this._isDone = true;
        return _this;
    }
    $ga018$swchelpers.createClass($0be000c534970170$export$a27a75f1864d99f4, [
        {
            // eslint-disable-next-line class-methods-use-this
            key: "cancel",
            value: function cancel() {}
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "targetVisible",
            value: function targetVisible() {
                return Promise.resolve();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "done",
            value: function done() {
                return Promise.resolve();
            }
        }
    ], [
        {
            key: "unpack",
            value: function unpack() {}
        },
        {
            key: "prepare",
            value: function prepare() {
                return function(wrapper, content) {
                    return new $0be000c534970170$export$a27a75f1864d99f4(wrapper, content);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return '';
            }
        }
    ]);
    return $0be000c534970170$export$a27a75f1864d99f4;
}($785ac20f68e37c91$export$2e2bcd8739ae039);




var $a3e96b3e59d75e7b$exports = {};
$a3e96b3e59d75e7b$exports = "@-webkit-keyframes animation-pan-zoom-animation {\n  0% {\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    top: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n    left: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n  }\n}\n\n@keyframes animation-pan-zoom-animation {\n  0% {\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    top: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n    left: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n  }\n}\n\n@-webkit-keyframes animation-pan-zoom-content {\n  0% {\n    width: 100%;\n    height: 100%;\n    object-position: 50% 50%;\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    left: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-x) ) );\n    top: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-y) ) );\n    width: calc(100% * var(--animation-pan-zoom-target-scale) );\n    height: calc(100% * var(--animation-pan-zoom-target-scale) );\n    object-position: calc(100% * var(--animation-pan-zoom-target-x) ) calc(100% * var(--animation-pan-zoom-target-y) );\n  }\n}\n\n@keyframes animation-pan-zoom-content {\n  0% {\n    width: 100%;\n    height: 100%;\n    object-position: 50% 50%;\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    left: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-x) ) );\n    top: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-y) ) );\n    width: calc(100% * var(--animation-pan-zoom-target-scale) );\n    height: calc(100% * var(--animation-pan-zoom-target-scale) );\n    object-position: calc(100% * var(--animation-pan-zoom-target-x) ) calc(100% * var(--animation-pan-zoom-target-y) );\n  }\n}\n\n.container > .transition > .animation.animation-pan-zoom {\n  --animation-pan-zoom-duration: 0s;\n  --animation-pan-zoom-target-x: .5;\n  --animation-pan-zoom-target-y: .5;\n  --animation-pan-zoom-target-scale: 1;\n  -webkit-animation-name: animation-pan-zoom-animation;\n  animation-name: animation-pan-zoom-animation;\n}\n\n.container > .transition > .animation.animation-pan-zoom, .container > .transition > .animation.animation-pan-zoom > * {\n  -webkit-animation-duration: var(--animation-pan-zoom-duration);\n  animation-duration: var(--animation-pan-zoom-duration);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.container > .transition > .animation.animation-pan-zoom > * {\n  -webkit-animation-name: animation-pan-zoom-content;\n  animation-name: animation-pan-zoom-content;\n  position: relative;\n}\n\n.sdfdsf-resizable > div {\n  --zoom-factor: 1;\n  --pan-target-x: .5;\n  --pan-target-y: .5;\n  --transition-duration: 10s;\n  width: 100%;\n  height: 100%;\n  top: calc(50% - 50% * var(--zoom-factor) );\n  left: calc(50% - 50% * var(--zoom-factor) );\n  z-index: -1;\n  transition-property: top, left, width, height;\n  position: relative;\n}\n\n.sdfdsf-resizable > div, .sdfdsf-resizable > div * {\n  transition-duration: var(--transition-duration);\n}\n\n.sdfdsf-resizable > div img {\n  left: calc(100% * var(--zoom-factor) * (.5 - var(--pan-target-x) ) );\n  top: calc(100% * var(--zoom-factor) * (.5 - var(--pan-target-y) ) );\n  width: calc(100% * var(--zoom-factor) );\n  height: calc(100% * var(--zoom-factor) );\n  object-fit: cover;\n  object-position: calc(100% * var(--pan-target-x) ) calc(100% * var(--pan-target-y) );\n  transition-property: top, left, width, height, object-position;\n  position: relative;\n}\n\n";



function $41b595eb0551f3bc$var$setCSSPropertyIfDefined(elem, property, formatter, value) {
    if (typeof value !== 'undefined') elem.style.setProperty(property, formatter(value));
}
var $41b595eb0551f3bc$export$2e2bcd8739ae039 = /*#__PURE__*/ function(BaseAnimation) {
    "use strict";
    $ga018$swchelpers.inherits($41b595eb0551f3bc$export$2e2bcd8739ae039, BaseAnimation);
    var _super = $ga018$swchelpers.createSuper($41b595eb0551f3bc$export$2e2bcd8739ae039);
    function $41b595eb0551f3bc$export$2e2bcd8739ae039(wrapper, content, options) {
        $ga018$swchelpers.classCallCheck(this, $41b595eb0551f3bc$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, wrapper, content);
        _this.endHandler = function() {};
        _this.cancelHandler = function() {};
        _this.asyncInit(options).finally(function() {});
        return _this;
    }
    $ga018$swchelpers.createClass($41b595eb0551f3bc$export$2e2bcd8739ae039, [
        {
            key: "asyncInit",
            value: function asyncInit(options) {
                var _this = this;
                return $ga018$swchelpers.asyncToGenerator(($parcel$interopDefault($ga018$regeneratorruntime)).mark(function _callee() {
                    var from, duration, to;
                    return ($parcel$interopDefault($ga018$regeneratorruntime)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.wrapper.classList.add('animation-pan-zoom');
                                if (!(typeof options.from !== 'undefined')) {
                                    _ctx.next = 11;
                                    break;
                                }
                                _ctx.prev = 2;
                                from = options.from;
                                _this.setDefinedCssProperties(0, from);
                                _ctx.next = 7;
                                return new Promise(function(resolve) {
                                    requestAnimationFrame(resolve);
                                });
                            case 7:
                                _ctx.next = 11;
                                break;
                            case 9:
                                _ctx.prev = 9;
                                _ctx.t0 = _ctx["catch"](2);
                            case 11:
                                if (!_this.isCancelled()) {
                                    duration = options.duration, to = options.to;
                                    _this.setDefinedCssProperties(duration, to);
                                    _this.endHandler = function(param) {
                                        var animationName = param.animationName;
                                        if (animationName === 'animation-pan-zoom-animation') _this.end();
                                    };
                                    _this.cancelHandler = function(param) {
                                        var animationName = param.animationName;
                                        if (animationName === 'animation-pan-zoom-animation') _this.cancel();
                                    };
                                    _this.wrapper.addEventListener('animationend', _this.endHandler);
                                    _this.wrapper.addEventListener('animationcancel', _this.cancelHandler);
                                }
                            case 12:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            2,
                            9
                        ]
                    ]);
                }))();
            }
        },
        {
            key: "setDefinedCssProperties",
            value: function setDefinedCssProperties(duration, param) {
                var x = param.x, y = param.y, scale = param.scale;
                var ref = this, w = ref.wrapper;
                var s = $41b595eb0551f3bc$var$setCSSPropertyIfDefined;
                s(w, '--animation-pan-zoom-duration', function(v) {
                    return "".concat(v, "s");
                }, duration);
                s(w, '--animation-pan-zoom-target-x', function(v) {
                    return "".concat(v);
                }, x);
                s(w, '--animation-pan-zoom-target-y', function(v) {
                    return "".concat(v);
                }, y);
                s(w, '--animation-pan-zoom-target-scale', function(v) {
                    return "".concat(v);
                }, scale);
            }
        },
        {
            key: "end",
            value: function end() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup();
                    this._isDone = true;
                    this.donePEC.resolve();
                }
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup();
                    this._isCancelled = true;
                    this.donePEC.reject();
                }
            }
        },
        {
            key: "cleanup",
            value: function cleanup() {
                var wrapper = this.wrapper;
                wrapper.addEventListener('animationend', this.endHandler);
                wrapper.addEventListener('animationcancel', this.cancelHandler);
            /**
     * We do not remove the CSS classes and custom properties to keep the
     * forwards fill-mode of the animation (target state).
     */ }
        }
    ], [
        {
            key: "unpack",
            value: function unpack(options) {
                return options;
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $41b595eb0551f3bc$export$2e2bcd8739ae039.unpack(options);
                return function(wrapper, content) {
                    return new $41b595eb0551f3bc$export$2e2bcd8739ae039(wrapper, content, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return (/*@__PURE__*/$parcel$interopDefault($a3e96b3e59d75e7b$exports));
            }
        }
    ]);
    return $41b595eb0551f3bc$export$2e2bcd8739ae039;
}($785ac20f68e37c91$export$2e2bcd8739ae039);


var $e483ec61dc89fc6c$export$c11ebe2b2060f51f = /*#__PURE__*/ function() {
    "use strict";
    function $e483ec61dc89fc6c$export$c11ebe2b2060f51f(root) {
        $ga018$swchelpers.classCallCheck(this, $e483ec61dc89fc6c$export$c11ebe2b2060f51f);
        $ga018$swchelpers.defineProperty(this, "animationRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
    $ga018$swchelpers.createClass($e483ec61dc89fc6c$export$c11ebe2b2060f51f, [
        {
            key: "registerKnownTransitions",
            value: function registerKnownTransitions() {
                this.register('none', $0be000c534970170$export$a27a75f1864d99f4);
                this.register('pan-zoom', $41b595eb0551f3bc$export$2e2bcd8739ae039);
            }
        },
        {
            key: "register",
            value: function register(id, AnimationClass) {
                if (this.animationRegistry.has(id)) throw new Error('Animation type already registered');
                $bd9cb93d2cd1425e$export$c2aff9e92362a9b2(this.root, AnimationClass.getStyleSheetAsString(), "animation-".concat(id));
                this.animationRegistry.set(id, AnimationClass);
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'none', options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var AnimationClass = this.animationRegistry.get(type);
                if (!AnimationClass) throw new Error("Unknown animation type: ".concat(type));
                // unpacks the options and throws an exception if they are invalid,
                // but does create the actual transition yet
                return AnimationClass.prepare(options);
            }
        }
    ]);
    return $e483ec61dc89fc6c$export$c11ebe2b2060f51f;
}();



var $62378a44e8da0cb0$export$2e2bcd8739ae039 = /*#__PURE__*/ function(Base) {
    "use strict";
    $ga018$swchelpers.inherits($62378a44e8da0cb0$export$2e2bcd8739ae039, Base);
    var _super = $ga018$swchelpers.createSuper($62378a44e8da0cb0$export$2e2bcd8739ae039);
    function $62378a44e8da0cb0$export$2e2bcd8739ae039(state) {
        $ga018$swchelpers.classCallCheck(this, $62378a44e8da0cb0$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, state);
        _this.transitionFactory = new $a7eb2f479cc677f1$export$2e2bcd8739ae039(state.shadowRoot);
        _this.animationFactory = new $e483ec61dc89fc6c$export$c11ebe2b2060f51f(state.shadowRoot);
        _this.transition = new $97722aeaed860b5d$export$2e2bcd8739ae039();
        _this.animation = new $0be000c534970170$export$a27a75f1864d99f4();
        var dummy = document.createElement('div');
        _this.current = _this.appendCurrentContent(dummy, 'black');
        return _this;
    }
    $ga018$swchelpers.createClass($62378a44e8da0cb0$export$2e2bcd8739ae039, [
        {
            key: "removePrevious",
            value: function removePrevious() {
                // keep only current content
                var container = this.state.container;
                while(container.children.length > 1)container.children[0].remove();
            }
        },
        {
            key: "cleanup",
            value: function cleanup() {
                this.transition.cancel();
                this.animation.cancel();
                this.removePrevious();
            }
        },
        {
            key: "appendCurrentContent",
            value: function appendCurrentContent(content, color) {
                var animation = document.createElement('div');
                animation.classList.add('animation');
                animation.appendChild(content);
                var transition = document.createElement('div');
                transition.classList.add('transition');
                transition.style.setProperty('--transition-background-color', color);
                transition.appendChild(animation);
                var container = this.state.container;
                container.appendChild(transition);
                return {
                    transition: transition,
                    animation: animation,
                    content: content
                };
            }
        },
        {
            key: "execute",
            value: function execute(arg) {
                var _this = this;
                return $ga018$swchelpers.asyncToGenerator(($parcel$interopDefault($ga018$regeneratorruntime)).mark(function _callee() {
                    var mimetype, url, fit, color, transitionCreator, animationCreator, content, previous, msg;
                    return ($parcel$interopDefault($ga018$regeneratorruntime)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                mimetype = arg.mimetype, url = arg.url, fit = arg.fit, color = arg.color;
                                transitionCreator = _this.prepareTransition(arg);
                                animationCreator = _this.prepareAnimation(arg);
                                content = $c8c83928e3ce30a9$export$c86220c67bdb4242.create(mimetype, url, fit);
                                _ctx.prev = 4;
                                _ctx.next = 7;
                                return $c8c83928e3ce30a9$export$c86220c67bdb4242.awaitLoad(content);
                            case 7:
                                _ctx.next = 12;
                                break;
                            case 9:
                                _ctx.prev = 9;
                                _ctx.t0 = _ctx["catch"](4);
                                _this.state.log.warn('Waiting for content to load failed. Proceeding anyway.');
                            case 12:
                                _this.cleanup();
                                previous = _this.current;
                                _this.current = _this.appendCurrentContent(content, color !== null && color !== void 0 ? color : 'black');
                                _this.transition = _this.createTransition(transitionCreator, previous);
                                _ctx.prev = 16;
                                _ctx.next = 19;
                                return _this.transition.targetVisible();
                            case 19:
                                _ctx.next = 24;
                                break;
                            case 21:
                                _ctx.prev = 21;
                                _ctx.t1 = _ctx["catch"](16);
                                _this.state.log.warn('Waiting for target to become visible failed. Proceeding anyway.');
                            case 24:
                                $c8c83928e3ce30a9$export$c86220c67bdb4242.play(content);
                                _this.animation = _this.createAnimation(animationCreator);
                                _ctx.prev = 26;
                                _ctx.next = 29;
                                return _this.transition.done();
                            case 29:
                                _ctx.next = 35;
                                break;
                            case 31:
                                _ctx.prev = 31;
                                _ctx.t2 = _ctx["catch"](26);
                                msg = 'Waiting for transition to end failed. Proceeding anyway';
                                if (_ctx.t2) _this.state.log.warn(msg, _ctx.t2);
                                else _this.state.log.warn(msg);
                            case 35:
                                _this.removePrevious();
                            case 36:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            4,
                            9
                        ],
                        [
                            16,
                            21
                        ],
                        [
                            26,
                            31
                        ]
                    ]);
                }))();
            }
        },
        {
            key: "prepareTransition",
            value: function prepareTransition(arg) {
                var transition = arg.transition;
                var ref = transition !== null && transition !== void 0 ? transition : {
                    type: 'none',
                    options: {}
                }, type = ref.type, options = ref.options;
                return this.transitionFactory.prepare(type, options);
            }
        },
        {
            key: "prepareAnimation",
            value: function prepareAnimation(arg) {
                var animation = arg.animation;
                var ref = animation !== null && animation !== void 0 ? animation : {
                    type: 'none',
                    options: {}
                }, type = ref.type, options = ref.options;
                return this.animationFactory.prepare(type, options);
            }
        },
        {
            key: "createTransition",
            value: function createTransition(creator, previous) {
                var container = this.state.container;
                var from = previous.transition;
                var to = this.current.transition;
                return creator(container, from, to);
            }
        },
        {
            key: "createAnimation",
            value: function createAnimation(creator) {
                var _current = this.current, wrapper = _current.animation, content = _current.content;
                return creator(wrapper, content);
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "unpack",
            value: function unpack(arg) {
                if (typeof arg !== 'object') throw new TypeError('ShowAction.unpack(arg): arg must be an object');
                // TODO: further type checking
                return arg;
            }
        }
    ]);
    return $62378a44e8da0cb0$export$2e2bcd8739ae039;
}($787860883559bb42$export$2e2bcd8739ae039);



var $7efbf0fab4c9e637$export$2e2bcd8739ae039 = /*#__PURE__*/ function(HTMLElement) {
    "use strict";
    $ga018$swchelpers.inherits($7efbf0fab4c9e637$export$2e2bcd8739ae039, HTMLElement);
    var _super = $ga018$swchelpers.createSuper($7efbf0fab4c9e637$export$2e2bcd8739ae039);
    function $7efbf0fab4c9e637$export$2e2bcd8739ae039() {
        $ga018$swchelpers.classCallCheck(this, $7efbf0fab4c9e637$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this);
        var shadowRoot = _this.attachShadow({
            mode: 'open'
        });
        $bd9cb93d2cd1425e$export$c2aff9e92362a9b2(shadowRoot, (/*@__PURE__*/$parcel$interopDefault($ba6bb2bc8a1ebb92$exports)));
        var container = document.createElement('div');
        container.classList.add('container');
        shadowRoot.appendChild(container);
        _this.state = {
            log: new $1bce38ed9229cb3e$export$2e2bcd8739ae039($1bce38ed9229cb3e$export$243e62d78d3b544d.WARN),
            shadowRoot: shadowRoot,
            container: container
        };
        _this.actionRegistry = _this.createActionRegistry();
        return _this;
    }
    $ga018$swchelpers.createClass($7efbf0fab4c9e637$export$2e2bcd8739ae039, [
        {
            key: "createActionRegistry",
            value: function createActionRegistry() {
                var registry = new Map();
                registry.set('reload', new $ec535cafb0e844d7$export$2e2bcd8739ae039(this.state));
                registry.set('preload', new $366fb1bf1ff37ee6$export$2e2bcd8739ae039(this.state));
                registry.set('show', new $62378a44e8da0cb0$export$2e2bcd8739ae039(this.state));
                return registry;
            }
        },
        {
            key: "execute",
            value: function execute(action, arg) {
                var _this = this;
                return $ga018$swchelpers.asyncToGenerator(($parcel$interopDefault($ga018$regeneratorruntime)).mark(function _callee() {
                    return ($parcel$interopDefault($ga018$regeneratorruntime)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return _this.executeImpl(action, arg);
                            case 2:
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
                return $ga018$swchelpers.asyncToGenerator(($parcel$interopDefault($ga018$regeneratorruntime)).mark(function _callee() {
                    var action, executor;
                    return ($parcel$interopDefault($ga018$regeneratorruntime)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                action = _this.actionRegistry.get(actionName);
                                if (!action) {
                                    _ctx.next = 7;
                                    break;
                                }
                                executor = action.buildExecutor(arg);
                                _ctx.next = 5;
                                return executor();
                            case 5:
                                _ctx.next = 8;
                                break;
                            case 7:
                                throw new TypeError('HilbertGalleryViewer.execute(): unknown action');
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return $7efbf0fab4c9e637$export$2e2bcd8739ae039;
}($ga018$swchelpers.wrapNativeSuper(HTMLElement));
customElements.define('hilbert-gallery-viewer', $7efbf0fab4c9e637$export$2e2bcd8739ae039);



$parcel$exportWildcard(module.exports, $7efbf0fab4c9e637$exports);
$parcel$exportWildcard(module.exports, $d51d22fac5462bdf$exports);


//# sourceMappingURL=index.cjs.map
