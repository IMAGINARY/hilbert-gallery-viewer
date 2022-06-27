function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
'use strict';
var $c44592570acf55b1$exports = {};
var $a106ca5992db6d14$exports = {};
var $a106ca5992db6d14$var$check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
$a106ca5992db6d14$exports = // eslint-disable-next-line es-x/no-global-this -- safe
$a106ca5992db6d14$var$check(typeof globalThis == 'object' && globalThis) || $a106ca5992db6d14$var$check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
$a106ca5992db6d14$var$check(typeof self == 'object' && self) || $a106ca5992db6d14$var$check(typeof $parcel$global == 'object' && $parcel$global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function('return this')();


// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var $34eca15df50eb894$export$2d1720544b23b823;
var $34388eb61f7df5e9$exports = {};
var $4df01144fcc1dba0$exports = {};
$4df01144fcc1dba0$exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};


// Detect IE8's incomplete defineProperty implementation
$34388eb61f7df5e9$exports = !$4df01144fcc1dba0$exports(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});


var $34a17b8b59341b81$exports = {};
var $85d3e254826bded5$exports = {};

$85d3e254826bded5$exports = !$4df01144fcc1dba0$exports(function() {
    // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
});


var $34a17b8b59341b81$var$call = Function.prototype.call;
$34a17b8b59341b81$exports = $85d3e254826bded5$exports ? $34a17b8b59341b81$var$call.bind($34a17b8b59341b81$var$call) : function() {
    return $34a17b8b59341b81$var$call.apply($34a17b8b59341b81$var$call, arguments);
};


// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var $7f3774d879fab3e5$export$2d1720544b23b823;
'use strict';
var $7f3774d879fab3e5$var$$propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $7f3774d879fab3e5$var$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var $7f3774d879fab3e5$var$NASHORN_BUG = $7f3774d879fab3e5$var$getOwnPropertyDescriptor && !$7f3774d879fab3e5$var$$propertyIsEnumerable.call({
    1: 2
}, 1);
$7f3774d879fab3e5$export$2d1720544b23b823 = $7f3774d879fab3e5$var$NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = $7f3774d879fab3e5$var$getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $7f3774d879fab3e5$var$$propertyIsEnumerable;


var $330b89bb54d51273$exports = {};
$330b89bb54d51273$exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};


var $6bc799c02ba4df78$exports = {};
var $a77c77843a29c7fa$exports = {};
var $eb9e65426618a159$exports = {};

var $eb9e65426618a159$var$FunctionPrototype = Function.prototype;
var $eb9e65426618a159$var$bind = $eb9e65426618a159$var$FunctionPrototype.bind;
var $eb9e65426618a159$var$call = $eb9e65426618a159$var$FunctionPrototype.call;
var $eb9e65426618a159$var$uncurryThis = $85d3e254826bded5$exports && $eb9e65426618a159$var$bind.bind($eb9e65426618a159$var$call, $eb9e65426618a159$var$call);
$eb9e65426618a159$exports = $85d3e254826bded5$exports ? function(fn) {
    return fn && $eb9e65426618a159$var$uncurryThis(fn);
} : function(fn) {
    return fn && function() {
        return $eb9e65426618a159$var$call.apply(fn, arguments);
    };
};



var $0161683ac751005f$exports = {};

var $0161683ac751005f$var$toString = $eb9e65426618a159$exports({}.toString);
var $0161683ac751005f$var$stringSlice = $eb9e65426618a159$exports(''.slice);
$0161683ac751005f$exports = function(it) {
    return $0161683ac751005f$var$stringSlice($0161683ac751005f$var$toString(it), 8, -1);
};


var $a77c77843a29c7fa$var$$Object = Object;
var $a77c77843a29c7fa$var$split = $eb9e65426618a159$exports(''.split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
$a77c77843a29c7fa$exports = $4df01144fcc1dba0$exports(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$a77c77843a29c7fa$var$$Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return $0161683ac751005f$exports(it) == 'String' ? $a77c77843a29c7fa$var$split(it, '') : $a77c77843a29c7fa$var$$Object(it);
} : $a77c77843a29c7fa$var$$Object;


var $bb04fbbf36c813af$exports = {};
var $bb04fbbf36c813af$var$$TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
$bb04fbbf36c813af$exports = function(it) {
    if (it == undefined) throw $bb04fbbf36c813af$var$$TypeError("Can't call method on " + it);
    return it;
};


$6bc799c02ba4df78$exports = function(it) {
    return $a77c77843a29c7fa$exports($bb04fbbf36c813af$exports(it));
};


var $310dd708106c3dee$exports = {};
var $d008644e45938455$exports = {};

var $03d841a7de98d790$exports = {};
var $4388311ee31924de$exports = {};
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
$4388311ee31924de$exports = function(argument) {
    return typeof argument == 'function';
};


$03d841a7de98d790$exports = function(it) {
    return typeof it == 'object' ? it !== null : $4388311ee31924de$exports(it);
};


var $a5b5a8ebf7a373ab$exports = {};
var $8d81dd90659b3bf7$exports = {};


var $8d81dd90659b3bf7$var$aFunction = function(argument) {
    return $4388311ee31924de$exports(argument) ? argument : undefined;
};
$8d81dd90659b3bf7$exports = function(namespace, method) {
    return arguments.length < 2 ? $8d81dd90659b3bf7$var$aFunction($a106ca5992db6d14$exports[namespace]) : $a106ca5992db6d14$exports[namespace] && $a106ca5992db6d14$exports[namespace][method];
};



var $d29a123b10a0201a$exports = {};

$d29a123b10a0201a$exports = $eb9e65426618a159$exports({}.isPrototypeOf);


var $1ca6a055150aa0af$exports = {};
var $fae7bdf3ef6d0c9d$exports = {};
var $310e5e3ee25c7961$exports = {};

var $bac897e057c7edcf$exports = {};

$bac897e057c7edcf$exports = $8d81dd90659b3bf7$exports('navigator', 'userAgent') || '';


var $310e5e3ee25c7961$var$process = $a106ca5992db6d14$exports.process;
var $310e5e3ee25c7961$var$Deno = $a106ca5992db6d14$exports.Deno;
var $310e5e3ee25c7961$var$versions = $310e5e3ee25c7961$var$process && $310e5e3ee25c7961$var$process.versions || $310e5e3ee25c7961$var$Deno && $310e5e3ee25c7961$var$Deno.version;
var $310e5e3ee25c7961$var$v8 = $310e5e3ee25c7961$var$versions && $310e5e3ee25c7961$var$versions.v8;
var $310e5e3ee25c7961$var$match, $310e5e3ee25c7961$var$version;
if ($310e5e3ee25c7961$var$v8) {
    $310e5e3ee25c7961$var$match = $310e5e3ee25c7961$var$v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    $310e5e3ee25c7961$var$version = $310e5e3ee25c7961$var$match[0] > 0 && $310e5e3ee25c7961$var$match[0] < 4 ? 1 : +($310e5e3ee25c7961$var$match[0] + $310e5e3ee25c7961$var$match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!$310e5e3ee25c7961$var$version && $bac897e057c7edcf$exports) {
    $310e5e3ee25c7961$var$match = $bac897e057c7edcf$exports.match(/Edge\/(\d+)/);
    if (!$310e5e3ee25c7961$var$match || $310e5e3ee25c7961$var$match[1] >= 74) {
        $310e5e3ee25c7961$var$match = $bac897e057c7edcf$exports.match(/Chrome\/(\d+)/);
        if ($310e5e3ee25c7961$var$match) $310e5e3ee25c7961$var$version = +$310e5e3ee25c7961$var$match[1];
    }
}
$310e5e3ee25c7961$exports = $310e5e3ee25c7961$var$version;



// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
$fae7bdf3ef6d0c9d$exports = !!Object.getOwnPropertySymbols && !$4df01144fcc1dba0$exports(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && $310e5e3ee25c7961$exports && $310e5e3ee25c7961$exports < 41;
});


$1ca6a055150aa0af$exports = $fae7bdf3ef6d0c9d$exports && !Symbol.sham && typeof Symbol.iterator == 'symbol';


var $a5b5a8ebf7a373ab$var$$Object = Object;
$a5b5a8ebf7a373ab$exports = $1ca6a055150aa0af$exports ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    var $Symbol = $8d81dd90659b3bf7$exports('Symbol');
    return $4388311ee31924de$exports($Symbol) && $d29a123b10a0201a$exports($Symbol.prototype, $a5b5a8ebf7a373ab$var$$Object(it));
};


var $994d9c17d95ac6b2$exports = {};
var $7c5e0f3b5830feb0$exports = {};

var $28f827f4a164628e$exports = {};
var $28f827f4a164628e$var$$String = String;
$28f827f4a164628e$exports = function(argument) {
    try {
        return $28f827f4a164628e$var$$String(argument);
    } catch (error) {
        return 'Object';
    }
};


var $7c5e0f3b5830feb0$var$$TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
$7c5e0f3b5830feb0$exports = function(argument) {
    if ($4388311ee31924de$exports(argument)) return argument;
    throw $7c5e0f3b5830feb0$var$$TypeError($28f827f4a164628e$exports(argument) + ' is not a function');
};


// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
$994d9c17d95ac6b2$exports = function(V, P) {
    var func = V[P];
    return func == null ? undefined : $7c5e0f3b5830feb0$exports(func);
};


var $737c300e97ce66ed$exports = {};



var $737c300e97ce66ed$var$$TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
$737c300e97ce66ed$exports = function(input, pref) {
    var fn, val;
    if (pref === 'string' && $4388311ee31924de$exports(fn = input.toString) && !$03d841a7de98d790$exports(val = $34a17b8b59341b81$exports(fn, input))) return val;
    if ($4388311ee31924de$exports(fn = input.valueOf) && !$03d841a7de98d790$exports(val = $34a17b8b59341b81$exports(fn, input))) return val;
    if (pref !== 'string' && $4388311ee31924de$exports(fn = input.toString) && !$03d841a7de98d790$exports(val = $34a17b8b59341b81$exports(fn, input))) return val;
    throw $737c300e97ce66ed$var$$TypeError("Can't convert object to primitive value");
};


