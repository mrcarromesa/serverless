(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handler.js":
/*!********************!*\
  !*** ./handler.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! serverless-http */ "serverless-http");
/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(serverless_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app */ "./src/app.js");



exports.run = serverless_http__WEBPACK_IMPORTED_MODULE_1___default()(_src_app__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/routes.js");




const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());
app.use(_routes__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/app/controllers/PetsController.js":
/*!***********************************************!*\
  !*** ./src/app/controllers/PetsController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);


class PetsController {
  index(req, res) {
    return res.json({
      message: 'index Pets'
    });
  }

  store(req, res) {
    console.log(req.body.test);
    return res.json({
      message: 'store Pets'
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new PetsController());

/***/ }),

/***/ "./src/app/controllers/TodosController.js":
/*!************************************************!*\
  !*** ./src/app/controllers/TodosController.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Todo */ "./src/app/models/Todo.js");



class TodosController {
  async store(req, res) {
    const todo = await _models_Todo__WEBPACK_IMPORTED_MODULE_1__["default"].create(req.body);
    return res.json(todo);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new TodosController());

/***/ }),

/***/ "./src/app/controllers/UsersController.js":
/*!************************************************!*\
  !*** ./src/app/controllers/UsersController.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ "./src/app/models/User.js");



class UsersController {
  async index(req, res) {
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].scan().exec();
    return res.json(user);
  }

  async store(req, res) {
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].create(req.body);
    return res.json(user);
  }

  async update(req, res) {
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].update({
      id: req.params.id
    }, req.body);
    return res.json(user);
  }

  async delete(req, res) {
    await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].delete({
      id: req.params.id
    });
    return res.json({
      msg: 'Deleted'
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new UsersController());

/***/ }),

/***/ "./src/app/models/Todo.js":
/*!********************************!*\
  !*** ./src/app/models/Todo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dynamoose */ "dynamoose");
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dynamoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);



const Todoschema = new dynamoose__WEBPACK_IMPORTED_MODULE_1___default.a.Schema({
  id: {
    type: String,
    hashKey: true,
    default: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])()
  },
  name: {
    type: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (dynamoose__WEBPACK_IMPORTED_MODULE_1___default.a.model('Todos', Todoschema));

/***/ }),

/***/ "./src/app/models/User.js":
/*!********************************!*\
  !*** ./src/app/models/User.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dynamoose */ "dynamoose");
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dynamoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);



const Userschema = new dynamoose__WEBPACK_IMPORTED_MODULE_1___default.a.Schema({
  id: {
    type: String,
    hashKey: true,
    default: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])()
  },
  name: {
    type: String
  },
  email: {
    type: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (dynamoose__WEBPACK_IMPORTED_MODULE_1___default.a.model('Users', Userschema));

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controllers_PetsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/controllers/PetsController */ "./src/app/controllers/PetsController.js");
/* harmony import */ var _app_controllers_TodosController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/controllers/TodosController */ "./src/app/controllers/TodosController.js");
/* harmony import */ var _app_controllers_UsersController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/controllers/UsersController */ "./src/app/controllers/UsersController.js");





const routes = new express__WEBPACK_IMPORTED_MODULE_1__["Router"]();
routes.get('/pets', _app_controllers_PetsController__WEBPACK_IMPORTED_MODULE_2__["default"].index);
routes.post('/pets', _app_controllers_PetsController__WEBPACK_IMPORTED_MODULE_2__["default"].store);
routes.post('/todo', _app_controllers_TodosController__WEBPACK_IMPORTED_MODULE_3__["default"].store);
routes.post('/user', _app_controllers_UsersController__WEBPACK_IMPORTED_MODULE_4__["default"].store);
routes.put('/user/:id', _app_controllers_UsersController__WEBPACK_IMPORTED_MODULE_4__["default"].update);
routes.delete('/user/:id', _app_controllers_UsersController__WEBPACK_IMPORTED_MODULE_4__["default"].delete);
routes.get('/user', _app_controllers_UsersController__WEBPACK_IMPORTED_MODULE_4__["default"].index);
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dynamoose":
/*!****************************!*\
  !*** external "dynamoose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dynamoose");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serverless-http");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ })));
//# sourceMappingURL=handler.js.map