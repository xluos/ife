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

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/App.san":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/App.san ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.expansionpanel {\n    width: 600px;\n    margin: 0 auto;\n}\n", "", {"version":3,"sources":["/home/code/Desktop/ife/MVVM学院—SAN框架/task2.8/src/view/App.san?3a513b94"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAsBA;IACA,aAAA;IACA,eAAA;CACA","file":"App.san","sourcesContent":["<template>\n    <template>\n        <ui-expansionpanel\n            class=\"expansionpanel\"\n            title=\"TITLE\"\n            description=\"描述\">\n            <p>卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级</p>\n        </ui-expansionpanel>\n    </template>\n</template>\n\n<script>\n    import ExpansionPanel from \"./ExpansionPanel.san\";\n    export default {\n        components: {\n            \"ui-expansionpanel\": ExpansionPanel\n        },\n\n    }\n</script>\n\n<style>\n    .expansionpanel {\n        width: 600px;\n        margin: 0 auto;\n    }\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/ExpansionPanel.san":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/ExpansionPanel.san ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.expansion-panel {\n  padding: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n}\n.expansion-panel-header {\n  overflow: hidden;\n}\n.expansion-panel-title {\n  float: left;\n}\n.expansion-panel-description {\n  float: left;\n}\n.expansion-panel-btn {\n  position: relative;\n  float: right;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  transition: all 0.5s;\n}\n.expansion-panel-btn:hover {\n  background: #ebebeb;\n}\n.expansion-panel-btn:active {\n  background: #c4c4c4;\n}\n.expansion-panel-btn::after {\n  position: absolute;\n  top: 10px;\n  left: 12px;\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-left: 2px solid #333;\n  border-bottom: 2px solid #333;\n  transform: rotate(-45deg);\n}\n.expansion-panel-title {\n  line-height: 36px;\n  font-size: 20px;\n  font-weight: bolder;\n  padding: 0 10px;\n}\n.expansion-panel-description {\n  font-size: 14px;\n  line-height: 36px;\n  color: #aaa;\n  padding: 0 10px;\n}\n.expansion-panel-body {\n    transition: all 0.5s;\n    overflow-y: hidden;\n    transform-origin: top left;\n}\np{\n    margin: 0;\n}\n", "", {"version":3,"sources":["/home/code/Desktop/ife/MVVM学院—SAN框架/task2.8/src/view/ExpansionPanel.san?d13c0636"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwDA;EACA,cAAA;EACA,sCAAA;EACA,mBAAA;CACA;AACA;EACA,iBAAA;CACA;AACA;EACA,YAAA;CACA;AACA;EACA,YAAA;CACA;AACA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAAA;CACA;AACA;EACA,oBAAA;CACA;AACA;EACA,oBAAA;CACA;AACA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,4BAAA;EACA,8BAAA;EACA,0BAAA;CACA;AACA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,gBAAA;CACA;AACA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;CACA;AACA;IACA,qBAAA;IACA,mBAAA;IACA,2BAAA;CACA;AACA;IACA,UAAA;CACA","file":"ExpansionPanel.san","sourcesContent":["<template>\n    <div class=\"expansion-panel\">\n        <div class=\"expansion-panel-header\">\n            <div class=\"expansion-panel-title\">\n                <slot name=\"title\">{{ title }}</slot>\n            </div>\n            <div class=\"expansion-panel-description\">\n                <slot name=\"description\">{{ description }}</slot>\n            </div>\n            <div class=\"expansion-panel-btn\" on-click=\"toggle\" style=\"{{ transitionBtn }}\"></div>\n        </div>\n        <div class=\"expansion-panel-body\" style=\"{{ transitionStyle }}\">\n            <slot></slot>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        initData: function () {\n            return {\n                title: \"标题\",\n                description: \"\",\n                open: false\n            }\n        },\n        computed: {\n            transitionStyle: function() {\n                return this.data.get(\"open\") ? 'transform: scaleY(1);opacity: 1;max-height: auto;' : 'transform: scaleY(0) ;opacity: 0;max-height: 0px;';\n            },\n            transitionBtn: function() {\n                return this.data.get(\"open\") ? 'transform: rotate(180deg)' : '';\n            }\n        },\n        toggle: function () {\n            this.data.set(\"open\",!this.data.get(\"open\"));\n        },\n        compiled: function () {\n            console.log(new Date() + \"compiled\");\n        },\n        inited: function () {\n            console.log(new Date() + \"inited\");\n        },\n        created: function () {\n            console.log(new Date() + \"created\");\n        },\n        attached: function () {\n            console.log(new Date() + \"attached\");\n        },\n        detached: function () {\n            console.log(new Date() + \"detached\");\n        }\n    }\n</script>\n\n<style>\n    .expansion-panel {\n      padding: 10px;\n      border: 1px solid rgba(0, 0, 0, 0.12);\n      border-radius: 2px;\n    }\n    .expansion-panel-header {\n      overflow: hidden;\n    }\n    .expansion-panel-title {\n      float: left;\n    }\n    .expansion-panel-description {\n      float: left;\n    }\n    .expansion-panel-btn {\n      position: relative;\n      float: right;\n      width: 36px;\n      height: 36px;\n      border-radius: 50%;\n      transition: all 0.5s;\n    }\n    .expansion-panel-btn:hover {\n      background: #ebebeb;\n    }\n    .expansion-panel-btn:active {\n      background: #c4c4c4;\n    }\n    .expansion-panel-btn::after {\n      position: absolute;\n      top: 10px;\n      left: 12px;\n      content: \"\";\n      display: block;\n      width: 10px;\n      height: 10px;\n      border-left: 2px solid #333;\n      border-bottom: 2px solid #333;\n      transform: rotate(-45deg);\n    }\n    .expansion-panel-title {\n      line-height: 36px;\n      font-size: 20px;\n      font-weight: bolder;\n      padding: 0 10px;\n    }\n    .expansion-panel-description {\n      font-size: 14px;\n      line-height: 36px;\n      color: #aaa;\n      padding: 0 10px;\n    }\n    .expansion-panel-body {\n        transition: all 0.5s;\n        overflow-y: hidden;\n        transform-origin: top left;\n    }\n    p{\n        margin: 0;\n    }\n</style>"],"sourceRoot":""}]);

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

/***/ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/App.san":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/html-loader?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/App.san ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<template>\n    <ui-expansionpanel\n        class=\"expansionpanel\"\n        title=\"TITLE\"\n        description=\"描述\">\n        <p>卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级</p>\n    </ui-expansionpanel>\n</template>\n";

/***/ }),

/***/ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/ExpansionPanel.san":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/html-loader?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/ExpansionPanel.san ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"expansion-panel\">\n    <div class=\"expansion-panel-header\">\n        <div class=\"expansion-panel-title\">\n            <slot name=\"title\">{{ title }}</slot>\n        </div>\n        <div class=\"expansion-panel-description\">\n            <slot name=\"description\">{{ description }}</slot>\n        </div>\n        <div class=\"expansion-panel-btn\" on-click=\"toggle\" style=\"{{ transitionBtn }}\"></div>\n    </div>\n    <div class=\"expansion-panel-body\" style=\"{{ transitionStyle }}\">\n        <slot></slot>\n    </div>\n</div>\n";

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

/***/ "./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/App.san":
/*!****************************************************************************************!*\
  !*** ./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/App.san ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpansionPanel_san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpansionPanel.san */ "./src/view/ExpansionPanel.san");
/* harmony import */ var _ExpansionPanel_san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ExpansionPanel_san__WEBPACK_IMPORTED_MODULE_0__);
// <template>
//     <template>
//         <ui-expansionpanel
//             class="expansionpanel"
//             title="TITLE"
//             description="描述">
//             <p>卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级卢卡斯的借口拉萨的记录卡死的记录卡萨丁就老是卡等级</p>
//         </ui-expansionpanel>
//     </template>
// </template>
//
// <script>

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        "ui-expansionpanel": _ExpansionPanel_san__WEBPACK_IMPORTED_MODULE_0___default.a
    },

});
// </script>
//
// <style>
//     .expansionpanel {
//         width: 600px;
//         margin: 0 auto;
//     }
// </style>
/* generated by san-loader */


/***/ }),

/***/ "./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/ExpansionPanel.san":
/*!***************************************************************************************************!*\
  !*** ./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/ExpansionPanel.san ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// <template>
//     <div class="expansion-panel">
//         <div class="expansion-panel-header">
//             <div class="expansion-panel-title">
//                 <slot name="title">{{ title }}</slot>
//             </div>
//             <div class="expansion-panel-description">
//                 <slot name="description">{{ description }}</slot>
//             </div>
//             <div class="expansion-panel-btn" on-click="toggle" style="{{ transitionBtn }}"></div>
//         </div>
//         <div class="expansion-panel-body" style="{{ transitionStyle }}">
//             <slot></slot>
//         </div>
//     </div>
// </template>
//
// <script>
/* harmony default export */ __webpack_exports__["default"] = ({
    initData: function () {
        return {
            title: "标题",
            description: "",
            open: false
        }
    },
    computed: {
        transitionStyle: function() {
            return this.data.get("open") ? 'transform: scaleY(1);opacity: 1;max-height: auto;' : 'transform: scaleY(0) ;opacity: 0;max-height: 0px;';
        },
        transitionBtn: function() {
            return this.data.get("open") ? 'transform: rotate(180deg)' : '';
        }
    },
    toggle: function () {
        this.data.set("open",!this.data.get("open"));
    },
    compiled: function () {
        console.log(new Date() + "compiled");
    },
    inited: function () {
        console.log(new Date() + "inited");
    },
    created: function () {
        console.log(new Date() + "created");
    },
    attached: function () {
        console.log(new Date() + "attached");
    },
    detached: function () {
        console.log(new Date() + "detached");
    }
});
// </script>
//
// <style>
//     .expansion-panel {
//       padding: 10px;
//       border: 1px solid rgba(0, 0, 0, 0.12);
//       border-radius: 2px;
//     }
//     .expansion-panel-header {
//       overflow: hidden;
//     }
//     .expansion-panel-title {
//       float: left;
//     }
//     .expansion-panel-description {
//       float: left;
//     }
//     .expansion-panel-btn {
//       position: relative;
//       float: right;
//       width: 36px;
//       height: 36px;
//       border-radius: 50%;
//       transition: all 0.5s;
//     }
//     .expansion-panel-btn:hover {
//       background: #ebebeb;
//     }
//     .expansion-panel-btn:active {
//       background: #c4c4c4;
//     }
//     .expansion-panel-btn::after {
//       position: absolute;
//       top: 10px;
//       left: 12px;
//       content: "";
//       display: block;
//       width: 10px;
//       height: 10px;
//       border-left: 2px solid #333;
//       border-bottom: 2px solid #333;
//       transform: rotate(-45deg);
//     }
//     .expansion-panel-title {
//       line-height: 36px;
//       font-size: 20px;
//       font-weight: bolder;
//       padding: 0 10px;
//     }
//     .expansion-panel-description {
//       font-size: 14px;
//       line-height: 36px;
//       color: #aaa;
//       padding: 0 10px;
//     }
//     .expansion-panel-body {
//         transition: all 0.5s;
//         overflow-y: hidden;
//         transform-origin: top left;
//     }
//     p{
//         margin: 0;
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/App.san":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/App.san ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/san-loader/lib/style-rewriter.js!../../node_modules/san-loader/lib/selector.js?type=style&index=0!./App.san */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/App.san");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/ExpansionPanel.san":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/ExpansionPanel.san ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/san-loader/lib/style-rewriter.js!../../node_modules/san-loader/lib/selector.js?type=style&index=0!./ExpansionPanel.san */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/ExpansionPanel.san");

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
/* harmony import */ var _view_App_san__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/App.san */ "./src/view/App.san");
/* harmony import */ var _view_App_san__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_view_App_san__WEBPACK_IMPORTED_MODULE_2__);




san_router__WEBPACK_IMPORTED_MODULE_1__["router"].add({ rule: '/', Component: _view_App_san__WEBPACK_IMPORTED_MODULE_2___default.a, target: '#app' });
san_router__WEBPACK_IMPORTED_MODULE_1__["router"].start();
console.log('Server starts.');


/***/ }),

/***/ "./src/view/App.san":
/*!**************************!*\
  !*** ./src/view/App.san ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __san_script__, __san_template__
var __san_styles__ = {}
__webpack_require__(/*! !style-loader!css-loader?sourceMap!../../node_modules/san-loader/lib/style-rewriter.js!../../node_modules/san-loader/lib/selector.js?type=style&index=0!./App.san */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/App.san")
__san_script__ = __webpack_require__(/*! !!../../node_modules/san-loader/lib/selector.js?type=script&index=0!./App.san */ "./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/App.san")
if (__san_script__ &&
    __san_script__.__esModule &&
    Object.keys(__san_script__).length > 1) {
  console.warn("[san-loader] src/view/App.san: named exports in *.san files are ignored.")}
__san_template__ = __webpack_require__(/*! !html-loader?minimize=false!../../node_modules/san-loader/lib/selector.js?type=template&index=0!./App.san */ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/App.san")
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


/***/ }),

/***/ "./src/view/ExpansionPanel.san":
/*!*************************************!*\
  !*** ./src/view/ExpansionPanel.san ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __san_script__, __san_template__
var __san_styles__ = {}
__webpack_require__(/*! !style-loader!css-loader?sourceMap!../../node_modules/san-loader/lib/style-rewriter.js!../../node_modules/san-loader/lib/selector.js?type=style&index=0!./ExpansionPanel.san */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/ExpansionPanel.san")
__san_script__ = __webpack_require__(/*! !!../../node_modules/san-loader/lib/selector.js?type=script&index=0!./ExpansionPanel.san */ "./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/ExpansionPanel.san")
if (__san_script__ &&
    __san_script__.__esModule &&
    Object.keys(__san_script__).length > 1) {
  console.warn("[san-loader] src/view/ExpansionPanel.san: named exports in *.san files are ignored.")}
__san_template__ = __webpack_require__(/*! !html-loader?minimize=false!../../node_modules/san-loader/lib/selector.js?type=template&index=0!./ExpansionPanel.san */ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/ExpansionPanel.san")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvQXBwLnNhbj8xNzk4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L0V4cGFuc2lvblBhbmVsLnNhbj82NzVkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9BcHAuc2FuPzdlNWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvRXhwYW5zaW9uUGFuZWwuc2FuPzE1NDYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vQXBwLnNhbiIsIndlYnBhY2s6Ly8vRXhwYW5zaW9uUGFuZWwuc2FuIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYW4tcm91dGVyL2Rpc3Qvc2FuLXJvdXRlci5zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nhbi9kaXN0L3Nhbi5kZXYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvQXBwLnNhbj9hMGIwIiwid2VicGFjazovLy8uL3NyYy92aWV3L0V4cGFuc2lvblBhbmVsLnNhbj9iYmM1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvQXBwLnNhbiIs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UztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0t0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLFNBQVM7QUFDeEQ7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdEQUF3RCxTQUFTO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOERBQThELFNBQVM7O0FBRXZFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCLHFDQUFxQztBQUNyQztBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLFNBQVM7QUFDVCxpQ0FBaUM7QUFDakM7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCO0FBQ0EsU0FBUztBQUNUOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBLDBDQUEwQyxFQUFFO0FBQzVDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU8sd0JBQXdCLE1BQU07QUFDaEQsWUFBWTtBQUNaO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRSxHQUFHLEVBQUU7QUFDdkQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRSxHQUFHLEVBQUU7QUFDdkQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0RBQWdELEVBQUUsR0FBRyxFQUFFO0FBQ3ZEO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsRUFBRSxHQUFHLEVBQUU7QUFDMUQsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQsaUNBQWlDLGVBQWU7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3RkFBd0Y7QUFDeEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsV0FBVztBQUN0QixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNERBQTRELE9BQU87QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsT0FBTztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxVQUFVO0FBQ3JCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakIsV0FBVyxLQUFLO0FBQ2hCLFlBQVk7QUFDWjtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsS0FBSztBQUNoQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztB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QUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDaUI7QUFDakI7O0FBRUEsdURBQVksNkZBQTRDO0FBQ3hEO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLENBQUM7Ozs7Ozs7Ozs7OztBQzFCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4uZXhwYW5zaW9ucGFuZWwge1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvY29kZS9EZXNrdG9wL2lmZS9NVlZN5a2m6Zmi4oCUU0FO5qGG5p62L3Rhc2syLjgvc3JjL3ZpZXcvQXBwLnNhbj8zYTUxM2I5NFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQXBwLnNhblwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDx0ZW1wbGF0ZT5cXG4gICAgICAgIDx1aS1leHBhbnNpb25wYW5lbFxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJleHBhbnNpb25wYW5lbFxcXCJcXG4gICAgICAgICAgICB0aXRsZT1cXFwiVElUTEVcXFwiXFxuICAgICAgICAgICAgZGVzY3JpcHRpb249XFxcIuaPj+i/sFxcXCI+XFxuICAgICAgICAgICAgPHA+5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qn5Y2i5Y2h5pav55qE5YCf5Y+j5ouJ6JCo55qE6K6w5b2V5Y2h5q2755qE6K6w5b2V5Y2h6JCo5LiB5bCx6ICB5piv5Y2h562J57qnPC9wPlxcbiAgICAgICAgPC91aS1leHBhbnNpb25wYW5lbD5cXG4gICAgPC90ZW1wbGF0ZT5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCBFeHBhbnNpb25QYW5lbCBmcm9tIFxcXCIuL0V4cGFuc2lvblBhbmVsLnNhblxcXCI7XFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgICAgICBcXFwidWktZXhwYW5zaW9ucGFuZWxcXFwiOiBFeHBhbnNpb25QYW5lbFxcbiAgICAgICAgfSxcXG5cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgLmV4cGFuc2lvbnBhbmVsIHtcXG4gICAgICAgIHdpZHRoOiA2MDBweDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi5leHBhbnNpb24tcGFuZWwge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi5leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5leHBhbnNpb24tcGFuZWwtdGl0bGUge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5leHBhbnNpb24tcGFuZWwtZGVzY3JpcHRpb24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5leHBhbnNpb24tcGFuZWwtYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcbi5leHBhbnNpb24tcGFuZWwtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XFxufVxcbi5leHBhbnNpb24tcGFuZWwtYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xcbn1cXG4uZXhwYW5zaW9uLXBhbmVsLWJ0bjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMTJweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzMzMztcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzMzO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLmV4cGFuc2lvbi1wYW5lbC10aXRsZSB7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5leHBhbnNpb24tcGFuZWwtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBjb2xvcjogI2FhYTtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLmV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcbnB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL2NvZGUvRGVza3RvcC9pZmUvTVZWTeWtpumZouKAlFNBTuahhuaeti90YXNrMi44L3NyYy92aWV3L0V4cGFuc2lvblBhbmVsLnNhbj9kMTNjMDYzNlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0NBQ0E7QUFDQTtFQUNBLGlCQUFBO0NBQ0E7QUFDQTtFQUNBLFlBQUE7Q0FDQTtBQUNBO0VBQ0EsWUFBQTtDQUNBO0FBQ0E7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7Q0FDQTtBQUNBO0VBQ0Esb0JBQUE7Q0FDQTtBQUNBO0VBQ0Esb0JBQUE7Q0FDQTtBQUNBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7Q0FDQTtBQUNBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7Q0FDQTtBQUNBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtDQUNBO0FBQ0E7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7Q0FDQTtBQUNBO0lBQ0EsVUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJFeHBhbnNpb25QYW5lbC5zYW5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJleHBhbnNpb24tcGFuZWxcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZXhwYW5zaW9uLXBhbmVsLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZXhwYW5zaW9uLXBhbmVsLXRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwidGl0bGVcXFwiPnt7IHRpdGxlIH19PC9zbG90PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImV4cGFuc2lvbi1wYW5lbC1kZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImRlc2NyaXB0aW9uXFxcIj57eyBkZXNjcmlwdGlvbiB9fTwvc2xvdD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJleHBhbnNpb24tcGFuZWwtYnRuXFxcIiBvbi1jbGljaz1cXFwidG9nZ2xlXFxcIiBzdHlsZT1cXFwie3sgdHJhbnNpdGlvbkJ0biB9fVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImV4cGFuc2lvbi1wYW5lbC1ib2R5XFxcIiBzdHlsZT1cXFwie3sgdHJhbnNpdGlvblN0eWxlIH19XFxcIj5cXG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBpbml0RGF0YTogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcXFwi5qCH6aKYXFxcIixcXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wdXRlZDoge1xcbiAgICAgICAgICAgIHRyYW5zaXRpb25TdHlsZTogZnVuY3Rpb24oKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZ2V0KFxcXCJvcGVuXFxcIikgPyAndHJhbnNmb3JtOiBzY2FsZVkoMSk7b3BhY2l0eTogMTttYXgtaGVpZ2h0OiBhdXRvOycgOiAndHJhbnNmb3JtOiBzY2FsZVkoMCkgO29wYWNpdHk6IDA7bWF4LWhlaWdodDogMHB4Oyc7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB0cmFuc2l0aW9uQnRuOiBmdW5jdGlvbigpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5nZXQoXFxcIm9wZW5cXFwiKSA/ICd0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpJyA6ICcnO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0KFxcXCJvcGVuXFxcIiwhdGhpcy5kYXRhLmdldChcXFwib3BlblxcXCIpKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBjb21waWxlZDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkgKyBcXFwiY29tcGlsZWRcXFwiKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBpbml0ZWQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpICsgXFxcImluaXRlZFxcXCIpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpICsgXFxcImNyZWF0ZWRcXFwiKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkgKyBcXFwiYXR0YWNoZWRcXFwiKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBkZXRhY2hlZDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkgKyBcXFwiZGV0YWNoZWRcXFwiKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgLmV4cGFuc2lvbi1wYW5lbCB7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgfVxcbiAgICAuZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcbiAgICAuZXhwYW5zaW9uLXBhbmVsLXRpdGxlIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgfVxcbiAgICAuZXhwYW5zaW9uLXBhbmVsLWRlc2NyaXB0aW9uIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgfVxcbiAgICAuZXhwYW5zaW9uLXBhbmVsLWJ0biB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICB3aWR0aDogMzZweDtcXG4gICAgICBoZWlnaHQ6IDM2cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICB9XFxuICAgIC5leHBhbnNpb24tcGFuZWwtYnRuOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbiAgICB9XFxuICAgIC5leHBhbnNpb24tcGFuZWwtYnRuOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZDogI2M0YzRjNDtcXG4gICAgfVxcbiAgICAuZXhwYW5zaW9uLXBhbmVsLWJ0bjo6YWZ0ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDEwcHg7XFxuICAgICAgbGVmdDogMTJweDtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB3aWR0aDogMTBweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMzMzO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzMzO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIH1cXG4gICAgLmV4cGFuc2lvbi1wYW5lbC10aXRsZSB7XFxuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICB9XFxuICAgIC5leHBhbnNpb24tcGFuZWwtZGVzY3JpcHRpb24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICBsaW5lLWhlaWdodDogMzZweDtcXG4gICAgICBjb2xvcjogI2FhYTtcXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIH1cXG4gICAgLmV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgIH1cXG4gICAgcHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48dGVtcGxhdGU+XFxuICAgIDx1aS1leHBhbnNpb25wYW5lbFxcbiAgICAgICAgY2xhc3M9XFxcImV4cGFuc2lvbnBhbmVsXFxcIlxcbiAgICAgICAgdGl0bGU9XFxcIlRJVExFXFxcIlxcbiAgICAgICAgZGVzY3JpcHRpb249XFxcIuaPj+i/sFxcXCI+XFxuICAgICAgICA8cD7ljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqc8L3A+XFxuICAgIDwvdWktZXhwYW5zaW9ucGFuZWw+XFxuPC90ZW1wbGF0ZT5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPGRpdiBjbGFzcz1cXFwiZXhwYW5zaW9uLXBhbmVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZXhwYW5zaW9uLXBhbmVsLWhlYWRlclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJleHBhbnNpb24tcGFuZWwtdGl0bGVcXFwiPlxcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcInRpdGxlXFxcIj57eyB0aXRsZSB9fTwvc2xvdD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZXhwYW5zaW9uLXBhbmVsLWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCI+e3sgZGVzY3JpcHRpb24gfX08L3Nsb3Q+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImV4cGFuc2lvbi1wYW5lbC1idG5cXFwiIG9uLWNsaWNrPVxcXCJ0b2dnbGVcXFwiIHN0eWxlPVxcXCJ7eyB0cmFuc2l0aW9uQnRuIH19XFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImV4cGFuc2lvbi1wYW5lbC1ib2R5XFxcIiBzdHlsZT1cXFwie3sgdHJhbnNpdGlvblN0eWxlIH19XFxcIj5cXG4gICAgICAgIDxzbG90Pjwvc2xvdD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8dGVtcGxhdGU+XG4gICAgICAgIDx1aS1leHBhbnNpb25wYW5lbFxuICAgICAgICAgICAgY2xhc3M9XCJleHBhbnNpb25wYW5lbFwiXG4gICAgICAgICAgICB0aXRsZT1cIlRJVExFXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwi5o+P6L+wXCI+XG4gICAgICAgICAgICA8cD7ljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqfljaLljaHmlq/nmoTlgJ/lj6Pmi4nokKjnmoTorrDlvZXljaHmrbvnmoTorrDlvZXljaHokKjkuIHlsLHogIHmmK/ljaHnrYnnuqc8L3A+XG4gICAgICAgIDwvdWktZXhwYW5zaW9ucGFuZWw+XG4gICAgPC90ZW1wbGF0ZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEV4cGFuc2lvblBhbmVsIGZyb20gXCIuL0V4cGFuc2lvblBhbmVsLnNhblwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgXCJ1aS1leHBhbnNpb25wYW5lbFwiOiBFeHBhbnNpb25QYW5lbFxuICAgICAgICB9LFxuXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICAuZXhwYW5zaW9ucGFuZWwge1xuICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJleHBhbnNpb24tcGFuZWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuc2lvbi1wYW5lbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbnNpb24tcGFuZWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuc2lvbi1wYW5lbC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJkZXNjcmlwdGlvblwiPnt7IGRlc2NyaXB0aW9uIH19PC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5zaW9uLXBhbmVsLWJ0blwiIG9uLWNsaWNrPVwidG9nZ2xlXCIgc3R5bGU9XCJ7eyB0cmFuc2l0aW9uQnRuIH19XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwYW5zaW9uLXBhbmVsLWJvZHlcIiBzdHlsZT1cInt7IHRyYW5zaXRpb25TdHlsZSB9fVwiPlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBpbml0RGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmoIfpophcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdHJhbnNpdGlvblN0eWxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmdldChcIm9wZW5cIikgPyAndHJhbnNmb3JtOiBzY2FsZVkoMSk7b3BhY2l0eTogMTttYXgtaGVpZ2h0OiBhdXRvOycgOiAndHJhbnNmb3JtOiBzY2FsZVkoMCkgO29wYWNpdHk6IDA7bWF4LWhlaWdodDogMHB4Oyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJhbnNpdGlvbkJ0bjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5nZXQoXCJvcGVuXCIpID8gJ3RyYW5zZm9ybTogcm90YXRlKDE4MGRlZyknIDogJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcIm9wZW5cIiwhdGhpcy5kYXRhLmdldChcIm9wZW5cIikpO1xuICAgICAgICB9LFxuICAgICAgICBjb21waWxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3IERhdGUoKSArIFwiY29tcGlsZWRcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3IERhdGUoKSArIFwiaW5pdGVkXCIpO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpICsgXCJjcmVhdGVkXCIpO1xuICAgICAgICB9LFxuICAgICAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3IERhdGUoKSArIFwiYXR0YWNoZWRcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGRldGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpICsgXCJkZXRhY2hlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLmV4cGFuc2lvbi1wYW5lbCB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG4gICAgLmV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLmV4cGFuc2lvbi1wYW5lbC10aXRsZSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgLmV4cGFuc2lvbi1wYW5lbC1kZXNjcmlwdGlvbiB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgLmV4cGFuc2lvbi1wYW5lbC1idG4ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICB9XG4gICAgLmV4cGFuc2lvbi1wYW5lbC1idG46aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgICB9XG4gICAgLmV4cGFuc2lvbi1wYW5lbC1idG46YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNjNGM0YzQ7XG4gICAgfVxuICAgIC5leHBhbnNpb24tcGFuZWwtYnRuOjphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMzMzM7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzMztcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgfVxuICAgIC5leHBhbnNpb24tcGFuZWwtdGl0bGUge1xuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cbiAgICAuZXhwYW5zaW9uLXBhbmVsLWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgY29sb3I6ICNhYWE7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgfVxuICAgIC5leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuPC9zdHlsZT4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInNhbi1yb3V0ZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2FuLXJvdXRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzYW4tcm91dGVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG5cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcblxuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3RcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlc29sdmVVUkw7XG5cbnZhciBfcGFyc2VVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX3BhcnNlVXJsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlVXJsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKipcbiAqIOWwhiBVUkwg5Lit55u45a+56Lev5b6E6YOo5YiG5bGV5byAXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDopoHlsZXlvIDnmoR1cmxcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlIOW9k+WJjeaJgOWxnueOr+Wig+eahHVybFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiByZXNvbHZlVVJMKHNvdXJjZSwgYmFzZSkge1xuICAgIHZhciBzb3VyY2VMb2MgPSAoMCwgX3BhcnNlVXJsMlsnZGVmYXVsdCddKShzb3VyY2UpO1xuICAgIHZhciBiYXNlTG9jID0gKDAsIF9wYXJzZVVybDJbJ2RlZmF1bHQnXSkoYmFzZSk7XG5cbiAgICB2YXIgc291cmNlUGF0aCA9IHNvdXJjZUxvYy5wYXRoO1xuICAgIGlmIChzb3VyY2VQYXRoLmluZGV4T2YoJy8nKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VTZWdzID0gc291cmNlUGF0aC5zcGxpdCgnLycpO1xuICAgIHZhciBiYXNlU2VncyA9IGJhc2VMb2MucGF0aC5zcGxpdCgnLycpO1xuICAgIGJhc2VTZWdzLnBvcCgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VTZWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzZWcgPSBzb3VyY2VTZWdzW2ldO1xuICAgICAgICBzd2l0Y2ggKHNlZykge1xuICAgICAgICAgICAgY2FzZSAnLi4nOlxuICAgICAgICAgICAgICAgIGJhc2VTZWdzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJhc2VTZWdzLnB1c2goc2VnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChiYXNlU2Vnc1swXSAhPT0gJycpIHtcbiAgICAgICAgYmFzZVNlZ3MudW5zaGlmdCgnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VTZWdzLmpvaW4oJy8nKSArIChzb3VyY2VMb2MucXVlcnlTdHJpbmcgPyAnPycgKyBzb3VyY2VMb2MucXVlcnlTdHJpbmcgOiAnJyk7XG59IC8qKlxuICAgKiBzYW4tcm91dGVyXG4gICAqIENvcHlyaWdodCAyMDE3IEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICpcbiAgICogQGZpbGUg5bCGIFVSTCDkuK3nm7jlr7not6/lvoTpg6jliIblsZXlvIBcbiAgICogQGF1dGhvciBlcnJvcnJpa1xuICAgKi9cblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcGFyc2VVUkw7XG4vKipcbiAqIHNhbi1yb3V0ZXJcbiAqIENvcHlyaWdodCAyMDE3IEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAZmlsZSDop6PmnpBVUkxcbiAqIEBhdXRob3IgZXJyb3JyaWtcbiAqL1xuXG4vKipcbiAqIOino+aekFVSTO+8jOi/lOWbnuWMheWQq3BhdGjjgIFxdWVyeeOAgXF1ZXJ5U3RyaW5n55qE5a+56LGhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCDopoHop6PmnpDnmoR1cmxcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VVUkwodXJsKSB7XG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgaGFzaDogJycsXG4gICAgICAgIHF1ZXJ5U3RyaW5nOiAnJyxcbiAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgcXVlcnk6IHt9LFxuICAgICAgICBwYXRoOiB1cmxcbiAgICB9O1xuXG4gICAgLy8gcGFyc2UgaGFzaFxuICAgIHZhciBoYXNoU3RhcnQgPSByZXN1bHQucGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2hTdGFydCA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC5oYXNoID0gcmVzdWx0LnBhdGguc2xpY2UoaGFzaFN0YXJ0ICsgMSk7XG4gICAgICAgIHJlc3VsdC5wYXRoID0gcmVzdWx0LnBhdGguc2xpY2UoMCwgaGFzaFN0YXJ0KTtcbiAgICB9XG5cbiAgICAvLyBwYXJzZSBxdWVyeVxuICAgIHZhciBxdWVyeSA9IHJlc3VsdC5xdWVyeTtcbiAgICB2YXIgcXVlcnlTdGFydCA9IHJlc3VsdC5wYXRoLmluZGV4T2YoJz8nKTtcbiAgICBpZiAocXVlcnlTdGFydCA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC5xdWVyeVN0cmluZyA9IHJlc3VsdC5wYXRoLnNsaWNlKHF1ZXJ5U3RhcnQgKyAxKTtcbiAgICAgICAgcmVzdWx0LnBhdGggPSByZXN1bHQucGF0aC5zbGljZSgwLCBxdWVyeVN0YXJ0KTtcblxuICAgICAgICByZXN1bHQucXVlcnlTdHJpbmcuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeVNlZykge1xuICAgICAgICAgICAgLy8g6ICD6JmR5Yiw5pyJ5Y+v6IO95Zug5Li65pyq5aSE55CG6L2s5LmJ6Zeu6aKY77yMXG4gICAgICAgICAgICAvLyDlr7zoh7R2YWx1ZeS4reWtmOWcqCoqPSoq5a2X56ym77yM5Zug5q2k5LiN5L2/55SoYHNwbGl0YOWHveaVsFxuICAgICAgICAgICAgdmFyIGVxdWFsSW5kZXggPSBxdWVyeVNlZy5pbmRleE9mKCc9Jyk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAnJztcbiAgICAgICAgICAgIGlmIChlcXVhbEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcXVlcnlTZWcuc2xpY2UoZXF1YWxJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIHF1ZXJ5U2VnID0gcXVlcnlTZWcuc2xpY2UoMCwgZXF1YWxJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQocXVlcnlTZWcpO1xuICAgICAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXG4gICAgICAgICAgICAvLyDlt7Lnu4/lrZjlnKjov5nkuKrlj4LmlbDvvIzkuJTmlrDnmoTlgLzkuI3kuLrnqbrml7bvvIzmiorljp/mnaXnmoTlgLzlj5jmiJDmlbDnu4RcbiAgICAgICAgICAgIGlmIChxdWVyeS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgICAgICAgICBxdWVyeVtrZXldID0gW10uY29uY2F0KHF1ZXJ5W2tleV0sIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiovIH0sXG4vKiAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBzYW4tcm91dGVyXG4gKiBDb3B5cmlnaHQgMjAxNyBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGZpbGUg5o+Q5L6b5LqL5Lu255u45YWz5pON5L2c55qE5Z+657G7XG4gKiBAYXV0aG9yIG90YWt1c3RheSwgZXJyb3JyaWtcbiAqL1xuXG52YXIgRXZlbnRUYXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRUYXJnZXQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudFRhcmdldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rOo5YaM5LiA5Liq5LqL5Lu25aSE55CG5Ye95pWwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDkuovku7bnmoTnsbvlnotcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9uIHwgYm9vbGVhbn0gZm4g5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAgICovXG4gICAgRXZlbnRUYXJnZXQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24odHlwZSwgZm4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudExpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fZXZlbnRMaXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW3R5cGVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1t0eXBlXS5wdXNoKGZuKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5rOo6ZSA5LiA5Liq5LqL5Lu25aSE55CG5Ye95pWwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDkuovku7bnmoTnsbvlnovvvIzlpoLmnpzlgLzkuLpgKmDku4XkvJrms6jplIDpgJrov4dgKmDkuLrnsbvlnovms6jlhoznmoTkuovku7bvvIzlubbkuI3kvJrlsIbmiYDmnInkuovku7bms6jplIBcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dIOS6i+S7tueahOWkhOeQhuWHveaVsO+8jOaXoOatpOWPguaVsOWImeazqOmUgGB0eXBlYOaMh+Wumuexu+Wei+eahOaJgOacieS6i+S7tuWkhOeQhuWHveaVsFxuICAgICAqL1xuXG5cbiAgICBFdmVudFRhcmdldC5wcm90b3R5cGUudW4gPSBmdW5jdGlvbiB1bih0eXBlLCBmbikge1xuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50TGlzdGVuZXJzIHx8ICF0aGlzLl9ldmVudExpc3RlbmVyc1t0eXBlXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmbikge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbdHlwZV0gPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudExpc3RlbmVyc1t0eXBlXTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzW2xlbl0gPT09IGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UobGVuLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog6Kem5Y+R5oyH5a6a57G75Z6L55qE5LqL5Lu2XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDkuovku7bnsbvlnotcbiAgICAgKiBAcGFyYW0geyp9IFthcmdzXSDkuovku7blr7nosaFcbiAgICAgKi9cblxuXG4gICAgRXZlbnRUYXJnZXQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiBmaXJlKHR5cGUsIGFyZ3MpIHtcbiAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGV2ZW50IHR5cGUgc3BlY2lmaWVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRMaXN0ZW5lcnMgJiYgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbdHlwZV07XG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzW2ldKGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBFdmVudFRhcmdldDtcbn0oKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRXZlbnRUYXJnZXQ7XG5cbi8qKiovIH0sXG4vKiAzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9tYWluID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxudmFyIF9yZXNvbHZlVXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9yZXNvbHZlVXJsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc29sdmVVcmwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qKlxuICogc2FuLXJvdXRlclxuICogQ29weXJpZ2h0IDIwMTcgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBmaWxlIOi3r+eUsemTvuaOpeeahCBTYW4g57uE5Lu2XG4gKiBAYXV0aG9yIGVycm9ycmlrXG4gKi9cblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICAgIHRlbXBsYXRlOiAnPGEgaHJlZj1cInt7aHJlZn19XCJcXG4gICAgICAgIG9uY2xpY2s9XCJyZXR1cm4gZmFsc2U7XCJcXG4gICAgICAgIG9uLWNsaWNrPVwiY2xpY2tlcigkZXZlbnQpXCJcXG4gICAgICAgIHRhcmdldD1cInt7dGFyZ2V0fX1cIlxcbiAgICAgICAgY2xhc3M9XCJ7e2NsYXNzfX1cIlxcbiAgICAgICAgc3R5bGU9XCJ7e3N0eWxlfX1cIlxcbiAgICAgICAgPlxcbiAgICAgICAgPHNsb3Q+PC9zbG90PlxcbiAgICA8L2E+JyxcblxuICAgIGNsaWNrZXI6IGZ1bmN0aW9uIGNsaWNrZXIoZSkge1xuICAgICAgICB2YXIgaHJlZiA9IHRoaXMuZGF0YS5nZXQoJ2hyZWYnKTtcblxuICAgICAgICBpZiAodHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBfbWFpbi5yb3V0ZXIubG9jYXRvci5yZWRpcmVjdChocmVmLnJlcGxhY2UoL14jLywgJycpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBocmVmOiBmdW5jdGlvbiBocmVmKCkge1xuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuZGF0YS5nZXQoJ3RvJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBocmVmID0gKDAsIF9yZXNvbHZlVXJsMlsnZGVmYXVsdCddKSh1cmwsIF9tYWluLnJvdXRlci5sb2NhdG9yLmN1cnJlbnQpO1xuICAgICAgICAgICAgaWYgKF9tYWluLnJvdXRlci5tb2RlID09PSAnaGFzaCcpIHtcbiAgICAgICAgICAgICAgICBocmVmID0gJyMnICsgaHJlZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGhyZWY7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXZlbnRUYXJnZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX2V2ZW50VGFyZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50VGFyZ2V0KTtcblxudmFyIF9yZXNvbHZlVXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9yZXNvbHZlVXJsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc29sdmVVcmwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzYW4tcm91dGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb3B5cmlnaHQgMjAxNyBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGZpbGUgaGFzaCDmqKHlvI/lnLDlnYDnm5HlkKzlmahcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBhdXRob3IgZXJyb3JyaWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG4vKipcbiAqIOiOt+WPluW9k+WJjVVSTFxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gICAgLy8gRmlyZWZveOS4i2Bsb2NhdGlvbi5oYXNoYOWtmOWcqOiHquWKqOino+eggeeahOaDheWGte+8jFxuICAgIC8vIOavlOWmgmhhc2jnmoTlgLzmmK8qKmFiYyUzZGVmKirvvIxcbiAgICAvLyDlnKhGaXJlZm945LiL6I635Y+W5Lya5oiQ5Li6KiphYmM9ZGVmKipcbiAgICAvLyDkuLrkuobpgb/lhY3ov5nkuIDmg4XlhrXvvIzpnIDopoHku45gbG9jYXRpb24uaHJlZmDkuK3liIbop6NcbiAgICB2YXIgaW5kZXggPSBsb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKTtcbiAgICB2YXIgdXJsID0gaW5kZXggPCAwID8gJy8nIDogbG9jYXRpb24uaHJlZi5zbGljZShpbmRleCArIDEpIHx8ICcvJztcblxuICAgIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogaGFzaCDmqKHlvI/lnLDlnYDnm5HlkKzlmahcbiAqXG4gKiBAY2xhc3NcbiAqL1xuXG52YXIgTG9jYXRvciA9IGZ1bmN0aW9uIChfRXZlbnRUYXJnZXQpIHtcbiAgICBfaW5oZXJpdHMoTG9jYXRvciwgX0V2ZW50VGFyZ2V0KTtcblxuICAgIC8qKlxuICAgICAqIOaehOmAoOWHveaVsFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIExvY2F0b3IoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhdG9yKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfRXZlbnRUYXJnZXQuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMuY3VycmVudCA9IGdldExvY2F0aW9uKCk7XG4gICAgICAgIF90aGlzLnJlZmVycmVyID0gJyc7XG5cbiAgICAgICAgX3RoaXMuaGFzaENoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWRpcmVjdChnZXRMb2NhdGlvbigpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW8gOWni+ebkeWQrCB1cmwg5Y+Y5YyWXG4gICAgICovXG5cblxuICAgIExvY2F0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLmhhc2hDaGFuZ2VIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29uaGFzaGNoYW5nZScsIHRoaXMuaGFzaENoYW5nZUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOWBnOatouebkeWQrFxuICAgICAqL1xuXG5cbiAgICBMb2NhdG9yLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMuaGFzaENoYW5nZUhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuZGV0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5kZXRhY2hFdmVudCgnb25oYXNoY2hhbmdlJywgdGhpcy5oYXNoQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog6YeN5a6a5ZCRXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIOmHjeWumuWQkeeahOWcsOWdgFxuICAgICAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyDph43lrprlkJHnmoTooYzkuLrphY3nva5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW4/fSBvcHRpb25zLmZvcmNlIOaYr+WQpuW8uuWItuWIt+aWsFxuICAgICAqL1xuXG5cbiAgICBMb2NhdG9yLnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KHVybCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogeyBmb3JjZTogZmFsc2UgfTtcblxuICAgICAgICB1cmwgPSAoMCwgX3Jlc29sdmVVcmwyWydkZWZhdWx0J10pKHVybCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgdmFyIHJlZmVycmVyID0gdGhpcy5jdXJyZW50O1xuXG4gICAgICAgIHZhciBpc0NoYW5nZWQgPSB1cmwgIT09IHJlZmVycmVyO1xuICAgICAgICBpZiAoaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZmVycmVyID0gcmVmZXJyZXI7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB1cmw7XG4gICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gdXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVmZXJyZXIgPSB0aGlzLnJlZmVycmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChpc0NoYW5nZWQgfHwgb3B0aW9ucy5mb3JjZSkgJiYgIW9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ3JlZGlyZWN0JywgeyB1cmw6IHVybCwgcmVmZXJyZXI6IHJlZmVycmVyIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOWIt+aWsOW9k+WJjSB1cmxcbiAgICAgKi9cblxuXG4gICAgTG9jYXRvci5wcm90b3R5cGUucmVsb2FkID0gZnVuY3Rpb24gcmVsb2FkKCkge1xuICAgICAgICB0aGlzLnJlZGlyZWN0KHRoaXMuY3VycmVudCwgeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIExvY2F0b3I7XG59KF9ldmVudFRhcmdldDJbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExvY2F0b3I7XG5cbi8qKiovIH0sXG4vKiA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9ldmVudFRhcmdldCA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfZXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnRUYXJnZXQpO1xuXG52YXIgX3Jlc29sdmVVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX3Jlc29sdmVVcmwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzb2x2ZVVybCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNhbi1yb3V0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvcHlyaWdodCAyMDE3IEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZmlsZSBodG1sNSDmqKHlvI/lnLDlnYDnm5HlkKzlmahcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBhdXRob3IgZXJyb3JyaWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG4vKipcbiAqIOiOt+WPluW9k+WJjVVSTFxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoO1xufVxuXG4vKipcbiAqIGh0bWw1IOaooeW8j+WcsOWdgOebkeWQrOWZqFxuICpcbiAqIEBjbGFzc1xuICovXG5cbnZhciBMb2NhdG9yID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICAgIF9pbmhlcml0cyhMb2NhdG9yLCBfRXZlbnRUYXJnZXQpO1xuXG4gICAgLyoqXG4gICAgICog5p6E6YCg5Ye95pWwXG4gICAgICovXG4gICAgZnVuY3Rpb24gTG9jYXRvcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2F0b3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9FdmVudFRhcmdldC5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5jdXJyZW50ID0gZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgX3RoaXMucmVmZXJyZXIgPSAnJztcblxuICAgICAgICBfdGhpcy5wb3BzdGF0ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWZlcnJlciA9IF90aGlzLmN1cnJlbnQ7XG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50ID0gZ2V0TG9jYXRpb24oKTtcblxuICAgICAgICAgICAgX3RoaXMuZmlyZSgncmVkaXJlY3QnLCB7XG4gICAgICAgICAgICAgICAgdXJsOiBfdGhpcy5jdXJyZW50LFxuICAgICAgICAgICAgICAgIHJlZmVycmVyOiBfdGhpcy5yZWZlcnJlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvIDlp4vnm5HlkKwgdXJsIOWPmOWMllxuICAgICAqL1xuXG5cbiAgICBMb2NhdG9yLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLnBvcHN0YXRlSGFuZGxlcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOWBnOatouebkeWQrFxuICAgICAqL1xuXG5cbiAgICBMb2NhdG9yLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5wb3BzdGF0ZUhhbmRsZXIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDph43lrprlkJFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg6YeN5a6a5ZCR55qE5Zyw5Z2AXG4gICAgICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIOmHjeWumuWQkeeahOihjOS4uumFjee9rlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj99IG9wdGlvbnMuZm9yY2Ug5piv5ZCm5by65Yi25Yi35pawXG4gICAgICovXG5cblxuICAgIExvY2F0b3IucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24gcmVkaXJlY3QodXJsKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7IGZvcmNlOiBmYWxzZSB9O1xuXG4gICAgICAgIHVybCA9ICgwLCBfcmVzb2x2ZVVybDJbJ2RlZmF1bHQnXSkodXJsLCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICB2YXIgcmVmZXJyZXIgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICAgICAgdmFyIGlzQ2hhbmdlZCA9IHVybCAhPT0gcmVmZXJyZXI7XG5cbiAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZlcnJlciA9IHJlZmVycmVyO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdXJsO1xuXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHVybCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKGlzQ2hhbmdlZCB8fCBvcHRpb25zLmZvcmNlKSAmJiAhb3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZSgncmVkaXJlY3QnLCB7IHVybDogdXJsLCByZWZlcnJlcjogcmVmZXJyZXIgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5Yi35paw5b2T5YmNIHVybFxuICAgICAqL1xuXG5cbiAgICBMb2NhdG9yLnByb3RvdHlwZS5yZWxvYWQgPSBmdW5jdGlvbiByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMuZmlyZSgncmVkaXJlY3QnLCB7XG4gICAgICAgICAgICB1cmw6IHRoaXMuY3VycmVudCxcbiAgICAgICAgICAgIHJlZmVycmVyOiB0aGlzLnJlZmVycmVyXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gTG9jYXRvcjtcbn0oX2V2ZW50VGFyZ2V0MlsnZGVmYXVsdCddKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTG9jYXRvcjtcblxuXG5Mb2NhdG9yLmlzU3VwcG9ydCA9ICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xuXG4vKioqLyB9LFxuLyogNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkxpbmsgPSBleHBvcnRzLnJvdXRlciA9IGV4cG9ydHMuUm91dGVyID0gZXhwb3J0cy52ZXJzaW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX2hhc2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX2hhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzaCk7XG5cbnZhciBfaHRtbCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfaHRtbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9odG1sKTtcblxudmFyIF9wYXJzZVVybCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfcGFyc2VVcmwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VVcmwpO1xuXG52YXIgX2xpbmsgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX2xpbmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluayk7XG5cbnZhciBfZWxlbWVudFNlbGVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxudmFyIF9lbGVtZW50U2VsZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZWxlbWVudFNlbGVjdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfSAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzYW4tcm91dGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29weXJpZ2h0IDIwMTcgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGZpbGUg5Li75qih5Z2XXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGF1dGhvciBlcnJvcnJpa1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG52YXIgcm91dGVJRCA9IDB4NTk0MmI7XG52YXIgZ3VpZCA9IGZ1bmN0aW9uIGd1aWQoKSB7XG4gICAgcmV0dXJuICgrK3JvdXRlSUQpLnRvU3RyaW5nKCk7XG59O1xuXG5mdW5jdGlvbiBpc0NvbXBvbmVudChDKSB7XG4gICAgcmV0dXJuIEMucHJvdG90eXBlICYmIChDLnByb3RvdHlwZS5ub2RlVHlwZSA9PT0gNSB8fCBDLnByb3RvdHlwZS5fdHlwZSA9PT0gJ3Nhbi1jbXB0Jyk7XG59XG5cbi8qKlxuICog54mI5pys5Y+3XG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xudmFyIHZlcnNpb24gPSBleHBvcnRzLnZlcnNpb24gPSAnMS4yLjAnO1xuXG4vKipcbiAqIOi3r+eUseWZqOexu1xuICpcbiAqIEBjbGFzc1xuICovXG5cbnZhciBSb3V0ZXIgPSBleHBvcnRzLlJvdXRlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgIC8qKlxuICAgICAqIOaehOmAoOWHveaVsFxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIOWIneWni+WMluWPguaVsFxuICAgICAqIEBwYXJhbSB7c3RyaW5nP30gb3B0aW9ucy5tb2RlIOi3r+eUseaooeW8j++8jGhhc2ggfCBodG1sNVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJvdXRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgICAgICBfcmVmJG1vZGUgPSBfcmVmLm1vZGUsXG4gICAgICAgICAgICBtb2RlID0gX3JlZiRtb2RlID09PSB1bmRlZmluZWQgPyAnaGFzaCcgOiBfcmVmJG1vZGU7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlcik7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5yb3V0ZUFsaXZlcyA9IFtdO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBsb2NhdG9yIHJlZGlyZWN0IOS6i+S7tuebkeWQrOWHveaVsFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZSBsb2NhdG9y5LqL5Lu25a+56LGhXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxvY2F0b3JSZWRpcmVjdEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHVybCA9ICgwLCBfcGFyc2VVcmwyWydkZWZhdWx0J10pKGUudXJsKTtcbiAgICAgICAgICAgIHZhciByb3V0ZUl0ZW0gPSB2b2lkIDA7XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfdGhpcy5yb3V0ZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBfdGhpcy5yb3V0ZXNbX2ldO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IGl0ZW0ucnVsZS5leGVjKHVybC5wYXRoKTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUl0ZW0gPSBpdGVtO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbGwgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gaXRlbS5rZXlzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IG1hdGNoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tqXSB8fCBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbWF0Y2hbal07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwucXVlcnlba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsLnBhcmFtc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBmaWxsIHJlZmVycmVyXG4gICAgICAgICAgICAgICAgICAgIHVybC5yZWZlcnJlciA9IGUucmVmZXJyZXI7XG4gICAgICAgICAgICAgICAgICAgIHVybC5jb25maWcgPSBpdGVtLmNvbmZpZztcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IDE7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogbGlzdGVuZXIg5LqL5Lu25a+56LGhXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyRXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgaGFzaDogdXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmc6IHVybC5xdWVyeVN0cmluZyxcbiAgICAgICAgICAgICAgICBxdWVyeTogdXJsLnF1ZXJ5LFxuICAgICAgICAgICAgICAgIHBhdGg6IHVybC5wYXRoLFxuICAgICAgICAgICAgICAgIHJlZmVycmVyOiB1cmwucmVmZXJyZXIsXG4gICAgICAgICAgICAgICAgY29uZmlnOiB1cmwuY29uZmlnLFxuICAgICAgICAgICAgICAgIHJlc3VtZTogbmV4dCxcbiAgICAgICAgICAgICAgICBzdXNwZW5kOiBmdW5jdGlvbiBzdXNwZW5kKCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDA7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5bCd6K+V6L+Q6KGM5LiL5LiA5LiqbGlzdGVuZXJcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIGRvTmV4dCA9IGZ1bmN0aW9uIGRvTmV4dCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgX3RoaXMubGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGlzdGVuZXJzW2ldLmNhbGwoX3RoaXMsIGxpc3RlbmVyRXZlbnQsIHVybC5jb25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlQWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi/kOihjOS4i+S4gOS4qmxpc3RlbmVyXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGlubmVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSAxO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBkb05leHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDov5DooYzot6/nlLHooYzkuLpcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHJvdXRlQWN0aW9uID0gZnVuY3Rpb24gcm91dGVBY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kb1JvdXRlKHJvdXRlSXRlbSwgdXJsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gX3RoaXMucm91dGVBbGl2ZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJvdXRlQWxpdmVzW2xlbl0uY29tcG9uZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJvdXRlQWxpdmVzLnNwbGljZShsZW4sIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZG9OZXh0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRNb2RlKG1vZGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOi3r+eUseebkeWQrOWZqFxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihlLCBjb25maWcpfSBsaXN0ZW5lciDnm5HlkKzlmahcbiAgICAgKi9cblxuXG4gICAgUm91dGVyLnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOenu+mZpOi3r+eUseebkeWQrOWZqFxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5ZmoXG4gICAgICovXG5cblxuICAgIFJvdXRlci5wcm90b3R5cGUudW5saXN0ZW4gPSBmdW5jdGlvbiB1bmxpc3RlbihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgbGVuID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tsZW5dID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsZW4sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOaJp+ihjOi3r+eUsVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcm91dGVJdGVtIOi3r+eUsemhuVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlIOi3r+eUseS/oeaBr1xuICAgICAqL1xuXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLmRvUm91dGUgPSBmdW5jdGlvbiBkb1JvdXRlKHJvdXRlSXRlbSwgZSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgaXNVcGRhdGVBbGl2ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgbGVuID0gdGhpcy5yb3V0ZUFsaXZlcy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICB2YXIgcm91dGVBbGl2ZSA9IHRoaXMucm91dGVBbGl2ZXNbbGVuXTtcblxuICAgICAgICAgICAgaWYgKHJvdXRlQWxpdmUuaWQgPT09IHJvdXRlSXRlbS5pZCkge1xuICAgICAgICAgICAgICAgIHJvdXRlQWxpdmUuY29tcG9uZW50LmRhdGEuc2V0KCdyb3V0ZScsIGUpO1xuICAgICAgICAgICAgICAgIHJvdXRlQWxpdmUuY29tcG9uZW50Ll9jYWxsSG9vaygncm91dGUnKTtcbiAgICAgICAgICAgICAgICBpc1VwZGF0ZUFsaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGVBbGl2ZS5jb21wb25lbnQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVBbGl2ZXMuc3BsaWNlKGxlbiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzVXBkYXRlQWxpdmUpIHtcbiAgICAgICAgICAgIGlmIChyb3V0ZUl0ZW0uQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ29tcG9uZW50KHJvdXRlSXRlbS5Db21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoQ21wdChyb3V0ZUl0ZW0sIGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSXRlbS5Db21wb25lbnQoKS50aGVuKGZ1bmN0aW9uIChDbXB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wb25lbnQoQ21wdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUl0ZW0uQ29tcG9uZW50ID0gQ21wdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQ21wdC5fX2VzTW9kdWxlICYmIGlzQ29tcG9uZW50KENtcHRbJ2RlZmF1bHQnXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUl0ZW0uQ29tcG9uZW50ID0gQ21wdFsnZGVmYXVsdCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmF0dGFjaENtcHQocm91dGVJdGVtLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZUl0ZW0uaGFuZGxlci5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFJvdXRlci5wcm90b3R5cGUuYXR0YWNoQ21wdCA9IGZ1bmN0aW9uIGF0dGFjaENtcHQocm91dGVJdGVtLCBlKSB7XG4gICAgICAgIHZhciBjb21wb25lbnQgPSBuZXcgcm91dGVJdGVtLkNvbXBvbmVudCgpO1xuICAgICAgICBjb21wb25lbnQuZGF0YS5zZXQoJ3JvdXRlJywgZSk7XG4gICAgICAgIGNvbXBvbmVudC5fY2FsbEhvb2soJ3JvdXRlJyk7XG5cbiAgICAgICAgdmFyIHRhcmdldCA9IHJvdXRlSXRlbS50YXJnZXQ7XG4gICAgICAgIHZhciB0YXJnZXRFbCA9ICgwLCBfZWxlbWVudFNlbGVjdG9yMlsnZGVmYXVsdCddKSh0YXJnZXQpO1xuXG4gICAgICAgIGlmICghdGFyZ2V0RWwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTi1ST1VURVIgRVJST1JdICcgKyAnQXR0YWNoIGZhaWxlZCwgdGFyZ2V0IGVsZW1lbnQgXCInICsgcm91dGVJdGVtLnRhcmdldCArICdcIiBpcyBub3QgZm91bmQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnQuYXR0YWNoKHRhcmdldEVsKTtcblxuICAgICAgICB0aGlzLnJvdXRlQWxpdmVzLnB1c2goe1xuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBpZDogcm91dGVJdGVtLmlkXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDot6/nlLHpoblcbiAgICAgKiDlvZPop4TliJnljLnphY3ml7bvvIzot6/nlLHlsIbkvJjlhYjlsIZDb21wb25lbnTmuLLmn5PliLB0YXJnZXTkuK3jgILlpoLmnpzmsqHmnInljIXlkKtDb21wb25lbnTvvIzliJnmiafooYxoYW5kbGVy5Ye95pWwXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcg6Lev55Sx6aG56YWN572uXG4gICAgICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBjb25maWcucnVsZSDot6/nlLHop4TliJlcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9uP30gY29uZmlnLmhhbmRsZXIg6Lev55Sx5Ye95pWwXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbj99IGNvbmZpZy5Db21wb25lbnQg6Lev55Sx57uE5Lu2XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy50YXJnZXQg6Lev55Sx57uE5Lu26KaB5riy5p+T5Yiw55qE55uu5qCH5L2N572uXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBzYW4tcm91dGVyIOWunuS+i1xuICAgICAqL1xuXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZChjb25maWcpIHtcbiAgICAgICAgdmFyIHJ1bGUgPSBjb25maWcucnVsZSxcbiAgICAgICAgICAgIGhhbmRsZXIgPSBjb25maWcuaGFuZGxlcixcbiAgICAgICAgICAgIF9jb25maWckdGFyZ2V0ID0gY29uZmlnLnRhcmdldCxcbiAgICAgICAgICAgIHRhcmdldCA9IF9jb25maWckdGFyZ2V0ID09PSB1bmRlZmluZWQgPyAnI21haW4nIDogX2NvbmZpZyR0YXJnZXQsXG4gICAgICAgICAgICBDb21wb25lbnQgPSBjb25maWcuQ29tcG9uZW50O1xuXG4gICAgICAgIHZhciBrZXlzID0gWycnXTtcblxuICAgICAgICBpZiAodHlwZW9mIHJ1bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyDmsqHnlKhwYXRoLXRvLXJlZ2V4cO+8jOaaguaXtuS4jeaPkOS+m+i/meS5iOWkmuWKn+iDveaUr+aMgVxuICAgICAgICAgICAgdmFyIHJlZ1RleHQgPSBydWxlLnJlcGxhY2UoL1xcLzooW2EtejAtOV8tXSspKD89XFwvfCQpL2lnLCBmdW5jdGlvbiAobWF0Y2gsIGtleSkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnLyhbXi9cXFxcc10rKSc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcnVsZSA9IG5ldyBSZWdFeHAoJ14nICsgcmVnVGV4dCArICckJywgJ2knKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKHJ1bGUgaW5zdGFuY2VvZiBSZWdFeHApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4tUk9VVEVSIEVSUk9SXSBSdWxlIG11c3QgYmUgc3RyaW5nIG9yIFJlZ0V4cCEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpZCA9IGd1aWQoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXMucHVzaCh7IGlkOiBpZCwgcnVsZTogcnVsZSwgaGFuZGxlcjogaGFuZGxlciwga2V5czoga2V5cywgdGFyZ2V0OiB0YXJnZXQsIENvbXBvbmVudDogQ29tcG9uZW50LCBjb25maWc6IGNvbmZpZyB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5ZCv5Yqo6Lev55Sx5Yqf6IO9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHNhbi1yb3V0ZXIg5a6e5L6LXG4gICAgICovXG5cblxuICAgIFJvdXRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sb2NhdG9yLm9uKCdyZWRpcmVjdCcsIHRoaXMubG9jYXRvclJlZGlyZWN0SGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmxvY2F0b3Iuc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMubG9jYXRvci5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDlgZzmraLot6/nlLHlip/og71cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gc2FuLXJvdXRlciDlrp7kvotcbiAgICAgKi9cblxuXG4gICAgUm91dGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgdGhpcy5sb2NhdG9yLnVuKCdyZWRpcmVjdCcsIHRoaXMubG9jYXRvclJlZGlyZWN0SGFuZGxlcik7XG4gICAgICAgIHRoaXMubG9jYXRvci5zdG9wKCk7XG4gICAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOiuvue9rui3r+eUseaooeW8j1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUg6Lev55Sx5qih5byP77yMaGFzaCB8IGh0bWw1XG4gICAgICogQHJldHVybiB7T2JqZWN0fSBzYW4tcm91dGVyIOWunuS+i1xuICAgICAqL1xuXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLnNldE1vZGUgPSBmdW5jdGlvbiBzZXRNb2RlKG1vZGUpIHtcbiAgICAgICAgbW9kZSA9IG1vZGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gbW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcblxuICAgICAgICB2YXIgcmVzdGFydCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgcmVzdGFydCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2hhc2gnOlxuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRvciA9IG5ldyBfaGFzaDJbJ2RlZmF1bHQnXSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaHRtbDUnOlxuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRvciA9IG5ldyBfaHRtbDJbJ2RlZmF1bHQnXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICByZXR1cm4gUm91dGVyO1xufSgpO1xuXG4vKipcbiAqIOm7mOiupOeahOi3r+eUseWZqOWunuS+i1xuICpcbiAqIEB0eXBlIHtSb3V0ZXJ9XG4gKi9cblxuXG52YXIgcm91dGVyID0gZXhwb3J0cy5yb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbi8qKlxuICog6Lev55Sx6ZO+5o6l55qEIFNhbiDnu4Tku7ZcbiAqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0cy5MaW5rID0gX2xpbmsyWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBlbGVtZW50U2VsZWN0b3I7XG4vKlxuKlxuKiBAZmlsZSDpgInmi6nlmahcbiogQGF1dGhvciB2aW5jZW50IGxhdS80MTM4OTMwOTNAcXEuY29tXG4qL1xuXG4vKipcbiAqIOWFg+e0oOmAieaLqeWZqFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IHNlbGVjdG9yIOmAieaLqeWZqFxuICogQHJldHVybnMge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRTZWxlY3RvcihzZWxlY3Rvcikge1xuICAgIHN3aXRjaCAodHlwZW9mIHNlbGVjdG9yID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcblxuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5yZXBsYWNlKC8jL2ksICcnKSk7XG4gICAgfVxufVxuXG4vKioqLyB9XG4vKioqKioqLyBdKTtcbn0pOyIsIi8qKlxuICogU2FuXG4gKiBDb3B5cmlnaHQgMjAxNiBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGZpbGUg5Li75paH5Lu2XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqICAgICAgICAgb3Rha3VzdGF5KG90YWt1c3RheUBnbWFpbC5jb20pXG4gKiAgICAgICAgIGp1bm1lcihqdW5tZXJAZm94bWFpbC5jb20pXG4gKi9cblxuKGZ1bmN0aW9uIChyb290KSB7XG4gICAgLy8g5Lq65bel6LCD5pW05omT5YyF5Luj56CB6aG65bqP77yM6YCa6L+H5rOo6YeK5omL5bel5YaZ5LiA5Lqb5L6d6LWWXG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2d1aWQnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvZW1wdHknKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvZXh0ZW5kJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2luaGVyaXRzJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2VhY2gnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvY29udGFpbnMnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvYmluZCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci9vbicpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci91bicpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci9zdmctdGFncycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci9jcmVhdGUtZWwnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL25leHQtdGljaycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci9pZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci9pZS1vbGQtdGhhbi05Jyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL2lucHV0LWV2ZW50LWNvbXBhdGlibGUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvYXV0by1jbG9zZS10YWdzJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2RhdGEtdHlwZXMuanMnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3V0aWwvY3JlYXRlLWRhdGEtdHlwZXMtY2hlY2tlci5qcycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vcGFyc2VyL3dhbGtlcicpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vcGFyc2VyL2NyZWF0ZS1hLW5vZGUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3BhcnNlci9wYXJzZS10ZW1wbGF0ZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vcnVudGltZS9jaGFuZ2UtZXhwci1jb21wYXJlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9ydW50aW1lL2RhdGEtY2hhbmdlLXR5cGUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3J1bnRpbWUvZGVmYXVsdC1maWx0ZXJzJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L2xpZmUtY3ljbGUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3ZpZXcvbm9kZS10eXBlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L2dldC1wcm9wLWhhbmRsZXInKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3ZpZXcvaXMtZGF0YS1jaGFuZ2UtYnktZWxlbWVudCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdmlldy9ldmVudC1kZWNsYXJhdGlvbi1saXN0ZW5lcicpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdmlldy9jcmVhdGUtbm9kZScpO1xuXG5cbiAgICAvKipcbiAqIEBmaWxlIOeUn+aIkOWUr+S4gGlkXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8qKlxuICog5ZSv5LiAaWTnmoTotbflp4vlgLxcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbnZhciBndWlkSW5kZXggPSAxO1xuXG4vKipcbiAqIOWUr+S4gGlk55qE5YmN57yAXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgZ3VpZFByZWZpeCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoMTYpLnNsaWNlKDgpO1xuXG4vKipcbiAqIOiOt+WPluWUr+S4gGlkXG4gKlxuICogQGlubmVyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IOWUr+S4gGlkXG4gKi9cbmZ1bmN0aW9uIGd1aWQoKSB7XG4gICAgcmV0dXJuICdfJyArIGd1aWRQcmVmaXggKyAoZ3VpZEluZGV4KyspO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBndWlkO1xuXG5cbi8qKlxuICogQGZpbGUg56m65Ye95pWwXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8qKlxuICog5ZWl6YO95LiN5bmyXG4gKi9cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZW1wdHk7XG5cblxuLyoqXG4gKiBAZmlsZSDlsZ7mgKfmi7fotJ1cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5a+56LGh5bGe5oCn5ou36LSdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCDnm67moIflr7nosaFcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ug5rqQ5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9IOi/lOWbnuebruagh+WvueixoVxuICovXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBleHRlbmQ7XG5cblxuLyoqXG4gKiBAZmlsZSDmnoTlu7rnsbvkuYvpl7TnmoTnu6fmib/lhbPns7tcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBleHRlbmQgPSByZXF1aXJlKCcuL2V4dGVuZCcpO1xuXG4vKipcbiAqIOaehOW7uuexu+S5i+mXtOeahOe7p+aJv+WFs+ezu1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YkNsYXNzIOWtkOexu+WHveaVsFxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3VwZXJDbGFzcyDniLbnsbvlh73mlbBcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICB2YXIgc3ViQ2xhc3NQcm90byA9IHN1YkNsYXNzLnByb3RvdHlwZTtcbiAgICB2YXIgRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgIEYucHJvdG90eXBlID0gc3VwZXJDbGFzcy5wcm90b3R5cGU7XG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gbmV3IEYoKTtcbiAgICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgICBleHRlbmQoc3ViQ2xhc3MucHJvdG90eXBlLCBzdWJDbGFzc1Byb3RvKTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaW5oZXJpdHM7XG5cblxuLyoqXG4gKiBAZmlsZSDpgY3ljobmlbDnu4RcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLyoqXG4gKiDpgY3ljobmlbDnu4Tpm4blkIhcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSDmlbDnu4TmupBcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oQW55LG51bWJlcik6Ym9vbGVhbn0gaXRlcmF0b3Ig6YGN5Y6G5Ye95pWwXG4gKi9cbmZ1bmN0aW9uIGVhY2goYXJyYXksIGl0ZXJhdG9yKSB7XG4gICAgaWYgKGFycmF5ICYmIGFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpdGVyYXRvcihhcnJheVtpXSwgaSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVhY2g7XG5cblxuLyoqXG4gKiBAZmlsZSDliKTmlq3mlbDnu4TkuK3mmK/lkKbljIXlkKvmn5DpoblcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi9lYWNoJyk7XG5cbi8qKlxuICog5Yik5pat5pWw57uE5Lit5piv5ZCm5YyF5ZCr5p+Q6aG5XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkg5pWw57uEXG4gKiBAcGFyYW0geyp9IHZhbHVlIOWMheWQq+eahOmhuVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29udGFpbnMoYXJyYXksIHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIGVhY2goYXJyYXksIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJlc3VsdCA9IGl0ZW0gPT09IHZhbHVlO1xuICAgICAgICByZXR1cm4gIXJlc3VsdDtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5zO1xuXG5cbi8qKlxuICogQGZpbGUgYmluZOWHveaVsFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCDmlrnms5XnmoTlhbzlrrnmgKflsIHoo4VcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIOimgWJpbmTnmoTlh73mlbBcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIHRoaXPmjIflkJHlr7nosaFcbiAqIEBwYXJhbSB7Li4uKn0gYXJncyDpooTorr7nmoTliJ3lp4vlj4LmlbBcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBiaW5kKGZ1bmMsIHRoaXNBcmcpIHtcbiAgICB2YXIgbmF0aXZlQmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIGlmIChuYXRpdmVCaW5kICYmIGZ1bmMuYmluZCA9PT0gbmF0aXZlQmluZCkge1xuICAgIC8vICNbZW5kXVxuICAgICAgICByZXR1cm4gbmF0aXZlQmluZC5hcHBseShmdW5jLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgfVxuXG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgICAvLyAjW2VuZF1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gYmluZDtcblxuXG4vKipcbiAqIEBmaWxlIERPTSDkuovku7bmjILovb1cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogRE9NIOS6i+S7tuaMgui9vVxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgRE9N5YWD57SgXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIOS6i+S7tuWQjVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNhcHR1cmUg5piv5ZCm5piv5o2V6I636Zi25q61XG4gKi9cbmZ1bmN0aW9uIG9uKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIC8vICNbZW5kXVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBvbjtcblxuXG4vKipcbiAqIEBmaWxlIERPTSDkuovku7bljbjovb1cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogRE9NIOS6i+S7tuWNuOi9vVxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgRE9N5YWD57SgXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIOS6i+S7tuWQjVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNhcHR1cmUg5piv5ZCm5piv5o2V6I636Zi25q61XG4gKi9cbmZ1bmN0aW9uIHVuKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIC8vICNbZW5kXVxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB1bjtcblxuXG4vKipcbiAqIEBmaWxlIOWwhuWtl+espuS4sumAl+WPt+WIh+WIhui/lOWbnuWvueixoVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcblxuLyoqXG4gKiDlsIblrZfnrKbkuLLpgJflj7fliIfliIbov5Tlm57lr7nosaFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOWtl+espuS4slxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBzcGxpdFN0cjJPYmooc291cmNlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGVhY2goXG4gICAgICAgIHNvdXJjZS5zcGxpdCgnLCcpLFxuICAgICAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IDE7XG4gICAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHNwbGl0U3RyMk9iajtcblxuXG4vKipcbiAqIEBmaWxlIFNWR+agh+etvuihqFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIHNwbGl0U3RyMk9iaiA9IHJlcXVpcmUoJy4uL3V0aWwvc3BsaXQtc3RyLTItb2JqJyk7XG5cbi8qKlxuICogc3ZnVGFnc1xuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRy9zdmdkdGQuaHRtbCDlj6rlj5bluLjnlKhcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBzdmdUYWdzID0gc3BsaXRTdHIyT2JqKCcnXG4gICAgLy8gc3RydWN0dXJlXG4gICAgKyAnc3ZnLGcsZGVmcyxkZXNjLG1ldGFkYXRhLHN5bWJvbCx1c2UsJ1xuICAgIC8vIGltYWdlICYgc2hhcGVcbiAgICArICdpbWFnZSxwYXRoLHJlY3QsY2lyY2xlLGxpbmUsZWxsaXBzZSxwb2x5bGluZSxwb2x5Z29uLCdcbiAgICAvLyB0ZXh0XG4gICAgKyAndGV4dCx0c3Bhbix0cmVmLHRleHRwYXRoLCdcbiAgICAvLyBvdGhlclxuICAgICsgJ21hcmtlcixwYXR0ZXJuLGNsaXBwYXRoLG1hc2ssZmlsdGVyLGN1cnNvcix2aWV3LGFuaW1hdGUsJ1xuICAgIC8vIGZvbnRcbiAgICArICdmb250LGZvbnQtZmFjZSxnbHlwaCxtaXNzaW5nLWdseXBoJyk7XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN2Z1RhZ3M7XG5cblxuLyoqXG4gKiBAZmlsZSBET03liJvlu7pcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBzdmdUYWdzID0gcmVxdWlyZSgnLi9zdmctdGFncycpO1xuXG4vKipcbiAqIOWIm+W7uiBET00g5YWD57SgXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB0YWdOYW1lIHRhZ05hbWVcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVFbCh0YWdOYW1lKSB7XG4gICAgaWYgKHN2Z1RhZ3NbdGFnTmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB0YWdOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRWw7XG5cblxuLyoqXG4gKiBAZmlsZSDnp7vpmaRET01cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5bCGIERPTSDku47pobXpnaLkuK3np7vpmaRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBET03lhYPntKBcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRWwoZWwpIHtcbiAgICBpZiAoZWwgJiYgZWwucGFyZW50Tm9kZSkge1xuICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlbW92ZUVsO1xuXG5cbi8qKlxuICogQGZpbGUg5Zyo5LiL5LiA5Liq5pe26Ze05ZGo5pyf6L+Q6KGM5Lu75YqhXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyDor6Xmlrnms5Xlj4LnhafkuoZ2dWUyLjUuMOeahOWunueOsO+8jOaEn+iwonZ1ZeWboumYn1xuLy8gU0VFOiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2Jsb2IvMDk0OGQ5OTlmMmZkZGY5ZjkwOTkxOTU2NDkzZjk3NjI3M2M1ZGExZi9zcmMvY29yZS91dGlsL2Vudi5qcyNMNjhcblxuXG4vLyB2YXIgYmluZCA9IHJlcXVpcmUoJy4vYmluZCcpO1xuXG4vKipcbiAqIOS4i+S4gOS4quWRqOacn+imgeaJp+ihjOeahOS7u+WKoeWIl+ihqFxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge0FycmF5fVxuICovXG52YXIgbmV4dFRhc2tzID0gW107XG5cbi8qKlxuICog5omn6KGM5LiL5LiA5Liq5ZGo5pyf5Lu75Yqh55qE5Ye95pWwXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKi9cbnZhciBuZXh0SGFuZGxlcjtcblxuLyoqXG4gKiDmtY/op4jlmajmmK/lkKbmlK/mjIHljp/nlJ9Qcm9taXNlXG4gKiDlr7lQcm9taXNl5YGa5Yik5pat77yM5piv5Li65LqG56aB55So5LiA5Lqb5LiN5Lil6LCo55qEUHJvbWlzZeeahHBvbHlmaWxsXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzTmF0aXZlUHJvbWlzZSA9IHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChQcm9taXNlKTtcblxuLyoqXG4gKiDlnKjkuIvkuIDkuKrml7bpl7TlkajmnJ/ov5DooYzku7vliqFcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOimgei/kOihjOeahOS7u+WKoeWHveaVsFxuICogQHBhcmFtIHtPYmplY3Q9fSB0aGlzQXJnIHRoaXPmjIflkJHlr7nosaFcbiAqL1xuZnVuY3Rpb24gbmV4dFRpY2soZm4sIHRoaXNBcmcpIHtcbiAgICBpZiAodGhpc0FyZykge1xuICAgICAgICBmbiA9IGJpbmQoZm4sIHRoaXNBcmcpO1xuICAgIH1cbiAgICBuZXh0VGFza3MucHVzaChmbik7XG5cbiAgICBpZiAobmV4dEhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGFza3MgPSBuZXh0VGFza3Muc2xpY2UoMCk7XG4gICAgICAgIG5leHRUYXNrcyA9IFtdO1xuICAgICAgICBuZXh0SGFuZGxlciA9IG51bGw7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0YXNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRhc2tzW2ldKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g6Z2e5qCH5YeG5pa55rOV77yM5L2G5piv5q2k5pa55rOV6Z2e5bi45ZC75ZCI6KaB5rGC44CCXG4gICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2V0SW1tZWRpYXRlKG5leHRIYW5kbGVyKTtcbiAgICB9XG4gICAgLy8g55SoTWVzc2FnZUNoYW5uZWzljrvlgZpzZXRJbW1lZGlhdGXnmoRwb2x5ZmlsbFxuICAgIC8vIOWOn+eQhuaYr+WwhuaWsOeahG1lc3NhZ2Xkuovku7bliqDlhaXliLDljp/mnInnmoRkb20gZXZlbnRz5LmL5ZCOXG4gICAgZWxzZSBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHZhciBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBuZXh0SGFuZGxlcjtcbiAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSgxKTtcbiAgICB9XG4gICAgLy8gZm9yIG5hdGl2ZSBhcHBcbiAgICBlbHNlIGlmIChpc05hdGl2ZVByb21pc2UpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihuZXh0SGFuZGxlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KG5leHRIYW5kbGVyLCAwKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG5leHRUaWNrO1xuXG5cbi8qKlxuICogQGZpbGUgaWXniYjmnKzlj7dcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5LuOdXNlckFnZW505LitaWXniYjmnKzlj7fnmoTljLnphY3kv6Hmga9cbiAqXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbnZhciBpZVZlcnNpb25NYXRjaCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvbXNpZVxccyooWzAtOV0rKS9pKTtcblxuLyoqXG4gKiBpZeeJiOacrOWPt++8jOmdnmll5pe25Li6MFxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbnZhciBpZSA9IGllVmVyc2lvbk1hdGNoID8gaWVWZXJzaW9uTWF0Y2hbMV0gLSAwIDogMDtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaWU7XG5cblxuLyoqXG4gKiBAZmlsZSDmmK/lkKYgSUUg5bm25LiU5bCP5LqOIDlcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBpZSA9IHJlcXVpcmUoJy4vaWUnKTtcblxuLy8gSEFDSzpcbi8vIDEuIElFOOS4i++8jOiuvue9rmlubmVySFRNTOaXtuWmguaenOS7pWh0bWwgY29tbWVudOW8gOWktO+8jGNvbW1lbnTkvJrooqvoh6rliqjmu6Tmjolcbi8vICAgIOS4uuS6huS/neivgXN0dW1w5a2Y5Zyo77yM6ZyA6KaB6K6+572u5a6MaHRtbOWQju+8jGNyZWF0ZUNvbW1lbnTlubZhcHBlbmRDaGlsZC9pbnNlcnRCZWZvcmVcbi8vIDIuIElFOOS4i++8jGlubmVySFRNTOi/mOS4jeaUr+aMgWN1c3RvbSBlbGVtZW5077yM5omA5Lul6ZyA6KaB55SoZGl25pu/5Luj77yM5LiN55SoY3JlYXRlRWxlbWVudFxuLy8gMy4g6Jm954S2SUU45bey57uP5LyY5YyW5LqG5a2X56ym5LiyK+i/nuaOpe+8jOeijueJh+WMlui/nuaOpeaAp+iDveS4jeWGjemAgOWMllxuLy8gICAg5L2G5piv55Sx5LqO5LiK6Z2i5aSa5Liq5YW85a655Zy65pmv6YO955SoIDwgOSDliKTmlq3vvIzmiYDku6XlrZfnrKbkuLLov57mjqXkuZ/msr/nlKhcbi8vICAgIOaJgOS7pee7k+aenOaYr0lFOOS4i+Wtl+espuS4sui/nuaOpeeUqOeahOaYr+aVsOe7hGpvaW7nmoTmlrnlvI9cblxuLy8gI1tiZWdpbl0gYWxsdWFcbi8qKlxuICog5piv5ZCmIElFIOW5tuS4lOWwj+S6jiA5XG4gKi9cbnZhciBpZU9sZFRoYW45ID0gaWUgJiYgaWUgPCA5O1xuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGllT2xkVGhhbjk7XG5cblxuLyoqXG4gKiBAZmlsZSBET00g5LqL5Lu25oyC6L29XG4gKiBAYXV0aG9yIGRhZnJvayhvLm9AbXVnLmRvZylcbiAqL1xuXG4vKipcbiAqIERPTSDkuovku7bmjILovb1cbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIERPTeWFg+e0oFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSDkuovku7blkI1cbiAqL1xuZnVuY3Rpb24gdHJpZ2dlcihlbCwgZXZlbnROYW1lKSB7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpZ2dlcjtcblxuXG4vKipcbiAqIEBmaWxlIOino+WGsyBJRTkg5Zyo6KGo5Y2V5YWD57Sg5Lit5Yig6Zmk5a2X56ym5pe25LiN6Kem5Y+R5LqL5Lu255qE6Zeu6aKYXG4gKiBAYXV0aG9yIGRhZnJvayhvLm9AbXVnLmRvZylcbiAqL1xuXG4vLyB2YXIgaWUgPSByZXF1aXJlKCcuL2llJyk7XG4vLyB2YXIgb24gPSByZXF1aXJlKCcuL29uJyk7XG4vLyB2YXIgdHJpZ2dlciA9IHJlcXVpcmUoJy4vdHJpZ2dlcicpO1xuXG4vLyAjW2JlZ2luXSBhbGx1YVxuaWYgKGllID09PSA5KSB7XG4gICAgb24oZG9jdW1lbnQsICdzZWxlY3Rpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnIHx8IGVsLnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgICAgIHRyaWdnZXIoZWwsICdpbnB1dCcpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyAjW2VuZF1cblxuXG4vKipcbiAqIEBmaWxlIOiHqumXreWQiOagh+etvuihqFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIHNwbGl0U3RyMk9iaiA9IHJlcXVpcmUoJy4uL3V0aWwvc3BsaXQtc3RyLTItb2JqJyk7XG5cbi8qKlxuICog6Ieq6Zet5ZCI5qCH562+5YiX6KGoXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGF1dG9DbG9zZVRhZ3MgPSBzcGxpdFN0cjJPYmooJ2FyZWEsYmFzZSxicixjb2wsZW1iZWQsaHIsaW1nLGlucHV0LGtleWdlbixwYXJhbSxzb3VyY2UsdHJhY2ssd2JyJyk7XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGF1dG9DbG9zZVRhZ3M7XG5cblxuLyoqXG4gKiBAZmlsZSBkYXRhIHR5cGVzXG4gKiBAYXV0aG9yIGxlb24gPGx1ZGFmYUBvdXRsb29rLmNvbT5cbiAqL1xuXG4vLyB2YXIgYmluZCA9IHJlcXVpcmUoJy4vYmluZCcpO1xuLy8gdmFyIGVtcHR5ID0gcmVxdWlyZSgnLi9lbXB0eScpO1xuLy8gdmFyIGV4dGVuZCA9IHJlcXVpcmUoJy4vZXh0ZW5kJyk7XG5cbi8vICNbYmVnaW5dIGVycm9yXG52YXIgQU5PTllNT1VTX0NMQVNTX05BTUUgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbi8qKlxuICog6I635Y+W57K+56Gu55qE57G75Z6LXG4gKlxuICogQE5PVEUg5aaC5p6cIG9iaiDmmK/kuIDkuKogRE9NRWxlbWVudO+8jOaIkeS7rOS8mui/lOWbniBgZWxlbWVudGDvvJtcbiAqXG4gKiBAcGFyYW0gIHsqfSBvYmog55uu5qCHXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldERhdGFUeXBlKG9iaikge1xuXG4gICAgaWYgKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuICdlbGVtZW50JztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuICAgICAgICAuY2FsbChvYmopXG4gICAgICAgIC5zbGljZSg4LCAtMSlcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG59XG4vLyAjW2VuZF1cblxuLyoqXG4gKiDliJvlu7rpk77lvI/nmoTmlbDmja7nsbvlnovmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gdmFsaWRhdGUg55yf5q2j55qE5qCh6aqM5ZmoXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIHZhciBjaGFpbmVkQ2hlY2tlciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGNoYWluZWRDaGVja2VyLmlzUmVxdWlyZWQgPSBlbXB0eTtcblxuICAgIC8vIOWPquWcqCBlcnJvciDlip/og73lkK/nlKjml7bmiY3mnInlrp7pmYXkuIrnmoQgZGF0YVR5cGVzIOajgOa1i1xuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdmFyIGNoZWNrVHlwZSA9IGZ1bmN0aW9uIChpc1JlcXVpcmVkLCBkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuICAgICAgICB2YXIgZGF0YVR5cGUgPSBnZXREYXRhVHlwZShkYXRhVmFsdWUpO1xuXG4gICAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VU19DTEFTU19OQU1FO1xuXG4gICAgICAgIC8vIOWmguaenOaYryBudWxsIOaIliB1bmRlZmluZWTvvIzpgqPkuYjopoHmj5DliY3ov5Tlm57llaZcbiAgICAgICAgaWYgKGRhdGFWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyDmmK8gcmVxdWlyZWQg5bCx5oql6ZSZXG4gICAgICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICAgICArICdUaGUgYCcgKyBkYXRhTmFtZSArICdgICdcbiAgICAgICAgICAgICAgICAgICAgKyAnaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluIGAnICsgY29tcG9uZW50TmFtZSArICdgLCAnXG4gICAgICAgICAgICAgICAgICAgICsgJ2J1dCBpdHMgdmFsdWUgaXMgJyArIGRhdGFUeXBlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOS4jeaYryByZXF1aXJlZO+8jOmCo+WwseaYryBvayDnmoRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpO1xuXG4gICAgfTtcblxuICAgIGNoYWluZWRDaGVja2VyID0gYmluZChjaGVja1R5cGUsIG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tlci5pc1JlcXVpcmVkID0gYmluZChjaGVja1R5cGUsIG51bGwsIHRydWUpO1xuICAgIC8vICNbZW5kXVxuXG5cblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tlcjtcblxufVxuXG4vLyAjW2JlZ2luXSBlcnJvclxuLyoqXG4gKiDnlJ/miJDkuLvopoHnsbvlnovmlbDmja7moKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGUg5Li757G75Z6LXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKHR5cGUpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuICAgICAgICB2YXIgZGF0YVR5cGUgPSBnZXREYXRhVHlwZShkYXRhVmFsdWUpO1xuXG4gICAgICAgIGlmIChkYXRhVHlwZSAhPT0gdHlwZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHR5cGUnXG4gICAgICAgICAgICAgICAgKyAnKCcgKyBkYXRhVHlwZSArICcgc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCAnXG4gICAgICAgICAgICAgICAgKyAnZXhwZWN0ZWQgJyArIHR5cGUgKyAnKSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59XG5cblxuXG4vKipcbiAqIOeUn+aIkCBhcnJheU9mIOagoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBhcnJheUl0ZW1DaGVja2VyIOaVsOe7hOS4reavj+mhueaVsOaNrueahOagoemqjOWZqFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZDaGVja2VyKGFycmF5SXRlbUNoZWNrZXIpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcnJheUl0ZW1DaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdEYXRhIGAnICsgZGF0YU5hbWUgKyAnYCBvZiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YVR5cGUgbm90YXRpb24gaW5zaWRlIGBhcnJheU9mYCwgZXhwZWN0ZWQgYGZ1bmN0aW9uYCdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVHlwZSA9IGdldERhdGFUeXBlKGRhdGFWYWx1ZSk7XG5cbiAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnYXJyYXknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgdHlwZSdcbiAgICAgICAgICAgICAgICArICcoJyArIGRhdGFUeXBlICsgJyBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcsICdcbiAgICAgICAgICAgICAgICArICdleHBlY3RlZCBhcnJheSknXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRhdGFWYWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgYXJyYXlJdGVtQ2hlY2tlcihkYXRhVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSArICdbJyArIGkgKyAnXScpO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxufVxuXG4vKipcbiAqIOeUn+aIkCBpbnN0YW5jZU9mIOajgOa1i+WZqFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufENsYXNzfSBleHBlY3RlZENsYXNzIOacn+W+heeahOexu1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlT2ZDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuXG4gICAgICAgIGlmIChkYXRhVmFsdWUgaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlQ2xhc3NOYW1lID0gZGF0YVZhbHVlLmNvbnN0cnVjdG9yICYmIGRhdGFWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgICAgICA/IGRhdGFWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgICAgICA6IEFOT05ZTU9VU19DTEFTU19OQU1FO1xuXG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVNfQ0xBU1NfTkFNRTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiB0eXBlJ1xuICAgICAgICAgICAgKyAnKCcgKyBkYXRhVmFsdWVDbGFzc05hbWUgKyAnIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgKyAnZXhwZWN0ZWQgaW5zdGFuY2Ugb2YgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJyknXG4gICAgICAgICk7XG5cblxuICAgIH0pO1xuXG59XG5cbi8qKlxuICog55Sf5oiQIHNoYXBlIOagoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gc2hhcGVUeXBlcyBzaGFwZSDmoKHpqozop4TliJlcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVTaGFwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICBpZiAoZ2V0RGF0YVR5cGUoc2hhcGVUeXBlcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdEYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgc2hhcGVgLCBleHBlY3RlZCBgb2JqZWN0YCdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVHlwZSA9IGdldERhdGFUeXBlKGRhdGFWYWx1ZSk7XG5cbiAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHR5cGUnXG4gICAgICAgICAgICAgICAgKyAnKCcgKyBkYXRhVHlwZSArICcgc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCAnXG4gICAgICAgICAgICAgICAgKyAnZXhwZWN0ZWQgb2JqZWN0KSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBzaGFwZUtleU5hbWUgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICAgICAgaWYgKHNoYXBlVHlwZXMuaGFzT3duUHJvcGVydHkoc2hhcGVLZXlOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1tzaGFwZUtleU5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2hlY2tlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VyKGRhdGFWYWx1ZSwgc2hhcGVLZXlOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUgKyAnLicgKyBzaGFwZUtleU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgb25lT2Yg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGV4cGVjdGVkRW51bVZhbHVlcyDmnJ/lvoXnmoTmnprkuL7lgLxcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVPbmVPZkNoZWNrZXIoZXhwZWN0ZWRFbnVtVmFsdWVzKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIGlmIChnZXREYXRhVHlwZShleHBlY3RlZEVudW1WYWx1ZXMpICE9PSAnYXJyYXknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdEYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgb25lT2ZgLCBhcnJheSBpcyBleHBlY3RlZC4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHBlY3RlZEVudW1WYWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhVmFsdWUgPT09IGV4cGVjdGVkRW51bVZhbHVlc1tpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHZhbHVlJ1xuICAgICAgICAgICAgKyAnKGAnICsgZGF0YVZhbHVlICsgJ2Agc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCAnXG4gICAgICAgICAgICArICdleHBlY3RlZCBvbmUgb2YgJyArIGV4cGVjdGVkRW51bVZhbHVlcy5qb2luKCcsJykgKyAnKSdcbiAgICAgICAgKTtcblxuICAgIH0pO1xuXG59XG5cbi8qKlxuICog55Sf5oiQIG9uZU9mVHlwZSDmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtBcnJheTxGdW5jdGlvbj59IGV4cGVjdGVkRW51bU9mVHlwZVZhbHVlcyDmnJ/lvoXnmoTmnprkuL7nsbvlnotcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVPbmVPZlR5cGVDaGVja2VyKGV4cGVjdGVkRW51bU9mVHlwZVZhbHVlcykge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICBpZiAoZ2V0RGF0YVR5cGUoZXhwZWN0ZWRFbnVtT2ZUeXBlVmFsdWVzKSAhPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgb25lT2ZgLCBhcnJheSBpcyBleHBlY3RlZC4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHBlY3RlZEVudW1PZlR5cGVWYWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBleHBlY3RlZEVudW1PZlR5cGVWYWx1ZXNbaV07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNoZWNrZXIoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSk7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6cIGNoZWNrZXIg5a6M5oiQ5qCh6aqM5rKh5oql6ZSZ77yM6YKj5bCx6L+U5Zue5LqGXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmnInplJnor6/vvIzpgqPkuYjlupTor6XmiorplJnor6/lkJ7mjolcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5omA5pyJ55qE5Y+v5o6l5Y+XIHR5cGUg6YO95aSx6LSl5LqG77yM5omN5Lii5LiA5Liq5byC5bi4XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgdmFsdWUnXG4gICAgICAgICAgICArICcoYCcgKyBkYXRhVmFsdWUgKyAnYCBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcpJ1xuICAgICAgICApO1xuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgb2JqZWN0T2Yg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IHR5cGVDaGVja2VyIOWvueixoeWxnuaAp+WAvOagoemqjOWZqFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdEYXRhIGAnICsgZGF0YU5hbWUgKyAnYCBvZiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YVR5cGUgbm90YXRpb24gaW5zaWRlIGBvYmplY3RPZmAsIGV4cGVjdGVkIGZ1bmN0aW9uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZGF0YU5hbWUgKyAnYCBvZiB0eXBlJ1xuICAgICAgICAgICAgICAgICsgJygnICsgZGF0YVR5cGUgKyAnIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgICAgICsgJ2V4cGVjdGVkIG9iamVjdCknXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgZGF0YUtleU5hbWUgaW4gZGF0YVZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZhbHVlLmhhc093blByb3BlcnR5KGRhdGFLZXlOYW1lKSkge1xuICAgICAgICAgICAgICAgIHR5cGVDaGVja2VyKFxuICAgICAgICAgICAgICAgICAgICBkYXRhVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFLZXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICBmdWxsRGF0YU5hbWUgKyAnLicgKyBkYXRhS2V5TmFtZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgZXhhY3Qg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBzaGFwZVR5cGVzIG9iamVjdCDlvaLmgIHlrprkuYlcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVFeGFjdENoZWNrZXIoc2hhcGVUeXBlcykge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUsIHNlY3JldCkge1xuXG4gICAgICAgIGlmIChnZXREYXRhVHlwZShzaGFwZVR5cGVzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGEgYCcgKyBkYXRhTmFtZSArICdgIG9mIGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkICdcbiAgICAgICAgICAgICAgICArICdEYXRhVHlwZSBub3RhdGlvbiBpbnNpZGUgYGV4YWN0YCdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVmFsdWVUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBpZiAoZGF0YVZhbHVlVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHR5cGUgYCcgKyBkYXRhVmFsdWVUeXBlICsgJ2AnXG4gICAgICAgICAgICAgICAgKyAnKHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgZXhwZWN0ZWQgYG9iamVjdGApJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhbGxLZXlzID0ge307XG5cbiAgICAgICAgLy8g5YWI5ZCI5YWlIHNoYXBlVHlwZXNcbiAgICAgICAgZXh0ZW5kKGFsbEtleXMsIHNoYXBlVHlwZXMpO1xuICAgICAgICAvLyDlho3lkIjlhaUgZGF0YVZhbHVlXG4gICAgICAgIGV4dGVuZChhbGxLZXlzLCBkYXRhVmFsdWUpO1xuICAgICAgICAvLyDkv53or4EgYWxsS2V5cyDnmoTnsbvlnovmraPnoa5cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICAgICAgaWYgKGFsbEtleXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuXG4gICAgICAgICAgICAgICAgLy8gZGF0YVZhbHVlIOS4reacieS4gOS4quWkmuS9meeahOaVsOaNrumhuVxuICAgICAgICAgICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIGtleSBgJyArIGtleSArICdgICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLiAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICcoYCcgKyBrZXkgKyAnYCBpcyBub3QgZGVmaW5lZCBpbiBgRGF0YVR5cGVzLmV4YWN0YCknXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIGRhdGFWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdJbnZhbGlkIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4gJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnKGAnICsga2V5ICsgJ2AgaXMgbWFya2VkIGByZXF1aXJlZGAgaW4gYERhdGFUeXBlcy5leGFjdGApJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNoZWNrZXIoXG4gICAgICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICBmdWxsRGF0YU5hbWUgKyAnLicgKyBrZXksXG4gICAgICAgICAgICAgICAgICAgIHNlY3JldFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cbi8vICNbZW5kXVxuXG5cblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy12YWxpZC12YXItanNkb2MgKi9cbnZhciBEYXRhVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZW1wdHkpLFxuICAgIG9iamVjdDogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihlbXB0eSksXG4gICAgZnVuYzogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihlbXB0eSksXG4gICAgc3RyaW5nOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGVtcHR5KSxcbiAgICBudW1iZXI6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZW1wdHkpLFxuICAgIGJvb2w6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZW1wdHkpLFxuICAgIHN5bWJvbDogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihlbXB0eSksXG4gICAgYW55OiBjcmVhdGVDaGFpbmFibGVDaGVja2VyLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXJcbn07XG5cbi8vICNbYmVnaW5dIGVycm9yXG5EYXRhVHlwZXMgPSB7XG5cbiAgICBhbnk6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZW1wdHkpLFxuXG4gICAgLy8g57G75Z6L5qOA5rWLXG4gICAgYXJyYXk6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgLy8g5aSN5ZCI57G75Z6L5qOA5rWLXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZkNoZWNrZXIsXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VPZkNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlT25lT2ZDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlT25lT2ZUeXBlQ2hlY2tlcixcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVFeGFjdENoZWNrZXJcblxufTtcbi8qIGVzbGludC1lbmFibGUgZmVjcy12YWxpZC12YXItanNkb2MgKi9cbi8vICNbZW5kXVxuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gRGF0YVR5cGVzO1xuXG5cbi8qKlxuICogQGZpbGUg5Yib5bu65pWw5o2u5qOA5rWL5Ye95pWwXG4gKiBAYXV0aG9yIGxlb248bHVkYWZhQG91dGxvb2suY29tPlxuICovXG5cblxuLy8gI1tiZWdpbl0gZXJyb3JcblxuLyoqXG4gKiDliJvlu7rmlbDmja7mo4DmtYvlh73mlbBcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRhdGFUeXBlcyAgICAg5pWw5o2u5qC85byPXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUg57uE5Lu25ZCNXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGF0YVR5cGVzQ2hlY2tlcihkYXRhVHlwZXMsIGNvbXBvbmVudE5hbWUpIHtcblxuICAgIC8qKlxuICAgICAqIOagoemqjCBkYXRhIOaYr+WQpua7oei2syBkYXRhIHR5cGVzIOeahOagvOW8j1xuICAgICAqXG4gICAgICogQHBhcmFtICB7Kn0gZGF0YSDmlbDmja5cbiAgICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICBmb3IgKHZhciBkYXRhVHlwZU5hbWUgaW4gZGF0YVR5cGVzKSB7XG5cbiAgICAgICAgICAgIGlmIChkYXRhVHlwZXMuaGFzT3duUHJvcGVydHkoZGF0YVR5cGVOYW1lKSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlQ2hlY2tlciA9IGRhdGFUeXBlc1tkYXRhVHlwZU5hbWVdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhVHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgICAgICAgICArIGNvbXBvbmVudE5hbWUgKyAnOicgKyBkYXRhVHlwZU5hbWUgKyAnIGlzIGludmFsaWQ7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHNhbi5EYXRhVHlwZXMnXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGF0YVR5cGVDaGVja2VyKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlTmFtZVxuICAgICAgICAgICAgICAgICk7XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG59XG5cbi8vICNbZW5kXVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURhdGFUeXBlc0NoZWNrZXI7XG5cblxuLyoqXG4gKiBAZmlsZSDlrZfnrKbkuLLmupDnoIHor7vlj5bnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLyoqXG4gKiDlrZfnrKbkuLLmupDnoIHor7vlj5bnsbvvvIznlKjkuo7mqKHmnb/lrZfnrKbkuLLop6PmnpDov4fnqItcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug6KaB6K+75Y+W55qE5a2X56ym5LiyXG4gKi9cbmZ1bmN0aW9uIFdhbGtlcihzb3VyY2UpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmxlbiA9IHRoaXMuc291cmNlLmxlbmd0aDtcbiAgICB0aGlzLmluZGV4ID0gMDtcbn1cblxuLyoqXG4gKiDojrflj5blvZPliY3lrZfnrKbnoIFcbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbldhbGtlci5wcm90b3R5cGUuY3VycmVudENvZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhckNvZGUodGhpcy5pbmRleCk7XG59O1xuXG4vKipcbiAqIOaIquWPluWtl+espuS4sueJh+autVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCDotbflp4vkvY3nva5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQg57uT5p2f5L2N572uXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbldhbGtlci5wcm90b3R5cGUuY3V0ID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2Uoc3RhcnQsIGVuZCk7XG59O1xuXG4vKipcbiAqIOWQkeWJjeivu+WPluWtl+esplxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBkaXN0YW5jZSDor7vlj5blrZfnrKbmlbBcbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIChkaXN0YW5jZSkge1xuICAgIHRoaXMuaW5kZXggKz0gZGlzdGFuY2U7XG59O1xuXG4vKipcbiAqIOivu+WPluS4i+S4gOS4quWtl+espu+8jOi/lOWbnuS4i+S4gOS4quWtl+espueahCBjb2RlXG4gKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5XYWxrZXIucHJvdG90eXBlLm5leHRDb2RlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ28oMSk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENvZGUoKTtcbn07XG5cbi8qKlxuICog6I635Y+W55u45bqU5L2N572u5a2X56ym55qEIGNvZGVcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXgg5a2X56ym5L2N572uXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbldhbGtlci5wcm90b3R5cGUuY2hhckNvZGUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2UuY2hhckNvZGVBdChpbmRleCk7XG59O1xuXG4vKipcbiAqIOWQkeWJjeivu+WPluWtl+espu+8jOebtOWIsOmBh+WIsOaMh+WumuWtl+espuWGjeWBnOatolxuICpcbiAqIEBwYXJhbSB7bnVtYmVyPX0gY2hhckNvZGUg5oyH5a6a5a2X56ym55qEY29kZVxuICogQHJldHVybiB7Ym9vbGVhbn0g5b2T5oyH5a6a5a2X56ym5pe277yM6L+U5Zue5piv5ZCm56Kw5Yiw5oyH5a6a55qE5a2X56ymXG4gKi9cbldhbGtlci5wcm90b3R5cGUuZ29VbnRpbCA9IGZ1bmN0aW9uIChjaGFyQ29kZSkge1xuICAgIHZhciBjb2RlO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy5sZW4gJiYgKGNvZGUgPSB0aGlzLmN1cnJlbnRDb2RlKCkpKSB7XG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSBjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIOWQkeWJjeivu+WPluespuWQiOinhOWImeeahOWtl+espueJh+aute+8jOW5tui/lOWbnuinhOWImeWMuemFjee7k+aenFxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSByZWcg5a2X56ym54mH5q6155qE5q2j5YiZ6KGo6L6+5byPXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uIChyZWcpIHtcbiAgICByZWcubGFzdEluZGV4ID0gdGhpcy5pbmRleDtcblxuICAgIHZhciBtYXRjaCA9IHJlZy5leGVjKHRoaXMuc291cmNlKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IHJlZy5sYXN0SW5kZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gV2Fsa2VyO1xuXG5cblxuLyoqXG4gKiBAZmlsZSDmqKHmnb/op6PmnpDnlJ/miJDnmoTmir3osaHoioLngrlcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5Yib5bu65qih5p2/6Kej5p6Q55Sf5oiQ55qE5oq96LGh6IqC54K5XG4gKlxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zIOiKgueCueWPguaVsFxuICogQHBhcmFtIHtzdHJpbmc9fSBvcHRpb25zLnRhZ05hbWUg5qCH562+5ZCNXG4gKiBAcGFyYW0ge0FOb2RlPX0gb3B0aW9ucy5wYXJlbnQg54i26IqC54K5XG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRpb25zLnRleHRFeHByIOaWh+acrOiKgueCueihqOi+vuW8j+WvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBjcmVhdGVBTm9kZShvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBpZiAoIW9wdGlvbnMudGV4dEV4cHIpIHtcbiAgICAgICAgb3B0aW9ucy5kaXJlY3RpdmVzID0gb3B0aW9ucy5kaXJlY3RpdmVzIHx8IHt9O1xuICAgICAgICBvcHRpb25zLnByb3BzID0gb3B0aW9ucy5wcm9wcyB8fCBbXTtcbiAgICAgICAgb3B0aW9ucy5ldmVudHMgPSBvcHRpb25zLmV2ZW50cyB8fCBbXTtcbiAgICAgICAgb3B0aW9ucy5jaGlsZHJlbiA9IG9wdGlvbnMuY2hpbGRyZW4gfHwgW107XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFOb2RlO1xuXG5cbi8qKlxuICogQGZpbGUg5oqKIGtlYmFiIGNhc2Ug5a2X56ym5Liy6L2s5o2i5oiQIGNhbWVsIGNhc2VcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5oqKIGtlYmFiIGNhc2Ug5a2X56ym5Liy6L2s5o2i5oiQIGNhbWVsIGNhc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOWtl+espuS4slxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBrZWJhYjJjYW1lbChzb3VyY2UpIHtcbiAgICByZXR1cm4gc291cmNlLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uIChtYXRjaCwgYWxwaGEpIHtcbiAgICAgICAgcmV0dXJuIGFscGhhLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGtlYmFiMmNhbWVsO1xuXG5cbi8qKlxuICogQGZpbGUg6KGo6L6+5byP57G75Z6LXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOihqOi+vuW8j+exu+Wei1xuICpcbiAqIEBjb25zdFxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIEV4cHJUeXBlID0ge1xuICAgIFNUUklORzogMSxcbiAgICBOVU1CRVI6IDIsXG4gICAgQk9PTDogMyxcbiAgICBBQ0NFU1NPUjogNCxcbiAgICBJTlRFUlA6IDUsXG4gICAgQ0FMTDogNixcbiAgICBURVhUOiA3LFxuICAgIEJJTkFSWTogOCxcbiAgICBVTkFSWTogOSxcbiAgICBURVJUSUFSWTogMTBcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEV4cHJUeXBlO1xuXG5cbi8qKlxuICogQGZpbGUg5Yib5bu66K6/6Zeu6KGo6L6+5byP5a+56LGhXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuXG4vKipcbiAqIOWIm+W7uuiuv+mXruihqOi+vuW8j+WvueixoVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGhzIOiuv+mXrui3r+W+hFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBjcmVhdGVBY2Nlc3NvcihwYXRocykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEV4cHJUeXBlLkFDQ0VTU09SLFxuICAgICAgICBwYXRoczogcGF0aHNcbiAgICB9O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBY2Nlc3NvcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluWtl+espuS4slxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuXG4vKipcbiAqIOivu+WPluWtl+espuS4slxuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRTdHJpbmcod2Fsa2VyKSB7XG4gICAgdmFyIHN0YXJ0Q29kZSA9IHdhbGtlci5jdXJyZW50Q29kZSgpO1xuICAgIHZhciBzdGFydEluZGV4ID0gd2Fsa2VyLmluZGV4O1xuICAgIHZhciBjaGFyQ29kZTtcblxuICAgIHdhbGtMb29wOiB3aGlsZSAoKGNoYXJDb2RlID0gd2Fsa2VyLm5leHRDb2RlKCkpKSB7XG4gICAgICAgIHN3aXRjaCAoY2hhckNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgOTI6IC8vIFxcXG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzdGFydENvZGU6XG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrIHdhbGtMb29wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpdGVyYWwgPSB3YWxrZXIuY3V0KHN0YXJ0SW5kZXgsIHdhbGtlci5pbmRleCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICB2YWx1ZTogKG5ldyBGdW5jdGlvbigncmV0dXJuICcgKyBsaXRlcmFsKSkoKVxuICAgIH07XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRTdHJpbmc7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bmlbDlrZdcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcblxuLyoqXG4gKiDor7vlj5bmlbDlrZdcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWROdW1iZXIod2Fsa2VyKSB7XG4gICAgdmFyIG1hdGNoID0gd2Fsa2VyLm1hdGNoKC9cXHMqKC0/WzAtOV0rKFxcLlswLTldKyk/KS9nKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEV4cHJUeXBlLk5VTUJFUixcbiAgICAgICAgdmFsdWU6IG1hdGNoWzFdIC0gMFxuICAgIH07XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWROdW1iZXI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5ZpZGVudFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDor7vlj5ZpZGVudFxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcmVhZElkZW50KHdhbGtlcikge1xuICAgIHZhciBtYXRjaCA9IHdhbGtlci5tYXRjaCgvXFxzKihbXFwkMC05YS16X10rKS9pZyk7XG4gICAgcmV0dXJuIG1hdGNoWzFdO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkSWRlbnQ7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bkuInlhYPooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZExvZ2ljYWxPUkV4cHIgPSByZXF1aXJlKCcuL3JlYWQtbG9naWNhbC1vci1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W5LiJ5YWD6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpIHtcbiAgICB2YXIgY29uZGl0aW9uYWwgPSByZWFkTG9naWNhbE9SRXhwcih3YWxrZXIpO1xuICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICBpZiAod2Fsa2VyLmN1cnJlbnRDb2RlKCkgPT09IDYzKSB7IC8vID9cbiAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICB2YXIgeWVzRXhwciA9IHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKTtcbiAgICAgICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgICAgICBpZiAod2Fsa2VyLmN1cnJlbnRDb2RlKCkgPT09IDU4KSB7IC8vIDpcbiAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuVEVSVElBUlksXG4gICAgICAgICAgICAgICAgc2VnczogW1xuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgeWVzRXhwcixcbiAgICAgICAgICAgICAgICAgICAgcmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25kaXRpb25hbDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZFRlcnRpYXJ5RXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluiuv+mXruihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciBjcmVhdGVBY2Nlc3NvciA9IHJlcXVpcmUoJy4vY3JlYXRlLWFjY2Vzc29yJyk7XG4vLyB2YXIgcmVhZElkZW50ID0gcmVxdWlyZSgnLi9yZWFkLWlkZW50Jyk7XG4vLyB2YXIgcmVhZFRlcnRpYXJ5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC10ZXJ0aWFyeS1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W6K6/6Zeu6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZEFjY2Vzc29yKHdhbGtlcikge1xuICAgIHZhciBmaXJzdFNlZyA9IHJlYWRJZGVudCh3YWxrZXIpO1xuICAgIHN3aXRjaCAoZmlyc3RTZWcpIHtcbiAgICAgICAgY2FzZSAndHJ1ZSc6XG4gICAgICAgIGNhc2UgJ2ZhbHNlJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuQk9PTCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmlyc3RTZWcgPT09ICd0cnVlJ1xuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gY3JlYXRlQWNjZXNzb3IoW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICB2YWx1ZTogZmlyc3RTZWdcbiAgICAgICAgfVxuICAgIF0pO1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc3RhbnQtY29uZGl0aW9uICovXG4gICAgYWNjZXNzb3JMb29wOiB3aGlsZSAoMSkge1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc3RhbnQtY29uZGl0aW9uICovXG5cbiAgICAgICAgc3dpdGNoICh3YWxrZXIuY3VycmVudENvZGUoKSkge1xuICAgICAgICAgICAgY2FzZSA0NjogLy8gLlxuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcblxuICAgICAgICAgICAgICAgIC8vIGlkZW50IGFzIHN0cmluZ1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wYXRocy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVhZElkZW50KHdhbGtlcilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MTogLy8gW1xuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucGF0aHMucHVzaChyZWFkVGVydGlhcnlFeHByKHdhbGtlcikpO1xuICAgICAgICAgICAgICAgIHdhbGtlci5nb1VudGlsKDkzKTsgLy8gXVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrIGFjY2Vzc29yTG9vcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRBY2Nlc3NvcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluaLrOWPt+ihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIHJlYWRUZXJ0aWFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdGVydGlhcnktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluaLrOWPt+ihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRQYXJlbnRoZXNpemVkRXhwcih3YWxrZXIpIHtcbiAgICB3YWxrZXIuZ28oMSk7XG4gICAgdmFyIGV4cHIgPSByZWFkVGVydGlhcnlFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoNDEpOyAvLyApXG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZFBhcmVudGhlc2l6ZWRFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W5LiA5YWD6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRTdHJpbmcgPSByZXF1aXJlKCcuL3JlYWQtc3RyaW5nJyk7XG4vLyB2YXIgcmVhZE51bWJlciA9IHJlcXVpcmUoJy4vcmVhZC1udW1iZXInKTtcbi8vIHZhciByZWFkQWNjZXNzb3IgPSByZXF1aXJlKCcuL3JlYWQtYWNjZXNzb3InKTtcbi8vIHZhciByZWFkUGFyZW50aGVzaXplZEV4cHIgPSByZXF1aXJlKCcuL3JlYWQtcGFyZW50aGVzaXplZC1leHByJyk7XG5cblxuLyoqXG4gKiDor7vlj5bkuIDlhYPooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkVW5hcnlFeHByKHdhbGtlcikge1xuICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICBzd2l0Y2ggKHdhbGtlci5jdXJyZW50Q29kZSgpKSB7XG4gICAgICAgIGNhc2UgMzM6IC8vICFcbiAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuVU5BUlksXG4gICAgICAgICAgICAgICAgZXhwcjogcmVhZFVuYXJ5RXhwcih3YWxrZXIpXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDM0OiAvLyBcIlxuICAgICAgICBjYXNlIDM5OiAvLyAnXG4gICAgICAgICAgICByZXR1cm4gcmVhZFN0cmluZyh3YWxrZXIpO1xuICAgICAgICBjYXNlIDQ1OiAvLyBudW1iZXJcbiAgICAgICAgY2FzZSA0ODpcbiAgICAgICAgY2FzZSA0OTpcbiAgICAgICAgY2FzZSA1MDpcbiAgICAgICAgY2FzZSA1MTpcbiAgICAgICAgY2FzZSA1MjpcbiAgICAgICAgY2FzZSA1MzpcbiAgICAgICAgY2FzZSA1NDpcbiAgICAgICAgY2FzZSA1NTpcbiAgICAgICAgY2FzZSA1NjpcbiAgICAgICAgY2FzZSA1NzpcbiAgICAgICAgICAgIHJldHVybiByZWFkTnVtYmVyKHdhbGtlcik7XG4gICAgICAgIGNhc2UgNDA6IC8vIChcbiAgICAgICAgICAgIHJldHVybiByZWFkUGFyZW50aGVzaXplZEV4cHIod2Fsa2VyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVhZEFjY2Vzc29yKHdhbGtlcik7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRVbmFyeUV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bkuZjms5Xooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZFVuYXJ5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC11bmFyeS1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W5LmY5rOV6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZE11bHRpcGxpY2F0aXZlRXhwcih3YWxrZXIpIHtcbiAgICB2YXIgZXhwciA9IHJlYWRVbmFyeUV4cHIod2Fsa2VyKTtcblxuICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICAgICAgdmFyIGNvZGUgPSB3YWxrZXIuY3VycmVudENvZGUoKTtcbiAgICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM3OiAvLyAlXG4gICAgICAgICAgICBjYXNlIDQyOiAvLyAqXG4gICAgICAgICAgICBjYXNlIDQ3OiAvLyAvXG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgICAgIGV4cHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLkJJTkFSWSxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IGNvZGUsXG4gICAgICAgICAgICAgICAgICAgIHNlZ3M6IFtleHByLCByZWFkVW5hcnlFeHByKHdhbGtlcildXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRNdWx0aXBsaWNhdGl2ZUV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bliqDms5Xooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZE11bHRpcGxpY2F0aXZlRXhwciA9IHJlcXVpcmUoJy4vcmVhZC1tdWx0aXBsaWNhdGl2ZS1leHByJyk7XG5cblxuLyoqXG4gKiDor7vlj5bliqDms5Xooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkQWRkaXRpdmVFeHByKHdhbGtlcikge1xuICAgIHZhciBleHByID0gcmVhZE11bHRpcGxpY2F0aXZlRXhwcih3YWxrZXIpO1xuXG4gICAgd2hpbGUgKDEpIHtcbiAgICAgICAgd2Fsa2VyLmdvVW50aWwoKTtcbiAgICAgICAgdmFyIGNvZGUgPSB3YWxrZXIuY3VycmVudENvZGUoKTtcblxuICAgICAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgNDM6IC8vICtcbiAgICAgICAgICAgIGNhc2UgNDU6IC8vIC1cbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgZXhwciA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuQklOQVJZLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogY29kZSxcbiAgICAgICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRNdWx0aXBsaWNhdGl2ZUV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRBZGRpdGl2ZUV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5blhbPns7vliKTmlq3ooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZEFkZGl0aXZlRXhwciA9IHJlcXVpcmUoJy4vcmVhZC1hZGRpdGl2ZS1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W5YWz57O75Yik5pat6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZFJlbGF0aW9uYWxFeHByKHdhbGtlcikge1xuICAgIHZhciBleHByID0gcmVhZEFkZGl0aXZlRXhwcih3YWxrZXIpO1xuICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICB2YXIgY29kZSA9IHdhbGtlci5jdXJyZW50Q29kZSgpO1xuICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICBjYXNlIDYwOiAvLyA8XG4gICAgICAgIGNhc2UgNjI6IC8vID5cbiAgICAgICAgICAgIGlmICh3YWxrZXIubmV4dENvZGUoKSA9PT0gNjEpIHtcbiAgICAgICAgICAgICAgICBjb2RlICs9IDYxO1xuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5CSU5BUlksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IGNvZGUsXG4gICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRBZGRpdGl2ZUV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRSZWxhdGlvbmFsRXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluebuOetieavlOWvueihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkUmVsYXRpb25hbEV4cHIgPSByZXF1aXJlKCcuL3JlYWQtcmVsYXRpb25hbC1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W55u4562J5q+U5a+56KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZEVxdWFsaXR5RXhwcih3YWxrZXIpIHtcbiAgICB2YXIgZXhwciA9IHJlYWRSZWxhdGlvbmFsRXhwcih3YWxrZXIpO1xuICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICB2YXIgY29kZSA9IHdhbGtlci5jdXJyZW50Q29kZSgpO1xuICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICBjYXNlIDYxOiAvLyA9XG4gICAgICAgIGNhc2UgMzM6IC8vICFcbiAgICAgICAgICAgIGlmICh3YWxrZXIubmV4dENvZGUoKSA9PT0gNjEpIHtcbiAgICAgICAgICAgICAgICBjb2RlICs9IDYxO1xuICAgICAgICAgICAgICAgIGlmICh3YWxrZXIubmV4dENvZGUoKSA9PT0gNjEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSArPSA2MTtcbiAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLkJJTkFSWSxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IGNvZGUsXG4gICAgICAgICAgICAgICAgICAgIHNlZ3M6IFtleHByLCByZWFkUmVsYXRpb25hbEV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3YWxrZXIuZ28oLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkRXF1YWxpdHlFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W6YC76L6R5LiO6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRFcXVhbGl0eUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtZXF1YWxpdHktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPlumAu+i+keS4juihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRMb2dpY2FsQU5ERXhwcih3YWxrZXIpIHtcbiAgICB2YXIgZXhwciA9IHJlYWRFcXVhbGl0eUV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSAzOCkgeyAvLyAmXG4gICAgICAgIGlmICh3YWxrZXIubmV4dENvZGUoKSA9PT0gMzgpIHtcbiAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuQklOQVJZLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiA3NixcbiAgICAgICAgICAgICAgICBzZWdzOiBbZXhwciwgcmVhZExvZ2ljYWxBTkRFeHByKHdhbGtlcildXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgd2Fsa2VyLmdvKC0xKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZExvZ2ljYWxBTkRFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W6YC76L6R5oiW6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRMb2dpY2FsQU5ERXhwciA9IHJlcXVpcmUoJy4vcmVhZC1sb2dpY2FsLWFuZC1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W6YC76L6R5oiW6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZExvZ2ljYWxPUkV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkTG9naWNhbEFOREV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSAxMjQpIHsgLy8gfFxuICAgICAgICBpZiAod2Fsa2VyLm5leHRDb2RlKCkgPT09IDEyNCkge1xuICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5CSU5BUlksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IDI0OCxcbiAgICAgICAgICAgICAgICBzZWdzOiBbZXhwciwgcmVhZExvZ2ljYWxPUkV4cHIod2Fsa2VyKV1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB3YWxrZXIuZ28oLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkTG9naWNhbE9SRXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOino+aekOihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIFdhbGtlciA9IHJlcXVpcmUoJy4vd2Fsa2VyJyk7XG4vLyB2YXIgcmVhZFRlcnRpYXJ5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC10ZXJ0aWFyeS1leHByJyk7XG5cbi8qKlxuICog6Kej5p6Q6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDnoIFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VFeHByKHNvdXJjZSkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0JyAmJiBzb3VyY2UudHlwZSkge1xuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cblxuICAgIHZhciBleHByID0gcmVhZFRlcnRpYXJ5RXhwcihuZXcgV2Fsa2VyKHNvdXJjZSkpO1xuICAgIGV4cHIucmF3ID0gc291cmNlO1xuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwYXJzZUV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bosIPnlKhcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZEFjY2Vzc29yID0gcmVxdWlyZSgnLi9yZWFkLWFjY2Vzc29yJyk7XG4vLyB2YXIgcmVhZFRlcnRpYXJ5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC10ZXJ0aWFyeS1leHByJyk7XG5cbi8qKlxuICog6K+75Y+W6LCD55SoXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEBwYXJhbSB7QXJyYXk9fSBkZWZhdWx0QXJncyDpu5jorqTlj4LmlbBcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZENhbGwod2Fsa2VyLCBkZWZhdWx0QXJncykge1xuICAgIHdhbGtlci5nb1VudGlsKCk7XG4gICAgdmFyIGlkZW50ID0gcmVhZEFjY2Vzc29yKHdhbGtlcik7XG4gICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgIGlmICh3YWxrZXIuZ29VbnRpbCg0MCkpIHsgLy8gKFxuICAgICAgICB3aGlsZSAoIXdhbGtlci5nb1VudGlsKDQxKSkgeyAvLyApXG4gICAgICAgICAgICBhcmdzLnB1c2gocmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpKTtcbiAgICAgICAgICAgIHdhbGtlci5nb1VudGlsKDQ0KTsgLy8gLFxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRlZmF1bHRBcmdzKSB7XG4gICAgICAgIGFyZ3MgPSBkZWZhdWx0QXJncztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5DQUxMLFxuICAgICAgICBuYW1lOiBpZGVudCxcbiAgICAgICAgYXJnczogYXJnc1xuICAgIH07XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRDYWxsO1xuXG5cbi8qKlxuICogQGZpbGUg6Kej5p6Q6LCD55SoXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIHJlYWRDYWxsID0gcmVxdWlyZSgnLi9yZWFkLWNhbGwnKTtcblxuLyoqXG4gKiDop6PmnpDosIPnlKhcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOeggVxuICogQHBhcmFtIHtBcnJheT19IGRlZmF1bHRBcmdzIOm7mOiupOWPguaVsFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZUNhbGwoc291cmNlLCBkZWZhdWx0QXJncykge1xuICAgIHZhciBleHByID0gcmVhZENhbGwobmV3IFdhbGtlcihzb3VyY2UpLCBkZWZhdWx0QXJncyk7XG4gICAgZXhwci5yYXcgPSBzb3VyY2U7XG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBhcnNlQ2FsbDtcblxuXG4vKipcbiAqIEBmaWxlIOino+aekOaPkuWAvOabv+aNolxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIFdhbGtlciA9IHJlcXVpcmUoJy4vd2Fsa2VyJyk7XG4vLyB2YXIgcmVhZFRlcnRpYXJ5RXhwciA9IHJlcXVpcmUoJy4vcmVhZC10ZXJ0aWFyeS1leHByJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRDYWxsID0gcmVxdWlyZSgnLi9yZWFkLWNhbGwnKTtcblxuLyoqXG4gKiDop6PmnpDmj5LlgLzmm7/mjaJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOeggVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwYXJzZUludGVycChzb3VyY2UpIHtcbiAgICB2YXIgd2Fsa2VyID0gbmV3IFdhbGtlcihzb3VyY2UpO1xuXG4gICAgdmFyIGludGVycCA9IHtcbiAgICAgICAgdHlwZTogRXhwclR5cGUuSU5URVJQLFxuICAgICAgICBleHByOiByZWFkVGVydGlhcnlFeHByKHdhbGtlciksXG4gICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICByYXc6IHNvdXJjZVxuICAgIH07XG5cbiAgICB3aGlsZSAod2Fsa2VyLmdvVW50aWwoMTI0KSkgeyAvLyB8XG4gICAgICAgIHZhciBjYWxsRXhwciA9IHJlYWRDYWxsKHdhbGtlcik7XG4gICAgICAgIHN3aXRjaCAoY2FsbEV4cHIubmFtZS5wYXRoc1swXS52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyYXcnOlxuICAgICAgICAgICAgICAgIGludGVycC5vcmlnaW5hbCA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGludGVycC5maWx0ZXJzLnB1c2goY2FsbEV4cHIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcGFyc2VJbnRlcnA7XG5cblxuLyoqXG4gKiBAZmlsZSDop6PnoIEgSFRNTCDlrZfnrKblrp7kvZNcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbnZhciBFTlRJVFlfREVDT0RFX01BUCA9IHtcbiAgICBsdDogJzwnLFxuICAgIGd0OiAnPicsXG4gICAgbmJzcDogJyAnLFxuICAgIHF1b3Q6ICdcXFwiJyxcbiAgICBlbXNwOiAnXFx1MjAwMycsXG4gICAgZW5zcDogJ1xcdTIwMDInLFxuICAgIHRoaW5zcDogJ1xcdTIwMDknLFxuICAgIGNvcHk6ICdcXHhhOScsXG4gICAgcmVnOiAnXFx4YWUnLFxuICAgIHp3bmo6ICdcXHUyMDBjJyxcbiAgICB6d2o6ICdcXHUyMDBkJyxcbiAgICBhbXA6ICcmJ1xufTtcblxuLyoqXG4gKiDop6PnoIEgSFRNTCDlrZfnrKblrp7kvZNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOimgeino+eggeeahOWtl+espuS4slxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBkZWNvZGVIVE1MRW50aXR5KHNvdXJjZSkge1xuICAgIHJldHVybiBzb3VyY2VcbiAgICAgICAgLnJlcGxhY2UoLyYjKFswLTldKyk7L2csIGZ1bmN0aW9uIChtYXRjaCwgY29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoK2NvZGUpO1xuICAgICAgICB9KVxuICAgICAgICAucmVwbGFjZSgvJiN4KFswLTlhLWZdKyk7L2lnLCBmdW5jdGlvbiAobWF0Y2gsIGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGNvZGUsIDE2KSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5yZXBsYWNlKC8mKFthLXpdKyk7L2lnLCBmdW5jdGlvbiAobWF0Y2gsIGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBFTlRJVFlfREVDT0RFX01BUFtjb2RlXSB8fCBtYXRjaDtcbiAgICAgICAgfSk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGRlY29kZUhUTUxFbnRpdHk7XG5cblxuLyoqXG4gKiBAZmlsZSDop6PmnpDmlofmnKxcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciBwYXJzZUludGVycCA9IHJlcXVpcmUoJy4vcGFyc2UtaW50ZXJwJyk7XG4vLyB2YXIgZGVjb2RlSFRNTEVudGl0eSA9IHJlcXVpcmUoJy4uL3V0aWwvZGVjb2RlLWh0bWwtZW50aXR5Jyk7XG5cbi8qKlxuICog5a+55a2X56ym5Liy6L+b6KGM5Y+v55So5LqObmV3IFJlZ0V4cOeahOWtl+mdouWMllxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDpnIDopoHlrZfpnaLljJbnmoTlrZfnrKbkuLJcbiAqIEByZXR1cm4ge3N0cmluZ30g5a2X56ym5Liy5a2X6Z2i5YyW57uT5p6cXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cExpdGVyYWwoc291cmNlKSB7XG4gICAgcmV0dXJuIHNvdXJjZS5yZXBsYWNlKC9bXFxeXFxbXFxdXFwkXFwoXFwpXFx7XFx9XFw/XFwqXFwuXFwrXFxcXF0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuICdcXFxcJyArIGM7XG4gICAgfSk7XG59XG5cbi8qKlxuICog6Kej5p6Q5paH5pysXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDnoIFcbiAqIEBwYXJhbSB7QXJyYXk/fSBkZWxpbWl0ZXJzIOWIhumalOespuOAgum7mOiupOS4uiBbJ3t7JywgJ319J11cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VUZXh0KHNvdXJjZSwgZGVsaW1pdGVycykge1xuICAgIGRlbGltaXRlcnMgPSBkZWxpbWl0ZXJzIHx8IFsne3snLCAnfX0nXTtcbiAgICB2YXIgZXhwclN0YXJ0UmVnID0gbmV3IFJlZ0V4cChcbiAgICAgICAgcmVnZXhwTGl0ZXJhbChkZWxpbWl0ZXJzWzBdKSArICdcXFxccyooW1xcXFxzXFxcXFNdKz8pXFxcXHMqJyArIHJlZ2V4cExpdGVyYWwoZGVsaW1pdGVyc1sxXSksXG4gICAgICAgICdpZydcbiAgICApO1xuXG4gICAgdmFyIGV4cHJNYXRjaDtcblxuICAgIHZhciB3YWxrZXIgPSBuZXcgV2Fsa2VyKHNvdXJjZSk7XG4gICAgdmFyIGJlZm9yZUluZGV4ID0gMDtcblxuICAgIHZhciBleHByID0ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5URVhULFxuICAgICAgICBzZWdzOiBbXVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwdXNoU3RyaW5nVG9TZWcodGV4dCkge1xuICAgICAgICB0ZXh0ICYmIGV4cHIuc2Vncy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgIGxpdGVyYWw6IHRleHQsXG4gICAgICAgICAgICB2YWx1ZTogZGVjb2RlSFRNTEVudGl0eSh0ZXh0KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB3aGlsZSAoKGV4cHJNYXRjaCA9IHdhbGtlci5tYXRjaChleHByU3RhcnRSZWcpKSAhPSBudWxsKSB7XG4gICAgICAgIHB1c2hTdHJpbmdUb1NlZyh3YWxrZXIuY3V0KFxuICAgICAgICAgICAgYmVmb3JlSW5kZXgsXG4gICAgICAgICAgICB3YWxrZXIuaW5kZXggLSBleHByTWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgICkpO1xuXG4gICAgICAgIHZhciBpbnRlcnAgPSBwYXJzZUludGVycChleHByTWF0Y2hbMV0pO1xuICAgICAgICBleHByLm9yaWdpbmFsID0gZXhwci5vcmlnaW5hbCB8fCBpbnRlcnAub3JpZ2luYWw7XG5cbiAgICAgICAgZXhwci5zZWdzLnB1c2goaW50ZXJwKTtcbiAgICAgICAgYmVmb3JlSW5kZXggPSB3YWxrZXIuaW5kZXg7XG4gICAgfVxuXG4gICAgcHVzaFN0cmluZ1RvU2VnKHdhbGtlci5jdXQoYmVmb3JlSW5kZXgpKTtcblxuXG5cbiAgICBpZiAoZXhwci5zZWdzLmxlbmd0aCA9PT0gMSAmJiBleHByLnNlZ3NbMF0udHlwZSA9PT0gRXhwclR5cGUuU1RSSU5HKSB7XG4gICAgICAgIGV4cHIudmFsdWUgPSBleHByLnNlZ3NbMF0udmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBhcnNlVGV4dDtcblxuXG4vKipcbiAqIEBmaWxlIOino+aekOaMh+S7pFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgV2Fsa2VyID0gcmVxdWlyZSgnLi93YWxrZXInKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuL3BhcnNlLWV4cHInKTtcbi8vIHZhciBwYXJzZUNhbGwgPSByZXF1aXJlKCcuL3BhcnNlLWNhbGwnKTtcbi8vIHZhciBwYXJzZVRleHQgPSByZXF1aXJlKCcuL3BhcnNlLXRleHQnKTtcbi8vIHZhciByZWFkQWNjZXNzb3IgPSByZXF1aXJlKCcuL3JlYWQtYWNjZXNzb3InKTtcblxuLyoqXG4gKiDmjIfku6Top6PmnpDlmahcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBkaXJlY3RpdmVQYXJzZXJzID0ge1xuICAgICdmb3InOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHdhbGtlciA9IG5ldyBXYWxrZXIodmFsdWUpO1xuICAgICAgICB2YXIgbWF0Y2ggPSB3YWxrZXIubWF0Y2goL15cXHMqKFtcXCQwLTlhLXpfXSspKFxccyosXFxzKihbXFwkMC05YS16X10rKSk/XFxzK2luXFxzKy9pZyk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGl0ZW06IHBhcnNlRXhwcihtYXRjaFsxXSksXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlRXhwcihtYXRjaFszXSB8fCAnJGluZGV4JyksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlYWRBY2Nlc3Nvcih3YWxrZXIpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEZBVEFMXSBmb3Igc3ludGF4IGVycm9yOiAnICsgdmFsdWUpO1xuICAgICAgICAvLyAjW2VuZF1cbiAgICB9LFxuXG4gICAgJ3JlZic6IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlVGV4dCh2YWx1ZSwgb3B0aW9ucy5kZWxpbWl0ZXJzKVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnaWYnOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUV4cHIodmFsdWUucmVwbGFjZSgvKF5cXHtcXHt8XFx9XFx9JCkvZywgJycpKVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnZWxpZic6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRXhwcih2YWx1ZS5yZXBsYWNlKC8oXlxce1xce3xcXH1cXH0kKS9nLCAnJykpXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICdlbHNlJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZToge31cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ2h0bWwnOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUV4cHIodmFsdWUucmVwbGFjZSgvKF5cXHtcXHt8XFx9XFx9JCkvZywgJycpKVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAndHJhbnNpdGlvbic6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlQ2FsbCh2YWx1ZSlcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOino+aekOaMh+S7pFxuICpcbiAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5oyH5Luk5ZCN56ewXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUg5oyH5Luk5YC8XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyDop6PmnpDlj4LmlbBcbiAqIEBwYXJhbSB7QXJyYXk/fSBvcHRpb25zLmRlbGltaXRlcnMg5o+S5YC85YiG6ZqU56ym5YiX6KGoXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlKGFOb2RlLCBuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGlmIChuYW1lID09PSAnZWxzZS1pZicpIHtcbiAgICAgICAgbmFtZSA9ICdlbGlmJztcbiAgICB9XG5cbiAgICB2YXIgcGFyc2VyID0gZGlyZWN0aXZlUGFyc2Vyc1tuYW1lXTtcbiAgICBpZiAocGFyc2VyKSB7XG4gICAgICAgIChhTm9kZS5kaXJlY3RpdmVzW25hbWVdID0gcGFyc2VyKHZhbHVlLCBvcHRpb25zKSkucmF3ID0gdmFsdWU7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwYXJzZURpcmVjdGl2ZTtcblxuXG4vKipcbiAqIEBmaWxlIOWvueWxnuaAp+S/oeaBr+i/m+ihjOWkhOeQhlxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuXG4vKipcbiAqIOWvueWxnuaAp+S/oeaBr+i/m+ihjOWkhOeQhlxuICog5a+557uE5Lu255qEIGJpbmRzIOaIluiAheeJueauiueahOWxnuaAp++8iOavlOWmgiBpbnB1dCDnmoQgY2hlY2tlZO+8iemcgOimgeWkhOeQhlxuICpcbiAqIOaJgeW5s+WMlu+8mlxuICog5b2TIHRleHQg6Kej5p6Q5Y+q5pyJ5LiA6aG55pe277yM6KaB5LmI5bCx5pivIHN0cmluZ++8jOimgeS5iOWwseaYryBpbnRlcnBcbiAqIGludGVycCDmnInlj6/og73mmK/nu5HlrprliLDnu4Tku7blsZ7mgKfnmoTooajovr7lvI/vvIzkuI3luIzmnJvooqsgZXZhbCB0ZXh0IOaIkCBzdHJpbmdcbiAqIOaJgOS7pei/memHjOWBmuS4quWkhOeQhu+8jOWPquacieS4gOmhueaXtuebtOaOpeaKveWHuuadpVxuICpcbiAqIGJvb2zlsZ7mgKfvvJpcbiAqIOW9k+e7keWumumhueayoeacieWAvOaXtu+8jOm7mOiupOS4unRydWVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcCDlsZ7mgKflr7nosaFcbiAqL1xuZnVuY3Rpb24gcG9zdFByb3AocHJvcCkge1xuICAgIHZhciBleHByID0gcHJvcC5leHByO1xuXG4gICAgaWYgKGV4cHIudHlwZSA9PT0gRXhwclR5cGUuVEVYVCkge1xuICAgICAgICBzd2l0Y2ggKGV4cHIuc2Vncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBwcm9wLmV4cHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLkJPT0wsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGV4cHIgPSBwcm9wLmV4cHIgPSBleHByLnNlZ3NbMF07XG4gICAgICAgICAgICAgICAgaWYgKGV4cHIudHlwZSA9PT0gRXhwclR5cGUuSU5URVJQICYmIGV4cHIuZmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcC5leHByID0gZXhwci5leHByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcG9zdFByb3A7XG5cblxuLyoqXG4gKiBAZmlsZSDop6PmnpDmir3osaHoioLngrnlsZ7mgKdcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIga2ViYWIyY2FtZWwgPSByZXF1aXJlKCcuLi91dGlsL2tlYmFiMmNhbWVsJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi9jcmVhdGUtYWNjZXNzb3InKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuL3BhcnNlLWV4cHInKTtcbi8vIHZhciBwYXJzZUNhbGwgPSByZXF1aXJlKCcuL3BhcnNlLWNhbGwnKTtcbi8vIHZhciBwYXJzZVRleHQgPSByZXF1aXJlKCcuL3BhcnNlLXRleHQnKTtcbi8vIHZhciBwYXJzZURpcmVjdGl2ZSA9IHJlcXVpcmUoJy4vcGFyc2UtZGlyZWN0aXZlJyk7XG4vLyB2YXIgcG9zdFByb3AgPSByZXF1aXJlKCcuL3Bvc3QtcHJvcCcpO1xuXG5cbi8qKlxuICog6Kej5p6Q5oq96LGh6IqC54K55bGe5oCnXG4gKlxuICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDlsZ7mgKflkI3np7BcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSDlsZ7mgKflgLxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOino+aekOWPguaVsFxuICogQHBhcmFtIHtBcnJheT99IG9wdGlvbnMuZGVsaW1pdGVycyDmj5LlgLzliIbpmpTnrKbliJfooahcbiAqL1xuZnVuY3Rpb24gaW50ZWdyYXRlQXR0cihhTm9kZSwgbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcHJlZml4SW5kZXggPSBuYW1lLmluZGV4T2YoJy0nKTtcbiAgICB2YXIgcmVhbE5hbWU7XG4gICAgdmFyIHByZWZpeDtcblxuICAgIGlmIChwcmVmaXhJbmRleCA+IDApIHtcbiAgICAgICAgcHJlZml4ID0gbmFtZS5zbGljZSgwLCBwcmVmaXhJbmRleCk7XG4gICAgICAgIHJlYWxOYW1lID0gbmFtZS5zbGljZShwcmVmaXhJbmRleCArIDEpO1xuICAgIH1cblxuICAgIHN3aXRjaCAocHJlZml4KSB7XG4gICAgICAgIGNhc2UgJ29uJzpcbiAgICAgICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiByZWFsTmFtZSxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhTm9kZS5ldmVudHMucHVzaChldmVudCk7XG5cbiAgICAgICAgICAgIHZhciBjb2xvbkluZGV4O1xuICAgICAgICAgICAgd2hpbGUgKChjb2xvbkluZGV4ID0gdmFsdWUuaW5kZXhPZignOicpKSA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZXIgPSB2YWx1ZS5zbGljZSgwLCBjb2xvbkluZGV4KTtcblxuICAgICAgICAgICAgICAgIC8vIGV2ZW50SGFuZGxlcihcImRkOmFhXCIpIOi/meenjeaDheWGteS4jeiDveeul21vZGlmaWVy77yM6ZyA6KaB6L6o6K+GXG4gICAgICAgICAgICAgICAgaWYgKCEvXlthLXpdKyQvaS50ZXN0KG1vZGlmaWVyKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5tb2RpZmllclttb2RpZmllcl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoY29sb25JbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5leHByID0gcGFyc2VDYWxsKHZhbHVlLCBbXG4gICAgICAgICAgICAgICAgY3JlYXRlQWNjZXNzb3IoW1xuICAgICAgICAgICAgICAgICAgICB7IHR5cGU6IEV4cHJUeXBlLlNUUklORywgdmFsdWU6ICckZXZlbnQnIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzYW4nOlxuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIHBhcnNlRGlyZWN0aXZlKGFOb2RlLCByZWFsTmFtZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncHJvcCc6XG4gICAgICAgICAgICBpbnRlZ3JhdGVQcm9wKGFOb2RlLCByZWFsTmFtZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAndmFyJzpcbiAgICAgICAgICAgIGlmICghYU5vZGUudmFycykge1xuICAgICAgICAgICAgICAgIGFOb2RlLnZhcnMgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVhbE5hbWUgPSBrZWJhYjJjYW1lbChyZWFsTmFtZSk7XG4gICAgICAgICAgICBhTm9kZS52YXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IHJlYWxOYW1lLFxuICAgICAgICAgICAgICAgIGV4cHI6IHBhcnNlRXhwcih2YWx1ZS5yZXBsYWNlKC8oXlxce1xce3xcXH1cXH0kKS9nLCAnJykpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpbnRlZ3JhdGVQcm9wKGFOb2RlLCBuYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgfVxufVxuXG4vKipcbiAqIOino+aekOaKveixoeiKgueCuee7keWumuWxnuaAp1xuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDlsZ7mgKflkI3np7BcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSDlsZ7mgKflgLxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOino+aekOWPguaVsFxuICogQHBhcmFtIHtBcnJheT99IG9wdGlvbnMuZGVsaW1pdGVycyDmj5LlgLzliIbpmpTnrKbliJfooahcbiAqL1xuZnVuY3Rpb24gaW50ZWdyYXRlUHJvcChhTm9kZSwgbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAvLyBwYXJzZSB0d28gd2F5IGJpbmRpbmcsIGUuZy4gdmFsdWU9XCJ7PWlkZW50PX1cIlxuICAgIHZhciB4TWF0Y2ggPSB2YWx1ZS5tYXRjaCgvXlxcez1cXHMqKC4qPylcXHMqPVxcfSQvKTtcblxuICAgIGlmICh4TWF0Y2gpIHtcbiAgICAgICAgYU5vZGUucHJvcHMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgZXhwcjogcGFyc2VFeHByKHhNYXRjaFsxXSksXG4gICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgcmF3OiB2YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gcGFyc2Ugbm9ybWFsIHByb3BcbiAgICB2YXIgcHJvcCA9IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgZXhwcjogcGFyc2VUZXh0KHZhbHVlLCBvcHRpb25zLmRlbGltaXRlcnMpLFxuICAgICAgICByYXc6IHZhbHVlXG4gICAgfTtcblxuICAgIC8vIOi/memHjOS4jeiDveaKiuWPquacieS4gOS4quaPkuWAvOeahOWxnuaAp+aKveWPllxuICAgIC8vIOWboOS4uuaPkuWAvOmHjOeahOWAvOWPr+iDveaYr2h0bWzniYfmrrXvvIzlrrnmmJPooqvms6jlhaVcbiAgICAvLyDnu4Tku7bnmoTmlbDmja7nu5HlrprlnKjnu4Tku7Zpbml05pe25YGa5oq95Y+WXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgZWFjaChwcm9wLmV4cHIuc2VncywgZnVuY3Rpb24gKHNlZykge1xuICAgICAgICAgICAgICAgIGlmIChzZWcudHlwZSA9PT0gRXhwclR5cGUuSU5URVJQKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZy5maWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuQ0FMTCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNyZWF0ZUFjY2Vzc29yKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdfJyArIHByb3AubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogW11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdjaGVja2VkJzpcbiAgICAgICAgICAgIGlmIChhTm9kZS50YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgcG9zdFByb3AocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBhTm9kZS5wcm9wcy5wdXNoKHByb3ApO1xufVxuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGludGVncmF0ZUF0dHI7XG5cblxuLyoqXG4gKiBAZmlsZSDop6PmnpDmqKHmnb9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGNyZWF0ZUFOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtYS1ub2RlJyk7XG4vLyB2YXIgV2Fsa2VyID0gcmVxdWlyZSgnLi93YWxrZXInKTtcbi8vIHZhciBpbnRlZ3JhdGVBdHRyID0gcmVxdWlyZSgnLi9pbnRlZ3JhdGUtYXR0cicpO1xuLy8gdmFyIHBhcnNlVGV4dCA9IHJlcXVpcmUoJy4vcGFyc2UtdGV4dCcpO1xuLy8gdmFyIGF1dG9DbG9zZVRhZ3MgPSByZXF1aXJlKCcuLi9icm93c2VyL2F1dG8tY2xvc2UtdGFncycpO1xuXG4vLyAjW2JlZ2luXSBlcnJvclxuZnVuY3Rpb24gZ2V0WFBhdGgoc3RhY2ssIGN1cnJlbnRUYWdOYW1lKSB7XG4gICAgdmFyIHBhdGggPSBbJ1JPT1QnXTtcbiAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gc3RhY2subGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgcGF0aC5wdXNoKHN0YWNrW2ldLnRhZ05hbWUpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFRhZ05hbWUpIHtcbiAgICAgICAgcGF0aC5wdXNoKGN1cnJlbnRUYWdOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGguam9pbignPicpO1xufVxuLy8gI1tlbmRdXG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtbWF4LXN0YXRlbWVudHMgKi9cblxuLyoqXG4gKiDop6PmnpAgdGVtcGxhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIHRlbXBsYXRl5rqQ56CBXG4gKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMg6Kej5p6Q5Y+C5pWwXG4gKiBAcGFyYW0ge3N0cmluZz99IG9wdGlvbnMudHJpbVdoaXRlc3BhY2Ug56m655m95paH5pys55qE5aSE55CG562W55Wl44CCbm9uZXxibGFua3xhbGxcbiAqIEBwYXJhbSB7QXJyYXk/fSBvcHRpb25zLmRlbGltaXRlcnMg5o+S5YC85YiG6ZqU56ym5YiX6KGoXG4gKiBAcmV0dXJuIHtBTm9kZX1cbiAqL1xuZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZShzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnRyaW1XaGl0ZXNwYWNlID0gb3B0aW9ucy50cmltV2hpdGVzcGFjZSB8fCAnbm9uZSc7XG5cbiAgICB2YXIgcm9vdE5vZGUgPSBjcmVhdGVBTm9kZSgpO1xuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZTtcbiAgICB9XG5cbiAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvPCEtLShbXFxzXFxTXSo/KS0tPi9tZywgJycpLnJlcGxhY2UoLyheXFxzK3xcXHMrJCkvZywgJycpO1xuICAgIHZhciB3YWxrZXIgPSBuZXcgV2Fsa2VyKHNvdXJjZSk7XG5cbiAgICB2YXIgdGFnUmVnID0gLzwoXFwvKT8oW2EtejAtOS1dKylcXHMqL2lnO1xuICAgIHZhciBhdHRyUmVnID0gLyhbLTowLTlhLXpcXChcXClcXFtcXF1dKykoXFxzKj1cXHMqKFsnXCJdKShbXlxcM10qPylcXDMpP1xccyovaWc7XG5cbiAgICB2YXIgdGFnTWF0Y2g7XG4gICAgdmFyIGN1cnJlbnROb2RlID0gcm9vdE5vZGU7XG4gICAgdmFyIHN0YWNrID0gW3Jvb3ROb2RlXTtcbiAgICB2YXIgc3RhY2tJbmRleCA9IDA7XG4gICAgdmFyIGJlZm9yZUxhc3RJbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoKHRhZ01hdGNoID0gd2Fsa2VyLm1hdGNoKHRhZ1JlZykpICE9IG51bGwpIHtcbiAgICAgICAgdmFyIHRhZ0VuZCA9IHRhZ01hdGNoWzFdO1xuICAgICAgICB2YXIgdGFnTmFtZSA9IHRhZ01hdGNoWzJdLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgcHVzaFRleHROb2RlKHNvdXJjZS5zbGljZShcbiAgICAgICAgICAgIGJlZm9yZUxhc3RJbmRleCxcbiAgICAgICAgICAgIHdhbGtlci5pbmRleCAtIHRhZ01hdGNoWzBdLmxlbmd0aFxuICAgICAgICApKTtcblxuICAgICAgICAvLyA2MjogPlxuICAgICAgICAvLyA0NzogL1xuICAgICAgICAvLyDlpITnkIYgPC94eHh4ID5cbiAgICAgICAgaWYgKHRhZ0VuZCAmJiB3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gNjIpIHtcbiAgICAgICAgICAgIC8vIOa7oei2s+WFs+mXreagh+etvueahOadoeS7tuaXtu+8jOWFs+mXreagh+etvlxuICAgICAgICAgICAgLy8g5ZCR5LiK5p+l5om+5Yiw5a+55bqU5qCH562+77yM5om+5LiN5Yiw5pe25b+955Wl5YWz6ZetXG4gICAgICAgICAgICB2YXIgY2xvc2VJbmRleCA9IHN0YWNrSW5kZXg7XG5cbiAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAvLyDlpoLmnpzmraPlnKjpl63lkIjkuIDkuKroh6rpl63lkIjnmoTmoIfnrb7vvIzkvovlpoIgPC9pbnB1dD7vvIzmiqXplJlcbiAgICAgICAgICAgIGlmIChhdXRvQ2xvc2VUYWdzW3RhZ05hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCcnXG4gICAgICAgICAgICAgICAgICAgICsgJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaywgdGFnTmFtZSkgKyAnIGlzIGEgYGF1dG8gY2xvc2VkYCB0YWcsICdcbiAgICAgICAgICAgICAgICAgICAgKyAnc28gaXQgY2Fubm90IGJlIGNsb3NlZCB3aXRoIDwvJyArIHRhZ05hbWUgKyAnPidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlpoLmnpzlhbPpl63nmoQgdGFnIOWSjOW9k+WJjeaJk+W8gOeahOS4jeS4gOiHtO+8jOaKpemUmVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHN0YWNrW2Nsb3NlSW5kZXhdLnRhZ05hbWUgIT09IHRhZ05hbWVcbiAgICAgICAgICAgICAgICAvLyDov5nph4zopoHmioogdGFibGUg6Ieq5Yqo5re75YqgIHRib2R5IOeahOaDheWGtee7meWOu+aOiVxuICAgICAgICAgICAgICAgICYmICEodGFnTmFtZSA9PT0gJ3RhYmxlJyAmJiBzdGFja1tjbG9zZUluZGV4XS50YWdOYW1lID09PSAndGJvZHknKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnICsgZ2V0WFBhdGgoc3RhY2spICsgJyBpcyBjbG9zZWQgd2l0aCAnICsgdGFnTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgd2hpbGUgKGNsb3NlSW5kZXggPiAwICYmIHN0YWNrW2Nsb3NlSW5kZXhdLnRhZ05hbWUgIT09IHRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICBjbG9zZUluZGV4LS07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjbG9zZUluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHN0YWNrSW5kZXggPSBjbG9zZUluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IHN0YWNrW3N0YWNrSW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgLy8g5aSE55CGIDwveHh4IOmdnuato+W4uOmXreWQiOagh+etvlxuICAgICAgICBlbHNlIGlmICh0YWdFbmQpIHtcblxuICAgICAgICAgICAgLy8g5aaC5p6c6Zet5ZCI5qCH562+5pe277yM5Yy56YWN5ZCO55qE5LiL5LiA5Liq5a2X56ym5pivIDzvvIzljbPkuIvkuIDkuKrmoIfnrb7nmoTlvIDlp4vvvIzpgqPkuYjlvZPliY3pl63lkIjmoIfnrb7mnKrpl63lkIhcbiAgICAgICAgICAgIGlmICh3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gNjApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJydcbiAgICAgICAgICAgICAgICAgICAgKyAnW1NBTiBFUlJPUl0gJyArIGdldFhQYXRoKHN0YWNrKVxuICAgICAgICAgICAgICAgICAgICArICdcXCdzIGNsb3NlIHRhZyBub3QgY2xvc2VkJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOmXreWQiOagh+etvuacieWxnuaAp1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCcnXG4gICAgICAgICAgICAgICAgKyAnW1NBTiBFUlJPUl0gJyArIGdldFhQYXRoKHN0YWNrKVxuICAgICAgICAgICAgICAgICsgJ1xcJ3MgY2xvc2UgdGFnIGhhcyBhdHRyaWJ1dGVzJ1xuICAgICAgICAgICAgKTtcblxuICAgICAgICB9XG4gICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgIGVsc2UgaWYgKCF0YWdFbmQpIHtcbiAgICAgICAgICAgIHZhciBhRWxlbWVudCA9IGNyZWF0ZUFOb2RlKHtcbiAgICAgICAgICAgICAgICB0YWdOYW1lOiB0YWdOYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciB0YWdDbG9zZSA9IGF1dG9DbG9zZVRhZ3NbdGFnTmFtZV07XG5cbiAgICAgICAgICAgIC8vIOino+aekCBhdHRyaWJ1dGVzXG5cbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xuICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc3RhbnQtY29uZGl0aW9uICovXG5cbiAgICAgICAgICAgICAgICB2YXIgbmV4dENoYXJDb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyDmoIfnrb7nu5PmnZ/ml7bot7Plh7ogYXR0cmlidXRlcyDor7vlj5ZcbiAgICAgICAgICAgICAgICAvLyDmoIfnrb7lj6/og73nm7TmjqXnu5PmnZ/miJbpl63lkIjnu5PmnZ9cbiAgICAgICAgICAgICAgICBpZiAobmV4dENoYXJDb2RlID09PSA2Mikge1xuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDpgYfliLAgLz4g5oyJ6Zet5ZCI5aSE55CGXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dENoYXJDb2RlID09PSA0N1xuICAgICAgICAgICAgICAgICAgICAmJiB3YWxrZXIuY2hhckNvZGUod2Fsa2VyLmluZGV4ICsgMSkgPT09IDYyXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5nbygyKTtcbiAgICAgICAgICAgICAgICAgICAgdGFnQ2xvc2UgPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgIC8vIOWcqOWkhOeQhuS4gOS4qiBvcGVuIOagh+etvuaXtu+8jOWmguaenOmBh+WIsOS6hiA877yMIOWNs+S4i+S4gOS4quagh+etvueahOW8gOWni++8jOWImeW9k+WJjeagh+etvuacquiDveato+W4uOmXreWQiO+8jOaKpemUmVxuICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hhckNvZGUgPT09IDYwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJyArIGdldFhQYXRoKHN0YWNrLCB0YWdOYW1lKSArICcgaXMgbm90IGNsb3NlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgIC8vIOivu+WPliBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICB2YXIgYXR0ck1hdGNoID0gd2Fsa2VyLm1hdGNoKGF0dHJSZWcpO1xuICAgICAgICAgICAgICAgIGlmIChhdHRyTWF0Y2gpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzlsZ7mgKfmnIkgPe+8jOS9huayoeWPluWIsCB2YWx1Ze+8jOaKpemUmVxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxrZXIuY2hhckNvZGUoYXR0ck1hdGNoLmluZGV4ICsgYXR0ck1hdGNoWzFdLmxlbmd0aCkgPT09IDYxXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAhYXR0ck1hdGNoWzJdXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnW1NBTiBFUlJPUl0gJyArIGdldFhQYXRoKHN0YWNrLCB0YWdOYW1lKSArICcgYXR0cmlidXRlIGAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBhdHRyTWF0Y2hbMV0gKyAnYCBpcyBub3Qgd3JhcHBlZCB3aXRoIFwiXCInXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgICAgIGludGVncmF0ZUF0dHIoXG4gICAgICAgICAgICAgICAgICAgICAgICBhRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJNYXRjaFsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJNYXRjaFsyXSA/IGF0dHJNYXRjaFs0XSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtYXRjaCBpZiBkaXJlY3RpdmUgZm9yIGVsc2UvZWxpZiBkaXJlY3RpdmVcbiAgICAgICAgICAgIHZhciBlbHNlRGlyZWN0aXZlID0gYUVsZW1lbnQuZGlyZWN0aXZlc1snZWxzZSddIHx8IGFFbGVtZW50LmRpcmVjdGl2ZXMuZWxpZjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgICAgIGlmIChlbHNlRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudENoaWxkcmVuTGVuID0gY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudENoaWxkcmVuTGVuLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudENoaWxkID0gY3VycmVudE5vZGUuY2hpbGRyZW5bcGFyZW50Q2hpbGRyZW5MZW5dO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q2hpbGQudGV4dEV4cHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuLnNwbGljZShwYXJlbnRDaGlsZHJlbkxlbiwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50Q2hpbGQuZGlyZWN0aXZlc1snaWYnXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEZBVEVMXSBlbHNlIG5vdCBtYXRjaCBpZi4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDaGlsZC5lbHNlcyA9IHBhcmVudENoaWxkLmVsc2VzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDaGlsZC5lbHNlcy5wdXNoKGFFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYUVsZW1lbnQudGFnTmFtZSA9PT0gJ3RyJyAmJiBjdXJyZW50Tm9kZS50YWdOYW1lID09PSAndGFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0Ym9keU5vZGUgPSBjcmVhdGVBTm9kZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAndGJvZHknXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbi5wdXNoKHRib2R5Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gdGJvZHlOb2RlO1xuICAgICAgICAgICAgICAgICAgICBzdGFja1srK3N0YWNrSW5kZXhdID0gdGJvZHlOb2RlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuLnB1c2goYUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRhZ0Nsb3NlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBhRWxlbWVudDtcbiAgICAgICAgICAgICAgICBzdGFja1srK3N0YWNrSW5kZXhdID0gYUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBiZWZvcmVMYXN0SW5kZXggPSB3YWxrZXIuaW5kZXg7XG4gICAgfVxuXG4gICAgcHVzaFRleHROb2RlKHdhbGtlci5jdXQoYmVmb3JlTGFzdEluZGV4KSk7XG5cbiAgICByZXR1cm4gcm9vdE5vZGU7XG5cbiAgICAvKipcbiAgICAgKiDlnKjor7vlj5bmoIjkuK3mt7vliqDmlofmnKzoioLngrlcbiAgICAgKlxuICAgICAqIEBpbm5lclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IOaWh+acrOWGheWuuVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHB1c2hUZXh0Tm9kZSh0ZXh0KSB7XG4gICAgICAgIHN3aXRjaCAob3B0aW9ucy50cmltV2hpdGVzcGFjZSkge1xuICAgICAgICAgICAgY2FzZSAnYmxhbmsnOlxuICAgICAgICAgICAgICAgIGlmICgvXlxccyskLy50ZXN0KHRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXlxccyt8XFxzKyQpL2csICcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbi5wdXNoKGNyZWF0ZUFOb2RlKHtcbiAgICAgICAgICAgICAgICB0ZXh0RXhwcjogcGFyc2VUZXh0KHRleHQsIG9wdGlvbnMuZGVsaW1pdGVycylcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogZXNsaW50LWVuYWJsZSBmZWNzLW1heC1zdGF0ZW1lbnRzICovXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBhcnNlVGVtcGxhdGU7XG5cblxuLyoqXG4gKiBAZmlsZSDpu5jorqRmaWx0ZXJcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1jYW1lbGNhc2UgKi9cbi8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xuXG4vKipcbiAqIOm7mOiupGZpbHRlclxuICpcbiAqIEBjb25zdFxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIERFRkFVTFRfRklMVEVSUyA9IHtcblxuICAgIC8qKlxuICAgICAqIFVSTOe8lueggWZpbHRlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDkuLJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IOabv+aNoue7k+aenOS4slxuICAgICAqL1xuICAgIHVybDogZW5jb2RlVVJJQ29tcG9uZW50LFxuXG4gICAgX2NsYXNzOiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH0sXG5cbiAgICBfc3R5bGU6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGtleSArICc6JyArIHNvdXJjZVtrZXldICsgJzsnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9LFxuXG4gICAgX3NlcDogZnVuY3Rpb24gKHNvdXJjZSwgc2VwKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UgPyBzZXAgKyBzb3VyY2UgOiBzb3VyY2U7XG4gICAgfVxufTtcbi8qIGVzbGludC1lbmFibGUgZmVjcy1jYW1lbGNhc2UgKi9cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gREVGQVVMVF9GSUxURVJTO1xuXG5cbi8qKlxuICogQGZpbGUg6KGo6L6+5byP6K6h566XXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgREVGQVVMVF9GSUxURVJTID0gcmVxdWlyZSgnLi9kZWZhdWx0LWZpbHRlcnMnKTtcbi8vIHZhciBldmFsQXJncyA9IHJlcXVpcmUoJy4vZXZhbC1hcmdzJyk7XG4vLyB2YXIgZGF0YUNhY2hlID0gcmVxdWlyZSgnLi9kYXRhLWNhY2hlJyk7XG5cbi8qKlxuICog6K6h566X6KGo6L6+5byP55qE5YC8XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV4cHIg6KGo6L6+5byP5a+56LGhXG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg5pWw5o2u5a655Zmo5a+56LGhXG4gKiBAcGFyYW0ge0NvbXBvbmVudD19IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gZXZhbEV4cHIoZXhwciwgZGF0YSwgb3duZXIpIHtcbiAgICBpZiAoZXhwci52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBleHByLnZhbHVlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IGRhdGFDYWNoZS5nZXQoZGF0YSwgZXhwcik7XG5cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBzd2l0Y2ggKGV4cHIudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5VTkFSWTpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICFldmFsRXhwcihleHByLmV4cHIsIGRhdGEsIG93bmVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5CSU5BUlk6XG4gICAgICAgICAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IGV2YWxFeHByKGV4cHIuc2Vnc1swXSwgZGF0YSwgb3duZXIpO1xuICAgICAgICAgICAgICAgIHZhciByaWdodFZhbHVlID0gZXZhbEV4cHIoZXhwci5zZWdzWzFdLCBkYXRhLCBvd25lcik7XG5cbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGV4cHIub3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSAtIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlID4gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc2OlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgIT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgPj0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE1NTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTgzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNDg6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSB8fCByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgZXFlcWVxICovXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuVEVSVElBUlk6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBldmFsRXhwcihcbiAgICAgICAgICAgICAgICAgICAgZXhwci5zZWdzW2V2YWxFeHByKGV4cHIuc2Vnc1swXSwgZGF0YSwgb3duZXIpID8gMSA6IDJdLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBvd25lclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuQUNDRVNTT1I6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhLmdldChleHByKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5JTlRFUlA6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBldmFsRXhwcihleHByLmV4cHIsIGRhdGEsIG93bmVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChvd25lcikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV4cHIuZmlsdGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBleHByLmZpbHRlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyTmFtZSA9IGZpbHRlci5uYW1lLnBhdGhzWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3duZXIuZmlsdGVyc1tmaWx0ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3duZXIuZmlsdGVyc1tmaWx0ZXJOYW1lXS5hcHBseShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV0uY29uY2F0KGV2YWxBcmdzKGZpbHRlci5hcmdzLCBkYXRhLCBvd25lcikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKERFRkFVTFRfRklMVEVSU1tmaWx0ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gREVGQVVMVF9GSUxURVJTW2ZpbHRlck5hbWVdKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLmFyZ3NbMF0gPyBmaWx0ZXIuYXJnc1swXS52YWx1ZSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlZGVjbGFyZSAqL1xuICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5URVhUOlxuICAgICAgICAgICAgICAgIHZhciBidWYgPSAnJztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV4cHIuc2Vncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZyA9IGV4cHIuc2Vnc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgYnVmICs9IHNlZy52YWx1ZSB8fCBldmFsRXhwcihzZWcsIGRhdGEsIG93bmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFDYWNoZS5zZXQoZGF0YSwgZXhwciwgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZXZhbEV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDkuLrlh73mlbDosIPnlKjorqHnrpflj4LmlbDmlbDnu4TnmoTlgLxcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcblxuLyoqXG4gKiDkuLrlh73mlbDosIPnlKjorqHnrpflj4LmlbDmlbDnu4TnmoTlgLxcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIOWPguaVsOihqOi+vuW8j+WIl+ihqFxuICogQHBhcmFtIHtEYXRhfSBkYXRhIOaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOe7hOS7tueOr+Wig1xuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGV2YWxBcmdzKGFyZ3MsIGRhdGEsIG93bmVyKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChldmFsRXhwcihhcmdzW2ldLCBkYXRhLCBvd25lcikpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGV2YWxBcmdzO1xuXG5cbi8qKlxuICogQGZpbGUg5pWw5o2u57yT5a2Y566h55CG5ZmoXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cblxudmFyIGRhdGFDYWNoZVNvdXJjZSA9IHt9O1xudmFyIGRhdGFDYWNoZUNsZWFybHkgPSAxO1xuXG4vKipcbiAqIOaVsOaNrue8k+WtmOeuoeeQhuWZqFxuICpcbiAqIEBjb25zdFxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGRhdGFDYWNoZSA9IHtcbiAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWRhdGFDYWNoZUNsZWFybHkpIHtcbiAgICAgICAgICAgIGRhdGFDYWNoZUNsZWFybHkgPSAxO1xuICAgICAgICAgICAgZGF0YUNhY2hlU291cmNlID0ge307XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0YSwgZXhwciwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGV4cHIucmF3KSB7XG4gICAgICAgICAgICBkYXRhQ2FjaGVDbGVhcmx5ID0gMDtcbiAgICAgICAgICAgIChkYXRhQ2FjaGVTb3VyY2VbZGF0YS5pZF0gPSBkYXRhQ2FjaGVTb3VyY2VbZGF0YS5pZF0gfHwge30pW2V4cHIucmF3XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24gKGRhdGEsIGV4cHIpIHtcbiAgICAgICAgaWYgKGV4cHIucmF3ICYmIGRhdGFDYWNoZVNvdXJjZVtkYXRhLmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFDYWNoZVNvdXJjZVtkYXRhLmlkXVtleHByLnJhd107XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGRhdGFDYWNoZTtcblxuXG4vKipcbiAqIEBmaWxlIOavlOi+g+WPmOabtOihqOi+vuW8j+S4juebruagh+ihqOi+vuW8j+S5i+mXtOeahOWFs+ezu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi9ldmFsLWV4cHInKTtcbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG5cbi8qKlxuICog5Yik5pat5Y+Y5pu06KGo6L6+5byP5LiO5aSa5Liq6KGo6L6+5byP5LmL6Ze055qE5YWz57O777yMMOS4uuWujOWFqOayoeWFs+ezu++8jDHkuLrmnInlhbPns7tcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuZ2VFeHByIOebruagh+ihqOi+vuW8j1xuICogQHBhcmFtIHtBcnJheX0gZXhwcnMg5aSa5Liq5rqQ6KGo6L6+5byPXG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg6KGo6L6+5byP5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNoYW5nZUV4cHJDb21wYXJlRXhwcnMoY2hhbmdlRXhwciwgZXhwcnMsIGRhdGEpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV4cHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgZXhwcnNbaV0sIGRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAwO1xufVxuXG4vKipcbiAqIOavlOi+g+WPmOabtOihqOi+vuW8j+S4juebruagh+ihqOi+vuW8j+S5i+mXtOeahOWFs+ezu++8jOeUqOS6juinhuWbvuabtOaWsOWIpOaWrVxuICog6KeG5Zu+5pu05paw6ZyA6KaB5qC55o2u5YW25YWz57O777yM5YGa5Ye655u45bqU55qE5pu05paw6KGM5Li6XG4gKlxuICogMDog5a6M5YWo5rKh5YWz57O7XG4gKiAxOiDlj5jmm7Tooajovr7lvI/mmK/nm67moIfooajovr7lvI/nmoTmr43pobko5aaCYeS4jmEuYikg5oiWIOihqOekuumcgOimgeWujOWFqOWPmOWMllxuICogMjog5Y+Y5pu06KGo6L6+5byP5piv55uu5qCH6KGo6L6+5byP55u4562JXG4gKiA+Mjog5Y+Y5pu06KGo6L6+5byP5piv55uu5qCH6KGo6L6+5byP55qE5a2Q6aG577yM5aaCYS5iLmPkuI5hLmJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhbmdlRXhwciDlj5jmm7Tooajovr7lvI9cbiAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOimgeavlOi+g+eahOebruagh+ihqOi+vuW8j1xuICogQHBhcmFtIHtEYXRhfSBkYXRhIOihqOi+vuW8j+aJgOWxnuaVsOaNrueOr+Wig1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBleHByLCBkYXRhKSB7XG4gICAgc3dpdGNoIChleHByLnR5cGUpIHtcbiAgICAgICAgY2FzZSBFeHByVHlwZS5BQ0NFU1NPUjpcbiAgICAgICAgICAgIHZhciBwYXRocyA9IGV4cHIucGF0aHM7XG4gICAgICAgICAgICB2YXIgbGVuID0gcGF0aHMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNoYW5nZVBhdGhzID0gY2hhbmdlRXhwci5wYXRocztcbiAgICAgICAgICAgIHZhciBjaGFuZ2VMZW4gPSBjaGFuZ2VQYXRocy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAxO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwYXRoRXhwciA9IHBhdGhzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhdGhFeHByLnR5cGUgPT09IEV4cHJUeXBlLkFDQ0VTU09SXG4gICAgICAgICAgICAgICAgICAgICYmIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIHBhdGhFeHByLCBkYXRhKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIGkgPCBjaGFuZ2VMZW5cbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4gICAgICAgICAgICAgICAgICAgICYmIChwYXRoRXhwci52YWx1ZSB8fCBldmFsRXhwcihwYXRoRXhwciwgZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAhPSAoY2hhbmdlUGF0aHNbaV0udmFsdWUgfHwgZXZhbEV4cHIoY2hhbmdlUGF0aHNbaV0sIGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IE1hdGgubWF4KDEsIGNoYW5nZUxlbiAtIGxlbiArIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgICAgICBjYXNlIEV4cHJUeXBlLlVOQVJZOlxuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIGV4cHIuZXhwciwgZGF0YSkgPyAxIDogMDtcblxuXG4gICAgICAgIGNhc2UgRXhwclR5cGUuVEVYVDpcbiAgICAgICAgY2FzZSBFeHByVHlwZS5CSU5BUlk6XG4gICAgICAgIGNhc2UgRXhwclR5cGUuVEVSVElBUlk6XG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlRXhwckNvbXBhcmVFeHBycyhjaGFuZ2VFeHByLCBleHByLnNlZ3MsIGRhdGEpO1xuXG4gICAgICAgIGNhc2UgRXhwclR5cGUuSU5URVJQOlxuICAgICAgICAgICAgaWYgKCFjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBleHByLmV4cHIsIGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpbHRlclJlc3VsdDtcbiAgICAgICAgICAgICAgICBlYWNoKGV4cHIuZmlsdGVycywgZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJSZXN1bHQgPSBjaGFuZ2VFeHByQ29tcGFyZUV4cHJzKGNoYW5nZUV4cHIsIGZpbHRlci5hcmdzLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFmaWx0ZXJSZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyUmVzdWx0ID8gMSA6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjaGFuZ2VFeHByQ29tcGFyZTtcblxuXG4vKipcbiAqIEBmaWxlIOaVsOaNruWPmOabtOexu+Wei+aemuS4vlxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDmlbDmja7lj5jmm7TnsbvlnovmnprkuL5cbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBEYXRhQ2hhbmdlVHlwZSA9IHtcbiAgICBTRVQ6IDEsXG4gICAgU1BMSUNFOiAyXG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBEYXRhQ2hhbmdlVHlwZTtcblxuXG4vKipcbiAqIEBmaWxlIOeUn+WRveWRqOacn+exu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuZnVuY3Rpb24gbGlmZUN5Y2xlT3duSXMobmFtZSkge1xuICAgIHJldHVybiB0aGlzW25hbWVdO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLXZhbGlkLXZhci1qc2RvYyAqL1xuLyoqXG4gKiDoioLngrnnlJ/lkb3lkajmnJ/kv6Hmga9cbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBMaWZlQ3ljbGUgPSB7XG4gICAgc3RhcnQ6IHt9LFxuXG4gICAgY29tcGlsZWQ6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICBpbml0ZWQ6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZSxcbiAgICAgICAgaW5pdGVkOiB0cnVlXG4gICAgfSxcblxuICAgIHBhaW50aW5nOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWUsXG4gICAgICAgIGluaXRlZDogdHJ1ZSxcbiAgICAgICAgcGFpbnRpbmc6IHRydWVcbiAgICB9LFxuXG4gICAgY3JlYXRlZDoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlLFxuICAgICAgICBpbml0ZWQ6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgYXR0YWNoZWQ6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZSxcbiAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICBjcmVhdGVkOiB0cnVlLFxuICAgICAgICBhdHRhY2hlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICBsZWF2aW5nOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWUsXG4gICAgICAgIGluaXRlZDogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZDogdHJ1ZSxcbiAgICAgICAgYXR0YWNoZWQ6IHRydWUsXG4gICAgICAgIGxlYXZpbmc6IHRydWVcbiAgICB9LFxuXG4gICAgZGV0YWNoZWQ6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZSxcbiAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICBjcmVhdGVkOiB0cnVlLFxuICAgICAgICBkZXRhY2hlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICBkaXNwb3NlZDoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGRpc3Bvc2VkOiB0cnVlXG4gICAgfVxufTtcbi8qIGVzbGludC1lbmFibGUgZmVjcy12YWxpZC12YXItanNkb2MgKi9cblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBMaWZlQ3ljbGU7XG5cblxuLyoqXG4gKiBAZmlsZSDoioLngrnnsbvlnotcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog6IqC54K557G75Z6LXG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgTm9kZVR5cGUgPSB7XG4gICAgVEVYVDogMSxcbiAgICBJRjogMixcbiAgICBGT1I6IDMsXG4gICAgRUxFTTogNCxcbiAgICBDTVBUOiA1LFxuICAgIFNMT1Q6IDYsXG4gICAgVFBMOiA3XG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBOb2RlVHlwZTtcblxuXG4vKipcbiAqIEBmaWxlIOiOt+WPliBBTm9kZSBwcm9wcyDmlbDnu4TkuK3nm7jlupQgbmFtZSDnmoTpoblcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog6I635Y+WIEFOb2RlIHByb3BzIOaVsOe7hOS4reebuOW6lCBuYW1lIOeahOmhuVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhTm9kZSBBTm9kZeWvueixoVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZeWxnuaAp+WMuemFjeS4slxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXRBTm9kZVByb3AoYU5vZGUsIG5hbWUpIHtcbiAgICB2YXIgaW5kZXggPSBhTm9kZS5ob3RzcG90LnByb3BzW25hbWVdO1xuICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhTm9kZS5wcm9wc1tpbmRleF07XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBnZXRBTm9kZVByb3A7XG5cblxuLyoqXG4gKiBAZmlsZSDojrflj5blsZ7mgKflpITnkIblr7nosaFcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBjb250YWlucyA9IHJlcXVpcmUoJy4uL3V0aWwvY29udGFpbnMnKTtcbi8vIHZhciBlbXB0eSA9IHJlcXVpcmUoJy4uL3V0aWwvZW1wdHknKTtcbi8vIHZhciBzdmdUYWdzID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9zdmctdGFncycpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBnZXRBTm9kZVByb3AgPSByZXF1aXJlKCcuL2dldC1hLW5vZGUtcHJvcCcpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcblxuXG4vKipcbiAqIEhUTUwg5bGe5oCn5ZKMIERPTSDmk43kvZzlsZ7mgKfnmoTlr7nnhafooahcbiAqXG4gKiBAaW5uZXJcbiAqIEBjb25zdFxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIEhUTUxfQVRUUl9QUk9QX01BUCA9IHtcbiAgICAncmVhZG9ubHknOiAncmVhZE9ubHknLFxuICAgICdjZWxscGFkZGluZyc6ICdjZWxsUGFkZGluZycsXG4gICAgJ2NlbGxzcGFjaW5nJzogJ2NlbGxTcGFjaW5nJyxcbiAgICAnY29sc3Bhbic6ICdjb2xTcGFuJyxcbiAgICAncm93c3Bhbic6ICdyb3dTcGFuJyxcbiAgICAndmFsaWduJzogJ3ZBbGlnbicsXG4gICAgJ3VzZW1hcCc6ICd1c2VNYXAnLFxuICAgICdmcmFtZWJvcmRlcic6ICdmcmFtZUJvcmRlcicsXG4gICAgJ2Zvcic6ICdodG1sRm9yJ1xufTtcblxuLyoqXG4gKiDpu5jorqTnmoTlhYPntKDnmoTlsZ7mgKforr7nva7nmoTlj5jmjaLmlrnms5VcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBkZWZhdWx0RWxlbWVudFByb3BIYW5kbGVyID0ge1xuICAgIHByb3A6IGZ1bmN0aW9uIChlbCwgdmFsdWUsIG5hbWUsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gSFRNTF9BVFRSX1BST1BfTUFQW25hbWVdIHx8IG5hbWU7XG5cbiAgICAgICAgLy8gaW5wdXQg55qEIHR5cGUg5piv5Liq54m55q6K5bGe5oCn77yM5YW25a6e5Lmf5bqU6K+l55SoIHNldEF0dHJpYnV0ZVxuICAgICAgICAvLyDkvYbmmK8gdHlwZSDkuI3lupTor6Xov5DooYzml7bliqjmgIHmlLnlj5jvvIzlkKbliJnkvJrmnInlhbzlrrnmgKfpl67pophcbiAgICAgICAgLy8g5omA5Lul6L+Z6YeM55u05o6l5bCx5LiN566h5LqGXG4gICAgICAgIGlmIChwcm9wTmFtZSBpbiBlbCkge1xuICAgICAgICAgICAgZWxbcHJvcE5hbWVdID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXR0cmlidXRlIOe7keWumueahOaYryB0ZXh077yM5omA5Lul5LiN5Lya5Ye6546wIG51bGwg55qE5oOF5Ya177yM6L+Z6YeM5peg6ZyA5aSE55CGXG4gICAgICAgIC8vIOaNouWPpeivneadpeivtO+8jHNhbiDmmK/lgZrkuI3liLAgYXR0cmlidXRlIOaXtuacieaXtuaXoOeahFxuICAgICAgICAvLyBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAvLyB9XG4gICAgfSxcblxuICAgIG91dHB1dDogZnVuY3Rpb24gKGVsZW1lbnQsIGJpbmRJbmZvLCBkYXRhKSB7XG4gICAgICAgIGRhdGEuc2V0KGJpbmRJbmZvLmV4cHIsIGVsZW1lbnQuZWxbYmluZEluZm8ubmFtZV0sIHtcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgIHByb3A6IGJpbmRJbmZvLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxudmFyIHN2Z1Byb3BIYW5kbGVyID0ge1xuICAgIHByb3A6IGZ1bmN0aW9uIChlbCwgdmFsdWUsIG5hbWUpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG52YXIgYm9vbFByb3BIYW5kbGVyID0ge1xuICAgIHByb3A6IGZ1bmN0aW9uIChlbCwgdmFsdWUsIG5hbWUsIGVsZW1lbnQsIHByb3ApIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gSFRNTF9BVFRSX1BST1BfTUFQW25hbWVdIHx8IG5hbWU7XG4gICAgICAgIGVsW3Byb3BOYW1lXSA9ICEhKHByb3AgJiYgcHJvcC5yYXcgPT09ICcnXG4gICAgICAgICAgICB8fCB2YWx1ZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJyAmJiB2YWx1ZSAhPT0gJzAnKTtcbiAgICB9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLXByb3BlcnRpZXMtcXVvdGUgKi9cbi8qKlxuICog6buY6K6k55qE5bGe5oCn6K6+572u5Y+Y5o2i5pa55rOVXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlcnMgPSB7XG4gICAgc3R5bGU6IHtcbiAgICAgICAgcHJvcDogZnVuY3Rpb24gKGVsLCB2YWx1ZSkge1xuICAgICAgICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgICdjbGFzcyc6IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBwcm9wOiBmdW5jdGlvbiAoZWwsIHZhbHVlKSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzbG90OiB7XG4gICAgICAgIHByb3A6IGVtcHR5XG4gICAgfSxcblxuICAgIHJlYWRvbmx5OiBib29sUHJvcEhhbmRsZXIsXG4gICAgZGlzYWJsZWQ6IGJvb2xQcm9wSGFuZGxlcixcbiAgICBhdXRvZm9jdXM6IGJvb2xQcm9wSGFuZGxlcixcbiAgICByZXF1aXJlZDogYm9vbFByb3BIYW5kbGVyLFxuICAgIGRyYWdnYWJsZTogYm9vbFByb3BIYW5kbGVyXG59O1xuLyogZXNsaW50LWVuYWJsZSBmZWNzLXByb3BlcnRpZXMtcXVvdGUgKi9cblxudmFyIGFuYWxJbnB1dENoZWNrZXIgPSB7XG4gICAgY2hlY2tib3g6IGNvbnRhaW5zLFxuICAgIHJhZGlvOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBhbmFsSW5wdXRDaGVja2VkU3RhdGUoZWxlbWVudCwgdmFsdWUsIG9wZXIpIHtcbiAgICB2YXIgYmluZFZhbHVlID0gZ2V0QU5vZGVQcm9wKGVsZW1lbnQuYU5vZGUsICd2YWx1ZScpO1xuICAgIHZhciBiaW5kVHlwZSA9IGdldEFOb2RlUHJvcChlbGVtZW50LmFOb2RlLCAndHlwZScpO1xuXG4gICAgaWYgKGJpbmRWYWx1ZSAmJiBiaW5kVHlwZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGV2YWxFeHByKGJpbmRUeXBlLmV4cHIsIGVsZW1lbnQuc2NvcGUsIGVsZW1lbnQub3duZXIpO1xuXG4gICAgICAgIGlmIChhbmFsSW5wdXRDaGVja2VyW3R5cGVdKSB7XG4gICAgICAgICAgICB2YXIgYmluZENoZWNrZWQgPSBnZXRBTm9kZVByb3AoZWxlbWVudC5hTm9kZSwgJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGlmICghYmluZENoZWNrZWQuaGludEV4cHIpIHtcbiAgICAgICAgICAgICAgICBiaW5kQ2hlY2tlZC5oaW50RXhwciA9IGJpbmRWYWx1ZS5leHByO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gISFhbmFsSW5wdXRDaGVja2VyW3R5cGVdKFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGV2YWxFeHByKGJpbmRWYWx1ZS5leHByLCBlbGVtZW50LnNjb3BlLCBlbGVtZW50Lm93bmVyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIGVsZW1lbnRQcm9wSGFuZGxlcnMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgICAgbXVsdGlwbGU6IGJvb2xQcm9wSGFuZGxlcixcbiAgICAgICAgY2hlY2tlZDoge1xuICAgICAgICAgICAgcHJvcDogZnVuY3Rpb24gKGVsLCB2YWx1ZSwgbmFtZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IGFuYWxJbnB1dENoZWNrZWRTdGF0ZShlbGVtZW50LCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBib29sUHJvcEhhbmRsZXIucHJvcChcbiAgICAgICAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlICE9IG51bGwgPyBzdGF0ZSA6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAnY2hlY2tlZCcsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb3V0cHV0OiBmdW5jdGlvbiAoZWxlbWVudCwgYmluZEluZm8sIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50LmVsO1xuICAgICAgICAgICAgICAgIHZhciBiaW5kVmFsdWUgPSBnZXRBTm9kZVByb3AoZWxlbWVudC5hTm9kZSwgJ3ZhbHVlJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJpbmRUeXBlID0gZ2V0QU5vZGVQcm9wKGVsZW1lbnQuYU5vZGUsICd0eXBlJykgfHwge307XG5cbiAgICAgICAgICAgICAgICBpZiAoYmluZFZhbHVlICYmIGJpbmRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYmluZFR5cGUucmF3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtlbC5jaGVja2VkID8gJ3B1c2gnIDogJ3JlbW92ZSddKGJpbmRJbmZvLmV4cHIsIGVsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jaGVja2VkICYmIGRhdGEuc2V0KGJpbmRJbmZvLmV4cHIsIGVsLnZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wOiBiaW5kSW5mby5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0RWxlbWVudFByb3BIYW5kbGVyLm91dHB1dChlbGVtZW50LCBiaW5kSW5mbywgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb3B0aW9uOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBwcm9wOiBmdW5jdGlvbiAoZWwsIHZhbHVlLCBuYW1lLCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlci5wcm9wKGVsLCB2YWx1ZSwgbmFtZSwgZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25TZWxlY3RlZChlbGVtZW50LCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZWxlY3Q6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHByb3A6IGZ1bmN0aW9uIChlbCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBlbC52YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb3V0cHV0OiBkZWZhdWx0RWxlbWVudFByb3BIYW5kbGVyLm91dHB1dFxuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gaXNPcHRpb25TZWxlY3RlZChlbGVtZW50LCB2YWx1ZSkge1xuICAgIHZhciBwYXJlbnRTZWxlY3QgPSBlbGVtZW50LnBhcmVudDtcbiAgICB3aGlsZSAocGFyZW50U2VsZWN0KSB7XG4gICAgICAgIGlmIChwYXJlbnRTZWxlY3QudGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50U2VsZWN0ID0gcGFyZW50U2VsZWN0LnBhcmVudDtcbiAgICB9XG5cblxuICAgIGlmIChwYXJlbnRTZWxlY3QpIHtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gbnVsbDtcbiAgICAgICAgdmFyIHByb3A7XG4gICAgICAgIHZhciBleHByO1xuXG4gICAgICAgIGlmICgocHJvcCA9IGdldEFOb2RlUHJvcChwYXJlbnRTZWxlY3QuYU5vZGUsICd2YWx1ZScpKVxuICAgICAgICAgICAgJiYgKGV4cHIgPSBwcm9wLmV4cHIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgc2VsZWN0VmFsdWUgPSBwYXJlbnRTZWxlY3Qubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFRcbiAgICAgICAgICAgICAgICA/IGV2YWxFeHByKGV4cHIsIHBhcmVudFNlbGVjdC5kYXRhLCBwYXJlbnRTZWxlY3QpXG4gICAgICAgICAgICAgICAgOiBldmFsRXhwcihleHByLCBwYXJlbnRTZWxlY3Quc2NvcGUsIHBhcmVudFNlbGVjdC5vd25lcilcbiAgICAgICAgICAgICAgICB8fCAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKlxuICog6I635Y+W5bGe5oCn5aSE55CG5a+56LGhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUg5YWD57SgdGFnXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0ck5hbWUg5bGe5oCn5ZCNXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGdldFByb3BIYW5kbGVyKHRhZ05hbWUsIGF0dHJOYW1lKSB7XG4gICAgaWYgKHN2Z1RhZ3NbdGFnTmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIHN2Z1Byb3BIYW5kbGVyO1xuICAgIH1cblxuICAgIHZhciB0YWdQcm9wSGFuZGxlcnMgPSBlbGVtZW50UHJvcEhhbmRsZXJzW3RhZ05hbWVdO1xuICAgIGlmICghdGFnUHJvcEhhbmRsZXJzKSB7XG4gICAgICAgIHRhZ1Byb3BIYW5kbGVycyA9IGVsZW1lbnRQcm9wSGFuZGxlcnNbdGFnTmFtZV0gPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcEhhbmRsZXIgPSB0YWdQcm9wSGFuZGxlcnNbYXR0ck5hbWVdO1xuICAgIGlmICghcHJvcEhhbmRsZXIpIHtcbiAgICAgICAgcHJvcEhhbmRsZXIgPSBkZWZhdWx0RWxlbWVudFByb3BIYW5kbGVyc1thdHRyTmFtZV0gfHwgZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlcjtcbiAgICAgICAgdGFnUHJvcEhhbmRsZXJzW2F0dHJOYW1lXSA9IHByb3BIYW5kbGVyO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wSGFuZGxlcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ2V0UHJvcEhhbmRsZXI7XG5cblxuLyoqXG4gKiBAZmlsZSDliKTmlq3lj5jmm7TmmK/lkKbmnaXmupDkuo7lhYPntKBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5Yik5pat5Y+Y5pu05piv5ZCm5p2l5rqQ5LqO5YWD57Sg77yM5p2l5rqQ5LqO5YWD57Sg5pe277yM6KeG5Zu+5pu05paw6ZyA6KaB6Zi75patXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNoYW5nZSDlj5jmm7Tlr7nosaFcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCDlhYPntKBcbiAqIEBwYXJhbSB7c3RyaW5nP30gcHJvcE5hbWUg5bGe5oCn5ZCN77yM5Y+v6YCJ44CC6ZyA6KaB57K+56Gu5Yik5pat5piv5ZCm5p2l5rqQ5LqO5q2k5bGe5oCn5pe25Lyg5YWlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0RhdGFDaGFuZ2VCeUVsZW1lbnQoY2hhbmdlLCBlbGVtZW50LCBwcm9wTmFtZSkge1xuICAgIHZhciBjaGFuZ2VUYXJnZXQgPSBjaGFuZ2Uub3B0aW9uLnRhcmdldDtcbiAgICByZXR1cm4gY2hhbmdlVGFyZ2V0ICYmIGNoYW5nZVRhcmdldC5pZCA9PT0gZWxlbWVudC5pZFxuICAgICAgICAmJiAoIXByb3BOYW1lIHx8IGNoYW5nZVRhcmdldC5wcm9wID09PSBwcm9wTmFtZSk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGlzRGF0YUNoYW5nZUJ5RWxlbWVudDtcblxuXG4vKipcbiAqIEBmaWxlIOWcqOWvueixoeS4iuS9v+eUqGFjY2Vzc29y6KGo6L6+5byP5p+l5om+5pa55rOVXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuXG4vKipcbiAqIOWcqOWvueixoeS4iuS9v+eUqGFjY2Vzc29y6KGo6L6+5byP5p+l5om+5pa55rOVXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSDmupDlr7nosaFcbiAqIEBwYXJhbSB7T2JqZWN0fSBuYW1lRXhwciDooajovr7lvI9cbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBmaW5kTWV0aG9kKHNvdXJjZSwgbmFtZUV4cHIsIGRhdGEpIHtcbiAgICB2YXIgbWV0aG9kID0gc291cmNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IG1ldGhvZCAhPSBudWxsICYmIGkgPCBuYW1lRXhwci5wYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtZXRob2QgPSBtZXRob2RbZXZhbEV4cHIobmFtZUV4cHIucGF0aHNbaV0sIGRhdGEpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmaW5kTWV0aG9kO1xuXG5cbi8qKlxuICogQGZpbGUg5pWw5o2u57G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuL2V2YWwtZXhwcicpO1xuLy8gdmFyIERhdGFDaGFuZ2VUeXBlID0gcmVxdWlyZSgnLi9kYXRhLWNoYW5nZS10eXBlJyk7XG4vLyB2YXIgY3JlYXRlQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9wYXJzZXIvY3JlYXRlLWFjY2Vzc29yJyk7XG4vLyB2YXIgcGFyc2VFeHByID0gcmVxdWlyZSgnLi4vcGFyc2VyL3BhcnNlLWV4cHInKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgZGF0YUNhY2hlID0gcmVxdWlyZSgnLi9kYXRhLWNhY2hlJyk7XG5cbi8qKlxuICog5pWw5o2u57G7XG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge09iamVjdD99IGRhdGEg5Yid5aeL5pWw5o2uXG4gKiBAcGFyYW0ge01vZGVsP30gcGFyZW50IOeItue6p+aVsOaNruWuueWZqFxuICovXG5mdW5jdGlvbiBEYXRhKGRhdGEsIHBhcmVudCkge1xuICAgIHRoaXMuaWQgPSBndWlkKCk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5yYXcgPSBkYXRhIHx8IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG59XG5cbi8vICNbYmVnaW5dIGVycm9yXG4vLyDku6XkuIvkuKTkuKrlh73mlbDlj6rlnKjlvIDlj5HmqKHlvI/kuIvlj6/nlKjvvIzlnKjnlJ/kuqfmqKHlvI/kuIvkuI3lrZjlnKhcbi8qKlxuICogRGF0YVR5cGVzIOajgOa1i1xuICovXG5EYXRhLnByb3RvdHlwZS5jaGVja0RhdGFUeXBlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50eXBlQ2hlY2tlcikge1xuICAgICAgICB0aGlzLnR5cGVDaGVja2VyKHRoaXMucmF3KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOiuvue9riB0eXBlIGNoZWNrZXJcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gdHlwZUNoZWNrZXIg57G75Z6L5qCh6aqM5ZmoXG4gKi9cbkRhdGEucHJvdG90eXBlLnNldFR5cGVDaGVja2VyID0gZnVuY3Rpb24gKHR5cGVDaGVja2VyKSB7XG4gICAgdGhpcy50eXBlQ2hlY2tlciA9IHR5cGVDaGVja2VyO1xufTtcblxuLy8gI1tlbmRdXG5cbi8qKlxuICog5re75Yqg5pWw5o2u5Y+Y5pu055qE5LqL5Lu255uR5ZCs5ZmoXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gKi9cbkRhdGEucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfVxufTtcblxuLyoqXG4gKiDnp7vpmaTmlbDmja7lj5jmm7TnmoTkuovku7bnm5HlkKzlmahcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlh73mlbBcbiAqL1xuRGF0YS5wcm90b3R5cGUudW5saXN0ZW4gPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICB2YXIgbGVuID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoO1xuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICBpZiAoIWxpc3RlbmVyIHx8IHRoaXMubGlzdGVuZXJzW2xlbl0gPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UobGVuLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICog6Kem5Y+R5pWw5o2u5Y+Y5pu0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNoYW5nZSDlj5jmm7Tkv6Hmga/lr7nosaFcbiAqL1xuRGF0YS5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICBpZiAoY2hhbmdlLm9wdGlvbi5zaWxlbnQgfHwgY2hhbmdlLm9wdGlvbi5zaWxlbmNlIHx8IGNoYW5nZS5vcHRpb24ucXVpZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbaV0uY2FsbCh0aGlzLCBjaGFuZ2UpO1xuICAgIH1cbn07XG5cbi8qKlxuICog6I635Y+W5pWw5o2u6aG5XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0P30gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7RGF0YT99IGNhbGxlZSDlvZPliY3mlbDmja7ojrflj5bnmoTosIPnlKjnjq/looNcbiAqIEByZXR1cm4geyp9XG4gKi9cbkRhdGEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChleHByLCBjYWxsZWUpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnJhdztcbiAgICBpZiAoIWV4cHIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG5cbiAgICB2YXIgcGF0aHMgPSBleHByLnBhdGhzO1xuICAgIGNhbGxlZSA9IGNhbGxlZSB8fCB0aGlzO1xuXG4gICAgdmFsdWUgPSB2YWx1ZVtwYXRoc1swXS52YWx1ZV07XG5cbiAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiB0aGlzLnBhcmVudCkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMucGFyZW50LmdldChleHByLCBjYWxsZWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGwgPSBwYXRocy5sZW5ndGg7IHZhbHVlICE9IG51bGwgJiYgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtwYXRoc1tpXS52YWx1ZSB8fCBldmFsRXhwcihwYXRoc1tpXSwgY2FsbGVlKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICog5pWw5o2u5a+56LGh5Y+Y5pu05pON5L2cXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gc291cmNlIOimgeWPmOabtOeahOa6kOaVsOaNrlxuICogQHBhcmFtIHtBcnJheX0gZXhwclBhdGhzIOWxnuaAp+i3r+W+hFxuICogQHBhcmFtIHsqfSB2YWx1ZSDlj5jmm7TlsZ7mgKflgLxcbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDlr7nlupTnmoREYXRh5a+56LGhXG4gKiBAcmV0dXJuIHsqfSDlj5jmm7TlkI7nmoTmlrDmlbDmja5cbiAqL1xuZnVuY3Rpb24gaW1tdXRhYmxlU2V0KHNvdXJjZSwgZXhwclBhdGhzLCB2YWx1ZSwgZGF0YSkge1xuICAgIGlmIChleHByUGF0aHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcCA9IGV2YWxFeHByKGV4cHJQYXRoc1swXSwgZGF0YSk7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgaW5kZXggPSArcHJvcDtcblxuICAgICAgICByZXN1bHQgPSBzb3VyY2Uuc2xpY2UoMCk7XG4gICAgICAgIHJlc3VsdFtpc05hTihpbmRleCkgPyBwcm9wIDogaW5kZXhdID0gaW1tdXRhYmxlU2V0KHNvdXJjZVtpbmRleF0sIGV4cHJQYXRocy5zbGljZSgxKSwgdmFsdWUsIGRhdGEpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09IHByb3ApIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0W3Byb3BdID0gaW1tdXRhYmxlU2V0KHNvdXJjZVtwcm9wXSB8fCB7fSwgZXhwclBhdGhzLnNsaWNlKDEpLCB2YWx1ZSwgZGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xufVxuXG4vKipcbiAqIOiuvue9ruaVsOaNrumhuVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUg5pWw5o2u5YC8XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqL1xuRGF0YS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGV4cHIsIHZhbHVlLCBvcHRpb24pIHtcbiAgICBvcHRpb24gPSBvcHRpb24gfHwge307XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIHZhciBleHByUmF3ID0gZXhwcjtcbiAgICAvLyAjW2VuZF1cblxuICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGlmIChleHByLnR5cGUgIT09IEV4cHJUeXBlLkFDQ0VTU09SKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gSW52YWxpZCBFeHByZXNzaW9uIGluIERhdGEgc2V0OiAnICsgZXhwclJhdyk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgaWYgKHRoaXMuZ2V0KGV4cHIpID09PSB2YWx1ZSAmJiAhb3B0aW9uLmZvcmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkYXRhQ2FjaGUuY2xlYXIoKTtcbiAgICB0aGlzLnJhdyA9IGltbXV0YWJsZVNldCh0aGlzLnJhdywgZXhwci5wYXRocywgdmFsdWUsIHRoaXMpO1xuICAgIHRoaXMuZmlyZSh7XG4gICAgICAgIHR5cGU6IERhdGFDaGFuZ2VUeXBlLlNFVCxcbiAgICAgICAgZXhwcjogZXhwcixcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBvcHRpb246IG9wdGlvblxuICAgIH0pO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB0aGlzLmNoZWNrRGF0YVR5cGVzKCk7XG4gICAgLy8gI1tlbmRdXG5cbn07XG5cbi8qKlxuICog5ZCI5bm25pu05paw5pWw5o2u6aG5XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSDlvoXlkIjlubbnmoTmlbDmja7lgLxcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICovXG5EYXRhLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIChleHByLCBzb3VyY2UsIG9wdGlvbikge1xuICAgIG9wdGlvbiA9IG9wdGlvbiB8fCB7fTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdmFyIGV4cHJSYXcgPSBleHByO1xuICAgIC8vICNbZW5kXVxuXG4gICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKGV4cHIudHlwZSAhPT0gRXhwclR5cGUuQUNDRVNTT1IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSBJbnZhbGlkIEV4cHJlc3Npb24gaW4gRGF0YSBtZXJnZTogJyArIGV4cHJSYXcpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5nZXQoZXhwcikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gTWVyZ2UgRXhwZWN0cyBhIFRhcmdldCBvZiBUeXBlIFxcJ29iamVjdFxcJzsgZ290ICcgKyB0eXBlb2Ygb2xkVmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIE1lcmdlIEV4cGVjdHMgYSBTb3VyY2Ugb2YgVHlwZSBcXCdvYmplY3RcXCc7IGdvdCAnICsgdHlwZW9mIHNvdXJjZSk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIHRoaXMuc2V0KFxuICAgICAgICAgICAgY3JlYXRlQWNjZXNzb3IoXG4gICAgICAgICAgICAgICAgZXhwci5wYXRocy5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHNvdXJjZVtrZXldLFxuICAgICAgICAgICAgb3B0aW9uXG4gICAgICAgICk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDln7rkuo7mm7TmlrDlh73mlbDmm7TmlrDmlbDmja7poblcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDmlbDmja7lpITnkIblh73mlbBcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICovXG5EYXRhLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChleHByLCBmbiwgb3B0aW9uKSB7XG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB2YXIgZXhwclJhdyA9IGV4cHI7XG4gICAgLy8gI1tlbmRdXG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAoZXhwci50eXBlICE9PSBFeHByVHlwZS5BQ0NFU1NPUikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIEludmFsaWQgRXhwcmVzc2lvbiBpbiBEYXRhIGFwcGx5OiAnICsgZXhwclJhdyk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5nZXQoZXhwcik7XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1tTQU4gRVJST1JdIEludmFsaWQgQXJndW1lbnRcXCdzIFR5cGUgaW4gRGF0YSBhcHBseTogJ1xuICAgICAgICAgICAgKyAnRXhwZWN0ZWQgRnVuY3Rpb24gYnV0IGdvdCAnICsgdHlwZW9mIGZuXG4gICAgICAgICk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgdGhpcy5zZXQoZXhwciwgZm4ob2xkVmFsdWUpLCBvcHRpb24pO1xufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7poblzcGxpY2Xmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIHNwbGljZSDmjqXlj5fnmoTlj4LmlbDliJfooajvvIzmlbDnu4TpobnkuI5BcnJheS5wcm90b3R5cGUuc3BsaWNl55qE5Y+C5pWw5LiA6Ie0XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqIEByZXR1cm4ge0FycmF5fSDmlrDmlbDnu4RcbiAqL1xuRGF0YS5wcm90b3R5cGUuc3BsaWNlID0gZnVuY3Rpb24gKGV4cHIsIGFyZ3MsIG9wdGlvbikge1xuICAgIG9wdGlvbiA9IG9wdGlvbiB8fCB7fTtcbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIHZhciBleHByUmF3ID0gZXhwcjtcbiAgICAvLyAjW2VuZF1cblxuICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGlmIChleHByLnR5cGUgIT09IEV4cHJUeXBlLkFDQ0VTU09SKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gSW52YWxpZCBFeHByZXNzaW9uIGluIERhdGEgc3BsaWNlOiAnICsgZXhwclJhdyk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0KGV4cHIpO1xuICAgIHZhciByZXR1cm5WYWx1ZSA9IFtdO1xuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFyZ3NbMF07XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3QXJyYXkgPSB0YXJnZXQuc2xpY2UoMCk7XG4gICAgICAgIHJldHVyblZhbHVlID0gbmV3QXJyYXkuc3BsaWNlLmFwcGx5KG5ld0FycmF5LCBhcmdzKTtcbiAgICAgICAgZGF0YUNhY2hlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmF3ID0gaW1tdXRhYmxlU2V0KHRoaXMucmF3LCBleHByLnBhdGhzLCBuZXdBcnJheSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5maXJlKHtcbiAgICAgICAgICAgIGV4cHI6IGV4cHIsXG4gICAgICAgICAgICB0eXBlOiBEYXRhQ2hhbmdlVHlwZS5TUExJQ0UsXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICBkZWxldGVDb3VudDogcmV0dXJuVmFsdWUubGVuZ3RoLFxuICAgICAgICAgICAgdmFsdWU6IHJldHVyblZhbHVlLFxuICAgICAgICAgICAgaW5zZXJ0aW9uczogYXJncy5zbGljZSgyKSxcbiAgICAgICAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdGhpcy5jaGVja0RhdGFUeXBlcygpO1xuICAgIC8vICNbZW5kXVxuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7poblwdXNo5pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHsqfSBpdGVtIOimgXB1c2jnmoTlgLxcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICogQHJldHVybiB7bnVtYmVyfSDmlrDmlbDnu4TnmoRsZW5ndGjlsZ7mgKdcbiAqL1xuRGF0YS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChleHByLCBpdGVtLCBvcHRpb24pIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5nZXQoZXhwcik7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoZXhwciwgW3RhcmdldC5sZW5ndGgsIDAsIGl0ZW1dLCBvcHRpb24pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCArIDE7XG4gICAgfVxufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7poblwb3Dmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqIEByZXR1cm4geyp9XG4gKi9cbkRhdGEucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uIChleHByLCBvcHRpb24pIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5nZXQoZXhwcik7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGxlbiA9IHRhcmdldC5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNwbGljZShleHByLCBbbGVuIC0gMSwgMV0sIG9wdGlvbilbMF07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhuXNoaWZ05pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKiBAcmV0dXJuIHsqfVxuICovXG5EYXRhLnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uIChleHByLCBvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoZXhwciwgWzAsIDFdLCBvcHRpb24pWzBdO1xufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7pobl1bnNoaWZ05pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHsqfSBpdGVtIOimgXVuc2hpZnTnmoTlgLxcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICogQHJldHVybiB7bnVtYmVyfSDmlrDmlbDnu4TnmoRsZW5ndGjlsZ7mgKdcbiAqL1xuRGF0YS5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uIChleHByLCBpdGVtLCBvcHRpb24pIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5nZXQoZXhwcik7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoZXhwciwgWzAsIDAsIGl0ZW1dLCBvcHRpb24pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCArIDE7XG4gICAgfVxufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7pobnnp7vpmaTmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXgg6KaB56e76Zmk6aG555qE57Si5byVXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqL1xuRGF0YS5wcm90b3R5cGUucmVtb3ZlQXQgPSBmdW5jdGlvbiAoZXhwciwgaW5kZXgsIG9wdGlvbikge1xuICAgIHRoaXMuc3BsaWNlKGV4cHIsIFtpbmRleCwgMV0sIG9wdGlvbik7XG59O1xuXG4vKipcbiAqIOaVsOe7hOaVsOaNrumhueenu+mZpOaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUg6KaB56e76Zmk55qE6aG5XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqL1xuRGF0YS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGV4cHIsIHZhbHVlLCBvcHRpb24pIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5nZXQoZXhwcik7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGxlbiA9IHRhcmdldC5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgaWYgKHRhcmdldFtsZW5dID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BsaWNlKGV4cHIsIFtsZW4sIDFdLCBvcHRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gRGF0YTtcblxuXG4vKipcbiAqIEBmaWxlIOWjsOaYjuW8j+S6i+S7tueahOebkeWQrOWHveaVsFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgZXZhbEFyZ3MgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtYXJncycpO1xuLy8gdmFyIGZpbmRNZXRob2QgPSByZXF1aXJlKCcuLi9ydW50aW1lL2ZpbmQtbWV0aG9kJyk7XG4vLyB2YXIgRGF0YSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YScpO1xuXG4vKipcbiAqIOWjsOaYjuW8j+S6i+S7tueahOebkeWQrOWHveaVsFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudEJpbmQg57uR5a6a5L+h5oGv5a+56LGhXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ29tcG9uZW50RXZlbnQg5piv5ZCm57uE5Lu26Ieq5a6a5LmJ5LqL5Lu2XG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge0V2ZW50fSBlIOS6i+S7tuWvueixoVxuICovXG5mdW5jdGlvbiBldmVudERlY2xhcmF0aW9uTGlzdGVuZXIoZXZlbnRCaW5kLCBpc0NvbXBvbmVudEV2ZW50LCBkYXRhLCBlKSB7XG4gICAgdmFyIG1ldGhvZCA9IGZpbmRNZXRob2QodGhpcywgZXZlbnRCaW5kLmV4cHIubmFtZSwgZGF0YSk7XG5cbiAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgc2NvcGUgPSBuZXcgRGF0YShcbiAgICAgICAgICAgIHskZXZlbnQ6IGlzQ29tcG9uZW50RXZlbnQgPyBlIDogZSB8fCB3aW5kb3cuZXZlbnR9LFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICApO1xuICAgICAgICBtZXRob2QuYXBwbHkodGhpcywgZXZhbEFyZ3MoZXZlbnRCaW5kLmV4cHIuYXJncywgc2NvcGUsIHRoaXMpKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGV2ZW50RGVjbGFyYXRpb25MaXN0ZW5lcjtcblxuXG4vKipcbiAqIEBmaWxlIOiHqumXreWQiOagh+etvuihqFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIHNwbGl0U3RyMk9iaiA9IHJlcXVpcmUoJy4uL3V0aWwvc3BsaXQtc3RyLTItb2JqJyk7XG5cbi8qKlxuICog6Ieq6Zet5ZCI5qCH562+5YiX6KGoXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGhvdFRhZ3MgPSBzcGxpdFN0cjJPYmooJ2RpdixzcGFuLGlucHV0LGJ1dHRvbix0ZXh0YXJlYSxmb3JtLGxhYmVsLGRsLGR0LGRkLHVsLG9sLGxpLGEsYix1LGgxLGgyLGgzLGg0LGg1LGg2Jyk7XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGhvdFRhZ3M7XG5cblxuLyoqXG4gKiBAZmlsZSDmmK/lkKbmtY/op4jlmajnjq/looNcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaXNCcm93c2VyO1xuXG5cbi8qKlxuICogQGZpbGUgaW5zZXJ0QmVmb3JlIOaWueazleeahOWFvOWuueaAp+WwgeijhVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiBpbnNlcnRCZWZvcmUg5pa55rOV55qE5YW85a655oCn5bCB6KOFXG4gKlxuICogQHBhcmFtIHtIVE1MTm9kZX0gdGFyZ2V0RWwg6KaB5o+S5YWl55qE6IqC54K5XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnQ/fSBiZWZvcmVFbCDlnKjmraTlhYPntKDkuYvliY3mj5LlhaVcbiAqL1xuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKHRhcmdldEVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICBpZiAocGFyZW50RWwpIHtcbiAgICAgICAgaWYgKGJlZm9yZUVsKSB7XG4gICAgICAgICAgICBwYXJlbnRFbC5pbnNlcnRCZWZvcmUodGFyZ2V0RWwsIGJlZm9yZUVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKHRhcmdldEVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QmVmb3JlO1xuXG5cbi8qKlxuICogQGZpbGUg5Yik5pat5YWD57Sg5piv5ZCm5LiN5YWB6K646K6+572uSFRNTFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gc29tZSBodG1sIGVsZW1lbnRzIGNhbm5vdCBzZXQgaW5uZXJIVE1MIGluIG9sZCBpZVxuLy8gc2VlOiBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTMzODk3KFZTLjg1KS5hc3B4XG5cbi8qKlxuICog5Yik5pat5YWD57Sg5piv5ZCm5LiN5YWB6K646K6+572uSFRNTFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIOimgeWIpOaWreeahOWFg+e0oFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbm9TZXRIVE1MKGVsKSB7XG4gICAgcmV0dXJuIC9eKGNvbHxjb2xncm91cHxmcmFtZXNldHxzdHlsZXx0YWJsZXx0Ym9keXx0Zm9vdHx0aGVhZHx0cnxzZWxlY3QpJC9pLnRlc3QoZWwudGFnTmFtZSk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG5vU2V0SFRNTDtcblxuXG4vKipcbiAqIEBmaWxlICDojrflj5boioLngrkgc3R1bXAg55qEIGNvbW1lbnRcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBub1NldEhUTUwgPSByZXF1aXJlKCcuLi9icm93c2VyL25vLXNldC1odG1sJyk7XG5cbi8vICNbYmVnaW5dIGVycm9yXG4vKipcbiAqIOiOt+WPluiKgueCuSBzdHVtcCDnmoQgY29tbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIEhUTUzlhYPntKBcbiAqL1xuZnVuY3Rpb24gd2FyblNldEhUTUwoZWwpIHtcbiAgICAvLyBkb250IHdhcm4gaWYgbm90IGluIGJyb3dzZXIgcnVudGltZVxuICAgIGlmICghKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNvbWUgaHRtbCBlbGVtZW50cyBjYW5ub3Qgc2V0IGlubmVySFRNTCBpbiBvbGQgaWVcbiAgICAvLyBzZWU6IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzM4OTcoVlMuODUpLmFzcHhcbiAgICBpZiAobm9TZXRIVE1MKGVsKSkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9ICdbU0FOIFdBUk5JTkddIHNldCBodG1sIGZvciBlbGVtZW50IFwiJyArIGVsLnRhZ05hbWVcbiAgICAgICAgICAgICsgJ1wiIG1heSBjYXVzZSBhbiBlcnJvciBpbiBvbGQgSUUnO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgfVxufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHdhcm5TZXRIVE1MO1xuXG5cbi8qKlxuICogQGZpbGUg5Yik5pat5piv5ZCm57uT5p2f5qGpXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyAjW2JlZ2luXSByZXZlcnNlXG4vKipcbiAqIOWIpOaWreaYr+WQpue7k+adn+ahqVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8SFRNTENvbW1lbnR9IHRhcmdldCDopoHliKTmlq3nmoTlhYPntKBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIOahqeexu+Wei1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNFbmRTdHVtcCh0YXJnZXQsIHR5cGUpIHtcbiAgICByZXR1cm4gdGFyZ2V0Lm5vZGVUeXBlID09PSA4ICYmIHRhcmdldC5kYXRhID09PSAnL3MtJyArIHR5cGU7XG59XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaXNFbmRTdHVtcDtcblxuXG4vKipcbiAqIEBmaWxlIOiOt+WPluiKgueCueWcqOe7hOS7tuagkeS4reeahOi3r+W+hFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuXG4vLyAjW2JlZ2luXSByZXZlcnNlXG4vKipcbiAqIOiOt+WPluiKgueCueWcqOe7hOS7tuagkeS4reeahOi3r+W+hFxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSDoioLngrnlr7nosaFcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBnZXROb2RlUGF0aChub2RlKSB7XG4gICAgdmFyIG5vZGVQYXRocyA9IFtdO1xuICAgIHZhciBub2RlUGFyZW50ID0gbm9kZTtcbiAgICB3aGlsZSAobm9kZVBhcmVudCkge1xuICAgICAgICBzd2l0Y2ggKG5vZGVQYXJlbnQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuRUxFTTpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdChub2RlUGFyZW50LnRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE5vZGVUeXBlLklGOlxuICAgICAgICAgICAgICAgIG5vZGVQYXRocy51bnNoaWZ0KCdpZicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE5vZGVUeXBlLkZPUjpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgnZm9yWycgKyBub2RlUGFyZW50LmFub2RlLmRpcmVjdGl2ZXNbJ2ZvciddLnJhdyArICddJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuU0xPVDpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgnc2xvdFsnICsgKG5vZGVQYXJlbnQubmFtZSB8fCAnZGVmYXVsdCcpICsgJ10nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBOb2RlVHlwZS5UUEw6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuQ01QVDpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgnY29tcG9uZW50WycgKyAobm9kZVBhcmVudC5zdWJUYWcgfHwgJ3Jvb3QnKSArICddJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuVEVYVDpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgndGV4dCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZVBhcmVudCA9IG5vZGVQYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBub2RlUGF0aHM7XG59XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ2V0Tm9kZVBhdGg7XG5cblxuLyoqXG4gKiBAZmlsZSB0ZXh0IOiKgueCueexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGlzQnJvd3NlciA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaXMtYnJvd3NlcicpO1xuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciBjaGFuZ2VFeHByQ29tcGFyZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgd2FyblNldEhUTUwgPSByZXF1aXJlKCcuL3dhcm4tc2V0LWh0bWwnKTtcbi8vIHZhciBpc0VuZFN0dW1wID0gcmVxdWlyZSgnLi9pcy1lbmQtc3R1bXAnKTtcbi8vIHZhciBnZXROb2RlUGF0aCA9IHJlcXVpcmUoJy4vZ2V0LW5vZGUtcGF0aCcpO1xuXG5cbi8qKlxuICogdGV4dCDoioLngrnnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBUZXh0Tm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpIHtcbiAgICB0aGlzLmFOb2RlID0gYU5vZGU7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAocmV2ZXJzZVdhbGtlcikge1xuICAgICAgICB2YXIgY3VycmVudE5vZGUgPSByZXZlcnNlV2Fsa2VyLmN1cnJlbnQ7XG4gICAgICAgIGlmIChjdXJyZW50Tm9kZSkge1xuICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50Tm9kZS5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlLmRhdGEgPT09ICdzLXRleHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbCA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUuZGF0YSA9IHRoaXMuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyLmdvTmV4dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSByZXZlcnNlV2Fsa2VyLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gUkVWRVJTRSBFUlJPUl0gVGV4dCBlbmQgZmxhZyBub3QgZm91bmQuIFxcblBhdGhzOiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGdldE5vZGVQYXRoKHRoaXMpLmpvaW4oJyA+ICcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFbmRTdHVtcChjdXJyZW50Tm9kZSwgJ3RleHQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsID0gY3VycmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXIuZ29OZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLmRhdGEgPSB0aGlzLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyLmdvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyLmdvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYU5vZGUudGV4dEV4cHIub3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWwgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblRleHROb2RlLnByb3RvdHlwZS5ub2RlVHlwZSA9IE5vZGVUeXBlLlRFWFQ7XG5cbi8qKlxuICog5bCGdGV4dCBhdHRhY2jliLDpobXpnaJcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDopoHmt7vliqDliLDnmoTniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnTvvJ19IGJlZm9yZUVsIOimgea3u+WKoOWIsOWTquS4quWFg+e0oOS5i+WJjVxuICovXG5UZXh0Tm9kZS5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIHRoaXMuY29udGVudCA9IGV2YWxFeHByKHRoaXMuYU5vZGUudGV4dEV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuXG4gICAgaWYgKHRoaXMuYU5vZGUudGV4dEV4cHIub3JpZ2luYWwpIHtcbiAgICAgICAgdGhpcy5zZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5zZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuXG4gICAgICAgIHZhciB0ZW1wRmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBwYXJlbnRFbC5pbnNlcnRCZWZvcmUodGVtcEZsYWcsIHRoaXMuZWwpO1xuICAgICAgICB0ZW1wRmxhZy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgdGhpcy5jb250ZW50KTtcbiAgICAgICAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEZsYWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuY29udGVudCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuICAgIH1cbn07XG5cbi8qKlxuICog6ZSA5q+BIHRleHQg6IqC54K5XG4gKi9cblRleHROb2RlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3ByZXYgPSBudWxsO1xuICAgIHRoaXMuZWwgPSBudWxsO1xuICAgIHRoaXMuc2VsID0gbnVsbDtcbn07XG5cbnZhciB0ZXh0VXBkYXRlUHJvcCA9IGlzQnJvd3NlclxuICAgICYmICh0eXBlb2YgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpLnRleHRDb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/ICd0ZXh0Q29udGVudCdcbiAgICAgICAgOiAnZGF0YScpO1xuXG4vKipcbiAqIOabtOaWsCB0ZXh0IOiKgueCueeahOinhuWbvlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cblRleHROb2RlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5hTm9kZS50ZXh0RXhwci52YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxlbiA9IGNoYW5nZXMgPyBjaGFuZ2VzLmxlbmd0aCA6IDA7XG4gICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VzW2xlbl0uZXhwciwgdGhpcy5hTm9kZS50ZXh0RXhwciwgdGhpcy5zY29wZSkpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gZXZhbEV4cHIodGhpcy5hTm9kZS50ZXh0RXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICAgICAgICAgIGlmICh0ZXh0ICE9PSB0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB0ZXh0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYU5vZGUudGV4dEV4cHIub3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0UmVtb3ZlRWwgPSB0aGlzLnNlbC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudEVsID0gdGhpcy5lbC5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChzdGFydFJlbW92ZUVsICE9PSB0aGlzLmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlVGFyZ2V0ID0gc3RhcnRSZW1vdmVFbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0UmVtb3ZlRWwgPSBzdGFydFJlbW92ZUVsLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWwocmVtb3ZlVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIHdhcm5TZXRIVE1MKHBhcmVudEVsKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsLmluc2VydEJlZm9yZSh0ZW1wRmxhZywgdGhpcy5lbCk7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBGbGFnLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCB0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEZsYWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbFt0ZXh0VXBkYXRlUHJvcF0gPSB0ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gVGV4dE5vZGU7XG5cblxuLyoqXG4gKiBAZmlsZSDliKTmlq3lj5jmm7TmlbDnu4TmmK/lkKblvbHlk43liLDmlbDmja7lvJXnlKjmkZjopoFcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLyoqXG4gKiDliKTmlq3lj5jmm7TmlbDnu4TmmK/lkKblvbHlk43liLDmlbDmja7lvJXnlKjmkZjopoFcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOWPmOabtOaVsOe7hFxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFSZWYg5pWw5o2u5byV55So5pGY6KaBXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjaGFuZ2VzSXNJbkRhdGFSZWYoY2hhbmdlcywgZGF0YVJlZikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hhbmdlID0gY2hhbmdlc1tpXTtcblxuICAgICAgICBpZiAoIWNoYW5nZS5vdmVydmlldykge1xuICAgICAgICAgICAgdmFyIHBhdGhzID0gY2hhbmdlLmV4cHIucGF0aHM7XG4gICAgICAgICAgICBjaGFuZ2Uub3ZlcnZpZXcgPSBwYXRoc1swXS52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UuZXh0T3ZlcnZpZXcgPSBwYXRoc1swXS52YWx1ZSArICcuJyArIHBhdGhzWzFdLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNoYW5nZS53aWxkT3ZlcnZpZXcgPSBwYXRoc1swXS52YWx1ZSArICcuKic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YVJlZltjaGFuZ2Uub3ZlcnZpZXddXG4gICAgICAgICAgICB8fCBjaGFuZ2Uud2lsZE92ZXJ2aWV3ICYmIGRhdGFSZWZbY2hhbmdlLndpbGRPdmVydmlld11cbiAgICAgICAgICAgIHx8IGNoYW5nZS5leHRPdmVydmlldyAmJiBkYXRhUmVmW2NoYW5nZS5leHRPdmVydmlld11cbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY2hhbmdlc0lzSW5EYXRhUmVmO1xuXG5cbi8qKlxuICogQGZpbGUg5YWD57Sg5a2Q6IqC54K56YGN5Y6G5pON5L2c57G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgcmVtb3ZlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuXG4vLyAjW2JlZ2luXSByZXZlcnNlXG4vKipcbiAqIOWFg+e0oOWtkOiKgueCuemBjeWOhuaTjeS9nOexu1xuICpcbiAqIEBpbm5lclxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCDopoHpgY3ljobnmoTlhYPntKBcbiAqL1xuZnVuY3Rpb24gRE9NQ2hpbGRyZW5XYWxrZXIoZWwpIHtcbiAgICB0aGlzLnJhdyA9IFtdO1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMudGFyZ2V0ID0gZWw7XG5cbiAgICB2YXIgY2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICAgIHZhciBuZXh0O1xuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgc3dpdGNoIChjaGlsZC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICgvXlxccyokLy50ZXN0KGNoaWxkLmRhdGEgfHwgY2hpbGQudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmF3LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIHRoaXMucmF3LnB1c2goY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudCA9IHRoaXMucmF3W3RoaXMuaW5kZXhdO1xuICAgIHRoaXMubmV4dCA9IHRoaXMucmF3W3RoaXMuaW5kZXggKyAxXTtcbn1cblxuLyoqXG4gKiDlvoDkuIvotbDkuIDkuKrlhYPntKBcbiAqL1xuRE9NQ2hpbGRyZW5XYWxrZXIucHJvdG90eXBlLmdvTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnJhd1srK3RoaXMuaW5kZXhdO1xuICAgIHRoaXMubmV4dCA9IHRoaXMucmF3W3RoaXMuaW5kZXggKyAxXTtcbn07XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gRE9NQ2hpbGRyZW5XYWxrZXI7XG5cblxuLyoqXG4gKiBAZmlsZSDlhYPntKDoioLngrnnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgcmVtb3ZlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gdmFyIGNoYW5nZUV4cHJDb21wYXJlID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2UtZXhwci1jb21wYXJlJyk7XG4vLyB2YXIgY2hhbmdlc0lzSW5EYXRhUmVmID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2VzLWlzLWluLWRhdGEtcmVmJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciByZXZlcnNlRWxlbWVudENoaWxkcmVuID0gcmVxdWlyZSgnLi9yZXZlcnNlLWVsZW1lbnQtY2hpbGRyZW4nKTtcbi8vIHZhciBpc0RhdGFDaGFuZ2VCeUVsZW1lbnQgPSByZXF1aXJlKCcuL2lzLWRhdGEtY2hhbmdlLWJ5LWVsZW1lbnQnKTtcbi8vIHZhciBlbGVtZW50VXBkYXRlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtdXBkYXRlLWNoaWxkcmVuJyk7XG4vLyB2YXIgZWxlbWVudE93bkNyZWF0ZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tY3JlYXRlJyk7XG4vLyB2YXIgZWxlbWVudE93bkF0dGFjaCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tYXR0YWNoJyk7XG4vLyB2YXIgZWxlbWVudE93bkRldGFjaCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tZGV0YWNoJyk7XG4vLyB2YXIgZWxlbWVudE93bkRpc3Bvc2UgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWRpc3Bvc2UnKTtcbi8vIHZhciBlbGVtZW50T3duT25FbCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tb24tZWwnKTtcbi8vIHZhciBlbGVtZW50T3duVG9QaGFzZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tdG8tcGhhc2UnKTtcbi8vIHZhciBlbGVtZW50T3duQXR0YWNoZWQgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWF0dGFjaGVkJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2UgPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZScpO1xuLy8gdmFyIGVsZW1lbnRJbml0VGFnTmFtZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1pbml0LXRhZy1uYW1lJyk7XG4vLyB2YXIgaGFuZGxlUHJvcCA9IHJlcXVpcmUoJy4vaGFuZGxlLXByb3AnKTtcbi8vIHZhciB3YXJuU2V0SFRNTCA9IHJlcXVpcmUoJy4vd2Fybi1zZXQtaHRtbCcpO1xuLy8gdmFyIGdldE5vZGVQYXRoID0gcmVxdWlyZSgnLi9nZXQtbm9kZS1wYXRoJyk7XG5cbi8qKlxuICog5YWD57Sg6IqC54K557G7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtNb2RlbD19IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQg54i25Lqy6IqC54K5XG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyP30gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqL1xuZnVuY3Rpb24gRWxlbWVudChhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpIHtcbiAgICB0aGlzLmFOb2RlID0gYU5vZGU7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLnN0YXJ0O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9lbEZucyA9IFtdO1xuICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUXG4gICAgICAgID8gcGFyZW50XG4gICAgICAgIDogcGFyZW50LnBhcmVudENvbXBvbmVudDtcblxuICAgIHRoaXMuaWQgPSBndWlkKCk7XG5cbiAgICBlbGVtZW50SW5pdFRhZ05hbWUodGhpcyk7XG5cbiAgICB0aGlzLl90b1BoYXNlKCdpbml0ZWQnKTtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAocmV2ZXJzZVdhbGtlcikge1xuICAgICAgICB2YXIgY3VycmVudE5vZGUgPSByZXZlcnNlV2Fsa2VyLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKCFjdXJyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIFJFVkVSU0UgRVJST1JdIEVsZW1lbnQgbm90IGZvdW5kLiBcXG5QYXRoczogJ1xuICAgICAgICAgICAgICAgICsgZ2V0Tm9kZVBhdGgodGhpcykuam9pbignID4gJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gUkVWRVJTRSBFUlJPUl0gRWxlbWVudCB0eXBlIG5vdCBtYXRjaCwgZXhwZWN0IDEgYnV0ICdcbiAgICAgICAgICAgICAgICArIGN1cnJlbnROb2RlLm5vZGVUeXBlICsgJy5cXG5QYXRoczogJ1xuICAgICAgICAgICAgICAgICsgZ2V0Tm9kZVBhdGgodGhpcykuam9pbignID4gJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGhpcy50YWdOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gUkVWRVJTRSBFUlJPUl0gRWxlbWVudCB0YWdOYW1lIG5vdCBtYXRjaCwgZXhwZWN0ICdcbiAgICAgICAgICAgICAgICArIHRoaXMudGFnTmFtZSArICcgYnV0IG1lYXQgJyArIGN1cnJlbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSArICcuXFxuUGF0aHM6ICdcbiAgICAgICAgICAgICAgICArIGdldE5vZGVQYXRoKHRoaXMpLmpvaW4oJyA+ICcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgcmV2ZXJzZVdhbGtlci5nb05leHQoKTtcblxuICAgICAgICByZXZlcnNlRWxlbWVudENoaWxkcmVuKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2F0dGFjaGVkKCk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5cblxuRWxlbWVudC5wcm90b3R5cGUubm9kZVR5cGUgPSBOb2RlVHlwZS5FTEVNO1xuXG5cbkVsZW1lbnQucHJvdG90eXBlLmF0dGFjaCA9IGVsZW1lbnRPd25BdHRhY2g7XG5FbGVtZW50LnByb3RvdHlwZS5kZXRhY2ggPSBlbGVtZW50T3duRGV0YWNoO1xuRWxlbWVudC5wcm90b3R5cGUuZGlzcG9zZSA9IGVsZW1lbnRPd25EaXNwb3NlO1xuRWxlbWVudC5wcm90b3R5cGUuX2NyZWF0ZSA9IGVsZW1lbnRPd25DcmVhdGU7XG5FbGVtZW50LnByb3RvdHlwZS5fdG9QaGFzZSA9IGVsZW1lbnRPd25Ub1BoYXNlO1xuRWxlbWVudC5wcm90b3R5cGUuX29uRWwgPSBlbGVtZW50T3duT25FbDtcblxuRWxlbWVudC5wcm90b3R5cGUuX2RvbmVMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5sZWF2ZURpc3Bvc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpZmVDeWNsZS5kaXNwb3NlZCkge1xuICAgICAgICAgICAgZWxlbWVudERpc3Bvc2UoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2VOb0RldGFjaCxcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2VOb1RyYW5zaXRpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5saWZlQ3ljbGUuYXR0YWNoZWQpIHtcbiAgICAgICAgcmVtb3ZlRWwodGhpcy5lbCk7XG4gICAgICAgIHRoaXMuX3RvUGhhc2UoJ2RldGFjaGVkJyk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDop4blm77mm7TmlrBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5FbGVtZW50LnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICBpZiAoIWNoYW5nZXNJc0luRGF0YVJlZihjaGFuZ2VzLCB0aGlzLmFOb2RlLmhvdHNwb3QuZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICB2YXIgZHluYW1pY1Byb3BzID0gdGhpcy5hTm9kZS5ob3RzcG90LmR5bmFtaWNQcm9wcztcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGR5bmFtaWNQcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3AgPSBkeW5hbWljUHJvcHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGNoYW5nZUxlbiA9IGNoYW5nZXMubGVuZ3RoOyBqIDwgY2hhbmdlTGVuOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2pdO1xuXG4gICAgICAgICAgICBpZiAoIWlzRGF0YUNoYW5nZUJ5RWxlbWVudChjaGFuZ2UsIHRoaXMsIHByb3AubmFtZSlcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCBwcm9wLmV4cHIsIHRoaXMuc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgIHx8IHByb3AuaGludEV4cHIgJiYgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHByb3AuaGludEV4cHIsIHRoaXMuc2NvcGUpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlUHJvcCh0aGlzLCBldmFsRXhwcihwcm9wLmV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpLCBwcm9wKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBodG1sRGlyZWN0aXZlID0gdGhpcy5hTm9kZS5kaXJlY3RpdmVzLmh0bWw7XG4gICAgaWYgKGh0bWxEaXJlY3RpdmUpIHtcbiAgICAgICAgZWFjaChjaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIGh0bWxEaXJlY3RpdmUudmFsdWUsIG1lLnNjb3BlKSkge1xuICAgICAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICAgICAgd2FyblNldEhUTUwobWUuZWwpO1xuICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuICAgICAgICAgICAgICAgIG1lLmVsLmlubmVySFRNTCA9IGV2YWxFeHByKGh0bWxEaXJlY3RpdmUudmFsdWUsIG1lLnNjb3BlLCBtZS5vd25lcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsZW1lbnRVcGRhdGVDaGlsZHJlbih0aGlzLCBjaGFuZ2VzKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOaJp+ihjOWujOaIkGF0dGFjaGVk54q25oCB55qE6KGM5Li6XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLl9hdHRhY2hlZCA9IGVsZW1lbnRPd25BdHRhY2hlZDtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuXG4vKipcbiAqIEBmaWxlIOmUgOavgeiKgueCue+8jOa4heepuuiKgueCueS4iueahOaXoOeUqOaIkOWRmFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vKipcbiAqIOmUgOavgeiKgueCuVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIOiKgueCueWvueixoVxuICovXG5mdW5jdGlvbiBub2RlRGlzcG9zZShub2RlKSB7XG4gICAgbm9kZS5lbCA9IG51bGw7XG4gICAgbm9kZS5zZWwgPSBudWxsO1xuICAgIG5vZGUub3duZXIgPSBudWxsO1xuICAgIG5vZGUuc2NvcGUgPSBudWxsO1xuICAgIG5vZGUuYU5vZGUgPSBudWxsO1xuICAgIG5vZGUucGFyZW50ID0gbnVsbDtcbiAgICBub2RlLnBhcmVudENvbXBvbmVudCA9IG51bGw7XG4gICAgbm9kZS5jaGlsZHJlbiA9IG51bGw7XG5cbiAgICBpZiAobm9kZS5fdG9QaGFzZSkge1xuICAgICAgICBub2RlLl90b1BoYXNlKCdkaXNwb3NlZCcpO1xuICAgIH1cblxuICAgIGlmIChub2RlLl9vbmRpc3Bvc2VkKSB7XG4gICAgICAgIG5vZGUuX29uZGlzcG9zZWQoKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG5vZGVEaXNwb3NlO1xuXG5cbi8qKlxuICogQGZpbGUg6YCa6L+H57uE5Lu25Y+N6Kej5Yib5bu66IqC54K555qE5bel5Y6C5pa55rOVXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgaG90VGFncyA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaG90LXRhZ3MnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgVGV4dE5vZGUgPSByZXF1aXJlKCcuL3RleHQtbm9kZScpO1xuLy8gdmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcbi8vIHZhciBTbG90Tm9kZSA9IHJlcXVpcmUoJy4vc2xvdC1ub2RlJyk7XG4vLyB2YXIgRm9yTm9kZSA9IHJlcXVpcmUoJy4vZm9yLW5vZGUnKTtcbi8vIHZhciBJZk5vZGUgPSByZXF1aXJlKCcuL2lmLW5vZGUnKTtcbi8vIHZhciBUZW1wbGF0ZU5vZGUgPSByZXF1aXJlKCcuL3RlbXBsYXRlLW5vZGUnKTtcblxuLy8gI1tiZWdpbl0gcmV2ZXJzZVxuLyoqXG4gKiDpgJrov4fnu4Tku7blj43op6PliJvlu7roioLngrlcbiAqXG4gKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXJ9IHJldmVyc2VXYWxrZXIg5a2Q5YWD57Sg6YGN5Y6G5a+56LGhXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7TW9kZWw9fSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEByZXR1cm4ge05vZGV9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJldmVyc2VOb2RlKGFOb2RlLCByZXZlcnNlV2Fsa2VyLCBwYXJlbnQsIHNjb3BlKSB7XG4gICAgdmFyIHBhcmVudElzQ29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUO1xuICAgIHZhciBvd25lciA9IHBhcmVudElzQ29tcG9uZW50ID8gcGFyZW50IDogKHBhcmVudC5jaGlsZE93bmVyIHx8IHBhcmVudC5vd25lcik7XG4gICAgc2NvcGUgPSBzY29wZSB8fCAocGFyZW50SXNDb21wb25lbnQgPyBwYXJlbnQuZGF0YSA6IChwYXJlbnQuY2hpbGRTY29wZSB8fCBwYXJlbnQuc2NvcGUpKTtcblxuICAgIGlmIChhTm9kZS50ZXh0RXhwcikge1xuICAgICAgICByZXR1cm4gbmV3IFRleHROb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcik7XG4gICAgfVxuXG4gICAgaWYgKGFOb2RlLmRpcmVjdGl2ZXNbJ2lmJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBJZk5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKTtcbiAgICB9XG5cbiAgICBpZiAoYU5vZGUuZGlyZWN0aXZlc1snZm9yJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBGb3JOb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcik7XG4gICAgfVxuXG4gICAgaWYgKGhvdFRhZ3NbYU5vZGUudGFnTmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcik7XG4gICAgfVxuXG4gICAgc3dpdGNoIChhTm9kZS50YWdOYW1lKSB7XG4gICAgICAgIGNhc2UgJ3Nsb3QnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbG90Tm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpO1xuXG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGVtcGxhdGVOb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcik7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciBDb21wb25lbnRUeXBlID0gb3duZXIuZ2V0Q29tcG9uZW50VHlwZShhTm9kZSk7XG4gICAgICAgICAgICBpZiAoQ29tcG9uZW50VHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29tcG9uZW50VHlwZSh7XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlOiBhTm9kZSxcbiAgICAgICAgICAgICAgICAgICAgb3duZXI6IG93bmVyLFxuICAgICAgICAgICAgICAgICAgICBzY29wZTogc2NvcGUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBzdWJUYWc6IGFOb2RlLnRhZ05hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXI6IHJldmVyc2VXYWxrZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKTtcbn1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSZXZlcnNlTm9kZTtcblxuXG4vKipcbiAqIEBmaWxlIOmUgOavgemHiuaUvuWFg+e0oOeahOWtkOWFg+e0oFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDplIDmr4Hph4rmlL7lhYPntKDnmoTlrZDlhYPntKBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKDoioLngrlcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vRGV0YWNoIOaYr+WQpuS4jeimgeaKiuiKgueCueS7jmRvbeenu+mZpFxuICogQHBhcmFtIHtib29sZWFuPX0gbm9UcmFuc2l0aW9uIOaYr+WQpuS4jeaYvuekuui/h+a4oeWKqOeUu+aViOaenFxuICovXG5mdW5jdGlvbiBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKGVsZW1lbnQsIG5vRGV0YWNoLCBub1RyYW5zaXRpb24pIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkcmVuO1xuICAgIHZhciBsZW4gPSBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgIGNoaWxkcmVuW2xlbl0uZGlzcG9zZShub0RldGFjaCwgbm9UcmFuc2l0aW9uKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnREaXNwb3NlQ2hpbGRyZW47XG5cblxuLyoqXG4gKiBAZmlsZSDmm7TmlrDlhYPntKDnmoTlrZDlhYPntKDop4blm75cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLyoqXG4gKiDmm7TmlrDlhYPntKDnmoTlrZDlhYPntKDop4blm75cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDopoHmm7TmlrDnmoTlhYPntKBcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRVcGRhdGVDaGlsZHJlbihlbGVtZW50LCBjaGFuZ2VzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLl91cGRhdGUoY2hhbmdlcyk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50VXBkYXRlQ2hpbGRyZW47XG5cblxuLyoqXG4gKiBAZmlsZSDkvb/lhYPntKDoioLngrnliLDovr7nm7jlupTnmoTnlJ/lkb3lkajmnJ9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuXG4vKipcbiAqIOS9v+WFg+e0oOiKgueCueWIsOi+vuebuOW6lOeahOeUn+WRveWRqOacn1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOeUn+WRveWRqOacn+WQjeensFxuICovXG5mdW5jdGlvbiBlbGVtZW50T3duVG9QaGFzZShuYW1lKSB7XG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGVbbmFtZV0gfHwgdGhpcy5saWZlQ3ljbGU7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRPd25Ub1BoYXNlO1xuXG5cbi8qKlxuICogQGZpbGUg5Yib5bu66IqC54K555qE5bel5Y6C5pa55rOVXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgaG90VGFncyA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaG90LXRhZ3MnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgVGV4dE5vZGUgPSByZXF1aXJlKCcuL3RleHQtbm9kZScpO1xuLy8gdmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcbi8vIHZhciBTbG90Tm9kZSA9IHJlcXVpcmUoJy4vc2xvdC1ub2RlJyk7XG4vLyB2YXIgRm9yTm9kZSA9IHJlcXVpcmUoJy4vZm9yLW5vZGUnKTtcbi8vIHZhciBJZk5vZGUgPSByZXF1aXJlKCcuL2lmLW5vZGUnKTtcbi8vIHZhciBUZW1wbGF0ZU5vZGUgPSByZXF1aXJlKCcuL3RlbXBsYXRlLW5vZGUnKTtcblxuXG4vKipcbiAqIOWIm+W7uuiKgueCuVxuICpcbiAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQg54i25Lqy6IqC54K5XG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcmV0dXJuIHtOb2RlfVxuICovXG5mdW5jdGlvbiBjcmVhdGVOb2RlKGFOb2RlLCBwYXJlbnQsIHNjb3BlKSB7XG4gICAgdmFyIHBhcmVudElzQ29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUO1xuICAgIHZhciBvd25lciA9IHBhcmVudElzQ29tcG9uZW50ID8gcGFyZW50IDogKHBhcmVudC5jaGlsZE93bmVyIHx8IHBhcmVudC5vd25lcik7XG4gICAgc2NvcGUgPSBzY29wZSB8fCAocGFyZW50SXNDb21wb25lbnQgPyBwYXJlbnQuZGF0YSA6IChwYXJlbnQuY2hpbGRTY29wZSB8fCBwYXJlbnQuc2NvcGUpKTtcblxuXG4gICAgaWYgKGFOb2RlLnRleHRFeHByKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGV4dE5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoYU5vZGUuZGlyZWN0aXZlc1snaWYnXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICByZXR1cm4gbmV3IElmTm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChhTm9kZS5kaXJlY3RpdmVzWydmb3InXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICByZXR1cm4gbmV3IEZvck5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaG90VGFnc1thTm9kZS50YWdOYW1lXSkge1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50KTtcbiAgICB9XG5cblxuXG4gICAgc3dpdGNoIChhTm9kZS50YWdOYW1lKSB7XG4gICAgICAgIGNhc2UgJ3Nsb3QnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbG90Tm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQpO1xuXG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGVtcGxhdGVOb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciBDb21wb25lbnRUeXBlID0gb3duZXIuZ2V0Q29tcG9uZW50VHlwZShhTm9kZSk7XG4gICAgICAgICAgICBpZiAoQ29tcG9uZW50VHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29tcG9uZW50VHlwZSh7XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlOiBhTm9kZSxcbiAgICAgICAgICAgICAgICAgICAgb3duZXI6IG93bmVyLFxuICAgICAgICAgICAgICAgICAgICBzY29wZTogc2NvcGUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICBzdWJUYWc6IGFOb2RlLnRhZ05hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50KTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTm9kZTtcblxuXG4vKipcbiAqIEBmaWxlIOeUn+aIkOWtkOWFg+e0oFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGNyZWF0ZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1ub2RlJyk7XG5cbi8qKlxuICog55Sf5oiQ5a2Q5YWD57SgXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IOWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuZnVuY3Rpb24gZ2VuRWxlbWVudENoaWxkcmVuKGVsZW1lbnQsIHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIHBhcmVudEVsID0gcGFyZW50RWwgfHwgZWxlbWVudC5lbDtcblxuICAgIHZhciBhTm9kZUNoaWxkcmVuID0gZWxlbWVudC5hTm9kZS5jaGlsZHJlbjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFOb2RlQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY3JlYXRlTm9kZShhTm9kZUNoaWxkcmVuW2ldLCBlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgY2hpbGQuYXR0YWNoKHBhcmVudEVsLCBiZWZvcmVFbCk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBnZW5FbGVtZW50Q2hpbGRyZW47XG5cblxuLyoqXG4gKiBAZmlsZSDlsIbmsqHmnIkgcm9vdCDlj6rmnIkgY2hpbGRyZW4g55qE5YWD57SgIGF0dGFjaCDliLDpobXpnaJcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIGdlbkVsZW1lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZ2VuLWVsZW1lbnQtY2hpbGRyZW4nKTtcblxuXG4vKipcbiAqIOWwhuayoeaciSByb290IOWPquaciSBjaGlsZHJlbiDnmoTlhYPntKAgYXR0YWNoIOWIsOmhtemdolxuICog5Li76KaB55So5LqOIHNsb3Qg5ZKMIHRlbXBsYXRlXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuZnVuY3Rpb24gbm9kZU93bk9ubHlDaGlsZHJlbkF0dGFjaChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICB0aGlzLnNlbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgaW5zZXJ0QmVmb3JlKHRoaXMuc2VsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuXG4gICAgZ2VuRWxlbWVudENoaWxkcmVuKHRoaXMsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgIHRoaXMuX3RvUGhhc2UoJ2F0dGFjaGVkJyk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2g7XG5cblxuLyoqXG4gKiBAZmlsZSBzbG90IOiKgueCueexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgY3JlYXRlQU5vZGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvY3JlYXRlLWEtbm9kZScpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBEYXRhID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhJyk7XG4vLyB2YXIgRGF0YUNoYW5nZVR5cGUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEtY2hhbmdlLXR5cGUnKTtcbi8vIHZhciBjaGFuZ2VFeHByQ29tcGFyZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL2xpZmUtY3ljbGUnKTtcbi8vIHZhciBnZXRBTm9kZVByb3AgPSByZXF1aXJlKCcuL2dldC1hLW5vZGUtcHJvcCcpO1xuLy8gdmFyIG5vZGVEaXNwb3NlID0gcmVxdWlyZSgnLi9ub2RlLWRpc3Bvc2UnKTtcbi8vIHZhciBjcmVhdGVSZXZlcnNlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLXJldmVyc2Utbm9kZScpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuLy8gdmFyIGVsZW1lbnRVcGRhdGVDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC11cGRhdGUtY2hpbGRyZW4nKTtcbi8vIHZhciBlbGVtZW50T3duVG9QaGFzZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tdG8tcGhhc2UnKTtcbi8vIHZhciBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoID0gcmVxdWlyZSgnLi9ub2RlLW93bi1vbmx5LWNoaWxkcmVuLWF0dGFjaCcpO1xuXG5cbi8qKlxuICogc2xvdCDoioLngrnnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBTbG90Tm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpIHtcbiAgICB2YXIgcmVhbEFOb2RlID0gY3JlYXRlQU5vZGUoKTtcbiAgICB0aGlzLmFOb2RlID0gcmVhbEFOb2RlO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5wYXJlbnRDb21wb25lbnQgPSBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFRcbiAgICAgICAgPyBwYXJlbnRcbiAgICAgICAgOiBwYXJlbnQucGFyZW50Q29tcG9uZW50O1xuXG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcblxuICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLnN0YXJ0O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIC8vIGNhbGMgc2xvdCBuYW1lXG4gICAgdGhpcy5uYW1lQmluZCA9IGdldEFOb2RlUHJvcChhTm9kZSwgJ25hbWUnKTtcbiAgICBpZiAodGhpcy5uYW1lQmluZCkge1xuICAgICAgICB0aGlzLmlzTmFtZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm5hbWUgPSBldmFsRXhwcih0aGlzLm5hbWVCaW5kLmV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgIH1cblxuICAgIC8vIGNhbGMgYU5vZGUgY2hpbGRyZW5cbiAgICB2YXIgZ2l2ZW5TbG90cyA9IG93bmVyLmdpdmVuU2xvdHM7XG4gICAgdmFyIGdpdmVuQ2hpbGRyZW47XG4gICAgaWYgKGdpdmVuU2xvdHMpIHtcbiAgICAgICAgZ2l2ZW5DaGlsZHJlbiA9IHRoaXMuaXNOYW1lZCA/IGdpdmVuU2xvdHMubmFtZWRbdGhpcy5uYW1lXSA6IGdpdmVuU2xvdHMubm9uYW1lO1xuICAgIH1cblxuICAgIGlmIChnaXZlbkNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuaXNJbnNlcnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVhbEFOb2RlLmNoaWxkcmVuID0gZ2l2ZW5DaGlsZHJlbiB8fCBhTm9kZS5jaGlsZHJlbi5zbGljZSgwKTtcblxuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICAvLyBjYWxjIHNjb3BlZCBzbG90IHZhcnNcbiAgICByZWFsQU5vZGUudmFycyA9IGFOb2RlLnZhcnM7XG4gICAgdmFyIGluaXREYXRhID0ge307XG4gICAgZWFjaChyZWFsQU5vZGUudmFycywgZnVuY3Rpb24gKHZhckl0ZW0pIHtcbiAgICAgICAgbWUuaXNTY29wZWQgPSB0cnVlO1xuICAgICAgICBpbml0RGF0YVt2YXJJdGVtLm5hbWVdID0gZXZhbEV4cHIodmFySXRlbS5leHByLCBzY29wZSwgb3duZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gY2hpbGQgb3duZXIgJiBjaGlsZCBzY29wZVxuICAgIGlmICh0aGlzLmlzSW5zZXJ0ZWQpIHtcbiAgICAgICAgdGhpcy5jaGlsZE93bmVyID0gb3duZXIub3duZXI7XG4gICAgICAgIHRoaXMuY2hpbGRTY29wZSA9IG93bmVyLnNjb3BlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2NvcGVkKSB7XG4gICAgICAgIHRoaXMuY2hpbGRTY29wZSA9IG5ldyBEYXRhKGluaXREYXRhLCB0aGlzLmNoaWxkU2NvcGUgfHwgdGhpcy5zY29wZSk7XG4gICAgfVxuXG5cbiAgICBvd25lci5zbG90Q2hpbGRyZW4ucHVzaCh0aGlzKTtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAocmV2ZXJzZVdhbGtlcikge1xuXG4gICAgICAgIHRoaXMuc2VsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuc2VsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcblxuICAgICAgICBlYWNoKHRoaXMuYU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChhTm9kZUNoaWxkKSB7XG4gICAgICAgICAgICBtZS5jaGlsZHJlbi5wdXNoKGNyZWF0ZVJldmVyc2VOb2RlKGFOb2RlQ2hpbGQsIHJldmVyc2VXYWxrZXIsIG1lKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG5cbiAgICAgICAgdGhpcy5fdG9QaGFzZSgnYXR0YWNoZWQnKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblNsb3ROb2RlLnByb3RvdHlwZS5ub2RlVHlwZSA9IE5vZGVUeXBlLlNMT1Q7XG5cbi8qKlxuICog6ZSA5q+B6YeK5pS+IHNsb3RcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vVHJhbnNpdGlvbiDmmK/lkKbkuI3mmL7npLrov4fmuKHliqjnlLvmlYjmnpxcbiAqL1xuU2xvdE5vZGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAobm9EZXRhY2gsIG5vVHJhbnNpdGlvbikge1xuICAgIHRoaXMuY2hpbGRPd25lciA9IG51bGw7XG4gICAgdGhpcy5jaGlsZFNjb3BlID0gbnVsbDtcblxuICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4odGhpcywgbm9EZXRhY2gsIG5vVHJhbnNpdGlvbik7XG4gICAgbm9kZURpc3Bvc2UodGhpcyk7XG59O1xuXG5TbG90Tm9kZS5wcm90b3R5cGUuYXR0YWNoID0gbm9kZU93bk9ubHlDaGlsZHJlbkF0dGFjaDtcblNsb3ROb2RlLnByb3RvdHlwZS5fdG9QaGFzZSA9IGVsZW1lbnRPd25Ub1BoYXNlO1xuXG4vKipcbiAqIOinhuWbvuabtOaWsOWHveaVsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBpc0Zyb21PdXRlciDlj5jljJbkv6Hmga/mmK/lkKbmnaXmupDkuo7niLbnu4Tku7bkuYvlpJbnmoTnu4Tku7ZcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblNsb3ROb2RlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMsIGlzRnJvbU91dGVyKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIGlmICh0aGlzLm5hbWVCaW5kICYmIGV2YWxFeHByKHRoaXMubmFtZUJpbmQuZXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lcikgIT09IG1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5vd25lci5fbm90aWZ5TmVlZFJlbG9hZCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzRnJvbU91dGVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRVcGRhdGVDaGlsZHJlbih0aGlzLCBjaGFuZ2VzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY29wZWQpIHtcbiAgICAgICAgICAgIGVhY2godGhpcy5hTm9kZS52YXJzLCBmdW5jdGlvbiAodmFySXRlbSkge1xuICAgICAgICAgICAgICAgIG1lLmNoaWxkU2NvcGUuc2V0KHZhckl0ZW0ubmFtZSwgZXZhbEV4cHIodmFySXRlbS5leHByLCBtZS5zY29wZSwgbWUub3duZXIpKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHZhciBzY29wZWRDaGFuZ2VzID0gW107XG4gICAgICAgICAgICBlYWNoKGNoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1lLmlzSW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkQ2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWFjaChtZS5hTm9kZS52YXJzLCBmdW5jdGlvbiAodmFySXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHZhckl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbGF0aW9uID0gY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHZhckl0ZW0uZXhwciwgbWUuc2NvcGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbiA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2UudHlwZSAhPT0gRGF0YUNoYW5nZVR5cGUuU1BMSUNFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRDaGFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IERhdGFDaGFuZ2VUeXBlLlNFVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByOiBjcmVhdGVBY2Nlc3NvcihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBFeHByVHlwZS5TVFJJTkcsIHZhbHVlOiBuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtZS5jaGlsZFNjb3BlLmdldChuYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlbGF0aW9uID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRDaGFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGU6IEV4cHJUeXBlLlNUUklORywgdmFsdWU6IG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRGF0YUNoYW5nZVR5cGUuU1BMSUNFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBjaGFuZ2UuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ291bnQ6IGNoYW5nZS5kZWxldGVDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2hhbmdlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydGlvbnM6IGNoYW5nZS5pbnNlcnRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlbGVtZW50VXBkYXRlQ2hpbGRyZW4odGhpcywgc2NvcGVkQ2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuaXNJbnNlcnRlZCkge1xuICAgICAgICAgICAgZWxlbWVudFVwZGF0ZUNoaWxkcmVuKHRoaXMsIGNoYW5nZXMpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU2xvdE5vZGU7XG5cblxuLyoqXG4gKiBAZmlsZSDlpI3liLbmjIfku6Tpm4blkIjlr7nosaFcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5aSN5Yi25oyH5Luk6ZuG5ZCI5a+56LGhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSDopoHlpI3liLbnmoTmjIfku6Tpm4blkIjlr7nosaFcbiAqIEBwYXJhbSB7T2JqZWN0PX0gZXhjbHVkZXMg6ZyA6KaB5o6S6Zmk55qEa2V56ZuG5ZCIXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGNsb25lRGlyZWN0aXZlcyhzb3VyY2UsIGV4Y2x1ZGVzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMgfHwge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmICghZXhjbHVkZXNba2V5XSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNsb25lRGlyZWN0aXZlcztcblxuXG4vKipcbiAqIEBmaWxlIOeugOWNleaJp+ihjOmUgOavgeiKgueCueeahOihjOS4ulxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vIHZhciBub2RlRGlzcG9zZSA9IHJlcXVpcmUoJy4vbm9kZS1kaXNwb3NlJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2VDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuJyk7XG5cbi8qKlxuICog566A5Y2V5omn6KGM6ZSA5q+B6IqC54K555qE6KGM5Li6XG4gKlxuICogQHBhcmFtIHtib29sZWFuPX0gbm9EZXRhY2gg5piv5ZCm5LiN6KaB5oqK6IqC54K55LuOZG9t56e76ZmkXG4gKi9cbmZ1bmN0aW9uIG5vZGVPd25TaW1wbGVEaXNwb3NlKG5vRGV0YWNoKSB7XG4gICAgZWxlbWVudERpc3Bvc2VDaGlsZHJlbih0aGlzLCBub0RldGFjaCwgMSk7XG5cbiAgICBpZiAoIW5vRGV0YWNoKSB7XG4gICAgICAgIHJlbW92ZUVsKHRoaXMuZWwpO1xuICAgIH1cblxuICAgIG5vZGVEaXNwb3NlKHRoaXMpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub2RlT3duU2ltcGxlRGlzcG9zZTtcblxuXG4vKipcbiAqIEBmaWxlIOWIm+W7uuiKgueCueWvueW6lOeahCBzdHVtcCBjb21tZW50IOWFg+e0oFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG5cbi8qKlxuICog5Yib5bu66IqC54K55a+55bqU55qEIHN0dW1wIGNvbW1lbnQg5Li75YWD57SgXG4gKi9cbmZ1bmN0aW9uIG5vZGVPd25DcmVhdGVTdHVtcCgpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbCB8fCBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub2RlT3duQ3JlYXRlU3R1bXA7XG5cblxuLyoqXG4gKiBAZmlsZSBmb3Ig5oyH5Luk6IqC54K557G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi91dGlsL2luaGVyaXRzJyk7XG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBjcmVhdGVBTm9kZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYS1ub2RlJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgcGFyc2VFeHByID0gcmVxdWlyZSgnLi4vcGFyc2VyL3BhcnNlLWV4cHInKTtcbi8vIHZhciBjcmVhdGVBY2Nlc3NvciA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYWNjZXNzb3InKTtcbi8vIHZhciBjbG9uZURpcmVjdGl2ZXMgPSByZXF1aXJlKCcuLi9wYXJzZXIvY2xvbmUtZGlyZWN0aXZlcycpO1xuLy8gdmFyIERhdGEgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEnKTtcbi8vIHZhciBEYXRhQ2hhbmdlVHlwZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YS1jaGFuZ2UtdHlwZScpO1xuLy8gdmFyIGNoYW5nZUV4cHJDb21wYXJlID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2UtZXhwci1jb21wYXJlJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIGNoYW5nZXNJc0luRGF0YVJlZiA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlcy1pcy1pbi1kYXRhLXJlZicpO1xuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL2xpZmUtY3ljbGUnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgY3JlYXRlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLW5vZGUnKTtcbi8vIHZhciBjcmVhdGVSZXZlcnNlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLXJldmVyc2Utbm9kZScpO1xuLy8gdmFyIG5vZGVPd25TaW1wbGVEaXNwb3NlID0gcmVxdWlyZSgnLi9ub2RlLW93bi1zaW1wbGUtZGlzcG9zZScpO1xuLy8gdmFyIG5vZGVPd25DcmVhdGVTdHVtcCA9IHJlcXVpcmUoJy4vbm9kZS1vd24tY3JlYXRlLXN0dW1wJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2VDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuJyk7XG4vLyB2YXIgZGF0YUNhY2hlID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhLWNhY2hlJyk7XG5cblxuLyoqXG4gKiDlvqrnjq/pobnnmoTmlbDmja7lrrnlmajnsbtcbiAqXG4gKiBAaW5uZXJcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IGZvckVsZW1lbnQgZm9y5YWD57Sg5a+56LGhXG4gKiBAcGFyYW0geyp9IGl0ZW0g5b2T5YmN6aG555qE5pWw5o2uXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXgg5b2T5YmN6aG555qE57Si5byVXG4gKi9cbmZ1bmN0aW9uIEZvckl0ZW1EYXRhKGZvckVsZW1lbnQsIGl0ZW0sIGluZGV4KSB7XG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcbiAgICB0aGlzLnBhcmVudCA9IGZvckVsZW1lbnQuc2NvcGU7XG4gICAgdGhpcy5yYXcgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuXG4gICAgdGhpcy5kaXJlY3RpdmUgPSBmb3JFbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXNbJ2ZvciddOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIHRoaXMucmF3W3RoaXMuZGlyZWN0aXZlLml0ZW0ucmF3XSA9IGl0ZW07XG4gICAgdGhpcy5yYXdbdGhpcy5kaXJlY3RpdmUuaW5kZXgucmF3XSA9IGluZGV4O1xufVxuXG4vKipcbiAqIOWwhuaVsOaNruaTjeS9nOeahOihqOi+vuW8j++8jOi9rOaNouaIkOS4uuWvuXBhcmVudOaVsOaNruaTjeS9nOeahOihqOi+vuW8j1xuICog5Li76KaB5piv5a+5aXRlbeWSjGluZGV46L+b6KGM5aSE55CGXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV4cHIg6KGo6L6+5byPXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbkZvckl0ZW1EYXRhLnByb3RvdHlwZS5leHByUmVzb2x2ZSA9IGZ1bmN0aW9uIChleHByKSB7XG4gICAgdmFyIGRpcmVjdGl2ZSA9IHRoaXMuZGlyZWN0aXZlO1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlSXRlbShleHByKSB7XG4gICAgICAgIGlmIChleHByLnR5cGUgPT09IEV4cHJUeXBlLkFDQ0VTU09SXG4gICAgICAgICAgICAmJiBleHByLnBhdGhzWzBdLnZhbHVlID09PSBkaXJlY3RpdmUuaXRlbS5wYXRoc1swXS52YWx1ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmUudmFsdWUucGF0aHMuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5OVU1CRVIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWUuZ2V0KGRpcmVjdGl2ZS5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwci5wYXRocy5zbGljZSgxKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICBleHByID0gcmVzb2x2ZUl0ZW0oZXhwcik7XG5cbiAgICB2YXIgcmVzb2x2ZWRQYXRocyA9IFtdO1xuXG4gICAgZWFjaChleHByLnBhdGhzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXNvbHZlZFBhdGhzLnB1c2goXG4gICAgICAgICAgICBpdGVtLnR5cGUgPT09IEV4cHJUeXBlLkFDQ0VTU09SXG4gICAgICAgICAgICAgICAgJiYgaXRlbS5wYXRoc1swXS52YWx1ZSA9PT0gZGlyZWN0aXZlLmluZGV4LnBhdGhzWzBdLnZhbHVlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5OVU1CRVIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG1lLmdldChkaXJlY3RpdmUuaW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHJlc29sdmVJdGVtKGl0ZW0pXG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3IocmVzb2x2ZWRQYXRocyk7XG59O1xuXG4vLyDku6PnkIbmlbDmja7mk43kvZzmlrnms5VcbmluaGVyaXRzKEZvckl0ZW1EYXRhLCBEYXRhKTtcbmVhY2goXG4gICAgWydzZXQnLCAncmVtb3ZlJywgJ3Vuc2hpZnQnLCAnc2hpZnQnLCAncHVzaCcsICdwb3AnLCAnc3BsaWNlJ10sXG4gICAgZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICBGb3JJdGVtRGF0YS5wcm90b3R5cGVbJ18nICsgbWV0aG9kXSA9IERhdGEucHJvdG90eXBlW21ldGhvZF07XG4gICAgICAgIEZvckl0ZW1EYXRhLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKGV4cHIpIHtcbiAgICAgICAgICAgIGV4cHIgPSB0aGlzLmV4cHJSZXNvbHZlKHBhcnNlRXhwcihleHByKSk7XG4gICAgICAgICAgICBkYXRhQ2FjaGUuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50W21ldGhvZF0uYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQsXG4gICAgICAgICAgICAgICAgW2V4cHJdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICB9XG4pO1xuXG4vKipcbiAqIOWIm+W7uiBmb3Ig5oyH5Luk5YWD57Sg55qE5a2Q5YWD57SgXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge0ZvckRpcmVjdGl2ZX0gZm9yRWxlbWVudCBmb3Ig5oyH5Luk5YWD57Sg5a+56LGhXG4gKiBAcGFyYW0geyp9IGl0ZW0g5a2Q5YWD57Sg5a+55bqU5pWw5o2uXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXgg5a2Q5YWD57Sg5a+55bqU5bqP5Y+3XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVGb3JEaXJlY3RpdmVDaGlsZChmb3JFbGVtZW50LCBpdGVtLCBpbmRleCkge1xuICAgIHZhciBpdGVtU2NvcGUgPSBuZXcgRm9ySXRlbURhdGEoZm9yRWxlbWVudCwgaXRlbSwgaW5kZXgpO1xuICAgIHJldHVybiBjcmVhdGVOb2RlKGZvckVsZW1lbnQuaXRlbUFOb2RlLCBmb3JFbGVtZW50LCBpdGVtU2NvcGUpO1xufVxuXG4vKipcbiAqIGZvciDmjIfku6ToioLngrnnsbtcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu2546v5aKDXG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCDniLbkurLoioLngrlcbiAqIEBwYXJhbSB7RE9NQ2hpbGRyZW5XYWxrZXI/fSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICovXG5mdW5jdGlvbiBGb3JOb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHRoaXMuYU5vZGUgPSBhTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUXG4gICAgICAgID8gcGFyZW50XG4gICAgICAgIDogcGFyZW50LnBhcmVudENvbXBvbmVudDtcblxuICAgIHRoaXMuaWQgPSBndWlkKCk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgdGhpcy5pdGVtQU5vZGUgPSBjcmVhdGVBTm9kZSh7XG4gICAgICAgIGNoaWxkcmVuOiBhTm9kZS5jaGlsZHJlbixcbiAgICAgICAgcHJvcHM6IGFOb2RlLnByb3BzLFxuICAgICAgICBldmVudHM6IGFOb2RlLmV2ZW50cyxcbiAgICAgICAgdGFnTmFtZTogYU5vZGUudGFnTmFtZSxcbiAgICAgICAgdmFyczogYU5vZGUudmFycyxcbiAgICAgICAgaG90c3BvdDogYU5vZGUuaG90c3BvdCxcbiAgICAgICAgZGlyZWN0aXZlczogY2xvbmVEaXJlY3RpdmVzKGFOb2RlLmRpcmVjdGl2ZXMsIHtcbiAgICAgICAgICAgICdmb3InOiAxXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICB0aGlzLnBhcmFtID0gYU5vZGUuZGlyZWN0aXZlc1snZm9yJ107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgZWFjaChcbiAgICAgICAgICAgIGV2YWxFeHByKHRoaXMucGFyYW0udmFsdWUsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbVNjb3BlID0gbmV3IEZvckl0ZW1EYXRhKG1lLCBpdGVtLCBpKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVSZXZlcnNlTm9kZShtZS5pdGVtQU5vZGUsIHJldmVyc2VXYWxrZXIsIG1lLCBpdGVtU2NvcGUpO1xuICAgICAgICAgICAgICAgIG1lLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5cbkZvck5vZGUucHJvdG90eXBlLm5vZGVUeXBlID0gTm9kZVR5cGUuRk9SO1xuRm9yTm9kZS5wcm90b3R5cGUuX2NyZWF0ZSA9IG5vZGVPd25DcmVhdGVTdHVtcDtcbkZvck5vZGUucHJvdG90eXBlLmRpc3Bvc2UgPSBub2RlT3duU2ltcGxlRGlzcG9zZTtcblxuLyoqXG4gKiDlsIblhYPntKBhdHRhY2jliLDpobXpnaLnmoTooYzkuLpcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDopoHmt7vliqDliLDnmoTniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnTvvJ19IGJlZm9yZUVsIOimgea3u+WKoOWIsOWTquS4quWFg+e0oOS5i+WJjVxuICovXG5Gb3JOb2RlLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiAocGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgdGhpcy5fY3JlYXRlKCk7XG4gICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICAvLyBwYWludCBsaXN0XG4gICAgdmFyIGVsID0gdGhpcy5lbCB8fCBwYXJlbnRFbC5maXJzdENoaWxkO1xuICAgIHZhciBkYXRhID0gZXZhbEV4cHIodGhpcy5wYXJhbS52YWx1ZSwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG4gICAgdmFyIGxlbiA9IGRhdGEgJiYgZGF0YS5sZW5ndGggfHwgMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNyZWF0ZUZvckRpcmVjdGl2ZUNoaWxkKHRoaXMsIGRhdGFbaV0sIGkpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICBjaGlsZC5hdHRhY2gocGFyZW50RWwsIGVsKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOWwhuWFg+e0oOS7jumhtemdouS4iuenu+mZpOeahOihjOS4ulxuICovXG5Gb3JOb2RlLnByb3RvdHlwZS5kZXRhY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4odGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgcmVtb3ZlRWwodGhpcy5lbCk7XG4gICAgICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLmRldGFjaGVkO1xuICAgIH1cbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtbWF4LXN0YXRlbWVudHMgKi9cblxuLyoqXG4gKiDop4blm77mm7TmlrDlh73mlbBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5Gb3JOb2RlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcblxuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgLy8g5o6n5Yi25YiX6KGo5pu05paw562W55Wl5piv5ZCm5Y6f5qC35pu05paw55qE5Y+Y6YePXG4gICAgdmFyIG9yaWdpbmFsVXBkYXRlID0gdGhpcy5hTm9kZS5kaXJlY3RpdmVzLnRyYW5zaXRpb247XG5cblxuICAgIHZhciBvbGRDaGlsZHJlbkxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHZhciBjaGlsZHJlbkNoYW5nZXMgPSBuZXcgQXJyYXkob2xkQ2hpbGRyZW5MZW4pO1xuXG4gICAgZnVuY3Rpb24gcHVzaFRvQ2hpbGRyZW5DaGFuZ2VzKGNoYW5nZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkcmVuQ2hhbmdlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbaV0gPSBjaGlsZHJlbkNoYW5nZXNbaV0gfHwgW10pLnB1c2goY2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkaXNwb3NlQ2hpbGRyZW4gPSBbXTtcblxuXG4gICAgLy8g5Yik5pat5YiX6KGo5piv5ZCm54i25YWD57Sg5LiL5ZSv5LiA55qE5YWD57SgXG4gICAgLy8g5aaC5p6c5piv55qE6K+d77yM5Y+v5Lul5YGa5LiA5Lqb5pu05paw5LyY5YyWXG4gICAgdmFyIHBhcmVudEVsID0gdGhpcy5lbC5wYXJlbnROb2RlO1xuICAgIHZhciBwYXJlbnRGaXJzdENoaWxkID0gcGFyZW50RWwuZmlyc3RDaGlsZDtcbiAgICB2YXIgcGFyZW50TGFzdENoaWxkID0gcGFyZW50RWwubGFzdENoaWxkO1xuICAgIHZhciBpc09ubHlQYXJlbnRDaGlsZCA9IG9sZENoaWxkcmVuTGVuID4gMCAvLyDmnInlranlrZDml7ZcbiAgICAgICAgICAgICYmIHBhcmVudEZpcnN0Q2hpbGQgPT09IHRoaXMuY2hpbGRyZW5bMF0uZWxcbiAgICAgICAgICAgICYmIChwYXJlbnRMYXN0Q2hpbGQgPT09IHRoaXMuZWwgfHwgcGFyZW50TGFzdENoaWxkID09PSB0aGlzLmNoaWxkcmVuW29sZENoaWxkcmVuTGVuIC0gMV0uZWwpXG4gICAgICAgIHx8IG9sZENoaWxkcmVuTGVuID09PSAwIC8vIOaXoOWtqeWtkOaXtlxuICAgICAgICAgICAgJiYgcGFyZW50Rmlyc3RDaGlsZCA9PT0gdGhpcy5lbFxuICAgICAgICAgICAgJiYgcGFyZW50TGFzdENoaWxkID09PSB0aGlzLmVsO1xuXG4gICAgLy8g5o6n5Yi25YiX6KGo5piv5ZCm5pW05L2T5pu05paw55qE5Y+Y6YePXG4gICAgdmFyIGlzQ2hpbGRyZW5SZWJ1aWxkO1xuXG4gICAgdmFyIG5ld0xpc3QgPSBldmFsRXhwcih0aGlzLnBhcmFtLnZhbHVlLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcbiAgICB2YXIgbmV3TGVuID0gbmV3TGlzdCAmJiBuZXdMaXN0Lmxlbmd0aCB8fCAwO1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcmVkZWNsYXJlICovXG4gICAgZm9yICh2YXIgY0luZGV4ID0gMCwgY0xlbiA9IGNoYW5nZXMubGVuZ3RoOyBjSW5kZXggPCBjTGVuOyBjSW5kZXgrKykge1xuICAgICAgICB2YXIgY2hhbmdlID0gY2hhbmdlc1tjSW5kZXhdO1xuICAgICAgICB2YXIgcmVsYXRpb24gPSBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgdGhpcy5wYXJhbS52YWx1ZSwgdGhpcy5zY29wZSk7XG5cbiAgICAgICAgaWYgKCFyZWxhdGlvbikge1xuICAgICAgICAgICAgLy8g5peg5YWz5pe277yM55u05o6l5Lyg6YCS57uZ5a2Q5YWD57Sg5pu05paw77yM5YiX6KGo5pys6Lqr5LiN6ZyA6KaB5YqoXG4gICAgICAgICAgICBwdXNoVG9DaGlsZHJlbkNoYW5nZXMoY2hhbmdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWxhdGlvbiA+IDIpIHtcbiAgICAgICAgICAgIC8vIOWPmOabtOihqOi+vuW8j+aYr2xpc3Tnu5Hlrprooajovr7lvI/nmoTlrZDpoblcbiAgICAgICAgICAgIC8vIOWPqumcgOimgeWvueebuOW6lOeahOWtkOmhuei/m+ihjOabtOaWsFxuICAgICAgICAgICAgdmFyIGNoYW5nZVBhdGhzID0gY2hhbmdlLmV4cHIucGF0aHM7XG4gICAgICAgICAgICB2YXIgZm9yTGVuID0gdGhpcy5wYXJhbS52YWx1ZS5wYXRocy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgY2hhbmdlSW5kZXggPSArZXZhbEV4cHIoY2hhbmdlUGF0aHNbZm9yTGVuXSwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICAgICAgICAgIGlmIChpc05hTihjaGFuZ2VJbmRleCkpIHtcbiAgICAgICAgICAgICAgICBwdXNoVG9DaGlsZHJlbkNoYW5nZXMoY2hhbmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogY2hhbmdlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHI6IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbS5pdGVtLnBhdGhzLmNvbmNhdChjaGFuZ2VQYXRocy5zbGljZShmb3JMZW4gKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYW5nZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGNoYW5nZS5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ291bnQ6IGNoYW5nZS5kZWxldGVDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0aW9uczogY2hhbmdlLmluc2VydGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW2NoYW5nZUluZGV4XSA9IGNoaWxkcmVuQ2hhbmdlc1tjaGFuZ2VJbmRleF0gfHwgW10pXG4gICAgICAgICAgICAgICAgICAgIC5wdXNoKGNoYW5nZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbltjaGFuZ2VJbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS50eXBlID09PSBEYXRhQ2hhbmdlVHlwZS5TUExJQ0UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bY2hhbmdlSW5kZXhdLnNjb3BlLl9zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW10uY29uY2F0KGNoYW5nZS5pbmRleCwgY2hhbmdlLmRlbGV0ZUNvdW50LCBjaGFuZ2UuaW5zZXJ0aW9ucyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzaWxlbnQ6IDEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bY2hhbmdlSW5kZXhdLnNjb3BlLl9zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2lsZW50OiAxIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hhbmdlLnR5cGUgIT09IERhdGFDaGFuZ2VUeXBlLlNQTElDRSkge1xuICAgICAgICAgICAgLy8g5Y+Y5pu06KGo6L6+5byP5pivbGlzdOe7keWumuihqOi+vuW8j+acrOi6q+aIluavjemhueeahOmHjeaWsOiuvuWAvFxuICAgICAgICAgICAgLy8g5q2k5pe26ZyA6KaB5pu05paw5pW05Liq5YiX6KGoXG5cblxuICAgICAgICAgICAgLy8g6ICB55qE5q+U5paw55qE5aSa55qE6YOo5YiG77yM5qCH6K6w6ZyA6KaBZGlzcG9zZVxuICAgICAgICAgICAgaWYgKG9sZENoaWxkcmVuTGVuID4gbmV3TGVuKSB7XG4gICAgICAgICAgICAgICAgZGlzcG9zZUNoaWxkcmVuID0gZGlzcG9zZUNoaWxkcmVuLmNvbmNhdCh0aGlzLmNoaWxkcmVuLnNsaWNlKG5ld0xlbikpO1xuXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5DaGFuZ2VzID0gY2hpbGRyZW5DaGFuZ2VzLnNsaWNlKDAsIG5ld0xlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uc2xpY2UoMCwgbmV3TGVuKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5pW06aG55Y+Y5pu0XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0xlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tpXSA9IGNoaWxkcmVuQ2hhbmdlc1tpXSB8fCBbXSkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IERhdGFDaGFuZ2VUeXBlLlNFVCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjaGFuZ2Uub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICBleHByOiBjcmVhdGVBY2Nlc3Nvcih0aGlzLnBhcmFtLml0ZW0ucGF0aHMuc2xpY2UoMCkpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3TGlzdFtpXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8g5a+5bGlzdOabtOS4iue6p+aVsOaNrueahOebtOaOpeiuvue9rlxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbiA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5DaGFuZ2VzW2ldLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnNjb3BlLl9zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdMaXN0W2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAge3NpbGVudDogMX1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNDaGlsZHJlblJlYnVpbGQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlbGF0aW9uID09PSAyICYmIGNoYW5nZS50eXBlID09PSBEYXRhQ2hhbmdlVHlwZS5TUExJQ0UgJiYgIWlzQ2hpbGRyZW5SZWJ1aWxkKSB7XG4gICAgICAgICAgICAvLyDlj5jmm7Tooajovr7lvI/mmK9saXN057uR5a6a6KGo6L6+5byP5pys6Lqr5pWw57uE55qEc3BsaWNl5pON5L2cXG4gICAgICAgICAgICAvLyDmraTml7bpnIDopoHliKDpmaTpg6jliIbpobnvvIzliJvlu7rpg6jliIbpoblcbiAgICAgICAgICAgIHZhciBjaGFuZ2VTdGFydCA9IGNoYW5nZS5pbmRleDtcbiAgICAgICAgICAgIHZhciBkZWxldGVDb3VudCA9IGNoYW5nZS5kZWxldGVDb3VudDtcbiAgICAgICAgICAgIHZhciBpbnNlcnRpb25zTGVuID0gY2hhbmdlLmluc2VydGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIG5ld0NvdW50ID0gaW5zZXJ0aW9uc0xlbiAtIGRlbGV0ZUNvdW50O1xuXG4gICAgICAgICAgICBpZiAobmV3Q291bnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhDaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IERhdGFDaGFuZ2VUeXBlLlNFVCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjaGFuZ2Uub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICBleHByOiB0aGlzLnBhcmFtLmluZGV4XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBjaGFuZ2VTdGFydCArIGRlbGV0ZUNvdW50OyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW2ldID0gY2hpbGRyZW5DaGFuZ2VzW2ldIHx8IFtdKS5wdXNoKGluZGV4Q2hhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXSAmJiB0aGlzLmNoaWxkcmVuW2ldLnNjb3BlLl9zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleENoYW5nZS5leHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgaSAtIGRlbGV0ZUNvdW50ICsgaW5zZXJ0aW9uc0xlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaWxlbnQ6IDF9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGVsZXRlTGVuID0gZGVsZXRlQ291bnQ7XG4gICAgICAgICAgICB3aGlsZSAoZGVsZXRlTGVuLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVsZXRlTGVuIDwgaW5zZXJ0aW9uc0xlbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGNoYW5nZVN0YXJ0ICsgZGVsZXRlTGVuO1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tpXSA9IGNoaWxkcmVuQ2hhbmdlc1tpXSB8fCBbXSkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBEYXRhQ2hhbmdlVHlwZS5TRVQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByOiBjcmVhdGVBY2Nlc3Nvcih0aGlzLnBhcmFtLml0ZW0ucGF0aHMuc2xpY2UoMCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYW5nZS5pbnNlcnRpb25zW2RlbGV0ZUxlbl1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnNjb3BlLl9zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbS5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZS5pbnNlcnRpb25zW2RlbGV0ZUxlbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NpbGVudDogMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdDb3VudCA8IDApIHtcbiAgICAgICAgICAgICAgICBkaXNwb3NlQ2hpbGRyZW4gPSBkaXNwb3NlQ2hpbGRyZW4uY29uY2F0KHRoaXMuY2hpbGRyZW4uc3BsaWNlKGNoYW5nZVN0YXJ0ICsgaW5zZXJ0aW9uc0xlbiwgLW5ld0NvdW50KSk7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5DaGFuZ2VzLnNwbGljZShjaGFuZ2VTdGFydCArIGluc2VydGlvbnNMZW4sIC1uZXdDb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZXdDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgc3BsaWNlQXJncyA9IFtjaGFuZ2VTdGFydCArIGRlbGV0ZUNvdW50LCAwXS5jb25jYXQobmV3IEFycmF5KG5ld0NvdW50KSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UuYXBwbHkodGhpcy5jaGlsZHJlbiwgc3BsaWNlQXJncyk7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5DaGFuZ2VzLnNwbGljZS5hcHBseShjaGlsZHJlbkNoYW5nZXMsIHNwbGljZUFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG5ld0NoaWxkcmVuTGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAvLyDmoIforrAgbGVuZ3RoIOaYr+WQpuWPkeeUn+WPmOWMllxuICAgIGlmIChuZXdDaGlsZHJlbkxlbiAhPT0gb2xkQ2hpbGRyZW5MZW4pIHtcbiAgICAgICAgdmFyIGxlbmd0aENoYW5nZSA9IHtcbiAgICAgICAgICAgIHR5cGU6IERhdGFDaGFuZ2VUeXBlLlNFVCxcbiAgICAgICAgICAgIG9wdGlvbjoge30sXG4gICAgICAgICAgICBleHByOiBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtLnZhbHVlLnBhdGhzLmNvbmNhdCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdsZW5ndGgnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY2hhbmdlc0lzSW5EYXRhUmVmKFtsZW5ndGhDaGFuZ2VdLCB0aGlzLmFOb2RlLmhvdHNwb3QuZGF0YSkpIHtcbiAgICAgICAgICAgIHB1c2hUb0NoaWxkcmVuQ2hhbmdlcyhsZW5ndGhDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5riF6Zmk5bqU6K+l5bmy5o6J55qEIGNoaWxkXG4gICAgdGhpcy5fZG9DcmVhdGVBbmRVcGRhdGUgPSBkb0NyZWF0ZUFuZFVwZGF0ZTtcblxuICAgIC8vIOi/memHjOS4jeeUqGdldFRyYW5zaXRpb27vvIxnZXRUcmFuc2l0aW9u5ZKMc2NvcGXnm7jlhbPvvIxmb3Llkoxmb3JJdGVt55qEc2NvcGXmmK/kuI3lkIznmoRcbiAgICAvLyDmiYDku6VnZXRUcmFuc2l0aW9u57uT5p6c5pys6Lqr5Lmf5piv5LiN5LiA6Ie055qE44CC5LiN5aaC55u05o6l5Yik5pat5oyH5Luk5piv5ZCm5a2Y5Zyo77yM5aaC5p6c5a2Y5Zyo5bCx5LiN6L+b5YWl5pq05Yqb5riF6Zmk5qih5byPXG4gICAgLy8gdmFyIHZpb2xlbnRDbGVhciA9IGlzT25seVBhcmVudENoaWxkICYmIG5ld0NoaWxkcmVuTGVuID09PSAwICYmICFlbGVtZW50R2V0VHJhbnNpdGlvbihtZSk7XG4gICAgdmFyIHZpb2xlbnRDbGVhciA9ICFvcmlnaW5hbFVwZGF0ZSAmJiBpc09ubHlQYXJlbnRDaGlsZCAmJiBuZXdDaGlsZHJlbkxlbiA9PT0gMDtcblxuICAgIHZhciBkaXNwb3NlZENoaWxkQ291bnQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzcG9zZUNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkaXNwb3NlQ2hpbGQgPSBkaXNwb3NlQ2hpbGRyZW5baV07XG4gICAgICAgIGlmIChkaXNwb3NlQ2hpbGQpIHtcbiAgICAgICAgICAgIGRpc3Bvc2VDaGlsZC5fb25kaXNwb3NlZCA9IGNoaWxkRGlzcG9zZWQ7XG4gICAgICAgICAgICBkaXNwb3NlQ2hpbGQuZGlzcG9zZSh2aW9sZW50Q2xlYXIsIHZpb2xlbnRDbGVhcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGlsZERpc3Bvc2VkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmlvbGVudENsZWFyKSB7XG4gICAgICAgIC8vIGNsb25lTm9kZSArIHJlcGxhY2VDaGlsZCBpcyBmYXN0ZXJcbiAgICAgICAgLy8gcGFyZW50RWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHZhciByZXBsYWNlTm9kZSA9IHBhcmVudEVsLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgIHBhcmVudEVsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlcGxhY2VOb2RlLCBwYXJlbnRFbCk7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICByZXBsYWNlTm9kZS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzcG9zZUNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkb0NyZWF0ZUFuZFVwZGF0ZSgpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hpbGREaXNwb3NlZCgpIHtcbiAgICAgICAgZGlzcG9zZWRDaGlsZENvdW50Kys7XG4gICAgICAgIGlmIChkaXNwb3NlZENoaWxkQ291bnQgPT09IGRpc3Bvc2VDaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgICAgICYmIGRvQ3JlYXRlQW5kVXBkYXRlID09PSBtZS5fZG9DcmVhdGVBbmRVcGRhdGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkb0NyZWF0ZUFuZFVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9DcmVhdGVBbmRVcGRhdGUoKSB7XG4gICAgICAgIG1lLl9kb0NyZWF0ZUFuZFVwZGF0ZSA9IG51bGw7XG4gICAgICAgIGlmICh2aW9sZW50Q2xlYXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdmFyIGJlZm9yZUVsID0gbWUuZWw7XG5cbiAgICAgICAgLy8g5a+555u45bqU55qE6aG56L+b6KGM5pu05pawXG4gICAgICAgIGlmIChvbGRDaGlsZHJlbkxlbiA9PT0gMCAmJiBpc09ubHlQYXJlbnRDaGlsZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdDaGlsZHJlbkxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbWUuY2hpbGRyZW5baV0gPSBjcmVhdGVGb3JEaXJlY3RpdmVDaGlsZChtZSwgbmV3TGlzdFtpXSwgaSk7XG4gICAgICAgICAgICAgICAgbWUuY2hpbGRyZW5baV0uYXR0YWNoKHBhcmVudEVsLCBiZWZvcmVFbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzkuI1hdHRhY2hlZOWImeebtOaOpeWIm+W7uu+8jOWmguaenOWtmOWcqOWImeiwg+eUqOabtOaWsOWHveaVsFxuICAgICAgICAgICAgdmFyIGogPSAtMTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG1lLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlc1tpXSAmJiBjaGlsZC5fdXBkYXRlKGNoaWxkcmVuQ2hhbmdlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA8IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZUVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChqIDwgbmV3Q2hpbGRyZW5MZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dENoaWxkID0gbWUuY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVFbCA9IG5leHRDaGlsZC5zZWwgfHwgbmV4dENoaWxkLmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUuY2hpbGRyZW5baV0gPSBjcmVhdGVGb3JEaXJlY3RpdmVDaGlsZChtZSwgbmV3TGlzdFtpXSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIG1lLmNoaWxkcmVuW2ldLmF0dGFjaChwYXJlbnRFbCwgYmVmb3JlRWwgfHwgbWUuZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gRm9yTm9kZTtcblxuXG4vKipcbiAqIEBmaWxlIOa4hea0l+adoeS7tiBhTm9kZVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgY3JlYXRlQU5vZGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvY3JlYXRlLWEtbm9kZScpO1xuLy8gdmFyIGNsb25lRGlyZWN0aXZlcyA9IHJlcXVpcmUoJy4uL3BhcnNlci9jbG9uZS1kaXJlY3RpdmVzJyk7XG5cblxuLyoqXG4gKiDmuIXmtJfmnaHku7YgYU5vZGXvvIzov5Tlm57nuq/lh4Dml6DmnaHku7bmjIfku6TnmoQgYU5vZGVcbiAqXG4gKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmnaHku7boioLngrnlr7nosaFcbiAqIEByZXR1cm4ge0FOb2RlfVxuICovXG5mdW5jdGlvbiByaW5zZUNvbmRBTm9kZShhTm9kZSkge1xuICAgIHZhciBjbGVhckFOb2RlID0gY3JlYXRlQU5vZGUoe1xuICAgICAgICBjaGlsZHJlbjogYU5vZGUuY2hpbGRyZW4sXG4gICAgICAgIHByb3BzOiBhTm9kZS5wcm9wcyxcbiAgICAgICAgZXZlbnRzOiBhTm9kZS5ldmVudHMsXG4gICAgICAgIHRhZ05hbWU6IGFOb2RlLnRhZ05hbWUsXG4gICAgICAgIHZhcnM6IGFOb2RlLnZhcnMsXG4gICAgICAgIGhvdHNwb3Q6IGFOb2RlLmhvdHNwb3QsXG4gICAgICAgIGRpcmVjdGl2ZXM6IGNsb25lRGlyZWN0aXZlcyhhTm9kZS5kaXJlY3RpdmVzLCB7XG4gICAgICAgICAgICAnaWYnOiAxLFxuICAgICAgICAgICAgJ2Vsc2UnOiAxLFxuICAgICAgICAgICAgJ2VsaWYnOiAxXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xlYXJBTm9kZTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmluc2VDb25kQU5vZGU7XG5cblxuLyoqXG4gKiBAZmlsZSBpZiDmjIfku6ToioLngrnnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIGluc2VydEJlZm9yZSA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaW5zZXJ0LWJlZm9yZScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgcmluc2VDb25kQU5vZGUgPSByZXF1aXJlKCcuL3JpbnNlLWNvbmQtYW5vZGUnKTtcbi8vIHZhciBjcmVhdGVOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtbm9kZScpO1xuLy8gdmFyIGNyZWF0ZVJldmVyc2VOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtcmV2ZXJzZS1ub2RlJyk7XG4vLyB2YXIgbm9kZU93bkNyZWF0ZVN0dW1wID0gcmVxdWlyZSgnLi9ub2RlLW93bi1jcmVhdGUtc3R1bXAnKTtcbi8vIHZhciBlbGVtZW50VXBkYXRlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtdXBkYXRlLWNoaWxkcmVuJyk7XG4vLyB2YXIgbm9kZU93blNpbXBsZURpc3Bvc2UgPSByZXF1aXJlKCcuL25vZGUtb3duLXNpbXBsZS1kaXNwb3NlJyk7XG5cbi8qKlxuICogaWYg5oyH5Luk6IqC54K557G7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtNb2RlbD19IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQg54i25Lqy6IqC54K5XG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyP30gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqL1xuZnVuY3Rpb24gSWZOb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHRoaXMuYU5vZGUgPSBhTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUXG4gICAgICAgID8gcGFyZW50XG4gICAgICAgIDogcGFyZW50LnBhcmVudENvbXBvbmVudDtcblxuICAgIHRoaXMuaWQgPSBndWlkKCk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgdGhpcy5jb25kID0gdGhpcy5hTm9kZS5kaXJlY3RpdmVzWydpZiddLnZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG4gICAgICAgIGlmIChldmFsRXhwcih0aGlzLmNvbmQsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmVsc2VJbmRleCA9IC0xO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlblswXSA9IGNyZWF0ZVJldmVyc2VOb2RlKFxuICAgICAgICAgICAgICAgIHJpbnNlQ29uZEFOb2RlKGFOb2RlKSxcbiAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyLFxuICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgZWFjaChhTm9kZS5lbHNlcywgZnVuY3Rpb24gKGVsc2VBTm9kZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxpZiA9IGVsc2VBTm9kZS5kaXJlY3RpdmVzLmVsaWY7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWVsaWYgfHwgZWxpZiAmJiBldmFsRXhwcihlbGlmLnZhbHVlLCBtZS5zY29wZSwgbWUub3duZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmVsc2VJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBtZS5jaGlsZHJlblswXSA9IGNyZWF0ZVJldmVyc2VOb2RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmluc2VDb25kQU5vZGUoZWxzZUFOb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2VXYWxrZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHJldmVyc2VXYWxrZXIudGFyZ2V0LCByZXZlcnNlV2Fsa2VyLmN1cnJlbnQpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuSWZOb2RlLnByb3RvdHlwZS5ub2RlVHlwZSA9IE5vZGVUeXBlLklGO1xuXG5JZk5vZGUucHJvdG90eXBlLl9jcmVhdGUgPSBub2RlT3duQ3JlYXRlU3R1bXA7XG5JZk5vZGUucHJvdG90eXBlLmRpc3Bvc2UgPSBub2RlT3duU2ltcGxlRGlzcG9zZTtcblxuSWZOb2RlLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiAocGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgZWxzZUluZGV4O1xuICAgIHZhciBjaGlsZDtcblxuICAgIGlmIChldmFsRXhwcih0aGlzLmNvbmQsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpKSB7XG4gICAgICAgIGNoaWxkID0gY3JlYXRlTm9kZShyaW5zZUNvbmRBTm9kZShtZS5hTm9kZSksIG1lKTtcbiAgICAgICAgZWxzZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlYWNoKG1lLmFOb2RlLmVsc2VzLCBmdW5jdGlvbiAoZWxzZUFOb2RlLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGVsaWYgPSBlbHNlQU5vZGUuZGlyZWN0aXZlcy5lbGlmO1xuXG4gICAgICAgICAgICBpZiAoIWVsaWYgfHwgZWxpZiAmJiBldmFsRXhwcihlbGlmLnZhbHVlLCBtZS5zY29wZSwgbWUub3duZXIpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQgPSBjcmVhdGVOb2RlKHJpbnNlQ29uZEFOb2RlKGVsc2VBTm9kZSksIG1lKTtcbiAgICAgICAgICAgICAgICBlbHNlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZCkge1xuICAgICAgICBtZS5jaGlsZHJlblswXSA9IGNoaWxkO1xuICAgICAgICBjaGlsZC5hdHRhY2gocGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICAgICAgbWUuZWxzZUluZGV4ID0gZWxzZUluZGV4O1xuICAgIH1cblxuXG4gICAgdGhpcy5fY3JlYXRlKCk7XG4gICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG59O1xuXG5cbi8qKlxuICog6KeG5Zu+5pu05paw5Ye95pWwXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuSWZOb2RlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHZhciBjaGlsZEFOb2RlID0gbWUuYU5vZGU7XG4gICAgdmFyIGVsc2VJbmRleDtcblxuICAgIGlmIChldmFsRXhwcih0aGlzLmNvbmQsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpKSB7XG4gICAgICAgIGVsc2VJbmRleCA9IC0xO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWFjaChtZS5hTm9kZS5lbHNlcywgZnVuY3Rpb24gKGVsc2VBTm9kZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBlbGlmID0gZWxzZUFOb2RlLmRpcmVjdGl2ZXMuZWxpZjtcblxuICAgICAgICAgICAgaWYgKGVsaWYgJiYgZXZhbEV4cHIoZWxpZi52YWx1ZSwgbWUuc2NvcGUsIG1lLm93bmVyKSB8fCAhZWxpZikge1xuICAgICAgICAgICAgICAgIGVsc2VJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIGNoaWxkQU5vZGUgPSBlbHNlQU5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZWxzZUluZGV4ID09PSBtZS5lbHNlSW5kZXgpIHtcbiAgICAgICAgZWxlbWVudFVwZGF0ZUNoaWxkcmVuKG1lLCBjaGFuZ2VzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG1lLmNoaWxkcmVuWzBdO1xuICAgICAgICBtZS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLl9vbmRpc3Bvc2VkID0gbmV3Q2hpbGQ7XG4gICAgICAgICAgICBjaGlsZC5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdDaGlsZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuZWxzZUluZGV4ID0gZWxzZUluZGV4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0NoaWxkKCkge1xuICAgICAgICBpZiAodHlwZW9mIGVsc2VJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNyZWF0ZU5vZGUocmluc2VDb25kQU5vZGUoY2hpbGRBTm9kZSksIG1lKTtcbiAgICAgICAgICAgIC8vIHZhciBwYXJlbnRFbCA9IGdldE5vZGVTdHVtcFBhcmVudChtZSk7XG4gICAgICAgICAgICBjaGlsZC5hdHRhY2gobWUuZWwucGFyZW50Tm9kZSwgbWUuZWwpO1xuXG4gICAgICAgICAgICBtZS5jaGlsZHJlblswXSA9IGNoaWxkO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gSWZOb2RlO1xuXG5cbi8qKlxuICogQGZpbGUgdGVtcGxhdGUg6IqC54K557G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi9saWZlLWN5Y2xlJyk7XG4vLyB2YXIgbm9kZURpc3Bvc2UgPSByZXF1aXJlKCcuL25vZGUtZGlzcG9zZScpO1xuLy8gdmFyIGNyZWF0ZVJldmVyc2VOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtcmV2ZXJzZS1ub2RlJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2VDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuJyk7XG4vLyB2YXIgZWxlbWVudE93blRvUGhhc2UgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLXRvLXBoYXNlJyk7XG4vLyB2YXIgZWxlbWVudFVwZGF0ZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LXVwZGF0ZS1jaGlsZHJlbicpO1xuLy8gdmFyIG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2ggPSByZXF1aXJlKCcuL25vZGUtb3duLW9ubHktY2hpbGRyZW4tYXR0YWNoJyk7XG5cbi8qKlxuICogdGVtcGxhdGUg6IqC54K557G7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtNb2RlbD19IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQg54i25Lqy6IqC54K5XG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyP30gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqL1xuZnVuY3Rpb24gVGVtcGxhdGVOb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcikge1xuICAgIHRoaXMuYU5vZGUgPSBhTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUXG4gICAgICAgID8gcGFyZW50XG4gICAgICAgIDogcGFyZW50LnBhcmVudENvbXBvbmVudDtcblxuICAgIHRoaXMuaWQgPSBndWlkKCk7XG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuc3RhcnQ7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG4gICAgICAgIHRoaXMuc2VsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuc2VsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcblxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBlYWNoKHRoaXMuYU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChhTm9kZUNoaWxkKSB7XG4gICAgICAgICAgICBtZS5jaGlsZHJlbi5wdXNoKGNyZWF0ZVJldmVyc2VOb2RlKGFOb2RlQ2hpbGQsIHJldmVyc2VXYWxrZXIsIG1lKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG5cbiAgICAgICAgdGhpcy5fdG9QaGFzZSgnYXR0YWNoZWQnKTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblxuXG5UZW1wbGF0ZU5vZGUucHJvdG90eXBlLm5vZGVUeXBlID0gTm9kZVR5cGUuVFBMO1xuXG5UZW1wbGF0ZU5vZGUucHJvdG90eXBlLmF0dGFjaCA9IG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2g7XG5cbi8qKlxuICog6ZSA5q+B6YeK5pS+XG4gKlxuICogQHBhcmFtIHtib29sZWFuPX0gbm9EZXRhY2gg5piv5ZCm5LiN6KaB5oqK6IqC54K55LuOZG9t56e76ZmkXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1RyYW5zaXRpb24g5piv5ZCm5LiN5pi+56S66L+H5rih5Yqo55S75pWI5p6cXG4gKi9cblRlbXBsYXRlTm9kZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIChub0RldGFjaCwgbm9UcmFuc2l0aW9uKSB7XG4gICAgZWxlbWVudERpc3Bvc2VDaGlsZHJlbih0aGlzLCBub0RldGFjaCwgbm9UcmFuc2l0aW9uKTtcbiAgICBub2RlRGlzcG9zZSh0aGlzKTtcbn07XG5cblxuVGVtcGxhdGVOb2RlLnByb3RvdHlwZS5fdG9QaGFzZSA9IGVsZW1lbnRPd25Ub1BoYXNlO1xuXG4vKipcbiAqIOinhuWbvuabtOaWsOWHveaVsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cblRlbXBsYXRlTm9kZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgZWxlbWVudFVwZGF0ZUNoaWxkcmVuKHRoaXMsIGNoYW5nZXMpO1xufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gVGVtcGxhdGVOb2RlO1xuXG5cbi8qKlxuICogQGZpbGUg5a+55YWD57Sg55qE5a2Q6IqC54K56L+b6KGM5Y+N6KejXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgRE9NQ2hpbGRyZW5XYWxrZXIgPSByZXF1aXJlKCcuL2RvbS1jaGlsZHJlbi13YWxrZXInKTtcbi8vIHZhciBjcmVhdGVSZXZlcnNlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLXJldmVyc2Utbm9kZScpO1xuXG4vLyAjW2JlZ2luXSByZXZlcnNlXG5cbi8qKlxuICog5a+55YWD57Sg55qE5a2Q6IqC54K56L+b6KGM5Y+N6KejXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQg5YWD57SgXG4gKi9cbmZ1bmN0aW9uIHJldmVyc2VFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHZhciBodG1sRGlyZWN0aXZlID0gZWxlbWVudC5hTm9kZS5kaXJlY3RpdmVzLmh0bWw7XG5cbiAgICBpZiAoIWh0bWxEaXJlY3RpdmUpIHtcbiAgICAgICAgdmFyIHJldmVyc2VXYWxrZXIgPSBuZXcgRE9NQ2hpbGRyZW5XYWxrZXIoZWxlbWVudC5lbCk7XG5cbiAgICAgICAgZWFjaChlbGVtZW50LmFOb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoYU5vZGVDaGlsZCkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbi5wdXNoKGNyZWF0ZVJldmVyc2VOb2RlKGFOb2RlQ2hpbGQsIHJldmVyc2VXYWxrZXIsIGVsZW1lbnQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJldmVyc2VFbGVtZW50Q2hpbGRyZW47XG5cblxuLyoqXG4gKiBAZmlsZSDlpITnkIblhYPntKDnmoTlsZ7mgKfmk43kvZxcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBnZXRQcm9wSGFuZGxlciA9IHJlcXVpcmUoJy4vZ2V0LXByb3AtaGFuZGxlcicpO1xuXG4vKipcbiAqIOWkhOeQhuWFg+e0oOWxnuaAp+aTjeS9nFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOWFg+e0oOWvueixoVxuICogQHBhcmFtIHsqfSB2YWx1ZSDlsZ7mgKflgLxcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wIOWxnuaAp+S/oeaBr+WvueixoVxuICovXG5mdW5jdGlvbiBoYW5kbGVQcm9wKGVsZW1lbnQsIHZhbHVlLCBwcm9wKSB7XG4gICAgdmFyIG5hbWUgPSBwcm9wLm5hbWU7XG4gICAgZ2V0UHJvcEhhbmRsZXIoZWxlbWVudC50YWdOYW1lLCBuYW1lKS5wcm9wKGVsZW1lbnQuZWwsIHZhbHVlLCBuYW1lLCBlbGVtZW50LCBwcm9wKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaGFuZGxlUHJvcDtcblxuXG4vKipcbiAqIEBmaWxlIOWIm+W7uuiKgueCueWvueW6lOeahCBIVE1MRWxlbWVudCDkuLvlhYPntKBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBjcmVhdGVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvY3JlYXRlLWVsJyk7XG4vLyB2YXIgaGFuZGxlUHJvcCA9IHJlcXVpcmUoJy4vaGFuZGxlLXByb3AnKTtcbi8vIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL2xpZmUtY3ljbGUnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG5cbnZhciBlbXB0eVByb3BXaGVuQ3JlYXRlID0ge1xuICAgICdjbGFzcyc6IDEsXG4gICAgJ3N0eWxlJzogMSxcbiAgICAnaWQnOiAxXG59O1xuXG4vKipcbiAqIOWIm+W7uuiKgueCueWvueW6lOeahCBIVE1MRWxlbWVudCDkuLvlhYPntKBcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bkNyZWF0ZSgpIHtcbiAgICBpZiAoIXRoaXMubGlmZUN5Y2xlLmNyZWF0ZWQpIHtcbiAgICAgICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUucGFpbnRpbmc7XG5cbiAgICAgICAgdmFyIGlzQ29tcG9uZW50ID0gdGhpcy5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVDtcbiAgICAgICAgdmFyIHNvdXJjZU5vZGUgPSB0aGlzLmFOb2RlLmhvdHNwb3Quc291cmNlTm9kZTtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5hTm9kZS5wcm9wcztcblxuICAgICAgICBpZiAoc291cmNlTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IHNvdXJjZU5vZGUuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICBwcm9wcyA9IHRoaXMuYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gY3JlYXRlRWwodGhpcy50YWdOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gaXNDb21wb25lbnRcbiAgICAgICAgICAgICAgICA/IGV2YWxFeHByKHByb3AuZXhwciwgdGhpcy5kYXRhLCB0aGlzKVxuICAgICAgICAgICAgICAgIDogZXZhbEV4cHIocHJvcC5leHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlIHx8ICFlbXB0eVByb3BXaGVuQ3JlYXRlW3Byb3AubmFtZV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVQcm9wKHRoaXMsIHZhbHVlLCBwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RvUGhhc2UoJ2NyZWF0ZWQnKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRPd25DcmVhdGU7XG5cblxuLyoqXG4gKiBAZmlsZSDlsIblhYPntKBhdHRhY2jliLDpobXpnaJcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBjcmVhdGVOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtbm9kZScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcblxuLyoqXG4gKiDlsIblhYPntKBhdHRhY2jliLDpobXpnaJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKDoioLngrlcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOimgea3u+WKoOWIsOeahOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudO+8nX0gYmVmb3JlRWwg6KaB5re75Yqg5Yiw5ZOq5Liq5YWD57Sg5LmL5YmNXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRBdHRhY2goZWxlbWVudCwgcGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgZWxlbWVudC5fY3JlYXRlKCk7XG4gICAgaW5zZXJ0QmVmb3JlKGVsZW1lbnQuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICBpZiAoIWVsZW1lbnQuX2NvbnRlbnRSZWFkeSkge1xuICAgICAgICB2YXIgaHRtbERpcmVjdGl2ZSA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy5odG1sO1xuXG4gICAgICAgIGlmIChodG1sRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBlbGVtZW50LmVsLmlubmVySFRNTCA9IGV2YWxFeHByKGh0bWxEaXJlY3RpdmUudmFsdWUsIGVsZW1lbnQuc2NvcGUsIGVsZW1lbnQub3duZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGFOb2RlQ2hpbGRyZW4gPSBlbGVtZW50LmFOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhTm9kZUNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY3JlYXRlTm9kZShhTm9kZUNoaWxkcmVuW2ldLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgIGNoaWxkLmF0dGFjaChlbGVtZW50LmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuX2NvbnRlbnRSZWFkeSA9IDE7XG4gICAgfVxufVxuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRBdHRhY2g7XG5cblxuLyoqXG4gKiBAZmlsZSDlsIblhYPntKBhdHRhY2jliLDpobXpnaJcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGVsZW1lbnRBdHRhY2ggPSByZXF1aXJlKCcuL2VsZW1lbnQtYXR0YWNoJyk7XG5cbi8qKlxuICog5bCG5YWD57SgYXR0YWNo5Yiw6aG16Z2iXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bkF0dGFjaChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICBpZiAoIXRoaXMubGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIGVsZW1lbnRBdHRhY2godGhpcywgcGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoZWQoKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRPd25BdHRhY2g7XG5cblxuLyoqXG4gKiBAZmlsZSDojrflj5YgZWxlbWVudCDnmoQgdHJhbnNpdGlvbiDmjqfliLblr7nosaFcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBldmFsQXJncyA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1hcmdzJyk7XG4vLyB2YXIgZmluZE1ldGhvZCA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZmluZC1tZXRob2QnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG5cbi8qKlxuICog6I635Y+WIGVsZW1lbnQg55qEIHRyYW5zaXRpb24g5o6n5Yi25a+56LGhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQg5YWD57SgXG4gKiBAcmV0dXJuIHtPYmplY3Q/fVxuICovXG5mdW5jdGlvbiBlbGVtZW50R2V0VHJhbnNpdGlvbihlbGVtZW50KSB7XG4gICAgdmFyIGFOb2RlID0gZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVCA/IGVsZW1lbnQuZ2l2ZW5BTm9kZSA6IGVsZW1lbnQuYU5vZGU7XG4gICAgdmFyIGRpcmVjdGl2ZSA9IGFOb2RlICYmIGFOb2RlLmRpcmVjdGl2ZXMudHJhbnNpdGlvbjtcbiAgICB2YXIgb3duZXIgPSBlbGVtZW50Lm93bmVyO1xuXG4gICAgdmFyIHRyYW5zaXRpb247XG4gICAgaWYgKGRpcmVjdGl2ZSAmJiBvd25lcikge1xuICAgICAgICB0cmFuc2l0aW9uID0gZmluZE1ldGhvZChvd25lciwgZGlyZWN0aXZlLnZhbHVlLm5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdHJhbnNpdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb24uYXBwbHkoXG4gICAgICAgICAgICAgICAgb3duZXIsXG4gICAgICAgICAgICAgICAgZXZhbEFyZ3MoZGlyZWN0aXZlLnZhbHVlLmFyZ3MsIGVsZW1lbnQuc2NvcGUsIG93bmVyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2l0aW9uIHx8IGVsZW1lbnQudHJhbnNpdGlvbjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudEdldFRyYW5zaXRpb247XG5cblxuLyoqXG4gKiBAZmlsZSDlhYPntKDoioLngrnmiafooYxsZWF2ZeihjOS4ulxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVsZW1lbnRHZXRUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9lbGVtZW50LWdldC10cmFuc2l0aW9uJyk7XG5cblxuLyoqXG4gKiDlhYPntKDoioLngrnmiafooYxsZWF2ZeihjOS4ulxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOWFg+e0oFxuICovXG5mdW5jdGlvbiBlbGVtZW50TGVhdmUoZWxlbWVudCkge1xuICAgIHZhciBsaWZlQ3ljbGUgPSBlbGVtZW50LmxpZmVDeWNsZTtcbiAgICBpZiAobGlmZUN5Y2xlLmxlYXZpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmRpc3Bvc2VOb1RyYW5zaXRpb24pIHtcbiAgICAgICAgZWxlbWVudC5fZG9uZUxlYXZlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IGVsZW1lbnRHZXRUcmFuc2l0aW9uKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmICh0cmFuc2l0aW9uICYmIHRyYW5zaXRpb24ubGVhdmUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuX3RvUGhhc2UoJ2xlYXZpbmcnKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24ubGVhdmUoZWxlbWVudC5lbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuX2RvbmVMZWF2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50Ll9kb25lTGVhdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudExlYXZlO1xuXG5cbi8qKlxuICogQGZpbGUg5bCG5YWD57Sg5LuO6aG16Z2i5LiK56e76ZmkXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWxlbWVudExlYXZlID0gcmVxdWlyZSgnLi9lbGVtZW50LWxlYXZlJyk7XG5cbi8qKlxuICog5bCG5YWD57Sg5LuO6aG16Z2i5LiK56e76ZmkXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRPd25EZXRhY2goKSB7XG4gICAgZWxlbWVudExlYXZlKHRoaXMpO1xufVxuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRPd25EZXRhY2g7XG5cblxuLyoqXG4gKiBAZmlsZSDplIDmr4Hph4rmlL7lhYPntKBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlbGVtZW50TGVhdmUgPSByZXF1aXJlKCcuL2VsZW1lbnQtbGVhdmUnKTtcblxuLyoqXG4gKiDplIDmr4Hph4rmlL7lhYPntKBcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vVHJhbnNpdGlvbiDmmK/lkKbkuI3mmL7npLrov4fmuKHliqjnlLvmlYjmnpxcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bkRpc3Bvc2Uobm9EZXRhY2gsIG5vVHJhbnNpdGlvbikge1xuICAgIHRoaXMubGVhdmVEaXNwb3NlID0gMTtcbiAgICB0aGlzLmRpc3Bvc2VOb0RldGFjaCA9IG5vRGV0YWNoO1xuICAgIHRoaXMuZGlzcG9zZU5vVHJhbnNpdGlvbiA9IG5vVHJhbnNpdGlvbjtcblxuICAgIGVsZW1lbnRMZWF2ZSh0aGlzKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudE93bkRpc3Bvc2U7XG5cblxuLyoqXG4gKiBAZmlsZSDkuLrlhYPntKDnmoQgZWwg57uR5a6a5LqL5Lu2XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgb24gPSByZXF1aXJlKCcuLi9icm93c2VyL29uJyk7XG5cbi8qKlxuICog5Li65YWD57Sg55qEIGVsIOe7keWumuS6i+S7tlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOS6i+S7tuWQjVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5ZmoXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNhcHR1cmUg5piv5ZCm5piv5o2V6I636Zi25q616Kem5Y+RXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRPd25PbkVsKG5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYXB0dXJlID0gISFjYXB0dXJlO1xuICAgICAgICB0aGlzLl9lbEZucy5wdXNoKFtuYW1lLCBsaXN0ZW5lciwgY2FwdHVyZV0pO1xuICAgICAgICBvbih0aGlzLmVsLCBuYW1lLCBsaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duT25FbDtcblxuXG4vKipcbiAqIEBmaWxlICDkuovku7bnu5HlrprkuI3lrZjlnKjnmoQgd2FybmluZ1xuICogQGF1dGhvciB2YXJzaGEod2FuZ3NodW9ucHVAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG5cbi8vICNbYmVnaW5dIGVycm9yXG4vKipcbiAqIOS6i+S7tue7keWumuS4jeWtmOWcqOeahCB3YXJuaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50QmluZCDkuovku7bnu5Hlrprlr7nosaFcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nmoTnu4Tku7blr7nosaFcbiAqL1xuZnVuY3Rpb24gd2FybkV2ZW50TGlzdGVuTWV0aG9kKGV2ZW50QmluZCwgb3duZXIpIHtcbiAgICB2YXIgdmFsaWQgPSB0cnVlO1xuICAgIHZhciBtZXRob2QgPSBvd25lcjtcbiAgICBlYWNoKGV2ZW50QmluZC5leHByLm5hbWUucGF0aHMsIGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIGlmICghcGF0aC52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kID0gbWV0aG9kW3BhdGgudmFsdWVdO1xuICAgICAgICB2YWxpZCA9ICEhbWV0aG9kO1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIHZhciBwYXRocyA9IFtdO1xuICAgICAgICBlYWNoKGV2ZW50QmluZC5leHByLm5hbWUucGF0aHMsIGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSAnW1NBTiBXQVJOSU5HXSAnICsgZXZlbnRCaW5kLm5hbWUgKyAnIGxpc3RlbiBmYWlsLFwiJyArIHBhdGhzLmpvaW4oJy4nKSArICdcIiBub3QgZXhpc3QnO1xuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0JyAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICB9XG59XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gd2FybkV2ZW50TGlzdGVuTWV0aG9kO1xuXG5cbi8qKlxuICogQGZpbGUg5a6M5oiQ5YWD57SgIGF0dGFjaGVkIOWQjueahOihjOS4ulxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgYmluZCA9IHJlcXVpcmUoJy4uL3V0aWwvYmluZCcpO1xuLy8gdmFyIGVtcHR5ID0gcmVxdWlyZSgnLi4vdXRpbC9lbXB0eScpO1xuLy8gdmFyIGlzQnJvd3NlciA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaXMtYnJvd3NlcicpO1xuLy8gdmFyIHRyaWdnZXIgPSByZXF1aXJlKCcuLi9icm93c2VyL3RyaWdnZXInKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgZWxlbWVudEdldFRyYW5zaXRpb24gPSByZXF1aXJlKCcuL2VsZW1lbnQtZ2V0LXRyYW5zaXRpb24nKTtcbi8vIHZhciBldmVudERlY2xhcmF0aW9uTGlzdGVuZXIgPSByZXF1aXJlKCcuL2V2ZW50LWRlY2xhcmF0aW9uLWxpc3RlbmVyJyk7XG4vLyB2YXIgZ2V0UHJvcEhhbmRsZXIgPSByZXF1aXJlKCcuL2dldC1wcm9wLWhhbmRsZXInKTtcbi8vIHZhciB3YXJuRXZlbnRMaXN0ZW5NZXRob2QgPSByZXF1aXJlKCcuL3dhcm4tZXZlbnQtbGlzdGVuLW1ldGhvZCcpO1xuXG4vKipcbiAqIOWPjOe7kei+k+WFpeahhkNvbXBvc2l0aW9uRW5k5LqL5Lu255uR5ZCs5Ye95pWwXG4gKlxuICogQGlubmVyXG4gKi9cbmZ1bmN0aW9uIGlucHV0T25Db21wb3NpdGlvbkVuZCgpIHtcbiAgICBpZiAoIXRoaXMuY29tcG9zaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvc2luZyA9IDA7XG5cbiAgICB0cmlnZ2VyKHRoaXMsICdpbnB1dCcpO1xufVxuXG4vKipcbiAqIOWPjOe7kei+k+WFpeahhkNvbXBvc2l0aW9uU3RhcnTkuovku7bnm5HlkKzlh73mlbBcbiAqXG4gKiBAaW5uZXJcbiAqL1xuZnVuY3Rpb24gaW5wdXRPbkNvbXBvc2l0aW9uU3RhcnQoKSB7XG4gICAgdGhpcy5jb21wb3NpbmcgPSAxO1xufVxuXG5mdW5jdGlvbiB4UHJvcE91dHB1dGVyKHhQcm9wLCBkYXRhKSB7XG4gICAgZ2V0UHJvcEhhbmRsZXIodGhpcy50YWdOYW1lLCB4UHJvcC5uYW1lKS5vdXRwdXQodGhpcywgeFByb3AsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiBpbnB1dFhQcm9wT3V0cHV0ZXIoZWxlbWVudCwgeFByb3AsIGRhdGEpIHtcbiAgICB2YXIgb3V0cHV0ZXIgPSBiaW5kKHhQcm9wT3V0cHV0ZXIsIGVsZW1lbnQsIHhQcm9wLCBkYXRhKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvc2luZykge1xuICAgICAgICAgICAgb3V0cHV0ZXIoZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKipcbiAqIOWujOaIkOWFg+e0oCBhdHRhY2hlZCDlkI7nmoTooYzkuLpcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKDoioLngrlcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93bkF0dGFjaGVkKCkge1xuICAgIHRoaXMuX3RvUGhhc2UoJ2NyZWF0ZWQnKTtcblxuICAgIHZhciBpc0NvbXBvbmVudCA9IHRoaXMubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFQ7XG4gICAgdmFyIGRhdGEgPSBpc0NvbXBvbmVudCA/IHRoaXMuZGF0YSA6IHRoaXMuc2NvcGU7XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1yZWRlY2xhcmUgKi9cblxuICAgIC8vIOWkhOeQhuiHqui6q+WPmOWMluaXtuWPjOWQkee7keWumueahOmAu+i+kVxuICAgIHZhciB4UHJvcHMgPSB0aGlzLmFOb2RlLmhvdHNwb3QueFByb3BzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0geFByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgeFByb3AgPSB4UHJvcHNbaV07XG5cbiAgICAgICAgc3dpdGNoICh4UHJvcC5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyICYmIHdpbmRvdy5Db21wb3NpdGlvbkV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25FbCgnY2hhbmdlJywgaW5wdXRPbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkVsKCdjb21wb3NpdGlvbnN0YXJ0JywgaW5wdXRPbkNvbXBvc2l0aW9uU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NvbXBvc2l0aW9uZW5kJywgaW5wdXRPbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25FbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJ29uaW5wdXQnIGluIHRoaXMuZWwpID8gJ2lucHV0JyA6ICdwcm9wZXJ0eWNoYW5nZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRYUHJvcE91dHB1dGVyKHRoaXMsIHhQcm9wLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NoYW5nZScsIGJpbmQoeFByb3BPdXRwdXRlciwgdGhpcywgeFByb3AsIGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnY2hlY2tlZCc6XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmVsLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkVsKCdjbGljaycsIGJpbmQoeFByb3BPdXRwdXRlciwgdGhpcywgeFByb3AsIGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBiaW5kIGV2ZW50c1xuICAgIHZhciBldmVudHMgPSBpc0NvbXBvbmVudFxuICAgICAgICA/IHRoaXMuYU5vZGUuZXZlbnRzLmNvbmNhdCh0aGlzLm5hdGl2ZUV2ZW50cylcbiAgICAgICAgOiB0aGlzLmFOb2RlLmV2ZW50cztcblxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgZXZlbnRCaW5kID0gZXZlbnRzW2ldO1xuICAgICAgICB2YXIgb3duZXIgPSBpc0NvbXBvbmVudCA/IHRoaXMgOiB0aGlzLm93bmVyO1xuXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpuaYr25hdGl2ZUV2ZW5077yM5LiL6Z2i55qEd2FybuaWueazleWSjOS6i+S7tue7keWumumDvemcgOimgVxuICAgICAgICAvLyDkvp3mraTmjIflrppldmVudEJpbmQuZXhwci5uYW1l5L2N5LqOb3duZXLov5jmmK9vd25lci5vd25lcuS4ilxuICAgICAgICBpZiAoZXZlbnRCaW5kLm1vZGlmaWVyLm5hdGl2ZSkge1xuICAgICAgICAgICAgb3duZXIgPSBvd25lci5vd25lcjtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLnNjb3BlIHx8IG93bmVyLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICB3YXJuRXZlbnRMaXN0ZW5NZXRob2QoZXZlbnRCaW5kLCBvd25lcik7XG4gICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgIHRoaXMuX29uRWwoXG4gICAgICAgICAgICBldmVudEJpbmQubmFtZSxcbiAgICAgICAgICAgIGJpbmQoXG4gICAgICAgICAgICAgICAgZXZlbnREZWNsYXJhdGlvbkxpc3RlbmVyLFxuICAgICAgICAgICAgICAgIG93bmVyLFxuICAgICAgICAgICAgICAgIGV2ZW50QmluZCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBldmVudEJpbmQubW9kaWZpZXIuY2FwdHVyZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuX3RvUGhhc2UoJ2F0dGFjaGVkJyk7XG5cblxuICAgIGlmICh0aGlzLl9pc0luaXRGcm9tRWwpIHtcbiAgICAgICAgdGhpcy5faXNJbml0RnJvbUVsID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IGVsZW1lbnRHZXRUcmFuc2l0aW9uKHRoaXMpO1xuICAgICAgICBpZiAodHJhbnNpdGlvbiAmJiB0cmFuc2l0aW9uLmVudGVyKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLmVudGVyKHRoaXMuZWwsIGVtcHR5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudE93bkF0dGFjaGVkO1xuXG5cbi8qKlxuICogQGZpbGUg6ZSA5q+B5YWD57Sg6IqC54K5XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciB1biA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvdW4nKTtcbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2VDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuJyk7XG4vLyB2YXIgbm9kZURpc3Bvc2UgPSByZXF1aXJlKCcuL25vZGUtZGlzcG9zZScpO1xuXG4vKipcbiAqIOmUgOavgeWFg+e0oOiKgueCuVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOimgemUgOavgeeahOWFg+e0oOiKgueCuVxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zIOmUgOavgeihjOS4uueahOWPguaVsFxuICovXG5mdW5jdGlvbiBlbGVtZW50RGlzcG9zZShlbGVtZW50KSB7XG4gICAgZWxlbWVudERpc3Bvc2VDaGlsZHJlbihlbGVtZW50LCAxLCAxKTtcblxuICAgIC8vIGVsIOS6i+S7tuino+e7kVxuICAgIHZhciBsZW4gPSBlbGVtZW50Ll9lbEZucy5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgIHZhciBmbiA9IGVsZW1lbnQuX2VsRm5zW2xlbl07XG4gICAgICAgIHVuKGVsZW1lbnQuZWwsIGZuWzBdLCBmblsxXSwgZm5bMl0pO1xuICAgIH1cbiAgICBlbGVtZW50Ll9lbEZucyA9IG51bGw7XG5cblxuICAgIC8vIOWmguaenOayoeaciXBhcmVudO+8jOivtOaYjuaYr+S4gOS4qnJvb3QgY29tcG9uZW5077yM5LiA5a6a6KaB5LuOZG9t5qCR5LitcmVtb3ZlXG4gICAgaWYgKCFlbGVtZW50LmRpc3Bvc2VOb0RldGFjaCB8fCAhZWxlbWVudC5wYXJlbnQpIHtcbiAgICAgICAgcmVtb3ZlRWwoZWxlbWVudC5lbCk7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQuX3RvUGhhc2UpIHtcbiAgICAgICAgZWxlbWVudC5fdG9QaGFzZSgnZGV0YWNoZWQnKTtcbiAgICB9XG5cbiAgICBub2RlRGlzcG9zZShlbGVtZW50KTtcbn1cblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50RGlzcG9zZTtcblxuXG4vKipcbiAqIEBmaWxlIOWIneWni+WMliBlbGVtZW50IOiKgueCueeahCB0YWdOYW1lIOWkhOeQhlxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGllT2xkVGhhbjkgPSByZXF1aXJlKCcuLi9icm93c2VyL2llLW9sZC10aGFuLTknKTtcblxuLyoqXG4gKiDliJ3lp4vljJYgZWxlbWVudCDoioLngrnnmoQgdGFnTmFtZSDlpITnkIZcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSDoioLngrnlr7nosaFcbiAqL1xuZnVuY3Rpb24gZWxlbWVudEluaXRUYWdOYW1lKG5vZGUpIHtcbiAgICBub2RlLnRhZ05hbWUgPSBub2RlLnRhZ05hbWUgfHwgbm9kZS5hTm9kZS50YWdOYW1lIHx8ICdkaXYnO1xuXG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICAvLyBpZTgtIOS4jeaUr+aMgWlubmVySFRNTOi+k+WHuuiHquWumuS5ieagh+etvlxuICAgIGlmIChpZU9sZFRoYW45ICYmIG5vZGUudGFnTmFtZS5pbmRleE9mKCctJykgPiAwKSB7XG4gICAgICAgIG5vZGUudGFnTmFtZSA9ICdkaXYnO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50SW5pdFRhZ05hbWU7XG5cblxuLyoqXG4gKiBAZmlsZSDnu5kgZGV2dG9vbCDlj5HpgJrnn6Xmtojmga9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBpc0Jyb3dzZXIgPSByZXF1aXJlKCcuLi9icm93c2VyL2lzLWJyb3dzZXInKTtcblxuLy8gI1tiZWdpbl0gZGV2dG9vbFxudmFyIHNhbjRkZXZ0b29sO1xuXG4vKipcbiAqIOe7mSBkZXZ0b29sIOWPkemAmuefpea2iOaBr1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOa2iOaBr+WQjeensFxuICogQHBhcmFtIHsqfSBhcmcg5raI5oGv5Y+C5pWwXG4gKi9cbmZ1bmN0aW9uIGVtaXREZXZ0b29sKG5hbWUsIGFyZykge1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgc2FuNGRldnRvb2wgJiYgc2FuNGRldnRvb2wuZGVidWcgJiYgd2luZG93Ll9fc2FuX2RldnRvb2xfXykge1xuICAgICAgICB3aW5kb3cuX19zYW5fZGV2dG9vbF9fLmVtaXQobmFtZSwgYXJnKTtcbiAgICB9XG59XG5cbmVtaXREZXZ0b29sLnN0YXJ0ID0gZnVuY3Rpb24gKG1haW4pIHtcbiAgICBzYW40ZGV2dG9vbCA9IG1haW47XG4gICAgZW1pdERldnRvb2woJ3NhbicsIG1haW4pO1xufTtcbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbWl0RGV2dG9vbDtcblxuXG4vKipcbiAqIEBmaWxlIOe7hOS7tuexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGJpbmQgPSByZXF1aXJlKCcuLi91dGlsL2JpbmQnKTtcbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIGV4dGVuZCA9IHJlcXVpcmUoJy4uL3V0aWwvZXh0ZW5kJyk7XG4vLyB2YXIgbmV4dFRpY2sgPSByZXF1aXJlKCcuLi91dGlsL25leHQtdGljaycpO1xuLy8gdmFyIGVtaXREZXZ0b29sID0gcmVxdWlyZSgnLi4vdXRpbC9lbWl0LWRldnRvb2wnKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtZXhwcicpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIHBvc3RQcm9wID0gcmVxdWlyZSgnLi4vcGFyc2VyL3Bvc3QtcHJvcCcpO1xuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vIHZhciBEYXRhID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhJyk7XG4vLyB2YXIgZXZhbEV4cHIgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gdmFyIGNoYW5nZUV4cHJDb21wYXJlID0gcmVxdWlyZSgnLi4vcnVudGltZS9jaGFuZ2UtZXhwci1jb21wYXJlJyk7XG4vLyB2YXIgY29tcGlsZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcGlsZS1jb21wb25lbnQnKTtcbi8vIHZhciBjb21wb25lbnRQcmVoZWF0ID0gcmVxdWlyZSgnLi9jb21wb25lbnQtcHJlaGVhdCcpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIGdldEFOb2RlUHJvcCA9IHJlcXVpcmUoJy4vZ2V0LWEtbm9kZS1wcm9wJyk7XG4vLyB2YXIgaXNEYXRhQ2hhbmdlQnlFbGVtZW50ID0gcmVxdWlyZSgnLi9pcy1kYXRhLWNoYW5nZS1ieS1lbGVtZW50Jyk7XG4vLyB2YXIgZXZlbnREZWNsYXJhdGlvbkxpc3RlbmVyID0gcmVxdWlyZSgnLi9ldmVudC1kZWNsYXJhdGlvbi1saXN0ZW5lcicpO1xuLy8gdmFyIHJldmVyc2VFbGVtZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3JldmVyc2UtZWxlbWVudC1jaGlsZHJlbicpO1xuLy8gdmFyIGNhbWVsQ29tcG9uZW50QmluZHMgPSByZXF1aXJlKCcuL2NhbWVsLWNvbXBvbmVudC1iaW5kcycpO1xuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcbi8vIHZhciBlbGVtZW50SW5pdFRhZ05hbWUgPSByZXF1aXJlKCcuL2VsZW1lbnQtaW5pdC10YWctbmFtZScpO1xuLy8gdmFyIGVsZW1lbnRPd25BdHRhY2hlZCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tYXR0YWNoZWQnKTtcbi8vIHZhciBlbGVtZW50RGlzcG9zZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlJyk7XG4vLyB2YXIgZWxlbWVudFVwZGF0ZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LXVwZGF0ZS1jaGlsZHJlbicpO1xuLy8gdmFyIGVsZW1lbnRPd25PbkVsID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1vbi1lbCcpO1xuLy8gdmFyIGVsZW1lbnRPd25DcmVhdGUgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWNyZWF0ZScpO1xuLy8gdmFyIGVsZW1lbnRPd25BdHRhY2ggPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWF0dGFjaCcpO1xuLy8gdmFyIGVsZW1lbnRPd25EZXRhY2ggPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWRldGFjaCcpO1xuLy8gdmFyIGVsZW1lbnRPd25EaXNwb3NlID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1kaXNwb3NlJyk7XG4vLyB2YXIgd2FybkV2ZW50TGlzdGVuTWV0aG9kID0gcmVxdWlyZSgnLi93YXJuLWV2ZW50LWxpc3Rlbi1tZXRob2QnKTtcbi8vIHZhciBlbGVtZW50RGlzcG9zZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LWRpc3Bvc2UtY2hpbGRyZW4nKTtcbi8vIHZhciBlbGVtZW50QXR0YWNoID0gcmVxdWlyZSgnLi9lbGVtZW50LWF0dGFjaCcpO1xuLy8gdmFyIGhhbmRsZVByb3AgPSByZXF1aXJlKCcuL2hhbmRsZS1wcm9wJyk7XG4vLyB2YXIgY3JlYXRlRGF0YVR5cGVzQ2hlY2tlciA9IHJlcXVpcmUoJy4uL3V0aWwvY3JlYXRlLWRhdGEtdHlwZXMtY2hlY2tlcicpO1xuXG5cblxuLyoqXG4gKiDnu4Tku7bnsbtcbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIOWIneWni+WMluWPguaVsFxuICovXG5mdW5jdGlvbiBDb21wb25lbnQob3B0aW9ucykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5zdGFydDtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5fZWxGbnMgPSBbXTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuc2xvdENoaWxkcmVuID0gW107XG5cbiAgICB2YXIgY2xhenogPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgdGhpcy5maWx0ZXJzID0gdGhpcy5maWx0ZXJzIHx8IGNsYXp6LmZpbHRlcnMgfHwge307XG4gICAgdGhpcy5jb21wdXRlZCA9IHRoaXMuY29tcHV0ZWQgfHwgY2xhenouY29tcHV0ZWQgfHwge307XG4gICAgdGhpcy5tZXNzYWdlcyA9IHRoaXMubWVzc2FnZXMgfHwgY2xhenoubWVzc2FnZXMgfHwge307XG4gICAgdGhpcy5zdWJUYWcgPSBvcHRpb25zLnN1YlRhZztcblxuICAgIC8vIGNvbXBpbGVcbiAgICBjb21waWxlQ29tcG9uZW50KGNsYXp6KTtcbiAgICBjb21wb25lbnRQcmVoZWF0KGNsYXp6KTtcblxuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIHByb3RvQU5vZGUgPSBjbGF6ei5wcm90b3R5cGUuYU5vZGU7XG5cbiAgICBtZS5naXZlbkFOb2RlID0gb3B0aW9ucy5hTm9kZTtcbiAgICBtZS5naXZlbk5hbWVkU2xvdEJpbmRzID0gW107XG4gICAgbWUuZ2l2ZW5TbG90cyA9IHtcbiAgICAgICAgbmFtZWQ6IHt9XG4gICAgfTtcblxuICAgIHRoaXMub3duZXIgPSBvcHRpb25zLm93bmVyO1xuICAgIHRoaXMuc2NvcGUgPSBvcHRpb25zLnNjb3BlO1xuICAgIHRoaXMuZWwgPSBvcHRpb25zLmVsO1xuXG4gICAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUXG4gICAgICAgICAgICA/IHBhcmVudFxuICAgICAgICAgICAgOiBwYXJlbnQgJiYgcGFyZW50LnBhcmVudENvbXBvbmVudDtcbiAgICB9XG5cbiAgICB0aGlzLmlkID0gZ3VpZCgpO1xuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmICh0aGlzLmVsKSB7XG4gICAgICAgIHZhciBmaXJzdENvbW1lbnROb2RlID0gdGhpcy5lbC5maXJzdENoaWxkO1xuICAgICAgICBpZiAoZmlyc3RDb21tZW50Tm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgZmlyc3RDb21tZW50Tm9kZSA9IGZpcnN0Q29tbWVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlyc3RDb21tZW50Tm9kZSAmJiBmaXJzdENvbW1lbnROb2RlLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAgICAgICB2YXIgc3R1bXBNYXRjaCA9IGZpcnN0Q29tbWVudE5vZGUuZGF0YS5tYXRjaCgvXlxccypzLWRhdGE6KFtcXHNcXFNdKyk/JC8pO1xuICAgICAgICAgICAgaWYgKHN0dW1wTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R1bXBUZXh0ID0gc3R1bXBNYXRjaFsxXTtcblxuICAgICAgICAgICAgICAgIC8vIGZpbGwgY29tcG9uZW50IGRhdGFcbiAgICAgICAgICAgICAgICBvcHRpb25zLmRhdGEgPSAobmV3IEZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAncmV0dXJuICcgKyBzdHVtcFRleHQucmVwbGFjZSgvXltcXHNcXG5dKi8sICcnKVxuICAgICAgICAgICAgICAgICkpKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RDb21tZW50Tm9kZS5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWwoZmlyc3RDb21tZW50Tm9kZS5wcmV2aW91c1NpYmxpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZW1vdmVFbChmaXJzdENvbW1lbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIC8vIG5hdGl2ZeS6i+S7tuaVsOe7hFxuICAgIHRoaXMubmF0aXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAodGhpcy5naXZlbkFOb2RlKSB7XG4gICAgICAgIC8vIOe7hOS7tui/kOihjOaXtuS8oOWFpeeahOe7k+aehO+8jOWBmnNsb3Top6PmnpBcbiAgICAgICAgdGhpcy5fY3JlYXRlR2l2ZW5TbG90cygpO1xuXG4gICAgICAgIGVhY2godGhpcy5naXZlbkFOb2RlLmV2ZW50cywgZnVuY3Rpb24gKGV2ZW50QmluZCkge1xuICAgICAgICAgICAgLy8g5L+d5a2Y5b2T5YmN5a6e5L6L55qEbmF0aXZl5LqL5Lu277yM5LiL6Z2i5Yib5bu6YU5vZGXml7blgJnlgZrlkIjlubZcbiAgICAgICAgICAgIGlmIChldmVudEJpbmQubW9kaWZpZXIubmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgbWUubmF0aXZlRXZlbnRzLnB1c2goZXZlbnRCaW5kKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICB3YXJuRXZlbnRMaXN0ZW5NZXRob2QoZXZlbnRCaW5kLCBvcHRpb25zLm93bmVyKTtcbiAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICBtZS5vbihcbiAgICAgICAgICAgICAgICBldmVudEJpbmQubmFtZSxcbiAgICAgICAgICAgICAgICBiaW5kKGV2ZW50RGVjbGFyYXRpb25MaXN0ZW5lciwgb3B0aW9ucy5vd25lciwgZXZlbnRCaW5kLCAxLCBvcHRpb25zLnNjb3BlKSxcbiAgICAgICAgICAgICAgICBldmVudEJpbmRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGFnTmFtZSA9IHByb3RvQU5vZGUudGFnTmFtZSB8fCBtZS5naXZlbkFOb2RlLnRhZ05hbWU7XG4gICAgICAgIHRoaXMuYmluZHMgPSBjYW1lbENvbXBvbmVudEJpbmRzKHRoaXMuZ2l2ZW5BTm9kZS5wcm9wcyk7XG4gICAgfVxuXG4gICAgdGhpcy5fdG9QaGFzZSgnY29tcGlsZWQnKTtcblxuICAgIC8vIGluaXQgZGF0YVxuICAgIHRoaXMuZGF0YSA9IG5ldyBEYXRhKFxuICAgICAgICBleHRlbmQoXG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5pbml0RGF0YSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmluaXREYXRhKCkgfHwge30sXG4gICAgICAgICAgICBvcHRpb25zLmRhdGFcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBlbGVtZW50SW5pdFRhZ05hbWUodGhpcyk7XG5cbiAgICBlYWNoKHRoaXMuYmluZHMsIGZ1bmN0aW9uIChiaW5kKSB7XG4gICAgICAgIHBvc3RQcm9wKGJpbmQpO1xuXG4gICAgICAgIGlmIChtZS5zY29wZSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZXZhbEV4cHIoYmluZC5leHByLCBtZS5zY29wZSwgbWUub3duZXIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9lY29tZmUvc2FuL2lzc3Vlcy8xOTFcbiAgICAgICAgICAgICAgICBtZS5kYXRhLnNldChiaW5kLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAvLyDlnKjliJ3lp4vljJYgKyDmlbDmja7nu5HlrprlkI7vvIzlvIDlp4vmlbDmja7moKHpqoxcbiAgICAvLyBOT1RFOiDlj6rlnKjlvIDlj5HniYjmnKzkuK3ov5vooYzlsZ7mgKfmoKHpqoxcbiAgICB2YXIgZGF0YVR5cGVzID0gdGhpcy5kYXRhVHlwZXMgfHwgY2xhenouZGF0YVR5cGVzO1xuICAgIGlmIChkYXRhVHlwZXMpIHtcbiAgICAgICAgdmFyIGRhdGFUeXBlQ2hlY2tlciA9IGNyZWF0ZURhdGFUeXBlc0NoZWNrZXIoXG4gICAgICAgICAgICBkYXRhVHlwZXMsXG4gICAgICAgICAgICB0aGlzLnN1YlRhZyB8fCB0aGlzLm5hbWUgfHwgY2xhenoubmFtZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmRhdGEuc2V0VHlwZUNoZWNrZXIoZGF0YVR5cGVDaGVja2VyKTtcbiAgICAgICAgdGhpcy5kYXRhLmNoZWNrRGF0YVR5cGVzKCk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgdGhpcy5jb21wdXRlZERlcHMgPSB7fTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBndWFyZC1mb3ItaW4gKi9cbiAgICBmb3IgKHZhciBleHByIGluIHRoaXMuY29tcHV0ZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXB1dGVkRGVwc1tleHByXSkge1xuICAgICAgICAgICAgdGhpcy5fY2FsY0NvbXB1dGVkKGV4cHIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgZ3VhcmQtZm9yLWluICovXG5cbiAgICBpZiAoIXRoaXMuZGF0YUNoYW5nZXIpIHtcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlciA9IGJpbmQodGhpcy5fZGF0YUNoYW5nZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmRhdGEubGlzdGVuKHRoaXMuZGF0YUNoYW5nZXIpO1xuICAgIH1cbiAgICB0aGlzLl90b1BoYXNlKCdpbml0ZWQnKTtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAodGhpcy5lbCkge1xuICAgICAgICByZXZlcnNlRWxlbWVudENoaWxkcmVuKHRoaXMpO1xuICAgICAgICB0aGlzLl9hdHRhY2hlZCgpO1xuICAgIH1cblxuICAgIHZhciB3YWxrZXIgPSBvcHRpb25zLnJldmVyc2VXYWxrZXI7XG4gICAgaWYgKHdhbGtlcikge1xuICAgICAgICB2YXIgY3VycmVudE5vZGUgPSB3YWxrZXIuY3VycmVudDtcbiAgICAgICAgaWYgKGN1cnJlbnROb2RlICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gY3VycmVudE5vZGU7XG4gICAgICAgICAgICB3YWxrZXIuZ29OZXh0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXZlcnNlRWxlbWVudENoaWxkcmVuKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2F0dGFjaGVkKCk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5nZXRDb21wb25lbnRUeXBlID0gZnVuY3Rpb24gKGFOb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1thTm9kZS50YWdOYW1lXTtcbn07XG5cbi8qKlxuICog5Yid5aeL5YyW5Yib5bu657uE5Lu25aSW6YOo5Lyg5YWl55qE5o+S5qe95a+56LGhXG4gKlxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9jcmVhdGVHaXZlblNsb3RzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgbWUuZ2l2ZW5TbG90cy5uYW1lZCA9IHt9O1xuXG4gICAgLy8g57uE5Lu26L+Q6KGM5pe25Lyg5YWl55qE57uT5p6E77yM5YGac2xvdOino+aekFxuICAgIG1lLmdpdmVuQU5vZGUgJiYgbWUuc2NvcGUgJiYgZWFjaChtZS5naXZlbkFOb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIHRhcmdldDtcblxuICAgICAgICB2YXIgc2xvdEJpbmQgPSAhY2hpbGQudGV4dEV4cHIgJiYgZ2V0QU5vZGVQcm9wKGNoaWxkLCAnc2xvdCcpO1xuICAgICAgICBpZiAoc2xvdEJpbmQpIHtcbiAgICAgICAgICAgICFtZS5naXZlblNsb3RJbml0ZWQgJiYgbWUuZ2l2ZW5OYW1lZFNsb3RCaW5kcy5wdXNoKHNsb3RCaW5kKTtcblxuICAgICAgICAgICAgdmFyIHNsb3ROYW1lID0gZXZhbEV4cHIoc2xvdEJpbmQuZXhwciwgbWUuc2NvcGUsIG1lLm93bmVyKTtcbiAgICAgICAgICAgIHRhcmdldCA9IG1lLmdpdmVuU2xvdHMubmFtZWRbc2xvdE5hbWVdO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBtZS5naXZlblNsb3RzLm5hbWVkW3Nsb3ROYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFtZS5naXZlblNsb3RJbml0ZWQpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1lLmdpdmVuU2xvdHMubm9uYW1lO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBtZS5naXZlblNsb3RzLm5vbmFtZSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0ICYmIHRhcmdldC5wdXNoKGNoaWxkKTtcbiAgICB9KTtcblxuICAgIG1lLmdpdmVuU2xvdEluaXRlZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIOexu+Wei+agh+ivhlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUubm9kZVR5cGUgPSBOb2RlVHlwZS5DTVBUO1xuXG4vKipcbiAqIOWcqOS4i+S4gOS4quabtOaWsOWRqOacn+i/kOihjOWHveaVsFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOimgei/kOihjOeahOWHveaVsFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbi8qIGVzbGludC1kaXNhYmxlIG9wZXJhdG9yLWxpbmVicmVhayAqL1xuLyoqXG4gKiDkvb/oioLngrnliLDovr7nm7jlupTnmoTnlJ/lkb3lkajmnJ9cbiAqXG4gKiBAcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDnlJ/lkb3lkajmnJ/lkI3np7BcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fY2FsbEhvb2sgPVxuQ29tcG9uZW50LnByb3RvdHlwZS5fdG9QaGFzZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLmxpZmVDeWNsZVtuYW1lXSkge1xuICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZVtuYW1lXSB8fCB0aGlzLmxpZmVDeWNsZTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpgJrnn6VkZXZ0b29sXG4gICAgICAgIC8vICNbYmVnaW5dIGRldnRvb2xcbiAgICAgICAgZW1pdERldnRvb2woJ2NvbXAtJyArIG5hbWUsIHRoaXMpO1xuICAgICAgICAvLyAjW2VuZF1cbiAgICB9XG59O1xuLyogZXNsaW50LWVuYWJsZSBvcGVyYXRvci1saW5lYnJlYWsgKi9cblxuXG4vKipcbiAqIOa3u+WKoOS6i+S7tuebkeWQrOWZqFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOS6i+S7tuWQjVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5ZmoXG4gKiBAcGFyYW0ge3N0cmluZz99IGRlY2xhcmF0aW9uIOWjsOaYjuW8j1xuICovXG5Db21wb25lbnQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyLCBkZWNsYXJhdGlvbikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RlbmVyc1tuYW1lXS5wdXNoKHtmbjogbGlzdGVuZXIsIGRlY2xhcmF0aW9uOiBkZWNsYXJhdGlvbn0pO1xuICAgIH1cbn07XG5cbi8qKlxuICog56e76Zmk5LqL5Lu255uR5ZCs5ZmoXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gbGlzdGVuZXIg55uR5ZCs5ZmoXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUudW4gPSBmdW5jdGlvbiAobmFtZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgbmFtZUxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW25hbWVdO1xuICAgIHZhciBsZW4gPSBuYW1lTGlzdGVuZXJzICYmIG5hbWVMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgIGlmICghbGlzdGVuZXIgfHwgbGlzdGVuZXIgPT09IG5hbWVMaXN0ZW5lcnNbbGVuXS5mbikge1xuICAgICAgICAgICAgbmFtZUxpc3RlbmVycy5zcGxpY2UobGVuLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLyoqXG4gKiDmtL7lj5Hkuovku7ZcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDkuovku7blkI1cbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCDkuovku7blr7nosaFcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gKG5hbWUsIGV2ZW50KSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICBlYWNoKHRoaXMubGlzdGVuZXJzW25hbWVdLCBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIuZm4uY2FsbChtZSwgZXZlbnQpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiDorqHnrpcgY29tcHV0ZWQg5bGe5oCn55qE5YC8XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wdXRlZEV4cHIgY29tcHV0ZWTooajovr7lvI/kuLJcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fY2FsY0NvbXB1dGVkID0gZnVuY3Rpb24gKGNvbXB1dGVkRXhwcikge1xuICAgIHZhciBjb21wdXRlZERlcHMgPSB0aGlzLmNvbXB1dGVkRGVwc1tjb21wdXRlZEV4cHJdO1xuICAgIGlmICghY29tcHV0ZWREZXBzKSB7XG4gICAgICAgIGNvbXB1dGVkRGVwcyA9IHRoaXMuY29tcHV0ZWREZXBzW2NvbXB1dGVkRXhwcl0gPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEuc2V0KGNvbXB1dGVkRXhwciwgdGhpcy5jb21wdXRlZFtjb21wdXRlZEV4cHJdLmNhbGwoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBnZXQ6IGJpbmQoZnVuY3Rpb24gKGV4cHIpIHtcbiAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgIGlmICghZXhwcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIGNhbGwgZ2V0IG1ldGhvZCBpbiBjb21wdXRlZCBuZWVkIGFyZ3VtZW50Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgaWYgKCFjb21wdXRlZERlcHNbZXhwcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWREZXBzW2V4cHJdID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21wdXRlZFtleHByXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FsY0NvbXB1dGVkKGV4cHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXRjaChleHByLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWxjQ29tcHV0ZWQoY29tcHV0ZWRFeHByKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5nZXQoZXhwcik7XG4gICAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICB9XG4gICAgfSkpO1xufTtcblxuLyoqXG4gKiDmtL7lj5Hmtojmga9cbiAqIOe7hOS7tuWPr+S7pea0vuWPkea2iOaBr++8jOa2iOaBr+Wwhuayv+edgOe7hOS7tuagkeWQkeS4iuS8oOmAku+8jOebtOWIsOmBh+S4iuesrOS4gOS4quWkhOeQhua2iOaBr+eahOe7hOS7tlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOa2iOaBr+WQjeensFxuICogQHBhcmFtIHsqP30gdmFsdWUg5raI5oGv5YC8XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgcGFyZW50Q29tcG9uZW50ID0gdGhpcy5wYXJlbnRDb21wb25lbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgIHZhciByZWNlaXZlciA9IHBhcmVudENvbXBvbmVudC5tZXNzYWdlc1tuYW1lXSB8fCBwYXJlbnRDb21wb25lbnQubWVzc2FnZXNbJyonXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZWNlaXZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmVjZWl2ZXIuY2FsbChcbiAgICAgICAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAge3RhcmdldDogdGhpcywgdmFsdWU6IHZhbHVlLCBuYW1lOiBuYW1lfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50Q29tcG9uZW50ID0gcGFyZW50Q29tcG9uZW50LnBhcmVudENvbXBvbmVudDtcbiAgICB9XG59O1xuXG4vKipcbiAqIOiOt+WPlue7hOS7tuWGhemDqOeahCBzbG90XG4gKlxuICogQHBhcmFtIHtzdHJpbmc9fSBuYW1lIHNsb3TlkI3np7DvvIznqbrkuLpkZWZhdWx0IHNsb3RcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnNsb3QgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGRyZW4pIHtcbiAgICAgICAgZWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IE5vZGVUeXBlLlNMT1QgJiYgY2hpbGQub3duZXIgPT09IG1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmlzTmFtZWQgJiYgY2hpbGQubmFtZSA9PT0gbmFtZVxuICAgICAgICAgICAgICAgICAgICB8fCAhY2hpbGQuaXNOYW1lZCAmJiAhbmFtZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5UcmF2ZXJzYWwoY2hpbGQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGlsZHJlblRyYXZlcnNhbCh0aGlzLmNoaWxkcmVuKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiDojrflj5bluKbmnIkgc2FuLXJlZiDmjIfku6TnmoTlrZDnu4Tku7blvJXnlKhcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDlrZDnu4Tku7bnmoTlvJXnlKjlkI1cbiAqIEByZXR1cm4ge0NvbXBvbmVudH1cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciByZWZUYXJnZXQ7XG4gICAgdmFyIG93bmVyID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuVHJhdmVyc2FsKGNoaWxkcmVuKSB7XG4gICAgICAgIGVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgZWxlbWVudFRyYXZlcnNhbChjaGlsZCk7XG4gICAgICAgICAgICByZXR1cm4gIXJlZlRhcmdldDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWxlbWVudFRyYXZlcnNhbChlbGVtZW50KSB7XG4gICAgICAgIHZhciBub2RlVHlwZSA9IGVsZW1lbnQubm9kZVR5cGU7XG4gICAgICAgIGlmIChub2RlVHlwZSA9PT0gTm9kZVR5cGUuVEVYVCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXIgPT09IG93bmVyKSB7XG4gICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgc3dpdGNoIChlbGVtZW50Lm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBOb2RlVHlwZS5FTEVNOlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmIGV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQgPSBlbGVtZW50LmVsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBOb2RlVHlwZS5DTVBUOlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBlbGVtZW50LmdpdmVuQU5vZGUuZGlyZWN0aXZlcy5yZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgZXZhbEV4cHIocmVmLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBvd25lcikgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIXJlZlRhcmdldCAmJiBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LnNsb3RDaGlsZHJlbik7XG4gICAgICAgIH1cblxuICAgICAgICAhcmVmVGFyZ2V0ICYmIGNoaWxkcmVuVHJhdmVyc2FsKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIGNoaWxkcmVuVHJhdmVyc2FsKHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIHJlZlRhcmdldDtcbn07XG5cblxuLyoqXG4gKiDop4blm77mm7TmlrDlh73mlbBcbiAqXG4gKiBAcGFyYW0ge0FycmF5P30gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5saWZlQ3ljbGUuZGlzcG9zZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtZSA9IHRoaXM7XG5cblxuICAgIHZhciBuZWVkUmVsb2FkRm9yU2xvdCA9IGZhbHNlO1xuICAgIHRoaXMuX25vdGlmeU5lZWRSZWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5lZWRSZWxvYWRGb3JTbG90ID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgZWFjaChjaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlRXhwciA9IGNoYW5nZS5leHByO1xuXG4gICAgICAgICAgICBlYWNoKG1lLmJpbmRzLCBmdW5jdGlvbiAoYmluZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVsYXRpb247XG4gICAgICAgICAgICAgICAgdmFyIHNldEV4cHIgPSBiaW5kSXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVFeHByID0gYmluZEl0ZW0uZXhwcjtcblxuICAgICAgICAgICAgICAgIGlmICghaXNEYXRhQ2hhbmdlQnlFbGVtZW50KGNoYW5nZSwgbWUsIHNldEV4cHIpXG4gICAgICAgICAgICAgICAgICAgICYmIChyZWxhdGlvbiA9IGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIHVwZGF0ZUV4cHIsIG1lLnNjb3BlKSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXhwciA9IGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNldEV4cHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uY29uY2F0KGNoYW5nZUV4cHIucGF0aHMuc2xpY2UodXBkYXRlRXhwci5wYXRocy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRXhwciA9IGNoYW5nZUV4cHI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS5kYXRhLnNldChzZXRFeHByLCBldmFsRXhwcih1cGRhdGVFeHByLCBtZS5zY29wZSwgbWUub3duZXIpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWUub3duZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGVhY2gobWUuZ2l2ZW5OYW1lZFNsb3RCaW5kcywgZnVuY3Rpb24gKGJpbmRJdGVtKSB7XG4gICAgICAgICAgICAgICAgbmVlZFJlbG9hZEZvclNsb3QgPSBuZWVkUmVsb2FkRm9yU2xvdCB8fCBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBiaW5kSXRlbS5leHByLCBtZS5zY29wZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFuZWVkUmVsb2FkRm9yU2xvdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobmVlZFJlbG9hZEZvclNsb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUdpdmVuU2xvdHMoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlcGFpbnRDaGlsZHJlbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNsb3RDaGlsZHJlbkxlbiA9IHRoaXMuc2xvdENoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChzbG90Q2hpbGRyZW5MZW4tLSkge1xuICAgICAgICAgICAgICAgIHZhciBzbG90Q2hpbGQgPSB0aGlzLnNsb3RDaGlsZHJlbltzbG90Q2hpbGRyZW5MZW5dO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNsb3RDaGlsZC5saWZlQ3ljbGUuZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbG90Q2hpbGRyZW4uc3BsaWNlKHNsb3RDaGlsZHJlbkxlbiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNsb3RDaGlsZC5pc0luc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3RDaGlsZC5fdXBkYXRlKGNoYW5nZXMsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkYXRhQ2hhbmdlcyA9IHRoaXMuZGF0YUNoYW5nZXM7XG4gICAgaWYgKGRhdGFDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZXMgPSBudWxsO1xuICAgICAgICBlYWNoKHRoaXMuYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICBlYWNoKGRhdGFDaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCBwcm9wLmV4cHIsIG1lLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHx8IHByb3AuaGludEV4cHIgJiYgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHByb3AuaGludEV4cHIsIG1lLmRhdGEpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVByb3AobWUsIGV2YWxFeHByKHByb3AuZXhwciwgbWUuZGF0YSwgbWUpLCBwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50VXBkYXRlQ2hpbGRyZW4odGhpcywgZGF0YUNoYW5nZXMpO1xuICAgICAgICBpZiAobmVlZFJlbG9hZEZvclNsb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUdpdmVuU2xvdHMoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlcGFpbnRDaGlsZHJlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG9QaGFzZSgndXBkYXRlZCcpO1xuXG4gICAgICAgIGlmICh0aGlzLm93bmVyKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVCaW5keE93bmVyKGRhdGFDaGFuZ2VzKTtcbiAgICAgICAgICAgIHRoaXMub3duZXIuX3VwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbm90aWZ5TmVlZFJlbG9hZCA9IG51bGw7XG59O1xuXG5Db21wb25lbnQucHJvdG90eXBlLl91cGRhdGVCaW5keE93bmVyID0gZnVuY3Rpb24gKGRhdGFDaGFuZ2VzKSB7XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIGlmICh0aGlzLm93bmVyKSB7XG4gICAgICAgIGVhY2goZGF0YUNoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgICAgIGVhY2gobWUuYmluZHMsIGZ1bmN0aW9uIChiaW5kSXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2VFeHByID0gY2hhbmdlLmV4cHI7XG4gICAgICAgICAgICAgICAgaWYgKGJpbmRJdGVtLnhcbiAgICAgICAgICAgICAgICAgICAgJiYgIWlzRGF0YUNoYW5nZUJ5RWxlbWVudChjaGFuZ2UsIG1lLm93bmVyKVxuICAgICAgICAgICAgICAgICAgICAmJiBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBwYXJzZUV4cHIoYmluZEl0ZW0ubmFtZSksIG1lLmRhdGEpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVTY29wZUV4cHIgPSBiaW5kSXRlbS5leHByO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlRXhwci5wYXRocy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTY29wZUV4cHIgPSBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5kSXRlbS5leHByLnBhdGhzLmNvbmNhdChjaGFuZ2VFeHByLnBhdGhzLnNsaWNlKDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lLnNjb3BlLnNldChcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNjb3BlRXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2YWxFeHByKGNoYW5nZUV4cHIsIG1lLmRhdGEsIG1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wOiBiaW5kSXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOmHjeaWsOe7mOWItue7hOS7tueahOWGheWuuVxuICog5b2TIGR5bmFtaWMgc2xvdCBuYW1lIOWPkeeUn+WPmOabtOaIliBzbG90IOWMuemFjeWPkeeUn+WPmOWMluaXtu+8jOmHjeaWsOe7mOWItlxuICog5Zyo57uE5Lu257qn5Yir6YeN57uY5pyJ54K557KX5pq077yM5L2G5piv6IO95L+d6K+B6KeG5Zu+57uT5p6c5q2j56Gu5oCnXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX3JlcGFpbnRDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKHRoaXMsIDAsIDEpO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIHRoaXMuX2NvbnRlbnRSZWFkeSA9IDA7XG4gICAgdGhpcy5zbG90Q2hpbGRyZW4gPSBbXTtcbiAgICBlbGVtZW50QXR0YWNoKHRoaXMpO1xufTtcblxuXG4vKipcbiAqIOe7hOS7tuWGhemDqOebkeWQrOaVsOaNruWPmOWMlueahOWHveaVsFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhbmdlIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9kYXRhQ2hhbmdlciA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICBpZiAodGhpcy5saWZlQ3ljbGUucGFpbnRpbmcgfHwgdGhpcy5saWZlQ3ljbGUuY3JlYXRlZCkge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YUNoYW5nZXMpIHtcbiAgICAgICAgICAgIG5leHRUaWNrKHRoaXMuX3VwZGF0ZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmRhdGFDaGFuZ2VzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5saWZlQ3ljbGUuaW5pdGVkICYmIHRoaXMub3duZXIpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQmluZHhPd25lcihbY2hhbmdlXSk7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIOebkeWQrOe7hOS7tueahOaVsOaNruWPmOWMllxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhTmFtZSDlj5jljJbnmoTmlbDmja7poblcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOebkeWQrOWHveaVsFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gKGRhdGFOYW1lLCBsaXN0ZW5lcikge1xuICAgIHZhciBkYXRhRXhwciA9IHBhcnNlRXhwcihkYXRhTmFtZSk7XG5cbiAgICB0aGlzLmRhdGEubGlzdGVuKGJpbmQoZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIGRhdGFFeHByLCB0aGlzLmRhdGEpKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2YWxFeHByKGRhdGFFeHByLCB0aGlzLmRhdGEsIHRoaXMpLCBjaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfSwgdGhpcykpO1xufTtcblxuLyoqXG4gKiDnu4Tku7bplIDmr4HnmoTooYzkuLpcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyDplIDmr4HooYzkuLrnmoTlj4LmlbBcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5kaXNwb3NlID0gZWxlbWVudE93bkRpc3Bvc2U7XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuX2RvbmVMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5sZWF2ZURpc3Bvc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpZmVDeWNsZS5kaXNwb3NlZCkge1xuICAgICAgICAgICAgLy8g6L+Z6YeM5LiN55So5oyo5Liq6LCD55SoIGRpc3Bvc2Ug5LqG77yM5Zug5Li6IGNoaWxkcmVuIOmHiuaUvumTvuS8muiwg+eUqOeahFxuICAgICAgICAgICAgdGhpcy5zbG90Q2hpbGRyZW4gPSBudWxsO1xuXG4gICAgICAgICAgICB0aGlzLmRhdGEudW5saXN0ZW4oKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YUNoYW5nZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kYXRhQ2hhbmdlcyA9IG51bGw7XG5cbiAgICAgICAgICAgIGVsZW1lbnREaXNwb3NlKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlTm9EZXRhY2gsXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlTm9UcmFuc2l0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBudWxsO1xuXG4gICAgICAgICAgICB0aGlzLmdpdmVuQU5vZGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5naXZlblNsb3RzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZ2l2ZW5OYW1lZFNsb3RCaW5kcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5saWZlQ3ljbGUuYXR0YWNoZWQpIHtcbiAgICAgICAgcmVtb3ZlRWwodGhpcy5lbCk7XG4gICAgICAgIHRoaXMuX3RvUGhhc2UoJ2RldGFjaGVkJyk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDlrozmiJDnu4Tku7YgYXR0YWNoZWQg5ZCO55qE6KGM5Li6XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQg5YWD57Sg6IqC54K5XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX2F0dGFjaGVkID0gZWxlbWVudE93bkF0dGFjaGVkO1xuXG5Db21wb25lbnQucHJvdG90eXBlLmF0dGFjaCA9IGVsZW1lbnRPd25BdHRhY2g7XG5Db21wb25lbnQucHJvdG90eXBlLmRldGFjaCA9IGVsZW1lbnRPd25EZXRhY2g7XG5Db21wb25lbnQucHJvdG90eXBlLl9jcmVhdGUgPSBlbGVtZW50T3duQ3JlYXRlO1xuQ29tcG9uZW50LnByb3RvdHlwZS5fb25FbCA9IGVsZW1lbnRPd25PbkVsO1xuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudDtcblxuXG4vKipcbiAqIEBmaWxlIOWIm+W7uue7hOS7tuexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIENvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50Jyk7XG4vLyB2YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuLi91dGlsL2luaGVyaXRzJyk7XG5cbi8qKlxuICog5Yib5bu657uE5Lu257G7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIOe7hOS7tuexu+eahOaWueazleihqFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGRlZmluZUNvbXBvbmVudChwcm90bykge1xuICAgIC8vIOWmguaenOS8oOWFpeS4gOS4quS4jeaYryBzYW4gY29tcG9uZW50IOeahCBjb25zdHJ1Y3Rvcu+8jOebtOaOpei/lOWbnuS4jeaYr+e7hOS7tuaehOmAoOWHveaVsFxuICAgIC8vIOi/meenjeWcuuaZr+WvvOiHtOeahOmUmeivryBzYW4g5LiN5LqI6ICD6JmRXG4gICAgaWYgKHR5cGVvZiBwcm90byA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgfVxuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAodHlwZW9mIHByb3RvICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRkFUQUxdIHBhcmFtIG11c3QgYmUgYSBwbGFpbiBvYmplY3QuJyk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxuXG4gICAgZnVuY3Rpb24gQ29tcG9uZW50Q2xhc3Mob3B0aW9uKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgQ29tcG9uZW50LmNhbGwodGhpcywgb3B0aW9uKTtcbiAgICB9XG5cbiAgICBDb21wb25lbnRDbGFzcy5wcm90b3R5cGUgPSBwcm90bztcbiAgICBpbmhlcml0cyhDb21wb25lbnRDbGFzcywgQ29tcG9uZW50KTtcblxuICAgIHJldHVybiBDb21wb25lbnRDbGFzcztcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZGVmaW5lQ29tcG9uZW50O1xuXG5cbi8qKlxuICogQGZpbGUg57yW6K+R57uE5Lu257G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBjcmVhdGVBTm9kZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYS1ub2RlJyk7XG4vLyB2YXIgcGFyc2VUZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9wYXJzZS10ZW1wbGF0ZScpO1xuLy8gdmFyIHBhcnNlVGV4dCA9IHJlcXVpcmUoJy4uL3BhcnNlci9wYXJzZS10ZXh0Jyk7XG4vLyB2YXIgZGVmaW5lQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9kZWZpbmUtY29tcG9uZW50Jyk7XG5cblxuLyoqXG4gKiDnvJbor5Hnu4Tku7bnsbvjgILpooTop6PmnpB0ZW1wbGF0ZeWSjGNvbXBvbmVudHNcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUNvbXBvbmVudChDb21wb25lbnRDbGFzcykge1xuICAgIHZhciBwcm90byA9IENvbXBvbmVudENsYXNzLnByb3RvdHlwZTtcblxuICAgIC8vIHByZSBkZWZpbmUgY29tcG9uZW50cyBjbGFzc1xuICAgIGlmICghcHJvdG8uaGFzT3duUHJvcGVydHkoJ19jbXB0UmVhZHknKSkge1xuICAgICAgICBwcm90by5jb21wb25lbnRzID0gQ29tcG9uZW50Q2xhc3MuY29tcG9uZW50cyB8fCBwcm90by5jb21wb25lbnRzIHx8IHt9O1xuICAgICAgICB2YXIgY29tcG9uZW50cyA9IHByb3RvLmNvbXBvbmVudHM7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudHMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgdmFyIGNvbXBvbmVudENsYXNzID0gY29tcG9uZW50c1trZXldO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudENsYXNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHNba2V5XSA9IGRlZmluZUNvbXBvbmVudChjb21wb25lbnRDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21wb25lbnRDbGFzcyA9PT0gJ3NlbGYnKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1trZXldID0gQ29tcG9uZW50Q2xhc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcm90by5fY21wdFJlYWR5ID0gMTtcbiAgICB9XG5cblxuICAgIC8vIHByZSBjb21waWxlIHRlbXBsYXRlXG4gICAgaWYgKCFwcm90by5oYXNPd25Qcm9wZXJ0eSgnYU5vZGUnKSkge1xuICAgICAgICBwcm90by5hTm9kZSA9IGNyZWF0ZUFOb2RlKCk7XG5cbiAgICAgICAgdmFyIHRwbCA9IENvbXBvbmVudENsYXNzLnRlbXBsYXRlIHx8IHByb3RvLnRlbXBsYXRlO1xuICAgICAgICBpZiAodHBsKSB7XG4gICAgICAgICAgICB2YXIgYU5vZGUgPSBwYXJzZVRlbXBsYXRlKHRwbCwge1xuICAgICAgICAgICAgICAgIHRyaW1XaGl0ZXNwYWNlOiBwcm90by50cmltV2hpdGVzcGFjZSB8fCBDb21wb25lbnRDbGFzcy50cmltV2hpdGVzcGFjZSxcbiAgICAgICAgICAgICAgICBkZWxpbWl0ZXJzOiBwcm90by5kZWxpbWl0ZXJzIHx8IENvbXBvbmVudENsYXNzLmRlbGltaXRlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGZpcnN0Q2hpbGQgPSBhTm9kZS5jaGlsZHJlblswXTtcblxuICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgIGlmIChhTm9kZS5jaGlsZHJlbi5sZW5ndGggIT09IDEgfHwgZmlyc3RDaGlsZC50ZXh0RXhwcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBGQVRBTF0gdGVtcGxhdGUgbXVzdCBoYXZlIGEgcm9vdCBlbGVtZW50LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgIHByb3RvLmFOb2RlID0gZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGlmIChmaXJzdENoaWxkLnRhZ05hbWUgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgICAgICAgICBmaXJzdENoaWxkLnRhZ05hbWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50UHJvcEV4dHJhID0ge1xuICAgICAgICAgICAgICAgICdjbGFzcyc6IHtuYW1lOiAnY2xhc3MnLCBleHByOiBwYXJzZVRleHQoJ3t7Y2xhc3MgfCBfY2xhc3MgfCBfc2VwKFwiIFwiKX19Jyl9LFxuICAgICAgICAgICAgICAgICdzdHlsZSc6IHtuYW1lOiAnc3R5bGUnLCBleHByOiBwYXJzZVRleHQoJ3t7c3R5bGUgfCBfc3R5bGUgfCBfc2VwKFwiO1wiKX19Jyl9LFxuICAgICAgICAgICAgICAgICdpZCc6IHtuYW1lOiAnaWQnLCBleHByOiBwYXJzZVRleHQoJ3t7aWR9fScpfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGxlbiA9IGZpcnN0Q2hpbGQucHJvcHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBmaXJzdENoaWxkLnByb3BzW2xlbl07XG4gICAgICAgICAgICAgICAgdmFyIGV4dHJhID0gY29tcG9uZW50UHJvcEV4dHJhW3Byb3AubmFtZV07XG5cbiAgICAgICAgICAgICAgICBpZiAoZXh0cmEpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDaGlsZC5wcm9wcy5zcGxpY2UobGVuLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UHJvcEV4dHJhW3Byb3AubmFtZV0gPSBwcm9wO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgIT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3AuZXhwci5zZWdzLnB1c2goZXh0cmEuZXhwci5zZWdzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3AuZXhwci52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpcnN0Q2hpbGQucHJvcHMucHVzaChcbiAgICAgICAgICAgICAgICBjb21wb25lbnRQcm9wRXh0cmFbJ2NsYXNzJ10sIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICAgICAgY29tcG9uZW50UHJvcEV4dHJhLnN0eWxlLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFByb3BFeHRyYS5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY29tcGlsZUNvbXBvbmVudDtcblxuXG4vKipcbiAqIEBmaWxlIOe7hOS7tumihOeDrVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBjcmVhdGVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvY3JlYXRlLWVsJyk7XG4vLyB2YXIgZ2V0UHJvcEhhbmRsZXIgPSByZXF1aXJlKCcuL2dldC1wcm9wLWhhbmRsZXInKTtcbi8vIHZhciBnZXRBTm9kZVByb3AgPSByZXF1aXJlKCcuL2dldC1hLW5vZGUtcHJvcCcpO1xuLy8gdmFyIGlzQnJvd3NlciA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvaXMtYnJvd3NlcicpO1xuXG4vKipcbiAqIOe7hOS7tumihOeDre+8jOWIhuaekOe7hOS7tmFOb2Rl55qE5pWw5o2u5byV55So562J5L+h5oGvXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ29tcG9uZW50Q2xhc3Mg57uE5Lu257G7XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudFByZWhlYXQoQ29tcG9uZW50Q2xhc3MpIHtcbiAgICB2YXIgc3RhY2sgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHJlY29yZEhvdHNwb3REYXRhKHJlZnMsIG5vdENvbnRlbnREYXRhKSB7XG4gICAgICAgIHZhciBsZW4gPSBzdGFjay5sZW5ndGg7XG4gICAgICAgIGVhY2goc3RhY2ssIGZ1bmN0aW9uIChhTm9kZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghbm90Q29udGVudERhdGEgfHwgaW5kZXggIT09IGxlbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBlYWNoKHJlZnMsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5kYXRhW3JlZl0gPSAxO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGFuYWx5c2VBTm9kZUhvdHNwb3QoYU5vZGUpIHtcbiAgICAgICAgaWYgKCFhTm9kZS5ob3RzcG90KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGFOb2RlKTtcblxuXG4gICAgICAgICAgICBpZiAoYU5vZGUudGV4dEV4cHIpIHtcbiAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90ID0ge2RhdGE6IHt9fTtcbiAgICAgICAgICAgICAgICByZWNvcmRIb3RzcG90RGF0YShhbmFseXNlRXhwckRhdGFIb3RzcG90KGFOb2RlLnRleHRFeHByKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlTm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyICYmIGFOb2RlLnRhZ05hbWUgJiYgIS9eKHRlbXBsYXRlfHNsb3R8c2VsZWN0fGlucHV0fG9wdGlvbikkL2kudGVzdChhTm9kZS50YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VOb2RlID0gY3JlYXRlRWwoYU5vZGUudGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNQcm9wczogW10sXG4gICAgICAgICAgICAgICAgICAgIHhQcm9wczogW10sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlTm9kZTogc291cmNlTm9kZVxuICAgICAgICAgICAgICAgIH07XG5cblxuICAgICAgICAgICAgICAgIC8vID09PSBhbmFseXNlIGhvdHNwb3QgZGF0YTogc3RhcnRcbiAgICAgICAgICAgICAgICBlYWNoKGFOb2RlLnZhcnMsIGZ1bmN0aW9uICh2YXJJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZEhvdHNwb3REYXRhKGFuYWx5c2VFeHByRGF0YUhvdHNwb3QodmFySXRlbS5leHByKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBlYWNoKGFOb2RlLnByb3BzLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRIb3RzcG90RGF0YShhbmFseXNlRXhwckRhdGFIb3RzcG90KHByb3AuZXhwcikpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFOb2RlLmRpcmVjdGl2ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IGFOb2RlLmRpcmVjdGl2ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkSG90c3BvdERhdGEoYW5hbHlzZUV4cHJEYXRhSG90c3BvdChkaXJlY3RpdmUudmFsdWUpLCBrZXkgIT09ICdodG1sJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgZ3VhcmQtZm9yLWluICovXG5cbiAgICAgICAgICAgICAgICBlYWNoKGFOb2RlLmVsc2VzLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5hbHlzZUFOb2RlSG90c3BvdChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBlYWNoKGFOb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5hbHlzZUFOb2RlSG90c3BvdChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gPT09IGFuYWx5c2UgaG90c3BvdCBkYXRhOiBlbmRcblxuXG4gICAgICAgICAgICAgICAgLy8gPT09IGFuYWx5c2UgaG90c3BvdCBwcm9wczogc3RhcnRcbiAgICAgICAgICAgICAgICBlYWNoKGFOb2RlLnByb3BzLCBmdW5jdGlvbiAocHJvcCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5wcm9wc1twcm9wLm5hbWVdID0gaW5kZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AubmFtZSA9PT0gJ2lkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcC5pZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LmlkUHJvcCA9IHByb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LmR5bmFtaWNQcm9wcy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3AuZXhwci52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFByb3BIYW5kbGVyKGFOb2RlLnRhZ05hbWUsIHByb3AubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb3Aoc291cmNlTm9kZSwgcHJvcC5leHByLnZhbHVlLCBwcm9wLm5hbWUsIGFOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLngpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LnhQcm9wcy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gaWUg5LiL77yM5aaC5p6cIG9wdGlvbiDmsqHmnIkgdmFsdWUg5bGe5oCn77yMc2VsZWN0LnZhbHVlID0geHgg5pON5L2c5LiN5Lya6YCJ5LitIG9wdGlvblxuICAgICAgICAgICAgICAgIC8vIOaJgOS7peayoeacieiuvue9riB2YWx1ZSDml7bvvIzpu5jorqTmioogb3B0aW9uIOeahOWGheWuueS9nOS4uiB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChhTm9kZS50YWdOYW1lID09PSAnb3B0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAmJiAhZ2V0QU5vZGVQcm9wKGFOb2RlLCAndmFsdWUnKVxuICAgICAgICAgICAgICAgICAgICAmJiBhTm9kZS5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVQcm9wID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHI6IGFOb2RlLmNoaWxkcmVuWzBdLnRleHRFeHByXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLnByb3BzLnB1c2godmFsdWVQcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHMucHVzaCh2YWx1ZVByb3ApO1xuICAgICAgICAgICAgICAgICAgICBhTm9kZS5ob3RzcG90LnByb3BzLnZhbHVlID0gYU5vZGUucHJvcHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gPT09IGFuYWx5c2UgaG90c3BvdCBwcm9wczogZW5kXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5hbHlzZUFOb2RlSG90c3BvdChDb21wb25lbnRDbGFzcy5wcm90b3R5cGUuYU5vZGUpO1xufVxuXG4vKipcbiAqIOWIhuaekOihqOi+vuW8j+eahOaVsOaNruW8leeUqFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOimgeWIhuaekOeahOihqOi+vuW8j1xuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoZXhwcikge1xuICAgIHZhciByZWZzID0gW107XG5cbiAgICBmdW5jdGlvbiBhbmFseXNlRXhwcnMoZXhwcnMpIHtcbiAgICAgICAgZWFjaChleHBycywgZnVuY3Rpb24gKGV4cHIpIHtcbiAgICAgICAgICAgIHJlZnMgPSByZWZzLmNvbmNhdChhbmFseXNlRXhwckRhdGFIb3RzcG90KGV4cHIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChleHByLnR5cGUpIHtcbiAgICAgICAgY2FzZSBFeHByVHlwZS5BQ0NFU1NPUjpcbiAgICAgICAgICAgIHZhciBwYXRocyA9IGV4cHIucGF0aHM7XG4gICAgICAgICAgICByZWZzLnB1c2gocGF0aHNbMF0udmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJlZnMucHVzaChwYXRoc1swXS52YWx1ZSArICcuJyArIChwYXRoc1sxXS52YWx1ZSB8fCAnKicpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYW5hbHlzZUV4cHJzKHBhdGhzLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRXhwclR5cGUuVU5BUlk6XG4gICAgICAgICAgICByZXR1cm4gYW5hbHlzZUV4cHJEYXRhSG90c3BvdChleHByLmV4cHIpO1xuXG4gICAgICAgIGNhc2UgRXhwclR5cGUuVEVYVDpcbiAgICAgICAgY2FzZSBFeHByVHlwZS5CSU5BUlk6XG4gICAgICAgIGNhc2UgRXhwclR5cGUuVEVSVElBUlk6XG4gICAgICAgICAgICBhbmFseXNlRXhwcnMoZXhwci5zZWdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRXhwclR5cGUuSU5URVJQOlxuICAgICAgICAgICAgcmVmcyA9IGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoZXhwci5leHByKTtcblxuICAgICAgICAgICAgZWFjaChleHByLmZpbHRlcnMsIGZ1bmN0aW9uIChmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBhbmFseXNlRXhwcnMoZmlsdGVyLm5hbWUucGF0aHMpO1xuICAgICAgICAgICAgICAgIGFuYWx5c2VFeHBycyhmaWx0ZXIuYXJncyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmcztcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY29tcG9uZW50UHJlaGVhdDtcblxuXG4vKipcbiAqIEBmaWxlIOWwhiBiaW5kcyDnmoQgbmFtZSDku44ga2ViYWJjYXNlIOi9rOaNouaIkCBjYW1lbGNhc2VcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBrZWJhYjJjYW1lbCA9IHJlcXVpcmUoJy4uL3V0aWwva2ViYWIyY2FtZWwnKTtcbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG5cbi8qKlxuICog5bCGIGJpbmRzIOeahCBuYW1lIOS7jiBrZWJhYmNhc2Ug6L2s5o2i5oiQIGNhbWVsY2FzZVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGJpbmRzIGJpbmRz6ZuG5ZCIXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gY2FtZWxDb21wb25lbnRCaW5kcyhiaW5kcykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBlYWNoKGJpbmRzLCBmdW5jdGlvbiAoYmluZCkge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBrZWJhYjJjYW1lbChiaW5kLm5hbWUpLFxuICAgICAgICAgICAgZXhwcjogYmluZC5leHByLFxuICAgICAgICAgICAgeDogYmluZC54LFxuICAgICAgICAgICAgcmF3OiBiaW5kLnJhd1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNhbWVsQ29tcG9uZW50QmluZHM7XG5cblxuLyoqXG4gKiBAZmlsZSDnvJbor5HmupDnoIHnmoQgaGVscGVyIOaWueazlembhuWQiFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcblxuLy8gI1tiZWdpbl0gc3NyXG4vLyBcbi8vIC8qKlxuLy8gICog57yW6K+R5rqQ56CB55qEIGhlbHBlciDmlrnms5Xpm4blkIjlr7nosaFcbi8vICAqL1xuLy8gdmFyIGNvbXBpbGVFeHByU291cmNlID0ge1xuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog5a2X56ym5Liy5a2X6Z2i5YyWXG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOmcgOimgeWtl+mdouWMlueahOWtl+espuS4slxuLy8gICAgICAqIEByZXR1cm4ge3N0cmluZ30g5a2X56ym5Liy5a2X6Z2i5YyW57uT5p6cXG4vLyAgICAgICovXG4vLyAgICAgc3RyaW5nTGl0ZXJhbGl6ZTogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICByZXR1cm4gJ1wiJ1xuLy8gICAgICAgICAgICAgKyBzb3VyY2Vcbi8vICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFx4NUMvZywgJ1xcXFxcXFxcJylcbi8vICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xceDBBL2csICdcXFxcbicpXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xceDA5L2csICdcXFxcdCcpXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xceDBEL2csICdcXFxccicpXG4vLyAgICAgICAgICAgICAgICAgLy8gLnJlcGxhY2UoIC9cXHgwOC9nLCAnXFxcXGInIClcbi8vICAgICAgICAgICAgICAgICAvLyAucmVwbGFjZSggL1xceDBDL2csICdcXFxcZicgKVxuLy8gICAgICAgICAgICAgKyAnXCInO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnlJ/miJDmlbDmja7orr/pl67ooajovr7lvI/ku6PnoIFcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7T2JqZWN0P30gYWNjZXNzb3JFeHByIGFjY2Vzc29y6KGo6L6+5byP5a+56LGhXG4vLyAgICAgICogQHJldHVybiB7c3RyaW5nfVxuLy8gICAgICAqL1xuLy8gICAgIGRhdGFBY2Nlc3M6IGZ1bmN0aW9uIChhY2Nlc3NvckV4cHIpIHtcbi8vICAgICAgICAgdmFyIGNvZGUgPSAnY29tcG9uZW50Q3R4LmRhdGEnO1xuLy8gICAgICAgICBpZiAoYWNjZXNzb3JFeHByKSB7XG4vLyAgICAgICAgICAgICBlYWNoKGFjY2Vzc29yRXhwci5wYXRocywgZnVuY3Rpb24gKHBhdGgpIHtcbi8vICAgICAgICAgICAgICAgICBpZiAocGF0aC50eXBlID09PSBFeHByVHlwZS5BQ0NFU1NPUikge1xuLy8gICAgICAgICAgICAgICAgICAgICBjb2RlICs9ICdbJyArIGNvbXBpbGVFeHByU291cmNlLmRhdGFBY2Nlc3MocGF0aCkgKyAnXSc7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBwYXRoLnZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlICs9ICcuJyArIHBhdGgudmFsdWU7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICBjYXNlICdudW1iZXInOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnWycgKyBwYXRoLnZhbHVlICsgJ10nO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICByZXR1cm4gY29kZTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog55Sf5oiQ5o+S5YC85Luj56CBXG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge09iamVjdH0gaW50ZXJwRXhwciDmj5LlgLzooajovr7lvI/lr7nosaFcbi8vICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgICAgICovXG4vLyAgICAgaW50ZXJwOiBmdW5jdGlvbiAoaW50ZXJwRXhwcikge1xuLy8gICAgICAgICB2YXIgY29kZSA9IGNvbXBpbGVFeHByU291cmNlLmV4cHIoaW50ZXJwRXhwci5leHByKTtcbi8vIFxuLy8gXG4vLyAgICAgICAgIGVhY2goaW50ZXJwRXhwci5maWx0ZXJzLCBmdW5jdGlvbiAoZmlsdGVyKSB7XG4vLyAgICAgICAgICAgICBjb2RlID0gJ2NvbXBvbmVudEN0eC5jYWxsRmlsdGVyKFwiJyArIGZpbHRlci5uYW1lLnBhdGhzWzBdLnZhbHVlICsgJ1wiLCBbJyArIGNvZGU7XG4vLyAgICAgICAgICAgICBlYWNoKGZpbHRlci5hcmdzLCBmdW5jdGlvbiAoYXJnKSB7XG4vLyAgICAgICAgICAgICAgICAgY29kZSArPSAnLCAnICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihhcmcpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICBjb2RlICs9ICddKSc7XG4vLyAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgIGlmICghaW50ZXJwRXhwci5vcmlnaW5hbCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuICdlc2NhcGVIVE1MKCcgKyBjb2RlICsgJyknO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgcmV0dXJuIGNvZGU7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOeUn+aIkOaWh+acrOeJh+auteS7o+eggVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtPYmplY3R9IHRleHRFeHByIOaWh+acrOeJh+auteihqOi+vuW8j+WvueixoVxuLy8gICAgICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAgICAgKi9cbi8vICAgICB0ZXh0OiBmdW5jdGlvbiAodGV4dEV4cHIpIHtcbi8vICAgICAgICAgaWYgKHRleHRFeHByLnNlZ3MubGVuZ3RoID09PSAwKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gJ1wiXCInO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgdmFyIGNvZGUgPSAnJztcbi8vIFxuLy8gICAgICAgICBlYWNoKHRleHRFeHByLnNlZ3MsIGZ1bmN0aW9uIChzZWcpIHtcbi8vICAgICAgICAgICAgIHZhciBzZWdDb2RlID0gY29tcGlsZUV4cHJTb3VyY2UuZXhwcihzZWcpO1xuLy8gICAgICAgICAgICAgY29kZSArPSBjb2RlID8gJyArICcgKyBzZWdDb2RlIDogc2VnQ29kZTtcbi8vICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgcmV0dXJuIGNvZGU7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOS6jOWFg+ihqOi+vuW8j+aTjeS9nOespuaYoOWwhOihqFxuLy8gICAgICAqXG4vLyAgICAgICogQHR5cGUge09iamVjdH1cbi8vICAgICAgKi9cbi8vICAgICBiaW5hcnlPcDoge1xuLy8gICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gICAgICAgICA0MzogJysnLFxuLy8gICAgICAgICA0NTogJy0nLFxuLy8gICAgICAgICA0MjogJyonLFxuLy8gICAgICAgICA0NzogJy8nLFxuLy8gICAgICAgICA2MDogJzwnLFxuLy8gICAgICAgICA2MjogJz4nLFxuLy8gICAgICAgICA3NjogJyYmJyxcbi8vICAgICAgICAgOTQ6ICchPScsXG4vLyAgICAgICAgIDEyMTogJzw9Jyxcbi8vICAgICAgICAgMTIyOiAnPT0nLFxuLy8gICAgICAgICAxMjM6ICc+PScsXG4vLyAgICAgICAgIDE1NTogJyE9PScsXG4vLyAgICAgICAgIDE4MzogJz09PScsXG4vLyAgICAgICAgIDI0ODogJ3x8J1xuLy8gICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOeUn+aIkOihqOi+vuW8j+S7o+eggVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtPYmplY3R9IGV4cHIg6KGo6L6+5byP5a+56LGhXG4vLyAgICAgICogQHJldHVybiB7c3RyaW5nfVxuLy8gICAgICAqL1xuLy8gICAgIGV4cHI6IGZ1bmN0aW9uIChleHByKSB7XG4vLyAgICAgICAgIHN3aXRjaCAoZXhwci50eXBlKSB7XG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLlVOQVJZOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiAnIScgKyBjb21waWxlRXhwclNvdXJjZS5leHByKGV4cHIuZXhwcik7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuQklOQVJZOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBjb21waWxlRXhwclNvdXJjZS5leHByKGV4cHIuc2Vnc1swXSlcbi8vICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5iaW5hcnlPcFtleHByLm9wZXJhdG9yXVxuLy8gICAgICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoZXhwci5zZWdzWzFdKTtcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5URVJUSUFSWTpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGlsZUV4cHJTb3VyY2UuZXhwcihleHByLnNlZ3NbMF0pXG4vLyAgICAgICAgICAgICAgICAgICAgICsgJz8nICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihleHByLnNlZ3NbMV0pXG4vLyAgICAgICAgICAgICAgICAgICAgICsgJzonICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihleHByLnNlZ3NbMl0pO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLlNUUklORzpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGlsZUV4cHJTb3VyY2Uuc3RyaW5nTGl0ZXJhbGl6ZShleHByLmxpdGVyYWwgfHwgZXhwci52YWx1ZSk7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuTlVNQkVSOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBleHByLnZhbHVlO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLkJPT0w6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGV4cHIudmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLkFDQ0VTU09SOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBjb21waWxlRXhwclNvdXJjZS5kYXRhQWNjZXNzKGV4cHIpO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLklOVEVSUDpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGlsZUV4cHJTb3VyY2UuaW50ZXJwKGV4cHIpO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLlRFWFQ6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGVFeHByU291cmNlLnRleHQoZXhwcik7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9O1xuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNvbXBpbGVFeHByU291cmNlO1xuXG5cbi8qKlxuICogQGZpbGUg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVy57G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGNvbXBpbGVFeHByU291cmNlID0gcmVxdWlyZSgnLi9jb21waWxlLWV4cHItc291cmNlJyk7XG5cblxuLy8gI1tiZWdpbl0gc3NyXG4vLyAvKipcbi8vICAqIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlcuexu1xuLy8gICpcbi8vICAqIEBjbGFzc1xuLy8gICovXG4vLyBmdW5jdGlvbiBDb21waWxlU291cmNlQnVmZmVyKCkge1xuLy8gICAgIHRoaXMuc2VncyA9IFtdO1xuLy8gfVxuLy8gXG4vLyAvKipcbi8vICAqIOa3u+WKoOWOn+Wni+S7o+egge+8jOWwhuWOn+WwgeS4jeWKqOi+k+WHulxuLy8gICpcbi8vICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIOWOn+Wni+S7o+eggVxuLy8gICovXG4vLyBDb21waWxlU291cmNlQnVmZmVyLnByb3RvdHlwZS5hZGRSYXcgPSBmdW5jdGlvbiAoY29kZSkge1xuLy8gICAgIHRoaXMuc2Vncy5wdXNoKHtcbi8vICAgICAgICAgdHlwZTogJ1JBVycsXG4vLyAgICAgICAgIGNvZGU6IGNvZGVcbi8vICAgICB9KTtcbi8vIH07XG4vLyBcbi8vIC8qKlxuLy8gICog5re75Yqg6KKr5ou85o6l5Li6aHRtbOeahOWOn+Wni+S7o+eggVxuLy8gICpcbi8vICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIOWOn+Wni+S7o+eggVxuLy8gICovXG4vLyBDb21waWxlU291cmNlQnVmZmVyLnByb3RvdHlwZS5qb2luUmF3ID0gZnVuY3Rpb24gKGNvZGUpIHtcbi8vICAgICB0aGlzLnNlZ3MucHVzaCh7XG4vLyAgICAgICAgIHR5cGU6ICdKT0lOX1JBVycsXG4vLyAgICAgICAgIGNvZGU6IGNvZGVcbi8vICAgICB9KTtcbi8vIH07XG4vLyBcbi8vIC8qKlxuLy8gICog5re75YqgcmVuZGVyZXLmlrnms5XnmoTotbflp4vmupDnoIFcbi8vICAqL1xuLy8gQ29tcGlsZVNvdXJjZUJ1ZmZlci5wcm90b3R5cGUuYWRkUmVuZGVyZXJTdGFydCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICB0aGlzLmFkZFJhdygnZnVuY3Rpb24gKGRhdGEsIHBhcmVudEN0eCwgZ2l2ZW5TbG90cykgeycpO1xuLy8gICAgIHRoaXMuYWRkUmF3KCd2YXIgaHRtbCA9IFwiXCI7Jyk7XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIOa3u+WKoHJlbmRlcmVy5pa55rOV55qE57uT5p2f5rqQ56CBXG4vLyAgKi9cbi8vIENvbXBpbGVTb3VyY2VCdWZmZXIucHJvdG90eXBlLmFkZFJlbmRlcmVyRW5kID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIHRoaXMuYWRkUmF3KCdyZXR1cm4gaHRtbDsnKTtcbi8vICAgICB0aGlzLmFkZFJhdygnfScpO1xuLy8gfTtcbi8vIFxuLy8gLyoqXG4vLyAgKiDmt7vliqDooqvmi7zmjqXkuLpodG1s55qE6Z2Z5oCB5a2X56ym5LiyXG4vLyAgKlxuLy8gICogQHBhcmFtIHtzdHJpbmd9IHN0ciDooqvmi7zmjqXnmoTlrZfnrKbkuLJcbi8vICAqL1xuLy8gQ29tcGlsZVNvdXJjZUJ1ZmZlci5wcm90b3R5cGUuam9pblN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbi8vICAgICB0aGlzLnNlZ3MucHVzaCh7XG4vLyAgICAgICAgIHN0cjogc3RyLFxuLy8gICAgICAgICB0eXBlOiAnSk9JTl9TVFJJTkcnXG4vLyAgICAgfSk7XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIOa3u+WKoOiiq+aLvOaOpeS4umh0bWznmoTmlbDmja7orr/pl65cbi8vICAqXG4vLyAgKiBAcGFyYW0ge09iamVjdD99IGFjY2Vzc29yIOaVsOaNruiuv+mXruihqOi+vuW8j+WvueixoVxuLy8gICovXG4vLyBDb21waWxlU291cmNlQnVmZmVyLnByb3RvdHlwZS5qb2luRGF0YVN0cmluZ2lmeSA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICB0aGlzLnNlZ3MucHVzaCh7XG4vLyAgICAgICAgIHR5cGU6ICdKT0lOX0RBVEFfU1RSSU5HSUZZJ1xuLy8gICAgIH0pO1xuLy8gfTtcbi8vIFxuLy8gLyoqXG4vLyAgKiDmt7vliqDooqvmi7zmjqXkuLpodG1s55qE6KGo6L6+5byPXG4vLyAgKlxuLy8gICogQHBhcmFtIHtPYmplY3R9IGV4cHIg6KGo6L6+5byP5a+56LGhXG4vLyAgKi9cbi8vIENvbXBpbGVTb3VyY2VCdWZmZXIucHJvdG90eXBlLmpvaW5FeHByID0gZnVuY3Rpb24gKGV4cHIpIHtcbi8vICAgICB0aGlzLnNlZ3MucHVzaCh7XG4vLyAgICAgICAgIGV4cHI6IGV4cHIsXG4vLyAgICAgICAgIHR5cGU6ICdKT0lOX0VYUFInXG4vLyAgICAgfSk7XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIOeUn+aIkOe8luivkeWQjuS7o+eggVxuLy8gICpcbi8vICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAqL1xuLy8gQ29tcGlsZVNvdXJjZUJ1ZmZlci5wcm90b3R5cGUudG9Db2RlID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIHZhciBjb2RlID0gW107XG4vLyAgICAgdmFyIHRlbXAgPSAnJztcbi8vIFxuLy8gICAgIGZ1bmN0aW9uIGdlblN0ckxpdGVyYWwoKSB7XG4vLyAgICAgICAgIGlmICh0ZW1wKSB7XG4vLyAgICAgICAgICAgICBjb2RlLnB1c2goJ2h0bWwgKz0gJyArIGNvbXBpbGVFeHByU291cmNlLnN0cmluZ0xpdGVyYWxpemUodGVtcCkgKyAnOycpO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgdGVtcCA9ICcnO1xuLy8gICAgIH1cbi8vIFxuLy8gICAgIGVhY2godGhpcy5zZWdzLCBmdW5jdGlvbiAoc2VnKSB7XG4vLyAgICAgICAgIGlmIChzZWcudHlwZSA9PT0gJ0pPSU5fU1RSSU5HJykge1xuLy8gICAgICAgICAgICAgdGVtcCArPSBzZWcuc3RyO1xuLy8gICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgZ2VuU3RyTGl0ZXJhbCgpO1xuLy8gICAgICAgICBzd2l0Y2ggKHNlZy50eXBlKSB7XG4vLyAgICAgICAgICAgICBjYXNlICdKT0lOX0RBVEFfU1RSSU5HSUZZJzpcbi8vICAgICAgICAgICAgICAgICBjb2RlLnB1c2goJ2h0bWwgKz0gc3RyaW5naWZpZXIuYW55KCcgKyBjb21waWxlRXhwclNvdXJjZS5kYXRhQWNjZXNzKCkgKyAnKTsnKTtcbi8vICAgICAgICAgICAgICAgICBicmVhaztcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSAnSk9JTl9FWFBSJzpcbi8vICAgICAgICAgICAgICAgICBjb2RlLnB1c2goJ2h0bWwgKz0gJyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoc2VnLmV4cHIpICsgJzsnKTtcbi8vICAgICAgICAgICAgICAgICBicmVhaztcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSAnSk9JTl9SQVcnOlxuLy8gICAgICAgICAgICAgICAgIGNvZGUucHVzaCgnaHRtbCArPSAnICsgc2VnLmNvZGUgKyAnOycpO1xuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlICdSQVcnOlxuLy8gICAgICAgICAgICAgICAgIGNvZGUucHVzaChzZWcuY29kZSk7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyBcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gXG4vLyAgICAgZ2VuU3RyTGl0ZXJhbCgpO1xuLy8gXG4vLyAgICAgcmV0dXJuIGNvZGUuam9pbignXFxuJyk7XG4vLyB9O1xuLy8gXG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gQ29tcGlsZVNvdXJjZUJ1ZmZlcjtcblxuXG4vKipcbiAqIEBmaWxlIOWwhue7hOS7tue8luivkeaIkCByZW5kZXIg5pa55rOV55qEIGpzIOa6kOeggVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBwYXJzZUV4cHIgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtZXhwcicpO1xuLy8gdmFyIGNyZWF0ZUFOb2RlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hLW5vZGUnKTtcbi8vIHZhciBjbG9uZURpcmVjdGl2ZXMgPSByZXF1aXJlKCcuLi9wYXJzZXIvY2xvbmUtZGlyZWN0aXZlcycpO1xuLy8gdmFyIGF1dG9DbG9zZVRhZ3MgPSByZXF1aXJlKCcuLi9icm93c2VyL2F1dG8tY2xvc2UtdGFncycpO1xuLy8gdmFyIENvbXBpbGVTb3VyY2VCdWZmZXIgPSByZXF1aXJlKCcuL2NvbXBpbGUtc291cmNlLWJ1ZmZlcicpO1xuLy8gdmFyIGNvbXBpbGVFeHByU291cmNlID0gcmVxdWlyZSgnLi9jb21waWxlLWV4cHItc291cmNlJyk7XG4vLyB2YXIgcmluc2VDb25kQU5vZGUgPSByZXF1aXJlKCcuL3JpbnNlLWNvbmQtYW5vZGUnKTtcbi8vIHZhciBnZXRBTm9kZVByb3AgPSByZXF1aXJlKCcuL2dldC1hLW5vZGUtcHJvcCcpO1xuXG4vLyAjW2JlZ2luXSBzc3Jcbi8vIFxuLy8gLyoqXG4vLyAgKiDnlJ/miJDluo/liJfljJbml7botbflp4vmoannmoRodG1sXG4vLyAgKlxuLy8gICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg5qGp57G75Z6L5qCH6K+GXG4vLyAgKiBAcGFyYW0ge3N0cmluZz99IGNvbnRlbnQg5qGp5YaF55qE5YaF5a65XG4vLyAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgKi9cbi8vIGZ1bmN0aW9uIHNlcmlhbGl6ZVN0dW1wKHR5cGUsIGNvbnRlbnQpIHtcbi8vICAgICByZXR1cm4gJzwhLS1zLScgKyB0eXBlICsgKGNvbnRlbnQgPyAnOicgKyBjb250ZW50IDogJycpICsgJy0tPic7XG4vLyB9XG4vLyBcbi8vIC8qKlxuLy8gICog55Sf5oiQ5bqP5YiX5YyW5pe257uT5p2f5qGp55qEaHRtbFxuLy8gICpcbi8vICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIOahqeexu+Wei+agh+ivhlxuLy8gICogQHJldHVybiB7c3RyaW5nfVxuLy8gICovXG4vLyBmdW5jdGlvbiBzZXJpYWxpemVTdHVtcEVuZCh0eXBlKSB7XG4vLyAgICAgcmV0dXJuICc8IS0tL3MtJyArIHR5cGUgKyAnLS0+Jztcbi8vIH1cbi8vIFxuLy8gLyoqXG4vLyAgKiBlbGVtZW50IOeahOe8luivkeaWueazlembhuWQiOWvueixoVxuLy8gICpcbi8vICAqIEBpbm5lclxuLy8gICovXG4vLyB2YXIgZWxlbWVudFNvdXJjZUNvbXBpbGVyID0ge1xuLy8gXG4vLyAgICAgLyogZXNsaW50LWRpc2FibGUgbWF4LXBhcmFtcyAqL1xuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkeWFg+e0oOagh+etvuWktFxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUg5qCH562+5ZCNXG4vLyAgICAgICogQHBhcmFtIHtBcnJheX0gcHJvcHMg5bGe5oCn5YiX6KGoXG4vLyAgICAgICogQHBhcmFtIHtzdHJpbmc/fSBleHRyYVByb3Ag6aKd5aSW55qE5bGe5oCn5LiyXG4vLyAgICAgICogQHBhcmFtIHtib29sZWFuP30gaXNDbG9zZSDmmK/lkKbpl63lkIhcbi8vICAgICAgKi9cbi8vICAgICB0YWdTdGFydDogZnVuY3Rpb24gKHNvdXJjZUJ1ZmZlciwgdGFnTmFtZSwgcHJvcHMsIGV4dHJhUHJvcCwgaXNDbG9zZSkge1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZygnPCcgKyB0YWdOYW1lKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoZXh0cmFQcm9wIHx8ICcnKTtcbi8vIFxuLy8gICAgICAgICAvLyBpbmRleCBsaXN0XG4vLyAgICAgICAgIHZhciBwcm9wc0luZGV4ID0ge307XG4vLyAgICAgICAgIGVhY2gocHJvcHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4vLyAgICAgICAgICAgICBwcm9wc0luZGV4W3Byb3AubmFtZV0gPSBwcm9wO1xuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICBlYWNoKHByb3BzLCBmdW5jdGlvbiAocHJvcCkge1xuLy8gICAgICAgICAgICAgaWYgKHByb3AubmFtZSA9PT0gJ3Nsb3QnKSB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICBpZiAocHJvcC5uYW1lID09PSAndmFsdWUnKSB7XG4vLyAgICAgICAgICAgICAgICAgc3dpdGNoICh0YWdOYW1lKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJHNlbGVjdFZhbHVlID0gJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihwcm9wLmV4cHIpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnIHx8IFwiXCI7J1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICBjYXNlICdvcHRpb24nOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJG9wdGlvblZhbHVlID0gJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihwcm9wLmV4cHIpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnOydcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnaWYgKCRvcHRpb25WYWx1ZSAhPSBudWxsKSB7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblJhdygnXCIgdmFsdWU9XFxcXFwiXCIgKyAkb3B0aW9uVmFsdWUgKyBcIlxcXFxcIlwiJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdpZiAoJG9wdGlvblZhbHVlID09PSAkc2VsZWN0VmFsdWUpIHsnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCcgc2VsZWN0ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIHN3aXRjaCAocHJvcC5uYW1lKSB7XG4vLyAgICAgICAgICAgICAgICAgY2FzZSAncmVhZG9ubHknOlxuLy8gICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc2FibGVkJzpcbi8vICAgICAgICAgICAgICAgICBjYXNlICdtdWx0aXBsZSc6XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLnJhdyA9PT0gJycpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCcgJyArIHByb3AubmFtZSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblJhdygnYm9vbEF0dHJGaWx0ZXIoXCInICsgcHJvcC5uYW1lICsgJ1wiLCAnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHByb3AuZXhwcilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICcpJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vIFxuLy8gICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJvcCA9IHByb3BzSW5kZXgudmFsdWU7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVDb2RlID0gY29tcGlsZUV4cHJTb3VyY2UuZXhwcih2YWx1ZVByb3AuZXhwcik7XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3ApIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3BzSW5kZXgudHlwZS5yYXcpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnaWYgKGNvbnRhaW5zKCdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmV4cHIocHJvcC5leHByKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJywgJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdmFsdWVDb2RlXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnKSkgeydcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZygnIGNoZWNrZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2lmICgnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHByb3AuZXhwcilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICcgPT09ICdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHZhbHVlQ29kZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJykgeydcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZygnIGNoZWNrZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vIFxuLy8gICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLmF0dHIpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCcgJyArIHByb3AuYXR0cik7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblJhdygnYXR0ckZpbHRlcihcIicgKyBwcm9wLm5hbWUgKyAnXCIsICdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChwcm9wLnggPyAnZXNjYXBlSFRNTCgnIDogJycpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHByb3AuZXhwcilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChwcm9wLnggPyAnKScgOiAnJylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICcpJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoaXNDbG9zZSA/ICcvPicgOiAnPicpO1xuLy8gICAgIH0sXG4vLyAgICAgLyogZXNsaW50LWVuYWJsZSBtYXgtcGFyYW1zICovXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5HlhYPntKDpl63lkIhcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIOagh+etvuWQjVxuLy8gICAgICAqL1xuLy8gICAgIHRhZ0VuZDogZnVuY3Rpb24gKHNvdXJjZUJ1ZmZlciwgdGFnTmFtZSkge1xuLy8gICAgICAgICBpZiAoIWF1dG9DbG9zZVRhZ3NbdGFnTmFtZV0pIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCc8LycgKyB0YWdOYW1lICsgJz4nKTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIGlmICh0YWdOYW1lID09PSAnc2VsZWN0Jykge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJHNlbGVjdFZhbHVlID0gbnVsbDsnKTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIGlmICh0YWdOYW1lID09PSAnb3B0aW9uJykge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJG9wdGlvblZhbHVlID0gbnVsbDsnKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5HlhYPntKDlhoXlrrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOWFg+e0oOeahOaKveixoeiKgueCueS/oeaBr1xuLy8gICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7blrp7kvovnjq/looNcbi8vICAgICAgKi9cbi8vICAgICBpbm5lcjogZnVuY3Rpb24gKHNvdXJjZUJ1ZmZlciwgYU5vZGUsIG93bmVyKSB7XG4vLyAgICAgICAgIC8vIGlubmVyIGNvbnRlbnRcbi8vICAgICAgICAgaWYgKGFOb2RlLnRhZ05hbWUgPT09ICd0ZXh0YXJlYScpIHtcbi8vICAgICAgICAgICAgIHZhciB2YWx1ZVByb3AgPSBnZXRBTm9kZVByb3AoYU5vZGUsICd2YWx1ZScpO1xuLy8gICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCkge1xuLy8gICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luUmF3KCdlc2NhcGVIVE1MKCdcbi8vICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHZhbHVlUHJvcC5leHByKVxuLy8gICAgICAgICAgICAgICAgICAgICArICcpJ1xuLy8gICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHZhciBodG1sRGlyZWN0aXZlID0gYU5vZGUuZGlyZWN0aXZlcy5odG1sO1xuLy8gICAgICAgICBpZiAoaHRtbERpcmVjdGl2ZSkge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5FeHByKGh0bWxEaXJlY3RpdmUudmFsdWUpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8vICAgICAgICAgICAgIGVhY2goYU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChhTm9kZUNoaWxkKSB7XG4vLyAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdyhhTm9kZUNvbXBpbGVyLmNvbXBpbGUoYU5vZGVDaGlsZCwgc291cmNlQnVmZmVyLCBvd25lcikpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIEFOb2RlIOeahOe8luivkeaWueazlembhuWQiOWvueixoVxuLy8gICpcbi8vICAqIEBpbm5lclxuLy8gICovXG4vLyB2YXIgYU5vZGVDb21waWxlciA9IHtcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkeiKgueCuVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tuWunuS+i+eOr+Wig1xuLy8gICAgICAqIEBwYXJhbSB7T2JqZWN0fSBleHRyYSDnvJbor5HmiYDpnIDnmoTkuIDkupvpop3lpJbkv6Hmga9cbi8vICAgICAgKi9cbi8vICAgICBjb21waWxlOiBmdW5jdGlvbiAoYU5vZGUsIHNvdXJjZUJ1ZmZlciwgb3duZXIsIGV4dHJhKSB7XG4vLyAgICAgICAgIGV4dHJhID0gZXh0cmEgfHwge307XG4vLyAgICAgICAgIHZhciBjb21waWxlTWV0aG9kID0gJ2NvbXBpbGVFbGVtZW50Jztcbi8vIFxuLy8gICAgICAgICBpZiAoYU5vZGUudGV4dEV4cHIpIHtcbi8vICAgICAgICAgICAgIGNvbXBpbGVNZXRob2QgPSAnY29tcGlsZVRleHQnO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2UgaWYgKGFOb2RlLmRpcmVjdGl2ZXNbJ2lmJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbi8vICAgICAgICAgICAgIGNvbXBpbGVNZXRob2QgPSAnY29tcGlsZUlmJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlIGlmIChhTm9kZS5kaXJlY3RpdmVzWydmb3InXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuLy8gICAgICAgICAgICAgY29tcGlsZU1ldGhvZCA9ICdjb21waWxlRm9yJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlIGlmIChhTm9kZS50YWdOYW1lID09PSAnc2xvdCcpIHtcbi8vICAgICAgICAgICAgIGNvbXBpbGVNZXRob2QgPSAnY29tcGlsZVNsb3QnO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2UgaWYgKGFOb2RlLnRhZ05hbWUgPT09ICd0ZW1wbGF0ZScpIHtcbi8vICAgICAgICAgICAgIGNvbXBpbGVNZXRob2QgPSAnY29tcGlsZVRlbXBsYXRlJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgIHZhciBDb21wb25lbnRUeXBlID0gb3duZXIuZ2V0Q29tcG9uZW50VHlwZShhTm9kZSk7XG4vLyAgICAgICAgICAgICBpZiAoQ29tcG9uZW50VHlwZSkge1xuLy8gICAgICAgICAgICAgICAgIGNvbXBpbGVNZXRob2QgPSAnY29tcGlsZUNvbXBvbmVudCc7XG4vLyAgICAgICAgICAgICAgICAgZXh0cmEuQ29tcG9uZW50Q2xhc3MgPSBDb21wb25lbnRUeXBlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgYU5vZGVDb21waWxlcltjb21waWxlTWV0aG9kXShhTm9kZSwgc291cmNlQnVmZmVyLCBvd25lciwgZXh0cmEpO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5HmlofmnKzoioLngrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOiKgueCueWvueixoVxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqL1xuLy8gICAgIGNvbXBpbGVUZXh0OiBmdW5jdGlvbiAoYU5vZGUsIHNvdXJjZUJ1ZmZlcikge1xuLy8gICAgICAgICBpZiAoYU5vZGUudGV4dEV4cHIub3JpZ2luYWwpIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKHNlcmlhbGl6ZVN0dW1wKCd0ZXh0JykpO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5FeHByKGFOb2RlLnRleHRFeHByKTtcbi8vIFxuLy8gICAgICAgICBpZiAoYU5vZGUudGV4dEV4cHIub3JpZ2luYWwpIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKHNlcmlhbGl6ZVN0dW1wRW5kKCd0ZXh0JykpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkXRlbXBsYXRl6IqC54K5XG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDoioLngrnlr7nosaFcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu25a6e5L6L546v5aKDXG4vLyAgICAgICovXG4vLyAgICAgY29tcGlsZVRlbXBsYXRlOiBmdW5jdGlvbiAoYU5vZGUsIHNvdXJjZUJ1ZmZlciwgb3duZXIpIHtcbi8vICAgICAgICAgZWxlbWVudFNvdXJjZUNvbXBpbGVyLmlubmVyKHNvdXJjZUJ1ZmZlciwgYU5vZGUsIG93bmVyKTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+RIGlmIOiKgueCuVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg6IqC54K55a+56LGhXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tuWunuS+i+eOr+Wig1xuLy8gICAgICAqL1xuLy8gICAgIGNvbXBpbGVJZjogZnVuY3Rpb24gKGFOb2RlLCBzb3VyY2VCdWZmZXIsIG93bmVyKSB7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyhmdW5jdGlvbiAoKSB7Jyk7XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygndmFyIGlmSW5kZXggPSBudWxsOycpO1xuLy8gXG4vLyAgICAgICAgIC8vIG91dHB1dCBtYWluIGlmXG4vLyAgICAgICAgIHZhciBpZkRpcmVjdGl2ZSA9IGFOb2RlLmRpcmVjdGl2ZXNbJ2lmJ107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2lmICgnICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihpZkRpcmVjdGl2ZS52YWx1ZSkgKyAnKSB7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoXG4vLyAgICAgICAgICAgICBhTm9kZUNvbXBpbGVyLmNvbXBpbGUoXG4vLyAgICAgICAgICAgICAgICAgcmluc2VDb25kQU5vZGUoYU5vZGUpLFxuLy8gICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlcixcbi8vICAgICAgICAgICAgICAgICBvd25lclxuLy8gICAgICAgICAgICAgKVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyBcbi8vICAgICAgICAgLy8gb3V0cHV0IGVsaWYgYW5kIGVsc2Vcbi8vICAgICAgICAgZWFjaChhTm9kZS5lbHNlcywgZnVuY3Rpb24gKGVsc2VBTm9kZSwgaW5kZXgpIHtcbi8vICAgICAgICAgICAgIHZhciBlbGlmRGlyZWN0aXZlID0gZWxzZUFOb2RlLmRpcmVjdGl2ZXMuZWxpZjtcbi8vICAgICAgICAgICAgIGlmIChlbGlmRGlyZWN0aXZlKSB7XG4vLyAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnZWxzZSBpZiAoJyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoZWxpZkRpcmVjdGl2ZS52YWx1ZSkgKyAnKSB7Jyk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdlbHNlIHsnKTtcbi8vICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdyhcbi8vICAgICAgICAgICAgICAgICBhTm9kZUNvbXBpbGVyLmNvbXBpbGUoXG4vLyAgICAgICAgICAgICAgICAgICAgIHJpbnNlQ29uZEFOb2RlKGVsc2VBTm9kZSksXG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlcixcbi8vICAgICAgICAgICAgICAgICAgICAgb3duZXJcbi8vICAgICAgICAgICAgICAgICApXG4vLyAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9KSgpOycpO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5EgZm9yIOiKgueCuVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg6IqC54K55a+56LGhXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tuWunuS+i+eOr+Wig1xuLy8gICAgICAqL1xuLy8gICAgIGNvbXBpbGVGb3I6IGZ1bmN0aW9uIChhTm9kZSwgc291cmNlQnVmZmVyLCBvd25lcikge1xuLy8gICAgICAgICB2YXIgZm9yRWxlbWVudEFOb2RlID0gY3JlYXRlQU5vZGUoe1xuLy8gICAgICAgICAgICAgY2hpbGRyZW46IGFOb2RlLmNoaWxkcmVuLFxuLy8gICAgICAgICAgICAgcHJvcHM6IGFOb2RlLnByb3BzLFxuLy8gICAgICAgICAgICAgZXZlbnRzOiBhTm9kZS5ldmVudHMsXG4vLyAgICAgICAgICAgICB0YWdOYW1lOiBhTm9kZS50YWdOYW1lLFxuLy8gICAgICAgICAgICAgZGlyZWN0aXZlczogY2xvbmVEaXJlY3RpdmVzKGFOb2RlLmRpcmVjdGl2ZXMsIHtcbi8vICAgICAgICAgICAgICAgICAnZm9yJzogMVxuLy8gICAgICAgICAgICAgfSksXG4vLyAgICAgICAgICAgICBob3RzcG90OiBhTm9kZS5ob3RzcG90XG4vLyAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgIHZhciBmb3JEaXJlY3RpdmUgPSBhTm9kZS5kaXJlY3RpdmVzWydmb3InXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbi8vICAgICAgICAgdmFyIGl0ZW1OYW1lID0gZm9yRGlyZWN0aXZlLml0ZW0ucmF3O1xuLy8gICAgICAgICB2YXIgaW5kZXhOYW1lID0gZm9yRGlyZWN0aXZlLmluZGV4LnJhdztcbi8vICAgICAgICAgdmFyIGxpc3ROYW1lID0gY29tcGlsZUV4cHJTb3VyY2UuZGF0YUFjY2Vzcyhmb3JEaXJlY3RpdmUudmFsdWUpO1xuLy8gXG4vLyAgICAgICAgIGlmIChpbmRleE5hbWUgPT09ICckaW5kZXgnKSB7XG4vLyAgICAgICAgICAgICBpbmRleE5hbWUgPSBndWlkKCk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdmb3IgKCdcbi8vICAgICAgICAgICAgICsgJ3ZhciAnICsgaW5kZXhOYW1lICsgJyA9IDA7ICdcbi8vICAgICAgICAgICAgICsgaW5kZXhOYW1lICsgJyA8ICcgKyBsaXN0TmFtZSArICcubGVuZ3RoOyAnXG4vLyAgICAgICAgICAgICArIGluZGV4TmFtZSArICcrKykgeydcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnY29tcG9uZW50Q3R4LmRhdGEuJyArIGluZGV4TmFtZSArICc9JyArIGluZGV4TmFtZSArICc7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2NvbXBvbmVudEN0eC5kYXRhLicgKyBpdGVtTmFtZSArICc9ICcgKyBsaXN0TmFtZSArICdbJyArIGluZGV4TmFtZSArICddOycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KFxuLy8gICAgICAgICAgICAgYU5vZGVDb21waWxlci5jb21waWxlKFxuLy8gICAgICAgICAgICAgICAgIGZvckVsZW1lbnRBTm9kZSxcbi8vICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIsXG4vLyAgICAgICAgICAgICAgICAgb3duZXJcbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5Egc2xvdCDoioLngrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOiKgueCueWvueixoVxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7blrp7kvovnjq/looNcbi8vICAgICAgKi9cbi8vICAgICBjb21waWxlU2xvdDogZnVuY3Rpb24gKGFOb2RlLCBzb3VyY2VCdWZmZXIsIG93bmVyKSB7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyhmdW5jdGlvbiAoKSB7Jyk7XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnZnVuY3Rpb24gJGRlZmF1bHRTbG90UmVuZGVyKGNvbXBvbmVudEN0eCkgeycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIHZhciBodG1sID0gXCJcIjsnKTtcbi8vICAgICAgICAgZWFjaChhTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGFOb2RlQ2hpbGQpIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoYU5vZGVDb21waWxlci5jb21waWxlKGFOb2RlQ2hpbGQsIHNvdXJjZUJ1ZmZlciwgb3duZXIpKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgcmV0dXJuIGh0bWw7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIHZhciAkZ2l2ZW5TbG90ID0gW107Jyk7XG4vLyBcbi8vICAgICAgICAgdmFyIG5hbWVQcm9wID0gZ2V0QU5vZGVQcm9wKGFOb2RlLCAnbmFtZScpO1xuLy8gICAgICAgICBpZiAobmFtZVByb3ApIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ3ZhciAkc2xvdE5hbWUgPSAnICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihuYW1lUHJvcC5leHByKSArICc7Jyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd2YXIgJHNsb3ROYW1lID0gbnVsbDsnKTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ3ZhciAkY3R4R2l2ZW5TbG90cyA9IGNvbXBvbmVudEN0eC5naXZlblNsb3RzOycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdmb3IgKHZhciAkaSA9IDA7ICRpIDwgJGN0eEdpdmVuU2xvdHMubGVuZ3RoOyAkaSsrKSB7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgaWYgKCRjdHhHaXZlblNsb3RzWyRpXVsxXSA9PSAkc2xvdE5hbWUpIHsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICAgICRnaXZlblNsb3QucHVzaCgkY3R4R2l2ZW5TbG90c1skaV1bMF0pOycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIH0nKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gXG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygndmFyICRpc0luc2VydGVkID0gJGdpdmVuU2xvdC5sZW5ndGggPiAwOycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdpZiAoISRpc0luc2VydGVkKSB7ICRnaXZlblNsb3QucHVzaCgkZGVmYXVsdFNsb3RSZW5kZXIpOyB9Jyk7XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygndmFyICRzbG90Q3R4ID0gJGlzSW5zZXJ0ZWQgPyBjb21wb25lbnRDdHgub3duZXIgOiBjb21wb25lbnRDdHg7Jyk7XG4vLyAgICAgICAgIGlmIChhTm9kZS52YXJzKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCckc2xvdEN0eCA9IHtkYXRhOiBleHRlbmQoe30sICRzbG90Q3R4LmRhdGEpLCBmaWx0ZXJzOiAkc2xvdEN0eC5maWx0ZXJzLCBjYWxsRmlsdGVyOiAkc2xvdEN0eC5jYWxsRmlsdGVyfTsnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuLy8gICAgICAgICAgICAgZWFjaChhTm9kZS52YXJzLCBmdW5jdGlvbiAodmFySXRlbSkge1xuLy8gICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoXG4vLyAgICAgICAgICAgICAgICAgICAgICckc2xvdEN0eC5kYXRhW1wiJyArIHZhckl0ZW0ubmFtZSArICdcIl0gPSAnXG4vLyAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcih2YXJJdGVtLmV4cHIpXG4vLyAgICAgICAgICAgICAgICAgICAgICsgJzsnXG4vLyAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnZm9yICh2YXIgJHJlbmRlckluZGV4ID0gMDsgJHJlbmRlckluZGV4IDwgJGdpdmVuU2xvdC5sZW5ndGg7ICRyZW5kZXJJbmRleCsrKSB7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgaHRtbCArPSAkZ2l2ZW5TbG90WyRyZW5kZXJJbmRleF0oJHNsb3RDdHgpOycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfSkoKTsnKTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+R5pmu6YCa6IqC54K5XG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDoioLngrnlr7nosaFcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu25a6e5L6L546v5aKDXG4vLyAgICAgICogQHBhcmFtIHtPYmplY3R9IGV4dHJhIOe8luivkeaJgOmcgOeahOS4gOS6m+mineWkluS/oeaBr1xuLy8gICAgICAqL1xuLy8gICAgIGNvbXBpbGVFbGVtZW50OiBmdW5jdGlvbiAoYU5vZGUsIHNvdXJjZUJ1ZmZlciwgb3duZXIsIGV4dHJhKSB7XG4vLyAgICAgICAgIGV4dHJhID0gZXh0cmEgfHwge307XG4vLyAgICAgICAgIC8vIGlmIChhTm9kZS50YWdOYW1lID09PSAnb3B0aW9uJ1xuLy8gICAgICAgICAvLyAgICAgJiYgIWdldEFOb2RlUHJvcChhTm9kZSwgJ3ZhbHVlJylcbi8vICAgICAgICAgLy8gICAgICYmIGFOb2RlLmNoaWxkcmVuWzBdXG4vLyAgICAgICAgIC8vICkge1xuLy8gICAgICAgICAvLyAgICAgYU5vZGUucHJvcHMucHVzaCh7XG4vLyAgICAgICAgIC8vICAgICAgICAgbmFtZTogJ3ZhbHVlJyxcbi8vICAgICAgICAgLy8gICAgICAgICBleHByOiBhTm9kZS5jaGlsZHJlblswXS50ZXh0RXhwclxuLy8gICAgICAgICAvLyAgICAgfSk7XG4vLyAgICAgICAgIC8vIH1cbi8vIFxuLy8gICAgICAgICBlbGVtZW50U291cmNlQ29tcGlsZXIudGFnU3RhcnQoXG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIsXG4vLyAgICAgICAgICAgICBhTm9kZS50YWdOYW1lLFxuLy8gICAgICAgICAgICAgYU5vZGUucHJvcHMsXG4vLyAgICAgICAgICAgICBleHRyYS5wcm9wXG4vLyAgICAgICAgICk7XG4vLyBcbi8vICAgICAgICAgZWxlbWVudFNvdXJjZUNvbXBpbGVyLmlubmVyKHNvdXJjZUJ1ZmZlciwgYU5vZGUsIG93bmVyKTtcbi8vICAgICAgICAgZWxlbWVudFNvdXJjZUNvbXBpbGVyLnRhZ0VuZChzb3VyY2VCdWZmZXIsIGFOb2RlLnRhZ05hbWUpO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5Hnu4Tku7boioLngrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOiKgueCueWvueixoVxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7blrp7kvovnjq/looNcbi8vICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXh0cmEg57yW6K+R5omA6ZyA55qE5LiA5Lqb6aKd5aSW5L+h5oGvXG4vLyAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZXh0cmEuQ29tcG9uZW50Q2xhc3Mg5a+55bqU57uE5Lu257G7XG4vLyAgICAgICovXG4vLyAgICAgY29tcGlsZUNvbXBvbmVudDogZnVuY3Rpb24gKGFOb2RlLCBzb3VyY2VCdWZmZXIsIG93bmVyLCBleHRyYSkge1xuLy8gICAgICAgICBpZiAoYU5vZGUpIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ3ZhciAkc2xvdE5hbWUgPSBudWxsOycpO1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygndmFyICRnaXZlblNsb3RzID0gW107Jyk7XG4vLyAgICAgICAgICAgICBlYWNoKGFOb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbi8vICAgICAgICAgICAgICAgICB2YXIgc2xvdEJpbmQgPSAhY2hpbGQudGV4dEV4cHIgJiYgZ2V0QU5vZGVQcm9wKGNoaWxkLCAnc2xvdCcpO1xuLy8gICAgICAgICAgICAgICAgIGlmIChzbG90QmluZCkge1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCckc2xvdE5hbWUgPSAnICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihzbG90QmluZC5leHByKSArICc7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyRnaXZlblNsb3RzLnB1c2goW2Z1bmN0aW9uIChjb21wb25lbnRDdHgpIHsnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICB2YXIgaHRtbCA9IFwiXCI7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoYU5vZGVDb21waWxlci5jb21waWxlKGNoaWxkLCBzb3VyY2VCdWZmZXIsIG93bmVyKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgcmV0dXJuIGh0bWw7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30sICRzbG90TmFtZV0pOycpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJGdpdmVuU2xvdHMucHVzaChbZnVuY3Rpb24gKGNvbXBvbmVudEN0eCkgeycpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIHZhciBodG1sID0gXCJcIjsnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdyhhTm9kZUNvbXBpbGVyLmNvbXBpbGUoY2hpbGQsIHNvdXJjZUJ1ZmZlciwgb3duZXIpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICByZXR1cm4gaHRtbDsnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfV0pOycpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgdmFyIENvbXBvbmVudENsYXNzID0gZXh0cmEuQ29tcG9uZW50Q2xhc3M7XG4vLyAgICAgICAgIHZhciBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50Q2xhc3Moe1xuLy8gICAgICAgICAgICAgYU5vZGU6IGFOb2RlLFxuLy8gICAgICAgICAgICAgb3duZXI6IG93bmVyLFxuLy8gICAgICAgICAgICAgc3ViVGFnOiBhTm9kZS50YWdOYW1lXG4vLyAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgIHZhciBnaXZlbkRhdGEgPSBbXTtcbi8vIFxuLy8gICAgICAgICBlYWNoKGNvbXBvbmVudC5iaW5kcywgZnVuY3Rpb24gKHByb3ApIHtcbi8vICAgICAgICAgICAgIGdpdmVuRGF0YS5wdXNoKFxuLy8gICAgICAgICAgICAgICAgIGNvbXBpbGVFeHByU291cmNlLnN0cmluZ0xpdGVyYWxpemUocHJvcC5uYW1lKVxuLy8gICAgICAgICAgICAgICAgICsgJzonXG4vLyAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHByb3AuZXhwcilcbi8vICAgICAgICAgICAgICk7XG4vLyAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2h0bWwgKz0gKCcpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmVuZGVyZXJTdGFydCgpO1xuLy8gICAgICAgICBjb21waWxlQ29tcG9uZW50U291cmNlKHNvdXJjZUJ1ZmZlciwgY29tcG9uZW50LCBleHRyYSAmJiBleHRyYS5wcm9wKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJlbmRlcmVyRW5kKCk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJykoeycgKyBnaXZlbkRhdGEuam9pbignLFxcbicpICsgJ30sIGNvbXBvbmVudEN0eCwgJGdpdmVuU2xvdHMpOycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCckZ2l2ZW5TbG90cyA9IG51bGw7Jyk7XG4vLyAgICAgfVxuLy8gfTtcbi8vIC8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xuLy8gXG4vLyAvKipcbi8vICAqIOeUn+aIkOe7hOS7tiByZW5kZXJlciDml7YgY3R4IOWvueixoeaehOW7uueahOS7o+eggVxuLy8gICpcbi8vICAqIEBpbm5lclxuLy8gICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50IOe7hOS7tuWunuS+i1xuLy8gICogQHBhcmFtIHtzdHJpbmc/fSBleHRyYVByb3Ag6aKd5aSW55qE5bGe5oCn5LiyXG4vLyAgKi9cbi8vIGZ1bmN0aW9uIGNvbXBpbGVDb21wb25lbnRTb3VyY2Uoc291cmNlQnVmZmVyLCBjb21wb25lbnQsIGV4dHJhUHJvcCkge1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoZ2VuQ29tcG9uZW50Q29udGV4dENvZGUoY29tcG9uZW50KSk7XG4vLyAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnY29tcG9uZW50Q3R4Lm93bmVyID0gcGFyZW50Q3R4OycpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2NvbXBvbmVudEN0eC5naXZlblNsb3RzID0gZ2l2ZW5TbG90czsnKTtcbi8vIFxuLy8gXG4vLyAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnZGF0YSA9IGV4dGVuZChjb21wb25lbnRDdHguZGF0YSwgZGF0YSk7Jyk7XG4vLyAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnZm9yICh2YXIgJGkgPSAwOyAkaSA8IGNvbXBvbmVudEN0eC5jb21wdXRlZE5hbWVzLmxlbmd0aDsgJGkrKykgeycpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgdmFyICRjb21wdXRlZE5hbWUgPSBjb21wb25lbnRDdHguY29tcHV0ZWROYW1lc1skaV07Jyk7XG4vLyAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICBkYXRhWyRjb21wdXRlZE5hbWVdID0gY29tcG9uZW50Q3R4LmNvbXB1dGVkWyRjb21wdXRlZE5hbWVdKCk7Jyk7XG4vLyAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gXG4vLyAgICAgZXh0cmFQcm9wID0gZXh0cmFQcm9wIHx8ICcnO1xuLy8gXG4vLyAgICAgdmFyIGV2ZW50RGVjbGFyYXRpb25zID0gW107XG4vLyAgICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudC5saXN0ZW5lcnMpIHtcbi8vICAgICAgICAgZWFjaChjb21wb25lbnQubGlzdGVuZXJzW2tleV0sIGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuLy8gICAgICAgICAgICAgaWYgKGxpc3RlbmVyLmRlY2xhcmF0aW9uKSB7XG4vLyAgICAgICAgICAgICAgICAgZXZlbnREZWNsYXJhdGlvbnMucHVzaChsaXN0ZW5lci5kZWNsYXJhdGlvbik7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cbi8vIFxuLy8gICAgIGVsZW1lbnRTb3VyY2VDb21waWxlci50YWdTdGFydChcbi8vICAgICAgICAgc291cmNlQnVmZmVyLFxuLy8gICAgICAgICBjb21wb25lbnQudGFnTmFtZSxcbi8vICAgICAgICAgY29tcG9uZW50LmFOb2RlLnByb3BzLFxuLy8gICAgICAgICBleHRyYVByb3Bcbi8vICAgICApO1xuLy8gXG4vLyAgICAgaWYgKCFjb21wb25lbnQub3duZXIpIHtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoJzwhLS1zLWRhdGE6Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luRGF0YVN0cmluZ2lmeSgpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZygnLS0+Jyk7XG4vLyAgICAgfVxuLy8gXG4vLyBcbi8vIFxuLy8gICAgIGVsZW1lbnRTb3VyY2VDb21waWxlci5pbm5lcihzb3VyY2VCdWZmZXIsIGNvbXBvbmVudC5hTm9kZSwgY29tcG9uZW50KTtcbi8vICAgICBlbGVtZW50U291cmNlQ29tcGlsZXIudGFnRW5kKHNvdXJjZUJ1ZmZlciwgY29tcG9uZW50LnRhZ05hbWUpO1xuLy8gfVxuLy8gXG4vLyB2YXIgc3RyaW5naWZpZXIgPSB7XG4vLyAgICAgb2JqOiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgIHZhciBwcmVmaXhDb21tYTtcbi8vICAgICAgICAgdmFyIHJlc3VsdCA9ICd7Jztcbi8vIFxuLy8gICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4vLyAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtrZXldID09PSAndW5kZWZpbmVkJykge1xuLy8gICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICBpZiAocHJlZml4Q29tbWEpIHtcbi8vICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJywnO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcHJlZml4Q29tbWEgPSAxO1xuLy8gXG4vLyAgICAgICAgICAgICByZXN1bHQgKz0gY29tcGlsZUV4cHJTb3VyY2Uuc3RyaW5nTGl0ZXJhbGl6ZShrZXkpICsgJzonICsgc3RyaW5naWZpZXIuYW55KHNvdXJjZVtrZXldKTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHJldHVybiByZXN1bHQgKyAnfSc7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIGFycjogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICB2YXIgcHJlZml4Q29tbWE7XG4vLyAgICAgICAgIHZhciByZXN1bHQgPSAnWyc7XG4vLyBcbi8vICAgICAgICAgZWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSkge1xuLy8gICAgICAgICAgICAgaWYgKHByZWZpeENvbW1hKSB7XG4vLyAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcsJztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIHByZWZpeENvbW1hID0gMTtcbi8vIFxuLy8gICAgICAgICAgICAgcmVzdWx0ICs9IHN0cmluZ2lmaWVyLmFueSh2YWx1ZSk7XG4vLyAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgIHJldHVybiByZXN1bHQgKyAnXSc7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIHN0cjogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICByZXR1cm4gY29tcGlsZUV4cHJTb3VyY2Uuc3RyaW5nTGl0ZXJhbGl6ZShzb3VyY2UpO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICBkYXRlOiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgIHJldHVybiAnbmV3IERhdGUoJyArIHNvdXJjZS5nZXRUaW1lKCkgKyAnKSc7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIGFueTogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICBzd2l0Y2ggKHR5cGVvZiBzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmaWVyLnN0cihzb3VyY2UpO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlICdudW1iZXInOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiAnJyArIHNvdXJjZTtcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSA/ICd0cnVlJyA6ICdmYWxzZSc7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4vLyAgICAgICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZmllci5hcnIoc291cmNlKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgRGF0ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZpZXIuZGF0ZShzb3VyY2UpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZmllci5vYmooc291cmNlKTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IFN0cmluZ2lmeTonICsgc291cmNlKTtcbi8vICAgICB9XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIOeUn+aIkOe7hOS7tiByZW5kZXJlciDml7YgY3R4IOWvueixoeaehOW7uueahOS7o+eggVxuLy8gICpcbi8vICAqIEBpbm5lclxuLy8gICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCDnu4Tku7blrp7kvotcbi8vICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAqL1xuLy8gZnVuY3Rpb24gZ2VuQ29tcG9uZW50Q29udGV4dENvZGUoY29tcG9uZW50KSB7XG4vLyAgICAgdmFyIGNvZGUgPSBbJ3ZhciBjb21wb25lbnRDdHggPSB7J107XG4vLyBcbi8vICAgICAvLyBnaXZlbiBhbm9kZVxuLy8gICAgIGNvZGUucHVzaCgnZ2l2ZW5TbG90czogW10sJyk7XG4vLyBcbi8vICAgICAvLyBmaWx0ZXJzXG4vLyAgICAgY29kZS5wdXNoKCdmaWx0ZXJzOiB7Jyk7XG4vLyAgICAgdmFyIGZpbHRlckNvZGUgPSBbXTtcbi8vICAgICBmb3IgKHZhciBrZXkgaW4gY29tcG9uZW50LmZpbHRlcnMpIHtcbi8vICAgICAgICAgdmFyIGZpbHRlciA9IGNvbXBvbmVudC5maWx0ZXJzW2tleV07XG4vLyBcbi8vICAgICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbi8vICAgICAgICAgICAgIGZpbHRlckNvZGUucHVzaChrZXkgKyAnOiAnICsgZmlsdGVyLnRvU3RyaW5nKCkpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGNvZGUucHVzaChmaWx0ZXJDb2RlLmpvaW4oJywnKSk7XG4vLyAgICAgY29kZS5wdXNoKCd9LCcpO1xuLy8gXG4vLyAgICAgY29kZS5wdXNoKFxuLy8gICAgICAgICAnY2FsbEZpbHRlcjogZnVuY3Rpb24gKG5hbWUsIGFyZ3MpIHsnLFxuLy8gICAgICAgICAnICAgIHZhciBmaWx0ZXIgPSB0aGlzLmZpbHRlcnNbbmFtZV0gfHwgREVGQVVMVF9GSUxURVJTW25hbWVdOycsXG4vLyAgICAgICAgICcgICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09IFwiZnVuY3Rpb25cIikgeycsXG4vLyAgICAgICAgICcgICAgICAgIHJldHVybiBmaWx0ZXIuYXBwbHkodGhpcywgYXJncyk7Jyxcbi8vICAgICAgICAgJyAgICB9Jyxcbi8vICAgICAgICAgJ30sJ1xuLy8gICAgICk7XG4vLyBcbi8vICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1yZWRlY2xhcmUgKi9cbi8vICAgICAvLyBjb21wdXRlZCBvYmpcbi8vICAgICBjb2RlLnB1c2goJ2NvbXB1dGVkOiB7Jyk7XG4vLyAgICAgdmFyIGNvbXB1dGVkQ29kZSA9IFtdO1xuLy8gICAgIGZvciAodmFyIGtleSBpbiBjb21wb25lbnQuY29tcHV0ZWQpIHtcbi8vICAgICAgICAgdmFyIGNvbXB1dGVkID0gY29tcG9uZW50LmNvbXB1dGVkW2tleV07XG4vLyBcbi8vICAgICAgICAgaWYgKHR5cGVvZiBjb21wdXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuLy8gICAgICAgICAgICAgY29tcHV0ZWRDb2RlLnB1c2goa2V5ICsgJzogJ1xuLy8gICAgICAgICAgICAgICAgICsgY29tcHV0ZWQudG9TdHJpbmcoKS5yZXBsYWNlKFxuLy8gICAgICAgICAgICAgICAgICAgICAvdGhpcy5kYXRhLmdldFxcKChbXlxcKV0rKVxcKS9nLFxuLy8gICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGV4cHJMaXRlcmFsKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhwclN0ciA9IChuZXcgRnVuY3Rpb24oJ3JldHVybiAnICsgZXhwckxpdGVyYWwpKSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cHIgPSBwYXJzZUV4cHIoZXhwclN0cik7XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21waWxlRXhwclNvdXJjZS5leHByKGV4cHIpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBjb2RlLnB1c2goY29tcHV0ZWRDb2RlLmpvaW4oJywnKSk7XG4vLyAgICAgY29kZS5wdXNoKCd9LCcpO1xuLy8gXG4vLyAgICAgLy8gY29tcHV0ZWQgbmFtZXNcbi8vICAgICBjb2RlLnB1c2goJ2NvbXB1dGVkTmFtZXM6IFsnKTtcbi8vICAgICBjb21wdXRlZENvZGUgPSBbXTtcbi8vICAgICBmb3IgKHZhciBrZXkgaW4gY29tcG9uZW50LmNvbXB1dGVkKSB7XG4vLyAgICAgICAgIHZhciBjb21wdXRlZCA9IGNvbXBvbmVudC5jb21wdXRlZFtrZXldO1xuLy8gXG4vLyAgICAgICAgIGlmICh0eXBlb2YgY29tcHV0ZWQgPT09ICdmdW5jdGlvbicpIHtcbi8vICAgICAgICAgICAgIGNvbXB1dGVkQ29kZS5wdXNoKCdcIicgKyBrZXkgKyAnXCInKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBjb2RlLnB1c2goY29tcHV0ZWRDb2RlLmpvaW4oJywnKSk7XG4vLyAgICAgY29kZS5wdXNoKCddLCcpO1xuLy8gICAgIC8qIGVzbGludC1lbmFibGUgbm8tcmVkZWNsYXJlICovXG4vLyBcbi8vICAgICAvLyBkYXRhXG4vLyAgICAgY29kZS5wdXNoKCdkYXRhOiAnICsgc3RyaW5naWZpZXIuYW55KGNvbXBvbmVudC5kYXRhLmdldCgpKSArICcsJyk7XG4vLyBcbi8vICAgICAvLyB0YWdOYW1lXG4vLyAgICAgY29kZS5wdXNoKCd0YWdOYW1lOiBcIicgKyBjb21wb25lbnQudGFnTmFtZSArICdcIicpO1xuLy8gICAgIGNvZGUucHVzaCgnfTsnKTtcbi8vIFxuLy8gICAgIHJldHVybiBjb2RlLmpvaW4oJ1xcbicpO1xuLy8gfVxuLy8gXG4vLyAvKiBlc2xpbnQtZW5hYmxlIGd1YXJkLWZvci1pbiAqL1xuLy8gXG4vLyAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gLyogZXNsaW50LWRpc2FibGUgZmVjcy1jYW1lbGNhc2UgKi9cbi8vIFxuLy8gLyoqXG4vLyAgKiDnu4Tku7bnvJbor5HnmoTmqKHmnb/lh73mlbBcbi8vICAqXG4vLyAgKiBAaW5uZXJcbi8vICAqL1xuLy8gZnVuY3Rpb24gY29tcG9uZW50Q29tcGlsZVByZUNvZGUoKSB7XG4vLyAgICAgdmFyICR2ZXJzaW9uID0gJzMuNS43Jztcbi8vIFxuLy8gICAgIGZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNvdXJjZSkge1xuLy8gICAgICAgICBpZiAoc291cmNlKSB7XG4vLyAgICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuLy8gICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuLy8gICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICByZXR1cm4gdGFyZ2V0O1xuLy8gICAgIH1cbi8vIFxuLy8gICAgIGZ1bmN0aW9uIGVhY2goYXJyYXksIGl0ZXJhdG9yKSB7XG4vLyAgICAgICAgIGlmIChhcnJheSAmJiBhcnJheS5sZW5ndGggPiAwKSB7XG4vLyAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvcihhcnJheVtpXSwgaSkgPT09IGZhbHNlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIFxuLy8gICAgIGZ1bmN0aW9uIGNvbnRhaW5zKGFycmF5LCB2YWx1ZSkge1xuLy8gICAgICAgICB2YXIgcmVzdWx0O1xuLy8gICAgICAgICBlYWNoKGFycmF5LCBmdW5jdGlvbiAoaXRlbSkge1xuLy8gICAgICAgICAgICAgcmVzdWx0ID0gaXRlbSA9PT0gdmFsdWU7XG4vLyAgICAgICAgICAgICByZXR1cm4gIXJlc3VsdDtcbi8vICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgICB9XG4vLyBcbi8vICAgICB2YXIgSFRNTF9FTlRJVFkgPSB7XG4vLyAgICAgICAgIC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cbi8vICAgICAgICAgJyYnOiAnJmFtcDsnLFxuLy8gICAgICAgICAnPCc6ICcmbHQ7Jyxcbi8vICAgICAgICAgJz4nOiAnJmd0OycsXG4vLyAgICAgICAgICdcIic6ICcmcXVvdDsnLFxuLy8gICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBxdW90ZXMgKi9cbi8vICAgICAgICAgXCInXCI6ICcmIzM5Oydcbi8vICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBxdW90ZXMgKi9cbi8vICAgICAgICAgLyoganNoaW50IGlnbm9yZTplbmQgKi9cbi8vICAgICB9O1xuLy8gXG4vLyAgICAgZnVuY3Rpb24gaHRtbEZpbHRlclJlcGxhY2VyKGMpIHtcbi8vICAgICAgICAgcmV0dXJuIEhUTUxfRU5USVRZW2NdO1xuLy8gICAgIH1cbi8vIFxuLy8gICAgIGZ1bmN0aW9uIGVzY2FwZUhUTUwoc291cmNlKSB7XG4vLyAgICAgICAgIGlmIChzb3VyY2UgPT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuICcnO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgcmV0dXJuIFN0cmluZyhzb3VyY2UpLnJlcGxhY2UoL1smPD5cIiddL2csIGh0bWxGaWx0ZXJSZXBsYWNlcik7XG4vLyAgICAgfVxuLy8gXG4vLyAgICAgdmFyIERFRkFVTFRfRklMVEVSUyA9IHtcbi8vICAgICAgICAgdXJsOiBlbmNvZGVVUklDb21wb25lbnQsXG4vLyAgICAgICAgIF9jbGFzczogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5qb2luKCcgJyk7XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIF9zdHlsZTogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuLy8gICAgICAgICAgICAgICAgIGlmIChzb3VyY2UpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBrZXkgKyAnOicgKyBzb3VyY2Vba2V5XSArICc7Jztcbi8vICAgICAgICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSB8fCAnJztcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgX3NlcDogZnVuY3Rpb24gKHNvdXJjZSwgc2VwKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gc291cmNlID8gc2VwICsgc291cmNlIDogJyc7XG4vLyAgICAgICAgIH1cbi8vICAgICB9O1xuLy8gXG4vLyAgICAgZnVuY3Rpb24gYXR0ckZpbHRlcihuYW1lLCB2YWx1ZSkge1xuLy8gICAgICAgICBpZiAodmFsdWUpIHtcbi8vICAgICAgICAgICAgIHJldHVybiAnICcgKyBuYW1lICsgJz1cIicgKyB2YWx1ZSArICdcIic7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICByZXR1cm4gJyc7XG4vLyAgICAgfVxuLy8gXG4vLyAgICAgZnVuY3Rpb24gYm9vbEF0dHJGaWx0ZXIobmFtZSwgdmFsdWUpIHtcbi8vICAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnICYmIHZhbHVlICE9PSAnMCcpIHtcbi8vICAgICAgICAgICAgIHJldHVybiAnICcgKyBuYW1lO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgcmV0dXJuICcnO1xuLy8gICAgIH1cbi8vIFxuLy8gICAgIGZ1bmN0aW9uIHN0cmluZ0xpdGVyYWxpemUoc291cmNlKSB7XG4vLyAgICAgICAgIHJldHVybiAnXCInXG4vLyAgICAgICAgICAgICArIHNvdXJjZVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHg1Qy9nLCAnXFxcXFxcXFwnKVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJylcbi8vICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFx4MEEvZywgJ1xcXFxuJylcbi8vICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFx4MDkvZywgJ1xcXFx0Jylcbi8vICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFx4MEQvZywgJ1xcXFxyJylcbi8vICAgICAgICAgICAgICsgJ1wiJztcbi8vICAgICB9XG4vLyBcbi8vICAgICB2YXIgc3RyaW5naWZpZXIgPSB7XG4vLyAgICAgICAgIG9iajogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgdmFyIHByZWZpeENvbW1hO1xuLy8gICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICd7Jztcbi8vIFxuLy8gICAgICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbi8vICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtrZXldID09PSAndW5kZWZpbmVkJykge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICAgICAgaWYgKHByZWZpeENvbW1hKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIHByZWZpeENvbW1hID0gMTtcbi8vIFxuLy8gICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzdHJpbmdMaXRlcmFsaXplKGtleSkgKyAnOicgKyBzdHJpbmdpZmllci5hbnkoc291cmNlW2tleV0pO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAnfSc7XG4vLyAgICAgICAgIH0sXG4vLyBcbi8vICAgICAgICAgYXJyOiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgICAgICB2YXIgcHJlZml4Q29tbWE7XG4vLyAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gJ1snO1xuLy8gXG4vLyAgICAgICAgICAgICBlYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHByZWZpeENvbW1hKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIHByZWZpeENvbW1hID0gMTtcbi8vIFxuLy8gICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzdHJpbmdpZmllci5hbnkodmFsdWUpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyAnXSc7XG4vLyAgICAgICAgIH0sXG4vLyBcbi8vICAgICAgICAgc3RyOiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gc3RyaW5nTGl0ZXJhbGl6ZShzb3VyY2UpO1xuLy8gICAgICAgICB9LFxuLy8gXG4vLyAgICAgICAgIGRhdGU6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIHJldHVybiAnbmV3IERhdGUoJyArIHNvdXJjZS5nZXRUaW1lKCkgKyAnKSc7XG4vLyAgICAgICAgIH0sXG4vLyBcbi8vICAgICAgICAgYW55OiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBzb3VyY2UpIHtcbi8vICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZpZXIuc3RyKHNvdXJjZSk7XG4vLyBcbi8vICAgICAgICAgICAgICAgICBjYXNlICdudW1iZXInOlxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gJycgKyBzb3VyY2U7XG4vLyBcbi8vICAgICAgICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSA/ICd0cnVlJyA6ICdmYWxzZSc7XG4vLyBcbi8vICAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZmllci5hcnIoc291cmNlKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBEYXRlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZpZXIuZGF0ZShzb3VyY2UpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmaWVyLm9iaihzb3VyY2UpO1xuLy8gICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBTdHJpbmdpZnk6JyArIHNvdXJjZSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9O1xuLy8gfVxuLy8gLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gLyogZXNsaW50LWVuYWJsZSBmZWNzLWNhbWVsY2FzZSAqL1xuLy8gXG4vLyAvKipcbi8vICAqIOWwhue7hOS7tue8luivkeaIkCByZW5kZXIg5pa55rOV55qEIGpzIOa6kOeggVxuLy8gICpcbi8vICAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudENsYXNzIOe7hOS7tuexu1xuLy8gICogQHJldHVybiB7c3RyaW5nfVxuLy8gICovXG4vLyBmdW5jdGlvbiBjb21waWxlSlNTb3VyY2UoQ29tcG9uZW50Q2xhc3MpIHtcbi8vICAgICB2YXIgc291cmNlQnVmZmVyID0gbmV3IENvbXBpbGVTb3VyY2VCdWZmZXIoKTtcbi8vIFxuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSZW5kZXJlclN0YXJ0KCk7XG4vLyAgICAgc291cmNlQnVmZmVyLmFkZFJhdyhcbi8vICAgICAgICAgY29tcG9uZW50Q29tcGlsZVByZUNvZGUudG9TdHJpbmcoKVxuLy8gICAgICAgICAgICAgLnNwbGl0KCdcXG4nKVxuLy8gICAgICAgICAgICAgLnNsaWNlKDEpXG4vLyAgICAgICAgICAgICAuam9pbignXFxuJylcbi8vICAgICAgICAgICAgIC5yZXBsYWNlKC9cXH1cXHMqJC8sICcnKVxuLy8gICAgICk7XG4vLyBcbi8vICAgICAvLyDlhYjliJ3lp4vljJbkuKrlrp7kvovvvIzorqnmqKHmnb/nvJbor5HmiJAgQU5vZGXvvIzlubbkuJTog73ojrflvpfliJ3lp4vljJbmlbDmja5cbi8vICAgICB2YXIgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudENsYXNzKCk7XG4vLyBcbi8vICAgICBjb21waWxlQ29tcG9uZW50U291cmNlKHNvdXJjZUJ1ZmZlciwgY29tcG9uZW50KTtcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmVuZGVyZXJFbmQoKTtcbi8vICAgICByZXR1cm4gc291cmNlQnVmZmVyLnRvQ29kZSgpO1xuLy8gfVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNvbXBpbGVKU1NvdXJjZTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyAgICAgdmFyIG5leHRUaWNrID0gcmVxdWlyZSgnLi91dGlsL25leHQtdGljaycpO1xuLy8gICAgIHZhciBpbmhlcml0cyA9IHJlcXVpcmUoJy4vdXRpbC9pbmhlcml0cycpO1xuLy8gICAgIHZhciBwYXJzZVRlbXBsYXRlID0gcmVxdWlyZSgnLi9wYXJzZXIvcGFyc2UtdGVtcGxhdGUnKTtcbi8vICAgICB2YXIgcGFyc2VFeHByID0gcmVxdWlyZSgnLi9wYXJzZXIvcGFyc2UtZXhwcicpO1xuLy8gICAgIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gICAgIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL3ZpZXcvbGlmZS1jeWNsZScpO1xuLy8gICAgIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vdmlldy9ub2RlLXR5cGUnKTtcbi8vICAgICB2YXIgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi92aWV3L2NvbXBvbmVudCcpO1xuLy8gICAgIHZhciBjb21waWxlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi92aWV3L2NvbXBpbGUtY29tcG9uZW50Jyk7XG4vLyAgICAgdmFyIGRlZmluZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vdmlldy9kZWZpbmUtY29tcG9uZW50Jyk7XG4vLyAgICAgdmFyIGVtaXREZXZ0b29sID0gcmVxdWlyZSgnLi91dGlsL2VtaXQtZGV2dG9vbCcpO1xuLy8gICAgIHZhciBjb21waWxlSlNTb3VyY2UgPSByZXF1aXJlKCcuL3ZpZXcvY29tcGlsZS1qcy1zb3VyY2UnKTtcbi8vICAgICB2YXIgRGF0YSA9IHJlcXVpcmUoJy4vcnVudGltZS9kYXRhJyk7XG4vLyAgICAgdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi9ydW50aW1lL2V2YWwtZXhwcicpO1xuLy8gICAgIHZhciBEYXRhVHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvZGF0YS10eXBlcycpO1xuXG5cbiAgICB2YXIgc2FuID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogc2Fu54mI5pys5Y+3XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB2ZXJzaW9uOiAnMy41LjcnLFxuXG4gICAgICAgIC8vICNbYmVnaW5dIGRldnRvb2xcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaYr+WQpuW8gOWQr+iwg+ivleOAguW8gOWQr+iwg+ivleaXtiBkZXZ0b29sIOS8muW3peS9nFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAvLyAjW2JlZ2luXSBzc3Jcbi8vICAgICAgICAgLyoqXG4vLyAgICAgICAgICAqIOWwhue7hOS7tuexu+e8luivkeaIkCByZW5kZXJlciDmlrnms5Vcbi8vICAgICAgICAgICpcbi8vICAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gQ29tcG9uZW50Q2xhc3Mg57uE5Lu257G7XG4vLyAgICAgICAgICAqIEByZXR1cm4ge2Z1bmN0aW9uKE9iamVjdCk6c3RyaW5nfVxuLy8gICAgICAgICAgKi9cbi8vICAgICAgICAgY29tcGlsZVRvUmVuZGVyZXI6IGZ1bmN0aW9uIChDb21wb25lbnRDbGFzcykge1xuLy8gICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gQ29tcG9uZW50Q2xhc3MuX19zc3JSZW5kZXJlcjtcbi8vIFxuLy8gICAgICAgICAgICAgaWYgKCFyZW5kZXJlcikge1xuLy8gICAgICAgICAgICAgICAgIHZhciBjb2RlID0gY29tcGlsZUpTU291cmNlKENvbXBvbmVudENsYXNzKTtcbi8vICAgICAgICAgICAgICAgICByZW5kZXJlciA9IChuZXcgRnVuY3Rpb24oJ3JldHVybiAnICsgY29kZSkpKCk7XG4vLyAgICAgICAgICAgICAgICAgQ29tcG9uZW50Q2xhc3MuX19zc3JSZW5kZXJlciA9IHJlbmRlcmVyO1xuLy8gICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXI7XG4vLyAgICAgICAgIH0sXG4vLyBcbi8vICAgICAgICAgLyoqXG4vLyAgICAgICAgICAqIOWwhue7hOS7tuexu+e8luivkeaIkCByZW5kZXJlciDmlrnms5XnmoTmupDmlofku7Zcbi8vICAgICAgICAgICpcbi8vICAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gQ29tcG9uZW50Q2xhc3Mg57uE5Lu257G7XG4vLyAgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAgICAgICAgICovXG4vLyAgICAgICAgIGNvbXBpbGVUb1NvdXJjZTogY29tcGlsZUpTU291cmNlLFxuICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAvKipcbiAgICAgICAgICog57uE5Lu25Z+657G7XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgICAgICovXG4gICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJvlu7rnu4Tku7bnsbtcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHByb3RvIOe7hOS7tuexu+eahOaWueazleihqFxuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICAgICAgICovXG4gICAgICAgIGRlZmluZUNvbXBvbmVudDogZGVmaW5lQ29tcG9uZW50LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnvJbor5Hnu4Tku7bnsbvjgILpooTop6PmnpB0ZW1wbGF0ZeWSjGNvbXBvbmVudHNcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gQ29tcG9uZW50Q2xhc3Mg57uE5Lu257G7XG4gICAgICAgICAqL1xuICAgICAgICBjb21waWxlQ29tcG9uZW50OiBjb21waWxlQ29tcG9uZW50LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDop6PmnpAgdGVtcGxhdGVcbiAgICAgICAgICpcbiAgICAgICAgICogQGlubmVyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgdGVtcGxhdGUg5rqQ56CBXG4gICAgICAgICAqIEByZXR1cm4ge0FOb2RlfVxuICAgICAgICAgKi9cbiAgICAgICAgcGFyc2VUZW1wbGF0ZTogcGFyc2VUZW1wbGF0ZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog6Kej5p6Q6KGo6L6+5byPXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ56CBXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHBhcnNlRXhwcjogcGFyc2VFeHByLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDooajovr7lvI/nsbvlnovmnprkuL5cbiAgICAgICAgICpcbiAgICAgICAgICogQGNvbnN0XG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBFeHByVHlwZTogRXhwclR5cGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeUn+WRveWRqOacn1xuICAgICAgICAgKi9cbiAgICAgICAgTGlmZUN5Y2xlOiBMaWZlQ3ljbGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiKgueCueexu+Wei1xuICAgICAgICAgKlxuICAgICAgICAgKiBAY29uc3RcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIE5vZGVUeXBlOiBOb2RlVHlwZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5Zyo5LiL5LiA5Liq5pu05paw5ZGo5pyf6L+Q6KGM5Ye95pWwXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOimgei/kOihjOeahOWHveaVsFxuICAgICAgICAgKi9cbiAgICAgICAgbmV4dFRpY2s6IG5leHRUaWNrLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmlbDmja7nsbtcbiAgICAgICAgICpcbiAgICAgICAgICogQGNsYXNzXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0P30gZGF0YSDliJ3lp4vmlbDmja5cbiAgICAgICAgICogQHBhcmFtIHtEYXRhP30gcGFyZW50IOeItue6p+aVsOaNruWvueixoVxuICAgICAgICAgKi9cbiAgICAgICAgRGF0YTogRGF0YSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog6K6h566X6KGo6L6+5byP55qE5YC8XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOihqOi+vuW8j+WvueixoVxuICAgICAgICAgKiBAcGFyYW0ge0RhdGF9IGRhdGEg5pWw5o2u5a+56LGhXG4gICAgICAgICAqIEBwYXJhbSB7Q29tcG9uZW50PX0gb3duZXIg57uE5Lu25a+56LGh77yM55So5LqO6KGo6L6+5byP5LitZmlsdGVy55qE5omn6KGMXG4gICAgICAgICAqIEByZXR1cm4geyp9XG4gICAgICAgICAqL1xuICAgICAgICBldmFsRXhwcjogZXZhbEV4cHIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaehOW7uuexu+S5i+mXtOeahOe7p+aJv+WFs+ezu1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJDbGFzcyDlrZDnsbvlh73mlbBcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3VwZXJDbGFzcyDniLbnsbvlh73mlbBcbiAgICAgICAgICovXG4gICAgICAgIGluaGVyaXRzOiBpbmhlcml0cyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGF0YVR5cGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBEYXRhVHlwZXM6IERhdGFUeXBlc1xuICAgIH07XG5cbiAgICAvLyBleHBvcnRcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIEZvciBDb21tb25KU1xuICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzYW47XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBGb3IgQU1EXG4gICAgICAgIGRlZmluZSgnc2FuJywgW10sIHNhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBGb3IgPHNjcmlwdCBzcmM9XCIuLi5cIlxuICAgICAgICByb290LnNhbiA9IHNhbjtcbiAgICB9XG5cbiAgICAvLyAjW2JlZ2luXSBkZXZ0b29sXG4gICAgZW1pdERldnRvb2wuc3RhcnQoc2FuKTtcbiAgICAvLyAjW2VuZF1cbn0pKHRoaXMpO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL0FwcC5zYW5cIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL0FwcC5zYW5cIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlJmluZGV4PTAhLi9BcHAuc2FuXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL0V4cGFuc2lvblBhbmVsLnNhblwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vRXhwYW5zaW9uUGFuZWwuc2FuXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vRXhwYW5zaW9uUGFuZWwuc2FuXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBzYW4gZnJvbSBcInNhblwiO1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSBcInNhbi1yb3V0ZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vdmlldy9BcHAuc2FuXCI7XG5cbnJvdXRlci5hZGQoeyBydWxlOiAnLycsIENvbXBvbmVudDogQXBwLCB0YXJnZXQ6ICcjYXBwJyB9KTtcbnJvdXRlci5zdGFydCgpO1xuY29uc29sZS5sb2coJ1NlcnZlciBzdGFydHMuJyk7XG4iLCJ2YXIgX19zYW5fc2NyaXB0X18sIF9fc2FuX3RlbXBsYXRlX19cbnZhciBfX3Nhbl9zdHlsZXNfXyA9IHt9XG5yZXF1aXJlKFwiISFzdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlJmluZGV4PTAhLi9BcHAuc2FuXCIpXG5fX3Nhbl9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhISEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcC5zYW5cIilcbmlmIChfX3Nhbl9zY3JpcHRfXyAmJlxuICAgIF9fc2FuX3NjcmlwdF9fLl9fZXNNb2R1bGUgJiZcbiAgICBPYmplY3Qua2V5cyhfX3Nhbl9zY3JpcHRfXykubGVuZ3RoID4gMSkge1xuICBjb25zb2xlLndhcm4oXCJbc2FuLWxvYWRlcl0gc3JjL3ZpZXcvQXBwLnNhbjogbmFtZWQgZXhwb3J0cyBpbiAqLnNhbiBmaWxlcyBhcmUgaWdub3JlZC5cIil9XG5fX3Nhbl90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhaHRtbC1sb2FkZXI/bWluaW1pemU9ZmFsc2UhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcC5zYW5cIilcbnZhciBfX3Nhbl9wcm90b19fID0ge31cbmlmIChfX3Nhbl9zY3JpcHRfXykge1xuICBfX3Nhbl9wcm90b19fID0gX19zYW5fc2NyaXB0X18uX19lc01vZHVsZVxuICAgID8gX19zYW5fc2NyaXB0X19bJ2RlZmF1bHQnXVxuICAgIDogX19zYW5fc2NyaXB0X19cbn1cbmlmIChfX3Nhbl90ZW1wbGF0ZV9fKSB7XG4gIF9fc2FuX3Byb3RvX18udGVtcGxhdGUgPSBfX3Nhbl90ZW1wbGF0ZV9fXG59XG52YXIgc2FuID0gcmVxdWlyZShcInNhblwiKVxudmFyIF9fc2FuX2V4cG9ydHNfXyA9IHNhbi5kZWZpbmVDb21wb25lbnQoX19zYW5fcHJvdG9fXylcbm1vZHVsZS5leHBvcnRzID0gX19zYW5fZXhwb3J0c19fXG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0c1snZGVmYXVsdCddXG5pZiAoIV9fc2FuX2V4cG9ydHNfXy5jb21wdXRlZCkgX19zYW5fZXhwb3J0c19fLmNvbXB1dGVkID0ge31cbk9iamVjdC5rZXlzKF9fc2FuX3N0eWxlc19fKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbnZhciBtb2R1bGUgPSBfX3Nhbl9zdHlsZXNfX1trZXldXG5fX3Nhbl9leHBvcnRzX18uY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG59KVxuIiwidmFyIF9fc2FuX3NjcmlwdF9fLCBfX3Nhbl90ZW1wbGF0ZV9fXG52YXIgX19zYW5fc3R5bGVzX18gPSB7fVxucmVxdWlyZShcIiEhc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vRXhwYW5zaW9uUGFuZWwuc2FuXCIpXG5fX3Nhbl9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhISEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0V4cGFuc2lvblBhbmVsLnNhblwiKVxuaWYgKF9fc2FuX3NjcmlwdF9fICYmXG4gICAgX19zYW5fc2NyaXB0X18uX19lc01vZHVsZSAmJlxuICAgIE9iamVjdC5rZXlzKF9fc2FuX3NjcmlwdF9fKS5sZW5ndGggPiAxKSB7XG4gIGNvbnNvbGUud2FybihcIltzYW4tbG9hZGVyXSBzcmMvdmlldy9FeHBhbnNpb25QYW5lbC5zYW46IG5hbWVkIGV4cG9ydHMgaW4gKi5zYW4gZmlsZXMgYXJlIGlnbm9yZWQuXCIpfVxuX19zYW5fdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIWh0bWwtbG9hZGVyP21pbmltaXplPWZhbHNlIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9FeHBhbnNpb25QYW5lbC5zYW5cIilcbnZhciBfX3Nhbl9wcm90b19fID0ge31cbmlmIChfX3Nhbl9zY3JpcHRfXykge1xuICBfX3Nhbl9wcm90b19fID0gX19zYW5fc2NyaXB0X18uX19lc01vZHVsZVxuICAgID8gX19zYW5fc2NyaXB0X19bJ2RlZmF1bHQnXVxuICAgIDogX19zYW5fc2NyaXB0X19cbn1cbmlmIChfX3Nhbl90ZW1wbGF0ZV9fKSB7XG4gIF9fc2FuX3Byb3RvX18udGVtcGxhdGUgPSBfX3Nhbl90ZW1wbGF0ZV9fXG59XG52YXIgc2FuID0gcmVxdWlyZShcInNhblwiKVxudmFyIF9fc2FuX2V4cG9ydHNfXyA9IHNhbi5kZWZpbmVDb21wb25lbnQoX19zYW5fcHJvdG9fXylcbm1vZHVsZS5leHBvcnRzID0gX19zYW5fZXhwb3J0c19fXG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0c1snZGVmYXVsdCddXG5pZiAoIV9fc2FuX2V4cG9ydHNfXy5jb21wdXRlZCkgX19zYW5fZXhwb3J0c19fLmNvbXB1dGVkID0ge31cbk9iamVjdC5rZXlzKF9fc2FuX3N0eWxlc19fKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbnZhciBtb2R1bGUgPSBfX3Nhbl9zdHlsZXNfX1trZXldXG5fX3Nhbl9leHBvcnRzX18uY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==