var $b8661b52154c7859$exports = {};

var $526290cb9f7c8cc7$exports = {};
var $e9fb11f78bdfa6b0$exports = {};
$e9fb11f78bdfa6b0$exports = false;


var $4e2af739d1424a6c$exports = {};

var $5968edce324c0ab8$exports = {};

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $5968edce324c0ab8$var$defineProperty = Object.defineProperty;
$5968edce324c0ab8$exports = function(key, value) {
    try {
        $5968edce324c0ab8$var$defineProperty($a106ca5992db6d14$exports, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        $a106ca5992db6d14$exports[key] = value;
    }
    return value;
};


var $4e2af739d1424a6c$var$SHARED = '__core-js_shared__';
var $4e2af739d1424a6c$var$store = $a106ca5992db6d14$exports[$4e2af739d1424a6c$var$SHARED] || $5968edce324c0ab8$exports($4e2af739d1424a6c$var$SHARED, {});
$4e2af739d1424a6c$exports = $4e2af739d1424a6c$var$store;


($526290cb9f7c8cc7$exports = function(key, value) {
    return $4e2af739d1424a6c$exports[key] || ($4e2af739d1424a6c$exports[key] = value !== undefined ? value : {});
})('versions', []).push({
    version: '3.23.2',
    mode: $e9fb11f78bdfa6b0$exports ? 'pure' : 'global',
    copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.23.2/LICENSE',
    source: 'https://github.com/zloirock/core-js'
});


var $629e60eb3f6b4a93$exports = {};

var $6073db8e3776cd1c$exports = {};

var $6073db8e3776cd1c$var$$Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
$6073db8e3776cd1c$exports = function(argument) {
    return $6073db8e3776cd1c$var$$Object($bb04fbbf36c813af$exports(argument));
};


var $629e60eb3f6b4a93$var$hasOwnProperty = $eb9e65426618a159$exports({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
$629e60eb3f6b4a93$exports = Object.hasOwn || function hasOwn(it, key) {
    return $629e60eb3f6b4a93$var$hasOwnProperty($6073db8e3776cd1c$exports(it), key);
};


var $c018bddfdd4b2a96$exports = {};

var $c018bddfdd4b2a96$var$id = 0;
var $c018bddfdd4b2a96$var$postfix = Math.random();
var $c018bddfdd4b2a96$var$toString = $eb9e65426618a159$exports(1.0.toString);
$c018bddfdd4b2a96$exports = function(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + $c018bddfdd4b2a96$var$toString(++$c018bddfdd4b2a96$var$id + $c018bddfdd4b2a96$var$postfix, 36);
};




var $b8661b52154c7859$var$WellKnownSymbolsStore = $526290cb9f7c8cc7$exports('wks');
var $b8661b52154c7859$var$Symbol = $a106ca5992db6d14$exports.Symbol;
var $b8661b52154c7859$var$symbolFor = $b8661b52154c7859$var$Symbol && $b8661b52154c7859$var$Symbol['for'];
var $b8661b52154c7859$var$createWellKnownSymbol = $1ca6a055150aa0af$exports ? $b8661b52154c7859$var$Symbol : $b8661b52154c7859$var$Symbol && $b8661b52154c7859$var$Symbol.withoutSetter || $c018bddfdd4b2a96$exports;
$b8661b52154c7859$exports = function(name) {
    if (!$629e60eb3f6b4a93$exports($b8661b52154c7859$var$WellKnownSymbolsStore, name) || !($fae7bdf3ef6d0c9d$exports || typeof $b8661b52154c7859$var$WellKnownSymbolsStore[name] == 'string')) {
        var description = 'Symbol.' + name;
        if ($fae7bdf3ef6d0c9d$exports && $629e60eb3f6b4a93$exports($b8661b52154c7859$var$Symbol, name)) $b8661b52154c7859$var$WellKnownSymbolsStore[name] = $b8661b52154c7859$var$Symbol[name];
        else if ($1ca6a055150aa0af$exports && $b8661b52154c7859$var$symbolFor) $b8661b52154c7859$var$WellKnownSymbolsStore[name] = $b8661b52154c7859$var$symbolFor(description);
        else $b8661b52154c7859$var$WellKnownSymbolsStore[name] = $b8661b52154c7859$var$createWellKnownSymbol(description);
    }
    return $b8661b52154c7859$var$WellKnownSymbolsStore[name];
};


var $d008644e45938455$var$$TypeError = TypeError;
var $d008644e45938455$var$TO_PRIMITIVE = $b8661b52154c7859$exports('toPrimitive');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
$d008644e45938455$exports = function(input, pref) {
    if (!$03d841a7de98d790$exports(input) || $a5b5a8ebf7a373ab$exports(input)) return input;
    var exoticToPrim = $994d9c17d95ac6b2$exports(input, $d008644e45938455$var$TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = $34a17b8b59341b81$exports(exoticToPrim, input, pref);
        if (!$03d841a7de98d790$exports(result) || $a5b5a8ebf7a373ab$exports(result)) return result;
        throw $d008644e45938455$var$$TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return $737c300e97ce66ed$exports(input, pref);
};



// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
$310dd708106c3dee$exports = function(argument) {
    var key = $d008644e45938455$exports(argument, 'string');
    return $a5b5a8ebf7a373ab$exports(key) ? key : key + '';
};



var $2f10dde69975786c$exports = {};


var $aee29c2d048b3566$exports = {};


var $aee29c2d048b3566$var$document = $a106ca5992db6d14$exports.document;
// typeof document.createElement is 'object' in old IE
var $aee29c2d048b3566$var$EXISTS = $03d841a7de98d790$exports($aee29c2d048b3566$var$document) && $03d841a7de98d790$exports($aee29c2d048b3566$var$document.createElement);
$aee29c2d048b3566$exports = function(it) {
    return $aee29c2d048b3566$var$EXISTS ? $aee29c2d048b3566$var$document.createElement(it) : {};
};


// Thanks to IE8 for its funny defineProperty
$2f10dde69975786c$exports = !$34388eb61f7df5e9$exports && !$4df01144fcc1dba0$exports(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty($aee29c2d048b3566$exports('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a != 7;
});


// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $34eca15df50eb894$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
$34eca15df50eb894$export$2d1720544b23b823 = $34388eb61f7df5e9$exports ? $34eca15df50eb894$var$$getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = $6bc799c02ba4df78$exports(O);
    P = $310dd708106c3dee$exports(P);
    if ($2f10dde69975786c$exports) try {
        return $34eca15df50eb894$var$$getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if ($629e60eb3f6b4a93$exports(O, P)) return $330b89bb54d51273$exports(!$34a17b8b59341b81$exports($7f3774d879fab3e5$export$2d1720544b23b823, O, P), O[P]);
};


var $c44592570acf55b1$require$getOwnPropertyDescriptor = $34eca15df50eb894$export$2d1720544b23b823;
var $8aee9463b6ef6805$exports = {};

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var $6d47c3ff2c128b2f$export$2d1720544b23b823;


var $b183a9ef4c28a53f$exports = {};


// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
$b183a9ef4c28a53f$exports = $34388eb61f7df5e9$exports && $4df01144fcc1dba0$exports(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, 'prototype', {
        value: 42,
        writable: false
    }).prototype != 42;
});


var $a60c42e9916a0850$exports = {};

var $a60c42e9916a0850$var$$String = String;
var $a60c42e9916a0850$var$$TypeError = TypeError;
// `Assert: Type(argument) is Object`
$a60c42e9916a0850$exports = function(argument) {
    if ($03d841a7de98d790$exports(argument)) return argument;
    throw $a60c42e9916a0850$var$$TypeError($a60c42e9916a0850$var$$String(argument) + ' is not an object');
};



var $6d47c3ff2c128b2f$var$$TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $6d47c3ff2c128b2f$var$$defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $6d47c3ff2c128b2f$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var $6d47c3ff2c128b2f$var$ENUMERABLE = 'enumerable';
var $6d47c3ff2c128b2f$var$CONFIGURABLE = 'configurable';
var $6d47c3ff2c128b2f$var$WRITABLE = 'writable';
$6d47c3ff2c128b2f$export$2d1720544b23b823 = $34388eb61f7df5e9$exports ? $b183a9ef4c28a53f$exports ? function defineProperty(O, P, Attributes) {
    $a60c42e9916a0850$exports(O);
    P = $310dd708106c3dee$exports(P);
    $a60c42e9916a0850$exports(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && $6d47c3ff2c128b2f$var$WRITABLE in Attributes && !Attributes[$6d47c3ff2c128b2f$var$WRITABLE]) {
        var current = $6d47c3ff2c128b2f$var$$getOwnPropertyDescriptor(O, P);
        if (current && current[$6d47c3ff2c128b2f$var$WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: $6d47c3ff2c128b2f$var$CONFIGURABLE in Attributes ? Attributes[$6d47c3ff2c128b2f$var$CONFIGURABLE] : current[$6d47c3ff2c128b2f$var$CONFIGURABLE],
                enumerable: $6d47c3ff2c128b2f$var$ENUMERABLE in Attributes ? Attributes[$6d47c3ff2c128b2f$var$ENUMERABLE] : current[$6d47c3ff2c128b2f$var$ENUMERABLE],
                writable: false
            };
        }
    }
    return $6d47c3ff2c128b2f$var$$defineProperty(O, P, Attributes);
} : $6d47c3ff2c128b2f$var$$defineProperty : function defineProperty(O, P, Attributes) {
    $a60c42e9916a0850$exports(O);
    P = $310dd708106c3dee$exports(P);
    $a60c42e9916a0850$exports(Attributes);
    if ($2f10dde69975786c$exports) try {
        return $6d47c3ff2c128b2f$var$$defineProperty(O, P, Attributes);
    } catch (error) {}
    if ('get' in Attributes || 'set' in Attributes) throw $6d47c3ff2c128b2f$var$$TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};



$8aee9463b6ef6805$exports = $34388eb61f7df5e9$exports ? function(object, key, value) {
    return $6d47c3ff2c128b2f$export$2d1720544b23b823(object, key, $330b89bb54d51273$exports(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};


var $0982d4556954a717$exports = {};


var $3e0be7c04fc125e0$exports = {};




var $fdcb760a82b8da82$exports = {};


var $fdcb760a82b8da82$var$FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $fdcb760a82b8da82$var$getDescriptor = $34388eb61f7df5e9$exports && Object.getOwnPropertyDescriptor;
var $fdcb760a82b8da82$var$EXISTS = $629e60eb3f6b4a93$exports($fdcb760a82b8da82$var$FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var $fdcb760a82b8da82$var$PROPER = $fdcb760a82b8da82$var$EXISTS && (function something() {}).name === 'something';
var $fdcb760a82b8da82$var$CONFIGURABLE = $fdcb760a82b8da82$var$EXISTS && (!$34388eb61f7df5e9$exports || $34388eb61f7df5e9$exports && $fdcb760a82b8da82$var$getDescriptor($fdcb760a82b8da82$var$FunctionPrototype, 'name').configurable);
$fdcb760a82b8da82$exports = {
    EXISTS: $fdcb760a82b8da82$var$EXISTS,
    PROPER: $fdcb760a82b8da82$var$PROPER,
    CONFIGURABLE: $fdcb760a82b8da82$var$CONFIGURABLE
};


var $3e0be7c04fc125e0$require$CONFIGURABLE_FUNCTION_NAME = $fdcb760a82b8da82$exports.CONFIGURABLE;
var $d0257f82f3b2787c$exports = {};



var $d0257f82f3b2787c$var$functionToString = $eb9e65426618a159$exports(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!$4388311ee31924de$exports($4e2af739d1424a6c$exports.inspectSource)) $4e2af739d1424a6c$exports.inspectSource = function(it) {
    return $d0257f82f3b2787c$var$functionToString(it);
};
$d0257f82f3b2787c$exports = $4e2af739d1424a6c$exports.inspectSource;


var $845d1cdb21a3c47b$exports = {};
var $7ba51843a00bd370$exports = {};



var $7ba51843a00bd370$var$WeakMap = $a106ca5992db6d14$exports.WeakMap;
$7ba51843a00bd370$exports = $4388311ee31924de$exports($7ba51843a00bd370$var$WeakMap) && /native code/.test($d0257f82f3b2787c$exports($7ba51843a00bd370$var$WeakMap));








var $8eadbf51c06bead2$exports = {};


var $8eadbf51c06bead2$var$keys = $526290cb9f7c8cc7$exports('keys');
$8eadbf51c06bead2$exports = function(key) {
    return $8eadbf51c06bead2$var$keys[key] || ($8eadbf51c06bead2$var$keys[key] = $c018bddfdd4b2a96$exports(key));
};


var $33dd2ac6f960a6fa$exports = {};
$33dd2ac6f960a6fa$exports = {};


var $845d1cdb21a3c47b$var$OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var $845d1cdb21a3c47b$var$TypeError = $a106ca5992db6d14$exports.TypeError;
var $845d1cdb21a3c47b$var$WeakMap = $a106ca5992db6d14$exports.WeakMap;
var $845d1cdb21a3c47b$var$set, $845d1cdb21a3c47b$var$get, $845d1cdb21a3c47b$var$has;
var $845d1cdb21a3c47b$var$enforce = function(it) {
    return $845d1cdb21a3c47b$var$has(it) ? $845d1cdb21a3c47b$var$get(it) : $845d1cdb21a3c47b$var$set(it, {});
};
var $845d1cdb21a3c47b$var$getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!$03d841a7de98d790$exports(it) || (state = $845d1cdb21a3c47b$var$get(it)).type !== TYPE) throw $845d1cdb21a3c47b$var$TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if ($7ba51843a00bd370$exports || $4e2af739d1424a6c$exports.state) {
    var $845d1cdb21a3c47b$var$store = $4e2af739d1424a6c$exports.state || ($4e2af739d1424a6c$exports.state = new $845d1cdb21a3c47b$var$WeakMap());
    var $845d1cdb21a3c47b$var$wmget = $eb9e65426618a159$exports($845d1cdb21a3c47b$var$store.get);
    var $845d1cdb21a3c47b$var$wmhas = $eb9e65426618a159$exports($845d1cdb21a3c47b$var$store.has);
    var $845d1cdb21a3c47b$var$wmset = $eb9e65426618a159$exports($845d1cdb21a3c47b$var$store.set);
    $845d1cdb21a3c47b$var$set = function(it, metadata) {
        if ($845d1cdb21a3c47b$var$wmhas($845d1cdb21a3c47b$var$store, it)) throw new $845d1cdb21a3c47b$var$TypeError($845d1cdb21a3c47b$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $845d1cdb21a3c47b$var$wmset($845d1cdb21a3c47b$var$store, it, metadata);
        return metadata;
    };
    $845d1cdb21a3c47b$var$get = function(it) {
        return $845d1cdb21a3c47b$var$wmget($845d1cdb21a3c47b$var$store, it) || {};
    };
    $845d1cdb21a3c47b$var$has = function(it) {
        return $845d1cdb21a3c47b$var$wmhas($845d1cdb21a3c47b$var$store, it);
    };
} else {
    var $845d1cdb21a3c47b$var$STATE = $8eadbf51c06bead2$exports('state');
    $33dd2ac6f960a6fa$exports[$845d1cdb21a3c47b$var$STATE] = true;
    $845d1cdb21a3c47b$var$set = function(it, metadata) {
        if ($629e60eb3f6b4a93$exports(it, $845d1cdb21a3c47b$var$STATE)) throw new $845d1cdb21a3c47b$var$TypeError($845d1cdb21a3c47b$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $8aee9463b6ef6805$exports(it, $845d1cdb21a3c47b$var$STATE, metadata);
        return metadata;
    };
    $845d1cdb21a3c47b$var$get = function(it) {
        return $629e60eb3f6b4a93$exports(it, $845d1cdb21a3c47b$var$STATE) ? it[$845d1cdb21a3c47b$var$STATE] : {};
    };
    $845d1cdb21a3c47b$var$has = function(it) {
        return $629e60eb3f6b4a93$exports(it, $845d1cdb21a3c47b$var$STATE);
    };
}
$845d1cdb21a3c47b$exports = {
    set: $845d1cdb21a3c47b$var$set,
    get: $845d1cdb21a3c47b$var$get,
    has: $845d1cdb21a3c47b$var$has,
    enforce: $845d1cdb21a3c47b$var$enforce,
    getterFor: $845d1cdb21a3c47b$var$getterFor
};


var $3e0be7c04fc125e0$var$enforceInternalState = $845d1cdb21a3c47b$exports.enforce;
var $3e0be7c04fc125e0$var$getInternalState = $845d1cdb21a3c47b$exports.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $3e0be7c04fc125e0$var$defineProperty = Object.defineProperty;
var $3e0be7c04fc125e0$var$CONFIGURABLE_LENGTH = $34388eb61f7df5e9$exports && !$4df01144fcc1dba0$exports(function() {
    return $3e0be7c04fc125e0$var$defineProperty(function() {}, 'length', {
        value: 8
    }).length !== 8;
});
var $3e0be7c04fc125e0$var$TEMPLATE = String(String).split('String');
var $3e0be7c04fc125e0$var$makeBuiltIn = $3e0be7c04fc125e0$exports = function(value, name, options) {
    if (String(name).slice(0, 7) === 'Symbol(') name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!$629e60eb3f6b4a93$exports(value, 'name') || $3e0be7c04fc125e0$require$CONFIGURABLE_FUNCTION_NAME && value.name !== name) $3e0be7c04fc125e0$var$defineProperty(value, 'name', {
        value: name,
        configurable: true
    });
    if ($3e0be7c04fc125e0$var$CONFIGURABLE_LENGTH && options && $629e60eb3f6b4a93$exports(options, 'arity') && value.length !== options.arity) $3e0be7c04fc125e0$var$defineProperty(value, 'length', {
        value: options.arity
    });
    try {
        if (options && $629e60eb3f6b4a93$exports(options, 'constructor') && options.constructor) {
            if ($34388eb61f7df5e9$exports) $3e0be7c04fc125e0$var$defineProperty(value, 'prototype', {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = $3e0be7c04fc125e0$var$enforceInternalState(value);
    if (!$629e60eb3f6b4a93$exports(state, 'source')) state.source = $3e0be7c04fc125e0$var$TEMPLATE.join(typeof name == 'string' ? name : '');
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = $3e0be7c04fc125e0$var$makeBuiltIn(function toString() {
    return $4388311ee31924de$exports(this) && $3e0be7c04fc125e0$var$getInternalState(this).source || $d0257f82f3b2787c$exports(this);
}, 'toString');



$0982d4556954a717$exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if ($4388311ee31924de$exports(value)) $3e0be7c04fc125e0$exports(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else $5968edce324c0ab8$exports(key, value);
    } else {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
        if (simple) O[key] = value;
        else $6d47c3ff2c128b2f$export$2d1720544b23b823(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};



var $3e071ef939e66d84$exports = {};

var $ea1668061e9d05b0$exports = {};


// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
var $d8b5e8d4b7354dda$export$2d1720544b23b823;
var $6fc4e60cb1ee0cbb$exports = {};



var $d02aa51575256d32$exports = {};

var $c37c0ab538aab06a$exports = {};
var $9e3a58fdcee33520$exports = {};
var $8570604f2b83b79b$exports = {};
var $8570604f2b83b79b$var$ceil = Math.ceil;
var $8570604f2b83b79b$var$floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
$8570604f2b83b79b$exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? $8570604f2b83b79b$var$floor : $8570604f2b83b79b$var$ceil)(n);
};


// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
$9e3a58fdcee33520$exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : $8570604f2b83b79b$exports(number);
};


var $c37c0ab538aab06a$var$max = Math.max;
var $c37c0ab538aab06a$var$min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
$c37c0ab538aab06a$exports = function(index, length) {
    var integer = $9e3a58fdcee33520$exports(index);
    return integer < 0 ? $c37c0ab538aab06a$var$max(integer + length, 0) : $c37c0ab538aab06a$var$min(integer, length);
};


var $98922f758287a7f1$exports = {};
var $acf8761bcce983bb$exports = {};

var $acf8761bcce983bb$var$min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
$acf8761bcce983bb$exports = function(argument) {
    return argument > 0 ? $acf8761bcce983bb$var$min($9e3a58fdcee33520$exports(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
$98922f758287a7f1$exports = function(obj) {
    return $acf8761bcce983bb$exports(obj.length);
};


// `Array.prototype.{ indexOf, includes }` methods implementation
var $d02aa51575256d32$var$createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = $6bc799c02ba4df78$exports($this);
        var length = $98922f758287a7f1$exports(O);
        var index = $c37c0ab538aab06a$exports(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
$d02aa51575256d32$exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: $d02aa51575256d32$var$createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: $d02aa51575256d32$var$createMethod(false)
};


var $6fc4e60cb1ee0cbb$require$indexOf = $d02aa51575256d32$exports.indexOf;

var $6fc4e60cb1ee0cbb$var$push = $eb9e65426618a159$exports([].push);
$6fc4e60cb1ee0cbb$exports = function(object, names) {
    var O = $6bc799c02ba4df78$exports(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!$629e60eb3f6b4a93$exports($33dd2ac6f960a6fa$exports, key) && $629e60eb3f6b4a93$exports(O, key) && $6fc4e60cb1ee0cbb$var$push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if ($629e60eb3f6b4a93$exports(O, key = names[i++])) ~$6fc4e60cb1ee0cbb$require$indexOf(result, key) || $6fc4e60cb1ee0cbb$var$push(result, key);
    return result;
};


var $840e249db2e23582$exports = {};
// IE8- don't enum bug keys
$840e249db2e23582$exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];


var $d8b5e8d4b7354dda$var$hiddenKeys = $840e249db2e23582$exports.concat('length', 'prototype');
$d8b5e8d4b7354dda$export$2d1720544b23b823 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $6fc4e60cb1ee0cbb$exports(O, $d8b5e8d4b7354dda$var$hiddenKeys);
};


// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
var $25413b40d7f59456$export$2d1720544b23b823;
$25413b40d7f59456$export$2d1720544b23b823 = Object.getOwnPropertySymbols;



var $ea1668061e9d05b0$var$concat = $eb9e65426618a159$exports([].concat);
// all object keys, includes non-enumerable and symbols
$ea1668061e9d05b0$exports = $8d81dd90659b3bf7$exports('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = $d8b5e8d4b7354dda$export$2d1720544b23b823($a60c42e9916a0850$exports(it));
    var getOwnPropertySymbols = $25413b40d7f59456$export$2d1720544b23b823;
    return getOwnPropertySymbols ? $ea1668061e9d05b0$var$concat(keys, getOwnPropertySymbols(it)) : keys;
};




$3e071ef939e66d84$exports = function(target, source, exceptions) {
    var keys = $ea1668061e9d05b0$exports(source);
    var defineProperty = $6d47c3ff2c128b2f$export$2d1720544b23b823;
    var getOwnPropertyDescriptor = $34eca15df50eb894$export$2d1720544b23b823;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!$629e60eb3f6b4a93$exports(target, key) && !(exceptions && $629e60eb3f6b4a93$exports(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};


var $a3b849ce1653de66$exports = {};


var $a3b849ce1653de66$var$replacement = /#|\.prototype\./;
var $a3b849ce1653de66$var$isForced = function(feature, detection) {
    var value = $a3b849ce1653de66$var$data[$a3b849ce1653de66$var$normalize(feature)];
    return value == $a3b849ce1653de66$var$POLYFILL ? true : value == $a3b849ce1653de66$var$NATIVE ? false : $4388311ee31924de$exports(detection) ? $4df01144fcc1dba0$exports(detection) : !!detection;
};
var $a3b849ce1653de66$var$normalize = $a3b849ce1653de66$var$isForced.normalize = function(string) {
    return String(string).replace($a3b849ce1653de66$var$replacement, '.').toLowerCase();
};
var $a3b849ce1653de66$var$data = $a3b849ce1653de66$var$isForced.data = {};
var $a3b849ce1653de66$var$NATIVE = $a3b849ce1653de66$var$isForced.NATIVE = 'N';
var $a3b849ce1653de66$var$POLYFILL = $a3b849ce1653de66$var$isForced.POLYFILL = 'P';
$a3b849ce1653de66$exports = $a3b849ce1653de66$var$isForced;


/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ $c44592570acf55b1$exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = $a106ca5992db6d14$exports;
    else if (STATIC) target = $a106ca5992db6d14$exports[TARGET] || $5968edce324c0ab8$exports(TARGET, {});
    else target = ($a106ca5992db6d14$exports[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = $c44592570acf55b1$require$getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = $a3b849ce1653de66$exports(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            $3e071ef939e66d84$exports(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) $8aee9463b6ef6805$exports(sourceProperty, 'sham', true);
        $0982d4556954a717$exports(target, key, sourceProperty, options);
    }
};



var $94bcbd6eb2bdeb85$exports = {};

$94bcbd6eb2bdeb85$exports = $a106ca5992db6d14$exports.Promise;





var $1380607eeab8131b$exports = {};

var $32ffb3da55c853c6$exports = {};
var $3149b8ddd60431f2$exports = {};



var $12cd45a5b0f36c8e$exports = {};
var $c3e181b9c5bc86f0$exports = {};

var $c3e181b9c5bc86f0$var$TO_STRING_TAG = $b8661b52154c7859$exports('toStringTag');
var $c3e181b9c5bc86f0$var$test = {};
$c3e181b9c5bc86f0$var$test[$c3e181b9c5bc86f0$var$TO_STRING_TAG] = 'z';
$c3e181b9c5bc86f0$exports = String($c3e181b9c5bc86f0$var$test) === '[object z]';





var $12cd45a5b0f36c8e$var$TO_STRING_TAG = $b8661b52154c7859$exports('toStringTag');
var $12cd45a5b0f36c8e$var$$Object = Object;
// ES3 wrong here
var $12cd45a5b0f36c8e$var$CORRECT_ARGUMENTS = $0161683ac751005f$exports(function() {
    return arguments;
}()) == 'Arguments';
// fallback for IE11 Script Access Denied error
var $12cd45a5b0f36c8e$var$tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {}
};
// getting tag from ES6+ `Object.prototype.toString`
$12cd45a5b0f36c8e$exports = $c3e181b9c5bc86f0$exports ? $0161683ac751005f$exports : function(it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = $12cd45a5b0f36c8e$var$tryGet(O = $12cd45a5b0f36c8e$var$$Object(it), $12cd45a5b0f36c8e$var$TO_STRING_TAG)) == 'string' ? tag : $12cd45a5b0f36c8e$var$CORRECT_ARGUMENTS ? $0161683ac751005f$exports(O) : (result = $0161683ac751005f$exports(O)) == 'Object' && $4388311ee31924de$exports(O.callee) ? 'Arguments' : result;
};




var $3149b8ddd60431f2$var$noop = function() {};
var $3149b8ddd60431f2$var$empty = [];
var $3149b8ddd60431f2$var$construct = $8d81dd90659b3bf7$exports('Reflect', 'construct');
var $3149b8ddd60431f2$var$constructorRegExp = /^\s*(?:class|function)\b/;
var $3149b8ddd60431f2$var$exec = $eb9e65426618a159$exports($3149b8ddd60431f2$var$constructorRegExp.exec);
var $3149b8ddd60431f2$var$INCORRECT_TO_STRING = !$3149b8ddd60431f2$var$constructorRegExp.exec($3149b8ddd60431f2$var$noop);
var $3149b8ddd60431f2$var$isConstructorModern = function isConstructor(argument) {
    if (!$4388311ee31924de$exports(argument)) return false;
    try {
        $3149b8ddd60431f2$var$construct($3149b8ddd60431f2$var$noop, $3149b8ddd60431f2$var$empty, argument);
        return true;
    } catch (error) {
        return false;
    }
};
var $3149b8ddd60431f2$var$isConstructorLegacy = function isConstructor(argument) {
    if (!$4388311ee31924de$exports(argument)) return false;
    switch($12cd45a5b0f36c8e$exports(argument)){
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction':
            return false;
    }
    try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return $3149b8ddd60431f2$var$INCORRECT_TO_STRING || !!$3149b8ddd60431f2$var$exec($3149b8ddd60431f2$var$constructorRegExp, $d0257f82f3b2787c$exports(argument));
    } catch (error) {
        return true;
    }
};
$3149b8ddd60431f2$var$isConstructorLegacy.sham = true;
// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
$3149b8ddd60431f2$exports = !$3149b8ddd60431f2$var$construct || $4df01144fcc1dba0$exports(function() {
    var called;
    return $3149b8ddd60431f2$var$isConstructorModern($3149b8ddd60431f2$var$isConstructorModern.call) || !$3149b8ddd60431f2$var$isConstructorModern(Object) || !$3149b8ddd60431f2$var$isConstructorModern(function() {
        called = true;
    }) || called;
}) ? $3149b8ddd60431f2$var$isConstructorLegacy : $3149b8ddd60431f2$var$isConstructorModern;



var $32ffb3da55c853c6$var$$TypeError = TypeError;
// `Assert: IsConstructor(argument) is true`
$32ffb3da55c853c6$exports = function(argument) {
    if ($3149b8ddd60431f2$exports(argument)) return argument;
    throw $32ffb3da55c853c6$var$$TypeError($28f827f4a164628e$exports(argument) + ' is not a constructor');
};



var $1380607eeab8131b$var$SPECIES = $b8661b52154c7859$exports('species');
// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
$1380607eeab8131b$exports = function(O, defaultConstructor) {
    var C = $a60c42e9916a0850$exports(O).constructor;
    var S;
    return C === undefined || (S = $a60c42e9916a0850$exports(C)[$1380607eeab8131b$var$SPECIES]) == undefined ? defaultConstructor : $32ffb3da55c853c6$exports(S);
};


var $14f2cf2c4f016438$exports = {};


// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
var $278e41ad148908cf$export$2d1720544b23b823;
'use strict';

var $278e41ad148908cf$var$PromiseCapability = function(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
    });
    this.resolve = $7c5e0f3b5830feb0$exports(resolve);
    this.reject = $7c5e0f3b5830feb0$exports(reject);
};
$278e41ad148908cf$export$2d1720544b23b823 = function(C) {
    return new $278e41ad148908cf$var$PromiseCapability(C);
};


$14f2cf2c4f016438$exports = function(C, x) {
    $a60c42e9916a0850$exports(C);
    if ($03d841a7de98d790$exports(x) && x.constructor === C) return x;
    var promiseCapability = $278e41ad148908cf$export$2d1720544b23b823(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};



var $6354ff9810f4123c$var$NativePromisePrototype = $94bcbd6eb2bdeb85$exports && $94bcbd6eb2bdeb85$exports.prototype;
// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var $6354ff9810f4123c$var$NON_GENERIC = !!$94bcbd6eb2bdeb85$exports && $4df01144fcc1dba0$exports(function() {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    $6354ff9810f4123c$var$NativePromisePrototype['finally'].call({
        then: function() {}
    }, function() {});
});
// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$c44592570acf55b1$exports({
    target: 'Promise',
    proto: true,
    real: true,
    forced: $6354ff9810f4123c$var$NON_GENERIC
}, {
    'finally': function(onFinally) {
        var C = $1380607eeab8131b$exports(this, $8d81dd90659b3bf7$exports('Promise'));
        var isFunction = $4388311ee31924de$exports(onFinally);
        return this.then(isFunction ? function(x) {
            return $14f2cf2c4f016438$exports(C, onFinally()).then(function() {
                return x;
            });
        } : onFinally, isFunction ? function(e) {
            return $14f2cf2c4f016438$exports(C, onFinally()).then(function() {
                throw e;
            });
        } : onFinally);
    }
});
// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!$e9fb11f78bdfa6b0$exports && $4388311ee31924de$exports($94bcbd6eb2bdeb85$exports)) {
    var $6354ff9810f4123c$var$method = $8d81dd90659b3bf7$exports('Promise').prototype['finally'];
    if ($6354ff9810f4123c$var$NativePromisePrototype['finally'] !== $6354ff9810f4123c$var$method) $0982d4556954a717$exports($6354ff9810f4123c$var$NativePromisePrototype, 'finally', $6354ff9810f4123c$var$method, {
        unsafe: true
    });
}



var $27f4660a6ecc872c$exports = {};
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
$27f4660a6ecc872c$exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
};


var $eaac9e74464391e0$exports = {};

var $eaac9e74464391e0$var$classList = $aee29c2d048b3566$exports('span').classList;
var $eaac9e74464391e0$var$DOMTokenListPrototype = $eaac9e74464391e0$var$classList && $eaac9e74464391e0$var$classList.constructor && $eaac9e74464391e0$var$classList.constructor.prototype;
$eaac9e74464391e0$exports = $eaac9e74464391e0$var$DOMTokenListPrototype === Object.prototype ? undefined : $eaac9e74464391e0$var$DOMTokenListPrototype;


var $6a63393b49a7c2ba$exports = {};
'use strict';

var $e91b9f8fe0ce5948$exports = {};

var $53d460896fb17234$exports = {};

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
var $cdac2eecda13e0d8$export$2d1720544b23b823;





var $6b266891c93eb5e5$exports = {};


// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
$6b266891c93eb5e5$exports = Object.keys || function keys(O) {
    return $6fc4e60cb1ee0cbb$exports(O, $840e249db2e23582$exports);
};


$cdac2eecda13e0d8$export$2d1720544b23b823 = $34388eb61f7df5e9$exports && !$b183a9ef4c28a53f$exports ? Object.defineProperties : function defineProperties(O, Properties) {
    $a60c42e9916a0850$exports(O);
    var props = $6bc799c02ba4df78$exports(Properties);
    var keys = $6b266891c93eb5e5$exports(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)$6d47c3ff2c128b2f$export$2d1720544b23b823(O, key = keys[index++], props[key]);
    return O;
};




var $962f39153ae1564b$exports = {};

$962f39153ae1564b$exports = $8d81dd90659b3bf7$exports('document', 'documentElement');




var $53d460896fb17234$var$GT = '>';
var $53d460896fb17234$var$LT = '<';
var $53d460896fb17234$var$PROTOTYPE = 'prototype';
var $53d460896fb17234$var$SCRIPT = 'script';
var $53d460896fb17234$var$IE_PROTO = $8eadbf51c06bead2$exports('IE_PROTO');
var $53d460896fb17234$var$EmptyConstructor = function() {};
var $53d460896fb17234$var$scriptTag = function(content) {
    return $53d460896fb17234$var$LT + $53d460896fb17234$var$SCRIPT + $53d460896fb17234$var$GT + content + $53d460896fb17234$var$LT + '/' + $53d460896fb17234$var$SCRIPT + $53d460896fb17234$var$GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var $53d460896fb17234$var$NullProtoObjectViaActiveX = function(activeXDocument) {
    activeXDocument.write($53d460896fb17234$var$scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var $53d460896fb17234$var$NullProtoObjectViaIFrame = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = $aee29c2d048b3566$exports('iframe');
    var JS = 'java' + $53d460896fb17234$var$SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    $962f39153ae1564b$exports.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write($53d460896fb17234$var$scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var $53d460896fb17234$var$activeXDocument;
var $53d460896fb17234$var$NullProtoObject = function() {
    try {
        $53d460896fb17234$var$activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {}
    $53d460896fb17234$var$NullProtoObject = typeof document != 'undefined' ? document.domain && $53d460896fb17234$var$activeXDocument ? $53d460896fb17234$var$NullProtoObjectViaActiveX($53d460896fb17234$var$activeXDocument) // old IE
     : $53d460896fb17234$var$NullProtoObjectViaIFrame() : $53d460896fb17234$var$NullProtoObjectViaActiveX($53d460896fb17234$var$activeXDocument); // WSH
    var length = $840e249db2e23582$exports.length;
    while(length--)delete $53d460896fb17234$var$NullProtoObject[$53d460896fb17234$var$PROTOTYPE][$840e249db2e23582$exports[length]];
    return $53d460896fb17234$var$NullProtoObject();
};
$33dd2ac6f960a6fa$exports[$53d460896fb17234$var$IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
$53d460896fb17234$exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        $53d460896fb17234$var$EmptyConstructor[$53d460896fb17234$var$PROTOTYPE] = $a60c42e9916a0850$exports(O);
        result = new $53d460896fb17234$var$EmptyConstructor();
        $53d460896fb17234$var$EmptyConstructor[$53d460896fb17234$var$PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[$53d460896fb17234$var$IE_PROTO] = O;
    } else result = $53d460896fb17234$var$NullProtoObject();
    return Properties === undefined ? result : $cdac2eecda13e0d8$export$2d1720544b23b823(result, Properties);
};



var $e91b9f8fe0ce5948$require$defineProperty = $6d47c3ff2c128b2f$export$2d1720544b23b823;
var $e91b9f8fe0ce5948$var$UNSCOPABLES = $b8661b52154c7859$exports('unscopables');
var $e91b9f8fe0ce5948$var$ArrayPrototype = Array.prototype;
// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if ($e91b9f8fe0ce5948$var$ArrayPrototype[$e91b9f8fe0ce5948$var$UNSCOPABLES] == undefined) $e91b9f8fe0ce5948$require$defineProperty($e91b9f8fe0ce5948$var$ArrayPrototype, $e91b9f8fe0ce5948$var$UNSCOPABLES, {
    configurable: true,
    value: $53d460896fb17234$exports(null)
});
// add a key to Array.prototype[@@unscopables]
$e91b9f8fe0ce5948$exports = function(key) {
    $e91b9f8fe0ce5948$var$ArrayPrototype[$e91b9f8fe0ce5948$var$UNSCOPABLES][key] = true;
};


var $c26bb85c9b651b5c$exports = {};
$c26bb85c9b651b5c$exports = {};




var $6a63393b49a7c2ba$require$defineProperty = $6d47c3ff2c128b2f$export$2d1720544b23b823;
var $8956678ba4e8d07d$exports = {};
'use strict';





var $63df99fe99a2847b$exports = {};
'use strict';
var $b627527a82452219$exports = {};
'use strict';



var $fdfb6d4aa56127d8$exports = {};




var $887b07bd3dbc3aed$exports = {};

$887b07bd3dbc3aed$exports = !$4df01144fcc1dba0$exports(function() {
    function F() {}
    F.prototype.constructor = null;
    // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});


var $fdfb6d4aa56127d8$var$IE_PROTO = $8eadbf51c06bead2$exports('IE_PROTO');
var $fdfb6d4aa56127d8$var$$Object = Object;
var $fdfb6d4aa56127d8$var$ObjectPrototype = $fdfb6d4aa56127d8$var$$Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
$fdfb6d4aa56127d8$exports = $887b07bd3dbc3aed$exports ? $fdfb6d4aa56127d8$var$$Object.getPrototypeOf : function(O) {
    var object = $6073db8e3776cd1c$exports(O);
    if ($629e60eb3f6b4a93$exports(object, $fdfb6d4aa56127d8$var$IE_PROTO)) return object[$fdfb6d4aa56127d8$var$IE_PROTO];
    var constructor = object.constructor;
    if ($4388311ee31924de$exports(constructor) && object instanceof constructor) return constructor.prototype;
    return object instanceof $fdfb6d4aa56127d8$var$$Object ? $fdfb6d4aa56127d8$var$ObjectPrototype : null;
};





var $b627527a82452219$var$ITERATOR = $b8661b52154c7859$exports('iterator');
var $b627527a82452219$var$BUGGY_SAFARI_ITERATORS = false;
// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var $b627527a82452219$var$IteratorPrototype, $b627527a82452219$var$PrototypeOfArrayIteratorPrototype, $b627527a82452219$var$arrayIterator;
/* eslint-disable es-x/no-array-prototype-keys -- safe */ if ([].keys) {
    $b627527a82452219$var$arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in $b627527a82452219$var$arrayIterator)) $b627527a82452219$var$BUGGY_SAFARI_ITERATORS = true;
    else {
        $b627527a82452219$var$PrototypeOfArrayIteratorPrototype = $fdfb6d4aa56127d8$exports($fdfb6d4aa56127d8$exports($b627527a82452219$var$arrayIterator));
        if ($b627527a82452219$var$PrototypeOfArrayIteratorPrototype !== Object.prototype) $b627527a82452219$var$IteratorPrototype = $b627527a82452219$var$PrototypeOfArrayIteratorPrototype;
    }
}
var $b627527a82452219$var$NEW_ITERATOR_PROTOTYPE = $b627527a82452219$var$IteratorPrototype == undefined || $4df01144fcc1dba0$exports(function() {
    var test = {};
    // FF44- legacy iterators case
    return $b627527a82452219$var$IteratorPrototype[$b627527a82452219$var$ITERATOR].call(test) !== test;
});
if ($b627527a82452219$var$NEW_ITERATOR_PROTOTYPE) $b627527a82452219$var$IteratorPrototype = {};
else if ($e9fb11f78bdfa6b0$exports) $b627527a82452219$var$IteratorPrototype = $53d460896fb17234$exports($b627527a82452219$var$IteratorPrototype);
// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!$4388311ee31924de$exports($b627527a82452219$var$IteratorPrototype[$b627527a82452219$var$ITERATOR])) $0982d4556954a717$exports($b627527a82452219$var$IteratorPrototype, $b627527a82452219$var$ITERATOR, function() {
    return this;
});
$b627527a82452219$exports = {
    IteratorPrototype: $b627527a82452219$var$IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: $b627527a82452219$var$BUGGY_SAFARI_ITERATORS
};


var $63df99fe99a2847b$require$IteratorPrototype = $b627527a82452219$exports.IteratorPrototype;


var $4c5b2537bf3979b5$exports = {};

var $4c5b2537bf3979b5$require$defineProperty = $6d47c3ff2c128b2f$export$2d1720544b23b823;


var $4c5b2537bf3979b5$var$TO_STRING_TAG = $b8661b52154c7859$exports('toStringTag');
$4c5b2537bf3979b5$exports = function(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !$629e60eb3f6b4a93$exports(target, $4c5b2537bf3979b5$var$TO_STRING_TAG)) $4c5b2537bf3979b5$require$defineProperty(target, $4c5b2537bf3979b5$var$TO_STRING_TAG, {
        configurable: true,
        value: TAG
    });
};



var $63df99fe99a2847b$var$returnThis = function() {
    return this;
};
$63df99fe99a2847b$exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = $53d460896fb17234$exports($63df99fe99a2847b$require$IteratorPrototype, {
        next: $330b89bb54d51273$exports(+!ENUMERABLE_NEXT, next)
    });
    $4c5b2537bf3979b5$exports(IteratorConstructor, TO_STRING_TAG, false, true);
    $c26bb85c9b651b5c$exports[TO_STRING_TAG] = $63df99fe99a2847b$var$returnThis;
    return IteratorConstructor;
};



var $b9d4fee98c616152$exports = {};


var $bff32c1107a6036a$exports = {};

var $bff32c1107a6036a$var$$String = String;
var $bff32c1107a6036a$var$$TypeError = TypeError;
$bff32c1107a6036a$exports = function(argument) {
    if (typeof argument == 'object' || $4388311ee31924de$exports(argument)) return argument;
    throw $bff32c1107a6036a$var$$TypeError("Can't set " + $bff32c1107a6036a$var$$String(argument) + ' as a prototype');
};


// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
$b9d4fee98c616152$exports = Object.setPrototypeOf || ('__proto__' in {} ? function() {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
        // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
        setter = $eb9e65426618a159$exports(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {}
    return function setPrototypeOf(O, proto) {
        $a60c42e9916a0850$exports(O);
        $bff32c1107a6036a$exports(proto);
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
    };
}() : undefined);








var $8956678ba4e8d07d$var$PROPER_FUNCTION_NAME = $fdcb760a82b8da82$exports.PROPER;
var $8956678ba4e8d07d$var$CONFIGURABLE_FUNCTION_NAME = $fdcb760a82b8da82$exports.CONFIGURABLE;
var $8956678ba4e8d07d$var$IteratorPrototype = $b627527a82452219$exports.IteratorPrototype;
var $8956678ba4e8d07d$var$BUGGY_SAFARI_ITERATORS = $b627527a82452219$exports.BUGGY_SAFARI_ITERATORS;
var $8956678ba4e8d07d$var$ITERATOR = $b8661b52154c7859$exports('iterator');
var $8956678ba4e8d07d$var$KEYS = 'keys';
var $8956678ba4e8d07d$var$VALUES = 'values';
var $8956678ba4e8d07d$var$ENTRIES = 'entries';
var $8956678ba4e8d07d$var$returnThis = function() {
    return this;
};
$8956678ba4e8d07d$exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    $63df99fe99a2847b$exports(IteratorConstructor, NAME, next);
    var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!$8956678ba4e8d07d$var$BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch(KIND){
            case $8956678ba4e8d07d$var$KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };
            case $8956678ba4e8d07d$var$VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };
            case $8956678ba4e8d07d$var$ENTRIES:
                return function entries() {
                    return new IteratorConstructor(this, KIND);
                };
        }
        return function() {
            return new IteratorConstructor(this);
        };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[$8956678ba4e8d07d$var$ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !$8956678ba4e8d07d$var$BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    // fix native
    if (anyNativeIterator) {
        CurrentIteratorPrototype = $fdfb6d4aa56127d8$exports(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!$e9fb11f78bdfa6b0$exports && $fdfb6d4aa56127d8$exports(CurrentIteratorPrototype) !== $8956678ba4e8d07d$var$IteratorPrototype) {
                if ($b9d4fee98c616152$exports) $b9d4fee98c616152$exports(CurrentIteratorPrototype, $8956678ba4e8d07d$var$IteratorPrototype);
                else if (!$4388311ee31924de$exports(CurrentIteratorPrototype[$8956678ba4e8d07d$var$ITERATOR])) $0982d4556954a717$exports(CurrentIteratorPrototype, $8956678ba4e8d07d$var$ITERATOR, $8956678ba4e8d07d$var$returnThis);
            }
            // Set @@toStringTag to native iterators
            $4c5b2537bf3979b5$exports(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if ($e9fb11f78bdfa6b0$exports) $c26bb85c9b651b5c$exports[TO_STRING_TAG] = $8956678ba4e8d07d$var$returnThis;
        }
    }
    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if ($8956678ba4e8d07d$var$PROPER_FUNCTION_NAME && DEFAULT == $8956678ba4e8d07d$var$VALUES && nativeIterator && nativeIterator.name !== $8956678ba4e8d07d$var$VALUES) {
        if (!$e9fb11f78bdfa6b0$exports && $8956678ba4e8d07d$var$CONFIGURABLE_FUNCTION_NAME) $8aee9463b6ef6805$exports(IterablePrototype, 'name', $8956678ba4e8d07d$var$VALUES);
        else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
                return $34a17b8b59341b81$exports(nativeIterator, this);
            };
        }
    }
    // export additional methods
    if (DEFAULT) {
        methods = {
            values: getIterationMethod($8956678ba4e8d07d$var$VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod($8956678ba4e8d07d$var$KEYS),
            entries: getIterationMethod($8956678ba4e8d07d$var$ENTRIES)
        };
        if (FORCED) {
            for(KEY in methods)if ($8956678ba4e8d07d$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) $0982d4556954a717$exports(IterablePrototype, KEY, methods[KEY]);
        } else $c44592570acf55b1$exports({
            target: NAME,
            proto: true,
            forced: $8956678ba4e8d07d$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    // define iterator
    if ((!$e9fb11f78bdfa6b0$exports || FORCED) && IterablePrototype[$8956678ba4e8d07d$var$ITERATOR] !== defaultIterator) $0982d4556954a717$exports(IterablePrototype, $8956678ba4e8d07d$var$ITERATOR, defaultIterator, {
        name: DEFAULT
    });
    $c26bb85c9b651b5c$exports[NAME] = defaultIterator;
    return methods;
};




var $6a63393b49a7c2ba$var$ARRAY_ITERATOR = 'Array Iterator';
var $6a63393b49a7c2ba$var$setInternalState = $845d1cdb21a3c47b$exports.set;
var $6a63393b49a7c2ba$var$getInternalState = $845d1cdb21a3c47b$exports.getterFor($6a63393b49a7c2ba$var$ARRAY_ITERATOR);
// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
$6a63393b49a7c2ba$exports = $8956678ba4e8d07d$exports(Array, 'Array', function(iterated, kind) {
    $6a63393b49a7c2ba$var$setInternalState(this, {
        type: $6a63393b49a7c2ba$var$ARRAY_ITERATOR,
        target: $6bc799c02ba4df78$exports(iterated),
        index: 0,
        kind: kind // kind
    });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function() {
    var state = $6a63393b49a7c2ba$var$getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
        state.target = undefined;
        return {
            value: undefined,
            done: true
        };
    }
    if (kind == 'keys') return {
        value: index,
        done: false
    };
    if (kind == 'values') return {
        value: target[index],
        done: false
    };
    return {
        value: [
            index,
            target[index]
        ],
        done: false
    };
}, 'values');
// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var $6a63393b49a7c2ba$var$values = $c26bb85c9b651b5c$exports.Arguments = $c26bb85c9b651b5c$exports.Array;
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
$e91b9f8fe0ce5948$exports('keys');
$e91b9f8fe0ce5948$exports('values');
$e91b9f8fe0ce5948$exports('entries');
// V8 ~ Chrome 45- bug
if (!$e9fb11f78bdfa6b0$exports && $34388eb61f7df5e9$exports && $6a63393b49a7c2ba$var$values.name !== 'values') try {
    $6a63393b49a7c2ba$require$defineProperty($6a63393b49a7c2ba$var$values, 'name', {
        value: 'values'
    });
} catch (error) {}




var $065f4fad9fa3e6f8$var$ITERATOR = $b8661b52154c7859$exports('iterator');
var $065f4fad9fa3e6f8$var$TO_STRING_TAG = $b8661b52154c7859$exports('toStringTag');
var $065f4fad9fa3e6f8$var$ArrayValues = $6a63393b49a7c2ba$exports.values;
var $065f4fad9fa3e6f8$var$handlePrototype = function(CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[$065f4fad9fa3e6f8$var$ITERATOR] !== $065f4fad9fa3e6f8$var$ArrayValues) try {
            $8aee9463b6ef6805$exports(CollectionPrototype, $065f4fad9fa3e6f8$var$ITERATOR, $065f4fad9fa3e6f8$var$ArrayValues);
        } catch (error) {
            CollectionPrototype[$065f4fad9fa3e6f8$var$ITERATOR] = $065f4fad9fa3e6f8$var$ArrayValues;
        }
        if (!CollectionPrototype[$065f4fad9fa3e6f8$var$TO_STRING_TAG]) $8aee9463b6ef6805$exports(CollectionPrototype, $065f4fad9fa3e6f8$var$TO_STRING_TAG, COLLECTION_NAME);
        if ($27f4660a6ecc872c$exports[COLLECTION_NAME]) for(var METHOD_NAME in $6a63393b49a7c2ba$exports){
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== $6a63393b49a7c2ba$exports[METHOD_NAME]) try {
                $8aee9463b6ef6805$exports(CollectionPrototype, METHOD_NAME, $6a63393b49a7c2ba$exports[METHOD_NAME]);
            } catch (error) {
                CollectionPrototype[METHOD_NAME] = $6a63393b49a7c2ba$exports[METHOD_NAME];
            }
        }
    }
};
for(var $065f4fad9fa3e6f8$var$COLLECTION_NAME in $27f4660a6ecc872c$exports)$065f4fad9fa3e6f8$var$handlePrototype($a106ca5992db6d14$exports[$065f4fad9fa3e6f8$var$COLLECTION_NAME] && $a106ca5992db6d14$exports[$065f4fad9fa3e6f8$var$COLLECTION_NAME].prototype, $065f4fad9fa3e6f8$var$COLLECTION_NAME);
$065f4fad9fa3e6f8$var$handlePrototype($eaac9e74464391e0$exports, 'DOMTokenList');


