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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/index.scss */ \"./sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_flexible_flexible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib-flexible/flexible */ \"./node_modules/lib-flexible/flexible.js\");\n/* harmony import */ var lib_flexible_flexible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lib_flexible_flexible__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./node_modules/lib-flexible/flexible.js":
/*!***********************************************!*\
  !*** ./node_modules/lib-flexible/flexible.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n;(function(win, lib) {\n    var doc = win.document;\n    var docEl = doc.documentElement;\n    var metaEl = doc.querySelector('meta[name=\"viewport\"]');\n    var flexibleEl = doc.querySelector('meta[name=\"flexible\"]');\n    var dpr = 0;\n    var scale = 0;\n    var tid;\n    var flexible = lib.flexible || (lib.flexible = {});\n\n    if (metaEl) {\n        console.warn('将根据已有的meta标签来设置缩放比例');\n        var match = metaEl.getAttribute('content').match(/initial\\-scale=([\\d\\.]+)/);\n        if (match) {\n            scale = parseFloat(match[1]);\n            dpr = parseInt(1 / scale);\n        }\n    } else if (flexibleEl) {\n        var content = flexibleEl.getAttribute('content');\n        if (content) {\n            var initialDpr = content.match(/initial\\-dpr=([\\d\\.]+)/);\n            var maximumDpr = content.match(/maximum\\-dpr=([\\d\\.]+)/);\n            if (initialDpr) {\n                dpr = parseFloat(initialDpr[1]);\n                scale = parseFloat((1 / dpr).toFixed(2));\n            }\n            if (maximumDpr) {\n                dpr = parseFloat(maximumDpr[1]);\n                scale = parseFloat((1 / dpr).toFixed(2));\n            }\n        }\n    }\n\n    if (!dpr && !scale) {\n        var isAndroid = win.navigator.appVersion.match(/android/gi);\n        var isIPhone = win.navigator.appVersion.match(/iphone/gi);\n        var devicePixelRatio = win.devicePixelRatio;\n        if (isIPhone) {\n            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案\n            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {\n                dpr = 3;\n            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){\n                dpr = 2;\n            } else {\n                dpr = 1;\n            }\n        } else {\n            // 其他设备下，仍旧使用1倍的方案\n            dpr = 1;\n        }\n        scale = 1 / dpr;\n    }\n\n    docEl.setAttribute('data-dpr', dpr);\n    if (!metaEl) {\n        metaEl = doc.createElement('meta');\n        metaEl.setAttribute('name', 'viewport');\n        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');\n        if (docEl.firstElementChild) {\n            docEl.firstElementChild.appendChild(metaEl);\n        } else {\n            var wrap = doc.createElement('div');\n            wrap.appendChild(metaEl);\n            doc.write(wrap.innerHTML);\n        }\n    }\n\n    function refreshRem(){\n        var width = docEl.getBoundingClientRect().width;\n        if (width / dpr > 540) {\n            width = 540 * dpr;\n        }\n        var rem = width / 10;\n        docEl.style.fontSize = rem + 'px';\n        flexible.rem = win.rem = rem;\n    }\n\n    win.addEventListener('resize', function() {\n        clearTimeout(tid);\n        tid = setTimeout(refreshRem, 300);\n    }, false);\n    win.addEventListener('pageshow', function(e) {\n        if (e.persisted) {\n            clearTimeout(tid);\n            tid = setTimeout(refreshRem, 300);\n        }\n    }, false);\n\n    if (doc.readyState === 'complete') {\n        doc.body.style.fontSize = 12 * dpr + 'px';\n    } else {\n        doc.addEventListener('DOMContentLoaded', function(e) {\n            doc.body.style.fontSize = 12 * dpr + 'px';\n        }, false);\n    }\n\n\n    refreshRem();\n\n    flexible.dpr = win.dpr = dpr;\n    flexible.refreshRem = refreshRem;\n    flexible.rem2px = function(d) {\n        var val = parseFloat(d) * this.rem;\n        if (typeof d === 'string' && d.match(/rem$/)) {\n            val += 'px';\n        }\n        return val;\n    }\n    flexible.px2rem = function(d) {\n        var val = parseFloat(d) / this.rem;\n        if (typeof d === 'string' && d.match(/px$/)) {\n            val += 'rem';\n        }\n        return val;\n    }\n\n})(window, window['lib'] || (window['lib'] = {}));\n\n\n//# sourceURL=webpack:///./node_modules/lib-flexible/flexible.js?");

/***/ }),

/***/ "./sass/index.scss":
/*!*************************!*\
  !*** ./sass/index.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./sass/index.scss?");

/***/ })

/******/ });