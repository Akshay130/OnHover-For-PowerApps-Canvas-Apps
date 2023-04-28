/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Onhover/index.ts":
/*!**************************!*\
  !*** ./Onhover/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Onhoverv4 = void 0;\nvar Onhoverv4 = /** @class */function () {\n  function Onhoverv4() {}\n  Onhoverv4.prototype.init = function (context, notifyOutputChanged, state, container) {\n    var _this = this;\n    this._isClicked = false;\n    this._notifyOutputChanged = notifyOutputChanged;\n    this._container = container;\n    this._container.style.width = context.parameters.CWidth.raw + \"px\";\n    this._container.style.height = context.parameters.CHeight.raw + \"px\";\n    this._container.addEventListener(\"mouseover\", function () {\n      _this._isHovered = true;\n      _this._notifyOutputChanged();\n    });\n    this._container.addEventListener(\"mouseout\", function () {\n      _this._isHovered = false;\n      _this._notifyOutputChanged();\n    });\n    this._container.addEventListener(\"mousedown\", function () {\n      _this._isClicked = true;\n      _this._notifyOutputChanged();\n      document.addEventListener(\"mouseup\", function () {\n        _this._isClicked = false;\n        _this._notifyOutputChanged();\n      });\n    });\n    this._container.addEventListener(\"mousemove\", function (event) {\n      _this._x = event.pageX; //- this._container.offsetLeft;\n      _this._y = event.pageY; //- this._container.offsetTop; \n      _this._notifyOutputChanged();\n    });\n  };\n  Onhoverv4.prototype.updateView = function (context) {};\n  Onhoverv4.prototype.getOutputs = function () {\n    return {\n      HoverToggle: this._isHovered,\n      ClickToggle: this._isClicked,\n      X_coordinate: this._x,\n      Y_coordinate: this._y\n    };\n  };\n  Onhoverv4.prototype.destroy = function () {};\n  return Onhoverv4;\n}();\nexports.Onhoverv4 = Onhoverv4;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./Onhover/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Onhover/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('onhoverPcfARv4.Onhoverv4', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Onhoverv4);
} else {
	var onhoverPcfARv4 = onhoverPcfARv4 || {};
	onhoverPcfARv4.Onhoverv4 = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Onhoverv4;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}