var $6f9e86a7314a35a8$exports = {};
$6f9e86a7314a35a8$exports = ":host {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n:host > .container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n:host > .container > .transition {\n  --transition-background-color: black;\n  background-color: var(--transition-background-color);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n:host > .container > .transition > .animation, :host > .container > .transition > .animation > .content {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n:host > .container > .transition > .animation > .content.fit-contain {\n  object-fit: contain;\n}\n\n:host > .container > .transition > .animation > .content.fit-cover {\n  object-fit: cover;\n}\n\n";


class $a6d3543feeeae40a$export$2e2bcd8739ae039 {
    buildExecutor(arg) {
        const unpackedArg = this.unpack(arg);
        return ()=>this.execute(unpackedArg)
        ;
    }
    constructor(state){
        this.state = state;
    }
}


function $2789f46a5bed6d32$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}



class $458703b6211e6753$export$2e2bcd8739ae039 {
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
        $2789f46a5bed6d32$export$2e2bcd8739ae039(this, "refs", new Map());
        $2789f46a5bed6d32$export$2e2bcd8739ae039(this, "typeRegistry", new Map());
        this.typeRegistry.set('image', this.preloadImage.bind(this));
        this.typeRegistry.set('video', this.preloadVideo.bind(this));
    }
}


class $fbf5537fa0b381ba$export$2e2bcd8739ae039 extends $a6d3543feeeae40a$export$2e2bcd8739ae039 {
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
        this.preloader = new $458703b6211e6753$export$2e2bcd8739ae039();
    }
}


