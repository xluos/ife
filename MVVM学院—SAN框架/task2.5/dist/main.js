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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.content header {\n    padding: 50px;\n    padding-bottom: 10px;\n    background: #5B5B5B;\n}\n\n.content header .title {\n    display: flex;\n}\n\n.title .info {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 16px 10px;\n    font-size: 14px;\n}\n\n.title .ename {\n    color: #848484;\n}\n\n.title .info .type {\n    background: #848484;\n    padding: 1px 5px;\n    color: #5B5B5B;\n    border-radius: 3px;\n    font-size: 12px;\n}\n\nheader .name {\n    margin: 0;\n    font-size: 50px;\n    color: #fff;\n}\n\nheader .info {\n    color: #848484;\n}\n.content section {\n    min-height: 400px;\n}\n.ui-input {\n    display: inline-block;\n    margin: 30px;\n    margin-left: 200px;\n}\n.san-checkbox {\n    width: 150px;\n    margin: 30px 50px;\n}\nfooter {\n    text-align: center;\n}\n", "", {"version":3,"sources":["/home/code/Desktop/ife/MVVM学院—SAN框架/task2.5/src/view/App.san?5263f024"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiHA;;IAEA,UAAA;IACA,WAAA;CACA;;AAEA;IACA,cAAA;IACA,qBAAA;IACA,oBAAA;CACA;;AAEA;IACA,cAAA;CACA;;AAEA;IACA,cAAA;IACA,uBAAA;IACA,+BAAA;IACA,wBAAA;IACA,mBAAA;IACA,gBAAA;CACA;;AAEA;IACA,eAAA;CACA;;AAEA;IACA,oBAAA;IACA,iBAAA;IACA,eAAA;IACA,mBAAA;IACA,gBAAA;CACA;;AAEA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;CACA;;AAEA;IACA,eAAA;CACA;AACA;IACA,kBAAA;CACA;AACA;IACA,sBAAA;IACA,aAAA;IACA,mBAAA;CACA;AACA;IACA,aAAA;IACA,kBAAA;CACA;AACA;IACA,mBAAA;CACA","file":"App.san","sourcesContent":["<template>\n    <div>\n        <article class=\"content\">\n            <header class=\"input-head\">\n                <div class=\"title\">\n                    <h2 class=\"name\">输入框</h2>\n                    <div class=\"info\">\n                        <span class=\"type\">控件</span>\n                        <span class=\"ename\">input</span>\n                    </div>\n                </div>\n                <p class=\"info\">\n                    各种输入框\n                </p>\n            </header>\n            <section>\n                \n                <san-input\n                    placeholder=\"用户名输入框\"\n                    hintDirection=\"bottom\"\n                    popoverDirection=\"top\"\n                    type=\"name\"\n                ></san-input>\n                <br>\n                <san-input\n                    placeholder=\"密码输入框\"\n                    hintDirection=\"top\"\n                    popoverDirection=\"bottom\"\n                    type=\"password\"\n                ></san-input>\n                <br>\n                <san-input\n                    placeholder=\"邮箱输入框\"\n                    hintDirection=\"left\"\n                    popoverDirection=\"right\"\n                    type=\"email\"\n                ></san-input>\n                <br>\n                <san-input\n                    placeholder=\"手机号输入框\"\n                    hintDirection=\"right\"\n                    popoverDirection=\"left\"\n                    type=\"mobile\"\n                ></san-input>\n            </section>\n        </article>\n        <article class=\"content\">\n            <header class=\"input-head\">\n                <div class=\"title\">\n                    <h2 class=\"name\">复选框</h2>\n                    <div class=\"info\">\n                        <span class=\"type\">控件</span>\n                        <span class=\"ename\">Check Box</span>\n                    </div>\n                </div>\n                <p class=\"info\">\n                    复选框\n                </p>\n            </header>\n            <section>\n                <san-checkbox\n                    class=\"san-checkbox\"\n                    checked=\"false\"\n                >两种可选</san-checkbox>\n                <san-checkbox\n                    class=\"san-checkbox\"\n                    checked=\"false\"\n                    canClickToSwitchToIndeterminate=\"true\"\n                >不确定状态可选</san-checkbox>\n                <br>\n                <san-checkbox\n                    class=\"san-checkbox\"\n                    checked=\"true\"\n                >选中</san-checkbox>\n                <san-checkbox\n                    class=\"san-checkbox\"\n                    checked=\"false\"\n                    indeterminate=\"true\"\n                >不确定</san-checkbox>\n                <br>\n                <san-checkbox\n                    class=\"san-checkbox\"\n                    checked=\"false\"\n                    disabled=\"true\"\n                >禁用一</san-checkbox>\n                <san-checkbox\n                    class=\"san-checkbox\"\n                    checked=\"false\"\n                    indeterminate=\"true\"\n                    disabled=\"true\"\n                >禁用二</san-checkbox>\n                <san-checkbox\n                    class=\"san-checkbox\"\n                    checked=\"true\"\n                    disabled=\"true\"\n                >禁用三</san-checkbox>\n            </section>\n        </article>\n        <footer>©️ CodeDeer</footer>\n    </div>\n</template>\n\n<script>\n    import uiInput from \"./input.san\";\n    import uiCheckbox from \"./checkbox.san\";\n    export default {\n        components: {\n            \"san-input\": uiInput,\n            \"san-checkbox\": uiCheckbox\n        },\n    }\n</script>\n<style>\n    html,\n    body {\n        margin: 0;\n        padding: 0;\n    }\n\n    .content header {\n        padding: 50px;\n        padding-bottom: 10px;\n        background: #5B5B5B;\n    }\n\n    .content header .title {\n        display: flex;\n    }\n\n    .title .info {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: flex-start;\n        padding: 16px 10px;\n        font-size: 14px;\n    }\n\n    .title .ename {\n        color: #848484;\n    }\n\n    .title .info .type {\n        background: #848484;\n        padding: 1px 5px;\n        color: #5B5B5B;\n        border-radius: 3px;\n        font-size: 12px;\n    }\n\n    header .name {\n        margin: 0;\n        font-size: 50px;\n        color: #fff;\n    }\n\n    header .info {\n        color: #848484;\n    }\n    .content section {\n        min-height: 400px;\n    }\n    .ui-input {\n        display: inline-block;\n        margin: 30px;\n        margin-left: 200px;\n    }\n    .san-checkbox {\n        width: 150px;\n        margin: 30px 50px;\n    }\n    footer {\n        text-align: center;\n    }\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/checkbox.san":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/checkbox.san ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ninput[type=\"checkbox\"] {\n    display: none;\n}\nlabel {\n    display: inline-flex;\n    justify-content: flex-start;\n    width: auto;\n    align-items: center;\n    font-size: 16px;\n}\n/* 不确定状态 */\n.indeterminate {\n    display: inline-block;\n    background: url(" + escape(__webpack_require__(/*! ./icon/indeterminate.svg */ "./src/view/icon/indeterminate.svg")) + ");\n    background-size: contain;\n    width: 1.5em;\n    height: 1.5em;\n}\n.icon-checkbox {\n    display: inline-block;\n    background: url(" + escape(__webpack_require__(/*! ./icon/uncheckbox.svg */ "./src/view/icon/uncheckbox.svg")) + ");\n    background-size: contain;\n    width: 1.5em;\n    height: 1.5em;\n}\ninput[type=\"checkbox\"]:checked + .icon-checkbox {\n    background: url(" + escape(__webpack_require__(/*! ./icon/checkbox.svg */ "./src/view/icon/checkbox.svg")) + ");\n    background-size: contain;\n}\n.disabled {\n    opacity: 0.5;\n}\n", "", {"version":3,"sources":["/home/code/Desktop/ife/MVVM学院—SAN框架/task2.5/src/view/checkbox.san?9f472fba"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmFA;IACA,cAAA;CACA;AACA;IACA,qBAAA;IACA,4BAAA;IACA,YAAA;IACA,oBAAA;IACA,gBAAA;CACA;AACA,WAAA;AACA;IACA,sBAAA;IACA,0CAAA;IACA,yBAAA;IACA,aAAA;IACA,cAAA;CACA;AACA;IACA,sBAAA;IACA,0CAAA;IACA,yBAAA;IACA,aAAA;IACA,cAAA;CACA;AACA;IACA,0CAAA;IACA,yBAAA;CACA;AACA;IACA,aAAA;CACA","file":"checkbox.san","sourcesContent":["<template>\n    <!-- WC 为什么有了value属性checked就不能双向绑定了啊！！！ -->\n    <label\n        for=\"id-{{ id }}\">\n        <input \n            type=\"checkbox\" \n            name=\"{{ name }}\"\n            disabled=\"{{ disabled }}\"\n            id=\"id-{{ id }}\"\n            <!-- value=\"{{ value | custom_value }}\" -->\n            on-change=\"handleChange($event)\"\n            checked=\"{= checked =}\"\n        >\n        <i class=\"{{ indeterminate ? 'indeterminate' : 'icon-checkbox'}} {{ disabled ? 'disabled' : ''}}\"></i>\n        <span>\n            <slot></slot>\n        </span>\n    </label>\n</template>\n\n<script>\n    export default {\n        initData: function() {\n            return {\n                name: \"\",\n                disabled: false,\n                id: \"\",\n                checked: true,\n                trueValue: \"\",\n                falseValue: \"\",\n                indeterminate: false,\n                // 不确定状态是否参与点击\n                canClickToSwitchToIndeterminate: false\n            }\n        },\n        // 过滤器 使用自定义的value值（暂时凉了用不了）\n        filters: {\n            custom_value: function(value) {\n                let trueValue = this.data.get(\"trueValue\");\n                let falseValue = this.data.get(\"falseValue\");\n                let isChecked = this.data.get(\"checked\");\n                if(isChecked && trueValue) {\n                    return trueValue;\n                }\n                if(!isChecked && falseValue) {\n                    return falseValue;\n                }\n                return isChecked;\n            }\n        },\n        inited: function() {\n            // 没有传入id时随机绑定一个id\n            if(!this.data.get(\"id\")) {\n                this.data.set(\"id\",Math.floor(Math.random()*10000));\n            }\n        },\n        handleChange: function (event) {\n            // 重新派发change事件\n            this.fire(\"change\", event);\n\n            // 如果不确定状态参与点击，则判断状态（面条代码，这东西写的头疼也不想优化了面条就面条吧）\n            if (this.data.get(\"canClickToSwitchToIndeterminate\")) {\n                let indeterminate = this.data.get(\"indeterminate\");\n                let isChecked = !this.data.get(\"checked\");\n                // 点击前未选中且不是不确定状态，改为不确定状态和未选中状态\n                if (!isChecked && !indeterminate) {\n                    this.data.set(\"indeterminate\", true);\n                    this.data.set(\"checked\", false);\n                    // 如果是未选中状态，点击后改为选中状态\n                }else if (this.data.get(\"indeterminate\")) {\n                    this.data.set(\"indeterminate\", false);\n                    this.data.set(\"checked\", true);\n                    // 如果是选中状态改为未选中\n                }else if(isChecked) {\n                    this.data.set(\"checked\", false);\n                }\n            }\n            \n        }\n    }\n</script>\n\n<style>\n    input[type=\"checkbox\"] {\n        display: none;\n    }\n    label {\n        display: inline-flex;\n        justify-content: flex-start;\n        width: auto;\n        align-items: center;\n        font-size: 16px;\n    }\n    /* 不确定状态 */\n    .indeterminate {\n        display: inline-block;\n        background: url(\"./icon/indeterminate.svg\");\n        background-size: contain;\n        width: 1.5em;\n        height: 1.5em;\n    }\n    .icon-checkbox {\n        display: inline-block;\n        background: url(\"./icon/uncheckbox.svg\");\n        background-size: contain;\n        width: 1.5em;\n        height: 1.5em;\n    }\n    input[type=\"checkbox\"]:checked + .icon-checkbox {\n        background: url(\"./icon/checkbox.svg\");\n        background-size: contain;\n    }\n    .disabled {\n        opacity: 0.5;\n    }\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/input.san":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/input.san ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 输入框样式部分 */\n.ui-input {\n    position: relative;\n}\n.ui-input input {\n    outline: none;\n    border: 1px solid #aaa;\n    color: #555;\n    font-size: 20px;\n    width: 250px;\n    height: 40px;\n    padding: 10px 10px;\n    box-sizing: border-box;\n    transition: all .3s;\n}\n.ui-input input::-webkit-input-placeholder,\n.ui-input input::-moz-placeholder,\n.ui-input input::-moz-input-placeholder,\n.ui-input input::input-placeholder, {\n    color: #aaa;\n}\n.ui-input .normal:hover {\n    border: 1px solid #555;\n}\n.ui-input .normal:focus {\n    border: 1px solid #555;\n    color: #555;\n}\n.ui-input input:disabled {\n    cursor: not-allowed;\n    background: #f7f7f7;\n    color: #aaa;\n}\n.ui-input input:disabled:hover {\n    border: 1px solid #aaa;\n}\n\n.ui-input .error {\n    border: 1px solid #ff7275;\n}\n\n/* 提示框样式部分 */\n\n/* 弹出框的样式部分 */\n.ui-input p {\n    margin: 0;\n    padding: 0;\n    color: #ff7275;\n}\n.ui-input .popover {\n    position: absolute;\n    background: #FFF2F2;\n    text-align: center;\n    line-height: 30px;\n    font-size: 16px;\n    padding: 0 10px;\n    max-width: 200px;\n    min-width: 30px;\n}\n.ui-input .top-popover {\n    bottom: 50px;\n    left: 0;\n}\n.ui-input .right-popover {\n    top: 5px;\n    left: 260px;\n    min-width: 200px;\n}\n.ui-input .bottom-popover {\n    top: 50px;\n    left: 0;\n}\n.ui-input .left-popover {\n    top: 5px;\n    right: 260px;\n    min-width: 200px;\n}\n/* 四个方向的小三角 */\n.ui-input .top-popover::after,\n.ui-input .right-popover::after,\n.ui-input .bottom-popover::after,\n.ui-input .left-popover::after {\n    position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0;\n    border: 10px solid transparent;\n}\n.ui-input .top-popover::after {\n    bottom: -20px;\n    left: 50%;\n    border-top-color: #FFF2F2;\n}\n.ui-input .right-popover::after {\n    left: -20px;\n    top: 15%;\n    border-right-color: #FFF2F2;\n}\n.ui-input .bottom-popover::after {\n    top: -20px;\n    left: 50%;\n    border-bottom-color: #FFF2F2;\n}\n.ui-input .left-popover::after {\n    right: -20px;\n    top: 15%;\n    border-left-color: #FFF2F2;\n}\n/* 提示文字样式部分 */\n.ui-input .hint {\n    position: absolute;\n    text-align: center;\n    line-height: 40px;\n    font-size: 12px;\n    padding: 0 10px;\n    max-width: 200px;\n    min-width: 200px;\n}\n.ui-input .top-hint {\n    bottom: 40px;\n    left: 0;\n}\n.ui-input .right-hint {\n    top: 0;\n    left: 250px;\n    font-size: 16px;\n    text-align: left;\n}\n.ui-input .bottom-hint {\n    top: 40px;\n    left: 0;\n}\n.ui-input .left-hint {\n    top: 0;\n    right: 250px;\n    font-size: 16px;\n    text-align: right;\n}\n", "", {"version":3,"sources":["/home/code/Desktop/ife/MVVM学院—SAN框架/task2.5/src/view/input.san?12c46434"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4LA,aAAA;AACA;IACA,mBAAA;CACA;AACA;IACA,cAAA;IACA,uBAAA;IACA,YAAA;IACA,gBAAA;IACA,aAAA;IACA,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,oBAAA;CACA;AACA;;;;IAIA,YAAA;CACA;AACA;IACA,uBAAA;CACA;AACA;IACA,uBAAA;IACA,YAAA;CACA;AACA;IACA,oBAAA;IACA,oBAAA;IACA,YAAA;CACA;AACA;IACA,uBAAA;CACA;;AAEA;IACA,0BAAA;CACA;;AAEA,aAAA;;AAEA,cAAA;AACA;IACA,UAAA;IACA,WAAA;IACA,eAAA;CACA;AACA;IACA,mBAAA;IACA,oBAAA;IACA,mBAAA;IACA,kBAAA;IACA,gBAAA;IACA,gBAAA;IACA,iBAAA;IACA,gBAAA;CACA;AACA;IACA,aAAA;IACA,QAAA;CACA;AACA;IACA,SAAA;IACA,YAAA;IACA,iBAAA;CACA;AACA;IACA,UAAA;IACA,QAAA;CACA;AACA;IACA,SAAA;IACA,aAAA;IACA,iBAAA;CACA;AACA,cAAA;AACA;;;;IAIA,mBAAA;IACA,YAAA;IACA,SAAA;IACA,UAAA;IACA,+BAAA;CACA;AACA;IACA,cAAA;IACA,UAAA;IACA,0BAAA;CACA;AACA;IACA,YAAA;IACA,SAAA;IACA,4BAAA;CACA;AACA;IACA,WAAA;IACA,UAAA;IACA,6BAAA;CACA;AACA;IACA,aAAA;IACA,SAAA;IACA,2BAAA;CACA;AACA,cAAA;AACA;IACA,mBAAA;IACA,mBAAA;IACA,kBAAA;IACA,gBAAA;IACA,gBAAA;IACA,iBAAA;IACA,iBAAA;CACA;AACA;IACA,aAAA;IACA,QAAA;CACA;AACA;IACA,OAAA;IACA,YAAA;IACA,gBAAA;IACA,iBAAA;CACA;AACA;IACA,UAAA;IACA,QAAA;CACA;AACA;IACA,OAAA;IACA,aAAA;IACA,gBAAA;IACA,kBAAA;CACA","file":"input.san","sourcesContent":["<template>\n    <div class=\"ui-input\">\n        <input \n            class=\"{{ isError ? 'error' : 'normal' }}\"\n            type=\"{{ inputType }}\"\n            value=\"{= value =}\"\n            placeholder=\"{{ placeholder }}\"\n            disabled=\"{{ disabled }}\"\n            readonly=\"{{ readonly }}\"\n            on-input=\"handleInput($event)\"\n            on-focus=\"handleFocus($event)\"\n            on-blur=\"handleBlur($event)\"\n        >\n        <p s-if=\"{{isError  && isFocus }}\" class=\"popover {{ popoverDirection }}-popover\">{{ popoverText | limit}}</p>\n        <p s-if=\"{{isError}}\" class=\"hint {{ hintDirection }}-hint\">{{ hintText | limit}}</p>\n    </div>\n</template>\n\n<script>\n\nexport default {\n    initData: function() {\n        return {\n            value: \"\",\n            placeholder: \"\",\n            disabled: false,\n            readonly: false,\n            isError: false,\n            isFocus: false,\n            popoverText: \"\",\n            hintText: \"\",\n            hintDirection: \"right\",\n            popoverDirection: \"bottom\",\n            type: \"\",\n            inputType:\"text\"\n        }\n    },\n    // 过滤器\n    filters: {\n        // 过滤过长的提示字符串\n        limit: function(value) {\n            if(value.length>30) {\n                value = value.substr(0,30) + \"...\";\n            }\n            return value;\n        }\n    },\n    // 用于组价加载后的初始化，将错误的值改为默认值\n    inited: function() {\n        let TRBL = [\"top\",\"right\",\"left\",\"bottom\"];\n        let hint = this.data.get(\"hintDirection\").toLocaleLowerCase();\n        let popover = this.data.get(\"popoverDirection\").toLocaleLowerCase()\n        if(TRBL.indexOf(hint) === -1) {\n            hint = \"right\";\n        }\n        if(TRBL.indexOf(popover) === -1) {\n            popover = \"top\";\n        }\n        this.data.set(\"hintDirection\",hint);\n        this.data.set(\"popoverDirection\",popover);\n\n        // 校验类型,未知类型设为空不校验\n        let TYPE = [\"name\", \"password\", \"email\", \"mobile\"];\n        let type = this.data.get(\"type\");\n        if(TYPE.indexOf(type) === -1) {\n            this.data.set(\"type\",\"\");\n        }else {\n            // 类型存在,且没有提供默认信息时使用该类型的默认提示信息\n            let popoverText = this.data.get(\"popoverText\");\n            let hintText = this.data.get(\"hintText\");\n            if(popoverText.length === 0) {\n                this.data.set(\"popoverText\",this.check.HINT[type].info);\n            }\n            if(hintText.length === 0) {\n                this.data.set(\"hintText\",this.check.HINT[type].error);\n            }\n            if(type === 'password') {\n                this.data.set(\"inputType\",\"password\");\n            }\n        }\n    },\n    // 清除所有节点文本前后空白字符\n    trimWhitespace: \"all\",\n    handleInput: function(event) {\n        this.fire(\"input\",event);\n    },\n    handleFocus: function(event) {\n\n        this.data.set(\"isFocus\",true);\n        // 重新派发focus事件给父元素\n        this.fire(\"focus\",event);\n    },\n    handleBlur: function(event) {\n        // 重新派发blur事件给父元素\n        this.fire(\"blur\",event);\n        \n        // 只读属性不校验\n        if(this.data.get(\"readonly\")) {\n            return ;\n        }\n        // 失去焦点\n        this.data.set(\"isFocus\",false);\n        // 去掉输入两端的空格\n        let value = this.trim(this.data.get(\"value\"));\n        let type = this.data.get(\"type\");\n        // 长度不为空才有校验的必要\n        if(type && value.length !== 0 && this.check[type](value)) {\n            this.data.set(\"isError\",false);\n            this.data.set(\"value\",value)\n        } else if(type && value.length !== 0) {\n            // 长度为空则说明校验失败,数据有错误\n            this.data.set(\"isError\",true);\n        }else {\n            this.data.set(\"isError\",false);\n        }\n    },\n    // 去除前后空白字符\n    trim: function (value) {\n        return value.replace(/(^\\s*)|(\\s*$)/g,\"\");\n    },\n    // 各种校验\n    check: {\n        // 计算长度(中文算两个字节)\n        getlength: function (str) {\n            var l = str.length;\n            var blen = 0;\n            for (let i = 0; i < l; i++) {\n                if ((str.charCodeAt(i) & 0xff00) != 0) {\n                    blen++;\n                }\n                blen++;\n            }\n            return blen;\n        },\n        // 校验长度\n        checkLength: function (MAX, MIN, str) {\n            if (this.getlength(str) > MAX || this.getlength(str) < MIN) {\n                return false;\n            }\n            return true;\n        },\n        // 用户名长度\n        name: function (str) {\n            // 过长或过短\n            return this.checkLength(16, 4, str);\n        },\n        // 密码\n        password: function (str) {\n            let regNumber = /\\d+/;\n            let regString = /[a-zA-Z]+/;\n            return this.checkLength(16, 8, str) && regNumber.test(str) && regString.test(str);\n        },\n        // 确认密码是否重复还没有想到比较好的实现\n\n        // 邮箱\n        email: function (mail) {\n            let regEmail = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/g;\n            return regEmail.test(mail);\n        },\n        // 手机号\n        mobile: function (tel) {\n            let regMobile = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9])|(17[\\d]))\\d{8}$/g;\n\n            return regMobile.test(tel);\n        },\n        // 默认提示信息\n        HINT: {\n            name: {\n                info: \"名称在4-16字符以内\",\n                error: \"名称不合法\"\n            },\n            password: {\n                info: \"密码在8-16位之间,包含英文和数字\",\n                error: \"密码不合法\"\n            },\n            email: {\n                info: \"合法邮箱格式的\",\n                error: \"邮箱格式不合法\"\n            },\n            mobile: {\n                info: \"请输入11位手机号\",\n                error: \"手机号格式不合法\"\n            }\n        }\n    }\n}\n</script>\n<style>\n    /* 输入框样式部分 */\n    .ui-input {\n        position: relative;\n    }\n    .ui-input input {\n        outline: none;\n        border: 1px solid #aaa;\n        color: #555;\n        font-size: 20px;\n        width: 250px;\n        height: 40px;\n        padding: 10px 10px;\n        box-sizing: border-box;\n        transition: all .3s;\n    }\n    .ui-input input::-webkit-input-placeholder,\n    .ui-input input::-moz-placeholder,\n    .ui-input input::-moz-input-placeholder,\n    .ui-input input::input-placeholder, {\n        color: #aaa;\n    }\n    .ui-input .normal:hover {\n        border: 1px solid #555;\n    }\n    .ui-input .normal:focus {\n        border: 1px solid #555;\n        color: #555;\n    }\n    .ui-input input:disabled {\n        cursor: not-allowed;\n        background: #f7f7f7;\n        color: #aaa;\n    }\n    .ui-input input:disabled:hover {\n        border: 1px solid #aaa;\n    }\n\n    .ui-input .error {\n        border: 1px solid #ff7275;\n    }\n\n    /* 提示框样式部分 */\n\n    /* 弹出框的样式部分 */\n    .ui-input p {\n        margin: 0;\n        padding: 0;\n        color: #ff7275;\n    }\n    .ui-input .popover {\n        position: absolute;\n        background: #FFF2F2;\n        text-align: center;\n        line-height: 30px;\n        font-size: 16px;\n        padding: 0 10px;\n        max-width: 200px;\n        min-width: 30px;\n    }\n    .ui-input .top-popover {\n        bottom: 50px;\n        left: 0;\n    }\n    .ui-input .right-popover {\n        top: 5px;\n        left: 260px;\n        min-width: 200px;\n    }\n    .ui-input .bottom-popover {\n        top: 50px;\n        left: 0;\n    }\n    .ui-input .left-popover {\n        top: 5px;\n        right: 260px;\n        min-width: 200px;\n    }\n    /* 四个方向的小三角 */\n    .ui-input .top-popover::after,\n    .ui-input .right-popover::after,\n    .ui-input .bottom-popover::after,\n    .ui-input .left-popover::after {\n        position: absolute;\n        content: \"\";\n        width: 0;\n        height: 0;\n        border: 10px solid transparent;\n    }\n    .ui-input .top-popover::after {\n        bottom: -20px;\n        left: 50%;\n        border-top-color: #FFF2F2;\n    }\n    .ui-input .right-popover::after {\n        left: -20px;\n        top: 15%;\n        border-right-color: #FFF2F2;\n    }\n    .ui-input .bottom-popover::after {\n        top: -20px;\n        left: 50%;\n        border-bottom-color: #FFF2F2;\n    }\n    .ui-input .left-popover::after {\n        right: -20px;\n        top: 15%;\n        border-left-color: #FFF2F2;\n    }\n    /* 提示文字样式部分 */\n    .ui-input .hint {\n        position: absolute;\n        text-align: center;\n        line-height: 40px;\n        font-size: 12px;\n        padding: 0 10px;\n        max-width: 200px;\n        min-width: 200px;\n    }\n    .ui-input .top-hint {\n        bottom: 40px;\n        left: 0;\n    }\n    .ui-input .right-hint {\n        top: 0;\n        left: 250px;\n        font-size: 16px;\n        text-align: left;\n    }\n    .ui-input .bottom-hint {\n        top: 40px;\n        left: 0;\n    }\n    .ui-input .left-hint {\n        top: 0;\n        right: 250px;\n        font-size: 16px;\n        text-align: right;\n    }\n</style>"],"sourceRoot":""}]);

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

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/App.san":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/html-loader?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/App.san ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <article class=\"content\">\n        <header class=\"input-head\">\n            <div class=\"title\">\n                <h2 class=\"name\">输入框</h2>\n                <div class=\"info\">\n                    <span class=\"type\">控件</span>\n                    <span class=\"ename\">input</span>\n                </div>\n            </div>\n            <p class=\"info\">\n                各种输入框\n            </p>\n        </header>\n        <section>\n            \n            <san-input\n                placeholder=\"用户名输入框\"\n                hintDirection=\"bottom\"\n                popoverDirection=\"top\"\n                type=\"name\"\n            ></san-input>\n            <br>\n            <san-input\n                placeholder=\"密码输入框\"\n                hintDirection=\"top\"\n                popoverDirection=\"bottom\"\n                type=\"password\"\n            ></san-input>\n            <br>\n            <san-input\n                placeholder=\"邮箱输入框\"\n                hintDirection=\"left\"\n                popoverDirection=\"right\"\n                type=\"email\"\n            ></san-input>\n            <br>\n            <san-input\n                placeholder=\"手机号输入框\"\n                hintDirection=\"right\"\n                popoverDirection=\"left\"\n                type=\"mobile\"\n            ></san-input>\n        </section>\n    </article>\n    <article class=\"content\">\n        <header class=\"input-head\">\n            <div class=\"title\">\n                <h2 class=\"name\">复选框</h2>\n                <div class=\"info\">\n                    <span class=\"type\">控件</span>\n                    <span class=\"ename\">Check Box</span>\n                </div>\n            </div>\n            <p class=\"info\">\n                复选框\n            </p>\n        </header>\n        <section>\n            <san-checkbox\n                class=\"san-checkbox\"\n                checked=\"false\"\n            >两种可选</san-checkbox>\n            <san-checkbox\n                class=\"san-checkbox\"\n                checked=\"false\"\n                canClickToSwitchToIndeterminate=\"true\"\n            >不确定状态可选</san-checkbox>\n            <br>\n            <san-checkbox\n                class=\"san-checkbox\"\n                checked=\"true\"\n            >选中</san-checkbox>\n            <san-checkbox\n                class=\"san-checkbox\"\n                checked=\"false\"\n                indeterminate=\"true\"\n            >不确定</san-checkbox>\n            <br>\n            <san-checkbox\n                class=\"san-checkbox\"\n                checked=\"false\"\n                disabled=\"true\"\n            >禁用一</san-checkbox>\n            <san-checkbox\n                class=\"san-checkbox\"\n                checked=\"false\"\n                indeterminate=\"true\"\n                disabled=\"true\"\n            >禁用二</san-checkbox>\n            <san-checkbox\n                class=\"san-checkbox\"\n                checked=\"true\"\n                disabled=\"true\"\n            >禁用三</san-checkbox>\n        </section>\n    </article>\n    <footer>©️ CodeDeer</footer>\n</div>\n";

/***/ }),

/***/ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/checkbox.san":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/html-loader?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/checkbox.san ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- WC 为什么有了value属性checked就不能双向绑定了啊！！！ -->\n<label\n    for=\"id-{{ id }}\">\n    <input \n        type=\"checkbox\" \n        name=\"{{ name }}\"\n        disabled=\"{{ disabled }}\"\n        id=\"id-{{ id }}\"\n        <!-- value=\"{{ value | custom_value }}\" -->\n        on-change=\"handleChange($event)\"\n        checked=\"{= checked =}\"\n    >\n    <i class=\"{{ indeterminate ? 'indeterminate' : 'icon-checkbox'}} {{ disabled ? 'disabled' : ''}}\"></i>\n    <span>\n        <slot></slot>\n    </span>\n</label>\n";

/***/ }),

/***/ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/input.san":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/html-loader?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/input.san ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ui-input\">\n    <input \n        class=\"{{ isError ? 'error' : 'normal' }}\"\n        type=\"{{ inputType }}\"\n        value=\"{= value =}\"\n        placeholder=\"{{ placeholder }}\"\n        disabled=\"{{ disabled }}\"\n        readonly=\"{{ readonly }}\"\n        on-input=\"handleInput($event)\"\n        on-focus=\"handleFocus($event)\"\n        on-blur=\"handleBlur($event)\"\n    >\n    <p s-if=\"{{isError  && isFocus }}\" class=\"popover {{ popoverDirection }}-popover\">{{ popoverText | limit}}</p>\n    <p s-if=\"{{isError}}\" class=\"hint {{ hintDirection }}-hint\">{{ hintText | limit}}</p>\n</div>\n";

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
/* harmony import */ var _input_san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.san */ "./src/view/input.san");
/* harmony import */ var _input_san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_input_san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkbox_san__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.san */ "./src/view/checkbox.san");
/* harmony import */ var _checkbox_san__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_checkbox_san__WEBPACK_IMPORTED_MODULE_1__);
// <template>
//     <div>
//         <article class="content">
//             <header class="input-head">
//                 <div class="title">
//                     <h2 class="name">输入框</h2>
//                     <div class="info">
//                         <span class="type">控件</span>
//                         <span class="ename">input</span>
//                     </div>
//                 </div>
//                 <p class="info">
//                     各种输入框
//                 </p>
//             </header>
//             <section>
//
//                 <san-input
//                     placeholder="用户名输入框"
//                     hintDirection="bottom"
//                     popoverDirection="top"
//                     type="name"
//                 ></san-input>
//                 <br>
//                 <san-input
//                     placeholder="密码输入框"
//                     hintDirection="top"
//                     popoverDirection="bottom"
//                     type="password"
//                 ></san-input>
//                 <br>
//                 <san-input
//                     placeholder="邮箱输入框"
//                     hintDirection="left"
//                     popoverDirection="right"
//                     type="email"
//                 ></san-input>
//                 <br>
//                 <san-input
//                     placeholder="手机号输入框"
//                     hintDirection="right"
//                     popoverDirection="left"
//                     type="mobile"
//                 ></san-input>
//             </section>
//         </article>
//         <article class="content">
//             <header class="input-head">
//                 <div class="title">
//                     <h2 class="name">复选框</h2>
//                     <div class="info">
//                         <span class="type">控件</span>
//                         <span class="ename">Check Box</span>
//                     </div>
//                 </div>
//                 <p class="info">
//                     复选框
//                 </p>
//             </header>
//             <section>
//                 <san-checkbox
//                     class="san-checkbox"
//                     checked="false"
//                 >两种可选</san-checkbox>
//                 <san-checkbox
//                     class="san-checkbox"
//                     checked="false"
//                     canClickToSwitchToIndeterminate="true"
//                 >不确定状态可选</san-checkbox>
//                 <br>
//                 <san-checkbox
//                     class="san-checkbox"
//                     checked="true"
//                 >选中</san-checkbox>
//                 <san-checkbox
//                     class="san-checkbox"
//                     checked="false"
//                     indeterminate="true"
//                 >不确定</san-checkbox>
//                 <br>
//                 <san-checkbox
//                     class="san-checkbox"
//                     checked="false"
//                     disabled="true"
//                 >禁用一</san-checkbox>
//                 <san-checkbox
//                     class="san-checkbox"
//                     checked="false"
//                     indeterminate="true"
//                     disabled="true"
//                 >禁用二</san-checkbox>
//                 <san-checkbox
//                     class="san-checkbox"
//                     checked="true"
//                     disabled="true"
//                 >禁用三</san-checkbox>
//             </section>
//         </article>
//         <footer>©️ CodeDeer</footer>
//     </div>
// </template>
//
// <script>


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        "san-input": _input_san__WEBPACK_IMPORTED_MODULE_0___default.a,
        "san-checkbox": _checkbox_san__WEBPACK_IMPORTED_MODULE_1___default.a
    },
});
// </script>
// <style>
//     html,
//     body {
//         margin: 0;
//         padding: 0;
//     }
//
//     .content header {
//         padding: 50px;
//         padding-bottom: 10px;
//         background: #5B5B5B;
//     }
//
//     .content header .title {
//         display: flex;
//     }
//
//     .title .info {
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         align-items: flex-start;
//         padding: 16px 10px;
//         font-size: 14px;
//     }
//
//     .title .ename {
//         color: #848484;
//     }
//
//     .title .info .type {
//         background: #848484;
//         padding: 1px 5px;
//         color: #5B5B5B;
//         border-radius: 3px;
//         font-size: 12px;
//     }
//
//     header .name {
//         margin: 0;
//         font-size: 50px;
//         color: #fff;
//     }
//
//     header .info {
//         color: #848484;
//     }
//     .content section {
//         min-height: 400px;
//     }
//     .ui-input {
//         display: inline-block;
//         margin: 30px;
//         margin-left: 200px;
//     }
//     .san-checkbox {
//         width: 150px;
//         margin: 30px 50px;
//     }
//     footer {
//         text-align: center;
//     }
// </style>
/* generated by san-loader */


/***/ }),

/***/ "./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/checkbox.san":
/*!*********************************************************************************************!*\
  !*** ./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/checkbox.san ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// <template>
//     <!-- WC 为什么有了value属性checked就不能双向绑定了啊！！！ -->
//     <label
//         for="id-{{ id }}">
//         <input 
//             type="checkbox" 
//             name="{{ name }}"
//             disabled="{{ disabled }}"
//             id="id-{{ id }}"
//             <!-- value="{{ value | custom_value }}" -->
//             on-change="handleChange($event)"
//             checked="{= checked =}"
//         >
//         <i class="{{ indeterminate ? 'indeterminate' : 'icon-checkbox'}} {{ disabled ? 'disabled' : ''}}"></i>
//         <span>
//             <slot></slot>
//         </span>
//     </label>
// </template>
//
// <script>
/* harmony default export */ __webpack_exports__["default"] = ({
    initData: function() {
        return {
            name: "",
            disabled: false,
            id: "",
            checked: true,
            trueValue: "",
            falseValue: "",
            indeterminate: false,
            // 不确定状态是否参与点击
            canClickToSwitchToIndeterminate: false
        }
    },
    // 过滤器 使用自定义的value值（暂时凉了用不了）
    filters: {
        custom_value: function(value) {
            let trueValue = this.data.get("trueValue");
            let falseValue = this.data.get("falseValue");
            let isChecked = this.data.get("checked");
            if(isChecked && trueValue) {
                return trueValue;
            }
            if(!isChecked && falseValue) {
                return falseValue;
            }
            return isChecked;
        }
    },
    inited: function() {
        // 没有传入id时随机绑定一个id
        if(!this.data.get("id")) {
            this.data.set("id",Math.floor(Math.random()*10000));
        }
    },
    handleChange: function (event) {
        // 重新派发change事件
        this.fire("change", event);

        // 如果不确定状态参与点击，则判断状态（面条代码，这东西写的头疼也不想优化了面条就面条吧）
        if (this.data.get("canClickToSwitchToIndeterminate")) {
            let indeterminate = this.data.get("indeterminate");
            let isChecked = !this.data.get("checked");
            // 点击前未选中且不是不确定状态，改为不确定状态和未选中状态
            if (!isChecked && !indeterminate) {
                this.data.set("indeterminate", true);
                this.data.set("checked", false);
                // 如果是未选中状态，点击后改为选中状态
            }else if (this.data.get("indeterminate")) {
                this.data.set("indeterminate", false);
                this.data.set("checked", true);
                // 如果是选中状态改为未选中
            }else if(isChecked) {
                this.data.set("checked", false);
            }
        }
        
    }
});
// </script>
//
// <style>
//     input[type="checkbox"] {
//         display: none;
//     }
//     label {
//         display: inline-flex;
//         justify-content: flex-start;
//         width: auto;
//         align-items: center;
//         font-size: 16px;
//     }
//     /* 不确定状态 */
//     .indeterminate {
//         display: inline-block;
//         background: url("./icon/indeterminate.svg");
//         background-size: contain;
//         width: 1.5em;
//         height: 1.5em;
//     }
//     .icon-checkbox {
//         display: inline-block;
//         background: url("./icon/uncheckbox.svg");
//         background-size: contain;
//         width: 1.5em;
//         height: 1.5em;
//     }
//     input[type="checkbox"]:checked + .icon-checkbox {
//         background: url("./icon/checkbox.svg");
//         background-size: contain;
//     }
//     .disabled {
//         opacity: 0.5;
//     }
// </style>
/* generated by san-loader */


/***/ }),

/***/ "./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/input.san":
/*!******************************************************************************************!*\
  !*** ./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/input.san ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// <template>
//     <div class="ui-input">
//         <input 
//             class="{{ isError ? 'error' : 'normal' }}"
//             type="{{ inputType }}"
//             value="{= value =}"
//             placeholder="{{ placeholder }}"
//             disabled="{{ disabled }}"
//             readonly="{{ readonly }}"
//             on-input="handleInput($event)"
//             on-focus="handleFocus($event)"
//             on-blur="handleBlur($event)"
//         >
//         <p s-if="{{isError  && isFocus }}" class="popover {{ popoverDirection }}-popover">{{ popoverText | limit}}</p>
//         <p s-if="{{isError}}" class="hint {{ hintDirection }}-hint">{{ hintText | limit}}</p>
//     </div>
// </template>
//
// <script>

/* harmony default export */ __webpack_exports__["default"] = ({
    initData: function() {
        return {
            value: "",
            placeholder: "",
            disabled: false,
            readonly: false,
            isError: false,
            isFocus: false,
            popoverText: "",
            hintText: "",
            hintDirection: "right",
            popoverDirection: "bottom",
            type: "",
            inputType:"text"
        }
    },
    // 过滤器
    filters: {
        // 过滤过长的提示字符串
        limit: function(value) {
            if(value.length>30) {
                value = value.substr(0,30) + "...";
            }
            return value;
        }
    },
    // 用于组价加载后的初始化，将错误的值改为默认值
    inited: function() {
        let TRBL = ["top","right","left","bottom"];
        let hint = this.data.get("hintDirection").toLocaleLowerCase();
        let popover = this.data.get("popoverDirection").toLocaleLowerCase()
        if(TRBL.indexOf(hint) === -1) {
            hint = "right";
        }
        if(TRBL.indexOf(popover) === -1) {
            popover = "top";
        }
        this.data.set("hintDirection",hint);
        this.data.set("popoverDirection",popover);

        // 校验类型,未知类型设为空不校验
        let TYPE = ["name", "password", "email", "mobile"];
        let type = this.data.get("type");
        if(TYPE.indexOf(type) === -1) {
            this.data.set("type","");
        }else {
            // 类型存在,且没有提供默认信息时使用该类型的默认提示信息
            let popoverText = this.data.get("popoverText");
            let hintText = this.data.get("hintText");
            if(popoverText.length === 0) {
                this.data.set("popoverText",this.check.HINT[type].info);
            }
            if(hintText.length === 0) {
                this.data.set("hintText",this.check.HINT[type].error);
            }
            if(type === 'password') {
                this.data.set("inputType","password");
            }
        }
    },
    // 清除所有节点文本前后空白字符
    trimWhitespace: "all",
    handleInput: function(event) {
        this.fire("input",event);
    },
    handleFocus: function(event) {

        this.data.set("isFocus",true);
        // 重新派发focus事件给父元素
        this.fire("focus",event);
    },
    handleBlur: function(event) {
        // 重新派发blur事件给父元素
        this.fire("blur",event);
        
        // 只读属性不校验
        if(this.data.get("readonly")) {
            return ;
        }
        // 失去焦点
        this.data.set("isFocus",false);
        // 去掉输入两端的空格
        let value = this.trim(this.data.get("value"));
        let type = this.data.get("type");
        // 长度不为空才有校验的必要
        if(type && value.length !== 0 && this.check[type](value)) {
            this.data.set("isError",false);
            this.data.set("value",value)
        } else if(type && value.length !== 0) {
            // 长度为空则说明校验失败,数据有错误
            this.data.set("isError",true);
        }else {
            this.data.set("isError",false);
        }
    },
    // 去除前后空白字符
    trim: function (value) {
        return value.replace(/(^\s*)|(\s*$)/g,"");
    },
    // 各种校验
    check: {
        // 计算长度(中文算两个字节)
        getlength: function (str) {
            var l = str.length;
            var blen = 0;
            for (let i = 0; i < l; i++) {
                if ((str.charCodeAt(i) & 0xff00) != 0) {
                    blen++;
                }
                blen++;
            }
            return blen;
        },
        // 校验长度
        checkLength: function (MAX, MIN, str) {
            if (this.getlength(str) > MAX || this.getlength(str) < MIN) {
                return false;
            }
            return true;
        },
        // 用户名长度
        name: function (str) {
            // 过长或过短
            return this.checkLength(16, 4, str);
        },
        // 密码
        password: function (str) {
            let regNumber = /\d+/;
            let regString = /[a-zA-Z]+/;
            return this.checkLength(16, 8, str) && regNumber.test(str) && regString.test(str);
        },
        // 确认密码是否重复还没有想到比较好的实现

        // 邮箱
        email: function (mail) {
            let regEmail = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/g;
            return regEmail.test(mail);
        },
        // 手机号
        mobile: function (tel) {
            let regMobile = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9])|(17[\d]))\d{8}$/g;

            return regMobile.test(tel);
        },
        // 默认提示信息
        HINT: {
            name: {
                info: "名称在4-16字符以内",
                error: "名称不合法"
            },
            password: {
                info: "密码在8-16位之间,包含英文和数字",
                error: "密码不合法"
            },
            email: {
                info: "合法邮箱格式的",
                error: "邮箱格式不合法"
            },
            mobile: {
                info: "请输入11位手机号",
                error: "手机号格式不合法"
            }
        }
    }
});
// </script>
// <style>
//     /* 输入框样式部分 */
//     .ui-input {
//         position: relative;
//     }
//     .ui-input input {
//         outline: none;
//         border: 1px solid #aaa;
//         color: #555;
//         font-size: 20px;
//         width: 250px;
//         height: 40px;
//         padding: 10px 10px;
//         box-sizing: border-box;
//         transition: all .3s;
//     }
//     .ui-input input::-webkit-input-placeholder,
//     .ui-input input::-moz-placeholder,
//     .ui-input input::-moz-input-placeholder,
//     .ui-input input::input-placeholder, {
//         color: #aaa;
//     }
//     .ui-input .normal:hover {
//         border: 1px solid #555;
//     }
//     .ui-input .normal:focus {
//         border: 1px solid #555;
//         color: #555;
//     }
//     .ui-input input:disabled {
//         cursor: not-allowed;
//         background: #f7f7f7;
//         color: #aaa;
//     }
//     .ui-input input:disabled:hover {
//         border: 1px solid #aaa;
//     }
//
//     .ui-input .error {
//         border: 1px solid #ff7275;
//     }
//
//     /* 提示框样式部分 */
//
//     /* 弹出框的样式部分 */
//     .ui-input p {
//         margin: 0;
//         padding: 0;
//         color: #ff7275;
//     }
//     .ui-input .popover {
//         position: absolute;
//         background: #FFF2F2;
//         text-align: center;
//         line-height: 30px;
//         font-size: 16px;
//         padding: 0 10px;
//         max-width: 200px;
//         min-width: 30px;
//     }
//     .ui-input .top-popover {
//         bottom: 50px;
//         left: 0;
//     }
//     .ui-input .right-popover {
//         top: 5px;
//         left: 260px;
//         min-width: 200px;
//     }
//     .ui-input .bottom-popover {
//         top: 50px;
//         left: 0;
//     }
//     .ui-input .left-popover {
//         top: 5px;
//         right: 260px;
//         min-width: 200px;
//     }
//     /* 四个方向的小三角 */
//     .ui-input .top-popover::after,
//     .ui-input .right-popover::after,
//     .ui-input .bottom-popover::after,
//     .ui-input .left-popover::after {
//         position: absolute;
//         content: "";
//         width: 0;
//         height: 0;
//         border: 10px solid transparent;
//     }
//     .ui-input .top-popover::after {
//         bottom: -20px;
//         left: 50%;
//         border-top-color: #FFF2F2;
//     }
//     .ui-input .right-popover::after {
//         left: -20px;
//         top: 15%;
//         border-right-color: #FFF2F2;
//     }
//     .ui-input .bottom-popover::after {
//         top: -20px;
//         left: 50%;
//         border-bottom-color: #FFF2F2;
//     }
//     .ui-input .left-popover::after {
//         right: -20px;
//         top: 15%;
//         border-left-color: #FFF2F2;
//     }
//     /* 提示文字样式部分 */
//     .ui-input .hint {
//         position: absolute;
//         text-align: center;
//         line-height: 40px;
//         font-size: 12px;
//         padding: 0 10px;
//         max-width: 200px;
//         min-width: 200px;
//     }
//     .ui-input .top-hint {
//         bottom: 40px;
//         left: 0;
//     }
//     .ui-input .right-hint {
//         top: 0;
//         left: 250px;
//         font-size: 16px;
//         text-align: left;
//     }
//     .ui-input .bottom-hint {
//         top: 40px;
//         left: 0;
//     }
//     .ui-input .left-hint {
//         top: 0;
//         right: 250px;
//         font-size: 16px;
//         text-align: right;
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/checkbox.san":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/checkbox.san ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/san-loader/lib/style-rewriter.js!../../node_modules/san-loader/lib/selector.js?type=style&index=0!./checkbox.san */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/checkbox.san");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/input.san":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/input.san ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/san-loader/lib/style-rewriter.js!../../node_modules/san-loader/lib/selector.js?type=style&index=0!./input.san */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/input.san");

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
/* harmony import */ var _view_input_san__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/input.san */ "./src/view/input.san");
/* harmony import */ var _view_input_san__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_view_input_san__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _view_App_san__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/App.san */ "./src/view/App.san");
/* harmony import */ var _view_App_san__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_view_App_san__WEBPACK_IMPORTED_MODULE_3__);






san_router__WEBPACK_IMPORTED_MODULE_1__["router"].add({ rule: '/', Component: _view_App_san__WEBPACK_IMPORTED_MODULE_3___default.a, target: '#app' });
san_router__WEBPACK_IMPORTED_MODULE_1__["router"].start();
console.log('Server starts.');

// if (module.hot) {
//     module.hot.accept()
// }

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

/***/ "./src/view/checkbox.san":
/*!*******************************!*\
  !*** ./src/view/checkbox.san ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __san_script__, __san_template__
var __san_styles__ = {}
__webpack_require__(/*! !style-loader!css-loader?sourceMap!../../node_modules/san-loader/lib/style-rewriter.js!../../node_modules/san-loader/lib/selector.js?type=style&index=0!./checkbox.san */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/checkbox.san")
__san_script__ = __webpack_require__(/*! !!../../node_modules/san-loader/lib/selector.js?type=script&index=0!./checkbox.san */ "./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/checkbox.san")
if (__san_script__ &&
    __san_script__.__esModule &&
    Object.keys(__san_script__).length > 1) {
  console.warn("[san-loader] src/view/checkbox.san: named exports in *.san files are ignored.")}
__san_template__ = __webpack_require__(/*! !html-loader?minimize=false!../../node_modules/san-loader/lib/selector.js?type=template&index=0!./checkbox.san */ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/checkbox.san")
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

/***/ "./src/view/icon/checkbox.svg":
/*!************************************!*\
  !*** ./src/view/icon/checkbox.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MjIyODI3ODc4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg0MiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04NjQgMTI4SDE2MGMtMTcuNiAwLTMyIDE0LjQtMzIgMzJ2NzA0YzAgMTcuNiAxNC40IDMyIDMyIDMyaDcwNGMxNy42IDAgMzItMTQuNCAzMi0zMlYxNjBjMC0xNy42LTE0LjQtMzItMzItMzJ6TTQyOCA3MTguNGwtNDUuNiA0NS42LTQ1LjYtNDUuNi0xMTYtMTE3LjYgNDUuNi00NS42TDM4My4yIDY3MmwzNjcuMi0zNjcuMiA0NS42IDQ1LjYtMzY4IDM2OHoiIHAtaWQ9Ijg0MyI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "./src/view/icon/indeterminate.svg":
/*!*****************************************!*\
  !*** ./src/view/icon/indeterminate.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MjIyODE4MzQ2IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjcyNCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik04NjQgMTI4SDE2MGMtMTcuNiAwLTMyIDE0LjQtMzIgMzJ2NzA0YzAgMTcuNiAxNC40IDMyIDMyIDMyaDcwNGMxNy42IDAgMzItMTQuNCAzMi0zMlYxNjBjMC0xNy42LTE0LjQtMzItMzItMzJ6TTc2OCA1NDRIMjU2di02NGg1MTJ2NjR6IiBwLWlkPSI3MjUiPjwvcGF0aD48L3N2Zz4="

/***/ }),

/***/ "./src/view/icon/uncheckbox.svg":
/*!**************************************!*\
  !*** ./src/view/icon/uncheckbox.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MjIyODYzMDI5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyODMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODMyIDE5MnY2NDBIMTkyVjE5Mmg2NDBtMzItNjRIMTYwYy0xNy42IDAtMzIgMTQuNC0zMiAzMnY3MDRjMCAxNy42IDE0LjQgMzIgMzIgMzJoNzA0YzE3LjYgMCAzMi0xNC40IDMyLTMyVjE2MGMwLTE3LjYtMTQuNC0zMi0zMi0zMnoiIHAtaWQ9IjEyODQiPjwvcGF0aD48L3N2Zz4="

/***/ }),

/***/ "./src/view/input.san":
/*!****************************!*\
  !*** ./src/view/input.san ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __san_script__, __san_template__
var __san_styles__ = {}
__webpack_require__(/*! !style-loader!css-loader?sourceMap!../../node_modules/san-loader/lib/style-rewriter.js!../../node_modules/san-loader/lib/selector.js?type=style&index=0!./input.san */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/san-loader/lib/style-rewriter.js!./node_modules/san-loader/lib/selector.js?type=style&index=0!./src/view/input.san")
__san_script__ = __webpack_require__(/*! !!../../node_modules/san-loader/lib/selector.js?type=script&index=0!./input.san */ "./node_modules/san-loader/lib/selector.js?type=script&index=0!./src/view/input.san")
if (__san_script__ &&
    __san_script__.__esModule &&
    Object.keys(__san_script__).length > 1) {
  console.warn("[san-loader] src/view/input.san: named exports in *.san files are ignored.")}
__san_template__ = __webpack_require__(/*! !html-loader?minimize=false!../../node_modules/san-loader/lib/selector.js?type=template&index=0!./input.san */ "./node_modules/html-loader/index.js?minimize=false!./node_modules/san-loader/lib/selector.js?type=template&index=0!./src/view/input.san")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvQXBwLnNhbj8xNzk4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L2NoZWNrYm94LnNhbj80ZGU1Iiwid2VicGFjazovLy8uL3NyYy92aWV3L2lucHV0LnNhbj80MzNmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9BcHAuc2FuPzdlNWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2hlY2tib3guc2FuPzA2NjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvaW5wdXQuc2FuP2M1MWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vQXBwLnNhbiIsIndlYnBhY2s6Ly8vY2hlY2tib3guc2FuIiwid2VicGFjazovLy9pbnB1dC5zYW4iLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nhbi1yb3V0ZXIvZGlzdC9zYW4tcm91dGVyLnNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2FuL2Rpc3Qvc2FuLmRldi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9BcHAuc2FuP2EwYjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvY2hlY2tib3guc2FuP2ZiYjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvaW5wdXQuc2FuPzMxYzQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9BcHAuc2FuIiwid2VicGFjazovLy8uL3NyYy92aWV3L2NoZWNrYm94LnNhbiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9pY29uL2NoZWNrYm94LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9pY29uL2luZGV0ZXJtaW5hdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy92aWV3L2ljb24vdW5jaGVja2JveC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvaW5wdXQuc2FuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTs7O0FBR0E7QUFDQSx3UUFBeVEsZ0JBQWdCLGlCQUFpQixHQUFHLHFCQUFxQixvQkFBb0IsMkJBQTJCLDBCQUEwQixHQUFHLDRCQUE0QixvQkFBb0IsR0FBRyxrQkFBa0Isb0JBQW9CLDZCQUE2QixxQ0FBcUMsOEJBQThCLHlCQUF5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QSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZ0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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VTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0RBQXdELFNBQVM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4REFBOEQsU0FBUzs7QUFFdkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REOztBQUVBO0FBQ0E7O0FBRUE7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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsT0FBTztBQUNsQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFlBQVk7QUFDdkIsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVDQUF1QztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsa0NBQWtDLDRCQUE0QixHQUFHO0FBQzNGLDBCQUEwQixrQ0FBa0Msd0JBQXdCLElBQUksR0FBRztBQUMzRix1QkFBdUIsK0JBQStCLElBQUk7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEY7QUFDOUY7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxRQUFRO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEMsa0JBQWtCLE9BQU87QUFDekIsa0JBQWtCLE1BQU07QUFDeEIsa0JBQWtCLFFBQVE7QUFDMUIsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEMsa0JBQWtCLE1BQU07QUFDeEIsa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QixrQkFBa0Isb0JBQW9CO0FBQ3RDLGtCQUFrQixVQUFVO0FBQzVCLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU07QUFDeEIsa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU07QUFDeEIsa0JBQWtCLG9CQUFvQjtBQUN0QyxrQkFBa0IsVUFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QixrQkFBa0Isb0JBQW9CO0FBQ3RDLGtCQUFrQixVQUFVO0FBQzVCO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCx3RkFBd0Y7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RztBQUN2RztBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxZQUFZO0FBQ1o7QUFDQSxpQ0FBaUMsSUFBSTtBQUNyQyxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QixrQkFBa0Isb0JBQW9CO0FBQ3RDLGtCQUFrQixVQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLFlBQVk7QUFDWjtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMseURBQXlEO0FBQ3pELG1DQUFtQztBQUNuQztBQUNBLHNGQUFzRjtBQUN0Rix3R0FBd0c7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU07QUFDeEIsa0JBQWtCLG9CQUFvQjtBQUN0QyxrQkFBa0IsVUFBVTtBQUM1QjtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0EsMkVBQTJFO0FBQzNFLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EsWUFBWTtBQUNaLDhDQUE4QztBQUM5QyxpQ0FBaUM7QUFDakM7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHO0FBQ2xHO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RSxnREFBZ0QsNEJBQTRCLFFBQVE7QUFDcEYsMkVBQTJFO0FBQzNFLDJFQUEyRTtBQUMzRSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEUsbURBQW1ELHFDQUFxQyxFQUFFO0FBQzFGO0FBQ0EsK0ZBQStGO0FBQy9GO0FBQ0EsZ0RBQWdELGVBQWUsOEVBQThFLEdBQUc7QUFDaEo7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLDBEQUEwRCxrQ0FBa0Msa0JBQWtCO0FBQzlHLDZFQUE2RTtBQUM3RSxpQ0FBaUM7QUFDakM7QUFDQSxpQ0FBaUMsSUFBSTtBQUNyQyxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QixrQkFBa0Isb0JBQW9CO0FBQ3RDLGtCQUFrQixVQUFVO0FBQzVCLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QixrQkFBa0Isb0JBQW9CO0FBQ3RDLGtCQUFrQixVQUFVO0FBQzVCLGtCQUFrQixPQUFPO0FBQ3pCLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esc0dBQXNHO0FBQ3RHLHVGQUF1RjtBQUN2Riw0REFBNEQ7QUFDNUQ7QUFDQSwwREFBMEQ7QUFDMUQsNkNBQTZDLGNBQWM7QUFDM0Q7QUFDQTtBQUNBLHVGQUF1RjtBQUN2Riw0REFBNEQ7QUFDNUQ7QUFDQSwwREFBMEQ7QUFDMUQsNkNBQTZDLEdBQUc7QUFDaEQ7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsOEJBQThCLDZCQUE2QjtBQUM5RixtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDLGNBQWMsT0FBTztBQUNyQixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FLDRDQUE0Qyx3Q0FBd0MsUUFBUTtBQUM1RixpRkFBaUY7QUFDakYsMkZBQTJGO0FBQzNGLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MseUVBQXlFO0FBQ3pFLG1EQUFtRDtBQUNuRCxvREFBb0Q7QUFDcEQsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakUsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLGlDQUFpQztBQUNqQyxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUztBQUMvQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0IsbUJBQW1CLE1BQU07QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixtQkFBbUIsS0FBSztBQUN4QixtQkFBbUIsV0FBVztBQUM5QixvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QixtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9oU0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3hMRDs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7OztBQ2xCQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7OztBQ2xCQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ2lCO0FBQ2pCO0FBQ0E7OztBQUdBLHVEQUFZLDZGQUE0QztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLENBQUM7Ozs7Ozs7Ozs7OztBQzFCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxDQUFDOzs7Ozs7Ozs7Ozs7QUMxQkQscUNBQXFDLDR6Qjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLGd1Qjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLGd1Qjs7Ozs7Ozs7Ozs7QUNBckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGVudCBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgYmFja2dyb3VuZDogIzVCNUI1QjtcXG59XFxuXFxuLmNvbnRlbnQgaGVhZGVyIC50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50aXRsZSAuaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDE2cHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udGl0bGUgLmVuYW1lIHtcXG4gICAgY29sb3I6ICM4NDg0ODQ7XFxufVxcblxcbi50aXRsZSAuaW5mbyAudHlwZSB7XFxuICAgIGJhY2tncm91bmQ6ICM4NDg0ODQ7XFxuICAgIHBhZGRpbmc6IDFweCA1cHg7XFxuICAgIGNvbG9yOiAjNUI1QjVCO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuaGVhZGVyIC5uYW1lIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5oZWFkZXIgLmluZm8ge1xcbiAgICBjb2xvcjogIzg0ODQ4NDtcXG59XFxuLmNvbnRlbnQgc2VjdGlvbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbn1cXG4udWktaW5wdXQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcbn1cXG4uc2FuLWNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDMwcHggNTBweDtcXG59XFxuZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvY29kZS9EZXNrdG9wL2lmZS9NVlZN5a2m6Zmi4oCUU0FO5qGG5p62L3Rhc2syLjUvc3JjL3ZpZXcvQXBwLnNhbj81MjYzZjAyNFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlIQTs7SUFFQSxVQUFBO0lBQ0EsV0FBQTtDQUNBOztBQUVBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0Esb0JBQUE7Q0FDQTs7QUFFQTtJQUNBLGNBQUE7Q0FDQTs7QUFFQTtJQUNBLGNBQUE7SUFDQSx1QkFBQTtJQUNBLCtCQUFBO0lBQ0Esd0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0NBQ0E7O0FBRUE7SUFDQSxlQUFBO0NBQ0E7O0FBRUE7SUFDQSxvQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7Q0FDQTs7QUFFQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7Q0FDQTs7QUFFQTtJQUNBLGVBQUE7Q0FDQTtBQUNBO0lBQ0Esa0JBQUE7Q0FDQTtBQUNBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7Q0FDQTtBQUNBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0NBQ0E7QUFDQTtJQUNBLG1CQUFBO0NBQ0FcIixcImZpbGVcIjpcIkFwcC5zYW5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XFxcImlucHV0LWhlYWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcIm5hbWVcXFwiPui+k+WFpeahhjwvaDI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidHlwZVxcXCI+5o6n5Lu2PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlbmFtZVxcXCI+aW5wdXQ8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJpbmZvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIOWQhOenjei+k+WFpeahhlxcbiAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPC9oZWFkZXI+XFxuICAgICAgICAgICAgPHNlY3Rpb24+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8c2FuLWlucHV0XFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwi55So5oi35ZCN6L6T5YWl5qGGXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgaGludERpcmVjdGlvbj1cXFwiYm90dG9tXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcG9wb3ZlckRpcmVjdGlvbj1cXFwidG9wXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwibmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgPjwvc2FuLWlucHV0PlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxzYW4taW5wdXRcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCLlr4bnoIHovpPlhaXmoYZcXFwiXFxuICAgICAgICAgICAgICAgICAgICBoaW50RGlyZWN0aW9uPVxcXCJ0b3BcXFwiXFxuICAgICAgICAgICAgICAgICAgICBwb3BvdmVyRGlyZWN0aW9uPVxcXCJib3R0b21cXFwiXFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJwYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgPjwvc2FuLWlucHV0PlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxzYW4taW5wdXRcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCLpgq7nrrHovpPlhaXmoYZcXFwiXFxuICAgICAgICAgICAgICAgICAgICBoaW50RGlyZWN0aW9uPVxcXCJsZWZ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcG9wb3ZlckRpcmVjdGlvbj1cXFwicmlnaHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJlbWFpbFxcXCJcXG4gICAgICAgICAgICAgICAgPjwvc2FuLWlucHV0PlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxzYW4taW5wdXRcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCLmiYvmnLrlj7fovpPlhaXmoYZcXFwiXFxuICAgICAgICAgICAgICAgICAgICBoaW50RGlyZWN0aW9uPVxcXCJyaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHBvcG92ZXJEaXJlY3Rpb249XFxcImxlZnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJtb2JpbGVcXFwiXFxuICAgICAgICAgICAgICAgID48L3Nhbi1pbnB1dD5cXG4gICAgICAgICAgICA8L3NlY3Rpb24+XFxuICAgICAgICA8L2FydGljbGU+XFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cXFwiaW5wdXQtaGVhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwibmFtZVxcXCI+5aSN6YCJ5qGGPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0eXBlXFxcIj7mjqfku7Y8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImVuYW1lXFxcIj5DaGVjayBCb3g8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJpbmZvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIOWkjemAieahhlxcbiAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPC9oZWFkZXI+XFxuICAgICAgICAgICAgPHNlY3Rpb24+XFxuICAgICAgICAgICAgICAgIDxzYW4tY2hlY2tib3hcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzYW4tY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgPuS4pOenjeWPr+mAiTwvc2FuLWNoZWNrYm94PlxcbiAgICAgICAgICAgICAgICA8c2FuLWNoZWNrYm94XFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwic2FuLWNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjYW5DbGlja1RvU3dpdGNoVG9JbmRldGVybWluYXRlPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICA+5LiN56Gu5a6a54q25oCB5Y+v6YCJPC9zYW4tY2hlY2tib3g+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgPHNhbi1jaGVja2JveFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInNhbi1jaGVja2JveFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgID7pgInkuK08L3Nhbi1jaGVja2JveD5cXG4gICAgICAgICAgICAgICAgPHNhbi1jaGVja2JveFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInNhbi1jaGVja2JveFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgPuS4jeehruWumjwvc2FuLWNoZWNrYm94PlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxzYW4tY2hlY2tib3hcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzYW4tY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICA+56aB55So5LiAPC9zYW4tY2hlY2tib3g+XFxuICAgICAgICAgICAgICAgIDxzYW4tY2hlY2tib3hcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzYW4tY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgPuemgeeUqOS6jDwvc2FuLWNoZWNrYm94PlxcbiAgICAgICAgICAgICAgICA8c2FuLWNoZWNrYm94XFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwic2FuLWNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICA+56aB55So5LiJPC9zYW4tY2hlY2tib3g+XFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxcbiAgICAgICAgPC9hcnRpY2xlPlxcbiAgICAgICAgPGZvb3Rlcj7Cqe+4jyBDb2RlRGVlcjwvZm9vdGVyPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCB1aUlucHV0IGZyb20gXFxcIi4vaW5wdXQuc2FuXFxcIjtcXG4gICAgaW1wb3J0IHVpQ2hlY2tib3ggZnJvbSBcXFwiLi9jaGVja2JveC5zYW5cXFwiO1xcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICAgICAgXFxcInNhbi1pbnB1dFxcXCI6IHVpSW5wdXQsXFxuICAgICAgICAgICAgXFxcInNhbi1jaGVja2JveFxcXCI6IHVpQ2hlY2tib3hcXG4gICAgICAgIH0sXFxuICAgIH1cXG48L3NjcmlwdD5cXG48c3R5bGU+XFxuICAgIGh0bWwsXFxuICAgIGJvZHkge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAuY29udGVudCBoZWFkZXIge1xcbiAgICAgICAgcGFkZGluZzogNTBweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogIzVCNUI1QjtcXG4gICAgfVxcblxcbiAgICAuY29udGVudCBoZWFkZXIgLnRpdGxlIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLnRpdGxlIC5pbmZvIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBwYWRkaW5nOiAxNnB4IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG5cXG4gICAgLnRpdGxlIC5lbmFtZSB7XFxuICAgICAgICBjb2xvcjogIzg0ODQ4NDtcXG4gICAgfVxcblxcbiAgICAudGl0bGUgLmluZm8gLnR5cGUge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzg0ODQ4NDtcXG4gICAgICAgIHBhZGRpbmc6IDFweCA1cHg7XFxuICAgICAgICBjb2xvcjogIzVCNUI1QjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgLm5hbWUge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIC5pbmZvIHtcXG4gICAgICAgIGNvbG9yOiAjODQ4NDg0O1xcbiAgICB9XFxuICAgIC5jb250ZW50IHNlY3Rpb24ge1xcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgIH1cXG4gICAgLnVpLWlucHV0IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIG1hcmdpbjogMzBweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG4gICAgfVxcbiAgICAuc2FuLWNoZWNrYm94IHtcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICAgIG1hcmdpbjogMzBweCA1MHB4O1xcbiAgICB9XFxuICAgIGZvb3RlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi8qIOS4jeehruWumueKtuaAgSAqL1xcbi5pbmRldGVybWluYXRlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaWNvbi9pbmRldGVybWluYXRlLnN2Z1wiKSkgKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbn1cXG4uaWNvbi1jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ljb24vdW5jaGVja2JveC5zdmdcIikpICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgLmljb24tY2hlY2tib3gge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaWNvbi9jaGVja2JveC5zdmdcIikpICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcbi5kaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL2NvZGUvRGVza3RvcC9pZmUvTVZWTeWtpumZouKAlFNBTuahhuaeti90YXNrMi41L3NyYy92aWV3L2NoZWNrYm94LnNhbj85ZjQ3MmZiYVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1GQTtJQUNBLGNBQUE7Q0FDQTtBQUNBO0lBQ0EscUJBQUE7SUFDQSw0QkFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0NBQ0E7QUFDQSxXQUFBO0FBQ0E7SUFDQSxzQkFBQTtJQUNBLDBDQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtDQUNBO0FBQ0E7SUFDQSxzQkFBQTtJQUNBLDBDQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtDQUNBO0FBQ0E7SUFDQSwwQ0FBQTtJQUNBLHlCQUFBO0NBQ0E7QUFDQTtJQUNBLGFBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiY2hlY2tib3guc2FuXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPCEtLSBXQyDkuLrku4DkuYjmnInkuoZ2YWx1ZeWxnuaAp2NoZWNrZWTlsLHkuI3og73lj4zlkJHnu5HlrprkuobllYrvvIHvvIHvvIEgLS0+XFxuICAgIDxsYWJlbFxcbiAgICAgICAgZm9yPVxcXCJpZC17eyBpZCB9fVxcXCI+XFxuICAgICAgICA8aW5wdXQgXFxuICAgICAgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiIFxcbiAgICAgICAgICAgIG5hbWU9XFxcInt7IG5hbWUgfX1cXFwiXFxuICAgICAgICAgICAgZGlzYWJsZWQ9XFxcInt7IGRpc2FibGVkIH19XFxcIlxcbiAgICAgICAgICAgIGlkPVxcXCJpZC17eyBpZCB9fVxcXCJcXG4gICAgICAgICAgICA8IS0tIHZhbHVlPVxcXCJ7eyB2YWx1ZSB8IGN1c3RvbV92YWx1ZSB9fVxcXCIgLS0+XFxuICAgICAgICAgICAgb24tY2hhbmdlPVxcXCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICBjaGVja2VkPVxcXCJ7PSBjaGVja2VkID19XFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcInt7IGluZGV0ZXJtaW5hdGUgPyAnaW5kZXRlcm1pbmF0ZScgOiAnaWNvbi1jaGVja2JveCd9fSB7eyBkaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJ319XFxcIj48L2k+XFxuICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XFxuICAgICAgICA8L3NwYW4+XFxuICAgIDwvbGFiZWw+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBpbml0RGF0YTogZnVuY3Rpb24oKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgbmFtZTogXFxcIlxcXCIsXFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgaWQ6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICB0cnVlVmFsdWU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgICAgICBmYWxzZVZhbHVlOiBcXFwiXFxcIixcXG4gICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXFxuICAgICAgICAgICAgICAgIC8vIOS4jeehruWumueKtuaAgeaYr+WQpuWPguS4jueCueWHu1xcbiAgICAgICAgICAgICAgICBjYW5DbGlja1RvU3dpdGNoVG9JbmRldGVybWluYXRlOiBmYWxzZVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICAvLyDov4fmu6Tlmagg5L2/55So6Ieq5a6a5LmJ55qEdmFsdWXlgLzvvIjmmoLml7blh4nkuobnlKjkuI3kuobvvIlcXG4gICAgICAgIGZpbHRlcnM6IHtcXG4gICAgICAgICAgICBjdXN0b21fdmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XFxuICAgICAgICAgICAgICAgIGxldCB0cnVlVmFsdWUgPSB0aGlzLmRhdGEuZ2V0KFxcXCJ0cnVlVmFsdWVcXFwiKTtcXG4gICAgICAgICAgICAgICAgbGV0IGZhbHNlVmFsdWUgPSB0aGlzLmRhdGEuZ2V0KFxcXCJmYWxzZVZhbHVlXFxcIik7XFxuICAgICAgICAgICAgICAgIGxldCBpc0NoZWNrZWQgPSB0aGlzLmRhdGEuZ2V0KFxcXCJjaGVja2VkXFxcIik7XFxuICAgICAgICAgICAgICAgIGlmKGlzQ2hlY2tlZCAmJiB0cnVlVmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlVmFsdWU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgaWYoIWlzQ2hlY2tlZCAmJiBmYWxzZVZhbHVlKSB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VWYWx1ZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNDaGVja2VkO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBpbml0ZWQ6IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgICAgIC8vIOayoeacieS8oOWFpWlk5pe26ZqP5py657uR5a6a5LiA5LiqaWRcXG4gICAgICAgICAgICBpZighdGhpcy5kYXRhLmdldChcXFwiaWRcXFwiKSkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc2V0KFxcXCJpZFxcXCIsTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMDAwKSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGhhbmRsZUNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XFxuICAgICAgICAgICAgLy8g6YeN5paw5rS+5Y+RY2hhbmdl5LqL5Lu2XFxuICAgICAgICAgICAgdGhpcy5maXJlKFxcXCJjaGFuZ2VcXFwiLCBldmVudCk7XFxuXFxuICAgICAgICAgICAgLy8g5aaC5p6c5LiN56Gu5a6a54q25oCB5Y+C5LiO54K55Ye777yM5YiZ5Yik5pat54q25oCB77yI6Z2i5p2h5Luj56CB77yM6L+Z5Lic6KW/5YaZ55qE5aS055a85Lmf5LiN5oOz5LyY5YyW5LqG6Z2i5p2h5bCx6Z2i5p2h5ZCn77yJXFxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5nZXQoXFxcImNhbkNsaWNrVG9Td2l0Y2hUb0luZGV0ZXJtaW5hdGVcXFwiKSkge1xcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXRlcm1pbmF0ZSA9IHRoaXMuZGF0YS5nZXQoXFxcImluZGV0ZXJtaW5hdGVcXFwiKTtcXG4gICAgICAgICAgICAgICAgbGV0IGlzQ2hlY2tlZCA9ICF0aGlzLmRhdGEuZ2V0KFxcXCJjaGVja2VkXFxcIik7XFxuICAgICAgICAgICAgICAgIC8vIOeCueWHu+WJjeacqumAieS4reS4lOS4jeaYr+S4jeehruWumueKtuaAge+8jOaUueS4uuS4jeehruWumueKtuaAgeWSjOacqumAieS4reeKtuaAgVxcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2hlY2tlZCAmJiAhaW5kZXRlcm1pbmF0ZSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcXFwiaW5kZXRlcm1pbmF0ZVxcXCIsIHRydWUpO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcXFwiY2hlY2tlZFxcXCIsIGZhbHNlKTtcXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+acqumAieS4reeKtuaAge+8jOeCueWHu+WQjuaUueS4uumAieS4reeKtuaAgVxcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZiAodGhpcy5kYXRhLmdldChcXFwiaW5kZXRlcm1pbmF0ZVxcXCIpKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc2V0KFxcXCJpbmRldGVybWluYXRlXFxcIiwgZmFsc2UpO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcXFwiY2hlY2tlZFxcXCIsIHRydWUpO1xcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv6YCJ5Lit54q25oCB5pS55Li65pyq6YCJ5LitXFxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGlzQ2hlY2tlZCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcXFwiY2hlY2tlZFxcXCIsIGZhbHNlKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIGxhYmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC8qIOS4jeehruWumueKtuaAgSAqL1xcbiAgICAuaW5kZXRlcm1pbmF0ZSB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaWNvbi9pbmRldGVybWluYXRlLnN2Z1xcXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgfVxcbiAgICAuaWNvbi1jaGVja2JveCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaWNvbi91bmNoZWNrYm94LnN2Z1xcXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgfVxcbiAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuaWNvbi1jaGVja2JveCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaWNvbi9jaGVja2JveC5zdmdcXFwiKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgfVxcbiAgICAuZGlzYWJsZWQge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIOi+k+WFpeahhuagt+W8j+mDqOWIhiAqL1xcbi51aS1pbnB1dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnVpLWlucHV0IGlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG4gICAgY29sb3I6ICM1NTU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG59XFxuLnVpLWlucHV0IGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxcbi51aS1pbnB1dCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlcixcXG4udWktaW5wdXQgaW5wdXQ6Oi1tb3otaW5wdXQtcGxhY2Vob2xkZXIsXFxuLnVpLWlucHV0IGlucHV0OjppbnB1dC1wbGFjZWhvbGRlciwge1xcbiAgICBjb2xvcjogI2FhYTtcXG59XFxuLnVpLWlucHV0IC5ub3JtYWw6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xcbn1cXG4udWktaW5wdXQgLm5vcm1hbDpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XFxuICAgIGNvbG9yOiAjNTU1O1xcbn1cXG4udWktaW5wdXQgaW5wdXQ6ZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbiAgICBjb2xvcjogI2FhYTtcXG59XFxuLnVpLWlucHV0IGlucHV0OmRpc2FibGVkOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG59XFxuXFxuLnVpLWlucHV0IC5lcnJvciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjcyNzU7XFxufVxcblxcbi8qIOaPkOekuuahhuagt+W8j+mDqOWIhiAqL1xcblxcbi8qIOW8ueWHuuahhueahOagt+W8j+mDqOWIhiAqL1xcbi51aS1pbnB1dCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogI2ZmNzI3NTtcXG59XFxuLnVpLWlucHV0IC5wb3BvdmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGMkYyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgbWluLXdpZHRoOiAzMHB4O1xcbn1cXG4udWktaW5wdXQgLnRvcC1wb3BvdmVyIHtcXG4gICAgYm90dG9tOiA1MHB4O1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4udWktaW5wdXQgLnJpZ2h0LXBvcG92ZXIge1xcbiAgICB0b3A6IDVweDtcXG4gICAgbGVmdDogMjYwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxufVxcbi51aS1pbnB1dCAuYm90dG9tLXBvcG92ZXIge1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi51aS1pbnB1dCAubGVmdC1wb3BvdmVyIHtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiAyNjBweDtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuLyog5Zub5Liq5pa55ZCR55qE5bCP5LiJ6KeSICovXFxuLnVpLWlucHV0IC50b3AtcG9wb3Zlcjo6YWZ0ZXIsXFxuLnVpLWlucHV0IC5yaWdodC1wb3BvdmVyOjphZnRlcixcXG4udWktaW5wdXQgLmJvdHRvbS1wb3BvdmVyOjphZnRlcixcXG4udWktaW5wdXQgLmxlZnQtcG9wb3Zlcjo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi51aS1pbnB1dCAudG9wLXBvcG92ZXI6OmFmdGVyIHtcXG4gICAgYm90dG9tOiAtMjBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjRkZGMkYyO1xcbn1cXG4udWktaW5wdXQgLnJpZ2h0LXBvcG92ZXI6OmFmdGVyIHtcXG4gICAgbGVmdDogLTIwcHg7XFxuICAgIHRvcDogMTUlO1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNGRkYyRjI7XFxufVxcbi51aS1pbnB1dCAuYm90dG9tLXBvcG92ZXI6OmFmdGVyIHtcXG4gICAgdG9wOiAtMjBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjRkZGMkYyO1xcbn1cXG4udWktaW5wdXQgLmxlZnQtcG9wb3Zlcjo6YWZ0ZXIge1xcbiAgICByaWdodDogLTIwcHg7XFxuICAgIHRvcDogMTUlO1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI0ZGRjJGMjtcXG59XFxuLyog5o+Q56S65paH5a2X5qC35byP6YOo5YiGICovXFxuLnVpLWlucHV0IC5oaW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuLnVpLWlucHV0IC50b3AtaGludCB7XFxuICAgIGJvdHRvbTogNDBweDtcXG4gICAgbGVmdDogMDtcXG59XFxuLnVpLWlucHV0IC5yaWdodC1oaW50IHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAyNTBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4udWktaW5wdXQgLmJvdHRvbS1oaW50IHtcXG4gICAgdG9wOiA0MHB4O1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4udWktaW5wdXQgLmxlZnQtaGludCB7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDI1MHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvY29kZS9EZXNrdG9wL2lmZS9NVlZN5a2m6Zmi4oCUU0FO5qGG5p62L3Rhc2syLjUvc3JjL3ZpZXcvaW5wdXQuc2FuPzEyYzQ2NDM0XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNExBLGFBQUE7QUFDQTtJQUNBLG1CQUFBO0NBQ0E7QUFDQTtJQUNBLGNBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLG9CQUFBO0NBQ0E7QUFDQTs7OztJQUlBLFlBQUE7Q0FDQTtBQUNBO0lBQ0EsdUJBQUE7Q0FDQTtBQUNBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0NBQ0E7QUFDQTtJQUNBLG9CQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0NBQ0E7QUFDQTtJQUNBLHVCQUFBO0NBQ0E7O0FBRUE7SUFDQSwwQkFBQTtDQUNBOztBQUVBLGFBQUE7O0FBRUEsY0FBQTtBQUNBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0NBQ0E7QUFDQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUNBO0lBQ0EsYUFBQTtJQUNBLFFBQUE7Q0FDQTtBQUNBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtDQUNBO0FBQ0E7SUFDQSxVQUFBO0lBQ0EsUUFBQTtDQUNBO0FBQ0E7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0NBQ0E7QUFDQSxjQUFBO0FBQ0E7Ozs7SUFJQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLCtCQUFBO0NBQ0E7QUFDQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0EsMEJBQUE7Q0FDQTtBQUNBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7SUFDQSw0QkFBQTtDQUNBO0FBQ0E7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLDZCQUFBO0NBQ0E7QUFDQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7Q0FDQTtBQUNBLGNBQUE7QUFDQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0NBQ0E7QUFDQTtJQUNBLGFBQUE7SUFDQSxRQUFBO0NBQ0E7QUFDQTtJQUNBLE9BQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtDQUNBO0FBQ0E7SUFDQSxVQUFBO0lBQ0EsUUFBQTtDQUNBO0FBQ0E7SUFDQSxPQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiaW5wdXQuc2FuXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwidWktaW5wdXRcXFwiPlxcbiAgICAgICAgPGlucHV0IFxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ7eyBpc0Vycm9yID8gJ2Vycm9yJyA6ICdub3JtYWwnIH19XFxcIlxcbiAgICAgICAgICAgIHR5cGU9XFxcInt7IGlucHV0VHlwZSB9fVxcXCJcXG4gICAgICAgICAgICB2YWx1ZT1cXFwiez0gdmFsdWUgPX1cXFwiXFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7IHBsYWNlaG9sZGVyIH19XFxcIlxcbiAgICAgICAgICAgIGRpc2FibGVkPVxcXCJ7eyBkaXNhYmxlZCB9fVxcXCJcXG4gICAgICAgICAgICByZWFkb25seT1cXFwie3sgcmVhZG9ubHkgfX1cXFwiXFxuICAgICAgICAgICAgb24taW5wdXQ9XFxcImhhbmRsZUlucHV0KCRldmVudClcXFwiXFxuICAgICAgICAgICAgb24tZm9jdXM9XFxcImhhbmRsZUZvY3VzKCRldmVudClcXFwiXFxuICAgICAgICAgICAgb24tYmx1cj1cXFwiaGFuZGxlQmx1cigkZXZlbnQpXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgPHAgcy1pZj1cXFwie3tpc0Vycm9yICAmJiBpc0ZvY3VzIH19XFxcIiBjbGFzcz1cXFwicG9wb3ZlciB7eyBwb3BvdmVyRGlyZWN0aW9uIH19LXBvcG92ZXJcXFwiPnt7IHBvcG92ZXJUZXh0IHwgbGltaXR9fTwvcD5cXG4gICAgICAgIDxwIHMtaWY9XFxcInt7aXNFcnJvcn19XFxcIiBjbGFzcz1cXFwiaGludCB7eyBoaW50RGlyZWN0aW9uIH19LWhpbnRcXFwiPnt7IGhpbnRUZXh0IHwgbGltaXR9fTwvcD5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgaW5pdERhdGE6IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICB2YWx1ZTogXFxcIlxcXCIsXFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcXG4gICAgICAgICAgICByZWFkb25seTogZmFsc2UsXFxuICAgICAgICAgICAgaXNFcnJvcjogZmFsc2UsXFxuICAgICAgICAgICAgaXNGb2N1czogZmFsc2UsXFxuICAgICAgICAgICAgcG9wb3ZlclRleHQ6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgIGhpbnRUZXh0OiBcXFwiXFxcIixcXG4gICAgICAgICAgICBoaW50RGlyZWN0aW9uOiBcXFwicmlnaHRcXFwiLFxcbiAgICAgICAgICAgIHBvcG92ZXJEaXJlY3Rpb246IFxcXCJib3R0b21cXFwiLFxcbiAgICAgICAgICAgIHR5cGU6IFxcXCJcXFwiLFxcbiAgICAgICAgICAgIGlucHV0VHlwZTpcXFwidGV4dFxcXCJcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgLy8g6L+H5ruk5ZmoXFxuICAgIGZpbHRlcnM6IHtcXG4gICAgICAgIC8vIOi/h+a7pOi/h+mVv+eahOaPkOekuuWtl+espuS4slxcbiAgICAgICAgbGltaXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XFxuICAgICAgICAgICAgaWYodmFsdWUubGVuZ3RoPjMwKSB7XFxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsMzApICsgXFxcIi4uLlxcXCI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgLy8g55So5LqO57uE5Lu35Yqg6L295ZCO55qE5Yid5aeL5YyW77yM5bCG6ZSZ6K+v55qE5YC85pS55Li66buY6K6k5YC8XFxuICAgIGluaXRlZDogZnVuY3Rpb24oKSB7XFxuICAgICAgICBsZXQgVFJCTCA9IFtcXFwidG9wXFxcIixcXFwicmlnaHRcXFwiLFxcXCJsZWZ0XFxcIixcXFwiYm90dG9tXFxcIl07XFxuICAgICAgICBsZXQgaGludCA9IHRoaXMuZGF0YS5nZXQoXFxcImhpbnREaXJlY3Rpb25cXFwiKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xcbiAgICAgICAgbGV0IHBvcG92ZXIgPSB0aGlzLmRhdGEuZ2V0KFxcXCJwb3BvdmVyRGlyZWN0aW9uXFxcIikudG9Mb2NhbGVMb3dlckNhc2UoKVxcbiAgICAgICAgaWYoVFJCTC5pbmRleE9mKGhpbnQpID09PSAtMSkge1xcbiAgICAgICAgICAgIGhpbnQgPSBcXFwicmlnaHRcXFwiO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYoVFJCTC5pbmRleE9mKHBvcG92ZXIpID09PSAtMSkge1xcbiAgICAgICAgICAgIHBvcG92ZXIgPSBcXFwidG9wXFxcIjtcXG4gICAgICAgIH1cXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXFxcImhpbnREaXJlY3Rpb25cXFwiLGhpbnQpO1xcbiAgICAgICAgdGhpcy5kYXRhLnNldChcXFwicG9wb3ZlckRpcmVjdGlvblxcXCIscG9wb3Zlcik7XFxuXFxuICAgICAgICAvLyDmoKHpqoznsbvlnoss5pyq55+l57G75Z6L6K6+5Li656m65LiN5qCh6aqMXFxuICAgICAgICBsZXQgVFlQRSA9IFtcXFwibmFtZVxcXCIsIFxcXCJwYXNzd29yZFxcXCIsIFxcXCJlbWFpbFxcXCIsIFxcXCJtb2JpbGVcXFwiXTtcXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5kYXRhLmdldChcXFwidHlwZVxcXCIpO1xcbiAgICAgICAgaWYoVFlQRS5pbmRleE9mKHR5cGUpID09PSAtMSkge1xcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXFxcInR5cGVcXFwiLFxcXCJcXFwiKTtcXG4gICAgICAgIH1lbHNlIHtcXG4gICAgICAgICAgICAvLyDnsbvlnovlrZjlnKgs5LiU5rKh5pyJ5o+Q5L6b6buY6K6k5L+h5oGv5pe25L2/55So6K+l57G75Z6L55qE6buY6K6k5o+Q56S65L+h5oGvXFxuICAgICAgICAgICAgbGV0IHBvcG92ZXJUZXh0ID0gdGhpcy5kYXRhLmdldChcXFwicG9wb3ZlclRleHRcXFwiKTtcXG4gICAgICAgICAgICBsZXQgaGludFRleHQgPSB0aGlzLmRhdGEuZ2V0KFxcXCJoaW50VGV4dFxcXCIpO1xcbiAgICAgICAgICAgIGlmKHBvcG92ZXJUZXh0Lmxlbmd0aCA9PT0gMCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc2V0KFxcXCJwb3BvdmVyVGV4dFxcXCIsdGhpcy5jaGVjay5ISU5UW3R5cGVdLmluZm8pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBpZihoaW50VGV4dC5sZW5ndGggPT09IDApIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcXFwiaGludFRleHRcXFwiLHRoaXMuY2hlY2suSElOVFt0eXBlXS5lcnJvcik7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGlmKHR5cGUgPT09ICdwYXNzd29yZCcpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcXFwiaW5wdXRUeXBlXFxcIixcXFwicGFzc3dvcmRcXFwiKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIC8vIOa4hemZpOaJgOacieiKgueCueaWh+acrOWJjeWQjuepuueZveWtl+esplxcbiAgICB0cmltV2hpdGVzcGFjZTogXFxcImFsbFxcXCIsXFxuICAgIGhhbmRsZUlucHV0OiBmdW5jdGlvbihldmVudCkge1xcbiAgICAgICAgdGhpcy5maXJlKFxcXCJpbnB1dFxcXCIsZXZlbnQpO1xcbiAgICB9LFxcbiAgICBoYW5kbGVGb2N1czogZnVuY3Rpb24oZXZlbnQpIHtcXG5cXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXFxcImlzRm9jdXNcXFwiLHRydWUpO1xcbiAgICAgICAgLy8g6YeN5paw5rS+5Y+RZm9jdXPkuovku7bnu5nniLblhYPntKBcXG4gICAgICAgIHRoaXMuZmlyZShcXFwiZm9jdXNcXFwiLGV2ZW50KTtcXG4gICAgfSxcXG4gICAgaGFuZGxlQmx1cjogZnVuY3Rpb24oZXZlbnQpIHtcXG4gICAgICAgIC8vIOmHjeaWsOa0vuWPkWJsdXLkuovku7bnu5nniLblhYPntKBcXG4gICAgICAgIHRoaXMuZmlyZShcXFwiYmx1clxcXCIsZXZlbnQpO1xcbiAgICAgICAgXFxuICAgICAgICAvLyDlj6ror7vlsZ7mgKfkuI3moKHpqoxcXG4gICAgICAgIGlmKHRoaXMuZGF0YS5nZXQoXFxcInJlYWRvbmx5XFxcIikpIHtcXG4gICAgICAgICAgICByZXR1cm4gO1xcbiAgICAgICAgfVxcbiAgICAgICAgLy8g5aSx5Y6754Sm54K5XFxuICAgICAgICB0aGlzLmRhdGEuc2V0KFxcXCJpc0ZvY3VzXFxcIixmYWxzZSk7XFxuICAgICAgICAvLyDljrvmjonovpPlhaXkuKTnq6/nmoTnqbrmoLxcXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudHJpbSh0aGlzLmRhdGEuZ2V0KFxcXCJ2YWx1ZVxcXCIpKTtcXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5kYXRhLmdldChcXFwidHlwZVxcXCIpO1xcbiAgICAgICAgLy8g6ZW/5bqm5LiN5Li656m65omN5pyJ5qCh6aqM55qE5b+F6KaBXFxuICAgICAgICBpZih0eXBlICYmIHZhbHVlLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmNoZWNrW3R5cGVdKHZhbHVlKSkge1xcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXFxcImlzRXJyb3JcXFwiLGZhbHNlKTtcXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0KFxcXCJ2YWx1ZVxcXCIsdmFsdWUpXFxuICAgICAgICB9IGVsc2UgaWYodHlwZSAmJiB2YWx1ZS5sZW5ndGggIT09IDApIHtcXG4gICAgICAgICAgICAvLyDplb/luqbkuLrnqbrliJnor7TmmI7moKHpqozlpLHotKUs5pWw5o2u5pyJ6ZSZ6K+vXFxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcXFwiaXNFcnJvclxcXCIsdHJ1ZSk7XFxuICAgICAgICB9ZWxzZSB7XFxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcXFwiaXNFcnJvclxcXCIsZmFsc2UpO1xcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICAvLyDljrvpmaTliY3lkI7nqbrnmb3lrZfnrKZcXG4gICAgdHJpbTogZnVuY3Rpb24gKHZhbHVlKSB7XFxuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvKF5cXFxccyopfChcXFxccyokKS9nLFxcXCJcXFwiKTtcXG4gICAgfSxcXG4gICAgLy8g5ZCE56eN5qCh6aqMXFxuICAgIGNoZWNrOiB7XFxuICAgICAgICAvLyDorqHnrpfplb/luqYo5Lit5paH566X5Lik5Liq5a2X6IqCKVxcbiAgICAgICAgZ2V0bGVuZ3RoOiBmdW5jdGlvbiAoc3RyKSB7XFxuICAgICAgICAgICAgdmFyIGwgPSBzdHIubGVuZ3RoO1xcbiAgICAgICAgICAgIHZhciBibGVuID0gMDtcXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xcbiAgICAgICAgICAgICAgICBpZiAoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjAwKSAhPSAwKSB7XFxuICAgICAgICAgICAgICAgICAgICBibGVuKys7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgYmxlbisrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICByZXR1cm4gYmxlbjtcXG4gICAgICAgIH0sXFxuICAgICAgICAvLyDmoKHpqozplb/luqZcXG4gICAgICAgIGNoZWNrTGVuZ3RoOiBmdW5jdGlvbiAoTUFYLCBNSU4sIHN0cikge1xcbiAgICAgICAgICAgIGlmICh0aGlzLmdldGxlbmd0aChzdHIpID4gTUFYIHx8IHRoaXMuZ2V0bGVuZ3RoKHN0cikgPCBNSU4pIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgICAgIH0sXFxuICAgICAgICAvLyDnlKjmiLflkI3plb/luqZcXG4gICAgICAgIG5hbWU6IGZ1bmN0aW9uIChzdHIpIHtcXG4gICAgICAgICAgICAvLyDov4fplb/miJbov4fnn61cXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0xlbmd0aCgxNiwgNCwgc3RyKTtcXG4gICAgICAgIH0sXFxuICAgICAgICAvLyDlr4bnoIFcXG4gICAgICAgIHBhc3N3b3JkOiBmdW5jdGlvbiAoc3RyKSB7XFxuICAgICAgICAgICAgbGV0IHJlZ051bWJlciA9IC9cXFxcZCsvO1xcbiAgICAgICAgICAgIGxldCByZWdTdHJpbmcgPSAvW2EtekEtWl0rLztcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0xlbmd0aCgxNiwgOCwgc3RyKSAmJiByZWdOdW1iZXIudGVzdChzdHIpICYmIHJlZ1N0cmluZy50ZXN0KHN0cik7XFxuICAgICAgICB9LFxcbiAgICAgICAgLy8g56Gu6K6k5a+G56CB5piv5ZCm6YeN5aSN6L+Y5rKh5pyJ5oOz5Yiw5q+U6L6D5aW955qE5a6e546wXFxuXFxuICAgICAgICAvLyDpgq7nrrFcXG4gICAgICAgIGVtYWlsOiBmdW5jdGlvbiAobWFpbCkge1xcbiAgICAgICAgICAgIGxldCByZWdFbWFpbCA9IC9eW0EtWmEtemRdKyhbLV8uXVtBLVphLXpkXSspKkAoW0EtWmEtemRdK1stLl0pK1tBLVphLXpkXXsyLDV9JC9nO1xcbiAgICAgICAgICAgIHJldHVybiByZWdFbWFpbC50ZXN0KG1haWwpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIC8vIOaJi+acuuWPt1xcbiAgICAgICAgbW9iaWxlOiBmdW5jdGlvbiAodGVsKSB7XFxuICAgICAgICAgICAgbGV0IHJlZ01vYmlsZSA9IC9eKCgxM1swLTldKXwoMTRbNXw3XSl8KDE1KFswLTNdfFs1LTldKSl8KDE4WzAsNS05XSl8KDE3W1xcXFxkXSkpXFxcXGR7OH0kL2c7XFxuXFxuICAgICAgICAgICAgcmV0dXJuIHJlZ01vYmlsZS50ZXN0KHRlbCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgLy8g6buY6K6k5o+Q56S65L+h5oGvXFxuICAgICAgICBISU5UOiB7XFxuICAgICAgICAgICAgbmFtZToge1xcbiAgICAgICAgICAgICAgICBpbmZvOiBcXFwi5ZCN56ew5ZyoNC0xNuWtl+espuS7peWGhVxcXCIsXFxuICAgICAgICAgICAgICAgIGVycm9yOiBcXFwi5ZCN56ew5LiN5ZCI5rOVXFxcIlxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHtcXG4gICAgICAgICAgICAgICAgaW5mbzogXFxcIuWvhueggeWcqDgtMTbkvY3kuYvpl7Qs5YyF5ZCr6Iux5paH5ZKM5pWw5a2XXFxcIixcXG4gICAgICAgICAgICAgICAgZXJyb3I6IFxcXCLlr4bnoIHkuI3lkIjms5VcXFwiXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBlbWFpbDoge1xcbiAgICAgICAgICAgICAgICBpbmZvOiBcXFwi5ZCI5rOV6YKu566x5qC85byP55qEXFxcIixcXG4gICAgICAgICAgICAgICAgZXJyb3I6IFxcXCLpgq7nrrHmoLzlvI/kuI3lkIjms5VcXFwiXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBtb2JpbGU6IHtcXG4gICAgICAgICAgICAgICAgaW5mbzogXFxcIuivt+i+k+WFpTEx5L2N5omL5py65Y+3XFxcIixcXG4gICAgICAgICAgICAgICAgZXJyb3I6IFxcXCLmiYvmnLrlj7fmoLzlvI/kuI3lkIjms5VcXFwiXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbjwvc2NyaXB0PlxcbjxzdHlsZT5cXG4gICAgLyog6L6T5YWl5qGG5qC35byP6YOo5YiGICovXFxuICAgIC51aS1pbnB1dCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG4gICAgLnVpLWlucHV0IGlucHV0IHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcbiAgICAgICAgY29sb3I6ICM1NTU7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gICAgfVxcbiAgICAudWktaW5wdXQgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXFxuICAgIC51aS1pbnB1dCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlcixcXG4gICAgLnVpLWlucHV0IGlucHV0OjotbW96LWlucHV0LXBsYWNlaG9sZGVyLFxcbiAgICAudWktaW5wdXQgaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyLCB7XFxuICAgICAgICBjb2xvcjogI2FhYTtcXG4gICAgfVxcbiAgICAudWktaW5wdXQgLm5vcm1hbDpob3ZlciB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xcbiAgICB9XFxuICAgIC51aS1pbnB1dCAubm9ybWFsOmZvY3VzIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XFxuICAgICAgICBjb2xvcjogIzU1NTtcXG4gICAgfVxcbiAgICAudWktaW5wdXQgaW5wdXQ6ZGlzYWJsZWQge1xcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICAgICAgICBjb2xvcjogI2FhYTtcXG4gICAgfVxcbiAgICAudWktaW5wdXQgaW5wdXQ6ZGlzYWJsZWQ6aG92ZXIge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG4gICAgfVxcblxcbiAgICAudWktaW5wdXQgLmVycm9yIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjcyNzU7XFxuICAgIH1cXG5cXG4gICAgLyog5o+Q56S65qGG5qC35byP6YOo5YiGICovXFxuXFxuICAgIC8qIOW8ueWHuuahhueahOagt+W8j+mDqOWIhiAqL1xcbiAgICAudWktaW5wdXQgcCB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgY29sb3I6ICNmZjcyNzU7XFxuICAgIH1cXG4gICAgLnVpLWlucHV0IC5wb3BvdmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkYyRjI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgICAgICBtaW4td2lkdGg6IDMwcHg7XFxuICAgIH1cXG4gICAgLnVpLWlucHV0IC50b3AtcG9wb3ZlciB7XFxuICAgICAgICBib3R0b206IDUwcHg7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICB9XFxuICAgIC51aS1pbnB1dCAucmlnaHQtcG9wb3ZlciB7XFxuICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgIGxlZnQ6IDI2MHB4O1xcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgfVxcbiAgICAudWktaW5wdXQgLmJvdHRvbS1wb3BvdmVyIHtcXG4gICAgICAgIHRvcDogNTBweDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG4gICAgLnVpLWlucHV0IC5sZWZ0LXBvcG92ZXIge1xcbiAgICAgICAgdG9wOiA1cHg7XFxuICAgICAgICByaWdodDogMjYwcHg7XFxuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICB9XFxuICAgIC8qIOWbm+S4quaWueWQkeeahOWwj+S4ieinkiAqL1xcbiAgICAudWktaW5wdXQgLnRvcC1wb3BvdmVyOjphZnRlcixcXG4gICAgLnVpLWlucHV0IC5yaWdodC1wb3BvdmVyOjphZnRlcixcXG4gICAgLnVpLWlucHV0IC5ib3R0b20tcG9wb3Zlcjo6YWZ0ZXIsXFxuICAgIC51aS1pbnB1dCAubGVmdC1wb3BvdmVyOjphZnRlciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuICAgIC51aS1pbnB1dCAudG9wLXBvcG92ZXI6OmFmdGVyIHtcXG4gICAgICAgIGJvdHRvbTogLTIwcHg7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjRkZGMkYyO1xcbiAgICB9XFxuICAgIC51aS1pbnB1dCAucmlnaHQtcG9wb3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogLTIwcHg7XFxuICAgICAgICB0b3A6IDE1JTtcXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI0ZGRjJGMjtcXG4gICAgfVxcbiAgICAudWktaW5wdXQgLmJvdHRvbS1wb3BvdmVyOjphZnRlciB7XFxuICAgICAgICB0b3A6IC0yMHB4O1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0ZGRjJGMjtcXG4gICAgfVxcbiAgICAudWktaW5wdXQgLmxlZnQtcG9wb3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgcmlnaHQ6IC0yMHB4O1xcbiAgICAgICAgdG9wOiAxNSU7XFxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI0ZGRjJGMjtcXG4gICAgfVxcbiAgICAvKiDmj5DnpLrmloflrZfmoLflvI/pg6jliIYgKi9cXG4gICAgLnVpLWlucHV0IC5oaW50IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIH1cXG4gICAgLnVpLWlucHV0IC50b3AtaGludCB7XFxuICAgICAgICBib3R0b206IDQwcHg7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICB9XFxuICAgIC51aS1pbnB1dCAucmlnaHQtaGludCB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAyNTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG4gICAgLnVpLWlucHV0IC5ib3R0b20taGludCB7XFxuICAgICAgICB0b3A6IDQwcHg7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICB9XFxuICAgIC51aS1pbnB1dCAubGVmdC1oaW50IHtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHJpZ2h0OiAyNTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48ZGl2PlxcbiAgICA8YXJ0aWNsZSBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVxcXCJpbnB1dC1oZWFkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwibmFtZVxcXCI+6L6T5YWl5qGGPC9oMj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidHlwZVxcXCI+5o6n5Lu2PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImVuYW1lXFxcIj5pbnB1dDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImluZm9cXFwiPlxcbiAgICAgICAgICAgICAgICDlkITnp43ovpPlhaXmoYZcXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2hlYWRlcj5cXG4gICAgICAgIDxzZWN0aW9uPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxzYW4taW5wdXRcXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIueUqOaIt+WQjei+k+WFpeahhlxcXCJcXG4gICAgICAgICAgICAgICAgaGludERpcmVjdGlvbj1cXFwiYm90dG9tXFxcIlxcbiAgICAgICAgICAgICAgICBwb3BvdmVyRGlyZWN0aW9uPVxcXCJ0b3BcXFwiXFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcIm5hbWVcXFwiXFxuICAgICAgICAgICAgPjwvc2FuLWlucHV0PlxcbiAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICA8c2FuLWlucHV0XFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCLlr4bnoIHovpPlhaXmoYZcXFwiXFxuICAgICAgICAgICAgICAgIGhpbnREaXJlY3Rpb249XFxcInRvcFxcXCJcXG4gICAgICAgICAgICAgICAgcG9wb3ZlckRpcmVjdGlvbj1cXFwiYm90dG9tXFxcIlxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJwYXNzd29yZFxcXCJcXG4gICAgICAgICAgICA+PC9zYW4taW5wdXQ+XFxuICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgIDxzYW4taW5wdXRcXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIumCrueusei+k+WFpeahhlxcXCJcXG4gICAgICAgICAgICAgICAgaGludERpcmVjdGlvbj1cXFwibGVmdFxcXCJcXG4gICAgICAgICAgICAgICAgcG9wb3ZlckRpcmVjdGlvbj1cXFwicmlnaHRcXFwiXFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcImVtYWlsXFxcIlxcbiAgICAgICAgICAgID48L3Nhbi1pbnB1dD5cXG4gICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgPHNhbi1pbnB1dFxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwi5omL5py65Y+36L6T5YWl5qGGXFxcIlxcbiAgICAgICAgICAgICAgICBoaW50RGlyZWN0aW9uPVxcXCJyaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgcG9wb3ZlckRpcmVjdGlvbj1cXFwibGVmdFxcXCJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwibW9iaWxlXFxcIlxcbiAgICAgICAgICAgID48L3Nhbi1pbnB1dD5cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgPC9hcnRpY2xlPlxcbiAgICA8YXJ0aWNsZSBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVxcXCJpbnB1dC1oZWFkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwibmFtZVxcXCI+5aSN6YCJ5qGGPC9oMj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidHlwZVxcXCI+5o6n5Lu2PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImVuYW1lXFxcIj5DaGVjayBCb3g8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJpbmZvXFxcIj5cXG4gICAgICAgICAgICAgICAg5aSN6YCJ5qGGXFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgPC9oZWFkZXI+XFxuICAgICAgICA8c2VjdGlvbj5cXG4gICAgICAgICAgICA8c2FuLWNoZWNrYm94XFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzYW4tY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgID7kuKTnp43lj6/pgIk8L3Nhbi1jaGVja2JveD5cXG4gICAgICAgICAgICA8c2FuLWNoZWNrYm94XFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzYW4tY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgICAgICBjYW5DbGlja1RvU3dpdGNoVG9JbmRldGVybWluYXRlPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgID7kuI3noa7lrprnirbmgIHlj6/pgIk8L3Nhbi1jaGVja2JveD5cXG4gICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgPHNhbi1jaGVja2JveFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwic2FuLWNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgICAgICBjaGVja2VkPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgID7pgInkuK08L3Nhbi1jaGVja2JveD5cXG4gICAgICAgICAgICA8c2FuLWNoZWNrYm94XFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzYW4tY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgID7kuI3noa7lrpo8L3Nhbi1jaGVja2JveD5cXG4gICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgPHNhbi1jaGVja2JveFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwic2FuLWNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgICAgICBjaGVja2VkPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgPuemgeeUqOS4gDwvc2FuLWNoZWNrYm94PlxcbiAgICAgICAgICAgIDxzYW4tY2hlY2tib3hcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInNhbi1jaGVja2JveFxcXCJcXG4gICAgICAgICAgICAgICAgY2hlY2tlZD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgID7npoHnlKjkuow8L3Nhbi1jaGVja2JveD5cXG4gICAgICAgICAgICA8c2FuLWNoZWNrYm94XFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzYW4tY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgID7npoHnlKjkuIk8L3Nhbi1jaGVja2JveD5cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgPC9hcnRpY2xlPlxcbiAgICA8Zm9vdGVyPsKp77iPIENvZGVEZWVyPC9mb290ZXI+XFxuPC9kaXY+XFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjwhLS0gV0Mg5Li65LuA5LmI5pyJ5LqGdmFsdWXlsZ7mgKdjaGVja2Vk5bCx5LiN6IO95Y+M5ZCR57uR5a6a5LqG5ZWK77yB77yB77yBIC0tPlxcbjxsYWJlbFxcbiAgICBmb3I9XFxcImlkLXt7IGlkIH19XFxcIj5cXG4gICAgPGlucHV0IFxcbiAgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiIFxcbiAgICAgICAgbmFtZT1cXFwie3sgbmFtZSB9fVxcXCJcXG4gICAgICAgIGRpc2FibGVkPVxcXCJ7eyBkaXNhYmxlZCB9fVxcXCJcXG4gICAgICAgIGlkPVxcXCJpZC17eyBpZCB9fVxcXCJcXG4gICAgICAgIDwhLS0gdmFsdWU9XFxcInt7IHZhbHVlIHwgY3VzdG9tX3ZhbHVlIH19XFxcIiAtLT5cXG4gICAgICAgIG9uLWNoYW5nZT1cXFwiaGFuZGxlQ2hhbmdlKCRldmVudClcXFwiXFxuICAgICAgICBjaGVja2VkPVxcXCJ7PSBjaGVja2VkID19XFxcIlxcbiAgICA+XFxuICAgIDxpIGNsYXNzPVxcXCJ7eyBpbmRldGVybWluYXRlID8gJ2luZGV0ZXJtaW5hdGUnIDogJ2ljb24tY2hlY2tib3gnfX0ge3sgZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyd9fVxcXCI+PC9pPlxcbiAgICA8c3Bhbj5cXG4gICAgICAgIDxzbG90Pjwvc2xvdD5cXG4gICAgPC9zcGFuPlxcbjwvbGFiZWw+XFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjxkaXYgY2xhc3M9XFxcInVpLWlucHV0XFxcIj5cXG4gICAgPGlucHV0IFxcbiAgICAgICAgY2xhc3M9XFxcInt7IGlzRXJyb3IgPyAnZXJyb3InIDogJ25vcm1hbCcgfX1cXFwiXFxuICAgICAgICB0eXBlPVxcXCJ7eyBpbnB1dFR5cGUgfX1cXFwiXFxuICAgICAgICB2YWx1ZT1cXFwiez0gdmFsdWUgPX1cXFwiXFxuICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3sgcGxhY2Vob2xkZXIgfX1cXFwiXFxuICAgICAgICBkaXNhYmxlZD1cXFwie3sgZGlzYWJsZWQgfX1cXFwiXFxuICAgICAgICByZWFkb25seT1cXFwie3sgcmVhZG9ubHkgfX1cXFwiXFxuICAgICAgICBvbi1pbnB1dD1cXFwiaGFuZGxlSW5wdXQoJGV2ZW50KVxcXCJcXG4gICAgICAgIG9uLWZvY3VzPVxcXCJoYW5kbGVGb2N1cygkZXZlbnQpXFxcIlxcbiAgICAgICAgb24tYmx1cj1cXFwiaGFuZGxlQmx1cigkZXZlbnQpXFxcIlxcbiAgICA+XFxuICAgIDxwIHMtaWY9XFxcInt7aXNFcnJvciAgJiYgaXNGb2N1cyB9fVxcXCIgY2xhc3M9XFxcInBvcG92ZXIge3sgcG9wb3ZlckRpcmVjdGlvbiB9fS1wb3BvdmVyXFxcIj57eyBwb3BvdmVyVGV4dCB8IGxpbWl0fX08L3A+XFxuICAgIDxwIHMtaWY9XFxcInt7aXNFcnJvcn19XFxcIiBjbGFzcz1cXFwiaGludCB7eyBoaW50RGlyZWN0aW9uIH19LWhpbnRcXFwiPnt7IGhpbnRUZXh0IHwgbGltaXR9fTwvcD5cXG48L2Rpdj5cXG5cIjsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImlucHV0LWhlYWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibmFtZVwiPui+k+WFpeahhjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGVcIj7mjqfku7Y8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVuYW1lXCI+aW5wdXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICDlkITnp43ovpPlhaXmoYZcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxzYW4taW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLnlKjmiLflkI3ovpPlhaXmoYZcIlxuICAgICAgICAgICAgICAgICAgICBoaW50RGlyZWN0aW9uPVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgcG9wb3ZlckRpcmVjdGlvbj1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICA+PC9zYW4taW5wdXQ+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxzYW4taW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLlr4bnoIHovpPlhaXmoYZcIlxuICAgICAgICAgICAgICAgICAgICBoaW50RGlyZWN0aW9uPVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgcG9wb3ZlckRpcmVjdGlvbj1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgPjwvc2FuLWlucHV0PlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8c2FuLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6YKu566x6L6T5YWl5qGGXCJcbiAgICAgICAgICAgICAgICAgICAgaGludERpcmVjdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICBwb3BvdmVyRGlyZWN0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgID48L3Nhbi1pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPHNhbi1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuaJi+acuuWPt+i+k+WFpeahhlwiXG4gICAgICAgICAgICAgICAgICAgIGhpbnREaXJlY3Rpb249XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHBvcG92ZXJEaXJlY3Rpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm1vYmlsZVwiXG4gICAgICAgICAgICAgICAgPjwvc2FuLWlucHV0PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImlucHV0LWhlYWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibmFtZVwiPuWkjemAieahhjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGVcIj7mjqfku7Y8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVuYW1lXCI+Q2hlY2sgQm94PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAg5aSN6YCJ5qGGXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2FuLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2FuLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICA+5Lik56eN5Y+v6YCJPC9zYW4tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgPHNhbi1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNhbi1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIGNhbkNsaWNrVG9Td2l0Y2hUb0luZGV0ZXJtaW5hdGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+5LiN56Gu5a6a54q25oCB5Y+v6YCJPC9zYW4tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxzYW4tY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzYW4tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgPumAieS4rTwvc2FuLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgIDxzYW4tY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzYW4tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgPuS4jeehruWumjwvc2FuLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8c2FuLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2FuLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+56aB55So5LiAPC9zYW4tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgPHNhbi1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNhbi1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+56aB55So5LqMPC9zYW4tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgPHNhbi1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNhbi1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+56aB55So5LiJPC9zYW4tY2hlY2tib3g+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPGZvb3Rlcj7Cqe+4jyBDb2RlRGVlcjwvZm9vdGVyPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdWlJbnB1dCBmcm9tIFwiLi9pbnB1dC5zYW5cIjtcbiAgICBpbXBvcnQgdWlDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC5zYW5cIjtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIFwic2FuLWlucHV0XCI6IHVpSW5wdXQsXG4gICAgICAgICAgICBcInNhbi1jaGVja2JveFwiOiB1aUNoZWNrYm94XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4gICAgaHRtbCxcbiAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5jb250ZW50IGhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNUI1QjVCO1xuICAgIH1cblxuICAgIC5jb250ZW50IGhlYWRlciAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC50aXRsZSAuaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC50aXRsZSAuZW5hbWUge1xuICAgICAgICBjb2xvcjogIzg0ODQ4NDtcbiAgICB9XG5cbiAgICAudGl0bGUgLmluZm8gLnR5cGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjODQ4NDg0O1xuICAgICAgICBwYWRkaW5nOiAxcHggNXB4O1xuICAgICAgICBjb2xvcjogIzVCNUI1QjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgaGVhZGVyIC5uYW1lIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGhlYWRlciAuaW5mbyB7XG4gICAgICAgIGNvbG9yOiAjODQ4NDg0O1xuICAgIH1cbiAgICAuY29udGVudCBzZWN0aW9uIHtcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgfVxuICAgIC51aS1pbnB1dCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgfVxuICAgIC5zYW4tY2hlY2tib3gge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIG1hcmdpbjogMzBweCA1MHB4O1xuICAgIH1cbiAgICBmb290ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPCEtLSBXQyDkuLrku4DkuYjmnInkuoZ2YWx1ZeWxnuaAp2NoZWNrZWTlsLHkuI3og73lj4zlkJHnu5HlrprkuobllYrvvIHvvIHvvIEgLS0+XG4gICAgPGxhYmVsXG4gICAgICAgIGZvcj1cImlkLXt7IGlkIH19XCI+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgbmFtZT1cInt7IG5hbWUgfX1cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9XCJ7eyBkaXNhYmxlZCB9fVwiXG4gICAgICAgICAgICBpZD1cImlkLXt7IGlkIH19XCJcbiAgICAgICAgICAgIDwhLS0gdmFsdWU9XCJ7eyB2YWx1ZSB8IGN1c3RvbV92YWx1ZSB9fVwiIC0tPlxuICAgICAgICAgICAgb24tY2hhbmdlPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgY2hlY2tlZD1cIns9IGNoZWNrZWQgPX1cIlxuICAgICAgICA+XG4gICAgICAgIDxpIGNsYXNzPVwie3sgaW5kZXRlcm1pbmF0ZSA/ICdpbmRldGVybWluYXRlJyA6ICdpY29uLWNoZWNrYm94J319IHt7IGRpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnfX1cIj48L2k+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9sYWJlbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBpbml0RGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJ1ZVZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGZhbHNlVmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8g5LiN56Gu5a6a54q25oCB5piv5ZCm5Y+C5LiO54K55Ye7XG4gICAgICAgICAgICAgICAgY2FuQ2xpY2tUb1N3aXRjaFRvSW5kZXRlcm1pbmF0ZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8g6L+H5ruk5ZmoIOS9v+eUqOiHquWumuS5ieeahHZhbHVl5YC877yI5pqC5pe25YeJ5LqG55So5LiN5LqG77yJXG4gICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICAgIGN1c3RvbV92YWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdHJ1ZVZhbHVlID0gdGhpcy5kYXRhLmdldChcInRydWVWYWx1ZVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgZmFsc2VWYWx1ZSA9IHRoaXMuZGF0YS5nZXQoXCJmYWxzZVZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpc0NoZWNrZWQgPSB0aGlzLmRhdGEuZ2V0KFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgICAgICBpZihpc0NoZWNrZWQgJiYgdHJ1ZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCFpc0NoZWNrZWQgJiYgZmFsc2VWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzQ2hlY2tlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW5pdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIOayoeacieS8oOWFpWlk5pe26ZqP5py657uR5a6a5LiA5LiqaWRcbiAgICAgICAgICAgIGlmKCF0aGlzLmRhdGEuZ2V0KFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc2V0KFwiaWRcIixNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwMDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIOmHjeaWsOa0vuWPkWNoYW5nZeS6i+S7tlxuICAgICAgICAgICAgdGhpcy5maXJlKFwiY2hhbmdlXCIsIGV2ZW50KTtcblxuICAgICAgICAgICAgLy8g5aaC5p6c5LiN56Gu5a6a54q25oCB5Y+C5LiO54K55Ye777yM5YiZ5Yik5pat54q25oCB77yI6Z2i5p2h5Luj56CB77yM6L+Z5Lic6KW/5YaZ55qE5aS055a85Lmf5LiN5oOz5LyY5YyW5LqG6Z2i5p2h5bCx6Z2i5p2h5ZCn77yJXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmdldChcImNhbkNsaWNrVG9Td2l0Y2hUb0luZGV0ZXJtaW5hdGVcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXRlcm1pbmF0ZSA9IHRoaXMuZGF0YS5nZXQoXCJpbmRldGVybWluYXRlXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpc0NoZWNrZWQgPSAhdGhpcy5kYXRhLmdldChcImNoZWNrZWRcIik7XG4gICAgICAgICAgICAgICAgLy8g54K55Ye75YmN5pyq6YCJ5Lit5LiU5LiN5piv5LiN56Gu5a6a54q25oCB77yM5pS55Li65LiN56Gu5a6a54q25oCB5ZKM5pyq6YCJ5Lit54q25oCBXG4gICAgICAgICAgICAgICAgaWYgKCFpc0NoZWNrZWQgJiYgIWluZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcImluZGV0ZXJtaW5hdGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJjaGVja2VkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv5pyq6YCJ5Lit54q25oCB77yM54K55Ye75ZCO5pS55Li66YCJ5Lit54q25oCBXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKHRoaXMuZGF0YS5nZXQoXCJpbmRldGVybWluYXRlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJpbmRldGVybWluYXRlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+mAieS4reeKtuaAgeaUueS4uuacqumAieS4rVxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc2V0KFwiY2hlY2tlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLyog5LiN56Gu5a6a54q25oCBICovXG4gICAgLmluZGV0ZXJtaW5hdGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4vaWNvbi9pbmRldGVybWluYXRlLnN2Z1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICB3aWR0aDogMS41ZW07XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgfVxuICAgIC5pY29uLWNoZWNrYm94IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2ljb24vdW5jaGVja2JveC5zdmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIH1cbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5pY29uLWNoZWNrYm94IHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi9pY29uL2NoZWNrYm94LnN2Z1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIH1cbiAgICAuZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInVpLWlucHV0XCI+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIGNsYXNzPVwie3sgaXNFcnJvciA/ICdlcnJvcicgOiAnbm9ybWFsJyB9fVwiXG4gICAgICAgICAgICB0eXBlPVwie3sgaW5wdXRUeXBlIH19XCJcbiAgICAgICAgICAgIHZhbHVlPVwiez0gdmFsdWUgPX1cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZWhvbGRlciB9fVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cInt7IGRpc2FibGVkIH19XCJcbiAgICAgICAgICAgIHJlYWRvbmx5PVwie3sgcmVhZG9ubHkgfX1cIlxuICAgICAgICAgICAgb24taW5wdXQ9XCJoYW5kbGVJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgIG9uLWZvY3VzPVwiaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICBvbi1ibHVyPVwiaGFuZGxlQmx1cigkZXZlbnQpXCJcbiAgICAgICAgPlxuICAgICAgICA8cCBzLWlmPVwie3tpc0Vycm9yICAmJiBpc0ZvY3VzIH19XCIgY2xhc3M9XCJwb3BvdmVyIHt7IHBvcG92ZXJEaXJlY3Rpb24gfX0tcG9wb3ZlclwiPnt7IHBvcG92ZXJUZXh0IHwgbGltaXR9fTwvcD5cbiAgICAgICAgPHAgcy1pZj1cInt7aXNFcnJvcn19XCIgY2xhc3M9XCJoaW50IHt7IGhpbnREaXJlY3Rpb24gfX0taGludFwiPnt7IGhpbnRUZXh0IHwgbGltaXR9fTwvcD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0RGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgaXNFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBpc0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgIHBvcG92ZXJUZXh0OiBcIlwiLFxuICAgICAgICAgICAgaGludFRleHQ6IFwiXCIsXG4gICAgICAgICAgICBoaW50RGlyZWN0aW9uOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICBwb3BvdmVyRGlyZWN0aW9uOiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgdHlwZTogXCJcIixcbiAgICAgICAgICAgIGlucHV0VHlwZTpcInRleHRcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDov4fmu6TlmahcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIC8vIOi/h+a7pOi/h+mVv+eahOaPkOekuuWtl+espuS4slxuICAgICAgICBsaW1pdDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aD4zMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsMzApICsgXCIuLi5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g55So5LqO57uE5Lu35Yqg6L295ZCO55qE5Yid5aeL5YyW77yM5bCG6ZSZ6K+v55qE5YC85pS55Li66buY6K6k5YC8XG4gICAgaW5pdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IFRSQkwgPSBbXCJ0b3BcIixcInJpZ2h0XCIsXCJsZWZ0XCIsXCJib3R0b21cIl07XG4gICAgICAgIGxldCBoaW50ID0gdGhpcy5kYXRhLmdldChcImhpbnREaXJlY3Rpb25cIikudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHBvcG92ZXIgPSB0aGlzLmRhdGEuZ2V0KFwicG9wb3ZlckRpcmVjdGlvblwiKS50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIGlmKFRSQkwuaW5kZXhPZihoaW50KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGhpbnQgPSBcInJpZ2h0XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYoVFJCTC5pbmRleE9mKHBvcG92ZXIpID09PSAtMSkge1xuICAgICAgICAgICAgcG9wb3ZlciA9IFwidG9wXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhLnNldChcImhpbnREaXJlY3Rpb25cIixoaW50KTtcbiAgICAgICAgdGhpcy5kYXRhLnNldChcInBvcG92ZXJEaXJlY3Rpb25cIixwb3BvdmVyKTtcblxuICAgICAgICAvLyDmoKHpqoznsbvlnoss5pyq55+l57G75Z6L6K6+5Li656m65LiN5qCh6aqMXG4gICAgICAgIGxldCBUWVBFID0gW1wibmFtZVwiLCBcInBhc3N3b3JkXCIsIFwiZW1haWxcIiwgXCJtb2JpbGVcIl07XG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5kYXRhLmdldChcInR5cGVcIik7XG4gICAgICAgIGlmKFRZUEUuaW5kZXhPZih0eXBlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ0eXBlXCIsXCJcIik7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIC8vIOexu+Wei+WtmOWcqCzkuJTmsqHmnInmj5Dkvpvpu5jorqTkv6Hmga/ml7bkvb/nlKjor6XnsbvlnovnmoTpu5jorqTmj5DnpLrkv6Hmga9cbiAgICAgICAgICAgIGxldCBwb3BvdmVyVGV4dCA9IHRoaXMuZGF0YS5nZXQoXCJwb3BvdmVyVGV4dFwiKTtcbiAgICAgICAgICAgIGxldCBoaW50VGV4dCA9IHRoaXMuZGF0YS5nZXQoXCJoaW50VGV4dFwiKTtcbiAgICAgICAgICAgIGlmKHBvcG92ZXJUZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJwb3BvdmVyVGV4dFwiLHRoaXMuY2hlY2suSElOVFt0eXBlXS5pbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGhpbnRUZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJoaW50VGV4dFwiLHRoaXMuY2hlY2suSElOVFt0eXBlXS5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcImlucHV0VHlwZVwiLFwicGFzc3dvcmRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOa4hemZpOaJgOacieiKgueCueaWh+acrOWJjeWQjuepuueZveWtl+esplxuICAgIHRyaW1XaGl0ZXNwYWNlOiBcImFsbFwiLFxuICAgIGhhbmRsZUlucHV0OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB0aGlzLmZpcmUoXCJpbnB1dFwiLGV2ZW50KTtcbiAgICB9LFxuICAgIGhhbmRsZUZvY3VzOiBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJpc0ZvY3VzXCIsdHJ1ZSk7XG4gICAgICAgIC8vIOmHjeaWsOa0vuWPkWZvY3Vz5LqL5Lu257uZ54i25YWD57SgXG4gICAgICAgIHRoaXMuZmlyZShcImZvY3VzXCIsZXZlbnQpO1xuICAgIH0sXG4gICAgaGFuZGxlQmx1cjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgLy8g6YeN5paw5rS+5Y+RYmx1cuS6i+S7tue7meeItuWFg+e0oFxuICAgICAgICB0aGlzLmZpcmUoXCJibHVyXCIsZXZlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy8g5Y+q6K+75bGe5oCn5LiN5qCh6aqMXG4gICAgICAgIGlmKHRoaXMuZGF0YS5nZXQoXCJyZWFkb25seVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICAvLyDlpLHljrvnhKbngrlcbiAgICAgICAgdGhpcy5kYXRhLnNldChcImlzRm9jdXNcIixmYWxzZSk7XG4gICAgICAgIC8vIOWOu+aOiei+k+WFpeS4pOerr+eahOepuuagvFxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnRyaW0odGhpcy5kYXRhLmdldChcInZhbHVlXCIpKTtcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmRhdGEuZ2V0KFwidHlwZVwiKTtcbiAgICAgICAgLy8g6ZW/5bqm5LiN5Li656m65omN5pyJ5qCh6aqM55qE5b+F6KaBXG4gICAgICAgIGlmKHR5cGUgJiYgdmFsdWUubGVuZ3RoICE9PSAwICYmIHRoaXMuY2hlY2tbdHlwZV0odmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0KFwiaXNFcnJvclwiLGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ2YWx1ZVwiLHZhbHVlKVxuICAgICAgICB9IGVsc2UgaWYodHlwZSAmJiB2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIC8vIOmVv+W6puS4uuepuuWImeivtOaYjuagoemqjOWksei0pSzmlbDmja7mnInplJnor69cbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJpc0Vycm9yXCIsdHJ1ZSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJpc0Vycm9yXCIsZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDljrvpmaTliY3lkI7nqbrnmb3lrZfnrKZcbiAgICB0cmltOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLFwiXCIpO1xuICAgIH0sXG4gICAgLy8g5ZCE56eN5qCh6aqMXG4gICAgY2hlY2s6IHtcbiAgICAgICAgLy8g6K6h566X6ZW/5bqmKOS4reaWh+eul+S4pOS4quWtl+iKgilcbiAgICAgICAgZ2V0bGVuZ3RoOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICB2YXIgbCA9IHN0ci5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgYmxlbiA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgoc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmMDApICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYmxlbisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBibGVuKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYmxlbjtcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5qCh6aqM6ZW/5bqmXG4gICAgICAgIGNoZWNrTGVuZ3RoOiBmdW5jdGlvbiAoTUFYLCBNSU4sIHN0cikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0bGVuZ3RoKHN0cikgPiBNQVggfHwgdGhpcy5nZXRsZW5ndGgoc3RyKSA8IE1JTikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICAvLyDnlKjmiLflkI3plb/luqZcbiAgICAgICAgbmFtZTogZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgLy8g6L+H6ZW/5oiW6L+H55+tXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0xlbmd0aCgxNiwgNCwgc3RyKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5a+G56CBXG4gICAgICAgIHBhc3N3b3JkOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICBsZXQgcmVnTnVtYmVyID0gL1xcZCsvO1xuICAgICAgICAgICAgbGV0IHJlZ1N0cmluZyA9IC9bYS16QS1aXSsvO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tMZW5ndGgoMTYsIDgsIHN0cikgJiYgcmVnTnVtYmVyLnRlc3Qoc3RyKSAmJiByZWdTdHJpbmcudGVzdChzdHIpO1xuICAgICAgICB9LFxuICAgICAgICAvLyDnoa7orqTlr4bnoIHmmK/lkKbph43lpI3ov5jmsqHmnInmg7PliLDmr5TovoPlpb3nmoTlrp7njrBcblxuICAgICAgICAvLyDpgq7nrrFcbiAgICAgICAgZW1haWw6IGZ1bmN0aW9uIChtYWlsKSB7XG4gICAgICAgICAgICBsZXQgcmVnRW1haWwgPSAvXltBLVphLXpkXSsoWy1fLl1bQS1aYS16ZF0rKSpAKFtBLVphLXpkXStbLS5dKStbQS1aYS16ZF17Miw1fSQvZztcbiAgICAgICAgICAgIHJldHVybiByZWdFbWFpbC50ZXN0KG1haWwpO1xuICAgICAgICB9LFxuICAgICAgICAvLyDmiYvmnLrlj7dcbiAgICAgICAgbW9iaWxlOiBmdW5jdGlvbiAodGVsKSB7XG4gICAgICAgICAgICBsZXQgcmVnTW9iaWxlID0gL14oKDEzWzAtOV0pfCgxNFs1fDddKXwoMTUoWzAtM118WzUtOV0pKXwoMThbMCw1LTldKXwoMTdbXFxkXSkpXFxkezh9JC9nO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVnTW9iaWxlLnRlc3QodGVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6buY6K6k5o+Q56S65L+h5oGvXG4gICAgICAgIEhJTlQ6IHtcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiBcIuWQjeensOWcqDQtMTblrZfnrKbku6XlhoVcIixcbiAgICAgICAgICAgICAgICBlcnJvcjogXCLlkI3np7DkuI3lkIjms5VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgICAgICAgaW5mbzogXCLlr4bnoIHlnKg4LTE25L2N5LmL6Ze0LOWMheWQq+iLseaWh+WSjOaVsOWtl1wiLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIuWvhueggeS4jeWQiOazlVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiBcIuWQiOazlemCrueuseagvOW8j+eahFwiLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIumCrueuseagvOW8j+S4jeWQiOazlVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9iaWxlOiB7XG4gICAgICAgICAgICAgICAgaW5mbzogXCLor7fovpPlhaUxMeS9jeaJi+acuuWPt1wiLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIuaJi+acuuWPt+agvOW8j+S4jeWQiOazlVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cbjxzdHlsZT5cbiAgICAvKiDovpPlhaXmoYbmoLflvI/pg6jliIYgKi9cbiAgICAudWktaW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC51aS1pbnB1dCBpbnB1dCB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgfVxuICAgIC51aS1pbnB1dCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbiAgICAudWktaW5wdXQgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsXG4gICAgLnVpLWlucHV0IGlucHV0OjotbW96LWlucHV0LXBsYWNlaG9sZGVyLFxuICAgIC51aS1pbnB1dCBpbnB1dDo6aW5wdXQtcGxhY2Vob2xkZXIsIHtcbiAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgfVxuICAgIC51aS1pbnB1dCAubm9ybWFsOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbiAgICB9XG4gICAgLnVpLWlucHV0IC5ub3JtYWw6Zm9jdXMge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICB9XG4gICAgLnVpLWlucHV0IGlucHV0OmRpc2FibGVkIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgfVxuICAgIC51aS1pbnB1dCBpbnB1dDpkaXNhYmxlZDpob3ZlciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgfVxuXG4gICAgLnVpLWlucHV0IC5lcnJvciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjcyNzU7XG4gICAgfVxuXG4gICAgLyog5o+Q56S65qGG5qC35byP6YOo5YiGICovXG5cbiAgICAvKiDlvLnlh7rmoYbnmoTmoLflvI/pg6jliIYgKi9cbiAgICAudWktaW5wdXQgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgY29sb3I6ICNmZjcyNzU7XG4gICAgfVxuICAgIC51aS1pbnB1dCAucG9wb3ZlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjJGMjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMzBweDtcbiAgICB9XG4gICAgLnVpLWlucHV0IC50b3AtcG9wb3ZlciB7XG4gICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgLnVpLWlucHV0IC5yaWdodC1wb3BvdmVyIHtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIGxlZnQ6IDI2MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIH1cbiAgICAudWktaW5wdXQgLmJvdHRvbS1wb3BvdmVyIHtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAudWktaW5wdXQgLmxlZnQtcG9wb3ZlciB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICByaWdodDogMjYwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgfVxuICAgIC8qIOWbm+S4quaWueWQkeeahOWwj+S4ieinkiAqL1xuICAgIC51aS1pbnB1dCAudG9wLXBvcG92ZXI6OmFmdGVyLFxuICAgIC51aS1pbnB1dCAucmlnaHQtcG9wb3Zlcjo6YWZ0ZXIsXG4gICAgLnVpLWlucHV0IC5ib3R0b20tcG9wb3Zlcjo6YWZ0ZXIsXG4gICAgLnVpLWlucHV0IC5sZWZ0LXBvcG92ZXI6OmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC51aS1pbnB1dCAudG9wLXBvcG92ZXI6OmFmdGVyIHtcbiAgICAgICAgYm90dG9tOiAtMjBweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjRkZGMkYyO1xuICAgIH1cbiAgICAudWktaW5wdXQgLnJpZ2h0LXBvcG92ZXI6OmFmdGVyIHtcbiAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgIHRvcDogMTUlO1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICNGRkYyRjI7XG4gICAgfVxuICAgIC51aS1pbnB1dCAuYm90dG9tLXBvcG92ZXI6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAtMjBweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjRkZGMkYyO1xuICAgIH1cbiAgICAudWktaW5wdXQgLmxlZnQtcG9wb3Zlcjo6YWZ0ZXIge1xuICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgIHRvcDogMTUlO1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI0ZGRjJGMjtcbiAgICB9XG4gICAgLyog5o+Q56S65paH5a2X5qC35byP6YOo5YiGICovXG4gICAgLnVpLWlucHV0IC5oaW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICB9XG4gICAgLnVpLWlucHV0IC50b3AtaGludCB7XG4gICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgLnVpLWlucHV0IC5yaWdodC1oaW50IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAyNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAudWktaW5wdXQgLmJvdHRvbS1oaW50IHtcbiAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAudWktaW5wdXQgLmxlZnQtaGludCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDI1MHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbjwvc3R5bGU+IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJzYW4tcm91dGVyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNhbi1yb3V0ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic2FuLXJvdXRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG5cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0XCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSByZXNvbHZlVVJMO1xuXG52YXIgX3BhcnNlVXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9wYXJzZVVybDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVVybCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLyoqXG4gKiDlsIYgVVJMIOS4reebuOWvuei3r+W+hOmDqOWIhuWxleW8gFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug6KaB5bGV5byA55qEdXJsXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZSDlvZPliY3miYDlsZ7njq/looPnmoR1cmxcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVVSTChzb3VyY2UsIGJhc2UpIHtcbiAgICB2YXIgc291cmNlTG9jID0gKDAsIF9wYXJzZVVybDJbJ2RlZmF1bHQnXSkoc291cmNlKTtcbiAgICB2YXIgYmFzZUxvYyA9ICgwLCBfcGFyc2VVcmwyWydkZWZhdWx0J10pKGJhc2UpO1xuXG4gICAgdmFyIHNvdXJjZVBhdGggPSBzb3VyY2VMb2MucGF0aDtcbiAgICBpZiAoc291cmNlUGF0aC5pbmRleE9mKCcvJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlU2VncyA9IHNvdXJjZVBhdGguc3BsaXQoJy8nKTtcbiAgICB2YXIgYmFzZVNlZ3MgPSBiYXNlTG9jLnBhdGguc3BsaXQoJy8nKTtcbiAgICBiYXNlU2Vncy5wb3AoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlU2Vncy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc2VnID0gc291cmNlU2Vnc1tpXTtcbiAgICAgICAgc3dpdGNoIChzZWcpIHtcbiAgICAgICAgICAgIGNhc2UgJy4uJzpcbiAgICAgICAgICAgICAgICBiYXNlU2Vncy5wb3AoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBiYXNlU2Vncy5wdXNoKHNlZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYmFzZVNlZ3NbMF0gIT09ICcnKSB7XG4gICAgICAgIGJhc2VTZWdzLnVuc2hpZnQoJycpO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlU2Vncy5qb2luKCcvJykgKyAoc291cmNlTG9jLnF1ZXJ5U3RyaW5nID8gJz8nICsgc291cmNlTG9jLnF1ZXJ5U3RyaW5nIDogJycpO1xufSAvKipcbiAgICogc2FuLXJvdXRlclxuICAgKiBDb3B5cmlnaHQgMjAxNyBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAqXG4gICAqIEBmaWxlIOWwhiBVUkwg5Lit55u45a+56Lev5b6E6YOo5YiG5bGV5byAXG4gICAqIEBhdXRob3IgZXJyb3JyaWtcbiAgICovXG5cbi8qKiovIH0sXG4vKiAxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHBhcnNlVVJMO1xuLyoqXG4gKiBzYW4tcm91dGVyXG4gKiBDb3B5cmlnaHQgMjAxNyBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGZpbGUg6Kej5p6QVVJMXG4gKiBAYXV0aG9yIGVycm9ycmlrXG4gKi9cblxuLyoqXG4gKiDop6PmnpBVUkzvvIzov5Tlm57ljIXlkKtwYXRo44CBcXVlcnnjgIFxdWVyeVN0cmluZ+eahOWvueixoVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg6KaB6Kej5p6Q55qEdXJsXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVVJMKHVybCkge1xuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIGhhc2g6ICcnLFxuICAgICAgICBxdWVyeVN0cmluZzogJycsXG4gICAgICAgIHBhcmFtczoge30sXG4gICAgICAgIHF1ZXJ5OiB7fSxcbiAgICAgICAgcGF0aDogdXJsXG4gICAgfTtcblxuICAgIC8vIHBhcnNlIGhhc2hcbiAgICB2YXIgaGFzaFN0YXJ0ID0gcmVzdWx0LnBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNoU3RhcnQgPj0gMCkge1xuICAgICAgICByZXN1bHQuaGFzaCA9IHJlc3VsdC5wYXRoLnNsaWNlKGhhc2hTdGFydCArIDEpO1xuICAgICAgICByZXN1bHQucGF0aCA9IHJlc3VsdC5wYXRoLnNsaWNlKDAsIGhhc2hTdGFydCk7XG4gICAgfVxuXG4gICAgLy8gcGFyc2UgcXVlcnlcbiAgICB2YXIgcXVlcnkgPSByZXN1bHQucXVlcnk7XG4gICAgdmFyIHF1ZXJ5U3RhcnQgPSByZXN1bHQucGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgaWYgKHF1ZXJ5U3RhcnQgPj0gMCkge1xuICAgICAgICByZXN1bHQucXVlcnlTdHJpbmcgPSByZXN1bHQucGF0aC5zbGljZShxdWVyeVN0YXJ0ICsgMSk7XG4gICAgICAgIHJlc3VsdC5wYXRoID0gcmVzdWx0LnBhdGguc2xpY2UoMCwgcXVlcnlTdGFydCk7XG5cbiAgICAgICAgcmVzdWx0LnF1ZXJ5U3RyaW5nLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocXVlcnlTZWcpIHtcbiAgICAgICAgICAgIC8vIOiAg+iZkeWIsOacieWPr+iDveWboOS4uuacquWkhOeQhui9rOS5iemXrumimO+8jFxuICAgICAgICAgICAgLy8g5a+86Ie0dmFsdWXkuK3lrZjlnKgqKj0qKuWtl+espu+8jOWboOatpOS4jeS9v+eUqGBzcGxpdGDlh73mlbBcbiAgICAgICAgICAgIHZhciBlcXVhbEluZGV4ID0gcXVlcnlTZWcuaW5kZXhPZignPScpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gJyc7XG4gICAgICAgICAgICBpZiAoZXF1YWxJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHF1ZXJ5U2VnLnNsaWNlKGVxdWFsSW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICBxdWVyeVNlZyA9IHF1ZXJ5U2VnLnNsaWNlKDAsIGVxdWFsSW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KHF1ZXJ5U2VnKTtcbiAgICAgICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgICAgICAgICAgLy8g5bey57uP5a2Y5Zyo6L+Z5Liq5Y+C5pWw77yM5LiU5paw55qE5YC85LiN5Li656m65pe277yM5oqK5Y6f5p2l55qE5YC85Y+Y5oiQ5pWw57uEXG4gICAgICAgICAgICBpZiAocXVlcnkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgICAgICAgICAgcXVlcnlba2V5XSA9IFtdLmNvbmNhdChxdWVyeVtrZXldLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnlba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogc2FuLXJvdXRlclxuICogQ29weXJpZ2h0IDIwMTcgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBmaWxlIOaPkOS+m+S6i+S7tuebuOWFs+aTjeS9nOeahOWfuuexu1xuICogQGF1dGhvciBvdGFrdXN0YXksIGVycm9ycmlrXG4gKi9cblxudmFyIEV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50VGFyZ2V0KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRUYXJnZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOazqOWGjOS4gOS4quS6i+S7tuWkhOeQhuWHveaVsFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg5LqL5Lu255qE57G75Z6LXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbiB8IGJvb2xlYW59IGZuIOS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgICAqL1xuICAgIEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKHR5cGUsIGZuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50TGlzdGVuZXJzW3R5cGVdKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1t0eXBlXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbdHlwZV0ucHVzaChmbik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOazqOmUgOS4gOS4quS6i+S7tuWkhOeQhuWHveaVsFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg5LqL5Lu255qE57G75Z6L77yM5aaC5p6c5YC85Li6YCpg5LuF5Lya5rOo6ZSA6YCa6L+HYCpg5Li657G75Z6L5rOo5YaM55qE5LqL5Lu277yM5bm25LiN5Lya5bCG5omA5pyJ5LqL5Lu25rOo6ZSAXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXSDkuovku7bnmoTlpITnkIblh73mlbDvvIzml6DmraTlj4LmlbDliJnms6jplIBgdHlwZWDmjIflrprnsbvlnovnmoTmiYDmnInkuovku7blpITnkIblh73mlbBcbiAgICAgKi9cblxuXG4gICAgRXZlbnRUYXJnZXQucHJvdG90eXBlLnVuID0gZnVuY3Rpb24gdW4odHlwZSwgZm4pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudExpc3RlbmVycyB8fCAhdGhpcy5fZXZlbnRMaXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZm4pIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW3R5cGVdID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRMaXN0ZW5lcnNbdHlwZV07XG4gICAgICAgICAgICB2YXIgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyc1tsZW5dID09PSBmbikge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGxlbiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOinpuWPkeaMh+Wumuexu+Wei+eahOS6i+S7tlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUg5LqL5Lu257G75Z6LXG4gICAgICogQHBhcmFtIHsqfSBbYXJnc10g5LqL5Lu25a+56LGhXG4gICAgICovXG5cblxuICAgIEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gZmlyZSh0eXBlLCBhcmdzKSB7XG4gICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBldmVudCB0eXBlIHNwZWNpZmllZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50TGlzdGVuZXJzICYmIHRoaXMuX2V2ZW50TGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyc1tpXShhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gRXZlbnRUYXJnZXQ7XG59KCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEV2ZW50VGFyZ2V0O1xuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfbWFpbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbnZhciBfcmVzb2x2ZVVybCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfcmVzb2x2ZVVybDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXNvbHZlVXJsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKipcbiAqIHNhbi1yb3V0ZXJcbiAqIENvcHlyaWdodCAyMDE3IEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAZmlsZSDot6/nlLHpk77mjqXnmoQgU2FuIOe7hOS7tlxuICogQGF1dGhvciBlcnJvcnJpa1xuICovXG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgICB0ZW1wbGF0ZTogJzxhIGhyZWY9XCJ7e2hyZWZ9fVwiXFxuICAgICAgICBvbmNsaWNrPVwicmV0dXJuIGZhbHNlO1wiXFxuICAgICAgICBvbi1jbGljaz1cImNsaWNrZXIoJGV2ZW50KVwiXFxuICAgICAgICB0YXJnZXQ9XCJ7e3RhcmdldH19XCJcXG4gICAgICAgIGNsYXNzPVwie3tjbGFzc319XCJcXG4gICAgICAgIHN0eWxlPVwie3tzdHlsZX19XCJcXG4gICAgICAgID5cXG4gICAgICAgIDxzbG90Pjwvc2xvdD5cXG4gICAgPC9hPicsXG5cbiAgICBjbGlja2VyOiBmdW5jdGlvbiBjbGlja2VyKGUpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB0aGlzLmRhdGEuZ2V0KCdocmVmJyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBocmVmID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgX21haW4ucm91dGVyLmxvY2F0b3IucmVkaXJlY3QoaHJlZi5yZXBsYWNlKC9eIy8sICcnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaHJlZjogZnVuY3Rpb24gaHJlZigpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLmRhdGEuZ2V0KCd0bycpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaHJlZiA9ICgwLCBfcmVzb2x2ZVVybDJbJ2RlZmF1bHQnXSkodXJsLCBfbWFpbi5yb3V0ZXIubG9jYXRvci5jdXJyZW50KTtcbiAgICAgICAgICAgIGlmIChfbWFpbi5yb3V0ZXIubW9kZSA9PT0gJ2hhc2gnKSB7XG4gICAgICAgICAgICAgICAgaHJlZiA9ICcjJyArIGhyZWY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBocmVmO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqKi8gfSxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V2ZW50VGFyZ2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9ldmVudFRhcmdldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudFRhcmdldCk7XG5cbnZhciBfcmVzb2x2ZVVybCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfcmVzb2x2ZVVybDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXNvbHZlVXJsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogc2FuLXJvdXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29weXJpZ2h0IDIwMTcgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBmaWxlIGhhc2gg5qih5byP5Zyw5Z2A55uR5ZCs5ZmoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAYXV0aG9yIGVycm9ycmlrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuLyoqXG4gKiDojrflj5blvZPliY1VUkxcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgIC8vIEZpcmVmb3jkuItgbG9jYXRpb24uaGFzaGDlrZjlnKjoh6rliqjop6PnoIHnmoTmg4XlhrXvvIxcbiAgICAvLyDmr5TlpoJoYXNo55qE5YC85pivKiphYmMlM2RlZioq77yMXG4gICAgLy8g5ZyoRmlyZWZveOS4i+iOt+WPluS8muaIkOS4uioqYWJjPWRlZioqXG4gICAgLy8g5Li65LqG6YG/5YWN6L+Z5LiA5oOF5Ya177yM6ZyA6KaB5LuOYGxvY2F0aW9uLmhyZWZg5Lit5YiG6KejXG4gICAgdmFyIGluZGV4ID0gbG9jYXRpb24uaHJlZi5pbmRleE9mKCcjJyk7XG4gICAgdmFyIHVybCA9IGluZGV4IDwgMCA/ICcvJyA6IGxvY2F0aW9uLmhyZWYuc2xpY2UoaW5kZXggKyAxKSB8fCAnLyc7XG5cbiAgICByZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIGhhc2gg5qih5byP5Zyw5Z2A55uR5ZCs5ZmoXG4gKlxuICogQGNsYXNzXG4gKi9cblxudmFyIExvY2F0b3IgPSBmdW5jdGlvbiAoX0V2ZW50VGFyZ2V0KSB7XG4gICAgX2luaGVyaXRzKExvY2F0b3IsIF9FdmVudFRhcmdldCk7XG5cbiAgICAvKipcbiAgICAgKiDmnoTpgKDlh73mlbBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBMb2NhdG9yKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYXRvcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0V2ZW50VGFyZ2V0LmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLmN1cnJlbnQgPSBnZXRMb2NhdGlvbigpO1xuICAgICAgICBfdGhpcy5yZWZlcnJlciA9ICcnO1xuXG4gICAgICAgIF90aGlzLmhhc2hDaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVkaXJlY3QoZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvIDlp4vnm5HlkKwgdXJsIOWPmOWMllxuICAgICAqL1xuXG5cbiAgICBMb2NhdG9yLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5oYXNoQ2hhbmdlSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbmhhc2hjaGFuZ2UnLCB0aGlzLmhhc2hDaGFuZ2VIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDlgZzmraLnm5HlkKxcbiAgICAgKi9cblxuXG4gICAgTG9jYXRvci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLmhhc2hDaGFuZ2VIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LmRldGFjaEV2ZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuZGV0YWNoRXZlbnQoJ29uaGFzaGNoYW5nZScsIHRoaXMuaGFzaENoYW5nZUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOmHjeWumuWQkVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCDph43lrprlkJHnmoTlnLDlnYBcbiAgICAgKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMg6YeN5a6a5ZCR55qE6KGM5Li66YWN572uXG4gICAgICogQHBhcmFtIHtib29sZWFuP30gb3B0aW9ucy5mb3JjZSDmmK/lkKblvLrliLbliLfmlrBcbiAgICAgKi9cblxuXG4gICAgTG9jYXRvci5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdCh1cmwpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHsgZm9yY2U6IGZhbHNlIH07XG5cbiAgICAgICAgdXJsID0gKDAsIF9yZXNvbHZlVXJsMlsnZGVmYXVsdCddKSh1cmwsIHRoaXMuY3VycmVudCk7XG4gICAgICAgIHZhciByZWZlcnJlciA9IHRoaXMuY3VycmVudDtcblxuICAgICAgICB2YXIgaXNDaGFuZ2VkID0gdXJsICE9PSByZWZlcnJlcjtcbiAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZlcnJlciA9IHJlZmVycmVyO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdXJsO1xuICAgICAgICAgICAgbG9jYXRpb24uaGFzaCA9IHVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlZmVycmVyID0gdGhpcy5yZWZlcnJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoaXNDaGFuZ2VkIHx8IG9wdGlvbnMuZm9yY2UpICYmICFvcHRpb25zLnNpbGVudCkge1xuICAgICAgICAgICAgdGhpcy5maXJlKCdyZWRpcmVjdCcsIHsgdXJsOiB1cmwsIHJlZmVycmVyOiByZWZlcnJlciB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDliLfmlrDlvZPliY0gdXJsXG4gICAgICovXG5cblxuICAgIExvY2F0b3IucHJvdG90eXBlLnJlbG9hZCA9IGZ1bmN0aW9uIHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5yZWRpcmVjdCh0aGlzLmN1cnJlbnQsIHsgZm9yY2U6IHRydWUgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBMb2NhdG9yO1xufShfZXZlbnRUYXJnZXQyWydkZWZhdWx0J10pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBMb2NhdG9yO1xuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXZlbnRUYXJnZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX2V2ZW50VGFyZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50VGFyZ2V0KTtcblxudmFyIF9yZXNvbHZlVXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9yZXNvbHZlVXJsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc29sdmVVcmwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzYW4tcm91dGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb3B5cmlnaHQgMjAxNyBCYWlkdSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGZpbGUgaHRtbDUg5qih5byP5Zyw5Z2A55uR5ZCs5ZmoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAYXV0aG9yIGVycm9ycmlrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuLyoqXG4gKiDojrflj5blvZPliY1VUkxcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaDtcbn1cblxuLyoqXG4gKiBodG1sNSDmqKHlvI/lnLDlnYDnm5HlkKzlmahcbiAqXG4gKiBAY2xhc3NcbiAqL1xuXG52YXIgTG9jYXRvciA9IGZ1bmN0aW9uIChfRXZlbnRUYXJnZXQpIHtcbiAgICBfaW5oZXJpdHMoTG9jYXRvciwgX0V2ZW50VGFyZ2V0KTtcblxuICAgIC8qKlxuICAgICAqIOaehOmAoOWHveaVsFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIExvY2F0b3IoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhdG9yKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfRXZlbnRUYXJnZXQuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMuY3VycmVudCA9IGdldExvY2F0aW9uKCk7XG4gICAgICAgIF90aGlzLnJlZmVycmVyID0gJyc7XG5cbiAgICAgICAgX3RoaXMucG9wc3RhdGVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVmZXJyZXIgPSBfdGhpcy5jdXJyZW50O1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudCA9IGdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgICAgIF90aGlzLmZpcmUoJ3JlZGlyZWN0Jywge1xuICAgICAgICAgICAgICAgIHVybDogX3RoaXMuY3VycmVudCxcbiAgICAgICAgICAgICAgICByZWZlcnJlcjogX3RoaXMucmVmZXJyZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5byA5aeL55uR5ZCsIHVybCDlj5jljJZcbiAgICAgKi9cblxuXG4gICAgTG9jYXRvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5wb3BzdGF0ZUhhbmRsZXIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDlgZzmraLnm5HlkKxcbiAgICAgKi9cblxuXG4gICAgTG9jYXRvci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMucG9wc3RhdGVIYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog6YeN5a6a5ZCRXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIOmHjeWumuWQkeeahOWcsOWdgFxuICAgICAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyDph43lrprlkJHnmoTooYzkuLrphY3nva5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW4/fSBvcHRpb25zLmZvcmNlIOaYr+WQpuW8uuWItuWIt+aWsFxuICAgICAqL1xuXG5cbiAgICBMb2NhdG9yLnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KHVybCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogeyBmb3JjZTogZmFsc2UgfTtcblxuICAgICAgICB1cmwgPSAoMCwgX3Jlc29sdmVVcmwyWydkZWZhdWx0J10pKHVybCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgdmFyIHJlZmVycmVyID0gdGhpcy5jdXJyZW50O1xuXG4gICAgICAgIHZhciBpc0NoYW5nZWQgPSB1cmwgIT09IHJlZmVycmVyO1xuXG4gICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVmZXJyZXIgPSByZWZlcnJlcjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHVybDtcblxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChpc0NoYW5nZWQgfHwgb3B0aW9ucy5mb3JjZSkgJiYgIW9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ3JlZGlyZWN0JywgeyB1cmw6IHVybCwgcmVmZXJyZXI6IHJlZmVycmVyIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOWIt+aWsOW9k+WJjSB1cmxcbiAgICAgKi9cblxuXG4gICAgTG9jYXRvci5wcm90b3R5cGUucmVsb2FkID0gZnVuY3Rpb24gcmVsb2FkKCkge1xuICAgICAgICB0aGlzLmZpcmUoJ3JlZGlyZWN0Jywge1xuICAgICAgICAgICAgdXJsOiB0aGlzLmN1cnJlbnQsXG4gICAgICAgICAgICByZWZlcnJlcjogdGhpcy5yZWZlcnJlclxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIExvY2F0b3I7XG59KF9ldmVudFRhcmdldDJbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExvY2F0b3I7XG5cblxuTG9jYXRvci5pc1N1cHBvcnQgPSAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeTtcblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5MaW5rID0gZXhwb3J0cy5yb3V0ZXIgPSBleHBvcnRzLlJvdXRlciA9IGV4cG9ydHMudmVyc2lvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9oYXNoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9oYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc2gpO1xuXG52YXIgX2h0bWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX2h0bWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHRtbCk7XG5cbnZhciBfcGFyc2VVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX3BhcnNlVXJsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlVXJsKTtcblxudmFyIF9saW5rID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF9saW5rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmspO1xuXG52YXIgX2VsZW1lbnRTZWxlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBfZWxlbWVudFNlbGVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VsZW1lbnRTZWxlY3Rvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH0gLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogc2FuLXJvdXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvcHlyaWdodCAyMDE3IEJhaWR1IEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBmaWxlIOS4u+aooeWdl1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBhdXRob3IgZXJyb3JyaWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIHJvdXRlSUQgPSAweDU5NDJiO1xudmFyIGd1aWQgPSBmdW5jdGlvbiBndWlkKCkge1xuICAgIHJldHVybiAoKytyb3V0ZUlEKS50b1N0cmluZygpO1xufTtcblxuZnVuY3Rpb24gaXNDb21wb25lbnQoQykge1xuICAgIHJldHVybiBDLnByb3RvdHlwZSAmJiAoQy5wcm90b3R5cGUubm9kZVR5cGUgPT09IDUgfHwgQy5wcm90b3R5cGUuX3R5cGUgPT09ICdzYW4tY21wdCcpO1xufVxuXG4vKipcbiAqIOeJiOacrOWPt1xuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciB2ZXJzaW9uID0gZXhwb3J0cy52ZXJzaW9uID0gJzEuMi4wJztcblxuLyoqXG4gKiDot6/nlLHlmajnsbtcbiAqXG4gKiBAY2xhc3NcbiAqL1xuXG52YXIgUm91dGVyID0gZXhwb3J0cy5Sb3V0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKipcbiAgICAgKiDmnoTpgKDlh73mlbBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyDliJ3lp4vljJblj4LmlbBcbiAgICAgKiBAcGFyYW0ge3N0cmluZz99IG9wdGlvbnMubW9kZSDot6/nlLHmqKHlvI/vvIxoYXNoIHwgaHRtbDVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSb3V0ZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICAgICAgX3JlZiRtb2RlID0gX3JlZi5tb2RlLFxuICAgICAgICAgICAgbW9kZSA9IF9yZWYkbW9kZSA9PT0gdW5kZWZpbmVkID8gJ2hhc2gnIDogX3JlZiRtb2RlO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZXIpO1xuXG4gICAgICAgIHRoaXMucm91dGVzID0gW107XG4gICAgICAgIHRoaXMucm91dGVBbGl2ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogbG9jYXRvciByZWRpcmVjdCDkuovku7bnm5HlkKzlh73mlbBcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGUgbG9jYXRvcuS6i+S7tuWvueixoVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sb2NhdG9yUmVkaXJlY3RIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSAoMCwgX3BhcnNlVXJsMlsnZGVmYXVsdCddKShlLnVybCk7XG4gICAgICAgICAgICB2YXIgcm91dGVJdGVtID0gdm9pZCAwO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX3RoaXMucm91dGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gX3RoaXMucm91dGVzW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBpdGVtLnJ1bGUuZXhlYyh1cmwucGF0aCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJdGVtID0gaXRlbTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBmaWxsIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IGl0ZW0ua2V5cyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBtYXRjaC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbal0gfHwgajtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IG1hdGNoW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsLnF1ZXJ5W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybC5wYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZmlsbCByZWZlcnJlclxuICAgICAgICAgICAgICAgICAgICB1cmwucmVmZXJyZXIgPSBlLnJlZmVycmVyO1xuICAgICAgICAgICAgICAgICAgICB1cmwuY29uZmlnID0gaXRlbS5jb25maWc7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSAxO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGxpc3RlbmVyIOS6i+S7tuWvueixoVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lckV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIGhhc2g6IHVybC5oYXNoLFxuICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nOiB1cmwucXVlcnlTdHJpbmcsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHVybC5xdWVyeSxcbiAgICAgICAgICAgICAgICBwYXRoOiB1cmwucGF0aCxcbiAgICAgICAgICAgICAgICByZWZlcnJlcjogdXJsLnJlZmVycmVyLFxuICAgICAgICAgICAgICAgIGNvbmZpZzogdXJsLmNvbmZpZyxcbiAgICAgICAgICAgICAgICByZXN1bWU6IG5leHQsXG4gICAgICAgICAgICAgICAgc3VzcGVuZDogZnVuY3Rpb24gc3VzcGVuZCgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAwO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWwneivlei/kOihjOS4i+S4gOS4qmxpc3RlbmVyXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGlubmVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBkb05leHQgPSBmdW5jdGlvbiBkb05leHQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IF90aGlzLmxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxpc3RlbmVyc1tpXS5jYWxsKF90aGlzLCBsaXN0ZW5lckV2ZW50LCB1cmwuY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUFjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDov5DooYzkuIvkuIDkuKpsaXN0ZW5lclxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBpbm5lclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgZG9OZXh0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6L+Q6KGM6Lev55Sx6KGM5Li6XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQGlubmVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciByb3V0ZUFjdGlvbiA9IGZ1bmN0aW9uIHJvdXRlQWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChyb3V0ZUl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZG9Sb3V0ZShyb3V0ZUl0ZW0sIHVybCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9IF90aGlzLnJvdXRlQWxpdmVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yb3V0ZUFsaXZlc1tsZW5dLmNvbXBvbmVudC5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yb3V0ZUFsaXZlcy5zcGxpY2UobGVuLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRvTmV4dCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TW9kZShtb2RlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDot6/nlLHnm5HlkKzlmahcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oZSwgY29uZmlnKX0gbGlzdGVuZXIg55uR5ZCs5ZmoXG4gICAgICovXG5cblxuICAgIFJvdXRlci5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDnp7vpmaTot6/nlLHnm5HlkKzlmahcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOebkeWQrOWZqFxuICAgICAqL1xuXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLnVubGlzdGVuID0gZnVuY3Rpb24gdW5saXN0ZW4obGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnNbbGVuXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UobGVuLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDmiafooYzot6/nlLFcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJvdXRlSXRlbSDot6/nlLHpoblcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZSDot6/nlLHkv6Hmga9cbiAgICAgKi9cblxuXG4gICAgUm91dGVyLnByb3RvdHlwZS5kb1JvdXRlID0gZnVuY3Rpb24gZG9Sb3V0ZShyb3V0ZUl0ZW0sIGUpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGlzVXBkYXRlQWxpdmUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGxlbiA9IHRoaXMucm91dGVBbGl2ZXMubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgdmFyIHJvdXRlQWxpdmUgPSB0aGlzLnJvdXRlQWxpdmVzW2xlbl07XG5cbiAgICAgICAgICAgIGlmIChyb3V0ZUFsaXZlLmlkID09PSByb3V0ZUl0ZW0uaWQpIHtcbiAgICAgICAgICAgICAgICByb3V0ZUFsaXZlLmNvbXBvbmVudC5kYXRhLnNldCgncm91dGUnLCBlKTtcbiAgICAgICAgICAgICAgICByb3V0ZUFsaXZlLmNvbXBvbmVudC5fY2FsbEhvb2soJ3JvdXRlJyk7XG4gICAgICAgICAgICAgICAgaXNVcGRhdGVBbGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlQWxpdmUuY29tcG9uZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlQWxpdmVzLnNwbGljZShsZW4sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1VwZGF0ZUFsaXZlKSB7XG4gICAgICAgICAgICBpZiAocm91dGVJdGVtLkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXBvbmVudChyb3V0ZUl0ZW0uQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaENtcHQocm91dGVJdGVtLCBlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUl0ZW0uQ29tcG9uZW50KCkudGhlbihmdW5jdGlvbiAoQ21wdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcG9uZW50KENtcHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJdGVtLkNvbXBvbmVudCA9IENtcHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKENtcHQuX19lc01vZHVsZSAmJiBpc0NvbXBvbmVudChDbXB0WydkZWZhdWx0J10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJdGVtLkNvbXBvbmVudCA9IENtcHRbJ2RlZmF1bHQnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5hdHRhY2hDbXB0KHJvdXRlSXRlbSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGVJdGVtLmhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLmF0dGFjaENtcHQgPSBmdW5jdGlvbiBhdHRhY2hDbXB0KHJvdXRlSXRlbSwgZSkge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gbmV3IHJvdXRlSXRlbS5Db21wb25lbnQoKTtcbiAgICAgICAgY29tcG9uZW50LmRhdGEuc2V0KCdyb3V0ZScsIGUpO1xuICAgICAgICBjb21wb25lbnQuX2NhbGxIb29rKCdyb3V0ZScpO1xuXG4gICAgICAgIHZhciB0YXJnZXQgPSByb3V0ZUl0ZW0udGFyZ2V0O1xuICAgICAgICB2YXIgdGFyZ2V0RWwgPSAoMCwgX2VsZW1lbnRTZWxlY3RvcjJbJ2RlZmF1bHQnXSkodGFyZ2V0KTtcblxuICAgICAgICBpZiAoIXRhcmdldEVsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4tUk9VVEVSIEVSUk9SXSAnICsgJ0F0dGFjaCBmYWlsZWQsIHRhcmdldCBlbGVtZW50IFwiJyArIHJvdXRlSXRlbS50YXJnZXQgKyAnXCIgaXMgbm90IGZvdW5kLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50LmF0dGFjaCh0YXJnZXRFbCk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZUFsaXZlcy5wdXNoKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICAgICAgaWQ6IHJvdXRlSXRlbS5pZFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5re75Yqg6Lev55Sx6aG5XG4gICAgICog5b2T6KeE5YiZ5Yy56YWN5pe277yM6Lev55Sx5bCG5LyY5YWI5bCGQ29tcG9uZW505riy5p+T5YiwdGFyZ2V05Lit44CC5aaC5p6c5rKh5pyJ5YyF5ZCrQ29tcG9uZW5077yM5YiZ5omn6KGMaGFuZGxlcuWHveaVsFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOi3r+eUsemhuemFjee9rlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gY29uZmlnLnJ1bGUg6Lev55Sx6KeE5YiZXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbj99IGNvbmZpZy5oYW5kbGVyIOi3r+eUseWHveaVsFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb24/fSBjb25maWcuQ29tcG9uZW50IOi3r+eUsee7hOS7tlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudGFyZ2V0IOi3r+eUsee7hOS7tuimgea4suafk+WIsOeahOebruagh+S9jee9rlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gc2FuLXJvdXRlciDlrp7kvotcbiAgICAgKi9cblxuXG4gICAgUm91dGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQoY29uZmlnKSB7XG4gICAgICAgIHZhciBydWxlID0gY29uZmlnLnJ1bGUsXG4gICAgICAgICAgICBoYW5kbGVyID0gY29uZmlnLmhhbmRsZXIsXG4gICAgICAgICAgICBfY29uZmlnJHRhcmdldCA9IGNvbmZpZy50YXJnZXQsXG4gICAgICAgICAgICB0YXJnZXQgPSBfY29uZmlnJHRhcmdldCA9PT0gdW5kZWZpbmVkID8gJyNtYWluJyA6IF9jb25maWckdGFyZ2V0LFxuICAgICAgICAgICAgQ29tcG9uZW50ID0gY29uZmlnLkNvbXBvbmVudDtcblxuICAgICAgICB2YXIga2V5cyA9IFsnJ107XG5cbiAgICAgICAgaWYgKHR5cGVvZiBydWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8g5rKh55SocGF0aC10by1yZWdleHDvvIzmmoLml7bkuI3mj5Dkvpvov5nkuYjlpJrlip/og73mlK/mjIFcbiAgICAgICAgICAgIHZhciByZWdUZXh0ID0gcnVsZS5yZXBsYWNlKC9cXC86KFthLXowLTlfLV0rKSg/PVxcL3wkKS9pZywgZnVuY3Rpb24gKG1hdGNoLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy8oW14vXFxcXHNdKyknO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJ1bGUgPSBuZXcgUmVnRXhwKCdeJyArIHJlZ1RleHQgKyAnJCcsICdpJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIShydWxlIGluc3RhbmNlb2YgUmVnRXhwKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOLVJPVVRFUiBFUlJPUl0gUnVsZSBtdXN0IGJlIHN0cmluZyBvciBSZWdFeHAhJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaWQgPSBndWlkKCk7XG4gICAgICAgIHRoaXMucm91dGVzLnB1c2goeyBpZDogaWQsIHJ1bGU6IHJ1bGUsIGhhbmRsZXI6IGhhbmRsZXIsIGtleXM6IGtleXMsIHRhcmdldDogdGFyZ2V0LCBDb21wb25lbnQ6IENvbXBvbmVudCwgY29uZmlnOiBjb25maWcgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIOWQr+WKqOi3r+eUseWKn+iDvVxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBzYW4tcm91dGVyIOWunuS+i1xuICAgICAqL1xuXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubG9jYXRvci5vbigncmVkaXJlY3QnLCB0aGlzLmxvY2F0b3JSZWRpcmVjdEhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5sb2NhdG9yLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLmxvY2F0b3IucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog5YGc5q2i6Lev55Sx5Yqf6IO9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHNhbi1yb3V0ZXIg5a6e5L6LXG4gICAgICovXG5cblxuICAgIFJvdXRlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHRoaXMubG9jYXRvci51bigncmVkaXJlY3QnLCB0aGlzLmxvY2F0b3JSZWRpcmVjdEhhbmRsZXIpO1xuICAgICAgICB0aGlzLmxvY2F0b3Iuc3RvcCgpO1xuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7ot6/nlLHmqKHlvI9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIOi3r+eUseaooeW8j++8jGhhc2ggfCBodG1sNVxuICAgICAqIEByZXR1cm4ge09iamVjdH0gc2FuLXJvdXRlciDlrp7kvotcbiAgICAgKi9cblxuXG4gICAgUm91dGVyLnByb3RvdHlwZS5zZXRNb2RlID0gZnVuY3Rpb24gc2V0TW9kZShtb2RlKSB7XG4gICAgICAgIG1vZGUgPSBtb2RlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IG1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG5cbiAgICAgICAgdmFyIHJlc3RhcnQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIHJlc3RhcnQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdoYXNoJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2F0b3IgPSBuZXcgX2hhc2gyWydkZWZhdWx0J10oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2h0bWw1JzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2F0b3IgPSBuZXcgX2h0bWwyWydkZWZhdWx0J10oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFJvdXRlcjtcbn0oKTtcblxuLyoqXG4gKiDpu5jorqTnmoTot6/nlLHlmajlrp7kvotcbiAqXG4gKiBAdHlwZSB7Um91dGVyfVxuICovXG5cblxudmFyIHJvdXRlciA9IGV4cG9ydHMucm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG4vKipcbiAqIOi3r+eUsemTvuaOpeeahCBTYW4g57uE5Lu2XG4gKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydHMuTGluayA9IF9saW5rMlsnZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZWxlbWVudFNlbGVjdG9yO1xuLypcbipcbiogQGZpbGUg6YCJ5oup5ZmoXG4qIEBhdXRob3IgdmluY2VudCBsYXUvNDEzODkzMDkzQHFxLmNvbVxuKi9cblxuLyoqXG4gKiDlhYPntKDpgInmi6nlmahcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xFbGVtZW50fSBzZWxlY3RvciDpgInmi6nlmahcbiAqIEByZXR1cm5zIHtFbGVtZW50fVxuICovXG5mdW5jdGlvbiBlbGVtZW50U2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG5cbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IucmVwbGFjZSgvIy9pLCAnJykpO1xuICAgIH1cbn1cblxuLyoqKi8gfVxuLyoqKioqKi8gXSk7XG59KTsiLCIvKipcbiAqIFNhblxuICogQ29weXJpZ2h0IDIwMTYgQmFpZHUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBmaWxlIOS4u+aWh+S7tlxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKiAgICAgICAgIG90YWt1c3RheShvdGFrdXN0YXlAZ21haWwuY29tKVxuICogICAgICAgICBqdW5tZXIoanVubWVyQGZveG1haWwuY29tKVxuICovXG5cbihmdW5jdGlvbiAocm9vdCkge1xuICAgIC8vIOS6uuW3peiwg+aVtOaJk+WMheS7o+eggemhuuW6j++8jOmAmui/h+azqOmHiuaJi+W3peWGmeS4gOS6m+S+nei1llxuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9ndWlkJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2VtcHR5Jyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2V4dGVuZCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9pbmhlcml0cycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9lYWNoJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2NvbnRhaW5zJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2JpbmQnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvb24nKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvdW4nKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvc3ZnLXRhZ3MnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvY3JlYXRlLWVsJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9uZXh0LXRpY2snKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvaWUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL2Jyb3dzZXIvaWUtb2xkLXRoYW4tOScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vYnJvd3Nlci9pbnB1dC1ldmVudC1jb21wYXRpYmxlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9icm93c2VyL2F1dG8tY2xvc2UtdGFncycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdXRpbC9kYXRhLXR5cGVzLmpzJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZS1kYXRhLXR5cGVzLWNoZWNrZXIuanMnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3BhcnNlci93YWxrZXInKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3BhcnNlci9jcmVhdGUtYS1ub2RlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9wYXJzZXIvcGFyc2UtdGVtcGxhdGUnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vcnVudGltZS9kYXRhLWNoYW5nZS10eXBlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi9ydW50aW1lL2RlZmF1bHQtZmlsdGVycycpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdmlldy9saWZlLWN5Y2xlJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L25vZGUtdHlwZScpO1xuLy8gICAgIC8vIHJlcXVpcmUoJy4vdmlldy9nZXQtcHJvcC1oYW5kbGVyJyk7XG4vLyAgICAgLy8gcmVxdWlyZSgnLi92aWV3L2lzLWRhdGEtY2hhbmdlLWJ5LWVsZW1lbnQnKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3ZpZXcvZXZlbnQtZGVjbGFyYXRpb24tbGlzdGVuZXInKTtcbi8vICAgICAvLyByZXF1aXJlKCcuL3ZpZXcvY3JlYXRlLW5vZGUnKTtcblxuXG4gICAgLyoqXG4gKiBAZmlsZSDnlJ/miJDllK/kuIBpZFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vKipcbiAqIOWUr+S4gGlk55qE6LW35aeL5YC8XG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG52YXIgZ3VpZEluZGV4ID0gMTtcblxuLyoqXG4gKiDllK/kuIBpZOeahOWJjee8gFxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge3N0cmluZ31cbiAqL1xudmFyIGd1aWRQcmVmaXggPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKDE2KS5zbGljZSg4KTtcblxuLyoqXG4gKiDojrflj5bllK/kuIBpZFxuICpcbiAqIEBpbm5lclxuICogQHJldHVybiB7c3RyaW5nfSDllK/kuIBpZFxuICovXG5mdW5jdGlvbiBndWlkKCkge1xuICAgIHJldHVybiAnXycgKyBndWlkUHJlZml4ICsgKGd1aWRJbmRleCsrKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ3VpZDtcblxuXG4vKipcbiAqIEBmaWxlIOepuuWHveaVsFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vKipcbiAqIOWVpemDveS4jeW5slxuICovXG5mdW5jdGlvbiBlbXB0eSgpIHt9XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVtcHR5O1xuXG5cbi8qKlxuICogQGZpbGUg5bGe5oCn5ou36LSdXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOWvueixoeWxnuaAp+aLt+i0nVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQg55uu5qCH5a+56LGhXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIOa6kOWvueixoVxuICogQHJldHVybiB7T2JqZWN0fSDov5Tlm57nm67moIflr7nosaFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZXh0ZW5kO1xuXG5cbi8qKlxuICogQGZpbGUg5p6E5bu657G75LmL6Ze055qE57un5om/5YWz57O7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZXh0ZW5kID0gcmVxdWlyZSgnLi9leHRlbmQnKTtcblxuLyoqXG4gKiDmnoTlu7rnsbvkuYvpl7TnmoTnu6fmib/lhbPns7tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWJDbGFzcyDlrZDnsbvlh73mlbBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN1cGVyQ2xhc3Mg54i257G75Ye95pWwXG4gKi9cbmZ1bmN0aW9uIGluaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgdmFyIHN1YkNsYXNzUHJvdG8gPSBzdWJDbGFzcy5wcm90b3R5cGU7XG4gICAgdmFyIEYgPSBuZXcgRnVuY3Rpb24oKTtcbiAgICBGLnByb3RvdHlwZSA9IHN1cGVyQ2xhc3MucHJvdG90eXBlO1xuICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IG5ldyBGKCk7XG4gICAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gICAgZXh0ZW5kKHN1YkNsYXNzLnByb3RvdHlwZSwgc3ViQ2xhc3NQcm90byk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGluaGVyaXRzO1xuXG5cbi8qKlxuICogQGZpbGUg6YGN5Y6G5pWw57uEXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8qKlxuICog6YGN5Y6G5pWw57uE6ZuG5ZCIXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkg5pWw57uE5rqQXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKEFueSxudW1iZXIpOmJvb2xlYW59IGl0ZXJhdG9yIOmBjeWOhuWHveaVsFxuICovXG5mdW5jdGlvbiBlYWNoKGFycmF5LCBpdGVyYXRvcikge1xuICAgIGlmIChhcnJheSAmJiBhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IoYXJyYXlbaV0sIGkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlYWNoO1xuXG5cbi8qKlxuICogQGZpbGUg5Yik5pat5pWw57uE5Lit5piv5ZCm5YyF5ZCr5p+Q6aG5XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4vZWFjaCcpO1xuXG4vKipcbiAqIOWIpOaWreaVsOe7hOS4reaYr+WQpuWMheWQq+afkOmhuVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IOaVsOe7hFxuICogQHBhcmFtIHsqfSB2YWx1ZSDljIXlkKvnmoTpoblcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zKGFycmF5LCB2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICBlYWNoKGFycmF5LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXN1bHQgPSBpdGVtID09PSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuICFyZXN1bHQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjb250YWlucztcblxuXG4vKipcbiAqIEBmaWxlIGJpbmTlh73mlbBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQg5pa55rOV55qE5YW85a655oCn5bCB6KOFXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyDopoFiaW5k55qE5Ye95pWwXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyB0aGlz5oyH5ZCR5a+56LGhXG4gKiBAcGFyYW0gey4uLip9IGFyZ3Mg6aKE6K6+55qE5Yid5aeL5Y+C5pWwXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gYmluZChmdW5jLCB0aGlzQXJnKSB7XG4gICAgdmFyIG5hdGl2ZUJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZDtcbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gICAgLy8gI1tiZWdpbl0gYWxsdWFcbiAgICBpZiAobmF0aXZlQmluZCAmJiBmdW5jLmJpbmQgPT09IG5hdGl2ZUJpbmQpIHtcbiAgICAvLyAjW2VuZF1cbiAgICAgICAgcmV0dXJuIG5hdGl2ZUJpbmQuYXBwbHkoZnVuYywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIH1cblxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH07XG4gICAgLy8gI1tlbmRdXG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGJpbmQ7XG5cblxuLyoqXG4gKiBAZmlsZSBET00g5LqL5Lu25oyC6L29XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIERPTSDkuovku7bmjILovb1cbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIERPTeWFg+e0oFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSDkuovku7blkI1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOebkeWQrOWHveaVsFxuICogQHBhcmFtIHtib29sZWFufSBjYXB0dXJlIOaYr+WQpuaYr+aNleiOt+mYtuautVxuICovXG5mdW5jdGlvbiBvbihlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAvLyAjW2VuZF1cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gb247XG5cblxuLyoqXG4gKiBAZmlsZSBET00g5LqL5Lu25Y246L29XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIERPTSDkuovku7bljbjovb1cbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIERPTeWFg+e0oFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSDkuovku7blkI1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOebkeWQrOWHveaVsFxuICogQHBhcmFtIHtib29sZWFufSBjYXB0dXJlIOaYr+WQpuaYr+aNleiOt+mYtuautVxuICovXG5mdW5jdGlvbiB1bihlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAvLyAjW2VuZF1cbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAvLyAjW2JlZ2luXSBhbGx1YVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdW47XG5cblxuLyoqXG4gKiBAZmlsZSDlsIblrZfnrKbkuLLpgJflj7fliIfliIbov5Tlm57lr7nosaFcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG5cbi8qKlxuICog5bCG5a2X56ym5Liy6YCX5Y+35YiH5YiG6L+U5Zue5a+56LGhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDlrZfnrKbkuLJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gc3BsaXRTdHIyT2JqKHNvdXJjZSkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBlYWNoKFxuICAgICAgICBzb3VyY2Uuc3BsaXQoJywnKSxcbiAgICAgICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSAxO1xuICAgICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzcGxpdFN0cjJPYmo7XG5cblxuLyoqXG4gKiBAZmlsZSBTVkfmoIfnrb7ooahcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBzcGxpdFN0cjJPYmogPSByZXF1aXJlKCcuLi91dGlsL3NwbGl0LXN0ci0yLW9iaicpO1xuXG4vKipcbiAqIHN2Z1RhZ3NcbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcvc3ZnZHRkLmh0bWwg5Y+q5Y+W5bi455SoXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgc3ZnVGFncyA9IHNwbGl0U3RyMk9iaignJ1xuICAgIC8vIHN0cnVjdHVyZVxuICAgICsgJ3N2ZyxnLGRlZnMsZGVzYyxtZXRhZGF0YSxzeW1ib2wsdXNlLCdcbiAgICAvLyBpbWFnZSAmIHNoYXBlXG4gICAgKyAnaW1hZ2UscGF0aCxyZWN0LGNpcmNsZSxsaW5lLGVsbGlwc2UscG9seWxpbmUscG9seWdvbiwnXG4gICAgLy8gdGV4dFxuICAgICsgJ3RleHQsdHNwYW4sdHJlZix0ZXh0cGF0aCwnXG4gICAgLy8gb3RoZXJcbiAgICArICdtYXJrZXIscGF0dGVybixjbGlwcGF0aCxtYXNrLGZpbHRlcixjdXJzb3IsdmlldyxhbmltYXRlLCdcbiAgICAvLyBmb250XG4gICAgKyAnZm9udCxmb250LWZhY2UsZ2x5cGgsbWlzc2luZy1nbHlwaCcpO1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzdmdUYWdzO1xuXG5cbi8qKlxuICogQGZpbGUgRE9N5Yib5bu6XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgc3ZnVGFncyA9IHJlcXVpcmUoJy4vc3ZnLXRhZ3MnKTtcblxuLyoqXG4gKiDliJvlu7ogRE9NIOWFg+e0oFxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdGFnTmFtZSB0YWdOYW1lXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWwodGFnTmFtZSkge1xuICAgIGlmIChzdmdUYWdzW3RhZ05hbWVdKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdGFnTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUVsO1xuXG5cbi8qKlxuICogQGZpbGUg56e76ZmkRE9NXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOWwhiBET00g5LuO6aG16Z2i5Lit56e76ZmkXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgRE9N5YWD57SgXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUVsKGVsKSB7XG4gICAgaWYgKGVsICYmIGVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZW1vdmVFbDtcblxuXG4vKipcbiAqIEBmaWxlIOWcqOS4i+S4gOS4quaXtumXtOWRqOacn+i/kOihjOS7u+WKoVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8g6K+l5pa55rOV5Y+C54Wn5LqGdnVlMi41LjDnmoTlrp7njrDvvIzmhJ/osKJ2dWXlm6LpmJ9cbi8vIFNFRTogaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS9ibG9iLzA5NDhkOTk5ZjJmZGRmOWY5MDk5MTk1NjQ5M2Y5NzYyNzNjNWRhMWYvc3JjL2NvcmUvdXRpbC9lbnYuanMjTDY4XG5cblxuLy8gdmFyIGJpbmQgPSByZXF1aXJlKCcuL2JpbmQnKTtcblxuLyoqXG4gKiDkuIvkuIDkuKrlkajmnJ/opoHmiafooYznmoTku7vliqHliJfooahcbiAqXG4gKiBAaW5uZXJcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudmFyIG5leHRUYXNrcyA9IFtdO1xuXG4vKipcbiAqIOaJp+ihjOS4i+S4gOS4quWRqOacn+S7u+WKoeeahOWHveaVsFxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge0Z1bmN0aW9ufVxuICovXG52YXIgbmV4dEhhbmRsZXI7XG5cbi8qKlxuICog5rWP6KeI5Zmo5piv5ZCm5pSv5oyB5Y6f55SfUHJvbWlzZVxuICog5a+5UHJvbWlzZeWBmuWIpOaWre+8jOaYr+S4uuS6huemgeeUqOS4gOS6m+S4jeS4peiwqOeahFByb21pc2XnmoRwb2x5ZmlsbFxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbnZhciBpc05hdGl2ZVByb21pc2UgPSB0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoUHJvbWlzZSk7XG5cbi8qKlxuICog5Zyo5LiL5LiA5Liq5pe26Ze05ZGo5pyf6L+Q6KGM5Lu75YqhXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDopoHov5DooYznmoTku7vliqHlh73mlbBcbiAqIEBwYXJhbSB7T2JqZWN0PX0gdGhpc0FyZyB0aGlz5oyH5ZCR5a+56LGhXG4gKi9cbmZ1bmN0aW9uIG5leHRUaWNrKGZuLCB0aGlzQXJnKSB7XG4gICAgaWYgKHRoaXNBcmcpIHtcbiAgICAgICAgZm4gPSBiaW5kKGZuLCB0aGlzQXJnKTtcbiAgICB9XG4gICAgbmV4dFRhc2tzLnB1c2goZm4pO1xuXG4gICAgaWYgKG5leHRIYW5kbGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0SGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRhc2tzID0gbmV4dFRhc2tzLnNsaWNlKDApO1xuICAgICAgICBuZXh0VGFza3MgPSBbXTtcbiAgICAgICAgbmV4dEhhbmRsZXIgPSBudWxsO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGFza3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB0YXNrc1tpXSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIOmdnuagh+WHhuaWueazle+8jOS9huaYr+atpOaWueazlemdnuW4uOWQu+WQiOimgeaxguOAglxuICAgIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNldEltbWVkaWF0ZShuZXh0SGFuZGxlcik7XG4gICAgfVxuICAgIC8vIOeUqE1lc3NhZ2VDaGFubmVs5Y675YGac2V0SW1tZWRpYXRl55qEcG9seWZpbGxcbiAgICAvLyDljp/nkIbmmK/lsIbmlrDnmoRtZXNzYWdl5LqL5Lu25Yqg5YWl5Yiw5Y6f5pyJ55qEZG9tIGV2ZW50c+S5i+WQjlxuICAgIGVsc2UgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICB2YXIgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbmV4dEhhbmRsZXI7XG4gICAgICAgIHBvcnQucG9zdE1lc3NhZ2UoMSk7XG4gICAgfVxuICAgIC8vIGZvciBuYXRpdmUgYXBwXG4gICAgZWxzZSBpZiAoaXNOYXRpdmVQcm9taXNlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4obmV4dEhhbmRsZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChuZXh0SGFuZGxlciwgMCk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBuZXh0VGljaztcblxuXG4vKipcbiAqIEBmaWxlIGll54mI5pys5Y+3XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOS7jnVzZXJBZ2VudOS4rWll54mI5pys5Y+355qE5Yy56YWN5L+h5oGvXG4gKlxuICogQHR5cGUge0FycmF5fVxuICovXG52YXIgaWVWZXJzaW9uTWF0Y2ggPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL21zaWVcXHMqKFswLTldKykvaSk7XG5cbi8qKlxuICogaWXniYjmnKzlj7fvvIzpnZ5pZeaXtuS4ujBcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG52YXIgaWUgPSBpZVZlcnNpb25NYXRjaCA/IGllVmVyc2lvbk1hdGNoWzFdIC0gMCA6IDA7XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGllO1xuXG5cbi8qKlxuICogQGZpbGUg5piv5ZCmIElFIOW5tuS4lOWwj+S6jiA5XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgaWUgPSByZXF1aXJlKCcuL2llJyk7XG5cbi8vIEhBQ0s6XG4vLyAxLiBJRTjkuIvvvIzorr7nva5pbm5lckhUTUzml7blpoLmnpzku6VodG1sIGNvbW1lbnTlvIDlpLTvvIxjb21tZW505Lya6KKr6Ieq5Yqo5ruk5o6JXG4vLyAgICDkuLrkuobkv53or4FzdHVtcOWtmOWcqO+8jOmcgOimgeiuvue9ruWujGh0bWzlkI7vvIxjcmVhdGVDb21tZW505bm2YXBwZW5kQ2hpbGQvaW5zZXJ0QmVmb3JlXG4vLyAyLiBJRTjkuIvvvIxpbm5lckhUTUzov5jkuI3mlK/mjIFjdXN0b20gZWxlbWVudO+8jOaJgOS7pemcgOimgeeUqGRpduabv+S7o++8jOS4jeeUqGNyZWF0ZUVsZW1lbnRcbi8vIDMuIOiZveeEtklFOOW3sue7j+S8mOWMluS6huWtl+espuS4sivov57mjqXvvIznoo7niYfljJbov57mjqXmgKfog73kuI3lho3pgIDljJZcbi8vICAgIOS9huaYr+eUseS6juS4iumdouWkmuS4quWFvOWuueWcuuaZr+mDveeUqCA8IDkg5Yik5pat77yM5omA5Lul5a2X56ym5Liy6L+e5o6l5Lmf5rK/55SoXG4vLyAgICDmiYDku6Xnu5PmnpzmmK9JRTjkuIvlrZfnrKbkuLLov57mjqXnlKjnmoTmmK/mlbDnu4Rqb2lu55qE5pa55byPXG5cbi8vICNbYmVnaW5dIGFsbHVhXG4vKipcbiAqIOaYr+WQpiBJRSDlubbkuJTlsI/kuo4gOVxuICovXG52YXIgaWVPbGRUaGFuOSA9IGllICYmIGllIDwgOTtcbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpZU9sZFRoYW45O1xuXG5cbi8qKlxuICogQGZpbGUgRE9NIOS6i+S7tuaMgui9vVxuICogQGF1dGhvciBkYWZyb2soby5vQG11Zy5kb2cpXG4gKi9cblxuLyoqXG4gKiBET00g5LqL5Lu25oyC6L29XG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBET03lhYPntKBcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUg5LqL5Lu25ZCNXG4gKi9cbmZ1bmN0aW9uIHRyaWdnZXIoZWwsIGV2ZW50TmFtZSkge1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHRyaWdnZXI7XG5cblxuLyoqXG4gKiBAZmlsZSDop6PlhrMgSUU5IOWcqOihqOWNleWFg+e0oOS4reWIoOmZpOWtl+espuaXtuS4jeinpuWPkeS6i+S7tueahOmXrumimFxuICogQGF1dGhvciBkYWZyb2soby5vQG11Zy5kb2cpXG4gKi9cblxuLy8gdmFyIGllID0gcmVxdWlyZSgnLi9pZScpO1xuLy8gdmFyIG9uID0gcmVxdWlyZSgnLi9vbicpO1xuLy8gdmFyIHRyaWdnZXIgPSByZXF1aXJlKCcuL3RyaWdnZXInKTtcblxuLy8gI1tiZWdpbl0gYWxsdWFcbmlmIChpZSA9PT0gOSkge1xuICAgIG9uKGRvY3VtZW50LCAnc2VsZWN0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICBpZiAoZWwudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyB8fCBlbC50YWdOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICAgICAgICB0cmlnZ2VyKGVsLCAnaW5wdXQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8gI1tlbmRdXG5cblxuLyoqXG4gKiBAZmlsZSDoh6rpl63lkIjmoIfnrb7ooahcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBzcGxpdFN0cjJPYmogPSByZXF1aXJlKCcuLi91dGlsL3NwbGl0LXN0ci0yLW9iaicpO1xuXG4vKipcbiAqIOiHqumXreWQiOagh+etvuWIl+ihqFxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBhdXRvQ2xvc2VUYWdzID0gc3BsaXRTdHIyT2JqKCdhcmVhLGJhc2UsYnIsY29sLGVtYmVkLGhyLGltZyxpbnB1dCxrZXlnZW4scGFyYW0sc291cmNlLHRyYWNrLHdicicpO1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBhdXRvQ2xvc2VUYWdzO1xuXG5cbi8qKlxuICogQGZpbGUgZGF0YSB0eXBlc1xuICogQGF1dGhvciBsZW9uIDxsdWRhZmFAb3V0bG9vay5jb20+XG4gKi9cblxuLy8gdmFyIGJpbmQgPSByZXF1aXJlKCcuL2JpbmQnKTtcbi8vIHZhciBlbXB0eSA9IHJlcXVpcmUoJy4vZW1wdHknKTtcbi8vIHZhciBleHRlbmQgPSByZXF1aXJlKCcuL2V4dGVuZCcpO1xuXG4vLyAjW2JlZ2luXSBlcnJvclxudmFyIEFOT05ZTU9VU19DTEFTU19OQU1FID0gJzw8YW5vbnltb3VzPj4nO1xuXG4vKipcbiAqIOiOt+WPlueyvuehrueahOexu+Wei1xuICpcbiAqIEBOT1RFIOWmguaenCBvYmog5piv5LiA5LiqIERPTUVsZW1lbnTvvIzmiJHku6zkvJrov5Tlm54gYGVsZW1lbnRg77ybXG4gKlxuICogQHBhcmFtICB7Kn0gb2JqIOebruagh1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXREYXRhVHlwZShvYmopIHtcblxuICAgIGlmIChvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHJldHVybiAnZWxlbWVudCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbiAgICAgICAgLmNhbGwob2JqKVxuICAgICAgICAuc2xpY2UoOCwgLTEpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufVxuLy8gI1tlbmRdXG5cbi8qKlxuICog5Yib5bu66ZO+5byP55qE5pWw5o2u57G75Z6L5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IHZhbGlkYXRlIOecn+ato+eahOagoemqjOWZqFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICB2YXIgY2hhaW5lZENoZWNrZXIgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjaGFpbmVkQ2hlY2tlci5pc1JlcXVpcmVkID0gZW1wdHk7XG5cbiAgICAvLyDlj6rlnKggZXJyb3Ig5Yqf6IO95ZCv55So5pe25omN5pyJ5a6e6ZmF5LiK55qEIGRhdGFUeXBlcyDmo4DmtYtcbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIHZhciBjaGVja1R5cGUgPSBmdW5jdGlvbiAoaXNSZXF1aXJlZCwgZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVNfQ0xBU1NfTkFNRTtcblxuICAgICAgICAvLyDlpoLmnpzmmK8gbnVsbCDmiJYgdW5kZWZpbmVk77yM6YKj5LmI6KaB5o+Q5YmN6L+U5Zue5ZWmXG4gICAgICAgIGlmIChkYXRhVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8g5pivIHJlcXVpcmVkIOWwseaKpemUmVxuICAgICAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICAgICAgKyAnVGhlIGAnICsgZGF0YU5hbWUgKyAnYCAnXG4gICAgICAgICAgICAgICAgICAgICsgJ2lzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgJ1xuICAgICAgICAgICAgICAgICAgICArICdidXQgaXRzIHZhbHVlIGlzICcgKyBkYXRhVHlwZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDkuI3mmK8gcmVxdWlyZWTvvIzpgqPlsLHmmK8gb2sg55qEXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YWxpZGF0ZShkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKTtcblxuICAgIH07XG5cbiAgICBjaGFpbmVkQ2hlY2tlciA9IGJpbmQoY2hlY2tUeXBlLCBudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrZXIuaXNSZXF1aXJlZCA9IGJpbmQoY2hlY2tUeXBlLCBudWxsLCB0cnVlKTtcbiAgICAvLyAjW2VuZF1cblxuXG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrZXI7XG5cbn1cblxuLy8gI1tiZWdpbl0gZXJyb3Jcbi8qKlxuICog55Sf5oiQ5Li76KaB57G75Z6L5pWw5o2u5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlIOS4u+exu+Wei1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcih0eXBlKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gZ2V0RGF0YVR5cGUoZGF0YVZhbHVlKTtcblxuICAgICAgICBpZiAoZGF0YVR5cGUgIT09IHR5cGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiB0eXBlJ1xuICAgICAgICAgICAgICAgICsgJygnICsgZGF0YVR5cGUgKyAnIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgICAgICsgJ2V4cGVjdGVkICcgKyB0eXBlICsgJyknXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxufVxuXG5cblxuLyoqXG4gKiDnlJ/miJAgYXJyYXlPZiDmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gYXJyYXlJdGVtQ2hlY2tlciDmlbDnu4TkuK3mr4/pobnmlbDmja7nmoTmoKHpqozlmahcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVBcnJheU9mQ2hlY2tlcihhcnJheUl0ZW1DaGVja2VyKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXJyYXlJdGVtQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgYXJyYXlPZmAsIGV4cGVjdGVkIGBmdW5jdGlvbmAnXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuICAgICAgICB2YXIgZGF0YVR5cGUgPSBnZXREYXRhVHlwZShkYXRhVmFsdWUpO1xuXG4gICAgICAgIGlmIChkYXRhVHlwZSAhPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIHR5cGUnXG4gICAgICAgICAgICAgICAgKyAnKCcgKyBkYXRhVHlwZSArICcgc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnLCAnXG4gICAgICAgICAgICAgICAgKyAnZXhwZWN0ZWQgYXJyYXkpJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkYXRhVmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5SXRlbUNoZWNrZXIoZGF0YVZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUgKyAnWycgKyBpICsgJ10nKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiDnlJ/miJAgaW5zdGFuY2VPZiDmo4DmtYvlmahcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbnxDbGFzc30gZXhwZWN0ZWRDbGFzcyDmnJ/lvoXnmoTnsbtcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZU9mQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihmdW5jdGlvbiAoZGF0YSwgZGF0YU5hbWUsIGNvbXBvbmVudE5hbWUsIGZ1bGxEYXRhTmFtZSkge1xuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcblxuICAgICAgICBpZiAoZGF0YVZhbHVlIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZUNsYXNzTmFtZSA9IGRhdGFWYWx1ZS5jb25zdHJ1Y3RvciAmJiBkYXRhVmFsdWUuY29uc3RydWN0b3IubmFtZVxuICAgICAgICAgICAgPyBkYXRhVmFsdWUuY29uc3RydWN0b3IubmFtZVxuICAgICAgICAgICAgOiBBTk9OWU1PVVNfQ0xBU1NfTkFNRTtcblxuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTX0NMQVNTX05BTUU7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICArICdJbnZhbGlkICcgKyBjb21wb25lbnROYW1lICsgJyBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Agb2YgdHlwZSdcbiAgICAgICAgICAgICsgJygnICsgZGF0YVZhbHVlQ2xhc3NOYW1lICsgJyBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcsICdcbiAgICAgICAgICAgICsgJ2V4cGVjdGVkIGluc3RhbmNlIG9mICcgKyBleHBlY3RlZENsYXNzTmFtZSArICcpJ1xuICAgICAgICApO1xuXG5cbiAgICB9KTtcblxufVxuXG4vKipcbiAqIOeUn+aIkCBzaGFwZSDmoKHpqozlmahcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNoYXBlVHlwZXMgc2hhcGUg5qCh6aqM6KeE5YiZXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlU2hhcGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgaWYgKGdldERhdGFUeXBlKHNoYXBlVHlwZXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkICdcbiAgICAgICAgICAgICAgICArICdEYXRhVHlwZSBub3RhdGlvbiBpbnNpZGUgYHNoYXBlYCwgZXhwZWN0ZWQgYG9iamVjdGAnXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuICAgICAgICB2YXIgZGF0YVR5cGUgPSBnZXREYXRhVHlwZShkYXRhVmFsdWUpO1xuXG4gICAgICAgIGlmIChkYXRhVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiB0eXBlJ1xuICAgICAgICAgICAgICAgICsgJygnICsgZGF0YVR5cGUgKyAnIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgICAgICsgJ2V4cGVjdGVkIG9iamVjdCknXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgc2hhcGVLZXlOYW1lIGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgICAgIGlmIChzaGFwZVR5cGVzLmhhc093blByb3BlcnR5KHNoYXBlS2V5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNbc2hhcGVLZXlOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNoZWNrZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlcihkYXRhVmFsdWUsIHNoYXBlS2V5TmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lICsgJy4nICsgc2hhcGVLZXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59XG5cbi8qKlxuICog55Sf5oiQIG9uZU9mIOagoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBleHBlY3RlZEVudW1WYWx1ZXMg5pyf5b6F55qE5p6a5Li+5YC8XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlT25lT2ZDaGVja2VyKGV4cGVjdGVkRW51bVZhbHVlcykge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpIHtcblxuICAgICAgICBpZiAoZ2V0RGF0YVR5cGUoZXhwZWN0ZWRFbnVtVmFsdWVzKSAhPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGZ1bGxEYXRhTmFtZSArICdgIG9mIGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkICdcbiAgICAgICAgICAgICAgICArICdEYXRhVHlwZSBub3RhdGlvbiBpbnNpZGUgYG9uZU9mYCwgYXJyYXkgaXMgZXhwZWN0ZWQuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXhwZWN0ZWRFbnVtVmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZhbHVlID09PSBleHBlY3RlZEVudW1WYWx1ZXNbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiB2YWx1ZSdcbiAgICAgICAgICAgICsgJyhgJyArIGRhdGFWYWx1ZSArICdgIHN1cHBsaWVkIHRvICcgKyBjb21wb25lbnROYW1lICsgJywgJ1xuICAgICAgICAgICAgKyAnZXhwZWN0ZWQgb25lIG9mICcgKyBleHBlY3RlZEVudW1WYWx1ZXMuam9pbignLCcpICsgJyknXG4gICAgICAgICk7XG5cbiAgICB9KTtcblxufVxuXG4vKipcbiAqIOeUn+aIkCBvbmVPZlR5cGUg5qCh6aqM5ZmoXG4gKlxuICogQHBhcmFtICB7QXJyYXk8RnVuY3Rpb24+fSBleHBlY3RlZEVudW1PZlR5cGVWYWx1ZXMg5pyf5b6F55qE5p6a5Li+57G75Z6LXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlT25lT2ZUeXBlQ2hlY2tlcihleHBlY3RlZEVudW1PZlR5cGVWYWx1ZXMpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgaWYgKGdldERhdGFUeXBlKGV4cGVjdGVkRW51bU9mVHlwZVZhbHVlcykgIT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGEgYCcgKyBkYXRhTmFtZSArICdgIG9mIGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkICdcbiAgICAgICAgICAgICAgICArICdEYXRhVHlwZSBub3RhdGlvbiBpbnNpZGUgYG9uZU9mYCwgYXJyYXkgaXMgZXhwZWN0ZWQuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhVmFsdWUgPSBkYXRhW2RhdGFOYW1lXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXhwZWN0ZWRFbnVtT2ZUeXBlVmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cbiAgICAgICAgICAgIHZhciBjaGVja2VyID0gZXhwZWN0ZWRFbnVtT2ZUeXBlVmFsdWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjaGVja2VyKGRhdGEsIGRhdGFOYW1lLCBjb21wb25lbnROYW1lLCBmdWxsRGF0YU5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIOWmguaenCBjaGVja2VyIOWujOaIkOagoemqjOayoeaKpemUme+8jOmCo+Wwsei/lOWbnuS6hlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJ6ZSZ6K+v77yM6YKj5LmI5bqU6K+l5oqK6ZSZ6K+v5ZCe5o6JXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaJgOacieeahOWPr+aOpeWPlyB0eXBlIOmDveWksei0peS6hu+8jOaJjeS4ouS4gOS4quW8guW4uFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICsgJ0ludmFsaWQgJyArIGNvbXBvbmVudE5hbWUgKyAnIGRhdGEgYCcgKyBkYXRhTmFtZSArICdgIG9mIHZhbHVlJ1xuICAgICAgICAgICAgKyAnKGAnICsgZGF0YVZhbHVlICsgJ2Agc3VwcGxpZWQgdG8gJyArIGNvbXBvbmVudE5hbWUgKyAnKSdcbiAgICAgICAgKTtcblxuICAgIH0pO1xuXG59XG5cbi8qKlxuICog55Sf5oiQIG9iamVjdE9mIOagoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSB0eXBlQ2hlY2tlciDlr7nosaHlsZ7mgKflgLzmoKHpqozlmahcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVPYmplY3RPZkNoZWNrZXIodHlwZUNoZWNrZXIpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgJ1xuICAgICAgICAgICAgICAgICsgJ0RhdGFUeXBlIG5vdGF0aW9uIGluc2lkZSBgb2JqZWN0T2ZgLCBleHBlY3RlZCBmdW5jdGlvbidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YVZhbHVlID0gZGF0YVtkYXRhTmFtZV07XG4gICAgICAgIHZhciBkYXRhVHlwZSA9IGdldERhdGFUeXBlKGRhdGFWYWx1ZSk7XG5cbiAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgKyAnSW52YWxpZCAnICsgY29tcG9uZW50TmFtZSArICcgZGF0YSBgJyArIGRhdGFOYW1lICsgJ2Agb2YgdHlwZSdcbiAgICAgICAgICAgICAgICArICcoJyArIGRhdGFUeXBlICsgJyBzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcsICdcbiAgICAgICAgICAgICAgICArICdleHBlY3RlZCBvYmplY3QpJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGRhdGFLZXlOYW1lIGluIGRhdGFWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGRhdGFWYWx1ZS5oYXNPd25Qcm9wZXJ0eShkYXRhS2V5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0eXBlQ2hlY2tlcihcbiAgICAgICAgICAgICAgICAgICAgZGF0YVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhS2V5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZnVsbERhdGFOYW1lICsgJy4nICsgZGF0YUtleU5hbWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH0pO1xuXG59XG5cbi8qKlxuICog55Sf5oiQIGV4YWN0IOagoemqjOWZqFxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gc2hhcGVUeXBlcyBvYmplY3Qg5b2i5oCB5a6a5LmJXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRXhhY3RDaGVja2VyKHNoYXBlVHlwZXMpIHtcblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGZ1bmN0aW9uIChkYXRhLCBkYXRhTmFtZSwgY29tcG9uZW50TmFtZSwgZnVsbERhdGFOYW1lLCBzZWNyZXQpIHtcblxuICAgICAgICBpZiAoZ2V0RGF0YVR5cGUoc2hhcGVUeXBlcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdEYXRhIGAnICsgZGF0YU5hbWUgKyAnYCBvZiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCAnXG4gICAgICAgICAgICAgICAgKyAnRGF0YVR5cGUgbm90YXRpb24gaW5zaWRlIGBleGFjdGAnXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGRhdGFbZGF0YU5hbWVdO1xuICAgICAgICB2YXIgZGF0YVZhbHVlVHlwZSA9IGdldERhdGFUeXBlKGRhdGFWYWx1ZSk7XG5cbiAgICAgICAgaWYgKGRhdGFWYWx1ZVR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICdcbiAgICAgICAgICAgICAgICArICdJbnZhbGlkIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBvZiB0eXBlIGAnICsgZGF0YVZhbHVlVHlwZSArICdgJ1xuICAgICAgICAgICAgICAgICsgJyhzdXBwbGllZCB0byAnICsgY29tcG9uZW50TmFtZSArICcsIGV4cGVjdGVkIGBvYmplY3RgKSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWxsS2V5cyA9IHt9O1xuXG4gICAgICAgIC8vIOWFiOWQiOWFpSBzaGFwZVR5cGVzXG4gICAgICAgIGV4dGVuZChhbGxLZXlzLCBzaGFwZVR5cGVzKTtcbiAgICAgICAgLy8g5YaN5ZCI5YWlIGRhdGFWYWx1ZVxuICAgICAgICBleHRlbmQoYWxsS2V5cywgZGF0YVZhbHVlKTtcbiAgICAgICAgLy8g5L+d6K+BIGFsbEtleXMg55qE57G75Z6L5q2j56GuXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgICAgIGlmIChhbGxLZXlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcblxuICAgICAgICAgICAgICAgIC8vIGRhdGFWYWx1ZSDkuK3mnInkuIDkuKrlpJrkvZnnmoTmlbDmja7poblcbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdJbnZhbGlkIGRhdGEgYCcgKyBmdWxsRGF0YU5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4gJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnKGAnICsga2V5ICsgJ2AgaXMgbm90IGRlZmluZWQgaW4gYERhdGFUeXBlcy5leGFjdGApJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBkYXRhVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnSW52YWxpZCBkYXRhIGAnICsgZnVsbERhdGFOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2AgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJyhgJyArIGtleSArICdgIGlzIG1hcmtlZCBgcmVxdWlyZWRgIGluIGBEYXRhVHlwZXMuZXhhY3RgKSdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjaGVja2VyKFxuICAgICAgICAgICAgICAgICAgICBkYXRhVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZnVsbERhdGFOYW1lICsgJy4nICsga2V5LFxuICAgICAgICAgICAgICAgICAgICBzZWNyZXRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59XG4vLyAjW2VuZF1cblxuXG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtdmFsaWQtdmFyLWpzZG9jICovXG52YXIgRGF0YVR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGVtcHR5KSxcbiAgICBvYmplY3Q6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZW1wdHkpLFxuICAgIGZ1bmM6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZW1wdHkpLFxuICAgIHN0cmluZzogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcihlbXB0eSksXG4gICAgbnVtYmVyOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGVtcHR5KSxcbiAgICBib29sOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGVtcHR5KSxcbiAgICBzeW1ib2w6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIoZW1wdHkpLFxuICAgIGFueTogY3JlYXRlQ2hhaW5hYmxlQ2hlY2tlcixcbiAgICBhcnJheU9mOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUNoYWluYWJsZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyLFxuICAgIG9iamVjdE9mOiBjcmVhdGVDaGFpbmFibGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVDaGFpbmFibGVDaGVja2VyXG59O1xuXG4vLyAjW2JlZ2luXSBlcnJvclxuRGF0YVR5cGVzID0ge1xuXG4gICAgYW55OiBjcmVhdGVDaGFpbmFibGVDaGVja2VyKGVtcHR5KSxcblxuICAgIC8vIOexu+Wei+ajgOa1i1xuICAgIGFycmF5OiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltYXJ5VHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1hcnlUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWFyeVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIC8vIOWkjeWQiOexu+Wei+ajgOa1i1xuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZDaGVja2VyLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlT2ZDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZU9uZU9mQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZU9uZU9mVHlwZUNoZWNrZXIsXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlRXhhY3RDaGVja2VyXG5cbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtdmFsaWQtdmFyLWpzZG9jICovXG4vLyAjW2VuZF1cblxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IERhdGFUeXBlcztcblxuXG4vKipcbiAqIEBmaWxlIOWIm+W7uuaVsOaNruajgOa1i+WHveaVsFxuICogQGF1dGhvciBsZW9uPGx1ZGFmYUBvdXRsb29rLmNvbT5cbiAqL1xuXG5cbi8vICNbYmVnaW5dIGVycm9yXG5cbi8qKlxuICog5Yib5bu65pWw5o2u5qOA5rWL5Ye95pWwXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBkYXRhVHlwZXMgICAgIOaVsOaNruagvOW8j1xuICogQHBhcmFtICB7c3RyaW5nfSBjb21wb25lbnROYW1lIOe7hOS7tuWQjVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURhdGFUeXBlc0NoZWNrZXIoZGF0YVR5cGVzLCBjb21wb25lbnROYW1lKSB7XG5cbiAgICAvKipcbiAgICAgKiDmoKHpqowgZGF0YSDmmK/lkKbmu6HotrMgZGF0YSB0eXBlcyDnmoTmoLzlvI9cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgeyp9IGRhdGEg5pWw5o2uXG4gICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgZm9yICh2YXIgZGF0YVR5cGVOYW1lIGluIGRhdGFUeXBlcykge1xuXG4gICAgICAgICAgICBpZiAoZGF0YVR5cGVzLmhhc093blByb3BlcnR5KGRhdGFUeXBlTmFtZSkpIHtcblxuICAgICAgICAgICAgICAgIHZhciBkYXRhVHlwZUNoZWNrZXIgPSBkYXRhVHlwZXNbZGF0YVR5cGVOYW1lXTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyBjb21wb25lbnROYW1lICsgJzonICsgZGF0YVR5cGVOYW1lICsgJyBpcyBpbnZhbGlkOyAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSBzYW4uRGF0YVR5cGVzJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRhdGFUeXBlQ2hlY2tlcihcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZU5hbWVcbiAgICAgICAgICAgICAgICApO1xuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxufVxuXG4vLyAjW2VuZF1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEYXRhVHlwZXNDaGVja2VyO1xuXG5cbi8qKlxuICogQGZpbGUg5a2X56ym5Liy5rqQ56CB6K+75Y+W57G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8qKlxuICog5a2X56ym5Liy5rqQ56CB6K+75Y+W57G777yM55So5LqO5qih5p2/5a2X56ym5Liy6Kej5p6Q6L+H56iLXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOimgeivu+WPlueahOWtl+espuS4slxuICovXG5mdW5jdGlvbiBXYWxrZXIoc291cmNlKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5sZW4gPSB0aGlzLnNvdXJjZS5sZW5ndGg7XG4gICAgdGhpcy5pbmRleCA9IDA7XG59XG5cbi8qKlxuICog6I635Y+W5b2T5YmN5a2X56ym56CBXG4gKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5XYWxrZXIucHJvdG90eXBlLmN1cnJlbnRDb2RlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNoYXJDb2RlKHRoaXMuaW5kZXgpO1xufTtcblxuLyoqXG4gKiDmiKrlj5blrZfnrKbkuLLniYfmrrVcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQg6LW35aeL5L2N572uXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIOe7k+adn+S9jee9rlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5XYWxrZXIucHJvdG90eXBlLmN1dCA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHN0YXJ0LCBlbmQpO1xufTtcblxuLyoqXG4gKiDlkJHliY3or7vlj5blrZfnrKZcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gZGlzdGFuY2Ug6K+75Y+W5a2X56ym5pWwXG4gKi9cbldhbGtlci5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiAoZGlzdGFuY2UpIHtcbiAgICB0aGlzLmluZGV4ICs9IGRpc3RhbmNlO1xufTtcblxuLyoqXG4gKiDor7vlj5bkuIvkuIDkuKrlrZfnrKbvvIzov5Tlm57kuIvkuIDkuKrlrZfnrKbnmoQgY29kZVxuICpcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuV2Fsa2VyLnByb3RvdHlwZS5uZXh0Q29kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdvKDEpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRDb2RlKCk7XG59O1xuXG4vKipcbiAqIOiOt+WPluebuOW6lOS9jee9ruWtl+espueahCBjb2RlXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IOWtl+espuS9jee9rlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5XYWxrZXIucHJvdG90eXBlLmNoYXJDb2RlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJDb2RlQXQoaW5kZXgpO1xufTtcblxuLyoqXG4gKiDlkJHliY3or7vlj5blrZfnrKbvvIznm7TliLDpgYfliLDmjIflrprlrZfnrKblho3lgZzmraJcbiAqXG4gKiBAcGFyYW0ge251bWJlcj19IGNoYXJDb2RlIOaMh+WumuWtl+espueahGNvZGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IOW9k+aMh+WumuWtl+espuaXtu+8jOi/lOWbnuaYr+WQpueisOWIsOaMh+WumueahOWtl+esplxuICovXG5XYWxrZXIucHJvdG90eXBlLmdvVW50aWwgPSBmdW5jdGlvbiAoY2hhckNvZGUpIHtcbiAgICB2YXIgY29kZTtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMubGVuICYmIChjb2RlID0gdGhpcy5jdXJyZW50Q29kZSgpKSkge1xuICAgICAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA9PT0gY2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiDlkJHliY3or7vlj5bnrKblkIjop4TliJnnmoTlrZfnrKbniYfmrrXvvIzlubbov5Tlm57op4TliJnljLnphY3nu5PmnpxcbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVnIOWtl+espueJh+auteeahOato+WImeihqOi+vuW8j1xuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbldhbGtlci5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbiAocmVnKSB7XG4gICAgcmVnLmxhc3RJbmRleCA9IHRoaXMuaW5kZXg7XG5cbiAgICB2YXIgbWF0Y2ggPSByZWcuZXhlYyh0aGlzLnNvdXJjZSk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSByZWcubGFzdEluZGV4O1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFdhbGtlcjtcblxuXG5cbi8qKlxuICogQGZpbGUg5qih5p2/6Kej5p6Q55Sf5oiQ55qE5oq96LGh6IqC54K5XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOWIm+W7uuaooeadv+ino+aekOeUn+aIkOeahOaKveixoeiKgueCuVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9ucyDoioLngrnlj4LmlbBcbiAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0aW9ucy50YWdOYW1lIOagh+etvuWQjVxuICogQHBhcmFtIHtBTm9kZT19IG9wdGlvbnMucGFyZW50IOeItuiKgueCuVxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0aW9ucy50ZXh0RXhwciDmlofmnKzoioLngrnooajovr7lvI/lr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQU5vZGUob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgaWYgKCFvcHRpb25zLnRleHRFeHByKSB7XG4gICAgICAgIG9wdGlvbnMuZGlyZWN0aXZlcyA9IG9wdGlvbnMuZGlyZWN0aXZlcyB8fCB7fTtcbiAgICAgICAgb3B0aW9ucy5wcm9wcyA9IG9wdGlvbnMucHJvcHMgfHwgW107XG4gICAgICAgIG9wdGlvbnMuZXZlbnRzID0gb3B0aW9ucy5ldmVudHMgfHwgW107XG4gICAgICAgIG9wdGlvbnMuY2hpbGRyZW4gPSBvcHRpb25zLmNoaWxkcmVuIHx8IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBTm9kZTtcblxuXG4vKipcbiAqIEBmaWxlIOaKiiBrZWJhYiBjYXNlIOWtl+espuS4sui9rOaNouaIkCBjYW1lbCBjYXNlXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOaKiiBrZWJhYiBjYXNlIOWtl+espuS4sui9rOaNouaIkCBjYW1lbCBjYXNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDlrZfnrKbkuLJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24ga2ViYWIyY2FtZWwoc291cmNlKSB7XG4gICAgcmV0dXJuIHNvdXJjZS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGFscGhhKSB7XG4gICAgICAgIHJldHVybiBhbHBoYS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBrZWJhYjJjYW1lbDtcblxuXG4vKipcbiAqIEBmaWxlIOihqOi+vuW8j+exu+Wei1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLyoqXG4gKiDooajovr7lvI/nsbvlnotcbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBFeHByVHlwZSA9IHtcbiAgICBTVFJJTkc6IDEsXG4gICAgTlVNQkVSOiAyLFxuICAgIEJPT0w6IDMsXG4gICAgQUNDRVNTT1I6IDQsXG4gICAgSU5URVJQOiA1LFxuICAgIENBTEw6IDYsXG4gICAgVEVYVDogNyxcbiAgICBCSU5BUlk6IDgsXG4gICAgVU5BUlk6IDksXG4gICAgVEVSVElBUlk6IDEwXG59O1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBFeHByVHlwZTtcblxuXG4vKipcbiAqIEBmaWxlIOWIm+W7uuiuv+mXruihqOi+vuW8j+WvueixoVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcblxuLyoqXG4gKiDliJvlu7rorr/pl67ooajovr7lvI/lr7nosaFcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRocyDorr/pl67ot6/lvoRcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQWNjZXNzb3IocGF0aHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5BQ0NFU1NPUixcbiAgICAgICAgcGF0aHM6IHBhdGhzXG4gICAgfTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlQWNjZXNzb3I7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5blrZfnrKbkuLJcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcblxuLyoqXG4gKiDor7vlj5blrZfnrKbkuLJcbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkU3RyaW5nKHdhbGtlcikge1xuICAgIHZhciBzdGFydENvZGUgPSB3YWxrZXIuY3VycmVudENvZGUoKTtcbiAgICB2YXIgc3RhcnRJbmRleCA9IHdhbGtlci5pbmRleDtcbiAgICB2YXIgY2hhckNvZGU7XG5cbiAgICB3YWxrTG9vcDogd2hpbGUgKChjaGFyQ29kZSA9IHdhbGtlci5uZXh0Q29kZSgpKSkge1xuICAgICAgICBzd2l0Y2ggKGNoYXJDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDkyOiAvLyBcXFxuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc3RhcnRDb2RlOlxuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgICAgICBicmVhayB3YWxrTG9vcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaXRlcmFsID0gd2Fsa2VyLmN1dChzdGFydEluZGV4LCB3YWxrZXIuaW5kZXgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgdmFsdWU6IChuZXcgRnVuY3Rpb24oJ3JldHVybiAnICsgbGl0ZXJhbCkpKClcbiAgICB9O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkU3RyaW5nO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W5pWw5a2XXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG5cbi8qKlxuICog6K+75Y+W5pWw5a2XXG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkTnVtYmVyKHdhbGtlcikge1xuICAgIHZhciBtYXRjaCA9IHdhbGtlci5tYXRjaCgvXFxzKigtP1swLTldKyhcXC5bMC05XSspPykvZyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBFeHByVHlwZS5OVU1CRVIsXG4gICAgICAgIHZhbHVlOiBtYXRjaFsxXSAtIDBcbiAgICB9O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkTnVtYmVyO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+WaWRlbnRcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog6K+75Y+WaWRlbnRcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlYWRJZGVudCh3YWxrZXIpIHtcbiAgICB2YXIgbWF0Y2ggPSB3YWxrZXIubWF0Y2goL1xccyooW1xcJDAtOWEtel9dKykvaWcpO1xuICAgIHJldHVybiBtYXRjaFsxXTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZElkZW50O1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W5LiJ5YWD6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRMb2dpY2FsT1JFeHByID0gcmVxdWlyZSgnLi9yZWFkLWxvZ2ljYWwtb3ItZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluS4ieWFg+ihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGNvbmRpdGlvbmFsID0gcmVhZExvZ2ljYWxPUkV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSA2MykgeyAvLyA/XG4gICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgdmFyIHllc0V4cHIgPSByZWFkVGVydGlhcnlFeHByKHdhbGtlcik7XG4gICAgICAgIHdhbGtlci5nb1VudGlsKCk7XG5cbiAgICAgICAgaWYgKHdhbGtlci5jdXJyZW50Q29kZSgpID09PSA1OCkgeyAvLyA6XG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlRFUlRJQVJZLFxuICAgICAgICAgICAgICAgIHNlZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uYWwsXG4gICAgICAgICAgICAgICAgICAgIHllc0V4cHIsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uZGl0aW9uYWw7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRUZXJ0aWFyeUV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5borr/pl67ooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgY3JlYXRlQWNjZXNzb3IgPSByZXF1aXJlKCcuL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIHJlYWRJZGVudCA9IHJlcXVpcmUoJy4vcmVhZC1pZGVudCcpO1xuLy8gdmFyIHJlYWRUZXJ0aWFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdGVydGlhcnktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluiuv+mXruihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRBY2Nlc3Nvcih3YWxrZXIpIHtcbiAgICB2YXIgZmlyc3RTZWcgPSByZWFkSWRlbnQod2Fsa2VyKTtcbiAgICBzd2l0Y2ggKGZpcnN0U2VnKSB7XG4gICAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICBjYXNlICdmYWxzZSc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLkJPT0wsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZpcnN0U2VnID09PSAndHJ1ZSdcbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IGNyZWF0ZUFjY2Vzc29yKFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgdmFsdWU6IGZpcnN0U2VnXG4gICAgICAgIH1cbiAgICBdKTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xuICAgIGFjY2Vzc29yTG9vcDogd2hpbGUgKDEpIHtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xuXG4gICAgICAgIHN3aXRjaCAod2Fsa2VyLmN1cnJlbnRDb2RlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgNDY6IC8vIC5cbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZGVudCBhcyBzdHJpbmdcbiAgICAgICAgICAgICAgICByZXN1bHQucGF0aHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlYWRJZGVudCh3YWxrZXIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6IC8vIFtcbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhdGhzLnB1c2gocmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpKTtcbiAgICAgICAgICAgICAgICB3YWxrZXIuZ29VbnRpbCg5Myk7IC8vIF1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhayBhY2Nlc3Nvckxvb3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkQWNjZXNzb3I7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bmi6zlj7fooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciByZWFkVGVydGlhcnlFeHByID0gcmVxdWlyZSgnLi9yZWFkLXRlcnRpYXJ5LWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bmi6zlj7fooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkUGFyZW50aGVzaXplZEV4cHIod2Fsa2VyKSB7XG4gICAgd2Fsa2VyLmdvKDEpO1xuICAgIHZhciBleHByID0gcmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpO1xuICAgIHdhbGtlci5nb1VudGlsKDQxKTsgLy8gKVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRQYXJlbnRoZXNpemVkRXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPluS4gOWFg+ihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkU3RyaW5nID0gcmVxdWlyZSgnLi9yZWFkLXN0cmluZycpO1xuLy8gdmFyIHJlYWROdW1iZXIgPSByZXF1aXJlKCcuL3JlYWQtbnVtYmVyJyk7XG4vLyB2YXIgcmVhZEFjY2Vzc29yID0gcmVxdWlyZSgnLi9yZWFkLWFjY2Vzc29yJyk7XG4vLyB2YXIgcmVhZFBhcmVudGhlc2l6ZWRFeHByID0gcmVxdWlyZSgnLi9yZWFkLXBhcmVudGhlc2l6ZWQtZXhwcicpO1xuXG5cbi8qKlxuICog6K+75Y+W5LiA5YWD6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZFVuYXJ5RXhwcih3YWxrZXIpIHtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgc3dpdGNoICh3YWxrZXIuY3VycmVudENvZGUoKSkge1xuICAgICAgICBjYXNlIDMzOiAvLyAhXG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlVOQVJZLFxuICAgICAgICAgICAgICAgIGV4cHI6IHJlYWRVbmFyeUV4cHIod2Fsa2VyKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAzNDogLy8gXCJcbiAgICAgICAgY2FzZSAzOTogLy8gJ1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRTdHJpbmcod2Fsa2VyKTtcbiAgICAgICAgY2FzZSA0NTogLy8gbnVtYmVyXG4gICAgICAgIGNhc2UgNDg6XG4gICAgICAgIGNhc2UgNDk6XG4gICAgICAgIGNhc2UgNTA6XG4gICAgICAgIGNhc2UgNTE6XG4gICAgICAgIGNhc2UgNTI6XG4gICAgICAgIGNhc2UgNTM6XG4gICAgICAgIGNhc2UgNTQ6XG4gICAgICAgIGNhc2UgNTU6XG4gICAgICAgIGNhc2UgNTY6XG4gICAgICAgIGNhc2UgNTc6XG4gICAgICAgICAgICByZXR1cm4gcmVhZE51bWJlcih3YWxrZXIpO1xuICAgICAgICBjYXNlIDQwOiAvLyAoXG4gICAgICAgICAgICByZXR1cm4gcmVhZFBhcmVudGhlc2l6ZWRFeHByKHdhbGtlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWRBY2Nlc3Nvcih3YWxrZXIpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkVW5hcnlFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W5LmY5rOV6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRVbmFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdW5hcnktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluS5mOazleihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRNdWx0aXBsaWNhdGl2ZUV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkVW5hcnlFeHByKHdhbGtlcik7XG5cbiAgICB3aGlsZSAoMSkge1xuICAgICAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgICAgIHZhciBjb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG4gICAgICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICAgICAgY2FzZSAzNzogLy8gJVxuICAgICAgICAgICAgY2FzZSA0MjogLy8gKlxuICAgICAgICAgICAgY2FzZSA0NzogLy8gL1xuICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgICAgICBleHByID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5CSU5BUlksXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBjb2RlLFxuICAgICAgICAgICAgICAgICAgICBzZWdzOiBbZXhwciwgcmVhZFVuYXJ5RXhwcih3YWxrZXIpXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG5cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkTXVsdGlwbGljYXRpdmVFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W5Yqg5rOV6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRNdWx0aXBsaWNhdGl2ZUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtbXVsdGlwbGljYXRpdmUtZXhwcicpO1xuXG5cbi8qKlxuICog6K+75Y+W5Yqg5rOV6KGo6L6+5byPXG4gKlxuICogQHBhcmFtIHtXYWxrZXJ9IHdhbGtlciDmupDnoIHor7vlj5blr7nosaFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcmVhZEFkZGl0aXZlRXhwcih3YWxrZXIpIHtcbiAgICB2YXIgZXhwciA9IHJlYWRNdWx0aXBsaWNhdGl2ZUV4cHIod2Fsa2VyKTtcblxuICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHdhbGtlci5nb1VudGlsKCk7XG4gICAgICAgIHZhciBjb2RlID0gd2Fsa2VyLmN1cnJlbnRDb2RlKCk7XG5cbiAgICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDQzOiAvLyArXG4gICAgICAgICAgICBjYXNlIDQ1OiAvLyAtXG4gICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgICAgIGV4cHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLkJJTkFSWSxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IGNvZGUsXG4gICAgICAgICAgICAgICAgICAgIHNlZ3M6IFtleHByLCByZWFkTXVsdGlwbGljYXRpdmVFeHByKHdhbGtlcildXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkQWRkaXRpdmVFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W5YWz57O75Yik5pat6KGo6L6+5byPXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRBZGRpdGl2ZUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtYWRkaXRpdmUtZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluWFs+ezu+WIpOaWreihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRSZWxhdGlvbmFsRXhwcih3YWxrZXIpIHtcbiAgICB2YXIgZXhwciA9IHJlYWRBZGRpdGl2ZUV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgdmFyIGNvZGUgPSB3YWxrZXIuY3VycmVudENvZGUoKTtcbiAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgY2FzZSA2MDogLy8gPFxuICAgICAgICBjYXNlIDYyOiAvLyA+XG4gICAgICAgICAgICBpZiAod2Fsa2VyLm5leHRDb2RlKCkgPT09IDYxKSB7XG4gICAgICAgICAgICAgICAgY29kZSArPSA2MTtcbiAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuQklOQVJZLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBjb2RlLFxuICAgICAgICAgICAgICAgIHNlZ3M6IFtleHByLCByZWFkQWRkaXRpdmVFeHByKHdhbGtlcildXG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkUmVsYXRpb25hbEV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDor7vlj5bnm7jnrYnmr5Tlr7nooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcmVhZFJlbGF0aW9uYWxFeHByID0gcmVxdWlyZSgnLi9yZWFkLXJlbGF0aW9uYWwtZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluebuOetieavlOWvueihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRFcXVhbGl0eUV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkUmVsYXRpb25hbEV4cHIod2Fsa2VyKTtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuXG4gICAgdmFyIGNvZGUgPSB3YWxrZXIuY3VycmVudENvZGUoKTtcbiAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgICAgY2FzZSA2MTogLy8gPVxuICAgICAgICBjYXNlIDMzOiAvLyAhXG4gICAgICAgICAgICBpZiAod2Fsa2VyLm5leHRDb2RlKCkgPT09IDYxKSB7XG4gICAgICAgICAgICAgICAgY29kZSArPSA2MTtcbiAgICAgICAgICAgICAgICBpZiAod2Fsa2VyLm5leHRDb2RlKCkgPT09IDYxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgKz0gNjE7XG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5CSU5BUlksXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBjb2RlLFxuICAgICAgICAgICAgICAgICAgICBzZWdzOiBbZXhwciwgcmVhZFJlbGF0aW9uYWxFeHByKHdhbGtlcildXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2Fsa2VyLmdvKC0xKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZEVxdWFsaXR5RXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPlumAu+i+keS4juihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkRXF1YWxpdHlFeHByID0gcmVxdWlyZSgnLi9yZWFkLWVxdWFsaXR5LWV4cHInKTtcblxuLyoqXG4gKiDor7vlj5bpgLvovpHkuI7ooajovr7lvI9cbiAqXG4gKiBAcGFyYW0ge1dhbGtlcn0gd2Fsa2VyIOa6kOeggeivu+WPluWvueixoVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiByZWFkTG9naWNhbEFOREV4cHIod2Fsa2VyKSB7XG4gICAgdmFyIGV4cHIgPSByZWFkRXF1YWxpdHlFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIGlmICh3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gMzgpIHsgLy8gJlxuICAgICAgICBpZiAod2Fsa2VyLm5leHRDb2RlKCkgPT09IDM4KSB7XG4gICAgICAgICAgICB3YWxrZXIuZ28oMSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLkJJTkFSWSxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogNzYsXG4gICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRMb2dpY2FsQU5ERXhwcih3YWxrZXIpXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhbGtlci5nbygtMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlYWRMb2dpY2FsQU5ERXhwcjtcblxuXG4vKipcbiAqIEBmaWxlIOivu+WPlumAu+i+keaIluihqOi+vuW8j1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkTG9naWNhbEFOREV4cHIgPSByZXF1aXJlKCcuL3JlYWQtbG9naWNhbC1hbmQtZXhwcicpO1xuXG4vKipcbiAqIOivu+WPlumAu+i+keaIluihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRMb2dpY2FsT1JFeHByKHdhbGtlcikge1xuICAgIHZhciBleHByID0gcmVhZExvZ2ljYWxBTkRFeHByKHdhbGtlcik7XG4gICAgd2Fsa2VyLmdvVW50aWwoKTtcblxuICAgIGlmICh3YWxrZXIuY3VycmVudENvZGUoKSA9PT0gMTI0KSB7IC8vIHxcbiAgICAgICAgaWYgKHdhbGtlci5uZXh0Q29kZSgpID09PSAxMjQpIHtcbiAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuQklOQVJZLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAyNDgsXG4gICAgICAgICAgICAgICAgc2VnczogW2V4cHIsIHJlYWRMb2dpY2FsT1JFeHByKHdhbGtlcildXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgd2Fsa2VyLmdvKC0xKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVhZExvZ2ljYWxPUkV4cHI7XG5cblxuLyoqXG4gKiBAZmlsZSDop6PmnpDooajovr7lvI9cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIHJlYWRUZXJ0aWFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdGVydGlhcnktZXhwcicpO1xuXG4vKipcbiAqIOino+aekOihqOi+vuW8j1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ56CBXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlRXhwcihzb3VyY2UpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcgJiYgc291cmNlLnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9XG5cbiAgICB2YXIgZXhwciA9IHJlYWRUZXJ0aWFyeUV4cHIobmV3IFdhbGtlcihzb3VyY2UpKTtcbiAgICBleHByLnJhdyA9IHNvdXJjZTtcbiAgICByZXR1cm4gZXhwcjtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcGFyc2VFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg6K+75Y+W6LCD55SoXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL2V4cHItdHlwZScpO1xuLy8gdmFyIHJlYWRBY2Nlc3NvciA9IHJlcXVpcmUoJy4vcmVhZC1hY2Nlc3NvcicpO1xuLy8gdmFyIHJlYWRUZXJ0aWFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdGVydGlhcnktZXhwcicpO1xuXG4vKipcbiAqIOivu+WPluiwg+eUqFxuICpcbiAqIEBwYXJhbSB7V2Fsa2VyfSB3YWxrZXIg5rqQ56CB6K+75Y+W5a+56LGhXG4gKiBAcGFyYW0ge0FycmF5PX0gZGVmYXVsdEFyZ3Mg6buY6K6k5Y+C5pWwXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJlYWRDYWxsKHdhbGtlciwgZGVmYXVsdEFyZ3MpIHtcbiAgICB3YWxrZXIuZ29VbnRpbCgpO1xuICAgIHZhciBpZGVudCA9IHJlYWRBY2Nlc3Nvcih3YWxrZXIpO1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICBpZiAod2Fsa2VyLmdvVW50aWwoNDApKSB7IC8vIChcbiAgICAgICAgd2hpbGUgKCF3YWxrZXIuZ29VbnRpbCg0MSkpIHsgLy8gKVxuICAgICAgICAgICAgYXJncy5wdXNoKHJlYWRUZXJ0aWFyeUV4cHIod2Fsa2VyKSk7XG4gICAgICAgICAgICB3YWxrZXIuZ29VbnRpbCg0NCk7IC8vICxcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkZWZhdWx0QXJncykge1xuICAgICAgICBhcmdzID0gZGVmYXVsdEFyZ3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogRXhwclR5cGUuQ0FMTCxcbiAgICAgICAgbmFtZTogaWRlbnQsXG4gICAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZWFkQ2FsbDtcblxuXG4vKipcbiAqIEBmaWxlIOino+aekOiwg+eUqFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgV2Fsa2VyID0gcmVxdWlyZSgnLi93YWxrZXInKTtcbi8vIHZhciByZWFkQ2FsbCA9IHJlcXVpcmUoJy4vcmVhZC1jYWxsJyk7XG5cbi8qKlxuICog6Kej5p6Q6LCD55SoXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDnoIFcbiAqIEBwYXJhbSB7QXJyYXk9fSBkZWZhdWx0QXJncyDpu5jorqTlj4LmlbBcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VDYWxsKHNvdXJjZSwgZGVmYXVsdEFyZ3MpIHtcbiAgICB2YXIgZXhwciA9IHJlYWRDYWxsKG5ldyBXYWxrZXIoc291cmNlKSwgZGVmYXVsdEFyZ3MpO1xuICAgIGV4cHIucmF3ID0gc291cmNlO1xuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwYXJzZUNhbGw7XG5cblxuLyoqXG4gKiBAZmlsZSDop6PmnpDmj5LlgLzmm7/mjaJcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBXYWxrZXIgPSByZXF1aXJlKCcuL3dhbGtlcicpO1xuLy8gdmFyIHJlYWRUZXJ0aWFyeUV4cHIgPSByZXF1aXJlKCcuL3JlYWQtdGVydGlhcnktZXhwcicpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciByZWFkQ2FsbCA9IHJlcXVpcmUoJy4vcmVhZC1jYWxsJyk7XG5cbi8qKlxuICog6Kej5p6Q5o+S5YC85pu/5o2iXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDmupDnoIFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcGFyc2VJbnRlcnAoc291cmNlKSB7XG4gICAgdmFyIHdhbGtlciA9IG5ldyBXYWxrZXIoc291cmNlKTtcblxuICAgIHZhciBpbnRlcnAgPSB7XG4gICAgICAgIHR5cGU6IEV4cHJUeXBlLklOVEVSUCxcbiAgICAgICAgZXhwcjogcmVhZFRlcnRpYXJ5RXhwcih3YWxrZXIpLFxuICAgICAgICBmaWx0ZXJzOiBbXSxcbiAgICAgICAgcmF3OiBzb3VyY2VcbiAgICB9O1xuXG4gICAgd2hpbGUgKHdhbGtlci5nb1VudGlsKDEyNCkpIHsgLy8gfFxuICAgICAgICB2YXIgY2FsbEV4cHIgPSByZWFkQ2FsbCh3YWxrZXIpO1xuICAgICAgICBzd2l0Y2ggKGNhbGxFeHByLm5hbWUucGF0aHNbMF0udmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmF3JzpcbiAgICAgICAgICAgICAgICBpbnRlcnAub3JpZ2luYWwgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpbnRlcnAuZmlsdGVycy5wdXNoKGNhbGxFeHByKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnA7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBhcnNlSW50ZXJwO1xuXG5cbi8qKlxuICogQGZpbGUg6Kej56CBIEhUTUwg5a2X56ym5a6e5L2TXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG52YXIgRU5USVRZX0RFQ09ERV9NQVAgPSB7XG4gICAgbHQ6ICc8JyxcbiAgICBndDogJz4nLFxuICAgIG5ic3A6ICcgJyxcbiAgICBxdW90OiAnXFxcIicsXG4gICAgZW1zcDogJ1xcdTIwMDMnLFxuICAgIGVuc3A6ICdcXHUyMDAyJyxcbiAgICB0aGluc3A6ICdcXHUyMDA5JyxcbiAgICBjb3B5OiAnXFx4YTknLFxuICAgIHJlZzogJ1xceGFlJyxcbiAgICB6d25qOiAnXFx1MjAwYycsXG4gICAgendqOiAnXFx1MjAwZCcsXG4gICAgYW1wOiAnJidcbn07XG5cbi8qKlxuICog6Kej56CBIEhUTUwg5a2X56ym5a6e5L2TXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDopoHop6PnoIHnmoTlrZfnrKbkuLJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZGVjb2RlSFRNTEVudGl0eShzb3VyY2UpIHtcbiAgICByZXR1cm4gc291cmNlXG4gICAgICAgIC5yZXBsYWNlKC8mIyhbMC05XSspOy9nLCBmdW5jdGlvbiAobWF0Y2gsIGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKCtjb2RlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnJlcGxhY2UoLyYjeChbMC05YS1mXSspOy9pZywgZnVuY3Rpb24gKG1hdGNoLCBjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChjb2RlLCAxNikpO1xuICAgICAgICB9KVxuICAgICAgICAucmVwbGFjZSgvJihbYS16XSspOy9pZywgZnVuY3Rpb24gKG1hdGNoLCBjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gRU5USVRZX0RFQ09ERV9NQVBbY29kZV0gfHwgbWF0Y2g7XG4gICAgICAgIH0pO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVIVE1MRW50aXR5O1xuXG5cbi8qKlxuICogQGZpbGUg6Kej5p6Q5paH5pysXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgV2Fsa2VyID0gcmVxdWlyZSgnLi93YWxrZXInKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4vZXhwci10eXBlJyk7XG4vLyB2YXIgcGFyc2VJbnRlcnAgPSByZXF1aXJlKCcuL3BhcnNlLWludGVycCcpO1xuLy8gdmFyIGRlY29kZUhUTUxFbnRpdHkgPSByZXF1aXJlKCcuLi91dGlsL2RlY29kZS1odG1sLWVudGl0eScpO1xuXG4vKipcbiAqIOWvueWtl+espuS4sui/m+ihjOWPr+eUqOS6jm5ldyBSZWdFeHDnmoTlrZfpnaLljJZcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug6ZyA6KaB5a2X6Z2i5YyW55qE5a2X56ym5LiyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IOWtl+espuS4suWtl+mdouWMlue7k+aenFxuICovXG5mdW5jdGlvbiByZWdleHBMaXRlcmFsKHNvdXJjZSkge1xuICAgIHJldHVybiBzb3VyY2UucmVwbGFjZSgvW1xcXlxcW1xcXVxcJFxcKFxcKVxce1xcfVxcP1xcKlxcLlxcK1xcXFxdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiAnXFxcXCcgKyBjO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIOino+aekOaWh+acrFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ56CBXG4gKiBAcGFyYW0ge0FycmF5P30gZGVsaW1pdGVycyDliIbpmpTnrKbjgILpu5jorqTkuLogWyd7eycsICd9fSddXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVGV4dChzb3VyY2UsIGRlbGltaXRlcnMpIHtcbiAgICBkZWxpbWl0ZXJzID0gZGVsaW1pdGVycyB8fCBbJ3t7JywgJ319J107XG4gICAgdmFyIGV4cHJTdGFydFJlZyA9IG5ldyBSZWdFeHAoXG4gICAgICAgIHJlZ2V4cExpdGVyYWwoZGVsaW1pdGVyc1swXSkgKyAnXFxcXHMqKFtcXFxcc1xcXFxTXSs/KVxcXFxzKicgKyByZWdleHBMaXRlcmFsKGRlbGltaXRlcnNbMV0pLFxuICAgICAgICAnaWcnXG4gICAgKTtcblxuICAgIHZhciBleHByTWF0Y2g7XG5cbiAgICB2YXIgd2Fsa2VyID0gbmV3IFdhbGtlcihzb3VyY2UpO1xuICAgIHZhciBiZWZvcmVJbmRleCA9IDA7XG5cbiAgICB2YXIgZXhwciA9IHtcbiAgICAgICAgdHlwZTogRXhwclR5cGUuVEVYVCxcbiAgICAgICAgc2VnczogW11cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcHVzaFN0cmluZ1RvU2VnKHRleHQpIHtcbiAgICAgICAgdGV4dCAmJiBleHByLnNlZ3MucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICBsaXRlcmFsOiB0ZXh0LFxuICAgICAgICAgICAgdmFsdWU6IGRlY29kZUhUTUxFbnRpdHkodGV4dClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2hpbGUgKChleHByTWF0Y2ggPSB3YWxrZXIubWF0Y2goZXhwclN0YXJ0UmVnKSkgIT0gbnVsbCkge1xuICAgICAgICBwdXNoU3RyaW5nVG9TZWcod2Fsa2VyLmN1dChcbiAgICAgICAgICAgIGJlZm9yZUluZGV4LFxuICAgICAgICAgICAgd2Fsa2VyLmluZGV4IC0gZXhwck1hdGNoWzBdLmxlbmd0aFxuICAgICAgICApKTtcblxuICAgICAgICB2YXIgaW50ZXJwID0gcGFyc2VJbnRlcnAoZXhwck1hdGNoWzFdKTtcbiAgICAgICAgZXhwci5vcmlnaW5hbCA9IGV4cHIub3JpZ2luYWwgfHwgaW50ZXJwLm9yaWdpbmFsO1xuXG4gICAgICAgIGV4cHIuc2Vncy5wdXNoKGludGVycCk7XG4gICAgICAgIGJlZm9yZUluZGV4ID0gd2Fsa2VyLmluZGV4O1xuICAgIH1cblxuICAgIHB1c2hTdHJpbmdUb1NlZyh3YWxrZXIuY3V0KGJlZm9yZUluZGV4KSk7XG5cblxuXG4gICAgaWYgKGV4cHIuc2Vncy5sZW5ndGggPT09IDEgJiYgZXhwci5zZWdzWzBdLnR5cGUgPT09IEV4cHJUeXBlLlNUUklORykge1xuICAgICAgICBleHByLnZhbHVlID0gZXhwci5zZWdzWzBdLnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBleHByO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwYXJzZVRleHQ7XG5cblxuLyoqXG4gKiBAZmlsZSDop6PmnpDmjIfku6RcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIFdhbGtlciA9IHJlcXVpcmUoJy4vd2Fsa2VyJyk7XG4vLyB2YXIgcGFyc2VFeHByID0gcmVxdWlyZSgnLi9wYXJzZS1leHByJyk7XG4vLyB2YXIgcGFyc2VDYWxsID0gcmVxdWlyZSgnLi9wYXJzZS1jYWxsJyk7XG4vLyB2YXIgcGFyc2VUZXh0ID0gcmVxdWlyZSgnLi9wYXJzZS10ZXh0Jyk7XG4vLyB2YXIgcmVhZEFjY2Vzc29yID0gcmVxdWlyZSgnLi9yZWFkLWFjY2Vzc29yJyk7XG5cbi8qKlxuICog5oyH5Luk6Kej5p6Q5ZmoXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgZGlyZWN0aXZlUGFyc2VycyA9IHtcbiAgICAnZm9yJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciB3YWxrZXIgPSBuZXcgV2Fsa2VyKHZhbHVlKTtcbiAgICAgICAgdmFyIG1hdGNoID0gd2Fsa2VyLm1hdGNoKC9eXFxzKihbXFwkMC05YS16X10rKShcXHMqLFxccyooW1xcJDAtOWEtel9dKykpP1xccytpblxccysvaWcpO1xuXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpdGVtOiBwYXJzZUV4cHIobWF0Y2hbMV0pLFxuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUV4cHIobWF0Y2hbM10gfHwgJyRpbmRleCcpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZWFkQWNjZXNzb3Iod2Fsa2VyKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBGQVRBTF0gZm9yIHN5bnRheCBlcnJvcjogJyArIHZhbHVlKTtcbiAgICAgICAgLy8gI1tlbmRdXG4gICAgfSxcblxuICAgICdyZWYnOiBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZVRleHQodmFsdWUsIG9wdGlvbnMuZGVsaW1pdGVycylcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ2lmJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VFeHByKHZhbHVlLnJlcGxhY2UoLyheXFx7XFx7fFxcfVxcfSQpL2csICcnKSlcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ2VsaWYnOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUV4cHIodmFsdWUucmVwbGFjZSgvKF5cXHtcXHt8XFx9XFx9JCkvZywgJycpKVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnZWxzZSc6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHt9XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICdodG1sJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VFeHByKHZhbHVlLnJlcGxhY2UoLyheXFx7XFx7fFxcfVxcfSQpL2csICcnKSlcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ3RyYW5zaXRpb24nOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUNhbGwodmFsdWUpXG4gICAgICAgIH07XG4gICAgfVxufTtcblxuLyoqXG4gKiDop6PmnpDmjIfku6RcbiAqXG4gKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOaMh+S7pOWQjeensFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIOaMh+S7pOWAvFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMg6Kej5p6Q5Y+C5pWwXG4gKiBAcGFyYW0ge0FycmF5P30gb3B0aW9ucy5kZWxpbWl0ZXJzIOaPkuWAvOWIhumalOespuWIl+ihqFxuICovXG5mdW5jdGlvbiBwYXJzZURpcmVjdGl2ZShhTm9kZSwgbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2Vsc2UtaWYnKSB7XG4gICAgICAgIG5hbWUgPSAnZWxpZic7XG4gICAgfVxuXG4gICAgdmFyIHBhcnNlciA9IGRpcmVjdGl2ZVBhcnNlcnNbbmFtZV07XG4gICAgaWYgKHBhcnNlcikge1xuICAgICAgICAoYU5vZGUuZGlyZWN0aXZlc1tuYW1lXSA9IHBhcnNlcih2YWx1ZSwgb3B0aW9ucykpLnJhdyA9IHZhbHVlO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcGFyc2VEaXJlY3RpdmU7XG5cblxuLyoqXG4gKiBAZmlsZSDlr7nlsZ7mgKfkv6Hmga/ov5vooYzlpITnkIZcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcblxuLyoqXG4gKiDlr7nlsZ7mgKfkv6Hmga/ov5vooYzlpITnkIZcbiAqIOWvuee7hOS7tueahCBiaW5kcyDmiJbogIXnibnmrornmoTlsZ7mgKfvvIjmr5TlpoIgaW5wdXQg55qEIGNoZWNrZWTvvInpnIDopoHlpITnkIZcbiAqXG4gKiDmiYHlubPljJbvvJpcbiAqIOW9kyB0ZXh0IOino+aekOWPquacieS4gOmhueaXtu+8jOimgeS5iOWwseaYryBzdHJpbmfvvIzopoHkuYjlsLHmmK8gaW50ZXJwXG4gKiBpbnRlcnAg5pyJ5Y+v6IO95piv57uR5a6a5Yiw57uE5Lu25bGe5oCn55qE6KGo6L6+5byP77yM5LiN5biM5pyb6KKrIGV2YWwgdGV4dCDmiJAgc3RyaW5nXG4gKiDmiYDku6Xov5nph4zlgZrkuKrlpITnkIbvvIzlj6rmnInkuIDpobnml7bnm7TmjqXmir3lh7rmnaVcbiAqXG4gKiBib29s5bGe5oCn77yaXG4gKiDlvZPnu5HlrprpobnmsqHmnInlgLzml7bvvIzpu5jorqTkuLp0cnVlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3Ag5bGe5oCn5a+56LGhXG4gKi9cbmZ1bmN0aW9uIHBvc3RQcm9wKHByb3ApIHtcbiAgICB2YXIgZXhwciA9IHByb3AuZXhwcjtcblxuICAgIGlmIChleHByLnR5cGUgPT09IEV4cHJUeXBlLlRFWFQpIHtcbiAgICAgICAgc3dpdGNoIChleHByLnNlZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcHJvcC5leHByID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5CT09MLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBleHByID0gcHJvcC5leHByID0gZXhwci5zZWdzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChleHByLnR5cGUgPT09IEV4cHJUeXBlLklOVEVSUCAmJiBleHByLmZpbHRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3AuZXhwciA9IGV4cHIuZXhwcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHBvc3RQcm9wO1xuXG5cbi8qKlxuICogQGZpbGUg6Kej5p6Q5oq96LGh6IqC54K55bGe5oCnXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGtlYmFiMmNhbWVsID0gcmVxdWlyZSgnLi4vdXRpbC9rZWJhYjJjYW1lbCcpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi9leHByLXR5cGUnKTtcbi8vIHZhciBjcmVhdGVBY2Nlc3NvciA9IHJlcXVpcmUoJy4vY3JlYXRlLWFjY2Vzc29yJyk7XG4vLyB2YXIgcGFyc2VFeHByID0gcmVxdWlyZSgnLi9wYXJzZS1leHByJyk7XG4vLyB2YXIgcGFyc2VDYWxsID0gcmVxdWlyZSgnLi9wYXJzZS1jYWxsJyk7XG4vLyB2YXIgcGFyc2VUZXh0ID0gcmVxdWlyZSgnLi9wYXJzZS10ZXh0Jyk7XG4vLyB2YXIgcGFyc2VEaXJlY3RpdmUgPSByZXF1aXJlKCcuL3BhcnNlLWRpcmVjdGl2ZScpO1xuLy8gdmFyIHBvc3RQcm9wID0gcmVxdWlyZSgnLi9wb3N0LXByb3AnKTtcblxuXG4vKipcbiAqIOino+aekOaKveixoeiKgueCueWxnuaAp1xuICpcbiAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5bGe5oCn5ZCN56ewXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUg5bGe5oCn5YC8XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyDop6PmnpDlj4LmlbBcbiAqIEBwYXJhbSB7QXJyYXk/fSBvcHRpb25zLmRlbGltaXRlcnMg5o+S5YC85YiG6ZqU56ym5YiX6KGoXG4gKi9cbmZ1bmN0aW9uIGludGVncmF0ZUF0dHIoYU5vZGUsIG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgdmFyIHByZWZpeEluZGV4ID0gbmFtZS5pbmRleE9mKCctJyk7XG4gICAgdmFyIHJlYWxOYW1lO1xuICAgIHZhciBwcmVmaXg7XG5cbiAgICBpZiAocHJlZml4SW5kZXggPiAwKSB7XG4gICAgICAgIHByZWZpeCA9IG5hbWUuc2xpY2UoMCwgcHJlZml4SW5kZXgpO1xuICAgICAgICByZWFsTmFtZSA9IG5hbWUuc2xpY2UocHJlZml4SW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHByZWZpeCkge1xuICAgICAgICBjYXNlICdvbic6XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogcmVhbE5hbWUsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYU5vZGUuZXZlbnRzLnB1c2goZXZlbnQpO1xuXG4gICAgICAgICAgICB2YXIgY29sb25JbmRleDtcbiAgICAgICAgICAgIHdoaWxlICgoY29sb25JbmRleCA9IHZhbHVlLmluZGV4T2YoJzonKSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVyID0gdmFsdWUuc2xpY2UoMCwgY29sb25JbmRleCk7XG5cbiAgICAgICAgICAgICAgICAvLyBldmVudEhhbmRsZXIoXCJkZDphYVwiKSDov5nnp43mg4XlhrXkuI3og73nrpdtb2RpZmllcu+8jOmcgOimgei+qOivhlxuICAgICAgICAgICAgICAgIGlmICghL15bYS16XSskL2kudGVzdChtb2RpZmllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQubW9kaWZpZXJbbW9kaWZpZXJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKGNvbG9uSW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQuZXhwciA9IHBhcnNlQ2FsbCh2YWx1ZSwgW1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFjY2Vzc29yKFtcbiAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiBFeHByVHlwZS5TVFJJTkcsIHZhbHVlOiAnJGV2ZW50JyB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnc2FuJzpcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICBwYXJzZURpcmVjdGl2ZShhTm9kZSwgcmVhbE5hbWUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Byb3AnOlxuICAgICAgICAgICAgaW50ZWdyYXRlUHJvcChhTm9kZSwgcmVhbE5hbWUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Zhcic6XG4gICAgICAgICAgICBpZiAoIWFOb2RlLnZhcnMpIHtcbiAgICAgICAgICAgICAgICBhTm9kZS52YXJzID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlYWxOYW1lID0ga2ViYWIyY2FtZWwocmVhbE5hbWUpO1xuICAgICAgICAgICAgYU5vZGUudmFycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiByZWFsTmFtZSxcbiAgICAgICAgICAgICAgICBleHByOiBwYXJzZUV4cHIodmFsdWUucmVwbGFjZSgvKF5cXHtcXHt8XFx9XFx9JCkvZywgJycpKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaW50ZWdyYXRlUHJvcChhTm9kZSwgbmFtZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiDop6PmnpDmir3osaHoioLngrnnu5HlrprlsZ7mgKdcbiAqXG4gKiBAaW5uZXJcbiAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5bGe5oCn5ZCN56ewXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUg5bGe5oCn5YC8XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyDop6PmnpDlj4LmlbBcbiAqIEBwYXJhbSB7QXJyYXk/fSBvcHRpb25zLmRlbGltaXRlcnMg5o+S5YC85YiG6ZqU56ym5YiX6KGoXG4gKi9cbmZ1bmN0aW9uIGludGVncmF0ZVByb3AoYU5vZGUsIG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgLy8gcGFyc2UgdHdvIHdheSBiaW5kaW5nLCBlLmcuIHZhbHVlPVwiez1pZGVudD19XCJcbiAgICB2YXIgeE1hdGNoID0gdmFsdWUubWF0Y2goL15cXHs9XFxzKiguKj8pXFxzKj1cXH0kLyk7XG5cbiAgICBpZiAoeE1hdGNoKSB7XG4gICAgICAgIGFOb2RlLnByb3BzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGV4cHI6IHBhcnNlRXhwcih4TWF0Y2hbMV0pLFxuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHJhdzogdmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHBhcnNlIG5vcm1hbCBwcm9wXG4gICAgdmFyIHByb3AgPSB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGV4cHI6IHBhcnNlVGV4dCh2YWx1ZSwgb3B0aW9ucy5kZWxpbWl0ZXJzKSxcbiAgICAgICAgcmF3OiB2YWx1ZVxuICAgIH07XG5cbiAgICAvLyDov5nph4zkuI3og73miorlj6rmnInkuIDkuKrmj5LlgLznmoTlsZ7mgKfmir3lj5ZcbiAgICAvLyDlm6DkuLrmj5LlgLzph4znmoTlgLzlj6/og73mmK9odG1s54mH5q6177yM5a655piT6KKr5rOo5YWlXG4gICAgLy8g57uE5Lu255qE5pWw5o2u57uR5a6a5Zyo57uE5Lu2aW5pdOaXtuWBmuaKveWPllxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgIGVhY2gocHJvcC5leHByLnNlZ3MsIGZ1bmN0aW9uIChzZWcpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VnLnR5cGUgPT09IEV4cHJUeXBlLklOVEVSUCkge1xuICAgICAgICAgICAgICAgICAgICBzZWcuZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLkNBTEwsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjcmVhdGVBY2Nlc3NvcihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnXycgKyBwcm9wLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnY2hlY2tlZCc6XG4gICAgICAgICAgICBpZiAoYU5vZGUudGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIHBvc3RQcm9wKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgYU5vZGUucHJvcHMucHVzaChwcm9wKTtcbn1cblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpbnRlZ3JhdGVBdHRyO1xuXG5cbi8qKlxuICogQGZpbGUg6Kej5p6Q5qih5p2/XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBjcmVhdGVBTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLWEtbm9kZScpO1xuLy8gdmFyIFdhbGtlciA9IHJlcXVpcmUoJy4vd2Fsa2VyJyk7XG4vLyB2YXIgaW50ZWdyYXRlQXR0ciA9IHJlcXVpcmUoJy4vaW50ZWdyYXRlLWF0dHInKTtcbi8vIHZhciBwYXJzZVRleHQgPSByZXF1aXJlKCcuL3BhcnNlLXRleHQnKTtcbi8vIHZhciBhdXRvQ2xvc2VUYWdzID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9hdXRvLWNsb3NlLXRhZ3MnKTtcblxuLy8gI1tiZWdpbl0gZXJyb3JcbmZ1bmN0aW9uIGdldFhQYXRoKHN0YWNrLCBjdXJyZW50VGFnTmFtZSkge1xuICAgIHZhciBwYXRoID0gWydST09UJ107XG4gICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IHN0YWNrLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHBhdGgucHVzaChzdGFja1tpXS50YWdOYW1lKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRUYWdOYW1lKSB7XG4gICAgICAgIHBhdGgucHVzaChjdXJyZW50VGFnTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLmpvaW4oJz4nKTtcbn1cbi8vICNbZW5kXVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLW1heC1zdGF0ZW1lbnRzICovXG5cbi8qKlxuICog6Kej5p6QIHRlbXBsYXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSB0ZW1wbGF0Zea6kOeggVxuICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIOino+aekOWPguaVsFxuICogQHBhcmFtIHtzdHJpbmc/fSBvcHRpb25zLnRyaW1XaGl0ZXNwYWNlIOepuueZveaWh+acrOeahOWkhOeQhuetlueVpeOAgm5vbmV8Ymxhbmt8YWxsXG4gKiBAcGFyYW0ge0FycmF5P30gb3B0aW9ucy5kZWxpbWl0ZXJzIOaPkuWAvOWIhumalOespuWIl+ihqFxuICogQHJldHVybiB7QU5vZGV9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVGVtcGxhdGUoc291cmNlLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy50cmltV2hpdGVzcGFjZSA9IG9wdGlvbnMudHJpbVdoaXRlc3BhY2UgfHwgJ25vbmUnO1xuXG4gICAgdmFyIHJvb3ROb2RlID0gY3JlYXRlQU5vZGUoKTtcblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGU7XG4gICAgfVxuXG4gICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoLzwhLS0oW1xcc1xcU10qPyktLT4vbWcsICcnKS5yZXBsYWNlKC8oXlxccyt8XFxzKyQpL2csICcnKTtcbiAgICB2YXIgd2Fsa2VyID0gbmV3IFdhbGtlcihzb3VyY2UpO1xuXG4gICAgdmFyIHRhZ1JlZyA9IC88KFxcLyk/KFthLXowLTktXSspXFxzKi9pZztcbiAgICB2YXIgYXR0clJlZyA9IC8oWy06MC05YS16XFwoXFwpXFxbXFxdXSspKFxccyo9XFxzKihbJ1wiXSkoW15cXDNdKj8pXFwzKT9cXHMqL2lnO1xuXG4gICAgdmFyIHRhZ01hdGNoO1xuICAgIHZhciBjdXJyZW50Tm9kZSA9IHJvb3ROb2RlO1xuICAgIHZhciBzdGFjayA9IFtyb290Tm9kZV07XG4gICAgdmFyIHN0YWNrSW5kZXggPSAwO1xuICAgIHZhciBiZWZvcmVMYXN0SW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKCh0YWdNYXRjaCA9IHdhbGtlci5tYXRjaCh0YWdSZWcpKSAhPSBudWxsKSB7XG4gICAgICAgIHZhciB0YWdFbmQgPSB0YWdNYXRjaFsxXTtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSB0YWdNYXRjaFsyXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHB1c2hUZXh0Tm9kZShzb3VyY2Uuc2xpY2UoXG4gICAgICAgICAgICBiZWZvcmVMYXN0SW5kZXgsXG4gICAgICAgICAgICB3YWxrZXIuaW5kZXggLSB0YWdNYXRjaFswXS5sZW5ndGhcbiAgICAgICAgKSk7XG5cbiAgICAgICAgLy8gNjI6ID5cbiAgICAgICAgLy8gNDc6IC9cbiAgICAgICAgLy8g5aSE55CGIDwveHh4eCA+XG4gICAgICAgIGlmICh0YWdFbmQgJiYgd2Fsa2VyLmN1cnJlbnRDb2RlKCkgPT09IDYyKSB7XG4gICAgICAgICAgICAvLyDmu6HotrPlhbPpl63moIfnrb7nmoTmnaHku7bml7bvvIzlhbPpl63moIfnrb5cbiAgICAgICAgICAgIC8vIOWQkeS4iuafpeaJvuWIsOWvueW6lOagh+etvu+8jOaJvuS4jeWIsOaXtuW/veeVpeWFs+mXrVxuICAgICAgICAgICAgdmFyIGNsb3NlSW5kZXggPSBzdGFja0luZGV4O1xuXG4gICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgLy8g5aaC5p6c5q2j5Zyo6Zet5ZCI5LiA5Liq6Ieq6Zet5ZCI55qE5qCH562+77yM5L6L5aaCIDwvaW5wdXQ+77yM5oql6ZSZXG4gICAgICAgICAgICBpZiAoYXV0b0Nsb3NlVGFnc1t0YWdOYW1lXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignJ1xuICAgICAgICAgICAgICAgICAgICArICdbU0FOIEVSUk9SXSAnICsgZ2V0WFBhdGgoc3RhY2ssIHRhZ05hbWUpICsgJyBpcyBhIGBhdXRvIGNsb3NlZGAgdGFnLCAnXG4gICAgICAgICAgICAgICAgICAgICsgJ3NvIGl0IGNhbm5vdCBiZSBjbG9zZWQgd2l0aCA8LycgKyB0YWdOYW1lICsgJz4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5aaC5p6c5YWz6Zet55qEIHRhZyDlkozlvZPliY3miZPlvIDnmoTkuI3kuIDoh7TvvIzmiqXplJlcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzdGFja1tjbG9zZUluZGV4XS50YWdOYW1lICE9PSB0YWdOYW1lXG4gICAgICAgICAgICAgICAgLy8g6L+Z6YeM6KaB5oqKIHRhYmxlIOiHquWKqOa3u+WKoCB0Ym9keSDnmoTmg4XlhrXnu5nljrvmjolcbiAgICAgICAgICAgICAgICAmJiAhKHRhZ05hbWUgPT09ICd0YWJsZScgJiYgc3RhY2tbY2xvc2VJbmRleF0udGFnTmFtZSA9PT0gJ3Rib2R5JylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gJyArIGdldFhQYXRoKHN0YWNrKSArICcgaXMgY2xvc2VkIHdpdGggJyArIHRhZ05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgIHdoaWxlIChjbG9zZUluZGV4ID4gMCAmJiBzdGFja1tjbG9zZUluZGV4XS50YWdOYW1lICE9PSB0YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VJbmRleC0tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2xvc2VJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBzdGFja0luZGV4ID0gY2xvc2VJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBzdGFja1tzdGFja0luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdhbGtlci5nbygxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgIC8vIOWkhOeQhiA8L3h4eCDpnZ7mraPluLjpl63lkIjmoIfnrb5cbiAgICAgICAgZWxzZSBpZiAodGFnRW5kKSB7XG5cbiAgICAgICAgICAgIC8vIOWmguaenOmXreWQiOagh+etvuaXtu+8jOWMuemFjeWQjueahOS4i+S4gOS4quWtl+espuaYryA877yM5Y2z5LiL5LiA5Liq5qCH562+55qE5byA5aeL77yM6YKj5LmI5b2T5YmN6Zet5ZCI5qCH562+5pyq6Zet5ZCIXG4gICAgICAgICAgICBpZiAod2Fsa2VyLmN1cnJlbnRDb2RlKCkgPT09IDYwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCcnXG4gICAgICAgICAgICAgICAgICAgICsgJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaylcbiAgICAgICAgICAgICAgICAgICAgKyAnXFwncyBjbG9zZSB0YWcgbm90IGNsb3NlZCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDpl63lkIjmoIfnrb7mnInlsZ7mgKdcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignJ1xuICAgICAgICAgICAgICAgICsgJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaylcbiAgICAgICAgICAgICAgICArICdcXCdzIGNsb3NlIHRhZyBoYXMgYXR0cmlidXRlcydcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfVxuICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICBlbHNlIGlmICghdGFnRW5kKSB7XG4gICAgICAgICAgICB2YXIgYUVsZW1lbnQgPSBjcmVhdGVBTm9kZSh7XG4gICAgICAgICAgICAgICAgdGFnTmFtZTogdGFnTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgdGFnQ2xvc2UgPSBhdXRvQ2xvc2VUYWdzW3RhZ05hbWVdO1xuXG4gICAgICAgICAgICAvLyDop6PmnpAgYXR0cmlidXRlc1xuXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cbiAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xuXG4gICAgICAgICAgICAgICAgdmFyIG5leHRDaGFyQ29kZSA9IHdhbGtlci5jdXJyZW50Q29kZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8g5qCH562+57uT5p2f5pe26Lez5Ye6IGF0dHJpYnV0ZXMg6K+75Y+WXG4gICAgICAgICAgICAgICAgLy8g5qCH562+5Y+v6IO955u05o6l57uT5p2f5oiW6Zet5ZCI57uT5p2fXG4gICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyQ29kZSA9PT0gNjIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmdvKDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g6YGH5YiwIC8+IOaMiemXreWQiOWkhOeQhlxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHRDaGFyQ29kZSA9PT0gNDdcbiAgICAgICAgICAgICAgICAgICAgJiYgd2Fsa2VyLmNoYXJDb2RlKHdhbGtlci5pbmRleCArIDEpID09PSA2MlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuZ28oMik7XG4gICAgICAgICAgICAgICAgICAgIHRhZ0Nsb3NlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICAvLyDlnKjlpITnkIbkuIDkuKogb3BlbiDmoIfnrb7ml7bvvIzlpoLmnpzpgYfliLDkuoYgPO+8jCDljbPkuIvkuIDkuKrmoIfnrb7nmoTlvIDlp4vvvIzliJnlvZPliY3moIfnrb7mnKrog73mraPluLjpl63lkIjvvIzmiqXplJlcbiAgICAgICAgICAgICAgICBpZiAobmV4dENoYXJDb2RlID09PSA2MCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaywgdGFnTmFtZSkgKyAnIGlzIG5vdCBjbG9zZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAvLyDor7vlj5YgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgdmFyIGF0dHJNYXRjaCA9IHdhbGtlci5tYXRjaChhdHRyUmVnKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ck1hdGNoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5bGe5oCn5pyJID3vvIzkvYbmsqHlj5bliLAgdmFsdWXvvIzmiqXplJlcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmNoYXJDb2RlKGF0dHJNYXRjaC5pbmRleCArIGF0dHJNYXRjaFsxXS5sZW5ndGgpID09PSA2MVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgIWF0dHJNYXRjaFsyXVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ1tTQU4gRVJST1JdICcgKyBnZXRYUGF0aChzdGFjaywgdGFnTmFtZSkgKyAnIGF0dHJpYnV0ZSBgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYXR0ck1hdGNoWzFdICsgJ2AgaXMgbm90IHdyYXBwZWQgd2l0aCBcIlwiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgICAgICBpbnRlZ3JhdGVBdHRyKFxuICAgICAgICAgICAgICAgICAgICAgICAgYUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2hbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2hbMl0gPyBhdHRyTWF0Y2hbNF0gOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbWF0Y2ggaWYgZGlyZWN0aXZlIGZvciBlbHNlL2VsaWYgZGlyZWN0aXZlXG4gICAgICAgICAgICB2YXIgZWxzZURpcmVjdGl2ZSA9IGFFbGVtZW50LmRpcmVjdGl2ZXNbJ2Vsc2UnXSB8fCBhRWxlbWVudC5kaXJlY3RpdmVzLmVsaWY7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgICAgICBpZiAoZWxzZURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRDaGlsZHJlbkxlbiA9IGN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChwYXJlbnRDaGlsZHJlbkxlbi0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRDaGlsZCA9IGN1cnJlbnROb2RlLmNoaWxkcmVuW3BhcmVudENoaWxkcmVuTGVuXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENoaWxkLnRleHRFeHByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbi5zcGxpY2UocGFyZW50Q2hpbGRyZW5MZW4sIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudENoaWxkLmRpcmVjdGl2ZXNbJ2lmJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBGQVRFTF0gZWxzZSBub3QgbWF0Y2ggaWYuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hpbGQuZWxzZXMgPSBwYXJlbnRDaGlsZC5lbHNlcyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hpbGQuZWxzZXMucHVzaChhRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFFbGVtZW50LnRhZ05hbWUgPT09ICd0cicgJiYgY3VycmVudE5vZGUudGFnTmFtZSA9PT0gJ3RhYmxlJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGJvZHlOb2RlID0gY3JlYXRlQU5vZGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ3Rib2R5J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW4ucHVzaCh0Ym9keU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IHRib2R5Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tbKytzdGFja0luZGV4XSA9IHRib2R5Tm9kZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbi5wdXNoKGFFbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0YWdDbG9zZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gYUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgc3RhY2tbKytzdGFja0luZGV4XSA9IGFFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYmVmb3JlTGFzdEluZGV4ID0gd2Fsa2VyLmluZGV4O1xuICAgIH1cblxuICAgIHB1c2hUZXh0Tm9kZSh3YWxrZXIuY3V0KGJlZm9yZUxhc3RJbmRleCkpO1xuXG4gICAgcmV0dXJuIHJvb3ROb2RlO1xuXG4gICAgLyoqXG4gICAgICog5Zyo6K+75Y+W5qCI5Lit5re75Yqg5paH5pys6IqC54K5XG4gICAgICpcbiAgICAgKiBAaW5uZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCDmlofmnKzlhoXlrrlcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwdXNoVGV4dE5vZGUodGV4dCkge1xuICAgICAgICBzd2l0Y2ggKG9wdGlvbnMudHJpbVdoaXRlc3BhY2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ2JsYW5rJzpcbiAgICAgICAgICAgICAgICBpZiAoL15cXHMrJC8udGVzdCh0ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2FsbCc6XG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKF5cXHMrfFxccyskKS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW4ucHVzaChjcmVhdGVBTm9kZSh7XG4gICAgICAgICAgICAgICAgdGV4dEV4cHI6IHBhcnNlVGV4dCh0ZXh0LCBvcHRpb25zLmRlbGltaXRlcnMpXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIGVzbGludC1lbmFibGUgZmVjcy1tYXgtc3RhdGVtZW50cyAqL1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBwYXJzZVRlbXBsYXRlO1xuXG5cbi8qKlxuICogQGZpbGUg6buY6K6kZmlsdGVyXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8qIGVzbGludC1kaXNhYmxlIGZlY3MtY2FtZWxjYXNlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBndWFyZC1mb3ItaW4gKi9cblxuLyoqXG4gKiDpu5jorqRmaWx0ZXJcbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBERUZBVUxUX0ZJTFRFUlMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBVUkznvJbnoIFmaWx0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2Ug5rqQ5LiyXG4gICAgICogQHJldHVybiB7c3RyaW5nfSDmm7/mjaLnu5PmnpzkuLJcbiAgICAgKi9cbiAgICB1cmw6IGVuY29kZVVSSUNvbXBvbmVudCxcblxuICAgIF9jbGFzczogZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2Uuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9LFxuXG4gICAgX3N0eWxlOiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBrZXkgKyAnOicgKyBzb3VyY2Vba2V5XSArICc7JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfSxcblxuICAgIF9zZXA6IGZ1bmN0aW9uIChzb3VyY2UsIHNlcCkge1xuICAgICAgICByZXR1cm4gc291cmNlID8gc2VwICsgc291cmNlIDogc291cmNlO1xuICAgIH1cbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtY2FtZWxjYXNlICovXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IERFRkFVTFRfRklMVEVSUztcblxuXG4vKipcbiAqIEBmaWxlIOihqOi+vuW8j+iuoeeul1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIERFRkFVTFRfRklMVEVSUyA9IHJlcXVpcmUoJy4vZGVmYXVsdC1maWx0ZXJzJyk7XG4vLyB2YXIgZXZhbEFyZ3MgPSByZXF1aXJlKCcuL2V2YWwtYXJncycpO1xuLy8gdmFyIGRhdGFDYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS1jYWNoZScpO1xuXG4vKipcbiAqIOiuoeeul+ihqOi+vuW8j+eahOWAvFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOihqOi+vuW8j+WvueixoVxuICogQHBhcmFtIHtEYXRhfSBkYXRhIOaVsOaNruWuueWZqOWvueixoVxuICogQHBhcmFtIHtDb21wb25lbnQ9fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIGV2YWxFeHByKGV4cHIsIGRhdGEsIG93bmVyKSB7XG4gICAgaWYgKGV4cHIudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZXhwci52YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBkYXRhQ2FjaGUuZ2V0KGRhdGEsIGV4cHIpO1xuXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgc3dpdGNoIChleHByLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuVU5BUlk6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAhZXZhbEV4cHIoZXhwci5leHByLCBkYXRhLCBvd25lcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuQklOQVJZOlxuICAgICAgICAgICAgICAgIHZhciBsZWZ0VmFsdWUgPSBldmFsRXhwcihleHByLnNlZ3NbMF0sIGRhdGEsIG93bmVyKTtcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IGV2YWxFeHByKGV4cHIuc2Vnc1sxXSwgZGF0YSwgb3duZXIpO1xuXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4gICAgICAgICAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSAlIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlICsgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSAqIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlIC8gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgPCByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3NjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5NDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjE6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSA8PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTIyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTU6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE4MzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGVmdFZhbHVlID09PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjQ4OlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZWZ0VmFsdWUgfHwgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEV4cHJUeXBlLlRFUlRJQVJZOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gZXZhbEV4cHIoXG4gICAgICAgICAgICAgICAgICAgIGV4cHIuc2Vnc1tldmFsRXhwcihleHByLnNlZ3NbMF0sIGRhdGEsIG93bmVyKSA/IDEgOiAyXSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgb3duZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEV4cHJUeXBlLkFDQ0VTU09SOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gZGF0YS5nZXQoZXhwcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuSU5URVJQOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gZXZhbEV4cHIoZXhwci5leHByLCBkYXRhLCBvd25lcik7XG5cbiAgICAgICAgICAgICAgICBpZiAob3duZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBleHByLmZpbHRlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyID0gZXhwci5maWx0ZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlck5hbWUgPSBmaWx0ZXIubmFtZS5wYXRoc1swXS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG93bmVyLmZpbHRlcnNbZmlsdGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG93bmVyLmZpbHRlcnNbZmlsdGVyTmFtZV0uYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdLmNvbmNhdChldmFsQXJncyhmaWx0ZXIuYXJncywgZGF0YSwgb3duZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChERUZBVUxUX0ZJTFRFUlNbZmlsdGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IERFRkFVTFRfRklMVEVSU1tmaWx0ZXJOYW1lXShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5hcmdzWzBdID8gZmlsdGVyLmFyZ3NbMF0udmFsdWUgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1yZWRlY2xhcmUgKi9cbiAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuVEVYVDpcbiAgICAgICAgICAgICAgICB2YXIgYnVmID0gJyc7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBleHByLnNlZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWcgPSBleHByLnNlZ3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGJ1ZiArPSBzZWcudmFsdWUgfHwgZXZhbEV4cHIoc2VnLCBkYXRhLCBvd25lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBidWY7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhQ2FjaGUuc2V0KGRhdGEsIGV4cHIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGV2YWxFeHByO1xuXG5cbi8qKlxuICogQGZpbGUg5Li65Ye95pWw6LCD55So6K6h566X5Y+C5pWw5pWw57uE55qE5YC8XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG5cbi8qKlxuICog5Li65Ye95pWw6LCD55So6K6h566X5Y+C5pWw5pWw57uE55qE5YC8XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJncyDlj4LmlbDooajovr7lvI/liJfooahcbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDmlbDmja7njq/looNcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDnu4Tku7bnjq/looNcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBldmFsQXJncyhhcmdzLCBkYXRhLCBvd25lcikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goZXZhbEV4cHIoYXJnc1tpXSwgZGF0YSwgb3duZXIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBldmFsQXJncztcblxuXG4vKipcbiAqIEBmaWxlIOaVsOaNrue8k+WtmOeuoeeQhuWZqFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG5cbnZhciBkYXRhQ2FjaGVTb3VyY2UgPSB7fTtcbnZhciBkYXRhQ2FjaGVDbGVhcmx5ID0gMTtcblxuLyoqXG4gKiDmlbDmja7nvJPlrZjnrqHnkIblmahcbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBkYXRhQ2FjaGUgPSB7XG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkYXRhQ2FjaGVDbGVhcmx5KSB7XG4gICAgICAgICAgICBkYXRhQ2FjaGVDbGVhcmx5ID0gMTtcbiAgICAgICAgICAgIGRhdGFDYWNoZVNvdXJjZSA9IHt9O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24gKGRhdGEsIGV4cHIsIHZhbHVlKSB7XG4gICAgICAgIGlmIChleHByLnJhdykge1xuICAgICAgICAgICAgZGF0YUNhY2hlQ2xlYXJseSA9IDA7XG4gICAgICAgICAgICAoZGF0YUNhY2hlU291cmNlW2RhdGEuaWRdID0gZGF0YUNhY2hlU291cmNlW2RhdGEuaWRdIHx8IHt9KVtleHByLnJhd10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChkYXRhLCBleHByKSB7XG4gICAgICAgIGlmIChleHByLnJhdyAmJiBkYXRhQ2FjaGVTb3VyY2VbZGF0YS5pZF0pIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhQ2FjaGVTb3VyY2VbZGF0YS5pZF1bZXhwci5yYXddO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBkYXRhQ2FjaGU7XG5cblxuLyoqXG4gKiBAZmlsZSDmr5TovoPlj5jmm7Tooajovr7lvI/kuI7nm67moIfooajovr7lvI/kuYvpl7TnmoTlhbPns7tcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4vZXZhbC1leHByJyk7XG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuXG4vKipcbiAqIOWIpOaWreWPmOabtOihqOi+vuW8j+S4juWkmuS4quihqOi+vuW8j+S5i+mXtOeahOWFs+ezu++8jDDkuLrlrozlhajmsqHlhbPns7vvvIwx5Li65pyJ5YWz57O7XG4gKlxuICogQGlubmVyXG4gKiBAcGFyYW0ge09iamVjdH0gY2hhbmdlRXhwciDnm67moIfooajovr7lvI9cbiAqIEBwYXJhbSB7QXJyYXl9IGV4cHJzIOWkmuS4qua6kOihqOi+vuW8j1xuICogQHBhcmFtIHtEYXRhfSBkYXRhIOihqOi+vuW8j+aJgOWxnuaVsOaNrueOr+Wig1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjaGFuZ2VFeHByQ29tcGFyZUV4cHJzKGNoYW5nZUV4cHIsIGV4cHJzLCBkYXRhKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBleHBycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZUV4cHIsIGV4cHJzW2ldLCBkYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbn1cblxuLyoqXG4gKiDmr5TovoPlj5jmm7Tooajovr7lvI/kuI7nm67moIfooajovr7lvI/kuYvpl7TnmoTlhbPns7vvvIznlKjkuo7op4blm77mm7TmlrDliKTmlq1cbiAqIOinhuWbvuabtOaWsOmcgOimgeagueaNruWFtuWFs+ezu++8jOWBmuWHuuebuOW6lOeahOabtOaWsOihjOS4ulxuICpcbiAqIDA6IOWujOWFqOayoeWFs+ezu1xuICogMTog5Y+Y5pu06KGo6L6+5byP5piv55uu5qCH6KGo6L6+5byP55qE5q+N6aG5KOWmgmHkuI5hLmIpIOaIliDooajnpLrpnIDopoHlrozlhajlj5jljJZcbiAqIDI6IOWPmOabtOihqOi+vuW8j+aYr+ebruagh+ihqOi+vuW8j+ebuOetiVxuICogPjI6IOWPmOabtOihqOi+vuW8j+aYr+ebruagh+ihqOi+vuW8j+eahOWtkOmhue+8jOWmgmEuYi5j5LiOYS5iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNoYW5nZUV4cHIg5Y+Y5pu06KGo6L6+5byPXG4gKiBAcGFyYW0ge09iamVjdH0gZXhwciDopoHmr5TovoPnmoTnm67moIfooajovr7lvI9cbiAqIEBwYXJhbSB7RGF0YX0gZGF0YSDooajovr7lvI/miYDlsZ7mlbDmja7njq/looNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgZXhwciwgZGF0YSkge1xuICAgIHN3aXRjaCAoZXhwci50eXBlKSB7XG4gICAgICAgIGNhc2UgRXhwclR5cGUuQUNDRVNTT1I6XG4gICAgICAgICAgICB2YXIgcGF0aHMgPSBleHByLnBhdGhzO1xuICAgICAgICAgICAgdmFyIGxlbiA9IHBhdGhzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VQYXRocyA9IGNoYW5nZUV4cHIucGF0aHM7XG4gICAgICAgICAgICB2YXIgY2hhbmdlTGVuID0gY2hhbmdlUGF0aHMubGVuZ3RoO1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gMTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aEV4cHIgPSBwYXRoc1tpXTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXRoRXhwci50eXBlID09PSBFeHByVHlwZS5BQ0NFU1NPUlxuICAgICAgICAgICAgICAgICAgICAmJiBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBwYXRoRXhwciwgZGF0YSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiBpIDwgY2hhbmdlTGVuXG4gICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuICAgICAgICAgICAgICAgICAgICAmJiAocGF0aEV4cHIudmFsdWUgfHwgZXZhbEV4cHIocGF0aEV4cHIsIGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgIT0gKGNoYW5nZVBhdGhzW2ldLnZhbHVlIHx8IGV2YWxFeHByKGNoYW5nZVBhdGhzW2ldLCBkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBNYXRoLm1heCgxLCBjaGFuZ2VMZW4gLSBsZW4gKyAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgY2FzZSBFeHByVHlwZS5VTkFSWTpcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCBleHByLmV4cHIsIGRhdGEpID8gMSA6IDA7XG5cblxuICAgICAgICBjYXNlIEV4cHJUeXBlLlRFWFQ6XG4gICAgICAgIGNhc2UgRXhwclR5cGUuQklOQVJZOlxuICAgICAgICBjYXNlIEV4cHJUeXBlLlRFUlRJQVJZOlxuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZUV4cHJDb21wYXJlRXhwcnMoY2hhbmdlRXhwciwgZXhwci5zZWdzLCBkYXRhKTtcblxuICAgICAgICBjYXNlIEV4cHJUeXBlLklOVEVSUDpcbiAgICAgICAgICAgIGlmICghY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgZXhwci5leHByLCBkYXRhKSkge1xuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJSZXN1bHQ7XG4gICAgICAgICAgICAgICAgZWFjaChleHByLmZpbHRlcnMsIGZ1bmN0aW9uIChmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyUmVzdWx0ID0gY2hhbmdlRXhwckNvbXBhcmVFeHBycyhjaGFuZ2VFeHByLCBmaWx0ZXIuYXJncywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhZmlsdGVyUmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlclJlc3VsdCA/IDEgOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY2hhbmdlRXhwckNvbXBhcmU7XG5cblxuLyoqXG4gKiBAZmlsZSDmlbDmja7lj5jmm7TnsbvlnovmnprkuL5cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog5pWw5o2u5Y+Y5pu057G75Z6L5p6a5Li+XG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgRGF0YUNoYW5nZVR5cGUgPSB7XG4gICAgU0VUOiAxLFxuICAgIFNQTElDRTogMlxufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gRGF0YUNoYW5nZVR5cGU7XG5cblxuLyoqXG4gKiBAZmlsZSDnlJ/lkb3lkajmnJ/nsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbmZ1bmN0aW9uIGxpZmVDeWNsZU93bklzKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpc1tuYW1lXTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy12YWxpZC12YXItanNkb2MgKi9cbi8qKlxuICog6IqC54K555Sf5ZG95ZGo5pyf5L+h5oGvXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgTGlmZUN5Y2xlID0ge1xuICAgIHN0YXJ0OiB7fSxcblxuICAgIGNvbXBpbGVkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgaW5pdGVkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWUsXG4gICAgICAgIGluaXRlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICBwYWludGluZzoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlLFxuICAgICAgICBpbml0ZWQ6IHRydWUsXG4gICAgICAgIHBhaW50aW5nOiB0cnVlXG4gICAgfSxcblxuICAgIGNyZWF0ZWQ6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBjb21waWxlZDogdHJ1ZSxcbiAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICBjcmVhdGVkOiB0cnVlXG4gICAgfSxcblxuICAgIGF0dGFjaGVkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWUsXG4gICAgICAgIGluaXRlZDogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZDogdHJ1ZSxcbiAgICAgICAgYXR0YWNoZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgbGVhdmluZzoge1xuICAgICAgICBpczogbGlmZUN5Y2xlT3duSXMsXG4gICAgICAgIGNvbXBpbGVkOiB0cnVlLFxuICAgICAgICBpbml0ZWQ6IHRydWUsXG4gICAgICAgIGNyZWF0ZWQ6IHRydWUsXG4gICAgICAgIGF0dGFjaGVkOiB0cnVlLFxuICAgICAgICBsZWF2aW5nOiB0cnVlXG4gICAgfSxcblxuICAgIGRldGFjaGVkOiB7XG4gICAgICAgIGlzOiBsaWZlQ3ljbGVPd25JcyxcbiAgICAgICAgY29tcGlsZWQ6IHRydWUsXG4gICAgICAgIGluaXRlZDogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZDogdHJ1ZSxcbiAgICAgICAgZGV0YWNoZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgZGlzcG9zZWQ6IHtcbiAgICAgICAgaXM6IGxpZmVDeWNsZU93bklzLFxuICAgICAgICBkaXNwb3NlZDogdHJ1ZVxuICAgIH1cbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZlY3MtdmFsaWQtdmFyLWpzZG9jICovXG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gTGlmZUN5Y2xlO1xuXG5cbi8qKlxuICogQGZpbGUg6IqC54K557G75Z6LXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOiKgueCueexu+Wei1xuICpcbiAqIEBjb25zdFxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIE5vZGVUeXBlID0ge1xuICAgIFRFWFQ6IDEsXG4gICAgSUY6IDIsXG4gICAgRk9SOiAzLFxuICAgIEVMRU06IDQsXG4gICAgQ01QVDogNSxcbiAgICBTTE9UOiA2LFxuICAgIFRQTDogN1xufTtcblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gTm9kZVR5cGU7XG5cblxuLyoqXG4gKiBAZmlsZSDojrflj5YgQU5vZGUgcHJvcHMg5pWw57uE5Lit55u45bqUIG5hbWUg55qE6aG5XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOiOt+WPliBBTm9kZSBwcm9wcyDmlbDnu4TkuK3nm7jlupQgbmFtZSDnmoTpoblcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYU5vZGUgQU5vZGXlr7nosaFcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIG5hbWXlsZ7mgKfljLnphY3kuLJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0QU5vZGVQcm9wKGFOb2RlLCBuYW1lKSB7XG4gICAgdmFyIGluZGV4ID0gYU5vZGUuaG90c3BvdC5wcm9wc1tuYW1lXTtcbiAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYU5vZGUucHJvcHNbaW5kZXhdO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ2V0QU5vZGVQcm9wO1xuXG5cbi8qKlxuICogQGZpbGUg6I635Y+W5bGe5oCn5aSE55CG5a+56LGhXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgY29udGFpbnMgPSByZXF1aXJlKCcuLi91dGlsL2NvbnRhaW5zJyk7XG4vLyB2YXIgZW1wdHkgPSByZXF1aXJlKCcuLi91dGlsL2VtcHR5Jyk7XG4vLyB2YXIgc3ZnVGFncyA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvc3ZnLXRhZ3MnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgZ2V0QU5vZGVQcm9wID0gcmVxdWlyZSgnLi9nZXQtYS1ub2RlLXByb3AnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG5cblxuLyoqXG4gKiBIVE1MIOWxnuaAp+WSjCBET00g5pON5L2c5bGe5oCn55qE5a+554Wn6KGoXG4gKlxuICogQGlubmVyXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBIVE1MX0FUVFJfUFJPUF9NQVAgPSB7XG4gICAgJ3JlYWRvbmx5JzogJ3JlYWRPbmx5JyxcbiAgICAnY2VsbHBhZGRpbmcnOiAnY2VsbFBhZGRpbmcnLFxuICAgICdjZWxsc3BhY2luZyc6ICdjZWxsU3BhY2luZycsXG4gICAgJ2NvbHNwYW4nOiAnY29sU3BhbicsXG4gICAgJ3Jvd3NwYW4nOiAncm93U3BhbicsXG4gICAgJ3ZhbGlnbic6ICd2QWxpZ24nLFxuICAgICd1c2VtYXAnOiAndXNlTWFwJyxcbiAgICAnZnJhbWVib3JkZXInOiAnZnJhbWVCb3JkZXInLFxuICAgICdmb3InOiAnaHRtbEZvcidcbn07XG5cbi8qKlxuICog6buY6K6k55qE5YWD57Sg55qE5bGe5oCn6K6+572u55qE5Y+Y5o2i5pa55rOVXG4gKlxuICogQGlubmVyXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG52YXIgZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlciA9IHtcbiAgICBwcm9wOiBmdW5jdGlvbiAoZWwsIHZhbHVlLCBuYW1lLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBwcm9wTmFtZSA9IEhUTUxfQVRUUl9QUk9QX01BUFtuYW1lXSB8fCBuYW1lO1xuXG4gICAgICAgIC8vIGlucHV0IOeahCB0eXBlIOaYr+S4queJueauiuWxnuaAp++8jOWFtuWunuS5n+W6lOivpeeUqCBzZXRBdHRyaWJ1dGVcbiAgICAgICAgLy8g5L2G5pivIHR5cGUg5LiN5bqU6K+l6L+Q6KGM5pe25Yqo5oCB5pS55Y+Y77yM5ZCm5YiZ5Lya5pyJ5YW85a655oCn6Zeu6aKYXG4gICAgICAgIC8vIOaJgOS7pei/memHjOebtOaOpeWwseS4jeeuoeS6hlxuICAgICAgICBpZiAocHJvcE5hbWUgaW4gZWwpIHtcbiAgICAgICAgICAgIGVsW3Byb3BOYW1lXSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF0dHJpYnV0ZSDnu5HlrprnmoTmmK8gdGV4dO+8jOaJgOS7peS4jeS8muWHuueOsCBudWxsIOeahOaDheWGte+8jOi/memHjOaXoOmcgOWkhOeQhlxuICAgICAgICAvLyDmjaLlj6Xor53mnaXor7TvvIxzYW4g5piv5YGa5LiN5YiwIGF0dHJpYnV0ZSDml7bmnInml7bml6DnmoRcbiAgICAgICAgLy8gaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgLy8gICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgLy8gfVxuICAgIH0sXG5cbiAgICBvdXRwdXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBiaW5kSW5mbywgZGF0YSkge1xuICAgICAgICBkYXRhLnNldChiaW5kSW5mby5leHByLCBlbGVtZW50LmVsW2JpbmRJbmZvLm5hbWVdLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICBpZDogZWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICBwcm9wOiBiaW5kSW5mby5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbnZhciBzdmdQcm9wSGFuZGxlciA9IHtcbiAgICBwcm9wOiBmdW5jdGlvbiAoZWwsIHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxudmFyIGJvb2xQcm9wSGFuZGxlciA9IHtcbiAgICBwcm9wOiBmdW5jdGlvbiAoZWwsIHZhbHVlLCBuYW1lLCBlbGVtZW50LCBwcm9wKSB7XG4gICAgICAgIHZhciBwcm9wTmFtZSA9IEhUTUxfQVRUUl9QUk9QX01BUFtuYW1lXSB8fCBuYW1lO1xuICAgICAgICBlbFtwcm9wTmFtZV0gPSAhIShwcm9wICYmIHByb3AucmF3ID09PSAnJ1xuICAgICAgICAgICAgfHwgdmFsdWUgJiYgdmFsdWUgIT09ICdmYWxzZScgJiYgdmFsdWUgIT09ICcwJyk7XG4gICAgfVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgZmVjcy1wcm9wZXJ0aWVzLXF1b3RlICovXG4vKipcbiAqIOm7mOiupOeahOWxnuaAp+iuvue9ruWPmOaNouaWueazlVxuICpcbiAqIEBpbm5lclxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXJzID0ge1xuICAgIHN0eWxlOiB7XG4gICAgICAgIHByb3A6IGZ1bmN0aW9uIChlbCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAnY2xhc3MnOiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgcHJvcDogZnVuY3Rpb24gKGVsLCB2YWx1ZSkge1xuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2xvdDoge1xuICAgICAgICBwcm9wOiBlbXB0eVxuICAgIH0sXG5cbiAgICByZWFkb25seTogYm9vbFByb3BIYW5kbGVyLFxuICAgIGRpc2FibGVkOiBib29sUHJvcEhhbmRsZXIsXG4gICAgYXV0b2ZvY3VzOiBib29sUHJvcEhhbmRsZXIsXG4gICAgcmVxdWlyZWQ6IGJvb2xQcm9wSGFuZGxlcixcbiAgICBkcmFnZ2FibGU6IGJvb2xQcm9wSGFuZGxlclxufTtcbi8qIGVzbGludC1lbmFibGUgZmVjcy1wcm9wZXJ0aWVzLXF1b3RlICovXG5cbnZhciBhbmFsSW5wdXRDaGVja2VyID0ge1xuICAgIGNoZWNrYm94OiBjb250YWlucyxcbiAgICByYWRpbzogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gYW5hbElucHV0Q2hlY2tlZFN0YXRlKGVsZW1lbnQsIHZhbHVlLCBvcGVyKSB7XG4gICAgdmFyIGJpbmRWYWx1ZSA9IGdldEFOb2RlUHJvcChlbGVtZW50LmFOb2RlLCAndmFsdWUnKTtcbiAgICB2YXIgYmluZFR5cGUgPSBnZXRBTm9kZVByb3AoZWxlbWVudC5hTm9kZSwgJ3R5cGUnKTtcblxuICAgIGlmIChiaW5kVmFsdWUgJiYgYmluZFR5cGUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBldmFsRXhwcihiaW5kVHlwZS5leHByLCBlbGVtZW50LnNjb3BlLCBlbGVtZW50Lm93bmVyKTtcblxuICAgICAgICBpZiAoYW5hbElucHV0Q2hlY2tlclt0eXBlXSkge1xuICAgICAgICAgICAgdmFyIGJpbmRDaGVja2VkID0gZ2V0QU5vZGVQcm9wKGVsZW1lbnQuYU5vZGUsICdjaGVja2VkJyk7XG4gICAgICAgICAgICBpZiAoIWJpbmRDaGVja2VkLmhpbnRFeHByKSB7XG4gICAgICAgICAgICAgICAgYmluZENoZWNrZWQuaGludEV4cHIgPSBiaW5kVmFsdWUuZXhwcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICEhYW5hbElucHV0Q2hlY2tlclt0eXBlXShcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBldmFsRXhwcihiaW5kVmFsdWUuZXhwciwgZWxlbWVudC5zY29wZSwgZWxlbWVudC5vd25lcilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBlbGVtZW50UHJvcEhhbmRsZXJzID0ge1xuICAgIGlucHV0OiB7XG4gICAgICAgIG11bHRpcGxlOiBib29sUHJvcEhhbmRsZXIsXG4gICAgICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgICAgIHByb3A6IGZ1bmN0aW9uIChlbCwgdmFsdWUsIG5hbWUsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBhbmFsSW5wdXRDaGVja2VkU3RhdGUoZWxlbWVudCwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgYm9vbFByb3BIYW5kbGVyLnByb3AoXG4gICAgICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSAhPSBudWxsID8gc3RhdGUgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2NoZWNrZWQnLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG91dHB1dDogZnVuY3Rpb24gKGVsZW1lbnQsIGJpbmRJbmZvLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZWxlbWVudC5lbDtcbiAgICAgICAgICAgICAgICB2YXIgYmluZFZhbHVlID0gZ2V0QU5vZGVQcm9wKGVsZW1lbnQuYU5vZGUsICd2YWx1ZScpO1xuICAgICAgICAgICAgICAgIHZhciBiaW5kVHlwZSA9IGdldEFOb2RlUHJvcChlbGVtZW50LmFOb2RlLCAndHlwZScpIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGJpbmRWYWx1ZSAmJiBiaW5kVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGJpbmRUeXBlLnJhdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbZWwuY2hlY2tlZCA/ICdwdXNoJyA6ICdyZW1vdmUnXShiaW5kSW5mby5leHByLCBlbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2hlY2tlZCAmJiBkYXRhLnNldChiaW5kSW5mby5leHByLCBlbC52YWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogYmluZEluZm8ubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlci5vdXRwdXQoZWxlbWVudCwgYmluZEluZm8sIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9wdGlvbjoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgcHJvcDogZnVuY3Rpb24gKGVsLCB2YWx1ZSwgbmFtZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXIucHJvcChlbCwgdmFsdWUsIG5hbWUsIGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uU2VsZWN0ZWQoZWxlbWVudCwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2VsZWN0OiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBwcm9wOiBmdW5jdGlvbiAoZWwsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZWwudmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG91dHB1dDogZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlci5vdXRwdXRcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGlzT3B0aW9uU2VsZWN0ZWQoZWxlbWVudCwgdmFsdWUpIHtcbiAgICB2YXIgcGFyZW50U2VsZWN0ID0gZWxlbWVudC5wYXJlbnQ7XG4gICAgd2hpbGUgKHBhcmVudFNlbGVjdCkge1xuICAgICAgICBpZiAocGFyZW50U2VsZWN0LnRhZ05hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudFNlbGVjdCA9IHBhcmVudFNlbGVjdC5wYXJlbnQ7XG4gICAgfVxuXG5cbiAgICBpZiAocGFyZW50U2VsZWN0KSB7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IG51bGw7XG4gICAgICAgIHZhciBwcm9wO1xuICAgICAgICB2YXIgZXhwcjtcblxuICAgICAgICBpZiAoKHByb3AgPSBnZXRBTm9kZVByb3AocGFyZW50U2VsZWN0LmFOb2RlLCAndmFsdWUnKSlcbiAgICAgICAgICAgICYmIChleHByID0gcHJvcC5leHByKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlID0gcGFyZW50U2VsZWN0Lm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUXG4gICAgICAgICAgICAgICAgPyBldmFsRXhwcihleHByLCBwYXJlbnRTZWxlY3QuZGF0YSwgcGFyZW50U2VsZWN0KVxuICAgICAgICAgICAgICAgIDogZXZhbEV4cHIoZXhwciwgcGFyZW50U2VsZWN0LnNjb3BlLCBwYXJlbnRTZWxlY3Qub3duZXIpXG4gICAgICAgICAgICAgICAgfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0VmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIOiOt+WPluWxnuaAp+WkhOeQhuWvueixoVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIOWFg+e0oHRhZ1xuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJOYW1lIOWxnuaAp+WQjVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXRQcm9wSGFuZGxlcih0YWdOYW1lLCBhdHRyTmFtZSkge1xuICAgIGlmIChzdmdUYWdzW3RhZ05hbWVdKSB7XG4gICAgICAgIHJldHVybiBzdmdQcm9wSGFuZGxlcjtcbiAgICB9XG5cbiAgICB2YXIgdGFnUHJvcEhhbmRsZXJzID0gZWxlbWVudFByb3BIYW5kbGVyc1t0YWdOYW1lXTtcbiAgICBpZiAoIXRhZ1Byb3BIYW5kbGVycykge1xuICAgICAgICB0YWdQcm9wSGFuZGxlcnMgPSBlbGVtZW50UHJvcEhhbmRsZXJzW3RhZ05hbWVdID0ge307XG4gICAgfVxuXG4gICAgdmFyIHByb3BIYW5kbGVyID0gdGFnUHJvcEhhbmRsZXJzW2F0dHJOYW1lXTtcbiAgICBpZiAoIXByb3BIYW5kbGVyKSB7XG4gICAgICAgIHByb3BIYW5kbGVyID0gZGVmYXVsdEVsZW1lbnRQcm9wSGFuZGxlcnNbYXR0ck5hbWVdIHx8IGRlZmF1bHRFbGVtZW50UHJvcEhhbmRsZXI7XG4gICAgICAgIHRhZ1Byb3BIYW5kbGVyc1thdHRyTmFtZV0gPSBwcm9wSGFuZGxlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcEhhbmRsZXI7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdldFByb3BIYW5kbGVyO1xuXG5cbi8qKlxuICogQGZpbGUg5Yik5pat5Y+Y5pu05piv5ZCm5p2l5rqQ5LqO5YWD57SgXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOWIpOaWreWPmOabtOaYr+WQpuadpea6kOS6juWFg+e0oO+8jOadpea6kOS6juWFg+e0oOaXtu+8jOinhuWbvuabtOaWsOmcgOimgemYu+aWrVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuZ2Ug5Y+Y5pu05a+56LGhXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQg5YWD57SgXG4gKiBAcGFyYW0ge3N0cmluZz99IHByb3BOYW1lIOWxnuaAp+WQje+8jOWPr+mAieOAgumcgOimgeeyvuehruWIpOaWreaYr+WQpuadpea6kOS6juatpOWxnuaAp+aXtuS8oOWFpVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNEYXRhQ2hhbmdlQnlFbGVtZW50KGNoYW5nZSwgZWxlbWVudCwgcHJvcE5hbWUpIHtcbiAgICB2YXIgY2hhbmdlVGFyZ2V0ID0gY2hhbmdlLm9wdGlvbi50YXJnZXQ7XG4gICAgcmV0dXJuIGNoYW5nZVRhcmdldCAmJiBjaGFuZ2VUYXJnZXQuaWQgPT09IGVsZW1lbnQuaWRcbiAgICAgICAgJiYgKCFwcm9wTmFtZSB8fCBjaGFuZ2VUYXJnZXQucHJvcCA9PT0gcHJvcE5hbWUpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpc0RhdGFDaGFuZ2VCeUVsZW1lbnQ7XG5cblxuLyoqXG4gKiBAZmlsZSDlnKjlr7nosaHkuIrkvb/nlKhhY2Nlc3NvcuihqOi+vuW8j+afpeaJvuaWueazlVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcblxuLyoqXG4gKiDlnKjlr7nosaHkuIrkvb/nlKhhY2Nlc3NvcuihqOi+vuW8j+afpeaJvuaWueazlVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ug5rqQ5a+56LGhXG4gKiBAcGFyYW0ge09iamVjdH0gbmFtZUV4cHIg6KGo6L6+5byPXG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gZmluZE1ldGhvZChzb3VyY2UsIG5hbWVFeHByLCBkYXRhKSB7XG4gICAgdmFyIG1ldGhvZCA9IHNvdXJjZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBtZXRob2QgIT0gbnVsbCAmJiBpIDwgbmFtZUV4cHIucGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWV0aG9kID0gbWV0aG9kW2V2YWxFeHByKG5hbWVFeHByLnBhdGhzW2ldLCBkYXRhKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGhvZDtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZmluZE1ldGhvZDtcblxuXG4vKipcbiAqIEBmaWxlIOaVsOaNruexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi9ldmFsLWV4cHInKTtcbi8vIHZhciBEYXRhQ2hhbmdlVHlwZSA9IHJlcXVpcmUoJy4vZGF0YS1jaGFuZ2UtdHlwZScpO1xuLy8gdmFyIGNyZWF0ZUFjY2Vzc29yID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hY2Nlc3NvcicpO1xuLy8gdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4uL3BhcnNlci9wYXJzZS1leHByJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIGRhdGFDYWNoZSA9IHJlcXVpcmUoJy4vZGF0YS1jYWNoZScpO1xuXG4vKipcbiAqIOaVsOaNruexu1xuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtPYmplY3Q/fSBkYXRhIOWIneWni+aVsOaNrlxuICogQHBhcmFtIHtNb2RlbD99IHBhcmVudCDniLbnuqfmlbDmja7lrrnlmahcbiAqL1xuZnVuY3Rpb24gRGF0YShkYXRhLCBwYXJlbnQpIHtcbiAgICB0aGlzLmlkID0gZ3VpZCgpO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucmF3ID0gZGF0YSB8fCB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xufVxuXG4vLyAjW2JlZ2luXSBlcnJvclxuLy8g5Lul5LiL5Lik5Liq5Ye95pWw5Y+q5Zyo5byA5Y+R5qih5byP5LiL5Y+v55So77yM5Zyo55Sf5Lqn5qih5byP5LiL5LiN5a2Y5ZyoXG4vKipcbiAqIERhdGFUeXBlcyDmo4DmtYtcbiAqL1xuRGF0YS5wcm90b3R5cGUuY2hlY2tEYXRhVHlwZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudHlwZUNoZWNrZXIpIHtcbiAgICAgICAgdGhpcy50eXBlQ2hlY2tlcih0aGlzLnJhdyk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDorr7nva4gdHlwZSBjaGVja2VyXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IHR5cGVDaGVja2VyIOexu+Wei+agoemqjOWZqFxuICovXG5EYXRhLnByb3RvdHlwZS5zZXRUeXBlQ2hlY2tlciA9IGZ1bmN0aW9uICh0eXBlQ2hlY2tlcikge1xuICAgIHRoaXMudHlwZUNoZWNrZXIgPSB0eXBlQ2hlY2tlcjtcbn07XG5cbi8vICNbZW5kXVxuXG4vKipcbiAqIOa3u+WKoOaVsOaNruWPmOabtOeahOS6i+S7tuebkeWQrOWZqFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOebkeWQrOWHveaVsFxuICovXG5EYXRhLnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbn07XG5cbi8qKlxuICog56e76Zmk5pWw5o2u5Y+Y5pu055qE5LqL5Lu255uR5ZCs5ZmoXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gKi9cbkRhdGEucHJvdG90eXBlLnVubGlzdGVuID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgdmFyIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lciB8fCB0aGlzLmxpc3RlbmVyc1tsZW5dID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxlbiwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIOinpuWPkeaVsOaNruWPmOabtFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuZ2Ug5Y+Y5pu05L+h5oGv5a+56LGhXG4gKi9cbkRhdGEucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgaWYgKGNoYW5nZS5vcHRpb24uc2lsZW50IHx8IGNoYW5nZS5vcHRpb24uc2lsZW5jZSB8fCBjaGFuZ2Uub3B0aW9uLnF1aWV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2ldLmNhbGwodGhpcywgY2hhbmdlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOiOt+WPluaVsOaNrumhuVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdD99IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0ge0RhdGE/fSBjYWxsZWUg5b2T5YmN5pWw5o2u6I635Y+W55qE6LCD55So546v5aKDXG4gKiBAcmV0dXJuIHsqfVxuICovXG5EYXRhLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoZXhwciwgY2FsbGVlKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5yYXc7XG4gICAgaWYgKCFleHByKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgdmFyIHBhdGhzID0gZXhwci5wYXRocztcbiAgICBjYWxsZWUgPSBjYWxsZWUgfHwgdGhpcztcblxuICAgIHZhbHVlID0gdmFsdWVbcGF0aHNbMF0udmFsdWVdO1xuXG4gICAgaWYgKHZhbHVlID09IG51bGwgJiYgdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnBhcmVudC5nZXQoZXhwciwgY2FsbGVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxLCBsID0gcGF0aHMubGVuZ3RoOyB2YWx1ZSAhPSBudWxsICYmIGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWVbcGF0aHNbaV0udmFsdWUgfHwgZXZhbEV4cHIocGF0aHNbaV0sIGNhbGxlZSldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIOaVsOaNruWvueixoeWPmOabtOaTjeS9nFxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHNvdXJjZSDopoHlj5jmm7TnmoTmupDmlbDmja5cbiAqIEBwYXJhbSB7QXJyYXl9IGV4cHJQYXRocyDlsZ7mgKfot6/lvoRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUg5Y+Y5pu05bGe5oCn5YC8XG4gKiBAcGFyYW0ge0RhdGF9IGRhdGEg5a+55bqU55qERGF0YeWvueixoVxuICogQHJldHVybiB7Kn0g5Y+Y5pu05ZCO55qE5paw5pWw5o2uXG4gKi9cbmZ1bmN0aW9uIGltbXV0YWJsZVNldChzb3VyY2UsIGV4cHJQYXRocywgdmFsdWUsIGRhdGEpIHtcbiAgICBpZiAoZXhwclBhdGhzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIHByb3AgPSBldmFsRXhwcihleHByUGF0aHNbMF0sIGRhdGEpO1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gK3Byb3A7XG5cbiAgICAgICAgcmVzdWx0ID0gc291cmNlLnNsaWNlKDApO1xuICAgICAgICByZXN1bHRbaXNOYU4oaW5kZXgpID8gcHJvcCA6IGluZGV4XSA9IGltbXV0YWJsZVNldChzb3VyY2VbaW5kZXhdLCBleHByUGF0aHMuc2xpY2UoMSksIHZhbHVlLCBkYXRhKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXN1bHQgPSB7fTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSBwcm9wKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdFtwcm9wXSA9IGltbXV0YWJsZVNldChzb3VyY2VbcHJvcF0gfHwge30sIGV4cHJQYXRocy5zbGljZSgxKSwgdmFsdWUsIGRhdGEpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZTtcbn1cblxuLyoqXG4gKiDorr7nva7mlbDmja7poblcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0geyp9IHZhbHVlIOaVsOaNruWAvFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKi9cbkRhdGEucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChleHByLCB2YWx1ZSwgb3B0aW9uKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB2YXIgZXhwclJhdyA9IGV4cHI7XG4gICAgLy8gI1tlbmRdXG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAoZXhwci50eXBlICE9PSBFeHByVHlwZS5BQ0NFU1NPUikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIEludmFsaWQgRXhwcmVzc2lvbiBpbiBEYXRhIHNldDogJyArIGV4cHJSYXcpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIGlmICh0aGlzLmdldChleHByKSA9PT0gdmFsdWUgJiYgIW9wdGlvbi5mb3JjZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YUNhY2hlLmNsZWFyKCk7XG4gICAgdGhpcy5yYXcgPSBpbW11dGFibGVTZXQodGhpcy5yYXcsIGV4cHIucGF0aHMsIHZhbHVlLCB0aGlzKTtcbiAgICB0aGlzLmZpcmUoe1xuICAgICAgICB0eXBlOiBEYXRhQ2hhbmdlVHlwZS5TRVQsXG4gICAgICAgIGV4cHI6IGV4cHIsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgb3B0aW9uOiBvcHRpb25cbiAgICB9KTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdGhpcy5jaGVja0RhdGFUeXBlcygpO1xuICAgIC8vICNbZW5kXVxuXG59O1xuXG4vKipcbiAqIOWQiOW5tuabtOaWsOaVsOaNrumhuVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ug5b6F5ZCI5bm255qE5pWw5o2u5YC8XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqL1xuRGF0YS5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAoZXhwciwgc291cmNlLCBvcHRpb24pIHtcbiAgICBvcHRpb24gPSBvcHRpb24gfHwge307XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIHZhciBleHByUmF3ID0gZXhwcjtcbiAgICAvLyAjW2VuZF1cblxuICAgIGV4cHIgPSBwYXJzZUV4cHIoZXhwcik7XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIGlmIChleHByLnR5cGUgIT09IEV4cHJUeXBlLkFDQ0VTU09SKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBFUlJPUl0gSW52YWxpZCBFeHByZXNzaW9uIGluIERhdGEgbWVyZ2U6ICcgKyBleHByUmF3KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0KGV4cHIpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIE1lcmdlIEV4cGVjdHMgYSBUYXJnZXQgb2YgVHlwZSBcXCdvYmplY3RcXCc7IGdvdCAnICsgdHlwZW9mIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSBNZXJnZSBFeHBlY3RzIGEgU291cmNlIG9mIFR5cGUgXFwnb2JqZWN0XFwnOyBnb3QgJyArIHR5cGVvZiBzb3VyY2UpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICB0aGlzLnNldChcbiAgICAgICAgICAgIGNyZWF0ZUFjY2Vzc29yKFxuICAgICAgICAgICAgICAgIGV4cHIucGF0aHMuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzb3VyY2Vba2V5XSxcbiAgICAgICAgICAgIG9wdGlvblxuICAgICAgICApO1xuICAgIH1cbn07XG5cbi8qKlxuICog5Z+65LqO5pu05paw5Ye95pWw5pu05paw5pWw5o2u6aG5XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g5pWw5o2u5aSE55CG5Ye95pWwXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqL1xuRGF0YS5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbiAoZXhwciwgZm4sIG9wdGlvbikge1xuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgdmFyIGV4cHJSYXcgPSBleHByO1xuICAgIC8vICNbZW5kXVxuXG4gICAgZXhwciA9IHBhcnNlRXhwcihleHByKTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKGV4cHIudHlwZSAhPT0gRXhwclR5cGUuQUNDRVNTT1IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSBJbnZhbGlkIEV4cHJlc3Npb24gaW4gRGF0YSBhcHBseTogJyArIGV4cHJSYXcpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuZ2V0KGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdbU0FOIEVSUk9SXSBJbnZhbGlkIEFyZ3VtZW50XFwncyBUeXBlIGluIERhdGEgYXBwbHk6ICdcbiAgICAgICAgICAgICsgJ0V4cGVjdGVkIEZ1bmN0aW9uIGJ1dCBnb3QgJyArIHR5cGVvZiBmblxuICAgICAgICApO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIHRoaXMuc2V0KGV4cHIsIGZuKG9sZFZhbHVlKSwgb3B0aW9uKTtcbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG5c3BsaWNl5pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHtBcnJheX0gYXJncyBzcGxpY2Ug5o6l5Y+X55qE5Y+C5pWw5YiX6KGo77yM5pWw57uE6aG55LiOQXJyYXkucHJvdG90eXBlLnNwbGljZeeahOWPguaVsOS4gOiHtFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKiBAcmV0dXJuIHtBcnJheX0g5paw5pWw57uEXG4gKi9cbkRhdGEucHJvdG90eXBlLnNwbGljZSA9IGZ1bmN0aW9uIChleHByLCBhcmdzLCBvcHRpb24pIHtcbiAgICBvcHRpb24gPSBvcHRpb24gfHwge307XG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICB2YXIgZXhwclJhdyA9IGV4cHI7XG4gICAgLy8gI1tlbmRdXG5cbiAgICBleHByID0gcGFyc2VFeHByKGV4cHIpO1xuXG4gICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICBpZiAoZXhwci50eXBlICE9PSBFeHByVHlwZS5BQ0NFU1NPUikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRVJST1JdIEludmFsaWQgRXhwcmVzc2lvbiBpbiBEYXRhIHNwbGljZTogJyArIGV4cHJSYXcpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldChleHByKTtcbiAgICB2YXIgcmV0dXJuVmFsdWUgPSBbXTtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgaW5kZXggPSBhcmdzWzBdO1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld0FycmF5ID0gdGFyZ2V0LnNsaWNlKDApO1xuICAgICAgICByZXR1cm5WYWx1ZSA9IG5ld0FycmF5LnNwbGljZS5hcHBseShuZXdBcnJheSwgYXJncyk7XG4gICAgICAgIGRhdGFDYWNoZS5jbGVhcigpO1xuICAgICAgICB0aGlzLnJhdyA9IGltbXV0YWJsZVNldCh0aGlzLnJhdywgZXhwci5wYXRocywgbmV3QXJyYXksIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZmlyZSh7XG4gICAgICAgICAgICBleHByOiBleHByLFxuICAgICAgICAgICAgdHlwZTogRGF0YUNoYW5nZVR5cGUuU1BMSUNFLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgZGVsZXRlQ291bnQ6IHJldHVyblZhbHVlLmxlbmd0aCxcbiAgICAgICAgICAgIHZhbHVlOiByZXR1cm5WYWx1ZSxcbiAgICAgICAgICAgIGluc2VydGlvbnM6IGFyZ3Muc2xpY2UoMiksXG4gICAgICAgICAgICBvcHRpb246IG9wdGlvblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgIHRoaXMuY2hlY2tEYXRhVHlwZXMoKTtcbiAgICAvLyAjW2VuZF1cblxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG5cHVzaOaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7Kn0gaXRlbSDopoFwdXNo55qE5YC8XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqIEByZXR1cm4ge251bWJlcn0g5paw5pWw57uE55qEbGVuZ3Ro5bGe5oCnXG4gKi9cbkRhdGEucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoZXhwciwgaXRlbSwgb3B0aW9uKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0KGV4cHIpO1xuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKGV4cHIsIFt0YXJnZXQubGVuZ3RoLCAwLCBpdGVtXSwgb3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggKyAxO1xuICAgIH1cbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG5cG9w5pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKiBAcmV0dXJuIHsqfVxuICovXG5EYXRhLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoZXhwciwgb3B0aW9uKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0KGV4cHIpO1xuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBsZW4gPSB0YXJnZXQubGVuZ3RoO1xuICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoZXhwciwgW2xlbiAtIDEsIDFdLCBvcHRpb24pWzBdO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7poblzaGlmdOaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uIOiuvue9ruWPguaVsFxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb24uc2lsZW50IOmdmem7mOiuvue9ru+8jOS4jeinpuWPkeWPmOabtOS6i+S7tlxuICogQHJldHVybiB7Kn1cbiAqL1xuRGF0YS5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbiAoZXhwciwgb3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKGV4cHIsIFswLCAxXSwgb3B0aW9uKVswXTtcbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG5dW5zaGlmdOaTjeS9nFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZXhwciDmlbDmja7pobnot6/lvoRcbiAqIEBwYXJhbSB7Kn0gaXRlbSDopoF1bnNoaWZ055qE5YC8XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbiDorr7nva7lj4LmlbBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9uLnNpbGVudCDpnZnpu5jorr7nva7vvIzkuI3op6blj5Hlj5jmm7Tkuovku7ZcbiAqIEByZXR1cm4ge251bWJlcn0g5paw5pWw57uE55qEbGVuZ3Ro5bGe5oCnXG4gKi9cbkRhdGEucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiAoZXhwciwgaXRlbSwgb3B0aW9uKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0KGV4cHIpO1xuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKGV4cHIsIFswLCAwLCBpdGVtXSwgb3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggKyAxO1xuICAgIH1cbn07XG5cbi8qKlxuICog5pWw57uE5pWw5o2u6aG556e76Zmk5pON5L2cXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBleHByIOaVsOaNrumhuei3r+W+hFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IOimgeenu+mZpOmhueeahOe0ouW8lVxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKi9cbkRhdGEucHJvdG90eXBlLnJlbW92ZUF0ID0gZnVuY3Rpb24gKGV4cHIsIGluZGV4LCBvcHRpb24pIHtcbiAgICB0aGlzLnNwbGljZShleHByLCBbaW5kZXgsIDFdLCBvcHRpb24pO1xufTtcblxuLyoqXG4gKiDmlbDnu4TmlbDmja7pobnnp7vpmaTmk43kvZxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGV4cHIg5pWw5o2u6aG56Lev5b6EXG4gKiBAcGFyYW0geyp9IHZhbHVlIOimgeenu+mZpOeahOmhuVxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb24g6K6+572u5Y+C5pWwXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbi5zaWxlbnQg6Z2Z6buY6K6+572u77yM5LiN6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gKi9cbkRhdGEucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChleHByLCB2YWx1ZSwgb3B0aW9uKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0KGV4cHIpO1xuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBsZW4gPSB0YXJnZXQubGVuZ3RoO1xuICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRbbGVuXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwbGljZShleHByLCBbbGVuLCAxXSwgb3B0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IERhdGE7XG5cblxuLyoqXG4gKiBAZmlsZSDlo7DmmI7lvI/kuovku7bnmoTnm5HlkKzlh73mlbBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGV2YWxBcmdzID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWFyZ3MnKTtcbi8vIHZhciBmaW5kTWV0aG9kID0gcmVxdWlyZSgnLi4vcnVudGltZS9maW5kLW1ldGhvZCcpO1xuLy8gdmFyIERhdGEgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEnKTtcblxuLyoqXG4gKiDlo7DmmI7lvI/kuovku7bnmoTnm5HlkKzlh73mlbBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRCaW5kIOe7keWumuS/oeaBr+WvueixoVxuICogQHBhcmFtIHtib29sZWFufSBpc0NvbXBvbmVudEV2ZW50IOaYr+WQpue7hOS7tuiHquWumuS5ieS6i+S7tlxuICogQHBhcmFtIHtEYXRhfSBkYXRhIOaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtFdmVudH0gZSDkuovku7blr7nosaFcbiAqL1xuZnVuY3Rpb24gZXZlbnREZWNsYXJhdGlvbkxpc3RlbmVyKGV2ZW50QmluZCwgaXNDb21wb25lbnRFdmVudCwgZGF0YSwgZSkge1xuICAgIHZhciBtZXRob2QgPSBmaW5kTWV0aG9kKHRoaXMsIGV2ZW50QmluZC5leHByLm5hbWUsIGRhdGEpO1xuXG4gICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIHNjb3BlID0gbmV3IERhdGEoXG4gICAgICAgICAgICB7JGV2ZW50OiBpc0NvbXBvbmVudEV2ZW50ID8gZSA6IGUgfHwgd2luZG93LmV2ZW50fSxcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgKTtcbiAgICAgICAgbWV0aG9kLmFwcGx5KHRoaXMsIGV2YWxBcmdzKGV2ZW50QmluZC5leHByLmFyZ3MsIHNjb3BlLCB0aGlzKSk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBldmVudERlY2xhcmF0aW9uTGlzdGVuZXI7XG5cblxuLyoqXG4gKiBAZmlsZSDoh6rpl63lkIjmoIfnrb7ooahcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBzcGxpdFN0cjJPYmogPSByZXF1aXJlKCcuLi91dGlsL3NwbGl0LXN0ci0yLW9iaicpO1xuXG4vKipcbiAqIOiHqumXreWQiOagh+etvuWIl+ihqFxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBob3RUYWdzID0gc3BsaXRTdHIyT2JqKCdkaXYsc3BhbixpbnB1dCxidXR0b24sdGV4dGFyZWEsZm9ybSxsYWJlbCxkbCxkdCxkZCx1bCxvbCxsaSxhLGIsdSxoMSxoMixoMyxoNCxoNSxoNicpO1xuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBob3RUYWdzO1xuXG5cbi8qKlxuICogQGZpbGUg5piv5ZCm5rWP6KeI5Zmo546v5aKDXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGlzQnJvd3NlcjtcblxuXG4vKipcbiAqIEBmaWxlIGluc2VydEJlZm9yZSDmlrnms5XnmoTlhbzlrrnmgKflsIHoo4VcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICogaW5zZXJ0QmVmb3JlIOaWueazleeahOWFvOWuueaAp+WwgeijhVxuICpcbiAqIEBwYXJhbSB7SFRNTE5vZGV9IHRhcmdldEVsIOimgeaPkuWFpeeahOiKgueCuVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50P30gYmVmb3JlRWwg5Zyo5q2k5YWD57Sg5LmL5YmN5o+S5YWlXG4gKi9cbmZ1bmN0aW9uIGluc2VydEJlZm9yZSh0YXJnZXRFbCwgcGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgaWYgKHBhcmVudEVsKSB7XG4gICAgICAgIGlmIChiZWZvcmVFbCkge1xuICAgICAgICAgICAgcGFyZW50RWwuaW5zZXJ0QmVmb3JlKHRhcmdldEVsLCBiZWZvcmVFbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0YXJnZXRFbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGluc2VydEJlZm9yZTtcblxuXG4vKipcbiAqIEBmaWxlIOWIpOaWreWFg+e0oOaYr+WQpuS4jeWFgeiuuOiuvue9rkhUTUxcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHNvbWUgaHRtbCBlbGVtZW50cyBjYW5ub3Qgc2V0IGlubmVySFRNTCBpbiBvbGQgaWVcbi8vIHNlZTogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzMzg5NyhWUy44NSkuYXNweFxuXG4vKipcbiAqIOWIpOaWreWFg+e0oOaYr+WQpuS4jeWFgeiuuOiuvue9rkhUTUxcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCDopoHliKTmlq3nmoTlhYPntKBcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG5vU2V0SFRNTChlbCkge1xuICAgIHJldHVybiAvXihjb2x8Y29sZ3JvdXB8ZnJhbWVzZXR8c3R5bGV8dGFibGV8dGJvZHl8dGZvb3R8dGhlYWR8dHJ8c2VsZWN0KSQvaS50ZXN0KGVsLnRhZ05hbWUpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub1NldEhUTUw7XG5cblxuLyoqXG4gKiBAZmlsZSAg6I635Y+W6IqC54K5IHN0dW1wIOeahCBjb21tZW50XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgbm9TZXRIVE1MID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9uby1zZXQtaHRtbCcpO1xuXG4vLyAjW2JlZ2luXSBlcnJvclxuLyoqXG4gKiDojrflj5boioLngrkgc3R1bXAg55qEIGNvbW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBIVE1M5YWD57SgXG4gKi9cbmZ1bmN0aW9uIHdhcm5TZXRIVE1MKGVsKSB7XG4gICAgLy8gZG9udCB3YXJuIGlmIG5vdCBpbiBicm93c2VyIHJ1bnRpbWVcbiAgICBpZiAoISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzb21lIGh0bWwgZWxlbWVudHMgY2Fubm90IHNldCBpbm5lckhUTUwgaW4gb2xkIGllXG4gICAgLy8gc2VlOiBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTMzODk3KFZTLjg1KS5hc3B4XG4gICAgaWYgKG5vU2V0SFRNTChlbCkpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSAnW1NBTiBXQVJOSU5HXSBzZXQgaHRtbCBmb3IgZWxlbWVudCBcIicgKyBlbC50YWdOYW1lXG4gICAgICAgICAgICArICdcIiBtYXkgY2F1c2UgYW4gZXJyb3IgaW4gb2xkIElFJztcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgIH1cbn1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB3YXJuU2V0SFRNTDtcblxuXG4vKipcbiAqIEBmaWxlIOWIpOaWreaYr+WQpue7k+adn+ahqVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gI1tiZWdpbl0gcmV2ZXJzZVxuLyoqXG4gKiDliKTmlq3mmK/lkKbnu5PmnZ/moalcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fEhUTUxDb21tZW50fSB0YXJnZXQg6KaB5Yik5pat55qE5YWD57SgXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDmoannsbvlnotcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRW5kU3R1bXAodGFyZ2V0LCB0eXBlKSB7XG4gICAgcmV0dXJuIHRhcmdldC5ub2RlVHlwZSA9PT0gOCAmJiB0YXJnZXQuZGF0YSA9PT0gJy9zLScgKyB0eXBlO1xufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGlzRW5kU3R1bXA7XG5cblxuLyoqXG4gKiBAZmlsZSDojrflj5boioLngrnlnKjnu4Tku7bmoJHkuK3nmoTot6/lvoRcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9ub2RlLXR5cGUnKTtcblxuLy8gI1tiZWdpbl0gcmV2ZXJzZVxuLyoqXG4gKiDojrflj5boioLngrnlnKjnu4Tku7bmoJHkuK3nmoTot6/lvoRcbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUg6IqC54K55a+56LGhXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9kZVBhdGgobm9kZSkge1xuICAgIHZhciBub2RlUGF0aHMgPSBbXTtcbiAgICB2YXIgbm9kZVBhcmVudCA9IG5vZGU7XG4gICAgd2hpbGUgKG5vZGVQYXJlbnQpIHtcbiAgICAgICAgc3dpdGNoIChub2RlUGFyZW50Lm5vZGVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIE5vZGVUeXBlLkVMRU06XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQobm9kZVBhcmVudC50YWdOYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBOb2RlVHlwZS5JRjpcbiAgICAgICAgICAgICAgICBub2RlUGF0aHMudW5zaGlmdCgnaWYnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBOb2RlVHlwZS5GT1I6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ2ZvclsnICsgbm9kZVBhcmVudC5hbm9kZS5kaXJlY3RpdmVzWydmb3InXS5yYXcgKyAnXScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE5vZGVUeXBlLlNMT1Q6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ3Nsb3RbJyArIChub2RlUGFyZW50Lm5hbWUgfHwgJ2RlZmF1bHQnKSArICddJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuVFBMOlxuICAgICAgICAgICAgICAgIG5vZGVQYXRocy51bnNoaWZ0KCd0ZW1wbGF0ZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE5vZGVUeXBlLkNNUFQ6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ2NvbXBvbmVudFsnICsgKG5vZGVQYXJlbnQuc3ViVGFnIHx8ICdyb290JykgKyAnXScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE5vZGVUeXBlLlRFWFQ6XG4gICAgICAgICAgICAgICAgbm9kZVBhdGhzLnVuc2hpZnQoJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVQYXJlbnQgPSBub2RlUGFyZW50LnBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVBhdGhzO1xufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdldE5vZGVQYXRoO1xuXG5cbi8qKlxuICogQGZpbGUgdGV4dCDoioLngrnnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBpc0Jyb3dzZXIgPSByZXF1aXJlKCcuLi9icm93c2VyL2lzLWJyb3dzZXInKTtcbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgY2hhbmdlRXhwckNvbXBhcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZS1leHByLWNvbXBhcmUnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIHdhcm5TZXRIVE1MID0gcmVxdWlyZSgnLi93YXJuLXNldC1odG1sJyk7XG4vLyB2YXIgaXNFbmRTdHVtcCA9IHJlcXVpcmUoJy4vaXMtZW5kLXN0dW1wJyk7XG4vLyB2YXIgZ2V0Tm9kZVBhdGggPSByZXF1aXJlKCcuL2dldC1ub2RlLXBhdGgnKTtcblxuXG4vKipcbiAqIHRleHQg6IqC54K557G7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtNb2RlbD19IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQg54i25Lqy6IqC54K5XG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyP30gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqL1xuZnVuY3Rpb24gVGV4dE5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgdGhpcy5hTm9kZSA9IGFOb2RlO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gcmV2ZXJzZVdhbGtlci5jdXJyZW50O1xuICAgICAgICBpZiAoY3VycmVudE5vZGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudE5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZS5kYXRhID09PSAncy10ZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLmRhdGEgPSB0aGlzLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlci5nb05leHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gcmV2ZXJzZVdhbGtlci5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIFJFVkVSU0UgRVJST1JdIFRleHQgZW5kIGZsYWcgbm90IGZvdW5kLiBcXG5QYXRoczogJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBnZXROb2RlUGF0aCh0aGlzKS5qb2luKCcgPiAnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRW5kU3R1bXAoY3VycmVudE5vZGUsICd0ZXh0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbCA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyLmdvTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5kYXRhID0gdGhpcy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlci5nb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlci5nb05leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFOb2RlLnRleHRFeHByLm9yaWdpbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsID0gY3VycmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHJldmVyc2VXYWxrZXIudGFyZ2V0LCByZXZlcnNlV2Fsa2VyLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5UZXh0Tm9kZS5wcm90b3R5cGUubm9kZVR5cGUgPSBOb2RlVHlwZS5URVhUO1xuXG4vKipcbiAqIOWwhnRleHQgYXR0YWNo5Yiw6aG16Z2iXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuVGV4dE5vZGUucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBldmFsRXhwcih0aGlzLmFOb2RlLnRleHRFeHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcblxuICAgIGlmICh0aGlzLmFOb2RlLnRleHRFeHByLm9yaWdpbmFsKSB7XG4gICAgICAgIHRoaXMuc2VsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuc2VsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgICAgICB2YXIgdGVtcEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgcGFyZW50RWwuaW5zZXJ0QmVmb3JlKHRlbXBGbGFnLCB0aGlzLmVsKTtcbiAgICAgICAgdGVtcEZsYWcuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRoaXMuY29udGVudCk7XG4gICAgICAgIHBhcmVudEVsLnJlbW92ZUNoaWxkKHRlbXBGbGFnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmNvbnRlbnQpO1xuICAgICAgICBpbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOmUgOavgSB0ZXh0IOiKgueCuVxuICovXG5UZXh0Tm9kZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9wcmV2ID0gbnVsbDtcbiAgICB0aGlzLmVsID0gbnVsbDtcbiAgICB0aGlzLnNlbCA9IG51bGw7XG59O1xuXG52YXIgdGV4dFVwZGF0ZVByb3AgPSBpc0Jyb3dzZXJcbiAgICAmJiAodHlwZW9mIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKS50ZXh0Q29udGVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyAndGV4dENvbnRlbnQnXG4gICAgICAgIDogJ2RhdGEnKTtcblxuLyoqXG4gKiDmm7TmlrAgdGV4dCDoioLngrnnmoTop4blm75cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5UZXh0Tm9kZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuYU5vZGUudGV4dEV4cHIudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsZW4gPSBjaGFuZ2VzID8gY2hhbmdlcy5sZW5ndGggOiAwO1xuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICBpZiAoY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlc1tsZW5dLmV4cHIsIHRoaXMuYU5vZGUudGV4dEV4cHIsIHRoaXMuc2NvcGUpKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IGV2YWxFeHByKHRoaXMuYU5vZGUudGV4dEV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuXG4gICAgICAgICAgICBpZiAodGV4dCAhPT0gdGhpcy5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gdGV4dDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFOb2RlLnRleHRFeHByLm9yaWdpbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydFJlbW92ZUVsID0gdGhpcy5zZWwubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRFbCA9IHRoaXMuZWwucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3RhcnRSZW1vdmVFbCAhPT0gdGhpcy5lbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZVRhcmdldCA9IHN0YXJ0UmVtb3ZlRWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFJlbW92ZUVsID0gc3RhcnRSZW1vdmVFbC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsKHJlbW92ZVRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgICAgICB3YXJuU2V0SFRNTChwYXJlbnRFbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbC5pbnNlcnRCZWZvcmUodGVtcEZsYWcsIHRoaXMuZWwpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wRmxhZy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsLnJlbW92ZUNoaWxkKHRlbXBGbGFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxbdGV4dFVwZGF0ZVByb3BdID0gdGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFRleHROb2RlO1xuXG5cbi8qKlxuICogQGZpbGUg5Yik5pat5Y+Y5pu05pWw57uE5piv5ZCm5b2x5ZON5Yiw5pWw5o2u5byV55So5pGY6KaBXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8qKlxuICog5Yik5pat5Y+Y5pu05pWw57uE5piv5ZCm5b2x5ZON5Yiw5pWw5o2u5byV55So5pGY6KaBXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDlj5jmm7TmlbDnu4RcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhUmVmIOaVsOaNruW8leeUqOaRmOimgVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY2hhbmdlc0lzSW5EYXRhUmVmKGNoYW5nZXMsIGRhdGFSZWYpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbaV07XG5cbiAgICAgICAgaWYgKCFjaGFuZ2Uub3ZlcnZpZXcpIHtcbiAgICAgICAgICAgIHZhciBwYXRocyA9IGNoYW5nZS5leHByLnBhdGhzO1xuICAgICAgICAgICAgY2hhbmdlLm92ZXJ2aWV3ID0gcGF0aHNbMF0udmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlLmV4dE92ZXJ2aWV3ID0gcGF0aHNbMF0udmFsdWUgKyAnLicgKyBwYXRoc1sxXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjaGFuZ2Uud2lsZE92ZXJ2aWV3ID0gcGF0aHNbMF0udmFsdWUgKyAnLionO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFSZWZbY2hhbmdlLm92ZXJ2aWV3XVxuICAgICAgICAgICAgfHwgY2hhbmdlLndpbGRPdmVydmlldyAmJiBkYXRhUmVmW2NoYW5nZS53aWxkT3ZlcnZpZXddXG4gICAgICAgICAgICB8fCBjaGFuZ2UuZXh0T3ZlcnZpZXcgJiYgZGF0YVJlZltjaGFuZ2UuZXh0T3ZlcnZpZXddXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNoYW5nZXNJc0luRGF0YVJlZjtcblxuXG4vKipcbiAqIEBmaWxlIOWFg+e0oOWtkOiKgueCuemBjeWOhuaTjeS9nOexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcblxuLy8gI1tiZWdpbl0gcmV2ZXJzZVxuLyoqXG4gKiDlhYPntKDlrZDoioLngrnpgY3ljobmk43kvZznsbtcbiAqXG4gKiBAaW5uZXJcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwg6KaB6YGN5Y6G55qE5YWD57SgXG4gKi9cbmZ1bmN0aW9uIERPTUNoaWxkcmVuV2Fsa2VyKGVsKSB7XG4gICAgdGhpcy5yYXcgPSBbXTtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLnRhcmdldCA9IGVsO1xuXG4gICAgdmFyIGNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICB2YXIgbmV4dDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIHN3aXRjaCAoY2hpbGQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpZiAoL15cXHMqJC8udGVzdChjaGlsZC5kYXRhIHx8IGNoaWxkLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVFbChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhdy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICB0aGlzLnJhdy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnJhd1t0aGlzLmluZGV4XTtcbiAgICB0aGlzLm5leHQgPSB0aGlzLnJhd1t0aGlzLmluZGV4ICsgMV07XG59XG5cbi8qKlxuICog5b6A5LiL6LWw5LiA5Liq5YWD57SgXG4gKi9cbkRPTUNoaWxkcmVuV2Fsa2VyLnByb3RvdHlwZS5nb05leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5yYXdbKyt0aGlzLmluZGV4XTtcbiAgICB0aGlzLm5leHQgPSB0aGlzLnJhd1t0aGlzLmluZGV4ICsgMV07XG59O1xuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IERPTUNoaWxkcmVuV2Fsa2VyO1xuXG5cbi8qKlxuICogQGZpbGUg5YWD57Sg6IqC54K557G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIHJlbW92ZUVsID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9yZW1vdmUtZWwnKTtcbi8vIHZhciBjaGFuZ2VFeHByQ29tcGFyZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuLy8gdmFyIGNoYW5nZXNJc0luRGF0YVJlZiA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlcy1pcy1pbi1kYXRhLXJlZicpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL2xpZmUtY3ljbGUnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vcmV2ZXJzZS1lbGVtZW50LWNoaWxkcmVuJyk7XG4vLyB2YXIgaXNEYXRhQ2hhbmdlQnlFbGVtZW50ID0gcmVxdWlyZSgnLi9pcy1kYXRhLWNoYW5nZS1ieS1lbGVtZW50Jyk7XG4vLyB2YXIgZWxlbWVudFVwZGF0ZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LXVwZGF0ZS1jaGlsZHJlbicpO1xuLy8gdmFyIGVsZW1lbnRPd25DcmVhdGUgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWNyZWF0ZScpO1xuLy8gdmFyIGVsZW1lbnRPd25BdHRhY2ggPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWF0dGFjaCcpO1xuLy8gdmFyIGVsZW1lbnRPd25EZXRhY2ggPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWRldGFjaCcpO1xuLy8gdmFyIGVsZW1lbnRPd25EaXNwb3NlID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1kaXNwb3NlJyk7XG4vLyB2YXIgZWxlbWVudE93bk9uRWwgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLW9uLWVsJyk7XG4vLyB2YXIgZWxlbWVudE93blRvUGhhc2UgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLXRvLXBoYXNlJyk7XG4vLyB2YXIgZWxlbWVudE93bkF0dGFjaGVkID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1hdHRhY2hlZCcpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlID0gcmVxdWlyZSgnLi9lbGVtZW50LWRpc3Bvc2UnKTtcbi8vIHZhciBlbGVtZW50SW5pdFRhZ05hbWUgPSByZXF1aXJlKCcuL2VsZW1lbnQtaW5pdC10YWctbmFtZScpO1xuLy8gdmFyIGhhbmRsZVByb3AgPSByZXF1aXJlKCcuL2hhbmRsZS1wcm9wJyk7XG4vLyB2YXIgd2FyblNldEhUTUwgPSByZXF1aXJlKCcuL3dhcm4tc2V0LWh0bWwnKTtcbi8vIHZhciBnZXROb2RlUGF0aCA9IHJlcXVpcmUoJy4vZ2V0LW5vZGUtcGF0aCcpO1xuXG4vKipcbiAqIOWFg+e0oOiKgueCueexu1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEBwYXJhbSB7TW9kZWw9fSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcj99IHJldmVyc2VXYWxrZXIg5a2Q5YWD57Sg6YGN5Y6G5a+56LGhXG4gKi9cbmZ1bmN0aW9uIEVsZW1lbnQoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgdGhpcy5hTm9kZSA9IGFOb2RlO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5zdGFydDtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5fZWxGbnMgPSBbXTtcbiAgICB0aGlzLnBhcmVudENvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVFxuICAgICAgICA/IHBhcmVudFxuICAgICAgICA6IHBhcmVudC5wYXJlbnRDb21wb25lbnQ7XG5cbiAgICB0aGlzLmlkID0gZ3VpZCgpO1xuXG4gICAgZWxlbWVudEluaXRUYWdOYW1lKHRoaXMpO1xuXG4gICAgdGhpcy5fdG9QaGFzZSgnaW5pdGVkJyk7XG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gcmV2ZXJzZVdhbGtlci5jdXJyZW50O1xuXG4gICAgICAgIGlmICghY3VycmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1NBTiBSRVZFUlNFIEVSUk9SXSBFbGVtZW50IG5vdCBmb3VuZC4gXFxuUGF0aHM6ICdcbiAgICAgICAgICAgICAgICArIGdldE5vZGVQYXRoKHRoaXMpLmpvaW4oJyA+ICcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIFJFVkVSU0UgRVJST1JdIEVsZW1lbnQgdHlwZSBub3QgbWF0Y2gsIGV4cGVjdCAxIGJ1dCAnXG4gICAgICAgICAgICAgICAgKyBjdXJyZW50Tm9kZS5ub2RlVHlwZSArICcuXFxuUGF0aHM6ICdcbiAgICAgICAgICAgICAgICArIGdldE5vZGVQYXRoKHRoaXMpLmpvaW4oJyA+ICcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IHRoaXMudGFnTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIFJFVkVSU0UgRVJST1JdIEVsZW1lbnQgdGFnTmFtZSBub3QgbWF0Y2gsIGV4cGVjdCAnXG4gICAgICAgICAgICAgICAgKyB0aGlzLnRhZ05hbWUgKyAnIGJ1dCBtZWF0ICcgKyBjdXJyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgKyAnLlxcblBhdGhzOiAnXG4gICAgICAgICAgICAgICAgKyBnZXROb2RlUGF0aCh0aGlzKS5qb2luKCcgPiAnKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsID0gY3VycmVudE5vZGU7XG4gICAgICAgIHJldmVyc2VXYWxrZXIuZ29OZXh0KCk7XG5cbiAgICAgICAgcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbih0aGlzKTtcblxuICAgICAgICB0aGlzLl9hdHRhY2hlZCgpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuXG5cbkVsZW1lbnQucHJvdG90eXBlLm5vZGVUeXBlID0gTm9kZVR5cGUuRUxFTTtcblxuXG5FbGVtZW50LnByb3RvdHlwZS5hdHRhY2ggPSBlbGVtZW50T3duQXR0YWNoO1xuRWxlbWVudC5wcm90b3R5cGUuZGV0YWNoID0gZWxlbWVudE93bkRldGFjaDtcbkVsZW1lbnQucHJvdG90eXBlLmRpc3Bvc2UgPSBlbGVtZW50T3duRGlzcG9zZTtcbkVsZW1lbnQucHJvdG90eXBlLl9jcmVhdGUgPSBlbGVtZW50T3duQ3JlYXRlO1xuRWxlbWVudC5wcm90b3R5cGUuX3RvUGhhc2UgPSBlbGVtZW50T3duVG9QaGFzZTtcbkVsZW1lbnQucHJvdG90eXBlLl9vbkVsID0gZWxlbWVudE93bk9uRWw7XG5cbkVsZW1lbnQucHJvdG90eXBlLl9kb25lTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubGVhdmVEaXNwb3NlKSB7XG4gICAgICAgIGlmICghdGhpcy5saWZlQ3ljbGUuZGlzcG9zZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnREaXNwb3NlKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlTm9EZXRhY2gsXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlTm9UcmFuc2l0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIHJlbW92ZUVsKHRoaXMuZWwpO1xuICAgICAgICB0aGlzLl90b1BoYXNlKCdkZXRhY2hlZCcpO1xuICAgIH1cbn07XG5cbi8qKlxuICog6KeG5Zu+5pu05pawXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgaWYgKCFjaGFuZ2VzSXNJbkRhdGFSZWYoY2hhbmdlcywgdGhpcy5hTm9kZS5ob3RzcG90LmRhdGEpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgdmFyIGR5bmFtaWNQcm9wcyA9IHRoaXMuYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBkeW5hbWljUHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBwcm9wID0gZHluYW1pY1Byb3BzW2ldO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwLCBjaGFuZ2VMZW4gPSBjaGFuZ2VzLmxlbmd0aDsgaiA8IGNoYW5nZUxlbjsgaisrKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gY2hhbmdlc1tqXTtcblxuICAgICAgICAgICAgaWYgKCFpc0RhdGFDaGFuZ2VCeUVsZW1lbnQoY2hhbmdlLCB0aGlzLCBwcm9wLm5hbWUpXG4gICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgcHJvcC5leHByLCB0aGlzLnNjb3BlKVxuICAgICAgICAgICAgICAgICAgICB8fCBwcm9wLmhpbnRFeHByICYmIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCBwcm9wLmhpbnRFeHByLCB0aGlzLnNjb3BlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGhhbmRsZVByb3AodGhpcywgZXZhbEV4cHIocHJvcC5leHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSwgcHJvcCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaHRtbERpcmVjdGl2ZSA9IHRoaXMuYU5vZGUuZGlyZWN0aXZlcy5odG1sO1xuICAgIGlmIChodG1sRGlyZWN0aXZlKSB7XG4gICAgICAgIGVhY2goY2hhbmdlcywgZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICAgICAgaWYgKGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCBodG1sRGlyZWN0aXZlLnZhbHVlLCBtZS5zY29wZSkpIHtcbiAgICAgICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgICAgIHdhcm5TZXRIVE1MKG1lLmVsKTtcbiAgICAgICAgICAgICAgICAvLyAjW2VuZF1cbiAgICAgICAgICAgICAgICBtZS5lbC5pbm5lckhUTUwgPSBldmFsRXhwcihodG1sRGlyZWN0aXZlLnZhbHVlLCBtZS5zY29wZSwgbWUub3duZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbGVtZW50VXBkYXRlQ2hpbGRyZW4odGhpcywgY2hhbmdlcyk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDmiafooYzlrozmiJBhdHRhY2hlZOeKtuaAgeeahOihjOS4ulxuICovXG5FbGVtZW50LnByb3RvdHlwZS5fYXR0YWNoZWQgPSBlbGVtZW50T3duQXR0YWNoZWQ7XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cblxuLyoqXG4gKiBAZmlsZSDplIDmr4HoioLngrnvvIzmuIXnqbroioLngrnkuIrnmoTml6DnlKjmiJDlkZhcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLyoqXG4gKiDplIDmr4HoioLngrlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSDoioLngrnlr7nosaFcbiAqL1xuZnVuY3Rpb24gbm9kZURpc3Bvc2Uobm9kZSkge1xuICAgIG5vZGUuZWwgPSBudWxsO1xuICAgIG5vZGUuc2VsID0gbnVsbDtcbiAgICBub2RlLm93bmVyID0gbnVsbDtcbiAgICBub2RlLnNjb3BlID0gbnVsbDtcbiAgICBub2RlLmFOb2RlID0gbnVsbDtcbiAgICBub2RlLnBhcmVudCA9IG51bGw7XG4gICAgbm9kZS5wYXJlbnRDb21wb25lbnQgPSBudWxsO1xuICAgIG5vZGUuY2hpbGRyZW4gPSBudWxsO1xuXG4gICAgaWYgKG5vZGUuX3RvUGhhc2UpIHtcbiAgICAgICAgbm9kZS5fdG9QaGFzZSgnZGlzcG9zZWQnKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5fb25kaXNwb3NlZCkge1xuICAgICAgICBub2RlLl9vbmRpc3Bvc2VkKCk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub2RlRGlzcG9zZTtcblxuXG4vKipcbiAqIEBmaWxlIOmAmui/h+e7hOS7tuWPjeino+WIm+W7uuiKgueCueeahOW3peWOguaWueazlVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGhvdFRhZ3MgPSByZXF1aXJlKCcuLi9icm93c2VyL2hvdC10YWdzJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIFRleHROb2RlID0gcmVxdWlyZSgnLi90ZXh0LW5vZGUnKTtcbi8vIHZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG4vLyB2YXIgU2xvdE5vZGUgPSByZXF1aXJlKCcuL3Nsb3Qtbm9kZScpO1xuLy8gdmFyIEZvck5vZGUgPSByZXF1aXJlKCcuL2Zvci1ub2RlJyk7XG4vLyB2YXIgSWZOb2RlID0gcmVxdWlyZSgnLi9pZi1ub2RlJyk7XG4vLyB2YXIgVGVtcGxhdGVOb2RlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZS1ub2RlJyk7XG5cbi8vICNbYmVnaW5dIHJldmVyc2Vcbi8qKlxuICog6YCa6L+H57uE5Lu25Y+N6Kej5Yib5bu66IqC54K5XG4gKlxuICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5oq96LGh6IqC54K5XG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyfSByZXZlcnNlV2Fsa2VyIOWtkOWFg+e0oOmBjeWOhuWvueixoVxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQg54i25Lqy6IqC54K5XG4gKiBAcGFyYW0ge01vZGVsPX0gc2NvcGUg5omA5bGe5pWw5o2u546v5aKDXG4gKiBAcmV0dXJuIHtOb2RlfVxuICovXG5mdW5jdGlvbiBjcmVhdGVSZXZlcnNlTm9kZShhTm9kZSwgcmV2ZXJzZVdhbGtlciwgcGFyZW50LCBzY29wZSkge1xuICAgIHZhciBwYXJlbnRJc0NvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVDtcbiAgICB2YXIgb3duZXIgPSBwYXJlbnRJc0NvbXBvbmVudCA/IHBhcmVudCA6IChwYXJlbnQuY2hpbGRPd25lciB8fCBwYXJlbnQub3duZXIpO1xuICAgIHNjb3BlID0gc2NvcGUgfHwgKHBhcmVudElzQ29tcG9uZW50ID8gcGFyZW50LmRhdGEgOiAocGFyZW50LmNoaWxkU2NvcGUgfHwgcGFyZW50LnNjb3BlKSk7XG5cbiAgICBpZiAoYU5vZGUudGV4dEV4cHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0Tm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpO1xuICAgIH1cblxuICAgIGlmIChhTm9kZS5kaXJlY3RpdmVzWydpZiddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgSWZOb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcik7XG4gICAgfVxuXG4gICAgaWYgKGFOb2RlLmRpcmVjdGl2ZXNbJ2ZvciddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgRm9yTm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpO1xuICAgIH1cblxuICAgIGlmIChob3RUYWdzW2FOb2RlLnRhZ05hbWVdKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudChhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoYU5vZGUudGFnTmFtZSkge1xuICAgICAgICBjYXNlICdzbG90JzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2xvdE5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKTtcblxuICAgICAgICBjYXNlICd0ZW1wbGF0ZSc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRlbXBsYXRlTm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgQ29tcG9uZW50VHlwZSA9IG93bmVyLmdldENvbXBvbmVudFR5cGUoYU5vZGUpO1xuICAgICAgICAgICAgaWYgKENvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbXBvbmVudFR5cGUoe1xuICAgICAgICAgICAgICAgICAgICBhTm9kZTogYU5vZGUsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBvd25lcixcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgc3ViVGFnOiBhTm9kZS50YWdOYW1lLFxuICAgICAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyOiByZXZlcnNlV2Fsa2VyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCwgcmV2ZXJzZVdhbGtlcik7XG59XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlUmV2ZXJzZU5vZGU7XG5cblxuLyoqXG4gKiBAZmlsZSDplIDmr4Hph4rmlL7lhYPntKDnmoTlrZDlhYPntKBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8qKlxuICog6ZSA5q+B6YeK5pS+5YWD57Sg55qE5a2Q5YWD57SgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQg5YWD57Sg6IqC54K5XG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub0RldGFjaCDmmK/lkKbkuI3opoHmioroioLngrnku45kb23np7vpmaRcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vVHJhbnNpdGlvbiDmmK/lkKbkuI3mmL7npLrov4fmuKHliqjnlLvmlYjmnpxcbiAqL1xuZnVuY3Rpb24gZWxlbWVudERpc3Bvc2VDaGlsZHJlbihlbGVtZW50LCBub0RldGFjaCwgbm9UcmFuc2l0aW9uKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gZWxlbWVudC5jaGlsZHJlbjtcbiAgICB2YXIgbGVuID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICBjaGlsZHJlbltsZW5dLmRpc3Bvc2Uobm9EZXRhY2gsIG5vVHJhbnNpdGlvbik7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50RGlzcG9zZUNoaWxkcmVuO1xuXG5cbi8qKlxuICogQGZpbGUg5pu05paw5YWD57Sg55qE5a2Q5YWD57Sg6KeG5Zu+XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8qKlxuICog5pu05paw5YWD57Sg55qE5a2Q5YWD57Sg6KeG5Zu+XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQg6KaB5pu05paw55qE5YWD57SgXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5mdW5jdGlvbiBlbGVtZW50VXBkYXRlQ2hpbGRyZW4oZWxlbWVudCwgY2hhbmdlcykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5fdXBkYXRlKGNoYW5nZXMpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudFVwZGF0ZUNoaWxkcmVuO1xuXG5cbi8qKlxuICogQGZpbGUg5L2/5YWD57Sg6IqC54K55Yiw6L6+55u45bqU55qE55Sf5ZG95ZGo5pyfXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL2xpZmUtY3ljbGUnKTtcblxuLyoqXG4gKiDkvb/lhYPntKDoioLngrnliLDovr7nm7jlupTnmoTnlJ/lkb3lkajmnJ9cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDnlJ/lkb3lkajmnJ/lkI3np7BcbiAqL1xuZnVuY3Rpb24gZWxlbWVudE93blRvUGhhc2UobmFtZSkge1xuICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlW25hbWVdIHx8IHRoaXMubGlmZUN5Y2xlO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duVG9QaGFzZTtcblxuXG4vKipcbiAqIEBmaWxlIOWIm+W7uuiKgueCueeahOW3peWOguaWueazlVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGhvdFRhZ3MgPSByZXF1aXJlKCcuLi9icm93c2VyL2hvdC10YWdzJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIFRleHROb2RlID0gcmVxdWlyZSgnLi90ZXh0LW5vZGUnKTtcbi8vIHZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG4vLyB2YXIgU2xvdE5vZGUgPSByZXF1aXJlKCcuL3Nsb3Qtbm9kZScpO1xuLy8gdmFyIEZvck5vZGUgPSByZXF1aXJlKCcuL2Zvci1ub2RlJyk7XG4vLyB2YXIgSWZOb2RlID0gcmVxdWlyZSgnLi9pZi1ub2RlJyk7XG4vLyB2YXIgVGVtcGxhdGVOb2RlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZS1ub2RlJyk7XG5cblxuLyoqXG4gKiDliJvlu7roioLngrlcbiAqXG4gKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtNb2RlbD19IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHJldHVybiB7Tm9kZX1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlTm9kZShhTm9kZSwgcGFyZW50LCBzY29wZSkge1xuICAgIHZhciBwYXJlbnRJc0NvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVDtcbiAgICB2YXIgb3duZXIgPSBwYXJlbnRJc0NvbXBvbmVudCA/IHBhcmVudCA6IChwYXJlbnQuY2hpbGRPd25lciB8fCBwYXJlbnQub3duZXIpO1xuICAgIHNjb3BlID0gc2NvcGUgfHwgKHBhcmVudElzQ29tcG9uZW50ID8gcGFyZW50LmRhdGEgOiAocGFyZW50LmNoaWxkU2NvcGUgfHwgcGFyZW50LnNjb3BlKSk7XG5cblxuICAgIGlmIChhTm9kZS50ZXh0RXhwcikge1xuICAgICAgICByZXR1cm4gbmV3IFRleHROb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGFOb2RlLmRpcmVjdGl2ZXNbJ2lmJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBJZk5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoYU5vZGUuZGlyZWN0aXZlc1snZm9yJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBGb3JOb2RlKGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGhvdFRhZ3NbYU5vZGUudGFnTmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCk7XG4gICAgfVxuXG5cblxuICAgIHN3aXRjaCAoYU5vZGUudGFnTmFtZSkge1xuICAgICAgICBjYXNlICdzbG90JzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2xvdE5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50KTtcblxuICAgICAgICBjYXNlICd0ZW1wbGF0ZSc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRlbXBsYXRlTm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgQ29tcG9uZW50VHlwZSA9IG93bmVyLmdldENvbXBvbmVudFR5cGUoYU5vZGUpO1xuICAgICAgICAgICAgaWYgKENvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbXBvbmVudFR5cGUoe1xuICAgICAgICAgICAgICAgICAgICBhTm9kZTogYU5vZGUsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBvd25lcixcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgc3ViVGFnOiBhTm9kZS50YWdOYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KGFOb2RlLCBvd25lciwgc2NvcGUsIHBhcmVudCk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU5vZGU7XG5cblxuLyoqXG4gKiBAZmlsZSDnlJ/miJDlrZDlhYPntKBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBjcmVhdGVOb2RlID0gcmVxdWlyZSgnLi9jcmVhdGUtbm9kZScpO1xuXG4vKipcbiAqIOeUn+aIkOWtkOWFg+e0oFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCDlhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOimgea3u+WKoOWIsOeahOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudO+8nX0gYmVmb3JlRWwg6KaB5re75Yqg5Yiw5ZOq5Liq5YWD57Sg5LmL5YmNXG4gKi9cbmZ1bmN0aW9uIGdlbkVsZW1lbnRDaGlsZHJlbihlbGVtZW50LCBwYXJlbnRFbCwgYmVmb3JlRWwpIHtcbiAgICBwYXJlbnRFbCA9IHBhcmVudEVsIHx8IGVsZW1lbnQuZWw7XG5cbiAgICB2YXIgYU5vZGVDaGlsZHJlbiA9IGVsZW1lbnQuYU5vZGUuY2hpbGRyZW47XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhTm9kZUNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNyZWF0ZU5vZGUoYU5vZGVDaGlsZHJlbltpXSwgZWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIGNoaWxkLmF0dGFjaChwYXJlbnRFbCwgYmVmb3JlRWwpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZ2VuRWxlbWVudENoaWxkcmVuO1xuXG5cbi8qKlxuICogQGZpbGUg5bCG5rKh5pyJIHJvb3Qg5Y+q5pyJIGNoaWxkcmVuIOeahOWFg+e0oCBhdHRhY2gg5Yiw6aG16Z2iXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciBnZW5FbGVtZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL2dlbi1lbGVtZW50LWNoaWxkcmVuJyk7XG5cblxuLyoqXG4gKiDlsIbmsqHmnIkgcm9vdCDlj6rmnIkgY2hpbGRyZW4g55qE5YWD57SgIGF0dGFjaCDliLDpobXpnaJcbiAqIOS4u+imgeeUqOS6jiBzbG90IOWSjCB0ZW1wbGF0ZVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOimgea3u+WKoOWIsOeahOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudO+8nX0gYmVmb3JlRWwg6KaB5re75Yqg5Yiw5ZOq5Liq5YWD57Sg5LmL5YmNXG4gKi9cbmZ1bmN0aW9uIG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2gocGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgdGhpcy5zZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuaWQpO1xuICAgIGluc2VydEJlZm9yZSh0aGlzLnNlbCwgcGFyZW50RWwsIGJlZm9yZUVsKTtcblxuICAgIGdlbkVsZW1lbnRDaGlsZHJlbih0aGlzLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG5cbiAgICB0aGlzLl90b1BoYXNlKCdhdHRhY2hlZCcpO1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoO1xuXG5cbi8qKlxuICogQGZpbGUgc2xvdCDoioLngrnnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgZ3VpZCA9IHJlcXVpcmUoJy4uL3V0aWwvZ3VpZCcpO1xuLy8gdmFyIGNyZWF0ZUFOb2RlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hLW5vZGUnKTtcbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBjcmVhdGVBY2Nlc3NvciA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYWNjZXNzb3InKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgRGF0YSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YScpO1xuLy8gdmFyIERhdGFDaGFuZ2VUeXBlID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhLWNoYW5nZS10eXBlJyk7XG4vLyB2YXIgY2hhbmdlRXhwckNvbXBhcmUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZS1leHByLWNvbXBhcmUnKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi9saWZlLWN5Y2xlJyk7XG4vLyB2YXIgZ2V0QU5vZGVQcm9wID0gcmVxdWlyZSgnLi9nZXQtYS1ub2RlLXByb3AnKTtcbi8vIHZhciBub2RlRGlzcG9zZSA9IHJlcXVpcmUoJy4vbm9kZS1kaXNwb3NlJyk7XG4vLyB2YXIgY3JlYXRlUmV2ZXJzZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZXZlcnNlLW5vZGUnKTtcbi8vIHZhciBlbGVtZW50RGlzcG9zZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LWRpc3Bvc2UtY2hpbGRyZW4nKTtcbi8vIHZhciBlbGVtZW50VXBkYXRlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtdXBkYXRlLWNoaWxkcmVuJyk7XG4vLyB2YXIgZWxlbWVudE93blRvUGhhc2UgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLXRvLXBoYXNlJyk7XG4vLyB2YXIgbm9kZU93bk9ubHlDaGlsZHJlbkF0dGFjaCA9IHJlcXVpcmUoJy4vbm9kZS1vd24tb25seS1jaGlsZHJlbi1hdHRhY2gnKTtcblxuXG4vKipcbiAqIHNsb3Qg6IqC54K557G7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtNb2RlbD19IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQg54i25Lqy6IqC54K5XG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyP30gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqL1xuZnVuY3Rpb24gU2xvdE5vZGUoYU5vZGUsIG93bmVyLCBzY29wZSwgcGFyZW50LCByZXZlcnNlV2Fsa2VyKSB7XG4gICAgdmFyIHJlYWxBTm9kZSA9IGNyZWF0ZUFOb2RlKCk7XG4gICAgdGhpcy5hTm9kZSA9IHJlYWxBTm9kZTtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucGFyZW50Q29tcG9uZW50ID0gcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUXG4gICAgICAgID8gcGFyZW50XG4gICAgICAgIDogcGFyZW50LnBhcmVudENvbXBvbmVudDtcblxuICAgIHRoaXMuaWQgPSBndWlkKCk7XG5cbiAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5zdGFydDtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cbiAgICAvLyBjYWxjIHNsb3QgbmFtZVxuICAgIHRoaXMubmFtZUJpbmQgPSBnZXRBTm9kZVByb3AoYU5vZGUsICduYW1lJyk7XG4gICAgaWYgKHRoaXMubmFtZUJpbmQpIHtcbiAgICAgICAgdGhpcy5pc05hbWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5uYW1lID0gZXZhbEV4cHIodGhpcy5uYW1lQmluZC5leHByLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKTtcbiAgICB9XG5cbiAgICAvLyBjYWxjIGFOb2RlIGNoaWxkcmVuXG4gICAgdmFyIGdpdmVuU2xvdHMgPSBvd25lci5naXZlblNsb3RzO1xuICAgIHZhciBnaXZlbkNoaWxkcmVuO1xuICAgIGlmIChnaXZlblNsb3RzKSB7XG4gICAgICAgIGdpdmVuQ2hpbGRyZW4gPSB0aGlzLmlzTmFtZWQgPyBnaXZlblNsb3RzLm5hbWVkW3RoaXMubmFtZV0gOiBnaXZlblNsb3RzLm5vbmFtZTtcbiAgICB9XG5cbiAgICBpZiAoZ2l2ZW5DaGlsZHJlbikge1xuICAgICAgICB0aGlzLmlzSW5zZXJ0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlYWxBTm9kZS5jaGlsZHJlbiA9IGdpdmVuQ2hpbGRyZW4gfHwgYU5vZGUuY2hpbGRyZW4uc2xpY2UoMCk7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgLy8gY2FsYyBzY29wZWQgc2xvdCB2YXJzXG4gICAgcmVhbEFOb2RlLnZhcnMgPSBhTm9kZS52YXJzO1xuICAgIHZhciBpbml0RGF0YSA9IHt9O1xuICAgIGVhY2gocmVhbEFOb2RlLnZhcnMsIGZ1bmN0aW9uICh2YXJJdGVtKSB7XG4gICAgICAgIG1lLmlzU2NvcGVkID0gdHJ1ZTtcbiAgICAgICAgaW5pdERhdGFbdmFySXRlbS5uYW1lXSA9IGV2YWxFeHByKHZhckl0ZW0uZXhwciwgc2NvcGUsIG93bmVyKTtcbiAgICB9KTtcblxuICAgIC8vIGNoaWxkIG93bmVyICYgY2hpbGQgc2NvcGVcbiAgICBpZiAodGhpcy5pc0luc2VydGVkKSB7XG4gICAgICAgIHRoaXMuY2hpbGRPd25lciA9IG93bmVyLm93bmVyO1xuICAgICAgICB0aGlzLmNoaWxkU2NvcGUgPSBvd25lci5zY29wZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1Njb3BlZCkge1xuICAgICAgICB0aGlzLmNoaWxkU2NvcGUgPSBuZXcgRGF0YShpbml0RGF0YSwgdGhpcy5jaGlsZFNjb3BlIHx8IHRoaXMuc2NvcGUpO1xuICAgIH1cblxuXG4gICAgb3duZXIuc2xvdENoaWxkcmVuLnB1c2godGhpcyk7XG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHJldmVyc2VXYWxrZXIpIHtcblxuICAgICAgICB0aGlzLnNlbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLnNlbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG5cbiAgICAgICAgZWFjaCh0aGlzLmFOb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoYU5vZGVDaGlsZCkge1xuICAgICAgICAgICAgbWUuY2hpbGRyZW4ucHVzaChjcmVhdGVSZXZlcnNlTm9kZShhTm9kZUNoaWxkLCByZXZlcnNlV2Fsa2VyLCBtZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHJldmVyc2VXYWxrZXIudGFyZ2V0LCByZXZlcnNlV2Fsa2VyLmN1cnJlbnQpO1xuXG4gICAgICAgIHRoaXMuX3RvUGhhc2UoJ2F0dGFjaGVkJyk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5TbG90Tm9kZS5wcm90b3R5cGUubm9kZVR5cGUgPSBOb2RlVHlwZS5TTE9UO1xuXG4vKipcbiAqIOmUgOavgemHiuaUviBzbG90XG4gKlxuICogQHBhcmFtIHtib29sZWFuPX0gbm9EZXRhY2gg5piv5ZCm5LiN6KaB5oqK6IqC54K55LuOZG9t56e76ZmkXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1RyYW5zaXRpb24g5piv5ZCm5LiN5pi+56S66L+H5rih5Yqo55S75pWI5p6cXG4gKi9cblNsb3ROb2RlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKG5vRGV0YWNoLCBub1RyYW5zaXRpb24pIHtcbiAgICB0aGlzLmNoaWxkT3duZXIgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRTY29wZSA9IG51bGw7XG5cbiAgICBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKHRoaXMsIG5vRGV0YWNoLCBub1RyYW5zaXRpb24pO1xuICAgIG5vZGVEaXNwb3NlKHRoaXMpO1xufTtcblxuU2xvdE5vZGUucHJvdG90eXBlLmF0dGFjaCA9IG5vZGVPd25Pbmx5Q2hpbGRyZW5BdHRhY2g7XG5TbG90Tm9kZS5wcm90b3R5cGUuX3RvUGhhc2UgPSBlbGVtZW50T3duVG9QaGFzZTtcblxuLyoqXG4gKiDop4blm77mm7TmlrDlh73mlbBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICogQHBhcmFtIHtib29sZWFuPX0gaXNGcm9tT3V0ZXIg5Y+Y5YyW5L+h5oGv5piv5ZCm5p2l5rqQ5LqO54i257uE5Lu25LmL5aSW55qE57uE5Lu2XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5TbG90Tm9kZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzLCBpc0Zyb21PdXRlcikge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5uYW1lQmluZCAmJiBldmFsRXhwcih0aGlzLm5hbWVCaW5kLmV4cHIsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpICE9PSBtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMub3duZXIuX25vdGlmeU5lZWRSZWxvYWQoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc0Zyb21PdXRlcikge1xuICAgICAgICBpZiAodGhpcy5pc0luc2VydGVkKSB7XG4gICAgICAgICAgICBlbGVtZW50VXBkYXRlQ2hpbGRyZW4odGhpcywgY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2NvcGVkKSB7XG4gICAgICAgICAgICBlYWNoKHRoaXMuYU5vZGUudmFycywgZnVuY3Rpb24gKHZhckl0ZW0pIHtcbiAgICAgICAgICAgICAgICBtZS5jaGlsZFNjb3BlLnNldCh2YXJJdGVtLm5hbWUsIGV2YWxFeHByKHZhckl0ZW0uZXhwciwgbWUuc2NvcGUsIG1lLm93bmVyKSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB2YXIgc2NvcGVkQ2hhbmdlcyA9IFtdO1xuICAgICAgICAgICAgZWFjaChjaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZS5pc0luc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZENoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVhY2gobWUuYU5vZGUudmFycywgZnVuY3Rpb24gKHZhckl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSB2YXJJdGVtLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWxhdGlvbiA9IGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCB2YXJJdGVtLmV4cHIsIG1lLnNjb3BlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRpb24gPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLnR5cGUgIT09IERhdGFDaGFuZ2VUeXBlLlNQTElDRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkQ2hhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBEYXRhQ2hhbmdlVHlwZS5TRVQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcjogY3JlYXRlQWNjZXNzb3IoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogRXhwclR5cGUuU1RSSU5HLCB2YWx1ZTogbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWUuY2hpbGRTY29wZS5nZXQobmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjaGFuZ2Uub3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZWxhdGlvbiA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkQ2hhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByOiBjcmVhdGVBY2Nlc3NvcihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBFeHByVHlwZS5TVFJJTkcsIHZhbHVlOiBuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IERhdGFDaGFuZ2VUeXBlLlNQTElDRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogY2hhbmdlLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50OiBjaGFuZ2UuZGVsZXRlQ291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoYW5nZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRpb25zOiBjaGFuZ2UuaW5zZXJ0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZWxlbWVudFVwZGF0ZUNoaWxkcmVuKHRoaXMsIHNjb3BlZENoYW5nZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmlzSW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRVcGRhdGVDaGlsZHJlbih0aGlzLCBjaGFuZ2VzKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNsb3ROb2RlO1xuXG5cbi8qKlxuICogQGZpbGUg5aSN5Yi25oyH5Luk6ZuG5ZCI5a+56LGhXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vKipcbiAqIOWkjeWItuaMh+S7pOmbhuWQiOWvueixoVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ug6KaB5aSN5Yi255qE5oyH5Luk6ZuG5ZCI5a+56LGhXG4gKiBAcGFyYW0ge09iamVjdD19IGV4Y2x1ZGVzIOmcgOimgeaOkumZpOeahGtleembhuWQiFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBjbG9uZURpcmVjdGl2ZXMoc291cmNlLCBleGNsdWRlcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBleGNsdWRlcyA9IGV4Y2x1ZGVzIHx8IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoIWV4Y2x1ZGVzW2tleV0pIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjbG9uZURpcmVjdGl2ZXM7XG5cblxuLyoqXG4gKiBAZmlsZSDnroDljZXmiafooYzplIDmr4HoioLngrnnmoTooYzkuLpcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgbm9kZURpc3Bvc2UgPSByZXF1aXJlKCcuL25vZGUtZGlzcG9zZScpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuXG4vKipcbiAqIOeugOWNleaJp+ihjOmUgOavgeiKgueCueeahOihjOS4ulxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vRGV0YWNoIOaYr+WQpuS4jeimgeaKiuiKgueCueS7jmRvbeenu+mZpFxuICovXG5mdW5jdGlvbiBub2RlT3duU2ltcGxlRGlzcG9zZShub0RldGFjaCkge1xuICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4odGhpcywgbm9EZXRhY2gsIDEpO1xuXG4gICAgaWYgKCFub0RldGFjaCkge1xuICAgICAgICByZW1vdmVFbCh0aGlzLmVsKTtcbiAgICB9XG5cbiAgICBub2RlRGlzcG9zZSh0aGlzKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbm9kZU93blNpbXBsZURpc3Bvc2U7XG5cblxuLyoqXG4gKiBAZmlsZSDliJvlu7roioLngrnlr7nlupTnmoQgc3R1bXAgY29tbWVudCDlhYPntKBcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuXG4vKipcbiAqIOWIm+W7uuiKgueCueWvueW6lOeahCBzdHVtcCBjb21tZW50IOS4u+WFg+e0oFxuICovXG5mdW5jdGlvbiBub2RlT3duQ3JlYXRlU3R1bXAoKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWwgfHwgZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gbm9kZU93bkNyZWF0ZVN0dW1wO1xuXG5cbi8qKlxuICogQGZpbGUgZm9yIOaMh+S7pOiKgueCueexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vdXRpbC9pbmhlcml0cycpO1xuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgY3JlYXRlQU5vZGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvY3JlYXRlLWEtbm9kZScpO1xuLy8gdmFyIEV4cHJUeXBlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2V4cHItdHlwZScpO1xuLy8gdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4uL3BhcnNlci9wYXJzZS1leHByJyk7XG4vLyB2YXIgY3JlYXRlQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9wYXJzZXIvY3JlYXRlLWFjY2Vzc29yJyk7XG4vLyB2YXIgY2xvbmVEaXJlY3RpdmVzID0gcmVxdWlyZSgnLi4vcGFyc2VyL2Nsb25lLWRpcmVjdGl2ZXMnKTtcbi8vIHZhciBEYXRhID0gcmVxdWlyZSgnLi4vcnVudGltZS9kYXRhJyk7XG4vLyB2YXIgRGF0YUNoYW5nZVR5cGUgPSByZXF1aXJlKCcuLi9ydW50aW1lL2RhdGEtY2hhbmdlLXR5cGUnKTtcbi8vIHZhciBjaGFuZ2VFeHByQ29tcGFyZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBjaGFuZ2VzSXNJbkRhdGFSZWYgPSByZXF1aXJlKCcuLi9ydW50aW1lL2NoYW5nZXMtaXMtaW4tZGF0YS1yZWYnKTtcbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi9saWZlLWN5Y2xlJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIGNyZWF0ZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1ub2RlJyk7XG4vLyB2YXIgY3JlYXRlUmV2ZXJzZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZXZlcnNlLW5vZGUnKTtcbi8vIHZhciBub2RlT3duU2ltcGxlRGlzcG9zZSA9IHJlcXVpcmUoJy4vbm9kZS1vd24tc2ltcGxlLWRpc3Bvc2UnKTtcbi8vIHZhciBub2RlT3duQ3JlYXRlU3R1bXAgPSByZXF1aXJlKCcuL25vZGUtb3duLWNyZWF0ZS1zdHVtcCcpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuLy8gdmFyIGRhdGFDYWNoZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YS1jYWNoZScpO1xuXG5cbi8qKlxuICog5b6q546v6aG555qE5pWw5o2u5a655Zmo57G7XG4gKlxuICogQGlubmVyXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBmb3JFbGVtZW50IGZvcuWFg+e0oOWvueixoVxuICogQHBhcmFtIHsqfSBpdGVtIOW9k+WJjemhueeahOaVsOaNrlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IOW9k+WJjemhueeahOe0ouW8lVxuICovXG5mdW5jdGlvbiBGb3JJdGVtRGF0YShmb3JFbGVtZW50LCBpdGVtLCBpbmRleCkge1xuICAgIHRoaXMuaWQgPSBndWlkKCk7XG4gICAgdGhpcy5wYXJlbnQgPSBmb3JFbGVtZW50LnNjb3BlO1xuICAgIHRoaXMucmF3ID0ge307XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcblxuICAgIHRoaXMuZGlyZWN0aXZlID0gZm9yRWxlbWVudC5hTm9kZS5kaXJlY3RpdmVzWydmb3InXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICB0aGlzLnJhd1t0aGlzLmRpcmVjdGl2ZS5pdGVtLnJhd10gPSBpdGVtO1xuICAgIHRoaXMucmF3W3RoaXMuZGlyZWN0aXZlLmluZGV4LnJhd10gPSBpbmRleDtcbn1cblxuLyoqXG4gKiDlsIbmlbDmja7mk43kvZznmoTooajovr7lvI/vvIzovazmjaLmiJDkuLrlr7lwYXJlbnTmlbDmja7mk43kvZznmoTooajovr7lvI9cbiAqIOS4u+imgeaYr+WvuWl0ZW3lkoxpbmRleOi/m+ihjOWkhOeQhlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOihqOi+vuW8j1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5Gb3JJdGVtRGF0YS5wcm90b3R5cGUuZXhwclJlc29sdmUgPSBmdW5jdGlvbiAoZXhwcikge1xuICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLmRpcmVjdGl2ZTtcbiAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZUl0ZW0oZXhwcikge1xuICAgICAgICBpZiAoZXhwci50eXBlID09PSBFeHByVHlwZS5BQ0NFU1NPUlxuICAgICAgICAgICAgJiYgZXhwci5wYXRoc1swXS52YWx1ZSA9PT0gZGlyZWN0aXZlLml0ZW0ucGF0aHNbMF0udmFsdWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3IoXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlLnZhbHVlLnBhdGhzLmNvbmNhdChcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuTlVNQkVSLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1lLmdldChkaXJlY3RpdmUuaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHIucGF0aHMuc2xpY2UoMSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgZXhwciA9IHJlc29sdmVJdGVtKGV4cHIpO1xuXG4gICAgdmFyIHJlc29sdmVkUGF0aHMgPSBbXTtcblxuICAgIGVhY2goZXhwci5wYXRocywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmVzb2x2ZWRQYXRocy5wdXNoKFxuICAgICAgICAgICAgaXRlbS50eXBlID09PSBFeHByVHlwZS5BQ0NFU1NPUlxuICAgICAgICAgICAgICAgICYmIGl0ZW0ucGF0aHNbMF0udmFsdWUgPT09IGRpcmVjdGl2ZS5pbmRleC5wYXRoc1swXS52YWx1ZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgdHlwZTogRXhwclR5cGUuTlVNQkVSLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBtZS5nZXQoZGlyZWN0aXZlLmluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiByZXNvbHZlSXRlbShpdGVtKVxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKHJlc29sdmVkUGF0aHMpO1xufTtcblxuLy8g5Luj55CG5pWw5o2u5pON5L2c5pa55rOVXG5pbmhlcml0cyhGb3JJdGVtRGF0YSwgRGF0YSk7XG5lYWNoKFxuICAgIFsnc2V0JywgJ3JlbW92ZScsICd1bnNoaWZ0JywgJ3NoaWZ0JywgJ3B1c2gnLCAncG9wJywgJ3NwbGljZSddLFxuICAgIGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgRm9ySXRlbURhdGEucHJvdG90eXBlWydfJyArIG1ldGhvZF0gPSBEYXRhLnByb3RvdHlwZVttZXRob2RdO1xuICAgICAgICBGb3JJdGVtRGF0YS5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uIChleHByKSB7XG4gICAgICAgICAgICBleHByID0gdGhpcy5leHByUmVzb2x2ZShwYXJzZUV4cHIoZXhwcikpO1xuICAgICAgICAgICAgZGF0YUNhY2hlLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudFttZXRob2RdLmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LFxuICAgICAgICAgICAgICAgIFtleHByXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgfVxuKTtcblxuLyoqXG4gKiDliJvlu7ogZm9yIOaMh+S7pOWFg+e0oOeahOWtkOWFg+e0oFxuICpcbiAqIEBpbm5lclxuICogQHBhcmFtIHtGb3JEaXJlY3RpdmV9IGZvckVsZW1lbnQgZm9yIOaMh+S7pOWFg+e0oOWvueixoVxuICogQHBhcmFtIHsqfSBpdGVtIOWtkOWFg+e0oOWvueW6lOaVsOaNrlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IOWtkOWFg+e0oOWvueW6lOW6j+WPt1xuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRm9yRGlyZWN0aXZlQ2hpbGQoZm9yRWxlbWVudCwgaXRlbSwgaW5kZXgpIHtcbiAgICB2YXIgaXRlbVNjb3BlID0gbmV3IEZvckl0ZW1EYXRhKGZvckVsZW1lbnQsIGl0ZW0sIGluZGV4KTtcbiAgICByZXR1cm4gY3JlYXRlTm9kZShmb3JFbGVtZW50Lml0ZW1BTm9kZSwgZm9yRWxlbWVudCwgaXRlbVNjb3BlKTtcbn1cblxuLyoqXG4gKiBmb3Ig5oyH5Luk6IqC54K557G7XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFOb2RlIOaKveixoeiKgueCuVxuICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tueOr+Wig1xuICogQHBhcmFtIHtNb2RlbD19IHNjb3BlIOaJgOWxnuaVsOaNrueOr+Wig1xuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQg54i25Lqy6IqC54K5XG4gKiBAcGFyYW0ge0RPTUNoaWxkcmVuV2Fsa2VyP30gcmV2ZXJzZVdhbGtlciDlrZDlhYPntKDpgY3ljoblr7nosaFcbiAqL1xuZnVuY3Rpb24gRm9yTm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpIHtcbiAgICB0aGlzLmFOb2RlID0gYU5vZGU7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnBhcmVudENvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVFxuICAgICAgICA/IHBhcmVudFxuICAgICAgICA6IHBhcmVudC5wYXJlbnRDb21wb25lbnQ7XG5cbiAgICB0aGlzLmlkID0gZ3VpZCgpO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIHRoaXMuaXRlbUFOb2RlID0gY3JlYXRlQU5vZGUoe1xuICAgICAgICBjaGlsZHJlbjogYU5vZGUuY2hpbGRyZW4sXG4gICAgICAgIHByb3BzOiBhTm9kZS5wcm9wcyxcbiAgICAgICAgZXZlbnRzOiBhTm9kZS5ldmVudHMsXG4gICAgICAgIHRhZ05hbWU6IGFOb2RlLnRhZ05hbWUsXG4gICAgICAgIHZhcnM6IGFOb2RlLnZhcnMsXG4gICAgICAgIGhvdHNwb3Q6IGFOb2RlLmhvdHNwb3QsXG4gICAgICAgIGRpcmVjdGl2ZXM6IGNsb25lRGlyZWN0aXZlcyhhTm9kZS5kaXJlY3RpdmVzLCB7XG4gICAgICAgICAgICAnZm9yJzogMVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgdGhpcy5wYXJhbSA9IGFOb2RlLmRpcmVjdGl2ZXNbJ2ZvciddOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuXG4gICAgLy8gI1tiZWdpbl0gcmV2ZXJzZVxuICAgIGlmIChyZXZlcnNlV2Fsa2VyKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGVhY2goXG4gICAgICAgICAgICBldmFsRXhwcih0aGlzLnBhcmFtLnZhbHVlLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1TY29wZSA9IG5ldyBGb3JJdGVtRGF0YShtZSwgaXRlbSwgaSk7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY3JlYXRlUmV2ZXJzZU5vZGUobWUuaXRlbUFOb2RlLCByZXZlcnNlV2Fsa2VyLCBtZSwgaXRlbVNjb3BlKTtcbiAgICAgICAgICAgICAgICBtZS5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHJldmVyc2VXYWxrZXIudGFyZ2V0LCByZXZlcnNlV2Fsa2VyLmN1cnJlbnQpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuXG5Gb3JOb2RlLnByb3RvdHlwZS5ub2RlVHlwZSA9IE5vZGVUeXBlLkZPUjtcbkZvck5vZGUucHJvdG90eXBlLl9jcmVhdGUgPSBub2RlT3duQ3JlYXRlU3R1bXA7XG5Gb3JOb2RlLnByb3RvdHlwZS5kaXNwb3NlID0gbm9kZU93blNpbXBsZURpc3Bvc2U7XG5cbi8qKlxuICog5bCG5YWD57SgYXR0YWNo5Yiw6aG16Z2i55qE6KGM5Li6XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50RWwg6KaB5re75Yqg5Yiw55qE54i25YWD57SgXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW5077ydfSBiZWZvcmVFbCDopoHmt7vliqDliLDlk6rkuKrlhYPntKDkuYvliY1cbiAqL1xuRm9yTm9kZS5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuXG4gICAgLy8gcGFpbnQgbGlzdFxuICAgIHZhciBlbCA9IHRoaXMuZWwgfHwgcGFyZW50RWwuZmlyc3RDaGlsZDtcbiAgICB2YXIgZGF0YSA9IGV2YWxFeHByKHRoaXMucGFyYW0udmFsdWUsIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuICAgIHZhciBsZW4gPSBkYXRhICYmIGRhdGEubGVuZ3RoIHx8IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVGb3JEaXJlY3RpdmVDaGlsZCh0aGlzLCBkYXRhW2ldLCBpKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgY2hpbGQuYXR0YWNoKHBhcmVudEVsLCBlbCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDlsIblhYPntKDku47pobXpnaLkuIrnp7vpmaTnmoTooYzkuLpcbiAqL1xuRm9yTm9kZS5wcm90b3R5cGUuZGV0YWNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmxpZmVDeWNsZS5hdHRhY2hlZCkge1xuICAgICAgICBlbGVtZW50RGlzcG9zZUNoaWxkcmVuKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHJlbW92ZUVsKHRoaXMuZWwpO1xuICAgICAgICB0aGlzLmxpZmVDeWNsZSA9IExpZmVDeWNsZS5kZXRhY2hlZDtcbiAgICB9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBmZWNzLW1heC1zdGF0ZW1lbnRzICovXG5cbi8qKlxuICog6KeG5Zu+5pu05paw5Ye95pWwXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2hhbmdlcyDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuRm9yTm9kZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIC8vIOaOp+WItuWIl+ihqOabtOaWsOetlueVpeaYr+WQpuWOn+agt+abtOaWsOeahOWPmOmHj1xuICAgIHZhciBvcmlnaW5hbFVwZGF0ZSA9IHRoaXMuYU5vZGUuZGlyZWN0aXZlcy50cmFuc2l0aW9uO1xuXG5cbiAgICB2YXIgb2xkQ2hpbGRyZW5MZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICB2YXIgY2hpbGRyZW5DaGFuZ2VzID0gbmV3IEFycmF5KG9sZENoaWxkcmVuTGVuKTtcblxuICAgIGZ1bmN0aW9uIHB1c2hUb0NoaWxkcmVuQ2hhbmdlcyhjaGFuZ2UpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbkNoYW5nZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAoY2hpbGRyZW5DaGFuZ2VzW2ldID0gY2hpbGRyZW5DaGFuZ2VzW2ldIHx8IFtdKS5wdXNoKGNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGlzcG9zZUNoaWxkcmVuID0gW107XG5cblxuICAgIC8vIOWIpOaWreWIl+ihqOaYr+WQpueItuWFg+e0oOS4i+WUr+S4gOeahOWFg+e0oFxuICAgIC8vIOWmguaenOaYr+eahOivne+8jOWPr+S7peWBmuS4gOS6m+abtOaWsOS8mOWMllxuICAgIHZhciBwYXJlbnRFbCA9IHRoaXMuZWwucGFyZW50Tm9kZTtcbiAgICB2YXIgcGFyZW50Rmlyc3RDaGlsZCA9IHBhcmVudEVsLmZpcnN0Q2hpbGQ7XG4gICAgdmFyIHBhcmVudExhc3RDaGlsZCA9IHBhcmVudEVsLmxhc3RDaGlsZDtcbiAgICB2YXIgaXNPbmx5UGFyZW50Q2hpbGQgPSBvbGRDaGlsZHJlbkxlbiA+IDAgLy8g5pyJ5a2p5a2Q5pe2XG4gICAgICAgICAgICAmJiBwYXJlbnRGaXJzdENoaWxkID09PSB0aGlzLmNoaWxkcmVuWzBdLmVsXG4gICAgICAgICAgICAmJiAocGFyZW50TGFzdENoaWxkID09PSB0aGlzLmVsIHx8IHBhcmVudExhc3RDaGlsZCA9PT0gdGhpcy5jaGlsZHJlbltvbGRDaGlsZHJlbkxlbiAtIDFdLmVsKVxuICAgICAgICB8fCBvbGRDaGlsZHJlbkxlbiA9PT0gMCAvLyDml6DlranlrZDml7ZcbiAgICAgICAgICAgICYmIHBhcmVudEZpcnN0Q2hpbGQgPT09IHRoaXMuZWxcbiAgICAgICAgICAgICYmIHBhcmVudExhc3RDaGlsZCA9PT0gdGhpcy5lbDtcblxuICAgIC8vIOaOp+WItuWIl+ihqOaYr+WQpuaVtOS9k+abtOaWsOeahOWPmOmHj1xuICAgIHZhciBpc0NoaWxkcmVuUmVidWlsZDtcblxuICAgIHZhciBuZXdMaXN0ID0gZXZhbEV4cHIodGhpcy5wYXJhbS52YWx1ZSwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG4gICAgdmFyIG5ld0xlbiA9IG5ld0xpc3QgJiYgbmV3TGlzdC5sZW5ndGggfHwgMDtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlZGVjbGFyZSAqL1xuICAgIGZvciAodmFyIGNJbmRleCA9IDAsIGNMZW4gPSBjaGFuZ2VzLmxlbmd0aDsgY0luZGV4IDwgY0xlbjsgY0luZGV4KyspIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbY0luZGV4XTtcbiAgICAgICAgdmFyIHJlbGF0aW9uID0gY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlLmV4cHIsIHRoaXMucGFyYW0udmFsdWUsIHRoaXMuc2NvcGUpO1xuXG4gICAgICAgIGlmICghcmVsYXRpb24pIHtcbiAgICAgICAgICAgIC8vIOaXoOWFs+aXtu+8jOebtOaOpeS8oOmAkue7meWtkOWFg+e0oOabtOaWsO+8jOWIl+ihqOacrOi6q+S4jemcgOimgeWKqFxuICAgICAgICAgICAgcHVzaFRvQ2hpbGRyZW5DaGFuZ2VzKGNoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVsYXRpb24gPiAyKSB7XG4gICAgICAgICAgICAvLyDlj5jmm7Tooajovr7lvI/mmK9saXN057uR5a6a6KGo6L6+5byP55qE5a2Q6aG5XG4gICAgICAgICAgICAvLyDlj6rpnIDopoHlr7nnm7jlupTnmoTlrZDpobnov5vooYzmm7TmlrBcbiAgICAgICAgICAgIHZhciBjaGFuZ2VQYXRocyA9IGNoYW5nZS5leHByLnBhdGhzO1xuICAgICAgICAgICAgdmFyIGZvckxlbiA9IHRoaXMucGFyYW0udmFsdWUucGF0aHMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNoYW5nZUluZGV4ID0gK2V2YWxFeHByKGNoYW5nZVBhdGhzW2Zvckxlbl0sIHRoaXMuc2NvcGUsIHRoaXMub3duZXIpO1xuXG4gICAgICAgICAgICBpZiAoaXNOYU4oY2hhbmdlSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgcHVzaFRvQ2hpbGRyZW5DaGFuZ2VzKGNoYW5nZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGNoYW5nZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICBleHByOiBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW0uaXRlbS5wYXRocy5jb25jYXQoY2hhbmdlUGF0aHMuc2xpY2UoZm9yTGVuICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaGFuZ2UudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBjaGFuZ2UuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50OiBjaGFuZ2UuZGVsZXRlQ291bnQsXG4gICAgICAgICAgICAgICAgICAgIGluc2VydGlvbnM6IGNoYW5nZS5pbnNlcnRpb25zLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb246IGNoYW5nZS5vcHRpb25cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tjaGFuZ2VJbmRleF0gPSBjaGlsZHJlbkNoYW5nZXNbY2hhbmdlSW5kZXhdIHx8IFtdKVxuICAgICAgICAgICAgICAgICAgICAucHVzaChjaGFuZ2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW5bY2hhbmdlSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gRGF0YUNoYW5nZVR5cGUuU1BMSUNFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2NoYW5nZUluZGV4XS5zY29wZS5fc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZS5leHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdLmNvbmNhdChjaGFuZ2UuaW5kZXgsIGNoYW5nZS5kZWxldGVDb3VudCwgY2hhbmdlLmluc2VydGlvbnMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2lsZW50OiAxIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2NoYW5nZUluZGV4XS5zY29wZS5fc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZS5leHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNpbGVudDogMSB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoYW5nZS50eXBlICE9PSBEYXRhQ2hhbmdlVHlwZS5TUExJQ0UpIHtcbiAgICAgICAgICAgIC8vIOWPmOabtOihqOi+vuW8j+aYr2xpc3Tnu5Hlrprooajovr7lvI/mnKzouqvmiJbmr43pobnnmoTph43mlrDorr7lgLxcbiAgICAgICAgICAgIC8vIOatpOaXtumcgOimgeabtOaWsOaVtOS4quWIl+ihqFxuXG5cbiAgICAgICAgICAgIC8vIOiAgeeahOavlOaWsOeahOWkmueahOmDqOWIhu+8jOagh+iusOmcgOimgWRpc3Bvc2VcbiAgICAgICAgICAgIGlmIChvbGRDaGlsZHJlbkxlbiA+IG5ld0xlbikge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2VDaGlsZHJlbiA9IGRpc3Bvc2VDaGlsZHJlbi5jb25jYXQodGhpcy5jaGlsZHJlbi5zbGljZShuZXdMZW4pKTtcblxuICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlcyA9IGNoaWxkcmVuQ2hhbmdlcy5zbGljZSgwLCBuZXdMZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnNsaWNlKDAsIG5ld0xlbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOaVtOmhueWPmOabtFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdMZW47IGkrKykge1xuICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbaV0gPSBjaGlsZHJlbkNoYW5nZXNbaV0gfHwgW10pLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBEYXRhQ2hhbmdlVHlwZS5TRVQsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZXhwcjogY3JlYXRlQWNjZXNzb3IodGhpcy5wYXJhbS5pdGVtLnBhdGhzLnNsaWNlKDApKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ld0xpc3RbaV1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIOWvuWxpc3Tmm7TkuIrnuqfmlbDmja7nmoTnm7TmjqXorr7nva5cbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpb24gPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlc1tpXS5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5zY29wZS5fc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbS5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TGlzdFtpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaWxlbnQ6IDF9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlzQ2hpbGRyZW5SZWJ1aWxkID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWxhdGlvbiA9PT0gMiAmJiBjaGFuZ2UudHlwZSA9PT0gRGF0YUNoYW5nZVR5cGUuU1BMSUNFICYmICFpc0NoaWxkcmVuUmVidWlsZCkge1xuICAgICAgICAgICAgLy8g5Y+Y5pu06KGo6L6+5byP5pivbGlzdOe7keWumuihqOi+vuW8j+acrOi6q+aVsOe7hOeahHNwbGljZeaTjeS9nFxuICAgICAgICAgICAgLy8g5q2k5pe26ZyA6KaB5Yig6Zmk6YOo5YiG6aG577yM5Yib5bu66YOo5YiG6aG5XG4gICAgICAgICAgICB2YXIgY2hhbmdlU3RhcnQgPSBjaGFuZ2UuaW5kZXg7XG4gICAgICAgICAgICB2YXIgZGVsZXRlQ291bnQgPSBjaGFuZ2UuZGVsZXRlQ291bnQ7XG4gICAgICAgICAgICB2YXIgaW5zZXJ0aW9uc0xlbiA9IGNoYW5nZS5pbnNlcnRpb25zLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBuZXdDb3VudCA9IGluc2VydGlvbnNMZW4gLSBkZWxldGVDb3VudDtcblxuICAgICAgICAgICAgaWYgKG5ld0NvdW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4Q2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBEYXRhQ2hhbmdlVHlwZS5TRVQsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjogY2hhbmdlLm9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZXhwcjogdGhpcy5wYXJhbS5pbmRleFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gY2hhbmdlU3RhcnQgKyBkZWxldGVDb3VudDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgKGNoaWxkcmVuQ2hhbmdlc1tpXSA9IGNoaWxkcmVuQ2hhbmdlc1tpXSB8fCBbXSkucHVzaChpbmRleENoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0gJiYgdGhpcy5jaGlsZHJlbltpXS5zY29wZS5fc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDaGFuZ2UuZXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgLSBkZWxldGVDb3VudCArIGluc2VydGlvbnNMZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2lsZW50OiAxfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRlbGV0ZUxlbiA9IGRlbGV0ZUNvdW50O1xuICAgICAgICAgICAgd2hpbGUgKGRlbGV0ZUxlbi0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlbGV0ZUxlbiA8IGluc2VydGlvbnNMZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBjaGFuZ2VTdGFydCArIGRlbGV0ZUxlbjtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlXG4gICAgICAgICAgICAgICAgICAgIChjaGlsZHJlbkNoYW5nZXNbaV0gPSBjaGlsZHJlbkNoYW5nZXNbaV0gfHwgW10pLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRGF0YUNoYW5nZVR5cGUuU0VULFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBjaGFuZ2Uub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcjogY3JlYXRlQWNjZXNzb3IodGhpcy5wYXJhbS5pdGVtLnBhdGhzLnNsaWNlKDApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaGFuZ2UuaW5zZXJ0aW9uc1tkZWxldGVMZW5dXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5zY29wZS5fc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW0uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuaW5zZXJ0aW9uc1tkZWxldGVMZW5dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaWxlbnQ6IDF9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3Q291bnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgZGlzcG9zZUNoaWxkcmVuID0gZGlzcG9zZUNoaWxkcmVuLmNvbmNhdCh0aGlzLmNoaWxkcmVuLnNwbGljZShjaGFuZ2VTdGFydCArIGluc2VydGlvbnNMZW4sIC1uZXdDb3VudCkpO1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlcy5zcGxpY2UoY2hhbmdlU3RhcnQgKyBpbnNlcnRpb25zTGVuLCAtbmV3Q291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmV3Q291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNwbGljZUFyZ3MgPSBbY2hhbmdlU3RhcnQgKyBkZWxldGVDb3VudCwgMF0uY29uY2F0KG5ldyBBcnJheShuZXdDb3VudCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlLmFwcGx5KHRoaXMuY2hpbGRyZW4sIHNwbGljZUFyZ3MpO1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuQ2hhbmdlcy5zcGxpY2UuYXBwbHkoY2hpbGRyZW5DaGFuZ2VzLCBzcGxpY2VBcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBuZXdDaGlsZHJlbkxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgLy8g5qCH6K6wIGxlbmd0aCDmmK/lkKblj5HnlJ/lj5jljJZcbiAgICBpZiAobmV3Q2hpbGRyZW5MZW4gIT09IG9sZENoaWxkcmVuTGVuKSB7XG4gICAgICAgIHZhciBsZW5ndGhDaGFuZ2UgPSB7XG4gICAgICAgICAgICB0eXBlOiBEYXRhQ2hhbmdlVHlwZS5TRVQsXG4gICAgICAgICAgICBvcHRpb246IHt9LFxuICAgICAgICAgICAgZXhwcjogY3JlYXRlQWNjZXNzb3IoXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbS52YWx1ZS5wYXRocy5jb25jYXQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFeHByVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbGVuZ3RoJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNoYW5nZXNJc0luRGF0YVJlZihbbGVuZ3RoQ2hhbmdlXSwgdGhpcy5hTm9kZS5ob3RzcG90LmRhdGEpKSB7XG4gICAgICAgICAgICBwdXNoVG9DaGlsZHJlbkNoYW5nZXMobGVuZ3RoQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOa4hemZpOW6lOivpeW5suaOieeahCBjaGlsZFxuICAgIHRoaXMuX2RvQ3JlYXRlQW5kVXBkYXRlID0gZG9DcmVhdGVBbmRVcGRhdGU7XG5cbiAgICAvLyDov5nph4zkuI3nlKhnZXRUcmFuc2l0aW9u77yMZ2V0VHJhbnNpdGlvbuWSjHNjb3Bl55u45YWz77yMZm9y5ZKMZm9ySXRlbeeahHNjb3Bl5piv5LiN5ZCM55qEXG4gICAgLy8g5omA5LulZ2V0VHJhbnNpdGlvbue7k+aenOacrOi6q+S5n+aYr+S4jeS4gOiHtOeahOOAguS4jeWmguebtOaOpeWIpOaWreaMh+S7pOaYr+WQpuWtmOWcqO+8jOWmguaenOWtmOWcqOWwseS4jei/m+WFpeaatOWKm+a4hemZpOaooeW8j1xuICAgIC8vIHZhciB2aW9sZW50Q2xlYXIgPSBpc09ubHlQYXJlbnRDaGlsZCAmJiBuZXdDaGlsZHJlbkxlbiA9PT0gMCAmJiAhZWxlbWVudEdldFRyYW5zaXRpb24obWUpO1xuICAgIHZhciB2aW9sZW50Q2xlYXIgPSAhb3JpZ2luYWxVcGRhdGUgJiYgaXNPbmx5UGFyZW50Q2hpbGQgJiYgbmV3Q2hpbGRyZW5MZW4gPT09IDA7XG5cbiAgICB2YXIgZGlzcG9zZWRDaGlsZENvdW50ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3Bvc2VDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGlzcG9zZUNoaWxkID0gZGlzcG9zZUNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAoZGlzcG9zZUNoaWxkKSB7XG4gICAgICAgICAgICBkaXNwb3NlQ2hpbGQuX29uZGlzcG9zZWQgPSBjaGlsZERpc3Bvc2VkO1xuICAgICAgICAgICAgZGlzcG9zZUNoaWxkLmRpc3Bvc2UodmlvbGVudENsZWFyLCB2aW9sZW50Q2xlYXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hpbGREaXNwb3NlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZpb2xlbnRDbGVhcikge1xuICAgICAgICAvLyBjbG9uZU5vZGUgKyByZXBsYWNlQ2hpbGQgaXMgZmFzdGVyXG4gICAgICAgIC8vIHBhcmVudEVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB2YXIgcmVwbGFjZU5vZGUgPSBwYXJlbnRFbC5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgICBwYXJlbnRFbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZXBsYWNlTm9kZSwgcGFyZW50RWwpO1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgcmVwbGFjZU5vZGUuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuXG4gICAgaWYgKGRpc3Bvc2VDaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZG9DcmVhdGVBbmRVcGRhdGUoKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNoaWxkRGlzcG9zZWQoKSB7XG4gICAgICAgIGRpc3Bvc2VkQ2hpbGRDb3VudCsrO1xuICAgICAgICBpZiAoZGlzcG9zZWRDaGlsZENvdW50ID09PSBkaXNwb3NlQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgICAgICAmJiBkb0NyZWF0ZUFuZFVwZGF0ZSA9PT0gbWUuX2RvQ3JlYXRlQW5kVXBkYXRlXG4gICAgICAgICkge1xuICAgICAgICAgICAgZG9DcmVhdGVBbmRVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvQ3JlYXRlQW5kVXBkYXRlKCkge1xuICAgICAgICBtZS5fZG9DcmVhdGVBbmRVcGRhdGUgPSBudWxsO1xuICAgICAgICBpZiAodmlvbGVudENsZWFyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZhciBiZWZvcmVFbCA9IG1lLmVsO1xuXG4gICAgICAgIC8vIOWvueebuOW6lOeahOmhuei/m+ihjOabtOaWsFxuICAgICAgICBpZiAob2xkQ2hpbGRyZW5MZW4gPT09IDAgJiYgaXNPbmx5UGFyZW50Q2hpbGQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW47IGkrKykge1xuICAgICAgICAgICAgICAgIG1lLmNoaWxkcmVuW2ldID0gY3JlYXRlRm9yRGlyZWN0aXZlQ2hpbGQobWUsIG5ld0xpc3RbaV0sIGkpO1xuICAgICAgICAgICAgICAgIG1lLmNoaWxkcmVuW2ldLmF0dGFjaChwYXJlbnRFbCwgYmVmb3JlRWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5aaC5p6c5LiNYXR0YWNoZWTliJnnm7TmjqXliJvlu7rvvIzlpoLmnpzlrZjlnKjliJnosIPnlKjmm7TmlrDlh73mlbBcbiAgICAgICAgICAgIHZhciBqID0gLTE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0NoaWxkcmVuTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBtZS5jaGlsZHJlbltpXTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkNoYW5nZXNbaV0gJiYgY2hpbGQuX3VwZGF0ZShjaGlsZHJlbkNoYW5nZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVFbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaiA8IG5ld0NoaWxkcmVuTGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRDaGlsZCA9IG1lLmNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlRWwgPSBuZXh0Q2hpbGQuc2VsIHx8IG5leHRDaGlsZC5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lLmNoaWxkcmVuW2ldID0gY3JlYXRlRm9yRGlyZWN0aXZlQ2hpbGQobWUsIG5ld0xpc3RbaV0sIGkpO1xuICAgICAgICAgICAgICAgICAgICBtZS5jaGlsZHJlbltpXS5hdHRhY2gocGFyZW50RWwsIGJlZm9yZUVsIHx8IG1lLmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEZvck5vZGU7XG5cblxuLyoqXG4gKiBAZmlsZSDmuIXmtJfmnaHku7YgYU5vZGVcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGNyZWF0ZUFOb2RlID0gcmVxdWlyZSgnLi4vcGFyc2VyL2NyZWF0ZS1hLW5vZGUnKTtcbi8vIHZhciBjbG9uZURpcmVjdGl2ZXMgPSByZXF1aXJlKCcuLi9wYXJzZXIvY2xvbmUtZGlyZWN0aXZlcycpO1xuXG5cbi8qKlxuICog5riF5rSX5p2h5Lu2IGFOb2Rl77yM6L+U5Zue57qv5YeA5peg5p2h5Lu25oyH5Luk55qEIGFOb2RlXG4gKlxuICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg5p2h5Lu26IqC54K55a+56LGhXG4gKiBAcmV0dXJuIHtBTm9kZX1cbiAqL1xuZnVuY3Rpb24gcmluc2VDb25kQU5vZGUoYU5vZGUpIHtcbiAgICB2YXIgY2xlYXJBTm9kZSA9IGNyZWF0ZUFOb2RlKHtcbiAgICAgICAgY2hpbGRyZW46IGFOb2RlLmNoaWxkcmVuLFxuICAgICAgICBwcm9wczogYU5vZGUucHJvcHMsXG4gICAgICAgIGV2ZW50czogYU5vZGUuZXZlbnRzLFxuICAgICAgICB0YWdOYW1lOiBhTm9kZS50YWdOYW1lLFxuICAgICAgICB2YXJzOiBhTm9kZS52YXJzLFxuICAgICAgICBob3RzcG90OiBhTm9kZS5ob3RzcG90LFxuICAgICAgICBkaXJlY3RpdmVzOiBjbG9uZURpcmVjdGl2ZXMoYU5vZGUuZGlyZWN0aXZlcywge1xuICAgICAgICAgICAgJ2lmJzogMSxcbiAgICAgICAgICAgICdlbHNlJzogMSxcbiAgICAgICAgICAgICdlbGlmJzogMVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNsZWFyQU5vZGU7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJpbnNlQ29uZEFOb2RlO1xuXG5cbi8qKlxuICogQGZpbGUgaWYg5oyH5Luk6IqC54K557G7XG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBpbnNlcnRCZWZvcmUgPSByZXF1aXJlKCcuLi9icm93c2VyL2luc2VydC1iZWZvcmUnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIHJpbnNlQ29uZEFOb2RlID0gcmVxdWlyZSgnLi9yaW5zZS1jb25kLWFub2RlJyk7XG4vLyB2YXIgY3JlYXRlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLW5vZGUnKTtcbi8vIHZhciBjcmVhdGVSZXZlcnNlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLXJldmVyc2Utbm9kZScpO1xuLy8gdmFyIG5vZGVPd25DcmVhdGVTdHVtcCA9IHJlcXVpcmUoJy4vbm9kZS1vd24tY3JlYXRlLXN0dW1wJyk7XG4vLyB2YXIgZWxlbWVudFVwZGF0ZUNoaWxkcmVuID0gcmVxdWlyZSgnLi9lbGVtZW50LXVwZGF0ZS1jaGlsZHJlbicpO1xuLy8gdmFyIG5vZGVPd25TaW1wbGVEaXNwb3NlID0gcmVxdWlyZSgnLi9ub2RlLW93bi1zaW1wbGUtZGlzcG9zZScpO1xuXG4vKipcbiAqIGlmIOaMh+S7pOiKgueCueexu1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEBwYXJhbSB7TW9kZWw9fSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcj99IHJldmVyc2VXYWxrZXIg5a2Q5YWD57Sg6YGN5Y6G5a+56LGhXG4gKi9cbmZ1bmN0aW9uIElmTm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpIHtcbiAgICB0aGlzLmFOb2RlID0gYU5vZGU7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnBhcmVudENvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVFxuICAgICAgICA/IHBhcmVudFxuICAgICAgICA6IHBhcmVudC5wYXJlbnRDb21wb25lbnQ7XG5cbiAgICB0aGlzLmlkID0gZ3VpZCgpO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIHRoaXMuY29uZCA9IHRoaXMuYU5vZGUuZGlyZWN0aXZlc1snaWYnXS52YWx1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAocmV2ZXJzZVdhbGtlcikge1xuICAgICAgICBpZiAoZXZhbEV4cHIodGhpcy5jb25kLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSkge1xuICAgICAgICAgICAgdGhpcy5lbHNlSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bMF0gPSBjcmVhdGVSZXZlcnNlTm9kZShcbiAgICAgICAgICAgICAgICByaW5zZUNvbmRBTm9kZShhTm9kZSksXG4gICAgICAgICAgICAgICAgcmV2ZXJzZVdhbGtlcixcbiAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIGVhY2goYU5vZGUuZWxzZXMsIGZ1bmN0aW9uIChlbHNlQU5vZGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsaWYgPSBlbHNlQU5vZGUuZGlyZWN0aXZlcy5lbGlmO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFlbGlmIHx8IGVsaWYgJiYgZXZhbEV4cHIoZWxpZi52YWx1ZSwgbWUuc2NvcGUsIG1lLm93bmVyKSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5lbHNlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgbWUuY2hpbGRyZW5bMF0gPSBjcmVhdGVSZXZlcnNlTm9kZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbnNlQ29uZEFOb2RlKGVsc2VBTm9kZSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlV2Fsa2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY3JlYXRlKCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCByZXZlcnNlV2Fsa2VyLnRhcmdldCwgcmV2ZXJzZVdhbGtlci5jdXJyZW50KTtcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cbklmTm9kZS5wcm90b3R5cGUubm9kZVR5cGUgPSBOb2RlVHlwZS5JRjtcblxuSWZOb2RlLnByb3RvdHlwZS5fY3JlYXRlID0gbm9kZU93bkNyZWF0ZVN0dW1wO1xuSWZOb2RlLnByb3RvdHlwZS5kaXNwb3NlID0gbm9kZU93blNpbXBsZURpc3Bvc2U7XG5cbklmTm9kZS5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdmFyIGVsc2VJbmRleDtcbiAgICB2YXIgY2hpbGQ7XG5cbiAgICBpZiAoZXZhbEV4cHIodGhpcy5jb25kLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSkge1xuICAgICAgICBjaGlsZCA9IGNyZWF0ZU5vZGUocmluc2VDb25kQU5vZGUobWUuYU5vZGUpLCBtZSk7XG4gICAgICAgIGVsc2VJbmRleCA9IC0xO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWFjaChtZS5hTm9kZS5lbHNlcywgZnVuY3Rpb24gKGVsc2VBTm9kZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBlbGlmID0gZWxzZUFOb2RlLmRpcmVjdGl2ZXMuZWxpZjtcblxuICAgICAgICAgICAgaWYgKCFlbGlmIHx8IGVsaWYgJiYgZXZhbEV4cHIoZWxpZi52YWx1ZSwgbWUuc2NvcGUsIG1lLm93bmVyKSkge1xuICAgICAgICAgICAgICAgIGNoaWxkID0gY3JlYXRlTm9kZShyaW5zZUNvbmRBTm9kZShlbHNlQU5vZGUpLCBtZSk7XG4gICAgICAgICAgICAgICAgZWxzZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgbWUuY2hpbGRyZW5bMF0gPSBjaGlsZDtcbiAgICAgICAgY2hpbGQuYXR0YWNoKHBhcmVudEVsLCBiZWZvcmVFbCk7XG4gICAgICAgIG1lLmVsc2VJbmRleCA9IGVsc2VJbmRleDtcbiAgICB9XG5cblxuICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgIGluc2VydEJlZm9yZSh0aGlzLmVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xufTtcblxuXG4vKipcbiAqIOinhuWbvuabtOaWsOWHveaVsFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbklmTm9kZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgY2hpbGRBTm9kZSA9IG1lLmFOb2RlO1xuICAgIHZhciBlbHNlSW5kZXg7XG5cbiAgICBpZiAoZXZhbEV4cHIodGhpcy5jb25kLCB0aGlzLnNjb3BlLCB0aGlzLm93bmVyKSkge1xuICAgICAgICBlbHNlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVhY2gobWUuYU5vZGUuZWxzZXMsIGZ1bmN0aW9uIChlbHNlQU5vZGUsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZWxpZiA9IGVsc2VBTm9kZS5kaXJlY3RpdmVzLmVsaWY7XG5cbiAgICAgICAgICAgIGlmIChlbGlmICYmIGV2YWxFeHByKGVsaWYudmFsdWUsIG1lLnNjb3BlLCBtZS5vd25lcikgfHwgIWVsaWYpIHtcbiAgICAgICAgICAgICAgICBlbHNlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICBjaGlsZEFOb2RlID0gZWxzZUFOb2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGVsc2VJbmRleCA9PT0gbWUuZWxzZUluZGV4KSB7XG4gICAgICAgIGVsZW1lbnRVcGRhdGVDaGlsZHJlbihtZSwgY2hhbmdlcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgY2hpbGQgPSBtZS5jaGlsZHJlblswXTtcbiAgICAgICAgbWUuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5fb25kaXNwb3NlZCA9IG5ld0NoaWxkO1xuICAgICAgICAgICAgY2hpbGQuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3Q2hpbGQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmVsc2VJbmRleCA9IGVsc2VJbmRleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdDaGlsZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbHNlSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjcmVhdGVOb2RlKHJpbnNlQ29uZEFOb2RlKGNoaWxkQU5vZGUpLCBtZSk7XG4gICAgICAgICAgICAvLyB2YXIgcGFyZW50RWwgPSBnZXROb2RlU3R1bXBQYXJlbnQobWUpO1xuICAgICAgICAgICAgY2hpbGQuYXR0YWNoKG1lLmVsLnBhcmVudE5vZGUsIG1lLmVsKTtcblxuICAgICAgICAgICAgbWUuY2hpbGRyZW5bMF0gPSBjaGlsZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IElmTm9kZTtcblxuXG4vKipcbiAqIEBmaWxlIHRlbXBsYXRlIOiKgueCueexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIExpZmVDeWNsZSA9IHJlcXVpcmUoJy4vbGlmZS1jeWNsZScpO1xuLy8gdmFyIG5vZGVEaXNwb3NlID0gcmVxdWlyZSgnLi9ub2RlLWRpc3Bvc2UnKTtcbi8vIHZhciBjcmVhdGVSZXZlcnNlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLXJldmVyc2Utbm9kZScpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuLy8gdmFyIGVsZW1lbnRPd25Ub1BoYXNlID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi10by1waGFzZScpO1xuLy8gdmFyIGVsZW1lbnRVcGRhdGVDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC11cGRhdGUtY2hpbGRyZW4nKTtcbi8vIHZhciBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoID0gcmVxdWlyZSgnLi9ub2RlLW93bi1vbmx5LWNoaWxkcmVuLWF0dGFjaCcpO1xuXG4vKipcbiAqIHRlbXBsYXRlIOiKgueCueexu1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhTm9kZSDmir3osaHoioLngrlcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7bnjq/looNcbiAqIEBwYXJhbSB7TW9kZWw9fSBzY29wZSDmiYDlsZ7mlbDmja7njq/looNcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IOeItuS6suiKgueCuVxuICogQHBhcmFtIHtET01DaGlsZHJlbldhbGtlcj99IHJldmVyc2VXYWxrZXIg5a2Q5YWD57Sg6YGN5Y6G5a+56LGhXG4gKi9cbmZ1bmN0aW9uIFRlbXBsYXRlTm9kZShhTm9kZSwgb3duZXIsIHNjb3BlLCBwYXJlbnQsIHJldmVyc2VXYWxrZXIpIHtcbiAgICB0aGlzLmFOb2RlID0gYU5vZGU7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnBhcmVudENvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVFxuICAgICAgICA/IHBhcmVudFxuICAgICAgICA6IHBhcmVudC5wYXJlbnRDb21wb25lbnQ7XG5cbiAgICB0aGlzLmlkID0gZ3VpZCgpO1xuICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLnN0YXJ0O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAocmV2ZXJzZVdhbGtlcikge1xuICAgICAgICB0aGlzLnNlbCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGhpcy5pZCk7XG4gICAgICAgIGluc2VydEJlZm9yZSh0aGlzLnNlbCwgcmV2ZXJzZVdhbGtlci50YXJnZXQsIHJldmVyc2VXYWxrZXIuY3VycmVudCk7XG5cbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgZWFjaCh0aGlzLmFOb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoYU5vZGVDaGlsZCkge1xuICAgICAgICAgICAgbWUuY2hpbGRyZW4ucHVzaChjcmVhdGVSZXZlcnNlTm9kZShhTm9kZUNoaWxkLCByZXZlcnNlV2Fsa2VyLCBtZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0aGlzLmlkKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHJldmVyc2VXYWxrZXIudGFyZ2V0LCByZXZlcnNlV2Fsa2VyLmN1cnJlbnQpO1xuXG4gICAgICAgIHRoaXMuX3RvUGhhc2UoJ2F0dGFjaGVkJyk7XG4gICAgfVxuICAgIC8vICNbZW5kXVxufVxuXG5cblxuVGVtcGxhdGVOb2RlLnByb3RvdHlwZS5ub2RlVHlwZSA9IE5vZGVUeXBlLlRQTDtcblxuVGVtcGxhdGVOb2RlLnByb3RvdHlwZS5hdHRhY2ggPSBub2RlT3duT25seUNoaWxkcmVuQXR0YWNoO1xuXG4vKipcbiAqIOmUgOavgemHiuaUvlxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG5vRGV0YWNoIOaYr+WQpuS4jeimgeaKiuiKgueCueS7jmRvbeenu+mZpFxuICogQHBhcmFtIHtib29sZWFuPX0gbm9UcmFuc2l0aW9uIOaYr+WQpuS4jeaYvuekuui/h+a4oeWKqOeUu+aViOaenFxuICovXG5UZW1wbGF0ZU5vZGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAobm9EZXRhY2gsIG5vVHJhbnNpdGlvbikge1xuICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4odGhpcywgbm9EZXRhY2gsIG5vVHJhbnNpdGlvbik7XG4gICAgbm9kZURpc3Bvc2UodGhpcyk7XG59O1xuXG5cblRlbXBsYXRlTm9kZS5wcm90b3R5cGUuX3RvUGhhc2UgPSBlbGVtZW50T3duVG9QaGFzZTtcblxuLyoqXG4gKiDop4blm77mm7TmlrDlh73mlbBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjaGFuZ2VzIOaVsOaNruWPmOWMluS/oeaBr1xuICovXG5UZW1wbGF0ZU5vZGUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgIGVsZW1lbnRVcGRhdGVDaGlsZHJlbih0aGlzLCBjaGFuZ2VzKTtcbn07XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFRlbXBsYXRlTm9kZTtcblxuXG4vKipcbiAqIEBmaWxlIOWvueWFg+e0oOeahOWtkOiKgueCuei/m+ihjOWPjeino1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIERPTUNoaWxkcmVuV2Fsa2VyID0gcmVxdWlyZSgnLi9kb20tY2hpbGRyZW4td2Fsa2VyJyk7XG4vLyB2YXIgY3JlYXRlUmV2ZXJzZU5vZGUgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZXZlcnNlLW5vZGUnKTtcblxuLy8gI1tiZWdpbl0gcmV2ZXJzZVxuXG4vKipcbiAqIOWvueWFg+e0oOeahOWtkOiKgueCuei/m+ihjOWPjeino1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOWFg+e0oFxuICovXG5mdW5jdGlvbiByZXZlcnNlRWxlbWVudENoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICB2YXIgaHRtbERpcmVjdGl2ZSA9IGVsZW1lbnQuYU5vZGUuZGlyZWN0aXZlcy5odG1sO1xuXG4gICAgaWYgKCFodG1sRGlyZWN0aXZlKSB7XG4gICAgICAgIHZhciByZXZlcnNlV2Fsa2VyID0gbmV3IERPTUNoaWxkcmVuV2Fsa2VyKGVsZW1lbnQuZWwpO1xuXG4gICAgICAgIGVhY2goZWxlbWVudC5hTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGFOb2RlQ2hpbGQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW4ucHVzaChjcmVhdGVSZXZlcnNlTm9kZShhTm9kZUNoaWxkLCByZXZlcnNlV2Fsa2VyLCBlbGVtZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXZlcnNlRWxlbWVudENoaWxkcmVuO1xuXG5cbi8qKlxuICogQGZpbGUg5aSE55CG5YWD57Sg55qE5bGe5oCn5pON5L2cXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZ2V0UHJvcEhhbmRsZXIgPSByZXF1aXJlKCcuL2dldC1wcm9wLWhhbmRsZXInKTtcblxuLyoqXG4gKiDlpITnkIblhYPntKDlsZ7mgKfmk43kvZxcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKDlr7nosaFcbiAqIEBwYXJhbSB7Kn0gdmFsdWUg5bGe5oCn5YC8XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcCDlsZ7mgKfkv6Hmga/lr7nosaFcbiAqL1xuZnVuY3Rpb24gaGFuZGxlUHJvcChlbGVtZW50LCB2YWx1ZSwgcHJvcCkge1xuICAgIHZhciBuYW1lID0gcHJvcC5uYW1lO1xuICAgIGdldFByb3BIYW5kbGVyKGVsZW1lbnQudGFnTmFtZSwgbmFtZSkucHJvcChlbGVtZW50LmVsLCB2YWx1ZSwgbmFtZSwgZWxlbWVudCwgcHJvcCk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGhhbmRsZVByb3A7XG5cblxuLyoqXG4gKiBAZmlsZSDliJvlu7roioLngrnlr7nlupTnmoQgSFRNTEVsZW1lbnQg5Li75YWD57SgXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgY3JlYXRlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL2NyZWF0ZS1lbCcpO1xuLy8gdmFyIGhhbmRsZVByb3AgPSByZXF1aXJlKCcuL2hhbmRsZS1wcm9wJyk7XG4vLyB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi9saWZlLWN5Y2xlJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuXG52YXIgZW1wdHlQcm9wV2hlbkNyZWF0ZSA9IHtcbiAgICAnY2xhc3MnOiAxLFxuICAgICdzdHlsZSc6IDEsXG4gICAgJ2lkJzogMVxufTtcblxuLyoqXG4gKiDliJvlu7roioLngrnlr7nlupTnmoQgSFRNTEVsZW1lbnQg5Li75YWD57SgXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRPd25DcmVhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmxpZmVDeWNsZS5jcmVhdGVkKSB7XG4gICAgICAgIHRoaXMubGlmZUN5Y2xlID0gTGlmZUN5Y2xlLnBhaW50aW5nO1xuXG4gICAgICAgIHZhciBpc0NvbXBvbmVudCA9IHRoaXMubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFQ7XG4gICAgICAgIHZhciBzb3VyY2VOb2RlID0gdGhpcy5hTm9kZS5ob3RzcG90LnNvdXJjZU5vZGU7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMuYU5vZGUucHJvcHM7XG5cbiAgICAgICAgaWYgKHNvdXJjZU5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZWwgPSBzb3VyY2VOb2RlLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgcHJvcHMgPSB0aGlzLmFOb2RlLmhvdHNwb3QuZHluYW1pY1Byb3BzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbCA9IGNyZWF0ZUVsKHRoaXMudGFnTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGlzQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgPyBldmFsRXhwcihwcm9wLmV4cHIsIHRoaXMuZGF0YSwgdGhpcylcbiAgICAgICAgICAgICAgICA6IGV2YWxFeHByKHByb3AuZXhwciwgdGhpcy5zY29wZSwgdGhpcy5vd25lcik7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSB8fCAhZW1wdHlQcm9wV2hlbkNyZWF0ZVtwcm9wLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlUHJvcCh0aGlzLCB2YWx1ZSwgcHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b1BoYXNlKCdjcmVhdGVkJyk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duQ3JlYXRlO1xuXG5cbi8qKlxuICogQGZpbGUg5bCG5YWD57SgYXR0YWNo5Yiw6aG16Z2iXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgY3JlYXRlTm9kZSA9IHJlcXVpcmUoJy4vY3JlYXRlLW5vZGUnKTtcbi8vIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZXZhbC1leHByJyk7XG4vLyB2YXIgaW5zZXJ0QmVmb3JlID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pbnNlcnQtYmVmb3JlJyk7XG5cbi8qKlxuICog5bCG5YWD57SgYXR0YWNo5Yiw6aG16Z2iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQg5YWD57Sg6IqC54K5XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRFbCDopoHmt7vliqDliLDnmoTniLblhYPntKBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnTvvJ19IGJlZm9yZUVsIOimgea3u+WKoOWIsOWTquS4quWFg+e0oOS5i+WJjVxuICovXG5mdW5jdGlvbiBlbGVtZW50QXR0YWNoKGVsZW1lbnQsIHBhcmVudEVsLCBiZWZvcmVFbCkge1xuICAgIGVsZW1lbnQuX2NyZWF0ZSgpO1xuICAgIGluc2VydEJlZm9yZShlbGVtZW50LmVsLCBwYXJlbnRFbCwgYmVmb3JlRWwpO1xuXG4gICAgaWYgKCFlbGVtZW50Ll9jb250ZW50UmVhZHkpIHtcbiAgICAgICAgdmFyIGh0bWxEaXJlY3RpdmUgPSBlbGVtZW50LmFOb2RlLmRpcmVjdGl2ZXMuaHRtbDtcblxuICAgICAgICBpZiAoaHRtbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgZWxlbWVudC5lbC5pbm5lckhUTUwgPSBldmFsRXhwcihodG1sRGlyZWN0aXZlLnZhbHVlLCBlbGVtZW50LnNjb3BlLCBlbGVtZW50Lm93bmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhTm9kZUNoaWxkcmVuID0gZWxlbWVudC5hTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYU5vZGVDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNyZWF0ZU5vZGUoYU5vZGVDaGlsZHJlbltpXSwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBjaGlsZC5hdHRhY2goZWxlbWVudC5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50Ll9jb250ZW50UmVhZHkgPSAxO1xuICAgIH1cbn1cblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50QXR0YWNoO1xuXG5cbi8qKlxuICogQGZpbGUg5bCG5YWD57SgYXR0YWNo5Yiw6aG16Z2iXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG5cbi8vIHZhciBlbGVtZW50QXR0YWNoID0gcmVxdWlyZSgnLi9lbGVtZW50LWF0dGFjaCcpO1xuXG4vKipcbiAqIOWwhuWFg+e0oGF0dGFjaOWIsOmhtemdolxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudEVsIOimgea3u+WKoOWIsOeahOeItuWFg+e0oFxuICogQHBhcmFtIHtIVE1MRWxlbWVudO+8nX0gYmVmb3JlRWwg6KaB5re75Yqg5Yiw5ZOq5Liq5YWD57Sg5LmL5YmNXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRPd25BdHRhY2gocGFyZW50RWwsIGJlZm9yZUVsKSB7XG4gICAgaWYgKCF0aGlzLmxpZmVDeWNsZS5hdHRhY2hlZCkge1xuICAgICAgICBlbGVtZW50QXR0YWNoKHRoaXMsIHBhcmVudEVsLCBiZWZvcmVFbCk7XG4gICAgICAgIHRoaXMuX2F0dGFjaGVkKCk7XG4gICAgfVxufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duQXR0YWNoO1xuXG5cbi8qKlxuICogQGZpbGUg6I635Y+WIGVsZW1lbnQg55qEIHRyYW5zaXRpb24g5o6n5Yi25a+56LGhXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZXZhbEFyZ3MgPSByZXF1aXJlKCcuLi9ydW50aW1lL2V2YWwtYXJncycpO1xuLy8gdmFyIGZpbmRNZXRob2QgPSByZXF1aXJlKCcuLi9ydW50aW1lL2ZpbmQtbWV0aG9kJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuXG4vKipcbiAqIOiOt+WPliBlbGVtZW50IOeahCB0cmFuc2l0aW9uIOaOp+WItuWvueixoVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOWFg+e0oFxuICogQHJldHVybiB7T2JqZWN0P31cbiAqL1xuZnVuY3Rpb24gZWxlbWVudEdldFRyYW5zaXRpb24oZWxlbWVudCkge1xuICAgIHZhciBhTm9kZSA9IGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGVUeXBlLkNNUFQgPyBlbGVtZW50LmdpdmVuQU5vZGUgOiBlbGVtZW50LmFOb2RlO1xuICAgIHZhciBkaXJlY3RpdmUgPSBhTm9kZSAmJiBhTm9kZS5kaXJlY3RpdmVzLnRyYW5zaXRpb247XG4gICAgdmFyIG93bmVyID0gZWxlbWVudC5vd25lcjtcblxuICAgIHZhciB0cmFuc2l0aW9uO1xuICAgIGlmIChkaXJlY3RpdmUgJiYgb3duZXIpIHtcbiAgICAgICAgdHJhbnNpdGlvbiA9IGZpbmRNZXRob2Qob3duZXIsIGRpcmVjdGl2ZS52YWx1ZS5uYW1lKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRyYW5zaXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLmFwcGx5KFxuICAgICAgICAgICAgICAgIG93bmVyLFxuICAgICAgICAgICAgICAgIGV2YWxBcmdzKGRpcmVjdGl2ZS52YWx1ZS5hcmdzLCBlbGVtZW50LnNjb3BlLCBvd25lcilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNpdGlvbiB8fCBlbGVtZW50LnRyYW5zaXRpb247XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRHZXRUcmFuc2l0aW9uO1xuXG5cbi8qKlxuICogQGZpbGUg5YWD57Sg6IqC54K55omn6KGMbGVhdmXooYzkuLpcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlbGVtZW50R2V0VHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1nZXQtdHJhbnNpdGlvbicpO1xuXG5cbi8qKlxuICog5YWD57Sg6IqC54K55omn6KGMbGVhdmXooYzkuLpcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDlhYPntKBcbiAqL1xuZnVuY3Rpb24gZWxlbWVudExlYXZlKGVsZW1lbnQpIHtcbiAgICB2YXIgbGlmZUN5Y2xlID0gZWxlbWVudC5saWZlQ3ljbGU7XG4gICAgaWYgKGxpZmVDeWNsZS5sZWF2aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5kaXNwb3NlTm9UcmFuc2l0aW9uKSB7XG4gICAgICAgIGVsZW1lbnQuX2RvbmVMZWF2ZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBlbGVtZW50R2V0VHJhbnNpdGlvbihlbGVtZW50KTtcblxuICAgICAgICBpZiAodHJhbnNpdGlvbiAmJiB0cmFuc2l0aW9uLmxlYXZlKSB7XG4gICAgICAgICAgICBlbGVtZW50Ll90b1BoYXNlKCdsZWF2aW5nJyk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLmxlYXZlKGVsZW1lbnQuZWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll9kb25lTGVhdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5fZG9uZUxlYXZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRMZWF2ZTtcblxuXG4vKipcbiAqIEBmaWxlIOWwhuWFg+e0oOS7jumhtemdouS4iuenu+mZpFxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVsZW1lbnRMZWF2ZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1sZWF2ZScpO1xuXG4vKipcbiAqIOWwhuWFg+e0oOS7jumhtemdouS4iuenu+mZpFxuICovXG5mdW5jdGlvbiBlbGVtZW50T3duRGV0YWNoKCkge1xuICAgIGVsZW1lbnRMZWF2ZSh0aGlzKTtcbn1cblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBlbGVtZW50T3duRGV0YWNoO1xuXG5cbi8qKlxuICogQGZpbGUg6ZSA5q+B6YeK5pS+5YWD57SgXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWxlbWVudExlYXZlID0gcmVxdWlyZSgnLi9lbGVtZW50LWxlYXZlJyk7XG5cbi8qKlxuICog6ZSA5q+B6YeK5pS+5YWD57SgXG4gKlxuICogQHBhcmFtIHtib29sZWFuPX0gbm9EZXRhY2gg5piv5ZCm5LiN6KaB5oqK6IqC54K55LuOZG9t56e76ZmkXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBub1RyYW5zaXRpb24g5piv5ZCm5LiN5pi+56S66L+H5rih5Yqo55S75pWI5p6cXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRPd25EaXNwb3NlKG5vRGV0YWNoLCBub1RyYW5zaXRpb24pIHtcbiAgICB0aGlzLmxlYXZlRGlzcG9zZSA9IDE7XG4gICAgdGhpcy5kaXNwb3NlTm9EZXRhY2ggPSBub0RldGFjaDtcbiAgICB0aGlzLmRpc3Bvc2VOb1RyYW5zaXRpb24gPSBub1RyYW5zaXRpb247XG5cbiAgICBlbGVtZW50TGVhdmUodGhpcyk7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRPd25EaXNwb3NlO1xuXG5cbi8qKlxuICogQGZpbGUg5Li65YWD57Sg55qEIGVsIOe7keWumuS6i+S7tlxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIG9uID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9vbicpO1xuXG4vKipcbiAqIOS4uuWFg+e0oOeahCBlbCDnu5Hlrprkuovku7ZcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDkuovku7blkI1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOebkeWQrOWZqFxuICogQHBhcmFtIHtib29sZWFufSBjYXB0dXJlIOaYr+WQpuaYr+aNleiOt+mYtuauteinpuWPkVxuICovXG5mdW5jdGlvbiBlbGVtZW50T3duT25FbChuYW1lLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FwdHVyZSA9ICEhY2FwdHVyZTtcbiAgICAgICAgdGhpcy5fZWxGbnMucHVzaChbbmFtZSwgbGlzdGVuZXIsIGNhcHR1cmVdKTtcbiAgICAgICAgb24odGhpcy5lbCwgbmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudE93bk9uRWw7XG5cblxuLyoqXG4gKiBAZmlsZSAg5LqL5Lu257uR5a6a5LiN5a2Y5Zyo55qEIHdhcm5pbmdcbiAqIEBhdXRob3IgdmFyc2hhKHdhbmdzaHVvbnB1QGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuXG4vLyAjW2JlZ2luXSBlcnJvclxuLyoqXG4gKiDkuovku7bnu5HlrprkuI3lrZjlnKjnmoQgd2FybmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudEJpbmQg5LqL5Lu257uR5a6a5a+56LGhXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe55qE57uE5Lu25a+56LGhXG4gKi9cbmZ1bmN0aW9uIHdhcm5FdmVudExpc3Rlbk1ldGhvZChldmVudEJpbmQsIG93bmVyKSB7XG4gICAgdmFyIHZhbGlkID0gdHJ1ZTtcbiAgICB2YXIgbWV0aG9kID0gb3duZXI7XG4gICAgZWFjaChldmVudEJpbmQuZXhwci5uYW1lLnBhdGhzLCBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICBpZiAoIXBhdGgudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZCA9IG1ldGhvZFtwYXRoLnZhbHVlXTtcbiAgICAgICAgdmFsaWQgPSAhIW1ldGhvZDtcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH0pO1xuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgICB2YXIgcGF0aHMgPSBbXTtcbiAgICAgICAgZWFjaChldmVudEJpbmQuZXhwci5uYW1lLnBhdGhzLCBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICAgICAgcGF0aHMucHVzaChwYXRoLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBtZXNzYWdlID0gJ1tTQU4gV0FSTklOR10gJyArIGV2ZW50QmluZC5uYW1lICsgJyBsaXN0ZW4gZmFpbCxcIicgKyBwYXRocy5qb2luKCcuJykgKyAnXCIgbm90IGV4aXN0JztcblxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgfVxufVxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHdhcm5FdmVudExpc3Rlbk1ldGhvZDtcblxuXG4vKipcbiAqIEBmaWxlIOWujOaIkOWFg+e0oCBhdHRhY2hlZCDlkI7nmoTooYzkuLpcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGJpbmQgPSByZXF1aXJlKCcuLi91dGlsL2JpbmQnKTtcbi8vIHZhciBlbXB0eSA9IHJlcXVpcmUoJy4uL3V0aWwvZW1wdHknKTtcbi8vIHZhciBpc0Jyb3dzZXIgPSByZXF1aXJlKCcuLi9icm93c2VyL2lzLWJyb3dzZXInKTtcbi8vIHZhciB0cmlnZ2VyID0gcmVxdWlyZSgnLi4vYnJvd3Nlci90cmlnZ2VyJyk7XG4vLyB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL25vZGUtdHlwZScpO1xuLy8gdmFyIGVsZW1lbnRHZXRUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9lbGVtZW50LWdldC10cmFuc2l0aW9uJyk7XG4vLyB2YXIgZXZlbnREZWNsYXJhdGlvbkxpc3RlbmVyID0gcmVxdWlyZSgnLi9ldmVudC1kZWNsYXJhdGlvbi1saXN0ZW5lcicpO1xuLy8gdmFyIGdldFByb3BIYW5kbGVyID0gcmVxdWlyZSgnLi9nZXQtcHJvcC1oYW5kbGVyJyk7XG4vLyB2YXIgd2FybkV2ZW50TGlzdGVuTWV0aG9kID0gcmVxdWlyZSgnLi93YXJuLWV2ZW50LWxpc3Rlbi1tZXRob2QnKTtcblxuLyoqXG4gKiDlj4znu5HovpPlhaXmoYZDb21wb3NpdGlvbkVuZOS6i+S7tuebkeWQrOWHveaVsFxuICpcbiAqIEBpbm5lclxuICovXG5mdW5jdGlvbiBpbnB1dE9uQ29tcG9zaXRpb25FbmQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbXBvc2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb3NpbmcgPSAwO1xuXG4gICAgdHJpZ2dlcih0aGlzLCAnaW5wdXQnKTtcbn1cblxuLyoqXG4gKiDlj4znu5HovpPlhaXmoYZDb21wb3NpdGlvblN0YXJ05LqL5Lu255uR5ZCs5Ye95pWwXG4gKlxuICogQGlubmVyXG4gKi9cbmZ1bmN0aW9uIGlucHV0T25Db21wb3NpdGlvblN0YXJ0KCkge1xuICAgIHRoaXMuY29tcG9zaW5nID0gMTtcbn1cblxuZnVuY3Rpb24geFByb3BPdXRwdXRlcih4UHJvcCwgZGF0YSkge1xuICAgIGdldFByb3BIYW5kbGVyKHRoaXMudGFnTmFtZSwgeFByb3AubmFtZSkub3V0cHV0KHRoaXMsIHhQcm9wLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24gaW5wdXRYUHJvcE91dHB1dGVyKGVsZW1lbnQsIHhQcm9wLCBkYXRhKSB7XG4gICAgdmFyIG91dHB1dGVyID0gYmluZCh4UHJvcE91dHB1dGVyLCBlbGVtZW50LCB4UHJvcCwgZGF0YSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgIG91dHB1dGVyKGUpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiDlrozmiJDlhYPntKAgYXR0YWNoZWQg5ZCO55qE6KGM5Li6XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQg5YWD57Sg6IqC54K5XG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRPd25BdHRhY2hlZCgpIHtcbiAgICB0aGlzLl90b1BoYXNlKCdjcmVhdGVkJyk7XG5cbiAgICB2YXIgaXNDb21wb25lbnQgPSB0aGlzLm5vZGVUeXBlID09PSBOb2RlVHlwZS5DTVBUO1xuICAgIHZhciBkYXRhID0gaXNDb21wb25lbnQgPyB0aGlzLmRhdGEgOiB0aGlzLnNjb3BlO1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcmVkZWNsYXJlICovXG5cbiAgICAvLyDlpITnkIboh6rouqvlj5jljJbml7blj4zlkJHnu5HlrprnmoTpgLvovpFcbiAgICB2YXIgeFByb3BzID0gdGhpcy5hTm9kZS5ob3RzcG90LnhQcm9wcztcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHhQcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHhQcm9wID0geFByb3BzW2ldO1xuXG4gICAgICAgIHN3aXRjaCAoeFByb3AubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQnJvd3NlciAmJiB3aW5kb3cuQ29tcG9zaXRpb25FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoJ2NoYW5nZScsIGlucHV0T25Db21wb3NpdGlvbkVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25FbCgnY29tcG9zaXRpb25zdGFydCcsIGlucHV0T25Db21wb3NpdGlvblN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkVsKCdjb21wb3NpdGlvbmVuZCcsIGlucHV0T25Db21wb3NpdGlvbkVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uRWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCdvbmlucHV0JyBpbiB0aGlzLmVsKSA/ICdpbnB1dCcgOiAncHJvcGVydHljaGFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0WFByb3BPdXRwdXRlcih0aGlzLCB4UHJvcCwgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkVsKCdjaGFuZ2UnLCBiaW5kKHhQcm9wT3V0cHV0ZXIsIHRoaXMsIHhQcm9wLCBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5lbC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25FbCgnY2xpY2snLCBiaW5kKHhQcm9wT3V0cHV0ZXIsIHRoaXMsIHhQcm9wLCBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYmluZCBldmVudHNcbiAgICB2YXIgZXZlbnRzID0gaXNDb21wb25lbnRcbiAgICAgICAgPyB0aGlzLmFOb2RlLmV2ZW50cy5jb25jYXQodGhpcy5uYXRpdmVFdmVudHMpXG4gICAgICAgIDogdGhpcy5hTm9kZS5ldmVudHM7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGV2ZW50QmluZCA9IGV2ZW50c1tpXTtcbiAgICAgICAgdmFyIG93bmVyID0gaXNDb21wb25lbnQgPyB0aGlzIDogdGhpcy5vd25lcjtcblxuICAgICAgICAvLyDliKTmlq3mmK/lkKbmmK9uYXRpdmVFdmVudO+8jOS4i+mdoueahHdhcm7mlrnms5Xlkozkuovku7bnu5Hlrprpg73pnIDopoFcbiAgICAgICAgLy8g5L6d5q2k5oyH5a6aZXZlbnRCaW5kLmV4cHIubmFtZeS9jeS6jm93bmVy6L+Y5pivb3duZXIub3duZXLkuIpcbiAgICAgICAgaWYgKGV2ZW50QmluZC5tb2RpZmllci5uYXRpdmUpIHtcbiAgICAgICAgICAgIG93bmVyID0gb3duZXIub3duZXI7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5zY29wZSB8fCBvd25lci5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgd2FybkV2ZW50TGlzdGVuTWV0aG9kKGV2ZW50QmluZCwgb3duZXIpO1xuICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICB0aGlzLl9vbkVsKFxuICAgICAgICAgICAgZXZlbnRCaW5kLm5hbWUsXG4gICAgICAgICAgICBiaW5kKFxuICAgICAgICAgICAgICAgIGV2ZW50RGVjbGFyYXRpb25MaXN0ZW5lcixcbiAgICAgICAgICAgICAgICBvd25lcixcbiAgICAgICAgICAgICAgICBldmVudEJpbmQsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZXZlbnRCaW5kLm1vZGlmaWVyLmNhcHR1cmVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLl90b1BoYXNlKCdhdHRhY2hlZCcpO1xuXG5cbiAgICBpZiAodGhpcy5faXNJbml0RnJvbUVsKSB7XG4gICAgICAgIHRoaXMuX2lzSW5pdEZyb21FbCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBlbGVtZW50R2V0VHJhbnNpdGlvbih0aGlzKTtcbiAgICAgICAgaWYgKHRyYW5zaXRpb24gJiYgdHJhbnNpdGlvbi5lbnRlcikge1xuICAgICAgICAgICAgdHJhbnNpdGlvbi5lbnRlcih0aGlzLmVsLCBlbXB0eSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRPd25BdHRhY2hlZDtcblxuXG4vKipcbiAqIEBmaWxlIOmUgOavgeWFg+e0oOiKgueCuVxuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgdW4gPSByZXF1aXJlKCcuLi9icm93c2VyL3VuJyk7XG4vLyB2YXIgcmVtb3ZlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL3JlbW92ZS1lbCcpO1xuLy8gdmFyIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZS1jaGlsZHJlbicpO1xuLy8gdmFyIG5vZGVEaXNwb3NlID0gcmVxdWlyZSgnLi9ub2RlLWRpc3Bvc2UnKTtcblxuLyoqXG4gKiDplIDmr4HlhYPntKDoioLngrlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCDopoHplIDmr4HnmoTlhYPntKDoioLngrlcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9ucyDplIDmr4HooYzkuLrnmoTlj4LmlbBcbiAqL1xuZnVuY3Rpb24gZWxlbWVudERpc3Bvc2UoZWxlbWVudCkge1xuICAgIGVsZW1lbnREaXNwb3NlQ2hpbGRyZW4oZWxlbWVudCwgMSwgMSk7XG5cbiAgICAvLyBlbCDkuovku7bop6Pnu5FcbiAgICB2YXIgbGVuID0gZWxlbWVudC5fZWxGbnMubGVuZ3RoO1xuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICB2YXIgZm4gPSBlbGVtZW50Ll9lbEZuc1tsZW5dO1xuICAgICAgICB1bihlbGVtZW50LmVsLCBmblswXSwgZm5bMV0sIGZuWzJdKTtcbiAgICB9XG4gICAgZWxlbWVudC5fZWxGbnMgPSBudWxsO1xuXG5cbiAgICAvLyDlpoLmnpzmsqHmnIlwYXJlbnTvvIzor7TmmI7mmK/kuIDkuKpyb290IGNvbXBvbmVudO+8jOS4gOWumuimgeS7jmRvbeagkeS4rXJlbW92ZVxuICAgIGlmICghZWxlbWVudC5kaXNwb3NlTm9EZXRhY2ggfHwgIWVsZW1lbnQucGFyZW50KSB7XG4gICAgICAgIHJlbW92ZUVsKGVsZW1lbnQuZWwpO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50Ll90b1BoYXNlKSB7XG4gICAgICAgIGVsZW1lbnQuX3RvUGhhc2UoJ2RldGFjaGVkJyk7XG4gICAgfVxuXG4gICAgbm9kZURpc3Bvc2UoZWxlbWVudCk7XG59XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudERpc3Bvc2U7XG5cblxuLyoqXG4gKiBAZmlsZSDliJ3lp4vljJYgZWxlbWVudCDoioLngrnnmoQgdGFnTmFtZSDlpITnkIZcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBpZU9sZFRoYW45ID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pZS1vbGQtdGhhbi05Jyk7XG5cbi8qKlxuICog5Yid5aeL5YyWIGVsZW1lbnQg6IqC54K555qEIHRhZ05hbWUg5aSE55CGXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUg6IqC54K55a+56LGhXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRJbml0VGFnTmFtZShub2RlKSB7XG4gICAgbm9kZS50YWdOYW1lID0gbm9kZS50YWdOYW1lIHx8IG5vZGUuYU5vZGUudGFnTmFtZSB8fCAnZGl2JztcblxuICAgIC8vICNbYmVnaW5dIGFsbHVhXG4gICAgLy8gaWU4LSDkuI3mlK/mjIFpbm5lckhUTUzovpPlh7roh6rlrprkuYnmoIfnrb5cbiAgICBpZiAoaWVPbGRUaGFuOSAmJiBub2RlLnRhZ05hbWUuaW5kZXhPZignLScpID4gMCkge1xuICAgICAgICBub2RlLnRhZ05hbWUgPSAnZGl2JztcbiAgICB9XG4gICAgLy8gI1tlbmRdXG59XG5cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZWxlbWVudEluaXRUYWdOYW1lO1xuXG5cbi8qKlxuICogQGZpbGUg57uZIGRldnRvb2wg5Y+R6YCa55+l5raI5oGvXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIgaXNCcm93c2VyID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9pcy1icm93c2VyJyk7XG5cbi8vICNbYmVnaW5dIGRldnRvb2xcbnZhciBzYW40ZGV2dG9vbDtcblxuLyoqXG4gKiDnu5kgZGV2dG9vbCDlj5HpgJrnn6Xmtojmga9cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDmtojmga/lkI3np7BcbiAqIEBwYXJhbSB7Kn0gYXJnIOa2iOaBr+WPguaVsFxuICovXG5mdW5jdGlvbiBlbWl0RGV2dG9vbChuYW1lLCBhcmcpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIHNhbjRkZXZ0b29sICYmIHNhbjRkZXZ0b29sLmRlYnVnICYmIHdpbmRvdy5fX3Nhbl9kZXZ0b29sX18pIHtcbiAgICAgICAgd2luZG93Ll9fc2FuX2RldnRvb2xfXy5lbWl0KG5hbWUsIGFyZyk7XG4gICAgfVxufVxuXG5lbWl0RGV2dG9vbC5zdGFydCA9IGZ1bmN0aW9uIChtYWluKSB7XG4gICAgc2FuNGRldnRvb2wgPSBtYWluO1xuICAgIGVtaXREZXZ0b29sKCdzYW4nLCBtYWluKTtcbn07XG4vLyAjW2VuZF1cblxuLy8gZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZW1pdERldnRvb2w7XG5cblxuLyoqXG4gKiBAZmlsZSDnu4Tku7bnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBiaW5kID0gcmVxdWlyZSgnLi4vdXRpbC9iaW5kJyk7XG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuLy8gdmFyIGd1aWQgPSByZXF1aXJlKCcuLi91dGlsL2d1aWQnKTtcbi8vIHZhciBleHRlbmQgPSByZXF1aXJlKCcuLi91dGlsL2V4dGVuZCcpO1xuLy8gdmFyIG5leHRUaWNrID0gcmVxdWlyZSgnLi4vdXRpbC9uZXh0LXRpY2snKTtcbi8vIHZhciBlbWl0RGV2dG9vbCA9IHJlcXVpcmUoJy4uL3V0aWwvZW1pdC1kZXZ0b29sJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG4vLyB2YXIgcGFyc2VFeHByID0gcmVxdWlyZSgnLi4vcGFyc2VyL3BhcnNlLWV4cHInKTtcbi8vIHZhciBjcmVhdGVBY2Nlc3NvciA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYWNjZXNzb3InKTtcbi8vIHZhciBwb3N0UHJvcCA9IHJlcXVpcmUoJy4uL3BhcnNlci9wb3N0LXByb3AnKTtcbi8vIHZhciByZW1vdmVFbCA9IHJlcXVpcmUoJy4uL2Jyb3dzZXIvcmVtb3ZlLWVsJyk7XG4vLyB2YXIgRGF0YSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvZGF0YScpO1xuLy8gdmFyIGV2YWxFeHByID0gcmVxdWlyZSgnLi4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vIHZhciBjaGFuZ2VFeHByQ29tcGFyZSA9IHJlcXVpcmUoJy4uL3J1bnRpbWUvY2hhbmdlLWV4cHItY29tcGFyZScpO1xuLy8gdmFyIGNvbXBpbGVDb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBpbGUtY29tcG9uZW50Jyk7XG4vLyB2YXIgY29tcG9uZW50UHJlaGVhdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LXByZWhlYXQnKTtcbi8vIHZhciBMaWZlQ3ljbGUgPSByZXF1aXJlKCcuL2xpZmUtY3ljbGUnKTtcbi8vIHZhciBnZXRBTm9kZVByb3AgPSByZXF1aXJlKCcuL2dldC1hLW5vZGUtcHJvcCcpO1xuLy8gdmFyIGlzRGF0YUNoYW5nZUJ5RWxlbWVudCA9IHJlcXVpcmUoJy4vaXMtZGF0YS1jaGFuZ2UtYnktZWxlbWVudCcpO1xuLy8gdmFyIGV2ZW50RGVjbGFyYXRpb25MaXN0ZW5lciA9IHJlcXVpcmUoJy4vZXZlbnQtZGVjbGFyYXRpb24tbGlzdGVuZXInKTtcbi8vIHZhciByZXZlcnNlRWxlbWVudENoaWxkcmVuID0gcmVxdWlyZSgnLi9yZXZlcnNlLWVsZW1lbnQtY2hpbGRyZW4nKTtcbi8vIHZhciBjYW1lbENvbXBvbmVudEJpbmRzID0gcmVxdWlyZSgnLi9jYW1lbC1jb21wb25lbnQtYmluZHMnKTtcbi8vIHZhciBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vbm9kZS10eXBlJyk7XG4vLyB2YXIgZWxlbWVudEluaXRUYWdOYW1lID0gcmVxdWlyZSgnLi9lbGVtZW50LWluaXQtdGFnLW5hbWUnKTtcbi8vIHZhciBlbGVtZW50T3duQXR0YWNoZWQgPSByZXF1aXJlKCcuL2VsZW1lbnQtb3duLWF0dGFjaGVkJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2UgPSByZXF1aXJlKCcuL2VsZW1lbnQtZGlzcG9zZScpO1xuLy8gdmFyIGVsZW1lbnRVcGRhdGVDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC11cGRhdGUtY2hpbGRyZW4nKTtcbi8vIHZhciBlbGVtZW50T3duT25FbCA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tb24tZWwnKTtcbi8vIHZhciBlbGVtZW50T3duQ3JlYXRlID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1jcmVhdGUnKTtcbi8vIHZhciBlbGVtZW50T3duQXR0YWNoID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1hdHRhY2gnKTtcbi8vIHZhciBlbGVtZW50T3duRGV0YWNoID0gcmVxdWlyZSgnLi9lbGVtZW50LW93bi1kZXRhY2gnKTtcbi8vIHZhciBlbGVtZW50T3duRGlzcG9zZSA9IHJlcXVpcmUoJy4vZWxlbWVudC1vd24tZGlzcG9zZScpO1xuLy8gdmFyIHdhcm5FdmVudExpc3Rlbk1ldGhvZCA9IHJlcXVpcmUoJy4vd2Fybi1ldmVudC1saXN0ZW4tbWV0aG9kJyk7XG4vLyB2YXIgZWxlbWVudERpc3Bvc2VDaGlsZHJlbiA9IHJlcXVpcmUoJy4vZWxlbWVudC1kaXNwb3NlLWNoaWxkcmVuJyk7XG4vLyB2YXIgZWxlbWVudEF0dGFjaCA9IHJlcXVpcmUoJy4vZWxlbWVudC1hdHRhY2gnKTtcbi8vIHZhciBoYW5kbGVQcm9wID0gcmVxdWlyZSgnLi9oYW5kbGUtcHJvcCcpO1xuLy8gdmFyIGNyZWF0ZURhdGFUeXBlc0NoZWNrZXIgPSByZXF1aXJlKCcuLi91dGlsL2NyZWF0ZS1kYXRhLXR5cGVzLWNoZWNrZXInKTtcblxuXG5cbi8qKlxuICog57uE5Lu257G7XG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyDliJ3lp4vljJblj4LmlbBcbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50KG9wdGlvbnMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGUuc3RhcnQ7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX2VsRm5zID0gW107XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLnNsb3RDaGlsZHJlbiA9IFtdO1xuXG4gICAgdmFyIGNsYXp6ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHRoaXMuZmlsdGVycyA9IHRoaXMuZmlsdGVycyB8fCBjbGF6ei5maWx0ZXJzIHx8IHt9O1xuICAgIHRoaXMuY29tcHV0ZWQgPSB0aGlzLmNvbXB1dGVkIHx8IGNsYXp6LmNvbXB1dGVkIHx8IHt9O1xuICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzIHx8IGNsYXp6Lm1lc3NhZ2VzIHx8IHt9O1xuICAgIHRoaXMuc3ViVGFnID0gb3B0aW9ucy5zdWJUYWc7XG5cbiAgICAvLyBjb21waWxlXG4gICAgY29tcGlsZUNvbXBvbmVudChjbGF6eik7XG4gICAgY29tcG9uZW50UHJlaGVhdChjbGF6eik7XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHZhciBwcm90b0FOb2RlID0gY2xhenoucHJvdG90eXBlLmFOb2RlO1xuXG4gICAgbWUuZ2l2ZW5BTm9kZSA9IG9wdGlvbnMuYU5vZGU7XG4gICAgbWUuZ2l2ZW5OYW1lZFNsb3RCaW5kcyA9IFtdO1xuICAgIG1lLmdpdmVuU2xvdHMgPSB7XG4gICAgICAgIG5hbWVkOiB7fVxuICAgIH07XG5cbiAgICB0aGlzLm93bmVyID0gb3B0aW9ucy5vd25lcjtcbiAgICB0aGlzLnNjb3BlID0gb3B0aW9ucy5zY29wZTtcbiAgICB0aGlzLmVsID0gb3B0aW9ucy5lbDtcblxuICAgIHZhciBwYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLnBhcmVudENvbXBvbmVudCA9IHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuQ01QVFxuICAgICAgICAgICAgPyBwYXJlbnRcbiAgICAgICAgICAgIDogcGFyZW50ICYmIHBhcmVudC5wYXJlbnRDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgdGhpcy5pZCA9IGd1aWQoKTtcblxuICAgIC8vICNbYmVnaW5dIHJldmVyc2VcbiAgICBpZiAodGhpcy5lbCkge1xuICAgICAgICB2YXIgZmlyc3RDb21tZW50Tm9kZSA9IHRoaXMuZWwuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKGZpcnN0Q29tbWVudE5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIGZpcnN0Q29tbWVudE5vZGUgPSBmaXJzdENvbW1lbnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0Q29tbWVudE5vZGUgJiYgZmlyc3RDb21tZW50Tm9kZS5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICAgICAgdmFyIHN0dW1wTWF0Y2ggPSBmaXJzdENvbW1lbnROb2RlLmRhdGEubWF0Y2goL15cXHMqcy1kYXRhOihbXFxzXFxTXSspPyQvKTtcbiAgICAgICAgICAgIGlmIChzdHVtcE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0dW1wVGV4dCA9IHN0dW1wTWF0Y2hbMV07XG5cbiAgICAgICAgICAgICAgICAvLyBmaWxsIGNvbXBvbmVudCBkYXRhXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gKG5ldyBGdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgJ3JldHVybiAnICsgc3R1bXBUZXh0LnJlcGxhY2UoL15bXFxzXFxuXSovLCAnJylcbiAgICAgICAgICAgICAgICApKSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0Q29tbWVudE5vZGUucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsKGZpcnN0Q29tbWVudE5vZGUucHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVtb3ZlRWwoZmlyc3RDb21tZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gI1tlbmRdXG5cbiAgICAvLyBuYXRpdmXkuovku7bmlbDnu4RcbiAgICB0aGlzLm5hdGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuZ2l2ZW5BTm9kZSkge1xuICAgICAgICAvLyDnu4Tku7bov5DooYzml7bkvKDlhaXnmoTnu5PmnoTvvIzlgZpzbG906Kej5p6QXG4gICAgICAgIHRoaXMuX2NyZWF0ZUdpdmVuU2xvdHMoKTtcblxuICAgICAgICBlYWNoKHRoaXMuZ2l2ZW5BTm9kZS5ldmVudHMsIGZ1bmN0aW9uIChldmVudEJpbmQpIHtcbiAgICAgICAgICAgIC8vIOS/neWtmOW9k+WJjeWunuS+i+eahG5hdGl2ZeS6i+S7tu+8jOS4i+mdouWIm+W7umFOb2Rl5pe25YCZ5YGa5ZCI5bm2XG4gICAgICAgICAgICBpZiAoZXZlbnRCaW5kLm1vZGlmaWVyLm5hdGl2ZSkge1xuICAgICAgICAgICAgICAgIG1lLm5hdGl2ZUV2ZW50cy5wdXNoKGV2ZW50QmluZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAjW2JlZ2luXSBlcnJvclxuICAgICAgICAgICAgd2FybkV2ZW50TGlzdGVuTWV0aG9kKGV2ZW50QmluZCwgb3B0aW9ucy5vd25lcik7XG4gICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgbWUub24oXG4gICAgICAgICAgICAgICAgZXZlbnRCaW5kLm5hbWUsXG4gICAgICAgICAgICAgICAgYmluZChldmVudERlY2xhcmF0aW9uTGlzdGVuZXIsIG9wdGlvbnMub3duZXIsIGV2ZW50QmluZCwgMSwgb3B0aW9ucy5zY29wZSksXG4gICAgICAgICAgICAgICAgZXZlbnRCaW5kXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRhZ05hbWUgPSBwcm90b0FOb2RlLnRhZ05hbWUgfHwgbWUuZ2l2ZW5BTm9kZS50YWdOYW1lO1xuICAgICAgICB0aGlzLmJpbmRzID0gY2FtZWxDb21wb25lbnRCaW5kcyh0aGlzLmdpdmVuQU5vZGUucHJvcHMpO1xuICAgIH1cblxuICAgIHRoaXMuX3RvUGhhc2UoJ2NvbXBpbGVkJyk7XG5cbiAgICAvLyBpbml0IGRhdGFcbiAgICB0aGlzLmRhdGEgPSBuZXcgRGF0YShcbiAgICAgICAgZXh0ZW5kKFxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuaW5pdERhdGEgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5pbml0RGF0YSgpIHx8IHt9LFxuICAgICAgICAgICAgb3B0aW9ucy5kYXRhXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZWxlbWVudEluaXRUYWdOYW1lKHRoaXMpO1xuXG4gICAgZWFjaCh0aGlzLmJpbmRzLCBmdW5jdGlvbiAoYmluZCkge1xuICAgICAgICBwb3N0UHJvcChiaW5kKTtcblxuICAgICAgICBpZiAobWUuc2NvcGUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGV2YWxFeHByKGJpbmQuZXhwciwgbWUuc2NvcGUsIG1lLm93bmVyKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZWNvbWZlL3Nhbi9pc3N1ZXMvMTkxXG4gICAgICAgICAgICAgICAgbWUuZGF0YS5zZXQoYmluZC5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgLy8g5Zyo5Yid5aeL5YyWICsg5pWw5o2u57uR5a6a5ZCO77yM5byA5aeL5pWw5o2u5qCh6aqMXG4gICAgLy8gTk9URTog5Y+q5Zyo5byA5Y+R54mI5pys5Lit6L+b6KGM5bGe5oCn5qCh6aqMXG4gICAgdmFyIGRhdGFUeXBlcyA9IHRoaXMuZGF0YVR5cGVzIHx8IGNsYXp6LmRhdGFUeXBlcztcbiAgICBpZiAoZGF0YVR5cGVzKSB7XG4gICAgICAgIHZhciBkYXRhVHlwZUNoZWNrZXIgPSBjcmVhdGVEYXRhVHlwZXNDaGVja2VyKFxuICAgICAgICAgICAgZGF0YVR5cGVzLFxuICAgICAgICAgICAgdGhpcy5zdWJUYWcgfHwgdGhpcy5uYW1lIHx8IGNsYXp6Lm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kYXRhLnNldFR5cGVDaGVja2VyKGRhdGFUeXBlQ2hlY2tlcik7XG4gICAgICAgIHRoaXMuZGF0YS5jaGVja0RhdGFUeXBlcygpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIHRoaXMuY29tcHV0ZWREZXBzID0ge307XG4gICAgLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG4gICAgZm9yICh2YXIgZXhwciBpbiB0aGlzLmNvbXB1dGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5jb21wdXRlZERlcHNbZXhwcl0pIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGNDb21wdXRlZChleHByKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIGd1YXJkLWZvci1pbiAqL1xuXG4gICAgaWYgKCF0aGlzLmRhdGFDaGFuZ2VyKSB7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZXIgPSBiaW5kKHRoaXMuX2RhdGFDaGFuZ2VyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5kYXRhLmxpc3Rlbih0aGlzLmRhdGFDaGFuZ2VyKTtcbiAgICB9XG4gICAgdGhpcy5fdG9QaGFzZSgnaW5pdGVkJyk7XG5cbiAgICAvLyAjW2JlZ2luXSByZXZlcnNlXG4gICAgaWYgKHRoaXMuZWwpIHtcbiAgICAgICAgcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbih0aGlzKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoZWQoKTtcbiAgICB9XG5cbiAgICB2YXIgd2Fsa2VyID0gb3B0aW9ucy5yZXZlcnNlV2Fsa2VyO1xuICAgIGlmICh3YWxrZXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gd2Fsa2VyLmN1cnJlbnQ7XG4gICAgICAgIGlmIChjdXJyZW50Tm9kZSAmJiBjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5lbCA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgd2Fsa2VyLmdvTmV4dCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV2ZXJzZUVsZW1lbnRDaGlsZHJlbih0aGlzKTtcblxuICAgICAgICB0aGlzLl9hdHRhY2hlZCgpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cbn1cblxuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZ2V0Q29tcG9uZW50VHlwZSA9IGZ1bmN0aW9uIChhTm9kZSkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbYU5vZGUudGFnTmFtZV07XG59O1xuXG4vKipcbiAqIOWIneWni+WMluWIm+W7uue7hOS7tuWklumDqOS8oOWFpeeahOaPkuanveWvueixoVxuICpcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fY3JlYXRlR2l2ZW5TbG90cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIG1lLmdpdmVuU2xvdHMubmFtZWQgPSB7fTtcblxuICAgIC8vIOe7hOS7tui/kOihjOaXtuS8oOWFpeeahOe7k+aehO+8jOWBmnNsb3Top6PmnpBcbiAgICBtZS5naXZlbkFOb2RlICYmIG1lLnNjb3BlICYmIGVhY2gobWUuZ2l2ZW5BTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciB0YXJnZXQ7XG5cbiAgICAgICAgdmFyIHNsb3RCaW5kID0gIWNoaWxkLnRleHRFeHByICYmIGdldEFOb2RlUHJvcChjaGlsZCwgJ3Nsb3QnKTtcbiAgICAgICAgaWYgKHNsb3RCaW5kKSB7XG4gICAgICAgICAgICAhbWUuZ2l2ZW5TbG90SW5pdGVkICYmIG1lLmdpdmVuTmFtZWRTbG90QmluZHMucHVzaChzbG90QmluZCk7XG5cbiAgICAgICAgICAgIHZhciBzbG90TmFtZSA9IGV2YWxFeHByKHNsb3RCaW5kLmV4cHIsIG1lLnNjb3BlLCBtZS5vd25lcik7XG4gICAgICAgICAgICB0YXJnZXQgPSBtZS5naXZlblNsb3RzLm5hbWVkW3Nsb3ROYW1lXTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gbWUuZ2l2ZW5TbG90cy5uYW1lZFtzbG90TmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbWUuZ2l2ZW5TbG90SW5pdGVkKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtZS5naXZlblNsb3RzLm5vbmFtZTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gbWUuZ2l2ZW5TbG90cy5ub25hbWUgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldCAmJiB0YXJnZXQucHVzaChjaGlsZCk7XG4gICAgfSk7XG5cbiAgICBtZS5naXZlblNsb3RJbml0ZWQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiDnsbvlnovmoIfor4ZcbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLm5vZGVUeXBlID0gTm9kZVR5cGUuQ01QVDtcblxuLyoqXG4gKiDlnKjkuIvkuIDkuKrmm7TmlrDlkajmnJ/ov5DooYzlh73mlbBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDopoHov5DooYznmoTlh73mlbBcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5uZXh0VGljayA9IG5leHRUaWNrO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBvcGVyYXRvci1saW5lYnJlYWsgKi9cbi8qKlxuICog5L2/6IqC54K55Yiw6L6+55u45bqU55qE55Sf5ZG95ZGo5pyfXG4gKlxuICogQHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg55Sf5ZG95ZGo5pyf5ZCN56ewXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX2NhbGxIb29rID1cbkNvbXBvbmVudC5wcm90b3R5cGUuX3RvUGhhc2UgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmICghdGhpcy5saWZlQ3ljbGVbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5saWZlQ3ljbGUgPSBMaWZlQ3ljbGVbbmFtZV0gfHwgdGhpcy5saWZlQ3ljbGU7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6YCa55+lZGV2dG9vbFxuICAgICAgICAvLyAjW2JlZ2luXSBkZXZ0b29sXG4gICAgICAgIGVtaXREZXZ0b29sKCdjb21wLScgKyBuYW1lLCB0aGlzKTtcbiAgICAgICAgLy8gI1tlbmRdXG4gICAgfVxufTtcbi8qIGVzbGludC1lbmFibGUgb3BlcmF0b3ItbGluZWJyZWFrICovXG5cblxuLyoqXG4gKiDmt7vliqDkuovku7bnm5HlkKzlmahcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDkuovku7blkI1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIOebkeWQrOWZqFxuICogQHBhcmFtIHtzdHJpbmc/fSBkZWNsYXJhdGlvbiDlo7DmmI7lvI9cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChuYW1lLCBsaXN0ZW5lciwgZGVjbGFyYXRpb24pIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbbmFtZV0ucHVzaCh7Zm46IGxpc3RlbmVyLCBkZWNsYXJhdGlvbjogZGVjbGFyYXRpb259KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOenu+mZpOS6i+S7tuebkeWQrOWZqFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOS6i+S7tuWQjVxuICogQHBhcmFtIHtGdW5jdGlvbj19IGxpc3RlbmVyIOebkeWQrOWZqFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnVuID0gZnVuY3Rpb24gKG5hbWUsIGxpc3RlbmVyKSB7XG4gICAgdmFyIG5hbWVMaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1tuYW1lXTtcbiAgICB2YXIgbGVuID0gbmFtZUxpc3RlbmVycyAmJiBuYW1lTGlzdGVuZXJzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICBpZiAoIWxpc3RlbmVyIHx8IGxpc3RlbmVyID09PSBuYW1lTGlzdGVuZXJzW2xlbl0uZm4pIHtcbiAgICAgICAgICAgIG5hbWVMaXN0ZW5lcnMuc3BsaWNlKGxlbiwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8qKlxuICog5rS+5Y+R5LqL5Lu2XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCNXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnQg5LqL5Lu25a+56LGhXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uIChuYW1lLCBldmVudCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgZWFjaCh0aGlzLmxpc3RlbmVyc1tuYW1lXSwgZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyLmZuLmNhbGwobWUsIGV2ZW50KTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICog6K6h566XIGNvbXB1dGVkIOWxnuaAp+eahOWAvFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcHV0ZWRFeHByIGNvbXB1dGVk6KGo6L6+5byP5LiyXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX2NhbGNDb21wdXRlZCA9IGZ1bmN0aW9uIChjb21wdXRlZEV4cHIpIHtcbiAgICB2YXIgY29tcHV0ZWREZXBzID0gdGhpcy5jb21wdXRlZERlcHNbY29tcHV0ZWRFeHByXTtcbiAgICBpZiAoIWNvbXB1dGVkRGVwcykge1xuICAgICAgICBjb21wdXRlZERlcHMgPSB0aGlzLmNvbXB1dGVkRGVwc1tjb21wdXRlZEV4cHJdID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhLnNldChjb21wdXRlZEV4cHIsIHRoaXMuY29tcHV0ZWRbY29tcHV0ZWRFeHByXS5jYWxsKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZ2V0OiBiaW5kKGZ1bmN0aW9uIChleHByKSB7XG4gICAgICAgICAgICAgICAgLy8gI1tiZWdpbl0gZXJyb3JcbiAgICAgICAgICAgICAgICBpZiAoIWV4cHIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEVSUk9SXSBjYWxsIGdldCBtZXRob2QgaW4gY29tcHV0ZWQgbmVlZCBhcmd1bWVudCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAjW2VuZF1cblxuICAgICAgICAgICAgICAgIGlmICghY29tcHV0ZWREZXBzW2V4cHJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkRGVwc1tleHByXSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tcHV0ZWRbZXhwcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbGNDb21wdXRlZChleHByKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2F0Y2goZXhwciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FsY0NvbXB1dGVkKGNvbXB1dGVkRXhwcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZ2V0KGV4cHIpO1xuICAgICAgICAgICAgfSwgdGhpcylcbiAgICAgICAgfVxuICAgIH0pKTtcbn07XG5cbi8qKlxuICog5rS+5Y+R5raI5oGvXG4gKiDnu4Tku7blj6/ku6XmtL7lj5Hmtojmga/vvIzmtojmga/lsIbmsr/nnYDnu4Tku7bmoJHlkJHkuIrkvKDpgJLvvIznm7TliLDpgYfkuIrnrKzkuIDkuKrlpITnkIbmtojmga/nmoTnu4Tku7ZcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDmtojmga/lkI3np7BcbiAqIEBwYXJhbSB7Kj99IHZhbHVlIOa2iOaBr+WAvFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIHBhcmVudENvbXBvbmVudCA9IHRoaXMucGFyZW50Q29tcG9uZW50O1xuXG4gICAgd2hpbGUgKHBhcmVudENvbXBvbmVudCkge1xuICAgICAgICB2YXIgcmVjZWl2ZXIgPSBwYXJlbnRDb21wb25lbnQubWVzc2FnZXNbbmFtZV0gfHwgcGFyZW50Q29tcG9uZW50Lm1lc3NhZ2VzWycqJ107XG4gICAgICAgIGlmICh0eXBlb2YgcmVjZWl2ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlY2VpdmVyLmNhbGwoXG4gICAgICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHt0YXJnZXQ6IHRoaXMsIHZhbHVlOiB2YWx1ZSwgbmFtZTogbmFtZX1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudENvbXBvbmVudCA9IHBhcmVudENvbXBvbmVudC5wYXJlbnRDb21wb25lbnQ7XG4gICAgfVxufTtcblxuLyoqXG4gKiDojrflj5bnu4Tku7blhoXpg6jnmoQgc2xvdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbmFtZSBzbG905ZCN56ew77yM56m65Li6ZGVmYXVsdCBzbG90XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zbG90ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIG1lID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuVHJhdmVyc2FsKGNoaWxkcmVuKSB7XG4gICAgICAgIGVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSBOb2RlVHlwZS5TTE9UICYmIGNoaWxkLm93bmVyID09PSBtZSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5pc05hbWVkICYmIGNoaWxkLm5hbWUgPT09IG5hbWVcbiAgICAgICAgICAgICAgICAgICAgfHwgIWNoaWxkLmlzTmFtZWQgJiYgIW5hbWVcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuVHJhdmVyc2FsKGNoaWxkLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hpbGRyZW5UcmF2ZXJzYWwodGhpcy5jaGlsZHJlbik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICog6I635Y+W5bim5pyJIHNhbi1yZWYg5oyH5Luk55qE5a2Q57uE5Lu25byV55SoXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5a2Q57uE5Lu255qE5byV55So5ZCNXG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgcmVmVGFyZ2V0O1xuICAgIHZhciBvd25lciA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjaGlsZHJlblRyYXZlcnNhbChjaGlsZHJlbikge1xuICAgICAgICBlYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRUcmF2ZXJzYWwoY2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuICFyZWZUYXJnZXQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVsZW1lbnRUcmF2ZXJzYWwoZWxlbWVudCkge1xuICAgICAgICB2YXIgbm9kZVR5cGUgPSBlbGVtZW50Lm5vZGVUeXBlO1xuICAgICAgICBpZiAobm9kZVR5cGUgPT09IE5vZGVUeXBlLlRFWFQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyID09PSBvd25lcikge1xuICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgIHN3aXRjaCAoZWxlbWVudC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuRUxFTTpcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gZWxlbWVudC5hTm9kZS5kaXJlY3RpdmVzLnJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZiAmJiBldmFsRXhwcihyZWYudmFsdWUsIGVsZW1lbnQuc2NvcGUsIG93bmVyKSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0ID0gZWxlbWVudC5lbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVR5cGUuQ01QVDpcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gZWxlbWVudC5naXZlbkFOb2RlLmRpcmVjdGl2ZXMucmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmICYmIGV2YWxFeHByKHJlZi52YWx1ZSwgZWxlbWVudC5zY29wZSwgb3duZXIpID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICFyZWZUYXJnZXQgJiYgY2hpbGRyZW5UcmF2ZXJzYWwoZWxlbWVudC5zbG90Q2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgIXJlZlRhcmdldCAmJiBjaGlsZHJlblRyYXZlcnNhbChlbGVtZW50LmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICBjaGlsZHJlblRyYXZlcnNhbCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiByZWZUYXJnZXQ7XG59O1xuXG5cbi8qKlxuICog6KeG5Zu+5pu05paw5Ye95pWwXG4gKlxuICogQHBhcmFtIHtBcnJheT99IGNoYW5nZXMg5pWw5o2u5Y+Y5YyW5L+h5oGvXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMubGlmZUN5Y2xlLmRpc3Bvc2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWUgPSB0aGlzO1xuXG5cbiAgICB2YXIgbmVlZFJlbG9hZEZvclNsb3QgPSBmYWxzZTtcbiAgICB0aGlzLl9ub3RpZnlOZWVkUmVsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuZWVkUmVsb2FkRm9yU2xvdCA9IHRydWU7XG4gICAgfTtcblxuICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgIGVhY2goY2hhbmdlcywgZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZUV4cHIgPSBjaGFuZ2UuZXhwcjtcblxuICAgICAgICAgICAgZWFjaChtZS5iaW5kcywgZnVuY3Rpb24gKGJpbmRJdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlbGF0aW9uO1xuICAgICAgICAgICAgICAgIHZhciBzZXRFeHByID0gYmluZEl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlRXhwciA9IGJpbmRJdGVtLmV4cHI7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzRGF0YUNoYW5nZUJ5RWxlbWVudChjaGFuZ2UsIG1lLCBzZXRFeHByKVxuICAgICAgICAgICAgICAgICAgICAmJiAocmVsYXRpb24gPSBjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2VFeHByLCB1cGRhdGVFeHByLCBtZS5zY29wZSkpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbiA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cHIgPSBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEV4cHJUeXBlLlNUUklORyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZXRFeHByXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmNvbmNhdChjaGFuZ2VFeHByLnBhdGhzLnNsaWNlKHVwZGF0ZUV4cHIucGF0aHMubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUV4cHIgPSBjaGFuZ2VFeHByO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUuZGF0YS5zZXQoc2V0RXhwciwgZXZhbEV4cHIodXBkYXRlRXhwciwgbWUuc2NvcGUsIG1lLm93bmVyKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1lLm93bmVyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlYWNoKG1lLmdpdmVuTmFtZWRTbG90QmluZHMsIGZ1bmN0aW9uIChiaW5kSXRlbSkge1xuICAgICAgICAgICAgICAgIG5lZWRSZWxvYWRGb3JTbG90ID0gbmVlZFJlbG9hZEZvclNsb3QgfHwgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgYmluZEl0ZW0uZXhwciwgbWUuc2NvcGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhbmVlZFJlbG9hZEZvclNsb3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG5lZWRSZWxvYWRGb3JTbG90KSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVHaXZlblNsb3RzKCk7XG4gICAgICAgICAgICB0aGlzLl9yZXBhaW50Q2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzbG90Q2hpbGRyZW5MZW4gPSB0aGlzLnNsb3RDaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoc2xvdENoaWxkcmVuTGVuLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xvdENoaWxkID0gdGhpcy5zbG90Q2hpbGRyZW5bc2xvdENoaWxkcmVuTGVuXTtcblxuICAgICAgICAgICAgICAgIGlmIChzbG90Q2hpbGQubGlmZUN5Y2xlLmRpc3Bvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xvdENoaWxkcmVuLnNwbGljZShzbG90Q2hpbGRyZW5MZW4sIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzbG90Q2hpbGQuaXNJbnNlcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICBzbG90Q2hpbGQuX3VwZGF0ZShjaGFuZ2VzLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGF0YUNoYW5nZXMgPSB0aGlzLmRhdGFDaGFuZ2VzO1xuICAgIGlmIChkYXRhQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VzID0gbnVsbDtcbiAgICAgICAgZWFjaCh0aGlzLmFOb2RlLmhvdHNwb3QuZHluYW1pY1Byb3BzLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgZWFjaChkYXRhQ2hhbmdlcywgZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VFeHByQ29tcGFyZShjaGFuZ2UuZXhwciwgcHJvcC5leHByLCBtZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICB8fCBwcm9wLmhpbnRFeHByICYmIGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCBwcm9wLmhpbnRFeHByLCBtZS5kYXRhKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVQcm9wKG1lLCBldmFsRXhwcihwcm9wLmV4cHIsIG1lLmRhdGEsIG1lKSwgcHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudFVwZGF0ZUNoaWxkcmVuKHRoaXMsIGRhdGFDaGFuZ2VzKTtcbiAgICAgICAgaWYgKG5lZWRSZWxvYWRGb3JTbG90KSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVHaXZlblNsb3RzKCk7XG4gICAgICAgICAgICB0aGlzLl9yZXBhaW50Q2hpbGRyZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RvUGhhc2UoJ3VwZGF0ZWQnKTtcblxuICAgICAgICBpZiAodGhpcy5vd25lcikge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQmluZHhPd25lcihkYXRhQ2hhbmdlcyk7XG4gICAgICAgICAgICB0aGlzLm93bmVyLl91cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeU5lZWRSZWxvYWQgPSBudWxsO1xufTtcblxuQ29tcG9uZW50LnByb3RvdHlwZS5fdXBkYXRlQmluZHhPd25lciA9IGZ1bmN0aW9uIChkYXRhQ2hhbmdlcykge1xuICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5vd25lcikge1xuICAgICAgICBlYWNoKGRhdGFDaGFuZ2VzLCBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICAgICAgICBlYWNoKG1lLmJpbmRzLCBmdW5jdGlvbiAoYmluZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlRXhwciA9IGNoYW5nZS5leHByO1xuICAgICAgICAgICAgICAgIGlmIChiaW5kSXRlbS54XG4gICAgICAgICAgICAgICAgICAgICYmICFpc0RhdGFDaGFuZ2VCeUVsZW1lbnQoY2hhbmdlLCBtZS5vd25lcilcbiAgICAgICAgICAgICAgICAgICAgJiYgY2hhbmdlRXhwckNvbXBhcmUoY2hhbmdlRXhwciwgcGFyc2VFeHByKGJpbmRJdGVtLm5hbWUpLCBtZS5kYXRhKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlU2NvcGVFeHByID0gYmluZEl0ZW0uZXhwcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZUV4cHIucGF0aHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2NvcGVFeHByID0gY3JlYXRlQWNjZXNzb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZEl0ZW0uZXhwci5wYXRocy5jb25jYXQoY2hhbmdlRXhwci5wYXRocy5zbGljZSgxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS5zY29wZS5zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTY29wZUV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmFsRXhwcihjaGFuZ2VFeHByLCBtZS5kYXRhLCBtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogYmluZEl0ZW0ubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDph43mlrDnu5jliLbnu4Tku7bnmoTlhoXlrrlcbiAqIOW9kyBkeW5hbWljIHNsb3QgbmFtZSDlj5HnlJ/lj5jmm7TmiJYgc2xvdCDljLnphY3lj5HnlJ/lj5jljJbml7bvvIzph43mlrDnu5jliLZcbiAqIOWcqOe7hOS7tue6p+WIq+mHjee7mOacieeCueeyl+aatO+8jOS9huaYr+iDveS/neivgeinhuWbvue7k+aenOato+ehruaAp1xuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9yZXBhaW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgZWxlbWVudERpc3Bvc2VDaGlsZHJlbih0aGlzLCAwLCAxKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cbiAgICB0aGlzLl9jb250ZW50UmVhZHkgPSAwO1xuICAgIHRoaXMuc2xvdENoaWxkcmVuID0gW107XG4gICAgZWxlbWVudEF0dGFjaCh0aGlzKTtcbn07XG5cblxuLyoqXG4gKiDnu4Tku7blhoXpg6jnm5HlkKzmlbDmja7lj5jljJbnmoTlh73mlbBcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNoYW5nZSDmlbDmja7lj5jljJbkv6Hmga9cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5fZGF0YUNoYW5nZXIgPSBmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgaWYgKHRoaXMubGlmZUN5Y2xlLnBhaW50aW5nIHx8IHRoaXMubGlmZUN5Y2xlLmNyZWF0ZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFDaGFuZ2VzKSB7XG4gICAgICAgICAgICBuZXh0VGljayh0aGlzLl91cGRhdGUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5kYXRhQ2hhbmdlcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubGlmZUN5Y2xlLmluaXRlZCAmJiB0aGlzLm93bmVyKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUJpbmR4T3duZXIoW2NoYW5nZV0pO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiDnm5HlkKznu4Tku7bnmoTmlbDmja7lj5jljJZcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YU5hbWUg5Y+Y5YyW55qE5pWw5o2u6aG5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciDnm5HlkKzlh73mlbBcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uIChkYXRhTmFtZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgZGF0YUV4cHIgPSBwYXJzZUV4cHIoZGF0YU5hbWUpO1xuXG4gICAgdGhpcy5kYXRhLmxpc3RlbihiaW5kKGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgaWYgKGNoYW5nZUV4cHJDb21wYXJlKGNoYW5nZS5leHByLCBkYXRhRXhwciwgdGhpcy5kYXRhKSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmFsRXhwcihkYXRhRXhwciwgdGhpcy5kYXRhLCB0aGlzKSwgY2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH0sIHRoaXMpKTtcbn07XG5cbi8qKlxuICog57uE5Lu26ZSA5q+B55qE6KGM5Li6XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMg6ZSA5q+B6KGM5Li655qE5Y+C5pWwXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuZGlzcG9zZSA9IGVsZW1lbnRPd25EaXNwb3NlO1xuXG5Db21wb25lbnQucHJvdG90eXBlLl9kb25lTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubGVhdmVEaXNwb3NlKSB7XG4gICAgICAgIGlmICghdGhpcy5saWZlQ3ljbGUuZGlzcG9zZWQpIHtcbiAgICAgICAgICAgIC8vIOi/memHjOS4jeeUqOaMqOS4quiwg+eUqCBkaXNwb3NlIOS6hu+8jOWboOS4uiBjaGlsZHJlbiDph4rmlL7pk77kvJrosIPnlKjnmoRcbiAgICAgICAgICAgIHRoaXMuc2xvdENoaWxkcmVuID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy5kYXRhLnVubGlzdGVuKCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFDaGFuZ2VyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZGF0YUNoYW5nZXMgPSBudWxsO1xuXG4gICAgICAgICAgICBlbGVtZW50RGlzcG9zZShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZU5vRGV0YWNoLFxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZU5vVHJhbnNpdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy5naXZlbkFOb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZ2l2ZW5TbG90cyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmdpdmVuTmFtZWRTbG90QmluZHMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubGlmZUN5Y2xlLmF0dGFjaGVkKSB7XG4gICAgICAgIHJlbW92ZUVsKHRoaXMuZWwpO1xuICAgICAgICB0aGlzLl90b1BoYXNlKCdkZXRhY2hlZCcpO1xuICAgIH1cbn07XG5cbi8qKlxuICog5a6M5oiQ57uE5Lu2IGF0dGFjaGVkIOWQjueahOihjOS4ulxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IOWFg+e0oOiKgueCuVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLl9hdHRhY2hlZCA9IGVsZW1lbnRPd25BdHRhY2hlZDtcblxuQ29tcG9uZW50LnByb3RvdHlwZS5hdHRhY2ggPSBlbGVtZW50T3duQXR0YWNoO1xuQ29tcG9uZW50LnByb3RvdHlwZS5kZXRhY2ggPSBlbGVtZW50T3duRGV0YWNoO1xuQ29tcG9uZW50LnByb3RvdHlwZS5fY3JlYXRlID0gZWxlbWVudE93bkNyZWF0ZTtcbkNvbXBvbmVudC5wcm90b3R5cGUuX29uRWwgPSBlbGVtZW50T3duT25FbDtcblxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQ7XG5cblxuLyoqXG4gKiBAZmlsZSDliJvlu7rnu4Tku7bnsbtcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBDb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudCcpO1xuLy8gdmFyIGluaGVyaXRzID0gcmVxdWlyZSgnLi4vdXRpbC9pbmhlcml0cycpO1xuXG4vKipcbiAqIOWIm+W7uue7hOS7tuexu1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byDnu4Tku7bnsbvnmoTmlrnms5XooahcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBkZWZpbmVDb21wb25lbnQocHJvdG8pIHtcbiAgICAvLyDlpoLmnpzkvKDlhaXkuIDkuKrkuI3mmK8gc2FuIGNvbXBvbmVudCDnmoQgY29uc3RydWN0b3LvvIznm7TmjqXov5Tlm57kuI3mmK/nu4Tku7bmnoTpgKDlh73mlbBcbiAgICAvLyDov5nnp43lnLrmma/lr7zoh7TnmoTplJnor68gc2FuIOS4jeS6iOiAg+iZkVxuICAgIGlmICh0eXBlb2YgcHJvdG8gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgIH1cblxuICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgaWYgKHR5cGVvZiBwcm90byAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbU0FOIEZBVEFMXSBwYXJhbSBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LicpO1xuICAgIH1cbiAgICAvLyAjW2VuZF1cblxuICAgIGZ1bmN0aW9uIENvbXBvbmVudENsYXNzKG9wdGlvbikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIG9wdGlvbik7XG4gICAgfVxuXG4gICAgQ29tcG9uZW50Q2xhc3MucHJvdG90eXBlID0gcHJvdG87XG4gICAgaW5oZXJpdHMoQ29tcG9uZW50Q2xhc3MsIENvbXBvbmVudCk7XG5cbiAgICByZXR1cm4gQ29tcG9uZW50Q2xhc3M7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluZUNvbXBvbmVudDtcblxuXG4vKipcbiAqIEBmaWxlIOe8luivkee7hOS7tuexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuXG4vLyB2YXIgY3JlYXRlQU5vZGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvY3JlYXRlLWEtbm9kZScpO1xuLy8gdmFyIHBhcnNlVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtdGVtcGxhdGUnKTtcbi8vIHZhciBwYXJzZVRleHQgPSByZXF1aXJlKCcuLi9wYXJzZXIvcGFyc2UtdGV4dCcpO1xuLy8gdmFyIGRlZmluZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vZGVmaW5lLWNvbXBvbmVudCcpO1xuXG5cbi8qKlxuICog57yW6K+R57uE5Lu257G744CC6aKE6Kej5p6QdGVtcGxhdGXlkoxjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ29tcG9uZW50Q2xhc3Mg57uE5Lu257G7XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVDb21wb25lbnQoQ29tcG9uZW50Q2xhc3MpIHtcbiAgICB2YXIgcHJvdG8gPSBDb21wb25lbnRDbGFzcy5wcm90b3R5cGU7XG5cbiAgICAvLyBwcmUgZGVmaW5lIGNvbXBvbmVudHMgY2xhc3NcbiAgICBpZiAoIXByb3RvLmhhc093blByb3BlcnR5KCdfY21wdFJlYWR5JykpIHtcbiAgICAgICAgcHJvdG8uY29tcG9uZW50cyA9IENvbXBvbmVudENsYXNzLmNvbXBvbmVudHMgfHwgcHJvdG8uY29tcG9uZW50cyB8fCB7fTtcbiAgICAgICAgdmFyIGNvbXBvbmVudHMgPSBwcm90by5jb21wb25lbnRzO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjb21wb25lbnRzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIHZhciBjb21wb25lbnRDbGFzcyA9IGNvbXBvbmVudHNba2V5XTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRDbGFzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW2tleV0gPSBkZWZpbmVDb21wb25lbnQoY29tcG9uZW50Q2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tcG9uZW50Q2xhc3MgPT09ICdzZWxmJykge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHNba2V5XSA9IENvbXBvbmVudENsYXNzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvdG8uX2NtcHRSZWFkeSA9IDE7XG4gICAgfVxuXG5cbiAgICAvLyBwcmUgY29tcGlsZSB0ZW1wbGF0ZVxuICAgIGlmICghcHJvdG8uaGFzT3duUHJvcGVydHkoJ2FOb2RlJykpIHtcbiAgICAgICAgcHJvdG8uYU5vZGUgPSBjcmVhdGVBTm9kZSgpO1xuXG4gICAgICAgIHZhciB0cGwgPSBDb21wb25lbnRDbGFzcy50ZW1wbGF0ZSB8fCBwcm90by50ZW1wbGF0ZTtcbiAgICAgICAgaWYgKHRwbCkge1xuICAgICAgICAgICAgdmFyIGFOb2RlID0gcGFyc2VUZW1wbGF0ZSh0cGwsIHtcbiAgICAgICAgICAgICAgICB0cmltV2hpdGVzcGFjZTogcHJvdG8udHJpbVdoaXRlc3BhY2UgfHwgQ29tcG9uZW50Q2xhc3MudHJpbVdoaXRlc3BhY2UsXG4gICAgICAgICAgICAgICAgZGVsaW1pdGVyczogcHJvdG8uZGVsaW1pdGVycyB8fCBDb21wb25lbnRDbGFzcy5kZWxpbWl0ZXJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBmaXJzdENoaWxkID0gYU5vZGUuY2hpbGRyZW5bMF07XG5cbiAgICAgICAgICAgIC8vICNbYmVnaW5dIGVycm9yXG4gICAgICAgICAgICBpZiAoYU5vZGUuY2hpbGRyZW4ubGVuZ3RoICE9PSAxIHx8IGZpcnN0Q2hpbGQudGV4dEV4cHIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTQU4gRkFUQUxdIHRlbXBsYXRlIG11c3QgaGF2ZSBhIHJvb3QgZWxlbWVudC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICNbZW5kXVxuXG4gICAgICAgICAgICBwcm90by5hTm9kZSA9IGZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBpZiAoZmlyc3RDaGlsZC50YWdOYW1lID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgICAgICAgZmlyc3RDaGlsZC50YWdOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvbXBvbmVudFByb3BFeHRyYSA9IHtcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiB7bmFtZTogJ2NsYXNzJywgZXhwcjogcGFyc2VUZXh0KCd7e2NsYXNzIHwgX2NsYXNzIHwgX3NlcChcIiBcIil9fScpfSxcbiAgICAgICAgICAgICAgICAnc3R5bGUnOiB7bmFtZTogJ3N0eWxlJywgZXhwcjogcGFyc2VUZXh0KCd7e3N0eWxlIHwgX3N0eWxlIHwgX3NlcChcIjtcIil9fScpfSxcbiAgICAgICAgICAgICAgICAnaWQnOiB7bmFtZTogJ2lkJywgZXhwcjogcGFyc2VUZXh0KCd7e2lkfX0nKX1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBsZW4gPSBmaXJzdENoaWxkLnByb3BzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gZmlyc3RDaGlsZC5wcm9wc1tsZW5dO1xuICAgICAgICAgICAgICAgIHZhciBleHRyYSA9IGNvbXBvbmVudFByb3BFeHRyYVtwcm9wLm5hbWVdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Q2hpbGQucHJvcHMuc3BsaWNlKGxlbiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFByb3BFeHRyYVtwcm9wLm5hbWVdID0gcHJvcDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcC5uYW1lICE9PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wLmV4cHIuc2Vncy5wdXNoKGV4dHJhLmV4cHIuc2Vnc1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wLmV4cHIudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaXJzdENoaWxkLnByb3BzLnB1c2goXG4gICAgICAgICAgICAgICAgY29tcG9uZW50UHJvcEV4dHJhWydjbGFzcyddLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFByb3BFeHRyYS5zdHlsZSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnRQcm9wRXh0cmEuaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNvbXBpbGVDb21wb25lbnQ7XG5cblxuLyoqXG4gKiBAZmlsZSDnu4Tku7bpooTng61cbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBFeHByVHlwZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9leHByLXR5cGUnKTtcbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgY3JlYXRlRWwgPSByZXF1aXJlKCcuLi9icm93c2VyL2NyZWF0ZS1lbCcpO1xuLy8gdmFyIGdldFByb3BIYW5kbGVyID0gcmVxdWlyZSgnLi9nZXQtcHJvcC1oYW5kbGVyJyk7XG4vLyB2YXIgZ2V0QU5vZGVQcm9wID0gcmVxdWlyZSgnLi9nZXQtYS1ub2RlLXByb3AnKTtcbi8vIHZhciBpc0Jyb3dzZXIgPSByZXF1aXJlKCcuLi9icm93c2VyL2lzLWJyb3dzZXInKTtcblxuLyoqXG4gKiDnu4Tku7bpooTng63vvIzliIbmnpDnu4Tku7ZhTm9kZeeahOaVsOaNruW8leeUqOetieS/oeaBr1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudENsYXNzIOe7hOS7tuexu1xuICovXG5mdW5jdGlvbiBjb21wb25lbnRQcmVoZWF0KENvbXBvbmVudENsYXNzKSB7XG4gICAgdmFyIHN0YWNrID0gW107XG5cbiAgICBmdW5jdGlvbiByZWNvcmRIb3RzcG90RGF0YShyZWZzLCBub3RDb250ZW50RGF0YSkge1xuICAgICAgICB2YXIgbGVuID0gc3RhY2subGVuZ3RoO1xuICAgICAgICBlYWNoKHN0YWNrLCBmdW5jdGlvbiAoYU5vZGUsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIW5vdENvbnRlbnREYXRhIHx8IGluZGV4ICE9PSBsZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgZWFjaChyZWZzLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QuZGF0YVtyZWZdID0gMTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBhbmFseXNlQU5vZGVIb3RzcG90KGFOb2RlKSB7XG4gICAgICAgIGlmICghYU5vZGUuaG90c3BvdCkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChhTm9kZSk7XG5cblxuICAgICAgICAgICAgaWYgKGFOb2RlLnRleHRFeHByKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdCA9IHtkYXRhOiB7fX07XG4gICAgICAgICAgICAgICAgcmVjb3JkSG90c3BvdERhdGEoYW5hbHlzZUV4cHJEYXRhSG90c3BvdChhTm9kZS50ZXh0RXhwcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZU5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGlzQnJvd3NlciAmJiBhTm9kZS50YWdOYW1lICYmICEvXih0ZW1wbGF0ZXxzbG90fHNlbGVjdHxpbnB1dHxvcHRpb24pJC9pLnRlc3QoYU5vZGUudGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlTm9kZSA9IGNyZWF0ZUVsKGFOb2RlLnRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljUHJvcHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB4UHJvcHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge30sXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU5vZGU6IHNvdXJjZU5vZGVcbiAgICAgICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgICAgICAvLyA9PT0gYW5hbHlzZSBob3RzcG90IGRhdGE6IHN0YXJ0XG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS52YXJzLCBmdW5jdGlvbiAodmFySXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRIb3RzcG90RGF0YShhbmFseXNlRXhwckRhdGFIb3RzcG90KHZhckl0ZW0uZXhwcikpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS5wcm9wcywgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkSG90c3BvdERhdGEoYW5hbHlzZUV4cHJEYXRhSG90c3BvdChwcm9wLmV4cHIpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhTm9kZS5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSBhTm9kZS5kaXJlY3RpdmVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZEhvdHNwb3REYXRhKGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoZGlyZWN0aXZlLnZhbHVlKSwga2V5ICE9PSAnaHRtbCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIGd1YXJkLWZvci1pbiAqL1xuXG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS5lbHNlcywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuYWx5c2VBTm9kZUhvdHNwb3QoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuYWx5c2VBTm9kZUhvdHNwb3QoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vID09PSBhbmFseXNlIGhvdHNwb3QgZGF0YTogZW5kXG5cblxuICAgICAgICAgICAgICAgIC8vID09PSBhbmFseXNlIGhvdHNwb3QgcHJvcHM6IHN0YXJ0XG4gICAgICAgICAgICAgICAgZWFjaChhTm9kZS5wcm9wcywgZnVuY3Rpb24gKHByb3AsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QucHJvcHNbcHJvcC5uYW1lXSA9IGluZGV4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3AuaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5pZFByb3AgPSBwcm9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5keW5hbWljUHJvcHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wLmV4cHIudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm9wSGFuZGxlcihhTm9kZS50YWdOYW1lLCBwcm9wLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9wKHNvdXJjZU5vZGUsIHByb3AuZXhwci52YWx1ZSwgcHJvcC5uYW1lLCBhTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcC54KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC54UHJvcHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QuZHluYW1pY1Byb3BzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGllIOS4i++8jOWmguaenCBvcHRpb24g5rKh5pyJIHZhbHVlIOWxnuaAp++8jHNlbGVjdC52YWx1ZSA9IHh4IOaTjeS9nOS4jeS8mumAieS4rSBvcHRpb25cbiAgICAgICAgICAgICAgICAvLyDmiYDku6XmsqHmnInorr7nva4gdmFsdWUg5pe277yM6buY6K6k5oqKIG9wdGlvbiDnmoTlhoXlrrnkvZzkuLogdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoYU5vZGUudGFnTmFtZSA9PT0gJ29wdGlvbidcbiAgICAgICAgICAgICAgICAgICAgJiYgIWdldEFOb2RlUHJvcChhTm9kZSwgJ3ZhbHVlJylcbiAgICAgICAgICAgICAgICAgICAgJiYgYU5vZGUuY2hpbGRyZW5bMF1cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJvcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByOiBhTm9kZS5jaGlsZHJlblswXS50ZXh0RXhwclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBhTm9kZS5wcm9wcy5wdXNoKHZhbHVlUHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIGFOb2RlLmhvdHNwb3QuZHluYW1pY1Byb3BzLnB1c2godmFsdWVQcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgYU5vZGUuaG90c3BvdC5wcm9wcy52YWx1ZSA9IGFOb2RlLnByb3BzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vID09PSBhbmFseXNlIGhvdHNwb3QgcHJvcHM6IGVuZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VBTm9kZUhvdHNwb3QoQ29tcG9uZW50Q2xhc3MucHJvdG90eXBlLmFOb2RlKTtcbn1cblxuLyoqXG4gKiDliIbmnpDooajovr7lvI/nmoTmlbDmja7lvJXnlKhcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXhwciDopoHliIbmnpDnmoTooajovr7lvI9cbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBhbmFseXNlRXhwckRhdGFIb3RzcG90KGV4cHIpIHtcbiAgICB2YXIgcmVmcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gYW5hbHlzZUV4cHJzKGV4cHJzKSB7XG4gICAgICAgIGVhY2goZXhwcnMsIGZ1bmN0aW9uIChleHByKSB7XG4gICAgICAgICAgICByZWZzID0gcmVmcy5jb25jYXQoYW5hbHlzZUV4cHJEYXRhSG90c3BvdChleHByKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZXhwci50eXBlKSB7XG4gICAgICAgIGNhc2UgRXhwclR5cGUuQUNDRVNTT1I6XG4gICAgICAgICAgICB2YXIgcGF0aHMgPSBleHByLnBhdGhzO1xuICAgICAgICAgICAgcmVmcy5wdXNoKHBhdGhzWzBdLnZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICByZWZzLnB1c2gocGF0aHNbMF0udmFsdWUgKyAnLicgKyAocGF0aHNbMV0udmFsdWUgfHwgJyonKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFuYWx5c2VFeHBycyhwYXRocy5zbGljZSgxKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEV4cHJUeXBlLlVOQVJZOlxuICAgICAgICAgICAgcmV0dXJuIGFuYWx5c2VFeHByRGF0YUhvdHNwb3QoZXhwci5leHByKTtcblxuICAgICAgICBjYXNlIEV4cHJUeXBlLlRFWFQ6XG4gICAgICAgIGNhc2UgRXhwclR5cGUuQklOQVJZOlxuICAgICAgICBjYXNlIEV4cHJUeXBlLlRFUlRJQVJZOlxuICAgICAgICAgICAgYW5hbHlzZUV4cHJzKGV4cHIuc2Vncyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEV4cHJUeXBlLklOVEVSUDpcbiAgICAgICAgICAgIHJlZnMgPSBhbmFseXNlRXhwckRhdGFIb3RzcG90KGV4cHIuZXhwcik7XG5cbiAgICAgICAgICAgIGVhY2goZXhwci5maWx0ZXJzLCBmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgYW5hbHlzZUV4cHJzKGZpbHRlci5uYW1lLnBhdGhzKTtcbiAgICAgICAgICAgICAgICBhbmFseXNlRXhwcnMoZmlsdGVyLmFyZ3MpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZnM7XG59XG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNvbXBvbmVudFByZWhlYXQ7XG5cblxuLyoqXG4gKiBAZmlsZSDlsIYgYmluZHMg55qEIG5hbWUg5LuOIGtlYmFiY2FzZSDovazmjaLmiJAgY2FtZWxjYXNlXG4gKiBAYXV0aG9yIGVycm9ycmlrKGVycm9ycmlrQGdtYWlsLmNvbSlcbiAqL1xuXG4vLyB2YXIga2ViYWIyY2FtZWwgPSByZXF1aXJlKCcuLi91dGlsL2tlYmFiMmNhbWVsJyk7XG4vLyB2YXIgZWFjaCA9IHJlcXVpcmUoJy4uL3V0aWwvZWFjaCcpO1xuXG4vKipcbiAqIOWwhiBiaW5kcyDnmoQgbmFtZSDku44ga2ViYWJjYXNlIOi9rOaNouaIkCBjYW1lbGNhc2VcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBiaW5kcyBiaW5kc+mbhuWQiFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGNhbWVsQ29tcG9uZW50QmluZHMoYmluZHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZWFjaChiaW5kcywgZnVuY3Rpb24gKGJpbmQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgbmFtZToga2ViYWIyY2FtZWwoYmluZC5uYW1lKSxcbiAgICAgICAgICAgIGV4cHI6IGJpbmQuZXhwcixcbiAgICAgICAgICAgIHg6IGJpbmQueCxcbiAgICAgICAgICAgIHJhdzogYmluZC5yYXdcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjYW1lbENvbXBvbmVudEJpbmRzO1xuXG5cbi8qKlxuICogQGZpbGUg57yW6K+R5rqQ56CB55qEIGhlbHBlciDmlrnms5Xpm4blkIhcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cbi8vIHZhciBlYWNoID0gcmVxdWlyZSgnLi4vdXRpbC9lYWNoJyk7XG4vLyB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuLi9wYXJzZXIvZXhwci10eXBlJyk7XG5cbi8vICNbYmVnaW5dIHNzclxuLy8gXG4vLyAvKipcbi8vICAqIOe8luivkea6kOeggeeahCBoZWxwZXIg5pa55rOV6ZuG5ZCI5a+56LGhXG4vLyAgKi9cbi8vIHZhciBjb21waWxlRXhwclNvdXJjZSA9IHtcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOWtl+espuS4suWtl+mdouWMllxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSDpnIDopoHlrZfpnaLljJbnmoTlrZfnrKbkuLJcbi8vICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IOWtl+espuS4suWtl+mdouWMlue7k+aenFxuLy8gICAgICAqL1xuLy8gICAgIHN0cmluZ0xpdGVyYWxpemU6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgcmV0dXJuICdcIidcbi8vICAgICAgICAgICAgICsgc291cmNlXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xceDVDL2csICdcXFxcXFxcXCcpXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHgwQS9nLCAnXFxcXG4nKVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHgwOS9nLCAnXFxcXHQnKVxuLy8gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHgwRC9nLCAnXFxcXHInKVxuLy8gICAgICAgICAgICAgICAgIC8vIC5yZXBsYWNlKCAvXFx4MDgvZywgJ1xcXFxiJyApXG4vLyAgICAgICAgICAgICAgICAgLy8gLnJlcGxhY2UoIC9cXHgwQy9nLCAnXFxcXGYnIClcbi8vICAgICAgICAgICAgICsgJ1wiJztcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog55Sf5oiQ5pWw5o2u6K6/6Zeu6KGo6L6+5byP5Luj56CBXG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge09iamVjdD99IGFjY2Vzc29yRXhwciBhY2Nlc3NvcuihqOi+vuW8j+WvueixoVxuLy8gICAgICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAgICAgKi9cbi8vICAgICBkYXRhQWNjZXNzOiBmdW5jdGlvbiAoYWNjZXNzb3JFeHByKSB7XG4vLyAgICAgICAgIHZhciBjb2RlID0gJ2NvbXBvbmVudEN0eC5kYXRhJztcbi8vICAgICAgICAgaWYgKGFjY2Vzc29yRXhwcikge1xuLy8gICAgICAgICAgICAgZWFjaChhY2Nlc3NvckV4cHIucGF0aHMsIGZ1bmN0aW9uIChwYXRoKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHBhdGgudHlwZSA9PT0gRXhwclR5cGUuQUNDRVNTT1IpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnWycgKyBjb21waWxlRXhwclNvdXJjZS5kYXRhQWNjZXNzKHBhdGgpICsgJ10nO1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgcGF0aC52YWx1ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29kZSArPSAnLicgKyBwYXRoLnZhbHVlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUgKz0gJ1snICsgcGF0aC52YWx1ZSArICddJztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgcmV0dXJuIGNvZGU7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOeUn+aIkOaPkuWAvOS7o+eggVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtPYmplY3R9IGludGVycEV4cHIg5o+S5YC86KGo6L6+5byP5a+56LGhXG4vLyAgICAgICogQHJldHVybiB7c3RyaW5nfVxuLy8gICAgICAqL1xuLy8gICAgIGludGVycDogZnVuY3Rpb24gKGludGVycEV4cHIpIHtcbi8vICAgICAgICAgdmFyIGNvZGUgPSBjb21waWxlRXhwclNvdXJjZS5leHByKGludGVycEV4cHIuZXhwcik7XG4vLyBcbi8vIFxuLy8gICAgICAgICBlYWNoKGludGVycEV4cHIuZmlsdGVycywgZnVuY3Rpb24gKGZpbHRlcikge1xuLy8gICAgICAgICAgICAgY29kZSA9ICdjb21wb25lbnRDdHguY2FsbEZpbHRlcihcIicgKyBmaWx0ZXIubmFtZS5wYXRoc1swXS52YWx1ZSArICdcIiwgWycgKyBjb2RlO1xuLy8gICAgICAgICAgICAgZWFjaChmaWx0ZXIuYXJncywgZnVuY3Rpb24gKGFyZykge1xuLy8gICAgICAgICAgICAgICAgIGNvZGUgKz0gJywgJyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoYXJnKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgY29kZSArPSAnXSknO1xuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICBpZiAoIWludGVycEV4cHIub3JpZ2luYWwpIHtcbi8vICAgICAgICAgICAgIHJldHVybiAnZXNjYXBlSFRNTCgnICsgY29kZSArICcpJztcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHJldHVybiBjb2RlO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnlJ/miJDmlofmnKzniYfmrrXku6PnoIFcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0ZXh0RXhwciDmlofmnKzniYfmrrXooajovr7lvI/lr7nosaFcbi8vICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgICAgICovXG4vLyAgICAgdGV4dDogZnVuY3Rpb24gKHRleHRFeHByKSB7XG4vLyAgICAgICAgIGlmICh0ZXh0RXhwci5zZWdzLmxlbmd0aCA9PT0gMCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuICdcIlwiJztcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHZhciBjb2RlID0gJyc7XG4vLyBcbi8vICAgICAgICAgZWFjaCh0ZXh0RXhwci5zZWdzLCBmdW5jdGlvbiAoc2VnKSB7XG4vLyAgICAgICAgICAgICB2YXIgc2VnQ29kZSA9IGNvbXBpbGVFeHByU291cmNlLmV4cHIoc2VnKTtcbi8vICAgICAgICAgICAgIGNvZGUgKz0gY29kZSA/ICcgKyAnICsgc2VnQ29kZSA6IHNlZ0NvZGU7XG4vLyAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgIHJldHVybiBjb2RlO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDkuozlhYPooajovr7lvI/mk43kvZznrKbmmKDlsITooahcbi8vICAgICAgKlxuLy8gICAgICAqIEB0eXBlIHtPYmplY3R9XG4vLyAgICAgICovXG4vLyAgICAgYmluYXJ5T3A6IHtcbi8vICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbi8vICAgICAgICAgNDM6ICcrJyxcbi8vICAgICAgICAgNDU6ICctJyxcbi8vICAgICAgICAgNDI6ICcqJyxcbi8vICAgICAgICAgNDc6ICcvJyxcbi8vICAgICAgICAgNjA6ICc8Jyxcbi8vICAgICAgICAgNjI6ICc+Jyxcbi8vICAgICAgICAgNzY6ICcmJicsXG4vLyAgICAgICAgIDk0OiAnIT0nLFxuLy8gICAgICAgICAxMjE6ICc8PScsXG4vLyAgICAgICAgIDEyMjogJz09Jyxcbi8vICAgICAgICAgMTIzOiAnPj0nLFxuLy8gICAgICAgICAxNTU6ICchPT0nLFxuLy8gICAgICAgICAxODM6ICc9PT0nLFxuLy8gICAgICAgICAyNDg6ICd8fCdcbi8vICAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnlJ/miJDooajovr7lvI/ku6PnoIFcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOihqOi+vuW8j+WvueixoVxuLy8gICAgICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAgICAgKi9cbi8vICAgICBleHByOiBmdW5jdGlvbiAoZXhwcikge1xuLy8gICAgICAgICBzd2l0Y2ggKGV4cHIudHlwZSkge1xuLy8gICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5VTkFSWTpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gJyEnICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihleHByLmV4cHIpO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLkJJTkFSWTpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGlsZUV4cHJTb3VyY2UuZXhwcihleHByLnNlZ3NbMF0pXG4vLyAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuYmluYXJ5T3BbZXhwci5vcGVyYXRvcl1cbi8vICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKGV4cHIuc2Vnc1sxXSk7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgRXhwclR5cGUuVEVSVElBUlk6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGVFeHByU291cmNlLmV4cHIoZXhwci5zZWdzWzBdKVxuLy8gICAgICAgICAgICAgICAgICAgICArICc/JyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoZXhwci5zZWdzWzFdKVxuLy8gICAgICAgICAgICAgICAgICAgICArICc6JyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoZXhwci5zZWdzWzJdKTtcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5TVFJJTkc6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGVFeHByU291cmNlLnN0cmluZ0xpdGVyYWxpemUoZXhwci5saXRlcmFsIHx8IGV4cHIudmFsdWUpO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlIEV4cHJUeXBlLk5VTUJFUjpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gZXhwci52YWx1ZTtcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5CT09MOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBleHByLnZhbHVlID8gJ3RydWUnIDogJ2ZhbHNlJztcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5BQ0NFU1NPUjpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGlsZUV4cHJTb3VyY2UuZGF0YUFjY2VzcyhleHByKTtcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5JTlRFUlA6XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGVFeHByU291cmNlLmludGVycChleHByKTtcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSBFeHByVHlwZS5URVhUOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBjb21waWxlRXhwclNvdXJjZS50ZXh0KGV4cHIpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfTtcbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjb21waWxlRXhwclNvdXJjZTtcblxuXG4vKipcbiAqIEBmaWxlIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlcuexu1xuICogQGF1dGhvciBlcnJvcnJpayhlcnJvcnJpa0BnbWFpbC5jb20pXG4gKi9cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBjb21waWxlRXhwclNvdXJjZSA9IHJlcXVpcmUoJy4vY29tcGlsZS1leHByLXNvdXJjZScpO1xuXG5cbi8vICNbYmVnaW5dIHNzclxuLy8gLyoqXG4vLyAgKiDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXLnsbtcbi8vICAqXG4vLyAgKiBAY2xhc3Ncbi8vICAqL1xuLy8gZnVuY3Rpb24gQ29tcGlsZVNvdXJjZUJ1ZmZlcigpIHtcbi8vICAgICB0aGlzLnNlZ3MgPSBbXTtcbi8vIH1cbi8vIFxuLy8gLyoqXG4vLyAgKiDmt7vliqDljp/lp4vku6PnoIHvvIzlsIbljp/lsIHkuI3liqjovpPlh7pcbi8vICAqXG4vLyAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSDljp/lp4vku6PnoIFcbi8vICAqL1xuLy8gQ29tcGlsZVNvdXJjZUJ1ZmZlci5wcm90b3R5cGUuYWRkUmF3ID0gZnVuY3Rpb24gKGNvZGUpIHtcbi8vICAgICB0aGlzLnNlZ3MucHVzaCh7XG4vLyAgICAgICAgIHR5cGU6ICdSQVcnLFxuLy8gICAgICAgICBjb2RlOiBjb2RlXG4vLyAgICAgfSk7XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIOa3u+WKoOiiq+aLvOaOpeS4umh0bWznmoTljp/lp4vku6PnoIFcbi8vICAqXG4vLyAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSDljp/lp4vku6PnoIFcbi8vICAqL1xuLy8gQ29tcGlsZVNvdXJjZUJ1ZmZlci5wcm90b3R5cGUuam9pblJhdyA9IGZ1bmN0aW9uIChjb2RlKSB7XG4vLyAgICAgdGhpcy5zZWdzLnB1c2goe1xuLy8gICAgICAgICB0eXBlOiAnSk9JTl9SQVcnLFxuLy8gICAgICAgICBjb2RlOiBjb2RlXG4vLyAgICAgfSk7XG4vLyB9O1xuLy8gXG4vLyAvKipcbi8vICAqIOa3u+WKoHJlbmRlcmVy5pa55rOV55qE6LW35aeL5rqQ56CBXG4vLyAgKi9cbi8vIENvbXBpbGVTb3VyY2VCdWZmZXIucHJvdG90eXBlLmFkZFJlbmRlcmVyU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgdGhpcy5hZGRSYXcoJ2Z1bmN0aW9uIChkYXRhLCBwYXJlbnRDdHgsIGdpdmVuU2xvdHMpIHsnKTtcbi8vICAgICB0aGlzLmFkZFJhdygndmFyIGh0bWwgPSBcIlwiOycpO1xuLy8gfTtcbi8vIFxuLy8gLyoqXG4vLyAgKiDmt7vliqByZW5kZXJlcuaWueazleeahOe7k+adn+a6kOeggVxuLy8gICovXG4vLyBDb21waWxlU291cmNlQnVmZmVyLnByb3RvdHlwZS5hZGRSZW5kZXJlckVuZCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICB0aGlzLmFkZFJhdygncmV0dXJuIGh0bWw7Jyk7XG4vLyAgICAgdGhpcy5hZGRSYXcoJ30nKTtcbi8vIH07XG4vLyBcbi8vIC8qKlxuLy8gICog5re75Yqg6KKr5ou85o6l5Li6aHRtbOeahOmdmeaAgeWtl+espuS4slxuLy8gICpcbi8vICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg6KKr5ou85o6l55qE5a2X56ym5LiyXG4vLyAgKi9cbi8vIENvbXBpbGVTb3VyY2VCdWZmZXIucHJvdG90eXBlLmpvaW5TdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4vLyAgICAgdGhpcy5zZWdzLnB1c2goe1xuLy8gICAgICAgICBzdHI6IHN0cixcbi8vICAgICAgICAgdHlwZTogJ0pPSU5fU1RSSU5HJ1xuLy8gICAgIH0pO1xuLy8gfTtcbi8vIFxuLy8gLyoqXG4vLyAgKiDmt7vliqDooqvmi7zmjqXkuLpodG1s55qE5pWw5o2u6K6/6ZeuXG4vLyAgKlxuLy8gICogQHBhcmFtIHtPYmplY3Q/fSBhY2Nlc3NvciDmlbDmja7orr/pl67ooajovr7lvI/lr7nosaFcbi8vICAqL1xuLy8gQ29tcGlsZVNvdXJjZUJ1ZmZlci5wcm90b3R5cGUuam9pbkRhdGFTdHJpbmdpZnkgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgdGhpcy5zZWdzLnB1c2goe1xuLy8gICAgICAgICB0eXBlOiAnSk9JTl9EQVRBX1NUUklOR0lGWSdcbi8vICAgICB9KTtcbi8vIH07XG4vLyBcbi8vIC8qKlxuLy8gICog5re75Yqg6KKr5ou85o6l5Li6aHRtbOeahOihqOi+vuW8j1xuLy8gICpcbi8vICAqIEBwYXJhbSB7T2JqZWN0fSBleHByIOihqOi+vuW8j+WvueixoVxuLy8gICovXG4vLyBDb21waWxlU291cmNlQnVmZmVyLnByb3RvdHlwZS5qb2luRXhwciA9IGZ1bmN0aW9uIChleHByKSB7XG4vLyAgICAgdGhpcy5zZWdzLnB1c2goe1xuLy8gICAgICAgICBleHByOiBleHByLFxuLy8gICAgICAgICB0eXBlOiAnSk9JTl9FWFBSJ1xuLy8gICAgIH0pO1xuLy8gfTtcbi8vIFxuLy8gLyoqXG4vLyAgKiDnlJ/miJDnvJbor5HlkI7ku6PnoIFcbi8vICAqXG4vLyAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgKi9cbi8vIENvbXBpbGVTb3VyY2VCdWZmZXIucHJvdG90eXBlLnRvQ29kZSA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICB2YXIgY29kZSA9IFtdO1xuLy8gICAgIHZhciB0ZW1wID0gJyc7XG4vLyBcbi8vICAgICBmdW5jdGlvbiBnZW5TdHJMaXRlcmFsKCkge1xuLy8gICAgICAgICBpZiAodGVtcCkge1xuLy8gICAgICAgICAgICAgY29kZS5wdXNoKCdodG1sICs9ICcgKyBjb21waWxlRXhwclNvdXJjZS5zdHJpbmdMaXRlcmFsaXplKHRlbXApICsgJzsnKTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHRlbXAgPSAnJztcbi8vICAgICB9XG4vLyBcbi8vICAgICBlYWNoKHRoaXMuc2VncywgZnVuY3Rpb24gKHNlZykge1xuLy8gICAgICAgICBpZiAoc2VnLnR5cGUgPT09ICdKT0lOX1NUUklORycpIHtcbi8vICAgICAgICAgICAgIHRlbXAgKz0gc2VnLnN0cjtcbi8vICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIGdlblN0ckxpdGVyYWwoKTtcbi8vICAgICAgICAgc3dpdGNoIChzZWcudHlwZSkge1xuLy8gICAgICAgICAgICAgY2FzZSAnSk9JTl9EQVRBX1NUUklOR0lGWSc6XG4vLyAgICAgICAgICAgICAgICAgY29kZS5wdXNoKCdodG1sICs9IHN0cmluZ2lmaWVyLmFueSgnICsgY29tcGlsZUV4cHJTb3VyY2UuZGF0YUFjY2VzcygpICsgJyk7Jyk7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgJ0pPSU5fRVhQUic6XG4vLyAgICAgICAgICAgICAgICAgY29kZS5wdXNoKCdodG1sICs9ICcgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHNlZy5leHByKSArICc7Jyk7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgJ0pPSU5fUkFXJzpcbi8vICAgICAgICAgICAgICAgICBjb2RlLnB1c2goJ2h0bWwgKz0gJyArIHNlZy5jb2RlICsgJzsnKTtcbi8vICAgICAgICAgICAgICAgICBicmVhaztcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSAnUkFXJzpcbi8vICAgICAgICAgICAgICAgICBjb2RlLnB1c2goc2VnLmNvZGUpO1xuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gXG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcbi8vIFxuLy8gICAgIGdlblN0ckxpdGVyYWwoKTtcbi8vIFxuLy8gICAgIHJldHVybiBjb2RlLmpvaW4oJ1xcbicpO1xuLy8gfTtcbi8vIFxuLy8gI1tlbmRdXG5cbi8vIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IENvbXBpbGVTb3VyY2VCdWZmZXI7XG5cblxuLyoqXG4gKiBAZmlsZSDlsIbnu4Tku7bnvJbor5HmiJAgcmVuZGVyIOaWueazleeahCBqcyDmupDnoIFcbiAqIEBhdXRob3IgZXJyb3JyaWsoZXJyb3JyaWtAZ21haWwuY29tKVxuICovXG5cblxuLy8gdmFyIGVhY2ggPSByZXF1aXJlKCcuLi91dGlsL2VhY2gnKTtcbi8vIHZhciBndWlkID0gcmVxdWlyZSgnLi4vdXRpbC9ndWlkJyk7XG4vLyB2YXIgcGFyc2VFeHByID0gcmVxdWlyZSgnLi4vcGFyc2VyL3BhcnNlLWV4cHInKTtcbi8vIHZhciBjcmVhdGVBTm9kZSA9IHJlcXVpcmUoJy4uL3BhcnNlci9jcmVhdGUtYS1ub2RlJyk7XG4vLyB2YXIgY2xvbmVEaXJlY3RpdmVzID0gcmVxdWlyZSgnLi4vcGFyc2VyL2Nsb25lLWRpcmVjdGl2ZXMnKTtcbi8vIHZhciBhdXRvQ2xvc2VUYWdzID0gcmVxdWlyZSgnLi4vYnJvd3Nlci9hdXRvLWNsb3NlLXRhZ3MnKTtcbi8vIHZhciBDb21waWxlU291cmNlQnVmZmVyID0gcmVxdWlyZSgnLi9jb21waWxlLXNvdXJjZS1idWZmZXInKTtcbi8vIHZhciBjb21waWxlRXhwclNvdXJjZSA9IHJlcXVpcmUoJy4vY29tcGlsZS1leHByLXNvdXJjZScpO1xuLy8gdmFyIHJpbnNlQ29uZEFOb2RlID0gcmVxdWlyZSgnLi9yaW5zZS1jb25kLWFub2RlJyk7XG4vLyB2YXIgZ2V0QU5vZGVQcm9wID0gcmVxdWlyZSgnLi9nZXQtYS1ub2RlLXByb3AnKTtcblxuLy8gI1tiZWdpbl0gc3NyXG4vLyBcbi8vIC8qKlxuLy8gICog55Sf5oiQ5bqP5YiX5YyW5pe26LW35aeL5qGp55qEaHRtbFxuLy8gICpcbi8vICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIOahqeexu+Wei+agh+ivhlxuLy8gICogQHBhcmFtIHtzdHJpbmc/fSBjb250ZW50IOahqeWGheeahOWGheWuuVxuLy8gICogQHJldHVybiB7c3RyaW5nfVxuLy8gICovXG4vLyBmdW5jdGlvbiBzZXJpYWxpemVTdHVtcCh0eXBlLCBjb250ZW50KSB7XG4vLyAgICAgcmV0dXJuICc8IS0tcy0nICsgdHlwZSArIChjb250ZW50ID8gJzonICsgY29udGVudCA6ICcnKSArICctLT4nO1xuLy8gfVxuLy8gXG4vLyAvKipcbi8vICAqIOeUn+aIkOW6j+WIl+WMluaXtue7k+adn+ahqeeahGh0bWxcbi8vICAqXG4vLyAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDmoannsbvlnovmoIfor4Zcbi8vICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAqL1xuLy8gZnVuY3Rpb24gc2VyaWFsaXplU3R1bXBFbmQodHlwZSkge1xuLy8gICAgIHJldHVybiAnPCEtLS9zLScgKyB0eXBlICsgJy0tPic7XG4vLyB9XG4vLyBcbi8vIC8qKlxuLy8gICogZWxlbWVudCDnmoTnvJbor5Hmlrnms5Xpm4blkIjlr7nosaFcbi8vICAqXG4vLyAgKiBAaW5uZXJcbi8vICAqL1xuLy8gdmFyIGVsZW1lbnRTb3VyY2VDb21waWxlciA9IHtcbi8vIFxuLy8gICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1wYXJhbXMgKi9cbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5HlhYPntKDmoIfnrb7lpLRcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIOagh+etvuWQjVxuLy8gICAgICAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIOWxnuaAp+WIl+ihqFxuLy8gICAgICAqIEBwYXJhbSB7c3RyaW5nP30gZXh0cmFQcm9wIOmineWklueahOWxnuaAp+S4slxuLy8gICAgICAqIEBwYXJhbSB7Ym9vbGVhbj99IGlzQ2xvc2Ug5piv5ZCm6Zet5ZCIXG4vLyAgICAgICovXG4vLyAgICAgdGFnU3RhcnQ6IGZ1bmN0aW9uIChzb3VyY2VCdWZmZXIsIHRhZ05hbWUsIHByb3BzLCBleHRyYVByb3AsIGlzQ2xvc2UpIHtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoJzwnICsgdGFnTmFtZSk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKGV4dHJhUHJvcCB8fCAnJyk7XG4vLyBcbi8vICAgICAgICAgLy8gaW5kZXggbGlzdFxuLy8gICAgICAgICB2YXIgcHJvcHNJbmRleCA9IHt9O1xuLy8gICAgICAgICBlYWNoKHByb3BzLCBmdW5jdGlvbiAocHJvcCkge1xuLy8gICAgICAgICAgICAgcHJvcHNJbmRleFtwcm9wLm5hbWVdID0gcHJvcDtcbi8vICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgZWFjaChwcm9wcywgZnVuY3Rpb24gKHByb3ApIHtcbi8vICAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgPT09ICdzbG90Jykge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgaWYgKHByb3AubmFtZSA9PT0gJ3ZhbHVlJykge1xuLy8gICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnTmFtZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0Jzpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyRzZWxlY3RWYWx1ZSA9ICdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmV4cHIocHJvcC5leHByKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJyB8fCBcIlwiOydcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3B0aW9uJzpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyRvcHRpb25WYWx1ZSA9ICdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmV4cHIocHJvcC5leHByKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJzsnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2lmICgkb3B0aW9uVmFsdWUgIT0gbnVsbCkgeycpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5SYXcoJ1wiIHZhbHVlPVxcXFxcIlwiICsgJG9wdGlvblZhbHVlICsgXCJcXFxcXCJcIicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnaWYgKCRvcHRpb25WYWx1ZSA9PT0gJHNlbGVjdFZhbHVlKSB7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZygnIHNlbGVjdGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICBzd2l0Y2ggKHByb3AubmFtZSkge1xuLy8gICAgICAgICAgICAgICAgIGNhc2UgJ3JlYWRvbmx5Jzpcbi8vICAgICAgICAgICAgICAgICBjYXNlICdkaXNhYmxlZCc6XG4vLyAgICAgICAgICAgICAgICAgY2FzZSAnbXVsdGlwbGUnOlxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAocHJvcC5yYXcgPT09ICcnKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZygnICcgKyBwcm9wLm5hbWUpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5SYXcoJ2Jvb2xBdHRyRmlsdGVyKFwiJyArIHByb3AubmFtZSArICdcIiwgJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihwcm9wLmV4cHIpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnKSdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyBcbi8vICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2VkJzpcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVByb3AgPSBwcm9wc0luZGV4LnZhbHVlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlQ29kZSA9IGNvbXBpbGVFeHByU291cmNlLmV4cHIodmFsdWVQcm9wLmV4cHIpO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wc0luZGV4LnR5cGUucmF3KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94Jzpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2lmIChjb250YWlucygnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBjb21waWxlRXhwclNvdXJjZS5leHByKHByb3AuZXhwcilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICcsICdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHZhbHVlQ29kZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJykpIHsnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoJyBjaGVja2VkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdpZiAoJ1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihwcm9wLmV4cHIpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnID09PSAnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB2YWx1ZUNvZGVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICcpIHsnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoJyBjaGVja2VkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyBcbi8vICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAocHJvcC5hdHRyKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZygnICcgKyBwcm9wLmF0dHIpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5SYXcoJ2F0dHJGaWx0ZXIoXCInICsgcHJvcC5uYW1lICsgJ1wiLCAnXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAocHJvcC54ID8gJ2VzY2FwZUhUTUwoJyA6ICcnKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihwcm9wLmV4cHIpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAocHJvcC54ID8gJyknIDogJycpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnKSdcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKGlzQ2xvc2UgPyAnLz4nIDogJz4nKTtcbi8vICAgICB9LFxuLy8gICAgIC8qIGVzbGludC1lbmFibGUgbWF4LXBhcmFtcyAqL1xuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+R5YWD57Sg6Zet5ZCIXG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSDmoIfnrb7lkI1cbi8vICAgICAgKi9cbi8vICAgICB0YWdFbmQ6IGZ1bmN0aW9uIChzb3VyY2VCdWZmZXIsIHRhZ05hbWUpIHtcbi8vICAgICAgICAgaWYgKCFhdXRvQ2xvc2VUYWdzW3RhZ05hbWVdKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZygnPC8nICsgdGFnTmFtZSArICc+Jyk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyRzZWxlY3RWYWx1ZSA9IG51bGw7Jyk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ29wdGlvbicpIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyRvcHRpb25WYWx1ZSA9IG51bGw7Jyk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+R5YWD57Sg5YaF5a65XG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDlhYPntKDnmoTmir3osaHoioLngrnkv6Hmga9cbi8vICAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu25a6e5L6L546v5aKDXG4vLyAgICAgICovXG4vLyAgICAgaW5uZXI6IGZ1bmN0aW9uIChzb3VyY2VCdWZmZXIsIGFOb2RlLCBvd25lcikge1xuLy8gICAgICAgICAvLyBpbm5lciBjb250ZW50XG4vLyAgICAgICAgIGlmIChhTm9kZS50YWdOYW1lID09PSAndGV4dGFyZWEnKSB7XG4vLyAgICAgICAgICAgICB2YXIgdmFsdWVQcm9wID0gZ2V0QU5vZGVQcm9wKGFOb2RlLCAndmFsdWUnKTtcbi8vICAgICAgICAgICAgIGlmICh2YWx1ZVByb3ApIHtcbi8vICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblJhdygnZXNjYXBlSFRNTCgnXG4vLyAgICAgICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcih2YWx1ZVByb3AuZXhwcilcbi8vICAgICAgICAgICAgICAgICAgICAgKyAnKSdcbi8vICAgICAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICB2YXIgaHRtbERpcmVjdGl2ZSA9IGFOb2RlLmRpcmVjdGl2ZXMuaHRtbDtcbi8vICAgICAgICAgaWYgKGh0bWxEaXJlY3RpdmUpIHtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luRXhwcihodG1sRGlyZWN0aXZlLnZhbHVlKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vLyAgICAgICAgICAgICBlYWNoKGFOb2RlLmNoaWxkcmVuLCBmdW5jdGlvbiAoYU5vZGVDaGlsZCkge1xuLy8gICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoYU5vZGVDb21waWxlci5jb21waWxlKGFOb2RlQ2hpbGQsIHNvdXJjZUJ1ZmZlciwgb3duZXIpKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfTtcbi8vIFxuLy8gLyoqXG4vLyAgKiBBTm9kZSDnmoTnvJbor5Hmlrnms5Xpm4blkIjlr7nosaFcbi8vICAqXG4vLyAgKiBAaW5uZXJcbi8vICAqL1xuLy8gdmFyIGFOb2RlQ29tcGlsZXIgPSB7XG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5HoioLngrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOaKveixoeiKgueCuVxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7blrp7kvovnjq/looNcbi8vICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXh0cmEg57yW6K+R5omA6ZyA55qE5LiA5Lqb6aKd5aSW5L+h5oGvXG4vLyAgICAgICovXG4vLyAgICAgY29tcGlsZTogZnVuY3Rpb24gKGFOb2RlLCBzb3VyY2VCdWZmZXIsIG93bmVyLCBleHRyYSkge1xuLy8gICAgICAgICBleHRyYSA9IGV4dHJhIHx8IHt9O1xuLy8gICAgICAgICB2YXIgY29tcGlsZU1ldGhvZCA9ICdjb21waWxlRWxlbWVudCc7XG4vLyBcbi8vICAgICAgICAgaWYgKGFOb2RlLnRleHRFeHByKSB7XG4vLyAgICAgICAgICAgICBjb21waWxlTWV0aG9kID0gJ2NvbXBpbGVUZXh0Jztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlIGlmIChhTm9kZS5kaXJlY3RpdmVzWydpZiddKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4vLyAgICAgICAgICAgICBjb21waWxlTWV0aG9kID0gJ2NvbXBpbGVJZic7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZSBpZiAoYU5vZGUuZGlyZWN0aXZlc1snZm9yJ10pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbi8vICAgICAgICAgICAgIGNvbXBpbGVNZXRob2QgPSAnY29tcGlsZUZvcic7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZSBpZiAoYU5vZGUudGFnTmFtZSA9PT0gJ3Nsb3QnKSB7XG4vLyAgICAgICAgICAgICBjb21waWxlTWV0aG9kID0gJ2NvbXBpbGVTbG90Jztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlIGlmIChhTm9kZS50YWdOYW1lID09PSAndGVtcGxhdGUnKSB7XG4vLyAgICAgICAgICAgICBjb21waWxlTWV0aG9kID0gJ2NvbXBpbGVUZW1wbGF0ZSc7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICB2YXIgQ29tcG9uZW50VHlwZSA9IG93bmVyLmdldENvbXBvbmVudFR5cGUoYU5vZGUpO1xuLy8gICAgICAgICAgICAgaWYgKENvbXBvbmVudFR5cGUpIHtcbi8vICAgICAgICAgICAgICAgICBjb21waWxlTWV0aG9kID0gJ2NvbXBpbGVDb21wb25lbnQnO1xuLy8gICAgICAgICAgICAgICAgIGV4dHJhLkNvbXBvbmVudENsYXNzID0gQ29tcG9uZW50VHlwZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIGFOb2RlQ29tcGlsZXJbY29tcGlsZU1ldGhvZF0oYU5vZGUsIHNvdXJjZUJ1ZmZlciwgb3duZXIsIGV4dHJhKTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+R5paH5pys6IqC54K5XG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDoioLngrnlr7nosaFcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKi9cbi8vICAgICBjb21waWxlVGV4dDogZnVuY3Rpb24gKGFOb2RlLCBzb3VyY2VCdWZmZXIpIHtcbi8vICAgICAgICAgaWYgKGFOb2RlLnRleHRFeHByLm9yaWdpbmFsKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZyhzZXJpYWxpemVTdHVtcCgndGV4dCcpKTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luRXhwcihhTm9kZS50ZXh0RXhwcik7XG4vLyBcbi8vICAgICAgICAgaWYgKGFOb2RlLnRleHRFeHByLm9yaWdpbmFsKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuam9pblN0cmluZyhzZXJpYWxpemVTdHVtcEVuZCgndGV4dCcpKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0sXG4vLyBcbi8vICAgICAvKipcbi8vICAgICAgKiDnvJbor5F0ZW1wbGF0ZeiKgueCuVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg6IqC54K55a+56LGhXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tuWunuS+i+eOr+Wig1xuLy8gICAgICAqL1xuLy8gICAgIGNvbXBpbGVUZW1wbGF0ZTogZnVuY3Rpb24gKGFOb2RlLCBzb3VyY2VCdWZmZXIsIG93bmVyKSB7XG4vLyAgICAgICAgIGVsZW1lbnRTb3VyY2VDb21waWxlci5pbm5lcihzb3VyY2VCdWZmZXIsIGFOb2RlLCBvd25lcik7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkSBpZiDoioLngrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOiKgueCueWvueixoVxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7blrp7kvovnjq/looNcbi8vICAgICAgKi9cbi8vICAgICBjb21waWxlSWY6IGZ1bmN0aW9uIChhTm9kZSwgc291cmNlQnVmZmVyLCBvd25lcikge1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcoZnVuY3Rpb24gKCkgeycpO1xuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ3ZhciBpZkluZGV4ID0gbnVsbDsnKTtcbi8vIFxuLy8gICAgICAgICAvLyBvdXRwdXQgbWFpbiBpZlxuLy8gICAgICAgICB2YXIgaWZEaXJlY3RpdmUgPSBhTm9kZS5kaXJlY3RpdmVzWydpZiddOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdpZiAoJyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoaWZEaXJlY3RpdmUudmFsdWUpICsgJykgeycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KFxuLy8gICAgICAgICAgICAgYU5vZGVDb21waWxlci5jb21waWxlKFxuLy8gICAgICAgICAgICAgICAgIHJpbnNlQ29uZEFOb2RlKGFOb2RlKSxcbi8vICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIsXG4vLyAgICAgICAgICAgICAgICAgb3duZXJcbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gXG4vLyAgICAgICAgIC8vIG91dHB1dCBlbGlmIGFuZCBlbHNlXG4vLyAgICAgICAgIGVhY2goYU5vZGUuZWxzZXMsIGZ1bmN0aW9uIChlbHNlQU5vZGUsIGluZGV4KSB7XG4vLyAgICAgICAgICAgICB2YXIgZWxpZkRpcmVjdGl2ZSA9IGVsc2VBTm9kZS5kaXJlY3RpdmVzLmVsaWY7XG4vLyAgICAgICAgICAgICBpZiAoZWxpZkRpcmVjdGl2ZSkge1xuLy8gICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2Vsc2UgaWYgKCcgKyBjb21waWxlRXhwclNvdXJjZS5leHByKGVsaWZEaXJlY3RpdmUudmFsdWUpICsgJykgeycpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnZWxzZSB7Jyk7XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoXG4vLyAgICAgICAgICAgICAgICAgYU5vZGVDb21waWxlci5jb21waWxlKFxuLy8gICAgICAgICAgICAgICAgICAgICByaW5zZUNvbmRBTm9kZShlbHNlQU5vZGUpLFxuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIsXG4vLyAgICAgICAgICAgICAgICAgICAgIG93bmVyXG4vLyAgICAgICAgICAgICAgICAgKVxuLy8gICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vICAgICAgICAgfSk7XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfSkoKTsnKTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+RIGZvciDoioLngrlcbi8vICAgICAgKlxuLy8gICAgICAqIEBwYXJhbSB7QU5vZGV9IGFOb2RlIOiKgueCueWvueixoVxuLy8gICAgICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICAgICAqIEBwYXJhbSB7Q29tcG9uZW50fSBvd25lciDmiYDlsZ7nu4Tku7blrp7kvovnjq/looNcbi8vICAgICAgKi9cbi8vICAgICBjb21waWxlRm9yOiBmdW5jdGlvbiAoYU5vZGUsIHNvdXJjZUJ1ZmZlciwgb3duZXIpIHtcbi8vICAgICAgICAgdmFyIGZvckVsZW1lbnRBTm9kZSA9IGNyZWF0ZUFOb2RlKHtcbi8vICAgICAgICAgICAgIGNoaWxkcmVuOiBhTm9kZS5jaGlsZHJlbixcbi8vICAgICAgICAgICAgIHByb3BzOiBhTm9kZS5wcm9wcyxcbi8vICAgICAgICAgICAgIGV2ZW50czogYU5vZGUuZXZlbnRzLFxuLy8gICAgICAgICAgICAgdGFnTmFtZTogYU5vZGUudGFnTmFtZSxcbi8vICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IGNsb25lRGlyZWN0aXZlcyhhTm9kZS5kaXJlY3RpdmVzLCB7XG4vLyAgICAgICAgICAgICAgICAgJ2Zvcic6IDFcbi8vICAgICAgICAgICAgIH0pLFxuLy8gICAgICAgICAgICAgaG90c3BvdDogYU5vZGUuaG90c3BvdFxuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICB2YXIgZm9yRGlyZWN0aXZlID0gYU5vZGUuZGlyZWN0aXZlc1snZm9yJ107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4vLyAgICAgICAgIHZhciBpdGVtTmFtZSA9IGZvckRpcmVjdGl2ZS5pdGVtLnJhdztcbi8vICAgICAgICAgdmFyIGluZGV4TmFtZSA9IGZvckRpcmVjdGl2ZS5pbmRleC5yYXc7XG4vLyAgICAgICAgIHZhciBsaXN0TmFtZSA9IGNvbXBpbGVFeHByU291cmNlLmRhdGFBY2Nlc3MoZm9yRGlyZWN0aXZlLnZhbHVlKTtcbi8vIFxuLy8gICAgICAgICBpZiAoaW5kZXhOYW1lID09PSAnJGluZGV4Jykge1xuLy8gICAgICAgICAgICAgaW5kZXhOYW1lID0gZ3VpZCgpO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnZm9yICgnXG4vLyAgICAgICAgICAgICArICd2YXIgJyArIGluZGV4TmFtZSArICcgPSAwOyAnXG4vLyAgICAgICAgICAgICArIGluZGV4TmFtZSArICcgPCAnICsgbGlzdE5hbWUgKyAnLmxlbmd0aDsgJ1xuLy8gICAgICAgICAgICAgKyBpbmRleE5hbWUgKyAnKyspIHsnXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2NvbXBvbmVudEN0eC5kYXRhLicgKyBpbmRleE5hbWUgKyAnPScgKyBpbmRleE5hbWUgKyAnOycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdjb21wb25lbnRDdHguZGF0YS4nICsgaXRlbU5hbWUgKyAnPSAnICsgbGlzdE5hbWUgKyAnWycgKyBpbmRleE5hbWUgKyAnXTsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdyhcbi8vICAgICAgICAgICAgIGFOb2RlQ29tcGlsZXIuY29tcGlsZShcbi8vICAgICAgICAgICAgICAgICBmb3JFbGVtZW50QU5vZGUsXG4vLyAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLFxuLy8gICAgICAgICAgICAgICAgIG93bmVyXG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+RIHNsb3Qg6IqC54K5XG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDoioLngrnlr7nosaFcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu25a6e5L6L546v5aKDXG4vLyAgICAgICovXG4vLyAgICAgY29tcGlsZVNsb3Q6IGZ1bmN0aW9uIChhTm9kZSwgc291cmNlQnVmZmVyLCBvd25lcikge1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcoZnVuY3Rpb24gKCkgeycpO1xuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2Z1bmN0aW9uICRkZWZhdWx0U2xvdFJlbmRlcihjb21wb25lbnRDdHgpIHsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICB2YXIgaHRtbCA9IFwiXCI7Jyk7XG4vLyAgICAgICAgIGVhY2goYU5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChhTm9kZUNoaWxkKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KGFOb2RlQ29tcGlsZXIuY29tcGlsZShhTm9kZUNoaWxkLCBzb3VyY2VCdWZmZXIsIG93bmVyKSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIHJldHVybiBodG1sOycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9Jyk7XG4vLyBcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICB2YXIgJGdpdmVuU2xvdCA9IFtdOycpO1xuLy8gXG4vLyAgICAgICAgIHZhciBuYW1lUHJvcCA9IGdldEFOb2RlUHJvcChhTm9kZSwgJ25hbWUnKTtcbi8vICAgICAgICAgaWYgKG5hbWVQcm9wKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd2YXIgJHNsb3ROYW1lID0gJyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIobmFtZVByb3AuZXhwcikgKyAnOycpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygndmFyICRzbG90TmFtZSA9IG51bGw7Jyk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd2YXIgJGN0eEdpdmVuU2xvdHMgPSBjb21wb25lbnRDdHguZ2l2ZW5TbG90czsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnZm9yICh2YXIgJGkgPSAwOyAkaSA8ICRjdHhHaXZlblNsb3RzLmxlbmd0aDsgJGkrKykgeycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIGlmICgkY3R4R2l2ZW5TbG90c1skaV1bMV0gPT0gJHNsb3ROYW1lKSB7Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgICAkZ2l2ZW5TbG90LnB1c2goJGN0eEdpdmVuU2xvdHNbJGldWzBdKTsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICB9Jyk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vIFxuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ3ZhciAkaXNJbnNlcnRlZCA9ICRnaXZlblNsb3QubGVuZ3RoID4gMDsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnaWYgKCEkaXNJbnNlcnRlZCkgeyAkZ2l2ZW5TbG90LnB1c2goJGRlZmF1bHRTbG90UmVuZGVyKTsgfScpO1xuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ3ZhciAkc2xvdEN0eCA9ICRpc0luc2VydGVkID8gY29tcG9uZW50Q3R4Lm93bmVyIDogY29tcG9uZW50Q3R4OycpO1xuLy8gICAgICAgICBpZiAoYU5vZGUudmFycykge1xuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJHNsb3RDdHggPSB7ZGF0YTogZXh0ZW5kKHt9LCAkc2xvdEN0eC5kYXRhKSwgZmlsdGVyczogJHNsb3RDdHguZmlsdGVycywgY2FsbEZpbHRlcjogJHNsb3RDdHguY2FsbEZpbHRlcn07Jyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbi8vICAgICAgICAgICAgIGVhY2goYU5vZGUudmFycywgZnVuY3Rpb24gKHZhckl0ZW0pIHtcbi8vICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KFxuLy8gICAgICAgICAgICAgICAgICAgICAnJHNsb3RDdHguZGF0YVtcIicgKyB2YXJJdGVtLm5hbWUgKyAnXCJdID0gJ1xuLy8gICAgICAgICAgICAgICAgICAgICArIGNvbXBpbGVFeHByU291cmNlLmV4cHIodmFySXRlbS5leHByKVxuLy8gICAgICAgICAgICAgICAgICAgICArICc7J1xuLy8gICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2ZvciAodmFyICRyZW5kZXJJbmRleCA9IDA7ICRyZW5kZXJJbmRleCA8ICRnaXZlblNsb3QubGVuZ3RoOyAkcmVuZGVySW5kZXgrKykgeycpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIGh0bWwgKz0gJGdpdmVuU2xvdFskcmVuZGVySW5kZXhdKCRzbG90Q3R4KTsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnfScpO1xuLy8gXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30pKCk7Jyk7XG4vLyAgICAgfSxcbi8vIFxuLy8gICAgIC8qKlxuLy8gICAgICAqIOe8luivkeaZrumAmuiKgueCuVxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtIHtBTm9kZX0gYU5vZGUg6IqC54K55a+56LGhXG4vLyAgICAgICogQHBhcmFtIHtDb21waWxlU291cmNlQnVmZmVyfSBzb3VyY2VCdWZmZXIg57yW6K+R5rqQ56CB55qE5Lit6Ze0YnVmZmVyXG4vLyAgICAgICogQHBhcmFtIHtDb21wb25lbnR9IG93bmVyIOaJgOWxnue7hOS7tuWunuS+i+eOr+Wig1xuLy8gICAgICAqIEBwYXJhbSB7T2JqZWN0fSBleHRyYSDnvJbor5HmiYDpnIDnmoTkuIDkupvpop3lpJbkv6Hmga9cbi8vICAgICAgKi9cbi8vICAgICBjb21waWxlRWxlbWVudDogZnVuY3Rpb24gKGFOb2RlLCBzb3VyY2VCdWZmZXIsIG93bmVyLCBleHRyYSkge1xuLy8gICAgICAgICBleHRyYSA9IGV4dHJhIHx8IHt9O1xuLy8gICAgICAgICAvLyBpZiAoYU5vZGUudGFnTmFtZSA9PT0gJ29wdGlvbidcbi8vICAgICAgICAgLy8gICAgICYmICFnZXRBTm9kZVByb3AoYU5vZGUsICd2YWx1ZScpXG4vLyAgICAgICAgIC8vICAgICAmJiBhTm9kZS5jaGlsZHJlblswXVxuLy8gICAgICAgICAvLyApIHtcbi8vICAgICAgICAgLy8gICAgIGFOb2RlLnByb3BzLnB1c2goe1xuLy8gICAgICAgICAvLyAgICAgICAgIG5hbWU6ICd2YWx1ZScsXG4vLyAgICAgICAgIC8vICAgICAgICAgZXhwcjogYU5vZGUuY2hpbGRyZW5bMF0udGV4dEV4cHJcbi8vICAgICAgICAgLy8gICAgIH0pO1xuLy8gICAgICAgICAvLyB9XG4vLyBcbi8vICAgICAgICAgZWxlbWVudFNvdXJjZUNvbXBpbGVyLnRhZ1N0YXJ0KFxuLy8gICAgICAgICAgICAgc291cmNlQnVmZmVyLFxuLy8gICAgICAgICAgICAgYU5vZGUudGFnTmFtZSxcbi8vICAgICAgICAgICAgIGFOb2RlLnByb3BzLFxuLy8gICAgICAgICAgICAgZXh0cmEucHJvcFxuLy8gICAgICAgICApO1xuLy8gXG4vLyAgICAgICAgIGVsZW1lbnRTb3VyY2VDb21waWxlci5pbm5lcihzb3VyY2VCdWZmZXIsIGFOb2RlLCBvd25lcik7XG4vLyAgICAgICAgIGVsZW1lbnRTb3VyY2VDb21waWxlci50YWdFbmQoc291cmNlQnVmZmVyLCBhTm9kZS50YWdOYW1lKTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgLyoqXG4vLyAgICAgICog57yW6K+R57uE5Lu26IqC54K5XG4vLyAgICAgICpcbi8vICAgICAgKiBAcGFyYW0ge0FOb2RlfSBhTm9kZSDoioLngrnlr7nosaFcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBpbGVTb3VyY2VCdWZmZXJ9IHNvdXJjZUJ1ZmZlciDnvJbor5HmupDnoIHnmoTkuK3pl7RidWZmZXJcbi8vICAgICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gb3duZXIg5omA5bGe57uE5Lu25a6e5L6L546v5aKDXG4vLyAgICAgICogQHBhcmFtIHtPYmplY3R9IGV4dHJhIOe8luivkeaJgOmcgOeahOS4gOS6m+mineWkluS/oeaBr1xuLy8gICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGV4dHJhLkNvbXBvbmVudENsYXNzIOWvueW6lOe7hOS7tuexu1xuLy8gICAgICAqL1xuLy8gICAgIGNvbXBpbGVDb21wb25lbnQ6IGZ1bmN0aW9uIChhTm9kZSwgc291cmNlQnVmZmVyLCBvd25lciwgZXh0cmEpIHtcbi8vICAgICAgICAgaWYgKGFOb2RlKSB7XG4vLyAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd2YXIgJHNsb3ROYW1lID0gbnVsbDsnKTtcbi8vICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ3ZhciAkZ2l2ZW5TbG90cyA9IFtdOycpO1xuLy8gICAgICAgICAgICAgZWFjaChhTm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHNsb3RCaW5kID0gIWNoaWxkLnRleHRFeHByICYmIGdldEFOb2RlUHJvcChjaGlsZCwgJ3Nsb3QnKTtcbi8vICAgICAgICAgICAgICAgICBpZiAoc2xvdEJpbmQpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJHNsb3ROYW1lID0gJyArIGNvbXBpbGVFeHByU291cmNlLmV4cHIoc2xvdEJpbmQuZXhwcikgKyAnOycpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCckZ2l2ZW5TbG90cy5wdXNoKFtmdW5jdGlvbiAoY29tcG9uZW50Q3R4KSB7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgdmFyIGh0bWwgPSBcIlwiOycpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KGFOb2RlQ29tcGlsZXIuY29tcGlsZShjaGlsZCwgc291cmNlQnVmZmVyLCBvd25lcikpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIHJldHVybiBodG1sOycpO1xuLy8gICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCd9LCAkc2xvdE5hbWVdKTsnKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyRnaXZlblNsb3RzLnB1c2goW2Z1bmN0aW9uIChjb21wb25lbnRDdHgpIHsnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnICB2YXIgaHRtbCA9IFwiXCI7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoYU5vZGVDb21waWxlci5jb21waWxlKGNoaWxkLCBzb3VyY2VCdWZmZXIsIG93bmVyKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgcmV0dXJuIGh0bWw7Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ31dKTsnKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHZhciBDb21wb25lbnRDbGFzcyA9IGV4dHJhLkNvbXBvbmVudENsYXNzO1xuLy8gICAgICAgICB2YXIgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudENsYXNzKHtcbi8vICAgICAgICAgICAgIGFOb2RlOiBhTm9kZSxcbi8vICAgICAgICAgICAgIG93bmVyOiBvd25lcixcbi8vICAgICAgICAgICAgIHN1YlRhZzogYU5vZGUudGFnTmFtZVxuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICB2YXIgZ2l2ZW5EYXRhID0gW107XG4vLyBcbi8vICAgICAgICAgZWFjaChjb21wb25lbnQuYmluZHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4vLyAgICAgICAgICAgICBnaXZlbkRhdGEucHVzaChcbi8vICAgICAgICAgICAgICAgICBjb21waWxlRXhwclNvdXJjZS5zdHJpbmdMaXRlcmFsaXplKHByb3AubmFtZSlcbi8vICAgICAgICAgICAgICAgICArICc6J1xuLy8gICAgICAgICAgICAgICAgICsgY29tcGlsZUV4cHJTb3VyY2UuZXhwcihwcm9wLmV4cHIpXG4vLyAgICAgICAgICAgICApO1xuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdodG1sICs9ICgnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJlbmRlcmVyU3RhcnQoKTtcbi8vICAgICAgICAgY29tcGlsZUNvbXBvbmVudFNvdXJjZShzb3VyY2VCdWZmZXIsIGNvbXBvbmVudCwgZXh0cmEgJiYgZXh0cmEucHJvcCk7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5hZGRSZW5kZXJlckVuZCgpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcpKHsnICsgZ2l2ZW5EYXRhLmpvaW4oJyxcXG4nKSArICd9LCBjb21wb25lbnRDdHgsICRnaXZlblNsb3RzKTsnKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmFkZFJhdygnJGdpdmVuU2xvdHMgPSBudWxsOycpO1xuLy8gICAgIH1cbi8vIH07XG4vLyAvKiBlc2xpbnQtZGlzYWJsZSBndWFyZC1mb3ItaW4gKi9cbi8vIFxuLy8gLyoqXG4vLyAgKiDnlJ/miJDnu4Tku7YgcmVuZGVyZXIg5pe2IGN0eCDlr7nosaHmnoTlu7rnmoTku6PnoIFcbi8vICAqXG4vLyAgKiBAaW5uZXJcbi8vICAqIEBwYXJhbSB7Q29tcGlsZVNvdXJjZUJ1ZmZlcn0gc291cmNlQnVmZmVyIOe8luivkea6kOeggeeahOS4remXtGJ1ZmZlclxuLy8gICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCDnu4Tku7blrp7kvotcbi8vICAqIEBwYXJhbSB7c3RyaW5nP30gZXh0cmFQcm9wIOmineWklueahOWxnuaAp+S4slxuLy8gICovXG4vLyBmdW5jdGlvbiBjb21waWxlQ29tcG9uZW50U291cmNlKHNvdXJjZUJ1ZmZlciwgY29tcG9uZW50LCBleHRyYVByb3ApIHtcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KGdlbkNvbXBvbmVudENvbnRleHRDb2RlKGNvbXBvbmVudCkpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2NvbXBvbmVudEN0eC5vd25lciA9IHBhcmVudEN0eDsnKTtcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCdjb21wb25lbnRDdHguZ2l2ZW5TbG90cyA9IGdpdmVuU2xvdHM7Jyk7XG4vLyBcbi8vIFxuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2RhdGEgPSBleHRlbmQoY29tcG9uZW50Q3R4LmRhdGEsIGRhdGEpOycpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ2ZvciAodmFyICRpID0gMDsgJGkgPCBjb21wb25lbnRDdHguY29tcHV0ZWROYW1lcy5sZW5ndGg7ICRpKyspIHsnKTtcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmF3KCcgIHZhciAkY29tcHV0ZWROYW1lID0gY29tcG9uZW50Q3R4LmNvbXB1dGVkTmFtZXNbJGldOycpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJyAgZGF0YVskY29tcHV0ZWROYW1lXSA9IGNvbXBvbmVudEN0eC5jb21wdXRlZFskY29tcHV0ZWROYW1lXSgpOycpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoJ30nKTtcbi8vIFxuLy8gICAgIGV4dHJhUHJvcCA9IGV4dHJhUHJvcCB8fCAnJztcbi8vIFxuLy8gICAgIHZhciBldmVudERlY2xhcmF0aW9ucyA9IFtdO1xuLy8gICAgIGZvciAodmFyIGtleSBpbiBjb21wb25lbnQubGlzdGVuZXJzKSB7XG4vLyAgICAgICAgIGVhY2goY29tcG9uZW50Lmxpc3RlbmVyc1trZXldLCBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbi8vICAgICAgICAgICAgIGlmIChsaXN0ZW5lci5kZWNsYXJhdGlvbikge1xuLy8gICAgICAgICAgICAgICAgIGV2ZW50RGVjbGFyYXRpb25zLnB1c2gobGlzdGVuZXIuZGVjbGFyYXRpb24pO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG4vLyBcbi8vICAgICBlbGVtZW50U291cmNlQ29tcGlsZXIudGFnU3RhcnQoXG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlcixcbi8vICAgICAgICAgY29tcG9uZW50LnRhZ05hbWUsXG4vLyAgICAgICAgIGNvbXBvbmVudC5hTm9kZS5wcm9wcyxcbi8vICAgICAgICAgZXh0cmFQcm9wXG4vLyAgICAgKTtcbi8vIFxuLy8gICAgIGlmICghY29tcG9uZW50Lm93bmVyKSB7XG4vLyAgICAgICAgIHNvdXJjZUJ1ZmZlci5qb2luU3RyaW5nKCc8IS0tcy1kYXRhOicpO1xuLy8gICAgICAgICBzb3VyY2VCdWZmZXIuam9pbkRhdGFTdHJpbmdpZnkoKTtcbi8vICAgICAgICAgc291cmNlQnVmZmVyLmpvaW5TdHJpbmcoJy0tPicpO1xuLy8gICAgIH1cbi8vIFxuLy8gXG4vLyBcbi8vICAgICBlbGVtZW50U291cmNlQ29tcGlsZXIuaW5uZXIoc291cmNlQnVmZmVyLCBjb21wb25lbnQuYU5vZGUsIGNvbXBvbmVudCk7XG4vLyAgICAgZWxlbWVudFNvdXJjZUNvbXBpbGVyLnRhZ0VuZChzb3VyY2VCdWZmZXIsIGNvbXBvbmVudC50YWdOYW1lKTtcbi8vIH1cbi8vIFxuLy8gdmFyIHN0cmluZ2lmaWVyID0ge1xuLy8gICAgIG9iajogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICB2YXIgcHJlZml4Q29tbWE7XG4vLyAgICAgICAgIHZhciByZXN1bHQgPSAneyc7XG4vLyBcbi8vICAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2Vba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAgICAgICAgICAgICBjb250aW51ZTtcbi8vICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgaWYgKHByZWZpeENvbW1hKSB7XG4vLyAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcsJztcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIHByZWZpeENvbW1hID0gMTtcbi8vIFxuLy8gICAgICAgICAgICAgcmVzdWx0ICs9IGNvbXBpbGVFeHByU291cmNlLnN0cmluZ0xpdGVyYWxpemUoa2V5KSArICc6JyArIHN0cmluZ2lmaWVyLmFueShzb3VyY2Vba2V5XSk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ30nO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICBhcnI6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgdmFyIHByZWZpeENvbW1hO1xuLy8gICAgICAgICB2YXIgcmVzdWx0ID0gJ1snO1xuLy8gXG4vLyAgICAgICAgIGVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUpIHtcbi8vICAgICAgICAgICAgIGlmIChwcmVmaXhDb21tYSkge1xuLy8gICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBwcmVmaXhDb21tYSA9IDE7XG4vLyBcbi8vICAgICAgICAgICAgIHJlc3VsdCArPSBzdHJpbmdpZmllci5hbnkodmFsdWUpO1xuLy8gICAgICAgICB9KTtcbi8vIFxuLy8gICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ10nO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICBzdHI6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgcmV0dXJuIGNvbXBpbGVFeHByU291cmNlLnN0cmluZ0xpdGVyYWxpemUoc291cmNlKTtcbi8vICAgICB9LFxuLy8gXG4vLyAgICAgZGF0ZTogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICByZXR1cm4gJ25ldyBEYXRlKCcgKyBzb3VyY2UuZ2V0VGltZSgpICsgJyknO1xuLy8gICAgIH0sXG4vLyBcbi8vICAgICBhbnk6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgc3dpdGNoICh0eXBlb2Ygc291cmNlKSB7XG4vLyAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZmllci5zdHIoc291cmNlKTtcbi8vIFxuLy8gICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gJycgKyBzb3VyY2U7XG4vLyBcbi8vICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UgPyAndHJ1ZScgOiAnZmFsc2UnO1xuLy8gXG4vLyAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuLy8gICAgICAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZpZXIuYXJyKHNvdXJjZSk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIERhdGUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmaWVyLmRhdGUoc291cmNlKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZpZXIub2JqKHNvdXJjZSk7XG4vLyAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBTdHJpbmdpZnk6JyArIHNvdXJjZSk7XG4vLyAgICAgfVxuLy8gfTtcbi8vIFxuLy8gLyoqXG4vLyAgKiDnlJ/miJDnu4Tku7YgcmVuZGVyZXIg5pe2IGN0eCDlr7nosaHmnoTlu7rnmoTku6PnoIFcbi8vICAqXG4vLyAgKiBAaW5uZXJcbi8vICAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnQg57uE5Lu25a6e5L6LXG4vLyAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgKi9cbi8vIGZ1bmN0aW9uIGdlbkNvbXBvbmVudENvbnRleHRDb2RlKGNvbXBvbmVudCkge1xuLy8gICAgIHZhciBjb2RlID0gWyd2YXIgY29tcG9uZW50Q3R4ID0geyddO1xuLy8gXG4vLyAgICAgLy8gZ2l2ZW4gYW5vZGVcbi8vICAgICBjb2RlLnB1c2goJ2dpdmVuU2xvdHM6IFtdLCcpO1xuLy8gXG4vLyAgICAgLy8gZmlsdGVyc1xuLy8gICAgIGNvZGUucHVzaCgnZmlsdGVyczogeycpO1xuLy8gICAgIHZhciBmaWx0ZXJDb2RlID0gW107XG4vLyAgICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudC5maWx0ZXJzKSB7XG4vLyAgICAgICAgIHZhciBmaWx0ZXIgPSBjb21wb25lbnQuZmlsdGVyc1trZXldO1xuLy8gXG4vLyAgICAgICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4vLyAgICAgICAgICAgICBmaWx0ZXJDb2RlLnB1c2goa2V5ICsgJzogJyArIGZpbHRlci50b1N0cmluZygpKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBjb2RlLnB1c2goZmlsdGVyQ29kZS5qb2luKCcsJykpO1xuLy8gICAgIGNvZGUucHVzaCgnfSwnKTtcbi8vIFxuLy8gICAgIGNvZGUucHVzaChcbi8vICAgICAgICAgJ2NhbGxGaWx0ZXI6IGZ1bmN0aW9uIChuYW1lLCBhcmdzKSB7Jyxcbi8vICAgICAgICAgJyAgICB2YXIgZmlsdGVyID0gdGhpcy5maWx0ZXJzW25hbWVdIHx8IERFRkFVTFRfRklMVEVSU1tuYW1lXTsnLFxuLy8gICAgICAgICAnICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSBcImZ1bmN0aW9uXCIpIHsnLFxuLy8gICAgICAgICAnICAgICAgICByZXR1cm4gZmlsdGVyLmFwcGx5KHRoaXMsIGFyZ3MpOycsXG4vLyAgICAgICAgICcgICAgfScsXG4vLyAgICAgICAgICd9LCdcbi8vICAgICApO1xuLy8gXG4vLyAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcmVkZWNsYXJlICovXG4vLyAgICAgLy8gY29tcHV0ZWQgb2JqXG4vLyAgICAgY29kZS5wdXNoKCdjb21wdXRlZDogeycpO1xuLy8gICAgIHZhciBjb21wdXRlZENvZGUgPSBbXTtcbi8vICAgICBmb3IgKHZhciBrZXkgaW4gY29tcG9uZW50LmNvbXB1dGVkKSB7XG4vLyAgICAgICAgIHZhciBjb21wdXRlZCA9IGNvbXBvbmVudC5jb21wdXRlZFtrZXldO1xuLy8gXG4vLyAgICAgICAgIGlmICh0eXBlb2YgY29tcHV0ZWQgPT09ICdmdW5jdGlvbicpIHtcbi8vICAgICAgICAgICAgIGNvbXB1dGVkQ29kZS5wdXNoKGtleSArICc6ICdcbi8vICAgICAgICAgICAgICAgICArIGNvbXB1dGVkLnRvU3RyaW5nKCkucmVwbGFjZShcbi8vICAgICAgICAgICAgICAgICAgICAgL3RoaXMuZGF0YS5nZXRcXCgoW15cXCldKylcXCkvZyxcbi8vICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBleHByTGl0ZXJhbCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cHJTdHIgPSAobmV3IEZ1bmN0aW9uKCdyZXR1cm4gJyArIGV4cHJMaXRlcmFsKSkoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHByID0gcGFyc2VFeHByKGV4cHJTdHIpO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGlsZUV4cHJTb3VyY2UuZXhwcihleHByKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgICk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29kZS5wdXNoKGNvbXB1dGVkQ29kZS5qb2luKCcsJykpO1xuLy8gICAgIGNvZGUucHVzaCgnfSwnKTtcbi8vIFxuLy8gICAgIC8vIGNvbXB1dGVkIG5hbWVzXG4vLyAgICAgY29kZS5wdXNoKCdjb21wdXRlZE5hbWVzOiBbJyk7XG4vLyAgICAgY29tcHV0ZWRDb2RlID0gW107XG4vLyAgICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudC5jb21wdXRlZCkge1xuLy8gICAgICAgICB2YXIgY29tcHV0ZWQgPSBjb21wb25lbnQuY29tcHV0ZWRba2V5XTtcbi8vIFxuLy8gICAgICAgICBpZiAodHlwZW9mIGNvbXB1dGVkID09PSAnZnVuY3Rpb24nKSB7XG4vLyAgICAgICAgICAgICBjb21wdXRlZENvZGUucHVzaCgnXCInICsga2V5ICsgJ1wiJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29kZS5wdXNoKGNvbXB1dGVkQ29kZS5qb2luKCcsJykpO1xuLy8gICAgIGNvZGUucHVzaCgnXSwnKTtcbi8vICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXJlZGVjbGFyZSAqL1xuLy8gXG4vLyAgICAgLy8gZGF0YVxuLy8gICAgIGNvZGUucHVzaCgnZGF0YTogJyArIHN0cmluZ2lmaWVyLmFueShjb21wb25lbnQuZGF0YS5nZXQoKSkgKyAnLCcpO1xuLy8gXG4vLyAgICAgLy8gdGFnTmFtZVxuLy8gICAgIGNvZGUucHVzaCgndGFnTmFtZTogXCInICsgY29tcG9uZW50LnRhZ05hbWUgKyAnXCInKTtcbi8vICAgICBjb2RlLnB1c2goJ307Jyk7XG4vLyBcbi8vICAgICByZXR1cm4gY29kZS5qb2luKCdcXG4nKTtcbi8vIH1cbi8vIFxuLy8gLyogZXNsaW50LWVuYWJsZSBndWFyZC1mb3ItaW4gKi9cbi8vIFxuLy8gLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIC8qIGVzbGludC1kaXNhYmxlIGZlY3MtY2FtZWxjYXNlICovXG4vLyBcbi8vIC8qKlxuLy8gICog57uE5Lu257yW6K+R55qE5qih5p2/5Ye95pWwXG4vLyAgKlxuLy8gICogQGlubmVyXG4vLyAgKi9cbi8vIGZ1bmN0aW9uIGNvbXBvbmVudENvbXBpbGVQcmVDb2RlKCkge1xuLy8gICAgIHZhciAkdmVyc2lvbiA9ICczLjUuNyc7XG4vLyBcbi8vICAgICBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcbi8vICAgICAgICAgaWYgKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbi8vICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBzb3VyY2Vba2V5XTtcbi8vICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuLy8gICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgcmV0dXJuIHRhcmdldDtcbi8vICAgICB9XG4vLyBcbi8vICAgICBmdW5jdGlvbiBlYWNoKGFycmF5LCBpdGVyYXRvcikge1xuLy8gICAgICAgICBpZiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoID4gMCkge1xuLy8gICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IoYXJyYXlbaV0sIGkpID09PSBmYWxzZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyBcbi8vICAgICBmdW5jdGlvbiBjb250YWlucyhhcnJheSwgdmFsdWUpIHtcbi8vICAgICAgICAgdmFyIHJlc3VsdDtcbi8vICAgICAgICAgZWFjaChhcnJheSwgZnVuY3Rpb24gKGl0ZW0pIHtcbi8vICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW0gPT09IHZhbHVlO1xuLy8gICAgICAgICAgICAgcmV0dXJuICFyZXN1bHQ7XG4vLyAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgIHJldHVybiByZXN1bHQ7XG4vLyAgICAgfVxuLy8gXG4vLyAgICAgdmFyIEhUTUxfRU5USVRZID0ge1xuLy8gICAgICAgICAvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4vLyAgICAgICAgICcmJzogJyZhbXA7Jyxcbi8vICAgICAgICAgJzwnOiAnJmx0OycsXG4vLyAgICAgICAgICc+JzogJyZndDsnLFxuLy8gICAgICAgICAnXCInOiAnJnF1b3Q7Jyxcbi8vICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgcXVvdGVzICovXG4vLyAgICAgICAgIFwiJ1wiOiAnJiMzOTsnXG4vLyAgICAgICAgIC8qIGVzbGludC1lbmFibGUgcXVvdGVzICovXG4vLyAgICAgICAgIC8qIGpzaGludCBpZ25vcmU6ZW5kICovXG4vLyAgICAgfTtcbi8vIFxuLy8gICAgIGZ1bmN0aW9uIGh0bWxGaWx0ZXJSZXBsYWNlcihjKSB7XG4vLyAgICAgICAgIHJldHVybiBIVE1MX0VOVElUWVtjXTtcbi8vICAgICB9XG4vLyBcbi8vICAgICBmdW5jdGlvbiBlc2NhcGVIVE1MKHNvdXJjZSkge1xuLy8gICAgICAgICBpZiAoc291cmNlID09IG51bGwpIHtcbi8vICAgICAgICAgICAgIHJldHVybiAnJztcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHJldHVybiBTdHJpbmcoc291cmNlKS5yZXBsYWNlKC9bJjw+XCInXS9nLCBodG1sRmlsdGVyUmVwbGFjZXIpO1xuLy8gICAgIH1cbi8vIFxuLy8gICAgIHZhciBERUZBVUxUX0ZJTFRFUlMgPSB7XG4vLyAgICAgICAgIHVybDogZW5jb2RlVVJJQ29tcG9uZW50LFxuLy8gICAgICAgICBfY2xhc3M6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2Uuam9pbignICcpO1xuLy8gICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICByZXR1cm4gc291cmNlO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBfc3R5bGU6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xuLy8gICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbi8vICAgICAgICAgICAgICAgICBpZiAoc291cmNlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0ga2V5ICsgJzonICsgc291cmNlW2tleV0gKyAnOyc7XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4vLyAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgIHJldHVybiBzb3VyY2UgfHwgJyc7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIF9zZXA6IGZ1bmN0aW9uIChzb3VyY2UsIHNlcCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSA/IHNlcCArIHNvdXJjZSA6ICcnO1xuLy8gICAgICAgICB9XG4vLyAgICAgfTtcbi8vIFxuLy8gICAgIGZ1bmN0aW9uIGF0dHJGaWx0ZXIobmFtZSwgdmFsdWUpIHtcbi8vICAgICAgICAgaWYgKHZhbHVlKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gJyAnICsgbmFtZSArICc9XCInICsgdmFsdWUgKyAnXCInO1xuLy8gICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgcmV0dXJuICcnO1xuLy8gICAgIH1cbi8vIFxuLy8gICAgIGZ1bmN0aW9uIGJvb2xBdHRyRmlsdGVyKG5hbWUsIHZhbHVlKSB7XG4vLyAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJyAmJiB2YWx1ZSAhPT0gJzAnKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gJyAnICsgbmFtZTtcbi8vICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgIHJldHVybiAnJztcbi8vICAgICB9XG4vLyBcbi8vICAgICBmdW5jdGlvbiBzdHJpbmdMaXRlcmFsaXplKHNvdXJjZSkge1xuLy8gICAgICAgICByZXR1cm4gJ1wiJ1xuLy8gICAgICAgICAgICAgKyBzb3VyY2Vcbi8vICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFx4NUMvZywgJ1xcXFxcXFxcJylcbi8vICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xceDBBL2csICdcXFxcbicpXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xceDA5L2csICdcXFxcdCcpXG4vLyAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xceDBEL2csICdcXFxccicpXG4vLyAgICAgICAgICAgICArICdcIic7XG4vLyAgICAgfVxuLy8gXG4vLyAgICAgdmFyIHN0cmluZ2lmaWVyID0ge1xuLy8gICAgICAgICBvYmo6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbi8vICAgICAgICAgICAgIHZhciBwcmVmaXhDb21tYTtcbi8vICAgICAgICAgICAgIHZhciByZXN1bHQgPSAneyc7XG4vLyBcbi8vICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2Vba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgIGlmIChwcmVmaXhDb21tYSkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJywnO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBwcmVmaXhDb21tYSA9IDE7XG4vLyBcbi8vICAgICAgICAgICAgICAgICByZXN1bHQgKz0gc3RyaW5nTGl0ZXJhbGl6ZShrZXkpICsgJzonICsgc3RyaW5naWZpZXIuYW55KHNvdXJjZVtrZXldKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ30nO1xuLy8gICAgICAgICB9LFxuLy8gXG4vLyAgICAgICAgIGFycjogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgdmFyIHByZWZpeENvbW1hO1xuLy8gICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICdbJztcbi8vIFxuLy8gICAgICAgICAgICAgZWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICAgIGlmIChwcmVmaXhDb21tYSkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJywnO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBwcmVmaXhDb21tYSA9IDE7XG4vLyBcbi8vICAgICAgICAgICAgICAgICByZXN1bHQgKz0gc3RyaW5naWZpZXIuYW55KHZhbHVlKTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gXG4vLyAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ10nO1xuLy8gICAgICAgICB9LFxuLy8gXG4vLyAgICAgICAgIHN0cjogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHN0cmluZ0xpdGVyYWxpemUoc291cmNlKTtcbi8vICAgICAgICAgfSxcbi8vIFxuLy8gICAgICAgICBkYXRlOiBmdW5jdGlvbiAoc291cmNlKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gJ25ldyBEYXRlKCcgKyBzb3VyY2UuZ2V0VGltZSgpICsgJyknO1xuLy8gICAgICAgICB9LFxuLy8gXG4vLyAgICAgICAgIGFueTogZnVuY3Rpb24gKHNvdXJjZSkge1xuLy8gICAgICAgICAgICAgc3dpdGNoICh0eXBlb2Ygc291cmNlKSB7XG4vLyAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmaWVyLnN0cihzb3VyY2UpO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnICsgc291cmNlO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UgPyAndHJ1ZScgOiAnZmFsc2UnO1xuLy8gXG4vLyAgICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0Jzpcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyBcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZpZXIuYXJyKHNvdXJjZSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgRGF0ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmaWVyLmRhdGUoc291cmNlKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gXG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZmllci5vYmooc291cmNlKTtcbi8vICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgU3RyaW5naWZ5OicgKyBzb3VyY2UpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfTtcbi8vIH1cbi8vIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIC8qIGVzbGludC1lbmFibGUgZmVjcy1jYW1lbGNhc2UgKi9cbi8vIFxuLy8gLyoqXG4vLyAgKiDlsIbnu4Tku7bnvJbor5HmiJAgcmVuZGVyIOaWueazleeahCBqcyDmupDnoIFcbi8vICAqXG4vLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRDbGFzcyDnu4Tku7bnsbtcbi8vICAqIEByZXR1cm4ge3N0cmluZ31cbi8vICAqL1xuLy8gZnVuY3Rpb24gY29tcGlsZUpTU291cmNlKENvbXBvbmVudENsYXNzKSB7XG4vLyAgICAgdmFyIHNvdXJjZUJ1ZmZlciA9IG5ldyBDb21waWxlU291cmNlQnVmZmVyKCk7XG4vLyBcbi8vICAgICBzb3VyY2VCdWZmZXIuYWRkUmVuZGVyZXJTdGFydCgpO1xuLy8gICAgIHNvdXJjZUJ1ZmZlci5hZGRSYXcoXG4vLyAgICAgICAgIGNvbXBvbmVudENvbXBpbGVQcmVDb2RlLnRvU3RyaW5nKClcbi8vICAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbi8vICAgICAgICAgICAgIC5zbGljZSgxKVxuLy8gICAgICAgICAgICAgLmpvaW4oJ1xcbicpXG4vLyAgICAgICAgICAgICAucmVwbGFjZSgvXFx9XFxzKiQvLCAnJylcbi8vICAgICApO1xuLy8gXG4vLyAgICAgLy8g5YWI5Yid5aeL5YyW5Liq5a6e5L6L77yM6K6p5qih5p2/57yW6K+R5oiQIEFOb2Rl77yM5bm25LiU6IO96I635b6X5Yid5aeL5YyW5pWw5o2uXG4vLyAgICAgdmFyIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRDbGFzcygpO1xuLy8gXG4vLyAgICAgY29tcGlsZUNvbXBvbmVudFNvdXJjZShzb3VyY2VCdWZmZXIsIGNvbXBvbmVudCk7XG4vLyAgICAgc291cmNlQnVmZmVyLmFkZFJlbmRlcmVyRW5kKCk7XG4vLyAgICAgcmV0dXJuIHNvdXJjZUJ1ZmZlci50b0NvZGUoKTtcbi8vIH1cbi8vICNbZW5kXVxuXG4vLyBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjb21waWxlSlNTb3VyY2U7XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gICAgIHZhciBuZXh0VGljayA9IHJlcXVpcmUoJy4vdXRpbC9uZXh0LXRpY2snKTtcbi8vICAgICB2YXIgaW5oZXJpdHMgPSByZXF1aXJlKCcuL3V0aWwvaW5oZXJpdHMnKTtcbi8vICAgICB2YXIgcGFyc2VUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vcGFyc2VyL3BhcnNlLXRlbXBsYXRlJyk7XG4vLyAgICAgdmFyIHBhcnNlRXhwciA9IHJlcXVpcmUoJy4vcGFyc2VyL3BhcnNlLWV4cHInKTtcbi8vICAgICB2YXIgRXhwclR5cGUgPSByZXF1aXJlKCcuL3BhcnNlci9leHByLXR5cGUnKTtcbi8vICAgICB2YXIgTGlmZUN5Y2xlID0gcmVxdWlyZSgnLi92aWV3L2xpZmUtY3ljbGUnKTtcbi8vICAgICB2YXIgTm9kZVR5cGUgPSByZXF1aXJlKCcuL3ZpZXcvbm9kZS10eXBlJyk7XG4vLyAgICAgdmFyIENvbXBvbmVudCA9IHJlcXVpcmUoJy4vdmlldy9jb21wb25lbnQnKTtcbi8vICAgICB2YXIgY29tcGlsZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vdmlldy9jb21waWxlLWNvbXBvbmVudCcpO1xuLy8gICAgIHZhciBkZWZpbmVDb21wb25lbnQgPSByZXF1aXJlKCcuL3ZpZXcvZGVmaW5lLWNvbXBvbmVudCcpO1xuLy8gICAgIHZhciBlbWl0RGV2dG9vbCA9IHJlcXVpcmUoJy4vdXRpbC9lbWl0LWRldnRvb2wnKTtcbi8vICAgICB2YXIgY29tcGlsZUpTU291cmNlID0gcmVxdWlyZSgnLi92aWV3L2NvbXBpbGUtanMtc291cmNlJyk7XG4vLyAgICAgdmFyIERhdGEgPSByZXF1aXJlKCcuL3J1bnRpbWUvZGF0YScpO1xuLy8gICAgIHZhciBldmFsRXhwciA9IHJlcXVpcmUoJy4vcnVudGltZS9ldmFsLWV4cHInKTtcbi8vICAgICB2YXIgRGF0YVR5cGVzID0gcmVxdWlyZSgnLi91dGlsL2RhdGEtdHlwZXMnKTtcblxuXG4gICAgdmFyIHNhbiA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNhbueJiOacrOWPt1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmVyc2lvbjogJzMuNS43JyxcblxuICAgICAgICAvLyAjW2JlZ2luXSBkZXZ0b29sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmmK/lkKblvIDlkK/osIPor5XjgILlvIDlkK/osIPor5Xml7YgZGV2dG9vbCDkvJrlt6XkvZxcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgLy8gI1tiZWdpbl0gc3NyXG4vLyAgICAgICAgIC8qKlxuLy8gICAgICAgICAgKiDlsIbnu4Tku7bnsbvnvJbor5HmiJAgcmVuZGVyZXIg5pa55rOVXG4vLyAgICAgICAgICAqXG4vLyAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudENsYXNzIOe7hOS7tuexu1xuLy8gICAgICAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbihPYmplY3QpOnN0cmluZ31cbi8vICAgICAgICAgICovXG4vLyAgICAgICAgIGNvbXBpbGVUb1JlbmRlcmVyOiBmdW5jdGlvbiAoQ29tcG9uZW50Q2xhc3MpIHtcbi8vICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IENvbXBvbmVudENsYXNzLl9fc3NyUmVuZGVyZXI7XG4vLyBcbi8vICAgICAgICAgICAgIGlmICghcmVuZGVyZXIpIHtcbi8vICAgICAgICAgICAgICAgICB2YXIgY29kZSA9IGNvbXBpbGVKU1NvdXJjZShDb21wb25lbnRDbGFzcyk7XG4vLyAgICAgICAgICAgICAgICAgcmVuZGVyZXIgPSAobmV3IEZ1bmN0aW9uKCdyZXR1cm4gJyArIGNvZGUpKSgpO1xuLy8gICAgICAgICAgICAgICAgIENvbXBvbmVudENsYXNzLl9fc3NyUmVuZGVyZXIgPSByZW5kZXJlcjtcbi8vICAgICAgICAgICAgIH1cbi8vIFxuLy8gICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyO1xuLy8gICAgICAgICB9LFxuLy8gXG4vLyAgICAgICAgIC8qKlxuLy8gICAgICAgICAgKiDlsIbnu4Tku7bnsbvnvJbor5HmiJAgcmVuZGVyZXIg5pa55rOV55qE5rqQ5paH5Lu2XG4vLyAgICAgICAgICAqXG4vLyAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudENsYXNzIOe7hOS7tuexu1xuLy8gICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4vLyAgICAgICAgICAqL1xuLy8gICAgICAgICBjb21waWxlVG9Tb3VyY2U6IGNvbXBpbGVKU1NvdXJjZSxcbiAgICAgICAgLy8gI1tlbmRdXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOe7hOS7tuWfuuexu1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICAgICAqL1xuICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudCxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5Yib5bu657uE5Lu257G7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byDnu4Tku7bnsbvnmoTmlrnms5XooahcbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAgICAgICAqL1xuICAgICAgICBkZWZpbmVDb21wb25lbnQ6IGRlZmluZUNvbXBvbmVudCxcblxuICAgICAgICAvKipcbiAgICAgICAgICog57yW6K+R57uE5Lu257G744CC6aKE6Kej5p6QdGVtcGxhdGXlkoxjb21wb25lbnRzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudENsYXNzIOe7hOS7tuexu1xuICAgICAgICAgKi9cbiAgICAgICAgY29tcGlsZUNvbXBvbmVudDogY29tcGlsZUNvbXBvbmVudCxcblxuICAgICAgICAvKipcbiAgICAgICAgICog6Kej5p6QIHRlbXBsYXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBpbm5lclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIHRlbXBsYXRlIOa6kOeggVxuICAgICAgICAgKiBAcmV0dXJuIHtBTm9kZX1cbiAgICAgICAgICovXG4gICAgICAgIHBhcnNlVGVtcGxhdGU6IHBhcnNlVGVtcGxhdGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOino+aekOihqOi+vuW8j1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIOa6kOeggVxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBwYXJzZUV4cHI6IHBhcnNlRXhwcixcblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGo6L6+5byP57G75Z6L5p6a5Li+XG4gICAgICAgICAqXG4gICAgICAgICAqIEBjb25zdFxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgRXhwclR5cGU6IEV4cHJUeXBlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnlJ/lkb3lkajmnJ9cbiAgICAgICAgICovXG4gICAgICAgIExpZmVDeWNsZTogTGlmZUN5Y2xlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDoioLngrnnsbvlnotcbiAgICAgICAgICpcbiAgICAgICAgICogQGNvbnN0XG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBOb2RlVHlwZTogTm9kZVR5cGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWcqOS4i+S4gOS4quabtOaWsOWRqOacn+i/kOihjOWHveaVsFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiDopoHov5DooYznmoTlh73mlbBcbiAgICAgICAgICovXG4gICAgICAgIG5leHRUaWNrOiBuZXh0VGljayxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5pWw5o2u57G7XG4gICAgICAgICAqXG4gICAgICAgICAqIEBjbGFzc1xuICAgICAgICAgKiBAcGFyYW0ge09iamVjdD99IGRhdGEg5Yid5aeL5pWw5o2uXG4gICAgICAgICAqIEBwYXJhbSB7RGF0YT99IHBhcmVudCDniLbnuqfmlbDmja7lr7nosaFcbiAgICAgICAgICovXG4gICAgICAgIERhdGE6IERhdGEsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiuoeeul+ihqOi+vuW8j+eahOWAvFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXhwciDooajovr7lvI/lr7nosaFcbiAgICAgICAgICogQHBhcmFtIHtEYXRhfSBkYXRhIOaVsOaNruWvueixoVxuICAgICAgICAgKiBAcGFyYW0ge0NvbXBvbmVudD19IG93bmVyIOe7hOS7tuWvueixoe+8jOeUqOS6juihqOi+vuW8j+S4rWZpbHRlcueahOaJp+ihjFxuICAgICAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZXZhbEV4cHI6IGV2YWxFeHByLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmnoTlu7rnsbvkuYvpl7TnmoTnu6fmib/lhbPns7tcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3ViQ2xhc3Mg5a2Q57G75Ye95pWwXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1cGVyQ2xhc3Mg54i257G75Ye95pWwXG4gICAgICAgICAqL1xuICAgICAgICBpbmhlcml0czogaW5oZXJpdHMsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERhdGFUeXBlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgRGF0YVR5cGVzOiBEYXRhVHlwZXNcbiAgICB9O1xuXG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBGb3IgQ29tbW9uSlNcbiAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc2FuO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gRm9yIEFNRFxuICAgICAgICBkZWZpbmUoJ3NhbicsIFtdLCBzYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gRm9yIDxzY3JpcHQgc3JjPVwiLi4uXCJcbiAgICAgICAgcm9vdC5zYW4gPSBzYW47XG4gICAgfVxuXG4gICAgLy8gI1tiZWdpbl0gZGV2dG9vbFxuICAgIGVtaXREZXZ0b29sLnN0YXJ0KHNhbik7XG4gICAgLy8gI1tlbmRdXG59KSh0aGlzKTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlJmluZGV4PTAhLi9BcHAuc2FuXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlJmluZGV4PTAhLi9BcHAuc2FuXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vQXBwLnNhblwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlJmluZGV4PTAhLi9jaGVja2JveC5zYW5cIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL2NoZWNrYm94LnNhblwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL2NoZWNrYm94LnNhblwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlJmluZGV4PTAhLi9pbnB1dC5zYW5cIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL2lucHV0LnNhblwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL2lucHV0LnNhblwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgc2FuIGZyb20gXCJzYW5cIjtcbmltcG9ydCB7IHJvdXRlciB9IGZyb20gXCJzYW4tcm91dGVyXCI7XG5pbXBvcnQgSU5QVVQgZnJvbSBcIi4vdmlldy9pbnB1dC5zYW5cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vdmlldy9BcHAuc2FuXCI7XG5cblxucm91dGVyLmFkZCh7IHJ1bGU6ICcvJywgQ29tcG9uZW50OiBBcHAsIHRhcmdldDogJyNhcHAnIH0pO1xucm91dGVyLnN0YXJ0KCk7XG5jb25zb2xlLmxvZygnU2VydmVyIHN0YXJ0cy4nKTtcblxuLy8gaWYgKG1vZHVsZS5ob3QpIHtcbi8vICAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4vLyB9IiwidmFyIF9fc2FuX3NjcmlwdF9fLCBfX3Nhbl90ZW1wbGF0ZV9fXG52YXIgX19zYW5fc3R5bGVzX18gPSB7fVxucmVxdWlyZShcIiEhc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vQXBwLnNhblwiKVxuX19zYW5fc2NyaXB0X18gPSByZXF1aXJlKFwiISEhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BcHAuc2FuXCIpXG5pZiAoX19zYW5fc2NyaXB0X18gJiZcbiAgICBfX3Nhbl9zY3JpcHRfXy5fX2VzTW9kdWxlICYmXG4gICAgT2JqZWN0LmtleXMoX19zYW5fc2NyaXB0X18pLmxlbmd0aCA+IDEpIHtcbiAgY29uc29sZS53YXJuKFwiW3Nhbi1sb2FkZXJdIHNyYy92aWV3L0FwcC5zYW46IG5hbWVkIGV4cG9ydHMgaW4gKi5zYW4gZmlsZXMgYXJlIGlnbm9yZWQuXCIpfVxuX19zYW5fdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIWh0bWwtbG9hZGVyP21pbmltaXplPWZhbHNlIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BcHAuc2FuXCIpXG52YXIgX19zYW5fcHJvdG9fXyA9IHt9XG5pZiAoX19zYW5fc2NyaXB0X18pIHtcbiAgX19zYW5fcHJvdG9fXyA9IF9fc2FuX3NjcmlwdF9fLl9fZXNNb2R1bGVcbiAgICA/IF9fc2FuX3NjcmlwdF9fWydkZWZhdWx0J11cbiAgICA6IF9fc2FuX3NjcmlwdF9fXG59XG5pZiAoX19zYW5fdGVtcGxhdGVfXykge1xuICBfX3Nhbl9wcm90b19fLnRlbXBsYXRlID0gX19zYW5fdGVtcGxhdGVfX1xufVxudmFyIHNhbiA9IHJlcXVpcmUoXCJzYW5cIilcbnZhciBfX3Nhbl9leHBvcnRzX18gPSBzYW4uZGVmaW5lQ29tcG9uZW50KF9fc2FuX3Byb3RvX18pXG5tb2R1bGUuZXhwb3J0cyA9IF9fc2FuX2V4cG9ydHNfX1xuaWYgKG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHNbJ2RlZmF1bHQnXVxuaWYgKCFfX3Nhbl9leHBvcnRzX18uY29tcHV0ZWQpIF9fc2FuX2V4cG9ydHNfXy5jb21wdXRlZCA9IHt9XG5PYmplY3Qua2V5cyhfX3Nhbl9zdHlsZXNfXykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG52YXIgbW9kdWxlID0gX19zYW5fc3R5bGVzX19ba2V5XVxuX19zYW5fZXhwb3J0c19fLmNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxufSlcbiIsInZhciBfX3Nhbl9zY3JpcHRfXywgX19zYW5fdGVtcGxhdGVfX1xudmFyIF9fc2FuX3N0eWxlc19fID0ge31cbnJlcXVpcmUoXCIhIXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL2NoZWNrYm94LnNhblwiKVxuX19zYW5fc2NyaXB0X18gPSByZXF1aXJlKFwiISEhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhbi1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jaGVja2JveC5zYW5cIilcbmlmIChfX3Nhbl9zY3JpcHRfXyAmJlxuICAgIF9fc2FuX3NjcmlwdF9fLl9fZXNNb2R1bGUgJiZcbiAgICBPYmplY3Qua2V5cyhfX3Nhbl9zY3JpcHRfXykubGVuZ3RoID4gMSkge1xuICBjb25zb2xlLndhcm4oXCJbc2FuLWxvYWRlcl0gc3JjL3ZpZXcvY2hlY2tib3guc2FuOiBuYW1lZCBleHBvcnRzIGluICouc2FuIGZpbGVzIGFyZSBpZ25vcmVkLlwiKX1cbl9fc2FuX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISFodG1sLWxvYWRlcj9taW5pbWl6ZT1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2hlY2tib3guc2FuXCIpXG52YXIgX19zYW5fcHJvdG9fXyA9IHt9XG5pZiAoX19zYW5fc2NyaXB0X18pIHtcbiAgX19zYW5fcHJvdG9fXyA9IF9fc2FuX3NjcmlwdF9fLl9fZXNNb2R1bGVcbiAgICA/IF9fc2FuX3NjcmlwdF9fWydkZWZhdWx0J11cbiAgICA6IF9fc2FuX3NjcmlwdF9fXG59XG5pZiAoX19zYW5fdGVtcGxhdGVfXykge1xuICBfX3Nhbl9wcm90b19fLnRlbXBsYXRlID0gX19zYW5fdGVtcGxhdGVfX1xufVxudmFyIHNhbiA9IHJlcXVpcmUoXCJzYW5cIilcbnZhciBfX3Nhbl9leHBvcnRzX18gPSBzYW4uZGVmaW5lQ29tcG9uZW50KF9fc2FuX3Byb3RvX18pXG5tb2R1bGUuZXhwb3J0cyA9IF9fc2FuX2V4cG9ydHNfX1xuaWYgKG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHNbJ2RlZmF1bHQnXVxuaWYgKCFfX3Nhbl9leHBvcnRzX18uY29tcHV0ZWQpIF9fc2FuX2V4cG9ydHNfXy5jb21wdXRlZCA9IHt9XG5PYmplY3Qua2V5cyhfX3Nhbl9zdHlsZXNfXykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG52YXIgbW9kdWxlID0gX19zYW5fc3R5bGVzX19ba2V5XVxuX19zYW5fZXhwb3J0c19fLmNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQnpkR0Z1WkdGc2IyNWxQU0p1YnlJL1Bqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK1BITjJaeUIwUFNJeE5USTFNakl5T0RJM09EYzRJaUJqYkdGemN6MGlhV052YmlJZ2MzUjViR1U5SWlJZ2RtbGxkMEp2ZUQwaU1DQXdJREV3TWpRZ01UQXlOQ0lnZG1WeWMybHZiajBpTVM0eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIQXRhV1E5SWpnME1pSWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZHBaSFJvUFNJeU1EQWlJR2hsYVdkb2REMGlNakF3SWo0OFpHVm1jejQ4YzNSNWJHVWdkSGx3WlQwaWRHVjRkQzlqYzNNaVBqd3ZjM1I1YkdVK1BDOWtaV1p6UGp4d1lYUm9JR1E5SWswNE5qUWdNVEk0U0RFMk1HTXRNVGN1TmlBd0xUTXlJREUwTGpRdE16SWdNekoyTnpBMFl6QWdNVGN1TmlBeE5DNDBJRE15SURNeUlETXlhRGN3TkdNeE55NDJJREFnTXpJdE1UUXVOQ0F6TWkwek1sWXhOakJqTUMweE55NDJMVEUwTGpRdE16SXRNekl0TXpKNlRUUXlPQ0EzTVRndU5Hd3RORFV1TmlBME5TNDJMVFExTGpZdE5EVXVOaTB4TVRZdE1URTNMallnTkRVdU5pMDBOUzQyVERNNE15NHlJRFkzTW13ek5qY3VNaTB6TmpjdU1pQTBOUzQySURRMUxqWXRNelk0SURNMk9Ib2lJSEF0YVdROUlqZzBNeUkrUEM5d1lYUm9Qand2YzNablBnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQnpkR0Z1WkdGc2IyNWxQU0p1YnlJL1Bqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK1BITjJaeUIwUFNJeE5USTFNakl5T0RFNE16UTJJaUJqYkdGemN6MGlhV052YmlJZ2MzUjViR1U5SWlJZ2RtbGxkMEp2ZUQwaU1DQXdJREV3TWpRZ01UQXlOQ0lnZG1WeWMybHZiajBpTVM0eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIQXRhV1E5SWpjeU5DSWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZHBaSFJvUFNJeU1EQWlJR2hsYVdkb2REMGlNakF3SWo0OFpHVm1jejQ4YzNSNWJHVWdkSGx3WlQwaWRHVjRkQzlqYzNNaVBqd3ZjM1I1YkdVK1BDOWtaV1p6UGp4d1lYUm9JR1E5SWswNE5qUWdNVEk0U0RFMk1HTXRNVGN1TmlBd0xUTXlJREUwTGpRdE16SWdNekoyTnpBMFl6QWdNVGN1TmlBeE5DNDBJRE15SURNeUlETXlhRGN3TkdNeE55NDJJREFnTXpJdE1UUXVOQ0F6TWkwek1sWXhOakJqTUMweE55NDJMVEUwTGpRdE16SXRNekl0TXpKNlRUYzJPQ0ExTkRSSU1qVTJkaTAyTkdnMU1USjJOalI2SWlCd0xXbGtQU0kzTWpVaVBqd3ZjR0YwYUQ0OEwzTjJaejQ9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJ6ZEdGdVpHRnNiMjVsUFNKdWJ5SS9QandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStQSE4yWnlCMFBTSXhOVEkxTWpJeU9EWXpNREk1SWlCamJHRnpjejBpYVdOdmJpSWdjM1I1YkdVOUlpSWdkbWxsZDBKdmVEMGlNQ0F3SURFd01qUWdNVEF5TkNJZ2RtVnljMmx2YmowaU1TNHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSEF0YVdROUlqRXlPRE1pSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUIzYVdSMGFEMGlNakF3SWlCb1pXbG5hSFE5SWpJd01DSStQR1JsWm5NK1BITjBlV3hsSUhSNWNHVTlJblJsZUhRdlkzTnpJajQ4TDNOMGVXeGxQand2WkdWbWN6NDhjR0YwYUNCa1BTSk5PRE15SURFNU1uWTJOREJJTVRreVZqRTVNbWcyTkRCdE16SXROalJJTVRZd1l5MHhOeTQySURBdE16SWdNVFF1TkMwek1pQXpNblkzTURSak1DQXhOeTQySURFMExqUWdNeklnTXpJZ016Sm9OekEwWXpFM0xqWWdNQ0F6TWkweE5DNDBJRE15TFRNeVZqRTJNR013TFRFM0xqWXRNVFF1TkMwek1pMHpNaTB6TW5vaUlIQXRhV1E5SWpFeU9EUWlQand2Y0dGMGFENDhMM04yWno0PVwiIiwidmFyIF9fc2FuX3NjcmlwdF9fLCBfX3Nhbl90ZW1wbGF0ZV9fXG52YXIgX19zYW5fc3R5bGVzX18gPSB7fVxucmVxdWlyZShcIiEhc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vaW5wdXQuc2FuXCIpXG5fX3Nhbl9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhISEuLi8uLi9ub2RlX21vZHVsZXMvc2FuLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2lucHV0LnNhblwiKVxuaWYgKF9fc2FuX3NjcmlwdF9fICYmXG4gICAgX19zYW5fc2NyaXB0X18uX19lc01vZHVsZSAmJlxuICAgIE9iamVjdC5rZXlzKF9fc2FuX3NjcmlwdF9fKS5sZW5ndGggPiAxKSB7XG4gIGNvbnNvbGUud2FybihcIltzYW4tbG9hZGVyXSBzcmMvdmlldy9pbnB1dC5zYW46IG5hbWVkIGV4cG9ydHMgaW4gKi5zYW4gZmlsZXMgYXJlIGlnbm9yZWQuXCIpfVxuX19zYW5fdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIWh0bWwtbG9hZGVyP21pbmltaXplPWZhbHNlIS4uLy4uL25vZGVfbW9kdWxlcy9zYW4tbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbnB1dC5zYW5cIilcbnZhciBfX3Nhbl9wcm90b19fID0ge31cbmlmIChfX3Nhbl9zY3JpcHRfXykge1xuICBfX3Nhbl9wcm90b19fID0gX19zYW5fc2NyaXB0X18uX19lc01vZHVsZVxuICAgID8gX19zYW5fc2NyaXB0X19bJ2RlZmF1bHQnXVxuICAgIDogX19zYW5fc2NyaXB0X19cbn1cbmlmIChfX3Nhbl90ZW1wbGF0ZV9fKSB7XG4gIF9fc2FuX3Byb3RvX18udGVtcGxhdGUgPSBfX3Nhbl90ZW1wbGF0ZV9fXG59XG52YXIgc2FuID0gcmVxdWlyZShcInNhblwiKVxudmFyIF9fc2FuX2V4cG9ydHNfXyA9IHNhbi5kZWZpbmVDb21wb25lbnQoX19zYW5fcHJvdG9fXylcbm1vZHVsZS5leHBvcnRzID0gX19zYW5fZXhwb3J0c19fXG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0c1snZGVmYXVsdCddXG5pZiAoIV9fc2FuX2V4cG9ydHNfXy5jb21wdXRlZCkgX19zYW5fZXhwb3J0c19fLmNvbXB1dGVkID0ge31cbk9iamVjdC5rZXlzKF9fc2FuX3N0eWxlc19fKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbnZhciBtb2R1bGUgPSBfX3Nhbl9zdHlsZXNfX1trZXldXG5fX3Nhbl9leHBvcnRzX18uY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==