/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _util = __webpack_require__(1);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	    var canvas = document.getElementById('canvas');
	    var context = canvas.getContext("2d");
	    var stage = new createjs.Stage("canvas");
	
	    _util2.default.addStars(canvas, stage);
	    // turn canvas into starfield
	
	    createjs.Ticker.addEventListener("tick", tick);
	    var tick = function tick() {
	        return console.log("s");
	    };
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	var Util = {
	  addStars: function addStars(canvas, stage) {
	    canvas.style.background = 'black';
	    for (var i = 0; i < 150; i++) {
	      var x = Math.random() * canvas.offsetWidth;
	      var y = Math.random() * canvas.offsetHeight;
	      var star = new createjs.Shape();
	      star.name = "star";
	      star.graphics.beginFill("white");
	      star.graphics.drawCircle(x, y, 1);
	      star.graphics.endFill();
	      stage.addChild(star);
	      stage.update();
	    }
	  },
	  addObstacles: function addObstacles(canvas, stage) {}
	};
	
	exports.default = Util;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map