let /* eslint-disable no-console */ $4c45f14963204b95$export$243e62d78d3b544d;
(function($4c45f14963204b95$export$243e62d78d3b544d) {
    $4c45f14963204b95$export$243e62d78d3b544d[$4c45f14963204b95$export$243e62d78d3b544d["OFF"] = 0] = "OFF";
    $4c45f14963204b95$export$243e62d78d3b544d[$4c45f14963204b95$export$243e62d78d3b544d["ERROR"] = 200] = "ERROR";
    $4c45f14963204b95$export$243e62d78d3b544d[$4c45f14963204b95$export$243e62d78d3b544d["WARN"] = 300] = "WARN";
    $4c45f14963204b95$export$243e62d78d3b544d[$4c45f14963204b95$export$243e62d78d3b544d["INFO"] = 400] = "INFO";
    $4c45f14963204b95$export$243e62d78d3b544d[$4c45f14963204b95$export$243e62d78d3b544d["DEBUG"] = 500] = "DEBUG";
    $4c45f14963204b95$export$243e62d78d3b544d[$4c45f14963204b95$export$243e62d78d3b544d["TRACE"] = 600] = "TRACE";
})($4c45f14963204b95$export$243e62d78d3b544d || ($4c45f14963204b95$export$243e62d78d3b544d = {}));
class $4c45f14963204b95$export$2e2bcd8739ae039 {
    error(...args) {
        if (this.level >= $4c45f14963204b95$export$243e62d78d3b544d.ERROR) console.error(...args);
    }
    assert(assertion, ...args) {
        if (this.level >= $4c45f14963204b95$export$243e62d78d3b544d.ERROR) console.assert(assertion, ...args);
    }
    warn(...args) {
        if (this.level >= $4c45f14963204b95$export$243e62d78d3b544d.WARN) console.warn(...args);
    }
    info(...args) {
        if (this.level >= $4c45f14963204b95$export$243e62d78d3b544d.INFO) console.info(...args);
    }
    debug(...args) {
        if (this.level >= $4c45f14963204b95$export$243e62d78d3b544d.DEBUG) console.debug(...args);
    }
    trace(...args) {
        if (this.level >= $4c45f14963204b95$export$243e62d78d3b544d.TRACE) console.trace(...args);
    }
    constructor(level = $4c45f14963204b95$export$243e62d78d3b544d.INFO){
        this.level = level;
    }
}



