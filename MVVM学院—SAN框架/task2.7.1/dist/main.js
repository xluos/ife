/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/s-transition.san":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/s-transition.san ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.enter,\n.leave {\n    transition: all .5s;\n}\n\n.before-enter,\n.leave {\n    opacity: 0;\n}\n\n.enter,\n.before-leave {\n    opacity: 1;\n}\n", "", {"version":3,"sources":["/home/code/Desktop/ife/MVVM学院—SAN框架/task2.7.1/src/view/s-transition.san?6efb09be"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CA;;IAEA,oBAAA;CACA;;AAEA;;IAEA,WAAA;CACA;;AAEA;;IAEA,WAAA;CACA","file":"s-transition.san","sourcesContent":["<template>\n    <div>\n        <button on-click=\"toggle\">TOGGLE</button>\n        <span s-if=\"show\" s-transition=\"hook\">\n            Transition Layer\n        </span>\n    </div>\n</template>\n\n<script>\n    export default {\n        initData() {\n            return { show: true };\n        },\n        toggle() {\n            console.log('点击了');\n            this.data.set(\"show\",!this.data.get('show'));\n        },\n        hook: {/* your answer */\n            enter: function (el, done) {\n                // console.log('enter');\n                el.classList.add(\"before-enter\");\n                setTimeout(()=>{\n                    el.classList.add(\"enter\");\n                    done();\n                },0)\n            },\n            leave: function (el, done) {\n                // console.log('leave');\n                el.className = \"\";\n                el.classList.add(\"before-leave\");\n                el.className = \"\";\n                el.classList.add(\"leave\");\n                console.log(done);\n                setTimeout(()=>{\n                    done();\n                },500)\n            }\n        }\n    }\n</script>\n\n<style>\n    .enter,\n    .leave {\n        transition: all .5s;\n    }\n\n    .before-enter,\n    .leave {\n        opacity: 0;\n    }\n\n    .enter,\n    .before-leave {\n        opacity: 1;\n    }\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/s-transition.san":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/html-loader?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/s-transition.san ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <button on-click=\"toggle\">TOGGLE</button>\n    <span s-if=\"show\" s-transition=\"hook\">\n        Transition Layer\n    </span>\n</div>\n";

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/s-transition.san":
/*!*************************************************************************************************!*\
  !*** ./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/s-transition.san ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// <template>
//     <div>
//         <button on-click="toggle">TOGGLE</button>
//         <span s-if="show" s-transition="hook">
//             Transition Layer
//         </span>
//     </div>
// </template>
//
// <script>
/* harmony default export */ __webpack_exports__["default"] = ({
    initData() {
        return { show: true };
    },
    toggle() {
        console.log('点击了');
        this.data.set("show",!this.data.get('show'));
    },
    hook: {/* your answer */
        enter: function (el, done) {
            // console.log('enter');
            el.classList.add("before-enter");
            setTimeout(()=>{
                el.classList.add("enter");
                done();
            },0)
        },
        leave: function (el, done) {
            // console.log('leave');
            el.className = "";
            el.classList.add("before-leave");
            el.className = "";
            el.classList.add("leave");
            console.log(done);
            setTimeout(()=>{
                done();
            },500)
        }
    }
});
// </script>
//
// <style>
//     .enter,
//     .leave {
//         transition: all .5s;
//     }
//
//     .before-enter,
//     .leave {
//         opacity: 0;
//     }
//
//     .enter,
//     .before-leave {
//         opacity: 1;
//     }
// </style>
/* generated by san-loader */


/***/ }),

/***/ "./node_modules/san-router/dist/san-router.source.js":
/*!***********************************************************!*\
  !*** ./node_modules/san-router/dist/san-router.source.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = resolveURL;

var _parseUrl = __webpack_require__(1);

var _parseUrl2 = _interopRequireDefault(_parseUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * 将 URL 中相对路径部分展开
 *
 * @param {string} source 要展开的url
 * @param {string} base 当前所属环境的url
 * @return {string}
 */
function resolveURL(source, base) {
    var sourceLoc = (0, _parseUrl2['default'])(source);
    var baseLoc = (0, _parseUrl2['default'])(base);

    var sourcePath = sourceLoc.path;
    if (sourcePath.indexOf('/') === 0) {
        return source;
    }

    var sourceSegs = sourcePath.split('/');
    var baseSegs = baseLoc.path.split('/');
    baseSegs.pop();

    for (var i = 0; i < sourceSegs.length; i++) {
        var seg = sourceSegs[i];
        switch (seg) {
            case '..':
                baseSegs.pop();
                break;
            case '.':
                break;
            default:
                baseSegs.push(seg);
        }
    }

    if (baseSegs[0] !== '') {
        baseSegs.unshift('');
    }

    return baseSegs.join('/') + (sourceLoc.queryString ? '?' + sourceLoc.queryString : '');
} /**
   * san-router
   * Copyright 2017 Baidu Inc. All rights reserved.
   *
   * @file 将 URL 中相对路径部分展开
   * @author errorrik
   */

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = parseURL;
/**
 * san-router
 * Copyright 2017 Baidu Inc. All rights reserved.
 *
 * @file 解析URL
 * @author errorrik
 */

/**
 * 解析URL，返回包含path、query、queryString的对象
 *
 * @param {string} url 要解析的url
 * @return {Object}
 */
function parseURL(url) {
    var result = {
        hash: '',
        queryString: '',
        params: {},
        query: {},
        path: url
    };

    // parse hash
    var hashStart = result.path.indexOf('#');
    if (hashStart >= 0) {
        result.hash = result.path.slice(hashStart + 1);
        result.path = result.path.slice(0, hashStart);
    }

    // parse query
    var query = result.query;
    var queryStart = result.path.indexOf('?');
    if (queryStart >= 0) {
        result.queryString = result.path.slice(queryStart + 1);
        result.path = result.path.slice(0, queryStart);

        result.queryString.split('&').forEach(function (querySeg) {
            // 考虑到有可能因为未处理转义问题，
            // 导致value中存在**=**字符，因此不使用`split`函数
            var equalIndex = querySeg.indexOf('=');
            var value = '';
            if (equalIndex > 0) {
                value = querySeg.slice(equalIndex + 1);
                querySeg = querySeg.slice(0, equalIndex);
            }

            var key = decodeURIComponent(querySeg);
            value = decodeURIComponent(value);

            // 已经存在这个参数，且新的值不为空时，把原来的值变成数组
            if (query.hasOwnProperty(key)) {
                /* eslint-disable */
                query[key] = [].concat(query[key], value);
                /* eslint-disable */
            } else {
                query[key] = value;
            }
        });
    }

    return result;
}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * san-router
 * Copyright 2017 Baidu Inc. All rights reserved.
 *
 * @file 提供事件相关操作的基类
 * @author otakustay, errorrik
 */

var EventTarget = function () {
    function EventTarget() {
        _classCallCheck(this, EventTarget);
    }

    /**
     * 注册一个事件处理函数
     *
     * @param {string} type 事件的类型
     * @param {Function | boolean} fn 事件的处理函数
     */
    EventTarget.prototype.on = function on(type, fn) {
        if (typeof fn !== 'function') {
            return;
        }

        if (!this._eventListeners) {
            this._eventListeners = {};
        }

        if (!this._eventListeners[type]) {
            this._eventListeners[type] = [];
        }

        this._eventListeners[type].push(fn);
    };

    /**
     * 注销一个事件处理函数
     *
     * @param {string} type 事件的类型，如果值为`*`仅会注销通过`*`为类型注册的事件，并不会将所有事件注销
     * @param {Function} [fn] 事件的处理函数，无此参数则注销`type`指定类型的所有事件处理函数
     */


    EventTarget.prototype.un = function un(type, fn) {
        if (!this._eventListeners || !this._eventListeners[type]) {
            return;
        }

        if (!fn) {
            this._eventListeners[type] = [];
        } else {
            var listeners = this._eventListeners[type];
            var len = listeners.length;

            while (len--) {
                if (listeners[len] === fn) {
                    listeners.splice(len, 1);
                }
            }
        }
    };

    /**
     * 触发指定类型的事件
     *
     * @param {string} type 事件类型
     * @param {*} [args] 事件对象
     */


    EventTarget.prototype.fire = function fire(type, args) {
        if (!type) {
            throw new Error('No event type specified');
        }

        var listeners = this._eventListeners && this._eventListeners[type];
        if (listeners) {
            for (var i = 0; i < listeners.length; i++) {
                listeners[i](args);
            }
        }
    };

    return EventTarget;
}();

exports['default'] = EventTarget;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(6);

var _resolveUrl = __webpack_require__(0);

var _resolveUrl2 = _interopRequireDefault(_resolveUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * san-router
 * Copyright 2017 Baidu Inc. All rights reserved.
 *
 * @file 路由链接的 San 组件
 * @author errorrik
 */

exports['default'] = {
    template: '<a href="{{href}}"\n        onclick="return false;"\n        on-click="clicker($event)"\n        target="{{target}}"\n        class="{{class}}"\n        style="{{style}}"\n        >\n        <slot></slot>\n    </a>',

    clicker: function clicker(e) {
        var href = this.data.get('href');

        if (typeof href === 'string') {
            _main.router.locator.redirect(href.replace(/^#/, ''));
        }

        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    },


    computed: {
        href: function href() {
            var url = this.data.get('to');
            if (typeof url !== 'string') {
                return;
            }

            var href = (0, _resolveUrl2['default'])(url, _main.router.locator.current);
            if (_main.router.mode === 'hash') {
                href = '#' + href;
            }

            return href;
        }
    }
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _eventTarget = __webpack_require__(2);

var _eventTarget2 = _interopRequireDefault(_eventTarget);

var _resolveUrl = __webpack_require__(0);

var _resolveUrl2 = _interopRequireDefault(_resolveUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * san-router
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Baidu Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file hash 模式地址监听器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author errorrik
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 获取当前URL
 *
 * @return {string}
 */
function getLocation() {
    // Firefox下`location.hash`存在自动解码的情况，
    // 比如hash的值是**abc%3def**，
    // 在Firefox下获取会成为**abc=def**
    // 为了避免这一情况，需要从`location.href`中分解
    var index = location.href.indexOf('#');
    var url = index < 0 ? '/' : location.href.slice(index + 1) || '/';

    return url;
}

/**
 * hash 模式地址监听器
 *
 * @class
 */

var Locator = function (_EventTarget) {
    _inherits(Locator, _EventTarget);

    /**
     * 构造函数
     */
    function Locator() {
        _classCallCheck(this, Locator);

        var _this = _possibleConstructorReturn(this, _EventTarget.call(this));

        _this.current = getLocation();
        _this.referrer = '';

        _this.hashChangeHandler = function () {
            _this.redirect(getLocation());
        };
        return _this;
    }

    /**
     * 开始监听 url 变化
     */


    Locator.prototype.start = function start() {
        if (window.addEventListener) {
            window.addEventListener('hashchange', this.hashChangeHandler, false);
        }

        if (window.attachEvent) {
            window.attachEvent('onhashchange', this.hashChangeHandler);
        }
    };

    /**
     * 停止监听
     */


    Locator.prototype.stop = function stop() {
        if (window.removeEventListener) {
            window.removeEventListener('hashchange', this.hashChangeHandler, false);
        }

        if (window.detachEvent) {
            window.detachEvent('onhashchange', this.hashChangeHandler);
        }
    };

    /**
     * 重定向
     *
     * @param {string} url 重定向的地址
     * @param {Object?} options 重定向的行为配置
     * @param {boolean?} options.force 是否强制刷新
     */


    Locator.prototype.redirect = function redirect(url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { force: false };

        url = (0, _resolveUrl2['default'])(url, this.current);
        var referrer = this.current;

        var isChanged = url !== referrer;
        if (isChanged) {
            this.referrer = referrer;
            this.current = url;
            location.hash = url;
        } else {
            referrer = this.referrer;
        }

        if ((isChanged || options.force) && !options.silent) {
            this.fire('redirect', { url: url, referrer: referrer });
        }
    };

    /**
     * 刷新当前 url
     */


    Locator.prototype.reload = function reload() {
        this.redirect(this.current, { force: true });
    };

    return Locator;
}(_eventTarget2['default']);

exports['default'] = Locator;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _eventTarget = __webpack_require__(2);

var _eventTarget2 = _interopRequireDefault(_eventTarget);

var _resolveUrl = __webpack_require__(0);

var _resolveUrl2 = _interopRequireDefault(_resolveUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * san-router
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Baidu Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file html5 模式地址监听器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author errorrik
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * 获取当前URL
 *
 * @return {string}
 */
function getLocation() {
    return location.pathname + location.search;
}

/**
 * html5 模式地址监听器
 *
 * @class
 */

var Locator = function (_EventTarget) {
    _inherits(Locator, _EventTarget);

    /**
     * 构造函数
     */
    function Locator() {
        _classCallCheck(this, Locator);

        var _this = _possibleConstructorReturn(this, _EventTarget.call(this));

        _this.current = getLocation();
        _this.referrer = '';

        _this.popstateHandler = function () {
            _this.referrer = _this.current;
            _this.current = getLocation();

            _this.fire('redirect', {
                url: _this.current,
                referrer: _this.referrer
            });
        };
        return _this;
    }

    /**
     * 开始监听 url 变化
     */


    Locator.prototype.start = function start() {
        window.addEventListener('popstate', this.popstateHandler);
    };

    /**
     * 停止监听
     */


    Locator.prototype.stop = function stop() {
        window.removeEventListener('popstate', this.popstateHandler);
    };

    /**
     * 重定向
     *
     * @param {string} url 重定向的地址
     * @param {Object?} options 重定向的行为配置
     * @param {boolean?} options.force 是否强制刷新
     */


    Locator.prototype.redirect = function redirect(url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { force: false };

        url = (0, _resolveUrl2['default'])(url, this.current);
        var referrer = this.current;

        var isChanged = url !== referrer;

        if (isChanged) {
            this.referrer = referrer;
            this.current = url;

            history.pushState({}, '', url);
        }

        if ((isChanged || options.force) && !options.silent) {
            this.fire('redirect', { url: url, referrer: referrer });
        }
    };

    /**
     * 刷新当前 url
     */


    Locator.prototype.reload = function reload() {
        this.fire('redirect', {
            url: this.current,
            referrer: this.referrer
        });
    };

    return Locator;
}(_eventTarget2['default']);

exports['default'] = Locator;


Locator.isSupport = 'pushState' in window.history;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Link = exports.router = exports.Router = exports.version = undefined;

var _hash = __webpack_require__(4);

var _hash2 = _interopRequireDefault(_hash);

var _html = __webpack_require__(5);

var _html2 = _interopRequireDefault(_html);

var _parseUrl = __webpack_require__(1);

var _parseUrl2 = _interopRequireDefault(_parseUrl);

var _link = __webpack_require__(3);

var _link2 = _interopRequireDefault(_link);

var _elementSelector = __webpack_require__(7);

var _elementSelector2 = _interopRequireDefault(_elementSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * san-router
                                                                                                                                                           * Copyright 2017 Baidu Inc. All rights reserved.
                                                                                                                                                           *
                                                                                                                                                           * @file 主模块
                                                                                                                                                           * @author errorrik
                                                                                                                                                           */

var routeID = 0x5942b;
var guid = function guid() {
    return (++routeID).toString();
};

function isComponent(C) {
    return C.prototype && (C.prototype.nodeType === 5 || C.prototype._type === 'san-cmpt');
}

/**
 * 版本号
 *
 * @type {string}
 */
var version = exports.version = '1.2.0';

/**
 * 路由器类
 *
 * @class
 */

var Router = exports.Router = function () {

    /**
     * 构造函数
     *
     * @param {Object?} options 初始化参数
     * @param {string?} options.mode 路由模式，hash | html5
     */
    function Router() {
        var _this = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$mode = _ref.mode,
            mode = _ref$mode === undefined ? 'hash' : _ref$mode;

        _classCallCheck(this, Router);

        this.routes = [];
        this.routeAlives = [];
        this.listeners = [];

        /**
         * locator redirect 事件监听函数
         *
         * @param {Object} e locator事件对象
         */
        this.locatorRedirectHandler = function (e) {
            var url = (0, _parseUrl2['default'])(e.url);
            var routeItem = void 0;

            for (var _i = 0; _i < _this.routes.length; _i++) {
                var item = _this.routes[_i];
                var match = item.rule.exec(url.path);

                if (match) {
                    routeItem = item;

                    // fill params
                    var keys = item.keys || [];
                    for (var j = 1; j < match.length; j++) {
                        var key = keys[j] || j;
                        var value = match[j];
                        url.query[key] = value;
                        url.params[key] = value;
                    }

                    // fill referrer
                    url.referrer = e.referrer;
                    url.config = item.config;

                    break;
                }
            }

            var i = 0;
            var state = 1;

            /**
             * listener 事件对象
             *
             * @type {Object}
             */
            var listenerEvent = {
                hash: url.hash,
                queryString: url.queryString,
                query: url.query,
                path: url.path,
                referrer: url.referrer,
                config: url.config,
                resume: next,
                suspend: function suspend() {
                    state = 0;
                },
                stop: function stop() {
                    state = -1;
                }
            };

            /**
             * 尝试运行下一个listener
             *
             * @inner
             */
            var doNext = function doNext() {
                if (state > 0) {
                    if (i < _this.listeners.length) {
                        _this.listeners[i].call(_this, listenerEvent, url.config);
                        if (state > 0) {
                            next();
                        }
                    } else {
                        routeAction();
                    }
                }
            };

            /**
             * 运行下一个listener
             *
             * @inner
             */
            function next() {
                state = 1;
                i++;
                doNext();
            }

            /**
             * 运行路由行为
             *
             * @inner
             */
            var routeAction = function routeAction() {
                if (routeItem) {
                    _this.doRoute(routeItem, url);
                } else {
                    var len = _this.routeAlives.length;
                    while (len--) {
                        _this.routeAlives[len].component.dispose();
                        _this.routeAlives.splice(len, 1);
                    }
                }
            };

            doNext();
        };

        this.setMode(mode);
    }

    /**
     * 添加路由监听器
     *
     * @param {function(e, config)} listener 监听器
     */


    Router.prototype.listen = function listen(listener) {
        this.listeners.push(listener);
    };

    /**
     * 移除路由监听器
     *
     * @param {Function} listener 监听器
     */


    Router.prototype.unlisten = function unlisten(listener) {
        var len = this.listeners.length;
        while (len--) {
            if (this.listeners[len] === listener) {
                this.listeners.splice(len, 1);
            }
        }
    };

    /**
     * 执行路由
     *
     * @private
     * @param {Object} routeItem 路由项
     * @param {Object} e 路由信息
     */


    Router.prototype.doRoute = function doRoute(routeItem, e) {
        var _this2 = this;

        var isUpdateAlive = false;
        var len = this.routeAlives.length;

        while (len--) {
            var routeAlive = this.routeAlives[len];

            if (routeAlive.id === routeItem.id) {
                routeAlive.component.data.set('route', e);
                routeAlive.component._callHook('route');
                isUpdateAlive = true;
            } else {
                routeAlive.component.dispose();
                this.routeAlives.splice(len, 1);
            }
        }

        if (!isUpdateAlive) {
            if (routeItem.Component) {
                if (isComponent(routeItem.Component)) {
                    this.attachCmpt(routeItem, e);
                } else {
                    routeItem.Component().then(function (Cmpt) {
                        // eslint-disable-line
                        if (isComponent(Cmpt)) {
                            routeItem.Component = Cmpt;
                        } else if (Cmpt.__esModule && isComponent(Cmpt['default'])) {
                            routeItem.Component = Cmpt['default'];
                        }
                        _this2.attachCmpt(routeItem, e);
                    });
                }
            } else {
                routeItem.handler.call(this, e);
            }
        }
    };

    Router.prototype.attachCmpt = function attachCmpt(routeItem, e) {
        var component = new routeItem.Component();
        component.data.set('route', e);
        component._callHook('route');

        var target = routeItem.target;
        var targetEl = (0, _elementSelector2['default'])(target);

        if (!targetEl) {
            throw new Error('[SAN-ROUTER ERROR] ' + 'Attach failed, target element "' + routeItem.target + '" is not found.');
        }

        component.attach(targetEl);

        this.routeAlives.push({
            component: component,
            id: routeItem.id
        });
    };

    /**
     * 添加路由项
     * 当规则匹配时，路由将优先将Component渲染到target中。如果没有包含Component，则执行handler函数
     *
     * @private
     * @param {Object} config 路由项配置
     * @param {string|RegExp} config.rule 路由规则
     * @param {Function?} config.handler 路由函数
     * @param {Function?} config.Component 路由组件
     * @param {string} config.target 路由组件要渲染到的目标位置
     * @return {Object} san-router 实例
     */


    Router.prototype.add = function add(config) {
        var rule = config.rule,
            handler = config.handler,
            _config$target = config.target,
            target = _config$target === undefined ? '#main' : _config$target,
            Component = config.Component;

        var keys = [''];

        if (typeof rule === 'string') {
            // 没用path-to-regexp，暂时不提供这么多功能支持
            var regText = rule.replace(/\/:([a-z0-9_-]+)(?=\/|$)/ig, function (match, key) {
                keys.push(key);
                return '/([^/\\s]+)';
            });

            rule = new RegExp('^' + regText + '$', 'i');
        }

        if (!(rule instanceof RegExp)) {
            throw new Error('[SAN-ROUTER ERROR] Rule must be string or RegExp!');
        }

        var id = guid();
        this.routes.push({ id: id, rule: rule, handler: handler, keys: keys, target: target, Component: Component, config: config });

        return this;
    };

    /**
     * 启动路由功能
     *
     * @return {Object} san-router 实例
     */


    Router.prototype.start = function start() {
        if (!this.isStarted) {
            this.isStarted = true;
            this.locator.on('redirect', this.locatorRedirectHandler);
            this.locator.start();
            this.locator.reload();
        }

        return this;
    };

    /**
     * 停止路由功能
     *
     * @return {Object} san-router 实例
     */


    Router.prototype.stop = function stop() {
        this.locator.un('redirect', this.locatorRedirectHandler);
        this.locator.stop();
        this.isStarted = false;

        return this;
    };

    /**
     * 设置路由模式
     *
     * @param {string} mode 路由模式，hash | html5
     * @return {Object} san-router 实例
     */


    Router.prototype.setMode = function setMode(mode) {
        mode = mode.toLowerCase();
        if (this.mode === mode) {
            return;
        }

        this.mode = mode;

        var restart = false;
        if (this.isStarted) {
            this.stop();
            restart = true;
        }

        switch (mode) {
            case 'hash':
                this.locator = new _hash2['default']();
                break;
            case 'html5':
                this.locator = new _html2['default']();
        }

        if (restart) {
            this.start();
        }

        return this;
    };

    return Router;
}();

/**
 * 默认的路由器实例
 *
 * @type {Router}
 */


var router = exports.router = new Router();

/**
 * 路由链接的 San 组件
 *
 * @class
 */
exports.Link = _link2['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = elementSelector;
/*
*
* @file 选择器
* @author vincent lau/413893093@qq.com
*/

/**
 * 元素选择器
 *
 * @param {string|Element} selector 选择器
 * @returns {Element}
 */
function elementSelector(selector) {
    switch (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) {
        case 'object':
            return selector;

        case 'string':
            if (document.querySelector) {
                return document.querySelector(selector);
            }

            return document.getElementById(selector.replace(/#/i, ''));
    }
}

/***/ }
/******/ ]);
});

/***/ }),

/***/ "./node_modules/san/dist/san.dev.js":
/*!******************************************!*\
  !*** ./node_modules/san/dist/san.dev.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {/**
 * San
 * Copyright 2016 Baidu Inc. All rights reserved.
 *
 * @file 主文件
 * @author errorrik(errorrik@gmail.com)
 *         otakustay(otakustay@gmail.com)
 *         junmer(junmer@foxmail.com)
 */

(function (root) {
    // 人工调整打包代码顺序，通过注释手工写一些依赖
//     // require('./util/guid');
//     // require('./util/empty');
//     // require('./util/extend');
//     // require('./util/inherits');
//     // require('./util/each');
//     // require('./util/contains');
//     // require('./util/bind');
//     // require('./browser/on');
//     // require('./browser/un');
//     // require('./browser/svg-tags');
//     // require('./browser/create-el');
//     // require('./browser/remove-el');
//     // require('./util/next-tick');
//     // require('./browser/ie');
//     // require('./browser/ie-old-than-9');
//     // require('./browser/input-event-compatible');
//     // require('./browser/auto-close-tags');
//     // require('./util/data-types.js');
//     // require('./util/create-data-types-checker.js');
//     // require('./parser/walker');
//     // require('./parser/create-a-node');
//     // require('./parser/parse-template');
//     // require('./runtime/change-expr-compare');
//     // require('./runtime/data-change-type');
//     // require('./runtime/default-filters');
//     // require('./view/life-cycle');
//     // require('./view/node-type');
//     // require('./view/get-prop-handler');
//     // require('./view/is-data-change-by-element');
//     // require('./view/event-declaration-listener');
//     // require('./view/create-node');


    /**
 * @file 生成唯一id
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 唯一id的起始值
 *
 * @inner
 * @type {number}
 */
var guidIndex = 1;

/**
 * 唯一id的前缀
 *
 * @inner
 * @type {string}
 */
var guidPrefix = (new Date()).getTime().toString(16).slice(8);

/**
 * 获取唯一id
 *
 * @inner
 * @return {string} 唯一id
 */
function guid() {
    return '_' + guidPrefix + (guidIndex++);
}

// exports = module.exports = guid;


/**
 * @file 空函数
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 啥都不干
 */
function empty() {}

// exports = module.exports = empty;


/**
 * @file 属性拷贝
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 对象属性拷贝
 *
 * @param {Object} target 目标对象
 * @param {Object} source 源对象
 * @return {Object} 返回目标对象
 */
function extend(target, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            var value = source[key];
            if (typeof value !== 'undefined') {
                target[key] = value;
            }
        }
    }

    return target;
}

// exports = module.exports = extend;


/**
 * @file 构建类之间的继承关系
 * @author errorrik(errorrik@gmail.com)
 */

// var extend = require('./extend');

/**
 * 构建类之间的继承关系
 *
 * @param {Function} subClass 子类函数
 * @param {Function} superClass 父类函数
 */
function inherits(subClass, superClass) {
    /* jshint -W054 */
    var subClassProto = subClass.prototype;
    var F = new Function();
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    extend(subClass.prototype, subClassProto);
    /* jshint +W054 */
}

// exports = module.exports = inherits;


/**
 * @file 遍历数组
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 遍历数组集合
 *
 * @param {Array} array 数组源
 * @param {function(Any,number):boolean} iterator 遍历函数
 */
function each(array, iterator) {
    if (array && array.length > 0) {
        for (var i = 0, l = array.length; i < l; i++) {
            if (iterator(array[i], i) === false) {
                break;
            }
        }
    }
}

// exports = module.exports = each;


/**
 * @file 判断数组中是否包含某项
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('./each');

/**
 * 判断数组中是否包含某项
 *
 * @param {Array} array 数组
 * @param {*} value 包含的项
 * @return {boolean}
 */
function contains(array, value) {
    var result = false;
    each(array, function (item) {
        result = item === value;
        return !result;
    });

    return result;
}

// exports = module.exports = contains;


/**
 * @file bind函数
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * Function.prototype.bind 方法的兼容性封装
 *
 * @param {Function} func 要bind的函数
 * @param {Object} thisArg this指向对象
 * @param {...*} args 预设的初始参数
 * @return {Function}
 */
function bind(func, thisArg) {
    var nativeBind = Function.prototype.bind;
    var slice = Array.prototype.slice;
    // #[begin] allua
    if (nativeBind && func.bind === nativeBind) {
    // #[end]
        return nativeBind.apply(func, slice.call(arguments, 1));
    // #[begin] allua
    }

    var args = slice.call(arguments, 2);
    return function () {
        return func.apply(thisArg, args.concat(slice.call(arguments)));
    };
    // #[end]
}

// exports = module.exports = bind;


/**
 * @file DOM 事件挂载
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * DOM 事件挂载
 *
 * @inner
 * @param {HTMLElement} el DOM元素
 * @param {string} eventName 事件名
 * @param {Function} listener 监听函数
 * @param {boolean} capture 是否是捕获阶段
 */
function on(el, eventName, listener, capture) {
    // #[begin] allua
    if (el.addEventListener) {
    // #[end]
        el.addEventListener(eventName, listener, capture);
    // #[begin] allua
    }
    else {
        el.attachEvent('on' + eventName, listener);
    }
    // #[end]
}

// exports = module.exports = on;


/**
 * @file DOM 事件卸载
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * DOM 事件卸载
 *
 * @inner
 * @param {HTMLElement} el DOM元素
 * @param {string} eventName 事件名
 * @param {Function} listener 监听函数
 * @param {boolean} capture 是否是捕获阶段
 */
function un(el, eventName, listener, capture) {
    // #[begin] allua
    if (el.addEventListener) {
    // #[end]
        el.removeEventListener(eventName, listener, capture);
    // #[begin] allua
    }
    else {
        el.detachEvent('on' + eventName, listener);
    }
    // #[end]
}

// exports = module.exports = un;


/**
 * @file 将字符串逗号切分返回对象
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');

/**
 * 将字符串逗号切分返回对象
 *
 * @param {string} source 源字符串
 * @return {Object}
 */
function splitStr2Obj(source) {
    var result = {};
    each(
        source.split(','),
        function (key) {
            result[key] = 1;
        }
    );
    return result;
}

// exports = module.exports = splitStr2Obj;


/**
 * @file SVG标签表
 * @author errorrik(errorrik@gmail.com)
 */

// var splitStr2Obj = require('../util/split-str-2-obj');

/**
 * svgTags
 *
 * @see https://www.w3.org/TR/SVG/svgdtd.html 只取常用
 * @type {Object}
 */
var svgTags = splitStr2Obj(''
    // structure
    + 'svg,g,defs,desc,metadata,symbol,use,'
    // image & shape
    + 'image,path,rect,circle,line,ellipse,polyline,polygon,'
    // text
    + 'text,tspan,tref,textpath,'
    // other
    + 'marker,pattern,clippath,mask,filter,cursor,view,animate,'
    // font
    + 'font,font-face,glyph,missing-glyph');

// exports = module.exports = svgTags;


/**
 * @file DOM创建
 * @author errorrik(errorrik@gmail.com)
 */

// var svgTags = require('./svg-tags');

/**
 * 创建 DOM 元素
 *
 * @param  {string} tagName tagName
 * @return {HTMLElement}
 */
function createEl(tagName) {
    if (svgTags[tagName]) {
        return document.createElementNS('http://www.w3.org/2000/svg', tagName);
    }

    return document.createElement(tagName);
}

// exports = module.exports = createEl;


/**
 * @file 移除DOM
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 将 DOM 从页面中移除
 *
 * @param {HTMLElement} el DOM元素
 */
function removeEl(el) {
    if (el && el.parentNode) {
        el.parentNode.removeChild(el);
    }
}

// exports = module.exports = removeEl;


/**
 * @file 在下一个时间周期运行任务
 * @author errorrik(errorrik@gmail.com)
 */

// 该方法参照了vue2.5.0的实现，感谢vue团队
// SEE: https://github.com/vuejs/vue/blob/0948d999f2fddf9f90991956493f976273c5da1f/src/core/util/env.js#L68


// var bind = require('./bind');

/**
 * 下一个周期要执行的任务列表
 *
 * @inner
 * @type {Array}
 */
var nextTasks = [];

/**
 * 执行下一个周期任务的函数
 *
 * @inner
 * @type {Function}
 */
var nextHandler;

/**
 * 浏览器是否支持原生Promise
 * 对Promise做判断，是为了禁用一些不严谨的Promise的polyfill
 *
 * @inner
 * @type {boolean}
 */
var isNativePromise = typeof Promise === 'function' && /native code/.test(Promise);

/**
 * 在下一个时间周期运行任务
 *
 * @inner
 * @param {Function} fn 要运行的任务函数
 * @param {Object=} thisArg this指向对象
 */
function nextTick(fn, thisArg) {
    if (thisArg) {
        fn = bind(fn, thisArg);
    }
    nextTasks.push(fn);

    if (nextHandler) {
        return;
    }

    nextHandler = function () {
        var tasks = nextTasks.slice(0);
        nextTasks = [];
        nextHandler = null;

        for (var i = 0, l = tasks.length; i < l; i++) {
            tasks[i]();
        }
    };

    // 非标准方法，但是此方法非常吻合要求。
    if (typeof setImmediate === 'function') {
        setImmediate(nextHandler);
    }
    // 用MessageChannel去做setImmediate的polyfill
    // 原理是将新的message事件加入到原有的dom events之后
    else if (typeof MessageChannel === 'function') {
        var channel = new MessageChannel();
        var port = channel.port2;
        channel.port1.onmessage = nextHandler;
        port.postMessage(1);
    }
    // for native app
    else if (isNativePromise) {
        Promise.resolve().then(nextHandler);
    }
    else {
        setTimeout(nextHandler, 0);
    }
}

// exports = module.exports = nextTick;


/**
 * @file ie版本号
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 从userAgent中ie版本号的匹配信息
 *
 * @type {Array}
 */
var ieVersionMatch = typeof navigator !== 'undefined'
    && navigator.userAgent.match(/msie\s*([0-9]+)/i);

/**
 * ie版本号，非ie时为0
 *
 * @type {number}
 */
var ie = ieVersionMatch ? ieVersionMatch[1] - 0 : 0;

// exports = module.exports = ie;


/**
 * @file 是否 IE 并且小于 9
 * @author errorrik(errorrik@gmail.com)
 */

// var ie = require('./ie');

// HACK:
// 1. IE8下，设置innerHTML时如果以html comment开头，comment会被自动滤掉
//    为了保证stump存在，需要设置完html后，createComment并appendChild/insertBefore
// 2. IE8下，innerHTML还不支持custom element，所以需要用div替代，不用createElement
// 3. 虽然IE8已经优化了字符串+连接，碎片化连接性能不再退化
//    但是由于上面多个兼容场景都用 < 9 判断，所以字符串连接也沿用
//    所以结果是IE8下字符串连接用的是数组join的方式

// #[begin] allua
/**
 * 是否 IE 并且小于 9
 */
var ieOldThan9 = ie && ie < 9;
// #[end]

// exports = module.exports = ieOldThan9;


/**
 * @file DOM 事件挂载
 * @author dafrok(o.o@mug.dog)
 */

/**
 * DOM 事件挂载
 *
 * @inner
 * @param {HTMLElement} el DOM元素
 * @param {string} eventName 事件名
 */
function trigger(el, eventName) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, true);
    el.dispatchEvent(event);
}

// exports = module.exports = trigger;


/**
 * @file 解决 IE9 在表单元素中删除字符时不触发事件的问题
 * @author dafrok(o.o@mug.dog)
 */

// var ie = require('./ie');
// var on = require('./on');
// var trigger = require('./trigger');

// #[begin] allua
if (ie === 9) {
    on(document, 'selectionchange', function () {
        var el = document.activeElement;
        if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
            trigger(el, 'input');
        }
    });
}
// #[end]


/**
 * @file 自闭合标签表
 * @author errorrik(errorrik@gmail.com)
 */

// var splitStr2Obj = require('../util/split-str-2-obj');

/**
 * 自闭合标签列表
 *
 * @type {Object}
 */
var autoCloseTags = splitStr2Obj('area,base,br,col,embed,hr,img,input,keygen,param,source,track,wbr');

// exports = module.exports = autoCloseTags;


/**
 * @file data types
 * @author leon <ludafa@outlook.com>
 */

// var bind = require('./bind');
// var empty = require('./empty');
// var extend = require('./extend');

// #[begin] error
var ANONYMOUS_CLASS_NAME = '<<anonymous>>';

/**
 * 获取精确的类型
 *
 * @NOTE 如果 obj 是一个 DOMElement，我们会返回 `element`；
 *
 * @param  {*} obj 目标
 * @return {string}
 */
function getDataType(obj) {

    if (obj && obj.nodeType === 1) {
        return 'element';
    }

    return Object.prototype.toString
        .call(obj)
        .slice(8, -1)
        .toLowerCase();
}
// #[end]

/**
 * 创建链式的数据类型校验器
 *
 * @param  {Function} validate 真正的校验器
 * @return {Function}
 */
function createChainableChecker(validate) {
    var chainedChecker = function () {};
    chainedChecker.isRequired = empty;

    // 只在 error 功能启用时才有实际上的 dataTypes 检测
    // #[begin] error
    var checkType = function (isRequired, data, dataName, componentName, fullDataName) {

        var dataValue = data[dataName];
        var dataType = getDataType(dataValue);

        componentName = componentName || ANONYMOUS_CLASS_NAME;

        // 如果是 null 或 undefined，那么要提前返回啦
        if (dataValue == null) {
            // 是 required 就报错
            if (isRequired) {
                throw new Error('[SAN ERROR] '
                    + 'The `' + dataName + '` '
                    + 'is marked as required in `' + componentName + '`, '
                    + 'but its value is ' + dataType
                );
            }
            // 不是 required，那就是 ok 的
            return;
        }

        validate(data, dataName, componentName, fullDataName);

    };

    chainedChecker = bind(checkType, null, false);
    chainedChecker.isRequired = bind(checkType, null, true);
    // #[end]



    return chainedChecker;

}

// #[begin] error
/**
 * 生成主要类型数据校验器
 *
 * @param  {string} type 主类型
 * @return {Function}
 */
function createPrimaryTypeChecker(type) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        var dataValue = data[dataName];
        var dataType = getDataType(dataValue);

        if (dataType !== type) {
            throw new Error('[SAN ERROR] '
                + 'Invalid ' + componentName + ' data `' + fullDataName + '` of type'
                + '(' + dataType + ' supplied to ' + componentName + ', '
                + 'expected ' + type + ')'
            );
        }

    });

}



/**
 * 生成 arrayOf 校验器
 *
 * @param  {Function} arrayItemChecker 数组中每项数据的校验器
 * @return {Function}
 */
function createArrayOfChecker(arrayItemChecker) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        if (typeof arrayItemChecker !== 'function') {
            throw new Error('[SAN ERROR] '
                + 'Data `' + dataName + '` of `' + componentName + '` has invalid '
                + 'DataType notation inside `arrayOf`, expected `function`'
            );
        }

        var dataValue = data[dataName];
        var dataType = getDataType(dataValue);

        if (dataType !== 'array') {
            throw new Error('[SAN ERROR] '
                + 'Invalid ' + componentName + ' data `' + fullDataName + '` of type'
                + '(' + dataType + ' supplied to ' + componentName + ', '
                + 'expected array)'
            );
        }

        for (var i = 0, len = dataValue.length; i < len; i++) {
            arrayItemChecker(dataValue, i, componentName, fullDataName + '[' + i + ']');
        }

    });

}

/**
 * 生成 instanceOf 检测器
 *
 * @param  {Function|Class} expectedClass 期待的类
 * @return {Function}
 */
function createInstanceOfChecker(expectedClass) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        var dataValue = data[dataName];

        if (dataValue instanceof expectedClass) {
            return;
        }

        var dataValueClassName = dataValue.constructor && dataValue.constructor.name
            ? dataValue.constructor.name
            : ANONYMOUS_CLASS_NAME;

        var expectedClassName = expectedClass.name || ANONYMOUS_CLASS_NAME;

        throw new Error('[SAN ERROR] '
            + 'Invalid ' + componentName + ' data `' + fullDataName + '` of type'
            + '(' + dataValueClassName + ' supplied to ' + componentName + ', '
            + 'expected instance of ' + expectedClassName + ')'
        );


    });

}

/**
 * 生成 shape 校验器
 *
 * @param  {Object} shapeTypes shape 校验规则
 * @return {Function}
 */
function createShapeChecker(shapeTypes) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        if (getDataType(shapeTypes) !== 'object') {
            throw new Error('[SAN ERROR] '
                + 'Data `' + fullDataName + '` of `' + componentName + '` has invalid '
                + 'DataType notation inside `shape`, expected `object`'
            );
        }

        var dataValue = data[dataName];
        var dataType = getDataType(dataValue);

        if (dataType !== 'object') {
            throw new Error('[SAN ERROR] '
                + 'Invalid ' + componentName + ' data `' + fullDataName + '` of type'
                + '(' + dataType + ' supplied to ' + componentName + ', '
                + 'expected object)'
            );
        }

        for (var shapeKeyName in shapeTypes) {
            if (shapeTypes.hasOwnProperty(shapeKeyName)) {
                var checker = shapeTypes[shapeKeyName];
                if (typeof checker === 'function') {
                    checker(dataValue, shapeKeyName, componentName, fullDataName + '.' + shapeKeyName);
                }
            }
        }

    });

}

/**
 * 生成 oneOf 校验器
 *
 * @param  {Array} expectedEnumValues 期待的枚举值
 * @return {Function}
 */
function createOneOfChecker(expectedEnumValues) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        if (getDataType(expectedEnumValues) !== 'array') {
            throw new Error('[SAN ERROR] '
                + 'Data `' + fullDataName + '` of `' + componentName + '` has invalid '
                + 'DataType notation inside `oneOf`, array is expected.'
            );
        }

        var dataValue = data[dataName];

        for (var i = 0, len = expectedEnumValues.length; i < len; i++) {
            if (dataValue === expectedEnumValues[i]) {
                return;
            }
        }

        throw new Error('[SAN ERROR] '
            + 'Invalid ' + componentName + ' data `' + fullDataName + '` of value'
            + '(`' + dataValue + '` supplied to ' + componentName + ', '
            + 'expected one of ' + expectedEnumValues.join(',') + ')'
        );

    });

}

/**
 * 生成 oneOfType 校验器
 *
 * @param  {Array<Function>} expectedEnumOfTypeValues 期待的枚举类型
 * @return {Function}
 */
function createOneOfTypeChecker(expectedEnumOfTypeValues) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        if (getDataType(expectedEnumOfTypeValues) !== 'array') {
            throw new Error('[SAN ERROR] '
                + 'Data `' + dataName + '` of `' + componentName + '` has invalid '
                + 'DataType notation inside `oneOf`, array is expected.'
            );
        }

        var dataValue = data[dataName];

        for (var i = 0, len = expectedEnumOfTypeValues.length; i < len; i++) {

            var checker = expectedEnumOfTypeValues[i];

            if (typeof checker !== 'function') {
                continue;
            }

            try {
                checker(data, dataName, componentName, fullDataName);
                // 如果 checker 完成校验没报错，那就返回了
                return;
            }
            catch (e) {
                // 如果有错误，那么应该把错误吞掉
            }

        }

        // 所有的可接受 type 都失败了，才丢一个异常
        throw new Error('[SAN ERROR] '
            + 'Invalid ' + componentName + ' data `' + dataName + '` of value'
            + '(`' + dataValue + '` supplied to ' + componentName + ')'
        );

    });

}

/**
 * 生成 objectOf 校验器
 *
 * @param  {Function} typeChecker 对象属性值校验器
 * @return {Function}
 */
function createObjectOfChecker(typeChecker) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName) {

        if (typeof typeChecker !== 'function') {
            throw new Error('[SAN ERROR] '
                + 'Data `' + dataName + '` of `' + componentName + '` has invalid '
                + 'DataType notation inside `objectOf`, expected function'
            );
        }

        var dataValue = data[dataName];
        var dataType = getDataType(dataValue);

        if (dataType !== 'object') {
            throw new Error('[SAN ERROR] '
                + 'Invalid ' + componentName + ' data `' + dataName + '` of type'
                + '(' + dataType + ' supplied to ' + componentName + ', '
                + 'expected object)'
            );
        }

        for (var dataKeyName in dataValue) {
            if (dataValue.hasOwnProperty(dataKeyName)) {
                typeChecker(
                    dataValue,
                    dataKeyName,
                    componentName,
                    fullDataName + '.' + dataKeyName
                );
            }
        }


    });

}

/**
 * 生成 exact 校验器
 *
 * @param  {Object} shapeTypes object 形态定义
 * @return {Function}
 */
function createExactChecker(shapeTypes) {

    return createChainableChecker(function (data, dataName, componentName, fullDataName, secret) {

        if (getDataType(shapeTypes) !== 'object') {
            throw new Error('[SAN ERROR] '
                + 'Data `' + dataName + '` of `' + componentName + '` has invalid '
                + 'DataType notation inside `exact`'
            );
        }

        var dataValue = data[dataName];
        var dataValueType = getDataType(dataValue);

        if (dataValueType !== 'object') {
            throw new Error('[SAN ERROR] '
                + 'Invalid data `' + fullDataName + '` of type `' + dataValueType + '`'
                + '(supplied to ' + componentName + ', expected `object`)'
            );
        }

        var allKeys = {};

        // 先合入 shapeTypes
        extend(allKeys, shapeTypes);
        // 再合入 dataValue
        extend(allKeys, dataValue);
        // 保证 allKeys 的类型正确

        for (var key in allKeys) {
            if (allKeys.hasOwnProperty(key)) {
                var checker = shapeTypes[key];

                // dataValue 中有一个多余的数据项
                if (!checker) {
                    throw new Error('[SAN ERROR] '
                        + 'Invalid data `' + fullDataName + '` key `' + key + '` '
                        + 'supplied to `' + componentName + '`. '
                        + '(`' + key + '` is not defined in `DataTypes.exact`)'
                    );
                }

                if (!(key in dataValue)) {
                    throw new Error('[SAN ERROR] '
                        + 'Invalid data `' + fullDataName + '` key `' + key + '` '
                        + 'supplied to `' + componentName + '`. '
                        + '(`' + key + '` is marked `required` in `DataTypes.exact`)'
                    );
                }

                checker(
                    dataValue,
                    key,
                    componentName,
                    fullDataName + '.' + key,
                    secret
                );

            }
        }

    });

}
// #[end]



/* eslint-disable fecs-valid-var-jsdoc */
var DataTypes = {
    array: createChainableChecker(empty),
    object: createChainableChecker(empty),
    func: createChainableChecker(empty),
    string: createChainableChecker(empty),
    number: createChainableChecker(empty),
    bool: createChainableChecker(empty),
    symbol: createChainableChecker(empty),
    any: createChainableChecker,
    arrayOf: createChainableChecker,
    instanceOf: createChainableChecker,
    shape: createChainableChecker,
    oneOf: createChainableChecker,
    oneOfType: createChainableChecker,
    objectOf: createChainableChecker,
    exact: createChainableChecker
};

// #[begin] error
DataTypes = {

    any: createChainableChecker(empty),

    // 类型检测
    array: createPrimaryTypeChecker('array'),
    object: createPrimaryTypeChecker('object'),
    func: createPrimaryTypeChecker('function'),
    string: createPrimaryTypeChecker('string'),
    number: createPrimaryTypeChecker('number'),
    bool: createPrimaryTypeChecker('boolean'),
    symbol: createPrimaryTypeChecker('symbol'),

    // 复合类型检测
    arrayOf: createArrayOfChecker,
    instanceOf: createInstanceOfChecker,
    shape: createShapeChecker,
    oneOf: createOneOfChecker,
    oneOfType: createOneOfTypeChecker,
    objectOf: createObjectOfChecker,
    exact: createExactChecker

};
/* eslint-enable fecs-valid-var-jsdoc */
// #[end]


// module.exports = DataTypes;


/**
 * @file 创建数据检测函数
 * @author leon<ludafa@outlook.com>
 */


// #[begin] error

/**
 * 创建数据检测函数
 *
 * @param  {Object} dataTypes     数据格式
 * @param  {string} componentName 组件名
 * @return {Function}
 */
function createDataTypesChecker(dataTypes, componentName) {

    /**
     * 校验 data 是否满足 data types 的格式
     *
     * @param  {*} data 数据
     */
    return function (data) {

        for (var dataTypeName in dataTypes) {

            if (dataTypes.hasOwnProperty(dataTypeName)) {

                var dataTypeChecker = dataTypes[dataTypeName];

                if (typeof dataTypeChecker !== 'function') {
                    throw new Error('[SAN ERROR] '
                        + componentName + ':' + dataTypeName + ' is invalid; '
                        + 'it must be a function, usually from san.DataTypes'
                    );
                }

                dataTypeChecker(
                    data,
                    dataTypeName,
                    componentName,
                    dataTypeName
                );


            }
        }

    };

}

// #[end]

// module.exports = createDataTypesChecker;


/**
 * @file 字符串源码读取类
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 字符串源码读取类，用于模板字符串解析过程
 *
 * @class
 * @param {string} source 要读取的字符串
 */
function Walker(source) {
    this.source = source;
    this.len = this.source.length;
    this.index = 0;
}

/**
 * 获取当前字符码
 *
 * @return {number}
 */
Walker.prototype.currentCode = function () {
    return this.charCode(this.index);
};

/**
 * 截取字符串片段
 *
 * @param {number} start 起始位置
 * @param {number} end 结束位置
 * @return {string}
 */
Walker.prototype.cut = function (start, end) {
    return this.source.slice(start, end);
};

/**
 * 向前读取字符
 *
 * @param {number} distance 读取字符数
 */
Walker.prototype.go = function (distance) {
    this.index += distance;
};

/**
 * 读取下一个字符，返回下一个字符的 code
 *
 * @return {number}
 */
Walker.prototype.nextCode = function () {
    this.go(1);
    return this.currentCode();
};

/**
 * 获取相应位置字符的 code
 *
 * @param {number} index 字符位置
 * @return {number}
 */
Walker.prototype.charCode = function (index) {
    return this.source.charCodeAt(index);
};

/**
 * 向前读取字符，直到遇到指定字符再停止
 *
 * @param {number=} charCode 指定字符的code
 * @return {boolean} 当指定字符时，返回是否碰到指定的字符
 */
Walker.prototype.goUntil = function (charCode) {
    var code;
    while (this.index < this.len && (code = this.currentCode())) {
        switch (code) {
            case 32:
            case 9:
                this.index++;
                break;
            default:
                if (code === charCode) {
                    this.index++;
                    return 1;
                }
                return;
        }
    }
};

/**
 * 向前读取符合规则的字符片段，并返回规则匹配结果
 *
 * @param {RegExp} reg 字符片段的正则表达式
 * @return {Array}
 */
Walker.prototype.match = function (reg) {
    reg.lastIndex = this.index;

    var match = reg.exec(this.source);
    if (match) {
        this.index = reg.lastIndex;
    }

    return match;
};

// exports = module.exports = Walker;



/**
 * @file 模板解析生成的抽象节点
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 创建模板解析生成的抽象节点
 *
 * @param {Object=} options 节点参数
 * @param {string=} options.tagName 标签名
 * @param {ANode=} options.parent 父节点
 * @param {boolean=} options.textExpr 文本节点表达式对象
 * @return {Object}
 */
function createANode(options) {
    options = options || {};

    if (!options.textExpr) {
        options.directives = options.directives || {};
        options.props = options.props || [];
        options.events = options.events || [];
        options.children = options.children || [];
    }

    return options;
}

// exports = module.exports = createANode;


/**
 * @file 把 kebab case 字符串转换成 camel case
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 把 kebab case 字符串转换成 camel case
 *
 * @param {string} source 源字符串
 * @return {string}
 */
function kebab2camel(source) {
    return source.replace(/-([a-z])/g, function (match, alpha) {
        return alpha.toUpperCase();
    });
}

// exports = module.exports = kebab2camel;


/**
 * @file 表达式类型
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 表达式类型
 *
 * @const
 * @type {Object}
 */
var ExprType = {
    STRING: 1,
    NUMBER: 2,
    BOOL: 3,
    ACCESSOR: 4,
    INTERP: 5,
    CALL: 6,
    TEXT: 7,
    BINARY: 8,
    UNARY: 9,
    TERTIARY: 10
};

// exports = module.exports = ExprType;


/**
 * @file 创建访问表达式对象
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');

/**
 * 创建访问表达式对象
 *
 * @param {Array} paths 访问路径
 * @return {Object}
 */
function createAccessor(paths) {
    return {
        type: ExprType.ACCESSOR,
        paths: paths
    };
}

// exports = module.exports = createAccessor;


/**
 * @file 读取字符串
 * @author errorrik(errorrik@gmail.com)
 */


// var ExprType = require('./expr-type');

/**
 * 读取字符串
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readString(walker) {
    var startCode = walker.currentCode();
    var startIndex = walker.index;
    var charCode;

    walkLoop: while ((charCode = walker.nextCode())) {
        switch (charCode) {
            case 92: // \
                walker.go(1);
                break;
            case startCode:
                walker.go(1);
                break walkLoop;
        }
    }

    var literal = walker.cut(startIndex, walker.index);
    return {
        type: ExprType.STRING,
        value: (new Function('return ' + literal))()
    };
}

// exports = module.exports = readString;


/**
 * @file 读取数字
 * @author errorrik(errorrik@gmail.com)
 */


// var ExprType = require('./expr-type');

/**
 * 读取数字
 *
 * @inner
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readNumber(walker) {
    var match = walker.match(/\s*(-?[0-9]+(\.[0-9]+)?)/g);

    return {
        type: ExprType.NUMBER,
        value: match[1] - 0
    };
}

// exports = module.exports = readNumber;


/**
 * @file 读取ident
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 读取ident
 *
 * @inner
 * @param {Walker} walker 源码读取对象
 * @return {string}
 */
function readIdent(walker) {
    var match = walker.match(/\s*([\$0-9a-z_]+)/ig);
    return match[1];
}

// exports = module.exports = readIdent;


/**
 * @file 读取三元表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readLogicalORExpr = require('./read-logical-or-expr');

/**
 * 读取三元表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readTertiaryExpr(walker) {
    var conditional = readLogicalORExpr(walker);
    walker.goUntil();

    if (walker.currentCode() === 63) { // ?
        walker.go(1);
        var yesExpr = readTertiaryExpr(walker);
        walker.goUntil();

        if (walker.currentCode() === 58) { // :
            walker.go(1);
            return {
                type: ExprType.TERTIARY,
                segs: [
                    conditional,
                    yesExpr,
                    readTertiaryExpr(walker)
                ]
            };
        }
    }

    return conditional;
}

// exports = module.exports = readTertiaryExpr;


/**
 * @file 读取访问表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var createAccessor = require('./create-accessor');
// var readIdent = require('./read-ident');
// var readTertiaryExpr = require('./read-tertiary-expr');

/**
 * 读取访问表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readAccessor(walker) {
    var firstSeg = readIdent(walker);
    switch (firstSeg) {
        case 'true':
        case 'false':
            return {
                type: ExprType.BOOL,
                value: firstSeg === 'true'
            };
    }

    var result = createAccessor([
        {
            type: ExprType.STRING,
            value: firstSeg
        }
    ]);

    /* eslint-disable no-constant-condition */
    accessorLoop: while (1) {
    /* eslint-enable no-constant-condition */

        switch (walker.currentCode()) {
            case 46: // .
                walker.go(1);

                // ident as string
                result.paths.push({
                    type: ExprType.STRING,
                    value: readIdent(walker)
                });
                break;

            case 91: // [
                walker.go(1);
                result.paths.push(readTertiaryExpr(walker));
                walker.goUntil(93); // ]
                break;

            default:
                break accessorLoop;
        }
    }

    return result;
}

// exports = module.exports = readAccessor;


/**
 * @file 读取括号表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var readTertiaryExpr = require('./read-tertiary-expr');

/**
 * 读取括号表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readParenthesizedExpr(walker) {
    walker.go(1);
    var expr = readTertiaryExpr(walker);
    walker.goUntil(41); // )

    return expr;
}

// exports = module.exports = readParenthesizedExpr;


/**
 * @file 读取一元表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readString = require('./read-string');
// var readNumber = require('./read-number');
// var readAccessor = require('./read-accessor');
// var readParenthesizedExpr = require('./read-parenthesized-expr');


/**
 * 读取一元表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readUnaryExpr(walker) {
    walker.goUntil();

    switch (walker.currentCode()) {
        case 33: // !
            walker.go(1);
            return {
                type: ExprType.UNARY,
                expr: readUnaryExpr(walker)
            };
        case 34: // "
        case 39: // '
            return readString(walker);
        case 45: // number
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            return readNumber(walker);
        case 40: // (
            return readParenthesizedExpr(walker);
    }

    return readAccessor(walker);
}

// exports = module.exports = readUnaryExpr;


/**
 * @file 读取乘法表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readUnaryExpr = require('./read-unary-expr');

/**
 * 读取乘法表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readMultiplicativeExpr(walker) {
    var expr = readUnaryExpr(walker);

    while (1) {
        walker.goUntil();

        var code = walker.currentCode();
        switch (code) {
            case 37: // %
            case 42: // *
            case 47: // /
                walker.go(1);
                expr = {
                    type: ExprType.BINARY,
                    operator: code,
                    segs: [expr, readUnaryExpr(walker)]
                };
                continue;
        }

        break;
    }


    return expr;
}

// exports = module.exports = readMultiplicativeExpr;


/**
 * @file 读取加法表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readMultiplicativeExpr = require('./read-multiplicative-expr');


/**
 * 读取加法表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readAdditiveExpr(walker) {
    var expr = readMultiplicativeExpr(walker);

    while (1) {
        walker.goUntil();
        var code = walker.currentCode();

        switch (code) {
            case 43: // +
            case 45: // -
                walker.go(1);
                expr = {
                    type: ExprType.BINARY,
                    operator: code,
                    segs: [expr, readMultiplicativeExpr(walker)]
                };
                continue;
        }

        break;
    }

    return expr;
}

// exports = module.exports = readAdditiveExpr;


/**
 * @file 读取关系判断表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readAdditiveExpr = require('./read-additive-expr');

/**
 * 读取关系判断表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readRelationalExpr(walker) {
    var expr = readAdditiveExpr(walker);
    walker.goUntil();

    var code = walker.currentCode();
    switch (code) {
        case 60: // <
        case 62: // >
            if (walker.nextCode() === 61) {
                code += 61;
                walker.go(1);
            }

            return {
                type: ExprType.BINARY,
                operator: code,
                segs: [expr, readAdditiveExpr(walker)]
            };
    }

    return expr;
}

// exports = module.exports = readRelationalExpr;


/**
 * @file 读取相等比对表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readRelationalExpr = require('./read-relational-expr');

/**
 * 读取相等比对表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readEqualityExpr(walker) {
    var expr = readRelationalExpr(walker);
    walker.goUntil();

    var code = walker.currentCode();
    switch (code) {
        case 61: // =
        case 33: // !
            if (walker.nextCode() === 61) {
                code += 61;
                if (walker.nextCode() === 61) {
                    code += 61;
                    walker.go(1);
                }

                return {
                    type: ExprType.BINARY,
                    operator: code,
                    segs: [expr, readRelationalExpr(walker)]
                };
            }

            walker.go(-1);
    }

    return expr;
}

// exports = module.exports = readEqualityExpr;


/**
 * @file 读取逻辑与表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readEqualityExpr = require('./read-equality-expr');

/**
 * 读取逻辑与表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readLogicalANDExpr(walker) {
    var expr = readEqualityExpr(walker);
    walker.goUntil();

    if (walker.currentCode() === 38) { // &
        if (walker.nextCode() === 38) {
            walker.go(1);
            return {
                type: ExprType.BINARY,
                operator: 76,
                segs: [expr, readLogicalANDExpr(walker)]
            };
        }

        walker.go(-1);
    }

    return expr;
}

// exports = module.exports = readLogicalANDExpr;


/**
 * @file 读取逻辑或表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readLogicalANDExpr = require('./read-logical-and-expr');

/**
 * 读取逻辑或表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readLogicalORExpr(walker) {
    var expr = readLogicalANDExpr(walker);
    walker.goUntil();

    if (walker.currentCode() === 124) { // |
        if (walker.nextCode() === 124) {
            walker.go(1);
            return {
                type: ExprType.BINARY,
                operator: 248,
                segs: [expr, readLogicalORExpr(walker)]
            };
        }

        walker.go(-1);
    }

    return expr;
}

// exports = module.exports = readLogicalORExpr;


/**
 * @file 解析表达式
 * @author errorrik(errorrik@gmail.com)
 */

// var Walker = require('./walker');
// var readTertiaryExpr = require('./read-tertiary-expr');

/**
 * 解析表达式
 *
 * @param {string} source 源码
 * @return {Object}
 */
function parseExpr(source) {
    if (typeof source === 'object' && source.type) {
        return source;
    }

    var expr = readTertiaryExpr(new Walker(source));
    expr.raw = source;
    return expr;
}

// exports = module.exports = parseExpr;


/**
 * @file 读取调用
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('./expr-type');
// var readAccessor = require('./read-accessor');
// var readTertiaryExpr = require('./read-tertiary-expr');

/**
 * 读取调用
 *
 * @param {Walker} walker 源码读取对象
 * @param {Array=} defaultArgs 默认参数
 * @return {Object}
 */
function readCall(walker, defaultArgs) {
    walker.goUntil();
    var ident = readAccessor(walker);
    var args = [];

    if (walker.goUntil(40)) { // (
        while (!walker.goUntil(41)) { // )
            args.push(readTertiaryExpr(walker));
            walker.goUntil(44); // ,
        }
    }
    else if (defaultArgs) {
        args = defaultArgs;
    }

    return {
        type: ExprType.CALL,
        name: ident,
        args: args
    };
}

// exports = module.exports = readCall;


/**
 * @file 解析调用
 * @author errorrik(errorrik@gmail.com)
 */


// var Walker = require('./walker');
// var readCall = require('./read-call');

/**
 * 解析调用
 *
 * @param {string} source 源码
 * @param {Array=} defaultArgs 默认参数
 * @return {Object}
 */
function parseCall(source, defaultArgs) {
    var expr = readCall(new Walker(source), defaultArgs);
    expr.raw = source;
    return expr;
}

// exports = module.exports = parseCall;


/**
 * @file 解析插值替换
 * @author errorrik(errorrik@gmail.com)
 */

// var Walker = require('./walker');
// var readTertiaryExpr = require('./read-tertiary-expr');
// var ExprType = require('./expr-type');
// var readCall = require('./read-call');

/**
 * 解析插值替换
 *
 * @param {string} source 源码
 * @return {Object}
 */
function parseInterp(source) {
    var walker = new Walker(source);

    var interp = {
        type: ExprType.INTERP,
        expr: readTertiaryExpr(walker),
        filters: [],
        raw: source
    };

    while (walker.goUntil(124)) { // |
        var callExpr = readCall(walker);
        switch (callExpr.name.paths[0].value) {
            case 'html':
                break;
            case 'raw':
                interp.original = 1;
                break;
            default:
                interp.filters.push(callExpr);
        }
    }

    return interp;
}

// exports = module.exports = parseInterp;


/**
 * @file 解码 HTML 字符实体
 * @author errorrik(errorrik@gmail.com)
 */

var ENTITY_DECODE_MAP = {
    lt: '<',
    gt: '>',
    nbsp: ' ',
    quot: '\"',
    emsp: '\u2003',
    ensp: '\u2002',
    thinsp: '\u2009',
    copy: '\xa9',
    reg: '\xae',
    zwnj: '\u200c',
    zwj: '\u200d',
    amp: '&'
};

/**
 * 解码 HTML 字符实体
 *
 * @param {string} source 要解码的字符串
 * @return {string}
 */
function decodeHTMLEntity(source) {
    return source
        .replace(/&#([0-9]+);/g, function (match, code) {
            return String.fromCharCode(+code);
        })
        .replace(/&#x([0-9a-f]+);/ig, function (match, code) {
            return String.fromCharCode(parseInt(code, 16));
        })
        .replace(/&([a-z]+);/ig, function (match, code) {
            return ENTITY_DECODE_MAP[code] || match;
        });
}

// exports = module.exports = decodeHTMLEntity;


/**
 * @file 解析文本
 * @author errorrik(errorrik@gmail.com)
 */

// var Walker = require('./walker');
// var ExprType = require('./expr-type');
// var parseInterp = require('./parse-interp');
// var decodeHTMLEntity = require('../util/decode-html-entity');

/**
 * 对字符串进行可用于new RegExp的字面化
 *
 * @inner
 * @param {string} source 需要字面化的字符串
 * @return {string} 字符串字面化结果
 */
function regexpLiteral(source) {
    return source.replace(/[\^\[\]\$\(\)\{\}\?\*\.\+\\]/g, function (c) {
        return '\\' + c;
    });
}

/**
 * 解析文本
 *
 * @param {string} source 源码
 * @param {Array?} delimiters 分隔符。默认为 ['{{', '}}']
 * @return {Object}
 */
function parseText(source, delimiters) {
    delimiters = delimiters || ['{{', '}}'];
    var exprStartReg = new RegExp(
        regexpLiteral(delimiters[0]) + '\\s*([\\s\\S]+?)\\s*' + regexpLiteral(delimiters[1]),
        'ig'
    );

    var exprMatch;

    var walker = new Walker(source);
    var beforeIndex = 0;

    var expr = {
        type: ExprType.TEXT,
        segs: []
    };

    function pushStringToSeg(text) {
        text && expr.segs.push({
            type: ExprType.STRING,
            literal: text,
            value: decodeHTMLEntity(text)
        });
    }

    while ((exprMatch = walker.match(exprStartReg)) != null) {
        pushStringToSeg(walker.cut(
            beforeIndex,
            walker.index - exprMatch[0].length
        ));

        var interp = parseInterp(exprMatch[1]);
        expr.original = expr.original || interp.original;

        expr.segs.push(interp);
        beforeIndex = walker.index;
    }

    pushStringToSeg(walker.cut(beforeIndex));



    if (expr.segs.length === 1 && expr.segs[0].type === ExprType.STRING) {
        expr.value = expr.segs[0].value;
    }

    return expr;
}

// exports = module.exports = parseText;


/**
 * @file 解析指令
 * @author errorrik(errorrik@gmail.com)
 */


// var Walker = require('./walker');
// var parseExpr = require('./parse-expr');
// var parseCall = require('./parse-call');
// var parseText = require('./parse-text');
// var readAccessor = require('./read-accessor');

/**
 * 指令解析器
 *
 * @inner
 * @type {Object}
 */
var directiveParsers = {
    'for': function (value) {
        var walker = new Walker(value);
        var match = walker.match(/^\s*([\$0-9a-z_]+)(\s*,\s*([\$0-9a-z_]+))?\s+in\s+/ig);

        if (match) {
            return {
                item: parseExpr(match[1]),
                index: parseExpr(match[3] || '$index'),
                value: readAccessor(walker)
            };
        }

        // #[begin] error
        throw new Error('[SAN FATAL] for syntax error: ' + value);
        // #[end]
    },

    'ref': function (value, options) {
        return {
            value: parseText(value, options.delimiters)
        };
    },

    'if': function (value) {
        return {
            value: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
        };
    },

    'elif': function (value) {
        return {
            value: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
        };
    },

    'else': function (value) {
        return {
            value: {}
        };
    },

    'html': function (value) {
        return {
            value: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
        };
    },

    'transition': function (value) {
        return {
            value: parseCall(value)
        };
    }
};

/**
 * 解析指令
 *
 * @param {ANode} aNode 抽象节点
 * @param {string} name 指令名称
 * @param {string} value 指令值
 * @param {Object} options 解析参数
 * @param {Array?} options.delimiters 插值分隔符列表
 */
function parseDirective(aNode, name, value, options) {
    if (name === 'else-if') {
        name = 'elif';
    }

    var parser = directiveParsers[name];
    if (parser) {
        (aNode.directives[name] = parser(value, options)).raw = value;
    }
}

// exports = module.exports = parseDirective;


/**
 * @file 对属性信息进行处理
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('../parser/expr-type');

/**
 * 对属性信息进行处理
 * 对组件的 binds 或者特殊的属性（比如 input 的 checked）需要处理
 *
 * 扁平化：
 * 当 text 解析只有一项时，要么就是 string，要么就是 interp
 * interp 有可能是绑定到组件属性的表达式，不希望被 eval text 成 string
 * 所以这里做个处理，只有一项时直接抽出来
 *
 * bool属性：
 * 当绑定项没有值时，默认为true
 *
 * @param {Object} prop 属性对象
 */
function postProp(prop) {
    var expr = prop.expr;

    if (expr.type === ExprType.TEXT) {
        switch (expr.segs.length) {
            case 0:
                prop.expr = {
                    type: ExprType.BOOL,
                    value: true
                };
                break;

            case 1:
                expr = prop.expr = expr.segs[0];
                if (expr.type === ExprType.INTERP && expr.filters.length === 0) {
                    prop.expr = expr.expr;
                }
        }
    }
}

// exports = module.exports = postProp;


/**
 * @file 解析抽象节点属性
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var kebab2camel = require('../util/kebab2camel');
// var ExprType = require('./expr-type');
// var createAccessor = require('./create-accessor');
// var parseExpr = require('./parse-expr');
// var parseCall = require('./parse-call');
// var parseText = require('./parse-text');
// var parseDirective = require('./parse-directive');
// var postProp = require('./post-prop');


/**
 * 解析抽象节点属性
 *
 * @param {ANode} aNode 抽象节点
 * @param {string} name 属性名称
 * @param {string} value 属性值
 * @param {Object} options 解析参数
 * @param {Array?} options.delimiters 插值分隔符列表
 */
function integrateAttr(aNode, name, value, options) {
    var prefixIndex = name.indexOf('-');
    var realName;
    var prefix;

    if (prefixIndex > 0) {
        prefix = name.slice(0, prefixIndex);
        realName = name.slice(prefixIndex + 1);
    }

    switch (prefix) {
        case 'on':
            var event = {
                name: realName,
                modifier: {}
            };
            aNode.events.push(event);

            var colonIndex;
            while ((colonIndex = value.indexOf(':')) > 0) {
                var modifier = value.slice(0, colonIndex);

                // eventHandler("dd:aa") 这种情况不能算modifier，需要辨识
                if (!/^[a-z]+$/i.test(modifier)) {
                    break;
                }

                event.modifier[modifier] = true;
                value = value.slice(colonIndex + 1);
            }

            event.expr = parseCall(value, [
                createAccessor([
                    { type: ExprType.STRING, value: '$event' }
                ])
            ]);
            break;

        case 'san':
        case 's':
            parseDirective(aNode, realName, value, options);
            break;

        case 'prop':
            integrateProp(aNode, realName, value, options);
            break;

        case 'var':
            if (!aNode.vars) {
                aNode.vars = [];
            }

            realName = kebab2camel(realName);
            aNode.vars.push({
                name: realName,
                expr: parseExpr(value.replace(/(^\{\{|\}\}$)/g, ''))
            });
            break;

        default:
            integrateProp(aNode, name, value, options);
    }
}

/**
 * 解析抽象节点绑定属性
 *
 * @inner
 * @param {ANode} aNode 抽象节点
 * @param {string} name 属性名称
 * @param {string} value 属性值
 * @param {Object} options 解析参数
 * @param {Array?} options.delimiters 插值分隔符列表
 */
function integrateProp(aNode, name, value, options) {
    // parse two way binding, e.g. value="{=ident=}"
    var xMatch = value.match(/^\{=\s*(.*?)\s*=\}$/);

    if (xMatch) {
        aNode.props.push({
            name: name,
            expr: parseExpr(xMatch[1]),
            x: 1,
            raw: value
        });

        return;
    }

    // parse normal prop
    var prop = {
        name: name,
        expr: parseText(value, options.delimiters),
        raw: value
    };

    // 这里不能把只有一个插值的属性抽取
    // 因为插值里的值可能是html片段，容易被注入
    // 组件的数据绑定在组件init时做抽取
    switch (name) {
        case 'class':
        case 'style':
            each(prop.expr.segs, function (seg) {
                if (seg.type === ExprType.INTERP) {
                    seg.filters.push({
                        type: ExprType.CALL,
                        name: createAccessor([
                            {
                                type: ExprType.STRING,
                                value: '_' + prop.name
                            }
                        ]),
                        args: []
                    });
                }
            });
            break;

        case 'checked':
            if (aNode.tagName === 'input') {
                postProp(prop);
            }
            break;
    }

    aNode.props.push(prop);
}


// exports = module.exports = integrateAttr;


/**
 * @file 解析模板
 * @author errorrik(errorrik@gmail.com)
 */


// var createANode = require('./create-a-node');
// var Walker = require('./walker');
// var integrateAttr = require('./integrate-attr');
// var parseText = require('./parse-text');
// var autoCloseTags = require('../browser/auto-close-tags');

// #[begin] error
function getXPath(stack, currentTagName) {
    var path = ['ROOT'];
    for (var i = 1, len = stack.length; i < len; i++) {
        path.push(stack[i].tagName);
    }
    if (currentTagName) {
        path.push(currentTagName);
    }
    return path.join('>');
}
// #[end]

/* eslint-disable fecs-max-statements */

/**
 * 解析 template
 *
 * @param {string} source template源码
 * @param {Object?} options 解析参数
 * @param {string?} options.trimWhitespace 空白文本的处理策略。none|blank|all
 * @param {Array?} options.delimiters 插值分隔符列表
 * @return {ANode}
 */
function parseTemplate(source, options) {
    options = options || {};
    options.trimWhitespace = options.trimWhitespace || 'none';

    var rootNode = createANode();

    if (typeof source !== 'string') {
        return rootNode;
    }

    source = source.replace(/<!--([\s\S]*?)-->/mg, '').replace(/(^\s+|\s+$)/g, '');
    var walker = new Walker(source);

    var tagReg = /<(\/)?([a-z0-9-]+)\s*/ig;
    var attrReg = /([-:0-9a-z\(\)\[\]]+)(\s*=\s*(['"])([^\3]*?)\3)?\s*/ig;

    var tagMatch;
    var currentNode = rootNode;
    var stack = [rootNode];
    var stackIndex = 0;
    var beforeLastIndex = 0;

    while ((tagMatch = walker.match(tagReg)) != null) {
        var tagEnd = tagMatch[1];
        var tagName = tagMatch[2].toLowerCase();

        pushTextNode(source.slice(
            beforeLastIndex,
            walker.index - tagMatch[0].length
        ));

        // 62: >
        // 47: /
        // 处理 </xxxx >
        if (tagEnd && walker.currentCode() === 62) {
            // 满足关闭标签的条件时，关闭标签
            // 向上查找到对应标签，找不到时忽略关闭
            var closeIndex = stackIndex;

            // #[begin] error
            // 如果正在闭合一个自闭合的标签，例如 </input>，报错
            if (autoCloseTags[tagName]) {
                throw new Error(''
                    + '[SAN ERROR] ' + getXPath(stack, tagName) + ' is a `auto closed` tag, '
                    + 'so it cannot be closed with </' + tagName + '>'
                );
            }

            // 如果关闭的 tag 和当前打开的不一致，报错
            if (
                stack[closeIndex].tagName !== tagName
                // 这里要把 table 自动添加 tbody 的情况给去掉
                && !(tagName === 'table' && stack[closeIndex].tagName === 'tbody')
            ) {
                throw new Error('[SAN ERROR] ' + getXPath(stack) + ' is closed with ' + tagName);
            }
            // #[end]

            while (closeIndex > 0 && stack[closeIndex].tagName !== tagName) {
                closeIndex--;
            }

            if (closeIndex > 0) {
                stackIndex = closeIndex - 1;
                currentNode = stack[stackIndex];
            }
            walker.go(1);
        }

        // #[begin] error
        // 处理 </xxx 非正常闭合标签
        else if (tagEnd) {

            // 如果闭合标签时，匹配后的下一个字符是 <，即下一个标签的开始，那么当前闭合标签未闭合
            if (walker.currentCode() === 60) {
                throw new Error(''
                    + '[SAN ERROR] ' + getXPath(stack)
                    + '\'s close tag not closed'
                );
            }

            // 闭合标签有属性
            throw new Error(''
                + '[SAN ERROR] ' + getXPath(stack)
                + '\'s close tag has attributes'
            );

        }
        // #[end]

        else if (!tagEnd) {
            var aElement = createANode({
                tagName: tagName
            });
            var tagClose = autoCloseTags[tagName];

            // 解析 attributes

            /* eslint-disable no-constant-condition */
            while (1) {
            /* eslint-enable no-constant-condition */

                var nextCharCode = walker.currentCode();

                // 标签结束时跳出 attributes 读取
                // 标签可能直接结束或闭合结束
                if (nextCharCode === 62) {
                    walker.go(1);
                    break;
                }
                // 遇到 /> 按闭合处理
                else if (nextCharCode === 47
                    && walker.charCode(walker.index + 1) === 62
                ) {
                    walker.go(2);
                    tagClose = 1;
                    break;
                }

                // #[begin] error
                // 在处理一个 open 标签时，如果遇到了 <， 即下一个标签的开始，则当前标签未能正常闭合，报错
                if (nextCharCode === 60) {
                    throw new Error('[SAN ERROR] ' + getXPath(stack, tagName) + ' is not closed');
                }
                // #[end]

                // 读取 attribute
                var attrMatch = walker.match(attrReg);
                if (attrMatch) {

                    // #[begin] error
                    // 如果属性有 =，但没取到 value，报错
                    if (
                        walker.charCode(attrMatch.index + attrMatch[1].length) === 61
                        && !attrMatch[2]
                    ) {
                        throw new Error(''
                            + '[SAN ERROR] ' + getXPath(stack, tagName) + ' attribute `'
                            + attrMatch[1] + '` is not wrapped with ""'
                        );
                    }
                    // #[end]

                    integrateAttr(
                        aElement,
                        attrMatch[1],
                        attrMatch[2] ? attrMatch[4] : '',
                        options
                    );
                }

            }

            // match if directive for else/elif directive
            var elseDirective = aElement.directives['else'] || aElement.directives.elif; // eslint-disable-line dot-notation
            if (elseDirective) {
                var parentChildrenLen = currentNode.children.length;

                while (parentChildrenLen--) {
                    var parentChild = currentNode.children[parentChildrenLen];
                    if (parentChild.textExpr) {
                        currentNode.children.splice(parentChildrenLen, 1);
                        continue;
                    }

                    // #[begin] error
                    if (!parentChild.directives['if']) { // eslint-disable-line dot-notation
                        throw new Error('[SAN FATEL] else not match if.');
                    }
                    // #[end]

                    parentChild.elses = parentChild.elses || [];
                    parentChild.elses.push(aElement);

                    break;
                }
            }
            else {
                if (aElement.tagName === 'tr' && currentNode.tagName === 'table') {
                    var tbodyNode = createANode({
                        tagName: 'tbody'
                    });
                    currentNode.children.push(tbodyNode);
                    currentNode = tbodyNode;
                    stack[++stackIndex] = tbodyNode;
                }

                currentNode.children.push(aElement);
            }

            if (!tagClose) {
                currentNode = aElement;
                stack[++stackIndex] = aElement;
            }
        }

        beforeLastIndex = walker.index;
    }

    pushTextNode(walker.cut(beforeLastIndex));

    return rootNode;

    /**
     * 在读取栈中添加文本节点
     *
     * @inner
     * @param {string} text 文本内容
     */
    function pushTextNode(text) {
        switch (options.trimWhitespace) {
            case 'blank':
                if (/^\s+$/.test(text)) {
                    text = null;
                }
                break;

            case 'all':
                text = text.replace(/(^\s+|\s+$)/g, '');
                break;
        }

        if (text) {
            currentNode.children.push(createANode({
                textExpr: parseText(text, options.delimiters)
            }));
        }
    }
}

/* eslint-enable fecs-max-statements */

// exports = module.exports = parseTemplate;


/**
 * @file 默认filter
 * @author errorrik(errorrik@gmail.com)
 */


/* eslint-disable fecs-camelcase */
/* eslint-disable guard-for-in */

/**
 * 默认filter
 *
 * @const
 * @type {Object}
 */
var DEFAULT_FILTERS = {

    /**
     * URL编码filter
     *
     * @param {string} source 源串
     * @return {string} 替换结果串
     */
    url: encodeURIComponent,

    _class: function (source) {
        if (source instanceof Array) {
            return source.join(' ');
        }

        return source;
    },

    _style: function (source) {
        if (typeof source === 'object') {
            var result = '';
            for (var key in source) {
                result += key + ':' + source[key] + ';';
            }

            return result;
        }

        return source;
    },

    _sep: function (source, sep) {
        return source ? sep + source : source;
    }
};
/* eslint-enable fecs-camelcase */

// exports = module.exports = DEFAULT_FILTERS;


/**
 * @file 表达式计算
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('../parser/expr-type');
// var DEFAULT_FILTERS = require('./default-filters');
// var evalArgs = require('./eval-args');
// var dataCache = require('./data-cache');

/**
 * 计算表达式的值
 *
 * @param {Object} expr 表达式对象
 * @param {Data} data 数据容器对象
 * @param {Component=} owner 所属组件环境
 * @return {*}
 */
function evalExpr(expr, data, owner) {
    if (expr.value != null) {
        return expr.value;
    }

    var value = dataCache.get(data, expr);

    if (value == null) {
        switch (expr.type) {
            case ExprType.UNARY:
                value = !evalExpr(expr.expr, data, owner);
                break;

            case ExprType.BINARY:
                var leftValue = evalExpr(expr.segs[0], data, owner);
                var rightValue = evalExpr(expr.segs[1], data, owner);

                /* eslint-disable eqeqeq */
                switch (expr.operator) {
                    case 37:
                        value = leftValue % rightValue;
                        break;
                    case 43:
                        value = leftValue + rightValue;
                        break;
                    case 45:
                        value = leftValue - rightValue;
                        break;
                    case 42:
                        value = leftValue * rightValue;
                        break;
                    case 47:
                        value = leftValue / rightValue;
                        break;
                    case 60:
                        value = leftValue < rightValue;
                        break;
                    case 62:
                        value = leftValue > rightValue;
                        break;
                    case 76:
                        value = leftValue && rightValue;
                        break;
                    case 94:
                        value = leftValue != rightValue;
                        break;
                    case 121:
                        value = leftValue <= rightValue;
                        break;
                    case 122:
                        value = leftValue == rightValue;
                        break;
                    case 123:
                        value = leftValue >= rightValue;
                        break;
                    case 155:
                        value = leftValue !== rightValue;
                        break;
                    case 183:
                        value = leftValue === rightValue;
                        break;
                    case 248:
                        value = leftValue || rightValue;
                        break;
                }
                /* eslint-enable eqeqeq */
                break;

            case ExprType.TERTIARY:
                value = evalExpr(
                    expr.segs[evalExpr(expr.segs[0], data, owner) ? 1 : 2],
                    data,
                    owner
                );
                break;

            case ExprType.ACCESSOR:
                value = data.get(expr);
                break;

            case ExprType.INTERP:
                value = evalExpr(expr.expr, data, owner);

                if (owner) {
                    for (var i = 0, l = expr.filters.length; i < l; i++) {
                        var filter = expr.filters[i];
                        var filterName = filter.name.paths[0].value;

                        if (owner.filters[filterName]) {
                            value = owner.filters[filterName].apply(
                                owner,
                                [value].concat(evalArgs(filter.args, data, owner))
                            );
                        }
                        else if (DEFAULT_FILTERS[filterName]) {
                            value = DEFAULT_FILTERS[filterName](
                                value,
                                filter.args[0] ? filter.args[0].value : ''
                            );
                        }
                    }
                }

                if (value == null) {
                    value = '';
                }

                break;

            /* eslint-disable no-redeclare */
            case ExprType.TEXT:
                var buf = '';
                for (var i = 0, l = expr.segs.length; i < l; i++) {
                    var seg = expr.segs[i];
                    buf += seg.value || evalExpr(seg, data, owner);
                }
                return buf;
        }

        dataCache.set(data, expr, value);
    }

    return value;
}

// exports = module.exports = evalExpr;


/**
 * @file 为函数调用计算参数数组的值
 * @author errorrik(errorrik@gmail.com)
 */


// var evalExpr = require('../runtime/eval-expr');

/**
 * 为函数调用计算参数数组的值
 *
 * @param {Array} args 参数表达式列表
 * @param {Data} data 数据环境
 * @param {Component} owner 组件环境
 * @return {Array}
 */
function evalArgs(args, data, owner) {
    var result = [];
    for (var i = 0; i < args.length; i++) {
        result.push(evalExpr(args[i], data, owner));
    }

    return result;
}

// exports = module.exports = evalArgs;


/**
 * @file 数据缓存管理器
 * @author errorrik(errorrik@gmail.com)
 */



var dataCacheSource = {};
var dataCacheClearly = 1;

/**
 * 数据缓存管理器
 *
 * @const
 * @type {Object}
 */
var dataCache = {
    clear: function () {
        if (!dataCacheClearly) {
            dataCacheClearly = 1;
            dataCacheSource = {};
        }
    },

    set: function (data, expr, value) {
        if (expr.raw) {
            dataCacheClearly = 0;
            (dataCacheSource[data.id] = dataCacheSource[data.id] || {})[expr.raw] = value;
        }
    },

    get: function (data, expr) {
        if (expr.raw && dataCacheSource[data.id]) {
            return dataCacheSource[data.id][expr.raw];
        }
    }
};


// exports = module.exports = dataCache;


/**
 * @file 比较变更表达式与目标表达式之间的关系
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('../parser/expr-type');
// var evalExpr = require('./eval-expr');
// var each = require('../util/each');

/**
 * 判断变更表达式与多个表达式之间的关系，0为完全没关系，1为有关系
 *
 * @inner
 * @param {Object} changeExpr 目标表达式
 * @param {Array} exprs 多个源表达式
 * @param {Data} data 表达式所属数据环境
 * @return {number}
 */
function changeExprCompareExprs(changeExpr, exprs, data) {
    for (var i = 0, l = exprs.length; i < l; i++) {
        if (changeExprCompare(changeExpr, exprs[i], data)) {
            return 1;
        }
    }

    return 0;
}

/**
 * 比较变更表达式与目标表达式之间的关系，用于视图更新判断
 * 视图更新需要根据其关系，做出相应的更新行为
 *
 * 0: 完全没关系
 * 1: 变更表达式是目标表达式的母项(如a与a.b) 或 表示需要完全变化
 * 2: 变更表达式是目标表达式相等
 * >2: 变更表达式是目标表达式的子项，如a.b.c与a.b
 *
 * @param {Object} changeExpr 变更表达式
 * @param {Object} expr 要比较的目标表达式
 * @param {Data} data 表达式所属数据环境
 * @return {number}
 */
function changeExprCompare(changeExpr, expr, data) {
    switch (expr.type) {
        case ExprType.ACCESSOR:
            var paths = expr.paths;
            var len = paths.length;
            var changePaths = changeExpr.paths;
            var changeLen = changePaths.length;

            var result = 1;
            for (var i = 0; i < len; i++) {
                var pathExpr = paths[i];

                if (pathExpr.type === ExprType.ACCESSOR
                    && changeExprCompare(changeExpr, pathExpr, data)
                ) {
                    return 1;
                }

                if (result && i < changeLen
                    /* eslint-disable eqeqeq */
                    && (pathExpr.value || evalExpr(pathExpr, data))
                        != (changePaths[i].value || evalExpr(changePaths[i], data))
                    /* eslint-enable eqeqeq */
                ) {
                    result = 0;
                }
            }

            if (result) {
                result = Math.max(1, changeLen - len + 2);
            }
            return result;

        case ExprType.UNARY:
            return changeExprCompare(changeExpr, expr.expr, data) ? 1 : 0;


        case ExprType.TEXT:
        case ExprType.BINARY:
        case ExprType.TERTIARY:
            return changeExprCompareExprs(changeExpr, expr.segs, data);

        case ExprType.INTERP:
            if (!changeExprCompare(changeExpr, expr.expr, data)) {
                var filterResult;
                each(expr.filters, function (filter) {
                    filterResult = changeExprCompareExprs(changeExpr, filter.args, data);
                    return !filterResult;
                });

                return filterResult ? 1 : 0;
            }

            return 1;
    }

    return 0;
}

// exports = module.exports = changeExprCompare;


/**
 * @file 数据变更类型枚举
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 数据变更类型枚举
 *
 * @const
 * @type {Object}
 */
var DataChangeType = {
    SET: 1,
    SPLICE: 2
};

// exports = module.exports = DataChangeType;


/**
 * @file 生命周期类
 * @author errorrik(errorrik@gmail.com)
 */

function lifeCycleOwnIs(name) {
    return this[name];
}

/* eslint-disable fecs-valid-var-jsdoc */
/**
 * 节点生命周期信息
 *
 * @inner
 * @type {Object}
 */
var LifeCycle = {
    start: {},

    compiled: {
        is: lifeCycleOwnIs,
        compiled: true
    },

    inited: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true
    },

    painting: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        painting: true
    },

    created: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        created: true
    },

    attached: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        created: true,
        attached: true
    },

    leaving: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        created: true,
        attached: true,
        leaving: true
    },

    detached: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        created: true,
        detached: true
    },

    disposed: {
        is: lifeCycleOwnIs,
        disposed: true
    }
};
/* eslint-enable fecs-valid-var-jsdoc */


// exports = module.exports = LifeCycle;


/**
 * @file 节点类型
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 节点类型
 *
 * @const
 * @type {Object}
 */
var NodeType = {
    TEXT: 1,
    IF: 2,
    FOR: 3,
    ELEM: 4,
    CMPT: 5,
    SLOT: 6,
    TPL: 7
};

// exports = module.exports = NodeType;


/**
 * @file 获取 ANode props 数组中相应 name 的项
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 获取 ANode props 数组中相应 name 的项
 *
 * @param {Object} aNode ANode对象
 * @param {string} name name属性匹配串
 * @return {Object}
 */
function getANodeProp(aNode, name) {
    var index = aNode.hotspot.props[name];
    if (index != null) {
        return aNode.props[index];
    }
}

// exports = module.exports = getANodeProp;


/**
 * @file 获取属性处理对象
 * @author errorrik(errorrik@gmail.com)
 */

// var contains = require('../util/contains');
// var empty = require('../util/empty');
// var svgTags = require('../browser/svg-tags');
// var evalExpr = require('../runtime/eval-expr');
// var getANodeProp = require('./get-a-node-prop');
// var NodeType = require('./node-type');


/**
 * HTML 属性和 DOM 操作属性的对照表
 *
 * @inner
 * @const
 * @type {Object}
 */
var HTML_ATTR_PROP_MAP = {
    'readonly': 'readOnly',
    'cellpadding': 'cellPadding',
    'cellspacing': 'cellSpacing',
    'colspan': 'colSpan',
    'rowspan': 'rowSpan',
    'valign': 'vAlign',
    'usemap': 'useMap',
    'frameborder': 'frameBorder',
    'for': 'htmlFor'
};

/**
 * 默认的元素的属性设置的变换方法
 *
 * @inner
 * @type {Object}
 */
var defaultElementPropHandler = {
    prop: function (el, value, name, element) {
        var propName = HTML_ATTR_PROP_MAP[name] || name;

        // input 的 type 是个特殊属性，其实也应该用 setAttribute
        // 但是 type 不应该运行时动态改变，否则会有兼容性问题
        // 所以这里直接就不管了
        if (propName in el) {
            el[propName] = value == null ? '' : value;
        }
        else {
            el.setAttribute(name, value);
        }

        // attribute 绑定的是 text，所以不会出现 null 的情况，这里无需处理
        // 换句话来说，san 是做不到 attribute 时有时无的
        // if (value == null) {
        //     el.removeAttribute(name);
        // }
    },

    output: function (element, bindInfo, data) {
        data.set(bindInfo.expr, element.el[bindInfo.name], {
            target: {
                id: element.id,
                prop: bindInfo.name
            }
        });
    }
};

var svgPropHandler = {
    prop: function (el, value, name) {
        el.setAttribute(name, value);
    }
};

var boolPropHandler = {
    prop: function (el, value, name, element, prop) {
        var propName = HTML_ATTR_PROP_MAP[name] || name;
        el[propName] = !!(prop && prop.raw === ''
            || value && value !== 'false' && value !== '0');
    }
};

/* eslint-disable fecs-properties-quote */
/**
 * 默认的属性设置变换方法
 *
 * @inner
 * @type {Object}
 */
var defaultElementPropHandlers = {
    style: {
        prop: function (el, value) {
            el.style.cssText = value;
        }
    },

    'class': { // eslint-disable-line
        prop: function (el, value) {
            el.className = value;
        }
    },

    slot: {
        prop: empty
    },

    readonly: boolPropHandler,
    disabled: boolPropHandler,
    autofocus: boolPropHandler,
    required: boolPropHandler,
    draggable: boolPropHandler
};
/* eslint-enable fecs-properties-quote */

var analInputChecker = {
    checkbox: contains,
    radio: function (a, b) {
        return a === b;
    }
};

function analInputCheckedState(element, value, oper) {
    var bindValue = getANodeProp(element.aNode, 'value');
    var bindType = getANodeProp(element.aNode, 'type');

    if (bindValue && bindType) {
        var type = evalExpr(bindType.expr, element.scope, element.owner);

        if (analInputChecker[type]) {
            var bindChecked = getANodeProp(element.aNode, 'checked');
            if (!bindChecked.hintExpr) {
                bindChecked.hintExpr = bindValue.expr;
            }

            return !!analInputChecker[type](
                value,
                evalExpr(bindValue.expr, element.scope, element.owner)
            );
        }
    }
}

var elementPropHandlers = {
    input: {
        multiple: boolPropHandler,
        checked: {
            prop: function (el, value, name, element) {
                var state = analInputCheckedState(element, value);

                boolPropHandler.prop(
                    el,
                    state != null ? state : value,
                    'checked',
                    element
                );
            },

            output: function (element, bindInfo, data) {
                var el = element.el;
                var bindValue = getANodeProp(element.aNode, 'value');
                var bindType = getANodeProp(element.aNode, 'type') || {};

                if (bindValue && bindType) {
                    switch (bindType.raw) {
                        case 'checkbox':
                            data[el.checked ? 'push' : 'remove'](bindInfo.expr, el.value);
                            return;

                        case 'radio':
                            el.checked && data.set(bindInfo.expr, el.value, {
                                target: {
                                    id: element.id,
                                    prop: bindInfo.name
                                }
                            });
                            return;
                    }
                }

                defaultElementPropHandler.output(element, bindInfo, data);
            }
        }
    },

    option: {
        value: {
            prop: function (el, value, name, element) {
                defaultElementPropHandler.prop(el, value, name, element);

                if (isOptionSelected(element, value)) {
                    el.selected = true;
                }
            }
        }
    },

    select: {
        value: {
            prop: function (el, value) {
                el.value = value || '';
            },

            output: defaultElementPropHandler.output
        }
    }
};

function isOptionSelected(element, value) {
    var parentSelect = element.parent;
    while (parentSelect) {
        if (parentSelect.tagName === 'select') {
            break;
        }

        parentSelect = parentSelect.parent;
    }


    if (parentSelect) {
        var selectValue = null;
        var prop;
        var expr;

        if ((prop = getANodeProp(parentSelect.aNode, 'value'))
            && (expr = prop.expr)
        ) {
            selectValue = parentSelect.nodeType === NodeType.CMPT
                ? evalExpr(expr, parentSelect.data, parentSelect)
                : evalExpr(expr, parentSelect.scope, parentSelect.owner)
                || '';
        }

        if (selectValue === value) {
            return 1;
        }
    }
}


/**
 * 获取属性处理对象
 *
 * @param {string} tagName 元素tag
 * @param {string} attrName 属性名
 * @return {Object}
 */
function getPropHandler(tagName, attrName) {
    if (svgTags[tagName]) {
        return svgPropHandler;
    }

    var tagPropHandlers = elementPropHandlers[tagName];
    if (!tagPropHandlers) {
        tagPropHandlers = elementPropHandlers[tagName] = {};
    }

    var propHandler = tagPropHandlers[attrName];
    if (!propHandler) {
        propHandler = defaultElementPropHandlers[attrName] || defaultElementPropHandler;
        tagPropHandlers[attrName] = propHandler;
    }

    return propHandler;
}

// exports = module.exports = getPropHandler;


/**
 * @file 判断变更是否来源于元素
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 判断变更是否来源于元素，来源于元素时，视图更新需要阻断
 *
 * @param {Object} change 变更对象
 * @param {Element} element 元素
 * @param {string?} propName 属性名，可选。需要精确判断是否来源于此属性时传入
 * @return {boolean}
 */
function isDataChangeByElement(change, element, propName) {
    var changeTarget = change.option.target;
    return changeTarget && changeTarget.id === element.id
        && (!propName || changeTarget.prop === propName);
}

// exports = module.exports = isDataChangeByElement;


/**
 * @file 在对象上使用accessor表达式查找方法
 * @author errorrik(errorrik@gmail.com)
 */

// var evalExpr = require('../runtime/eval-expr');

/**
 * 在对象上使用accessor表达式查找方法
 *
 * @param {Object} source 源对象
 * @param {Object} nameExpr 表达式
 * @param {Data} data 所属数据环境
 * @return {Function}
 */
function findMethod(source, nameExpr, data) {
    var method = source;

    for (var i = 0; method != null && i < nameExpr.paths.length; i++) {
        method = method[evalExpr(nameExpr.paths[i], data)];
    }

    return method;
}

// exports = module.exports = findMethod;


/**
 * @file 数据类
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('../parser/expr-type');
// var evalExpr = require('./eval-expr');
// var DataChangeType = require('./data-change-type');
// var createAccessor = require('../parser/create-accessor');
// var parseExpr = require('../parser/parse-expr');
// var guid = require('../util/guid');
// var dataCache = require('./data-cache');

/**
 * 数据类
 *
 * @class
 * @param {Object?} data 初始数据
 * @param {Model?} parent 父级数据容器
 */
function Data(data, parent) {
    this.id = guid();
    this.parent = parent;
    this.raw = data || {};
    this.listeners = [];
}

// #[begin] error
// 以下两个函数只在开发模式下可用，在生产模式下不存在
/**
 * DataTypes 检测
 */
Data.prototype.checkDataTypes = function () {
    if (this.typeChecker) {
        this.typeChecker(this.raw);
    }
};

/**
 * 设置 type checker
 *
 * @param  {Function} typeChecker 类型校验器
 */
Data.prototype.setTypeChecker = function (typeChecker) {
    this.typeChecker = typeChecker;
};

// #[end]

/**
 * 添加数据变更的事件监听器
 *
 * @param {Function} listener 监听函数
 */
Data.prototype.listen = function (listener) {
    if (typeof listener === 'function') {
        this.listeners.push(listener);
    }
};

/**
 * 移除数据变更的事件监听器
 *
 * @param {Function} listener 监听函数
 */
Data.prototype.unlisten = function (listener) {
    var len = this.listeners.length;
    while (len--) {
        if (!listener || this.listeners[len] === listener) {
            this.listeners.splice(len, 1);
        }
    }
};

/**
 * 触发数据变更
 *
 * @param {Object} change 变更信息对象
 */
Data.prototype.fire = function (change) {
    if (change.option.silent || change.option.silence || change.option.quiet) {
        return;
    }

    for (var i = 0; i < this.listeners.length; i++) {
        this.listeners[i].call(this, change);
    }
};

/**
 * 获取数据项
 *
 * @param {string|Object?} expr 数据项路径
 * @param {Data?} callee 当前数据获取的调用环境
 * @return {*}
 */
Data.prototype.get = function (expr, callee) {
    var value = this.raw;
    if (!expr) {
        return value;
    }

    expr = parseExpr(expr);

    var paths = expr.paths;
    callee = callee || this;

    value = value[paths[0].value];

    if (value == null && this.parent) {
        value = this.parent.get(expr, callee);
    }
    else {
        for (var i = 1, l = paths.length; value != null && i < l; i++) {
            value = value[paths[i].value || evalExpr(paths[i], callee)];
        }
    }

    return value;
};


/**
 * 数据对象变更操作
 *
 * @inner
 * @param {Object|Array} source 要变更的源数据
 * @param {Array} exprPaths 属性路径
 * @param {*} value 变更属性值
 * @param {Data} data 对应的Data对象
 * @return {*} 变更后的新数据
 */
function immutableSet(source, exprPaths, value, data) {
    if (exprPaths.length === 0) {
        return value;
    }

    var prop = evalExpr(exprPaths[0], data);
    var result;

    if (source instanceof Array) {
        var index = +prop;

        result = source.slice(0);
        result[isNaN(index) ? prop : index] = immutableSet(source[index], exprPaths.slice(1), value, data);

        return result;
    }
    else if (typeof source === 'object') {
        result = {};

        for (var key in source) {
            if (key !== prop) {
                result[key] = source[key];
            }
        }

        result[prop] = immutableSet(source[prop] || {}, exprPaths.slice(1), value, data);

        return result;
    }

    return source;
}

/**
 * 设置数据项
 *
 * @param {string|Object} expr 数据项路径
 * @param {*} value 数据值
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 */
Data.prototype.set = function (expr, value, option) {
    option = option || {};

    // #[begin] error
    var exprRaw = expr;
    // #[end]

    expr = parseExpr(expr);

    // #[begin] error
    if (expr.type !== ExprType.ACCESSOR) {
        throw new Error('[SAN ERROR] Invalid Expression in Data set: ' + exprRaw);
    }
    // #[end]

    if (this.get(expr) === value && !option.force) {
        return;
    }

    dataCache.clear();
    this.raw = immutableSet(this.raw, expr.paths, value, this);
    this.fire({
        type: DataChangeType.SET,
        expr: expr,
        value: value,
        option: option
    });

    // #[begin] error
    this.checkDataTypes();
    // #[end]

};

/**
 * 合并更新数据项
 *
 * @param {string|Object} expr 数据项路径
 * @param {Object} source 待合并的数据值
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 */
Data.prototype.merge = function (expr, source, option) {
    option = option || {};

    // #[begin] error
    var exprRaw = expr;
    // #[end]

    expr = parseExpr(expr);

    // #[begin] error
    if (expr.type !== ExprType.ACCESSOR) {
        throw new Error('[SAN ERROR] Invalid Expression in Data merge: ' + exprRaw);
    }

    if (typeof this.get(expr) !== 'object') {
        throw new Error('[SAN ERROR] Merge Expects a Target of Type \'object\'; got ' + typeof oldValue);
    }

    if (typeof source !== 'object') {
        throw new Error('[SAN ERROR] Merge Expects a Source of Type \'object\'; got ' + typeof source);
    }
    // #[end]

    for (var key in source) { // eslint-disable-line
        this.set(
            createAccessor(
                expr.paths.concat(
                    [
                        {
                            type: ExprType.STRING,
                            value: key
                        }
                    ]
                )
            ),
            source[key],
            option
        );
    }
};

/**
 * 基于更新函数更新数据项
 *
 * @param {string|Object} expr 数据项路径
 * @param {Function} fn 数据处理函数
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 */
Data.prototype.apply = function (expr, fn, option) {
    // #[begin] error
    var exprRaw = expr;
    // #[end]

    expr = parseExpr(expr);

    // #[begin] error
    if (expr.type !== ExprType.ACCESSOR) {
        throw new Error('[SAN ERROR] Invalid Expression in Data apply: ' + exprRaw);
    }
    // #[end]

    var oldValue = this.get(expr);

    // #[begin] error
    if (typeof fn !== 'function') {
        throw new Error(
            '[SAN ERROR] Invalid Argument\'s Type in Data apply: '
            + 'Expected Function but got ' + typeof fn
        );
    }
    // #[end]

    this.set(expr, fn(oldValue), option);
};

/**
 * 数组数据项splice操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {Array} args splice 接受的参数列表，数组项与Array.prototype.splice的参数一致
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 * @return {Array} 新数组
 */
Data.prototype.splice = function (expr, args, option) {
    option = option || {};
    // #[begin] error
    var exprRaw = expr;
    // #[end]

    expr = parseExpr(expr);

    // #[begin] error
    if (expr.type !== ExprType.ACCESSOR) {
        throw new Error('[SAN ERROR] Invalid Expression in Data splice: ' + exprRaw);
    }
    // #[end]

    var target = this.get(expr);
    var returnValue = [];

    if (target instanceof Array) {
        var index = args[0];
        if (index < 0 || index > target.length) {
            return;
        }

        var newArray = target.slice(0);
        returnValue = newArray.splice.apply(newArray, args);
        dataCache.clear();
        this.raw = immutableSet(this.raw, expr.paths, newArray, this);

        this.fire({
            expr: expr,
            type: DataChangeType.SPLICE,
            index: index,
            deleteCount: returnValue.length,
            value: returnValue,
            insertions: args.slice(2),
            option: option
        });
    }

    // #[begin] error
    this.checkDataTypes();
    // #[end]

    return returnValue;
};

/**
 * 数组数据项push操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {*} item 要push的值
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 * @return {number} 新数组的length属性
 */
Data.prototype.push = function (expr, item, option) {
    var target = this.get(expr);

    if (target instanceof Array) {
        this.splice(expr, [target.length, 0, item], option);
        return target.length + 1;
    }
};

/**
 * 数组数据项pop操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 * @return {*}
 */
Data.prototype.pop = function (expr, option) {
    var target = this.get(expr);

    if (target instanceof Array) {
        var len = target.length;
        if (len) {
            return this.splice(expr, [len - 1, 1], option)[0];
        }
    }
};

/**
 * 数组数据项shift操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 * @return {*}
 */
Data.prototype.shift = function (expr, option) {
    return this.splice(expr, [0, 1], option)[0];
};

/**
 * 数组数据项unshift操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {*} item 要unshift的值
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 * @return {number} 新数组的length属性
 */
Data.prototype.unshift = function (expr, item, option) {
    var target = this.get(expr);

    if (target instanceof Array) {
        this.splice(expr, [0, 0, item], option);
        return target.length + 1;
    }
};

/**
 * 数组数据项移除操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {number} index 要移除项的索引
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 */
Data.prototype.removeAt = function (expr, index, option) {
    this.splice(expr, [index, 1], option);
};

/**
 * 数组数据项移除操作
 *
 * @param {string|Object} expr 数据项路径
 * @param {*} value 要移除的项
 * @param {Object=} option 设置参数
 * @param {boolean} option.silent 静默设置，不触发变更事件
 */
Data.prototype.remove = function (expr, value, option) {
    var target = this.get(expr);

    if (target instanceof Array) {
        var len = target.length;
        while (len--) {
            if (target[len] === value) {
                this.splice(expr, [len, 1], option);
                break;
            }
        }
    }
};

// exports = module.exports = Data;


/**
 * @file 声明式事件的监听函数
 * @author errorrik(errorrik@gmail.com)
 */


// var evalArgs = require('../runtime/eval-args');
// var findMethod = require('../runtime/find-method');
// var Data = require('../runtime/data');

/**
 * 声明式事件的监听函数
 *
 * @param {Object} eventBind 绑定信息对象
 * @param {boolean} isComponentEvent 是否组件自定义事件
 * @param {Data} data 数据环境
 * @param {Event} e 事件对象
 */
function eventDeclarationListener(eventBind, isComponentEvent, data, e) {
    var method = findMethod(this, eventBind.expr.name, data);

    if (typeof method === 'function') {
        var scope = new Data(
            {$event: isComponentEvent ? e : e || window.event},
            data
        );
        method.apply(this, evalArgs(eventBind.expr.args, scope, this));
    }
}

// exports = module.exports = eventDeclarationListener;


/**
 * @file 自闭合标签表
 * @author errorrik(errorrik@gmail.com)
 */

// var splitStr2Obj = require('../util/split-str-2-obj');

/**
 * 自闭合标签列表
 *
 * @type {Object}
 */
var hotTags = splitStr2Obj('div,span,input,button,textarea,form,label,dl,dt,dd,ul,ol,li,a,b,u,h1,h2,h3,h4,h5,h6');

// exports = module.exports = hotTags;


/**
 * @file 是否浏览器环境
 * @author errorrik(errorrik@gmail.com)
 */

var isBrowser = typeof window !== 'undefined';

// exports = module.exports = isBrowser;


/**
 * @file insertBefore 方法的兼容性封装
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * insertBefore 方法的兼容性封装
 *
 * @param {HTMLNode} targetEl 要插入的节点
 * @param {HTMLElement} parentEl 父元素
 * @param {HTMLElement?} beforeEl 在此元素之前插入
 */
function insertBefore(targetEl, parentEl, beforeEl) {
    if (parentEl) {
        if (beforeEl) {
            parentEl.insertBefore(targetEl, beforeEl);
        }
        else {
            parentEl.appendChild(targetEl);
        }
    }
}

// exports = module.exports = insertBefore;


/**
 * @file 判断元素是否不允许设置HTML
 * @author errorrik(errorrik@gmail.com)
 */

// some html elements cannot set innerHTML in old ie
// see: https://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx

/**
 * 判断元素是否不允许设置HTML
 *
 * @param {HTMLElement} el 要判断的元素
 * @return {boolean}
 */
function noSetHTML(el) {
    return /^(col|colgroup|frameset|style|table|tbody|tfoot|thead|tr|select)$/i.test(el.tagName);
}

// exports = module.exports = noSetHTML;


/**
 * @file  获取节点 stump 的 comment
 * @author errorrik(errorrik@gmail.com)
 */

// var noSetHTML = require('../browser/no-set-html');

// #[begin] error
/**
 * 获取节点 stump 的 comment
 *
 * @param {HTMLElement} el HTML元素
 */
function warnSetHTML(el) {
    // dont warn if not in browser runtime
    if (!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document)) {
        return;
    }

    // some html elements cannot set innerHTML in old ie
    // see: https://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx
    if (noSetHTML(el)) {
        var message = '[SAN WARNING] set html for element "' + el.tagName
            + '" may cause an error in old IE';
        /* eslint-disable no-console */
        if (typeof console === 'object' && console.warn) {
            console.warn(message);
        }
        else {
            throw new Error(message);
        }
        /* eslint-enable no-console */
    }
}
// #[end]

// exports = module.exports = warnSetHTML;


/**
 * @file 判断是否结束桩
 * @author errorrik(errorrik@gmail.com)
 */

// #[begin] reverse
/**
 * 判断是否结束桩
 *
 * @param {HTMLElement|HTMLComment} target 要判断的元素
 * @param {string} type 桩类型
 * @return {boolean}
 */
function isEndStump(target, type) {
    return target.nodeType === 8 && target.data === '/s-' + type;
}
// #[end]

// exports = module.exports = isEndStump;


/**
 * @file 获取节点在组件树中的路径
 * @author errorrik(errorrik@gmail.com)
 */


// var NodeType = require('./node-type');

// #[begin] reverse
/**
 * 获取节点在组件树中的路径
 *
 * @param {Node} node 节点对象
 * @return {Array}
 */
function getNodePath(node) {
    var nodePaths = [];
    var nodeParent = node;
    while (nodeParent) {
        switch (nodeParent.nodeType) {
            case NodeType.ELEM:
                nodePaths.unshift(nodeParent.tagName);
                break;

            case NodeType.IF:
                nodePaths.unshift('if');
                break;

            case NodeType.FOR:
                nodePaths.unshift('for[' + nodeParent.anode.directives['for'].raw + ']'); // eslint-disable-line dot-notation
                break;

            case NodeType.SLOT:
                nodePaths.unshift('slot[' + (nodeParent.name || 'default') + ']');
                break;

            case NodeType.TPL:
                nodePaths.unshift('template');
                break;

            case NodeType.CMPT:
                nodePaths.unshift('component[' + (nodeParent.subTag || 'root') + ']');
                break;

            case NodeType.TEXT:
                nodePaths.unshift('text');
                break;
        }

        nodeParent = nodeParent.parent;
    }

    return nodePaths;
}
// #[end]

// exports = module.exports = getNodePath;


/**
 * @file text 节点类
 * @author errorrik(errorrik@gmail.com)
 */

// var isBrowser = require('../browser/is-browser');
// var removeEl = require('../browser/remove-el');
// var insertBefore = require('../browser/insert-before');
// var changeExprCompare = require('../runtime/change-expr-compare');
// var evalExpr = require('../runtime/eval-expr');
// var NodeType = require('./node-type');
// var warnSetHTML = require('./warn-set-html');
// var isEndStump = require('./is-end-stump');
// var getNodePath = require('./get-node-path');


/**
 * text 节点类
 *
 * @param {Object} aNode 抽象节点
 * @param {Component} owner 所属组件环境
 * @param {Model=} scope 所属数据环境
 * @param {Node} parent 父亲节点
 * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
 */
function TextNode(aNode, owner, scope, parent, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;

    // #[begin] reverse
    if (reverseWalker) {
        var currentNode = reverseWalker.current;
        if (currentNode) {
            switch (currentNode.nodeType) {
                case 8:
                    if (currentNode.data === 's-text') {
                        this.sel = currentNode;
                        currentNode.data = this.id;
                        reverseWalker.goNext();

                        while (1) { // eslint-disable-line
                            currentNode = reverseWalker.current;
                            if (!currentNode) {
                                throw new Error('[SAN REVERSE ERROR] Text end flag not found. \nPaths: '
                                    + getNodePath(this).join(' > '));
                            }

                            if (isEndStump(currentNode, 'text')) {
                                this.el = currentNode;
                                reverseWalker.goNext();
                                currentNode.data = this.id;
                                break;
                            }

                            reverseWalker.goNext();
                        }
                    }
                    break;

                case 3:
                    reverseWalker.goNext();
                    if (!this.aNode.textExpr.original) {
                        this.el = currentNode;
                    }
                    break;
            }
        }
        else {
            this.el = document.createTextNode('');
            insertBefore(this.el, reverseWalker.target, reverseWalker.current);
        }
    }
    // #[end]
}

TextNode.prototype.nodeType = NodeType.TEXT;

/**
 * 将text attach到页面
 *
 * @param {HTMLElement} parentEl 要添加到的父元素
 * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
 */
TextNode.prototype.attach = function (parentEl, beforeEl) {
    this.content = evalExpr(this.aNode.textExpr, this.scope, this.owner);

    if (this.aNode.textExpr.original) {
        this.sel = document.createComment(this.id);
        insertBefore(this.sel, parentEl, beforeEl);

        this.el = document.createComment(this.id);
        insertBefore(this.el, parentEl, beforeEl);

        var tempFlag = document.createElement('script');
        parentEl.insertBefore(tempFlag, this.el);
        tempFlag.insertAdjacentHTML('beforebegin', this.content);
        parentEl.removeChild(tempFlag);
    }
    else {
        this.el = document.createTextNode(this.content);
        insertBefore(this.el, parentEl, beforeEl);
    }
};

/**
 * 销毁 text 节点
 */
TextNode.prototype.dispose = function () {
    this._prev = null;
    this.el = null;
    this.sel = null;
};

var textUpdateProp = isBrowser
    && (typeof document.createTextNode('').textContent === 'string'
        ? 'textContent'
        : 'data');

/**
 * 更新 text 节点的视图
 *
 * @param {Array} changes 数据变化信息
 */
TextNode.prototype._update = function (changes) {
    if (this.aNode.textExpr.value) {
        return;
    }

    var len = changes ? changes.length : 0;
    while (len--) {
        if (changeExprCompare(changes[len].expr, this.aNode.textExpr, this.scope)) {
            var text = evalExpr(this.aNode.textExpr, this.scope, this.owner);

            if (text !== this.content) {
                this.content = text;

                if (this.aNode.textExpr.original) {
                    var startRemoveEl = this.sel.nextSibling;
                    var parentEl = this.el.parentNode;

                    while (startRemoveEl !== this.el) {
                        var removeTarget = startRemoveEl;
                        startRemoveEl = startRemoveEl.nextSibling;
                        removeEl(removeTarget);
                    }

                    // #[begin] error
                    warnSetHTML(parentEl);
                    // #[end]

                    var tempFlag = document.createElement('script');
                    parentEl.insertBefore(tempFlag, this.el);
                    tempFlag.insertAdjacentHTML('beforebegin', text);
                    parentEl.removeChild(tempFlag);
                }
                else {
                    this.el[textUpdateProp] = text;
                }
            }

            return;
        }
    }
};

// exports = module.exports = TextNode;


/**
 * @file 判断变更数组是否影响到数据引用摘要
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 判断变更数组是否影响到数据引用摘要
 *
 * @param {Array} changes 变更数组
 * @param {Object} dataRef 数据引用摘要
 * @return {boolean}
 */
function changesIsInDataRef(changes, dataRef) {
    for (var i = 0; i < changes.length; i++) {
        var change = changes[i];

        if (!change.overview) {
            var paths = change.expr.paths;
            change.overview = paths[0].value;

            if (paths.length > 1) {
                change.extOverview = paths[0].value + '.' + paths[1].value;
                change.wildOverview = paths[0].value + '.*';
            }
        }

        if (dataRef[change.overview]
            || change.wildOverview && dataRef[change.wildOverview]
            || change.extOverview && dataRef[change.extOverview]
        ) {
            return true;
        }
    }
}

// exports = module.exports = changesIsInDataRef;


/**
 * @file 元素子节点遍历操作类
 * @author errorrik(errorrik@gmail.com)
 */

// var removeEl = require('../browser/remove-el');

// #[begin] reverse
/**
 * 元素子节点遍历操作类
 *
 * @inner
 * @class
 * @param {HTMLElement} el 要遍历的元素
 */
function DOMChildrenWalker(el) {
    this.raw = [];
    this.index = 0;
    this.target = el;

    var child = el.firstChild;
    var next;
    while (child) {
        next = child.nextSibling;

        switch (child.nodeType) {
            case 3:
                if (/^\s*$/.test(child.data || child.textContent)) {
                    removeEl(child);
                }
                else {
                    this.raw.push(child);
                }
                break;

            case 1:
            case 8:
                this.raw.push(child);
        }

        child = next;
    }

    this.current = this.raw[this.index];
    this.next = this.raw[this.index + 1];
}

/**
 * 往下走一个元素
 */
DOMChildrenWalker.prototype.goNext = function () {
    this.current = this.raw[++this.index];
    this.next = this.raw[this.index + 1];
};
// #[end]

// exports = module.exports = DOMChildrenWalker;


/**
 * @file 元素节点类
 * @author errorrik(errorrik@gmail.com)
 */


// var each = require('../util/each');
// var guid = require('../util/guid');
// var removeEl = require('../browser/remove-el');
// var changeExprCompare = require('../runtime/change-expr-compare');
// var changesIsInDataRef = require('../runtime/changes-is-in-data-ref');
// var evalExpr = require('../runtime/eval-expr');
// var LifeCycle = require('./life-cycle');
// var NodeType = require('./node-type');
// var reverseElementChildren = require('./reverse-element-children');
// var isDataChangeByElement = require('./is-data-change-by-element');
// var elementUpdateChildren = require('./element-update-children');
// var elementOwnCreate = require('./element-own-create');
// var elementOwnAttach = require('./element-own-attach');
// var elementOwnDetach = require('./element-own-detach');
// var elementOwnDispose = require('./element-own-dispose');
// var elementOwnOnEl = require('./element-own-on-el');
// var elementOwnToPhase = require('./element-own-to-phase');
// var elementOwnAttached = require('./element-own-attached');
// var elementDispose = require('./element-dispose');
// var elementInitTagName = require('./element-init-tag-name');
// var handleProp = require('./handle-prop');
// var warnSetHTML = require('./warn-set-html');
// var getNodePath = require('./get-node-path');

/**
 * 元素节点类
 *
 * @param {Object} aNode 抽象节点
 * @param {Component} owner 所属组件环境
 * @param {Model=} scope 所属数据环境
 * @param {Node} parent 父亲节点
 * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
 */
function Element(aNode, owner, scope, parent, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;

    this.lifeCycle = LifeCycle.start;
    this.children = [];
    this._elFns = [];
    this.parentComponent = parent.nodeType === NodeType.CMPT
        ? parent
        : parent.parentComponent;

    this.id = guid();

    elementInitTagName(this);

    this._toPhase('inited');

    // #[begin] reverse
    if (reverseWalker) {
        var currentNode = reverseWalker.current;

        if (!currentNode) {
            throw new Error('[SAN REVERSE ERROR] Element not found. \nPaths: '
                + getNodePath(this).join(' > '));
        }

        if (currentNode.nodeType !== 1) {
            throw new Error('[SAN REVERSE ERROR] Element type not match, expect 1 but '
                + currentNode.nodeType + '.\nPaths: '
                + getNodePath(this).join(' > '));
        }

        if (currentNode.tagName.toLowerCase() !== this.tagName) {
            throw new Error('[SAN REVERSE ERROR] Element tagName not match, expect '
                + this.tagName + ' but meat ' + currentNode.tagName.toLowerCase() + '.\nPaths: '
                + getNodePath(this).join(' > '));
        }

        this.el = currentNode;
        reverseWalker.goNext();

        reverseElementChildren(this);

        this._attached();
    }
    // #[end]
}



Element.prototype.nodeType = NodeType.ELEM;


Element.prototype.attach = elementOwnAttach;
Element.prototype.detach = elementOwnDetach;
Element.prototype.dispose = elementOwnDispose;
Element.prototype._create = elementOwnCreate;
Element.prototype._toPhase = elementOwnToPhase;
Element.prototype._onEl = elementOwnOnEl;

Element.prototype._doneLeave = function () {
    if (this.leaveDispose) {
        if (!this.lifeCycle.disposed) {
            elementDispose(
                this,
                this.disposeNoDetach,
                this.disposeNoTransition
            );
        }
    }
    else if (this.lifeCycle.attached) {
        removeEl(this.el);
        this._toPhase('detached');
    }
};

/**
 * 视图更新
 *
 * @param {Array} changes 数据变化信息
 */
Element.prototype._update = function (changes) {
    if (!changesIsInDataRef(changes, this.aNode.hotspot.data)) {
        return;
    }

    var me = this;

    var dynamicProps = this.aNode.hotspot.dynamicProps;
    for (var i = 0, l = dynamicProps.length; i < l; i++) {
        var prop = dynamicProps[i];

        for (var j = 0, changeLen = changes.length; j < changeLen; j++) {
            var change = changes[j];

            if (!isDataChangeByElement(change, this, prop.name)
                && (
                    changeExprCompare(change.expr, prop.expr, this.scope)
                    || prop.hintExpr && changeExprCompare(change.expr, prop.hintExpr, this.scope)
                )
            ) {
                handleProp(this, evalExpr(prop.expr, this.scope, this.owner), prop);
                break;
            }
        }
    }

    var htmlDirective = this.aNode.directives.html;
    if (htmlDirective) {
        each(changes, function (change) {
            if (changeExprCompare(change.expr, htmlDirective.value, me.scope)) {
                // #[begin] error
                warnSetHTML(me.el);
                // #[end]
                me.el.innerHTML = evalExpr(htmlDirective.value, me.scope, me.owner);
                return false;
            }
        });
    }
    else {
        elementUpdateChildren(this, changes);
    }
};

/**
 * 执行完成attached状态的行为
 */
Element.prototype._attached = elementOwnAttached;

// exports = module.exports = Element;


/**
 * @file 销毁节点，清空节点上的无用成员
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 销毁节点
 *
 * @param {Object} node 节点对象
 */
function nodeDispose(node) {
    node.el = null;
    node.sel = null;
    node.owner = null;
    node.scope = null;
    node.aNode = null;
    node.parent = null;
    node.parentComponent = null;
    node.children = null;

    if (node._toPhase) {
        node._toPhase('disposed');
    }

    if (node._ondisposed) {
        node._ondisposed();
    }
}

// exports = module.exports = nodeDispose;


/**
 * @file 通过组件反解创建节点的工厂方法
 * @author errorrik(errorrik@gmail.com)
 */

// var hotTags = require('../browser/hot-tags');
// var NodeType = require('./node-type');
// var TextNode = require('./text-node');
// var Element = require('./element');
// var SlotNode = require('./slot-node');
// var ForNode = require('./for-node');
// var IfNode = require('./if-node');
// var TemplateNode = require('./template-node');

// #[begin] reverse
/**
 * 通过组件反解创建节点
 *
 * @param {ANode} aNode 抽象节点
 * @param {DOMChildrenWalker} reverseWalker 子元素遍历对象
 * @param {Node} parent 父亲节点
 * @param {Model=} scope 所属数据环境
 * @return {Node}
 */
function createReverseNode(aNode, reverseWalker, parent, scope) {
    var parentIsComponent = parent.nodeType === NodeType.CMPT;
    var owner = parentIsComponent ? parent : (parent.childOwner || parent.owner);
    scope = scope || (parentIsComponent ? parent.data : (parent.childScope || parent.scope));

    if (aNode.textExpr) {
        return new TextNode(aNode, owner, scope, parent, reverseWalker);
    }

    if (aNode.directives['if']) { // eslint-disable-line dot-notation
        return new IfNode(aNode, owner, scope, parent, reverseWalker);
    }

    if (aNode.directives['for']) { // eslint-disable-line dot-notation
        return new ForNode(aNode, owner, scope, parent, reverseWalker);
    }

    if (hotTags[aNode.tagName]) {
        return new Element(aNode, owner, scope, parent, reverseWalker);
    }

    switch (aNode.tagName) {
        case 'slot':
            return new SlotNode(aNode, owner, scope, parent, reverseWalker);

        case 'template':
            return new TemplateNode(aNode, owner, scope, parent, reverseWalker);

        default:
            var ComponentType = owner.getComponentType(aNode);
            if (ComponentType) {
                return new ComponentType({
                    aNode: aNode,
                    owner: owner,
                    scope: scope,
                    parent: parent,
                    subTag: aNode.tagName,
                    reverseWalker: reverseWalker
                });
            }
    }

    return new Element(aNode, owner, scope, parent, reverseWalker);
}
// #[end]

// exports = module.exports = createReverseNode;


/**
 * @file 销毁释放元素的子元素
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 销毁释放元素的子元素
 *
 * @param {Object} element 元素节点
 * @param {boolean=} noDetach 是否不要把节点从dom移除
 * @param {boolean=} noTransition 是否不显示过渡动画效果
 */
function elementDisposeChildren(element, noDetach, noTransition) {
    var children = element.children;
    var len = children && children.length;
    while (len--) {
        children[len].dispose(noDetach, noTransition);
    }
}

// exports = module.exports = elementDisposeChildren;


/**
 * @file 更新元素的子元素视图
 * @author errorrik(errorrik@gmail.com)
 */


/**
 * 更新元素的子元素视图
 *
 * @param {Object} element 要更新的元素
 * @param {Array} changes 数据变化信息
 */
function elementUpdateChildren(element, changes) {
    for (var i = 0, l = element.children.length; i < l; i++) {
        element.children[i]._update(changes);
    }
}

// exports = module.exports = elementUpdateChildren;


/**
 * @file 使元素节点到达相应的生命周期
 * @author errorrik(errorrik@gmail.com)
 */


// var LifeCycle = require('./life-cycle');

/**
 * 使元素节点到达相应的生命周期
 *
 * @param {string} name 生命周期名称
 */
function elementOwnToPhase(name) {
    this.lifeCycle = LifeCycle[name] || this.lifeCycle;
}

// exports = module.exports = elementOwnToPhase;


/**
 * @file 创建节点的工厂方法
 * @author errorrik(errorrik@gmail.com)
 */

// var hotTags = require('../browser/hot-tags');
// var NodeType = require('./node-type');
// var TextNode = require('./text-node');
// var Element = require('./element');
// var SlotNode = require('./slot-node');
// var ForNode = require('./for-node');
// var IfNode = require('./if-node');
// var TemplateNode = require('./template-node');


/**
 * 创建节点
 *
 * @param {ANode} aNode 抽象节点
 * @param {Node} parent 父亲节点
 * @param {Model=} scope 所属数据环境
 * @return {Node}
 */
function createNode(aNode, parent, scope) {
    var parentIsComponent = parent.nodeType === NodeType.CMPT;
    var owner = parentIsComponent ? parent : (parent.childOwner || parent.owner);
    scope = scope || (parentIsComponent ? parent.data : (parent.childScope || parent.scope));


    if (aNode.textExpr) {
        return new TextNode(aNode, owner, scope, parent);
    }

    if (aNode.directives['if']) { // eslint-disable-line dot-notation
        return new IfNode(aNode, owner, scope, parent);
    }

    if (aNode.directives['for']) { // eslint-disable-line dot-notation
        return new ForNode(aNode, owner, scope, parent);
    }

    if (hotTags[aNode.tagName]) {
        return new Element(aNode, owner, scope, parent);
    }



    switch (aNode.tagName) {
        case 'slot':
            return new SlotNode(aNode, owner, scope, parent);

        case 'template':
            return new TemplateNode(aNode, owner, scope, parent);

        default:
            var ComponentType = owner.getComponentType(aNode);
            if (ComponentType) {
                return new ComponentType({
                    aNode: aNode,
                    owner: owner,
                    scope: scope,
                    parent: parent,
                    subTag: aNode.tagName
                });
            }
    }

    return new Element(aNode, owner, scope, parent);
}

// exports = module.exports = createNode;


/**
 * @file 生成子元素
 * @author errorrik(errorrik@gmail.com)
 */

// var createNode = require('./create-node');

/**
 * 生成子元素
 *
 * @param {Element} element 元素
 * @param {HTMLElement} parentEl 要添加到的父元素
 * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
 */
function genElementChildren(element, parentEl, beforeEl) {
    parentEl = parentEl || element.el;

    var aNodeChildren = element.aNode.children;
    for (var i = 0; i < aNodeChildren.length; i++) {
        var child = createNode(aNodeChildren[i], element);
        element.children.push(child);
        child.attach(parentEl, beforeEl);
    }
}

// exports = module.exports = genElementChildren;


/**
 * @file 将没有 root 只有 children 的元素 attach 到页面
 * @author errorrik(errorrik@gmail.com)
 */


// var insertBefore = require('../browser/insert-before');
// var genElementChildren = require('./gen-element-children');


/**
 * 将没有 root 只有 children 的元素 attach 到页面
 * 主要用于 slot 和 template
 *
 * @param {HTMLElement} parentEl 要添加到的父元素
 * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
 */
function nodeOwnOnlyChildrenAttach(parentEl, beforeEl) {
    this.sel = document.createComment(this.id);
    insertBefore(this.sel, parentEl, beforeEl);

    genElementChildren(this, parentEl, beforeEl);

    this.el = document.createComment(this.id);
    insertBefore(this.el, parentEl, beforeEl);

    this._toPhase('attached');
}

// exports = module.exports = nodeOwnOnlyChildrenAttach;


/**
 * @file slot 节点类
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var guid = require('../util/guid');
// var createANode = require('../parser/create-a-node');
// var ExprType = require('../parser/expr-type');
// var createAccessor = require('../parser/create-accessor');
// var evalExpr = require('../runtime/eval-expr');
// var Data = require('../runtime/data');
// var DataChangeType = require('../runtime/data-change-type');
// var changeExprCompare = require('../runtime/change-expr-compare');
// var insertBefore = require('../browser/insert-before');
// var NodeType = require('./node-type');
// var LifeCycle = require('./life-cycle');
// var getANodeProp = require('./get-a-node-prop');
// var nodeDispose = require('./node-dispose');
// var createReverseNode = require('./create-reverse-node');
// var elementDisposeChildren = require('./element-dispose-children');
// var elementUpdateChildren = require('./element-update-children');
// var elementOwnToPhase = require('./element-own-to-phase');
// var nodeOwnOnlyChildrenAttach = require('./node-own-only-children-attach');


/**
 * slot 节点类
 *
 * @param {Object} aNode 抽象节点
 * @param {Component} owner 所属组件环境
 * @param {Model=} scope 所属数据环境
 * @param {Node} parent 父亲节点
 * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
 */
function SlotNode(aNode, owner, scope, parent, reverseWalker) {
    var realANode = createANode();
    this.aNode = realANode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.parentComponent = parent.nodeType === NodeType.CMPT
        ? parent
        : parent.parentComponent;

    this.id = guid();

    this.lifeCycle = LifeCycle.start;
    this.children = [];

    // calc slot name
    this.nameBind = getANodeProp(aNode, 'name');
    if (this.nameBind) {
        this.isNamed = true;
        this.name = evalExpr(this.nameBind.expr, this.scope, this.owner);
    }

    // calc aNode children
    var givenSlots = owner.givenSlots;
    var givenChildren;
    if (givenSlots) {
        givenChildren = this.isNamed ? givenSlots.named[this.name] : givenSlots.noname;
    }

    if (givenChildren) {
        this.isInserted = true;
    }

    realANode.children = givenChildren || aNode.children.slice(0);

    var me = this;

    // calc scoped slot vars
    realANode.vars = aNode.vars;
    var initData = {};
    each(realANode.vars, function (varItem) {
        me.isScoped = true;
        initData[varItem.name] = evalExpr(varItem.expr, scope, owner);
    });

    // child owner & child scope
    if (this.isInserted) {
        this.childOwner = owner.owner;
        this.childScope = owner.scope;
    }

    if (this.isScoped) {
        this.childScope = new Data(initData, this.childScope || this.scope);
    }


    owner.slotChildren.push(this);

    // #[begin] reverse
    if (reverseWalker) {

        this.sel = document.createComment(this.id);
        insertBefore(this.sel, reverseWalker.target, reverseWalker.current);

        each(this.aNode.children, function (aNodeChild) {
            me.children.push(createReverseNode(aNodeChild, reverseWalker, me));
        });

        this.el = document.createComment(this.id);
        insertBefore(this.el, reverseWalker.target, reverseWalker.current);

        this._toPhase('attached');
    }
    // #[end]
}

SlotNode.prototype.nodeType = NodeType.SLOT;

/**
 * 销毁释放 slot
 *
 * @param {boolean=} noDetach 是否不要把节点从dom移除
 * @param {boolean=} noTransition 是否不显示过渡动画效果
 */
SlotNode.prototype.dispose = function (noDetach, noTransition) {
    this.childOwner = null;
    this.childScope = null;

    elementDisposeChildren(this, noDetach, noTransition);
    nodeDispose(this);
};

SlotNode.prototype.attach = nodeOwnOnlyChildrenAttach;
SlotNode.prototype._toPhase = elementOwnToPhase;

/**
 * 视图更新函数
 *
 * @param {Array} changes 数据变化信息
 * @param {boolean=} isFromOuter 变化信息是否来源于父组件之外的组件
 * @return {boolean}
 */
SlotNode.prototype._update = function (changes, isFromOuter) {
    var me = this;

    if (this.nameBind && evalExpr(this.nameBind.expr, this.scope, this.owner) !== me.name) {
        this.owner._notifyNeedReload();
        return false;
    }

    if (isFromOuter) {
        if (this.isInserted) {
            elementUpdateChildren(this, changes);
        }
    }
    else {
        if (this.isScoped) {
            each(this.aNode.vars, function (varItem) {
                me.childScope.set(varItem.name, evalExpr(varItem.expr, me.scope, me.owner));
            });


            var scopedChanges = [];
            each(changes, function (change) {
                if (!me.isInserted) {
                    scopedChanges.push(change);
                }

                each(me.aNode.vars, function (varItem) {
                    var name = varItem.name;
                    var relation = changeExprCompare(change.expr, varItem.expr, me.scope);

                    if (relation < 1) {
                        return;
                    }

                    if (change.type !== DataChangeType.SPLICE) {
                        scopedChanges.push({
                            type: DataChangeType.SET,
                            expr: createAccessor([
                                {type: ExprType.STRING, value: name}
                            ]),
                            value: me.childScope.get(name),
                            option: change.option
                        });
                    }
                    else if (relation === 2) {
                        scopedChanges.push({
                            expr: createAccessor([
                                {type: ExprType.STRING, value: name}
                            ]),
                            type: DataChangeType.SPLICE,
                            index: change.index,
                            deleteCount: change.deleteCount,
                            value: change.value,
                            insertions: change.insertions,
                            option: change.option
                        });
                    }
                });
            });

            elementUpdateChildren(this, scopedChanges);
        }
        else if (!this.isInserted) {
            elementUpdateChildren(this, changes);
        }
    }
};

// exports = module.exports = SlotNode;


/**
 * @file 复制指令集合对象
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * 复制指令集合对象
 *
 * @param {Object} source 要复制的指令集合对象
 * @param {Object=} excludes 需要排除的key集合
 * @return {Object}
 */
function cloneDirectives(source, excludes) {
    var result = {};
    excludes = excludes || {};

    for (var key in source) {
        if (!excludes[key]) {
            result[key] = source[key];
        }
    }

    return result;
}

// exports = module.exports = cloneDirectives;


/**
 * @file 简单执行销毁节点的行为
 * @author errorrik(errorrik@gmail.com)
 */

// var removeEl = require('../browser/remove-el');
// var nodeDispose = require('./node-dispose');
// var elementDisposeChildren = require('./element-dispose-children');

/**
 * 简单执行销毁节点的行为
 *
 * @param {boolean=} noDetach 是否不要把节点从dom移除
 */
function nodeOwnSimpleDispose(noDetach) {
    elementDisposeChildren(this, noDetach, 1);

    if (!noDetach) {
        removeEl(this.el);
    }

    nodeDispose(this);
}

// exports = module.exports = nodeOwnSimpleDispose;


/**
 * @file 创建节点对应的 stump comment 元素
 * @author errorrik(errorrik@gmail.com)
 */



/**
 * 创建节点对应的 stump comment 主元素
 */
function nodeOwnCreateStump() {
    this.el = this.el || document.createComment(this.id);
}

// exports = module.exports = nodeOwnCreateStump;


/**
 * @file for 指令节点类
 * @author errorrik(errorrik@gmail.com)
 */

// var inherits = require('../util/inherits');
// var each = require('../util/each');
// var guid = require('../util/guid');
// var createANode = require('../parser/create-a-node');
// var ExprType = require('../parser/expr-type');
// var parseExpr = require('../parser/parse-expr');
// var createAccessor = require('../parser/create-accessor');
// var cloneDirectives = require('../parser/clone-directives');
// var Data = require('../runtime/data');
// var DataChangeType = require('../runtime/data-change-type');
// var changeExprCompare = require('../runtime/change-expr-compare');
// var evalExpr = require('../runtime/eval-expr');
// var changesIsInDataRef = require('../runtime/changes-is-in-data-ref');
// var removeEl = require('../browser/remove-el');
// var insertBefore = require('../browser/insert-before');
// var LifeCycle = require('./life-cycle');
// var NodeType = require('./node-type');
// var createNode = require('./create-node');
// var createReverseNode = require('./create-reverse-node');
// var nodeOwnSimpleDispose = require('./node-own-simple-dispose');
// var nodeOwnCreateStump = require('./node-own-create-stump');
// var elementDisposeChildren = require('./element-dispose-children');
// var dataCache = require('../runtime/data-cache');


/**
 * 循环项的数据容器类
 *
 * @inner
 * @class
 * @param {Object} forElement for元素对象
 * @param {*} item 当前项的数据
 * @param {number} index 当前项的索引
 */
function ForItemData(forElement, item, index) {
    this.id = guid();
    this.parent = forElement.scope;
    this.raw = {};
    this.listeners = [];

    this.directive = forElement.aNode.directives['for']; // eslint-disable-line dot-notation
    this.raw[this.directive.item.raw] = item;
    this.raw[this.directive.index.raw] = index;
}

/**
 * 将数据操作的表达式，转换成为对parent数据操作的表达式
 * 主要是对item和index进行处理
 *
 * @param {Object} expr 表达式
 * @return {Object}
 */
ForItemData.prototype.exprResolve = function (expr) {
    var directive = this.directive;
    var me = this;

    function resolveItem(expr) {
        if (expr.type === ExprType.ACCESSOR
            && expr.paths[0].value === directive.item.paths[0].value
        ) {
            return createAccessor(
                directive.value.paths.concat(
                    {
                        type: ExprType.NUMBER,
                        value: me.get(directive.index)
                    },
                    expr.paths.slice(1)
                )
            );
        }

        return expr;
    }

    expr = resolveItem(expr);

    var resolvedPaths = [];

    each(expr.paths, function (item) {
        resolvedPaths.push(
            item.type === ExprType.ACCESSOR
                && item.paths[0].value === directive.index.paths[0].value
            ? {
                type: ExprType.NUMBER,
                value: me.get(directive.index)
            }
            : resolveItem(item)
        );
    });

    return createAccessor(resolvedPaths);
};

// 代理数据操作方法
inherits(ForItemData, Data);
each(
    ['set', 'remove', 'unshift', 'shift', 'push', 'pop', 'splice'],
    function (method) {
        ForItemData.prototype['_' + method] = Data.prototype[method];
        ForItemData.prototype[method] = function (expr) {
            expr = this.exprResolve(parseExpr(expr));
            dataCache.clear();
            this.parent[method].apply(
                this.parent,
                [expr].concat(Array.prototype.slice.call(arguments, 1))
            );
        };
    }
);

/**
 * 创建 for 指令元素的子元素
 *
 * @inner
 * @param {ForDirective} forElement for 指令元素对象
 * @param {*} item 子元素对应数据
 * @param {number} index 子元素对应序号
 * @return {Element}
 */
function createForDirectiveChild(forElement, item, index) {
    var itemScope = new ForItemData(forElement, item, index);
    return createNode(forElement.itemANode, forElement, itemScope);
}

/**
 * for 指令节点类
 *
 * @param {Object} aNode 抽象节点
 * @param {Component} owner 所属组件环境
 * @param {Model=} scope 所属数据环境
 * @param {Node} parent 父亲节点
 * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
 */
function ForNode(aNode, owner, scope, parent, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.parentComponent = parent.nodeType === NodeType.CMPT
        ? parent
        : parent.parentComponent;

    this.id = guid();
    this.children = [];

    this.itemANode = createANode({
        children: aNode.children,
        props: aNode.props,
        events: aNode.events,
        tagName: aNode.tagName,
        vars: aNode.vars,
        hotspot: aNode.hotspot,
        directives: cloneDirectives(aNode.directives, {
            'for': 1
        })
    });

    this.param = aNode.directives['for']; // eslint-disable-line dot-notation

    // #[begin] reverse
    if (reverseWalker) {
        var me = this;
        each(
            evalExpr(this.param.value, this.scope, this.owner),
            function (item, i) {
                var itemScope = new ForItemData(me, item, i);
                var child = createReverseNode(me.itemANode, reverseWalker, me, itemScope);
                me.children.push(child);
            }
        );

        this._create();
        insertBefore(this.el, reverseWalker.target, reverseWalker.current);
    }
    // #[end]
}


ForNode.prototype.nodeType = NodeType.FOR;
ForNode.prototype._create = nodeOwnCreateStump;
ForNode.prototype.dispose = nodeOwnSimpleDispose;

/**
 * 将元素attach到页面的行为
 *
 * @param {HTMLElement} parentEl 要添加到的父元素
 * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
 */
ForNode.prototype.attach = function (parentEl, beforeEl) {
    this._create();
    insertBefore(this.el, parentEl, beforeEl);

    // paint list
    var el = this.el || parentEl.firstChild;
    var data = evalExpr(this.param.value, this.scope, this.owner);
    var len = data && data.length || 0;
    for (var i = 0; i < len; i++) {
        var child = createForDirectiveChild(this, data[i], i);
        this.children.push(child);
        child.attach(parentEl, el);
    }
};

/**
 * 将元素从页面上移除的行为
 */
ForNode.prototype.detach = function () {
    if (this.lifeCycle.attached) {
        elementDisposeChildren(this);
        this.children = [];
        removeEl(this.el);
        this.lifeCycle = LifeCycle.detached;
    }
};

/* eslint-disable fecs-max-statements */

/**
 * 视图更新函数
 *
 * @param {Array} changes 数据变化信息
 */
ForNode.prototype._update = function (changes) {

    var me = this;
    // 控制列表更新策略是否原样更新的变量
    var originalUpdate = this.aNode.directives.transition;


    var oldChildrenLen = this.children.length;
    var childrenChanges = new Array(oldChildrenLen);

    function pushToChildrenChanges(change) {
        for (var i = 0, l = childrenChanges.length; i < l; i++) {
            (childrenChanges[i] = childrenChanges[i] || []).push(change);
        }
    }

    var disposeChildren = [];


    // 判断列表是否父元素下唯一的元素
    // 如果是的话，可以做一些更新优化
    var parentEl = this.el.parentNode;
    var parentFirstChild = parentEl.firstChild;
    var parentLastChild = parentEl.lastChild;
    var isOnlyParentChild = oldChildrenLen > 0 // 有孩子时
            && parentFirstChild === this.children[0].el
            && (parentLastChild === this.el || parentLastChild === this.children[oldChildrenLen - 1].el)
        || oldChildrenLen === 0 // 无孩子时
            && parentFirstChild === this.el
            && parentLastChild === this.el;

    // 控制列表是否整体更新的变量
    var isChildrenRebuild;

    var newList = evalExpr(this.param.value, this.scope, this.owner);
    var newLen = newList && newList.length || 0;

    /* eslint-disable no-redeclare */
    for (var cIndex = 0, cLen = changes.length; cIndex < cLen; cIndex++) {
        var change = changes[cIndex];
        var relation = changeExprCompare(change.expr, this.param.value, this.scope);

        if (!relation) {
            // 无关时，直接传递给子元素更新，列表本身不需要动
            pushToChildrenChanges(change);
        }
        else if (relation > 2) {
            // 变更表达式是list绑定表达式的子项
            // 只需要对相应的子项进行更新
            var changePaths = change.expr.paths;
            var forLen = this.param.value.paths.length;
            var changeIndex = +evalExpr(changePaths[forLen], this.scope, this.owner);

            if (isNaN(changeIndex)) {
                pushToChildrenChanges(change);
            }
            else {
                change = {
                    type: change.type,
                    expr: createAccessor(
                        this.param.item.paths.concat(changePaths.slice(forLen + 1))
                    ),
                    value: change.value,
                    index: change.index,
                    deleteCount: change.deleteCount,
                    insertions: change.insertions,
                    option: change.option
                };

                (childrenChanges[changeIndex] = childrenChanges[changeIndex] || [])
                    .push(change);

                if (this.children[changeIndex]) {
                    if (change.type === DataChangeType.SPLICE) {
                        this.children[changeIndex].scope._splice(
                            change.expr,
                            [].concat(change.index, change.deleteCount, change.insertions),
                            { silent: 1 }
                        );
                    }
                    else {
                        this.children[changeIndex].scope._set(
                            change.expr,
                            change.value,
                            { silent: 1 }
                        );
                    }
                }
            }
        }
        else if (change.type !== DataChangeType.SPLICE) {
            // 变更表达式是list绑定表达式本身或母项的重新设值
            // 此时需要更新整个列表


            // 老的比新的多的部分，标记需要dispose
            if (oldChildrenLen > newLen) {
                disposeChildren = disposeChildren.concat(this.children.slice(newLen));

                childrenChanges = childrenChanges.slice(0, newLen);
                this.children = this.children.slice(0, newLen);
            }

            // 整项变更
            for (var i = 0; i < newLen; i++) {
                (childrenChanges[i] = childrenChanges[i] || []).push({
                    type: DataChangeType.SET,
                    option: change.option,
                    expr: createAccessor(this.param.item.paths.slice(0)),
                    value: newList[i]
                });

                // 对list更上级数据的直接设置
                if (relation < 2) {
                    childrenChanges[i].push(change);
                }

                if (this.children[i]) {
                    this.children[i].scope._set(
                        this.param.item,
                        newList[i],
                        {silent: 1}
                    );
                }
                else {
                    this.children[i] = 0;
                }
            }

            isChildrenRebuild = 1;
        }
        else if (relation === 2 && change.type === DataChangeType.SPLICE && !isChildrenRebuild) {
            // 变更表达式是list绑定表达式本身数组的splice操作
            // 此时需要删除部分项，创建部分项
            var changeStart = change.index;
            var deleteCount = change.deleteCount;
            var insertionsLen = change.insertions.length;
            var newCount = insertionsLen - deleteCount;

            if (newCount) {
                var indexChange = {
                    type: DataChangeType.SET,
                    option: change.option,
                    expr: this.param.index
                };

                for (var i = changeStart + deleteCount; i < this.children.length; i++) {
                    (childrenChanges[i] = childrenChanges[i] || []).push(indexChange);
                    this.children[i] && this.children[i].scope._set(
                        indexChange.expr,
                        i - deleteCount + insertionsLen,
                        {silent: 1}
                    );
                }
            }

            var deleteLen = deleteCount;
            while (deleteLen--) {
                if (deleteLen < insertionsLen) {
                    var i = changeStart + deleteLen;
                    // update
                    (childrenChanges[i] = childrenChanges[i] || []).push({
                        type: DataChangeType.SET,
                        option: change.option,
                        expr: createAccessor(this.param.item.paths.slice(0)),
                        value: change.insertions[deleteLen]
                    });
                    if (this.children[i]) {
                        this.children[i].scope._set(
                            this.param.item,
                            change.insertions[deleteLen],
                            {silent: 1}
                        );
                    }
                }
            }

            if (newCount < 0) {
                disposeChildren = disposeChildren.concat(this.children.splice(changeStart + insertionsLen, -newCount));
                childrenChanges.splice(changeStart + insertionsLen, -newCount);
            }
            else if (newCount > 0) {
                var spliceArgs = [changeStart + deleteCount, 0].concat(new Array(newCount));
                this.children.splice.apply(this.children, spliceArgs);
                childrenChanges.splice.apply(childrenChanges, spliceArgs);
            }
        }
    }

    var newChildrenLen = this.children.length;

    // 标记 length 是否发生变化
    if (newChildrenLen !== oldChildrenLen) {
        var lengthChange = {
            type: DataChangeType.SET,
            option: {},
            expr: createAccessor(
                this.param.value.paths.concat({
                    type: ExprType.STRING,
                    value: 'length'
                })
            )
        };

        if (changesIsInDataRef([lengthChange], this.aNode.hotspot.data)) {
            pushToChildrenChanges(lengthChange);
        }
    }

    // 清除应该干掉的 child
    this._doCreateAndUpdate = doCreateAndUpdate;

    // 这里不用getTransition，getTransition和scope相关，for和forItem的scope是不同的
    // 所以getTransition结果本身也是不一致的。不如直接判断指令是否存在，如果存在就不进入暴力清除模式
    // var violentClear = isOnlyParentChild && newChildrenLen === 0 && !elementGetTransition(me);
    var violentClear = !originalUpdate && isOnlyParentChild && newChildrenLen === 0;

    var disposedChildCount = 0;
    for (var i = 0; i < disposeChildren.length; i++) {
        var disposeChild = disposeChildren[i];
        if (disposeChild) {
            disposeChild._ondisposed = childDisposed;
            disposeChild.dispose(violentClear, violentClear);
        }
        else {
            childDisposed();
        }
    }

    if (violentClear) {
        // cloneNode + replaceChild is faster
        // parentEl.innerHTML = '';
        var replaceNode = parentEl.cloneNode(false);
        parentEl.parentNode.replaceChild(replaceNode, parentEl);
        this.el = document.createComment(this.id);
        replaceNode.appendChild(this.el);
    }

    if (disposeChildren.length === 0) {
        doCreateAndUpdate();
    }


    function childDisposed() {
        disposedChildCount++;
        if (disposedChildCount === disposeChildren.length
            && doCreateAndUpdate === me._doCreateAndUpdate
        ) {
            doCreateAndUpdate();
        }
    }

    function doCreateAndUpdate() {
        me._doCreateAndUpdate = null;
        if (violentClear) {
            return;
        }


        var beforeEl = me.el;

        // 对相应的项进行更新
        if (oldChildrenLen === 0 && isOnlyParentChild) {
            for (var i = 0; i < newChildrenLen; i++) {
                me.children[i] = createForDirectiveChild(me, newList[i], i);
                me.children[i].attach(parentEl, beforeEl);
            }
        }
        else {
            // 如果不attached则直接创建，如果存在则调用更新函数
            var j = -1;
            for (var i = 0; i < newChildrenLen; i++) {
                var child = me.children[i];

                if (child) {
                    childrenChanges[i] && child._update(childrenChanges[i]);
                }
                else {
                    if (j < i) {
                        j = i + 1;
                        beforeEl = null;
                        while (j < newChildrenLen) {
                            var nextChild = me.children[j];
                            if (nextChild) {
                                beforeEl = nextChild.sel || nextChild.el;
                                break;
                            }
                            j++;
                        }
                    }

                    me.children[i] = createForDirectiveChild(me, newList[i], i);
                    me.children[i].attach(parentEl, beforeEl || me.el);
                }
            }
        }
    }
};


// exports = module.exports = ForNode;


/**
 * @file 清洗条件 aNode
 * @author errorrik(errorrik@gmail.com)
 */


// var createANode = require('../parser/create-a-node');
// var cloneDirectives = require('../parser/clone-directives');


/**
 * 清洗条件 aNode，返回纯净无条件指令的 aNode
 *
 * @param {ANode} aNode 条件节点对象
 * @return {ANode}
 */
function rinseCondANode(aNode) {
    var clearANode = createANode({
        children: aNode.children,
        props: aNode.props,
        events: aNode.events,
        tagName: aNode.tagName,
        vars: aNode.vars,
        hotspot: aNode.hotspot,
        directives: cloneDirectives(aNode.directives, {
            'if': 1,
            'else': 1,
            'elif': 1
        })
    });

    return clearANode;
}

// exports = module.exports = rinseCondANode;


/**
 * @file if 指令节点类
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var guid = require('../util/guid');
// var insertBefore = require('../browser/insert-before');
// var evalExpr = require('../runtime/eval-expr');
// var NodeType = require('./node-type');
// var rinseCondANode = require('./rinse-cond-anode');
// var createNode = require('./create-node');
// var createReverseNode = require('./create-reverse-node');
// var nodeOwnCreateStump = require('./node-own-create-stump');
// var elementUpdateChildren = require('./element-update-children');
// var nodeOwnSimpleDispose = require('./node-own-simple-dispose');

/**
 * if 指令节点类
 *
 * @param {Object} aNode 抽象节点
 * @param {Component} owner 所属组件环境
 * @param {Model=} scope 所属数据环境
 * @param {Node} parent 父亲节点
 * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
 */
function IfNode(aNode, owner, scope, parent, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.parentComponent = parent.nodeType === NodeType.CMPT
        ? parent
        : parent.parentComponent;

    this.id = guid();
    this.children = [];

    this.cond = this.aNode.directives['if'].value; // eslint-disable-line dot-notation

    // #[begin] reverse
    if (reverseWalker) {
        if (evalExpr(this.cond, this.scope, this.owner)) {
            this.elseIndex = -1;
            this.children[0] = createReverseNode(
                rinseCondANode(aNode),
                reverseWalker,
                this
            );
        }
        else {
            var me = this;
            each(aNode.elses, function (elseANode, index) {
                var elif = elseANode.directives.elif;

                if (!elif || elif && evalExpr(elif.value, me.scope, me.owner)) {
                    me.elseIndex = index;
                    me.children[0] = createReverseNode(
                        rinseCondANode(elseANode),
                        reverseWalker,
                        me
                    );
                    return false;
                }
            });
        }

        this._create();
        insertBefore(this.el, reverseWalker.target, reverseWalker.current);
    }
    // #[end]
}

IfNode.prototype.nodeType = NodeType.IF;

IfNode.prototype._create = nodeOwnCreateStump;
IfNode.prototype.dispose = nodeOwnSimpleDispose;

IfNode.prototype.attach = function (parentEl, beforeEl) {
    var me = this;
    var elseIndex;
    var child;

    if (evalExpr(this.cond, this.scope, this.owner)) {
        child = createNode(rinseCondANode(me.aNode), me);
        elseIndex = -1;
    }
    else {
        each(me.aNode.elses, function (elseANode, index) {
            var elif = elseANode.directives.elif;

            if (!elif || elif && evalExpr(elif.value, me.scope, me.owner)) {
                child = createNode(rinseCondANode(elseANode), me);
                elseIndex = index;
                return false;
            }
        });
    }

    if (child) {
        me.children[0] = child;
        child.attach(parentEl, beforeEl);
        me.elseIndex = elseIndex;
    }


    this._create();
    insertBefore(this.el, parentEl, beforeEl);
};


/**
 * 视图更新函数
 *
 * @param {Array} changes 数据变化信息
 */
IfNode.prototype._update = function (changes) {
    var me = this;
    var childANode = me.aNode;
    var elseIndex;

    if (evalExpr(this.cond, this.scope, this.owner)) {
        elseIndex = -1;
    }
    else {
        each(me.aNode.elses, function (elseANode, index) {
            var elif = elseANode.directives.elif;

            if (elif && evalExpr(elif.value, me.scope, me.owner) || !elif) {
                elseIndex = index;
                childANode = elseANode;
                return false;
            }
        });
    }

    if (elseIndex === me.elseIndex) {
        elementUpdateChildren(me, changes);
    }
    else {
        var child = me.children[0];
        me.children = [];
        if (child) {
            child._ondisposed = newChild;
            child.dispose();
        }
        else {
            newChild();
        }

        me.elseIndex = elseIndex;
    }

    function newChild() {
        if (typeof elseIndex !== 'undefined') {
            var child = createNode(rinseCondANode(childANode), me);
            // var parentEl = getNodeStumpParent(me);
            child.attach(me.el.parentNode, me.el);

            me.children[0] = child;
        }
    }
};

// exports = module.exports = IfNode;


/**
 * @file template 节点类
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var guid = require('../util/guid');
// var insertBefore = require('../browser/insert-before');
// var NodeType = require('./node-type');
// var LifeCycle = require('./life-cycle');
// var nodeDispose = require('./node-dispose');
// var createReverseNode = require('./create-reverse-node');
// var elementDisposeChildren = require('./element-dispose-children');
// var elementOwnToPhase = require('./element-own-to-phase');
// var elementUpdateChildren = require('./element-update-children');
// var nodeOwnOnlyChildrenAttach = require('./node-own-only-children-attach');

/**
 * template 节点类
 *
 * @param {Object} aNode 抽象节点
 * @param {Component} owner 所属组件环境
 * @param {Model=} scope 所属数据环境
 * @param {Node} parent 父亲节点
 * @param {DOMChildrenWalker?} reverseWalker 子元素遍历对象
 */
function TemplateNode(aNode, owner, scope, parent, reverseWalker) {
    this.aNode = aNode;
    this.owner = owner;
    this.scope = scope;
    this.parent = parent;
    this.parentComponent = parent.nodeType === NodeType.CMPT
        ? parent
        : parent.parentComponent;

    this.id = guid();
    this.lifeCycle = LifeCycle.start;
    this.children = [];

    // #[begin] reverse
    if (reverseWalker) {
        this.sel = document.createComment(this.id);
        insertBefore(this.sel, reverseWalker.target, reverseWalker.current);

        var me = this;
        each(this.aNode.children, function (aNodeChild) {
            me.children.push(createReverseNode(aNodeChild, reverseWalker, me));
        });

        this.el = document.createComment(this.id);
        insertBefore(this.el, reverseWalker.target, reverseWalker.current);

        this._toPhase('attached');
    }
    // #[end]
}



TemplateNode.prototype.nodeType = NodeType.TPL;

TemplateNode.prototype.attach = nodeOwnOnlyChildrenAttach;

/**
 * 销毁释放
 *
 * @param {boolean=} noDetach 是否不要把节点从dom移除
 * @param {boolean=} noTransition 是否不显示过渡动画效果
 */
TemplateNode.prototype.dispose = function (noDetach, noTransition) {
    elementDisposeChildren(this, noDetach, noTransition);
    nodeDispose(this);
};


TemplateNode.prototype._toPhase = elementOwnToPhase;

/**
 * 视图更新函数
 *
 * @param {Array} changes 数据变化信息
 */
TemplateNode.prototype._update = function (changes) {
    elementUpdateChildren(this, changes);
};

// exports = module.exports = TemplateNode;


/**
 * @file 对元素的子节点进行反解
 * @author errorrik(errorrik@gmail.com)
 */


// var each = require('../util/each');
// var DOMChildrenWalker = require('./dom-children-walker');
// var createReverseNode = require('./create-reverse-node');

// #[begin] reverse

/**
 * 对元素的子节点进行反解
 *
 * @param {Object} element 元素
 */
function reverseElementChildren(element) {
    var htmlDirective = element.aNode.directives.html;

    if (!htmlDirective) {
        var reverseWalker = new DOMChildrenWalker(element.el);

        each(element.aNode.children, function (aNodeChild) {
            element.children.push(createReverseNode(aNodeChild, reverseWalker, element));
        });
    }
}
// #[end]

// exports = module.exports = reverseElementChildren;


/**
 * @file 处理元素的属性操作
 * @author errorrik(errorrik@gmail.com)
 */

// var getPropHandler = require('./get-prop-handler');

/**
 * 处理元素属性操作
 *
 * @param {Object} element 元素对象
 * @param {*} value 属性值
 * @param {Object} prop 属性信息对象
 */
function handleProp(element, value, prop) {
    var name = prop.name;
    getPropHandler(element.tagName, name).prop(element.el, value, name, element, prop);
}

// exports = module.exports = handleProp;


/**
 * @file 创建节点对应的 HTMLElement 主元素
 * @author errorrik(errorrik@gmail.com)
 */


// var evalExpr = require('../runtime/eval-expr');
// var createEl = require('../browser/create-el');
// var handleProp = require('./handle-prop');
// var LifeCycle = require('./life-cycle');
// var NodeType = require('./node-type');

var emptyPropWhenCreate = {
    'class': 1,
    'style': 1,
    'id': 1
};

/**
 * 创建节点对应的 HTMLElement 主元素
 */
function elementOwnCreate() {
    if (!this.lifeCycle.created) {
        this.lifeCycle = LifeCycle.painting;

        var isComponent = this.nodeType === NodeType.CMPT;
        var sourceNode = this.aNode.hotspot.sourceNode;
        var props = this.aNode.props;

        if (sourceNode) {
            this.el = sourceNode.cloneNode();
            props = this.aNode.hotspot.dynamicProps;
        }
        else {
            this.el = createEl(this.tagName);
        }

        for (var i = 0, l = props.length; i < l; i++) {
            var prop = props[i];
            var value = isComponent
                ? evalExpr(prop.expr, this.data, this)
                : evalExpr(prop.expr, this.scope, this.owner);

            if (value || !emptyPropWhenCreate[prop.name]) {
                handleProp(this, value, prop);
            }
        }

        this._toPhase('created');
    }
}

// exports = module.exports = elementOwnCreate;


/**
 * @file 将元素attach到页面
 * @author errorrik(errorrik@gmail.com)
 */

// var createNode = require('./create-node');
// var evalExpr = require('../runtime/eval-expr');
// var insertBefore = require('../browser/insert-before');

/**
 * 将元素attach到页面
 *
 * @param {Object} element 元素节点
 * @param {HTMLElement} parentEl 要添加到的父元素
 * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
 */
function elementAttach(element, parentEl, beforeEl) {
    element._create();
    insertBefore(element.el, parentEl, beforeEl);

    if (!element._contentReady) {
        var htmlDirective = element.aNode.directives.html;

        if (htmlDirective) {
            element.el.innerHTML = evalExpr(htmlDirective.value, element.scope, element.owner);
        }
        else {
            var aNodeChildren = element.aNode.children;
            for (var i = 0; i < aNodeChildren.length; i++) {
                var child = createNode(aNodeChildren[i], element);
                element.children.push(child);
                child.attach(element.el);
            }
        }

        element._contentReady = 1;
    }
}


// exports = module.exports = elementAttach;


/**
 * @file 将元素attach到页面
 * @author errorrik(errorrik@gmail.com)
 */


// var elementAttach = require('./element-attach');

/**
 * 将元素attach到页面
 *
 * @param {HTMLElement} parentEl 要添加到的父元素
 * @param {HTMLElement＝} beforeEl 要添加到哪个元素之前
 */
function elementOwnAttach(parentEl, beforeEl) {
    if (!this.lifeCycle.attached) {
        elementAttach(this, parentEl, beforeEl);
        this._attached();
    }
}

// exports = module.exports = elementOwnAttach;


/**
 * @file 获取 element 的 transition 控制对象
 * @author errorrik(errorrik@gmail.com)
 */

// var evalArgs = require('../runtime/eval-args');
// var findMethod = require('../runtime/find-method');
// var NodeType = require('./node-type');

/**
 * 获取 element 的 transition 控制对象
 *
 * @param {Object} element 元素
 * @return {Object?}
 */
function elementGetTransition(element) {
    var aNode = element.nodeType === NodeType.CMPT ? element.givenANode : element.aNode;
    var directive = aNode && aNode.directives.transition;
    var owner = element.owner;

    var transition;
    if (directive && owner) {
        transition = findMethod(owner, directive.value.name);

        if (typeof transition === 'function') {
            transition = transition.apply(
                owner,
                evalArgs(directive.value.args, element.scope, owner)
            );
        }
    }

    return transition || element.transition;
}

// exports = module.exports = elementGetTransition;


/**
 * @file 元素节点执行leave行为
 * @author errorrik(errorrik@gmail.com)
 */

// var elementGetTransition = require('./element-get-transition');


/**
 * 元素节点执行leave行为
 *
 * @param {Object} element 元素
 */
function elementLeave(element) {
    var lifeCycle = element.lifeCycle;
    if (lifeCycle.leaving) {
        return;
    }

    if (element.disposeNoTransition) {
        element._doneLeave();
    }
    else {
        var transition = elementGetTransition(element);

        if (transition && transition.leave) {
            element._toPhase('leaving');
            transition.leave(element.el, function () {
                element._doneLeave();
            });
        }
        else {
            element._doneLeave();
        }
    }
}

// exports = module.exports = elementLeave;


/**
 * @file 将元素从页面上移除
 * @author errorrik(errorrik@gmail.com)
 */

// var elementLeave = require('./element-leave');

/**
 * 将元素从页面上移除
 */
function elementOwnDetach() {
    elementLeave(this);
}


// exports = module.exports = elementOwnDetach;


/**
 * @file 销毁释放元素
 * @author errorrik(errorrik@gmail.com)
 */

// var elementLeave = require('./element-leave');

/**
 * 销毁释放元素
 *
 * @param {boolean=} noDetach 是否不要把节点从dom移除
 * @param {boolean=} noTransition 是否不显示过渡动画效果
 */
function elementOwnDispose(noDetach, noTransition) {
    this.leaveDispose = 1;
    this.disposeNoDetach = noDetach;
    this.disposeNoTransition = noTransition;

    elementLeave(this);
}

// exports = module.exports = elementOwnDispose;


/**
 * @file 为元素的 el 绑定事件
 * @author errorrik(errorrik@gmail.com)
 */

// var on = require('../browser/on');

/**
 * 为元素的 el 绑定事件
 *
 * @param {string} name 事件名
 * @param {Function} listener 监听器
 * @param {boolean} capture 是否是捕获阶段触发
 */
function elementOwnOnEl(name, listener, capture) {
    if (typeof listener === 'function') {
        capture = !!capture;
        this._elFns.push([name, listener, capture]);
        on(this.el, name, listener, capture);
    }
}

// exports = module.exports = elementOwnOnEl;


/**
 * @file  事件绑定不存在的 warning
 * @author varsha(wangshuonpu@gmail.com)
 */

// var each = require('../util/each');

// #[begin] error
/**
 * 事件绑定不存在的 warning
 *
 * @param {Object} eventBind 事件绑定对象
 * @param {Component} owner 所属的组件对象
 */
function warnEventListenMethod(eventBind, owner) {
    var valid = true;
    var method = owner;
    each(eventBind.expr.name.paths, function (path) {
        if (!path.value) {
            return false;
        }

        method = method[path.value];
        valid = !!method;
        return valid;
    });

    if (!valid) {
        var paths = [];
        each(eventBind.expr.name.paths, function (path) {
            paths.push(path.value);
        });
        var message = '[SAN WARNING] ' + eventBind.name + ' listen fail,"' + paths.join('.') + '" not exist';

        /* eslint-disable no-console */
        if (typeof console === 'object' && console.warn) {
            console.warn(message);
        }
        else {
            throw new Error(message);
        }
        /* eslint-enable no-console */
    }
}
// #[end]

// exports = module.exports = warnEventListenMethod;


/**
 * @file 完成元素 attached 后的行为
 * @author errorrik(errorrik@gmail.com)
 */


// var bind = require('../util/bind');
// var empty = require('../util/empty');
// var isBrowser = require('../browser/is-browser');
// var trigger = require('../browser/trigger');
// var NodeType = require('./node-type');
// var elementGetTransition = require('./element-get-transition');
// var eventDeclarationListener = require('./event-declaration-listener');
// var getPropHandler = require('./get-prop-handler');
// var warnEventListenMethod = require('./warn-event-listen-method');

/**
 * 双绑输入框CompositionEnd事件监听函数
 *
 * @inner
 */
function inputOnCompositionEnd() {
    if (!this.composing) {
        return;
    }

    this.composing = 0;

    trigger(this, 'input');
}

/**
 * 双绑输入框CompositionStart事件监听函数
 *
 * @inner
 */
function inputOnCompositionStart() {
    this.composing = 1;
}

function xPropOutputer(xProp, data) {
    getPropHandler(this.tagName, xProp.name).output(this, xProp, data);
}

function inputXPropOutputer(element, xProp, data) {
    var outputer = bind(xPropOutputer, element, xProp, data);
    return function (e) {
        if (!this.composing) {
            outputer(e);
        }
    };
}

/**
 * 完成元素 attached 后的行为
 *
 * @param {Object} element 元素节点
 */
function elementOwnAttached() {
    this._toPhase('created');

    var isComponent = this.nodeType === NodeType.CMPT;
    var data = isComponent ? this.data : this.scope;

    /* eslint-disable no-redeclare */

    // 处理自身变化时双向绑定的逻辑
    var xProps = this.aNode.hotspot.xProps;
    for (var i = 0, l = xProps.length; i < l; i++) {
        var xProp = xProps[i];

        switch (xProp.name) {
            case 'value':
                switch (this.tagName) {
                    case 'input':
                    case 'textarea':
                        if (isBrowser && window.CompositionEvent) {
                            this._onEl('change', inputOnCompositionEnd);
                            this._onEl('compositionstart', inputOnCompositionStart);
                            this._onEl('compositionend', inputOnCompositionEnd);
                        }

                        this._onEl(
                            ('oninput' in this.el) ? 'input' : 'propertychange',
                            inputXPropOutputer(this, xProp, data)
                        );

                        break;

                    case 'select':
                        this._onEl('change', bind(xPropOutputer, this, xProp, data));
                        break;
                }
                break;

            case 'checked':
                switch (this.tagName) {
                    case 'input':
                        switch (this.el.type) {
                            case 'checkbox':
                            case 'radio':
                                this._onEl('click', bind(xPropOutputer, this, xProp, data));
                        }
                }
                break;
        }
    }

    // bind events
    var events = isComponent
        ? this.aNode.events.concat(this.nativeEvents)
        : this.aNode.events;

    for (var i = 0, l = events.length; i < l; i++) {
        var eventBind = events[i];
        var owner = isComponent ? this : this.owner;

        // 判断是否是nativeEvent，下面的warn方法和事件绑定都需要
        // 依此指定eventBind.expr.name位于owner还是owner.owner上
        if (eventBind.modifier.native) {
            owner = owner.owner;
            data = this.scope || owner.data;
        }

        // #[begin] error
        warnEventListenMethod(eventBind, owner);
        // #[end]

        this._onEl(
            eventBind.name,
            bind(
                eventDeclarationListener,
                owner,
                eventBind,
                0,
                data
            ),
            eventBind.modifier.capture
        );
    }

    this._toPhase('attached');


    if (this._isInitFromEl) {
        this._isInitFromEl = false;
    }
    else {
        var transition = elementGetTransition(this);
        if (transition && transition.enter) {
            transition.enter(this.el, empty);
        }
    }
}

// exports = module.exports = elementOwnAttached;


/**
 * @file 销毁元素节点
 * @author errorrik(errorrik@gmail.com)
 */


// var un = require('../browser/un');
// var removeEl = require('../browser/remove-el');
// var elementDisposeChildren = require('./element-dispose-children');
// var nodeDispose = require('./node-dispose');

/**
 * 销毁元素节点
 *
 * @param {Object} element 要销毁的元素节点
 * @param {Object=} options 销毁行为的参数
 */
function elementDispose(element) {
    elementDisposeChildren(element, 1, 1);

    // el 事件解绑
    var len = element._elFns.length;
    while (len--) {
        var fn = element._elFns[len];
        un(element.el, fn[0], fn[1], fn[2]);
    }
    element._elFns = null;


    // 如果没有parent，说明是一个root component，一定要从dom树中remove
    if (!element.disposeNoDetach || !element.parent) {
        removeEl(element.el);
    }

    if (element._toPhase) {
        element._toPhase('detached');
    }

    nodeDispose(element);
}


// exports = module.exports = elementDispose;


/**
 * @file 初始化 element 节点的 tagName 处理
 * @author errorrik(errorrik@gmail.com)
 */

// var ieOldThan9 = require('../browser/ie-old-than-9');

/**
 * 初始化 element 节点的 tagName 处理
 *
 * @param {Object} node 节点对象
 */
function elementInitTagName(node) {
    node.tagName = node.tagName || node.aNode.tagName || 'div';

    // #[begin] allua
    // ie8- 不支持innerHTML输出自定义标签
    if (ieOldThan9 && node.tagName.indexOf('-') > 0) {
        node.tagName = 'div';
    }
    // #[end]
}


// exports = module.exports = elementInitTagName;


/**
 * @file 给 devtool 发通知消息
 * @author errorrik(errorrik@gmail.com)
 */

// var isBrowser = require('../browser/is-browser');

// #[begin] devtool
var san4devtool;

/**
 * 给 devtool 发通知消息
 *
 * @param {string} name 消息名称
 * @param {*} arg 消息参数
 */
function emitDevtool(name, arg) {
    if (isBrowser && san4devtool && san4devtool.debug && window.__san_devtool__) {
        window.__san_devtool__.emit(name, arg);
    }
}

emitDevtool.start = function (main) {
    san4devtool = main;
    emitDevtool('san', main);
};
// #[end]

// exports = module.exports = emitDevtool;


/**
 * @file 组件类
 * @author errorrik(errorrik@gmail.com)
 */

// var bind = require('../util/bind');
// var each = require('../util/each');
// var guid = require('../util/guid');
// var extend = require('../util/extend');
// var nextTick = require('../util/next-tick');
// var emitDevtool = require('../util/emit-devtool');
// var ExprType = require('../parser/expr-type');
// var parseExpr = require('../parser/parse-expr');
// var createAccessor = require('../parser/create-accessor');
// var postProp = require('../parser/post-prop');
// var removeEl = require('../browser/remove-el');
// var Data = require('../runtime/data');
// var evalExpr = require('../runtime/eval-expr');
// var changeExprCompare = require('../runtime/change-expr-compare');
// var compileComponent = require('./compile-component');
// var componentPreheat = require('./component-preheat');
// var LifeCycle = require('./life-cycle');
// var getANodeProp = require('./get-a-node-prop');
// var isDataChangeByElement = require('./is-data-change-by-element');
// var eventDeclarationListener = require('./event-declaration-listener');
// var reverseElementChildren = require('./reverse-element-children');
// var camelComponentBinds = require('./camel-component-binds');
// var NodeType = require('./node-type');
// var elementInitTagName = require('./element-init-tag-name');
// var elementOwnAttached = require('./element-own-attached');
// var elementDispose = require('./element-dispose');
// var elementUpdateChildren = require('./element-update-children');
// var elementOwnOnEl = require('./element-own-on-el');
// var elementOwnCreate = require('./element-own-create');
// var elementOwnAttach = require('./element-own-attach');
// var elementOwnDetach = require('./element-own-detach');
// var elementOwnDispose = require('./element-own-dispose');
// var warnEventListenMethod = require('./warn-event-listen-method');
// var elementDisposeChildren = require('./element-dispose-children');
// var elementAttach = require('./element-attach');
// var handleProp = require('./handle-prop');
// var createDataTypesChecker = require('../util/create-data-types-checker');



/**
 * 组件类
 *
 * @class
 * @param {Object} options 初始化参数
 */
function Component(options) { // eslint-disable-line
    options = options || {};

    this.lifeCycle = LifeCycle.start;
    this.children = [];
    this._elFns = [];
    this.listeners = {};
    this.slotChildren = [];

    var clazz = this.constructor;

    this.filters = this.filters || clazz.filters || {};
    this.computed = this.computed || clazz.computed || {};
    this.messages = this.messages || clazz.messages || {};
    this.subTag = options.subTag;

    // compile
    compileComponent(clazz);
    componentPreheat(clazz);

    var me = this;
    var protoANode = clazz.prototype.aNode;

    me.givenANode = options.aNode;
    me.givenNamedSlotBinds = [];
    me.givenSlots = {
        named: {}
    };

    this.owner = options.owner;
    this.scope = options.scope;
    this.el = options.el;

    var parent = options.parent;
    if (parent) {
        this.parent = parent;
        this.parentComponent = parent.nodeType === NodeType.CMPT
            ? parent
            : parent && parent.parentComponent;
    }

    this.id = guid();

    // #[begin] reverse
    if (this.el) {
        var firstCommentNode = this.el.firstChild;
        if (firstCommentNode.nodeType === 3) {
            firstCommentNode = firstCommentNode.nextSibling;
        }

        if (firstCommentNode && firstCommentNode.nodeType === 8) {
            var stumpMatch = firstCommentNode.data.match(/^\s*s-data:([\s\S]+)?$/);
            if (stumpMatch) {
                var stumpText = stumpMatch[1];

                // fill component data
                options.data = (new Function(
                    'return ' + stumpText.replace(/^[\s\n]*/, '')
                ))();

                if (firstCommentNode.previousSibling) {
                    removeEl(firstCommentNode.previousSibling);
                }
                removeEl(firstCommentNode);
            }
        }
    }
    // #[end]

    // native事件数组
    this.nativeEvents = [];

    if (this.givenANode) {
        // 组件运行时传入的结构，做slot解析
        this._createGivenSlots();

        each(this.givenANode.events, function (eventBind) {
            // 保存当前实例的native事件，下面创建aNode时候做合并
            if (eventBind.modifier.native) {
                me.nativeEvents.push(eventBind);
                return;
            }

            // #[begin] error
            warnEventListenMethod(eventBind, options.owner);
            // #[end]

            me.on(
                eventBind.name,
                bind(eventDeclarationListener, options.owner, eventBind, 1, options.scope),
                eventBind
            );
        });

        this.tagName = protoANode.tagName || me.givenANode.tagName;
        this.binds = camelComponentBinds(this.givenANode.props);
    }

    this._toPhase('compiled');

    // init data
    this.data = new Data(
        extend(
            typeof this.initData === 'function' && this.initData() || {},
            options.data
        )
    );

    elementInitTagName(this);

    each(this.binds, function (bind) {
        postProp(bind);

        if (me.scope) {
            var value = evalExpr(bind.expr, me.scope, me.owner);
            if (typeof value !== 'undefined') {
                // See: https://github.com/ecomfe/san/issues/191
                me.data.set(bind.name, value);
            }
        }
    });

    // #[begin] error
    // 在初始化 + 数据绑定后，开始数据校验
    // NOTE: 只在开发版本中进行属性校验
    var dataTypes = this.dataTypes || clazz.dataTypes;
    if (dataTypes) {
        var dataTypeChecker = createDataTypesChecker(
            dataTypes,
            this.subTag || this.name || clazz.name
        );
        this.data.setTypeChecker(dataTypeChecker);
        this.data.checkDataTypes();
    }
    // #[end]

    this.computedDeps = {};
    /* eslint-disable guard-for-in */
    for (var expr in this.computed) {
        if (!this.computedDeps[expr]) {
            this._calcComputed(expr);
        }
    }
    /* eslint-enable guard-for-in */

    if (!this.dataChanger) {
        this.dataChanger = bind(this._dataChanger, this);
        this.data.listen(this.dataChanger);
    }
    this._toPhase('inited');

    // #[begin] reverse
    if (this.el) {
        reverseElementChildren(this);
        this._attached();
    }

    var walker = options.reverseWalker;
    if (walker) {
        var currentNode = walker.current;
        if (currentNode && currentNode.nodeType === 1) {
            this.el = currentNode;
            walker.goNext();
        }

        reverseElementChildren(this);

        this._attached();
    }
    // #[end]
}



Component.prototype.getComponentType = function (aNode) {
    return this.components[aNode.tagName];
};

/**
 * 初始化创建组件外部传入的插槽对象
 *
 * @protected
 */
Component.prototype._createGivenSlots = function () {
    var me = this;
    me.givenSlots.named = {};

    // 组件运行时传入的结构，做slot解析
    me.givenANode && me.scope && each(me.givenANode.children, function (child) {
        var target;

        var slotBind = !child.textExpr && getANodeProp(child, 'slot');
        if (slotBind) {
            !me.givenSlotInited && me.givenNamedSlotBinds.push(slotBind);

            var slotName = evalExpr(slotBind.expr, me.scope, me.owner);
            target = me.givenSlots.named[slotName];
            if (!target) {
                target = me.givenSlots.named[slotName] = [];
            }
        }
        else if (!me.givenSlotInited) {
            target = me.givenSlots.noname;
            if (!target) {
                target = me.givenSlots.noname = [];
            }
        }

        target && target.push(child);
    });

    me.givenSlotInited = true;
};

/**
 * 类型标识
 *
 * @type {string}
 */
Component.prototype.nodeType = NodeType.CMPT;

/**
 * 在下一个更新周期运行函数
 *
 * @param {Function} fn 要运行的函数
 */
Component.prototype.nextTick = nextTick;

/* eslint-disable operator-linebreak */
/**
 * 使节点到达相应的生命周期
 *
 * @protected
 * @param {string} name 生命周期名称
 */
Component.prototype._callHook =
Component.prototype._toPhase = function (name) {
    if (!this.lifeCycle[name]) {
        this.lifeCycle = LifeCycle[name] || this.lifeCycle;
        if (typeof this[name] === 'function') {
            this[name]();
        }

        // 通知devtool
        // #[begin] devtool
        emitDevtool('comp-' + name, this);
        // #[end]
    }
};
/* eslint-enable operator-linebreak */


/**
 * 添加事件监听器
 *
 * @param {string} name 事件名
 * @param {Function} listener 监听器
 * @param {string?} declaration 声明式
 */
Component.prototype.on = function (name, listener, declaration) {
    if (typeof listener === 'function') {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }
        this.listeners[name].push({fn: listener, declaration: declaration});
    }
};

/**
 * 移除事件监听器
 *
 * @param {string} name 事件名
 * @param {Function=} listener 监听器
 */
Component.prototype.un = function (name, listener) {
    var nameListeners = this.listeners[name];
    var len = nameListeners && nameListeners.length;

    while (len--) {
        if (!listener || listener === nameListeners[len].fn) {
            nameListeners.splice(len, 1);
        }
    }
};


/**
 * 派发事件
 *
 * @param {string} name 事件名
 * @param {Object} event 事件对象
 */
Component.prototype.fire = function (name, event) {
    var me = this;
    each(this.listeners[name], function (listener) {
        listener.fn.call(me, event);
    });
};

/**
 * 计算 computed 属性的值
 *
 * @private
 * @param {string} computedExpr computed表达式串
 */
Component.prototype._calcComputed = function (computedExpr) {
    var computedDeps = this.computedDeps[computedExpr];
    if (!computedDeps) {
        computedDeps = this.computedDeps[computedExpr] = {};
    }

    this.data.set(computedExpr, this.computed[computedExpr].call({
        data: {
            get: bind(function (expr) {
                // #[begin] error
                if (!expr) {
                    throw new Error('[SAN ERROR] call get method in computed need argument');
                }
                // #[end]

                if (!computedDeps[expr]) {
                    computedDeps[expr] = 1;

                    if (this.computed[expr]) {
                        this._calcComputed(expr);
                    }

                    this.watch(expr, function () {
                        this._calcComputed(computedExpr);
                    });
                }

                return this.data.get(expr);
            }, this)
        }
    }));
};

/**
 * 派发消息
 * 组件可以派发消息，消息将沿着组件树向上传递，直到遇上第一个处理消息的组件
 *
 * @param {string} name 消息名称
 * @param {*?} value 消息值
 */
Component.prototype.dispatch = function (name, value) {
    var parentComponent = this.parentComponent;

    while (parentComponent) {
        var receiver = parentComponent.messages[name] || parentComponent.messages['*'];
        if (typeof receiver === 'function') {
            receiver.call(
                parentComponent,
                {target: this, value: value, name: name}
            );
            break;
        }

        parentComponent = parentComponent.parentComponent;
    }
};

/**
 * 获取组件内部的 slot
 *
 * @param {string=} name slot名称，空为default slot
 * @return {Array}
 */
Component.prototype.slot = function (name) {
    var result = [];
    var me = this;

    function childrenTraversal(children) {
        each(children, function (child) {
            if (child.nodeType === NodeType.SLOT && child.owner === me) {
                if (child.isNamed && child.name === name
                    || !child.isNamed && !name
                ) {
                    result.push(child);
                }
            }
            else {
                childrenTraversal(child.children);
            }
        });
    }

    childrenTraversal(this.children);
    return result;
};

/**
 * 获取带有 san-ref 指令的子组件引用
 *
 * @param {string} name 子组件的引用名
 * @return {Component}
 */
Component.prototype.ref = function (name) {
    var refTarget;
    var owner = this;

    function childrenTraversal(children) {
        each(children, function (child) {
            elementTraversal(child);
            return !refTarget;
        });
    }

    function elementTraversal(element) {
        var nodeType = element.nodeType;
        if (nodeType === NodeType.TEXT) {
            return;
        }

        if (element.owner === owner) {
            var ref;
            switch (element.nodeType) {
                case NodeType.ELEM:
                    ref = element.aNode.directives.ref;
                    if (ref && evalExpr(ref.value, element.scope, owner) === name) {
                        refTarget = element.el;
                    }
                    break;

                case NodeType.CMPT:
                    ref = element.givenANode.directives.ref;
                    if (ref && evalExpr(ref.value, element.scope, owner) === name) {
                        refTarget = element;
                    }
            }

            !refTarget && childrenTraversal(element.slotChildren);
        }

        !refTarget && childrenTraversal(element.children);
    }

    childrenTraversal(this.children);

    return refTarget;
};


/**
 * 视图更新函数
 *
 * @param {Array?} changes 数据变化信息
 */
Component.prototype._update = function (changes) {
    if (this.lifeCycle.disposed) {
        return;
    }

    var me = this;


    var needReloadForSlot = false;
    this._notifyNeedReload = function () {
        needReloadForSlot = true;
    };

    if (changes) {
        each(changes, function (change) {
            var changeExpr = change.expr;

            each(me.binds, function (bindItem) {
                var relation;
                var setExpr = bindItem.name;
                var updateExpr = bindItem.expr;

                if (!isDataChangeByElement(change, me, setExpr)
                    && (relation = changeExprCompare(changeExpr, updateExpr, me.scope))
                ) {
                    if (relation > 2) {
                        setExpr = createAccessor(
                            [
                                {
                                    type: ExprType.STRING,
                                    value: setExpr
                                }
                            ].concat(changeExpr.paths.slice(updateExpr.paths.length))
                        );

                        updateExpr = changeExpr;
                    }

                    me.data.set(setExpr, evalExpr(updateExpr, me.scope, me.owner), {
                        target: {
                            id: me.owner.id
                        }
                    });
                }
            });

            each(me.givenNamedSlotBinds, function (bindItem) {
                needReloadForSlot = needReloadForSlot || changeExprCompare(changeExpr, bindItem.expr, me.scope);
                return !needReloadForSlot;
            });
        });

        if (needReloadForSlot) {
            this._createGivenSlots();
            this._repaintChildren();
        }
        else {
            var slotChildrenLen = this.slotChildren.length;
            while (slotChildrenLen--) {
                var slotChild = this.slotChildren[slotChildrenLen];

                if (slotChild.lifeCycle.disposed) {
                    this.slotChildren.splice(slotChildrenLen, 1);
                }
                else if (slotChild.isInserted) {
                    slotChild._update(changes, 1);
                }
            }
        }
    }

    var dataChanges = this.dataChanges;
    if (dataChanges) {
        this.dataChanges = null;
        each(this.aNode.hotspot.dynamicProps, function (prop) {
            each(dataChanges, function (change) {
                if (changeExprCompare(change.expr, prop.expr, me.data)
                    || prop.hintExpr && changeExprCompare(change.expr, prop.hintExpr, me.data)
                ) {
                    handleProp(me, evalExpr(prop.expr, me.data, me), prop);
                    return false;
                }
            });
        });

        elementUpdateChildren(this, dataChanges);
        if (needReloadForSlot) {
            this._createGivenSlots();
            this._repaintChildren();
        }

        this._toPhase('updated');

        if (this.owner) {
            this._updateBindxOwner(dataChanges);
            this.owner._update();
        }
    }

    this._notifyNeedReload = null;
};

Component.prototype._updateBindxOwner = function (dataChanges) {
    var me = this;

    if (this.owner) {
        each(dataChanges, function (change) {
            each(me.binds, function (bindItem) {
                var changeExpr = change.expr;
                if (bindItem.x
                    && !isDataChangeByElement(change, me.owner)
                    && changeExprCompare(changeExpr, parseExpr(bindItem.name), me.data)
                ) {
                    var updateScopeExpr = bindItem.expr;
                    if (changeExpr.paths.length > 1) {
                        updateScopeExpr = createAccessor(
                            bindItem.expr.paths.concat(changeExpr.paths.slice(1))
                        );
                    }

                    me.scope.set(
                        updateScopeExpr,
                        evalExpr(changeExpr, me.data, me),
                        {
                            target: {
                                id: me.id,
                                prop: bindItem.name
                            }
                        }
                    );
                }
            });
        });
    }
};

/**
 * 重新绘制组件的内容
 * 当 dynamic slot name 发生变更或 slot 匹配发生变化时，重新绘制
 * 在组件级别重绘有点粗暴，但是能保证视图结果正确性
 */
Component.prototype._repaintChildren = function () {
    elementDisposeChildren(this, 0, 1);
    this.children = [];

    this._contentReady = 0;
    this.slotChildren = [];
    elementAttach(this);
};


/**
 * 组件内部监听数据变化的函数
 *
 * @private
 * @param {Object} change 数据变化信息
 */
Component.prototype._dataChanger = function (change) {
    if (this.lifeCycle.painting || this.lifeCycle.created) {
        if (!this.dataChanges) {
            nextTick(this._update, this);
            this.dataChanges = [];
        }

        this.dataChanges.push(change);
    }
    else if (this.lifeCycle.inited && this.owner) {
        this._updateBindxOwner([change]);
    }
};


/**
 * 监听组件的数据变化
 *
 * @param {string} dataName 变化的数据项
 * @param {Function} listener 监听函数
 */
Component.prototype.watch = function (dataName, listener) {
    var dataExpr = parseExpr(dataName);

    this.data.listen(bind(function (change) {
        if (changeExprCompare(change.expr, dataExpr, this.data)) {
            listener.call(this, evalExpr(dataExpr, this.data, this), change);
        }
    }, this));
};

/**
 * 组件销毁的行为
 *
 * @param {Object} options 销毁行为的参数
 */
Component.prototype.dispose = elementOwnDispose;

Component.prototype._doneLeave = function () {
    if (this.leaveDispose) {
        if (!this.lifeCycle.disposed) {
            // 这里不用挨个调用 dispose 了，因为 children 释放链会调用的
            this.slotChildren = null;

            this.data.unlisten();
            this.dataChanger = null;
            this.dataChanges = null;

            elementDispose(
                this,
                this.disposeNoDetach,
                this.disposeNoTransition
            );
            this.listeners = null;

            this.givenANode = null;
            this.givenSlots = null;
            this.givenNamedSlotBinds = null;
        }
    }
    else if (this.lifeCycle.attached) {
        removeEl(this.el);
        this._toPhase('detached');
    }
};

/**
 * 完成组件 attached 后的行为
 *
 * @param {Object} element 元素节点
 */
Component.prototype._attached = elementOwnAttached;

Component.prototype.attach = elementOwnAttach;
Component.prototype.detach = elementOwnDetach;
Component.prototype._create = elementOwnCreate;
Component.prototype._onEl = elementOwnOnEl;


// exports = module.exports = Component;


/**
 * @file 创建组件类
 * @author errorrik(errorrik@gmail.com)
 */

// var Component = require('./component');
// var inherits = require('../util/inherits');

/**
 * 创建组件类
 *
 * @param {Object} proto 组件类的方法表
 * @return {Function}
 */
function defineComponent(proto) {
    // 如果传入一个不是 san component 的 constructor，直接返回不是组件构造函数
    // 这种场景导致的错误 san 不予考虑
    if (typeof proto === 'function') {
        return proto;
    }

    // #[begin] error
    if (typeof proto !== 'object') {
        throw new Error('[SAN FATAL] param must be a plain object.');
    }
    // #[end]

    function ComponentClass(option) { // eslint-disable-line
        Component.call(this, option);
    }

    ComponentClass.prototype = proto;
    inherits(ComponentClass, Component);

    return ComponentClass;
}

// exports = module.exports = defineComponent;


/**
 * @file 编译组件类
 * @author errorrik(errorrik@gmail.com)
 */


// var createANode = require('../parser/create-a-node');
// var parseTemplate = require('../parser/parse-template');
// var parseText = require('../parser/parse-text');
// var defineComponent = require('./define-component');


/**
 * 编译组件类。预解析template和components
 *
 * @param {Function} ComponentClass 组件类
 */
function compileComponent(ComponentClass) {
    var proto = ComponentClass.prototype;

    // pre define components class
    if (!proto.hasOwnProperty('_cmptReady')) {
        proto.components = ComponentClass.components || proto.components || {};
        var components = proto.components;

        for (var key in components) { // eslint-disable-line
            var componentClass = components[key];

            if (typeof componentClass === 'object') {
                components[key] = defineComponent(componentClass);
            }
            else if (componentClass === 'self') {
                components[key] = ComponentClass;
            }
        }

        proto._cmptReady = 1;
    }


    // pre compile template
    if (!proto.hasOwnProperty('aNode')) {
        proto.aNode = createANode();

        var tpl = ComponentClass.template || proto.template;
        if (tpl) {
            var aNode = parseTemplate(tpl, {
                trimWhitespace: proto.trimWhitespace || ComponentClass.trimWhitespace,
                delimiters: proto.delimiters || ComponentClass.delimiters
            });
            var firstChild = aNode.children[0];

            // #[begin] error
            if (aNode.children.length !== 1 || firstChild.textExpr) {
                throw new Error('[SAN FATAL] template must have a root element.');
            }
            // #[end]

            proto.aNode = firstChild;
            if (firstChild.tagName === 'template') {
                firstChild.tagName = null;
            }

            var componentPropExtra = {
                'class': {name: 'class', expr: parseText('{{class | _class | _sep(" ")}}')},
                'style': {name: 'style', expr: parseText('{{style | _style | _sep(";")}}')},
                'id': {name: 'id', expr: parseText('{{id}}')}
            };

            var len = firstChild.props.length;
            while (len--) {
                var prop = firstChild.props[len];
                var extra = componentPropExtra[prop.name];

                if (extra) {
                    firstChild.props.splice(len, 1);
                    componentPropExtra[prop.name] = prop;

                    if (prop.name !== 'id') {
                        prop.expr.segs.push(extra.expr.segs[0]);
                        prop.expr.value = null;
                    }
                }
            }

            firstChild.props.push(
                componentPropExtra['class'], // eslint-disable-line dot-notation
                componentPropExtra.style,
                componentPropExtra.id
            );
        }
    }
}

// exports = module.exports = compileComponent;


/**
 * @file 组件预热
 * @author errorrik(errorrik@gmail.com)
 */

// var ExprType = require('../parser/expr-type');
// var each = require('../util/each');
// var createEl = require('../browser/create-el');
// var getPropHandler = require('./get-prop-handler');
// var getANodeProp = require('./get-a-node-prop');
// var isBrowser = require('../browser/is-browser');

/**
 * 组件预热，分析组件aNode的数据引用等信息
 *
 * @param {Function} ComponentClass 组件类
 */
function componentPreheat(ComponentClass) {
    var stack = [];

    function recordHotspotData(refs, notContentData) {
        var len = stack.length;
        each(stack, function (aNode, index) {
            if (!notContentData || index !== len - 1) {
                each(refs, function (ref) {
                    aNode.hotspot.data[ref] = 1;
                });
            }
        });
    }


    function analyseANodeHotspot(aNode) {
        if (!aNode.hotspot) {
            stack.push(aNode);


            if (aNode.textExpr) {
                aNode.hotspot = {data: {}};
                recordHotspotData(analyseExprDataHotspot(aNode.textExpr));
            }
            else {
                var sourceNode;
                if (isBrowser && aNode.tagName && !/^(template|slot|select|input|option)$/i.test(aNode.tagName)) {
                    sourceNode = createEl(aNode.tagName);
                }

                aNode.hotspot = {
                    data: {},
                    dynamicProps: [],
                    xProps: [],
                    props: {},
                    sourceNode: sourceNode
                };


                // === analyse hotspot data: start
                each(aNode.vars, function (varItem) {
                    recordHotspotData(analyseExprDataHotspot(varItem.expr));
                });

                each(aNode.props, function (prop) {
                    recordHotspotData(analyseExprDataHotspot(prop.expr));
                });

                /* eslint-disable guard-for-in */
                for (var key in aNode.directives) {
                    var directive = aNode.directives[key];
                    recordHotspotData(analyseExprDataHotspot(directive.value), key !== 'html');
                }
                /* eslint-enable guard-for-in */

                each(aNode.elses, function (child) {
                    analyseANodeHotspot(child);
                });

                each(aNode.children, function (child) {
                    analyseANodeHotspot(child);
                });
                // === analyse hotspot data: end


                // === analyse hotspot props: start
                each(aNode.props, function (prop, index) {
                    aNode.hotspot.props[prop.name] = index;

                    if (prop.name === 'id') {
                        prop.id = true;
                        aNode.hotspot.idProp = prop;
                        aNode.hotspot.dynamicProps.push(prop);
                    }
                    else if (prop.expr.value != null) {
                        if (sourceNode) {
                            getPropHandler(aNode.tagName, prop.name)
                                .prop(sourceNode, prop.expr.value, prop.name, aNode);
                        }
                    }
                    else {
                        if (prop.x) {
                            aNode.hotspot.xProps.push(prop);
                        }
                        aNode.hotspot.dynamicProps.push(prop);
                    }
                });

                // ie 下，如果 option 没有 value 属性，select.value = xx 操作不会选中 option
                // 所以没有设置 value 时，默认把 option 的内容作为 value
                if (aNode.tagName === 'option'
                    && !getANodeProp(aNode, 'value')
                    && aNode.children[0]
                ) {
                    var valueProp = {
                        name: 'value',
                        expr: aNode.children[0].textExpr
                    };
                    aNode.props.push(valueProp);
                    aNode.hotspot.dynamicProps.push(valueProp);
                    aNode.hotspot.props.value = aNode.props.length - 1;
                }
                // === analyse hotspot props: end
            }

            stack.pop();
        }
    }

    analyseANodeHotspot(ComponentClass.prototype.aNode);
}

/**
 * 分析表达式的数据引用
 *
 * @param {Object} expr 要分析的表达式
 * @return {Array}
 */
function analyseExprDataHotspot(expr) {
    var refs = [];

    function analyseExprs(exprs) {
        each(exprs, function (expr) {
            refs = refs.concat(analyseExprDataHotspot(expr));
        });
    }

    switch (expr.type) {
        case ExprType.ACCESSOR:
            var paths = expr.paths;
            refs.push(paths[0].value);

            if (paths.length > 1) {
                refs.push(paths[0].value + '.' + (paths[1].value || '*'));
            }

            analyseExprs(paths.slice(1));
            break;

        case ExprType.UNARY:
            return analyseExprDataHotspot(expr.expr);

        case ExprType.TEXT:
        case ExprType.BINARY:
        case ExprType.TERTIARY:
            analyseExprs(expr.segs);
            break;

        case ExprType.INTERP:
            refs = analyseExprDataHotspot(expr.expr);

            each(expr.filters, function (filter) {
                analyseExprs(filter.name.paths);
                analyseExprs(filter.args);
            });

            break;

    }

    return refs;
}

// exports = module.exports = componentPreheat;


/**
 * @file 将 binds 的 name 从 kebabcase 转换成 camelcase
 * @author errorrik(errorrik@gmail.com)
 */

// var kebab2camel = require('../util/kebab2camel');
// var each = require('../util/each');

/**
 * 将 binds 的 name 从 kebabcase 转换成 camelcase
 *
 * @param {Array} binds binds集合
 * @return {Array}
 */
function camelComponentBinds(binds) {
    var result = [];
    each(binds, function (bind) {
        result.push({
            name: kebab2camel(bind.name),
            expr: bind.expr,
            x: bind.x,
            raw: bind.raw
        });
    });

    return result;
}

// exports = module.exports = camelComponentBinds;


/**
 * @file 编译源码的 helper 方法集合
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var ExprType = require('../parser/expr-type');

// #[begin] ssr
// 
// /**
//  * 编译源码的 helper 方法集合对象
//  */
// var compileExprSource = {
// 
//     /**
//      * 字符串字面化
//      *
//      * @param {string} source 需要字面化的字符串
//      * @return {string} 字符串字面化结果
//      */
//     stringLiteralize: function (source) {
//         return '"'
//             + source
//                 .replace(/\x5C/g, '\\\\')
//                 .replace(/"/g, '\\"')
//                 .replace(/\x0A/g, '\\n')
//                 .replace(/\x09/g, '\\t')
//                 .replace(/\x0D/g, '\\r')
//                 // .replace( /\x08/g, '\\b' )
//                 // .replace( /\x0C/g, '\\f' )
//             + '"';
//     },
// 
//     /**
//      * 生成数据访问表达式代码
//      *
//      * @param {Object?} accessorExpr accessor表达式对象
//      * @return {string}
//      */
//     dataAccess: function (accessorExpr) {
//         var code = 'componentCtx.data';
//         if (accessorExpr) {
//             each(accessorExpr.paths, function (path) {
//                 if (path.type === ExprType.ACCESSOR) {
//                     code += '[' + compileExprSource.dataAccess(path) + ']';
//                     return;
//                 }
// 
//                 switch (typeof path.value) {
//                     case 'string':
//                         code += '.' + path.value;
//                         break;
// 
//                     case 'number':
//                         code += '[' + path.value + ']';
//                         break;
//                 }
//             });
//         }
// 
//         return code;
//     },
// 
//     /**
//      * 生成插值代码
//      *
//      * @param {Object} interpExpr 插值表达式对象
//      * @return {string}
//      */
//     interp: function (interpExpr) {
//         var code = compileExprSource.expr(interpExpr.expr);
// 
// 
//         each(interpExpr.filters, function (filter) {
//             code = 'componentCtx.callFilter("' + filter.name.paths[0].value + '", [' + code;
//             each(filter.args, function (arg) {
//                 code += ', ' + compileExprSource.expr(arg);
//             });
//             code += '])';
//         });
// 
//         if (!interpExpr.original) {
//             return 'escapeHTML(' + code + ')';
//         }
// 
//         return code;
//     },
// 
//     /**
//      * 生成文本片段代码
//      *
//      * @param {Object} textExpr 文本片段表达式对象
//      * @return {string}
//      */
//     text: function (textExpr) {
//         if (textExpr.segs.length === 0) {
//             return '""';
//         }
// 
//         var code = '';
// 
//         each(textExpr.segs, function (seg) {
//             var segCode = compileExprSource.expr(seg);
//             code += code ? ' + ' + segCode : segCode;
//         });
// 
//         return code;
//     },
// 
//     /**
//      * 二元表达式操作符映射表
//      *
//      * @type {Object}
//      */
//     binaryOp: {
//         /* eslint-disable */
//         43: '+',
//         45: '-',
//         42: '*',
//         47: '/',
//         60: '<',
//         62: '>',
//         76: '&&',
//         94: '!=',
//         121: '<=',
//         122: '==',
//         123: '>=',
//         155: '!==',
//         183: '===',
//         248: '||'
//         /* eslint-enable */
//     },
// 
//     /**
//      * 生成表达式代码
//      *
//      * @param {Object} expr 表达式对象
//      * @return {string}
//      */
//     expr: function (expr) {
//         switch (expr.type) {
//             case ExprType.UNARY:
//                 return '!' + compileExprSource.expr(expr.expr);
// 
//             case ExprType.BINARY:
//                 return compileExprSource.expr(expr.segs[0])
//                     + compileExprSource.binaryOp[expr.operator]
//                     + compileExprSource.expr(expr.segs[1]);
// 
//             case ExprType.TERTIARY:
//                 return compileExprSource.expr(expr.segs[0])
//                     + '?' + compileExprSource.expr(expr.segs[1])
//                     + ':' + compileExprSource.expr(expr.segs[2]);
// 
//             case ExprType.STRING:
//                 return compileExprSource.stringLiteralize(expr.literal || expr.value);
// 
//             case ExprType.NUMBER:
//                 return expr.value;
// 
//             case ExprType.BOOL:
//                 return expr.value ? 'true' : 'false';
// 
//             case ExprType.ACCESSOR:
//                 return compileExprSource.dataAccess(expr);
// 
//             case ExprType.INTERP:
//                 return compileExprSource.interp(expr);
// 
//             case ExprType.TEXT:
//                 return compileExprSource.text(expr);
//         }
//     }
// };
// #[end]

// exports = module.exports = compileExprSource;


/**
 * @file 编译源码的中间buffer类
 * @author errorrik(errorrik@gmail.com)
 */

// var each = require('../util/each');
// var compileExprSource = require('./compile-expr-source');


// #[begin] ssr
// /**
//  * 编译源码的中间buffer类
//  *
//  * @class
//  */
// function CompileSourceBuffer() {
//     this.segs = [];
// }
// 
// /**
//  * 添加原始代码，将原封不动输出
//  *
//  * @param {string} code 原始代码
//  */
// CompileSourceBuffer.prototype.addRaw = function (code) {
//     this.segs.push({
//         type: 'RAW',
//         code: code
//     });
// };
// 
// /**
//  * 添加被拼接为html的原始代码
//  *
//  * @param {string} code 原始代码
//  */
// CompileSourceBuffer.prototype.joinRaw = function (code) {
//     this.segs.push({
//         type: 'JOIN_RAW',
//         code: code
//     });
// };
// 
// /**
//  * 添加renderer方法的起始源码
//  */
// CompileSourceBuffer.prototype.addRendererStart = function () {
//     this.addRaw('function (data, parentCtx, givenSlots) {');
//     this.addRaw('var html = "";');
// };
// 
// /**
//  * 添加renderer方法的结束源码
//  */
// CompileSourceBuffer.prototype.addRendererEnd = function () {
//     this.addRaw('return html;');
//     this.addRaw('}');
// };
// 
// /**
//  * 添加被拼接为html的静态字符串
//  *
//  * @param {string} str 被拼接的字符串
//  */
// CompileSourceBuffer.prototype.joinString = function (str) {
//     this.segs.push({
//         str: str,
//         type: 'JOIN_STRING'
//     });
// };
// 
// /**
//  * 添加被拼接为html的数据访问
//  *
//  * @param {Object?} accessor 数据访问表达式对象
//  */
// CompileSourceBuffer.prototype.joinDataStringify = function () {
//     this.segs.push({
//         type: 'JOIN_DATA_STRINGIFY'
//     });
// };
// 
// /**
//  * 添加被拼接为html的表达式
//  *
//  * @param {Object} expr 表达式对象
//  */
// CompileSourceBuffer.prototype.joinExpr = function (expr) {
//     this.segs.push({
//         expr: expr,
//         type: 'JOIN_EXPR'
//     });
// };
// 
// /**
//  * 生成编译后代码
//  *
//  * @return {string}
//  */
// CompileSourceBuffer.prototype.toCode = function () {
//     var code = [];
//     var temp = '';
// 
//     function genStrLiteral() {
//         if (temp) {
//             code.push('html += ' + compileExprSource.stringLiteralize(temp) + ';');
//         }
// 
//         temp = '';
//     }
// 
//     each(this.segs, function (seg) {
//         if (seg.type === 'JOIN_STRING') {
//             temp += seg.str;
//             return;
//         }
// 
//         genStrLiteral();
//         switch (seg.type) {
//             case 'JOIN_DATA_STRINGIFY':
//                 code.push('html += stringifier.any(' + compileExprSource.dataAccess() + ');');
//                 break;
// 
//             case 'JOIN_EXPR':
//                 code.push('html += ' + compileExprSource.expr(seg.expr) + ';');
//                 break;
// 
//             case 'JOIN_RAW':
//                 code.push('html += ' + seg.code + ';');
//                 break;
// 
//             case 'RAW':
//                 code.push(seg.code);
//                 break;
// 
//         }
//     });
// 
//     genStrLiteral();
// 
//     return code.join('\n');
// };
// 
// #[end]

// exports = module.exports = CompileSourceBuffer;


/**
 * @file 将组件编译成 render 方法的 js 源码
 * @author errorrik(errorrik@gmail.com)
 */


// var each = require('../util/each');
// var guid = require('../util/guid');
// var parseExpr = require('../parser/parse-expr');
// var createANode = require('../parser/create-a-node');
// var cloneDirectives = require('../parser/clone-directives');
// var autoCloseTags = require('../browser/auto-close-tags');
// var CompileSourceBuffer = require('./compile-source-buffer');
// var compileExprSource = require('./compile-expr-source');
// var rinseCondANode = require('./rinse-cond-anode');
// var getANodeProp = require('./get-a-node-prop');

// #[begin] ssr
// 
// /**
//  * 生成序列化时起始桩的html
//  *
//  * @param {string} type 桩类型标识
//  * @param {string?} content 桩内的内容
//  * @return {string}
//  */
// function serializeStump(type, content) {
//     return '<!--s-' + type + (content ? ':' + content : '') + '-->';
// }
// 
// /**
//  * 生成序列化时结束桩的html
//  *
//  * @param {string} type 桩类型标识
//  * @return {string}
//  */
// function serializeStumpEnd(type) {
//     return '<!--/s-' + type + '-->';
// }
// 
// /**
//  * element 的编译方法集合对象
//  *
//  * @inner
//  */
// var elementSourceCompiler = {
// 
//     /* eslint-disable max-params */
//     /**
//      * 编译元素标签头
//      *
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {string} tagName 标签名
//      * @param {Array} props 属性列表
//      * @param {string?} extraProp 额外的属性串
//      * @param {boolean?} isClose 是否闭合
//      */
//     tagStart: function (sourceBuffer, tagName, props, extraProp, isClose) {
//         sourceBuffer.joinString('<' + tagName);
//         sourceBuffer.joinString(extraProp || '');
// 
//         // index list
//         var propsIndex = {};
//         each(props, function (prop) {
//             propsIndex[prop.name] = prop;
//         });
// 
//         each(props, function (prop) {
//             if (prop.name === 'slot') {
//                 return;
//             }
// 
//             if (prop.name === 'value') {
//                 switch (tagName) {
//                     case 'textarea':
//                         return;
// 
//                     case 'select':
//                         sourceBuffer.addRaw('$selectValue = '
//                             + compileExprSource.expr(prop.expr)
//                             + ' || "";'
//                         );
//                         return;
// 
//                     case 'option':
//                         sourceBuffer.addRaw('$optionValue = '
//                             + compileExprSource.expr(prop.expr)
//                             + ';'
//                         );
//                         // value
//                         sourceBuffer.addRaw('if ($optionValue != null) {');
//                         sourceBuffer.joinRaw('" value=\\"" + $optionValue + "\\""');
//                         sourceBuffer.addRaw('}');
// 
//                         // selected
//                         sourceBuffer.addRaw('if ($optionValue === $selectValue) {');
//                         sourceBuffer.joinString(' selected');
//                         sourceBuffer.addRaw('}');
//                         return;
//                 }
//             }
// 
//             switch (prop.name) {
//                 case 'readonly':
//                 case 'disabled':
//                 case 'multiple':
//                     if (prop.raw === '') {
//                         sourceBuffer.joinString(' ' + prop.name);
//                     }
//                     else {
//                         sourceBuffer.joinRaw('boolAttrFilter("' + prop.name + '", '
//                             + compileExprSource.expr(prop.expr)
//                             + ')'
//                         );
//                     }
//                     break;
// 
//                 case 'checked':
//                     if (tagName === 'input') {
//                         var valueProp = propsIndex.value;
//                         var valueCode = compileExprSource.expr(valueProp.expr);
// 
//                         if (valueProp) {
//                             switch (propsIndex.type.raw) {
//                                 case 'checkbox':
//                                     sourceBuffer.addRaw('if (contains('
//                                         + compileExprSource.expr(prop.expr)
//                                         + ', '
//                                         + valueCode
//                                         + ')) {'
//                                     );
//                                     sourceBuffer.joinString(' checked');
//                                     sourceBuffer.addRaw('}');
//                                     break;
// 
//                                 case 'radio':
//                                     sourceBuffer.addRaw('if ('
//                                         + compileExprSource.expr(prop.expr)
//                                         + ' === '
//                                         + valueCode
//                                         + ') {'
//                                     );
//                                     sourceBuffer.joinString(' checked');
//                                     sourceBuffer.addRaw('}');
//                                     break;
//                             }
//                         }
//                     }
//                     break;
// 
//                 default:
//                     if (prop.attr) {
//                         sourceBuffer.joinString(' ' + prop.attr);
//                     }
//                     else {
//                         sourceBuffer.joinRaw('attrFilter("' + prop.name + '", '
//                             + (prop.x ? 'escapeHTML(' : '')
//                             + compileExprSource.expr(prop.expr)
//                             + (prop.x ? ')' : '')
//                             + ')'
//                         );
//                     }
//                     break;
//             }
//         });
// 
//         sourceBuffer.joinString(isClose ? '/>' : '>');
//     },
//     /* eslint-enable max-params */
// 
//     /**
//      * 编译元素闭合
//      *
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {string} tagName 标签名
//      */
//     tagEnd: function (sourceBuffer, tagName) {
//         if (!autoCloseTags[tagName]) {
//             sourceBuffer.joinString('</' + tagName + '>');
//         }
// 
//         if (tagName === 'select') {
//             sourceBuffer.addRaw('$selectValue = null;');
//         }
// 
//         if (tagName === 'option') {
//             sourceBuffer.addRaw('$optionValue = null;');
//         }
//     },
// 
//     /**
//      * 编译元素内容
//      *
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {ANode} aNode 元素的抽象节点信息
//      * @param {Component} owner 所属组件实例环境
//      */
//     inner: function (sourceBuffer, aNode, owner) {
//         // inner content
//         if (aNode.tagName === 'textarea') {
//             var valueProp = getANodeProp(aNode, 'value');
//             if (valueProp) {
//                 sourceBuffer.joinRaw('escapeHTML('
//                     + compileExprSource.expr(valueProp.expr)
//                     + ')'
//                 );
//             }
// 
//             return;
//         }
// 
//         var htmlDirective = aNode.directives.html;
//         if (htmlDirective) {
//             sourceBuffer.joinExpr(htmlDirective.value);
//         }
//         else {
//             /* eslint-disable no-use-before-define */
//             each(aNode.children, function (aNodeChild) {
//                 sourceBuffer.addRaw(aNodeCompiler.compile(aNodeChild, sourceBuffer, owner));
//             });
//             /* eslint-enable no-use-before-define */
//         }
//     }
// };
// 
// /**
//  * ANode 的编译方法集合对象
//  *
//  * @inner
//  */
// var aNodeCompiler = {
// 
//     /**
//      * 编译节点
//      *
//      * @param {ANode} aNode 抽象节点
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      * @param {Object} extra 编译所需的一些额外信息
//      */
//     compile: function (aNode, sourceBuffer, owner, extra) {
//         extra = extra || {};
//         var compileMethod = 'compileElement';
// 
//         if (aNode.textExpr) {
//             compileMethod = 'compileText';
//         }
//         else if (aNode.directives['if']) { // eslint-disable-line dot-notation
//             compileMethod = 'compileIf';
//         }
//         else if (aNode.directives['for']) { // eslint-disable-line dot-notation
//             compileMethod = 'compileFor';
//         }
//         else if (aNode.tagName === 'slot') {
//             compileMethod = 'compileSlot';
//         }
//         else if (aNode.tagName === 'template') {
//             compileMethod = 'compileTemplate';
//         }
//         else {
//             var ComponentType = owner.getComponentType(aNode);
//             if (ComponentType) {
//                 compileMethod = 'compileComponent';
//                 extra.ComponentClass = ComponentType;
//             }
//         }
// 
//         aNodeCompiler[compileMethod](aNode, sourceBuffer, owner, extra);
//     },
// 
//     /**
//      * 编译文本节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      */
//     compileText: function (aNode, sourceBuffer) {
//         if (aNode.textExpr.original) {
//             sourceBuffer.joinString(serializeStump('text'));
//         }
// 
//         sourceBuffer.joinExpr(aNode.textExpr);
// 
//         if (aNode.textExpr.original) {
//             sourceBuffer.joinString(serializeStumpEnd('text'));
//         }
//     },
// 
//     /**
//      * 编译template节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      */
//     compileTemplate: function (aNode, sourceBuffer, owner) {
//         elementSourceCompiler.inner(sourceBuffer, aNode, owner);
//     },
// 
//     /**
//      * 编译 if 节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      */
//     compileIf: function (aNode, sourceBuffer, owner) {
//         sourceBuffer.addRaw('(function () {');
// 
//         sourceBuffer.addRaw('var ifIndex = null;');
// 
//         // output main if
//         var ifDirective = aNode.directives['if']; // eslint-disable-line dot-notation
//         sourceBuffer.addRaw('if (' + compileExprSource.expr(ifDirective.value) + ') {');
//         sourceBuffer.addRaw(
//             aNodeCompiler.compile(
//                 rinseCondANode(aNode),
//                 sourceBuffer,
//                 owner
//             )
//         );
//         sourceBuffer.addRaw('}');
// 
//         // output elif and else
//         each(aNode.elses, function (elseANode, index) {
//             var elifDirective = elseANode.directives.elif;
//             if (elifDirective) {
//                 sourceBuffer.addRaw('else if (' + compileExprSource.expr(elifDirective.value) + ') {');
//             }
//             else {
//                 sourceBuffer.addRaw('else {');
//             }
// 
//             sourceBuffer.addRaw(
//                 aNodeCompiler.compile(
//                     rinseCondANode(elseANode),
//                     sourceBuffer,
//                     owner
//                 )
//             );
//             sourceBuffer.addRaw('}');
//         });
// 
//         sourceBuffer.addRaw('})();');
//     },
// 
//     /**
//      * 编译 for 节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      */
//     compileFor: function (aNode, sourceBuffer, owner) {
//         var forElementANode = createANode({
//             children: aNode.children,
//             props: aNode.props,
//             events: aNode.events,
//             tagName: aNode.tagName,
//             directives: cloneDirectives(aNode.directives, {
//                 'for': 1
//             }),
//             hotspot: aNode.hotspot
//         });
// 
//         var forDirective = aNode.directives['for']; // eslint-disable-line dot-notation
//         var itemName = forDirective.item.raw;
//         var indexName = forDirective.index.raw;
//         var listName = compileExprSource.dataAccess(forDirective.value);
// 
//         if (indexName === '$index') {
//             indexName = guid();
//         }
// 
//         sourceBuffer.addRaw('for ('
//             + 'var ' + indexName + ' = 0; '
//             + indexName + ' < ' + listName + '.length; '
//             + indexName + '++) {'
//         );
//         sourceBuffer.addRaw('componentCtx.data.' + indexName + '=' + indexName + ';');
//         sourceBuffer.addRaw('componentCtx.data.' + itemName + '= ' + listName + '[' + indexName + '];');
//         sourceBuffer.addRaw(
//             aNodeCompiler.compile(
//                 forElementANode,
//                 sourceBuffer,
//                 owner
//             )
//         );
//         sourceBuffer.addRaw('}');
//     },
// 
//     /**
//      * 编译 slot 节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      */
//     compileSlot: function (aNode, sourceBuffer, owner) {
//         sourceBuffer.addRaw('(function () {');
// 
//         sourceBuffer.addRaw('function $defaultSlotRender(componentCtx) {');
//         sourceBuffer.addRaw('  var html = "";');
//         each(aNode.children, function (aNodeChild) {
//             sourceBuffer.addRaw(aNodeCompiler.compile(aNodeChild, sourceBuffer, owner));
//         });
//         sourceBuffer.addRaw('  return html;');
//         sourceBuffer.addRaw('}');
// 
//         sourceBuffer.addRaw('  var $givenSlot = [];');
// 
//         var nameProp = getANodeProp(aNode, 'name');
//         if (nameProp) {
//             sourceBuffer.addRaw('var $slotName = ' + compileExprSource.expr(nameProp.expr) + ';');
//         }
//         else {
//             sourceBuffer.addRaw('var $slotName = null;');
//         }
// 
//         sourceBuffer.addRaw('var $ctxGivenSlots = componentCtx.givenSlots;');
//         sourceBuffer.addRaw('for (var $i = 0; $i < $ctxGivenSlots.length; $i++) {');
//         sourceBuffer.addRaw('  if ($ctxGivenSlots[$i][1] == $slotName) {');
//         sourceBuffer.addRaw('    $givenSlot.push($ctxGivenSlots[$i][0]);');
//         sourceBuffer.addRaw('  }');
//         sourceBuffer.addRaw('}');
// 
// 
//         sourceBuffer.addRaw('var $isInserted = $givenSlot.length > 0;');
//         sourceBuffer.addRaw('if (!$isInserted) { $givenSlot.push($defaultSlotRender); }');
// 
//         sourceBuffer.addRaw('var $slotCtx = $isInserted ? componentCtx.owner : componentCtx;');
//         if (aNode.vars) {
//             sourceBuffer.addRaw('$slotCtx = {data: extend({}, $slotCtx.data), filters: $slotCtx.filters, callFilter: $slotCtx.callFilter};'); // eslint-disable-line
//             each(aNode.vars, function (varItem) {
//                 sourceBuffer.addRaw(
//                     '$slotCtx.data["' + varItem.name + '"] = '
//                     + compileExprSource.expr(varItem.expr)
//                     + ';'
//                 );
//             });
//         }
// 
//         sourceBuffer.addRaw('for (var $renderIndex = 0; $renderIndex < $givenSlot.length; $renderIndex++) {');
//         sourceBuffer.addRaw('  html += $givenSlot[$renderIndex]($slotCtx);');
//         sourceBuffer.addRaw('}');
// 
//         sourceBuffer.addRaw('})();');
//     },
// 
//     /**
//      * 编译普通节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      * @param {Object} extra 编译所需的一些额外信息
//      */
//     compileElement: function (aNode, sourceBuffer, owner, extra) {
//         extra = extra || {};
//         // if (aNode.tagName === 'option'
//         //     && !getANodeProp(aNode, 'value')
//         //     && aNode.children[0]
//         // ) {
//         //     aNode.props.push({
//         //         name: 'value',
//         //         expr: aNode.children[0].textExpr
//         //     });
//         // }
// 
//         elementSourceCompiler.tagStart(
//             sourceBuffer,
//             aNode.tagName,
//             aNode.props,
//             extra.prop
//         );
// 
//         elementSourceCompiler.inner(sourceBuffer, aNode, owner);
//         elementSourceCompiler.tagEnd(sourceBuffer, aNode.tagName);
//     },
// 
//     /**
//      * 编译组件节点
//      *
//      * @param {ANode} aNode 节点对象
//      * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//      * @param {Component} owner 所属组件实例环境
//      * @param {Object} extra 编译所需的一些额外信息
//      * @param {Function} extra.ComponentClass 对应组件类
//      */
//     compileComponent: function (aNode, sourceBuffer, owner, extra) {
//         if (aNode) {
//             sourceBuffer.addRaw('var $slotName = null;');
//             sourceBuffer.addRaw('var $givenSlots = [];');
//             each(aNode.children, function (child) {
//                 var slotBind = !child.textExpr && getANodeProp(child, 'slot');
//                 if (slotBind) {
//                     sourceBuffer.addRaw('$slotName = ' + compileExprSource.expr(slotBind.expr) + ';');
//                     sourceBuffer.addRaw('$givenSlots.push([function (componentCtx) {');
//                     sourceBuffer.addRaw('  var html = "";');
//                     sourceBuffer.addRaw(aNodeCompiler.compile(child, sourceBuffer, owner));
//                     sourceBuffer.addRaw('  return html;');
//                     sourceBuffer.addRaw('}, $slotName]);');
//                 }
//                 else {
//                     sourceBuffer.addRaw('$givenSlots.push([function (componentCtx) {');
//                     sourceBuffer.addRaw('  var html = "";');
//                     sourceBuffer.addRaw(aNodeCompiler.compile(child, sourceBuffer, owner));
//                     sourceBuffer.addRaw('  return html;');
//                     sourceBuffer.addRaw('}]);');
//                 }
//             });
//         }
// 
//         var ComponentClass = extra.ComponentClass;
//         var component = new ComponentClass({
//             aNode: aNode,
//             owner: owner,
//             subTag: aNode.tagName
//         });
// 
//         var givenData = [];
// 
//         each(component.binds, function (prop) {
//             givenData.push(
//                 compileExprSource.stringLiteralize(prop.name)
//                 + ':'
//                 + compileExprSource.expr(prop.expr)
//             );
//         });
// 
//         sourceBuffer.addRaw('html += (');
//         sourceBuffer.addRendererStart();
//         compileComponentSource(sourceBuffer, component, extra && extra.prop);
//         sourceBuffer.addRendererEnd();
//         sourceBuffer.addRaw(')({' + givenData.join(',\n') + '}, componentCtx, $givenSlots);');
//         sourceBuffer.addRaw('$givenSlots = null;');
//     }
// };
// /* eslint-disable guard-for-in */
// 
// /**
//  * 生成组件 renderer 时 ctx 对象构建的代码
//  *
//  * @inner
//  * @param {CompileSourceBuffer} sourceBuffer 编译源码的中间buffer
//  * @param {Object} component 组件实例
//  * @param {string?} extraProp 额外的属性串
//  */
// function compileComponentSource(sourceBuffer, component, extraProp) {
//     sourceBuffer.addRaw(genComponentContextCode(component));
//     sourceBuffer.addRaw('componentCtx.owner = parentCtx;');
//     sourceBuffer.addRaw('componentCtx.givenSlots = givenSlots;');
// 
// 
//     sourceBuffer.addRaw('data = extend(componentCtx.data, data);');
//     sourceBuffer.addRaw('for (var $i = 0; $i < componentCtx.computedNames.length; $i++) {');
//     sourceBuffer.addRaw('  var $computedName = componentCtx.computedNames[$i];');
//     sourceBuffer.addRaw('  data[$computedName] = componentCtx.computed[$computedName]();');
//     sourceBuffer.addRaw('}');
// 
//     extraProp = extraProp || '';
// 
//     var eventDeclarations = [];
//     for (var key in component.listeners) {
//         each(component.listeners[key], function (listener) {
//             if (listener.declaration) {
//                 eventDeclarations.push(listener.declaration);
//             }
//         });
//     }
// 
//     elementSourceCompiler.tagStart(
//         sourceBuffer,
//         component.tagName,
//         component.aNode.props,
//         extraProp
//     );
// 
//     if (!component.owner) {
//         sourceBuffer.joinString('<!--s-data:');
//         sourceBuffer.joinDataStringify();
//         sourceBuffer.joinString('-->');
//     }
// 
// 
// 
//     elementSourceCompiler.inner(sourceBuffer, component.aNode, component);
//     elementSourceCompiler.tagEnd(sourceBuffer, component.tagName);
// }
// 
// var stringifier = {
//     obj: function (source) {
//         var prefixComma;
//         var result = '{';
// 
//         for (var key in source) {
//             if (typeof source[key] === 'undefined') {
//                 continue;
//             }
// 
//             if (prefixComma) {
//                 result += ',';
//             }
//             prefixComma = 1;
// 
//             result += compileExprSource.stringLiteralize(key) + ':' + stringifier.any(source[key]);
//         }
// 
//         return result + '}';
//     },
// 
//     arr: function (source) {
//         var prefixComma;
//         var result = '[';
// 
//         each(source, function (value) {
//             if (prefixComma) {
//                 result += ',';
//             }
//             prefixComma = 1;
// 
//             result += stringifier.any(value);
//         });
// 
//         return result + ']';
//     },
// 
//     str: function (source) {
//         return compileExprSource.stringLiteralize(source);
//     },
// 
//     date: function (source) {
//         return 'new Date(' + source.getTime() + ')';
//     },
// 
//     any: function (source) {
//         switch (typeof source) {
//             case 'string':
//                 return stringifier.str(source);
// 
//             case 'number':
//                 return '' + source;
// 
//             case 'boolean':
//                 return source ? 'true' : 'false';
// 
//             case 'object':
//                 if (!source) {
//                     return null;
//                 }
// 
//                 if (source instanceof Array) {
//                     return stringifier.arr(source);
//                 }
// 
//                 if (source instanceof Date) {
//                     return stringifier.date(source);
//                 }
// 
//                 return stringifier.obj(source);
//         }
// 
//         throw new Error('Cannot Stringify:' + source);
//     }
// };
// 
// /**
//  * 生成组件 renderer 时 ctx 对象构建的代码
//  *
//  * @inner
//  * @param {Object} component 组件实例
//  * @return {string}
//  */
// function genComponentContextCode(component) {
//     var code = ['var componentCtx = {'];
// 
//     // given anode
//     code.push('givenSlots: [],');
// 
//     // filters
//     code.push('filters: {');
//     var filterCode = [];
//     for (var key in component.filters) {
//         var filter = component.filters[key];
// 
//         if (typeof filter === 'function') {
//             filterCode.push(key + ': ' + filter.toString());
//         }
//     }
//     code.push(filterCode.join(','));
//     code.push('},');
// 
//     code.push(
//         'callFilter: function (name, args) {',
//         '    var filter = this.filters[name] || DEFAULT_FILTERS[name];',
//         '    if (typeof filter === "function") {',
//         '        return filter.apply(this, args);',
//         '    }',
//         '},'
//     );
// 
//     /* eslint-disable no-redeclare */
//     // computed obj
//     code.push('computed: {');
//     var computedCode = [];
//     for (var key in component.computed) {
//         var computed = component.computed[key];
// 
//         if (typeof computed === 'function') {
//             computedCode.push(key + ': '
//                 + computed.toString().replace(
//                     /this.data.get\(([^\)]+)\)/g,
//                     function (match, exprLiteral) {
//                         var exprStr = (new Function('return ' + exprLiteral))();
//                         var expr = parseExpr(exprStr);
// 
//                         return compileExprSource.expr(expr);
//                     })
//             );
//         }
//     }
//     code.push(computedCode.join(','));
//     code.push('},');
// 
//     // computed names
//     code.push('computedNames: [');
//     computedCode = [];
//     for (var key in component.computed) {
//         var computed = component.computed[key];
// 
//         if (typeof computed === 'function') {
//             computedCode.push('"' + key + '"');
//         }
//     }
//     code.push(computedCode.join(','));
//     code.push('],');
//     /* eslint-enable no-redeclare */
// 
//     // data
//     code.push('data: ' + stringifier.any(component.data.get()) + ',');
// 
//     // tagName
//     code.push('tagName: "' + component.tagName + '"');
//     code.push('};');
// 
//     return code.join('\n');
// }
// 
// /* eslint-enable guard-for-in */
// 
// /* eslint-disable no-unused-vars */
// /* eslint-disable fecs-camelcase */
// 
// /**
//  * 组件编译的模板函数
//  *
//  * @inner
//  */
// function componentCompilePreCode() {
//     var $version = '3.5.7';
// 
//     function extend(target, source) {
//         if (source) {
//             Object.keys(source).forEach(function (key) {
//                 let value = source[key];
//                 if (typeof value !== 'undefined') {
//                     target[key] = value;
//                 }
//             });
//         }
// 
//         return target;
//     }
// 
//     function each(array, iterator) {
//         if (array && array.length > 0) {
//             for (var i = 0, l = array.length; i < l; i++) {
//                 if (iterator(array[i], i) === false) {
//                     break;
//                 }
//             }
//         }
//     }
// 
//     function contains(array, value) {
//         var result;
//         each(array, function (item) {
//             result = item === value;
//             return !result;
//         });
// 
//         return result;
//     }
// 
//     var HTML_ENTITY = {
//         /* jshint ignore:start */
//         '&': '&amp;',
//         '<': '&lt;',
//         '>': '&gt;',
//         '"': '&quot;',
//         /* eslint-disable quotes */
//         "'": '&#39;'
//         /* eslint-enable quotes */
//         /* jshint ignore:end */
//     };
// 
//     function htmlFilterReplacer(c) {
//         return HTML_ENTITY[c];
//     }
// 
//     function escapeHTML(source) {
//         if (source == null) {
//             return '';
//         }
// 
//         return String(source).replace(/[&<>"']/g, htmlFilterReplacer);
//     }
// 
//     var DEFAULT_FILTERS = {
//         url: encodeURIComponent,
//         _class: function (source) {
//             if (source instanceof Array) {
//                 return source.join(' ');
//             }
// 
//             return source;
//         },
//         _style: function (source) {
//             if (typeof source === 'object') {
//                 var result = '';
//                 if (source) {
//                     Object.keys(source).forEach(function (key) {
//                         result += key + ':' + source[key] + ';';
//                     });
//                 }
// 
//                 return result;
//             }
// 
//             return source || '';
//         },
//         _sep: function (source, sep) {
//             return source ? sep + source : '';
//         }
//     };
// 
//     function attrFilter(name, value) {
//         if (value) {
//             return ' ' + name + '="' + value + '"';
//         }
// 
//         return '';
//     }
// 
//     function boolAttrFilter(name, value) {
//         if (value && value !== 'false' && value !== '0') {
//             return ' ' + name;
//         }
// 
//         return '';
//     }
// 
//     function stringLiteralize(source) {
//         return '"'
//             + source
//                 .replace(/\x5C/g, '\\\\')
//                 .replace(/"/g, '\\"')
//                 .replace(/\x0A/g, '\\n')
//                 .replace(/\x09/g, '\\t')
//                 .replace(/\x0D/g, '\\r')
//             + '"';
//     }
// 
//     var stringifier = {
//         obj: function (source) {
//             var prefixComma;
//             var result = '{';
// 
//             Object.keys(source).forEach(function (key) {
//                 if (typeof source[key] === 'undefined') {
//                     return;
//                 }
// 
//                 if (prefixComma) {
//                     result += ',';
//                 }
//                 prefixComma = 1;
// 
//                 result += stringLiteralize(key) + ':' + stringifier.any(source[key]);
//             });
// 
//             return result + '}';
//         },
// 
//         arr: function (source) {
//             var prefixComma;
//             var result = '[';
// 
//             each(source, function (value) {
//                 if (prefixComma) {
//                     result += ',';
//                 }
//                 prefixComma = 1;
// 
//                 result += stringifier.any(value);
//             });
// 
//             return result + ']';
//         },
// 
//         str: function (source) {
//             return stringLiteralize(source);
//         },
// 
//         date: function (source) {
//             return 'new Date(' + source.getTime() + ')';
//         },
// 
//         any: function (source) {
//             switch (typeof source) {
//                 case 'string':
//                     return stringifier.str(source);
// 
//                 case 'number':
//                     return '' + source;
// 
//                 case 'boolean':
//                     return source ? 'true' : 'false';
// 
//                 case 'object':
//                     if (!source) {
//                         return null;
//                     }
// 
//                     if (source instanceof Array) {
//                         return stringifier.arr(source);
//                     }
// 
//                     if (source instanceof Date) {
//                         return stringifier.date(source);
//                     }
// 
//                     return stringifier.obj(source);
//             }
// 
//             throw new Error('Cannot Stringify:' + source);
//         }
//     };
// }
// /* eslint-enable no-unused-vars */
// /* eslint-enable fecs-camelcase */
// 
// /**
//  * 将组件编译成 render 方法的 js 源码
//  *
//  * @param {Function} ComponentClass 组件类
//  * @return {string}
//  */
// function compileJSSource(ComponentClass) {
//     var sourceBuffer = new CompileSourceBuffer();
// 
//     sourceBuffer.addRendererStart();
//     sourceBuffer.addRaw(
//         componentCompilePreCode.toString()
//             .split('\n')
//             .slice(1)
//             .join('\n')
//             .replace(/\}\s*$/, '')
//     );
// 
//     // 先初始化个实例，让模板编译成 ANode，并且能获得初始化数据
//     var component = new ComponentClass();
// 
//     compileComponentSource(sourceBuffer, component);
//     sourceBuffer.addRendererEnd();
//     return sourceBuffer.toCode();
// }
// #[end]

// exports = module.exports = compileJSSource;

    /* eslint-disable no-unused-vars */
//     var nextTick = require('./util/next-tick');
//     var inherits = require('./util/inherits');
//     var parseTemplate = require('./parser/parse-template');
//     var parseExpr = require('./parser/parse-expr');
//     var ExprType = require('./parser/expr-type');
//     var LifeCycle = require('./view/life-cycle');
//     var NodeType = require('./view/node-type');
//     var Component = require('./view/component');
//     var compileComponent = require('./view/compile-component');
//     var defineComponent = require('./view/define-component');
//     var emitDevtool = require('./util/emit-devtool');
//     var compileJSSource = require('./view/compile-js-source');
//     var Data = require('./runtime/data');
//     var evalExpr = require('./runtime/eval-expr');
//     var DataTypes = require('./util/data-types');


    var san = {
        /**
         * san版本号
         *
         * @type {string}
         */
        version: '3.5.7',

        // #[begin] devtool
        /**
         * 是否开启调试。开启调试时 devtool 会工作
         *
         * @type {boolean}
         */
        debug: true,
        // #[end]

        // #[begin] ssr
//         /**
//          * 将组件类编译成 renderer 方法
//          *
//          * @param {Function} ComponentClass 组件类
//          * @return {function(Object):string}
//          */
//         compileToRenderer: function (ComponentClass) {
//             var renderer = ComponentClass.__ssrRenderer;
// 
//             if (!renderer) {
//                 var code = compileJSSource(ComponentClass);
//                 renderer = (new Function('return ' + code))();
//                 ComponentClass.__ssrRenderer = renderer;
//             }
// 
//             return renderer;
//         },
// 
//         /**
//          * 将组件类编译成 renderer 方法的源文件
//          *
//          * @param {Function} ComponentClass 组件类
//          * @return {string}
//          */
//         compileToSource: compileJSSource,
        // #[end]

        /**
         * 组件基类
         *
         * @type {Function}
         */
        Component: Component,

        /**
         * 创建组件类
         *
         * @param {Object} proto 组件类的方法表
         * @return {Function}
         */
        defineComponent: defineComponent,

        /**
         * 编译组件类。预解析template和components
         *
         * @param {Function} ComponentClass 组件类
         */
        compileComponent: compileComponent,

        /**
         * 解析 template
         *
         * @inner
         * @param {string} source template 源码
         * @return {ANode}
         */
        parseTemplate: parseTemplate,

        /**
         * 解析表达式
         *
         * @param {string} source 源码
         * @return {Object}
         */
        parseExpr: parseExpr,

        /**
         * 表达式类型枚举
         *
         * @const
         * @type {Object}
         */
        ExprType: ExprType,

        /**
         * 生命周期
         */
        LifeCycle: LifeCycle,

        /**
         * 节点类型
         *
         * @const
         * @type {Object}
         */
        NodeType: NodeType,

        /**
         * 在下一个更新周期运行函数
         *
         * @param {Function} fn 要运行的函数
         */
        nextTick: nextTick,

        /**
         * 数据类
         *
         * @class
         * @param {Object?} data 初始数据
         * @param {Data?} parent 父级数据对象
         */
        Data: Data,

        /**
         * 计算表达式的值
         *
         * @param {Object} expr 表达式对象
         * @param {Data} data 数据对象
         * @param {Component=} owner 组件对象，用于表达式中filter的执行
         * @return {*}
         */
        evalExpr: evalExpr,

        /**
         * 构建类之间的继承关系
         *
         * @param {Function} subClass 子类函数
         * @param {Function} superClass 父类函数
         */
        inherits: inherits,

        /**
         * DataTypes
         *
         * @type {Object}
         */
        DataTypes: DataTypes
    };

    // export
    if (true) {
        // For CommonJS
        exports = module.exports = san;
    }
    else {}

    // #[begin] devtool
    emitDevtool.start(san);
    // #[end]
})(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/s-transition.san":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/s-transition.san ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/san-loader/lib/style-rewriter.js!../../node_modules/san-loader/lib/selector.js?type=style&index=0!./s-transition.san */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/s-transition.san");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! san */ "./node_modules/san/dist/san.dev.js");
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var san_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! san-router */ "./node_modules/san-router/dist/san-router.source.js");
/* harmony import */ var san_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(san_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _view_s_transition_san__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/s-transition.san */ "./src/view/s-transition.san");
/* harmony import */ var _view_s_transition_san__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_view_s_transition_san__WEBPACK_IMPORTED_MODULE_2__);




san_router__WEBPACK_IMPORTED_MODULE_1__["router"].add({ rule: '/', Component: _view_s_transition_san__WEBPACK_IMPORTED_MODULE_2___default.a, target: '#app' });
san_router__WEBPACK_IMPORTED_MODULE_1__["router"].start();
console.log('Server starts.');


/***/ }),

/***/ "./src/view/s-transition.san":
/*!***********************************!*\
  !*** ./src/view/s-transition.san ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __san_script__, __san_template__
var __san_styles__ = {}
__webpack_require__(/*! !style-loader!css-loader?sourceMap!../../node_modules/san-loader/lib/style-rewriter.js!../../node_modules/san-loader/lib/selector.js?type=style&index=0!./s-transition.san */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/s-transition.san")
__san_script__ = __webpack_require__(/*! !!../../node_modules/san-loader/lib/selector.js?type=script&index=0!./s-transition.san */ "./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/s-transition.san")
if (__san_script__ &&
    __san_script__.__esModule &&
    Object.keys(__san_script__).length > 1) {
  console.warn("[san-loader] src/view/s-transition.san: named exports in *.san files are ignored.")}
__san_template__ = __webpack_require__(/*! !html-loader?minimize=false!../../node_modules/san-loader/lib/selector.js?type=template&index=0!./s-transition.san */ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/s-transition.san")
var __san_proto__ = {}
if (__san_script__) {
  __san_proto__ = __san_script__.__esModule
    ? __san_script__['default']
    : __san_script__
}
if (__san_template__) {
  __san_proto__.template = __san_template__
}
var san = __webpack_require__(/*! san */ "./node_modules/san/dist/san.dev.js")
var __san_exports__ = san.defineComponent(__san_proto__)
module.exports = __san_exports__
if (module.exports.__esModule) module.exports = module.exports['default']
if (!__san_exports__.computed) __san_exports__.computed = {}
Object.keys(__san_styles__).forEach(function (key) {
var module = __san_styles__[key]
__san_exports__.computed[key] = function () { return module }
})


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvcy10cmFuc2l0aW9uLnNhbj8zNmJkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9zLXRyYW5zaXRpb24uc2FuPzU4YzEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vcy10cmFuc2l0aW9uLnNhbiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2FuLXJvdXRlci9kaXN0L3Nhbi1yb3V0ZXIuc291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYW4vZGlzdC9zYW4uZGV2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3MtdHJhbnNpdGlvbi5zYW4/ODVlOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3MtdHJhbnNpdGlvbi5zYW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBOzs7QUFHQTtBQUNBLGdJQUFpSSwwQkFBMEIsR0FBRyw0QkFBNEIsaUJBQWlCLEdBQUcsNEJBQTRCLGlCQUFpQixHQUFHLFVBQVUsNktBQTZLLE9BQU8sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSwyUkFBMlIsc0JBQXNCLHNCQUFzQixjQUFjLFdBQVcscUJBQXFCLGlDQUFpQyw2REFBNkQsV0FBVyxrQkFBa0IsMkRBQTJELDBDQUEwQyxxREFBcUQsa0NBQWtDLGtEQUFrRCw2QkFBNkIsbUJBQW1CLGtCQUFrQiwyQ0FBMkMsMENBQTBDLHNDQUFzQyxxREFBcUQsc0NBQXNDLDhDQUE4QyxvQ0FBb0Msa0NBQWtDLDZCQUE2QixtQkFBbUIsb0JBQW9CLFdBQVcsT0FBTyxpREFBaUQsOEJBQThCLE9BQU8sb0NBQW9DLHFCQUFxQixPQUFPLG9DQUFvQyxxQkFBcUIsT0FBTyw2QkFBNkI7O0FBRXQ2RDs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYzs7QUFFbEU7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0VBLDZLOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdLdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBLFFBS0E7QUFDQSxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRCxjQUFjOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBOEQsK0RBQStEOztBQUU3SDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsU0FBUztBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLEVBQUU7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLE1BQU0saUNBQWlDLHlEQUF5RCxRQUFRLG9CQUFvQixPQUFPLG9CQUFvQixPQUFPOztBQUV4TDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUgsRUFBRTtBQUM5ZTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCOzs7QUFHQTtBQUNBLDJGQUEyRjs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsK0JBQStCO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SCxFQUFFO0FBQzllO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsU0FBUztBQUN4Qjs7O0FBR0E7QUFDQSwyRkFBMkY7O0FBRTNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBLG1DQUFtQywrQkFBK0I7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUUsRUFBRTtBQUN6SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUEseUZBQXlGO0FBQ3pGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsa0JBQWtCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQzs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLGNBQWM7QUFDN0IsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQix5R0FBeUc7O0FBRW5JO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixPQUFPO0FBQ3ZCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQSxvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7QUM3bENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsNkJBQTZCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsRUFBRTtBQUNiLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxLQUFLO0FBQ2hCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLFNBQVM7QUFDeEQ7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdEQUF3RCxTQUFTO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOERBQThELFNBQVM7O0FBRXZFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCLHFDQUFxQztBQUNyQztBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLFNBQVM7QUFDVCxpQ0FBaUM7QUFDakM7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCO0FBQ0EsU0FBUztBQUNUOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBLDBDQUEwQyxFQUFFO0FBQzVDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU8sd0JBQXdCLE1BQU07QUFDaEQsWUFBWTtBQUNaO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRSxHQUFHLEVBQUU7QUFDdkQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRSxHQUFHLEVBQUU7QUFDdkQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0RBQWdELEVBQUUsR0FBRyxFQUFFO0FBQ3ZEO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsRUFBRSxHQUFHLEVBQUU7QUFDMUQsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQsaUNBQWlDLGVBQWU7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3RkFBd0Y7QUFDeEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsV0FBVztBQUN0QixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNERBQTRELE9BQU87QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsT0FBTztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxVQUFVO0FBQ3JCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakIsV0FBVyxLQUFLO0FBQ2hCLFlBQVk7QUFDWjtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsS0FBSztBQUNoQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztB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QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztB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QTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDaUI7QUFDakI7O0FBRUEsdURBQVksc0dBQTRDO0FBQ3hEO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi5lbnRlcixcXG4ubGVhdmUge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcbn1cXG5cXG4uYmVmb3JlLWVudGVyLFxcbi5sZWF2ZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5lbnRlcixcXG4uYmVmb3JlLWxlYXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL2NvZGUvRGVza3RvcC9pZmUvTVZWTeWtpumZouKAlFNBTuahhuaeti90YXNrMi43LjEvc3JjL3ZpZXcvcy10cmFuc2l0aW9uLnNhbj82ZWZiMDliZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNBOztJQUVBLG9CQUFBO0NBQ0E7O0FBRUE7O0lBRUEsV0FBQTtDQUNBOztBQUVBOztJQUVBLFdBQUE7Q0FDQVwiLFwiZmlsZVwiOlwicy10cmFuc2l0aW9uLnNhblwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJ0b2dnbGVcXFwiPlRPR0dMRTwvYnV0dG9uPlxcbiAgICAgICAgPHNwYW4gcy1pZj1cXFwic2hvd1xcXCIgcy10cmFuc2l0aW9uPVxcXCJob29rXFxcIj5cXG4gICAgICAgICAgICBUcmFuc2l0aW9uIExheWVyXFxuICAgICAgICA8L3NwYW4+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgaW5pdERhdGEoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHsgc2hvdzogdHJ1ZSB9O1xcbiAgICAgICAgfSxcXG4gICAgICAgIHRvZ2dsZSgpIHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn54K55Ye75LqGJyk7XFxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcXFwic2hvd1xcXCIsIXRoaXMuZGF0YS5nZXQoJ3Nob3cnKSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgaG9vazogey8qIHlvdXIgYW5zd2VyICovXFxuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChlbCwgZG9uZSkge1xcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZW50ZXInKTtcXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcXFwiYmVmb3JlLWVudGVyXFxcIik7XFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcXG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXFxcImVudGVyXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XFxuICAgICAgICAgICAgICAgIH0sMClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGxlYXZlOiBmdW5jdGlvbiAoZWwsIGRvbmUpIHtcXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2xlYXZlJyk7XFxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IFxcXCJcXFwiO1xcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFxcXCJiZWZvcmUtbGVhdmVcXFwiKTtcXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gXFxcIlxcXCI7XFxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXFxcImxlYXZlXFxcIik7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvbmUpO1xcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XFxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XFxuICAgICAgICAgICAgICAgIH0sNTAwKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgLmVudGVyLFxcbiAgICAubGVhdmUge1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcXG4gICAgfVxcblxcbiAgICAuYmVmb3JlLWVudGVyLFxcbiAgICAubGVhdmUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAuZW50ZXIsXFxuICAgIC5iZWZvcmUtbGVhdmUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48ZGl2PlxcbiAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJ0b2dnbGVcXFwiPlRPR0dMRTwvYnV0dG9uPlxcbiAgICA8c3BhbiBzLWlmPVxcXCJzaG93XFxcIiBzLXRyYW5zaXRpb249XFxcImhvb2tcXFwiPlxcbiAgICAgICAgVHJhbnNpdGlvbiBMYXllclxcbiAgICA8L3NwYW4+XFxuPC9kaXY+XFxuXCI7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVwidG9nZ2xlXCI+VE9HR0xFPC9idXR0b24+XG4gICAgICAgIDxzcGFuIHMtaWY9XCJzaG93XCIgcy10cmFuc2l0aW9uPVwiaG9va1wiPlxuICAgICAgICAgICAgVHJhbnNpdGlvbiBMYXllclxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaW5pdERhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzaG93OiB0cnVlIH07XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfngrnlh7vkuoYnKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJzaG93XCIsIXRoaXMuZGF0YS5nZXQoJ3Nob3cnKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhvb2s6IHsvKiB5b3VyIGFuc3dlciAqL1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChlbCwgZG9uZSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRlcicpO1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJiZWZvcmUtZW50ZXJcIik7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiZW50ZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgICAgICB9LDApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVhdmU6IGZ1bmN0aW9uIChlbCwgZG9uZSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWF2ZScpO1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImJlZm9yZS1sZWF2ZVwiKTtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJsZWF2ZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb25lKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgICAgICB9LDUwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLmVudGVyLFxuICAgIC5sZWF2ZSB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgfVxuXG4gICAgLmJlZm9yZS1lbnRlcixcbiAgICAubGVhdmUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIC5lbnRlcixcbiAgICAuYmVmb3JlLWxlYXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG48L3N0eWxlPiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwic2FuLXJvdXRlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzYW4tcm91dGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNhbi1yb3V0ZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcblxuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdFwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcmVzb2x2ZVVSTDtcblxudmFyIF9wYXJzZVVybCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfcGFyc2VVcmwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VVcmwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qKlxuICog5bCGIFVSTCDkuK3nm7jlr7not6/lvoTpg6jliIblsZXlvIBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOimgeWxleW8gOeahHVybFxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2Ug5b2T5YmN5omA5bGe546v5aKD55qEdXJsXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVVUkwoc291cmNlLCBiYXNlKSB7XG4gICAgdmFyIHNvdXJjZUxvYyA9ICgwLCBfcGFyc2VVcmwyWydkZWZhdWx0J10pKHNvdXJjZSk7XG4gICAgdmFyIGJhc2VMb2MgPSAoMCwgX3BhcnNlVXJsMlsnZGVmYXVsdCddKShiYXNlKTtcblxuICAgIHZhciBzb3VyY2VQYXRoID0gc291cmNlTG9jLnBhdGg7XG4gICAgaWYgKHNvdXJjZVBhdGguaW5kZXhPZignLycpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZVNlZ3MgPSBzb3VyY2VQYXRoLnNwbGl0KCcvJyk7XG4gICAgdmFyIGJhc2VTZWdzID0gYmFzZUxvYy5wYXRoLnNwbGl0KCcvJyk7XG4gICAgYmFzZVNlZ3MucG9wKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZVNlZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNlZyA9IHNvdXJjZVNlZ3NbaV07XG4gICAgICAgIHN3aXRjaCAoc2VnKSB7XG4gICAgICAgICAgICBjYXNlICcuLic6XG4gICAgICAgICAgICAgICAgYmFzZVNlZ3MucG9wKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYmFzZVNlZ3MucHVzaChzZWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJhc2VTZWdzWzBdICE9PSAnJykge1xuICAgICAgICBiYXNlU2Vncy51bnNoaWZ0KCcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZVNlZ3Muam9pbignLycpICsgKHNvdXJjZUxvYy5xdWVyeVN0cmluZyA/ICc/JyArIHNvdXJjZUxvYy5xdWVyeVN0cmluZyA6ICcnKTtcbn0gLyoqXG4gICAqIHNhbi1yb3V0ZXJcbiAgICogQ29weXJpZ2h0IDIwMTcgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgKlxuICAgKiBAZmlsZSDlsIYgVVJMIOS4reebuOWvuei3r+W+hOmDqOWIhuWxleW8gFxuICAgKiBAYXV0aG9yIGVycm9ycmlrXG4gICAqL1xuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBwYXJzZVVSTDtcbi8qKlxuICogc2FuLXJvdXRlclxuICogQ29weXJpZ2h0IDIwMTcgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBmaWxlIOino+aekFVSTFxuICogQGF1dGhvciBlcnJvcnJpa1xuICovXG5cbi8qKlxuICog6Kej5p6QVVJM77yM6L+U5Zue5YyF5ZCrcGF0aOOAgXF1ZXJ544CBcXVlcnlTdHJpbmfnmoTlr7nosaFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIOimgeino+aekOeahHVybFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZVVSTCh1cmwpIHtcbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBoYXNoOiAnJyxcbiAgICAgICAgcXVlcnlTdHJpbmc6ICcnLFxuICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICBxdWVyeToge30sXG4gICAgICAgIHBhdGg6IHVybFxuICAgIH07XG5cbiAgICAvLyBwYXJzZSBoYXNoXG4gICAgdmFyIGhhc2hTdGFydCA9IHJlc3VsdC5wYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaFN0YXJ0ID49IDApIHtcbiAgICAgICAgcmVzdWx0Lmhhc2ggPSByZXN1bHQucGF0aC5zbGljZShoYXNoU3RhcnQgKyAxKTtcbiAgICAgICAgcmVzdWx0LnBhdGggPSByZXN1bHQucGF0aC5zbGljZSgwLCBoYXNoU3RhcnQpO1xuICAgIH1cblxuICAgIC8vIHBhcnNlIHF1ZXJ5XG4gICAgdmFyIHF1ZXJ5ID0gcmVzdWx0LnF1ZXJ5O1xuICAgIHZhciBxdWVyeVN0YXJ0ID0gcmVzdWx0LnBhdGguaW5kZXhPZignPycpO1xuICAgIGlmIChxdWVyeVN0YXJ0ID49IDApIHtcbiAgICAgICAgcmVzdWx0LnF1ZXJ5U3RyaW5nID0gcmVzdWx0LnBhdGguc2xpY2UocXVlcnlTdGFydCArIDEpO1xuICAgICAgICByZXN1bHQucGF0aCA9IHJlc3VsdC5wYXRoLnNsaWNlKDAsIHF1ZXJ5U3RhcnQpO1xuXG4gICAgICAgIHJlc3VsdC5xdWVyeVN0cmluZy5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5U2VnKSB7XG4gICAgICAgICAgICAvLyDogIPomZHliLDmnInlj6/og73lm6DkuLrmnKrlpITnkIbovazkuYnpl67popjvvIxcbiAgICAgICAgICAgIC8vIOWvvOiHtHZhbHVl5Lit5a2Y5ZyoKio9KirlrZfnrKbvvIzlm6DmraTkuI3kvb/nlKhgc3BsaXRg5Ye95pWwXG4gICAgICAgICAgICB2YXIgZXF1YWxJbmRleCA9IHF1ZXJ5U2VnLmluZGV4T2YoJz0nKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9ICcnO1xuICAgICAgICAgICAgaWYgKGVxdWFsSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBxdWVyeVNlZy5zbGljZShlcXVhbEluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgcXVlcnlTZWcgPSBxdWVyeVNlZy5zbGljZSgwLCBlcXVhbEluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChxdWVyeVNlZyk7XG4gICAgICAgICAgICB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIOW3sue7j+WtmOWcqOi/meS4quWPguaVsO+8jOS4lOaWsOeahOWAvOS4jeS4uuepuuaXtu+8jOaKiuWOn+adpeeahOWAvOWPmOaIkOaVsOe7hFxuICAgICAgICAgICAgaWYgKHF1ZXJ5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICAgICAgICAgIHF1ZXJ5W2tleV0gPSBbXS5jb25jYXQocXVlcnlba2V5XSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqKi8gfSxcbi8qIDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIHNhbi1yb3V0ZXJcbiAqIENvcHlyaWdodCAyMDE3IEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAZmlsZSDmj5Dkvpvkuovku7bnm7jlhbPmk43kvZznmoTln7rnsbtcbiAqIEBhdXRob3Igb3Rha3VzdGF5LCBlcnJvcnJpa1xuICovXG5cbnZhciBFdmVudFRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudFRhcmdldCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50VGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDms6jlhozkuIDkuKrkuovku7blpITnkIblh73mlbBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIOS6i+S7tueahOexu+Wei1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb24gfCBib29sZWFufSBmbiDkuovku7bnmoTlpITnkIblh73mlbBcbiAgICAgKi9cbiAgICBFdmVudFRhcmdldC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbih0eXBlLCBmbikge1xuICAgICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudExpc3RlbmVyc1t0eXBlXSkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbdHlwZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW3R5cGVdLnB1c2goZm4pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDms6jplIDkuIDkuKrkuovku7blpITnkIblh73mlbBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIOS6i+S7tueahOexu+Wei++8jOWmguaenOWAvOS4umAqYOS7heS8muazqOmUgOmAmui/h2AqYOS4uuexu+Wei+azqOWGjOeahOS6i+S7tu+8jOW5tuS4jeS8muWwhuaJgOacieS6i+S7tuazqOmUgFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl0g5LqL5Lu255qE5aSE55CG5Ye95pWw77yM5peg5q2k5Y+C5pWw5YiZ5rOo6ZSAYHR5cGVg5oyH5a6a57G75Z6L55qE5omA5pyJ5LqL5Lu25aSE55CG5Ye95pWwXG4gICAgICovXG5cblxuICAgIEV2ZW50VGFyZ2V0LnByb3RvdHlwZS51biA9IGZ1bmN0aW9uIHVuKHR5cGUsIGZuKSB7XG4gICAgICAgIGlmICghdGhpcy5fZXZlbnRMaXN0ZW5lcnMgfHwgIXRoaXMuX2V2ZW50TGlzdGVuZXJzW3R5cGVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1t0eXBlXSA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50TGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICAgICAgdmFyIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbbGVuXSA9PT0gZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShsZW4sIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDop6blj5HmjIflrprnsbvlnovnmoTkuovku7ZcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIOS6i+S7tuexu+Wei1xuICAgICAqIEBwYXJhbSB7Kn0gW2FyZ3NdIOS6i+S7tuWvueixoVxuICAgICAqL1xuXG5cbiAgICBFdmVudFRhcmdldC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uIGZpcmUodHlwZSwgYXJncykge1xuICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZXZlbnQgdHlwZSBzcGVjaWZpZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudExpc3RlbmVycyAmJiB0aGlzLl9ldmVudExpc3RlbmVyc1t0eXBlXTtcbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0oYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIEV2ZW50VGFyZ2V0O1xufSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBFdmVudFRhcmdldDtcblxuLyoqKi8gfSxcbi8qIDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX21haW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG52YXIgX3Jlc29sdmVVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX3Jlc29sdmVVcmwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzb2x2ZVVybCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLyoqXG4gKiBzYW4tcm91dGVyXG4gKiBDb3B5cmlnaHQgMjAxNyBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGZpbGUg6Lev55Sx6ZO+5o6l55qEIFNhbiDnu4Tku7ZcbiAqIEBhdXRob3IgZXJyb3JyaWtcbiAqL1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gICAgdGVtcGxhdGU6ICc8YSBocmVmPVwie3tocmVmfX1cIlxcbiAgICAgICAgb25jbGljaz1cInJldHVybiBmYWxzZTtcIlxcbiAgICAgICAgb24tY2xpY2s9XCJjbGlja2VyKCRldmVudClcIlxcbiAgICAgICAgdGFyZ2V0PVwie3t0YXJnZXR9fVwiXFxuICAgICAgICBjbGFzcz1cInt7Y2xhc3N9fVwiXFxuICAgICAgICBzdHlsZT1cInt7c3R5bGV9fVwiXFxuICAgICAgICA+XFxuICAgICAgICA8c2xvdD48L3Nsb3Q+XFxuICAgIDwvYT4nLFxuXG4gICAgY2xpY2tlcjogZnVuY3Rpb24gY2xpY2tlcihlKSB7XG4gICAgICAgIHZhciBocmVmID0gdGhpcy5kYXRhLmdldCgnaHJlZicpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIF9tYWluLnJvdXRlci5sb2NhdG9yLnJlZGlyZWN0KGhyZWYucmVwbGFjZSgvXiMvLCAnJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGhyZWY6IGZ1bmN0aW9uIGhyZWYoKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5kYXRhLmdldCgndG8nKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGhyZWYgPSAoMCwgX3Jlc29sdmVVcmwyWydkZWZhdWx0J10pKHVybCwgX21haW4ucm91dGVyLmxvY2F0b3IuY3VycmVudCk7XG4gICAgICAgICAgICBpZiAoX21haW4ucm91dGVyLm1vZGUgPT09ICdoYXNoJykge1xuICAgICAgICAgICAgICAgIGhyZWYgPSAnIycgKyBocmVmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaHJlZjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKiovIH0sXG4vKiA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9ldmVudFRhcmdldCA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfZXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnRUYXJnZXQpO1xuXG52YXIgX3Jlc29sdmVVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX3Jlc29sdmVVcmwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzb2x2ZVVybCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNhbi1yb3V0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvcHlyaWdodCAyMDE3IEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZmlsZSBoYXNoIOaooeW8j+WcsOWdgOebkeWQrOWZqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGF1dGhvciBlcnJvcnJpa1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbi8qKlxuICog6I635Y+W5b2T5YmNVVJMXG4gKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgICAvLyBGaXJlZm945LiLYGxvY2F0aW9uLmhhc2hg5a2Y5Zyo6Ieq5Yqo6Kej56CB55qE5oOF5Ya177yMXG4gICAgLy8g5q+U5aaCaGFzaOeahOWAvOaYryoqYWJjJTNkZWYqKu+8jFxuICAgIC8vIOWcqEZpcmVmb3jkuIvojrflj5bkvJrmiJDkuLoqKmFiYz1kZWYqKlxuICAgIC8vIOS4uuS6humBv+WFjei/meS4gOaDheWGte+8jOmcgOimgeS7jmBsb2NhdGlvbi5ocmVmYOS4reWIhuino1xuICAgIHZhciBpbmRleCA9IGxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpO1xuICAgIHZhciB1cmwgPSBpbmRleCA8IDAgPyAnLycgOiBsb2NhdGlvbi5ocmVmLnNsaWNlKGluZGV4ICsgMSkgfHwgJy8nO1xuXG4gICAgcmV0dXJuIHVybDtcbn1cblxuLyoqXG4gKiBoYXNoIOaooeW8j+WcsOWdgOebkeWQrOWZqFxuICpcbiAqIEBjbGFzc1xuICovXG5cbnZhciBMb2NhdG9yID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICAgIF9pbmhlcml0cyhMb2NhdG9yLCBfRXZlbnRUYXJnZXQpO1xuXG4gICAgLyoqXG4gICAgICog5p6E6YCg5Ye95pWwXG4gICAgICovXG4gICAgZnVuY3Rpb24gTG9jYXRvcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2F0b3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9FdmVudFRhcmdldC5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5jdXJyZW50ID0gZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgX3RoaXMucmVmZXJyZXIgPSAnJztcblxuICAgICAgICBfdGhpcy5oYXNoQ2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJlZGlyZWN0KGdldExvY2F0aW9uKCkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5byA5aeL55uR5ZCsIHVybCDlj5jljJZcbiAgICAgKi9cblxuXG4gICAgTG9jYXRvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMuaGFzaENoYW5nZUhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25oYXNoY2hhbmdlJywgdGhpcy5oYXNoQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5YGc5q2i55uR5ZCsXG4gICAgICovXG5cblxuICAgIExvY2F0b3IucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5oYXNoQ2hhbmdlSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5kZXRhY2hFdmVudCkge1xuICAgICAgICAgICAgd2luZG93LmRldGFjaEV2ZW50KCdvbmhhc2hjaGFuZ2UnLCB0aGlzLmhhc2hDaGFuZ2VIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDph43lrprlkJFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg6YeN5a6a5ZCR55qE5Zyw5Z2AXG4gICAgICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIOmHjeWumuWQkeeahOihjOS4uumFjee9rlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj99IG9wdGlvbnMuZm9yY2Ug5piv5ZCm5by65Yi25Yi35pawXG4gICAgICovXG5cblxuICAgIExvY2F0b3IucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24gcmVkaXJlY3QodXJsKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7IGZvcmNlOiBmYWxzZSB9O1xuXG4gICAgICAgIHVybCA9ICgwLCBfcmVzb2x2ZVVybDJbJ2RlZmF1bHQnXSkodXJsLCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICB2YXIgcmVmZXJyZXIgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICAgICAgdmFyIGlzQ2hhbmdlZCA9IHVybCAhPT0gcmVmZXJyZXI7XG4gICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVmZXJyZXIgPSByZWZlcnJlcjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHVybDtcbiAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWZlcnJlciA9IHRoaXMucmVmZXJyZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKGlzQ2hhbmdlZCB8fCBvcHRpb25zLmZvcmNlKSAmJiAhb3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZSgncmVkaXJlY3QnLCB7IHVybDogdXJsLCByZWZlcnJlcjogcmVmZXJyZXIgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5Yi35paw5b2T5YmNIHVybFxuICAgICAqL1xuXG5cbiAgICBMb2NhdG9yLnByb3RvdHlwZS5yZWxvYWQgPSBmdW5jdGlvbiByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMucmVkaXJlY3QodGhpcy5jdXJyZW50LCB7IGZvcmNlOiB0cnVlIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gTG9jYXRvcjtcbn0oX2V2ZW50VGFyZ2V0MlsnZGVmYXVsdCddKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTG9jYXRvcjtcblxuLyoqKi8gfSxcbi8qIDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V2ZW50VGFyZ2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9ldmVudFRhcmdldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudFRhcmdldCk7XG5cbnZhciBfcmVzb2x2ZVVybCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfcmVzb2x2ZVVybDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXNvbHZlVXJsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogc2FuLXJvdXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29weXJpZ2h0IDIwMTcgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBmaWxlIGh0bWw1IOaooeW8j+WcsOWdgOebkeWQrOWZqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGF1dGhvciBlcnJvcnJpa1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbi8qKlxuICog6I635Y+W5b2T5YmNVVJMXG4gKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2g7XG59XG5cbi8qKlxuICogaHRtbDUg5qih5byP5Zyw5Z2A55uR5ZCs5ZmoXG4gKlxuICogQGNsYXNzXG4gKi9cblxudmFyIExvY2F0b3IgPSBmdW5jdGlvbiAoX0V2ZW50VGFyZ2V0KSB7XG4gICAgX2luaGVyaXRzKExvY2F0b3IsIF9FdmVudFRhcmdldCk7XG5cbiAgICAvKipcbiAgICAgKiDmnoTpgKDlh73mlbBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBMb2NhdG9yKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYXRvcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0V2ZW50VGFyZ2V0LmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLmN1cnJlbnQgPSBnZXRMb2NhdGlvbigpO1xuICAgICAgICBfdGhpcy5yZWZlcnJlciA9ICcnO1xuXG4gICAgICAgIF90aGlzLnBvcHN0YXRlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJlZmVycmVyID0gX3RoaXMuY3VycmVudDtcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnQgPSBnZXRMb2NhdGlvbigpO1xuXG4gICAgICAgICAgICBfdGhpcy5maXJlKCdyZWRpcmVjdCcsIHtcbiAgICAgICAgICAgICAgICB1cmw6IF90aGlzLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgcmVmZXJyZXI6IF90aGlzLnJlZmVycmVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW8gOWni+ebkeWQrCB1cmwg5Y+Y5YyWXG4gICAgICovXG5cblxuICAgIExvY2F0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMucG9wc3RhdGVIYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5YGc5q2i55uR5ZCsXG4gICAgICovXG5cblxuICAgIExvY2F0b3IucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLnBvcHN0YXRlSGFuZGxlcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOmHjeWumuWQkVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCDph43lrprlkJHnmoTlnLDlnYBcbiAgICAgKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMg6YeN5a6a5ZCR55qE6KGM5Li66YWN572uXG4gICAgICogQHBhcmFtIHtib29sZWFuP30gb3B0aW9ucy5mb3JjZSDmmK/lkKblvLrliLbliLfmlrBcbiAgICAgKi9cblxuXG4gICAgTG9jYXRvci5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdCh1cmwpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHsgZm9yY2U6IGZhbHNlIH07XG5cbiAgICAgICAgdXJsID0gKDAsIF9yZXNvbHZlVXJsMlsnZGVmYXVsdCddKSh1cmwsIHRoaXMuY3VycmVudCk7XG4gICAgICAgIHZhciByZWZlcnJlciA9IHRoaXMuY3VycmVudDtcblxuICAgICAgICB2YXIgaXNDaGFuZ2VkID0gdXJsICE9PSByZWZlcnJlcjtcblxuICAgICAgICBpZiAoaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZmVycmVyID0gcmVmZXJyZXI7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB1cmw7XG5cbiAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoaXNDaGFuZ2VkIHx8IG9wdGlvbnMuZm9yY2UpICYmICFvcHRpb25zLnNpbGVudCkge1xuICAgICAgICAgICAgdGhpcy5maXJlKCdyZWRpcmVjdCcsIHsgdXJsOiB1cmwsIHJlZmVycmVyOiByZWZlcnJlciB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDliLfmlrDlvZPliY0gdXJsXG4gICAgICovXG5cblxuICAgIExvY2F0b3IucHJvdG90eXBlLnJlbG9hZCA9IGZ1bmN0aW9uIHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5maXJlKCdyZWRpcmVjdCcsIHtcbiAgICAgICAgICAgIHVybDogdGhpcy5jdXJyZW50LFxuICAgICAgICAgICAgcmVmZXJyZXI6IHRoaXMucmVmZXJyZXJcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBMb2NhdG9yO1xufShfZXZlbnRUYXJnZXQyWydkZWZhdWx0J10pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBMb2NhdG9yO1xuXG5cbkxvY2F0b3IuaXNTdXBwb3J0ID0gJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG5cbi8qKiovIH0sXG4vKiA2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuTGluayA9IGV4cG9ydHMucm91dGVyID0gZXhwb3J0cy5Sb3V0ZXIgPSBleHBvcnRzLnZlcnNpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfaGFzaCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfaGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNoKTtcblxudmFyIF9odG1sID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9odG1sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h0bWwpO1xuXG52YXIgX3BhcnNlVXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9wYXJzZVVybDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVVybCk7XG5cbnZhciBfbGluayA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfbGluazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5rKTtcblxudmFyIF9lbGVtZW50U2VsZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG52YXIgX2VsZW1lbnRTZWxlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbGVtZW50U2VsZWN0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNhbi1yb3V0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb3B5cmlnaHQgMjAxNyBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZmlsZSDkuLvmqKHlnZdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAYXV0aG9yIGVycm9ycmlrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbnZhciByb3V0ZUlEID0gMHg1OTQyYjtcbnZhciBndWlkID0gZnVuY3Rpb24gZ3VpZCgpIHtcbiAgICByZXR1cm4gKCsrcm91dGVJRCkudG9TdHJpbmcoKTtcbn07XG5cbmZ1bmN0aW9uIGlzQ29tcG9uZW50KEMpIHtcbiAgICByZXR1cm4gQy5wcm90b3R5cGUgJiYgKEMucHJvdG90eXBlLm5vZGVUeXBlID09PSA1IHx8IEMucHJvdG90eXBlLl90eXBlID09PSAnc2FuLWNtcHQnKTtcbn1cblxuLyoqXG4gKiDniYjmnKzlj7dcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgdmVyc2lvbiA9IGV4cG9ydHMudmVyc2lvbiA9ICcxLjIuMCc7XG5cbi8qKlxuICog6Lev55Sx5Zmo57G7XG4gKlxuICogQGNsYXNzXG4gKi9cblxudmFyIFJvdXRlciA9IGV4cG9ydHMuUm91dGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLyoqXG4gICAgICog5p6E6YCg5Ye95pWwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMg5Yid5aeL5YyW5Y+C5pWwXG4gICAgICogQHBhcmFtIHtzdHJpbmc/fSBvcHRpb25zLm1vZGUg6Lev55Sx5qih5byP77yMaGFzaCB8IGh0bWw1XG4gICAgICovXG4gICAgZnVuY3Rpb24gUm91dGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgICAgIF9yZWYkbW9kZSA9IF9yZWYubW9kZSxcbiAgICAgICAgICAgIG1vZGUgPSBfcmVmJG1vZGUgPT09IHVuZGVmaW5lZCA/ICdoYXNoJyA6IF9yZWYkbW9kZTtcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGVyKTtcblxuICAgICAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgICAgICB0aGlzLnJvdXRlQWxpdmVzID0gW107XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGxvY2F0b3IgcmVkaXJlY3Qg5LqL5Lu255uR5ZCs5Ye95pWwXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIGxvY2F0b3Lkuovku7blr7nosaFcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubG9jYXRvclJlZGlyZWN0SGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gKDAsIF9wYXJzZVVybDJbJ2RlZmF1bHQnXSkoZS51cmwpO1xuICAgICAgICAgICAgdmFyIHJvdXRlSXRlbSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF90aGlzLnJvdXRlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IF90aGlzLnJvdXRlc1tfaV07XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gaXRlbS5ydWxlLmV4ZWModXJsLnBhdGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSXRlbSA9IGl0ZW07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZmlsbCBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBpdGVtLmtleXMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgbWF0Y2gubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2pdIHx8IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBtYXRjaFtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybC5xdWVyeVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwucGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbGwgcmVmZXJyZXJcbiAgICAgICAgICAgICAgICAgICAgdXJsLnJlZmVycmVyID0gZS5yZWZlcnJlcjtcbiAgICAgICAgICAgICAgICAgICAgdXJsLmNvbmZpZyA9IGl0ZW0uY29uZmlnO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gMTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBsaXN0ZW5lciDkuovku7blr7nosaFcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJFdmVudCA9IHtcbiAgICAgICAgICAgICAgICBoYXNoOiB1cmwuaGFzaCxcbiAgICAgICAgICAgICAgICBxdWVyeVN0cmluZzogdXJsLnF1ZXJ5U3RyaW5nLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB1cmwucXVlcnksXG4gICAgICAgICAgICAgICAgcGF0aDogdXJsLnBhdGgsXG4gICAgICAgICAgICAgICAgcmVmZXJyZXI6IHVybC5yZWZlcnJlcixcbiAgICAgICAgICAgICAgICBjb25maWc6IHVybC5jb25maWcsXG4gICAgICAgICAgICAgICAgcmVzdW1lOiBuZXh0LFxuICAgICAgICAgICAgICAgIHN1c3BlbmQ6IGZ1bmN0aW9uIHN1c3BlbmQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gMDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlsJ3or5Xov5DooYzkuIvkuIDkuKpsaXN0ZW5lclxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBpbm5lclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgZG9OZXh0ID0gZnVuY3Rpb24gZG9OZXh0KCkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBfdGhpcy5saXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5saXN0ZW5lcnNbaV0uY2FsbChfdGhpcywgbGlzdGVuZXJFdmVudCwgdXJsLmNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVBY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6L+Q6KGM5LiL5LiA5LiqbGlzdGVuZXJcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGRvTmV4dCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi/kOihjOi3r+eUseihjOS4ulxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBpbm5lclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgcm91dGVBY3Rpb24gPSBmdW5jdGlvbiByb3V0ZUFjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAocm91dGVJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRvUm91dGUocm91dGVJdGVtLCB1cmwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW4gPSBfdGhpcy5yb3V0ZUFsaXZlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucm91dGVBbGl2ZXNbbGVuXS5jb21wb25lbnQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucm91dGVBbGl2ZXMuc3BsaWNlKGxlbiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkb05leHQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1vZGUobW9kZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5re75Yqg6Lev55Sx55uR5ZCs5ZmoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGUsIGNvbmZpZyl9IGxpc3RlbmVyIOebkeWQrOWZqFxuICAgICAqL1xuXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog56e76Zmk6Lev55Sx55uR5ZCs5ZmoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlmahcbiAgICAgKi9cblxuXG4gICAgUm91dGVyLnByb3RvdHlwZS51bmxpc3RlbiA9IGZ1bmN0aW9uIHVubGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBsZW4gPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW2xlbl0gPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxlbiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5omn6KGM6Lev55SxXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByb3V0ZUl0ZW0g6Lev55Sx6aG5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGUg6Lev55Sx5L+h5oGvXG4gICAgICovXG5cblxuICAgIFJvdXRlci5wcm90b3R5cGUuZG9Sb3V0ZSA9IGZ1bmN0aW9uIGRvUm91dGUocm91dGVJdGVtLCBlKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBpc1VwZGF0ZUFsaXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBsZW4gPSB0aGlzLnJvdXRlQWxpdmVzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgIHZhciByb3V0ZUFsaXZlID0gdGhpcy5yb3V0ZUFsaXZlc1tsZW5dO1xuXG4gICAgICAgICAgICBpZiAocm91dGVBbGl2ZS5pZCA9PT0gcm91dGVJdGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgcm91dGVBbGl2ZS5jb21wb25lbnQuZGF0YS5zZXQoJ3JvdXRlJywgZSk7XG4gICAgICAgICAgICAgICAgcm91dGVBbGl2ZS5jb21wb25lbnQuX2NhbGxIb29rKCdyb3V0ZScpO1xuICAgICAgICAgICAgICAgIGlzVXBkYXRlQWxpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZUFsaXZlLmNvbXBvbmVudC5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZUFsaXZlcy5zcGxpY2UobGVuLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNVcGRhdGVBbGl2ZSkge1xuICAgICAgICAgICAgaWYgKHJvdXRlSXRlbS5Db21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wb25lbnQocm91dGVJdGVtLkNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hDbXB0KHJvdXRlSXRlbSwgZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJdGVtLkNvbXBvbmVudCgpLnRoZW4oZnVuY3Rpb24gKENtcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXBvbmVudChDbXB0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSXRlbS5Db21wb25lbnQgPSBDbXB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChDbXB0Ll9fZXNNb2R1bGUgJiYgaXNDb21wb25lbnQoQ21wdFsnZGVmYXVsdCddKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSXRlbS5Db21wb25lbnQgPSBDbXB0WydkZWZhdWx0J107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuYXR0YWNoQ21wdChyb3V0ZUl0ZW0sIGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlSXRlbS5oYW5kbGVyLmNhbGwodGhpcywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5hdHRhY2hDbXB0ID0gZnVuY3Rpb24gYXR0YWNoQ21wdChyb3V0ZUl0ZW0sIGUpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG5ldyByb3V0ZUl0ZW0uQ29tcG9uZW50KCk7XG4gICAgICAgIGNvbXBvbmVudC5kYXRhLnNldCgncm91dGUnLCBlKTtcbiAgICAgICAgY29tcG9uZW50Ll9jYWxsSG9vaygncm91dGUnKTtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gcm91dGVJdGVtLnRhcmdldDtcbiAgICAgICAgdmFyIHRhcmdldEVsID0gKDAsIF9lbGVtZW50U2VsZWN0b3IyWydkZWZhdWx0J10pKHRhcmdldCk7XG5cbiAgICAgICAgaWYgKCF0YXJnZXRFbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOLVJPVVRFUiBFUlJPUl0gJyArICdBdHRhY2ggZmFpbGVkLCB0YXJnZXQgZWxlbWVudCBcIicgKyByb3V0ZUl0ZW0udGFyZ2V0ICsgJ1wiIGlzIG5vdCBmb3VuZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudC5hdHRhY2godGFyZ2V0RWwpO1xuXG4gICAgICAgIHRoaXMucm91dGVBbGl2ZXMucHVzaCh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIGlkOiByb3V0ZUl0ZW0uaWRcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOi3r+eUsemhuVxuICAgICAqIOW9k+inhOWImeWMuemFjeaXtu+8jOi3r+eUseWwhuS8mOWFiOWwhkNvbXBvbmVudOa4suafk+WIsHRhcmdldOS4reOAguWmguaenOayoeacieWMheWQq0NvbXBvbmVudO+8jOWImeaJp+ihjGhhbmRsZXLlh73mlbBcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyDot6/nlLHpobnphY3nva5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IGNvbmZpZy5ydWxlIOi3r+eUseinhOWImVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb24/fSBjb25maWcuaGFuZGxlciDot6/nlLHlh73mlbBcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9uP30gY29uZmlnLkNvbXBvbmVudCDot6/nlLHnu4Tku7ZcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnRhcmdldCDot6/nlLHnu4Tku7bopoHmuLLmn5PliLDnmoTnm67moIfkvY3nva5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHNhbi1yb3V0ZXIg5a6e5L6LXG4gICAgICovXG5cblxuICAgIFJvdXRlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkKGNvbmZpZykge1xuICAgICAgICB2YXIgcnVsZSA9IGNvbmZpZy5ydWxlLFxuICAgICAgICAgICAgaGFuZGxlciA9IGNvbmZpZy5oYW5kbGVyLFxuICAgICAgICAgICAgX2NvbmZpZyR0YXJnZXQgPSBjb25maWcudGFyZ2V0LFxuICAgICAgICAgICAgdGFyZ2V0ID0gX2NvbmZpZyR0YXJnZXQgPT09IHVuZGVmaW5lZCA/ICcjbWFpbicgOiBfY29uZmlnJHRhcmdldCxcbiAgICAgICAgICAgIENvbXBvbmVudCA9IGNvbmZpZy5Db21wb25lbnQ7XG5cbiAgICAgICAgdmFyIGtleXMgPSBbJyddO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcnVsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIOayoeeUqHBhdGgtdG8tcmVnZXhw77yM5pqC5pe25LiN5o+Q5L6b6L+Z5LmI5aSa5Yqf6IO95pSv5oyBXG4gICAgICAgICAgICB2YXIgcmVnVGV4dCA9IHJ1bGUucmVwbGFjZSgvXFwvOihbYS16MC05Xy1dKykoPz1cXC98JCkvaWcsIGZ1bmN0aW9uIChtYXRjaCwga2V5KSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvKFteL1xcXFxzXSspJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBydWxlID0gbmV3IFJlZ0V4cCgnXicgKyByZWdUZXh0ICsgJyQnLCAnaScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEocnVsZSBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTi1ST1VURVIgRVJST1JdIFJ1bGUgbXVzdCBiZSBzdHJpbmcgb3IgUmVnRXhwIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlkID0gZ3VpZCgpO1xuICAgICAgICB0aGlzLnJvdXRlcy5wdXNoKHsgaWQ6IGlkLCBydWxlOiBydWxlLCBoYW5kbGVyOiBoYW5kbGVyLCBrZXlzOiBrZXlzLCB0YXJnZXQ6IHRhcmdldCwgQ29tcG9uZW50OiBDb21wb25lbnQsIGNvbmZpZzogY29uZmlnIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDlkK/liqjot6/nlLHlip/og71cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gc2FuLXJvdXRlciDlrp7kvotcbiAgICAgKi9cblxuXG4gICAgUm91dGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxvY2F0b3Iub24oJ3JlZGlyZWN0JywgdGhpcy5sb2NhdG9yUmVkaXJlY3RIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMubG9jYXRvci5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5sb2NhdG9yLnJlbG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOWBnOatoui3r+eUseWKn+iDvVxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBzYW4tcm91dGVyIOWunuS+i1xuICAgICAqL1xuXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICB0aGlzLmxvY2F0b3IudW4oJ3JlZGlyZWN0JywgdGhpcy5sb2NhdG9yUmVkaXJlY3RIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5sb2NhdG9yLnN0b3AoKTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog6K6+572u6Lev55Sx5qih5byPXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSDot6/nlLHmqKHlvI/vvIxoYXNoIHwgaHRtbDVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHNhbi1yb3V0ZXIg5a6e5L6LXG4gICAgICovXG5cblxuICAgIFJvdXRlci5wcm90b3R5cGUuc2V0TW9kZSA9IGZ1bmN0aW9uIHNldE1vZGUobW9kZSkge1xuICAgICAgICBtb2RlID0gbW9kZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSBtb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuXG4gICAgICAgIHZhciByZXN0YXJ0ID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICByZXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgY2FzZSAnaGFzaCc6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdG9yID0gbmV3IF9oYXNoMlsnZGVmYXVsdCddKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdodG1sNSc6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdG9yID0gbmV3IF9odG1sMlsnZGVmYXVsdCddKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdGFydCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIHJldHVybiBSb3V0ZXI7XG59KCk7XG5cbi8qKlxuICog6buY6K6k55qE6Lev55Sx5Zmo5a6e5L6LXG4gKlxuICogQHR5cGUge1JvdXRlcn1cbiAqL1xuXG5cbnZhciByb3V0ZXIgPSBleHBvcnRzLnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxuLyoqXG4gKiDot6/nlLHpk77mjqXnmoQgU2FuIOe7hOS7tlxuICpcbiAqIEBjbGFzc1xuICovXG5leHBvcnRzLkxpbmsgPSBfbGluazJbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGVsZW1lbnRTZWxlY3Rvcjtcbi8qXG4qXG4qIEBmaWxlIOmAieaLqeWZqFxuKiBAYXV0aG9yIHZpbmNlbnQgbGF1LzQxMzg5MzA5M0BxcS5jb21cbiovXG5cbi8qKlxuICog5YWD57Sg6YCJ5oup5ZmoXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8RWxlbWVudH0gc2VsZWN0b3Ig6YCJ5oup5ZmoXG4gKiBAcmV0dXJucyB7RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZWxlbWVudFNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3dpdGNoICh0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHNlbGVjdG9yKSkge1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuXG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnJlcGxhY2UoLyMvaSwgJycpKTtcbiAgICB9XG59XG5cbi8qKiovIH1cbi8qKioqKiovIF0pO1xufSk7IiwiLyoqXG4gKiBTYW5cbiAqIENvcHlyaWdodCAyMDE2IEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAZmlsZSDkuLvmlofku7ZcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICogICAgICAgICBvdGFrdXN0YXkob3Rha3VzdGF5QGdtYWlsLmNvbSlcbiAqICAgICAgICAganVubWVyKGp1bm1lckBmb3htYWlsLmNvbSlcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAvLyDkurrlt6XosIPmlbTmiZPljIXku6PnoIHpobrluo/vvIzpgJrov4fms6jph4rmiYvlt6XlhpnkuIDkupvkvp3otZZcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvZ3VpZCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9lbXB0eScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9leHRlbmQnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvaW5oZXJpdHMnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvZWFjaCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9jb250YWlucycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9iaW5kJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL29uJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL3VuJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL3N2Zy10YWdzJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL2NyZWF0ZS1lbCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvbmV4dC10aWNrJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL2llJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL2llLW9sZC10aGFuLTknKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvaW5wdXQtZXZlbnQtY29tcGF0aWJsZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci9hdXRvLWNsb3NlLXRhZ3MnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvZGF0YS10eXBlcy5qcycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUtZGF0YS10eXBlcy1jaGVja2VyLmpzJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9wYXJzZXIvd2Fsa2VyJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9wYXJzZXIvY3JlYXRlLWEtbm9kZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vcGFyc2VyL3BhcnNlLXRlbXBsYXRlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9ydW50aW1lL2NoYW5nZS1leHByLWNvbXBhcmUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3J1bnRpbWUvZGF0YS1jaGFuZ2UtdHlwZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vcnVudGltZS9kZWZhdWx0LWZpbHRlcnMnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3ZpZXcvbGlmZS1jeWNsZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdmlldy9ub2RlLXR5cGUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3ZpZXcvZ2V0LXByb3AtaGFuZGxlcicpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdmlldy9pcy1kYXRhLWNoYW5nZS1ieS1lbGVtZW50Jyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L2V2ZW50LWRlY2xhcmF0aW9uLWxpc3RlbmVyJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L2NyZWF0ZS1ub2RlJyk7XG5cblxuICAgIC8qKlxuICogQGZpbGUg55Sf5oiQ5ZSv5LiAaWRcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLyoqXG4gKiDllK/kuIBpZOeahOi1t+Wni+WAvFxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge251bWJlcn1cbiAqL1xudmFyIGd1aWRJbmRleCA9IDE7XG5cbi8qKlxuICog5ZSv5LiAaWTnmoTliY3nvIBcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciBndWlkUHJlZml4ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKS50b1N0cmluZygxNikuc2xpY2UoOCk7XG5cbi8qKlxuICog6I635Y+W5ZSv5LiAaWRcbiAqXG4gKiBAaW5uZXJcbiAqIEByZXR1cm4ge3N0cmluZ30g5ZSv5LiAaWRcbiAqL1xuZnVuY3Rpb24gZ3VpZCgpIHtcbiAgICByZXR1cm4gJ18nICsgZ3VpZFByZWZpeCArIChndWlkSW5kZXgrKyk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGd1aWQ7XG5cblxuLyoqXG4gKiBAZmlsZSDnqbrlh73mlbBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLyoqXG4gKiDllaXpg73kuI3lubJcbiAqL1xuZnVuY3Rpb24gZW1wdHkoKSB7fVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbXB0eTtcblxuXG4vKipcbiAqIEBmaWxlIOWxnuaAp+aLt+i0nVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDlr7nosaHlsZ7mgKfmi7fotJ1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IOebruagh+WvueixoVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSDmupDlr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH0g6L+U5Zue55uu5qCH5a+56LGhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZDtcblxuXG4vKipcbiAqIEBmaWxlIOaehOW7uuexu+S5i+mXtOeahOe7p+aJv+WFs+ezu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGV4dGVuZCA9IHJlcXVpcmUoJy4vZXh0ZW5kJyk7XG5cbi8qKlxuICog5p6E5bu657G75LmL6Ze055qE57un5om/5YWz57O7XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ViQ2xhc3Mg5a2Q57G75Ye95pWwXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdXBlckNsYXNzIOeItuexu+WHveaVsFxuICovXG5mdW5jdGlvbiBpbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIHZhciBzdWJDbGFzc1Byb3RvID0gc3ViQ2xhc3MucHJvdG90eXBlO1xuICAgIHZhciBGID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgRi5wcm90b3R5cGUgPSBzdXBlckNsYXNzLnByb3RvdHlwZTtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBuZXcgRigpO1xuICAgIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICAgIGV4dGVuZChzdWJDbGFzcy5wcm90b3R5cGUsIHN1YkNsYXNzUHJvdG8pO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpbmhlcml0cztcblxuXG4vKipcbiAqIEBmaWxlIOmBjeWOhuaVsOe7hFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vKipcbiAqIOmBjeWOhuaVsOe7hOmbhuWQiFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IOaVsOe7hOa6kFxuICogQHBhcmFtIHtmdW5jdGlvbihBbnksbnVtYmVyKTpib29sZWFufSBpdGVyYXRvciDpgY3ljoblh73mlbBcbiAqL1xuZnVuY3Rpb24gZWFjaChhcnJheSwgaXRlcmF0b3IpIHtcbiAgICBpZiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yKGFycmF5W2ldLCBpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWFjaDtcblxuXG4vKipcbiAqIEBmaWxlIOWIpOaWreaVsOe7hOS4reaYr+WQpuWMheWQq+afkOmhuVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuL2VhY2gnKTtcblxuLyoqXG4gKiDliKTmlq3mlbDnu4TkuK3mmK/lkKbljIXlkKvmn5DpoblcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSDmlbDnu4RcbiAqIEBwYXJhbSB7Kn0gdmFsdWUg5YyF5ZCr55qE6aG5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjb250YWlucyhhcnJheSwgdmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgZWFjaChhcnJheSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmVzdWx0ID0gaXRlbSA9PT0gdmFsdWU7XG4gICAgICAgIHJldHVybiAhcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY29udGFpbnM7XG5cblxuLyoqXG4gKiBAZmlsZSBiaW5k5Ye95pWwXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIOaWueazleeahOWFvOWuueaAp+WwgeijhVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMg6KaBYmluZOeahOWHveaVsFxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgdGhpc+aMh+WQkeWvueixoVxuICogQHBhcmFtIHsuLi4qfSBhcmdzIOmihOiuvueahOWIneWni+WPguaVsFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGJpbmQoZnVuYywgdGhpc0FyZykge1xuICAgIHZhciBuYXRpdmVCaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgaWYgKG5hdGl2ZUJpbmQgJiYgZnVuYy5iaW5kID09PSBuYXRpdmVCaW5kKSB7XG4gICAgLy8gI1tlbmRdXG4gICAgICAgIHJldHVybiBuYXRpdmVCaW5kLmFwcGx5KGZ1bmMsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICB9XG5cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICB9O1xuICAgIC8vICNbZW5kXVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBiaW5kO1xuXG5cbi8qKlxuICogQGZpbGUgRE9NIOS6i+S7tuaMgui9vVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBET00g5LqL5Lu25oyC6L29XG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBET03lhYPntKBcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlh73mlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FwdHVyZSDmmK/lkKbmmK/mjZXojrfpmLbmrrVcbiAqL1xuZnVuY3Rpb24gb24oZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgLy8gI1tlbmRdXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG9uO1xuXG5cbi8qKlxuICogQGZpbGUgRE9NIOS6i+S7tuWNuOi9vVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBET00g5LqL5Lu25Y246L29XG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBET03lhYPntKBcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlh73mlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FwdHVyZSDmmK/lkKbmmK/mjZXojrfpmLbmrrVcbiAqL1xuZnVuY3Rpb24gdW4oZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgLy8gI1tlbmRdXG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHVuO1xuXG5cbi8qKlxuICogQGZpbGUg5bCG5a2X56ym5Liy6YCX5Y+35YiH5YiG6L+U5Zue5a+56LGhXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuXG4vKipcbiAqIOWwhuWtl+espuS4sumAl+WPt+WIh+WIhui/lOWbnuWvueixoVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ5a2X56ym5LiyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHNwbGl0U3RyMk9iaihzb3VyY2UpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZWFjaChcbiAgICAgICAgc291cmNlLnNwbGl0KCcsJyksXG4gICAgICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gMTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3BsaXRTdHIyT2JqO1xuXG5cbi8qKlxuICogQGZpbGUgU1ZH5qCH562+6KGoXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgc3BsaXRTdHIyT2JqID0gcmVxdWlyZSgnLi4vdXRpbC9zcGxpdC1zdHItMi1vYmonKTtcblxuLyoqXG4gKiBzdmdUYWdzXG4gKlxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHL3N2Z2R0ZC5odG1sIOWPquWPluW4uOeUqFxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIHN2Z1RhZ3MgPSBzcGxpdFN0cjJPYmooJydcbiAgICAvLyBzdHJ1Y3R1cmVcbiAgICArICdzdmcsZyxkZWZzLGRlc2MsbWV0YWRhdGEsc3ltYm9sLHVzZSwnXG4gICAgLy8gaW1hZ2UgJiBzaGFwZVxuICAgICsgJ2ltYWdlLHBhdGgscmVjdCxjaXJjbGUsbGluZSxlbGxpcHNlLHBvbHlsaW5lLHBvbHlnb24sJ1xuICAgIC8vIHRleHRcbiAgICArICd0ZXh0LHRzcGFuLHRyZWYsdGV4dHBhdGgsJ1xuICAgIC8vIG90aGVyXG4gICAgKyAnbWFya2VyLHBhdHRlcm4sY2xpcHBhdGgsbWFzayxmaWx0ZXIsY3Vyc29yLHZpZXcsYW5pbWF0ZSwnXG4gICAgLy8gZm9udFxuICAgICsgJ2ZvbnQsZm9udC1mYWNlLGdseXBoLG1pc3NpbmctZ2x5cGgnKTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3ZnVGFncztcblxuXG4vKipcbiAqIEBmaWxlIERPTeWIm+W7ulxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIHN2Z1RhZ3MgPSByZXF1aXJlKCcuL3N2Zy10YWdzJyk7XG5cbi8qKlxuICog5Yib5bu6IERPTSDlhYPntKBcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRhZ05hbWUgdGFnTmFtZVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsKHRhZ05hbWUpIHtcbiAgICBpZiAoc3ZnVGFnc1t0YWdOYW1lXSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHRhZ05hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVFbDtcblxuXG4vKipcbiAqIEBmaWxlIOenu+mZpERPTVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDlsIYgRE9NIOS7jumhtemdouS4reenu+mZpFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIERPTeWFg+e0oFxuICovXG5mdW5jdGlvbiByZW1vdmVFbChlbCkge1xuICAgIGlmIChlbCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVtb3ZlRWw7XG5cblxuLyoqXG4gKiBAZmlsZSDlnKjkuIvkuIDkuKrml7bpl7TlkajmnJ/ov5DooYzku7vliqFcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIOivpeaWueazleWPgueFp+S6hnZ1ZTIuNS4w55qE5a6e546w77yM5oSf6LCidnVl5Zui6ZifXG4vLyBTRUU6IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvYmxvYi8wOTQ4ZDk5OWYyZmRkZjlmOTA5OTE5NTY0OTNmOTc2MjczYzVkYTFmL3NyYy9jb3JlL3V0aWwvZW52LmpzI0w2OFxuXG5cbi8vIHZhciBiaW5kID0gcmVxdWlyZSgnLi9iaW5kJyk7XG5cbi8qKlxuICog5LiL5LiA5Liq5ZGo5pyf6KaB5omn6KGM55qE5Lu75Yqh5YiX6KGoXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbnZhciBuZXh0VGFza3MgPSBbXTtcblxuLyoqXG4gKiDmiafooYzkuIvkuIDkuKrlkajmnJ/ku7vliqHnmoTlh73mlbBcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xudmFyIG5leHRIYW5kbGVyO1xuXG4vKipcbiAqIOa1j+iniOWZqOaYr+WQpuaUr+aMgeWOn+eUn1Byb21pc2VcbiAqIOWvuVByb21pc2XlgZrliKTmlq3vvIzmmK/kuLrkuobnpoHnlKjkuIDkupvkuI3kuKXosKjnmoRQcm9taXNl55qEcG9seWZpbGxcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG52YXIgaXNOYXRpdmVQcm9taXNlID0gdHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFByb21pc2UpO1xuXG4vKipcbiAqIOWcqOS4i+S4gOS4quaXtumXtOWRqOacn+i/kOihjOS7u+WKoVxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g6KaB6L+Q6KGM55qE5Lu75Yqh5Ye95pWwXG4gKiBAcGFyYW0ge09iamVjdD19IHRoaXNBcmcgdGhpc+aMh+WQkeWvueixoVxuICovXG5mdW5jdGlvbiBuZXh0VGljayhmbiwgdGhpc0FyZykge1xuICAgIGlmICh0aGlzQXJnKSB7XG4gICAgICAgIGZuID0gYmluZChmbiwgdGhpc0FyZyk7XG4gICAgfVxuICAgIG5leHRUYXNrcy5wdXNoKGZuKTtcblxuICAgIGlmIChuZXh0SGFuZGxlcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0YXNrcyA9IG5leHRUYXNrcy5zbGljZSgwKTtcbiAgICAgICAgbmV4dFRhc2tzID0gW107XG4gICAgICAgIG5leHRIYW5kbGVyID0gbnVsbDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRhc2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdGFza3NbaV0oKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDpnZ7moIflh4bmlrnms5XvvIzkvYbmmK/mraTmlrnms5XpnZ7luLjlkLvlkIjopoHmsYLjgIJcbiAgICBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzZXRJbW1lZGlhdGUobmV4dEhhbmRsZXIpO1xuICAgIH1cbiAgICAvLyDnlKhNZXNzYWdlQ2hhbm5lbOWOu+WBmnNldEltbWVkaWF0ZeeahHBvbHlmaWxsXG4gICAgLy8g5Y6f55CG5piv5bCG5paw55qEbWVzc2FnZeS6i+S7tuWKoOWFpeWIsOWOn+acieeahGRvbSBldmVudHPkuYvlkI5cbiAgICBlbHNlIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdmFyIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IG5leHRIYW5kbGVyO1xuICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKDEpO1xuICAgIH1cbiAgICAvLyBmb3IgbmF0aXZlIGFwcFxuICAgIGVsc2UgaWYgKGlzTmF0aXZlUHJvbWlzZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKG5leHRIYW5kbGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQobmV4dEhhbmRsZXIsIDApO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbmV4dFRpY2s7XG5cblxuLyoqXG4gKiBAZmlsZSBpZeeJiOacrOWPt1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDku451c2VyQWdlbnTkuK1pZeeJiOacrOWPt+eahOWMuemFjeS/oeaBr1xuICpcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudmFyIGllVmVyc2lvbk1hdGNoID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9tc2llXFxzKihbMC05XSspL2kpO1xuXG4vKipcbiAqIGll54mI5pys5Y+377yM6Z2eaWXml7bkuLowXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqL1xudmFyIGllID0gaWVWZXJzaW9uTWF0Y2ggPyBpZVZlcnNpb25NYXRjaFsxXSAtIDAgOiAwO1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpZTtcblxuXG4vKipcbiAqIEBmaWxlIOaYr+WQpiBJRSDlubbkuJTlsI/kuo4gOVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGllID0gcmVxdWlyZSgnLi9pZScpO1xuXG4vLyBIQUNLOlxuLy8gMS4gSUU45LiL77yM6K6+572uaW5uZXJIVE1M5pe25aaC5p6c5LulaHRtbCBjb21tZW505byA5aS077yMY29tbWVudOS8muiiq+iHquWKqOa7pOaOiVxuLy8gICAg5Li65LqG5L+d6K+Bc3R1bXDlrZjlnKjvvIzpnIDopoHorr7nva7lroxodG1s5ZCO77yMY3JlYXRlQ29tbWVudOW5tmFwcGVuZENoaWxkL2luc2VydEJlZm9yZVxuLy8gMi4gSUU45LiL77yMaW5uZXJIVE1M6L+Y5LiN5pSv5oyBY3VzdG9tIGVsZW1lbnTvvIzmiYDku6XpnIDopoHnlKhkaXbmm7/ku6PvvIzkuI3nlKhjcmVhdGVFbGVtZW50XG4vLyAzLiDomb3nhLZJRTjlt7Lnu4/kvJjljJbkuoblrZfnrKbkuLIr6L+e5o6l77yM56KO54mH5YyW6L+e5o6l5oCn6IO95LiN5YaN6YCA5YyWXG4vLyAgICDkvYbmmK/nlLHkuo7kuIrpnaLlpJrkuKrlhbzlrrnlnLrmma/pg73nlKggPCA5IOWIpOaWre+8jOaJgOS7peWtl+espuS4sui/nuaOpeS5n+ayv+eUqFxuLy8gICAg5omA5Lul57uT5p6c5pivSUU45LiL5a2X56ym5Liy6L+e5o6l55So55qE5piv5pWw57uEam9pbueahOaWueW8j1xuXG4vLyAjW2JlZ2luXSBhbGx1YVxuLyoqXG4gKiDmmK/lkKYgSUUg5bm25LiU5bCP5LqOIDlcbiAqL1xudmFyIGllT2xkVGhhbjkgPSBpZSAmJiBpZSA8IDk7XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaWVPbGRUaGFuOTtcblxuXG4vKipcbiAqIEBmaWxlIERPTSDkuovku7bmjILovb1cbiAqIEBhdXRob3IgZGFmcm9rKG8ub0BtdWcuZG9nKVxuICovXG5cbi8qKlxuICogRE9NIOS6i+S7tuaMgui9vVxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgRE9N5YWD57SgXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIOS6i+S7tuWQjVxuICovXG5mdW5jdGlvbiB0cmlnZ2VyKGVsLCBldmVudE5hbWUpIHtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgIGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0cmlnZ2VyO1xuXG5cbi8qKlxuICogQGZpbGUg6Kej5YazIElFOSDlnKjooajljZXlhYPntKDkuK3liKDpmaTlrZfnrKbml7bkuI3op6blj5Hkuovku7bnmoTpl67pophcbiAqIEBhdXRob3IgZGFmcm9rKG8ub0BtdWcuZG9nKVxuICovXG5cbi8vIHZhciBpZSA9IHJlcXVpcmUoJy4vaWUnKTtcbi8vIHZhciBvbiA9IHJlcXVpcmUoJy4vb24nKTtcbi8vIHZhciB0cmlnZ2VyID0gcmVxdWlyZSgnLi90cmlnZ2VyJyk7XG5cbi8vICNbYmVnaW5dIGFsbHVhXG5pZiAoaWUgPT09IDkpIHtcbiAgICBvbihkb2N1bWVudCwgJ3NlbGVjdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKGVsLnRhZ05hbWUgPT09ICdURVhUQVJFQScgfHwgZWwudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgICAgICAgdHJpZ2dlcihlbCwgJ2lucHV0Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vICNbZW5kXVxuXG5cbi8qKlxuICogQGZpbGUg6Ieq6Zet5ZCI5qCH562+6KGoXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgc3BsaXRTdHIyT2JqID0gcmVxdWlyZSgnLi4vdXRpbC9zcGxpdC1zdHItMi1vYmonKTtcblxuLyoqXG4gKiDoh6rpl63lkIjmoIfnrb7liJfooahcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgYXV0b0Nsb3NlVGFncyA9IHNwbGl0U3RyMk9iaignYXJlYSxiYXNlLGJyLGNvbCxlbWJlZCxocixpbWcsaW5wdXQsa2V5Z2VuLHBhcmFtLHNvdXJjZSx0cmFjayx3YnInKTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gYXV0b0Nsb3NlVGFncztcblxuXG4vKipcbiAqIEBmaWxlIGRhdGEgdHlwZXNcbiAqIEBhdXRob3IgbGVvbiA8bHVkYWZhQG91dGxvb2suY29tPlxuICovXG5cbi8vIHZhciBiaW5kID0gcmVxdWlyZSgnLi9iaW5kJyk7XG4vLyB2YXIgZW1wdHkgPSByZXF1aXJlKCcuL2VtcHR5Jyk7XG4vLyB2YXIgZXh0ZW5kID0gcmVxdWlyZSgnLi9leHRlbmQnKTtcblxuLy8gI1tiZWdpbl0gZXJyb3JcbnZhciBBTk9OWU1PVVNfQ0xBU1NfTkFNRSA9ICc8PGFub255bW91cz4+JztcblxuLyoqXG4gKiDojrflj5bnsr7noa7nmoTnsbvlnotcbiAqXG4gKiBATk9URSDlpoLmnpwgb2JqIOaYr+S4gOS4qiBET01FbGVtZW5077yM5oiR5Lus5Lya6L+U5ZueIGBlbGVtZW50YO+8m1xuICpcbiAqIEBwYXJhbSAgeyp9IG9iaiDnm67moIdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RGF0YVR5cGUob2JqKSB7XG5cbiAgICBpZiAob2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICByZXR1cm4gJ2VsZW1lbnQnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG4gICAgICAgIC5jYWxsKG9iailcbiAgICAgICAgLnNsaWNlKDgsIC0xKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbn1cbi8vICNbZW5kXVxuXG4vKipcbiAqIOWIm+W7uumTvuW8j+eahOaVsOaNruexu+Wei+agoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSB2YWxpZGF0ZSDnnJ/mraPnmoTmoKHpqozlmahcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgdmFyIGNoYWluZWRDaGVja2VyID0gZnVuY3Rpb24gKCkge307XG4gICAgY2hhaW5lZENoZWNrZXIuaXNSZXF1aXJlZCA9IGVtcHR5O1xuXG4gICAgLy8g5Y+q5ZyoIGVycm9yIOWKn+iDveWQr+eUqOaXtuaJjeacieWunumZheS4iueahCBkYXRhVHlwZXMg5qOA5rWLXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB2YXIgY2hlY2tUeXBlID0gZnVuY3Rpb24gKGlzUmVxdWlyZWQsIGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVHlwZSA9IGdldERhdGFUeXBlKGRhdGFWYWx1ZSk7XG5cbiAgICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTX0NMQVNTX05BTUU7XG5cbiAgICAgICAgLy8g5aaC5p6c5pivIG51bGwg5oiWIHVuZGVmaW5lZO+8jOmCo+S5iOimgeaPkOWJjei/lOWbnuWVplxuICAgICAgICBpZiAoZGF0YVZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIOaYryByZXF1aXJlZCDlsLHmiqXplJlcbiAgICAgICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgICAgICsgJ1RoZSBgJyArIGRhdGFOYW1lICsgJ2AgJ1xuICAgICAgICAgICAgICAgICAgICArICdpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsICdcbiAgICAgICAgICAgICAgICAgICAgKyAnYnV0IGl0cyB2YWx1ZSBpcyAnICsgZGF0YVR5cGVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5LiN5pivIHJlcXVpcmVk77yM6YKj5bCx5pivIG9rIOeahFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsaWRhdGUoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSk7XG5cbiAgICB9O1xuXG4gICAgY2hhaW5lZENoZWNrZXIgPSBiaW5kKGNoZWNrVHlwZSwgbnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja2VyLmlzUmVxdWlyZWQgPSBiaW5kKGNoZWNrVHlwZSwgbnVsbCwgdHJ1ZSk7XG4gICAgLy8gI1tlbmRdXG5cblxuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja2VyO1xuXG59XG5cbi8vICNbYmVnaW5dIGVycm9yXG4vKipcbiAqIOeUn+aIkOS4u+imgeexu+Wei+aVsOaNruagoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZSDkuLvnsbvlnotcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIodHlwZSkge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVHlwZSA9IGdldERhdGFUeXBlKGRhdGFWYWx1ZSk7XG5cbiAgICAgICAgaWYgKGRhdGFUeXBlICE9PSB0eXBlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgdHlwZSdcbiAgICAgICAgICAgICAgICArICcoJyArIGRhdGFUeXBlICsgJyBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcsICdcbiAgICAgICAgICAgICAgICArICdleHBlY3RlZCAnICsgdHlwZSArICcpJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cblxuXG5cbi8qKlxuICog55Sf5oiQIGFycmF5T2Yg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGFycmF5SXRlbUNoZWNrZXIg5pWw57uE5Lit5q+P6aG55pWw5o2u55qE5qCh6aqM5ZmoXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXJyYXlPZkNoZWNrZXIoYXJyYXlJdGVtQ2hlY2tlcikge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIGFycmF5SXRlbUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGEgYCcgKyBkYXRhTmFtZSArICdgIG9mIGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkICdcbiAgICAgICAgICAgICAgICArICdEYXRhVHlwZSBub3RhdGlvbiBpbnNpZGUgYGFycmF5T2ZgLCBleHBlY3RlZCBgZnVuY3Rpb25gJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiB0eXBlJ1xuICAgICAgICAgICAgICAgICsgJygnICsgZGF0YVR5cGUgKyAnIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgICAgICsgJ2V4cGVjdGVkIGFycmF5KSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0YVZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheUl0ZW1DaGVja2VyKGRhdGFWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lICsgJ1snICsgaSArICddJyk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59XG5cbi8qKlxuICog55Sf5oiQIGluc3RhbmNlT2Yg5qOA5rWL5ZmoXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb258Q2xhc3N9IGV4cGVjdGVkQ2xhc3Mg5pyf5b6F55qE57G7XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VPZkNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG5cbiAgICAgICAgaWYgKGRhdGFWYWx1ZSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWVDbGFzc05hbWUgPSBkYXRhVmFsdWUuY29uc3RydWN0b3IgJiYgZGF0YVZhbHVlLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgICAgICAgID8gZGF0YVZhbHVlLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgICAgICAgIDogQU5PTllNT1VTX0NMQVNTX05BTUU7XG5cbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VU19DTEFTU19OQU1FO1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHR5cGUnXG4gICAgICAgICAgICArICcoJyArIGRhdGFWYWx1ZUNsYXNzTmFtZSArICcgc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCAnXG4gICAgICAgICAgICArICdleHBlY3RlZCBpbnN0YW5jZSBvZiAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnKSdcbiAgICAgICAgKTtcblxuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgc2hhcGUg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBzaGFwZVR5cGVzIHNoYXBlIOagoemqjOinhOWImVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNoYXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIGlmIChnZXREYXRhVHlwZShzaGFwZVR5cGVzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YVR5cGUgbm90YXRpb24gaW5zaWRlIGBzaGFwZWAsIGV4cGVjdGVkIGBvYmplY3RgJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgdHlwZSdcbiAgICAgICAgICAgICAgICArICcoJyArIGRhdGFUeXBlICsgJyBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcsICdcbiAgICAgICAgICAgICAgICArICdleHBlY3RlZCBvYmplY3QpJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIHNoYXBlS2V5TmFtZSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgICAgICBpZiAoc2hhcGVUeXBlcy5oYXNPd25Qcm9wZXJ0eShzaGFwZUtleU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW3NoYXBlS2V5TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGVja2VyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZXIoZGF0YVZhbHVlLCBzaGFwZUtleU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSArICcuJyArIHNoYXBlS2V5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KTtcblxufVxuXG4vKipcbiAqIOeUn+aIkCBvbmVPZiDmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gZXhwZWN0ZWRFbnVtVmFsdWVzIOacn+W+heeahOaemuS4vuWAvFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9uZU9mQ2hlY2tlcihleHBlY3RlZEVudW1WYWx1ZXMpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgaWYgKGdldERhdGFUeXBlKGV4cGVjdGVkRW51bVZhbHVlcykgIT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YVR5cGUgbm90YXRpb24gaW5zaWRlIGBvbmVPZmAsIGFycmF5IGlzIGV4cGVjdGVkLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cGVjdGVkRW51bVZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFWYWx1ZSA9PT0gZXhwZWN0ZWRFbnVtVmFsdWVzW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgdmFsdWUnXG4gICAgICAgICAgICArICcoYCcgKyBkYXRhVmFsdWUgKyAnYCBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcsICdcbiAgICAgICAgICAgICsgJ2V4cGVjdGVkIG9uZSBvZiAnICsgZXhwZWN0ZWRFbnVtVmFsdWVzLmpvaW4oJywnKSArICcpJ1xuICAgICAgICApO1xuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgb25lT2ZUeXBlIOagoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge0FycmF5PEZ1bmN0aW9uPn0gZXhwZWN0ZWRFbnVtT2ZUeXBlVmFsdWVzIOacn+W+heeahOaemuS4vuexu+Wei1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9uZU9mVHlwZUNoZWNrZXIoZXhwZWN0ZWRFbnVtT2ZUeXBlVmFsdWVzKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIGlmIChnZXREYXRhVHlwZShleHBlY3RlZEVudW1PZlR5cGVWYWx1ZXMpICE9PSAnYXJyYXknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdEYXRhIGAnICsgZGF0YU5hbWUgKyAnYCBvZiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YVR5cGUgbm90YXRpb24gaW5zaWRlIGBvbmVPZmAsIGFycmF5IGlzIGV4cGVjdGVkLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cGVjdGVkRW51bU9mVHlwZVZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXG4gICAgICAgICAgICB2YXIgY2hlY2tlciA9IGV4cGVjdGVkRW51bU9mVHlwZVZhbHVlc1tpXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlcihkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKTtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpwgY2hlY2tlciDlrozmiJDmoKHpqozmsqHmiqXplJnvvIzpgqPlsLHov5Tlm57kuoZcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOaciemUmeivr++8jOmCo+S5iOW6lOivpeaKiumUmeivr+WQnuaOiVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyDmiYDmnInnmoTlj6/mjqXlj5cgdHlwZSDpg73lpLHotKXkuobvvIzmiY3kuKLkuIDkuKrlvILluLhcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZGF0YU5hbWUgKyAnYCBvZiB2YWx1ZSdcbiAgICAgICAgICAgICsgJyhgJyArIGRhdGFWYWx1ZSArICdgIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJyknXG4gICAgICAgICk7XG5cbiAgICB9KTtcblxufVxuXG4vKipcbiAqIOeUn+aIkCBvYmplY3RPZiDmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gdHlwZUNoZWNrZXIg5a+56LGh5bGe5oCn5YC85qCh6aqM5ZmoXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZDaGVja2VyKHR5cGVDaGVja2VyKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGEgYCcgKyBkYXRhTmFtZSArICdgIG9mIGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkICdcbiAgICAgICAgICAgICAgICArICdEYXRhVHlwZSBub3RhdGlvbiBpbnNpZGUgYG9iamVjdE9mYCwgZXhwZWN0ZWQgZnVuY3Rpb24nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuICAgICAgICB2YXIgZGF0YVR5cGUgPSBnZXREYXRhVHlwZShkYXRhVmFsdWUpO1xuXG4gICAgICAgIGlmIChkYXRhVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBkYXRhTmFtZSArICdgIG9mIHR5cGUnXG4gICAgICAgICAgICAgICAgKyAnKCcgKyBkYXRhVHlwZSArICcgc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCAnXG4gICAgICAgICAgICAgICAgKyAnZXhwZWN0ZWQgb2JqZWN0KSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBkYXRhS2V5TmFtZSBpbiBkYXRhVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkYXRhVmFsdWUuaGFzT3duUHJvcGVydHkoZGF0YUtleU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdHlwZUNoZWNrZXIoXG4gICAgICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUtleU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxEYXRhTmFtZSArICcuJyArIGRhdGFLZXlOYW1lXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9KTtcblxufVxuXG4vKipcbiAqIOeUn+aIkCBleGFjdCDmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNoYXBlVHlwZXMgb2JqZWN0IOW9ouaAgeWumuS5iVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUV4YWN0Q2hlY2tlcihzaGFwZVR5cGVzKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSwgc2VjcmV0KSB7XG5cbiAgICAgICAgaWYgKGdldERhdGFUeXBlKHNoYXBlVHlwZXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgZXhhY3RgJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcbiAgICAgICAgdmFyIGRhdGFWYWx1ZVR5cGUgPSBnZXREYXRhVHlwZShkYXRhVmFsdWUpO1xuXG4gICAgICAgIGlmIChkYXRhVmFsdWVUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnSW52YWxpZCBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgdHlwZSBgJyArIGRhdGFWYWx1ZVR5cGUgKyAnYCdcbiAgICAgICAgICAgICAgICArICcoc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCBleHBlY3RlZCBgb2JqZWN0YCknXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFsbEtleXMgPSB7fTtcblxuICAgICAgICAvLyDlhYjlkIjlhaUgc2hhcGVUeXBlc1xuICAgICAgICBleHRlbmQoYWxsS2V5cywgc2hhcGVUeXBlcyk7XG4gICAgICAgIC8vIOWGjeWQiOWFpSBkYXRhVmFsdWVcbiAgICAgICAgZXh0ZW5kKGFsbEtleXMsIGRhdGFWYWx1ZSk7XG4gICAgICAgIC8vIOS/neivgSBhbGxLZXlzIOeahOexu+Wei+ato+ehrlxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgICAgICBpZiAoYWxsS2V5cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG5cbiAgICAgICAgICAgICAgICAvLyBkYXRhVmFsdWUg5Lit5pyJ5LiA5Liq5aSa5L2Z55qE5pWw5o2u6aG5XG4gICAgICAgICAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnSW52YWxpZCBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2AgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJyhgJyArIGtleSArICdgIGlzIG5vdCBkZWZpbmVkIGluIGBEYXRhVHlwZXMuZXhhY3RgKSdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gZGF0YVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIGtleSBgJyArIGtleSArICdgICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLiAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICcoYCcgKyBrZXkgKyAnYCBpcyBtYXJrZWQgYHJlcXVpcmVkYCBpbiBgRGF0YVR5cGVzLmV4YWN0YCknXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2hlY2tlcihcbiAgICAgICAgICAgICAgICAgICAgZGF0YVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxEYXRhTmFtZSArICcuJyArIGtleSxcbiAgICAgICAgICAgICAgICAgICAgc2VjcmV0XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KTtcblxufVxuLy8gI1tlbmRdXG5cblxuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLXZhbGlkLXZhci1qc2RvYyAqL1xudmFyIERhdGFUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihlbXB0eSksXG4gICAgb2JqZWN0OiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGVtcHR5KSxcbiAgICBmdW5jOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGVtcHR5KSxcbiAgICBzdHJpbmc6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZW1wdHkpLFxuICAgIG51bWJlcjogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihlbXB0eSksXG4gICAgYm9vbDogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihlbXB0eSksXG4gICAgc3ltYm9sOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGVtcHR5KSxcbiAgICBhbnk6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgYXJyYXlPZjogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBvYmplY3RPZjogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlclxufTtcblxuLy8gI1tiZWdpbl0gZXJyb3JcbkRhdGFUeXBlcyA9IHtcblxuICAgIGFueTogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihlbXB0eSksXG5cbiAgICAvLyDnsbvlnovmo4DmtYtcbiAgICBhcnJheTogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBib29sOiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICAvLyDlpI3lkIjnsbvlnovmo4DmtYtcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mQ2hlY2tlcixcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZU9mQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVPbmVPZkNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVPbmVPZlR5cGVDaGVja2VyLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZkNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZUV4YWN0Q2hlY2tlclxuXG59O1xuLyogZXNsaW50LWVuYWJsZSBmZWNzLXZhbGlkLXZhci1qc2RvYyAqL1xuLy8gI1tlbmRdXG5cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBEYXRhVHlwZXM7XG5cblxuLyoqXG4gKiBAZmlsZSDliJvlu7rmlbDmja7mo4DmtYvlh73mlbBcbiAqIEBhdXRob3IgbGVvbjxsdWRhZmFAb3V0bG9vay5jb20+XG4gKi9cblxuXG4vLyAjW2JlZ2luXSBlcnJvclxuXG4vKipcbiAqIOWIm+W7uuaVsOaNruajgOa1i+WHveaVsFxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gZGF0YVR5cGVzICAgICDmlbDmja7moLzlvI9cbiAqIEBwYXJhbSAge3N0cmluZ30gY29tcG9uZW50TmFtZSDnu4Tku7blkI1cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVEYXRhVHlwZXNDaGVja2VyKGRhdGFUeXBlcywgY29tcG9uZW50TmFtZSkge1xuXG4gICAgLyoqXG4gICAgICog5qCh6aqMIGRhdGEg5piv5ZCm5ruh6LazIGRhdGEgdHlwZXMg55qE5qC85byPXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsqfSBkYXRhIOaVsOaNrlxuICAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgIGZvciAodmFyIGRhdGFUeXBlTmFtZSBpbiBkYXRhVHlwZXMpIHtcblxuICAgICAgICAgICAgaWYgKGRhdGFUeXBlcy5oYXNPd25Qcm9wZXJ0eShkYXRhVHlwZU5hbWUpKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGVDaGVja2VyID0gZGF0YVR5cGVzW2RhdGFUeXBlTmFtZV07XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFUeXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgY29tcG9uZW50TmFtZSArICc6JyArIGRhdGFUeXBlTmFtZSArICcgaXMgaW52YWxpZDsgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gc2FuLkRhdGFUeXBlcydcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkYXRhVHlwZUNoZWNrZXIoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGVOYW1lXG4gICAgICAgICAgICAgICAgKTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbn1cblxuLy8gI1tlbmRdXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGF0YVR5cGVzQ2hlY2tlcjtcblxuXG4vKipcbiAqIEBmaWxlIOWtl+espuS4sua6kOeggeivu+WPluexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vKipcbiAqIOWtl+espuS4sua6kOeggeivu+WPluexu++8jOeUqOS6juaooeadv+Wtl+espuS4suino+aekOi/h+eoi1xuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDopoHor7vlj5bnmoTlrZfnrKbkuLJcbiAqL1xuZnVuY3Rpb24gV2Fsa2VyKHNvdXJjZSkge1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMubGVuID0gdGhpcy5zb3VyY2UubGVuZ3RoO1xuICAgIHRoaXMuaW5kZXggPSAwO1xufVxuXG4vKipcbiAqIOiOt+WPluW9k+WJjeWtl+espueggVxuICpcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5jdXJyZW50Q29kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFyQ29kZSh0aGlzLmluZGV4KTtcbn07XG5cbi8qKlxuICog5oiq5Y+W5a2X56ym5Liy54mH5q61XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IOi1t+Wni+S9jee9rlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCDnu5PmnZ/kvY3nva5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5jdXQgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZS5zbGljZShzdGFydCwgZW5kKTtcbn07XG5cbi8qKlxuICog5ZCR5YmN6K+75Y+W5a2X56ymXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGRpc3RhbmNlIOivu+WPluWtl+espuaVsFxuICovXG5XYWxrZXIucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gKGRpc3RhbmNlKSB7XG4gICAgdGhpcy5pbmRleCArPSBkaXN0YW5jZTtcbn07XG5cbi8qKlxuICog6K+75Y+W5LiL5LiA5Liq5a2X56ym77yM6L+U5Zue5LiL5LiA5Liq5a2X56ym55qEIGNvZGVcbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbldhbGtlci5wcm90b3R5cGUubmV4dENvZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nbygxKTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Q29kZSgpO1xufTtcblxuLyoqXG4gKiDojrflj5bnm7jlupTkvY3nva7lrZfnrKbnmoQgY29kZVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCDlrZfnrKbkvY3nva5cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5jaGFyQ29kZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZS5jaGFyQ29kZUF0KGluZGV4KTtcbn07XG5cbi8qKlxuICog5ZCR5YmN6K+75Y+W5a2X56ym77yM55u05Yiw6YGH5Yiw5oyH5a6a5a2X56ym5YaN5YGc5q2iXG4gKlxuICogQHBhcmFtIHtudW1iZXI9fSBjaGFyQ29kZSDmjIflrprlrZfnrKbnmoRjb2RlXG4gKiBAcmV0dXJuIHtib29sZWFufSDlvZPmjIflrprlrZfnrKbml7bvvIzov5Tlm57mmK/lkKbnorDliLDmjIflrprnmoTlrZfnrKZcbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5nb1VudGlsID0gZnVuY3Rpb24gKGNoYXJDb2RlKSB7XG4gICAgdmFyIGNvZGU7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLmxlbiAmJiAoY29kZSA9IHRoaXMuY3VycmVudENvZGUoKSkpIHtcbiAgICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IGNoYXJDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICog5ZCR5YmN6K+75Y+W56ym5ZCI6KeE5YiZ55qE5a2X56ym54mH5q6177yM5bm26L+U5Zue6KeE5YiZ5Yy56YWN57uT5p6cXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlZyDlrZfnrKbniYfmrrXnmoTmraPliJnooajovr7lvI9cbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5XYWxrZXIucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24gKHJlZykge1xuICAgIHJlZy5sYXN0SW5kZXggPSB0aGlzLmluZGV4O1xuXG4gICAgdmFyIG1hdGNoID0gcmVnLmV4ZWModGhpcy5zb3VyY2UpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gcmVnLmxhc3RJbmRleDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBXYWxrZXI7XG5cblxuXG4vKipcbiAqIEBmaWxlIOaooeadv+ino+aekOeUn+aIkOeahOaKveixoeiKgueCuVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDliJvlu7rmqKHmnb/op6PmnpDnlJ/miJDnmoTmir3osaHoioLngrlcbiAqXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnMg6IqC54K55Y+C5pWwXG4gKiBAcGFyYW0ge3N0cmluZz19IG9wdGlvbnMudGFnTmFtZSDmoIfnrb7lkI1cbiAqIEBwYXJhbSB7QU5vZGU9fSBvcHRpb25zLnBhcmVudCDniLboioLngrlcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdGlvbnMudGV4dEV4cHIg5paH5pys6IqC54K56KGo6L6+5byP5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFOb2RlKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGlmICghb3B0aW9ucy50ZXh0RXhwcikge1xuICAgICAgICBvcHRpb25zLmRpcmVjdGl2ZXMgPSBvcHRpb25zLmRpcmVjdGl2ZXMgfHwge307XG4gICAgICAgIG9wdGlvbnMucHJvcHMgPSBvcHRpb25zLnByb3BzIHx8IFtdO1xuICAgICAgICBvcHRpb25zLmV2ZW50cyA9IG9wdGlvbnMuZXZlbnRzIHx8IFtdO1xuICAgICAgICBvcHRpb25zLmNoaWxkcmVuID0gb3B0aW9ucy5jaGlsZHJlbiB8fCBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlQU5vZGU7XG5cblxuLyoqXG4gKiBAZmlsZSDmiooga2ViYWIgY2FzZSDlrZfnrKbkuLLovazmjaLmiJAgY2FtZWwgY2FzZVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDmiooga2ViYWIgY2FzZSDlrZfnrKbkuLLovazmjaLmiJAgY2FtZWwgY2FzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ5a2X56ym5LiyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGtlYmFiMmNhbWVsKHNvdXJjZSkge1xuICAgIHJldHVybiBzb3VyY2UucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKG1hdGNoLCBhbHBoYSkge1xuICAgICAgICByZXR1cm4gYWxwaGEudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ga2ViYWIyY2FtZWw7XG5cblxuLyoqXG4gKiBAZmlsZSDooajovr7lvI/nsbvlnotcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog6KGo6L6+5byP57G75Z6LXG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgRXhwclR5cGUgPSB7XG4gICAgU1RSSU5HOiAxLFxuICAgIE5VTUJFUjogMixcbiAgICBCT09MOiAzLFxuICAgIEFDQ0VTU09SOiA0LFxuICAgIElOVEVSUDogNSxcbiAgICBDQUxMOiA2LFxuICAgIFRFWFQ6IDcsXG4gICAgQklOQVJZOiA4LFxuICAgIFVOQVJZOiA5LFxuICAgIFRFUlRJQVJZOiAxMFxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gRXhwclR5cGU7XG5cblxuLyoqXG4gKiBAZmlsZSDliJvlu7rorr/pl67ooajovr7lvI/lr7nosaFcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG5cbi8qKlxuICog5Yib5bu66K6/6Zeu6KGo6L6+5byP5a+56LGhXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGF0aHMg6K6/6Zeu6Lev5b6EXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFjY2Vzc29yKHBhdGhzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogRXhwclR5cGUuQUNDRVNTT1IsXG4gICAgICAgIHBhdGhzOiBwYXRoc1xuICAgIH07XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFjY2Vzc29yO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W5a2X56ym5LiyXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG5cbi8qKlxuICog6K+75Y+W5a2X56ym5LiyXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZFN0cmluZyh3YWxrZXIpIHtcbiAgICB2YXIgc3RhcnRDb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG4gICAgdmFyIHN0YXJ0SW5kZXggPSB3YWxrZXIuaW5kZXg7XG4gICAgdmFyIGNoYXJDb2RlO1xuXG4gICAgd2Fsa0xvb3A6IHdoaWxlICgoY2hhckNvZGUgPSB3YWxrZXIubmV4dENvZGUoKSkpIHtcbiAgICAgICAgc3dpdGNoIChjaGFyQ29kZSkge1xuICAgICAgICAgICAgY2FzZSA5MjogLy8gXFxcbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHN0YXJ0Q29kZTpcbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgYnJlYWsgd2Fsa0xvb3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGl0ZXJhbCA9IHdhbGtlci5jdXQoc3RhcnRJbmRleCwgd2Fsa2VyLmluZGV4KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgIHZhbHVlOiAobmV3IEZ1bmN0aW9uKCdyZXR1cm4gJyArIGxpdGVyYWwpKSgpXG4gICAgfTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZFN0cmluZztcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluaVsOWtl1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuXG4vKipcbiAqIOivu+WPluaVsOWtl1xuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZE51bWJlcih3YWxrZXIpIHtcbiAgICB2YXIgbWF0Y2ggPSB3YWxrZXIubWF0Y2goL1xccyooLT9bMC05XSsoXFwuWzAtOV0rKT8pL2cpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogRXhwclR5cGUuTlVNQkVSLFxuICAgICAgICB2YWx1ZTogbWF0Y2hbMV0gLSAwXG4gICAgfTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZE51bWJlcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPlmlkZW50XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOivu+WPlmlkZW50XG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiByZWFkSWRlbnQod2Fsa2VyKSB7XG4gICAgdmFyIG1hdGNoID0gd2Fsa2VyLm1hdGNoKC9cXHMqKFtcXCQwLTlhLXpfXSspL2lnKTtcbiAgICByZXR1cm4gbWF0Y2hbMV07XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRJZGVudDtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluS4ieWFg+ihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkTG9naWNhbE9SRXhwciA9IHJlcXVpcmUoJy4vcmVhZC1sb2dpY2FsLW9yLWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bkuInlhYPooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkVGVydGlhcnlFeHByKHdhbGtlcikge1xuICAgIHZhciBjb25kaXRpb25hbCA9IHJlYWRMb2dpY2FsT1JFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIGlmICh3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gNjMpIHsgLy8gP1xuICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgIHZhciB5ZXNFeHByID0gcmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpO1xuICAgICAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgICAgIGlmICh3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gNTgpIHsgLy8gOlxuICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5URVJUSUFSWSxcbiAgICAgICAgICAgICAgICBzZWdzOiBbXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbmFsLFxuICAgICAgICAgICAgICAgICAgICB5ZXNFeHByLFxuICAgICAgICAgICAgICAgICAgICByZWFkVGVydGlhcnlFeHByKHdhbGtlcilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmRpdGlvbmFsO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkVGVydGlhcnlFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W6K6/6Zeu6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi9jcmVhdGUtYWNjZXNzb3InKTtcbi8vIHZhciByZWFkSWRlbnQgPSByZXF1aXJlKCcuL3JlYWQtaWRlbnQnKTtcbi8vIHZhciByZWFkVGVydGlhcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXRlcnRpYXJ5LWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5borr/pl67ooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkQWNjZXNzb3Iod2Fsa2VyKSB7XG4gICAgdmFyIGZpcnN0U2VnID0gcmVhZElkZW50KHdhbGtlcik7XG4gICAgc3dpdGNoIChmaXJzdFNlZykge1xuICAgICAgICBjYXNlICd0cnVlJzpcbiAgICAgICAgY2FzZSAnZmFsc2UnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5CT09MLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmaXJzdFNlZyA9PT0gJ3RydWUnXG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBjcmVhdGVBY2Nlc3NvcihbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgIHZhbHVlOiBmaXJzdFNlZ1xuICAgICAgICB9XG4gICAgXSk7XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cbiAgICBhY2Nlc3Nvckxvb3A6IHdoaWxlICgxKSB7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cblxuICAgICAgICBzd2l0Y2ggKHdhbGtlci5jdXJyZW50Q29kZSgpKSB7XG4gICAgICAgICAgICBjYXNlIDQ2OiAvLyAuXG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWRlbnQgYXMgc3RyaW5nXG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhdGhzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZWFkSWRlbnQod2Fsa2VyKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkxOiAvLyBbXG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wYXRocy5wdXNoKHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKSk7XG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvVW50aWwoOTMpOyAvLyBdXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWsgYWNjZXNzb3JMb29wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZEFjY2Vzc29yO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W5ous5Y+36KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgcmVhZFRlcnRpYXJ5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC10ZXJ0aWFyeS1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W5ous5Y+36KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZFBhcmVudGhlc2l6ZWRFeHByKHdhbGtlcikge1xuICAgIHdhbGtlci5nbygxKTtcbiAgICB2YXIgZXhwciA9IHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCg0MSk7IC8vIClcblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkUGFyZW50aGVzaXplZEV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bkuIDlhYPooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZFN0cmluZyA9IHJlcXVpcmUoJy4vcmVhZC1zdHJpbmcnKTtcbi8vIHZhciByZWFkTnVtYmVyID0gcmVxdWlyZSgnLi9yZWFkLW51bWJlcicpO1xuLy8gdmFyIHJlYWRBY2Nlc3NvciA9IHJlcXVpcmUoJy4vcmVhZC1hY2Nlc3NvcicpO1xuLy8gdmFyIHJlYWRQYXJlbnRoZXNpemVkRXhwciA9IHJlcXVpcmUoJy4vcmVhZC1wYXJlbnRoZXNpemVkLWV4cHInKTtcblxuXG4vKipcbiAqIOivu+WPluS4gOWFg+ihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRVbmFyeUV4cHIod2Fsa2VyKSB7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIHN3aXRjaCAod2Fsa2VyLmN1cnJlbnRDb2RlKCkpIHtcbiAgICAgICAgY2FzZSAzMzogLy8gIVxuICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5VTkFSWSxcbiAgICAgICAgICAgICAgICBleHByOiByZWFkVW5hcnlFeHByKHdhbGtlcilcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgMzQ6IC8vIFwiXG4gICAgICAgIGNhc2UgMzk6IC8vICdcbiAgICAgICAgICAgIHJldHVybiByZWFkU3RyaW5nKHdhbGtlcik7XG4gICAgICAgIGNhc2UgNDU6IC8vIG51bWJlclxuICAgICAgICBjYXNlIDQ4OlxuICAgICAgICBjYXNlIDQ5OlxuICAgICAgICBjYXNlIDUwOlxuICAgICAgICBjYXNlIDUxOlxuICAgICAgICBjYXNlIDUyOlxuICAgICAgICBjYXNlIDUzOlxuICAgICAgICBjYXNlIDU0OlxuICAgICAgICBjYXNlIDU1OlxuICAgICAgICBjYXNlIDU2OlxuICAgICAgICBjYXNlIDU3OlxuICAgICAgICAgICAgcmV0dXJuIHJlYWROdW1iZXIod2Fsa2VyKTtcbiAgICAgICAgY2FzZSA0MDogLy8gKFxuICAgICAgICAgICAgcmV0dXJuIHJlYWRQYXJlbnRoZXNpemVkRXhwcih3YWxrZXIpO1xuICAgIH1cblxuICAgIHJldHVybiByZWFkQWNjZXNzb3Iod2Fsa2VyKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZFVuYXJ5RXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluS5mOazleihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkVW5hcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXVuYXJ5LWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bkuZjms5Xooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkTXVsdGlwbGljYXRpdmVFeHByKHdhbGtlcikge1xuICAgIHZhciBleHByID0gcmVhZFVuYXJ5RXhwcih3YWxrZXIpO1xuXG4gICAgd2hpbGUgKDEpIHtcbiAgICAgICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgICAgICB2YXIgY29kZSA9IHdhbGtlci5jdXJyZW50Q29kZSgpO1xuICAgICAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzc6IC8vICVcbiAgICAgICAgICAgIGNhc2UgNDI6IC8vICpcbiAgICAgICAgICAgIGNhc2UgNDc6IC8vIC9cbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgZXhwciA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuQklOQVJZLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogY29kZSxcbiAgICAgICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRVbmFyeUV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZE11bHRpcGxpY2F0aXZlRXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluWKoOazleihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkTXVsdGlwbGljYXRpdmVFeHByID0gcmVxdWlyZSgnLi9yZWFkLW11bHRpcGxpY2F0aXZlLWV4cHInKTtcblxuXG4vKipcbiAqIOivu+WPluWKoOazleihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRBZGRpdGl2ZUV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkTXVsdGlwbGljYXRpdmVFeHByKHdhbGtlcik7XG5cbiAgICB3aGlsZSAoMSkge1xuICAgICAgICB3YWxrZXIuZ29VbnRpbCgpO1xuICAgICAgICB2YXIgY29kZSA9IHdhbGtlci5jdXJyZW50Q29kZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICAgICAgY2FzZSA0MzogLy8gK1xuICAgICAgICAgICAgY2FzZSA0NTogLy8gLVxuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgICAgICBleHByID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5CSU5BUlksXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBjb2RlLFxuICAgICAgICAgICAgICAgICAgICBzZWdzOiBbZXhwciwgcmVhZE11bHRpcGxpY2F0aXZlRXhwcih3YWxrZXIpXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZEFkZGl0aXZlRXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluWFs+ezu+WIpOaWreihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkQWRkaXRpdmVFeHByID0gcmVxdWlyZSgnLi9yZWFkLWFkZGl0aXZlLWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5blhbPns7vliKTmlq3ooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkUmVsYXRpb25hbEV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkQWRkaXRpdmVFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIHZhciBjb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgNjA6IC8vIDxcbiAgICAgICAgY2FzZSA2MjogLy8gPlxuICAgICAgICAgICAgaWYgKHdhbGtlci5uZXh0Q29kZSgpID09PSA2MSkge1xuICAgICAgICAgICAgICAgIGNvZGUgKz0gNjE7XG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLkJJTkFSWSxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogY29kZSxcbiAgICAgICAgICAgICAgICBzZWdzOiBbZXhwciwgcmVhZEFkZGl0aXZlRXhwcih3YWxrZXIpXVxuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZFJlbGF0aW9uYWxFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W55u4562J5q+U5a+56KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRSZWxhdGlvbmFsRXhwciA9IHJlcXVpcmUoJy4vcmVhZC1yZWxhdGlvbmFsLWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bnm7jnrYnmr5Tlr7nooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkRXF1YWxpdHlFeHByKHdhbGtlcikge1xuICAgIHZhciBleHByID0gcmVhZFJlbGF0aW9uYWxFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIHZhciBjb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgNjE6IC8vID1cbiAgICAgICAgY2FzZSAzMzogLy8gIVxuICAgICAgICAgICAgaWYgKHdhbGtlci5uZXh0Q29kZSgpID09PSA2MSkge1xuICAgICAgICAgICAgICAgIGNvZGUgKz0gNjE7XG4gICAgICAgICAgICAgICAgaWYgKHdhbGtlci5uZXh0Q29kZSgpID09PSA2MSkge1xuICAgICAgICAgICAgICAgICAgICBjb2RlICs9IDYxO1xuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuQklOQVJZLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogY29kZSxcbiAgICAgICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRSZWxhdGlvbmFsRXhwcih3YWxrZXIpXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdhbGtlci5nbygtMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRFcXVhbGl0eUV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bpgLvovpHkuI7ooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZEVxdWFsaXR5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC1lcXVhbGl0eS1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W6YC76L6R5LiO6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZExvZ2ljYWxBTkRFeHByKHdhbGtlcikge1xuICAgIHZhciBleHByID0gcmVhZEVxdWFsaXR5RXhwcih3YWxrZXIpO1xuICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICBpZiAod2Fsa2VyLmN1cnJlbnRDb2RlKCkgPT09IDM4KSB7IC8vICZcbiAgICAgICAgaWYgKHdhbGtlci5uZXh0Q29kZSgpID09PSAzOCkge1xuICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5CSU5BUlksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IDc2LFxuICAgICAgICAgICAgICAgIHNlZ3M6IFtleHByLCByZWFkTG9naWNhbEFOREV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB3YWxrZXIuZ28oLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkTG9naWNhbEFOREV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bpgLvovpHmiJbooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZExvZ2ljYWxBTkRFeHByID0gcmVxdWlyZSgnLi9yZWFkLWxvZ2ljYWwtYW5kLWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bpgLvovpHmiJbooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkTG9naWNhbE9SRXhwcih3YWxrZXIpIHtcbiAgICB2YXIgZXhwciA9IHJlYWRMb2dpY2FsQU5ERXhwcih3YWxrZXIpO1xuICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICBpZiAod2Fsa2VyLmN1cnJlbnRDb2RlKCkgPT09IDEyNCkgeyAvLyB8XG4gICAgICAgIGlmICh3YWxrZXIubmV4dENvZGUoKSA9PT0gMTI0KSB7XG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLkJJTkFSWSxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogMjQ4LFxuICAgICAgICAgICAgICAgIHNlZ3M6IFtleHByLCByZWFkTG9naWNhbE9SRXhwcih3YWxrZXIpXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhbGtlci5nbygtMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRMb2dpY2FsT1JFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6Kej5p6Q6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgV2Fsa2VyID0gcmVxdWlyZSgnLi93YWxrZXInKTtcbi8vIHZhciByZWFkVGVydGlhcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXRlcnRpYXJ5LWV4cHInKTtcblxuLyoqXG4gKiDop6PmnpDooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOeggVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZUV4cHIoc291cmNlKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnICYmIHNvdXJjZS50eXBlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfVxuXG4gICAgdmFyIGV4cHIgPSByZWFkVGVydGlhcnlFeHByKG5ldyBXYWxrZXIoc291cmNlKSk7XG4gICAgZXhwci5yYXcgPSBzb3VyY2U7XG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBhcnNlRXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluiwg+eUqFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkQWNjZXNzb3IgPSByZXF1aXJlKCcuL3JlYWQtYWNjZXNzb3InKTtcbi8vIHZhciByZWFkVGVydGlhcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXRlcnRpYXJ5LWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bosIPnlKhcbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHBhcmFtIHtBcnJheT19IGRlZmF1bHRBcmdzIOm7mOiupOWPguaVsFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkQ2FsbCh3YWxrZXIsIGRlZmF1bHRBcmdzKSB7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcbiAgICB2YXIgaWRlbnQgPSByZWFkQWNjZXNzb3Iod2Fsa2VyKTtcbiAgICB2YXIgYXJncyA9IFtdO1xuXG4gICAgaWYgKHdhbGtlci5nb1VudGlsKDQwKSkgeyAvLyAoXG4gICAgICAgIHdoaWxlICghd2Fsa2VyLmdvVW50aWwoNDEpKSB7IC8vIClcbiAgICAgICAgICAgIGFyZ3MucHVzaChyZWFkVGVydGlhcnlFeHByKHdhbGtlcikpO1xuICAgICAgICAgICAgd2Fsa2VyLmdvVW50aWwoNDQpOyAvLyAsXG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZGVmYXVsdEFyZ3MpIHtcbiAgICAgICAgYXJncyA9IGRlZmF1bHRBcmdzO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEV4cHJUeXBlLkNBTEwsXG4gICAgICAgIG5hbWU6IGlkZW50LFxuICAgICAgICBhcmdzOiBhcmdzXG4gICAgfTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZENhbGw7XG5cblxuLyoqXG4gKiBAZmlsZSDop6PmnpDosIPnlKhcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIFdhbGtlciA9IHJlcXVpcmUoJy4vd2Fsa2VyJyk7XG4vLyB2YXIgcmVhZENhbGwgPSByZXF1aXJlKCcuL3JlYWQtY2FsbCcpO1xuXG4vKipcbiAqIOino+aekOiwg+eUqFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ56CBXG4gKiBAcGFyYW0ge0FycmF5PX0gZGVmYXVsdEFyZ3Mg6buY6K6k5Y+C5pWwXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlQ2FsbChzb3VyY2UsIGRlZmF1bHRBcmdzKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkQ2FsbChuZXcgV2Fsa2VyKHNvdXJjZSksIGRlZmF1bHRBcmdzKTtcbiAgICBleHByLnJhdyA9IHNvdXJjZTtcbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcGFyc2VDYWxsO1xuXG5cbi8qKlxuICogQGZpbGUg6Kej5p6Q5o+S5YC85pu/5o2iXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgV2Fsa2VyID0gcmVxdWlyZSgnLi93YWxrZXInKTtcbi8vIHZhciByZWFkVGVydGlhcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXRlcnRpYXJ5LWV4cHInKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZENhbGwgPSByZXF1aXJlKCcuL3JlYWQtY2FsbCcpO1xuXG4vKipcbiAqIOino+aekOaPkuWAvOabv+aNolxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ56CBXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlSW50ZXJwKHNvdXJjZSkge1xuICAgIHZhciB3YWxrZXIgPSBuZXcgV2Fsa2VyKHNvdXJjZSk7XG5cbiAgICB2YXIgaW50ZXJwID0ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5JTlRFUlAsXG4gICAgICAgIGV4cHI6IHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKSxcbiAgICAgICAgZmlsdGVyczogW10sXG4gICAgICAgIHJhdzogc291cmNlXG4gICAgfTtcblxuICAgIHdoaWxlICh3YWxrZXIuZ29VbnRpbCgxMjQpKSB7IC8vIHxcbiAgICAgICAgdmFyIGNhbGxFeHByID0gcmVhZENhbGwod2Fsa2VyKTtcbiAgICAgICAgc3dpdGNoIChjYWxsRXhwci5uYW1lLnBhdGhzWzBdLnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdodG1sJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jhdyc6XG4gICAgICAgICAgICAgICAgaW50ZXJwLm9yaWdpbmFsID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaW50ZXJwLmZpbHRlcnMucHVzaChjYWxsRXhwcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJwO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwYXJzZUludGVycDtcblxuXG4vKipcbiAqIEBmaWxlIOino+eggSBIVE1MIOWtl+espuWunuS9k1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxudmFyIEVOVElUWV9ERUNPREVfTUFQID0ge1xuICAgIGx0OiAnPCcsXG4gICAgZ3Q6ICc+JyxcbiAgICBuYnNwOiAnICcsXG4gICAgcXVvdDogJ1xcXCInLFxuICAgIGVtc3A6ICdcXHUyMDAzJyxcbiAgICBlbnNwOiAnXFx1MjAwMicsXG4gICAgdGhpbnNwOiAnXFx1MjAwOScsXG4gICAgY29weTogJ1xceGE5JyxcbiAgICByZWc6ICdcXHhhZScsXG4gICAgenduajogJ1xcdTIwMGMnLFxuICAgIHp3ajogJ1xcdTIwMGQnLFxuICAgIGFtcDogJyYnXG59O1xuXG4vKipcbiAqIOino+eggSBIVE1MIOWtl+espuWunuS9k1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug6KaB6Kej56CB55qE5a2X56ym5LiyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGRlY29kZUhUTUxFbnRpdHkoc291cmNlKSB7XG4gICAgcmV0dXJuIHNvdXJjZVxuICAgICAgICAucmVwbGFjZSgvJiMoWzAtOV0rKTsvZywgZnVuY3Rpb24gKG1hdGNoLCBjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgrY29kZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5yZXBsYWNlKC8mI3goWzAtOWEtZl0rKTsvaWcsIGZ1bmN0aW9uIChtYXRjaCwgY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoY29kZSwgMTYpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnJlcGxhY2UoLyYoW2Etel0rKTsvaWcsIGZ1bmN0aW9uIChtYXRjaCwgY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIEVOVElUWV9ERUNPREVfTUFQW2NvZGVdIHx8IG1hdGNoO1xuICAgICAgICB9KTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZGVjb2RlSFRNTEVudGl0eTtcblxuXG4vKipcbiAqIEBmaWxlIOino+aekOaWh+acrFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIFdhbGtlciA9IHJlcXVpcmUoJy4vd2Fsa2VyJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHBhcnNlSW50ZXJwID0gcmVxdWlyZSgnLi9wYXJzZS1pbnRlcnAnKTtcbi8vIHZhciBkZWNvZGVIVE1MRW50aXR5ID0gcmVxdWlyZSgnLi4vdXRpbC9kZWNvZGUtaHRtbC1lbnRpdHknKTtcblxuLyoqXG4gKiDlr7nlrZfnrKbkuLLov5vooYzlj6/nlKjkuo5uZXcgUmVnRXhw55qE5a2X6Z2i5YyWXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOmcgOimgeWtl+mdouWMlueahOWtl+espuS4slxuICogQHJldHVybiB7c3RyaW5nfSDlrZfnrKbkuLLlrZfpnaLljJbnu5PmnpxcbiAqL1xuZnVuY3Rpb24gcmVnZXhwTGl0ZXJhbChzb3VyY2UpIHtcbiAgICByZXR1cm4gc291cmNlLnJlcGxhY2UoL1tcXF5cXFtcXF1cXCRcXChcXClcXHtcXH1cXD9cXCpcXC5cXCtcXFxcXS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gJ1xcXFwnICsgYztcbiAgICB9KTtcbn1cblxuLyoqXG4gKiDop6PmnpDmlofmnKxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOeggVxuICogQHBhcmFtIHtBcnJheT99IGRlbGltaXRlcnMg5YiG6ZqU56ym44CC6buY6K6k5Li6IFsne3snLCAnfX0nXVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZVRleHQoc291cmNlLCBkZWxpbWl0ZXJzKSB7XG4gICAgZGVsaW1pdGVycyA9IGRlbGltaXRlcnMgfHwgWyd7eycsICd9fSddO1xuICAgIHZhciBleHByU3RhcnRSZWcgPSBuZXcgUmVnRXhwKFxuICAgICAgICByZWdleHBMaXRlcmFsKGRlbGltaXRlcnNbMF0pICsgJ1xcXFxzKihbXFxcXHNcXFxcU10rPylcXFxccyonICsgcmVnZXhwTGl0ZXJhbChkZWxpbWl0ZXJzWzFdKSxcbiAgICAgICAgJ2lnJ1xuICAgICk7XG5cbiAgICB2YXIgZXhwck1hdGNoO1xuXG4gICAgdmFyIHdhbGtlciA9IG5ldyBXYWxrZXIoc291cmNlKTtcbiAgICB2YXIgYmVmb3JlSW5kZXggPSAwO1xuXG4gICAgdmFyIGV4cHIgPSB7XG4gICAgICAgIHR5cGU6IEV4cHJUeXBlLlRFWFQsXG4gICAgICAgIHNlZ3M6IFtdXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHB1c2hTdHJpbmdUb1NlZyh0ZXh0KSB7XG4gICAgICAgIHRleHQgJiYgZXhwci5zZWdzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgbGl0ZXJhbDogdGV4dCxcbiAgICAgICAgICAgIHZhbHVlOiBkZWNvZGVIVE1MRW50aXR5KHRleHQpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHdoaWxlICgoZXhwck1hdGNoID0gd2Fsa2VyLm1hdGNoKGV4cHJTdGFydFJlZykpICE9IG51bGwpIHtcbiAgICAgICAgcHVzaFN0cmluZ1RvU2VnKHdhbGtlci5jdXQoXG4gICAgICAgICAgICBiZWZvcmVJbmRleCxcbiAgICAgICAgICAgIHdhbGtlci5pbmRleCAtIGV4cHJNYXRjaFswXS5sZW5ndGhcbiAgICAgICAgKSk7XG5cbiAgICAgICAgdmFyIGludGVycCA9IHBhcnNlSW50ZXJwKGV4cHJNYXRjaFsxXSk7XG4gICAgICAgIGV4cHIub3JpZ2luYWwgPSBleHByLm9yaWdpbmFsIHx8IGludGVycC5vcmlnaW5hbDtcblxuICAgICAgICBleHByLnNlZ3MucHVzaChpbnRlcnApO1xuICAgICAgICBiZWZvcmVJbmRleCA9IHdhbGtlci5pbmRleDtcbiAgICB9XG5cbiAgICBwdXNoU3RyaW5nVG9TZWcod2Fsa2VyLmN1dChiZWZvcmVJbmRleCkpO1xuXG5cblxuICAgIGlmIChleHByLnNlZ3MubGVuZ3RoID09PSAxICYmIGV4cHIuc2Vnc1swXS50eXBlID09PSBFeHByVHlwZS5TVFJJTkcpIHtcbiAgICAgICAgZXhwci52YWx1ZSA9IGV4cHIuc2Vnc1swXS52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcGFyc2VUZXh0O1xuXG5cbi8qKlxuICogQGZpbGUg6Kej5p6Q5oyH5LukXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4vcGFyc2UtZXhwcicpO1xuLy8gdmFyIHBhcnNlQ2FsbCA9IHJlcXVpcmUoJy4vcGFyc2UtY2FsbCcpO1xuLy8gdmFyIHBhcnNlVGV4dCA9IHJlcXVpcmUoJy4vcGFyc2UtdGV4dCcpO1xuLy8gdmFyIHJlYWRBY2Nlc3NvciA9IHJlcXVpcmUoJy4vcmVhZC1hY2Nlc3NvcicpO1xuXG4vKipcbiAqIOaMh+S7pOino+aekOWZqFxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGRpcmVjdGl2ZVBhcnNlcnMgPSB7XG4gICAgJ2Zvcic6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgd2Fsa2VyID0gbmV3IFdhbGtlcih2YWx1ZSk7XG4gICAgICAgIHZhciBtYXRjaCA9IHdhbGtlci5tYXRjaCgvXlxccyooW1xcJDAtOWEtel9dKykoXFxzKixcXHMqKFtcXCQwLTlhLXpfXSspKT9cXHMraW5cXHMrL2lnKTtcblxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXRlbTogcGFyc2VFeHByKG1hdGNoWzFdKSxcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VFeHByKG1hdGNoWzNdIHx8ICckaW5kZXgnKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVhZEFjY2Vzc29yKHdhbGtlcilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRkFUQUxdIGZvciBzeW50YXggZXJyb3I6ICcgKyB2YWx1ZSk7XG4gICAgICAgIC8vICNbZW5kXVxuICAgIH0sXG5cbiAgICAncmVmJzogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VUZXh0KHZhbHVlLCBvcHRpb25zLmRlbGltaXRlcnMpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICdpZic6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRXhwcih2YWx1ZS5yZXBsYWNlKC8oXlxce1xce3xcXH1cXH0kKS9nLCAnJykpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICdlbGlmJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VFeHByKHZhbHVlLnJlcGxhY2UoLyheXFx7XFx7fFxcfVxcfSQpL2csICcnKSlcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ2Vsc2UnOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB7fVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnaHRtbCc6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRXhwcih2YWx1ZS5yZXBsYWNlKC8oXlxce1xce3xcXH1cXH0kKS9nLCAnJykpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICd0cmFuc2l0aW9uJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VDYWxsKHZhbHVlKVxuICAgICAgICB9O1xuICAgIH1cbn07XG5cbi8qKlxuICog6Kej5p6Q5oyH5LukXG4gKlxuICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDmjIfku6TlkI3np7BcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSDmjIfku6TlgLxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOino+aekOWPguaVsFxuICogQHBhcmFtIHtBcnJheT99IG9wdGlvbnMuZGVsaW1pdGVycyDmj5LlgLzliIbpmpTnrKbliJfooahcbiAqL1xuZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmUoYU5vZGUsIG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgaWYgKG5hbWUgPT09ICdlbHNlLWlmJykge1xuICAgICAgICBuYW1lID0gJ2VsaWYnO1xuICAgIH1cblxuICAgIHZhciBwYXJzZXIgPSBkaXJlY3RpdmVQYXJzZXJzW25hbWVdO1xuICAgIGlmIChwYXJzZXIpIHtcbiAgICAgICAgKGFOb2RlLmRpcmVjdGl2ZXNbbmFtZV0gPSBwYXJzZXIodmFsdWUsIG9wdGlvbnMpKS5yYXcgPSB2YWx1ZTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBhcnNlRGlyZWN0aXZlO1xuXG5cbi8qKlxuICogQGZpbGUg5a+55bGe5oCn5L+h5oGv6L+b6KGM5aSE55CGXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG5cbi8qKlxuICog5a+55bGe5oCn5L+h5oGv6L+b6KGM5aSE55CGXG4gKiDlr7nnu4Tku7bnmoQgYmluZHMg5oiW6ICF54m55q6K55qE5bGe5oCn77yI5q+U5aaCIGlucHV0IOeahCBjaGVja2Vk77yJ6ZyA6KaB5aSE55CGXG4gKlxuICog5omB5bmz5YyW77yaXG4gKiDlvZMgdGV4dCDop6PmnpDlj6rmnInkuIDpobnml7bvvIzopoHkuYjlsLHmmK8gc3RyaW5n77yM6KaB5LmI5bCx5pivIGludGVycFxuICogaW50ZXJwIOacieWPr+iDveaYr+e7keWumuWIsOe7hOS7tuWxnuaAp+eahOihqOi+vuW8j++8jOS4jeW4jOacm+iiqyBldmFsIHRleHQg5oiQIHN0cmluZ1xuICog5omA5Lul6L+Z6YeM5YGa5Liq5aSE55CG77yM5Y+q5pyJ5LiA6aG55pe255u05o6l5oq95Ye65p2lXG4gKlxuICogYm9vbOWxnuaAp++8mlxuICog5b2T57uR5a6a6aG55rKh5pyJ5YC85pe277yM6buY6K6k5Li6dHJ1ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wIOWxnuaAp+WvueixoVxuICovXG5mdW5jdGlvbiBwb3N0UHJvcChwcm9wKSB7XG4gICAgdmFyIGV4cHIgPSBwcm9wLmV4cHI7XG5cbiAgICBpZiAoZXhwci50eXBlID09PSBFeHByVHlwZS5URVhUKSB7XG4gICAgICAgIHN3aXRjaCAoZXhwci5zZWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHByb3AuZXhwciA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuQk9PTCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZXhwciA9IHByb3AuZXhwciA9IGV4cHIuc2Vnc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoZXhwci50eXBlID09PSBFeHByVHlwZS5JTlRFUlAgJiYgZXhwci5maWx0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wLmV4cHIgPSBleHByLmV4cHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwb3N0UHJvcDtcblxuXG4vKipcbiAqIEBmaWxlIOino+aekOaKveixoeiKgueCueWxnuaAp1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBrZWJhYjJjYW1lbCA9IHJlcXVpcmUoJy4uL3V0aWwva2ViYWIyY2FtZWwnKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgY3JlYXRlQWNjZXNzb3IgPSByZXF1aXJlKCcuL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4vcGFyc2UtZXhwcicpO1xuLy8gdmFyIHBhcnNlQ2FsbCA9IHJlcXVpcmUoJy4vcGFyc2UtY2FsbCcpO1xuLy8gdmFyIHBhcnNlVGV4dCA9IHJlcXVpcmUoJy4vcGFyc2UtdGV4dCcpO1xuLy8gdmFyIHBhcnNlRGlyZWN0aXZlID0gcmVxdWlyZSgnLi9wYXJzZS1kaXJlY3RpdmUnKTtcbi8vIHZhciBwb3N0UHJvcCA9IHJlcXVpcmUoJy4vcG9zdC1wcm9wJyk7XG5cblxuLyoqXG4gKiDop6PmnpDmir3osaHoioLngrnlsZ7mgKdcbiAqXG4gKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOWxnuaAp+WQjeensFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIOWxnuaAp+WAvFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMg6Kej5p6Q5Y+C5pWwXG4gKiBAcGFyYW0ge0FycmF5P30gb3B0aW9ucy5kZWxpbWl0ZXJzIOaPkuWAvOWIhumalOespuWIl+ihqFxuICovXG5mdW5jdGlvbiBpbnRlZ3JhdGVBdHRyKGFOb2RlLCBuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIHZhciBwcmVmaXhJbmRleCA9IG5hbWUuaW5kZXhPZignLScpO1xuICAgIHZhciByZWFsTmFtZTtcbiAgICB2YXIgcHJlZml4O1xuXG4gICAgaWYgKHByZWZpeEluZGV4ID4gMCkge1xuICAgICAgICBwcmVmaXggPSBuYW1lLnNsaWNlKDAsIHByZWZpeEluZGV4KTtcbiAgICAgICAgcmVhbE5hbWUgPSBuYW1lLnNsaWNlKHByZWZpeEluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChwcmVmaXgpIHtcbiAgICAgICAgY2FzZSAnb24nOlxuICAgICAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHJlYWxOYW1lLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFOb2RlLmV2ZW50cy5wdXNoKGV2ZW50KTtcblxuICAgICAgICAgICAgdmFyIGNvbG9uSW5kZXg7XG4gICAgICAgICAgICB3aGlsZSAoKGNvbG9uSW5kZXggPSB2YWx1ZS5pbmRleE9mKCc6JykpID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBtb2RpZmllciA9IHZhbHVlLnNsaWNlKDAsIGNvbG9uSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gZXZlbnRIYW5kbGVyKFwiZGQ6YWFcIikg6L+Z56eN5oOF5Ya15LiN6IO9566XbW9kaWZpZXLvvIzpnIDopoHovqjor4ZcbiAgICAgICAgICAgICAgICBpZiAoIS9eW2Etel0rJC9pLnRlc3QobW9kaWZpZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV2ZW50Lm1vZGlmaWVyW21vZGlmaWVyXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZShjb2xvbkluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LmV4cHIgPSBwYXJzZUNhbGwodmFsdWUsIFtcbiAgICAgICAgICAgICAgICBjcmVhdGVBY2Nlc3NvcihbXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogRXhwclR5cGUuU1RSSU5HLCB2YWx1ZTogJyRldmVudCcgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Nhbic6XG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgcGFyc2VEaXJlY3RpdmUoYU5vZGUsIHJlYWxOYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdwcm9wJzpcbiAgICAgICAgICAgIGludGVncmF0ZVByb3AoYU5vZGUsIHJlYWxOYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICd2YXInOlxuICAgICAgICAgICAgaWYgKCFhTm9kZS52YXJzKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUudmFycyA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWFsTmFtZSA9IGtlYmFiMmNhbWVsKHJlYWxOYW1lKTtcbiAgICAgICAgICAgIGFOb2RlLnZhcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogcmVhbE5hbWUsXG4gICAgICAgICAgICAgICAgZXhwcjogcGFyc2VFeHByKHZhbHVlLnJlcGxhY2UoLyheXFx7XFx7fFxcfVxcfSQpL2csICcnKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGludGVncmF0ZVByb3AoYU5vZGUsIG5hbWUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbi8qKlxuICog6Kej5p6Q5oq96LGh6IqC54K557uR5a6a5bGe5oCnXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOWxnuaAp+WQjeensFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIOWxnuaAp+WAvFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMg6Kej5p6Q5Y+C5pWwXG4gKiBAcGFyYW0ge0FycmF5P30gb3B0aW9ucy5kZWxpbWl0ZXJzIOaPkuWAvOWIhumalOespuWIl+ihqFxuICovXG5mdW5jdGlvbiBpbnRlZ3JhdGVQcm9wKGFOb2RlLCBuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIC8vIHBhcnNlIHR3byB3YXkgYmluZGluZywgZS5nLiB2YWx1ZT1cIns9aWRlbnQ9fVwiXG4gICAgdmFyIHhNYXRjaCA9IHZhbHVlLm1hdGNoKC9eXFx7PVxccyooLio/KVxccyo9XFx9JC8pO1xuXG4gICAgaWYgKHhNYXRjaCkge1xuICAgICAgICBhTm9kZS5wcm9wcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBleHByOiBwYXJzZUV4cHIoeE1hdGNoWzFdKSxcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICByYXc6IHZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBwYXJzZSBub3JtYWwgcHJvcFxuICAgIHZhciBwcm9wID0ge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBleHByOiBwYXJzZVRleHQodmFsdWUsIG9wdGlvbnMuZGVsaW1pdGVycyksXG4gICAgICAgIHJhdzogdmFsdWVcbiAgICB9O1xuXG4gICAgLy8g6L+Z6YeM5LiN6IO95oqK5Y+q5pyJ5LiA5Liq5o+S5YC855qE5bGe5oCn5oq95Y+WXG4gICAgLy8g5Zug5Li65o+S5YC86YeM55qE5YC85Y+v6IO95pivaHRtbOeJh+aute+8jOWuueaYk+iiq+azqOWFpVxuICAgIC8vIOe7hOS7tueahOaVsOaNrue7keWumuWcqOe7hOS7tmluaXTml7blgZrmir3lj5ZcbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICBlYWNoKHByb3AuZXhwci5zZWdzLCBmdW5jdGlvbiAoc2VnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlZy50eXBlID09PSBFeHByVHlwZS5JTlRFUlApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnLmZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5DQUxMLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY3JlYXRlQWNjZXNzb3IoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ18nICsgcHJvcC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuICAgICAgICAgICAgaWYgKGFOb2RlLnRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBwb3N0UHJvcChwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGFOb2RlLnByb3BzLnB1c2gocHJvcCk7XG59XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaW50ZWdyYXRlQXR0cjtcblxuXG4vKipcbiAqIEBmaWxlIOino+aekOaooeadv1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgY3JlYXRlQU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1hLW5vZGUnKTtcbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIGludGVncmF0ZUF0dHIgPSByZXF1aXJlKCcuL2ludGVncmF0ZS1hdHRyJyk7XG4vLyB2YXIgcGFyc2VUZXh0ID0gcmVxdWlyZSgnLi9wYXJzZS10ZXh0Jyk7XG4vLyB2YXIgYXV0b0Nsb3NlVGFncyA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvYXV0by1jbG9zZS10YWdzJyk7XG5cbi8vICNbYmVnaW5dIGVycm9yXG5mdW5jdGlvbiBnZXRYUGF0aChzdGFjaywgY3VycmVudFRhZ05hbWUpIHtcbiAgICB2YXIgcGF0aCA9IFsnUk9PVCddO1xuICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSBzdGFjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBwYXRoLnB1c2goc3RhY2tbaV0udGFnTmFtZSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50VGFnTmFtZSkge1xuICAgICAgICBwYXRoLnB1c2goY3VycmVudFRhZ05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5qb2luKCc+Jyk7XG59XG4vLyAjW2VuZF1cblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1tYXgtc3RhdGVtZW50cyAqL1xuXG4vKipcbiAqIOino+aekCB0ZW1wbGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgdGVtcGxhdGXmupDnoIFcbiAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyDop6PmnpDlj4LmlbBcbiAqIEBwYXJhbSB7c3RyaW5nP30gb3B0aW9ucy50cmltV2hpdGVzcGFjZSDnqbrnmb3mlofmnKznmoTlpITnkIbnrZbnlaXjgIJub25lfGJsYW5rfGFsbFxuICogQHBhcmFtIHtBcnJheT99IG9wdGlvbnMuZGVsaW1pdGVycyDmj5LlgLzliIbpmpTnrKbliJfooahcbiAqIEByZXR1cm4ge0FOb2RlfVxuICovXG5mdW5jdGlvbiBwYXJzZVRlbXBsYXRlKHNvdXJjZSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMudHJpbVdoaXRlc3BhY2UgPSBvcHRpb25zLnRyaW1XaGl0ZXNwYWNlIHx8ICdub25lJztcblxuICAgIHZhciByb290Tm9kZSA9IGNyZWF0ZUFOb2RlKCk7XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlO1xuICAgIH1cblxuICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC88IS0tKFtcXHNcXFNdKj8pLS0+L21nLCAnJykucmVwbGFjZSgvKF5cXHMrfFxccyskKS9nLCAnJyk7XG4gICAgdmFyIHdhbGtlciA9IG5ldyBXYWxrZXIoc291cmNlKTtcblxuICAgIHZhciB0YWdSZWcgPSAvPChcXC8pPyhbYS16MC05LV0rKVxccyovaWc7XG4gICAgdmFyIGF0dHJSZWcgPSAvKFstOjAtOWEtelxcKFxcKVxcW1xcXV0rKShcXHMqPVxccyooWydcIl0pKFteXFwzXSo/KVxcMyk/XFxzKi9pZztcblxuICAgIHZhciB0YWdNYXRjaDtcbiAgICB2YXIgY3VycmVudE5vZGUgPSByb290Tm9kZTtcbiAgICB2YXIgc3RhY2sgPSBbcm9vdE5vZGVdO1xuICAgIHZhciBzdGFja0luZGV4ID0gMDtcbiAgICB2YXIgYmVmb3JlTGFzdEluZGV4ID0gMDtcblxuICAgIHdoaWxlICgodGFnTWF0Y2ggPSB3YWxrZXIubWF0Y2godGFnUmVnKSkgIT0gbnVsbCkge1xuICAgICAgICB2YXIgdGFnRW5kID0gdGFnTWF0Y2hbMV07XG4gICAgICAgIHZhciB0YWdOYW1lID0gdGFnTWF0Y2hbMl0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBwdXNoVGV4dE5vZGUoc291cmNlLnNsaWNlKFxuICAgICAgICAgICAgYmVmb3JlTGFzdEluZGV4LFxuICAgICAgICAgICAgd2Fsa2VyLmluZGV4IC0gdGFnTWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgICkpO1xuXG4gICAgICAgIC8vIDYyOiA+XG4gICAgICAgIC8vIDQ3OiAvXG4gICAgICAgIC8vIOWkhOeQhiA8L3h4eHggPlxuICAgICAgICBpZiAodGFnRW5kICYmIHdhbGtlci5jdXJyZW50Q29kZSgpID09PSA2Mikge1xuICAgICAgICAgICAgLy8g5ruh6Laz5YWz6Zet5qCH562+55qE5p2h5Lu25pe277yM5YWz6Zet5qCH562+XG4gICAgICAgICAgICAvLyDlkJHkuIrmn6Xmib7liLDlr7nlupTmoIfnrb7vvIzmib7kuI3liLDml7blv73nlaXlhbPpl61cbiAgICAgICAgICAgIHZhciBjbG9zZUluZGV4ID0gc3RhY2tJbmRleDtcblxuICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgIC8vIOWmguaenOato+WcqOmXreWQiOS4gOS4quiHqumXreWQiOeahOagh+etvu+8jOS+i+WmgiA8L2lucHV0Pu+8jOaKpemUmVxuICAgICAgICAgICAgaWYgKGF1dG9DbG9zZVRhZ3NbdGFnTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJydcbiAgICAgICAgICAgICAgICAgICAgKyAnW1NBTiBFUlJPUl0gJyArIGdldFhQYXRoKHN0YWNrLCB0YWdOYW1lKSArICcgaXMgYSBgYXV0byBjbG9zZWRgIHRhZywgJ1xuICAgICAgICAgICAgICAgICAgICArICdzbyBpdCBjYW5ub3QgYmUgY2xvc2VkIHdpdGggPC8nICsgdGFnTmFtZSArICc+J1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWmguaenOWFs+mXreeahCB0YWcg5ZKM5b2T5YmN5omT5byA55qE5LiN5LiA6Ie077yM5oql6ZSZXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc3RhY2tbY2xvc2VJbmRleF0udGFnTmFtZSAhPT0gdGFnTmFtZVxuICAgICAgICAgICAgICAgIC8vIOi/memHjOimgeaKiiB0YWJsZSDoh6rliqjmt7vliqAgdGJvZHkg55qE5oOF5Ya157uZ5Y675o6JXG4gICAgICAgICAgICAgICAgJiYgISh0YWdOYW1lID09PSAndGFibGUnICYmIHN0YWNrW2Nsb3NlSW5kZXhdLnRhZ05hbWUgPT09ICd0Ym9keScpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaykgKyAnIGlzIGNsb3NlZCB3aXRoICcgKyB0YWdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICB3aGlsZSAoY2xvc2VJbmRleCA+IDAgJiYgc3RhY2tbY2xvc2VJbmRleF0udGFnTmFtZSAhPT0gdGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIGNsb3NlSW5kZXgtLTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNsb3NlSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgc3RhY2tJbmRleCA9IGNsb3NlSW5kZXggLSAxO1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gc3RhY2tbc3RhY2tJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAvLyDlpITnkIYgPC94eHgg6Z2e5q2j5bi46Zet5ZCI5qCH562+XG4gICAgICAgIGVsc2UgaWYgKHRhZ0VuZCkge1xuXG4gICAgICAgICAgICAvLyDlpoLmnpzpl63lkIjmoIfnrb7ml7bvvIzljLnphY3lkI7nmoTkuIvkuIDkuKrlrZfnrKbmmK8gPO+8jOWNs+S4i+S4gOS4quagh+etvueahOW8gOWni++8jOmCo+S5iOW9k+WJjemXreWQiOagh+etvuacqumXreWQiFxuICAgICAgICAgICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSA2MCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignJ1xuICAgICAgICAgICAgICAgICAgICArICdbU0FOIEVSUk9SXSAnICsgZ2V0WFBhdGgoc3RhY2spXG4gICAgICAgICAgICAgICAgICAgICsgJ1xcJ3MgY2xvc2UgdGFnIG5vdCBjbG9zZWQnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g6Zet5ZCI5qCH562+5pyJ5bGe5oCnXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJydcbiAgICAgICAgICAgICAgICArICdbU0FOIEVSUk9SXSAnICsgZ2V0WFBhdGgoc3RhY2spXG4gICAgICAgICAgICAgICAgKyAnXFwncyBjbG9zZSB0YWcgaGFzIGF0dHJpYnV0ZXMnXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgZWxzZSBpZiAoIXRhZ0VuZCkge1xuICAgICAgICAgICAgdmFyIGFFbGVtZW50ID0gY3JlYXRlQU5vZGUoe1xuICAgICAgICAgICAgICAgIHRhZ05hbWU6IHRhZ05hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHRhZ0Nsb3NlID0gYXV0b0Nsb3NlVGFnc1t0YWdOYW1lXTtcblxuICAgICAgICAgICAgLy8g6Kej5p6QIGF0dHJpYnV0ZXNcblxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc3RhbnQtY29uZGl0aW9uICovXG4gICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cblxuICAgICAgICAgICAgICAgIHZhciBuZXh0Q2hhckNvZGUgPSB3YWxrZXIuY3VycmVudENvZGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIOagh+etvue7k+adn+aXtui3s+WHuiBhdHRyaWJ1dGVzIOivu+WPllxuICAgICAgICAgICAgICAgIC8vIOagh+etvuWPr+iDveebtOaOpee7k+adn+aIlumXreWQiOe7k+adn1xuICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhckNvZGUgPT09IDYyKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOmBh+WIsCAvPiDmjInpl63lkIjlpITnkIZcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0Q2hhckNvZGUgPT09IDQ3XG4gICAgICAgICAgICAgICAgICAgICYmIHdhbGtlci5jaGFyQ29kZSh3YWxrZXIuaW5kZXggKyAxKSA9PT0gNjJcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDIpO1xuICAgICAgICAgICAgICAgICAgICB0YWdDbG9zZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgLy8g5Zyo5aSE55CG5LiA5LiqIG9wZW4g5qCH562+5pe277yM5aaC5p6c6YGH5Yiw5LqGIDzvvIwg5Y2z5LiL5LiA5Liq5qCH562+55qE5byA5aeL77yM5YiZ5b2T5YmN5qCH562+5pyq6IO95q2j5bi46Zet5ZCI77yM5oql6ZSZXG4gICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyQ29kZSA9PT0gNjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnICsgZ2V0WFBhdGgoc3RhY2ssIHRhZ05hbWUpICsgJyBpcyBub3QgY2xvc2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgLy8g6K+75Y+WIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIHZhciBhdHRyTWF0Y2ggPSB3YWxrZXIubWF0Y2goYXR0clJlZyk7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJNYXRjaCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWxnuaAp+aciSA977yM5L2G5rKh5Y+W5YiwIHZhbHVl77yM5oql6ZSZXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtlci5jaGFyQ29kZShhdHRyTWF0Y2guaW5kZXggKyBhdHRyTWF0Y2hbMV0ubGVuZ3RoKSA9PT0gNjFcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICFhdHRyTWF0Y2hbMl1cbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICdbU0FOIEVSUk9SXSAnICsgZ2V0WFBhdGgoc3RhY2ssIHRhZ05hbWUpICsgJyBhdHRyaWJ1dGUgYCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGF0dHJNYXRjaFsxXSArICdgIGlzIG5vdCB3cmFwcGVkIHdpdGggXCJcIidcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAgICAgaW50ZWdyYXRlQXR0cihcbiAgICAgICAgICAgICAgICAgICAgICAgIGFFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ck1hdGNoWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ck1hdGNoWzJdID8gYXR0ck1hdGNoWzRdIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG1hdGNoIGlmIGRpcmVjdGl2ZSBmb3IgZWxzZS9lbGlmIGRpcmVjdGl2ZVxuICAgICAgICAgICAgdmFyIGVsc2VEaXJlY3RpdmUgPSBhRWxlbWVudC5kaXJlY3RpdmVzWydlbHNlJ10gfHwgYUVsZW1lbnQuZGlyZWN0aXZlcy5lbGlmOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICAgICAgaWYgKGVsc2VEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Q2hpbGRyZW5MZW4gPSBjdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAocGFyZW50Q2hpbGRyZW5MZW4tLSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50Q2hpbGQgPSBjdXJyZW50Tm9kZS5jaGlsZHJlbltwYXJlbnRDaGlsZHJlbkxlbl07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDaGlsZC50ZXh0RXhwcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW4uc3BsaWNlKHBhcmVudENoaWxkcmVuTGVuLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRDaGlsZC5kaXJlY3RpdmVzWydpZiddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRkFURUxdIGVsc2Ugbm90IG1hdGNoIGlmLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENoaWxkLmVsc2VzID0gcGFyZW50Q2hpbGQuZWxzZXMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENoaWxkLmVsc2VzLnB1c2goYUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhRWxlbWVudC50YWdOYW1lID09PSAndHInICYmIGN1cnJlbnROb2RlLnRhZ05hbWUgPT09ICd0YWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRib2R5Tm9kZSA9IGNyZWF0ZUFOb2RlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6ICd0Ym9keSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuLnB1c2godGJvZHlOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSB0Ym9keU5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrWysrc3RhY2tJbmRleF0gPSB0Ym9keU5vZGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW4ucHVzaChhRWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGFnQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGFFbGVtZW50O1xuICAgICAgICAgICAgICAgIHN0YWNrWysrc3RhY2tJbmRleF0gPSBhRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJlZm9yZUxhc3RJbmRleCA9IHdhbGtlci5pbmRleDtcbiAgICB9XG5cbiAgICBwdXNoVGV4dE5vZGUod2Fsa2VyLmN1dChiZWZvcmVMYXN0SW5kZXgpKTtcblxuICAgIHJldHVybiByb290Tm9kZTtcblxuICAgIC8qKlxuICAgICAqIOWcqOivu+WPluagiOS4rea3u+WKoOaWh+acrOiKgueCuVxuICAgICAqXG4gICAgICogQGlubmVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQg5paH5pys5YaF5a65XG4gICAgICovXG4gICAgZnVuY3Rpb24gcHVzaFRleHROb2RlKHRleHQpIHtcbiAgICAgICAgc3dpdGNoIChvcHRpb25zLnRyaW1XaGl0ZXNwYWNlKSB7XG4gICAgICAgICAgICBjYXNlICdibGFuayc6XG4gICAgICAgICAgICAgICAgaWYgKC9eXFxzKyQvLnRlc3QodGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyheXFxzK3xcXHMrJCkvZywgJycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuLnB1c2goY3JlYXRlQU5vZGUoe1xuICAgICAgICAgICAgICAgIHRleHRFeHByOiBwYXJzZVRleHQodGV4dCwgb3B0aW9ucy5kZWxpbWl0ZXJzKVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtbWF4LXN0YXRlbWVudHMgKi9cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcGFyc2VUZW1wbGF0ZTtcblxuXG4vKipcbiAqIEBmaWxlIOm7mOiupGZpbHRlclxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG5cbi8qKlxuICog6buY6K6kZmlsdGVyXG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgREVGQVVMVF9GSUxURVJTID0ge1xuXG4gICAgLyoqXG4gICAgICogVVJM57yW56CBZmlsdGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOS4slxuICAgICAqIEByZXR1cm4ge3N0cmluZ30g5pu/5o2i57uT5p6c5LiyXG4gICAgICovXG4gICAgdXJsOiBlbmNvZGVVUklDb21wb25lbnQsXG5cbiAgICBfY2xhc3M6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfSxcblxuICAgIF9zdHlsZTogZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0ga2V5ICsgJzonICsgc291cmNlW2tleV0gKyAnOyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH0sXG5cbiAgICBfc2VwOiBmdW5jdGlvbiAoc291cmNlLCBzZXApIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZSA/IHNlcCArIHNvdXJjZSA6IHNvdXJjZTtcbiAgICB9XG59O1xuLyogZXNsaW50LWVuYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBERUZBVUxUX0ZJTFRFUlM7XG5cblxuLyoqXG4gKiBAZmlsZSDooajovr7lvI/orqHnrpdcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBERUZBVUxUX0ZJTFRFUlMgPSByZXF1aXJlKCcuL2RlZmF1bHQtZmlsdGVycycpO1xuLy8gdmFyIGV2YWxBcmdzID0gcmVxdWlyZSgnLi9ldmFsLWFyZ3MnKTtcbi8vIHZhciBkYXRhQ2FjaGUgPSByZXF1aXJlKCcuL2RhdGEtY2FjaGUnKTtcblxuLyoqXG4gKiDorqHnrpfooajovr7lvI/nmoTlgLxcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXhwciDooajovr7lvI/lr7nosaFcbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDmlbDmja7lrrnlmajlr7nosaFcbiAqIEBwYXJhbSB7Q29tcG9uZW50PX0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcmV0dXJuIHsqfVxuICovXG5mdW5jdGlvbiBldmFsRXhwcihleHByLCBkYXRhLCBvd25lcikge1xuICAgIGlmIChleHByLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGV4cHIudmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gZGF0YUNhY2hlLmdldChkYXRhLCBleHByKTtcblxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHN3aXRjaCAoZXhwci50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEV4cHJUeXBlLlVOQVJZOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gIWV2YWxFeHByKGV4cHIuZXhwciwgZGF0YSwgb3duZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEV4cHJUeXBlLkJJTkFSWTpcbiAgICAgICAgICAgICAgICB2YXIgbGVmdFZhbHVlID0gZXZhbEV4cHIoZXhwci5zZWdzWzBdLCBkYXRhLCBvd25lcik7XG4gICAgICAgICAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSBldmFsRXhwcihleHByLnNlZ3NbMV0sIGRhdGEsIG93bmVyKTtcblxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXhwci5vcGVyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlIC0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgKiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2MDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgPiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzY6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSAhPSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTIxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgPD0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSA+PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU1OlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgIT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxODM6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI0ODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlIHx8IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5URVJUSUFSWTpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGV2YWxFeHByKFxuICAgICAgICAgICAgICAgICAgICBleHByLnNlZ3NbZXZhbEV4cHIoZXhwci5zZWdzWzBdLCBkYXRhLCBvd25lcikgPyAxIDogMl0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5BQ0NFU1NPUjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGEuZ2V0KGV4cHIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEV4cHJUeXBlLklOVEVSUDpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGV2YWxFeHByKGV4cHIuZXhwciwgZGF0YSwgb3duZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXhwci5maWx0ZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlciA9IGV4cHIuZmlsdGVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJOYW1lID0gZmlsdGVyLm5hbWUucGF0aHNbMF0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvd25lci5maWx0ZXJzW2ZpbHRlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvd25lci5maWx0ZXJzW2ZpbHRlck5hbWVdLmFwcGx5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXS5jb25jYXQoZXZhbEFyZ3MoZmlsdGVyLmFyZ3MsIGRhdGEsIG93bmVyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoREVGQVVMVF9GSUxURVJTW2ZpbHRlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBERUZBVUxUX0ZJTFRFUlNbZmlsdGVyTmFtZV0oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuYXJnc1swXSA/IGZpbHRlci5hcmdzWzBdLnZhbHVlIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcmVkZWNsYXJlICovXG4gICAgICAgICAgICBjYXNlIEV4cHJUeXBlLlRFWFQ6XG4gICAgICAgICAgICAgICAgdmFyIGJ1ZiA9ICcnO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXhwci5zZWdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnID0gZXhwci5zZWdzW2ldO1xuICAgICAgICAgICAgICAgICAgICBidWYgKz0gc2VnLnZhbHVlIHx8IGV2YWxFeHByKHNlZywgZGF0YSwgb3duZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YUNhY2hlLnNldChkYXRhLCBleHByLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBldmFsRXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOS4uuWHveaVsOiwg+eUqOiuoeeul+WPguaVsOaVsOe7hOeahOWAvFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuXG4vKipcbiAqIOS4uuWHveaVsOiwg+eUqOiuoeeul+WPguaVsOaVsOe7hOeahOWAvFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3Mg5Y+C5pWw6KGo6L6+5byP5YiX6KGoXG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg57uE5Lu2546v5aKDXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZXZhbEFyZ3MoYXJncywgZGF0YSwgb3duZXIpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGV2YWxFeHByKGFyZ3NbaV0sIGRhdGEsIG93bmVyKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZXZhbEFyZ3M7XG5cblxuLyoqXG4gKiBAZmlsZSDmlbDmja7nvJPlrZjnrqHnkIblmahcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuXG52YXIgZGF0YUNhY2hlU291cmNlID0ge307XG52YXIgZGF0YUNhY2hlQ2xlYXJseSA9IDE7XG5cbi8qKlxuICog5pWw5o2u57yT5a2Y566h55CG5ZmoXG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgZGF0YUNhY2hlID0ge1xuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZGF0YUNhY2hlQ2xlYXJseSkge1xuICAgICAgICAgICAgZGF0YUNhY2hlQ2xlYXJseSA9IDE7XG4gICAgICAgICAgICBkYXRhQ2FjaGVTb3VyY2UgPSB7fTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRhLCBleHByLCB2YWx1ZSkge1xuICAgICAgICBpZiAoZXhwci5yYXcpIHtcbiAgICAgICAgICAgIGRhdGFDYWNoZUNsZWFybHkgPSAwO1xuICAgICAgICAgICAgKGRhdGFDYWNoZVNvdXJjZVtkYXRhLmlkXSA9IGRhdGFDYWNoZVNvdXJjZVtkYXRhLmlkXSB8fCB7fSlbZXhwci5yYXddID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbiAoZGF0YSwgZXhwcikge1xuICAgICAgICBpZiAoZXhwci5yYXcgJiYgZGF0YUNhY2hlU291cmNlW2RhdGEuaWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YUNhY2hlU291cmNlW2RhdGEuaWRdW2V4cHIucmF3XTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZGF0YUNhY2hlO1xuXG5cbi8qKlxuICogQGZpbGUg5q+U6L6D5Y+Y5pu06KGo6L6+5byP5LiO55uu5qCH6KGo6L6+5byP5LmL6Ze055qE5YWz57O7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuL2V2YWwtZXhwcicpO1xuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcblxuLyoqXG4gKiDliKTmlq3lj5jmm7Tooajovr7lvI/kuI7lpJrkuKrooajovr7lvI/kuYvpl7TnmoTlhbPns7vvvIww5Li65a6M5YWo5rKh5YWz57O777yMMeS4uuacieWFs+ezu1xuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtPYmplY3R9IGNoYW5nZUV4cHIg55uu5qCH6KGo6L6+5byPXG4gKiBAcGFyYW0ge0FycmF5fSBleHBycyDlpJrkuKrmupDooajovr7lvI9cbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDooajovr7lvI/miYDlsZ7mlbDmja7njq/looNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gY2hhbmdlRXhwckNvbXBhcmVFeHBycyhjaGFuZ2VFeHByLCBleHBycywgZGF0YSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXhwcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBleHByc1tpXSwgZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG59XG5cbi8qKlxuICog5q+U6L6D5Y+Y5pu06KGo6L6+5byP5LiO55uu5qCH6KGo6L6+5byP5LmL6Ze055qE5YWz57O777yM55So5LqO6KeG5Zu+5pu05paw5Yik5patXG4gKiDop4blm77mm7TmlrDpnIDopoHmoLnmja7lhbblhbPns7vvvIzlgZrlh7rnm7jlupTnmoTmm7TmlrDooYzkuLpcbiAqXG4gKiAwOiDlrozlhajmsqHlhbPns7tcbiAqIDE6IOWPmOabtOihqOi+vuW8j+aYr+ebruagh+ihqOi+vuW8j+eahOavjemhuSjlpoJh5LiOYS5iKSDmiJYg6KGo56S66ZyA6KaB5a6M5YWo5Y+Y5YyWXG4gKiAyOiDlj5jmm7Tooajovr7lvI/mmK/nm67moIfooajovr7lvI/nm7jnrYlcbiAqID4yOiDlj5jmm7Tooajovr7lvI/mmK/nm67moIfooajovr7lvI/nmoTlrZDpobnvvIzlpoJhLmIuY+S4jmEuYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuZ2VFeHByIOWPmOabtOihqOi+vuW8j1xuICogQHBhcmFtIHtPYmplY3R9IGV4cHIg6KaB5q+U6L6D55qE55uu5qCH6KGo6L6+5byPXG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg6KGo6L6+5byP5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIGV4cHIsIGRhdGEpIHtcbiAgICBzd2l0Y2ggKGV4cHIudHlwZSkge1xuICAgICAgICBjYXNlIEV4cHJUeXBlLkFDQ0VTU09SOlxuICAgICAgICAgICAgdmFyIHBhdGhzID0gZXhwci5wYXRocztcbiAgICAgICAgICAgIHZhciBsZW4gPSBwYXRocy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgY2hhbmdlUGF0aHMgPSBjaGFuZ2VFeHByLnBhdGhzO1xuICAgICAgICAgICAgdmFyIGNoYW5nZUxlbiA9IGNoYW5nZVBhdGhzLmxlbmd0aDtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhFeHByID0gcGF0aHNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAocGF0aEV4cHIudHlwZSA9PT0gRXhwclR5cGUuQUNDRVNTT1JcbiAgICAgICAgICAgICAgICAgICAgJiYgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgcGF0aEV4cHIsIGRhdGEpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgaSA8IGNoYW5nZUxlblxuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICAgICAgICAgICAgICAgICAgJiYgKHBhdGhFeHByLnZhbHVlIHx8IGV2YWxFeHByKHBhdGhFeHByLCBkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICE9IChjaGFuZ2VQYXRoc1tpXS52YWx1ZSB8fCBldmFsRXhwcihjaGFuZ2VQYXRoc1tpXSwgZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgZXFlcWVxICovXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gTWF0aC5tYXgoMSwgY2hhbmdlTGVuIC0gbGVuICsgMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgIGNhc2UgRXhwclR5cGUuVU5BUlk6XG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgZXhwci5leHByLCBkYXRhKSA/IDEgOiAwO1xuXG5cbiAgICAgICAgY2FzZSBFeHByVHlwZS5URVhUOlxuICAgICAgICBjYXNlIEV4cHJUeXBlLkJJTkFSWTpcbiAgICAgICAgY2FzZSBFeHByVHlwZS5URVJUSUFSWTpcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VFeHByQ29tcGFyZUV4cHJzKGNoYW5nZUV4cHIsIGV4cHIuc2VncywgZGF0YSk7XG5cbiAgICAgICAgY2FzZSBFeHByVHlwZS5JTlRFUlA6XG4gICAgICAgICAgICBpZiAoIWNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIGV4cHIuZXhwciwgZGF0YSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyUmVzdWx0O1xuICAgICAgICAgICAgICAgIGVhY2goZXhwci5maWx0ZXJzLCBmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclJlc3VsdCA9IGNoYW5nZUV4cHJDb21wYXJlRXhwcnMoY2hhbmdlRXhwciwgZmlsdGVyLmFyZ3MsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWZpbHRlclJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJSZXN1bHQgPyAxIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNoYW5nZUV4cHJDb21wYXJlO1xuXG5cbi8qKlxuICogQGZpbGUg5pWw5o2u5Y+Y5pu057G75Z6L5p6a5Li+XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOaVsOaNruWPmOabtOexu+Wei+aemuS4vlxuICpcbiAqIEBjb25zdFxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIERhdGFDaGFuZ2VUeXBlID0ge1xuICAgIFNFVDogMSxcbiAgICBTUExJQ0U6IDJcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IERhdGFDaGFuZ2VUeXBlO1xuXG5cbi8qKlxuICogQGZpbGUg55Sf5ZG95ZGo5pyf57G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5mdW5jdGlvbiBsaWZlQ3ljbGVPd25JcyhuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXNbbmFtZV07XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtdmFsaWQtdmFyLWpzZG9jICovXG4vKipcbiAqIOiKgueCueeUn+WRveWRqOacn+S/oeaBr1xuICpcbiAqIEBpbm5lclxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIExpZmVDeWNsZSA9IHtcbiAgICBzdGFydDoge30sXG5cbiAgICBjb21waWxlZDoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlXG4gICAgfSxcblxuICAgIGluaXRlZDoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlLFxuICAgICAgICBpbml0ZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgcGFpbnRpbmc6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZSxcbiAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICBwYWludGluZzogdHJ1ZVxuICAgIH0sXG5cbiAgICBjcmVhdGVkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWUsXG4gICAgICAgIGluaXRlZDogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICBhdHRhY2hlZDoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlLFxuICAgICAgICBpbml0ZWQ6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6IHRydWUsXG4gICAgICAgIGF0dGFjaGVkOiB0cnVlXG4gICAgfSxcblxuICAgIGxlYXZpbmc6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZSxcbiAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICBjcmVhdGVkOiB0cnVlLFxuICAgICAgICBhdHRhY2hlZDogdHJ1ZSxcbiAgICAgICAgbGVhdmluZzogdHJ1ZVxuICAgIH0sXG5cbiAgICBkZXRhY2hlZDoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlLFxuICAgICAgICBpbml0ZWQ6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6IHRydWUsXG4gICAgICAgIGRldGFjaGVkOiB0cnVlXG4gICAgfSxcblxuICAgIGRpc3Bvc2VkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgZGlzcG9zZWQ6IHRydWVcbiAgICB9XG59O1xuLyogZXNsaW50LWVuYWJsZSBmZWNzLXZhbGlkLXZhci1qc2RvYyAqL1xuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IExpZmVDeWNsZTtcblxuXG4vKipcbiAqIEBmaWxlIOiKgueCueexu+Wei1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDoioLngrnnsbvlnotcbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBOb2RlVHlwZSA9IHtcbiAgICBURVhUOiAxLFxuICAgIElGOiAyLFxuICAgIEZPUjogMyxcbiAgICBFTEVNOiA0LFxuICAgIENNUFQ6IDUsXG4gICAgU0xPVDogNixcbiAgICBUUEw6IDdcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IE5vZGVUeXBlO1xuXG5cbi8qKlxuICogQGZpbGUg6I635Y+WIEFOb2RlIHByb3BzIOaVsOe7hOS4reebuOW6lCBuYW1lIOeahOmhuVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDojrflj5YgQU5vZGUgcHJvcHMg5pWw57uE5Lit55u45bqUIG5hbWUg55qE6aG5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIEFOb2Rl5a+56LGhXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1l5bGe5oCn5Yy56YWN5LiyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGdldEFOb2RlUHJvcChhTm9kZSwgbmFtZSkge1xuICAgIHZhciBpbmRleCA9IGFOb2RlLmhvdHNwb3QucHJvcHNbbmFtZV07XG4gICAgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGFOb2RlLnByb3BzW2luZGV4XTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdldEFOb2RlUHJvcDtcblxuXG4vKipcbiAqIEBmaWxlIOiOt+WPluWxnuaAp+WkhOeQhuWvueixoVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGNvbnRhaW5zID0gcmVxdWlyZSgnLi4vdXRpbC9jb250YWlucycpO1xuLy8gdmFyIGVtcHR5ID0gcmVxdWlyZSgnLi4vdXRpbC9lbXB0eScpO1xuLy8gdmFyIHN2Z1RhZ3MgPSByZXF1aXJlKCcuLi9icm93c2VyL3N2Zy10YWdzJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuXG5cbi8qKlxuICogSFRNTCDlsZ7mgKflkowgRE9NIOaTjeS9nOWxnuaAp+eahOWvueeFp+ihqFxuICpcbiAqIEBpbm5lclxuICogQGNvbnN0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgSFRNTF9BVFRSX1BST1BfTUFQID0ge1xuICAgICdyZWFkb25seSc6ICdyZWFkT25seScsXG4gICAgJ2NlbGxwYWRkaW5nJzogJ2NlbGxQYWRkaW5nJyxcbiAgICAnY2VsbHNwYWNpbmcnOiAnY2VsbFNwYWNpbmcnLFxuICAgICdjb2xzcGFuJzogJ2NvbFNwYW4nLFxuICAgICdyb3dzcGFuJzogJ3Jvd1NwYW4nLFxuICAgICd2YWxpZ24nOiAndkFsaWduJyxcbiAgICAndXNlbWFwJzogJ3VzZU1hcCcsXG4gICAgJ2ZyYW1lYm9yZGVyJzogJ2ZyYW1lQm9yZGVyJyxcbiAgICAnZm9yJzogJ2h0bWxGb3InXG59O1xuXG4vKipcbiAqIOm7mOiupOeahOWFg+e0oOeahOWxnuaAp+iuvue9rueahOWPmOaNouaWueazlVxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXIgPSB7XG4gICAgcHJvcDogZnVuY3Rpb24gKGVsLCB2YWx1ZSwgbmFtZSwgZWxlbWVudCkge1xuICAgICAgICB2YXIgcHJvcE5hbWUgPSBIVE1MX0FUVFJfUFJPUF9NQVBbbmFtZV0gfHwgbmFtZTtcblxuICAgICAgICAvLyBpbnB1dCDnmoQgdHlwZSDmmK/kuKrnibnmrorlsZ7mgKfvvIzlhbblrp7kuZ/lupTor6XnlKggc2V0QXR0cmlidXRlXG4gICAgICAgIC8vIOS9huaYryB0eXBlIOS4jeW6lOivpei/kOihjOaXtuWKqOaAgeaUueWPmO+8jOWQpuWImeS8muacieWFvOWuueaAp+mXrumimFxuICAgICAgICAvLyDmiYDku6Xov5nph4znm7TmjqXlsLHkuI3nrqHkuoZcbiAgICAgICAgaWYgKHByb3BOYW1lIGluIGVsKSB7XG4gICAgICAgICAgICBlbFtwcm9wTmFtZV0gPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhdHRyaWJ1dGUg57uR5a6a55qE5pivIHRleHTvvIzmiYDku6XkuI3kvJrlh7rnjrAgbnVsbCDnmoTmg4XlhrXvvIzov5nph4zml6DpnIDlpITnkIZcbiAgICAgICAgLy8g5o2i5Y+l6K+d5p2l6K+077yMc2FuIOaYr+WBmuS4jeWIsCBhdHRyaWJ1dGUg5pe25pyJ5pe25peg55qEXG4gICAgICAgIC8vIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIC8vICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIC8vIH1cbiAgICB9LFxuXG4gICAgb3V0cHV0OiBmdW5jdGlvbiAoZWxlbWVudCwgYmluZEluZm8sIGRhdGEpIHtcbiAgICAgICAgZGF0YS5zZXQoYmluZEluZm8uZXhwciwgZWxlbWVudC5lbFtiaW5kSW5mby5uYW1lXSwge1xuICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgcHJvcDogYmluZEluZm8ubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG52YXIgc3ZnUHJvcEhhbmRsZXIgPSB7XG4gICAgcHJvcDogZnVuY3Rpb24gKGVsLCB2YWx1ZSwgbmFtZSkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbnZhciBib29sUHJvcEhhbmRsZXIgPSB7XG4gICAgcHJvcDogZnVuY3Rpb24gKGVsLCB2YWx1ZSwgbmFtZSwgZWxlbWVudCwgcHJvcCkge1xuICAgICAgICB2YXIgcHJvcE5hbWUgPSBIVE1MX0FUVFJfUFJPUF9NQVBbbmFtZV0gfHwgbmFtZTtcbiAgICAgICAgZWxbcHJvcE5hbWVdID0gISEocHJvcCAmJiBwcm9wLnJhdyA9PT0gJydcbiAgICAgICAgICAgIHx8IHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnICYmIHZhbHVlICE9PSAnMCcpO1xuICAgIH1cbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtcHJvcGVydGllcy1xdW90ZSAqL1xuLyoqXG4gKiDpu5jorqTnmoTlsZ7mgKforr7nva7lj5jmjaLmlrnms5VcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBkZWZhdWx0RWxlbWVudFByb3BIYW5kbGVycyA9IHtcbiAgICBzdHlsZToge1xuICAgICAgICBwcm9wOiBmdW5jdGlvbiAoZWwsIHZhbHVlKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgJ2NsYXNzJzogeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIHByb3A6IGZ1bmN0aW9uIChlbCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNsb3Q6IHtcbiAgICAgICAgcHJvcDogZW1wdHlcbiAgICB9LFxuXG4gICAgcmVhZG9ubHk6IGJvb2xQcm9wSGFuZGxlcixcbiAgICBkaXNhYmxlZDogYm9vbFByb3BIYW5kbGVyLFxuICAgIGF1dG9mb2N1czogYm9vbFByb3BIYW5kbGVyLFxuICAgIHJlcXVpcmVkOiBib29sUHJvcEhhbmRsZXIsXG4gICAgZHJhZ2dhYmxlOiBib29sUHJvcEhhbmRsZXJcbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtcHJvcGVydGllcy1xdW90ZSAqL1xuXG52YXIgYW5hbElucHV0Q2hlY2tlciA9IHtcbiAgICBjaGVja2JveDogY29udGFpbnMsXG4gICAgcmFkaW86IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGFuYWxJbnB1dENoZWNrZWRTdGF0ZShlbGVtZW50LCB2YWx1ZSwgb3Blcikge1xuICAgIHZhciBiaW5kVmFsdWUgPSBnZXRBTm9kZVByb3AoZWxlbWVudC5hTm9kZSwgJ3ZhbHVlJyk7XG4gICAgdmFyIGJpbmRUeXBlID0gZ2V0QU5vZGVQcm9wKGVsZW1lbnQuYU5vZGUsICd0eXBlJyk7XG5cbiAgICBpZiAoYmluZFZhbHVlICYmIGJpbmRUeXBlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZXZhbEV4cHIoYmluZFR5cGUuZXhwciwgZWxlbWVudC5zY29wZSwgZWxlbWVudC5vd25lcik7XG5cbiAgICAgICAgaWYgKGFuYWxJbnB1dENoZWNrZXJbdHlwZV0pIHtcbiAgICAgICAgICAgIHZhciBiaW5kQ2hlY2tlZCA9IGdldEFOb2RlUHJvcChlbGVtZW50LmFOb2RlLCAnY2hlY2tlZCcpO1xuICAgICAgICAgICAgaWYgKCFiaW5kQ2hlY2tlZC5oaW50RXhwcikge1xuICAgICAgICAgICAgICAgIGJpbmRDaGVja2VkLmhpbnRFeHByID0gYmluZFZhbHVlLmV4cHI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAhIWFuYWxJbnB1dENoZWNrZXJbdHlwZV0oXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgZXZhbEV4cHIoYmluZFZhbHVlLmV4cHIsIGVsZW1lbnQuc2NvcGUsIGVsZW1lbnQub3duZXIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgZWxlbWVudFByb3BIYW5kbGVycyA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgICBtdWx0aXBsZTogYm9vbFByb3BIYW5kbGVyLFxuICAgICAgICBjaGVja2VkOiB7XG4gICAgICAgICAgICBwcm9wOiBmdW5jdGlvbiAoZWwsIHZhbHVlLCBuYW1lLCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gYW5hbElucHV0Q2hlY2tlZFN0YXRlKGVsZW1lbnQsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGJvb2xQcm9wSGFuZGxlci5wcm9wKFxuICAgICAgICAgICAgICAgICAgICBlbCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgIT0gbnVsbCA/IHN0YXRlIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICdjaGVja2VkJyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvdXRwdXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBiaW5kSW5mbywgZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGVsZW1lbnQuZWw7XG4gICAgICAgICAgICAgICAgdmFyIGJpbmRWYWx1ZSA9IGdldEFOb2RlUHJvcChlbGVtZW50LmFOb2RlLCAndmFsdWUnKTtcbiAgICAgICAgICAgICAgICB2YXIgYmluZFR5cGUgPSBnZXRBTm9kZVByb3AoZWxlbWVudC5hTm9kZSwgJ3R5cGUnKSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChiaW5kVmFsdWUgJiYgYmluZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChiaW5kVHlwZS5yYXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2VsLmNoZWNrZWQgPyAncHVzaCcgOiAncmVtb3ZlJ10oYmluZEluZm8uZXhwciwgZWwudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNoZWNrZWQgJiYgZGF0YS5zZXQoYmluZEluZm8uZXhwciwgZWwudmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IGJpbmRJbmZvLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXIub3V0cHV0KGVsZW1lbnQsIGJpbmRJbmZvLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvcHRpb246IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHByb3A6IGZ1bmN0aW9uIChlbCwgdmFsdWUsIG5hbWUsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0RWxlbWVudFByb3BIYW5kbGVyLnByb3AoZWwsIHZhbHVlLCBuYW1lLCBlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGlmIChpc09wdGlvblNlbGVjdGVkKGVsZW1lbnQsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBlbC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNlbGVjdDoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgcHJvcDogZnVuY3Rpb24gKGVsLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGVsLnZhbHVlID0gdmFsdWUgfHwgJyc7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvdXRwdXQ6IGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXIub3V0cHV0XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBpc09wdGlvblNlbGVjdGVkKGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgdmFyIHBhcmVudFNlbGVjdCA9IGVsZW1lbnQucGFyZW50O1xuICAgIHdoaWxlIChwYXJlbnRTZWxlY3QpIHtcbiAgICAgICAgaWYgKHBhcmVudFNlbGVjdC50YWdOYW1lID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRTZWxlY3QgPSBwYXJlbnRTZWxlY3QucGFyZW50O1xuICAgIH1cblxuXG4gICAgaWYgKHBhcmVudFNlbGVjdCkge1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBudWxsO1xuICAgICAgICB2YXIgcHJvcDtcbiAgICAgICAgdmFyIGV4cHI7XG5cbiAgICAgICAgaWYgKChwcm9wID0gZ2V0QU5vZGVQcm9wKHBhcmVudFNlbGVjdC5hTm9kZSwgJ3ZhbHVlJykpXG4gICAgICAgICAgICAmJiAoZXhwciA9IHByb3AuZXhwcilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZSA9IHBhcmVudFNlbGVjdC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVFxuICAgICAgICAgICAgICAgID8gZXZhbEV4cHIoZXhwciwgcGFyZW50U2VsZWN0LmRhdGEsIHBhcmVudFNlbGVjdClcbiAgICAgICAgICAgICAgICA6IGV2YWxFeHByKGV4cHIsIHBhcmVudFNlbGVjdC5zY29wZSwgcGFyZW50U2VsZWN0Lm93bmVyKVxuICAgICAgICAgICAgICAgIHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdFZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiDojrflj5blsZ7mgKflpITnkIblr7nosaFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSDlhYPntKB0YWdcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyTmFtZSDlsZ7mgKflkI1cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcEhhbmRsZXIodGFnTmFtZSwgYXR0ck5hbWUpIHtcbiAgICBpZiAoc3ZnVGFnc1t0YWdOYW1lXSkge1xuICAgICAgICByZXR1cm4gc3ZnUHJvcEhhbmRsZXI7XG4gICAgfVxuXG4gICAgdmFyIHRhZ1Byb3BIYW5kbGVycyA9IGVsZW1lbnRQcm9wSGFuZGxlcnNbdGFnTmFtZV07XG4gICAgaWYgKCF0YWdQcm9wSGFuZGxlcnMpIHtcbiAgICAgICAgdGFnUHJvcEhhbmRsZXJzID0gZWxlbWVudFByb3BIYW5kbGVyc1t0YWdOYW1lXSA9IHt9O1xuICAgIH1cblxuICAgIHZhciBwcm9wSGFuZGxlciA9IHRhZ1Byb3BIYW5kbGVyc1thdHRyTmFtZV07XG4gICAgaWYgKCFwcm9wSGFuZGxlcikge1xuICAgICAgICBwcm9wSGFuZGxlciA9IGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXJzW2F0dHJOYW1lXSB8fCBkZWZhdWx0RWxlbWVudFByb3BIYW5kbGVyO1xuICAgICAgICB0YWdQcm9wSGFuZGxlcnNbYXR0ck5hbWVdID0gcHJvcEhhbmRsZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BIYW5kbGVyO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBnZXRQcm9wSGFuZGxlcjtcblxuXG4vKipcbiAqIEBmaWxlIOWIpOaWreWPmOabtOaYr+WQpuadpea6kOS6juWFg+e0oFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDliKTmlq3lj5jmm7TmmK/lkKbmnaXmupDkuo7lhYPntKDvvIzmnaXmupDkuo7lhYPntKDml7bvvIzop4blm77mm7TmlrDpnIDopoHpmLvmlq1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhbmdlIOWPmOabtOWvueixoVxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IOWFg+e0oFxuICogQHBhcmFtIHtzdHJpbmc/fSBwcm9wTmFtZSDlsZ7mgKflkI3vvIzlj6/pgInjgILpnIDopoHnsr7noa7liKTmlq3mmK/lkKbmnaXmupDkuo7mraTlsZ7mgKfml7bkvKDlhaVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRGF0YUNoYW5nZUJ5RWxlbWVudChjaGFuZ2UsIGVsZW1lbnQsIHByb3BOYW1lKSB7XG4gICAgdmFyIGNoYW5nZVRhcmdldCA9IGNoYW5nZS5vcHRpb24udGFyZ2V0O1xuICAgIHJldHVybiBjaGFuZ2VUYXJnZXQgJiYgY2hhbmdlVGFyZ2V0LmlkID09PSBlbGVtZW50LmlkXG4gICAgICAgICYmICghcHJvcE5hbWUgfHwgY2hhbmdlVGFyZ2V0LnByb3AgPT09IHByb3BOYW1lKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaXNEYXRhQ2hhbmdlQnlFbGVtZW50O1xuXG5cbi8qKlxuICogQGZpbGUg5Zyo5a+56LGh5LiK5L2/55SoYWNjZXNzb3Looajovr7lvI/mn6Xmib7mlrnms5VcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG5cbi8qKlxuICog5Zyo5a+56LGh5LiK5L2/55SoYWNjZXNzb3Looajovr7lvI/mn6Xmib7mlrnms5VcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIOa6kOWvueixoVxuICogQHBhcmFtIHtPYmplY3R9IG5hbWVFeHByIOihqOi+vuW8j1xuICogQHBhcmFtIHtEYXRhfSBkYXRhIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGZpbmRNZXRob2Qoc291cmNlLCBuYW1lRXhwciwgZGF0YSkge1xuICAgIHZhciBtZXRob2QgPSBzb3VyY2U7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgbWV0aG9kICE9IG51bGwgJiYgaSA8IG5hbWVFeHByLnBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1ldGhvZCA9IG1ldGhvZFtldmFsRXhwcihuYW1lRXhwci5wYXRoc1tpXSwgZGF0YSldO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRob2Q7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZpbmRNZXRob2Q7XG5cblxuLyoqXG4gKiBAZmlsZSDmlbDmja7nsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4vZXZhbC1leHByJyk7XG4vLyB2YXIgRGF0YUNoYW5nZVR5cGUgPSByZXF1aXJlKCcuL2RhdGEtY2hhbmdlLXR5cGUnKTtcbi8vIHZhciBjcmVhdGVBY2Nlc3NvciA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYWNjZXNzb3InKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtZXhwcicpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBkYXRhQ2FjaGUgPSByZXF1aXJlKCcuL2RhdGEtY2FjaGUnKTtcblxuLyoqXG4gKiDmlbDmja7nsbtcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0P30gZGF0YSDliJ3lp4vmlbDmja5cbiAqIEBwYXJhbSB7TW9kZWw/fSBwYXJlbnQg54i257qn5pWw5o2u5a655ZmoXG4gKi9cbmZ1bmN0aW9uIERhdGEoZGF0YSwgcGFyZW50KSB7XG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnJhdyA9IGRhdGEgfHwge307XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbn1cblxuLy8gI1tiZWdpbl0gZXJyb3Jcbi8vIOS7peS4i+S4pOS4quWHveaVsOWPquWcqOW8gOWPkeaooeW8j+S4i+WPr+eUqO+8jOWcqOeUn+S6p+aooeW8j+S4i+S4jeWtmOWcqFxuLyoqXG4gKiBEYXRhVHlwZXMg5qOA5rWLXG4gKi9cbkRhdGEucHJvdG90eXBlLmNoZWNrRGF0YVR5cGVzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnR5cGVDaGVja2VyKSB7XG4gICAgICAgIHRoaXMudHlwZUNoZWNrZXIodGhpcy5yYXcpO1xuICAgIH1cbn07XG5cbi8qKlxuICog6K6+572uIHR5cGUgY2hlY2tlclxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSB0eXBlQ2hlY2tlciDnsbvlnovmoKHpqozlmahcbiAqL1xuRGF0YS5wcm90b3R5cGUuc2V0VHlwZUNoZWNrZXIgPSBmdW5jdGlvbiAodHlwZUNoZWNrZXIpIHtcbiAgICB0aGlzLnR5cGVDaGVja2VyID0gdHlwZUNoZWNrZXI7XG59O1xuXG4vLyAjW2VuZF1cblxuLyoqXG4gKiDmt7vliqDmlbDmja7lj5jmm7TnmoTkuovku7bnm5HlkKzlmahcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlh73mlbBcbiAqL1xuRGF0YS5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOenu+mZpOaVsOaNruWPmOabtOeahOS6i+S7tuebkeWQrOWZqFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOebkeWQrOWHveaVsFxuICovXG5EYXRhLnByb3RvdHlwZS51bmxpc3RlbiA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIHZhciBsZW4gPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgIGlmICghbGlzdGVuZXIgfHwgdGhpcy5saXN0ZW5lcnNbbGVuXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsZW4sIDEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiDop6blj5HmlbDmja7lj5jmm7RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhbmdlIOWPmOabtOS/oeaBr+WvueixoVxuICovXG5EYXRhLnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgIGlmIChjaGFuZ2Uub3B0aW9uLnNpbGVudCB8fCBjaGFuZ2Uub3B0aW9uLnNpbGVuY2UgfHwgY2hhbmdlLm9wdGlvbi5xdWlldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tpXS5jYWxsKHRoaXMsIGNoYW5nZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDojrflj5bmlbDmja7poblcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3Q/fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHtEYXRhP30gY2FsbGVlIOW9k+WJjeaVsOaNruiOt+WPlueahOiwg+eUqOeOr+Wig1xuICogQHJldHVybiB7Kn1cbiAqL1xuRGF0YS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGV4cHIsIGNhbGxlZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMucmF3O1xuICAgIGlmICghZXhwcikge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcblxuICAgIHZhciBwYXRocyA9IGV4cHIucGF0aHM7XG4gICAgY2FsbGVlID0gY2FsbGVlIHx8IHRoaXM7XG5cbiAgICB2YWx1ZSA9IHZhbHVlW3BhdGhzWzBdLnZhbHVlXTtcblxuICAgIGlmICh2YWx1ZSA9PSBudWxsICYmIHRoaXMucGFyZW50KSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5wYXJlbnQuZ2V0KGV4cHIsIGNhbGxlZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMSwgbCA9IHBhdGhzLmxlbmd0aDsgdmFsdWUgIT0gbnVsbCAmJiBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlW3BhdGhzW2ldLnZhbHVlIHx8IGV2YWxFeHByKHBhdGhzW2ldLCBjYWxsZWUpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiDmlbDmja7lr7nosaHlj5jmm7Tmk43kvZxcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBzb3VyY2Ug6KaB5Y+Y5pu055qE5rqQ5pWw5o2uXG4gKiBAcGFyYW0ge0FycmF5fSBleHByUGF0aHMg5bGe5oCn6Lev5b6EXG4gKiBAcGFyYW0geyp9IHZhbHVlIOWPmOabtOWxnuaAp+WAvFxuICogQHBhcmFtIHtEYXRhfSBkYXRhIOWvueW6lOeahERhdGHlr7nosaFcbiAqIEByZXR1cm4geyp9IOWPmOabtOWQjueahOaWsOaVsOaNrlxuICovXG5mdW5jdGlvbiBpbW11dGFibGVTZXQoc291cmNlLCBleHByUGF0aHMsIHZhbHVlLCBkYXRhKSB7XG4gICAgaWYgKGV4cHJQYXRocy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHZhciBwcm9wID0gZXZhbEV4cHIoZXhwclBhdGhzWzBdLCBkYXRhKTtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBpbmRleCA9ICtwcm9wO1xuXG4gICAgICAgIHJlc3VsdCA9IHNvdXJjZS5zbGljZSgwKTtcbiAgICAgICAgcmVzdWx0W2lzTmFOKGluZGV4KSA/IHByb3AgOiBpbmRleF0gPSBpbW11dGFibGVTZXQoc291cmNlW2luZGV4XSwgZXhwclBhdGhzLnNsaWNlKDEpLCB2YWx1ZSwgZGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVzdWx0ID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gcHJvcCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRbcHJvcF0gPSBpbW11dGFibGVTZXQoc291cmNlW3Byb3BdIHx8IHt9LCBleHByUGF0aHMuc2xpY2UoMSksIHZhbHVlLCBkYXRhKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG59XG5cbi8qKlxuICog6K6+572u5pWw5o2u6aG5XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHsqfSB2YWx1ZSDmlbDmja7lgLxcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICovXG5EYXRhLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoZXhwciwgdmFsdWUsIG9wdGlvbikge1xuICAgIG9wdGlvbiA9IG9wdGlvbiB8fCB7fTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdmFyIGV4cHJSYXcgPSBleHByO1xuICAgIC8vICNbZW5kXVxuXG4gICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKGV4cHIudHlwZSAhPT0gRXhwclR5cGUuQUNDRVNTT1IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSBJbnZhbGlkIEV4cHJlc3Npb24gaW4gRGF0YSBzZXQ6ICcgKyBleHByUmF3KTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICBpZiAodGhpcy5nZXQoZXhwcikgPT09IHZhbHVlICYmICFvcHRpb24uZm9yY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGFDYWNoZS5jbGVhcigpO1xuICAgIHRoaXMucmF3ID0gaW1tdXRhYmxlU2V0KHRoaXMucmF3LCBleHByLnBhdGhzLCB2YWx1ZSwgdGhpcyk7XG4gICAgdGhpcy5maXJlKHtcbiAgICAgICAgdHlwZTogRGF0YUNoYW5nZVR5cGUuU0VULFxuICAgICAgICBleHByOiBleHByLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgfSk7XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIHRoaXMuY2hlY2tEYXRhVHlwZXMoKTtcbiAgICAvLyAjW2VuZF1cblxufTtcblxuLyoqXG4gKiDlkIjlubbmm7TmlrDmlbDmja7poblcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIOW+heWQiOW5tueahOaVsOaNruWAvFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKi9cbkRhdGEucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKGV4cHIsIHNvdXJjZSwgb3B0aW9uKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB2YXIgZXhwclJhdyA9IGV4cHI7XG4gICAgLy8gI1tlbmRdXG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAoZXhwci50eXBlICE9PSBFeHByVHlwZS5BQ0NFU1NPUikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIEludmFsaWQgRXhwcmVzc2lvbiBpbiBEYXRhIG1lcmdlOiAnICsgZXhwclJhdyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldChleHByKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSBNZXJnZSBFeHBlY3RzIGEgVGFyZ2V0IG9mIFR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJyArIHR5cGVvZiBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gTWVyZ2UgRXhwZWN0cyBhIFNvdXJjZSBvZiBUeXBlIFxcJ29iamVjdFxcJzsgZ290ICcgKyB0eXBlb2Ygc291cmNlKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgdGhpcy5zZXQoXG4gICAgICAgICAgICBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICBleHByLnBhdGhzLmNvbmNhdChcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc291cmNlW2tleV0sXG4gICAgICAgICAgICBvcHRpb25cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOWfuuS6juabtOaWsOWHveaVsOabtOaWsOaVsOaNrumhuVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOaVsOaNruWkhOeQhuWHveaVsFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKi9cbkRhdGEucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKGV4cHIsIGZuLCBvcHRpb24pIHtcbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIHZhciBleHByUmF3ID0gZXhwcjtcbiAgICAvLyAjW2VuZF1cblxuICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGlmIChleHByLnR5cGUgIT09IEV4cHJUeXBlLkFDQ0VTU09SKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gSW52YWxpZCBFeHByZXNzaW9uIGluIERhdGEgYXBwbHk6ICcgKyBleHByUmF3KTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmdldChleHByKTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnW1NBTiBFUlJPUl0gSW52YWxpZCBBcmd1bWVudFxcJ3MgVHlwZSBpbiBEYXRhIGFwcGx5OiAnXG4gICAgICAgICAgICArICdFeHBlY3RlZCBGdW5jdGlvbiBidXQgZ290ICcgKyB0eXBlb2YgZm5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICB0aGlzLnNldChleHByLCBmbihvbGRWYWx1ZSksIG9wdGlvbik7XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhuXNwbGljZeaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3Mgc3BsaWNlIOaOpeWPl+eahOWPguaVsOWIl+ihqO+8jOaVsOe7hOmhueS4jkFycmF5LnByb3RvdHlwZS5zcGxpY2XnmoTlj4LmlbDkuIDoh7RcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICogQHJldHVybiB7QXJyYXl9IOaWsOaVsOe7hFxuICovXG5EYXRhLnByb3RvdHlwZS5zcGxpY2UgPSBmdW5jdGlvbiAoZXhwciwgYXJncywgb3B0aW9uKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdmFyIGV4cHJSYXcgPSBleHByO1xuICAgIC8vICNbZW5kXVxuXG4gICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKGV4cHIudHlwZSAhPT0gRXhwclR5cGUuQUNDRVNTT1IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSBJbnZhbGlkIEV4cHJlc3Npb24gaW4gRGF0YSBzcGxpY2U6ICcgKyBleHByUmF3KTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5nZXQoZXhwcik7XG4gICAgdmFyIHJldHVyblZhbHVlID0gW107XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJnc1swXTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdBcnJheSA9IHRhcmdldC5zbGljZSgwKTtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBuZXdBcnJheS5zcGxpY2UuYXBwbHkobmV3QXJyYXksIGFyZ3MpO1xuICAgICAgICBkYXRhQ2FjaGUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yYXcgPSBpbW11dGFibGVTZXQodGhpcy5yYXcsIGV4cHIucGF0aHMsIG5ld0FycmF5LCB0aGlzKTtcblxuICAgICAgICB0aGlzLmZpcmUoe1xuICAgICAgICAgICAgZXhwcjogZXhwcixcbiAgICAgICAgICAgIHR5cGU6IERhdGFDaGFuZ2VUeXBlLlNQTElDRSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50OiByZXR1cm5WYWx1ZS5sZW5ndGgsXG4gICAgICAgICAgICB2YWx1ZTogcmV0dXJuVmFsdWUsXG4gICAgICAgICAgICBpbnNlcnRpb25zOiBhcmdzLnNsaWNlKDIpLFxuICAgICAgICAgICAgb3B0aW9uOiBvcHRpb25cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB0aGlzLmNoZWNrRGF0YVR5cGVzKCk7XG4gICAgLy8gI1tlbmRdXG5cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhuXB1c2jmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0geyp9IGl0ZW0g6KaBcHVzaOeahOWAvFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKiBAcmV0dXJuIHtudW1iZXJ9IOaWsOaVsOe7hOeahGxlbmd0aOWxnuaAp1xuICovXG5EYXRhLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGV4cHIsIGl0ZW0sIG9wdGlvbikge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldChleHByKTtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB0aGlzLnNwbGljZShleHByLCBbdGFyZ2V0Lmxlbmd0aCwgMCwgaXRlbV0sIG9wdGlvbik7XG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoICsgMTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhuXBvcOaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICogQHJldHVybiB7Kn1cbiAqL1xuRGF0YS5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKGV4cHIsIG9wdGlvbikge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldChleHByKTtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgbGVuID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKGV4cHIsIFtsZW4gLSAxLCAxXSwgb3B0aW9uKVswXTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG5c2hpZnTmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqIEByZXR1cm4geyp9XG4gKi9cbkRhdGEucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKGV4cHIsIG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLnNwbGljZShleHByLCBbMCwgMV0sIG9wdGlvbilbMF07XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhuXVuc2hpZnTmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0geyp9IGl0ZW0g6KaBdW5zaGlmdOeahOWAvFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKiBAcmV0dXJuIHtudW1iZXJ9IOaWsOaVsOe7hOeahGxlbmd0aOWxnuaAp1xuICovXG5EYXRhLnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gKGV4cHIsIGl0ZW0sIG9wdGlvbikge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldChleHByKTtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB0aGlzLnNwbGljZShleHByLCBbMCwgMCwgaXRlbV0sIG9wdGlvbik7XG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoICsgMTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhueenu+mZpOaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCDopoHnp7vpmaTpobnnmoTntKLlvJVcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICovXG5EYXRhLnByb3RvdHlwZS5yZW1vdmVBdCA9IGZ1bmN0aW9uIChleHByLCBpbmRleCwgb3B0aW9uKSB7XG4gICAgdGhpcy5zcGxpY2UoZXhwciwgW2luZGV4LCAxXSwgb3B0aW9uKTtcbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG556e76Zmk5pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHsqfSB2YWx1ZSDopoHnp7vpmaTnmoTpoblcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICovXG5EYXRhLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZXhwciwgdmFsdWUsIG9wdGlvbikge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldChleHByKTtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgbGVuID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0W2xlbl0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGxpY2UoZXhwciwgW2xlbiwgMV0sIG9wdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBEYXRhO1xuXG5cbi8qKlxuICogQGZpbGUg5aOw5piO5byP5LqL5Lu255qE55uR5ZCs5Ye95pWwXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBldmFsQXJncyA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1hcmdzJyk7XG4vLyB2YXIgZmluZE1ldGhvZCA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZmluZC1tZXRob2QnKTtcbi8vIHZhciBEYXRhID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhJyk7XG5cbi8qKlxuICog5aOw5piO5byP5LqL5Lu255qE55uR5ZCs5Ye95pWwXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50QmluZCDnu5Hlrprkv6Hmga/lr7nosaFcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDb21wb25lbnRFdmVudCDmmK/lkKbnu4Tku7boh6rlrprkuYnkuovku7ZcbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDmlbDmja7njq/looNcbiAqIEBwYXJhbSB7RXZlbnR9IGUg5LqL5Lu25a+56LGhXG4gKi9cbmZ1bmN0aW9uIGV2ZW50RGVjbGFyYXRpb25MaXN0ZW5lcihldmVudEJpbmQsIGlzQ29tcG9uZW50RXZlbnQsIGRhdGEsIGUpIHtcbiAgICB2YXIgbWV0aG9kID0gZmluZE1ldGhvZCh0aGlzLCBldmVudEJpbmQuZXhwci5uYW1lLCBkYXRhKTtcblxuICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBzY29wZSA9IG5ldyBEYXRhKFxuICAgICAgICAgICAgeyRldmVudDogaXNDb21wb25lbnRFdmVudCA/IGUgOiBlIHx8IHdpbmRvdy5ldmVudH0sXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgICk7XG4gICAgICAgIG1ldGhvZC5hcHBseSh0aGlzLCBldmFsQXJncyhldmVudEJpbmQuZXhwci5hcmdzLCBzY29wZSwgdGhpcykpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZXZlbnREZWNsYXJhdGlvbkxpc3RlbmVyO1xuXG5cbi8qKlxuICogQGZpbGUg6Ieq6Zet5ZCI5qCH562+6KGoXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgc3BsaXRTdHIyT2JqID0gcmVxdWlyZSgnLi4vdXRpbC9zcGxpdC1zdHItMi1vYmonKTtcblxuLyoqXG4gKiDoh6rpl63lkIjmoIfnrb7liJfooahcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgaG90VGFncyA9IHNwbGl0U3RyMk9iaignZGl2LHNwYW4saW5wdXQsYnV0dG9uLHRleHRhcmVhLGZvcm0sbGFiZWwsZGwsZHQsZGQsdWwsb2wsbGksYSxiLHUsaDEsaDIsaDMsaDQsaDUsaDYnKTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaG90VGFncztcblxuXG4vKipcbiAqIEBmaWxlIOaYr+WQpua1j+iniOWZqOeOr+Wig1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpc0Jyb3dzZXI7XG5cblxuLyoqXG4gKiBAZmlsZSBpbnNlcnRCZWZvcmUg5pa55rOV55qE5YW85a655oCn5bCB6KOFXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIGluc2VydEJlZm9yZSDmlrnms5XnmoTlhbzlrrnmgKflsIHoo4VcbiAqXG4gKiBAcGFyYW0ge0hUTUxOb2RlfSB0YXJnZXRFbCDopoHmj5LlhaXnmoToioLngrlcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudD99IGJlZm9yZUVsIOWcqOatpOWFg+e0oOS5i+WJjeaPkuWFpVxuICovXG5mdW5jdGlvbiBpbnNlcnRCZWZvcmUodGFyZ2V0RWwsIHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIGlmIChwYXJlbnRFbCkge1xuICAgICAgICBpZiAoYmVmb3JlRWwpIHtcbiAgICAgICAgICAgIHBhcmVudEVsLmluc2VydEJlZm9yZSh0YXJnZXRFbCwgYmVmb3JlRWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQodGFyZ2V0RWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCZWZvcmU7XG5cblxuLyoqXG4gKiBAZmlsZSDliKTmlq3lhYPntKDmmK/lkKbkuI3lhYHorrjorr7nva5IVE1MXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyBzb21lIGh0bWwgZWxlbWVudHMgY2Fubm90IHNldCBpbm5lckhUTUwgaW4gb2xkIGllXG4vLyBzZWU6IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzM4OTcoVlMuODUpLmFzcHhcblxuLyoqXG4gKiDliKTmlq3lhYPntKDmmK/lkKbkuI3lhYHorrjorr7nva5IVE1MXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwg6KaB5Yik5pat55qE5YWD57SgXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBub1NldEhUTUwoZWwpIHtcbiAgICByZXR1cm4gL14oY29sfGNvbGdyb3VwfGZyYW1lc2V0fHN0eWxlfHRhYmxlfHRib2R5fHRmb290fHRoZWFkfHRyfHNlbGVjdCkkL2kudGVzdChlbC50YWdOYW1lKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbm9TZXRIVE1MO1xuXG5cbi8qKlxuICogQGZpbGUgIOiOt+WPluiKgueCuSBzdHVtcCDnmoQgY29tbWVudFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIG5vU2V0SFRNTCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvbm8tc2V0LWh0bWwnKTtcblxuLy8gI1tiZWdpbl0gZXJyb3Jcbi8qKlxuICog6I635Y+W6IqC54K5IHN0dW1wIOeahCBjb21tZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgSFRNTOWFg+e0oFxuICovXG5mdW5jdGlvbiB3YXJuU2V0SFRNTChlbCkge1xuICAgIC8vIGRvbnQgd2FybiBpZiBub3QgaW4gYnJvd3NlciBydW50aW1lXG4gICAgaWYgKCEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc29tZSBodG1sIGVsZW1lbnRzIGNhbm5vdCBzZXQgaW5uZXJIVE1MIGluIG9sZCBpZVxuICAgIC8vIHNlZTogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzMzg5NyhWUy44NSkuYXNweFxuICAgIGlmIChub1NldEhUTUwoZWwpKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gJ1tTQU4gV0FSTklOR10gc2V0IGh0bWwgZm9yIGVsZW1lbnQgXCInICsgZWwudGFnTmFtZVxuICAgICAgICAgICAgKyAnXCIgbWF5IGNhdXNlIGFuIGVycm9yIGluIG9sZCBJRSc7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0JyAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICB9XG59XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gd2FyblNldEhUTUw7XG5cblxuLyoqXG4gKiBAZmlsZSDliKTmlq3mmK/lkKbnu5PmnZ/moalcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vICNbYmVnaW5dIHJldmVyc2Vcbi8qKlxuICog5Yik5pat5piv5ZCm57uT5p2f5qGpXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudHxIVE1MQ29tbWVudH0gdGFyZ2V0IOimgeWIpOaWreeahOWFg+e0oFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg5qGp57G75Z6LXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0VuZFN0dW1wKHRhcmdldCwgdHlwZSkge1xuICAgIHJldHVybiB0YXJnZXQubm9kZVR5cGUgPT09IDggJiYgdGFyZ2V0LmRhdGEgPT09ICcvcy0nICsgdHlwZTtcbn1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpc0VuZFN0dW1wO1xuXG5cbi8qKlxuICogQGZpbGUg6I635Y+W6IqC54K55Zyo57uE5Lu25qCR5Lit55qE6Lev5b6EXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG5cbi8vICNbYmVnaW5dIHJldmVyc2Vcbi8qKlxuICog6I635Y+W6IqC54K55Zyo57uE5Lu25qCR5Lit55qE6Lev5b6EXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlIOiKgueCueWvueixoVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVQYXRoKG5vZGUpIHtcbiAgICB2YXIgbm9kZVBhdGhzID0gW107XG4gICAgdmFyIG5vZGVQYXJlbnQgPSBub2RlO1xuICAgIHdoaWxlIChub2RlUGFyZW50KSB7XG4gICAgICAgIHN3aXRjaCAobm9kZVBhcmVudC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBOb2RlVHlwZS5FTEVNOlxuICAgICAgICAgICAgICAgIG5vZGVQYXRocy51bnNoaWZ0KG5vZGVQYXJlbnQudGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuSUY6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ2lmJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuRk9SOlxuICAgICAgICAgICAgICAgIG5vZGVQYXRocy51bnNoaWZ0KCdmb3JbJyArIG5vZGVQYXJlbnQuYW5vZGUuZGlyZWN0aXZlc1snZm9yJ10ucmF3ICsgJ10nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBOb2RlVHlwZS5TTE9UOlxuICAgICAgICAgICAgICAgIG5vZGVQYXRocy51bnNoaWZ0KCdzbG90WycgKyAobm9kZVBhcmVudC5uYW1lIHx8ICdkZWZhdWx0JykgKyAnXScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE5vZGVUeXBlLlRQTDpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgndGVtcGxhdGUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBOb2RlVHlwZS5DTVBUOlxuICAgICAgICAgICAgICAgIG5vZGVQYXRocy51bnNoaWZ0KCdjb21wb25lbnRbJyArIChub2RlUGFyZW50LnN1YlRhZyB8fCAncm9vdCcpICsgJ10nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBOb2RlVHlwZS5URVhUOlxuICAgICAgICAgICAgICAgIG5vZGVQYXRocy51bnNoaWZ0KCd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlUGFyZW50ID0gbm9kZVBhcmVudC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVQYXRocztcbn1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBnZXROb2RlUGF0aDtcblxuXG4vKipcbiAqIEBmaWxlIHRleHQg6IqC54K557G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgaXNCcm93c2VyID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pcy1icm93c2VyJyk7XG4vLyB2YXIgcmVtb3ZlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIGNoYW5nZUV4cHJDb21wYXJlID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2UtZXhwci1jb21wYXJlJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciB3YXJuU2V0SFRNTCA9IHJlcXVpcmUoJy4vd2Fybi1zZXQtaHRtbCcpO1xuLy8gdmFyIGlzRW5kU3R1bXAgPSByZXF1aXJlKCcuL2lzLWVuZC1zdHVtcCcpO1xuLy8gdmFyIGdldE5vZGVQYXRoID0gcmVxdWlyZSgnLi9nZXQtbm9kZS1wYXRoJyk7XG5cblxuLyoqXG4gKiB0ZXh0IOiKgueCueexu1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEBwYXJhbSB7TW9kZWw9fSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcj99IHJldmVyc2VXYWxrZXIg5a2Q5YWD57Sg6YGN5Y6G5a+56LGhXG4gKi9cbmZ1bmN0aW9uIFRleHROb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHRoaXMuYU5vZGUgPSBhTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHJldmVyc2VXYWxrZXIuY3VycmVudDtcbiAgICAgICAgaWYgKGN1cnJlbnROb2RlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnROb2RlLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudE5vZGUuZGF0YSA9PT0gJ3MtdGV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsID0gY3VycmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5kYXRhID0gdGhpcy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXIuZ29OZXh0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IHJldmVyc2VXYWxrZXIuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBSRVZFUlNFIEVSUk9SXSBUZXh0IGVuZCBmbGFnIG5vdCBmb3VuZC4gXFxuUGF0aHM6ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgZ2V0Tm9kZVBhdGgodGhpcykuam9pbignID4gJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0VuZFN0dW1wKGN1cnJlbnROb2RlLCAndGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlci5nb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUuZGF0YSA9IHRoaXMuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXIuZ29OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXIuZ29OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hTm9kZS50ZXh0RXhwci5vcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbCA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuVGV4dE5vZGUucHJvdG90eXBlLm5vZGVUeXBlID0gTm9kZVR5cGUuVEVYVDtcblxuLyoqXG4gKiDlsIZ0ZXh0IGF0dGFjaOWIsOmhtemdolxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOimgea3u+WKoOWIsOeahOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudO+8nX0gYmVmb3JlRWwg6KaB5re75Yqg5Yiw5ZOq5Liq5YWD57Sg5LmL5YmNXG4gKi9cblRleHROb2RlLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiAocGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZXZhbEV4cHIodGhpcy5hTm9kZS50ZXh0RXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICBpZiAodGhpcy5hTm9kZS50ZXh0RXhwci5vcmlnaW5hbCkge1xuICAgICAgICB0aGlzLnNlbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLnNlbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICAgICAgdmFyIHRlbXBGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHBhcmVudEVsLmluc2VydEJlZm9yZSh0ZW1wRmxhZywgdGhpcy5lbCk7XG4gICAgICAgIHRlbXBGbGFnLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCB0aGlzLmNvbnRlbnQpO1xuICAgICAgICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh0ZW1wRmxhZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5jb250ZW50KTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDplIDmr4EgdGV4dCDoioLngrlcbiAqL1xuVGV4dE5vZGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcHJldiA9IG51bGw7XG4gICAgdGhpcy5lbCA9IG51bGw7XG4gICAgdGhpcy5zZWwgPSBudWxsO1xufTtcblxudmFyIHRleHRVcGRhdGVQcm9wID0gaXNCcm93c2VyXG4gICAgJiYgKHR5cGVvZiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykudGV4dENvbnRlbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gJ3RleHRDb250ZW50J1xuICAgICAgICA6ICdkYXRhJyk7XG5cbi8qKlxuICog5pu05pawIHRleHQg6IqC54K555qE6KeG5Zu+XG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuVGV4dE5vZGUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGlmICh0aGlzLmFOb2RlLnRleHRFeHByLnZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGVuID0gY2hhbmdlcyA/IGNoYW5nZXMubGVuZ3RoIDogMDtcbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgaWYgKGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZXNbbGVuXS5leHByLCB0aGlzLmFOb2RlLnRleHRFeHByLCB0aGlzLnNjb3BlKSkge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBldmFsRXhwcih0aGlzLmFOb2RlLnRleHRFeHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcblxuICAgICAgICAgICAgaWYgKHRleHQgIT09IHRoaXMuY29udGVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHRleHQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hTm9kZS50ZXh0RXhwci5vcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRSZW1vdmVFbCA9IHRoaXMuc2VsLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50RWwgPSB0aGlzLmVsLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN0YXJ0UmVtb3ZlRWwgIT09IHRoaXMuZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW1vdmVUYXJnZXQgPSBzdGFydFJlbW92ZUVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRSZW1vdmVFbCA9IHN0YXJ0UmVtb3ZlRWwubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFbChyZW1vdmVUYXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgd2FyblNldEhUTUwocGFyZW50RWwpO1xuICAgICAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWwuaW5zZXJ0QmVmb3JlKHRlbXBGbGFnLCB0aGlzLmVsKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcEZsYWcuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRleHQpO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh0ZW1wRmxhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsW3RleHRVcGRhdGVQcm9wXSA9IHRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBUZXh0Tm9kZTtcblxuXG4vKipcbiAqIEBmaWxlIOWIpOaWreWPmOabtOaVsOe7hOaYr+WQpuW9seWTjeWIsOaVsOaNruW8leeUqOaRmOimgVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vKipcbiAqIOWIpOaWreWPmOabtOaVsOe7hOaYr+WQpuW9seWTjeWIsOaVsOaNruW8leeUqOaRmOimgVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5Y+Y5pu05pWw57uEXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVJlZiDmlbDmja7lvJXnlKjmkZjopoFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNoYW5nZXNJc0luRGF0YVJlZihjaGFuZ2VzLCBkYXRhUmVmKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuXG4gICAgICAgIGlmICghY2hhbmdlLm92ZXJ2aWV3KSB7XG4gICAgICAgICAgICB2YXIgcGF0aHMgPSBjaGFuZ2UuZXhwci5wYXRocztcbiAgICAgICAgICAgIGNoYW5nZS5vdmVydmlldyA9IHBhdGhzWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZS5leHRPdmVydmlldyA9IHBhdGhzWzBdLnZhbHVlICsgJy4nICsgcGF0aHNbMV0udmFsdWU7XG4gICAgICAgICAgICAgICAgY2hhbmdlLndpbGRPdmVydmlldyA9IHBhdGhzWzBdLnZhbHVlICsgJy4qJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhUmVmW2NoYW5nZS5vdmVydmlld11cbiAgICAgICAgICAgIHx8IGNoYW5nZS53aWxkT3ZlcnZpZXcgJiYgZGF0YVJlZltjaGFuZ2Uud2lsZE92ZXJ2aWV3XVxuICAgICAgICAgICAgfHwgY2hhbmdlLmV4dE92ZXJ2aWV3ICYmIGRhdGFSZWZbY2hhbmdlLmV4dE92ZXJ2aWV3XVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjaGFuZ2VzSXNJbkRhdGFSZWY7XG5cblxuLyoqXG4gKiBAZmlsZSDlhYPntKDlrZDoioLngrnpgY3ljobmk43kvZznsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG5cbi8vICNbYmVnaW5dIHJldmVyc2Vcbi8qKlxuICog5YWD57Sg5a2Q6IqC54K56YGN5Y6G5pON5L2c57G7XG4gKlxuICogQGlubmVyXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIOimgemBjeWOhueahOWFg+e0oFxuICovXG5mdW5jdGlvbiBET01DaGlsZHJlbldhbGtlcihlbCkge1xuICAgIHRoaXMucmF3ID0gW107XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy50YXJnZXQgPSBlbDtcblxuICAgIHZhciBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG4gICAgdmFyIG5leHQ7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICBzd2l0Y2ggKGNoaWxkLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKC9eXFxzKiQvLnRlc3QoY2hpbGQuZGF0YSB8fCBjaGlsZC50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWwoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYXcucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgdGhpcy5yYXcucHVzaChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5yYXdbdGhpcy5pbmRleF07XG4gICAgdGhpcy5uZXh0ID0gdGhpcy5yYXdbdGhpcy5pbmRleCArIDFdO1xufVxuXG4vKipcbiAqIOW+gOS4i+i1sOS4gOS4quWFg+e0oFxuICovXG5ET01DaGlsZHJlbldhbGtlci5wcm90b3R5cGUuZ29OZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMucmF3WysrdGhpcy5pbmRleF07XG4gICAgdGhpcy5uZXh0ID0gdGhpcy5yYXdbdGhpcy5pbmRleCArIDFdO1xufTtcbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBET01DaGlsZHJlbldhbGtlcjtcblxuXG4vKipcbiAqIEBmaWxlIOWFg+e0oOiKgueCueexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgY2hhbmdlRXhwckNvbXBhcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZS1leHByLWNvbXBhcmUnKTtcbi8vIHZhciBjaGFuZ2VzSXNJbkRhdGFSZWYgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZXMtaXMtaW4tZGF0YS1yZWYnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi9saWZlLWN5Y2xlJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIHJldmVyc2VFbGVtZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3JldmVyc2UtZWxlbWVudC1jaGlsZHJlbicpO1xuLy8gdmFyIGlzRGF0YUNoYW5nZUJ5RWxlbWVudCA9IHJlcXVpcmUoJy4vaXMtZGF0YS1jaGFuZ2UtYnktZWxlbWVudCcpO1xuLy8gdmFyIGVsZW1lbnRVcGRhdGVDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC11cGRhdGUtY2hpbGRyZW4nKTtcbi8vIHZhciBlbGVtZW50T3duQ3JlYXRlID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1jcmVhdGUnKTtcbi8vIHZhciBlbGVtZW50T3duQXR0YWNoID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1hdHRhY2gnKTtcbi8vIHZhciBlbGVtZW50T3duRGV0YWNoID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1kZXRhY2gnKTtcbi8vIHZhciBlbGVtZW50T3duRGlzcG9zZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tZGlzcG9zZScpO1xuLy8gdmFyIGVsZW1lbnRPd25PbkVsID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1vbi1lbCcpO1xuLy8gdmFyIGVsZW1lbnRPd25Ub1BoYXNlID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi10by1waGFzZScpO1xuLy8gdmFyIGVsZW1lbnRPd25BdHRhY2hlZCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tYXR0YWNoZWQnKTtcbi8vIHZhciBlbGVtZW50RGlzcG9zZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlJyk7XG4vLyB2YXIgZWxlbWVudEluaXRUYWdOYW1lID0gcmVxdWlyZSgnLi9lbGVtZW50LWluaXQtdGFnLW5hbWUnKTtcbi8vIHZhciBoYW5kbGVQcm9wID0gcmVxdWlyZSgnLi9oYW5kbGUtcHJvcCcpO1xuLy8gdmFyIHdhcm5TZXRIVE1MID0gcmVxdWlyZSgnLi93YXJuLXNldC1odG1sJyk7XG4vLyB2YXIgZ2V0Tm9kZVBhdGggPSByZXF1aXJlKCcuL2dldC1ub2RlLXBhdGgnKTtcblxuLyoqXG4gKiDlhYPntKDoioLngrnnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBFbGVtZW50KGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHRoaXMuYU5vZGUgPSBhTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuc3RhcnQ7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX2VsRm5zID0gW107XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFRcbiAgICAgICAgPyBwYXJlbnRcbiAgICAgICAgOiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuXG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcblxuICAgIGVsZW1lbnRJbml0VGFnTmFtZSh0aGlzKTtcblxuICAgIHRoaXMuX3RvUGhhc2UoJ2luaXRlZCcpO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHJldmVyc2VXYWxrZXIuY3VycmVudDtcblxuICAgICAgICBpZiAoIWN1cnJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gUkVWRVJTRSBFUlJPUl0gRWxlbWVudCBub3QgZm91bmQuIFxcblBhdGhzOiAnXG4gICAgICAgICAgICAgICAgKyBnZXROb2RlUGF0aCh0aGlzKS5qb2luKCcgPiAnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudE5vZGUubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBSRVZFUlNFIEVSUk9SXSBFbGVtZW50IHR5cGUgbm90IG1hdGNoLCBleHBlY3QgMSBidXQgJ1xuICAgICAgICAgICAgICAgICsgY3VycmVudE5vZGUubm9kZVR5cGUgKyAnLlxcblBhdGhzOiAnXG4gICAgICAgICAgICAgICAgKyBnZXROb2RlUGF0aCh0aGlzKS5qb2luKCcgPiAnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBSRVZFUlNFIEVSUk9SXSBFbGVtZW50IHRhZ05hbWUgbm90IG1hdGNoLCBleHBlY3QgJ1xuICAgICAgICAgICAgICAgICsgdGhpcy50YWdOYW1lICsgJyBidXQgbWVhdCAnICsgY3VycmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICsgJy5cXG5QYXRoczogJ1xuICAgICAgICAgICAgICAgICsgZ2V0Tm9kZVBhdGgodGhpcykuam9pbignID4gJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbCA9IGN1cnJlbnROb2RlO1xuICAgICAgICByZXZlcnNlV2Fsa2VyLmdvTmV4dCgpO1xuXG4gICAgICAgIHJldmVyc2VFbGVtZW50Q2hpbGRyZW4odGhpcyk7XG5cbiAgICAgICAgdGhpcy5fYXR0YWNoZWQoKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblxuXG5FbGVtZW50LnByb3RvdHlwZS5ub2RlVHlwZSA9IE5vZGVUeXBlLkVMRU07XG5cblxuRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoID0gZWxlbWVudE93bkF0dGFjaDtcbkVsZW1lbnQucHJvdG90eXBlLmRldGFjaCA9IGVsZW1lbnRPd25EZXRhY2g7XG5FbGVtZW50LnByb3RvdHlwZS5kaXNwb3NlID0gZWxlbWVudE93bkRpc3Bvc2U7XG5FbGVtZW50LnByb3RvdHlwZS5fY3JlYXRlID0gZWxlbWVudE93bkNyZWF0ZTtcbkVsZW1lbnQucHJvdG90eXBlLl90b1BoYXNlID0gZWxlbWVudE93blRvUGhhc2U7XG5FbGVtZW50LnByb3RvdHlwZS5fb25FbCA9IGVsZW1lbnRPd25PbkVsO1xuXG5FbGVtZW50LnByb3RvdHlwZS5fZG9uZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmxlYXZlRGlzcG9zZSkge1xuICAgICAgICBpZiAoIXRoaXMubGlmZUN5Y2xlLmRpc3Bvc2VkKSB7XG4gICAgICAgICAgICBlbGVtZW50RGlzcG9zZShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZU5vRGV0YWNoLFxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZU5vVHJhbnNpdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmxpZmVDeWNsZS5hdHRhY2hlZCkge1xuICAgICAgICByZW1vdmVFbCh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5fdG9QaGFzZSgnZGV0YWNoZWQnKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOinhuWbvuabtOaWsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGlmICghY2hhbmdlc0lzSW5EYXRhUmVmKGNoYW5nZXMsIHRoaXMuYU5vZGUuaG90c3BvdC5kYXRhKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIHZhciBkeW5hbWljUHJvcHMgPSB0aGlzLmFOb2RlLmhvdHNwb3QuZHluYW1pY1Byb3BzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZHluYW1pY1Byb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcHJvcCA9IGR5bmFtaWNQcm9wc1tpXTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMCwgY2hhbmdlTGVuID0gY2hhbmdlcy5sZW5ndGg7IGogPCBjaGFuZ2VMZW47IGorKykge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbal07XG5cbiAgICAgICAgICAgIGlmICghaXNEYXRhQ2hhbmdlQnlFbGVtZW50KGNoYW5nZSwgdGhpcywgcHJvcC5uYW1lKVxuICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHByb3AuZXhwciwgdGhpcy5zY29wZSlcbiAgICAgICAgICAgICAgICAgICAgfHwgcHJvcC5oaW50RXhwciAmJiBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgcHJvcC5oaW50RXhwciwgdGhpcy5zY29wZSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVQcm9wKHRoaXMsIGV2YWxFeHByKHByb3AuZXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lciksIHByb3ApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGh0bWxEaXJlY3RpdmUgPSB0aGlzLmFOb2RlLmRpcmVjdGl2ZXMuaHRtbDtcbiAgICBpZiAoaHRtbERpcmVjdGl2ZSkge1xuICAgICAgICBlYWNoKGNoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgaHRtbERpcmVjdGl2ZS52YWx1ZSwgbWUuc2NvcGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICB3YXJuU2V0SFRNTChtZS5lbCk7XG4gICAgICAgICAgICAgICAgLy8gI1tlbmRdXG4gICAgICAgICAgICAgICAgbWUuZWwuaW5uZXJIVE1MID0gZXZhbEV4cHIoaHRtbERpcmVjdGl2ZS52YWx1ZSwgbWUuc2NvcGUsIG1lLm93bmVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWxlbWVudFVwZGF0ZUNoaWxkcmVuKHRoaXMsIGNoYW5nZXMpO1xuICAgIH1cbn07XG5cbi8qKlxuICog5omn6KGM5a6M5oiQYXR0YWNoZWTnirbmgIHnmoTooYzkuLpcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuX2F0dGFjaGVkID0gZWxlbWVudE93bkF0dGFjaGVkO1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5cbi8qKlxuICogQGZpbGUg6ZSA5q+B6IqC54K577yM5riF56m66IqC54K55LiK55qE5peg55So5oiQ5ZGYXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8qKlxuICog6ZSA5q+B6IqC54K5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUg6IqC54K55a+56LGhXG4gKi9cbmZ1bmN0aW9uIG5vZGVEaXNwb3NlKG5vZGUpIHtcbiAgICBub2RlLmVsID0gbnVsbDtcbiAgICBub2RlLnNlbCA9IG51bGw7XG4gICAgbm9kZS5vd25lciA9IG51bGw7XG4gICAgbm9kZS5zY29wZSA9IG51bGw7XG4gICAgbm9kZS5hTm9kZSA9IG51bGw7XG4gICAgbm9kZS5wYXJlbnQgPSBudWxsO1xuICAgIG5vZGUucGFyZW50Q29tcG9uZW50ID0gbnVsbDtcbiAgICBub2RlLmNoaWxkcmVuID0gbnVsbDtcblxuICAgIGlmIChub2RlLl90b1BoYXNlKSB7XG4gICAgICAgIG5vZGUuX3RvUGhhc2UoJ2Rpc3Bvc2VkJyk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuX29uZGlzcG9zZWQpIHtcbiAgICAgICAgbm9kZS5fb25kaXNwb3NlZCgpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbm9kZURpc3Bvc2U7XG5cblxuLyoqXG4gKiBAZmlsZSDpgJrov4fnu4Tku7blj43op6PliJvlu7roioLngrnnmoTlt6XljoLmlrnms5VcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBob3RUYWdzID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9ob3QtdGFncycpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBUZXh0Tm9kZSA9IHJlcXVpcmUoJy4vdGV4dC1ub2RlJyk7XG4vLyB2YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuLy8gdmFyIFNsb3ROb2RlID0gcmVxdWlyZSgnLi9zbG90LW5vZGUnKTtcbi8vIHZhciBGb3JOb2RlID0gcmVxdWlyZSgnLi9mb3Itbm9kZScpO1xuLy8gdmFyIElmTm9kZSA9IHJlcXVpcmUoJy4vaWYtbm9kZScpO1xuLy8gdmFyIFRlbXBsYXRlTm9kZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUtbm9kZScpO1xuXG4vLyAjW2JlZ2luXSByZXZlcnNlXG4vKipcbiAqIOmAmui/h+e7hOS7tuWPjeino+WIm+W7uuiKgueCuVxuICpcbiAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcn0gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtNb2RlbD19IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHJldHVybiB7Tm9kZX1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmV2ZXJzZU5vZGUoYU5vZGUsIHJldmVyc2VXYWxrZXIsIHBhcmVudCwgc2NvcGUpIHtcbiAgICB2YXIgcGFyZW50SXNDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFQ7XG4gICAgdmFyIG93bmVyID0gcGFyZW50SXNDb21wb25lbnQgPyBwYXJlbnQgOiAocGFyZW50LmNoaWxkT3duZXIgfHwgcGFyZW50Lm93bmVyKTtcbiAgICBzY29wZSA9IHNjb3BlIHx8IChwYXJlbnRJc0NvbXBvbmVudCA/IHBhcmVudC5kYXRhIDogKHBhcmVudC5jaGlsZFNjb3BlIHx8IHBhcmVudC5zY29wZSkpO1xuXG4gICAgaWYgKGFOb2RlLnRleHRFeHByKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGV4dE5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKTtcbiAgICB9XG5cbiAgICBpZiAoYU5vZGUuZGlyZWN0aXZlc1snaWYnXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICByZXR1cm4gbmV3IElmTm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpO1xuICAgIH1cblxuICAgIGlmIChhTm9kZS5kaXJlY3RpdmVzWydmb3InXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICByZXR1cm4gbmV3IEZvck5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKTtcbiAgICB9XG5cbiAgICBpZiAoaG90VGFnc1thTm9kZS50YWdOYW1lXSkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFOb2RlLnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnc2xvdCc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNsb3ROb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcik7XG5cbiAgICAgICAgY2FzZSAndGVtcGxhdGUnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZW1wbGF0ZU5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyIENvbXBvbmVudFR5cGUgPSBvd25lci5nZXRDb21wb25lbnRUeXBlKGFOb2RlKTtcbiAgICAgICAgICAgIGlmIChDb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21wb25lbnRUeXBlKHtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGU6IGFOb2RlLFxuICAgICAgICAgICAgICAgICAgICBvd25lcjogb3duZXIsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgIHN1YlRhZzogYU5vZGUudGFnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlcjogcmV2ZXJzZVdhbGtlclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRWxlbWVudChhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpO1xufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJldmVyc2VOb2RlO1xuXG5cbi8qKlxuICogQGZpbGUg6ZSA5q+B6YeK5pS+5YWD57Sg55qE5a2Q5YWD57SgXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOmUgOavgemHiuaUvuWFg+e0oOeahOWtkOWFg+e0oFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOWFg+e0oOiKgueCuVxuICogQHBhcmFtIHtib29sZWFuPX0gbm9EZXRhY2gg5piv5ZCm5LiN6KaB5oqK6IqC54K55LuOZG9t56e76ZmkXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1RyYW5zaXRpb24g5piv5ZCm5LiN5pi+56S66L+H5rih5Yqo55S75pWI5p6cXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4oZWxlbWVudCwgbm9EZXRhY2gsIG5vVHJhbnNpdGlvbikge1xuICAgIHZhciBjaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGRyZW47XG4gICAgdmFyIGxlbiA9IGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgY2hpbGRyZW5bbGVuXS5kaXNwb3NlKG5vRGV0YWNoLCBub1RyYW5zaXRpb24pO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudERpc3Bvc2VDaGlsZHJlbjtcblxuXG4vKipcbiAqIEBmaWxlIOabtOaWsOWFg+e0oOeahOWtkOWFg+e0oOinhuWbvlxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vKipcbiAqIOabtOaWsOWFg+e0oOeahOWtkOWFg+e0oOinhuWbvlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOimgeabtOaWsOeahOWFg+e0oFxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuZnVuY3Rpb24gZWxlbWVudFVwZGF0ZUNoaWxkcmVuKGVsZW1lbnQsIGNoYW5nZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uX3VwZGF0ZShjaGFuZ2VzKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRVcGRhdGVDaGlsZHJlbjtcblxuXG4vKipcbiAqIEBmaWxlIOS9v+WFg+e0oOiKgueCueWIsOi+vuebuOW6lOeahOeUn+WRveWRqOacn1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi9saWZlLWN5Y2xlJyk7XG5cbi8qKlxuICog5L2/5YWD57Sg6IqC54K55Yiw6L6+55u45bqU55qE55Sf5ZG95ZGo5pyfXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg55Sf5ZG95ZGo5pyf5ZCN56ewXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRPd25Ub1BoYXNlKG5hbWUpIHtcbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZVtuYW1lXSB8fCB0aGlzLmxpZmVDeWNsZTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudE93blRvUGhhc2U7XG5cblxuLyoqXG4gKiBAZmlsZSDliJvlu7roioLngrnnmoTlt6XljoLmlrnms5VcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBob3RUYWdzID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9ob3QtdGFncycpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBUZXh0Tm9kZSA9IHJlcXVpcmUoJy4vdGV4dC1ub2RlJyk7XG4vLyB2YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuLy8gdmFyIFNsb3ROb2RlID0gcmVxdWlyZSgnLi9zbG90LW5vZGUnKTtcbi8vIHZhciBGb3JOb2RlID0gcmVxdWlyZSgnLi9mb3Itbm9kZScpO1xuLy8gdmFyIElmTm9kZSA9IHJlcXVpcmUoJy4vaWYtbm9kZScpO1xuLy8gdmFyIFRlbXBsYXRlTm9kZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUtbm9kZScpO1xuXG5cbi8qKlxuICog5Yib5bu66IqC54K5XG4gKlxuICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7TW9kZWw9fSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEByZXR1cm4ge05vZGV9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU5vZGUoYU5vZGUsIHBhcmVudCwgc2NvcGUpIHtcbiAgICB2YXIgcGFyZW50SXNDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFQ7XG4gICAgdmFyIG93bmVyID0gcGFyZW50SXNDb21wb25lbnQgPyBwYXJlbnQgOiAocGFyZW50LmNoaWxkT3duZXIgfHwgcGFyZW50Lm93bmVyKTtcbiAgICBzY29wZSA9IHNjb3BlIHx8IChwYXJlbnRJc0NvbXBvbmVudCA/IHBhcmVudC5kYXRhIDogKHBhcmVudC5jaGlsZFNjb3BlIHx8IHBhcmVudC5zY29wZSkpO1xuXG5cbiAgICBpZiAoYU5vZGUudGV4dEV4cHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0Tm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChhTm9kZS5kaXJlY3RpdmVzWydpZiddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgSWZOb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGFOb2RlLmRpcmVjdGl2ZXNbJ2ZvciddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgRm9yTm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChob3RUYWdzW2FOb2RlLnRhZ05hbWVdKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudChhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQpO1xuICAgIH1cblxuXG5cbiAgICBzd2l0Y2ggKGFOb2RlLnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnc2xvdCc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNsb3ROb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCk7XG5cbiAgICAgICAgY2FzZSAndGVtcGxhdGUnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZW1wbGF0ZU5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyIENvbXBvbmVudFR5cGUgPSBvd25lci5nZXRDb21wb25lbnRUeXBlKGFOb2RlKTtcbiAgICAgICAgICAgIGlmIChDb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21wb25lbnRUeXBlKHtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGU6IGFOb2RlLFxuICAgICAgICAgICAgICAgICAgICBvd25lcjogb3duZXIsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgIHN1YlRhZzogYU5vZGUudGFnTmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRWxlbWVudChhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVOb2RlO1xuXG5cbi8qKlxuICogQGZpbGUg55Sf5oiQ5a2Q5YWD57SgXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgY3JlYXRlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLW5vZGUnKTtcblxuLyoqXG4gKiDnlJ/miJDlrZDlhYPntKBcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQg5YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDopoHmt7vliqDliLDnmoTniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnTvvJ19IGJlZm9yZUVsIOimgea3u+WKoOWIsOWTquS4quWFg+e0oOS5i+WJjVxuICovXG5mdW5jdGlvbiBnZW5FbGVtZW50Q2hpbGRyZW4oZWxlbWVudCwgcGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgcGFyZW50RWwgPSBwYXJlbnRFbCB8fCBlbGVtZW50LmVsO1xuXG4gICAgdmFyIGFOb2RlQ2hpbGRyZW4gPSBlbGVtZW50LmFOb2RlLmNoaWxkcmVuO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYU5vZGVDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVOb2RlKGFOb2RlQ2hpbGRyZW5baV0sIGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICBjaGlsZC5hdHRhY2gocGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdlbkVsZW1lbnRDaGlsZHJlbjtcblxuXG4vKipcbiAqIEBmaWxlIOWwhuayoeaciSByb290IOWPquaciSBjaGlsZHJlbiDnmoTlhYPntKAgYXR0YWNoIOWIsOmhtemdolxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgZ2VuRWxlbWVudENoaWxkcmVuID0gcmVxdWlyZSgnLi9nZW4tZWxlbWVudC1jaGlsZHJlbicpO1xuXG5cbi8qKlxuICog5bCG5rKh5pyJIHJvb3Qg5Y+q5pyJIGNoaWxkcmVuIOeahOWFg+e0oCBhdHRhY2gg5Yiw6aG16Z2iXG4gKiDkuLvopoHnlKjkuo4gc2xvdCDlkowgdGVtcGxhdGVcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDopoHmt7vliqDliLDnmoTniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnTvvJ19IGJlZm9yZUVsIOimgea3u+WKoOWIsOWTquS4quWFg+e0oOS5i+WJjVxuICovXG5mdW5jdGlvbiBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoKHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIHRoaXMuc2VsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICBpbnNlcnRCZWZvcmUodGhpcy5zZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICBnZW5FbGVtZW50Q2hpbGRyZW4odGhpcywgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuXG4gICAgdGhpcy5fdG9QaGFzZSgnYXR0YWNoZWQnKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbm9kZU93bk9ubHlDaGlsZHJlbkF0dGFjaDtcblxuXG4vKipcbiAqIEBmaWxlIHNsb3Qg6IqC54K557G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBjcmVhdGVBTm9kZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYS1ub2RlJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgY3JlYXRlQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9wYXJzZXIvY3JlYXRlLWFjY2Vzc29yJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIERhdGEgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEnKTtcbi8vIHZhciBEYXRhQ2hhbmdlVHlwZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YS1jaGFuZ2UtdHlwZScpO1xuLy8gdmFyIGNoYW5nZUV4cHJDb21wYXJlID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2UtZXhwci1jb21wYXJlJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG4vLyB2YXIgbm9kZURpc3Bvc2UgPSByZXF1aXJlKCcuL25vZGUtZGlzcG9zZScpO1xuLy8gdmFyIGNyZWF0ZVJldmVyc2VOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtcmV2ZXJzZS1ub2RlJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2VDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuJyk7XG4vLyB2YXIgZWxlbWVudFVwZGF0ZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LXVwZGF0ZS1jaGlsZHJlbicpO1xuLy8gdmFyIGVsZW1lbnRPd25Ub1BoYXNlID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi10by1waGFzZScpO1xuLy8gdmFyIG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2ggPSByZXF1aXJlKCcuL25vZGUtb3duLW9ubHktY2hpbGRyZW4tYXR0YWNoJyk7XG5cblxuLyoqXG4gKiBzbG90IOiKgueCueexu1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEBwYXJhbSB7TW9kZWw9fSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcj99IHJldmVyc2VXYWxrZXIg5a2Q5YWD57Sg6YGN5Y6G5a+56LGhXG4gKi9cbmZ1bmN0aW9uIFNsb3ROb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHZhciByZWFsQU5vZGUgPSBjcmVhdGVBTm9kZSgpO1xuICAgIHRoaXMuYU5vZGUgPSByZWFsQU5vZGU7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnBhcmVudENvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVFxuICAgICAgICA/IHBhcmVudFxuICAgICAgICA6IHBhcmVudC5wYXJlbnRDb21wb25lbnQ7XG5cbiAgICB0aGlzLmlkID0gZ3VpZCgpO1xuXG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuc3RhcnQ7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgLy8gY2FsYyBzbG90IG5hbWVcbiAgICB0aGlzLm5hbWVCaW5kID0gZ2V0QU5vZGVQcm9wKGFOb2RlLCAnbmFtZScpO1xuICAgIGlmICh0aGlzLm5hbWVCaW5kKSB7XG4gICAgICAgIHRoaXMuaXNOYW1lZCA9IHRydWU7XG4gICAgICAgIHRoaXMubmFtZSA9IGV2YWxFeHByKHRoaXMubmFtZUJpbmQuZXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG4gICAgfVxuXG4gICAgLy8gY2FsYyBhTm9kZSBjaGlsZHJlblxuICAgIHZhciBnaXZlblNsb3RzID0gb3duZXIuZ2l2ZW5TbG90cztcbiAgICB2YXIgZ2l2ZW5DaGlsZHJlbjtcbiAgICBpZiAoZ2l2ZW5TbG90cykge1xuICAgICAgICBnaXZlbkNoaWxkcmVuID0gdGhpcy5pc05hbWVkID8gZ2l2ZW5TbG90cy5uYW1lZFt0aGlzLm5hbWVdIDogZ2l2ZW5TbG90cy5ub25hbWU7XG4gICAgfVxuXG4gICAgaWYgKGdpdmVuQ2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5pc0luc2VydGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWFsQU5vZGUuY2hpbGRyZW4gPSBnaXZlbkNoaWxkcmVuIHx8IGFOb2RlLmNoaWxkcmVuLnNsaWNlKDApO1xuXG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIC8vIGNhbGMgc2NvcGVkIHNsb3QgdmFyc1xuICAgIHJlYWxBTm9kZS52YXJzID0gYU5vZGUudmFycztcbiAgICB2YXIgaW5pdERhdGEgPSB7fTtcbiAgICBlYWNoKHJlYWxBTm9kZS52YXJzLCBmdW5jdGlvbiAodmFySXRlbSkge1xuICAgICAgICBtZS5pc1Njb3BlZCA9IHRydWU7XG4gICAgICAgIGluaXREYXRhW3Zhckl0ZW0ubmFtZV0gPSBldmFsRXhwcih2YXJJdGVtLmV4cHIsIHNjb3BlLCBvd25lcik7XG4gICAgfSk7XG5cbiAgICAvLyBjaGlsZCBvd25lciAmIGNoaWxkIHNjb3BlXG4gICAgaWYgKHRoaXMuaXNJbnNlcnRlZCkge1xuICAgICAgICB0aGlzLmNoaWxkT3duZXIgPSBvd25lci5vd25lcjtcbiAgICAgICAgdGhpcy5jaGlsZFNjb3BlID0gb3duZXIuc2NvcGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTY29wZWQpIHtcbiAgICAgICAgdGhpcy5jaGlsZFNjb3BlID0gbmV3IERhdGEoaW5pdERhdGEsIHRoaXMuY2hpbGRTY29wZSB8fCB0aGlzLnNjb3BlKTtcbiAgICB9XG5cblxuICAgIG93bmVyLnNsb3RDaGlsZHJlbi5wdXNoKHRoaXMpO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG5cbiAgICAgICAgdGhpcy5zZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5zZWwsIHJldmVyc2VXYWxrZXIudGFyZ2V0LCByZXZlcnNlV2Fsa2VyLmN1cnJlbnQpO1xuXG4gICAgICAgIGVhY2godGhpcy5hTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGFOb2RlQ2hpbGQpIHtcbiAgICAgICAgICAgIG1lLmNoaWxkcmVuLnB1c2goY3JlYXRlUmV2ZXJzZU5vZGUoYU5vZGVDaGlsZCwgcmV2ZXJzZVdhbGtlciwgbWUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcblxuICAgICAgICB0aGlzLl90b1BoYXNlKCdhdHRhY2hlZCcpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuU2xvdE5vZGUucHJvdG90eXBlLm5vZGVUeXBlID0gTm9kZVR5cGUuU0xPVDtcblxuLyoqXG4gKiDplIDmr4Hph4rmlL4gc2xvdFxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vRGV0YWNoIOaYr+WQpuS4jeimgeaKiuiKgueCueS7jmRvbeenu+mZpFxuICogQHBhcmFtIHtib29sZWFuPX0gbm9UcmFuc2l0aW9uIOaYr+WQpuS4jeaYvuekuui/h+a4oeWKqOeUu+aViOaenFxuICovXG5TbG90Tm9kZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIChub0RldGFjaCwgbm9UcmFuc2l0aW9uKSB7XG4gICAgdGhpcy5jaGlsZE93bmVyID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkU2NvcGUgPSBudWxsO1xuXG4gICAgZWxlbWVudERpc3Bvc2VDaGlsZHJlbih0aGlzLCBub0RldGFjaCwgbm9UcmFuc2l0aW9uKTtcbiAgICBub2RlRGlzcG9zZSh0aGlzKTtcbn07XG5cblNsb3ROb2RlLnByb3RvdHlwZS5hdHRhY2ggPSBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoO1xuU2xvdE5vZGUucHJvdG90eXBlLl90b1BoYXNlID0gZWxlbWVudE93blRvUGhhc2U7XG5cbi8qKlxuICog6KeG5Zu+5pu05paw5Ye95pWwXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzRnJvbU91dGVyIOWPmOWMluS/oeaBr+aYr+WQpuadpea6kOS6jueItue7hOS7tuS5i+WklueahOe7hOS7tlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuU2xvdE5vZGUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcywgaXNGcm9tT3V0ZXIpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMubmFtZUJpbmQgJiYgZXZhbEV4cHIodGhpcy5uYW1lQmluZC5leHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSAhPT0gbWUubmFtZSkge1xuICAgICAgICB0aGlzLm93bmVyLl9ub3RpZnlOZWVkUmVsb2FkKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNGcm9tT3V0ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJbnNlcnRlZCkge1xuICAgICAgICAgICAgZWxlbWVudFVwZGF0ZUNoaWxkcmVuKHRoaXMsIGNoYW5nZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pc1Njb3BlZCkge1xuICAgICAgICAgICAgZWFjaCh0aGlzLmFOb2RlLnZhcnMsIGZ1bmN0aW9uICh2YXJJdGVtKSB7XG4gICAgICAgICAgICAgICAgbWUuY2hpbGRTY29wZS5zZXQodmFySXRlbS5uYW1lLCBldmFsRXhwcih2YXJJdGVtLmV4cHIsIG1lLnNjb3BlLCBtZS5vd25lcikpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgdmFyIHNjb3BlZENoYW5nZXMgPSBbXTtcbiAgICAgICAgICAgIGVhY2goY2hhbmdlcywgZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGlmICghbWUuaXNJbnNlcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZWRDaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlYWNoKG1lLmFOb2RlLnZhcnMsIGZ1bmN0aW9uICh2YXJJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdmFySXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVsYXRpb24gPSBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgdmFySXRlbS5leHByLCBtZS5zY29wZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS50eXBlICE9PSBEYXRhQ2hhbmdlVHlwZS5TUExJQ0UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZENoYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRGF0YUNoYW5nZVR5cGUuU0VULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGU6IEV4cHJUeXBlLlNUUklORywgdmFsdWU6IG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1lLmNoaWxkU2NvcGUuZ2V0KG5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVsYXRpb24gPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZENoYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcjogY3JlYXRlQWNjZXNzb3IoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogRXhwclR5cGUuU1RSSU5HLCB2YWx1ZTogbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBEYXRhQ2hhbmdlVHlwZS5TUExJQ0UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGNoYW5nZS5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDb3VudDogY2hhbmdlLmRlbGV0ZUNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaGFuZ2UudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0aW9uczogY2hhbmdlLmluc2VydGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjaGFuZ2Uub3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGVsZW1lbnRVcGRhdGVDaGlsZHJlbih0aGlzLCBzY29wZWRDaGFuZ2VzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5pc0luc2VydGVkKSB7XG4gICAgICAgICAgICBlbGVtZW50VXBkYXRlQ2hpbGRyZW4odGhpcywgY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBTbG90Tm9kZTtcblxuXG4vKipcbiAqIEBmaWxlIOWkjeWItuaMh+S7pOmbhuWQiOWvueixoVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDlpI3liLbmjIfku6Tpm4blkIjlr7nosaFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIOimgeWkjeWItueahOaMh+S7pOmbhuWQiOWvueixoVxuICogQHBhcmFtIHtPYmplY3Q9fSBleGNsdWRlcyDpnIDopoHmjpLpmaTnmoRrZXnpm4blkIhcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gY2xvbmVEaXJlY3RpdmVzKHNvdXJjZSwgZXhjbHVkZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZXhjbHVkZXMgPSBleGNsdWRlcyB8fCB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFleGNsdWRlc1trZXldKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY2xvbmVEaXJlY3RpdmVzO1xuXG5cbi8qKlxuICogQGZpbGUg566A5Y2V5omn6KGM6ZSA5q+B6IqC54K555qE6KGM5Li6XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgcmVtb3ZlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gdmFyIG5vZGVEaXNwb3NlID0gcmVxdWlyZSgnLi9ub2RlLWRpc3Bvc2UnKTtcbi8vIHZhciBlbGVtZW50RGlzcG9zZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LWRpc3Bvc2UtY2hpbGRyZW4nKTtcblxuLyoqXG4gKiDnroDljZXmiafooYzplIDmr4HoioLngrnnmoTooYzkuLpcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqL1xuZnVuY3Rpb24gbm9kZU93blNpbXBsZURpc3Bvc2Uobm9EZXRhY2gpIHtcbiAgICBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKHRoaXMsIG5vRGV0YWNoLCAxKTtcblxuICAgIGlmICghbm9EZXRhY2gpIHtcbiAgICAgICAgcmVtb3ZlRWwodGhpcy5lbCk7XG4gICAgfVxuXG4gICAgbm9kZURpc3Bvc2UodGhpcyk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG5vZGVPd25TaW1wbGVEaXNwb3NlO1xuXG5cbi8qKlxuICogQGZpbGUg5Yib5bu66IqC54K55a+55bqU55qEIHN0dW1wIGNvbW1lbnQg5YWD57SgXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cblxuLyoqXG4gKiDliJvlu7roioLngrnlr7nlupTnmoQgc3R1bXAgY29tbWVudCDkuLvlhYPntKBcbiAqL1xuZnVuY3Rpb24gbm9kZU93bkNyZWF0ZVN0dW1wKCkge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsIHx8IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG5vZGVPd25DcmVhdGVTdHVtcDtcblxuXG4vKipcbiAqIEBmaWxlIGZvciDmjIfku6ToioLngrnnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL3V0aWwvaW5oZXJpdHMnKTtcbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIGNyZWF0ZUFOb2RlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hLW5vZGUnKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtZXhwcicpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIGNsb25lRGlyZWN0aXZlcyA9IHJlcXVpcmUoJy4uL3BhcnNlci9jbG9uZS1kaXJlY3RpdmVzJyk7XG4vLyB2YXIgRGF0YSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YScpO1xuLy8gdmFyIERhdGFDaGFuZ2VUeXBlID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhLWNoYW5nZS10eXBlJyk7XG4vLyB2YXIgY2hhbmdlRXhwckNvbXBhcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZS1leHByLWNvbXBhcmUnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgY2hhbmdlc0lzSW5EYXRhUmVmID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2VzLWlzLWluLWRhdGEtcmVmJyk7XG4vLyB2YXIgcmVtb3ZlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBjcmVhdGVOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtbm9kZScpO1xuLy8gdmFyIGNyZWF0ZVJldmVyc2VOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtcmV2ZXJzZS1ub2RlJyk7XG4vLyB2YXIgbm9kZU93blNpbXBsZURpc3Bvc2UgPSByZXF1aXJlKCcuL25vZGUtb3duLXNpbXBsZS1kaXNwb3NlJyk7XG4vLyB2YXIgbm9kZU93bkNyZWF0ZVN0dW1wID0gcmVxdWlyZSgnLi9ub2RlLW93bi1jcmVhdGUtc3R1bXAnKTtcbi8vIHZhciBlbGVtZW50RGlzcG9zZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LWRpc3Bvc2UtY2hpbGRyZW4nKTtcbi8vIHZhciBkYXRhQ2FjaGUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEtY2FjaGUnKTtcblxuXG4vKipcbiAqIOW+queOr+mhueeahOaVsOaNruWuueWZqOexu1xuICpcbiAqIEBpbm5lclxuICogQGNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gZm9yRWxlbWVudCBmb3LlhYPntKDlr7nosaFcbiAqIEBwYXJhbSB7Kn0gaXRlbSDlvZPliY3pobnnmoTmlbDmja5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCDlvZPliY3pobnnmoTntKLlvJVcbiAqL1xuZnVuY3Rpb24gRm9ySXRlbURhdGEoZm9yRWxlbWVudCwgaXRlbSwgaW5kZXgpIHtcbiAgICB0aGlzLmlkID0gZ3VpZCgpO1xuICAgIHRoaXMucGFyZW50ID0gZm9yRWxlbWVudC5zY29wZTtcbiAgICB0aGlzLnJhdyA9IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG5cbiAgICB0aGlzLmRpcmVjdGl2ZSA9IGZvckVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlc1snZm9yJ107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgdGhpcy5yYXdbdGhpcy5kaXJlY3RpdmUuaXRlbS5yYXddID0gaXRlbTtcbiAgICB0aGlzLnJhd1t0aGlzLmRpcmVjdGl2ZS5pbmRleC5yYXddID0gaW5kZXg7XG59XG5cbi8qKlxuICog5bCG5pWw5o2u5pON5L2c55qE6KGo6L6+5byP77yM6L2s5o2i5oiQ5Li65a+5cGFyZW505pWw5o2u5pON5L2c55qE6KGo6L6+5byPXG4gKiDkuLvopoHmmK/lr7lpdGVt5ZKMaW5kZXjov5vooYzlpITnkIZcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXhwciDooajovr7lvI9cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuRm9ySXRlbURhdGEucHJvdG90eXBlLmV4cHJSZXNvbHZlID0gZnVuY3Rpb24gKGV4cHIpIHtcbiAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy5kaXJlY3RpdmU7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHJlc29sdmVJdGVtKGV4cHIpIHtcbiAgICAgICAgaWYgKGV4cHIudHlwZSA9PT0gRXhwclR5cGUuQUNDRVNTT1JcbiAgICAgICAgICAgICYmIGV4cHIucGF0aHNbMF0udmFsdWUgPT09IGRpcmVjdGl2ZS5pdGVtLnBhdGhzWzBdLnZhbHVlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZS52YWx1ZS5wYXRocy5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLk5VTUJFUixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtZS5nZXQoZGlyZWN0aXZlLmluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByLnBhdGhzLnNsaWNlKDEpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIGV4cHIgPSByZXNvbHZlSXRlbShleHByKTtcblxuICAgIHZhciByZXNvbHZlZFBhdGhzID0gW107XG5cbiAgICBlYWNoKGV4cHIucGF0aHMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJlc29sdmVkUGF0aHMucHVzaChcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9PT0gRXhwclR5cGUuQUNDRVNTT1JcbiAgICAgICAgICAgICAgICAmJiBpdGVtLnBhdGhzWzBdLnZhbHVlID09PSBkaXJlY3RpdmUuaW5kZXgucGF0aHNbMF0udmFsdWVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLk5VTUJFUixcbiAgICAgICAgICAgICAgICB2YWx1ZTogbWUuZ2V0KGRpcmVjdGl2ZS5pbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogcmVzb2x2ZUl0ZW0oaXRlbSlcbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihyZXNvbHZlZFBhdGhzKTtcbn07XG5cbi8vIOS7o+eQhuaVsOaNruaTjeS9nOaWueazlVxuaW5oZXJpdHMoRm9ySXRlbURhdGEsIERhdGEpO1xuZWFjaChcbiAgICBbJ3NldCcsICdyZW1vdmUnLCAndW5zaGlmdCcsICdzaGlmdCcsICdwdXNoJywgJ3BvcCcsICdzcGxpY2UnXSxcbiAgICBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgIEZvckl0ZW1EYXRhLnByb3RvdHlwZVsnXycgKyBtZXRob2RdID0gRGF0YS5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICAgICAgRm9ySXRlbURhdGEucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoZXhwcikge1xuICAgICAgICAgICAgZXhwciA9IHRoaXMuZXhwclJlc29sdmUocGFyc2VFeHByKGV4cHIpKTtcbiAgICAgICAgICAgIGRhdGFDYWNoZS5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRbbWV0aG9kXS5hcHBseShcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudCxcbiAgICAgICAgICAgICAgICBbZXhwcl0uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgIH1cbik7XG5cbi8qKlxuICog5Yib5bu6IGZvciDmjIfku6TlhYPntKDnmoTlrZDlhYPntKBcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7Rm9yRGlyZWN0aXZlfSBmb3JFbGVtZW50IGZvciDmjIfku6TlhYPntKDlr7nosaFcbiAqIEBwYXJhbSB7Kn0gaXRlbSDlrZDlhYPntKDlr7nlupTmlbDmja5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCDlrZDlhYPntKDlr7nlupTluo/lj7dcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZvckRpcmVjdGl2ZUNoaWxkKGZvckVsZW1lbnQsIGl0ZW0sIGluZGV4KSB7XG4gICAgdmFyIGl0ZW1TY29wZSA9IG5ldyBGb3JJdGVtRGF0YShmb3JFbGVtZW50LCBpdGVtLCBpbmRleCk7XG4gICAgcmV0dXJuIGNyZWF0ZU5vZGUoZm9yRWxlbWVudC5pdGVtQU5vZGUsIGZvckVsZW1lbnQsIGl0ZW1TY29wZSk7XG59XG5cbi8qKlxuICogZm9yIOaMh+S7pOiKgueCueexu1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEBwYXJhbSB7TW9kZWw9fSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcj99IHJldmVyc2VXYWxrZXIg5a2Q5YWD57Sg6YGN5Y6G5a+56LGhXG4gKi9cbmZ1bmN0aW9uIEZvck5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgdGhpcy5hTm9kZSA9IGFOb2RlO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFRcbiAgICAgICAgPyBwYXJlbnRcbiAgICAgICAgOiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuXG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cbiAgICB0aGlzLml0ZW1BTm9kZSA9IGNyZWF0ZUFOb2RlKHtcbiAgICAgICAgY2hpbGRyZW46IGFOb2RlLmNoaWxkcmVuLFxuICAgICAgICBwcm9wczogYU5vZGUucHJvcHMsXG4gICAgICAgIGV2ZW50czogYU5vZGUuZXZlbnRzLFxuICAgICAgICB0YWdOYW1lOiBhTm9kZS50YWdOYW1lLFxuICAgICAgICB2YXJzOiBhTm9kZS52YXJzLFxuICAgICAgICBob3RzcG90OiBhTm9kZS5ob3RzcG90LFxuICAgICAgICBkaXJlY3RpdmVzOiBjbG9uZURpcmVjdGl2ZXMoYU5vZGUuZGlyZWN0aXZlcywge1xuICAgICAgICAgICAgJ2Zvcic6IDFcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIHRoaXMucGFyYW0gPSBhTm9kZS5kaXJlY3RpdmVzWydmb3InXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAocmV2ZXJzZVdhbGtlcikge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBlYWNoKFxuICAgICAgICAgICAgZXZhbEV4cHIodGhpcy5wYXJhbS52YWx1ZSwgdGhpcy5zY29wZSwgdGhpcy5vd25lciksXG4gICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtU2NvcGUgPSBuZXcgRm9ySXRlbURhdGEobWUsIGl0ZW0sIGkpO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNyZWF0ZVJldmVyc2VOb2RlKG1lLml0ZW1BTm9kZSwgcmV2ZXJzZVdhbGtlciwgbWUsIGl0ZW1TY29wZSk7XG4gICAgICAgICAgICAgICAgbWUuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5fY3JlYXRlKCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblxuRm9yTm9kZS5wcm90b3R5cGUubm9kZVR5cGUgPSBOb2RlVHlwZS5GT1I7XG5Gb3JOb2RlLnByb3RvdHlwZS5fY3JlYXRlID0gbm9kZU93bkNyZWF0ZVN0dW1wO1xuRm9yTm9kZS5wcm90b3R5cGUuZGlzcG9zZSA9IG5vZGVPd25TaW1wbGVEaXNwb3NlO1xuXG4vKipcbiAqIOWwhuWFg+e0oGF0dGFjaOWIsOmhtemdoueahOihjOS4ulxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOimgea3u+WKoOWIsOeahOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudO+8nX0gYmVmb3JlRWwg6KaB5re75Yqg5Yiw5ZOq5Liq5YWD57Sg5LmL5YmNXG4gKi9cbkZvck5vZGUucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgIC8vIHBhaW50IGxpc3RcbiAgICB2YXIgZWwgPSB0aGlzLmVsIHx8IHBhcmVudEVsLmZpcnN0Q2hpbGQ7XG4gICAgdmFyIGRhdGEgPSBldmFsRXhwcih0aGlzLnBhcmFtLnZhbHVlLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcbiAgICB2YXIgbGVuID0gZGF0YSAmJiBkYXRhLmxlbmd0aCB8fCAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY3JlYXRlRm9yRGlyZWN0aXZlQ2hpbGQodGhpcywgZGF0YVtpXSwgaSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIGNoaWxkLmF0dGFjaChwYXJlbnRFbCwgZWwpO1xuICAgIH1cbn07XG5cbi8qKlxuICog5bCG5YWD57Sg5LuO6aG16Z2i5LiK56e76Zmk55qE6KGM5Li6XG4gKi9cbkZvck5vZGUucHJvdG90eXBlLmRldGFjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5saWZlQ3ljbGUuYXR0YWNoZWQpIHtcbiAgICAgICAgZWxlbWVudERpc3Bvc2VDaGlsZHJlbih0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICByZW1vdmVFbCh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuZGV0YWNoZWQ7XG4gICAgfVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1tYXgtc3RhdGVtZW50cyAqL1xuXG4vKipcbiAqIOinhuWbvuabtOaWsOWHveaVsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbkZvck5vZGUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuXG4gICAgdmFyIG1lID0gdGhpcztcbiAgICAvLyDmjqfliLbliJfooajmm7TmlrDnrZbnlaXmmK/lkKbljp/moLfmm7TmlrDnmoTlj5jph49cbiAgICB2YXIgb3JpZ2luYWxVcGRhdGUgPSB0aGlzLmFOb2RlLmRpcmVjdGl2ZXMudHJhbnNpdGlvbjtcblxuXG4gICAgdmFyIG9sZENoaWxkcmVuTGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgdmFyIGNoaWxkcmVuQ2hhbmdlcyA9IG5ldyBBcnJheShvbGRDaGlsZHJlbkxlbik7XG5cbiAgICBmdW5jdGlvbiBwdXNoVG9DaGlsZHJlbkNoYW5nZXMoY2hhbmdlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW5DaGFuZ2VzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tpXSA9IGNoaWxkcmVuQ2hhbmdlc1tpXSB8fCBbXSkucHVzaChjaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRpc3Bvc2VDaGlsZHJlbiA9IFtdO1xuXG5cbiAgICAvLyDliKTmlq3liJfooajmmK/lkKbniLblhYPntKDkuIvllK/kuIDnmoTlhYPntKBcbiAgICAvLyDlpoLmnpzmmK/nmoTor53vvIzlj6/ku6XlgZrkuIDkupvmm7TmlrDkvJjljJZcbiAgICB2YXIgcGFyZW50RWwgPSB0aGlzLmVsLnBhcmVudE5vZGU7XG4gICAgdmFyIHBhcmVudEZpcnN0Q2hpbGQgPSBwYXJlbnRFbC5maXJzdENoaWxkO1xuICAgIHZhciBwYXJlbnRMYXN0Q2hpbGQgPSBwYXJlbnRFbC5sYXN0Q2hpbGQ7XG4gICAgdmFyIGlzT25seVBhcmVudENoaWxkID0gb2xkQ2hpbGRyZW5MZW4gPiAwIC8vIOacieWtqeWtkOaXtlxuICAgICAgICAgICAgJiYgcGFyZW50Rmlyc3RDaGlsZCA9PT0gdGhpcy5jaGlsZHJlblswXS5lbFxuICAgICAgICAgICAgJiYgKHBhcmVudExhc3RDaGlsZCA9PT0gdGhpcy5lbCB8fCBwYXJlbnRMYXN0Q2hpbGQgPT09IHRoaXMuY2hpbGRyZW5bb2xkQ2hpbGRyZW5MZW4gLSAxXS5lbClcbiAgICAgICAgfHwgb2xkQ2hpbGRyZW5MZW4gPT09IDAgLy8g5peg5a2p5a2Q5pe2XG4gICAgICAgICAgICAmJiBwYXJlbnRGaXJzdENoaWxkID09PSB0aGlzLmVsXG4gICAgICAgICAgICAmJiBwYXJlbnRMYXN0Q2hpbGQgPT09IHRoaXMuZWw7XG5cbiAgICAvLyDmjqfliLbliJfooajmmK/lkKbmlbTkvZPmm7TmlrDnmoTlj5jph49cbiAgICB2YXIgaXNDaGlsZHJlblJlYnVpbGQ7XG5cbiAgICB2YXIgbmV3TGlzdCA9IGV2YWxFeHByKHRoaXMucGFyYW0udmFsdWUsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgIHZhciBuZXdMZW4gPSBuZXdMaXN0ICYmIG5ld0xpc3QubGVuZ3RoIHx8IDA7XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1yZWRlY2xhcmUgKi9cbiAgICBmb3IgKHZhciBjSW5kZXggPSAwLCBjTGVuID0gY2hhbmdlcy5sZW5ndGg7IGNJbmRleCA8IGNMZW47IGNJbmRleCsrKSB7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2NJbmRleF07XG4gICAgICAgIHZhciByZWxhdGlvbiA9IGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCB0aGlzLnBhcmFtLnZhbHVlLCB0aGlzLnNjb3BlKTtcblxuICAgICAgICBpZiAoIXJlbGF0aW9uKSB7XG4gICAgICAgICAgICAvLyDml6DlhbPml7bvvIznm7TmjqXkvKDpgJLnu5nlrZDlhYPntKDmm7TmlrDvvIzliJfooajmnKzouqvkuI3pnIDopoHliqhcbiAgICAgICAgICAgIHB1c2hUb0NoaWxkcmVuQ2hhbmdlcyhjaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlbGF0aW9uID4gMikge1xuICAgICAgICAgICAgLy8g5Y+Y5pu06KGo6L6+5byP5pivbGlzdOe7keWumuihqOi+vuW8j+eahOWtkOmhuVxuICAgICAgICAgICAgLy8g5Y+q6ZyA6KaB5a+555u45bqU55qE5a2Q6aG56L+b6KGM5pu05pawXG4gICAgICAgICAgICB2YXIgY2hhbmdlUGF0aHMgPSBjaGFuZ2UuZXhwci5wYXRocztcbiAgICAgICAgICAgIHZhciBmb3JMZW4gPSB0aGlzLnBhcmFtLnZhbHVlLnBhdGhzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VJbmRleCA9ICtldmFsRXhwcihjaGFuZ2VQYXRoc1tmb3JMZW5dLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcblxuICAgICAgICAgICAgaWYgKGlzTmFOKGNoYW5nZUluZGV4KSkge1xuICAgICAgICAgICAgICAgIHB1c2hUb0NoaWxkcmVuQ2hhbmdlcyhjaGFuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBjaGFuZ2UudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcjogY3JlYXRlQWNjZXNzb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtLml0ZW0ucGF0aHMuY29uY2F0KGNoYW5nZVBhdGhzLnNsaWNlKGZvckxlbiArIDEpKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2hhbmdlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY2hhbmdlLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkZWxldGVDb3VudDogY2hhbmdlLmRlbGV0ZUNvdW50LFxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRpb25zOiBjaGFuZ2UuaW5zZXJ0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjaGFuZ2Uub3B0aW9uXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbY2hhbmdlSW5kZXhdID0gY2hpbGRyZW5DaGFuZ2VzW2NoYW5nZUluZGV4XSB8fCBbXSlcbiAgICAgICAgICAgICAgICAgICAgLnB1c2goY2hhbmdlKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2NoYW5nZUluZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLnR5cGUgPT09IERhdGFDaGFuZ2VUeXBlLlNQTElDRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltjaGFuZ2VJbmRleF0uc2NvcGUuX3NwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuZXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXS5jb25jYXQoY2hhbmdlLmluZGV4LCBjaGFuZ2UuZGVsZXRlQ291bnQsIGNoYW5nZS5pbnNlcnRpb25zKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNpbGVudDogMSB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltjaGFuZ2VJbmRleF0uc2NvcGUuX3NldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuZXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzaWxlbnQ6IDEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGFuZ2UudHlwZSAhPT0gRGF0YUNoYW5nZVR5cGUuU1BMSUNFKSB7XG4gICAgICAgICAgICAvLyDlj5jmm7Tooajovr7lvI/mmK9saXN057uR5a6a6KGo6L6+5byP5pys6Lqr5oiW5q+N6aG555qE6YeN5paw6K6+5YC8XG4gICAgICAgICAgICAvLyDmraTml7bpnIDopoHmm7TmlrDmlbTkuKrliJfooahcblxuXG4gICAgICAgICAgICAvLyDogIHnmoTmr5TmlrDnmoTlpJrnmoTpg6jliIbvvIzmoIforrDpnIDopoFkaXNwb3NlXG4gICAgICAgICAgICBpZiAob2xkQ2hpbGRyZW5MZW4gPiBuZXdMZW4pIHtcbiAgICAgICAgICAgICAgICBkaXNwb3NlQ2hpbGRyZW4gPSBkaXNwb3NlQ2hpbGRyZW4uY29uY2F0KHRoaXMuY2hpbGRyZW4uc2xpY2UobmV3TGVuKSk7XG5cbiAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXMgPSBjaGlsZHJlbkNoYW5nZXMuc2xpY2UoMCwgbmV3TGVuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5zbGljZSgwLCBuZXdMZW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmlbTpobnlj5jmm7RcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW2ldID0gY2hpbGRyZW5DaGFuZ2VzW2ldIHx8IFtdKS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRGF0YUNoYW5nZVR5cGUuU0VULFxuICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKHRoaXMucGFyYW0uaXRlbS5wYXRocy5zbGljZSgwKSksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdMaXN0W2ldXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyDlr7lsaXN05pu05LiK57qn5pWw5o2u55qE55u05o6l6K6+572uXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uIDwgMikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXNbaV0ucHVzaChjaGFuZ2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uc2NvcGUuX3NldChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW0uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0xpc3RbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2lsZW50OiAxfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpc0NoaWxkcmVuUmVidWlsZCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVsYXRpb24gPT09IDIgJiYgY2hhbmdlLnR5cGUgPT09IERhdGFDaGFuZ2VUeXBlLlNQTElDRSAmJiAhaXNDaGlsZHJlblJlYnVpbGQpIHtcbiAgICAgICAgICAgIC8vIOWPmOabtOihqOi+vuW8j+aYr2xpc3Tnu5Hlrprooajovr7lvI/mnKzouqvmlbDnu4TnmoRzcGxpY2Xmk43kvZxcbiAgICAgICAgICAgIC8vIOatpOaXtumcgOimgeWIoOmZpOmDqOWIhumhue+8jOWIm+W7uumDqOWIhumhuVxuICAgICAgICAgICAgdmFyIGNoYW5nZVN0YXJ0ID0gY2hhbmdlLmluZGV4O1xuICAgICAgICAgICAgdmFyIGRlbGV0ZUNvdW50ID0gY2hhbmdlLmRlbGV0ZUNvdW50O1xuICAgICAgICAgICAgdmFyIGluc2VydGlvbnNMZW4gPSBjaGFuZ2UuaW5zZXJ0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgbmV3Q291bnQgPSBpbnNlcnRpb25zTGVuIC0gZGVsZXRlQ291bnQ7XG5cbiAgICAgICAgICAgIGlmIChuZXdDb3VudCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleENoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRGF0YUNoYW5nZVR5cGUuU0VULFxuICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGV4cHI6IHRoaXMucGFyYW0uaW5kZXhcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNoYW5nZVN0YXJ0ICsgZGVsZXRlQ291bnQ7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbaV0gPSBjaGlsZHJlbkNoYW5nZXNbaV0gfHwgW10pLnB1c2goaW5kZXhDaGFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldICYmIHRoaXMuY2hpbGRyZW5baV0uc2NvcGUuX3NldChcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q2hhbmdlLmV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpIC0gZGVsZXRlQ291bnQgKyBpbnNlcnRpb25zTGVuLFxuICAgICAgICAgICAgICAgICAgICAgICAge3NpbGVudDogMX1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkZWxldGVMZW4gPSBkZWxldGVDb3VudDtcbiAgICAgICAgICAgIHdoaWxlIChkZWxldGVMZW4tLSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWxldGVMZW4gPCBpbnNlcnRpb25zTGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gY2hhbmdlU3RhcnQgKyBkZWxldGVMZW47XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW2ldID0gY2hpbGRyZW5DaGFuZ2VzW2ldIHx8IFtdKS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IERhdGFDaGFuZ2VUeXBlLlNFVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKHRoaXMucGFyYW0uaXRlbS5wYXRocy5zbGljZSgwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2hhbmdlLmluc2VydGlvbnNbZGVsZXRlTGVuXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uc2NvcGUuX3NldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmluc2VydGlvbnNbZGVsZXRlTGVuXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2lsZW50OiAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld0NvdW50IDwgMCkge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2VDaGlsZHJlbiA9IGRpc3Bvc2VDaGlsZHJlbi5jb25jYXQodGhpcy5jaGlsZHJlbi5zcGxpY2UoY2hhbmdlU3RhcnQgKyBpbnNlcnRpb25zTGVuLCAtbmV3Q291bnQpKTtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXMuc3BsaWNlKGNoYW5nZVN0YXJ0ICsgaW5zZXJ0aW9uc0xlbiwgLW5ld0NvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld0NvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBzcGxpY2VBcmdzID0gW2NoYW5nZVN0YXJ0ICsgZGVsZXRlQ291bnQsIDBdLmNvbmNhdChuZXcgQXJyYXkobmV3Q291bnQpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZS5hcHBseSh0aGlzLmNoaWxkcmVuLCBzcGxpY2VBcmdzKTtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXMuc3BsaWNlLmFwcGx5KGNoaWxkcmVuQ2hhbmdlcywgc3BsaWNlQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbmV3Q2hpbGRyZW5MZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgIC8vIOagh+iusCBsZW5ndGgg5piv5ZCm5Y+R55Sf5Y+Y5YyWXG4gICAgaWYgKG5ld0NoaWxkcmVuTGVuICE9PSBvbGRDaGlsZHJlbkxlbikge1xuICAgICAgICB2YXIgbGVuZ3RoQ2hhbmdlID0ge1xuICAgICAgICAgICAgdHlwZTogRGF0YUNoYW5nZVR5cGUuU0VULFxuICAgICAgICAgICAgb3B0aW9uOiB7fSxcbiAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW0udmFsdWUucGF0aHMuY29uY2F0KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xlbmd0aCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjaGFuZ2VzSXNJbkRhdGFSZWYoW2xlbmd0aENoYW5nZV0sIHRoaXMuYU5vZGUuaG90c3BvdC5kYXRhKSkge1xuICAgICAgICAgICAgcHVzaFRvQ2hpbGRyZW5DaGFuZ2VzKGxlbmd0aENoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmuIXpmaTlupTor6XlubLmjonnmoQgY2hpbGRcbiAgICB0aGlzLl9kb0NyZWF0ZUFuZFVwZGF0ZSA9IGRvQ3JlYXRlQW5kVXBkYXRlO1xuXG4gICAgLy8g6L+Z6YeM5LiN55SoZ2V0VHJhbnNpdGlvbu+8jGdldFRyYW5zaXRpb27lkoxzY29wZeebuOWFs++8jGZvcuWSjGZvckl0ZW3nmoRzY29wZeaYr+S4jeWQjOeahFxuICAgIC8vIOaJgOS7pWdldFRyYW5zaXRpb27nu5PmnpzmnKzouqvkuZ/mmK/kuI3kuIDoh7TnmoTjgILkuI3lpoLnm7TmjqXliKTmlq3mjIfku6TmmK/lkKblrZjlnKjvvIzlpoLmnpzlrZjlnKjlsLHkuI3ov5vlhaXmmrTlipvmuIXpmaTmqKHlvI9cbiAgICAvLyB2YXIgdmlvbGVudENsZWFyID0gaXNPbmx5UGFyZW50Q2hpbGQgJiYgbmV3Q2hpbGRyZW5MZW4gPT09IDAgJiYgIWVsZW1lbnRHZXRUcmFuc2l0aW9uKG1lKTtcbiAgICB2YXIgdmlvbGVudENsZWFyID0gIW9yaWdpbmFsVXBkYXRlICYmIGlzT25seVBhcmVudENoaWxkICYmIG5ld0NoaWxkcmVuTGVuID09PSAwO1xuXG4gICAgdmFyIGRpc3Bvc2VkQ2hpbGRDb3VudCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXNwb3NlQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRpc3Bvc2VDaGlsZCA9IGRpc3Bvc2VDaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGRpc3Bvc2VDaGlsZCkge1xuICAgICAgICAgICAgZGlzcG9zZUNoaWxkLl9vbmRpc3Bvc2VkID0gY2hpbGREaXNwb3NlZDtcbiAgICAgICAgICAgIGRpc3Bvc2VDaGlsZC5kaXNwb3NlKHZpb2xlbnRDbGVhciwgdmlvbGVudENsZWFyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkRGlzcG9zZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2aW9sZW50Q2xlYXIpIHtcbiAgICAgICAgLy8gY2xvbmVOb2RlICsgcmVwbGFjZUNoaWxkIGlzIGZhc3RlclxuICAgICAgICAvLyBwYXJlbnRFbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdmFyIHJlcGxhY2VOb2RlID0gcGFyZW50RWwuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgcGFyZW50RWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmVwbGFjZU5vZGUsIHBhcmVudEVsKTtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIHJlcGxhY2VOb2RlLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIH1cblxuICAgIGlmIChkaXNwb3NlQ2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRvQ3JlYXRlQW5kVXBkYXRlKCk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjaGlsZERpc3Bvc2VkKCkge1xuICAgICAgICBkaXNwb3NlZENoaWxkQ291bnQrKztcbiAgICAgICAgaWYgKGRpc3Bvc2VkQ2hpbGRDb3VudCA9PT0gZGlzcG9zZUNoaWxkcmVuLmxlbmd0aFxuICAgICAgICAgICAgJiYgZG9DcmVhdGVBbmRVcGRhdGUgPT09IG1lLl9kb0NyZWF0ZUFuZFVwZGF0ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRvQ3JlYXRlQW5kVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb0NyZWF0ZUFuZFVwZGF0ZSgpIHtcbiAgICAgICAgbWUuX2RvQ3JlYXRlQW5kVXBkYXRlID0gbnVsbDtcbiAgICAgICAgaWYgKHZpb2xlbnRDbGVhcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICB2YXIgYmVmb3JlRWwgPSBtZS5lbDtcblxuICAgICAgICAvLyDlr7nnm7jlupTnmoTpobnov5vooYzmm7TmlrBcbiAgICAgICAgaWYgKG9sZENoaWxkcmVuTGVuID09PSAwICYmIGlzT25seVBhcmVudENoaWxkKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0NoaWxkcmVuTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBtZS5jaGlsZHJlbltpXSA9IGNyZWF0ZUZvckRpcmVjdGl2ZUNoaWxkKG1lLCBuZXdMaXN0W2ldLCBpKTtcbiAgICAgICAgICAgICAgICBtZS5jaGlsZHJlbltpXS5hdHRhY2gocGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOS4jWF0dGFjaGVk5YiZ55u05o6l5Yib5bu677yM5aaC5p6c5a2Y5Zyo5YiZ6LCD55So5pu05paw5Ye95pWwXG4gICAgICAgICAgICB2YXIgaiA9IC0xO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdDaGlsZHJlbkxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbWUuY2hpbGRyZW5baV07XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5DaGFuZ2VzW2ldICYmIGNoaWxkLl91cGRhdGUoY2hpbGRyZW5DaGFuZ2VzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqIDwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlRWwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGogPCBuZXdDaGlsZHJlbkxlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0Q2hpbGQgPSBtZS5jaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZUVsID0gbmV4dENoaWxkLnNlbCB8fCBuZXh0Q2hpbGQuZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS5jaGlsZHJlbltpXSA9IGNyZWF0ZUZvckRpcmVjdGl2ZUNoaWxkKG1lLCBuZXdMaXN0W2ldLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgbWUuY2hpbGRyZW5baV0uYXR0YWNoKHBhcmVudEVsLCBiZWZvcmVFbCB8fCBtZS5lbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBGb3JOb2RlO1xuXG5cbi8qKlxuICogQGZpbGUg5riF5rSX5p2h5Lu2IGFOb2RlXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBjcmVhdGVBTm9kZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYS1ub2RlJyk7XG4vLyB2YXIgY2xvbmVEaXJlY3RpdmVzID0gcmVxdWlyZSgnLi4vcGFyc2VyL2Nsb25lLWRpcmVjdGl2ZXMnKTtcblxuXG4vKipcbiAqIOa4hea0l+adoeS7tiBhTm9kZe+8jOi/lOWbnue6r+WHgOaXoOadoeS7tuaMh+S7pOeahCBhTm9kZVxuICpcbiAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOadoeS7tuiKgueCueWvueixoVxuICogQHJldHVybiB7QU5vZGV9XG4gKi9cbmZ1bmN0aW9uIHJpbnNlQ29uZEFOb2RlKGFOb2RlKSB7XG4gICAgdmFyIGNsZWFyQU5vZGUgPSBjcmVhdGVBTm9kZSh7XG4gICAgICAgIGNoaWxkcmVuOiBhTm9kZS5jaGlsZHJlbixcbiAgICAgICAgcHJvcHM6IGFOb2RlLnByb3BzLFxuICAgICAgICBldmVudHM6IGFOb2RlLmV2ZW50cyxcbiAgICAgICAgdGFnTmFtZTogYU5vZGUudGFnTmFtZSxcbiAgICAgICAgdmFyczogYU5vZGUudmFycyxcbiAgICAgICAgaG90c3BvdDogYU5vZGUuaG90c3BvdCxcbiAgICAgICAgZGlyZWN0aXZlczogY2xvbmVEaXJlY3RpdmVzKGFOb2RlLmRpcmVjdGl2ZXMsIHtcbiAgICAgICAgICAgICdpZic6IDEsXG4gICAgICAgICAgICAnZWxzZSc6IDEsXG4gICAgICAgICAgICAnZWxpZic6IDFcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIHJldHVybiBjbGVhckFOb2RlO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByaW5zZUNvbmRBTm9kZTtcblxuXG4vKipcbiAqIEBmaWxlIGlmIOaMh+S7pOiKgueCueexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciByaW5zZUNvbmRBTm9kZSA9IHJlcXVpcmUoJy4vcmluc2UtY29uZC1hbm9kZScpO1xuLy8gdmFyIGNyZWF0ZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1ub2RlJyk7XG4vLyB2YXIgY3JlYXRlUmV2ZXJzZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZXZlcnNlLW5vZGUnKTtcbi8vIHZhciBub2RlT3duQ3JlYXRlU3R1bXAgPSByZXF1aXJlKCcuL25vZGUtb3duLWNyZWF0ZS1zdHVtcCcpO1xuLy8gdmFyIGVsZW1lbnRVcGRhdGVDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC11cGRhdGUtY2hpbGRyZW4nKTtcbi8vIHZhciBub2RlT3duU2ltcGxlRGlzcG9zZSA9IHJlcXVpcmUoJy4vbm9kZS1vd24tc2ltcGxlLWRpc3Bvc2UnKTtcblxuLyoqXG4gKiBpZiDmjIfku6ToioLngrnnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBJZk5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgdGhpcy5hTm9kZSA9IGFOb2RlO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFRcbiAgICAgICAgPyBwYXJlbnRcbiAgICAgICAgOiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuXG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cbiAgICB0aGlzLmNvbmQgPSB0aGlzLmFOb2RlLmRpcmVjdGl2ZXNbJ2lmJ10udmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcbiAgICAgICAgaWYgKGV2YWxFeHByKHRoaXMuY29uZCwgdGhpcy5zY29wZSwgdGhpcy5vd25lcikpIHtcbiAgICAgICAgICAgIHRoaXMuZWxzZUluZGV4ID0gLTE7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuWzBdID0gY3JlYXRlUmV2ZXJzZU5vZGUoXG4gICAgICAgICAgICAgICAgcmluc2VDb25kQU5vZGUoYU5vZGUpLFxuICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXIsXG4gICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgICAgICBlYWNoKGFOb2RlLmVsc2VzLCBmdW5jdGlvbiAoZWxzZUFOb2RlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGlmID0gZWxzZUFOb2RlLmRpcmVjdGl2ZXMuZWxpZjtcblxuICAgICAgICAgICAgICAgIGlmICghZWxpZiB8fCBlbGlmICYmIGV2YWxFeHByKGVsaWYudmFsdWUsIG1lLnNjb3BlLCBtZS5vd25lcikpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuZWxzZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIG1lLmNoaWxkcmVuWzBdID0gY3JlYXRlUmV2ZXJzZU5vZGUoXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5zZUNvbmRBTm9kZShlbHNlQU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5JZk5vZGUucHJvdG90eXBlLm5vZGVUeXBlID0gTm9kZVR5cGUuSUY7XG5cbklmTm9kZS5wcm90b3R5cGUuX2NyZWF0ZSA9IG5vZGVPd25DcmVhdGVTdHVtcDtcbklmTm9kZS5wcm90b3R5cGUuZGlzcG9zZSA9IG5vZGVPd25TaW1wbGVEaXNwb3NlO1xuXG5JZk5vZGUucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHZhciBlbHNlSW5kZXg7XG4gICAgdmFyIGNoaWxkO1xuXG4gICAgaWYgKGV2YWxFeHByKHRoaXMuY29uZCwgdGhpcy5zY29wZSwgdGhpcy5vd25lcikpIHtcbiAgICAgICAgY2hpbGQgPSBjcmVhdGVOb2RlKHJpbnNlQ29uZEFOb2RlKG1lLmFOb2RlKSwgbWUpO1xuICAgICAgICBlbHNlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVhY2gobWUuYU5vZGUuZWxzZXMsIGZ1bmN0aW9uIChlbHNlQU5vZGUsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZWxpZiA9IGVsc2VBTm9kZS5kaXJlY3RpdmVzLmVsaWY7XG5cbiAgICAgICAgICAgIGlmICghZWxpZiB8fCBlbGlmICYmIGV2YWxFeHByKGVsaWYudmFsdWUsIG1lLnNjb3BlLCBtZS5vd25lcikpIHtcbiAgICAgICAgICAgICAgICBjaGlsZCA9IGNyZWF0ZU5vZGUocmluc2VDb25kQU5vZGUoZWxzZUFOb2RlKSwgbWUpO1xuICAgICAgICAgICAgICAgIGVsc2VJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIG1lLmNoaWxkcmVuWzBdID0gY2hpbGQ7XG4gICAgICAgIGNoaWxkLmF0dGFjaChwYXJlbnRFbCwgYmVmb3JlRWwpO1xuICAgICAgICBtZS5lbHNlSW5kZXggPSBlbHNlSW5kZXg7XG4gICAgfVxuXG5cbiAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcbn07XG5cblxuLyoqXG4gKiDop4blm77mm7TmlrDlh73mlbBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5JZk5vZGUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIGNoaWxkQU5vZGUgPSBtZS5hTm9kZTtcbiAgICB2YXIgZWxzZUluZGV4O1xuXG4gICAgaWYgKGV2YWxFeHByKHRoaXMuY29uZCwgdGhpcy5zY29wZSwgdGhpcy5vd25lcikpIHtcbiAgICAgICAgZWxzZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlYWNoKG1lLmFOb2RlLmVsc2VzLCBmdW5jdGlvbiAoZWxzZUFOb2RlLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGVsaWYgPSBlbHNlQU5vZGUuZGlyZWN0aXZlcy5lbGlmO1xuXG4gICAgICAgICAgICBpZiAoZWxpZiAmJiBldmFsRXhwcihlbGlmLnZhbHVlLCBtZS5zY29wZSwgbWUub3duZXIpIHx8ICFlbGlmKSB7XG4gICAgICAgICAgICAgICAgZWxzZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgY2hpbGRBTm9kZSA9IGVsc2VBTm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlbHNlSW5kZXggPT09IG1lLmVsc2VJbmRleCkge1xuICAgICAgICBlbGVtZW50VXBkYXRlQ2hpbGRyZW4obWUsIGNoYW5nZXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbWUuY2hpbGRyZW5bMF07XG4gICAgICAgIG1lLmNoaWxkcmVuID0gW107XG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuX29uZGlzcG9zZWQgPSBuZXdDaGlsZDtcbiAgICAgICAgICAgIGNoaWxkLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld0NoaWxkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5lbHNlSW5kZXggPSBlbHNlSW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3Q2hpbGQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxzZUluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY3JlYXRlTm9kZShyaW5zZUNvbmRBTm9kZShjaGlsZEFOb2RlKSwgbWUpO1xuICAgICAgICAgICAgLy8gdmFyIHBhcmVudEVsID0gZ2V0Tm9kZVN0dW1wUGFyZW50KG1lKTtcbiAgICAgICAgICAgIGNoaWxkLmF0dGFjaChtZS5lbC5wYXJlbnROb2RlLCBtZS5lbCk7XG5cbiAgICAgICAgICAgIG1lLmNoaWxkcmVuWzBdID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBJZk5vZGU7XG5cblxuLyoqXG4gKiBAZmlsZSB0ZW1wbGF0ZSDoioLngrnnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL2xpZmUtY3ljbGUnKTtcbi8vIHZhciBub2RlRGlzcG9zZSA9IHJlcXVpcmUoJy4vbm9kZS1kaXNwb3NlJyk7XG4vLyB2YXIgY3JlYXRlUmV2ZXJzZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZXZlcnNlLW5vZGUnKTtcbi8vIHZhciBlbGVtZW50RGlzcG9zZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LWRpc3Bvc2UtY2hpbGRyZW4nKTtcbi8vIHZhciBlbGVtZW50T3duVG9QaGFzZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tdG8tcGhhc2UnKTtcbi8vIHZhciBlbGVtZW50VXBkYXRlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtdXBkYXRlLWNoaWxkcmVuJyk7XG4vLyB2YXIgbm9kZU93bk9ubHlDaGlsZHJlbkF0dGFjaCA9IHJlcXVpcmUoJy4vbm9kZS1vd24tb25seS1jaGlsZHJlbi1hdHRhY2gnKTtcblxuLyoqXG4gKiB0ZW1wbGF0ZSDoioLngrnnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBUZW1wbGF0ZU5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgdGhpcy5hTm9kZSA9IGFOb2RlO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFRcbiAgICAgICAgPyBwYXJlbnRcbiAgICAgICAgOiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuXG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5zdGFydDtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcbiAgICAgICAgdGhpcy5zZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5zZWwsIHJldmVyc2VXYWxrZXIudGFyZ2V0LCByZXZlcnNlV2Fsa2VyLmN1cnJlbnQpO1xuXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGVhY2godGhpcy5hTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGFOb2RlQ2hpbGQpIHtcbiAgICAgICAgICAgIG1lLmNoaWxkcmVuLnB1c2goY3JlYXRlUmV2ZXJzZU5vZGUoYU5vZGVDaGlsZCwgcmV2ZXJzZVdhbGtlciwgbWUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcblxuICAgICAgICB0aGlzLl90b1BoYXNlKCdhdHRhY2hlZCcpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuXG5cblRlbXBsYXRlTm9kZS5wcm90b3R5cGUubm9kZVR5cGUgPSBOb2RlVHlwZS5UUEw7XG5cblRlbXBsYXRlTm9kZS5wcm90b3R5cGUuYXR0YWNoID0gbm9kZU93bk9ubHlDaGlsZHJlbkF0dGFjaDtcblxuLyoqXG4gKiDplIDmr4Hph4rmlL5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vVHJhbnNpdGlvbiDmmK/lkKbkuI3mmL7npLrov4fmuKHliqjnlLvmlYjmnpxcbiAqL1xuVGVtcGxhdGVOb2RlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKG5vRGV0YWNoLCBub1RyYW5zaXRpb24pIHtcbiAgICBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKHRoaXMsIG5vRGV0YWNoLCBub1RyYW5zaXRpb24pO1xuICAgIG5vZGVEaXNwb3NlKHRoaXMpO1xufTtcblxuXG5UZW1wbGF0ZU5vZGUucHJvdG90eXBlLl90b1BoYXNlID0gZWxlbWVudE93blRvUGhhc2U7XG5cbi8qKlxuICog6KeG5Zu+5pu05paw5Ye95pWwXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuVGVtcGxhdGVOb2RlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICBlbGVtZW50VXBkYXRlQ2hpbGRyZW4odGhpcywgY2hhbmdlcyk7XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBUZW1wbGF0ZU5vZGU7XG5cblxuLyoqXG4gKiBAZmlsZSDlr7nlhYPntKDnmoTlrZDoioLngrnov5vooYzlj43op6NcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBET01DaGlsZHJlbldhbGtlciA9IHJlcXVpcmUoJy4vZG9tLWNoaWxkcmVuLXdhbGtlcicpO1xuLy8gdmFyIGNyZWF0ZVJldmVyc2VOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtcmV2ZXJzZS1ub2RlJyk7XG5cbi8vICNbYmVnaW5dIHJldmVyc2VcblxuLyoqXG4gKiDlr7nlhYPntKDnmoTlrZDoioLngrnov5vooYzlj43op6NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKBcbiAqL1xuZnVuY3Rpb24gcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgdmFyIGh0bWxEaXJlY3RpdmUgPSBlbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXMuaHRtbDtcblxuICAgIGlmICghaHRtbERpcmVjdGl2ZSkge1xuICAgICAgICB2YXIgcmV2ZXJzZVdhbGtlciA9IG5ldyBET01DaGlsZHJlbldhbGtlcihlbGVtZW50LmVsKTtcblxuICAgICAgICBlYWNoKGVsZW1lbnQuYU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChhTm9kZUNoaWxkKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuLnB1c2goY3JlYXRlUmV2ZXJzZU5vZGUoYU5vZGVDaGlsZCwgcmV2ZXJzZVdhbGtlciwgZWxlbWVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbjtcblxuXG4vKipcbiAqIEBmaWxlIOWkhOeQhuWFg+e0oOeahOWxnuaAp+aTjeS9nFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGdldFByb3BIYW5kbGVyID0gcmVxdWlyZSgnLi9nZXQtcHJvcC1oYW5kbGVyJyk7XG5cbi8qKlxuICog5aSE55CG5YWD57Sg5bGe5oCn5pON5L2cXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQg5YWD57Sg5a+56LGhXG4gKiBAcGFyYW0geyp9IHZhbHVlIOWxnuaAp+WAvFxuICogQHBhcmFtIHtPYmplY3R9IHByb3Ag5bGe5oCn5L+h5oGv5a+56LGhXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVByb3AoZWxlbWVudCwgdmFsdWUsIHByb3ApIHtcbiAgICB2YXIgbmFtZSA9IHByb3AubmFtZTtcbiAgICBnZXRQcm9wSGFuZGxlcihlbGVtZW50LnRhZ05hbWUsIG5hbWUpLnByb3AoZWxlbWVudC5lbCwgdmFsdWUsIG5hbWUsIGVsZW1lbnQsIHByb3ApO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBoYW5kbGVQcm9wO1xuXG5cbi8qKlxuICogQGZpbGUg5Yib5bu66IqC54K55a+55bqU55qEIEhUTUxFbGVtZW50IOS4u+WFg+e0oFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIGNyZWF0ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9jcmVhdGUtZWwnKTtcbi8vIHZhciBoYW5kbGVQcm9wID0gcmVxdWlyZSgnLi9oYW5kbGUtcHJvcCcpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcblxudmFyIGVtcHR5UHJvcFdoZW5DcmVhdGUgPSB7XG4gICAgJ2NsYXNzJzogMSxcbiAgICAnc3R5bGUnOiAxLFxuICAgICdpZCc6IDFcbn07XG5cbi8qKlxuICog5Yib5bu66IqC54K55a+55bqU55qEIEhUTUxFbGVtZW50IOS4u+WFg+e0oFxuICovXG5mdW5jdGlvbiBlbGVtZW50T3duQ3JlYXRlKCkge1xuICAgIGlmICghdGhpcy5saWZlQ3ljbGUuY3JlYXRlZCkge1xuICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5wYWludGluZztcblxuICAgICAgICB2YXIgaXNDb21wb25lbnQgPSB0aGlzLm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUO1xuICAgICAgICB2YXIgc291cmNlTm9kZSA9IHRoaXMuYU5vZGUuaG90c3BvdC5zb3VyY2VOb2RlO1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLmFOb2RlLnByb3BzO1xuXG4gICAgICAgIGlmIChzb3VyY2VOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gc291cmNlTm9kZS5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIHByb3BzID0gdGhpcy5hTm9kZS5ob3RzcG90LmR5bmFtaWNQcm9wcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSBjcmVhdGVFbCh0aGlzLnRhZ05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBpc0NvbXBvbmVudFxuICAgICAgICAgICAgICAgID8gZXZhbEV4cHIocHJvcC5leHByLCB0aGlzLmRhdGEsIHRoaXMpXG4gICAgICAgICAgICAgICAgOiBldmFsRXhwcihwcm9wLmV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgfHwgIWVtcHR5UHJvcFdoZW5DcmVhdGVbcHJvcC5uYW1lXSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZVByb3AodGhpcywgdmFsdWUsIHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG9QaGFzZSgnY3JlYXRlZCcpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudE93bkNyZWF0ZTtcblxuXG4vKipcbiAqIEBmaWxlIOWwhuWFg+e0oGF0dGFjaOWIsOmhtemdolxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGNyZWF0ZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1ub2RlJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuXG4vKipcbiAqIOWwhuWFg+e0oGF0dGFjaOWIsOmhtemdolxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOWFg+e0oOiKgueCuVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuZnVuY3Rpb24gZWxlbWVudEF0dGFjaChlbGVtZW50LCBwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICBlbGVtZW50Ll9jcmVhdGUoKTtcbiAgICBpbnNlcnRCZWZvcmUoZWxlbWVudC5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgIGlmICghZWxlbWVudC5fY29udGVudFJlYWR5KSB7XG4gICAgICAgIHZhciBodG1sRGlyZWN0aXZlID0gZWxlbWVudC5hTm9kZS5kaXJlY3RpdmVzLmh0bWw7XG5cbiAgICAgICAgaWYgKGh0bWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZWwuaW5uZXJIVE1MID0gZXZhbEV4cHIoaHRtbERpcmVjdGl2ZS52YWx1ZSwgZWxlbWVudC5zY29wZSwgZWxlbWVudC5vd25lcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgYU5vZGVDaGlsZHJlbiA9IGVsZW1lbnQuYU5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFOb2RlQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVOb2RlKGFOb2RlQ2hpbGRyZW5baV0sIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgY2hpbGQuYXR0YWNoKGVsZW1lbnQuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5fY29udGVudFJlYWR5ID0gMTtcbiAgICB9XG59XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudEF0dGFjaDtcblxuXG4vKipcbiAqIEBmaWxlIOWwhuWFg+e0oGF0dGFjaOWIsOmhtemdolxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgZWxlbWVudEF0dGFjaCA9IHJlcXVpcmUoJy4vZWxlbWVudC1hdHRhY2gnKTtcblxuLyoqXG4gKiDlsIblhYPntKBhdHRhY2jliLDpobXpnaJcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDopoHmt7vliqDliLDnmoTniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnTvvJ19IGJlZm9yZUVsIOimgea3u+WKoOWIsOWTquS4quWFg+e0oOS5i+WJjVxuICovXG5mdW5jdGlvbiBlbGVtZW50T3duQXR0YWNoKHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIGlmICghdGhpcy5saWZlQ3ljbGUuYXR0YWNoZWQpIHtcbiAgICAgICAgZWxlbWVudEF0dGFjaCh0aGlzLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuICAgICAgICB0aGlzLl9hdHRhY2hlZCgpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudE93bkF0dGFjaDtcblxuXG4vKipcbiAqIEBmaWxlIOiOt+WPliBlbGVtZW50IOeahCB0cmFuc2l0aW9uIOaOp+WItuWvueixoVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGV2YWxBcmdzID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWFyZ3MnKTtcbi8vIHZhciBmaW5kTWV0aG9kID0gcmVxdWlyZSgnLi4vcnVudGltZS9maW5kLW1ldGhvZCcpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcblxuLyoqXG4gKiDojrflj5YgZWxlbWVudCDnmoQgdHJhbnNpdGlvbiDmjqfliLblr7nosaFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKBcbiAqIEByZXR1cm4ge09iamVjdD99XG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRHZXRUcmFuc2l0aW9uKGVsZW1lbnQpIHtcbiAgICB2YXIgYU5vZGUgPSBlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUID8gZWxlbWVudC5naXZlbkFOb2RlIDogZWxlbWVudC5hTm9kZTtcbiAgICB2YXIgZGlyZWN0aXZlID0gYU5vZGUgJiYgYU5vZGUuZGlyZWN0aXZlcy50cmFuc2l0aW9uO1xuICAgIHZhciBvd25lciA9IGVsZW1lbnQub3duZXI7XG5cbiAgICB2YXIgdHJhbnNpdGlvbjtcbiAgICBpZiAoZGlyZWN0aXZlICYmIG93bmVyKSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSBmaW5kTWV0aG9kKG93bmVyLCBkaXJlY3RpdmUudmFsdWUubmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5hcHBseShcbiAgICAgICAgICAgICAgICBvd25lcixcbiAgICAgICAgICAgICAgICBldmFsQXJncyhkaXJlY3RpdmUudmFsdWUuYXJncywgZWxlbWVudC5zY29wZSwgb3duZXIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zaXRpb24gfHwgZWxlbWVudC50cmFuc2l0aW9uO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50R2V0VHJhbnNpdGlvbjtcblxuXG4vKipcbiAqIEBmaWxlIOWFg+e0oOiKgueCueaJp+ihjGxlYXZl6KGM5Li6XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWxlbWVudEdldFRyYW5zaXRpb24gPSByZXF1aXJlKCcuL2VsZW1lbnQtZ2V0LXRyYW5zaXRpb24nKTtcblxuXG4vKipcbiAqIOWFg+e0oOiKgueCueaJp+ihjGxlYXZl6KGM5Li6XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQg5YWD57SgXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRMZWF2ZShlbGVtZW50KSB7XG4gICAgdmFyIGxpZmVDeWNsZSA9IGVsZW1lbnQubGlmZUN5Y2xlO1xuICAgIGlmIChsaWZlQ3ljbGUubGVhdmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQuZGlzcG9zZU5vVHJhbnNpdGlvbikge1xuICAgICAgICBlbGVtZW50Ll9kb25lTGVhdmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gZWxlbWVudEdldFRyYW5zaXRpb24oZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHRyYW5zaXRpb24gJiYgdHJhbnNpdGlvbi5sZWF2ZSkge1xuICAgICAgICAgICAgZWxlbWVudC5fdG9QaGFzZSgnbGVhdmluZycpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi5sZWF2ZShlbGVtZW50LmVsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5fZG9uZUxlYXZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuX2RvbmVMZWF2ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50TGVhdmU7XG5cblxuLyoqXG4gKiBAZmlsZSDlsIblhYPntKDku47pobXpnaLkuIrnp7vpmaRcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlbGVtZW50TGVhdmUgPSByZXF1aXJlKCcuL2VsZW1lbnQtbGVhdmUnKTtcblxuLyoqXG4gKiDlsIblhYPntKDku47pobXpnaLkuIrnp7vpmaRcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bkRldGFjaCgpIHtcbiAgICBlbGVtZW50TGVhdmUodGhpcyk7XG59XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudE93bkRldGFjaDtcblxuXG4vKipcbiAqIEBmaWxlIOmUgOavgemHiuaUvuWFg+e0oFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVsZW1lbnRMZWF2ZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1sZWF2ZScpO1xuXG4vKipcbiAqIOmUgOavgemHiuaUvuWFg+e0oFxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vRGV0YWNoIOaYr+WQpuS4jeimgeaKiuiKgueCueS7jmRvbeenu+mZpFxuICogQHBhcmFtIHtib29sZWFuPX0gbm9UcmFuc2l0aW9uIOaYr+WQpuS4jeaYvuekuui/h+a4oeWKqOeUu+aViOaenFxuICovXG5mdW5jdGlvbiBlbGVtZW50T3duRGlzcG9zZShub0RldGFjaCwgbm9UcmFuc2l0aW9uKSB7XG4gICAgdGhpcy5sZWF2ZURpc3Bvc2UgPSAxO1xuICAgIHRoaXMuZGlzcG9zZU5vRGV0YWNoID0gbm9EZXRhY2g7XG4gICAgdGhpcy5kaXNwb3NlTm9UcmFuc2l0aW9uID0gbm9UcmFuc2l0aW9uO1xuXG4gICAgZWxlbWVudExlYXZlKHRoaXMpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duRGlzcG9zZTtcblxuXG4vKipcbiAqIEBmaWxlIOS4uuWFg+e0oOeahCBlbCDnu5Hlrprkuovku7ZcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBvbiA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvb24nKTtcblxuLyoqXG4gKiDkuLrlhYPntKDnmoQgZWwg57uR5a6a5LqL5Lu2XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlmahcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FwdHVyZSDmmK/lkKbmmK/mjZXojrfpmLbmrrXop6blj5FcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bk9uRWwobmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhcHR1cmUgPSAhIWNhcHR1cmU7XG4gICAgICAgIHRoaXMuX2VsRm5zLnB1c2goW25hbWUsIGxpc3RlbmVyLCBjYXB0dXJlXSk7XG4gICAgICAgIG9uKHRoaXMuZWwsIG5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRPd25PbkVsO1xuXG5cbi8qKlxuICogQGZpbGUgIOS6i+S7tue7keWumuS4jeWtmOWcqOeahCB3YXJuaW5nXG4gKiBAYXV0aG9yIHZhcnNoYSh3YW5nc2h1b25wdUBnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcblxuLy8gI1tiZWdpbl0gZXJyb3Jcbi8qKlxuICog5LqL5Lu257uR5a6a5LiN5a2Y5Zyo55qEIHdhcm5pbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRCaW5kIOS6i+S7tue7keWumuWvueixoVxuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnueahOe7hOS7tuWvueixoVxuICovXG5mdW5jdGlvbiB3YXJuRXZlbnRMaXN0ZW5NZXRob2QoZXZlbnRCaW5kLCBvd25lcikge1xuICAgIHZhciB2YWxpZCA9IHRydWU7XG4gICAgdmFyIG1ldGhvZCA9IG93bmVyO1xuICAgIGVhY2goZXZlbnRCaW5kLmV4cHIubmFtZS5wYXRocywgZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgaWYgKCFwYXRoLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2QgPSBtZXRob2RbcGF0aC52YWx1ZV07XG4gICAgICAgIHZhbGlkID0gISFtZXRob2Q7XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9KTtcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgdmFyIHBhdGhzID0gW107XG4gICAgICAgIGVhY2goZXZlbnRCaW5kLmV4cHIubmFtZS5wYXRocywgZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbWVzc2FnZSA9ICdbU0FOIFdBUk5JTkddICcgKyBldmVudEJpbmQubmFtZSArICcgbGlzdGVuIGZhaWwsXCInICsgcGF0aHMuam9pbignLicpICsgJ1wiIG5vdCBleGlzdCc7XG5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgIH1cbn1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB3YXJuRXZlbnRMaXN0ZW5NZXRob2Q7XG5cblxuLyoqXG4gKiBAZmlsZSDlrozmiJDlhYPntKAgYXR0YWNoZWQg5ZCO55qE6KGM5Li6XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBiaW5kID0gcmVxdWlyZSgnLi4vdXRpbC9iaW5kJyk7XG4vLyB2YXIgZW1wdHkgPSByZXF1aXJlKCcuLi91dGlsL2VtcHR5Jyk7XG4vLyB2YXIgaXNCcm93c2VyID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pcy1icm93c2VyJyk7XG4vLyB2YXIgdHJpZ2dlciA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvdHJpZ2dlcicpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBlbGVtZW50R2V0VHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1nZXQtdHJhbnNpdGlvbicpO1xuLy8gdmFyIGV2ZW50RGVjbGFyYXRpb25MaXN0ZW5lciA9IHJlcXVpcmUoJy4vZXZlbnQtZGVjbGFyYXRpb24tbGlzdGVuZXInKTtcbi8vIHZhciBnZXRQcm9wSGFuZGxlciA9IHJlcXVpcmUoJy4vZ2V0LXByb3AtaGFuZGxlcicpO1xuLy8gdmFyIHdhcm5FdmVudExpc3Rlbk1ldGhvZCA9IHJlcXVpcmUoJy4vd2Fybi1ldmVudC1saXN0ZW4tbWV0aG9kJyk7XG5cbi8qKlxuICog5Y+M57uR6L6T5YWl5qGGQ29tcG9zaXRpb25FbmTkuovku7bnm5HlkKzlh73mlbBcbiAqXG4gKiBAaW5uZXJcbiAqL1xuZnVuY3Rpb24gaW5wdXRPbkNvbXBvc2l0aW9uRW5kKCkge1xuICAgIGlmICghdGhpcy5jb21wb3NpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9zaW5nID0gMDtcblxuICAgIHRyaWdnZXIodGhpcywgJ2lucHV0Jyk7XG59XG5cbi8qKlxuICog5Y+M57uR6L6T5YWl5qGGQ29tcG9zaXRpb25TdGFydOS6i+S7tuebkeWQrOWHveaVsFxuICpcbiAqIEBpbm5lclxuICovXG5mdW5jdGlvbiBpbnB1dE9uQ29tcG9zaXRpb25TdGFydCgpIHtcbiAgICB0aGlzLmNvbXBvc2luZyA9IDE7XG59XG5cbmZ1bmN0aW9uIHhQcm9wT3V0cHV0ZXIoeFByb3AsIGRhdGEpIHtcbiAgICBnZXRQcm9wSGFuZGxlcih0aGlzLnRhZ05hbWUsIHhQcm9wLm5hbWUpLm91dHB1dCh0aGlzLCB4UHJvcCwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGlucHV0WFByb3BPdXRwdXRlcihlbGVtZW50LCB4UHJvcCwgZGF0YSkge1xuICAgIHZhciBvdXRwdXRlciA9IGJpbmQoeFByb3BPdXRwdXRlciwgZWxlbWVudCwgeFByb3AsIGRhdGEpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICBvdXRwdXRlcihlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICog5a6M5oiQ5YWD57SgIGF0dGFjaGVkIOWQjueahOihjOS4ulxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOWFg+e0oOiKgueCuVxuICovXG5mdW5jdGlvbiBlbGVtZW50T3duQXR0YWNoZWQoKSB7XG4gICAgdGhpcy5fdG9QaGFzZSgnY3JlYXRlZCcpO1xuXG4gICAgdmFyIGlzQ29tcG9uZW50ID0gdGhpcy5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVDtcbiAgICB2YXIgZGF0YSA9IGlzQ29tcG9uZW50ID8gdGhpcy5kYXRhIDogdGhpcy5zY29wZTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlZGVjbGFyZSAqL1xuXG4gICAgLy8g5aSE55CG6Ieq6Lqr5Y+Y5YyW5pe25Y+M5ZCR57uR5a6a55qE6YC76L6RXG4gICAgdmFyIHhQcm9wcyA9IHRoaXMuYU5vZGUuaG90c3BvdC54UHJvcHM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB4UHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciB4UHJvcCA9IHhQcm9wc1tpXTtcblxuICAgICAgICBzd2l0Y2ggKHhQcm9wLm5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMudGFnTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIgJiYgd2luZG93LkNvbXBvc2l0aW9uRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkVsKCdjaGFuZ2UnLCBpbnB1dE9uQ29tcG9zaXRpb25FbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NvbXBvc2l0aW9uc3RhcnQnLCBpbnB1dE9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25FbCgnY29tcG9zaXRpb25lbmQnLCBpbnB1dE9uQ29tcG9zaXRpb25FbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgnb25pbnB1dCcgaW4gdGhpcy5lbCkgPyAnaW5wdXQnIDogJ3Byb3BlcnR5Y2hhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFhQcm9wT3V0cHV0ZXIodGhpcywgeFByb3AsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25FbCgnY2hhbmdlJywgYmluZCh4UHJvcE91dHB1dGVyLCB0aGlzLCB4UHJvcCwgZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjaGVja2VkJzpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMudGFnTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZWwudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NsaWNrJywgYmluZCh4UHJvcE91dHB1dGVyLCB0aGlzLCB4UHJvcCwgZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGJpbmQgZXZlbnRzXG4gICAgdmFyIGV2ZW50cyA9IGlzQ29tcG9uZW50XG4gICAgICAgID8gdGhpcy5hTm9kZS5ldmVudHMuY29uY2F0KHRoaXMubmF0aXZlRXZlbnRzKVxuICAgICAgICA6IHRoaXMuYU5vZGUuZXZlbnRzO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBldmVudEJpbmQgPSBldmVudHNbaV07XG4gICAgICAgIHZhciBvd25lciA9IGlzQ29tcG9uZW50ID8gdGhpcyA6IHRoaXMub3duZXI7XG5cbiAgICAgICAgLy8g5Yik5pat5piv5ZCm5pivbmF0aXZlRXZlbnTvvIzkuIvpnaLnmoR3YXJu5pa55rOV5ZKM5LqL5Lu257uR5a6a6YO96ZyA6KaBXG4gICAgICAgIC8vIOS+neatpOaMh+WummV2ZW50QmluZC5leHByLm5hbWXkvY3kuo5vd25lcui/mOaYr293bmVyLm93bmVy5LiKXG4gICAgICAgIGlmIChldmVudEJpbmQubW9kaWZpZXIubmF0aXZlKSB7XG4gICAgICAgICAgICBvd25lciA9IG93bmVyLm93bmVyO1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuc2NvcGUgfHwgb3duZXIuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgIHdhcm5FdmVudExpc3Rlbk1ldGhvZChldmVudEJpbmQsIG93bmVyKTtcbiAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgdGhpcy5fb25FbChcbiAgICAgICAgICAgIGV2ZW50QmluZC5uYW1lLFxuICAgICAgICAgICAgYmluZChcbiAgICAgICAgICAgICAgICBldmVudERlY2xhcmF0aW9uTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgb3duZXIsXG4gICAgICAgICAgICAgICAgZXZlbnRCaW5kLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGV2ZW50QmluZC5tb2RpZmllci5jYXB0dXJlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5fdG9QaGFzZSgnYXR0YWNoZWQnKTtcblxuXG4gICAgaWYgKHRoaXMuX2lzSW5pdEZyb21FbCkge1xuICAgICAgICB0aGlzLl9pc0luaXRGcm9tRWwgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gZWxlbWVudEdldFRyYW5zaXRpb24odGhpcyk7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uICYmIHRyYW5zaXRpb24uZW50ZXIpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24uZW50ZXIodGhpcy5lbCwgZW1wdHkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duQXR0YWNoZWQ7XG5cblxuLyoqXG4gKiBAZmlsZSDplIDmr4HlhYPntKDoioLngrlcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIHVuID0gcmVxdWlyZSgnLi4vYnJvd3Nlci91bicpO1xuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vIHZhciBlbGVtZW50RGlzcG9zZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LWRpc3Bvc2UtY2hpbGRyZW4nKTtcbi8vIHZhciBub2RlRGlzcG9zZSA9IHJlcXVpcmUoJy4vbm9kZS1kaXNwb3NlJyk7XG5cbi8qKlxuICog6ZSA5q+B5YWD57Sg6IqC54K5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQg6KaB6ZSA5q+B55qE5YWD57Sg6IqC54K5XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnMg6ZSA5q+B6KGM5Li655qE5Y+C5pWwXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnREaXNwb3NlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKGVsZW1lbnQsIDEsIDEpO1xuXG4gICAgLy8gZWwg5LqL5Lu26Kej57uRXG4gICAgdmFyIGxlbiA9IGVsZW1lbnQuX2VsRm5zLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgdmFyIGZuID0gZWxlbWVudC5fZWxGbnNbbGVuXTtcbiAgICAgICAgdW4oZWxlbWVudC5lbCwgZm5bMF0sIGZuWzFdLCBmblsyXSk7XG4gICAgfVxuICAgIGVsZW1lbnQuX2VsRm5zID0gbnVsbDtcblxuXG4gICAgLy8g5aaC5p6c5rKh5pyJcGFyZW5077yM6K+05piO5piv5LiA5Liqcm9vdCBjb21wb25lbnTvvIzkuIDlrpropoHku45kb23moJHkuK1yZW1vdmVcbiAgICBpZiAoIWVsZW1lbnQuZGlzcG9zZU5vRGV0YWNoIHx8ICFlbGVtZW50LnBhcmVudCkge1xuICAgICAgICByZW1vdmVFbChlbGVtZW50LmVsKTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5fdG9QaGFzZSkge1xuICAgICAgICBlbGVtZW50Ll90b1BoYXNlKCdkZXRhY2hlZCcpO1xuICAgIH1cblxuICAgIG5vZGVEaXNwb3NlKGVsZW1lbnQpO1xufVxuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnREaXNwb3NlO1xuXG5cbi8qKlxuICogQGZpbGUg5Yid5aeL5YyWIGVsZW1lbnQg6IqC54K555qEIHRhZ05hbWUg5aSE55CGXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgaWVPbGRUaGFuOSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaWUtb2xkLXRoYW4tOScpO1xuXG4vKipcbiAqIOWIneWni+WMliBlbGVtZW50IOiKgueCueeahCB0YWdOYW1lIOWkhOeQhlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIOiKgueCueWvueixoVxuICovXG5mdW5jdGlvbiBlbGVtZW50SW5pdFRhZ05hbWUobm9kZSkge1xuICAgIG5vZGUudGFnTmFtZSA9IG5vZGUudGFnTmFtZSB8fCBub2RlLmFOb2RlLnRhZ05hbWUgfHwgJ2Rpdic7XG5cbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIC8vIGllOC0g5LiN5pSv5oyBaW5uZXJIVE1M6L6T5Ye66Ieq5a6a5LmJ5qCH562+XG4gICAgaWYgKGllT2xkVGhhbjkgJiYgbm9kZS50YWdOYW1lLmluZGV4T2YoJy0nKSA+IDApIHtcbiAgICAgICAgbm9kZS50YWdOYW1lID0gJ2Rpdic7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRJbml0VGFnTmFtZTtcblxuXG4vKipcbiAqIEBmaWxlIOe7mSBkZXZ0b29sIOWPkemAmuefpea2iOaBr1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGlzQnJvd3NlciA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaXMtYnJvd3NlcicpO1xuXG4vLyAjW2JlZ2luXSBkZXZ0b29sXG52YXIgc2FuNGRldnRvb2w7XG5cbi8qKlxuICog57uZIGRldnRvb2wg5Y+R6YCa55+l5raI5oGvXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5raI5oGv5ZCN56ewXG4gKiBAcGFyYW0geyp9IGFyZyDmtojmga/lj4LmlbBcbiAqL1xuZnVuY3Rpb24gZW1pdERldnRvb2wobmFtZSwgYXJnKSB7XG4gICAgaWYgKGlzQnJvd3NlciAmJiBzYW40ZGV2dG9vbCAmJiBzYW40ZGV2dG9vbC5kZWJ1ZyAmJiB3aW5kb3cuX19zYW5fZGV2dG9vbF9fKSB7XG4gICAgICAgIHdpbmRvdy5fX3Nhbl9kZXZ0b29sX18uZW1pdChuYW1lLCBhcmcpO1xuICAgIH1cbn1cblxuZW1pdERldnRvb2wuc3RhcnQgPSBmdW5jdGlvbiAobWFpbikge1xuICAgIHNhbjRkZXZ0b29sID0gbWFpbjtcbiAgICBlbWl0RGV2dG9vbCgnc2FuJywgbWFpbik7XG59O1xuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVtaXREZXZ0b29sO1xuXG5cbi8qKlxuICogQGZpbGUg57uE5Lu257G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgYmluZCA9IHJlcXVpcmUoJy4uL3V0aWwvYmluZCcpO1xuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgZXh0ZW5kID0gcmVxdWlyZSgnLi4vdXRpbC9leHRlbmQnKTtcbi8vIHZhciBuZXh0VGljayA9IHJlcXVpcmUoJy4uL3V0aWwvbmV4dC10aWNrJyk7XG4vLyB2YXIgZW1pdERldnRvb2wgPSByZXF1aXJlKCcuLi91dGlsL2VtaXQtZGV2dG9vbCcpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4uL3BhcnNlci9wYXJzZS1leHByJyk7XG4vLyB2YXIgY3JlYXRlQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9wYXJzZXIvY3JlYXRlLWFjY2Vzc29yJyk7XG4vLyB2YXIgcG9zdFByb3AgPSByZXF1aXJlKCcuLi9wYXJzZXIvcG9zdC1wcm9wJyk7XG4vLyB2YXIgcmVtb3ZlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gdmFyIERhdGEgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgY2hhbmdlRXhwckNvbXBhcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZS1leHByLWNvbXBhcmUnKTtcbi8vIHZhciBjb21waWxlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21waWxlLWNvbXBvbmVudCcpO1xuLy8gdmFyIGNvbXBvbmVudFByZWhlYXQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC1wcmVoZWF0Jyk7XG4vLyB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi9saWZlLWN5Y2xlJyk7XG4vLyB2YXIgZ2V0QU5vZGVQcm9wID0gcmVxdWlyZSgnLi9nZXQtYS1ub2RlLXByb3AnKTtcbi8vIHZhciBpc0RhdGFDaGFuZ2VCeUVsZW1lbnQgPSByZXF1aXJlKCcuL2lzLWRhdGEtY2hhbmdlLWJ5LWVsZW1lbnQnKTtcbi8vIHZhciBldmVudERlY2xhcmF0aW9uTGlzdGVuZXIgPSByZXF1aXJlKCcuL2V2ZW50LWRlY2xhcmF0aW9uLWxpc3RlbmVyJyk7XG4vLyB2YXIgcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vcmV2ZXJzZS1lbGVtZW50LWNoaWxkcmVuJyk7XG4vLyB2YXIgY2FtZWxDb21wb25lbnRCaW5kcyA9IHJlcXVpcmUoJy4vY2FtZWwtY29tcG9uZW50LWJpbmRzJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIGVsZW1lbnRJbml0VGFnTmFtZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1pbml0LXRhZy1uYW1lJyk7XG4vLyB2YXIgZWxlbWVudE93bkF0dGFjaGVkID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1hdHRhY2hlZCcpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlID0gcmVxdWlyZSgnLi9lbGVtZW50LWRpc3Bvc2UnKTtcbi8vIHZhciBlbGVtZW50VXBkYXRlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtdXBkYXRlLWNoaWxkcmVuJyk7XG4vLyB2YXIgZWxlbWVudE93bk9uRWwgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLW9uLWVsJyk7XG4vLyB2YXIgZWxlbWVudE93bkNyZWF0ZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tY3JlYXRlJyk7XG4vLyB2YXIgZWxlbWVudE93bkF0dGFjaCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tYXR0YWNoJyk7XG4vLyB2YXIgZWxlbWVudE93bkRldGFjaCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tZGV0YWNoJyk7XG4vLyB2YXIgZWxlbWVudE93bkRpc3Bvc2UgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWRpc3Bvc2UnKTtcbi8vIHZhciB3YXJuRXZlbnRMaXN0ZW5NZXRob2QgPSByZXF1aXJlKCcuL3dhcm4tZXZlbnQtbGlzdGVuLW1ldGhvZCcpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuLy8gdmFyIGVsZW1lbnRBdHRhY2ggPSByZXF1aXJlKCcuL2VsZW1lbnQtYXR0YWNoJyk7XG4vLyB2YXIgaGFuZGxlUHJvcCA9IHJlcXVpcmUoJy4vaGFuZGxlLXByb3AnKTtcbi8vIHZhciBjcmVhdGVEYXRhVHlwZXNDaGVja2VyID0gcmVxdWlyZSgnLi4vdXRpbC9jcmVhdGUtZGF0YS10eXBlcy1jaGVja2VyJyk7XG5cblxuXG4vKipcbiAqIOe7hOS7tuexu1xuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMg5Yid5aeL5YyW5Y+C5pWwXG4gKi9cbmZ1bmN0aW9uIENvbXBvbmVudChvcHRpb25zKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLnN0YXJ0O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9lbEZucyA9IFtdO1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5zbG90Q2hpbGRyZW4gPSBbXTtcblxuICAgIHZhciBjbGF6eiA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICB0aGlzLmZpbHRlcnMgPSB0aGlzLmZpbHRlcnMgfHwgY2xhenouZmlsdGVycyB8fCB7fTtcbiAgICB0aGlzLmNvbXB1dGVkID0gdGhpcy5jb21wdXRlZCB8fCBjbGF6ei5jb21wdXRlZCB8fCB7fTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcyB8fCBjbGF6ei5tZXNzYWdlcyB8fCB7fTtcbiAgICB0aGlzLnN1YlRhZyA9IG9wdGlvbnMuc3ViVGFnO1xuXG4gICAgLy8gY29tcGlsZVxuICAgIGNvbXBpbGVDb21wb25lbnQoY2xhenopO1xuICAgIGNvbXBvbmVudFByZWhlYXQoY2xhenopO1xuXG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgcHJvdG9BTm9kZSA9IGNsYXp6LnByb3RvdHlwZS5hTm9kZTtcblxuICAgIG1lLmdpdmVuQU5vZGUgPSBvcHRpb25zLmFOb2RlO1xuICAgIG1lLmdpdmVuTmFtZWRTbG90QmluZHMgPSBbXTtcbiAgICBtZS5naXZlblNsb3RzID0ge1xuICAgICAgICBuYW1lZDoge31cbiAgICB9O1xuXG4gICAgdGhpcy5vd25lciA9IG9wdGlvbnMub3duZXI7XG4gICAgdGhpcy5zY29wZSA9IG9wdGlvbnMuc2NvcGU7XG4gICAgdGhpcy5lbCA9IG9wdGlvbnMuZWw7XG5cbiAgICB2YXIgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFRcbiAgICAgICAgICAgID8gcGFyZW50XG4gICAgICAgICAgICA6IHBhcmVudCAmJiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHRoaXMuaWQgPSBndWlkKCk7XG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHRoaXMuZWwpIHtcbiAgICAgICAgdmFyIGZpcnN0Q29tbWVudE5vZGUgPSB0aGlzLmVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGlmIChmaXJzdENvbW1lbnROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICBmaXJzdENvbW1lbnROb2RlID0gZmlyc3RDb21tZW50Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdENvbW1lbnROb2RlICYmIGZpcnN0Q29tbWVudE5vZGUubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgIHZhciBzdHVtcE1hdGNoID0gZmlyc3RDb21tZW50Tm9kZS5kYXRhLm1hdGNoKC9eXFxzKnMtZGF0YTooW1xcc1xcU10rKT8kLyk7XG4gICAgICAgICAgICBpZiAoc3R1bXBNYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHVtcFRleHQgPSBzdHVtcE1hdGNoWzFdO1xuXG4gICAgICAgICAgICAgICAgLy8gZmlsbCBjb21wb25lbnQgZGF0YVxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IChuZXcgRnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICdyZXR1cm4gJyArIHN0dW1wVGV4dC5yZXBsYWNlKC9eW1xcc1xcbl0qLywgJycpXG4gICAgICAgICAgICAgICAgKSkoKTtcblxuICAgICAgICAgICAgICAgIGlmIChmaXJzdENvbW1lbnROb2RlLnByZXZpb3VzU2libGluZykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVFbChmaXJzdENvbW1lbnROb2RlLnByZXZpb3VzU2libGluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbW92ZUVsKGZpcnN0Q29tbWVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgLy8gbmF0aXZl5LqL5Lu25pWw57uEXG4gICAgdGhpcy5uYXRpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmICh0aGlzLmdpdmVuQU5vZGUpIHtcbiAgICAgICAgLy8g57uE5Lu26L+Q6KGM5pe25Lyg5YWl55qE57uT5p6E77yM5YGac2xvdOino+aekFxuICAgICAgICB0aGlzLl9jcmVhdGVHaXZlblNsb3RzKCk7XG5cbiAgICAgICAgZWFjaCh0aGlzLmdpdmVuQU5vZGUuZXZlbnRzLCBmdW5jdGlvbiAoZXZlbnRCaW5kKSB7XG4gICAgICAgICAgICAvLyDkv53lrZjlvZPliY3lrp7kvovnmoRuYXRpdmXkuovku7bvvIzkuIvpnaLliJvlu7phTm9kZeaXtuWAmeWBmuWQiOW5tlxuICAgICAgICAgICAgaWYgKGV2ZW50QmluZC5tb2RpZmllci5uYXRpdmUpIHtcbiAgICAgICAgICAgICAgICBtZS5uYXRpdmVFdmVudHMucHVzaChldmVudEJpbmQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgIHdhcm5FdmVudExpc3Rlbk1ldGhvZChldmVudEJpbmQsIG9wdGlvbnMub3duZXIpO1xuICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgIG1lLm9uKFxuICAgICAgICAgICAgICAgIGV2ZW50QmluZC5uYW1lLFxuICAgICAgICAgICAgICAgIGJpbmQoZXZlbnREZWNsYXJhdGlvbkxpc3RlbmVyLCBvcHRpb25zLm93bmVyLCBldmVudEJpbmQsIDEsIG9wdGlvbnMuc2NvcGUpLFxuICAgICAgICAgICAgICAgIGV2ZW50QmluZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50YWdOYW1lID0gcHJvdG9BTm9kZS50YWdOYW1lIHx8IG1lLmdpdmVuQU5vZGUudGFnTmFtZTtcbiAgICAgICAgdGhpcy5iaW5kcyA9IGNhbWVsQ29tcG9uZW50QmluZHModGhpcy5naXZlbkFOb2RlLnByb3BzKTtcbiAgICB9XG5cbiAgICB0aGlzLl90b1BoYXNlKCdjb21waWxlZCcpO1xuXG4gICAgLy8gaW5pdCBkYXRhXG4gICAgdGhpcy5kYXRhID0gbmV3IERhdGEoXG4gICAgICAgIGV4dGVuZChcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLmluaXREYXRhID09PSAnZnVuY3Rpb24nICYmIHRoaXMuaW5pdERhdGEoKSB8fCB7fSxcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YVxuICAgICAgICApXG4gICAgKTtcblxuICAgIGVsZW1lbnRJbml0VGFnTmFtZSh0aGlzKTtcblxuICAgIGVhY2godGhpcy5iaW5kcywgZnVuY3Rpb24gKGJpbmQpIHtcbiAgICAgICAgcG9zdFByb3AoYmluZCk7XG5cbiAgICAgICAgaWYgKG1lLnNjb3BlKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBldmFsRXhwcihiaW5kLmV4cHIsIG1lLnNjb3BlLCBtZS5vd25lcik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Vjb21mZS9zYW4vaXNzdWVzLzE5MVxuICAgICAgICAgICAgICAgIG1lLmRhdGEuc2V0KGJpbmQubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIC8vIOWcqOWIneWni+WMliArIOaVsOaNrue7keWumuWQju+8jOW8gOWni+aVsOaNruagoemqjFxuICAgIC8vIE5PVEU6IOWPquWcqOW8gOWPkeeJiOacrOS4rei/m+ihjOWxnuaAp+agoemqjFxuICAgIHZhciBkYXRhVHlwZXMgPSB0aGlzLmRhdGFUeXBlcyB8fCBjbGF6ei5kYXRhVHlwZXM7XG4gICAgaWYgKGRhdGFUeXBlcykge1xuICAgICAgICB2YXIgZGF0YVR5cGVDaGVja2VyID0gY3JlYXRlRGF0YVR5cGVzQ2hlY2tlcihcbiAgICAgICAgICAgIGRhdGFUeXBlcyxcbiAgICAgICAgICAgIHRoaXMuc3ViVGFnIHx8IHRoaXMubmFtZSB8fCBjbGF6ei5uYW1lXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZGF0YS5zZXRUeXBlQ2hlY2tlcihkYXRhVHlwZUNoZWNrZXIpO1xuICAgICAgICB0aGlzLmRhdGEuY2hlY2tEYXRhVHlwZXMoKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICB0aGlzLmNvbXB1dGVkRGVwcyA9IHt9O1xuICAgIC8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xuICAgIGZvciAodmFyIGV4cHIgaW4gdGhpcy5jb21wdXRlZCkge1xuICAgICAgICBpZiAoIXRoaXMuY29tcHV0ZWREZXBzW2V4cHJdKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxjQ29tcHV0ZWQoZXhwcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSBndWFyZC1mb3ItaW4gKi9cblxuICAgIGlmICghdGhpcy5kYXRhQ2hhbmdlcikge1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VyID0gYmluZCh0aGlzLl9kYXRhQ2hhbmdlciwgdGhpcyk7XG4gICAgICAgIHRoaXMuZGF0YS5saXN0ZW4odGhpcy5kYXRhQ2hhbmdlcik7XG4gICAgfVxuICAgIHRoaXMuX3RvUGhhc2UoJ2luaXRlZCcpO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmICh0aGlzLmVsKSB7XG4gICAgICAgIHJldmVyc2VFbGVtZW50Q2hpbGRyZW4odGhpcyk7XG4gICAgICAgIHRoaXMuX2F0dGFjaGVkKCk7XG4gICAgfVxuXG4gICAgdmFyIHdhbGtlciA9IG9wdGlvbnMucmV2ZXJzZVdhbGtlcjtcbiAgICBpZiAod2Fsa2VyKSB7XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHdhbGtlci5jdXJyZW50O1xuICAgICAgICBpZiAoY3VycmVudE5vZGUgJiYgY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIHdhbGtlci5nb05leHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldmVyc2VFbGVtZW50Q2hpbGRyZW4odGhpcyk7XG5cbiAgICAgICAgdGhpcy5fYXR0YWNoZWQoKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmdldENvbXBvbmVudFR5cGUgPSBmdW5jdGlvbiAoYU5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW2FOb2RlLnRhZ05hbWVdO1xufTtcblxuLyoqXG4gKiDliJ3lp4vljJbliJvlu7rnu4Tku7blpJbpg6jkvKDlhaXnmoTmj5Lmp73lr7nosaFcbiAqXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX2NyZWF0ZUdpdmVuU2xvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBtZS5naXZlblNsb3RzLm5hbWVkID0ge307XG5cbiAgICAvLyDnu4Tku7bov5DooYzml7bkvKDlhaXnmoTnu5PmnoTvvIzlgZpzbG906Kej5p6QXG4gICAgbWUuZ2l2ZW5BTm9kZSAmJiBtZS5zY29wZSAmJiBlYWNoKG1lLmdpdmVuQU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB2YXIgdGFyZ2V0O1xuXG4gICAgICAgIHZhciBzbG90QmluZCA9ICFjaGlsZC50ZXh0RXhwciAmJiBnZXRBTm9kZVByb3AoY2hpbGQsICdzbG90Jyk7XG4gICAgICAgIGlmIChzbG90QmluZCkge1xuICAgICAgICAgICAgIW1lLmdpdmVuU2xvdEluaXRlZCAmJiBtZS5naXZlbk5hbWVkU2xvdEJpbmRzLnB1c2goc2xvdEJpbmQpO1xuXG4gICAgICAgICAgICB2YXIgc2xvdE5hbWUgPSBldmFsRXhwcihzbG90QmluZC5leHByLCBtZS5zY29wZSwgbWUub3duZXIpO1xuICAgICAgICAgICAgdGFyZ2V0ID0gbWUuZ2l2ZW5TbG90cy5uYW1lZFtzbG90TmFtZV07XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IG1lLmdpdmVuU2xvdHMubmFtZWRbc2xvdE5hbWVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW1lLmdpdmVuU2xvdEluaXRlZCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbWUuZ2l2ZW5TbG90cy5ub25hbWU7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IG1lLmdpdmVuU2xvdHMubm9uYW1lID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQgJiYgdGFyZ2V0LnB1c2goY2hpbGQpO1xuICAgIH0pO1xuXG4gICAgbWUuZ2l2ZW5TbG90SW5pdGVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICog57G75Z6L5qCH6K+GXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5ub2RlVHlwZSA9IE5vZGVUeXBlLkNNUFQ7XG5cbi8qKlxuICog5Zyo5LiL5LiA5Liq5pu05paw5ZGo5pyf6L+Q6KGM5Ye95pWwXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g6KaB6L+Q6KGM55qE5Ye95pWwXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUubmV4dFRpY2sgPSBuZXh0VGljaztcblxuLyogZXNsaW50LWRpc2FibGUgb3BlcmF0b3ItbGluZWJyZWFrICovXG4vKipcbiAqIOS9v+iKgueCueWIsOi+vuebuOW6lOeahOeUn+WRveWRqOacn1xuICpcbiAqIEBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOeUn+WRveWRqOacn+WQjeensFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9jYWxsSG9vayA9XG5Db21wb25lbnQucHJvdG90eXBlLl90b1BoYXNlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoIXRoaXMubGlmZUN5Y2xlW25hbWVdKSB7XG4gICAgICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlW25hbWVdIHx8IHRoaXMubGlmZUN5Y2xlO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmAmuefpWRldnRvb2xcbiAgICAgICAgLy8gI1tiZWdpbl0gZGV2dG9vbFxuICAgICAgICBlbWl0RGV2dG9vbCgnY29tcC0nICsgbmFtZSwgdGhpcyk7XG4gICAgICAgIC8vICNbZW5kXVxuICAgIH1cbn07XG4vKiBlc2xpbnQtZW5hYmxlIG9wZXJhdG9yLWxpbmVicmVhayAqL1xuXG5cbi8qKlxuICog5re75Yqg5LqL5Lu255uR5ZCs5ZmoXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlmahcbiAqIEBwYXJhbSB7c3RyaW5nP30gZGVjbGFyYXRpb24g5aOw5piO5byPXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIsIGRlY2xhcmF0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW25hbWVdLnB1c2goe2ZuOiBsaXN0ZW5lciwgZGVjbGFyYXRpb246IGRlY2xhcmF0aW9ufSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDnp7vpmaTkuovku7bnm5HlkKzlmahcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDkuovku7blkI1cbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBsaXN0ZW5lciDnm5HlkKzlmahcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS51biA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lcikge1xuICAgIHZhciBuYW1lTGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbbmFtZV07XG4gICAgdmFyIGxlbiA9IG5hbWVMaXN0ZW5lcnMgJiYgbmFtZUxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lciB8fCBsaXN0ZW5lciA9PT0gbmFtZUxpc3RlbmVyc1tsZW5dLmZuKSB7XG4gICAgICAgICAgICBuYW1lTGlzdGVuZXJzLnNwbGljZShsZW4sIDEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vKipcbiAqIOa0vuWPkeS6i+S7tlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOS6i+S7tuWQjVxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IOS6i+S7tuWvueixoVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAobmFtZSwgZXZlbnQpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIGVhY2godGhpcy5saXN0ZW5lcnNbbmFtZV0sIGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lci5mbi5jYWxsKG1lLCBldmVudCk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIOiuoeeulyBjb21wdXRlZCDlsZ7mgKfnmoTlgLxcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXB1dGVkRXhwciBjb21wdXRlZOihqOi+vuW8j+S4slxuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9jYWxjQ29tcHV0ZWQgPSBmdW5jdGlvbiAoY29tcHV0ZWRFeHByKSB7XG4gICAgdmFyIGNvbXB1dGVkRGVwcyA9IHRoaXMuY29tcHV0ZWREZXBzW2NvbXB1dGVkRXhwcl07XG4gICAgaWYgKCFjb21wdXRlZERlcHMpIHtcbiAgICAgICAgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNbY29tcHV0ZWRFeHByXSA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuZGF0YS5zZXQoY29tcHV0ZWRFeHByLCB0aGlzLmNvbXB1dGVkW2NvbXB1dGVkRXhwcl0uY2FsbCh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGdldDogYmluZChmdW5jdGlvbiAoZXhwcikge1xuICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgaWYgKCFleHByKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gY2FsbCBnZXQgbWV0aG9kIGluIGNvbXB1dGVkIG5lZWQgYXJndW1lbnQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbXB1dGVkRGVwc1tleHByXSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlZERlcHNbZXhwcl0gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbXB1dGVkW2V4cHJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWxjQ29tcHV0ZWQoZXhwcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhdGNoKGV4cHIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbGNDb21wdXRlZChjb21wdXRlZEV4cHIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmdldChleHByKTtcbiAgICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgIH1cbiAgICB9KSk7XG59O1xuXG4vKipcbiAqIOa0vuWPkea2iOaBr1xuICog57uE5Lu25Y+v5Lul5rS+5Y+R5raI5oGv77yM5raI5oGv5bCG5rK/552A57uE5Lu25qCR5ZCR5LiK5Lyg6YCS77yM55u05Yiw6YGH5LiK56ys5LiA5Liq5aSE55CG5raI5oGv55qE57uE5Lu2XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5raI5oGv5ZCN56ewXG4gKiBAcGFyYW0geyo/fSB2YWx1ZSDmtojmga/lgLxcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBwYXJlbnRDb21wb25lbnQgPSB0aGlzLnBhcmVudENvbXBvbmVudDtcblxuICAgIHdoaWxlIChwYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gcGFyZW50Q29tcG9uZW50Lm1lc3NhZ2VzW25hbWVdIHx8IHBhcmVudENvbXBvbmVudC5tZXNzYWdlc1snKiddO1xuICAgICAgICBpZiAodHlwZW9mIHJlY2VpdmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZWNlaXZlci5jYWxsKFxuICAgICAgICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICB7dGFyZ2V0OiB0aGlzLCB2YWx1ZTogdmFsdWUsIG5hbWU6IG5hbWV9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRDb21wb25lbnQgPSBwYXJlbnRDb21wb25lbnQucGFyZW50Q29tcG9uZW50O1xuICAgIH1cbn07XG5cbi8qKlxuICog6I635Y+W57uE5Lu25YaF6YOo55qEIHNsb3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZz19IG5hbWUgc2xvdOWQjeensO+8jOepuuS4umRlZmF1bHQgc2xvdFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuc2xvdCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjaGlsZHJlblRyYXZlcnNhbChjaGlsZHJlbikge1xuICAgICAgICBlYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuU0xPVCAmJiBjaGlsZC5vd25lciA9PT0gbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaXNOYW1lZCAmJiBjaGlsZC5uYW1lID09PSBuYW1lXG4gICAgICAgICAgICAgICAgICAgIHx8ICFjaGlsZC5pc05hbWVkICYmICFuYW1lXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblRyYXZlcnNhbChjaGlsZC5jaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoaWxkcmVuVHJhdmVyc2FsKHRoaXMuY2hpbGRyZW4pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIOiOt+WPluW4puaciSBzYW4tcmVmIOaMh+S7pOeahOWtkOe7hOS7tuW8leeUqFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOWtkOe7hOS7tueahOW8leeUqOWQjVxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHJlZlRhcmdldDtcbiAgICB2YXIgb3duZXIgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBlbGVtZW50VHJhdmVyc2FsKGNoaWxkKTtcbiAgICAgICAgICAgIHJldHVybiAhcmVmVGFyZ2V0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbGVtZW50VHJhdmVyc2FsKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG5vZGVUeXBlID0gZWxlbWVudC5ub2RlVHlwZTtcbiAgICAgICAgaWYgKG5vZGVUeXBlID09PSBOb2RlVHlwZS5URVhUKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudC5vd25lciA9PT0gb3duZXIpIHtcbiAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICBzd2l0Y2ggKGVsZW1lbnQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIE5vZGVUeXBlLkVMRU06XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcikgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldCA9IGVsZW1lbnQuZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIE5vZGVUeXBlLkNNUFQ6XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGVsZW1lbnQuZ2l2ZW5BTm9kZS5kaXJlY3RpdmVzLnJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiBldmFsRXhwcihyZWYudmFsdWUsIGVsZW1lbnQuc2NvcGUsIG93bmVyKSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAhcmVmVGFyZ2V0ICYmIGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuc2xvdENoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgICFyZWZUYXJnZXQgJiYgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgY2hpbGRyZW5UcmF2ZXJzYWwodGhpcy5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gcmVmVGFyZ2V0O1xufTtcblxuXG4vKipcbiAqIOinhuWbvuabtOaWsOWHveaVsFxuICpcbiAqIEBwYXJhbSB7QXJyYXk/fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5Db21wb25lbnQucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGlmICh0aGlzLmxpZmVDeWNsZS5kaXNwb3NlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1lID0gdGhpcztcblxuXG4gICAgdmFyIG5lZWRSZWxvYWRGb3JTbG90ID0gZmFsc2U7XG4gICAgdGhpcy5fbm90aWZ5TmVlZFJlbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmVlZFJlbG9hZEZvclNsb3QgPSB0cnVlO1xuICAgIH07XG5cbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICBlYWNoKGNoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VFeHByID0gY2hhbmdlLmV4cHI7XG5cbiAgICAgICAgICAgIGVhY2gobWUuYmluZHMsIGZ1bmN0aW9uIChiaW5kSXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciByZWxhdGlvbjtcbiAgICAgICAgICAgICAgICB2YXIgc2V0RXhwciA9IGJpbmRJdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgdmFyIHVwZGF0ZUV4cHIgPSBiaW5kSXRlbS5leHByO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0RhdGFDaGFuZ2VCeUVsZW1lbnQoY2hhbmdlLCBtZSwgc2V0RXhwcilcbiAgICAgICAgICAgICAgICAgICAgJiYgKHJlbGF0aW9uID0gY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgdXBkYXRlRXhwciwgbWUuc2NvcGUpKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpb24gPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFeHByID0gY3JlYXRlQWNjZXNzb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2V0RXhwclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5jb25jYXQoY2hhbmdlRXhwci5wYXRocy5zbGljZSh1cGRhdGVFeHByLnBhdGhzLmxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVFeHByID0gY2hhbmdlRXhwcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lLmRhdGEuc2V0KHNldEV4cHIsIGV2YWxFeHByKHVwZGF0ZUV4cHIsIG1lLnNjb3BlLCBtZS5vd25lciksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtZS5vd25lci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZWFjaChtZS5naXZlbk5hbWVkU2xvdEJpbmRzLCBmdW5jdGlvbiAoYmluZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBuZWVkUmVsb2FkRm9yU2xvdCA9IG5lZWRSZWxvYWRGb3JTbG90IHx8IGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIGJpbmRJdGVtLmV4cHIsIG1lLnNjb3BlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gIW5lZWRSZWxvYWRGb3JTbG90O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChuZWVkUmVsb2FkRm9yU2xvdCkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlR2l2ZW5TbG90cygpO1xuICAgICAgICAgICAgdGhpcy5fcmVwYWludENoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2xvdENoaWxkcmVuTGVuID0gdGhpcy5zbG90Q2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKHNsb3RDaGlsZHJlbkxlbi0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsb3RDaGlsZCA9IHRoaXMuc2xvdENoaWxkcmVuW3Nsb3RDaGlsZHJlbkxlbl07XG5cbiAgICAgICAgICAgICAgICBpZiAoc2xvdENoaWxkLmxpZmVDeWNsZS5kaXNwb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsb3RDaGlsZHJlbi5zcGxpY2Uoc2xvdENoaWxkcmVuTGVuLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2xvdENoaWxkLmlzSW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdENoaWxkLl91cGRhdGUoY2hhbmdlcywgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRhdGFDaGFuZ2VzID0gdGhpcy5kYXRhQ2hhbmdlcztcbiAgICBpZiAoZGF0YUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlcyA9IG51bGw7XG4gICAgICAgIGVhY2godGhpcy5hTm9kZS5ob3RzcG90LmR5bmFtaWNQcm9wcywgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIGVhY2goZGF0YUNoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHByb3AuZXhwciwgbWUuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfHwgcHJvcC5oaW50RXhwciAmJiBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgcHJvcC5oaW50RXhwciwgbWUuZGF0YSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlUHJvcChtZSwgZXZhbEV4cHIocHJvcC5leHByLCBtZS5kYXRhLCBtZSksIHByb3ApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsZW1lbnRVcGRhdGVDaGlsZHJlbih0aGlzLCBkYXRhQ2hhbmdlcyk7XG4gICAgICAgIGlmIChuZWVkUmVsb2FkRm9yU2xvdCkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlR2l2ZW5TbG90cygpO1xuICAgICAgICAgICAgdGhpcy5fcmVwYWludENoaWxkcmVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b1BoYXNlKCd1cGRhdGVkJyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3duZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUJpbmR4T3duZXIoZGF0YUNoYW5nZXMpO1xuICAgICAgICAgICAgdGhpcy5vd25lci5fdXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZnlOZWVkUmVsb2FkID0gbnVsbDtcbn07XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuX3VwZGF0ZUJpbmR4T3duZXIgPSBmdW5jdGlvbiAoZGF0YUNoYW5nZXMpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMub3duZXIpIHtcbiAgICAgICAgZWFjaChkYXRhQ2hhbmdlcywgZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICAgICAgZWFjaChtZS5iaW5kcywgZnVuY3Rpb24gKGJpbmRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5nZUV4cHIgPSBjaGFuZ2UuZXhwcjtcbiAgICAgICAgICAgICAgICBpZiAoYmluZEl0ZW0ueFxuICAgICAgICAgICAgICAgICAgICAmJiAhaXNEYXRhQ2hhbmdlQnlFbGVtZW50KGNoYW5nZSwgbWUub3duZXIpXG4gICAgICAgICAgICAgICAgICAgICYmIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIHBhcnNlRXhwcihiaW5kSXRlbS5uYW1lKSwgbWUuZGF0YSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZVNjb3BlRXhwciA9IGJpbmRJdGVtLmV4cHI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VFeHByLnBhdGhzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNjb3BlRXhwciA9IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRJdGVtLmV4cHIucGF0aHMuY29uY2F0KGNoYW5nZUV4cHIucGF0aHMuc2xpY2UoMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUuc2NvcGUuc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2NvcGVFeHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZhbEV4cHIoY2hhbmdlRXhwciwgbWUuZGF0YSwgbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IGJpbmRJdGVtLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8qKlxuICog6YeN5paw57uY5Yi257uE5Lu255qE5YaF5a65XG4gKiDlvZMgZHluYW1pYyBzbG90IG5hbWUg5Y+R55Sf5Y+Y5pu05oiWIHNsb3Qg5Yy56YWN5Y+R55Sf5Y+Y5YyW5pe277yM6YeN5paw57uY5Yi2XG4gKiDlnKjnu4Tku7bnuqfliKvph43nu5jmnInngrnnspfmmrTvvIzkvYbmmK/og73kv53or4Hop4blm77nu5PmnpzmraPnoa7mgKdcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fcmVwYWludENoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4odGhpcywgMCwgMSk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgdGhpcy5fY29udGVudFJlYWR5ID0gMDtcbiAgICB0aGlzLnNsb3RDaGlsZHJlbiA9IFtdO1xuICAgIGVsZW1lbnRBdHRhY2godGhpcyk7XG59O1xuXG5cbi8qKlxuICog57uE5Lu25YaF6YOo55uR5ZCs5pWw5o2u5Y+Y5YyW55qE5Ye95pWwXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuZ2Ug5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX2RhdGFDaGFuZ2VyID0gZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgIGlmICh0aGlzLmxpZmVDeWNsZS5wYWludGluZyB8fCB0aGlzLmxpZmVDeWNsZS5jcmVhdGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhQ2hhbmdlcykge1xuICAgICAgICAgICAgbmV4dFRpY2sodGhpcy5fdXBkYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YUNoYW5nZXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmxpZmVDeWNsZS5pbml0ZWQgJiYgdGhpcy5vd25lcikge1xuICAgICAgICB0aGlzLl91cGRhdGVCaW5keE93bmVyKFtjaGFuZ2VdKTtcbiAgICB9XG59O1xuXG5cbi8qKlxuICog55uR5ZCs57uE5Lu255qE5pWw5o2u5Y+Y5YyWXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFOYW1lIOWPmOWMlueahOaVsOaNrumhuVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiAoZGF0YU5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdmFyIGRhdGFFeHByID0gcGFyc2VFeHByKGRhdGFOYW1lKTtcblxuICAgIHRoaXMuZGF0YS5saXN0ZW4oYmluZChmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgZGF0YUV4cHIsIHRoaXMuZGF0YSkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZhbEV4cHIoZGF0YUV4cHIsIHRoaXMuZGF0YSwgdGhpcyksIGNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9LCB0aGlzKSk7XG59O1xuXG4vKipcbiAqIOe7hOS7tumUgOavgeeahOihjOS4ulxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOmUgOavgeihjOS4uueahOWPguaVsFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmRpc3Bvc2UgPSBlbGVtZW50T3duRGlzcG9zZTtcblxuQ29tcG9uZW50LnByb3RvdHlwZS5fZG9uZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmxlYXZlRGlzcG9zZSkge1xuICAgICAgICBpZiAoIXRoaXMubGlmZUN5Y2xlLmRpc3Bvc2VkKSB7XG4gICAgICAgICAgICAvLyDov5nph4zkuI3nlKjmjKjkuKrosIPnlKggZGlzcG9zZSDkuobvvIzlm6DkuLogY2hpbGRyZW4g6YeK5pS+6ZO+5Lya6LCD55So55qEXG4gICAgICAgICAgICB0aGlzLnNsb3RDaGlsZHJlbiA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YS51bmxpc3RlbigpO1xuICAgICAgICAgICAgdGhpcy5kYXRhQ2hhbmdlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRhdGFDaGFuZ2VzID0gbnVsbDtcblxuICAgICAgICAgICAgZWxlbWVudERpc3Bvc2UoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2VOb0RldGFjaCxcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2VOb1RyYW5zaXRpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycyA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMuZ2l2ZW5BTm9kZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmdpdmVuU2xvdHMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5naXZlbk5hbWVkU2xvdEJpbmRzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmxpZmVDeWNsZS5hdHRhY2hlZCkge1xuICAgICAgICByZW1vdmVFbCh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5fdG9QaGFzZSgnZGV0YWNoZWQnKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOWujOaIkOe7hOS7tiBhdHRhY2hlZCDlkI7nmoTooYzkuLpcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKDoioLngrlcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fYXR0YWNoZWQgPSBlbGVtZW50T3duQXR0YWNoZWQ7XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuYXR0YWNoID0gZWxlbWVudE93bkF0dGFjaDtcbkNvbXBvbmVudC5wcm90b3R5cGUuZGV0YWNoID0gZWxlbWVudE93bkRldGFjaDtcbkNvbXBvbmVudC5wcm90b3R5cGUuX2NyZWF0ZSA9IGVsZW1lbnRPd25DcmVhdGU7XG5Db21wb25lbnQucHJvdG90eXBlLl9vbkVsID0gZWxlbWVudE93bk9uRWw7XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50O1xuXG5cbi8qKlxuICogQGZpbGUg5Yib5bu657uE5Lu257G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQnKTtcbi8vIHZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4uL3V0aWwvaW5oZXJpdHMnKTtcblxuLyoqXG4gKiDliJvlu7rnu4Tku7bnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8g57uE5Lu257G755qE5pa55rOV6KGoXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gZGVmaW5lQ29tcG9uZW50KHByb3RvKSB7XG4gICAgLy8g5aaC5p6c5Lyg5YWl5LiA5Liq5LiN5pivIHNhbiBjb21wb25lbnQg55qEIGNvbnN0cnVjdG9y77yM55u05o6l6L+U5Zue5LiN5piv57uE5Lu25p6E6YCg5Ye95pWwXG4gICAgLy8g6L+Z56eN5Zy65pmv5a+86Ie055qE6ZSZ6K+vIHNhbiDkuI3kuojogIPomZFcbiAgICBpZiAodHlwZW9mIHByb3RvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBwcm90bztcbiAgICB9XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGlmICh0eXBlb2YgcHJvdG8gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBGQVRBTF0gcGFyYW0gbXVzdCBiZSBhIHBsYWluIG9iamVjdC4nKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICBmdW5jdGlvbiBDb21wb25lbnRDbGFzcyhvcHRpb24pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBvcHRpb24pO1xuICAgIH1cblxuICAgIENvbXBvbmVudENsYXNzLnByb3RvdHlwZSA9IHByb3RvO1xuICAgIGluaGVyaXRzKENvbXBvbmVudENsYXNzLCBDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIENvbXBvbmVudENsYXNzO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVDb21wb25lbnQ7XG5cblxuLyoqXG4gKiBAZmlsZSDnvJbor5Hnu4Tku7bnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGNyZWF0ZUFOb2RlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hLW5vZGUnKTtcbi8vIHZhciBwYXJzZVRlbXBsYXRlID0gcmVxdWlyZSgnLi4vcGFyc2VyL3BhcnNlLXRlbXBsYXRlJyk7XG4vLyB2YXIgcGFyc2VUZXh0ID0gcmVxdWlyZSgnLi4vcGFyc2VyL3BhcnNlLXRleHQnKTtcbi8vIHZhciBkZWZpbmVDb21wb25lbnQgPSByZXF1aXJlKCcuL2RlZmluZS1jb21wb25lbnQnKTtcblxuXG4vKipcbiAqIOe8luivkee7hOS7tuexu+OAgumihOino+aekHRlbXBsYXRl5ZKMY29tcG9uZW50c1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudENsYXNzIOe7hOS7tuexu1xuICovXG5mdW5jdGlvbiBjb21waWxlQ29tcG9uZW50KENvbXBvbmVudENsYXNzKSB7XG4gICAgdmFyIHByb3RvID0gQ29tcG9uZW50Q2xhc3MucHJvdG90eXBlO1xuXG4gICAgLy8gcHJlIGRlZmluZSBjb21wb25lbnRzIGNsYXNzXG4gICAgaWYgKCFwcm90by5oYXNPd25Qcm9wZXJ0eSgnX2NtcHRSZWFkeScpKSB7XG4gICAgICAgIHByb3RvLmNvbXBvbmVudHMgPSBDb21wb25lbnRDbGFzcy5jb21wb25lbnRzIHx8IHByb3RvLmNvbXBvbmVudHMgfHwge307XG4gICAgICAgIHZhciBjb21wb25lbnRzID0gcHJvdG8uY29tcG9uZW50cztcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29tcG9uZW50cykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50Q2xhc3MgPSBjb21wb25lbnRzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1trZXldID0gZGVmaW5lQ29tcG9uZW50KGNvbXBvbmVudENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbXBvbmVudENsYXNzID09PSAnc2VsZicpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW2tleV0gPSBDb21wb25lbnRDbGFzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RvLl9jbXB0UmVhZHkgPSAxO1xuICAgIH1cblxuXG4gICAgLy8gcHJlIGNvbXBpbGUgdGVtcGxhdGVcbiAgICBpZiAoIXByb3RvLmhhc093blByb3BlcnR5KCdhTm9kZScpKSB7XG4gICAgICAgIHByb3RvLmFOb2RlID0gY3JlYXRlQU5vZGUoKTtcblxuICAgICAgICB2YXIgdHBsID0gQ29tcG9uZW50Q2xhc3MudGVtcGxhdGUgfHwgcHJvdG8udGVtcGxhdGU7XG4gICAgICAgIGlmICh0cGwpIHtcbiAgICAgICAgICAgIHZhciBhTm9kZSA9IHBhcnNlVGVtcGxhdGUodHBsLCB7XG4gICAgICAgICAgICAgICAgdHJpbVdoaXRlc3BhY2U6IHByb3RvLnRyaW1XaGl0ZXNwYWNlIHx8IENvbXBvbmVudENsYXNzLnRyaW1XaGl0ZXNwYWNlLFxuICAgICAgICAgICAgICAgIGRlbGltaXRlcnM6IHByb3RvLmRlbGltaXRlcnMgfHwgQ29tcG9uZW50Q2xhc3MuZGVsaW1pdGVyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGFOb2RlLmNoaWxkcmVuWzBdO1xuXG4gICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgaWYgKGFOb2RlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMSB8fCBmaXJzdENoaWxkLnRleHRFeHByKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEZBVEFMXSB0ZW1wbGF0ZSBtdXN0IGhhdmUgYSByb290IGVsZW1lbnQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgcHJvdG8uYU5vZGUgPSBmaXJzdENoaWxkO1xuICAgICAgICAgICAgaWYgKGZpcnN0Q2hpbGQudGFnTmFtZSA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAgICAgICAgIGZpcnN0Q2hpbGQudGFnTmFtZSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb21wb25lbnRQcm9wRXh0cmEgPSB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzJzoge25hbWU6ICdjbGFzcycsIGV4cHI6IHBhcnNlVGV4dCgne3tjbGFzcyB8IF9jbGFzcyB8IF9zZXAoXCIgXCIpfX0nKX0sXG4gICAgICAgICAgICAgICAgJ3N0eWxlJzoge25hbWU6ICdzdHlsZScsIGV4cHI6IHBhcnNlVGV4dCgne3tzdHlsZSB8IF9zdHlsZSB8IF9zZXAoXCI7XCIpfX0nKX0sXG4gICAgICAgICAgICAgICAgJ2lkJzoge25hbWU6ICdpZCcsIGV4cHI6IHBhcnNlVGV4dCgne3tpZH19Jyl9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgbGVuID0gZmlyc3RDaGlsZC5wcm9wcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IGZpcnN0Q2hpbGQucHJvcHNbbGVuXTtcbiAgICAgICAgICAgICAgICB2YXIgZXh0cmEgPSBjb21wb25lbnRQcm9wRXh0cmFbcHJvcC5uYW1lXTtcblxuICAgICAgICAgICAgICAgIGlmIChleHRyYSkge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdENoaWxkLnByb3BzLnNwbGljZShsZW4sIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRQcm9wRXh0cmFbcHJvcC5uYW1lXSA9IHByb3A7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AubmFtZSAhPT0gJ2lkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcC5leHByLnNlZ3MucHVzaChleHRyYS5leHByLnNlZ3NbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcC5leHByLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlyc3RDaGlsZC5wcm9wcy5wdXNoKFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFByb3BFeHRyYVsnY2xhc3MnXSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgICAgICAgICBjb21wb25lbnRQcm9wRXh0cmEuc3R5bGUsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50UHJvcEV4dHJhLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjb21waWxlQ29tcG9uZW50O1xuXG5cbi8qKlxuICogQGZpbGUg57uE5Lu26aKE54OtXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGNyZWF0ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9jcmVhdGUtZWwnKTtcbi8vIHZhciBnZXRQcm9wSGFuZGxlciA9IHJlcXVpcmUoJy4vZ2V0LXByb3AtaGFuZGxlcicpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG4vLyB2YXIgaXNCcm93c2VyID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pcy1icm93c2VyJyk7XG5cbi8qKlxuICog57uE5Lu26aKE54Ot77yM5YiG5p6Q57uE5Lu2YU5vZGXnmoTmlbDmja7lvJXnlKjnrYnkv6Hmga9cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50UHJlaGVhdChDb21wb25lbnRDbGFzcykge1xuICAgIHZhciBzdGFjayA9IFtdO1xuXG4gICAgZnVuY3Rpb24gcmVjb3JkSG90c3BvdERhdGEocmVmcywgbm90Q29udGVudERhdGEpIHtcbiAgICAgICAgdmFyIGxlbiA9IHN0YWNrLmxlbmd0aDtcbiAgICAgICAgZWFjaChzdGFjaywgZnVuY3Rpb24gKGFOb2RlLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKCFub3RDb250ZW50RGF0YSB8fCBpbmRleCAhPT0gbGVuIC0gMSkge1xuICAgICAgICAgICAgICAgIGVhY2gocmVmcywgZnVuY3Rpb24gKHJlZikge1xuICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LmRhdGFbcmVmXSA9IDE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gYW5hbHlzZUFOb2RlSG90c3BvdChhTm9kZSkge1xuICAgICAgICBpZiAoIWFOb2RlLmhvdHNwb3QpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goYU5vZGUpO1xuXG5cbiAgICAgICAgICAgIGlmIChhTm9kZS50ZXh0RXhwcikge1xuICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QgPSB7ZGF0YToge319O1xuICAgICAgICAgICAgICAgIHJlY29yZEhvdHNwb3REYXRhKGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoYU5vZGUudGV4dEV4cHIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzb3VyY2VOb2RlO1xuICAgICAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIgJiYgYU5vZGUudGFnTmFtZSAmJiAhL14odGVtcGxhdGV8c2xvdHxzZWxlY3R8aW5wdXR8b3B0aW9uKSQvaS50ZXN0KGFOb2RlLnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU5vZGUgPSBjcmVhdGVFbChhTm9kZS50YWdOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90ID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY1Byb3BzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgeFByb3BzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VOb2RlOiBzb3VyY2VOb2RlXG4gICAgICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICAgICAgLy8gPT09IGFuYWx5c2UgaG90c3BvdCBkYXRhOiBzdGFydFxuICAgICAgICAgICAgICAgIGVhY2goYU5vZGUudmFycywgZnVuY3Rpb24gKHZhckl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkSG90c3BvdERhdGEoYW5hbHlzZUV4cHJEYXRhSG90c3BvdCh2YXJJdGVtLmV4cHIpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGVhY2goYU5vZGUucHJvcHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZEhvdHNwb3REYXRhKGFuYWx5c2VFeHByRGF0YUhvdHNwb3QocHJvcC5leHByKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBndWFyZC1mb3ItaW4gKi9cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYU5vZGUuZGlyZWN0aXZlcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aXZlID0gYU5vZGUuZGlyZWN0aXZlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRIb3RzcG90RGF0YShhbmFseXNlRXhwckRhdGFIb3RzcG90KGRpcmVjdGl2ZS52YWx1ZSksIGtleSAhPT0gJ2h0bWwnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBndWFyZC1mb3ItaW4gKi9cblxuICAgICAgICAgICAgICAgIGVhY2goYU5vZGUuZWxzZXMsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBhbmFseXNlQU5vZGVIb3RzcG90KGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGVhY2goYU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBhbmFseXNlQU5vZGVIb3RzcG90KGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyA9PT0gYW5hbHlzZSBob3RzcG90IGRhdGE6IGVuZFxuXG5cbiAgICAgICAgICAgICAgICAvLyA9PT0gYW5hbHlzZSBob3RzcG90IHByb3BzOiBzdGFydFxuICAgICAgICAgICAgICAgIGVhY2goYU5vZGUucHJvcHMsIGZ1bmN0aW9uIChwcm9wLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LnByb3BzW3Byb3AubmFtZV0gPSBpbmRleDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcC5uYW1lID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wLmlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QuaWRQcm9wID0gcHJvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QuZHluYW1pY1Byb3BzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcC5leHByLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UHJvcEhhbmRsZXIoYU5vZGUudGFnTmFtZSwgcHJvcC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvcChzb3VyY2VOb2RlLCBwcm9wLmV4cHIudmFsdWUsIHByb3AubmFtZSwgYU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AueCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QueFByb3BzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LmR5bmFtaWNQcm9wcy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZSDkuIvvvIzlpoLmnpwgb3B0aW9uIOayoeaciSB2YWx1ZSDlsZ7mgKfvvIxzZWxlY3QudmFsdWUgPSB4eCDmk43kvZzkuI3kvJrpgInkuK0gb3B0aW9uXG4gICAgICAgICAgICAgICAgLy8g5omA5Lul5rKh5pyJ6K6+572uIHZhbHVlIOaXtu+8jOm7mOiupOaKiiBvcHRpb24g55qE5YaF5a655L2c5Li6IHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKGFOb2RlLnRhZ05hbWUgPT09ICdvcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICYmICFnZXRBTm9kZVByb3AoYU5vZGUsICd2YWx1ZScpXG4gICAgICAgICAgICAgICAgICAgICYmIGFOb2RlLmNoaWxkcmVuWzBdXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVByb3AgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcjogYU5vZGUuY2hpbGRyZW5bMF0udGV4dEV4cHJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUucHJvcHMucHVzaCh2YWx1ZVByb3ApO1xuICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LmR5bmFtaWNQcm9wcy5wdXNoKHZhbHVlUHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QucHJvcHMudmFsdWUgPSBhTm9kZS5wcm9wcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyA9PT0gYW5hbHlzZSBob3RzcG90IHByb3BzOiBlbmRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmFseXNlQU5vZGVIb3RzcG90KENvbXBvbmVudENsYXNzLnByb3RvdHlwZS5hTm9kZSk7XG59XG5cbi8qKlxuICog5YiG5p6Q6KGo6L6+5byP55qE5pWw5o2u5byV55SoXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV4cHIg6KaB5YiG5p6Q55qE6KGo6L6+5byPXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gYW5hbHlzZUV4cHJEYXRhSG90c3BvdChleHByKSB7XG4gICAgdmFyIHJlZnMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGFuYWx5c2VFeHBycyhleHBycykge1xuICAgICAgICBlYWNoKGV4cHJzLCBmdW5jdGlvbiAoZXhwcikge1xuICAgICAgICAgICAgcmVmcyA9IHJlZnMuY29uY2F0KGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoZXhwcikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGV4cHIudHlwZSkge1xuICAgICAgICBjYXNlIEV4cHJUeXBlLkFDQ0VTU09SOlxuICAgICAgICAgICAgdmFyIHBhdGhzID0gZXhwci5wYXRocztcbiAgICAgICAgICAgIHJlZnMucHVzaChwYXRoc1swXS52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgcmVmcy5wdXNoKHBhdGhzWzBdLnZhbHVlICsgJy4nICsgKHBhdGhzWzFdLnZhbHVlIHx8ICcqJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhbmFseXNlRXhwcnMocGF0aHMuc2xpY2UoMSkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFeHByVHlwZS5VTkFSWTpcbiAgICAgICAgICAgIHJldHVybiBhbmFseXNlRXhwckRhdGFIb3RzcG90KGV4cHIuZXhwcik7XG5cbiAgICAgICAgY2FzZSBFeHByVHlwZS5URVhUOlxuICAgICAgICBjYXNlIEV4cHJUeXBlLkJJTkFSWTpcbiAgICAgICAgY2FzZSBFeHByVHlwZS5URVJUSUFSWTpcbiAgICAgICAgICAgIGFuYWx5c2VFeHBycyhleHByLnNlZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFeHByVHlwZS5JTlRFUlA6XG4gICAgICAgICAgICByZWZzID0gYW5hbHlzZUV4cHJEYXRhSG90c3BvdChleHByLmV4cHIpO1xuXG4gICAgICAgICAgICBlYWNoKGV4cHIuZmlsdGVycywgZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICAgICAgICAgIGFuYWx5c2VFeHBycyhmaWx0ZXIubmFtZS5wYXRocyk7XG4gICAgICAgICAgICAgICAgYW5hbHlzZUV4cHJzKGZpbHRlci5hcmdzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgIH1cblxuICAgIHJldHVybiByZWZzO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjb21wb25lbnRQcmVoZWF0O1xuXG5cbi8qKlxuICogQGZpbGUg5bCGIGJpbmRzIOeahCBuYW1lIOS7jiBrZWJhYmNhc2Ug6L2s5o2i5oiQIGNhbWVsY2FzZVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGtlYmFiMmNhbWVsID0gcmVxdWlyZSgnLi4vdXRpbC9rZWJhYjJjYW1lbCcpO1xuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcblxuLyoqXG4gKiDlsIYgYmluZHMg55qEIG5hbWUg5LuOIGtlYmFiY2FzZSDovazmjaLmiJAgY2FtZWxjYXNlXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYmluZHMgYmluZHPpm4blkIhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBjYW1lbENvbXBvbmVudEJpbmRzKGJpbmRzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGVhY2goYmluZHMsIGZ1bmN0aW9uIChiaW5kKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGtlYmFiMmNhbWVsKGJpbmQubmFtZSksXG4gICAgICAgICAgICBleHByOiBiaW5kLmV4cHIsXG4gICAgICAgICAgICB4OiBiaW5kLngsXG4gICAgICAgICAgICByYXc6IGJpbmQucmF3XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY2FtZWxDb21wb25lbnRCaW5kcztcblxuXG4vKipcbiAqIEBmaWxlIOe8luivkea6kOeggeeahCBoZWxwZXIg5pa55rOV6ZuG5ZCIXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuXG4vLyAjW2JlZ2luXSBzc3Jcbi8vIFxuLy8gLyoqXG4vLyAgKiDnvJbor5HmupDnoIHnmoQgaGVscGVyIOaWueazlembhuWQiOWvueixoVxuLy8gICovXG4vLyB2YXIgY29tcGlsZUV4cHJTb3VyY2UgPSB7XG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDlrZfnrKbkuLLlrZfpnaLljJZcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug6ZyA6KaB5a2X6Z2i5YyW55qE5a2X56ym5LiyXG4vLyAgICAgICogQHJldHVybiB7c3RyaW5nfSDlrZfnrKbkuLLlrZfpnaLljJbnu5Pmnpxcbi8vICAgICAgKi9cbi8vICAgICBzdHJpbmdMaXRlcmFsaXplOiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgIHJldHVybiAnXCInXG4vLyAgICAgICAgICAgICArIHNvdXJjZVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHg1Qy9nLCAnXFxcXFxcXFwnKVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJylcbi8vICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFx4MEEvZywgJ1xcXFxuJylcbi8vICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFx4MDkvZywgJ1xcXFx0Jylcbi8vICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFx4MEQvZywgJ1xcXFxyJylcbi8vICAgICAgICAgICAgICAgICAvLyAucmVwbGFjZSggL1xceDA4L2csICdcXFxcYicgKVxuLy8gICAgICAgICAgICAgICAgIC8vIC5yZXBsYWNlKCAvXFx4MEMvZywgJ1xcXFxmJyApXG4vLyAgICAgICAgICAgICArICdcIic7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOeUn+aIkOaVsOaNruiuv+mXruihqOi+vuW8j+S7o+eggVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtPYmplY3Q/fSBhY2Nlc3NvckV4cHIgYWNjZXNzb3Looajovr7lvI/lr7nosaFcbi8vICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgICAgICovXG4vLyAgICAgZGF0YUFjY2VzczogZnVuY3Rpb24gKGFjY2Vzc29yRXhwcikge1xuLy8gICAgICAgICB2YXIgY29kZSA9ICdjb21wb25lbnRDdHguZGF0YSc7XG4vLyAgICAgICAgIGlmIChhY2Nlc3NvckV4cHIpIHtcbi8vICAgICAgICAgICAgIGVhY2goYWNjZXNzb3JFeHByLnBhdGhzLCBmdW5jdGlvbiAocGF0aCkge1xuLy8gICAgICAgICAgICAgICAgIGlmIChwYXRoLnR5cGUgPT09IEV4cHJUeXBlLkFDQ0VTU09SKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvZGUgKz0gJ1snICsgY29tcGlsZUV4cHJTb3VyY2UuZGF0YUFjY2VzcyhwYXRoKSArICddJztcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHBhdGgudmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUgKz0gJy4nICsgcGF0aC52YWx1ZTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlICs9ICdbJyArIHBhdGgudmFsdWUgKyAnXSc7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHJldHVybiBjb2RlO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnlJ/miJDmj5LlgLzku6PnoIFcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpbnRlcnBFeHByIOaPkuWAvOihqOi+vuW8j+WvueixoVxuLy8gICAgICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAgICAgKi9cbi8vICAgICBpbnRlcnA6IGZ1bmN0aW9uIChpbnRlcnBFeHByKSB7XG4vLyAgICAgICAgIHZhciBjb2RlID0gY29tcGlsZUV4cHJTb3VyY2UuZXhwcihpbnRlcnBFeHByLmV4cHIpO1xuLy8gXG4vLyBcbi8vICAgICAgICAgZWFjaChpbnRlcnBFeHByLmZpbHRlcnMsIGZ1bmN0aW9uIChmaWx0ZXIpIHtcbi8vICAgICAgICAgICAgIGNvZGUgPSAnY29tcG9uZW50Q3R4LmNhbGxGaWx0ZXIoXCInICsgZmlsdGVyLm5hbWUucGF0aHNbMF0udmFsdWUgKyAnXCIsIFsnICsgY29kZTtcbi8vICAgICAgICAgICAgIGVhY2goZmlsdGVyLmFyZ3MsIGZ1bmN0aW9uIChhcmcpIHtcbi8vICAgICAgICAgICAgICAgICBjb2RlICs9ICcsICcgKyBjb21waWxlRXhwclNvdXJjZS5leHByKGFyZyk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIGNvZGUgKz0gJ10pJztcbi8vICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgaWYgKCFpbnRlcnBFeHByLm9yaWdpbmFsKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gJ2VzY2FwZUhUTUwoJyArIGNvZGUgKyAnKSc7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICByZXR1cm4gY29kZTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog55Sf5oiQ5paH5pys54mH5q615Luj56CBXG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge09iamVjdH0gdGV4dEV4cHIg5paH5pys54mH5q616KGo6L6+5byP5a+56LGhXG4vLyAgICAgICogQHJldHVybiB7c3RyaW5nfVxuLy8gICAgICAqL1xuLy8gICAgIHRleHQ6IGZ1bmN0aW9uICh0ZXh0RXhwcikge1xuLy8gICAgICAgICBpZiAodGV4dEV4cHIuc2Vncy5sZW5ndGggPT09IDApIHtcbi8vICAgICAgICAgICAgIHJldHVybiAnXCJcIic7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICB2YXIgY29kZSA9ICcnO1xuLy8gXG4vLyAgICAgICAgIGVhY2godGV4dEV4cHIuc2VncywgZnVuY3Rpb24gKHNlZykge1xuLy8gICAgICAgICAgICAgdmFyIHNlZ0NvZGUgPSBjb21waWxlRXhwclNvdXJjZS5leHByKHNlZyk7XG4vLyAgICAgICAgICAgICBjb2RlICs9IGNvZGUgPyAnICsgJyArIHNlZ0NvZGUgOiBzZWdDb2RlO1xuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICByZXR1cm4gY29kZTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog5LqM5YWD6KGo6L6+5byP5pON5L2c56ym5pig5bCE6KGoXG4vLyAgICAgICpcbi8vICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuLy8gICAgICAqL1xuLy8gICAgIGJpbmFyeU9wOiB7XG4vLyAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4vLyAgICAgICAgIDQzOiAnKycsXG4vLyAgICAgICAgIDQ1OiAnLScsXG4vLyAgICAgICAgIDQyOiAnKicsXG4vLyAgICAgICAgIDQ3OiAnLycsXG4vLyAgICAgICAgIDYwOiAnPCcsXG4vLyAgICAgICAgIDYyOiAnPicsXG4vLyAgICAgICAgIDc2OiAnJiYnLFxuLy8gICAgICAgICA5NDogJyE9Jyxcbi8vICAgICAgICAgMTIxOiAnPD0nLFxuLy8gICAgICAgICAxMjI6ICc9PScsXG4vLyAgICAgICAgIDEyMzogJz49Jyxcbi8vICAgICAgICAgMTU1OiAnIT09Jyxcbi8vICAgICAgICAgMTgzOiAnPT09Jyxcbi8vICAgICAgICAgMjQ4OiAnfHwnXG4vLyAgICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog55Sf5oiQ6KGo6L6+5byP5Luj56CBXG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXhwciDooajovr7lvI/lr7nosaFcbi8vICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgICAgICovXG4vLyAgICAgZXhwcjogZnVuY3Rpb24gKGV4cHIpIHtcbi8vICAgICAgICAgc3dpdGNoIChleHByLnR5cGUpIHtcbi8vICAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuVU5BUlk6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuICchJyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoZXhwci5leHByKTtcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5CSU5BUlk6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGVFeHByU291cmNlLmV4cHIoZXhwci5zZWdzWzBdKVxuLy8gICAgICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmJpbmFyeU9wW2V4cHIub3BlcmF0b3JdXG4vLyAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihleHByLnNlZ3NbMV0pO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLlRFUlRJQVJZOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBjb21waWxlRXhwclNvdXJjZS5leHByKGV4cHIuc2Vnc1swXSlcbi8vICAgICAgICAgICAgICAgICAgICAgKyAnPycgKyBjb21waWxlRXhwclNvdXJjZS5leHByKGV4cHIuc2Vnc1sxXSlcbi8vICAgICAgICAgICAgICAgICAgICAgKyAnOicgKyBjb21waWxlRXhwclNvdXJjZS5leHByKGV4cHIuc2Vnc1syXSk7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuU1RSSU5HOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBjb21waWxlRXhwclNvdXJjZS5zdHJpbmdMaXRlcmFsaXplKGV4cHIubGl0ZXJhbCB8fCBleHByLnZhbHVlKTtcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5OVU1CRVI6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGV4cHIudmFsdWU7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuQk9PTDpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gZXhwci52YWx1ZSA/ICd0cnVlJyA6ICdmYWxzZSc7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuQUNDRVNTT1I6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGVFeHByU291cmNlLmRhdGFBY2Nlc3MoZXhwcik7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuSU5URVJQOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBjb21waWxlRXhwclNvdXJjZS5pbnRlcnAoZXhwcik7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuVEVYVDpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGlsZUV4cHJTb3VyY2UudGV4dChleHByKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH07XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY29tcGlsZUV4cHJTb3VyY2U7XG5cblxuLyoqXG4gKiBAZmlsZSDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXLnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgY29tcGlsZUV4cHJTb3VyY2UgPSByZXF1aXJlKCcuL2NvbXBpbGUtZXhwci1zb3VyY2UnKTtcblxuXG4vLyAjW2JlZ2luXSBzc3Jcbi8vIC8qKlxuLy8gICog57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVy57G7XG4vLyAgKlxuLy8gICogQGNsYXNzXG4vLyAgKi9cbi8vIGZ1bmN0aW9uIENvbXBpbGVTb3VyY2VCdWZmZXIoKSB7XG4vLyAgICAgdGhpcy5zZWdzID0gW107XG4vLyB9XG4vLyBcbi8vIC8qKlxuLy8gICog5re75Yqg5Y6f5aeL5Luj56CB77yM5bCG5Y6f5bCB5LiN5Yqo6L6T5Ye6XG4vLyAgKlxuLy8gICogQHBhcmFtIHtzdHJpbmd9IGNvZGUg5Y6f5aeL5Luj56CBXG4vLyAgKi9cbi8vIENvbXBpbGVTb3VyY2VCdWZmZXIucHJvdG90eXBlLmFkZFJhdyA9IGZ1bmN0aW9uIChjb2RlKSB7XG4vLyAgICAgdGhpcy5zZWdzLnB1c2goe1xuLy8gICAgICAgICB0eXBlOiAnUkFXJyxcbi8vICAgICAgICAgY29kZTogY29kZVxuLy8gICAgIH0pO1xuLy8gfTtcbi8vIFxuLy8gLyoqXG4vLyAgKiDmt7vliqDooqvmi7zmjqXkuLpodG1s55qE5Y6f5aeL5Luj56CBXG4vLyAgKlxuLy8gICogQHBhcmFtIHtzdHJpbmd9IGNvZGUg5Y6f5aeL5Luj56CBXG4vLyAgKi9cbi8vIENvbXBpbGVTb3VyY2VCdWZmZXIucHJvdG90eXBlLmpvaW5SYXcgPSBmdW5jdGlvbiAoY29kZSkge1xuLy8gICAgIHRoaXMuc2Vncy5wdXNoKHtcbi8vICAgICAgICAgdHlwZTogJ0pPSU5fUkFXJyxcbi8vICAgICAgICAgY29kZTogY29kZVxuLy8gICAgIH0pO1xuLy8gfTtcbi8vIFxuLy8gLyoqXG4vLyAgKiDmt7vliqByZW5kZXJlcuaWueazleeahOi1t+Wni+a6kOeggVxuLy8gICovXG4vLyBDb21waWxlU291cmNlQnVmZmVyLnByb3RvdHlwZS5hZGRSZW5kZXJlclN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIHRoaXMuYWRkUmF3KCdmdW5jdGlvbiAoZGF0YSwgcGFyZW50Q3R4LCBnaXZlblNsb3RzKSB7Jyk7XG4vLyAgICAgdGhpcy5hZGRSYXcoJ3ZhciBodG1sID0gXCJcIjsnKTtcbi8vIH07XG4vLyBcbi8vIC8qKlxuLy8gICog5re75YqgcmVuZGVyZXLmlrnms5XnmoTnu5PmnZ/mupDnoIFcbi8vICAqL1xuLy8gQ29tcGlsZVNvdXJjZUJ1ZmZlci5wcm90b3R5cGUuYWRkUmVuZGVyZXJFbmQgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgdGhpcy5hZGRSYXcoJ3JldHVybiBodG1sOycpO1xuLy8gICAgIHRoaXMuYWRkUmF3KCd9Jyk7XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIOa3u+WKoOiiq+aLvOaOpeS4umh0bWznmoTpnZnmgIHlrZfnrKbkuLJcbi8vICAqXG4vLyAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIOiiq+aLvOaOpeeahOWtl+espuS4slxuLy8gICovXG4vLyBDb21waWxlU291cmNlQnVmZmVyLnByb3RvdHlwZS5qb2luU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuLy8gICAgIHRoaXMuc2Vncy5wdXNoKHtcbi8vICAgICAgICAgc3RyOiBzdHIsXG4vLyAgICAgICAgIHR5cGU6ICdKT0lOX1NUUklORydcbi8vICAgICB9KTtcbi8vIH07XG4vLyBcbi8vIC8qKlxuLy8gICog5re75Yqg6KKr5ou85o6l5Li6aHRtbOeahOaVsOaNruiuv+mXrlxuLy8gICpcbi8vICAqIEBwYXJhbSB7T2JqZWN0P30gYWNjZXNzb3Ig5pWw5o2u6K6/6Zeu6KGo6L6+5byP5a+56LGhXG4vLyAgKi9cbi8vIENvbXBpbGVTb3VyY2VCdWZmZXIucHJvdG90eXBlLmpvaW5EYXRhU3RyaW5naWZ5ID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIHRoaXMuc2Vncy5wdXNoKHtcbi8vICAgICAgICAgdHlwZTogJ0pPSU5fREFUQV9TVFJJTkdJRlknXG4vLyAgICAgfSk7XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIOa3u+WKoOiiq+aLvOaOpeS4umh0bWznmoTooajovr7lvI9cbi8vICAqXG4vLyAgKiBAcGFyYW0ge09iamVjdH0gZXhwciDooajovr7lvI/lr7nosaFcbi8vICAqL1xuLy8gQ29tcGlsZVNvdXJjZUJ1ZmZlci5wcm90b3R5cGUuam9pbkV4cHIgPSBmdW5jdGlvbiAoZXhwcikge1xuLy8gICAgIHRoaXMuc2Vncy5wdXNoKHtcbi8vICAgICAgICAgZXhwcjogZXhwcixcbi8vICAgICAgICAgdHlwZTogJ0pPSU5fRVhQUidcbi8vICAgICB9KTtcbi8vIH07XG4vLyBcbi8vIC8qKlxuLy8gICog55Sf5oiQ57yW6K+R5ZCO5Luj56CBXG4vLyAgKlxuLy8gICogQHJldHVybiB7c3RyaW5nfVxuLy8gICovXG4vLyBDb21waWxlU291cmNlQnVmZmVyLnByb3RvdHlwZS50b0NvZGUgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgdmFyIGNvZGUgPSBbXTtcbi8vICAgICB2YXIgdGVtcCA9ICcnO1xuLy8gXG4vLyAgICAgZnVuY3Rpb24gZ2VuU3RyTGl0ZXJhbCgpIHtcbi8vICAgICAgICAgaWYgKHRlbXApIHtcbi8vICAgICAgICAgICAgIGNvZGUucHVzaCgnaHRtbCArPSAnICsgY29tcGlsZUV4cHJTb3VyY2Uuc3RyaW5nTGl0ZXJhbGl6ZSh0ZW1wKSArICc7Jyk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICB0ZW1wID0gJyc7XG4vLyAgICAgfVxuLy8gXG4vLyAgICAgZWFjaCh0aGlzLnNlZ3MsIGZ1bmN0aW9uIChzZWcpIHtcbi8vICAgICAgICAgaWYgKHNlZy50eXBlID09PSAnSk9JTl9TVFJJTkcnKSB7XG4vLyAgICAgICAgICAgICB0ZW1wICs9IHNlZy5zdHI7XG4vLyAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICBnZW5TdHJMaXRlcmFsKCk7XG4vLyAgICAgICAgIHN3aXRjaCAoc2VnLnR5cGUpIHtcbi8vICAgICAgICAgICAgIGNhc2UgJ0pPSU5fREFUQV9TVFJJTkdJRlknOlxuLy8gICAgICAgICAgICAgICAgIGNvZGUucHVzaCgnaHRtbCArPSBzdHJpbmdpZmllci5hbnkoJyArIGNvbXBpbGVFeHByU291cmNlLmRhdGFBY2Nlc3MoKSArICcpOycpO1xuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlICdKT0lOX0VYUFInOlxuLy8gICAgICAgICAgICAgICAgIGNvZGUucHVzaCgnaHRtbCArPSAnICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihzZWcuZXhwcikgKyAnOycpO1xuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlICdKT0lOX1JBVyc6XG4vLyAgICAgICAgICAgICAgICAgY29kZS5wdXNoKCdodG1sICs9ICcgKyBzZWcuY29kZSArICc7Jyk7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgJ1JBVyc6XG4vLyAgICAgICAgICAgICAgICAgY29kZS5wdXNoKHNlZy5jb2RlKTtcbi8vICAgICAgICAgICAgICAgICBicmVhaztcbi8vIFxuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG4vLyBcbi8vICAgICBnZW5TdHJMaXRlcmFsKCk7XG4vLyBcbi8vICAgICByZXR1cm4gY29kZS5qb2luKCdcXG4nKTtcbi8vIH07XG4vLyBcbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBDb21waWxlU291cmNlQnVmZmVyO1xuXG5cbi8qKlxuICogQGZpbGUg5bCG57uE5Lu257yW6K+R5oiQIHJlbmRlciDmlrnms5XnmoQganMg5rqQ56CBXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4uL3BhcnNlci9wYXJzZS1leHByJyk7XG4vLyB2YXIgY3JlYXRlQU5vZGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvY3JlYXRlLWEtbm9kZScpO1xuLy8gdmFyIGNsb25lRGlyZWN0aXZlcyA9IHJlcXVpcmUoJy4uL3BhcnNlci9jbG9uZS1kaXJlY3RpdmVzJyk7XG4vLyB2YXIgYXV0b0Nsb3NlVGFncyA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvYXV0by1jbG9zZS10YWdzJyk7XG4vLyB2YXIgQ29tcGlsZVNvdXJjZUJ1ZmZlciA9IHJlcXVpcmUoJy4vY29tcGlsZS1zb3VyY2UtYnVmZmVyJyk7XG4vLyB2YXIgY29tcGlsZUV4cHJTb3VyY2UgPSByZXF1aXJlKCcuL2NvbXBpbGUtZXhwci1zb3VyY2UnKTtcbi8vIHZhciByaW5zZUNvbmRBTm9kZSA9IHJlcXVpcmUoJy4vcmluc2UtY29uZC1hbm9kZScpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG5cbi8vICNbYmVnaW5dIHNzclxuLy8gXG4vLyAvKipcbi8vICAqIOeUn+aIkOW6j+WIl+WMluaXtui1t+Wni+ahqeeahGh0bWxcbi8vICAqXG4vLyAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDmoannsbvlnovmoIfor4Zcbi8vICAqIEBwYXJhbSB7c3RyaW5nP30gY29udGVudCDmoanlhoXnmoTlhoXlrrlcbi8vICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAqL1xuLy8gZnVuY3Rpb24gc2VyaWFsaXplU3R1bXAodHlwZSwgY29udGVudCkge1xuLy8gICAgIHJldHVybiAnPCEtLXMtJyArIHR5cGUgKyAoY29udGVudCA/ICc6JyArIGNvbnRlbnQgOiAnJykgKyAnLS0+Jztcbi8vIH1cbi8vIFxuLy8gLyoqXG4vLyAgKiDnlJ/miJDluo/liJfljJbml7bnu5PmnZ/moannmoRodG1sXG4vLyAgKlxuLy8gICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg5qGp57G75Z6L5qCH6K+GXG4vLyAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgKi9cbi8vIGZ1bmN0aW9uIHNlcmlhbGl6ZVN0dW1wRW5kKHR5cGUpIHtcbi8vICAgICByZXR1cm4gJzwhLS0vcy0nICsgdHlwZSArICctLT4nO1xuLy8gfVxuLy8gXG4vLyAvKipcbi8vICAqIGVsZW1lbnQg55qE57yW6K+R5pa55rOV6ZuG5ZCI5a+56LGhXG4vLyAgKlxuLy8gICogQGlubmVyXG4vLyAgKi9cbi8vIHZhciBlbGVtZW50U291cmNlQ29tcGlsZXIgPSB7XG4vLyBcbi8vICAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtcGFyYW1zICovXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+R5YWD57Sg5qCH562+5aS0XG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSDmoIfnrb7lkI1cbi8vICAgICAgKiBAcGFyYW0ge0FycmF5fSBwcm9wcyDlsZ7mgKfliJfooahcbi8vICAgICAgKiBAcGFyYW0ge3N0cmluZz99IGV4dHJhUHJvcCDpop3lpJbnmoTlsZ7mgKfkuLJcbi8vICAgICAgKiBAcGFyYW0ge2Jvb2xlYW4/fSBpc0Nsb3NlIOaYr+WQpumXreWQiFxuLy8gICAgICAqL1xuLy8gICAgIHRhZ1N0YXJ0OiBmdW5jdGlvbiAoc291cmNlQnVmZmVyLCB0YWdOYW1lLCBwcm9wcywgZXh0cmFQcm9wLCBpc0Nsb3NlKSB7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCc8JyArIHRhZ05hbWUpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZyhleHRyYVByb3AgfHwgJycpO1xuLy8gXG4vLyAgICAgICAgIC8vIGluZGV4IGxpc3Rcbi8vICAgICAgICAgdmFyIHByb3BzSW5kZXggPSB7fTtcbi8vICAgICAgICAgZWFjaChwcm9wcywgZnVuY3Rpb24gKHByb3ApIHtcbi8vICAgICAgICAgICAgIHByb3BzSW5kZXhbcHJvcC5uYW1lXSA9IHByb3A7XG4vLyAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgIGVhY2gocHJvcHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4vLyAgICAgICAgICAgICBpZiAocHJvcC5uYW1lID09PSAnc2xvdCcpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgPT09ICd2YWx1ZScpIHtcbi8vICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhZ05hbWUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCckc2VsZWN0VmFsdWUgPSAnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHByb3AuZXhwcilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICcgfHwgXCJcIjsnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ29wdGlvbic6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCckb3B0aW9uVmFsdWUgPSAnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHByb3AuZXhwcilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICc7J1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdpZiAoJG9wdGlvblZhbHVlICE9IG51bGwpIHsnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luUmF3KCdcIiB2YWx1ZT1cXFxcXCJcIiArICRvcHRpb25WYWx1ZSArIFwiXFxcXFwiXCInKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0ZWRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2lmICgkb3B0aW9uVmFsdWUgPT09ICRzZWxlY3RWYWx1ZSkgeycpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoJyBzZWxlY3RlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgc3dpdGNoIChwcm9wLm5hbWUpIHtcbi8vICAgICAgICAgICAgICAgICBjYXNlICdyZWFkb25seSc6XG4vLyAgICAgICAgICAgICAgICAgY2FzZSAnZGlzYWJsZWQnOlxuLy8gICAgICAgICAgICAgICAgIGNhc2UgJ211bHRpcGxlJzpcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AucmF3ID09PSAnJykge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoJyAnICsgcHJvcC5uYW1lKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luUmF3KCdib29sQXR0ckZpbHRlcihcIicgKyBwcm9wLm5hbWUgKyAnXCIsICdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmV4cHIocHJvcC5leHByKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJyknXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tlZCc6XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVQcm9wID0gcHJvcHNJbmRleC52YWx1ZTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZUNvZGUgPSBjb21waWxlRXhwclNvdXJjZS5leHByKHZhbHVlUHJvcC5leHByKTtcbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcHNJbmRleC50eXBlLnJhdykge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdpZiAoY29udGFpbnMoJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihwcm9wLmV4cHIpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnLCAnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB2YWx1ZUNvZGVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICcpKSB7J1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCcgY2hlY2tlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnaWYgKCdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmV4cHIocHJvcC5leHByKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJyA9PT0gJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdmFsdWVDb2RlXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnKSB7J1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCcgY2hlY2tlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AuYXR0cikge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoJyAnICsgcHJvcC5hdHRyKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luUmF3KCdhdHRyRmlsdGVyKFwiJyArIHByb3AubmFtZSArICdcIiwgJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKHByb3AueCA/ICdlc2NhcGVIVE1MKCcgOiAnJylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmV4cHIocHJvcC5leHByKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKHByb3AueCA/ICcpJyA6ICcnKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJyknXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZyhpc0Nsb3NlID8gJy8+JyA6ICc+Jyk7XG4vLyAgICAgfSxcbi8vICAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1wYXJhbXMgKi9cbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkeWFg+e0oOmXreWQiFxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUg5qCH562+5ZCNXG4vLyAgICAgICovXG4vLyAgICAgdGFnRW5kOiBmdW5jdGlvbiAoc291cmNlQnVmZmVyLCB0YWdOYW1lKSB7XG4vLyAgICAgICAgIGlmICghYXV0b0Nsb3NlVGFnc1t0YWdOYW1lXSkge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoJzwvJyArIHRhZ05hbWUgKyAnPicpO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgaWYgKHRhZ05hbWUgPT09ICdzZWxlY3QnKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCckc2VsZWN0VmFsdWUgPSBudWxsOycpO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgaWYgKHRhZ05hbWUgPT09ICdvcHRpb24nKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCckb3B0aW9uVmFsdWUgPSBudWxsOycpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkeWFg+e0oOWGheWuuVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5YWD57Sg55qE5oq96LGh6IqC54K55L+h5oGvXG4vLyAgICAgICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tuWunuS+i+eOr+Wig1xuLy8gICAgICAqL1xuLy8gICAgIGlubmVyOiBmdW5jdGlvbiAoc291cmNlQnVmZmVyLCBhTm9kZSwgb3duZXIpIHtcbi8vICAgICAgICAgLy8gaW5uZXIgY29udGVudFxuLy8gICAgICAgICBpZiAoYU5vZGUudGFnTmFtZSA9PT0gJ3RleHRhcmVhJykge1xuLy8gICAgICAgICAgICAgdmFyIHZhbHVlUHJvcCA9IGdldEFOb2RlUHJvcChhTm9kZSwgJ3ZhbHVlJyk7XG4vLyAgICAgICAgICAgICBpZiAodmFsdWVQcm9wKSB7XG4vLyAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5SYXcoJ2VzY2FwZUhUTUwoJ1xuLy8gICAgICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmV4cHIodmFsdWVQcm9wLmV4cHIpXG4vLyAgICAgICAgICAgICAgICAgICAgICsgJyknXG4vLyAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgdmFyIGh0bWxEaXJlY3RpdmUgPSBhTm9kZS5kaXJlY3RpdmVzLmh0bWw7XG4vLyAgICAgICAgIGlmIChodG1sRGlyZWN0aXZlKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pbkV4cHIoaHRtbERpcmVjdGl2ZS52YWx1ZSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLy8gICAgICAgICAgICAgZWFjaChhTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGFOb2RlQ2hpbGQpIHtcbi8vICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KGFOb2RlQ29tcGlsZXIuY29tcGlsZShhTm9kZUNoaWxkLCBzb3VyY2VCdWZmZXIsIG93bmVyKSk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH07XG4vLyBcbi8vIC8qKlxuLy8gICogQU5vZGUg55qE57yW6K+R5pa55rOV6ZuG5ZCI5a+56LGhXG4vLyAgKlxuLy8gICogQGlubmVyXG4vLyAgKi9cbi8vIHZhciBhTm9kZUNvbXBpbGVyID0ge1xuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+R6IqC54K5XG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmir3osaHoioLngrlcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu25a6e5L6L546v5aKDXG4vLyAgICAgICogQHBhcmFtIHtPYmplY3R9IGV4dHJhIOe8luivkeaJgOmcgOeahOS4gOS6m+mineWkluS/oeaBr1xuLy8gICAgICAqL1xuLy8gICAgIGNvbXBpbGU6IGZ1bmN0aW9uIChhTm9kZSwgc291cmNlQnVmZmVyLCBvd25lciwgZXh0cmEpIHtcbi8vICAgICAgICAgZXh0cmEgPSBleHRyYSB8fCB7fTtcbi8vICAgICAgICAgdmFyIGNvbXBpbGVNZXRob2QgPSAnY29tcGlsZUVsZW1lbnQnO1xuLy8gXG4vLyAgICAgICAgIGlmIChhTm9kZS50ZXh0RXhwcikge1xuLy8gICAgICAgICAgICAgY29tcGlsZU1ldGhvZCA9ICdjb21waWxlVGV4dCc7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZSBpZiAoYU5vZGUuZGlyZWN0aXZlc1snaWYnXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuLy8gICAgICAgICAgICAgY29tcGlsZU1ldGhvZCA9ICdjb21waWxlSWYnO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2UgaWYgKGFOb2RlLmRpcmVjdGl2ZXNbJ2ZvciddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4vLyAgICAgICAgICAgICBjb21waWxlTWV0aG9kID0gJ2NvbXBpbGVGb3InO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2UgaWYgKGFOb2RlLnRhZ05hbWUgPT09ICdzbG90Jykge1xuLy8gICAgICAgICAgICAgY29tcGlsZU1ldGhvZCA9ICdjb21waWxlU2xvdCc7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZSBpZiAoYU5vZGUudGFnTmFtZSA9PT0gJ3RlbXBsYXRlJykge1xuLy8gICAgICAgICAgICAgY29tcGlsZU1ldGhvZCA9ICdjb21waWxlVGVtcGxhdGUnO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgdmFyIENvbXBvbmVudFR5cGUgPSBvd25lci5nZXRDb21wb25lbnRUeXBlKGFOb2RlKTtcbi8vICAgICAgICAgICAgIGlmIChDb21wb25lbnRUeXBlKSB7XG4vLyAgICAgICAgICAgICAgICAgY29tcGlsZU1ldGhvZCA9ICdjb21waWxlQ29tcG9uZW50Jztcbi8vICAgICAgICAgICAgICAgICBleHRyYS5Db21wb25lbnRDbGFzcyA9IENvbXBvbmVudFR5cGU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICBhTm9kZUNvbXBpbGVyW2NvbXBpbGVNZXRob2RdKGFOb2RlLCBzb3VyY2VCdWZmZXIsIG93bmVyLCBleHRyYSk7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkeaWh+acrOiKgueCuVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg6IqC54K55a+56LGhXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICovXG4vLyAgICAgY29tcGlsZVRleHQ6IGZ1bmN0aW9uIChhTm9kZSwgc291cmNlQnVmZmVyKSB7XG4vLyAgICAgICAgIGlmIChhTm9kZS50ZXh0RXhwci5vcmlnaW5hbCkge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoc2VyaWFsaXplU3R1bXAoJ3RleHQnKSk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuam9pbkV4cHIoYU5vZGUudGV4dEV4cHIpO1xuLy8gXG4vLyAgICAgICAgIGlmIChhTm9kZS50ZXh0RXhwci5vcmlnaW5hbCkge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoc2VyaWFsaXplU3R1bXBFbmQoJ3RleHQnKSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+RdGVtcGxhdGXoioLngrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOiKgueCueWvueixoVxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7blrp7kvovnjq/looNcbi8vICAgICAgKi9cbi8vICAgICBjb21waWxlVGVtcGxhdGU6IGZ1bmN0aW9uIChhTm9kZSwgc291cmNlQnVmZmVyLCBvd25lcikge1xuLy8gICAgICAgICBlbGVtZW50U291cmNlQ29tcGlsZXIuaW5uZXIoc291cmNlQnVmZmVyLCBhTm9kZSwgb3duZXIpO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5EgaWYg6IqC54K5XG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDoioLngrnlr7nosaFcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu25a6e5L6L546v5aKDXG4vLyAgICAgICovXG4vLyAgICAgY29tcGlsZUlmOiBmdW5jdGlvbiAoYU5vZGUsIHNvdXJjZUJ1ZmZlciwgb3duZXIpIHtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnKGZ1bmN0aW9uICgpIHsnKTtcbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd2YXIgaWZJbmRleCA9IG51bGw7Jyk7XG4vLyBcbi8vICAgICAgICAgLy8gb3V0cHV0IG1haW4gaWZcbi8vICAgICAgICAgdmFyIGlmRGlyZWN0aXZlID0gYU5vZGUuZGlyZWN0aXZlc1snaWYnXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnaWYgKCcgKyBjb21waWxlRXhwclNvdXJjZS5leHByKGlmRGlyZWN0aXZlLnZhbHVlKSArICcpIHsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdyhcbi8vICAgICAgICAgICAgIGFOb2RlQ29tcGlsZXIuY29tcGlsZShcbi8vICAgICAgICAgICAgICAgICByaW5zZUNvbmRBTm9kZShhTm9kZSksXG4vLyAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLFxuLy8gICAgICAgICAgICAgICAgIG93bmVyXG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vIFxuLy8gICAgICAgICAvLyBvdXRwdXQgZWxpZiBhbmQgZWxzZVxuLy8gICAgICAgICBlYWNoKGFOb2RlLmVsc2VzLCBmdW5jdGlvbiAoZWxzZUFOb2RlLCBpbmRleCkge1xuLy8gICAgICAgICAgICAgdmFyIGVsaWZEaXJlY3RpdmUgPSBlbHNlQU5vZGUuZGlyZWN0aXZlcy5lbGlmO1xuLy8gICAgICAgICAgICAgaWYgKGVsaWZEaXJlY3RpdmUpIHtcbi8vICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdlbHNlIGlmICgnICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihlbGlmRGlyZWN0aXZlLnZhbHVlKSArICcpIHsnKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2Vsc2UgeycpO1xuLy8gICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KFxuLy8gICAgICAgICAgICAgICAgIGFOb2RlQ29tcGlsZXIuY29tcGlsZShcbi8vICAgICAgICAgICAgICAgICAgICAgcmluc2VDb25kQU5vZGUoZWxzZUFOb2RlKSxcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLFxuLy8gICAgICAgICAgICAgICAgICAgICBvd25lclxuLy8gICAgICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30pKCk7Jyk7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkSBmb3Ig6IqC54K5XG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDoioLngrnlr7nosaFcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu25a6e5L6L546v5aKDXG4vLyAgICAgICovXG4vLyAgICAgY29tcGlsZUZvcjogZnVuY3Rpb24gKGFOb2RlLCBzb3VyY2VCdWZmZXIsIG93bmVyKSB7XG4vLyAgICAgICAgIHZhciBmb3JFbGVtZW50QU5vZGUgPSBjcmVhdGVBTm9kZSh7XG4vLyAgICAgICAgICAgICBjaGlsZHJlbjogYU5vZGUuY2hpbGRyZW4sXG4vLyAgICAgICAgICAgICBwcm9wczogYU5vZGUucHJvcHMsXG4vLyAgICAgICAgICAgICBldmVudHM6IGFOb2RlLmV2ZW50cyxcbi8vICAgICAgICAgICAgIHRhZ05hbWU6IGFOb2RlLnRhZ05hbWUsXG4vLyAgICAgICAgICAgICBkaXJlY3RpdmVzOiBjbG9uZURpcmVjdGl2ZXMoYU5vZGUuZGlyZWN0aXZlcywge1xuLy8gICAgICAgICAgICAgICAgICdmb3InOiAxXG4vLyAgICAgICAgICAgICB9KSxcbi8vICAgICAgICAgICAgIGhvdHNwb3Q6IGFOb2RlLmhvdHNwb3Rcbi8vICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgdmFyIGZvckRpcmVjdGl2ZSA9IGFOb2RlLmRpcmVjdGl2ZXNbJ2ZvciddOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuLy8gICAgICAgICB2YXIgaXRlbU5hbWUgPSBmb3JEaXJlY3RpdmUuaXRlbS5yYXc7XG4vLyAgICAgICAgIHZhciBpbmRleE5hbWUgPSBmb3JEaXJlY3RpdmUuaW5kZXgucmF3O1xuLy8gICAgICAgICB2YXIgbGlzdE5hbWUgPSBjb21waWxlRXhwclNvdXJjZS5kYXRhQWNjZXNzKGZvckRpcmVjdGl2ZS52YWx1ZSk7XG4vLyBcbi8vICAgICAgICAgaWYgKGluZGV4TmFtZSA9PT0gJyRpbmRleCcpIHtcbi8vICAgICAgICAgICAgIGluZGV4TmFtZSA9IGd1aWQoKTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2ZvciAoJ1xuLy8gICAgICAgICAgICAgKyAndmFyICcgKyBpbmRleE5hbWUgKyAnID0gMDsgJ1xuLy8gICAgICAgICAgICAgKyBpbmRleE5hbWUgKyAnIDwgJyArIGxpc3ROYW1lICsgJy5sZW5ndGg7ICdcbi8vICAgICAgICAgICAgICsgaW5kZXhOYW1lICsgJysrKSB7J1xuLy8gICAgICAgICApO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdjb21wb25lbnRDdHguZGF0YS4nICsgaW5kZXhOYW1lICsgJz0nICsgaW5kZXhOYW1lICsgJzsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnY29tcG9uZW50Q3R4LmRhdGEuJyArIGl0ZW1OYW1lICsgJz0gJyArIGxpc3ROYW1lICsgJ1snICsgaW5kZXhOYW1lICsgJ107Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoXG4vLyAgICAgICAgICAgICBhTm9kZUNvbXBpbGVyLmNvbXBpbGUoXG4vLyAgICAgICAgICAgICAgICAgZm9yRWxlbWVudEFOb2RlLFxuLy8gICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlcixcbi8vICAgICAgICAgICAgICAgICBvd25lclxuLy8gICAgICAgICAgICAgKVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkSBzbG90IOiKgueCuVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg6IqC54K55a+56LGhXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tuWunuS+i+eOr+Wig1xuLy8gICAgICAqL1xuLy8gICAgIGNvbXBpbGVTbG90OiBmdW5jdGlvbiAoYU5vZGUsIHNvdXJjZUJ1ZmZlciwgb3duZXIpIHtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnKGZ1bmN0aW9uICgpIHsnKTtcbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdmdW5jdGlvbiAkZGVmYXVsdFNsb3RSZW5kZXIoY29tcG9uZW50Q3R4KSB7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgdmFyIGh0bWwgPSBcIlwiOycpO1xuLy8gICAgICAgICBlYWNoKGFOb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoYU5vZGVDaGlsZCkge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdyhhTm9kZUNvbXBpbGVyLmNvbXBpbGUoYU5vZGVDaGlsZCwgc291cmNlQnVmZmVyLCBvd25lcikpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICByZXR1cm4gaHRtbDsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgdmFyICRnaXZlblNsb3QgPSBbXTsnKTtcbi8vIFxuLy8gICAgICAgICB2YXIgbmFtZVByb3AgPSBnZXRBTm9kZVByb3AoYU5vZGUsICduYW1lJyk7XG4vLyAgICAgICAgIGlmIChuYW1lUHJvcCkge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygndmFyICRzbG90TmFtZSA9ICcgKyBjb21waWxlRXhwclNvdXJjZS5leHByKG5hbWVQcm9wLmV4cHIpICsgJzsnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ3ZhciAkc2xvdE5hbWUgPSBudWxsOycpO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygndmFyICRjdHhHaXZlblNsb3RzID0gY29tcG9uZW50Q3R4LmdpdmVuU2xvdHM7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2ZvciAodmFyICRpID0gMDsgJGkgPCAkY3R4R2l2ZW5TbG90cy5sZW5ndGg7ICRpKyspIHsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICBpZiAoJGN0eEdpdmVuU2xvdHNbJGldWzFdID09ICRzbG90TmFtZSkgeycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgICAgJGdpdmVuU2xvdC5wdXNoKCRjdHhHaXZlblNsb3RzWyRpXVswXSk7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgfScpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyBcbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd2YXIgJGlzSW5zZXJ0ZWQgPSAkZ2l2ZW5TbG90Lmxlbmd0aCA+IDA7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2lmICghJGlzSW5zZXJ0ZWQpIHsgJGdpdmVuU2xvdC5wdXNoKCRkZWZhdWx0U2xvdFJlbmRlcik7IH0nKTtcbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd2YXIgJHNsb3RDdHggPSAkaXNJbnNlcnRlZCA/IGNvbXBvbmVudEN0eC5vd25lciA6IGNvbXBvbmVudEN0eDsnKTtcbi8vICAgICAgICAgaWYgKGFOb2RlLnZhcnMpIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyRzbG90Q3R4ID0ge2RhdGE6IGV4dGVuZCh7fSwgJHNsb3RDdHguZGF0YSksIGZpbHRlcnM6ICRzbG90Q3R4LmZpbHRlcnMsIGNhbGxGaWx0ZXI6ICRzbG90Q3R4LmNhbGxGaWx0ZXJ9OycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4vLyAgICAgICAgICAgICBlYWNoKGFOb2RlLnZhcnMsIGZ1bmN0aW9uICh2YXJJdGVtKSB7XG4vLyAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdyhcbi8vICAgICAgICAgICAgICAgICAgICAgJyRzbG90Q3R4LmRhdGFbXCInICsgdmFySXRlbS5uYW1lICsgJ1wiXSA9ICdcbi8vICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHZhckl0ZW0uZXhwcilcbi8vICAgICAgICAgICAgICAgICAgICAgKyAnOydcbi8vICAgICAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdmb3IgKHZhciAkcmVuZGVySW5kZXggPSAwOyAkcmVuZGVySW5kZXggPCAkZ2l2ZW5TbG90Lmxlbmd0aDsgJHJlbmRlckluZGV4KyspIHsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICBodG1sICs9ICRnaXZlblNsb3RbJHJlbmRlckluZGV4XSgkc2xvdEN0eCk7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9KSgpOycpO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5Hmma7pgJroioLngrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOiKgueCueWvueixoVxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7blrp7kvovnjq/looNcbi8vICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXh0cmEg57yW6K+R5omA6ZyA55qE5LiA5Lqb6aKd5aSW5L+h5oGvXG4vLyAgICAgICovXG4vLyAgICAgY29tcGlsZUVsZW1lbnQ6IGZ1bmN0aW9uIChhTm9kZSwgc291cmNlQnVmZmVyLCBvd25lciwgZXh0cmEpIHtcbi8vICAgICAgICAgZXh0cmEgPSBleHRyYSB8fCB7fTtcbi8vICAgICAgICAgLy8gaWYgKGFOb2RlLnRhZ05hbWUgPT09ICdvcHRpb24nXG4vLyAgICAgICAgIC8vICAgICAmJiAhZ2V0QU5vZGVQcm9wKGFOb2RlLCAndmFsdWUnKVxuLy8gICAgICAgICAvLyAgICAgJiYgYU5vZGUuY2hpbGRyZW5bMF1cbi8vICAgICAgICAgLy8gKSB7XG4vLyAgICAgICAgIC8vICAgICBhTm9kZS5wcm9wcy5wdXNoKHtcbi8vICAgICAgICAgLy8gICAgICAgICBuYW1lOiAndmFsdWUnLFxuLy8gICAgICAgICAvLyAgICAgICAgIGV4cHI6IGFOb2RlLmNoaWxkcmVuWzBdLnRleHRFeHByXG4vLyAgICAgICAgIC8vICAgICB9KTtcbi8vICAgICAgICAgLy8gfVxuLy8gXG4vLyAgICAgICAgIGVsZW1lbnRTb3VyY2VDb21waWxlci50YWdTdGFydChcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlcixcbi8vICAgICAgICAgICAgIGFOb2RlLnRhZ05hbWUsXG4vLyAgICAgICAgICAgICBhTm9kZS5wcm9wcyxcbi8vICAgICAgICAgICAgIGV4dHJhLnByb3Bcbi8vICAgICAgICAgKTtcbi8vIFxuLy8gICAgICAgICBlbGVtZW50U291cmNlQ29tcGlsZXIuaW5uZXIoc291cmNlQnVmZmVyLCBhTm9kZSwgb3duZXIpO1xuLy8gICAgICAgICBlbGVtZW50U291cmNlQ29tcGlsZXIudGFnRW5kKHNvdXJjZUJ1ZmZlciwgYU5vZGUudGFnTmFtZSk7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkee7hOS7tuiKgueCuVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg6IqC54K55a+56LGhXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tuWunuS+i+eOr+Wig1xuLy8gICAgICAqIEBwYXJhbSB7T2JqZWN0fSBleHRyYSDnvJbor5HmiYDpnIDnmoTkuIDkupvpop3lpJbkv6Hmga9cbi8vICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBleHRyYS5Db21wb25lbnRDbGFzcyDlr7nlupTnu4Tku7bnsbtcbi8vICAgICAgKi9cbi8vICAgICBjb21waWxlQ29tcG9uZW50OiBmdW5jdGlvbiAoYU5vZGUsIHNvdXJjZUJ1ZmZlciwgb3duZXIsIGV4dHJhKSB7XG4vLyAgICAgICAgIGlmIChhTm9kZSkge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygndmFyICRzbG90TmFtZSA9IG51bGw7Jyk7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd2YXIgJGdpdmVuU2xvdHMgPSBbXTsnKTtcbi8vICAgICAgICAgICAgIGVhY2goYU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuLy8gICAgICAgICAgICAgICAgIHZhciBzbG90QmluZCA9ICFjaGlsZC50ZXh0RXhwciAmJiBnZXRBTm9kZVByb3AoY2hpbGQsICdzbG90Jyk7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHNsb3RCaW5kKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyRzbG90TmFtZSA9ICcgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHNsb3RCaW5kLmV4cHIpICsgJzsnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJGdpdmVuU2xvdHMucHVzaChbZnVuY3Rpb24gKGNvbXBvbmVudEN0eCkgeycpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIHZhciBodG1sID0gXCJcIjsnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdyhhTm9kZUNvbXBpbGVyLmNvbXBpbGUoY2hpbGQsIHNvdXJjZUJ1ZmZlciwgb3duZXIpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICByZXR1cm4gaHRtbDsnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfSwgJHNsb3ROYW1lXSk7Jyk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCckZ2l2ZW5TbG90cy5wdXNoKFtmdW5jdGlvbiAoY29tcG9uZW50Q3R4KSB7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgdmFyIGh0bWwgPSBcIlwiOycpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KGFOb2RlQ29tcGlsZXIuY29tcGlsZShjaGlsZCwgc291cmNlQnVmZmVyLCBvd25lcikpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIHJldHVybiBodG1sOycpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9XSk7Jyk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICB2YXIgQ29tcG9uZW50Q2xhc3MgPSBleHRyYS5Db21wb25lbnRDbGFzcztcbi8vICAgICAgICAgdmFyIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRDbGFzcyh7XG4vLyAgICAgICAgICAgICBhTm9kZTogYU5vZGUsXG4vLyAgICAgICAgICAgICBvd25lcjogb3duZXIsXG4vLyAgICAgICAgICAgICBzdWJUYWc6IGFOb2RlLnRhZ05hbWVcbi8vICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgdmFyIGdpdmVuRGF0YSA9IFtdO1xuLy8gXG4vLyAgICAgICAgIGVhY2goY29tcG9uZW50LmJpbmRzLCBmdW5jdGlvbiAocHJvcCkge1xuLy8gICAgICAgICAgICAgZ2l2ZW5EYXRhLnB1c2goXG4vLyAgICAgICAgICAgICAgICAgY29tcGlsZUV4cHJTb3VyY2Uuc3RyaW5nTGl0ZXJhbGl6ZShwcm9wLm5hbWUpXG4vLyAgICAgICAgICAgICAgICAgKyAnOidcbi8vICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmV4cHIocHJvcC5leHByKVxuLy8gICAgICAgICAgICAgKTtcbi8vICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnaHRtbCArPSAoJyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSZW5kZXJlclN0YXJ0KCk7XG4vLyAgICAgICAgIGNvbXBpbGVDb21wb25lbnRTb3VyY2Uoc291cmNlQnVmZmVyLCBjb21wb25lbnQsIGV4dHJhICYmIGV4dHJhLnByb3ApO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmVuZGVyZXJFbmQoKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnKSh7JyArIGdpdmVuRGF0YS5qb2luKCcsXFxuJykgKyAnfSwgY29tcG9uZW50Q3R4LCAkZ2l2ZW5TbG90cyk7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyRnaXZlblNsb3RzID0gbnVsbDsnKTtcbi8vICAgICB9XG4vLyB9O1xuLy8gLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG4vLyBcbi8vIC8qKlxuLy8gICog55Sf5oiQ57uE5Lu2IHJlbmRlcmVyIOaXtiBjdHgg5a+56LGh5p6E5bu655qE5Luj56CBXG4vLyAgKlxuLy8gICogQGlubmVyXG4vLyAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnQg57uE5Lu25a6e5L6LXG4vLyAgKiBAcGFyYW0ge3N0cmluZz99IGV4dHJhUHJvcCDpop3lpJbnmoTlsZ7mgKfkuLJcbi8vICAqL1xuLy8gZnVuY3Rpb24gY29tcGlsZUNvbXBvbmVudFNvdXJjZShzb3VyY2VCdWZmZXIsIGNvbXBvbmVudCwgZXh0cmFQcm9wKSB7XG4vLyAgICAgc291cmNlQnVmZmVyLmFkZFJhdyhnZW5Db21wb25lbnRDb250ZXh0Q29kZShjb21wb25lbnQpKTtcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdjb21wb25lbnRDdHgub3duZXIgPSBwYXJlbnRDdHg7Jyk7XG4vLyAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnY29tcG9uZW50Q3R4LmdpdmVuU2xvdHMgPSBnaXZlblNsb3RzOycpO1xuLy8gXG4vLyBcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdkYXRhID0gZXh0ZW5kKGNvbXBvbmVudEN0eC5kYXRhLCBkYXRhKTsnKTtcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdmb3IgKHZhciAkaSA9IDA7ICRpIDwgY29tcG9uZW50Q3R4LmNvbXB1dGVkTmFtZXMubGVuZ3RoOyAkaSsrKSB7Jyk7XG4vLyAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICB2YXIgJGNvbXB1dGVkTmFtZSA9IGNvbXBvbmVudEN0eC5jb21wdXRlZE5hbWVzWyRpXTsnKTtcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIGRhdGFbJGNvbXB1dGVkTmFtZV0gPSBjb21wb25lbnRDdHguY29tcHV0ZWRbJGNvbXB1dGVkTmFtZV0oKTsnKTtcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyBcbi8vICAgICBleHRyYVByb3AgPSBleHRyYVByb3AgfHwgJyc7XG4vLyBcbi8vICAgICB2YXIgZXZlbnREZWNsYXJhdGlvbnMgPSBbXTtcbi8vICAgICBmb3IgKHZhciBrZXkgaW4gY29tcG9uZW50Lmxpc3RlbmVycykge1xuLy8gICAgICAgICBlYWNoKGNvbXBvbmVudC5saXN0ZW5lcnNba2V5XSwgZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4vLyAgICAgICAgICAgICBpZiAobGlzdGVuZXIuZGVjbGFyYXRpb24pIHtcbi8vICAgICAgICAgICAgICAgICBldmVudERlY2xhcmF0aW9ucy5wdXNoKGxpc3RlbmVyLmRlY2xhcmF0aW9uKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSk7XG4vLyAgICAgfVxuLy8gXG4vLyAgICAgZWxlbWVudFNvdXJjZUNvbXBpbGVyLnRhZ1N0YXJ0KFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIsXG4vLyAgICAgICAgIGNvbXBvbmVudC50YWdOYW1lLFxuLy8gICAgICAgICBjb21wb25lbnQuYU5vZGUucHJvcHMsXG4vLyAgICAgICAgIGV4dHJhUHJvcFxuLy8gICAgICk7XG4vLyBcbi8vICAgICBpZiAoIWNvbXBvbmVudC5vd25lcikge1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZygnPCEtLXMtZGF0YTonKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5EYXRhU3RyaW5naWZ5KCk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCctLT4nKTtcbi8vICAgICB9XG4vLyBcbi8vIFxuLy8gXG4vLyAgICAgZWxlbWVudFNvdXJjZUNvbXBpbGVyLmlubmVyKHNvdXJjZUJ1ZmZlciwgY29tcG9uZW50LmFOb2RlLCBjb21wb25lbnQpO1xuLy8gICAgIGVsZW1lbnRTb3VyY2VDb21waWxlci50YWdFbmQoc291cmNlQnVmZmVyLCBjb21wb25lbnQudGFnTmFtZSk7XG4vLyB9XG4vLyBcbi8vIHZhciBzdHJpbmdpZmllciA9IHtcbi8vICAgICBvYmo6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgdmFyIHByZWZpeENvbW1hO1xuLy8gICAgICAgICB2YXIgcmVzdWx0ID0gJ3snO1xuLy8gXG4vLyAgICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4vLyAgICAgICAgICAgICAgICAgY29udGludWU7XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIGlmIChwcmVmaXhDb21tYSkge1xuLy8gICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBwcmVmaXhDb21tYSA9IDE7XG4vLyBcbi8vICAgICAgICAgICAgIHJlc3VsdCArPSBjb21waWxlRXhwclNvdXJjZS5zdHJpbmdMaXRlcmFsaXplKGtleSkgKyAnOicgKyBzdHJpbmdpZmllci5hbnkoc291cmNlW2tleV0pO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgcmV0dXJuIHJlc3VsdCArICd9Jztcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgYXJyOiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgIHZhciBwcmVmaXhDb21tYTtcbi8vICAgICAgICAgdmFyIHJlc3VsdCA9ICdbJztcbi8vIFxuLy8gICAgICAgICBlYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4vLyAgICAgICAgICAgICBpZiAocHJlZml4Q29tbWEpIHtcbi8vICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJywnO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcHJlZml4Q29tbWEgPSAxO1xuLy8gXG4vLyAgICAgICAgICAgICByZXN1bHQgKz0gc3RyaW5naWZpZXIuYW55KHZhbHVlKTtcbi8vICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgcmV0dXJuIHJlc3VsdCArICddJztcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgc3RyOiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgIHJldHVybiBjb21waWxlRXhwclNvdXJjZS5zdHJpbmdMaXRlcmFsaXplKHNvdXJjZSk7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIGRhdGU6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgcmV0dXJuICduZXcgRGF0ZSgnICsgc291cmNlLmdldFRpbWUoKSArICcpJztcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgYW55OiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgIHN3aXRjaCAodHlwZW9mIHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZpZXIuc3RyKHNvdXJjZSk7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuICcnICsgc291cmNlO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlID8gJ3RydWUnIDogJ2ZhbHNlJztcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSAnb2JqZWN0Jzpcbi8vICAgICAgICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmaWVyLmFycihzb3VyY2UpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBEYXRlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZmllci5kYXRlKHNvdXJjZSk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmaWVyLm9iaihzb3VyY2UpO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgU3RyaW5naWZ5OicgKyBzb3VyY2UpO1xuLy8gICAgIH1cbi8vIH07XG4vLyBcbi8vIC8qKlxuLy8gICog55Sf5oiQ57uE5Lu2IHJlbmRlcmVyIOaXtiBjdHgg5a+56LGh5p6E5bu655qE5Luj56CBXG4vLyAgKlxuLy8gICogQGlubmVyXG4vLyAgKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50IOe7hOS7tuWunuS+i1xuLy8gICogQHJldHVybiB7c3RyaW5nfVxuLy8gICovXG4vLyBmdW5jdGlvbiBnZW5Db21wb25lbnRDb250ZXh0Q29kZShjb21wb25lbnQpIHtcbi8vICAgICB2YXIgY29kZSA9IFsndmFyIGNvbXBvbmVudEN0eCA9IHsnXTtcbi8vIFxuLy8gICAgIC8vIGdpdmVuIGFub2RlXG4vLyAgICAgY29kZS5wdXNoKCdnaXZlblNsb3RzOiBbXSwnKTtcbi8vIFxuLy8gICAgIC8vIGZpbHRlcnNcbi8vICAgICBjb2RlLnB1c2goJ2ZpbHRlcnM6IHsnKTtcbi8vICAgICB2YXIgZmlsdGVyQ29kZSA9IFtdO1xuLy8gICAgIGZvciAodmFyIGtleSBpbiBjb21wb25lbnQuZmlsdGVycykge1xuLy8gICAgICAgICB2YXIgZmlsdGVyID0gY29tcG9uZW50LmZpbHRlcnNba2V5XTtcbi8vIFxuLy8gICAgICAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuLy8gICAgICAgICAgICAgZmlsdGVyQ29kZS5wdXNoKGtleSArICc6ICcgKyBmaWx0ZXIudG9TdHJpbmcoKSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29kZS5wdXNoKGZpbHRlckNvZGUuam9pbignLCcpKTtcbi8vICAgICBjb2RlLnB1c2goJ30sJyk7XG4vLyBcbi8vICAgICBjb2RlLnB1c2goXG4vLyAgICAgICAgICdjYWxsRmlsdGVyOiBmdW5jdGlvbiAobmFtZSwgYXJncykgeycsXG4vLyAgICAgICAgICcgICAgdmFyIGZpbHRlciA9IHRoaXMuZmlsdGVyc1tuYW1lXSB8fCBERUZBVUxUX0ZJTFRFUlNbbmFtZV07Jyxcbi8vICAgICAgICAgJyAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gXCJmdW5jdGlvblwiKSB7Jyxcbi8vICAgICAgICAgJyAgICAgICAgcmV0dXJuIGZpbHRlci5hcHBseSh0aGlzLCBhcmdzKTsnLFxuLy8gICAgICAgICAnICAgIH0nLFxuLy8gICAgICAgICAnfSwnXG4vLyAgICAgKTtcbi8vIFxuLy8gICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlZGVjbGFyZSAqL1xuLy8gICAgIC8vIGNvbXB1dGVkIG9ialxuLy8gICAgIGNvZGUucHVzaCgnY29tcHV0ZWQ6IHsnKTtcbi8vICAgICB2YXIgY29tcHV0ZWRDb2RlID0gW107XG4vLyAgICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudC5jb21wdXRlZCkge1xuLy8gICAgICAgICB2YXIgY29tcHV0ZWQgPSBjb21wb25lbnQuY29tcHV0ZWRba2V5XTtcbi8vIFxuLy8gICAgICAgICBpZiAodHlwZW9mIGNvbXB1dGVkID09PSAnZnVuY3Rpb24nKSB7XG4vLyAgICAgICAgICAgICBjb21wdXRlZENvZGUucHVzaChrZXkgKyAnOiAnXG4vLyAgICAgICAgICAgICAgICAgKyBjb21wdXRlZC50b1N0cmluZygpLnJlcGxhY2UoXG4vLyAgICAgICAgICAgICAgICAgICAgIC90aGlzLmRhdGEuZ2V0XFwoKFteXFwpXSspXFwpL2csXG4vLyAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgZXhwckxpdGVyYWwpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHByU3RyID0gKG5ldyBGdW5jdGlvbigncmV0dXJuICcgKyBleHByTGl0ZXJhbCkpKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhwciA9IHBhcnNlRXhwcihleHByU3RyKTtcbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGVFeHByU291cmNlLmV4cHIoZXhwcik7XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICApO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGNvZGUucHVzaChjb21wdXRlZENvZGUuam9pbignLCcpKTtcbi8vICAgICBjb2RlLnB1c2goJ30sJyk7XG4vLyBcbi8vICAgICAvLyBjb21wdXRlZCBuYW1lc1xuLy8gICAgIGNvZGUucHVzaCgnY29tcHV0ZWROYW1lczogWycpO1xuLy8gICAgIGNvbXB1dGVkQ29kZSA9IFtdO1xuLy8gICAgIGZvciAodmFyIGtleSBpbiBjb21wb25lbnQuY29tcHV0ZWQpIHtcbi8vICAgICAgICAgdmFyIGNvbXB1dGVkID0gY29tcG9uZW50LmNvbXB1dGVkW2tleV07XG4vLyBcbi8vICAgICAgICAgaWYgKHR5cGVvZiBjb21wdXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuLy8gICAgICAgICAgICAgY29tcHV0ZWRDb2RlLnB1c2goJ1wiJyArIGtleSArICdcIicpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGNvZGUucHVzaChjb21wdXRlZENvZGUuam9pbignLCcpKTtcbi8vICAgICBjb2RlLnB1c2goJ10sJyk7XG4vLyAgICAgLyogZXNsaW50LWVuYWJsZSBuby1yZWRlY2xhcmUgKi9cbi8vIFxuLy8gICAgIC8vIGRhdGFcbi8vICAgICBjb2RlLnB1c2goJ2RhdGE6ICcgKyBzdHJpbmdpZmllci5hbnkoY29tcG9uZW50LmRhdGEuZ2V0KCkpICsgJywnKTtcbi8vIFxuLy8gICAgIC8vIHRhZ05hbWVcbi8vICAgICBjb2RlLnB1c2goJ3RhZ05hbWU6IFwiJyArIGNvbXBvbmVudC50YWdOYW1lICsgJ1wiJyk7XG4vLyAgICAgY29kZS5wdXNoKCd9OycpO1xuLy8gXG4vLyAgICAgcmV0dXJuIGNvZGUuam9pbignXFxuJyk7XG4vLyB9XG4vLyBcbi8vIC8qIGVzbGludC1lbmFibGUgZ3VhcmQtZm9yLWluICovXG4vLyBcbi8vIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyAvKiBlc2xpbnQtZGlzYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuLy8gXG4vLyAvKipcbi8vICAqIOe7hOS7tue8luivkeeahOaooeadv+WHveaVsFxuLy8gICpcbi8vICAqIEBpbm5lclxuLy8gICovXG4vLyBmdW5jdGlvbiBjb21wb25lbnRDb21waWxlUHJlQ29kZSgpIHtcbi8vICAgICB2YXIgJHZlcnNpb24gPSAnMy41LjcnO1xuLy8gXG4vLyAgICAgZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XG4vLyAgICAgICAgIGlmIChzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4vLyAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gc291cmNlW2tleV07XG4vLyAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4vLyAgICAgfVxuLy8gXG4vLyAgICAgZnVuY3Rpb24gZWFjaChhcnJheSwgaXRlcmF0b3IpIHtcbi8vICAgICAgICAgaWYgKGFycmF5ICYmIGFycmF5Lmxlbmd0aCA+IDApIHtcbi8vICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yKGFycmF5W2ldLCBpKSA9PT0gZmFsc2UpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gXG4vLyAgICAgZnVuY3Rpb24gY29udGFpbnMoYXJyYXksIHZhbHVlKSB7XG4vLyAgICAgICAgIHZhciByZXN1bHQ7XG4vLyAgICAgICAgIGVhY2goYXJyYXksIGZ1bmN0aW9uIChpdGVtKSB7XG4vLyAgICAgICAgICAgICByZXN1bHQgPSBpdGVtID09PSB2YWx1ZTtcbi8vICAgICAgICAgICAgIHJldHVybiAhcmVzdWx0O1xuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICAgIH1cbi8vIFxuLy8gICAgIHZhciBIVE1MX0VOVElUWSA9IHtcbi8vICAgICAgICAgLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuLy8gICAgICAgICAnJic6ICcmYW1wOycsXG4vLyAgICAgICAgICc8JzogJyZsdDsnLFxuLy8gICAgICAgICAnPic6ICcmZ3Q7Jyxcbi8vICAgICAgICAgJ1wiJzogJyZxdW90OycsXG4vLyAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIHF1b3RlcyAqL1xuLy8gICAgICAgICBcIidcIjogJyYjMzk7J1xuLy8gICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIHF1b3RlcyAqL1xuLy8gICAgICAgICAvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuLy8gICAgIH07XG4vLyBcbi8vICAgICBmdW5jdGlvbiBodG1sRmlsdGVyUmVwbGFjZXIoYykge1xuLy8gICAgICAgICByZXR1cm4gSFRNTF9FTlRJVFlbY107XG4vLyAgICAgfVxuLy8gXG4vLyAgICAgZnVuY3Rpb24gZXNjYXBlSFRNTChzb3VyY2UpIHtcbi8vICAgICAgICAgaWYgKHNvdXJjZSA9PSBudWxsKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gJyc7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICByZXR1cm4gU3RyaW5nKHNvdXJjZSkucmVwbGFjZSgvWyY8PlwiJ10vZywgaHRtbEZpbHRlclJlcGxhY2VyKTtcbi8vICAgICB9XG4vLyBcbi8vICAgICB2YXIgREVGQVVMVF9GSUxURVJTID0ge1xuLy8gICAgICAgICB1cmw6IGVuY29kZVVSSUNvbXBvbmVudCxcbi8vICAgICAgICAgX2NsYXNzOiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlLmpvaW4oJyAnKTtcbi8vICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgX3N0eWxlOiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcbi8vICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGtleSArICc6JyArIHNvdXJjZVtrZXldICsgJzsnO1xuLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICByZXR1cm4gc291cmNlIHx8ICcnO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBfc2VwOiBmdW5jdGlvbiAoc291cmNlLCBzZXApIHtcbi8vICAgICAgICAgICAgIHJldHVybiBzb3VyY2UgPyBzZXAgKyBzb3VyY2UgOiAnJztcbi8vICAgICAgICAgfVxuLy8gICAgIH07XG4vLyBcbi8vICAgICBmdW5jdGlvbiBhdHRyRmlsdGVyKG5hbWUsIHZhbHVlKSB7XG4vLyAgICAgICAgIGlmICh2YWx1ZSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuICcgJyArIG5hbWUgKyAnPVwiJyArIHZhbHVlICsgJ1wiJztcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHJldHVybiAnJztcbi8vICAgICB9XG4vLyBcbi8vICAgICBmdW5jdGlvbiBib29sQXR0ckZpbHRlcihuYW1lLCB2YWx1ZSkge1xuLy8gICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUgIT09ICdmYWxzZScgJiYgdmFsdWUgIT09ICcwJykge1xuLy8gICAgICAgICAgICAgcmV0dXJuICcgJyArIG5hbWU7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICByZXR1cm4gJyc7XG4vLyAgICAgfVxuLy8gXG4vLyAgICAgZnVuY3Rpb24gc3RyaW5nTGl0ZXJhbGl6ZShzb3VyY2UpIHtcbi8vICAgICAgICAgcmV0dXJuICdcIidcbi8vICAgICAgICAgICAgICsgc291cmNlXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xceDVDL2csICdcXFxcXFxcXCcpXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHgwQS9nLCAnXFxcXG4nKVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHgwOS9nLCAnXFxcXHQnKVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHgwRC9nLCAnXFxcXHInKVxuLy8gICAgICAgICAgICAgKyAnXCInO1xuLy8gICAgIH1cbi8vIFxuLy8gICAgIHZhciBzdHJpbmdpZmllciA9IHtcbi8vICAgICAgICAgb2JqOiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgICAgICB2YXIgcHJlZml4Q29tbWE7XG4vLyAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gJ3snO1xuLy8gXG4vLyAgICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuLy8gICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgICAgICBpZiAocHJlZml4Q29tbWEpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcsJztcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgcHJlZml4Q29tbWEgPSAxO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHN0cmluZ0xpdGVyYWxpemUoa2V5KSArICc6JyArIHN0cmluZ2lmaWVyLmFueShzb3VyY2Vba2V5XSk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArICd9Jztcbi8vICAgICAgICAgfSxcbi8vIFxuLy8gICAgICAgICBhcnI6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIHZhciBwcmVmaXhDb21tYTtcbi8vICAgICAgICAgICAgIHZhciByZXN1bHQgPSAnWyc7XG4vLyBcbi8vICAgICAgICAgICAgIGVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgICBpZiAocHJlZml4Q29tbWEpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcsJztcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgcHJlZml4Q29tbWEgPSAxO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHN0cmluZ2lmaWVyLmFueSh2YWx1ZSk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCArICddJztcbi8vICAgICAgICAgfSxcbi8vIFxuLy8gICAgICAgICBzdHI6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBzdHJpbmdMaXRlcmFsaXplKHNvdXJjZSk7XG4vLyAgICAgICAgIH0sXG4vLyBcbi8vICAgICAgICAgZGF0ZTogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuICduZXcgRGF0ZSgnICsgc291cmNlLmdldFRpbWUoKSArICcpJztcbi8vICAgICAgICAgfSxcbi8vIFxuLy8gICAgICAgICBhbnk6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZmllci5zdHIoc291cmNlKTtcbi8vIFxuLy8gICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJyArIHNvdXJjZTtcbi8vIFxuLy8gICAgICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlID8gJ3RydWUnIDogJ2ZhbHNlJztcbi8vIFxuLy8gICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmaWVyLmFycihzb3VyY2UpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIERhdGUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZmllci5kYXRlKHNvdXJjZSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZpZXIub2JqKHNvdXJjZSk7XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IFN0cmluZ2lmeTonICsgc291cmNlKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH07XG4vLyB9XG4vLyAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyAvKiBlc2xpbnQtZW5hYmxlIGZlY3MtY2FtZWxjYXNlICovXG4vLyBcbi8vIC8qKlxuLy8gICog5bCG57uE5Lu257yW6K+R5oiQIHJlbmRlciDmlrnms5XnmoQganMg5rqQ56CBXG4vLyAgKlxuLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gQ29tcG9uZW50Q2xhc3Mg57uE5Lu257G7XG4vLyAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgKi9cbi8vIGZ1bmN0aW9uIGNvbXBpbGVKU1NvdXJjZShDb21wb25lbnRDbGFzcykge1xuLy8gICAgIHZhciBzb3VyY2VCdWZmZXIgPSBuZXcgQ29tcGlsZVNvdXJjZUJ1ZmZlcigpO1xuLy8gXG4vLyAgICAgc291cmNlQnVmZmVyLmFkZFJlbmRlcmVyU3RhcnQoKTtcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KFxuLy8gICAgICAgICBjb21wb25lbnRDb21waWxlUHJlQ29kZS50b1N0cmluZygpXG4vLyAgICAgICAgICAgICAuc3BsaXQoJ1xcbicpXG4vLyAgICAgICAgICAgICAuc2xpY2UoMSlcbi8vICAgICAgICAgICAgIC5qb2luKCdcXG4nKVxuLy8gICAgICAgICAgICAgLnJlcGxhY2UoL1xcfVxccyokLywgJycpXG4vLyAgICAgKTtcbi8vIFxuLy8gICAgIC8vIOWFiOWIneWni+WMluS4quWunuS+i++8jOiuqeaooeadv+e8luivkeaIkCBBTm9kZe+8jOW5tuS4lOiDveiOt+W+l+WIneWni+WMluaVsOaNrlxuLy8gICAgIHZhciBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50Q2xhc3MoKTtcbi8vIFxuLy8gICAgIGNvbXBpbGVDb21wb25lbnRTb3VyY2Uoc291cmNlQnVmZmVyLCBjb21wb25lbnQpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSZW5kZXJlckVuZCgpO1xuLy8gICAgIHJldHVybiBzb3VyY2VCdWZmZXIudG9Db2RlKCk7XG4vLyB9XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY29tcGlsZUpTU291cmNlO1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vICAgICB2YXIgbmV4dFRpY2sgPSByZXF1aXJlKCcuL3V0aWwvbmV4dC10aWNrJyk7XG4vLyAgICAgdmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi91dGlsL2luaGVyaXRzJyk7XG4vLyAgICAgdmFyIHBhcnNlVGVtcGxhdGUgPSByZXF1aXJlKCcuL3BhcnNlci9wYXJzZS10ZW1wbGF0ZScpO1xuLy8gICAgIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuL3BhcnNlci9wYXJzZS1leHByJyk7XG4vLyAgICAgdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyAgICAgdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vdmlldy9saWZlLWN5Y2xlJyk7XG4vLyAgICAgdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi92aWV3L25vZGUtdHlwZScpO1xuLy8gICAgIHZhciBDb21wb25lbnQgPSByZXF1aXJlKCcuL3ZpZXcvY29tcG9uZW50Jyk7XG4vLyAgICAgdmFyIGNvbXBpbGVDb21wb25lbnQgPSByZXF1aXJlKCcuL3ZpZXcvY29tcGlsZS1jb21wb25lbnQnKTtcbi8vICAgICB2YXIgZGVmaW5lQ29tcG9uZW50ID0gcmVxdWlyZSgnLi92aWV3L2RlZmluZS1jb21wb25lbnQnKTtcbi8vICAgICB2YXIgZW1pdERldnRvb2wgPSByZXF1aXJlKCcuL3V0aWwvZW1pdC1kZXZ0b29sJyk7XG4vLyAgICAgdmFyIGNvbXBpbGVKU1NvdXJjZSA9IHJlcXVpcmUoJy4vdmlldy9jb21waWxlLWpzLXNvdXJjZScpO1xuLy8gICAgIHZhciBEYXRhID0gcmVxdWlyZSgnLi9ydW50aW1lL2RhdGEnKTtcbi8vICAgICB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyAgICAgdmFyIERhdGFUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbC9kYXRhLXR5cGVzJyk7XG5cblxuICAgIHZhciBzYW4gPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzYW7niYjmnKzlj7dcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHZlcnNpb246ICczLjUuNycsXG5cbiAgICAgICAgLy8gI1tiZWdpbl0gZGV2dG9vbFxuICAgICAgICAvKipcbiAgICAgICAgICog5piv5ZCm5byA5ZCv6LCD6K+V44CC5byA5ZCv6LCD6K+V5pe2IGRldnRvb2wg5Lya5bel5L2cXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgZGVidWc6IHRydWUsXG4gICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgIC8vICNbYmVnaW5dIHNzclxuLy8gICAgICAgICAvKipcbi8vICAgICAgICAgICog5bCG57uE5Lu257G757yW6K+R5oiQIHJlbmRlcmVyIOaWueazlVxuLy8gICAgICAgICAgKlxuLy8gICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbi8vICAgICAgICAgICogQHJldHVybiB7ZnVuY3Rpb24oT2JqZWN0KTpzdHJpbmd9XG4vLyAgICAgICAgICAqL1xuLy8gICAgICAgICBjb21waWxlVG9SZW5kZXJlcjogZnVuY3Rpb24gKENvbXBvbmVudENsYXNzKSB7XG4vLyAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBDb21wb25lbnRDbGFzcy5fX3NzclJlbmRlcmVyO1xuLy8gXG4vLyAgICAgICAgICAgICBpZiAoIXJlbmRlcmVyKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBjb21waWxlSlNTb3VyY2UoQ29tcG9uZW50Q2xhc3MpO1xuLy8gICAgICAgICAgICAgICAgIHJlbmRlcmVyID0gKG5ldyBGdW5jdGlvbigncmV0dXJuICcgKyBjb2RlKSkoKTtcbi8vICAgICAgICAgICAgICAgICBDb21wb25lbnRDbGFzcy5fX3NzclJlbmRlcmVyID0gcmVuZGVyZXI7XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIHJldHVybiByZW5kZXJlcjtcbi8vICAgICAgICAgfSxcbi8vIFxuLy8gICAgICAgICAvKipcbi8vICAgICAgICAgICog5bCG57uE5Lu257G757yW6K+R5oiQIHJlbmRlcmVyIOaWueazleeahOa6kOaWh+S7tlxuLy8gICAgICAgICAgKlxuLy8gICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbi8vICAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuLy8gICAgICAgICAgKi9cbi8vICAgICAgICAgY29tcGlsZVRvU291cmNlOiBjb21waWxlSlNTb3VyY2UsXG4gICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnu4Tku7bln7rnsbtcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAgICAgKi9cbiAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWIm+W7uue7hOS7tuexu1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvdG8g57uE5Lu257G755qE5pa55rOV6KGoXG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgICAgICAgKi9cbiAgICAgICAgZGVmaW5lQ29tcG9uZW50OiBkZWZpbmVDb21wb25lbnQsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOe8luivkee7hOS7tuexu+OAgumihOino+aekHRlbXBsYXRl5ZKMY29tcG9uZW50c1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbiAgICAgICAgICovXG4gICAgICAgIGNvbXBpbGVDb21wb25lbnQ6IGNvbXBpbGVDb21wb25lbnQsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOino+aekCB0ZW1wbGF0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSB0ZW1wbGF0ZSDmupDnoIFcbiAgICAgICAgICogQHJldHVybiB7QU5vZGV9XG4gICAgICAgICAqL1xuICAgICAgICBwYXJzZVRlbXBsYXRlOiBwYXJzZVRlbXBsYXRlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6PmnpDooajovr7lvI9cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDnoIFcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgcGFyc2VFeHByOiBwYXJzZUV4cHIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOihqOi+vuW8j+exu+Wei+aemuS4vlxuICAgICAgICAgKlxuICAgICAgICAgKiBAY29uc3RcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIEV4cHJUeXBlOiBFeHByVHlwZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog55Sf5ZG95ZGo5pyfXG4gICAgICAgICAqL1xuICAgICAgICBMaWZlQ3ljbGU6IExpZmVDeWNsZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog6IqC54K557G75Z6LXG4gICAgICAgICAqXG4gICAgICAgICAqIEBjb25zdFxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgTm9kZVR5cGU6IE5vZGVUeXBlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlnKjkuIvkuIDkuKrmm7TmlrDlkajmnJ/ov5DooYzlh73mlbBcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g6KaB6L+Q6KGM55qE5Ye95pWwXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0VGljazogbmV4dFRpY2ssXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaVsOaNruexu1xuICAgICAgICAgKlxuICAgICAgICAgKiBAY2xhc3NcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3Q/fSBkYXRhIOWIneWni+aVsOaNrlxuICAgICAgICAgKiBAcGFyYW0ge0RhdGE/fSBwYXJlbnQg54i257qn5pWw5o2u5a+56LGhXG4gICAgICAgICAqL1xuICAgICAgICBEYXRhOiBEYXRhLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDorqHnrpfooajovr7lvI/nmoTlgLxcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGV4cHIg6KGo6L6+5byP5a+56LGhXG4gICAgICAgICAqIEBwYXJhbSB7RGF0YX0gZGF0YSDmlbDmja7lr7nosaFcbiAgICAgICAgICogQHBhcmFtIHtDb21wb25lbnQ9fSBvd25lciDnu4Tku7blr7nosaHvvIznlKjkuo7ooajovr7lvI/kuK1maWx0ZXLnmoTmiafooYxcbiAgICAgICAgICogQHJldHVybiB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGV2YWxFeHByOiBldmFsRXhwcixcblxuICAgICAgICAvKipcbiAgICAgICAgICog5p6E5bu657G75LmL6Ze055qE57un5om/5YWz57O7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YkNsYXNzIOWtkOexu+WHveaVsFxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdXBlckNsYXNzIOeItuexu+WHveaVsFxuICAgICAgICAgKi9cbiAgICAgICAgaW5oZXJpdHM6IGluaGVyaXRzLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRhVHlwZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIERhdGFUeXBlczogRGF0YVR5cGVzXG4gICAgfTtcblxuICAgIC8vIGV4cG9ydFxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gRm9yIENvbW1vbkpTXG4gICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHNhbjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEZvciBBTURcbiAgICAgICAgZGVmaW5lKCdzYW4nLCBbXSwgc2FuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIEZvciA8c2NyaXB0IHNyYz1cIi4uLlwiXG4gICAgICAgIHJvb3Quc2FuID0gc2FuO1xuICAgIH1cblxuICAgIC8vICNbYmVnaW5dIGRldnRvb2xcbiAgICBlbWl0RGV2dG9vbC5zdGFydChzYW4pO1xuICAgIC8vICNbZW5kXVxufSkodGhpcyk7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vcy10cmFuc2l0aW9uLnNhblwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vcy10cmFuc2l0aW9uLnNhblwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL3MtdHJhbnNpdGlvbi5zYW5cIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHNhbiBmcm9tIFwic2FuXCI7XG5pbXBvcnQgeyByb3V0ZXIgfSBmcm9tIFwic2FuLXJvdXRlclwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi92aWV3L3MtdHJhbnNpdGlvbi5zYW5cIjtcblxucm91dGVyLmFkZCh7IHJ1bGU6ICcvJywgQ29tcG9uZW50OiBBcHAsIHRhcmdldDogJyNhcHAnIH0pO1xucm91dGVyLnN0YXJ0KCk7XG5jb25zb2xlLmxvZygnU2VydmVyIHN0YXJ0cy4nKTtcbiIsInZhciBfX3Nhbl9zY3JpcHRfXywgX19zYW5fdGVtcGxhdGVfX1xudmFyIF9fc2FuX3N0eWxlc19fID0ge31cbnJlcXVpcmUoXCIhIXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL3MtdHJhbnNpdGlvbi5zYW5cIilcbl9fc2FuX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vcy10cmFuc2l0aW9uLnNhblwiKVxuaWYgKF9fc2FuX3NjcmlwdF9fICYmXG4gICAgX19zYW5fc2NyaXB0X18uX19lc01vZHVsZSAmJlxuICAgIE9iamVjdC5rZXlzKF9fc2FuX3NjcmlwdF9fKS5sZW5ndGggPiAxKSB7XG4gIGNvbnNvbGUud2FybihcIltzYW4tbG9hZGVyXSBzcmMvdmlldy9zLXRyYW5zaXRpb24uc2FuOiBuYW1lZCBleHBvcnRzIGluICouc2FuIGZpbGVzIGFyZSBpZ25vcmVkLlwiKX1cbl9fc2FuX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISFodG1sLWxvYWRlcj9taW5pbWl6ZT1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcy10cmFuc2l0aW9uLnNhblwiKVxudmFyIF9fc2FuX3Byb3RvX18gPSB7fVxuaWYgKF9fc2FuX3NjcmlwdF9fKSB7XG4gIF9fc2FuX3Byb3RvX18gPSBfX3Nhbl9zY3JpcHRfXy5fX2VzTW9kdWxlXG4gICAgPyBfX3Nhbl9zY3JpcHRfX1snZGVmYXVsdCddXG4gICAgOiBfX3Nhbl9zY3JpcHRfX1xufVxuaWYgKF9fc2FuX3RlbXBsYXRlX18pIHtcbiAgX19zYW5fcHJvdG9fXy50ZW1wbGF0ZSA9IF9fc2FuX3RlbXBsYXRlX19cbn1cbnZhciBzYW4gPSByZXF1aXJlKFwic2FuXCIpXG52YXIgX19zYW5fZXhwb3J0c19fID0gc2FuLmRlZmluZUNvbXBvbmVudChfX3Nhbl9wcm90b19fKVxubW9kdWxlLmV4cG9ydHMgPSBfX3Nhbl9leHBvcnRzX19cbmlmIChtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlKSBtb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzWydkZWZhdWx0J11cbmlmICghX19zYW5fZXhwb3J0c19fLmNvbXB1dGVkKSBfX3Nhbl9leHBvcnRzX18uY29tcHV0ZWQgPSB7fVxuT2JqZWN0LmtleXMoX19zYW5fc3R5bGVzX18pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xudmFyIG1vZHVsZSA9IF9fc2FuX3N0eWxlc19fW2tleV1cbl9fc2FuX2V4cG9ydHNfXy5jb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9