class $f7d6430f37d138ee$export$2e2bcd8739ae039 extends $a6d3543feeeae40a$export$2e2bcd8739ae039 {
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



class $9758246d07622c41$export$c86220c67bdb4242 {
    static create(mimetype, url, objectFit = 'cover') {
        const type = mimetype.split('/', 1)[0];
        let content;
        switch(type){
            case 'image':
                content = $9758246d07622c41$export$c86220c67bdb4242.createImage(url);
                break;
            case 'video':
                content = $9758246d07622c41$export$c86220c67bdb4242.createVideo(url);
                break;
            default:
                content = $9758246d07622c41$export$c86220c67bdb4242.createObject(mimetype, url);
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




class $e04e31996f7f4945$export$af22135957e110d7 {
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


class $b4f3f9d1f9476b48$export$2e2bcd8739ae039 {
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
        $2789f46a5bed6d32$export$2e2bcd8739ae039(this, "_isCancelled", false);
        $2789f46a5bed6d32$export$2e2bcd8739ae039(this, "_isDone", false);
        this.container = container;
        this.from = from;
        this.to = to;
        this.targetVisiblePEC = new $e04e31996f7f4945$export$af22135957e110d7();
        this.donePEC = new $e04e31996f7f4945$export$af22135957e110d7();
        // prevent uncaught exceptions in promise
        this.targetVisiblePEC.promise().catch(()=>{});
        this.donePEC.promise().catch(()=>{});
    }
}


class $e108cd95b9b75a3c$export$2e2bcd8739ae039 extends $b4f3f9d1f9476b48$export$2e2bcd8739ae039 {
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
        return (container, from, to)=>new $e108cd95b9b75a3c$export$2e2bcd8739ae039(container, from, to)
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


var $35395da95297ec97$exports = {};
$35395da95297ec97$exports = "@-webkit-keyframes transition-fade-out {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes transition-fade-out {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes transition-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.container {\n  --transition-fade-color: black;\n  --transition-fade-duration: 1s;\n  --transition-fade-duration-half: calc(var(--transition-fade-duration) / 2);\n  background-color: var(--transition-fade-color);\n}\n\n.container > .transition.fade {\n  -webkit-animation-duration: var(--transition-fade-duration-half);\n  animation-duration: var(--transition-fade-duration-half);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.container > .transition.fade.fade-out {\n  -webkit-animation-name: transition-fade-out;\n  animation-name: transition-fade-out;\n}\n\n.container > .transition.fade.fade-in {\n  -webkit-animation-name: transition-fade-in;\n  animation-name: transition-fade-in;\n  -webkit-animation-delay: var(--transition-fade-duration-half);\n  animation-delay: var(--transition-fade-duration-half);\n}\n\n";



const $7aecc1368c48873e$var$defaultOptions = {
    duration: 500,
    color: '#000'
};
class $7aecc1368c48873e$export$2e2bcd8739ae039 extends $b4f3f9d1f9476b48$export$2e2bcd8739ae039 {
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
        const unpackedOptions = $7aecc1368c48873e$export$2e2bcd8739ae039.unpack(options);
        return (container, from, to)=>new $7aecc1368c48873e$export$2e2bcd8739ae039(container, from, to, unpackedOptions)
        ;
    }
    static getStyleSheetAsString() {
        return (/*@__PURE__*/$parcel$interopDefault($35395da95297ec97$exports));
    }
    constructor(container, from, to, options){
        super(container, from, to);
        const { duration: duration , color: color  } = {
            ...$7aecc1368c48873e$var$defaultOptions,
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


var $e050ec2f2ed80c3d$exports = {};
$e050ec2f2ed80c3d$exports = "@-webkit-keyframes transition-cross-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-cross-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.container {\n  --transition-cross-fade-duration: 1s;\n}\n\n.container > .transition.cross-fade.cross-fade-in {\n  -webkit-animation-duration: var(--transition-cross-fade-duration);\n  animation-duration: var(--transition-cross-fade-duration);\n  -webkit-animation-name: transition-cross-fade-in;\n  animation-name: transition-cross-fade-in;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";



const $ef79a708f7341cfc$var$defaultOptions = {
    duration: 500
};
class $ef79a708f7341cfc$export$2e2bcd8739ae039 extends $b4f3f9d1f9476b48$export$2e2bcd8739ae039 {
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
        const unpackedOptions = $ef79a708f7341cfc$export$2e2bcd8739ae039.unpack(options);
        return (container, from, to)=>new $ef79a708f7341cfc$export$2e2bcd8739ae039(container, from, to, unpackedOptions)
        ;
    }
    static getStyleSheetAsString() {
        return (/*@__PURE__*/$parcel$interopDefault($e050ec2f2ed80c3d$exports));
    }
    constructor(container, from, to, options){
        super(container, from, to);
        const { duration: duration  } = {
            ...$ef79a708f7341cfc$var$defaultOptions,
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


/* eslint-disable import/prefer-default-export */ function $55b98f534c0d22a3$export$c2aff9e92362a9b2(root, stylesheetText, id) {
    const style = document.createElement('style');
    if (typeof id !== 'undefined') style.id = id;
    style.textContent = stylesheetText;
    const selector = "style[type='text/css']:last-of-type, style:not([type]):last-of-type";
    const lastStyleElem = root.querySelector(selector);
    if (lastStyleElem === null) root.prepend(style);
    else lastStyleElem.after(style);
}


class $73ebfb8c1418066c$export$2e2bcd8739ae039 {
    registerKnownTransitions() {
        this.register('none', $e108cd95b9b75a3c$export$2e2bcd8739ae039);
        this.register('fade', $7aecc1368c48873e$export$2e2bcd8739ae039);
        this.register('cross-fade', $ef79a708f7341cfc$export$2e2bcd8739ae039);
    }
    register(id, transitionClass) {
        if (this.transitionRegistry.has(id)) throw new Error('Transition type already registered');
        $55b98f534c0d22a3$export$c2aff9e92362a9b2(this.root, transitionClass.getStyleSheetAsString(), `transition-${id}`);
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
        $2789f46a5bed6d32$export$2e2bcd8739ae039(this, "transitionRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
}







class $6d75f85bf9a17c4a$export$2e2bcd8739ae039 {
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
        $2789f46a5bed6d32$export$2e2bcd8739ae039(this, "_isCancelled", false);
        $2789f46a5bed6d32$export$2e2bcd8739ae039(this, "_isDone", false);
        this.wrapper = wrapper;
        this.content = content;
        this.donePEC = new $e04e31996f7f4945$export$af22135957e110d7();
        // prevent uncaught exceptions in promise
        this.donePEC.promise().catch(()=>{});
    }
}


// @staticImplements<AnimationStatic<NoneAnimation, void>>()
class $d5430e564733d6b1$export$a27a75f1864d99f4 extends $6d75f85bf9a17c4a$export$2e2bcd8739ae039 {
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
        return (wrapper, content)=>new $d5430e564733d6b1$export$a27a75f1864d99f4(wrapper, content)
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


var $1978df15daedc693$exports = {};
$1978df15daedc693$exports = "@-webkit-keyframes animation-pan-zoom-animation {\n  0% {\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    top: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n    left: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n  }\n}\n\n@keyframes animation-pan-zoom-animation {\n  0% {\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    top: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n    left: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n  }\n}\n\n@-webkit-keyframes animation-pan-zoom-content {\n  0% {\n    width: 100%;\n    height: 100%;\n    object-position: 50% 50%;\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    left: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-x) ) );\n    top: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-y) ) );\n    width: calc(100% * var(--animation-pan-zoom-target-scale) );\n    height: calc(100% * var(--animation-pan-zoom-target-scale) );\n    object-position: calc(100% * var(--animation-pan-zoom-target-x) ) calc(100% * var(--animation-pan-zoom-target-y) );\n  }\n}\n\n@keyframes animation-pan-zoom-content {\n  0% {\n    width: 100%;\n    height: 100%;\n    object-position: 50% 50%;\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    left: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-x) ) );\n    top: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-y) ) );\n    width: calc(100% * var(--animation-pan-zoom-target-scale) );\n    height: calc(100% * var(--animation-pan-zoom-target-scale) );\n    object-position: calc(100% * var(--animation-pan-zoom-target-x) ) calc(100% * var(--animation-pan-zoom-target-y) );\n  }\n}\n\n.container > .transition > .animation.animation-pan-zoom {\n  --animation-pan-zoom-duration: 0s;\n  --animation-pan-zoom-target-x: .5;\n  --animation-pan-zoom-target-y: .5;\n  --animation-pan-zoom-target-scale: 1;\n  -webkit-animation-name: animation-pan-zoom-animation;\n  animation-name: animation-pan-zoom-animation;\n}\n\n.container > .transition > .animation.animation-pan-zoom, .container > .transition > .animation.animation-pan-zoom > * {\n  -webkit-animation-duration: var(--animation-pan-zoom-duration);\n  animation-duration: var(--animation-pan-zoom-duration);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.container > .transition > .animation.animation-pan-zoom > * {\n  -webkit-animation-name: animation-pan-zoom-content;\n  animation-name: animation-pan-zoom-content;\n  position: relative;\n}\n\n.sdfdsf-resizable > div {\n  --zoom-factor: 1;\n  --pan-target-x: .5;\n  --pan-target-y: .5;\n  --transition-duration: 10s;\n  width: 100%;\n  height: 100%;\n  top: calc(50% - 50% * var(--zoom-factor) );\n  left: calc(50% - 50% * var(--zoom-factor) );\n  z-index: -1;\n  transition-property: top, left, width, height;\n  position: relative;\n}\n\n.sdfdsf-resizable > div, .sdfdsf-resizable > div * {\n  transition-duration: var(--transition-duration);\n}\n\n.sdfdsf-resizable > div img {\n  left: calc(100% * var(--zoom-factor) * (.5 - var(--pan-target-x) ) );\n  top: calc(100% * var(--zoom-factor) * (.5 - var(--pan-target-y) ) );\n  width: calc(100% * var(--zoom-factor) );\n  height: calc(100% * var(--zoom-factor) );\n  object-fit: cover;\n  object-position: calc(100% * var(--pan-target-x) ) calc(100% * var(--pan-target-y) );\n  transition-property: top, left, width, height, object-position;\n  position: relative;\n}\n\n";



function $cd25f014dcaed6f1$var$setCSSPropertyIfDefined(elem, property, formatter, value) {
    if (typeof value !== 'undefined') elem.style.setProperty(property, formatter(value));
}
class $cd25f014dcaed6f1$export$2e2bcd8739ae039 extends $6d75f85bf9a17c4a$export$2e2bcd8739ae039 {
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
        const s = $cd25f014dcaed6f1$var$setCSSPropertyIfDefined;
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
        const unpackedOptions = $cd25f014dcaed6f1$export$2e2bcd8739ae039.unpack(options);
        return (wrapper, content)=>new $cd25f014dcaed6f1$export$2e2bcd8739ae039(wrapper, content, unpackedOptions)
        ;
    }
    static getStyleSheetAsString() {
        return (/*@__PURE__*/$parcel$interopDefault($1978df15daedc693$exports));
    }
    constructor(wrapper, content, options){
        super(wrapper, content);
        this.endHandler = ()=>{};
        this.cancelHandler = ()=>{};
        this.asyncInit(options).finally(()=>{});
    }
}


class $dd86276fc9270165$export$c11ebe2b2060f51f {
    registerKnownTransitions() {
        this.register('none', $d5430e564733d6b1$export$a27a75f1864d99f4);
        this.register('pan-zoom', $cd25f014dcaed6f1$export$2e2bcd8739ae039);
    }
    register(id, AnimationClass) {
        if (this.animationRegistry.has(id)) throw new Error('Animation type already registered');
        $55b98f534c0d22a3$export$c2aff9e92362a9b2(this.root, AnimationClass.getStyleSheetAsString(), `animation-${id}`);
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
        $2789f46a5bed6d32$export$2e2bcd8739ae039(this, "animationRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
}



class $fca569009709cc5f$export$2e2bcd8739ae039 extends $a6d3543feeeae40a$export$2e2bcd8739ae039 {
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
        const content = $9758246d07622c41$export$c86220c67bdb4242.create(mimetype, url, fit);
        try {
            await $9758246d07622c41$export$c86220c67bdb4242.awaitLoad(content);
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
        $9758246d07622c41$export$c86220c67bdb4242.play(content);
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
        this.transitionFactory = new $73ebfb8c1418066c$export$2e2bcd8739ae039(state.shadowRoot);
        this.animationFactory = new $dd86276fc9270165$export$c11ebe2b2060f51f(state.shadowRoot);
        this.transition = new $e108cd95b9b75a3c$export$2e2bcd8739ae039();
        this.animation = new $d5430e564733d6b1$export$a27a75f1864d99f4();
        const dummy = document.createElement('div');
        this.current = this.appendCurrentContent(dummy, 'black');
    }
}



class $3baa5d2924efdd59$export$2e2bcd8739ae039 extends HTMLElement {
    createActionRegistry() {
        const registry = new Map();
        registry.set('reload', new $f7d6430f37d138ee$export$2e2bcd8739ae039(this.state));
        registry.set('preload', new $fbf5537fa0b381ba$export$2e2bcd8739ae039(this.state));
        registry.set('show', new $fca569009709cc5f$export$2e2bcd8739ae039(this.state));
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
        $55b98f534c0d22a3$export$c2aff9e92362a9b2(shadowRoot, (/*@__PURE__*/$parcel$interopDefault($6f9e86a7314a35a8$exports)));
        const container = document.createElement('div');
        container.classList.add('container');
        shadowRoot.appendChild(container);
        this.state = {
            log: new $4c45f14963204b95$export$2e2bcd8739ae039($4c45f14963204b95$export$243e62d78d3b544d.WARN),
            shadowRoot: shadowRoot,
            container: container
        };
        this.actionRegistry = this.createActionRegistry();
    }
}
customElements.define('hilbert-gallery-viewer', $3baa5d2924efdd59$export$2e2bcd8739ae039);





//# sourceMappingURL=hilbert-gallery-viewer.mjs.map
