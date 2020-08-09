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
/******/ 	return __webpack_require__(__webpack_require__.s = 309);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebugError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var DebugError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(DebugError, _super);
    function DebugError(message) {
        var _this = _super.call(this, message) || this;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, _this.constructor);
        }
        else {
            _this.stack = (new Error()).stack;
        }
        _this.name = 'DebugError';
        _this.errorMessage = message;
        return _this;
    }
    DebugError.prototype.toString = function () {
        return this.errorMessage;
    };
    return DebugError;
}(Error));



/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __generator; });
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __spreadArrays; });
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResourceLinkState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceLink; });
var ResourceLinkState;
(function (ResourceLinkState) {
    ResourceLinkState["CREATED"] = "CREATED";
    ResourceLinkState["PENDING"] = "PENDING";
    ResourceLinkState["COMPLETED"] = "COMPLETED";
    ResourceLinkState["PENDING_ERROR"] = "PENDING_ERROR";
})(ResourceLinkState || (ResourceLinkState = {}));
var ResourceLink = (function () {
    function ResourceLink(url) {
        this.url = url;
        this.state = ResourceLinkState.CREATED;
    }
    ResourceLink.create = function (target) {
        var url = 'url' + Math.random() + '_' + Math.random();
        var link = new ResourceLink(url);
        link.setTarget(target);
        return link;
    };
    ResourceLink.prototype.getUrl = function () {
        return this.url;
    };
    ResourceLink.prototype.setTarget = function (t) {
        this._target = t;
        this.state = ResourceLinkState.COMPLETED;
    };
    ResourceLink.prototype.getTarget = function () {
        return this._target;
    };
    return ResourceLink;
}());



/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _misc_objectPool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _abstract_observableEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);




var Rect = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Rect, _super);
    function Rect(x, y, width, height, onChangedFn) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        var _this = _super.call(this) || this;
        _this._x = 0;
        _this._y = 0;
        _this._width = 0;
        _this._height = 0;
        _this._arr = [0, 0, 0, 0];
        if (onChangedFn)
            _this.addOnChangeListener(onChangedFn);
        _this.setXYWH(x, y, width, height);
        return _this;
    }
    Rect.fromPool = function () {
        return Rect.rectPool.getFreeObject();
    };
    Rect.prototype.setXYWH = function (x, y, width, height) {
        if ( true &&
            (Number.isNaN(x) ||
                Number.isNaN(y) ||
                Number.isNaN(width) ||
                Number.isNaN(height)))
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__[/* DebugError */ "a"]("Rect: wrong numeric arguments " + x + "," + y + "," + width + "," + height);
        var oldX = this._x;
        var oldY = this._y;
        var oldW = this._width;
        var oldH = this._height;
        var changed = oldX !== x || oldY !== y || oldW !== width || oldH !== height;
        if (changed) {
            this._x = x;
            this._y = y;
            this._width = width;
            this._height = height;
            this._right = this._x + this._width;
            this._bottom = this._y + this._height;
            this.triggerObservable();
        }
        return this;
    };
    Object.defineProperty(Rect.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this.setXY(x, this.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this.setXY(this.x, y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this.setWH(width, this.height);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this.setWH(this.width, height);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "right", {
        get: function () {
            return this._right;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "bottom", {
        get: function () {
            return this._bottom;
        },
        enumerable: false,
        configurable: true
    });
    Rect.prototype.setXY = function (x, y) {
        this.setXYWH(x, y, this._width, this._height);
        return this;
    };
    Rect.prototype.setWH = function (width, height) {
        this.setXYWH(this._x, this._y, width, height);
        return this;
    };
    Rect.prototype.set = function (another) {
        this.setXYWH(another.x, another.y, another.width, another.height);
        return this;
    };
    Rect.prototype.setSize = function (s) {
        this.setWH(s.width, s.height);
        return this;
    };
    Rect.prototype.setPoint = function (p) {
        this.setXY(p.x, p.y);
        return this;
    };
    Rect.prototype.setPointAndSize = function (p, size) {
        this.setPoint(p);
        this.setSize(size);
        return this;
    };
    Rect.prototype.addXY = function (x, y) {
        this.setXY(this._x + x, this._y + y);
        return this;
    };
    Rect.prototype.addWH = function (width, height) {
        this.setWH(this._width + width, this._height + height);
        return this;
    };
    Rect.prototype.addPoint = function (another) {
        this.addXY(another.x, another.y);
        return this;
    };
    Rect.prototype.isZeroSize = function () {
        return this._width === 0 || this._height === 0;
    };
    Rect.prototype.clone = function () {
        return new Rect(this._x, this._y, this._width, this._height);
    };
    Rect.prototype.toJSON = function () {
        return {
            x: this._x,
            y: this._y,
            width: this._width,
            height: this._height
        };
    };
    Rect.prototype.toArray = function () {
        this._arr[0] = this._x;
        this._arr[1] = this._y;
        this._arr[2] = this._width;
        this._arr[3] = this._height;
        return this._arr;
    };
    Rect.prototype.fromJSON = function (jsonObj) {
        this.setXYWH(jsonObj.x, jsonObj.y, jsonObj.width, jsonObj.height);
    };
    Rect.rectPool = new _misc_objectPool__WEBPACK_IMPORTED_MODULE_1__[/* ObjectPool */ "a"](Rect);
    return Rect;
}(_abstract_observableEntity__WEBPACK_IMPORTED_MODULE_2__[/* ObservableEntity */ "a"]));



/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectPool; });
/* harmony import */ var _debug_debugError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var ObjectPool = (function () {
    function ObjectPool(Class, numberOfInstances) {
        if (numberOfInstances === void 0) { numberOfInstances = 16; }
        this.Class = Class;
        this.numberOfInstances = numberOfInstances;
        this._pool = [];
        if ( true && !Class)
            throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not instantiate ObjectPool: class not provided in constructor");
    }
    ObjectPool.prototype.getFreeObject = function (silently) {
        if (silently === void 0) { silently = false; }
        for (var i = 0; i < this.numberOfInstances; i++) {
            var current = this._pool[i];
            if (current === undefined) {
                current = this._pool[i] = new this.Class();
                current.capture();
                return current;
            }
            else if (!current.isCaptured()) {
                current.capture();
                return current;
            }
        }
        if ( true && !silently)
            throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not get free object: no free object in pool");
        return undefined;
    };
    ObjectPool.prototype.releaseObject = function (obj) {
        var indexOf = this._pool.indexOf(obj);
        if ( true && indexOf === -1) {
            console.error(obj);
            throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not release the object: it does not belong to the pool");
        }
        this._pool[indexOf].release();
    };
    ObjectPool.prototype.releaseAll = function () {
        for (var i = 0; i < this.numberOfInstances; i++) {
            var current = this._pool[i];
            if (current !== undefined) {
                current.release();
            }
        }
    };
    return ObjectPool;
}());



/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpClient; });
/* harmony import */ var _engine_misc_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);

var objectToQuery = function (o) {
    if (o === undefined || o === null)
        return '';
    if (o instanceof FormData)
        return o;
    var paramsArr = [];
    if (typeof o === 'string' || typeof o === 'number')
        return o.toString();
    Object.keys(o).forEach(function (key) {
        paramsArr.push([key, encodeURIComponent(o[key])]);
    });
    return paramsArr.map(function (item) { return [item[0] + '=' + item[1]]; }).join('&');
};
var request = function (data) {
    var abortTmr;
    var resolved = false;
    data.method = data.method || 'get';
    if (data.data && data.method === 'get')
        data.url += '?' + objectToQuery(data.data);
    var xhr = new XMLHttpRequest();
    if (data.setup)
        data.setup(xhr);
    var resolveFn = _engine_misc_object__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "e"], rejectFn = _engine_misc_object__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "e"];
    var promise;
    if (window.Promise) {
        promise = new Promise(function (resolve, reject) {
            resolveFn = resolve;
            rejectFn = reject;
        });
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if ((xhr.status >= 200 && xhr.status <= 299) || xhr.status === 0) {
                var resp = xhr.responseText;
                var contentType = xhr.getResponseHeader("Content-Type") || '';
                if (contentType.toLowerCase().indexOf('json') > -1)
                    resp = JSON.parse(resp);
                if (data.success) {
                    data.success(resp);
                }
                resolveFn(resp);
            }
            else {
                if (data.error)
                    data.error({ status: xhr.status, error: xhr.statusText });
                rejectFn(xhr.statusText);
            }
            clearTimeout(abortTmr);
            resolved = true;
        }
    };
    xhr.open(data.method, data.url, true);
    if (data.requestType) {
        if (data.requestType !== 'multipart/form-data')
            xhr.setRequestHeader("Content-Type", data.requestType);
    }
    else {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (data.requestType === 'application/json')
        data.data = data.data && JSON.stringify(data.data);
    xhr.send(data.data);
    if (data.timeout) {
        abortTmr = setTimeout(function () {
            if (resolved)
                return;
            xhr.abort();
            if (data.ontimeout)
                data.ontimeout();
            rejectFn('timeout');
        }, data.timeout);
    }
    return promise;
};
var httpClient;
(function (httpClient) {
    httpClient.get = function (url, data, success, error, setup) {
        return request({
            method: 'get',
            url: url,
            data: data,
            success: success,
            error: error,
            setup: setup,
        });
    };
    httpClient.post = function (url, data, success, error, setup) {
        return request({
            method: 'post',
            url: url,
            data: data,
            requestType: 'application/json',
            success: success,
            error: error,
            setup: setup,
        });
    };
    httpClient.postMultiPart = function (url, file, data, success, error, setup) {
        var formData = new FormData();
        Object.keys(data).forEach(function (key) {
            formData.append(key, data[key]);
        });
        formData.append('file', file);
        formData.append('fileName', file.name);
        return request({
            method: 'post',
            url: url,
            data: formData,
            requestType: 'multipart/form-data',
            success: success,
            error: error,
            setup: setup,
        });
    };
})(httpClient || (httpClient = {}));


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isPowerOf2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INTERPOLATION_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractTexture; });
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _engine_geometry_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var isPowerOf2 = function (value) {
    return (value & (value - 1)) === 0;
};
var INTERPOLATION_MODE;
(function (INTERPOLATION_MODE) {
    INTERPOLATION_MODE[INTERPOLATION_MODE["NEAREST"] = 0] = "NEAREST";
    INTERPOLATION_MODE[INTERPOLATION_MODE["LINEAR"] = 1] = "LINEAR";
})(INTERPOLATION_MODE || (INTERPOLATION_MODE = {}));
var AbstractTexture = (function () {
    function AbstractTexture(gl) {
        this.gl = gl;
        this.size = new _engine_geometry_size__WEBPACK_IMPORTED_MODULE_1__[/* Size */ "a"](0, 0);
        this.destroyed = false;
        if (true) {
            if (!gl)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not create Texture, gl context not passed to constructor, expected: Texture(gl)");
            if (!AbstractTexture._MAX_TEXTURE_IMAGE_UNITS) {
                AbstractTexture._MAX_TEXTURE_IMAGE_UNITS = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
                if ( true && !AbstractTexture._MAX_TEXTURE_IMAGE_UNITS)
                    throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("Can not obtain MAX_TEXTURE_IMAGE_UNITS value");
            }
        }
        this.tex = gl.createTexture();
        if ( true && !this.tex)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not allocate memory for texture");
    }
    AbstractTexture.destroyAll = function () {
        for (var i = 0; i < AbstractTexture._instances.length; i++) {
            AbstractTexture._instances[i].destroy();
        }
        AbstractTexture.currentBindTextureAt = {};
    };
    AbstractTexture.prototype.bind = function (name, i, program) {
        if (true) {
            if (!name) {
                console.error(this);
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not bind texture: uniform name was not provided");
            }
            if (i > AbstractTexture._MAX_TEXTURE_IMAGE_UNITS - 1) {
                console.error(this);
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not bind texture with index " + i + ". Max supported value by device is " + AbstractTexture._MAX_TEXTURE_IMAGE_UNITS);
            }
            if (this.destroyed) {
                console.error(this);
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not bind destroyed texture");
            }
        }
        program.setUniform(name, i);
        if (AbstractTexture.currentBindTextureAt[i] === this)
            return;
        var gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + i);
        gl.bindTexture(this.samplerType, this.tex);
        AbstractTexture.currentBindTextureAt[i] = this;
    };
    AbstractTexture.prototype.unbind = function (i) {
        if (i === void 0) { i = 0; }
        var gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + i);
        gl.bindTexture(gl.TEXTURE_2D, null);
        delete AbstractTexture.currentBindTextureAt[i];
    };
    AbstractTexture.prototype.destroy = function () {
        this.gl.deleteTexture(this.tex);
        AbstractTexture._instances.splice(AbstractTexture._instances.indexOf(this), 1);
        this.destroyed = true;
    };
    AbstractTexture.prototype.getGlTexture = function () {
        return this.tex;
    };
    AbstractTexture.prototype.setInterpolationMode = function (mode) {
        if (mode === this._interpolationMode)
            return;
        this.beforeOperation();
        var gl = this.gl;
        var glMode;
        switch (mode) {
            case INTERPOLATION_MODE.LINEAR:
                glMode = gl.LINEAR;
                break;
            case INTERPOLATION_MODE.NEAREST:
                glMode = gl.NEAREST;
                break;
            default:
                if (true)
                    throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("unknown interpolation mode " + mode);
                break;
        }
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, glMode);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, glMode);
        this._interpolationMode = mode;
        this.afterOperation();
    };
    AbstractTexture.prototype.beforeOperation = function () {
        if (this._currentTextureAt0 !== undefined)
            return;
        this._currentTextureAt0 = AbstractTexture.currentBindTextureAt[0];
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.tex);
    };
    AbstractTexture.prototype.afterOperation = function () {
        if (this._currentTextureAt0)
            this.gl.bindTexture(this.gl.TEXTURE_2D, this._currentTextureAt0.tex);
        else
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        this._currentTextureAt0 = undefined;
    };
    AbstractTexture.prototype.setFilters = function () {
        var gl = this.gl;
        var isPowerOfTwo = isPowerOf2(this.size.width) && isPowerOf2(this.size.height);
        if (isPowerOfTwo) {
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        }
        else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        }
    };
    AbstractTexture.currentBindTextureAt = {};
    AbstractTexture._MAX_TEXTURE_IMAGE_UNITS = 0;
    AbstractTexture._instances = [];
    return AbstractTexture;
}());



/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isCommonArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isTypedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return removeFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return parametrizeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return noop; });
var isObject = function (obj) {
    return obj === Object(obj);
};
var isCommonArray = function (a) {
    return !!(a.splice);
};
var isTypedArray = function (a) {
    return !!(a.buffer);
};
var isArray = function (a) {
    return isCommonArray(a) || isTypedArray(a);
};
var isEqualArray = function (a, b) {
    for (var i = 0, max = a.length; i < max; i++) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
};
var isEqualObject = function (a, b) {
    throw new Error('not implemented');
};
var isEqual = function (a, b) {
    if (a === null || a === undefined)
        return false;
    if (isArray(a) && isArray(b))
        return isEqualArray(a, b);
    else if (isObject(a) && isObject(b))
        return isEqualObject(a, b);
    return a === b;
};
var removeFromArray = function (arr, predicate) {
    var i = arr.length;
    var cnt = 0;
    while (i--) {
        if (predicate(arr[i])) {
            arr.splice(i, 1);
            cnt++;
        }
    }
    return cnt;
};
var parametrizeString = function (source, args) {
    Object.keys(args).forEach(function (key) {
        source = source.split(key).join('' + args[key]);
    });
    return source;
};
var noop = function (arg) { };


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ DRAW_METHOD; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ bufferInfo_BufferInfo; });

// EXTERNAL MODULE: ./engine/debug/debugError.ts
var debugError = __webpack_require__(0);

// CONCATENATED MODULE: ./engine/renderer/webGl/base/vertexBuffer.ts

var vertexBuffer_VertexBuffer = (function () {
    function VertexBuffer(_gl) {
        this._gl = _gl;
        this.bufferItemSize = 0;
        this.bufferItemType = 0;
        this.dataLength = 0;
        if ( true && !_gl)
            throw new debugError["a" /* DebugError */]("can not create VertexBuffer, gl context not passed to constructor, expected: VertexBuffer(gl)");
        this.buffer = _gl.createBuffer();
        if ( true && !this.buffer)
            throw new debugError["a" /* DebugError */]("can not allocate memory for vertex buffer");
    }
    VertexBuffer.prototype.setData = function (bufferData, itemType, itemSize) {
        if (true) {
            if (!bufferData)
                throw new debugError["a" /* DebugError */]('can not set data to vertex buffer: bufferData is not specified');
            if (!itemType)
                throw new debugError["a" /* DebugError */]('can not set data to vertex buffer: itemType is not specified');
            if (!itemSize)
                throw new debugError["a" /* DebugError */]('can not set data to vertex buffer: itemSize is not specified');
        }
        var gl = this._gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        this.bufferItemSize = itemSize;
        this.bufferItemType = itemType;
        this.dataLength = bufferData.length;
    };
    VertexBuffer.prototype.setAttrName = function (attrName) {
        if ( true && !attrName)
            throw new debugError["a" /* DebugError */]("attrName not provided");
        this.attrName = attrName;
    };
    VertexBuffer.prototype.bind = function (program) {
        if ( true && !program)
            throw new debugError["a" /* DebugError */]("can not bind VertexBuffer, program is not specified");
        if ( true && !this.attrName)
            throw new debugError["a" /* DebugError */]("can not bind VertexBuffer, attribute name is not specified");
        program.bindBuffer(this, this.attrName);
    };
    VertexBuffer.prototype.unbind = function () {
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null);
    };
    VertexBuffer.prototype.destroy = function () {
        this._gl.deleteBuffer(this.buffer);
    };
    VertexBuffer.prototype.getGlBuffer = function () {
        return this.buffer;
    };
    VertexBuffer.prototype.getItemSize = function () {
        return this.bufferItemSize;
    };
    VertexBuffer.prototype.getItemType = function () {
        return this.bufferItemType;
    };
    VertexBuffer.prototype.getBufferLength = function () {
        return this.dataLength;
    };
    return VertexBuffer;
}());


// CONCATENATED MODULE: ./engine/renderer/webGl/base/indexBuffer.ts

var indexBuffer_IndexBuffer = (function () {
    function IndexBuffer(_gl) {
        this._gl = _gl;
        if ( true && !_gl)
            throw new debugError["a" /* DebugError */]("can not create IndexBuffer, gl context not passed to constructor, expected: IndexBuffer(gl)");
        this._buffer = _gl.createBuffer();
        if ( true && !this._buffer)
            throw new debugError["a" /* DebugError */]("can not allocate memory for index buffer");
    }
    IndexBuffer.prototype.setData = function (bufferData) {
        if (true) {
            if (!bufferData)
                throw new debugError["a" /* DebugError */]('can not set data to buffer: bufferData not specified');
        }
        var gl = this._gl;
        this._dataLength = bufferData.length;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(bufferData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };
    IndexBuffer.prototype.getGlBuffer = function () {
        return this._buffer;
    };
    IndexBuffer.prototype.bind = function () {
        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._buffer);
    };
    IndexBuffer.prototype.unbind = function () {
        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, null);
    };
    IndexBuffer.prototype.destroy = function () {
        this._gl.deleteBuffer(this._buffer);
    };
    IndexBuffer.prototype.getBufferLength = function () {
        return this._dataLength;
    };
    return IndexBuffer;
}());


// EXTERNAL MODULE: ./engine/renderer/webGl/debug/debugUtil.ts
var debugUtil = __webpack_require__(42);

// CONCATENATED MODULE: ./engine/renderer/webGl/base/bufferInfo.ts




var glEnumToString = debugUtil["a" /* debugUtil */].glEnumToString;
var DRAW_METHOD;
(function (DRAW_METHOD) {
    DRAW_METHOD[DRAW_METHOD["LINE_STRIP"] = 0] = "LINE_STRIP";
    DRAW_METHOD[DRAW_METHOD["TRIANGLE_FAN"] = 1] = "TRIANGLE_FAN";
    DRAW_METHOD[DRAW_METHOD["TRIANGLE_STRIP"] = 2] = "TRIANGLE_STRIP";
    DRAW_METHOD[DRAW_METHOD["TRIANGLES"] = 3] = "TRIANGLES";
    DRAW_METHOD[DRAW_METHOD["LINES"] = 4] = "LINES";
    DRAW_METHOD[DRAW_METHOD["LINE_LOOP"] = 5] = "LINE_LOOP";
})(DRAW_METHOD || (DRAW_METHOD = {}));
var drawMethodToGlEnum = function (gl, m) {
    switch (m) {
        case DRAW_METHOD.LINE_STRIP:
            return gl.LINE_STRIP;
        case DRAW_METHOD.TRIANGLE_FAN:
            return gl.TRIANGLE_FAN;
        case DRAW_METHOD.TRIANGLE_STRIP:
            return gl.TRIANGLE_STRIP;
        case DRAW_METHOD.TRIANGLES:
            return gl.TRIANGLES;
        case DRAW_METHOD.LINES:
            return gl.LINES;
        case DRAW_METHOD.LINE_LOOP:
            return gl.LINE_LOOP;
    }
    if (true) {
        throw new debugError["a" /* DebugError */]("unknown drawMethod enum value: " + m);
    }
};
var bufferInfo_BufferInfo = (function () {
    function BufferInfo(gl, description) {
        this.numOfElementsToDraw = 0;
        this.gl = gl;
        if ( true && description.drawMethod === undefined)
            throw new debugError["a" /* DebugError */]("can not create BufferInfo: drawMethod not defined");
        this.drawMethod = drawMethodToGlEnum(gl, description.drawMethod);
        if ( true && !description.posVertexInfo)
            throw new debugError["a" /* DebugError */]("can not create BufferInfo: posVertexInfo is mandatory");
        this.posVertexBuffer = new vertexBuffer_VertexBuffer(gl);
        this.posVertexBuffer.setData(description.posVertexInfo.array, description.posVertexInfo.type, description.posVertexInfo.size);
        this.posVertexBuffer.setAttrName(description.posVertexInfo.attrName);
        if (description.posIndexInfo) {
            this.posIndexBuffer = new indexBuffer_IndexBuffer(gl);
            this.posIndexBuffer.setData(description.posIndexInfo.array);
        }
        else
            this.numOfElementsToDraw = this._getNumOfElementsToDraw(this.drawMethod);
        if (description.texVertexInfo) {
            this.texVertexBuffer = new vertexBuffer_VertexBuffer(gl);
            this.texVertexBuffer.setData(description.texVertexInfo.array, description.texVertexInfo.type, description.texVertexInfo.size);
            this.texVertexBuffer.setAttrName(description.texVertexInfo.attrName);
        }
        if (description.normalInfo) {
            this.normalBuffer = new vertexBuffer_VertexBuffer(gl);
            this.normalBuffer.setData(description.normalInfo.array, description.normalInfo.type, description.normalInfo.size);
            this.normalBuffer.setAttrName(description.normalInfo.attrName);
        }
    }
    BufferInfo.prototype.bind = function (program) {
        program.bind();
        if (this.posIndexBuffer !== undefined)
            this.posIndexBuffer.bind();
        if (this.posVertexBuffer !== undefined)
            this.posVertexBuffer.bind(program);
        if (this.texVertexBuffer !== undefined)
            this.texVertexBuffer.bind(program);
        if (this.normalBuffer !== undefined)
            this.normalBuffer.bind(program);
    };
    BufferInfo.prototype.unbind = function (program) {
        program.unbind();
        if (this.posIndexBuffer !== undefined)
            this.posIndexBuffer.unbind();
        if (this.posVertexBuffer !== undefined)
            this.posVertexBuffer.unbind();
        if (this.texVertexBuffer !== undefined)
            this.texVertexBuffer.unbind();
        if (this.normalBuffer !== undefined)
            this.normalBuffer.unbind();
    };
    BufferInfo.prototype.destroy = function () {
        if (this.posVertexBuffer !== undefined)
            this.posVertexBuffer.destroy();
        if (this.posIndexBuffer !== undefined)
            this.posIndexBuffer.destroy();
        if (this.texVertexBuffer !== undefined)
            this.texVertexBuffer.destroy();
        if (this.normalBuffer !== undefined)
            this.normalBuffer.destroy();
    };
    BufferInfo.prototype.draw = function () {
        if (this.posIndexBuffer !== undefined) {
            this.gl.drawElements(this.drawMethod, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        }
        else {
            this.gl.drawArrays(this.drawMethod, 0, this.numOfElementsToDraw);
        }
    };
    BufferInfo.prototype._getNumOfElementsToDraw = function (drawMethod) {
        switch (drawMethod) {
            case this.gl.LINE_STRIP:
            case this.gl.TRIANGLE_FAN:
                return this.posVertexBuffer.getBufferLength() / 2;
            case this.gl.TRIANGLE_STRIP:
                return this.posVertexBuffer.getBufferLength() / 3;
            case this.gl.TRIANGLES:
                return this.posVertexBuffer.getBufferLength() / this.posVertexBuffer.getItemSize();
            default:
                throw new debugError["a" /* DebugError */]("unknown draw method: " + drawMethod + " (" + glEnumToString(this.gl, drawMethod) + ")");
        }
    };
    return BufferInfo;
}());



/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservableEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_misc_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _engine_misc_releaseableEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);



var ObservableEntity = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(ObservableEntity, _super);
    function ObservableEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onChanged = [];
        return _this;
    }
    ObservableEntity.prototype.forceTriggerChange = function () {
        for (var _i = 0, _a = this._onChanged; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
    };
    ObservableEntity.prototype.addOnChangeListener = function (f) {
        this._onChanged.push(f);
    };
    ObservableEntity.prototype.removeOnChangeListener = function (f) {
        Object(_engine_misc_object__WEBPACK_IMPORTED_MODULE_1__[/* removeFromArray */ "g"])(this._onChanged, function (it) { return it === f; });
    };
    ObservableEntity.prototype.observe = function (onChangedFn) {
        this.addOnChangeListener(onChangedFn);
    };
    ObservableEntity.prototype.triggerObservable = function () {
        for (var _i = 0, _a = this._onChanged; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
    };
    return ObservableEntity;
}(_engine_misc_releaseableEntity__WEBPACK_IMPORTED_MODULE_2__[/* ReleaseableEntity */ "a"]));



/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STRETCH_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_geometry_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _engine_geometry_point2d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _engine_renderable_abstract_renderableModelWithResourceLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56);






var STRETCH_MODE;
(function (STRETCH_MODE) {
    STRETCH_MODE[STRETCH_MODE["STRETCH"] = 0] = "STRETCH";
    STRETCH_MODE[STRETCH_MODE["REPEAT"] = 1] = "REPEAT";
})(STRETCH_MODE || (STRETCH_MODE = {}));
var Image = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Image, _super);
    function Image(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Image';
        _this.borderRadius = 0;
        _this.offset = new _engine_geometry_point2d__WEBPACK_IMPORTED_MODULE_4__[/* Point2d */ "a"]();
        _this.stretchMode = STRETCH_MODE.STRETCH;
        _this.color = _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_3__[/* Color */ "a"].NONE.clone();
        _this.lineWidth = 0;
        _this._pixelPerfect = false;
        _this._srcRect = new _engine_geometry_rect__WEBPACK_IMPORTED_MODULE_1__[/* Rect */ "a"]();
        return _this;
    }
    Image.prototype.revalidate = function () {
        if ( true && !this.getResourceLink()) {
            console.error(this);
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_2__[/* DebugError */ "a"]("can not render Image: resourceLink is not specified");
        }
        if ( true && !this.getResourceLink().getTarget()) {
            console.error(this);
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_2__[/* DebugError */ "a"]("can not render Image: can not find texture by resource link");
        }
        var tex = this.getResourceLink().getTarget();
        if (this.size.isZero()) {
            this.size.width = tex.size.width;
            this.size.height = tex.size.height;
        }
        if (this._srcRect.isZeroSize()) {
            this._srcRect.setWH(tex.size.width, tex.size.height);
        }
    };
    Image.prototype.draw = function () {
        this.game.getRenderer().drawImage(this);
    };
    Image.prototype.clone = function () {
        var cloned = new Image(this.game);
        this.setClonedProperties(cloned);
        return cloned;
    };
    Image.prototype.setProps = function (props) {
        this.setResourceLink(props.resourceLink);
        _super.prototype.setProps.call(this, props);
        if (props.borderRadius !== undefined)
            this.borderRadius = props.borderRadius;
        if (props.color !== undefined)
            this.color.setRGBA(props.color.r, props.color.g, props.color.b, props.color.a);
        if (props.lineWidth !== undefined)
            this.lineWidth = props.lineWidth;
    };
    Image.prototype.getSrcRect = function () {
        return this._srcRect;
    };
    Image.prototype.setResourceLink = function (link) {
        _super.prototype.setResourceLink.call(this, link);
        var oldLink = this.getResourceLink();
        var canBeRevalidated = (oldLink === undefined || oldLink !== link) &&
            link.getTarget() !== undefined;
        if (canBeRevalidated)
            this.revalidate();
    };
    Image.prototype.setPixelPerfect = function (val) {
        this._pixelPerfect = val;
    };
    Image.prototype.isPixelPerfect = function () {
        return this._pixelPerfect;
    };
    Image.prototype.setClonedProperties = function (cloned) {
        cloned._srcRect.set(this._srcRect);
        cloned.size.set(this.size);
        cloned.borderRadius = this.borderRadius;
        cloned.offset.set(this.offset);
        cloned.stretchMode = this.stretchMode;
        cloned.color = this.color.clone();
        cloned.lineWidth = this.lineWidth;
        cloned._pixelPerfect = this._pixelPerfect;
        cloned.setResourceLink(this.getResourceLink());
        _super.prototype.setClonedProperties.call(this, cloned);
    };
    return Image;
}(_engine_renderable_abstract_renderableModelWithResourceLink__WEBPACK_IMPORTED_MODULE_5__[/* RenderableModelWithResourceLink */ "a"]));



/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LayerTransformType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layer; });
/* harmony import */ var _engine_delegates_parentChildDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);

var LayerTransformType;
(function (LayerTransformType) {
    LayerTransformType[LayerTransformType["TRANSFORM"] = 0] = "TRANSFORM";
    LayerTransformType[LayerTransformType["STICK_TO_CAMERA"] = 1] = "STICK_TO_CAMERA";
})(LayerTransformType || (LayerTransformType = {}));
var Layer = (function () {
    function Layer(game) {
        var _this = this;
        this.game = game;
        this.type = 'Layer';
        this.transformType = LayerTransformType.TRANSFORM;
        this.children = [];
        this._parentChildDelegate = new _engine_delegates_parentChildDelegate__WEBPACK_IMPORTED_MODULE_0__[/* ParentChildDelegate */ "a"](this);
        this._parentChildDelegate.afterChildAppended = function (c) {
            var m = c;
            m.setLayer(_this);
            m.setScene(_this._scene);
            c.parent = undefined;
            m.revalidate();
        };
    }
    Layer.prototype.appendChild = function (newChild) {
        this._parentChildDelegate.appendChild(newChild);
    };
    Layer.prototype.appendChildAt = function (newChild, index) {
        this._parentChildDelegate.appendChildAt(newChild, index);
    };
    Layer.prototype.appendChildAfter = function (modelAfter, newChild) {
        this._parentChildDelegate.appendChildAfter(modelAfter, newChild);
    };
    Layer.prototype.appendChildBefore = function (modelBefore, newChild) {
        this._parentChildDelegate.appendChildBefore(modelBefore, newChild);
    };
    Layer.prototype.prependChild = function (newChild) {
        this._parentChildDelegate.prependChild(newChild);
    };
    Layer.prototype.removeChildAt = function (i) {
        this._parentChildDelegate.removeChildAt(i);
    };
    Layer.prototype.removeChild = function (c) {
        this._parentChildDelegate.removeChild(c);
    };
    Layer.prototype.replaceChild = function (c, newChild) {
        this._parentChildDelegate.replaceChild(c, newChild);
    };
    Layer.prototype.removeSelf = function () {
        this._parentChildDelegate.removeSelf();
    };
    Layer.prototype.removeChildren = function () {
        this._parentChildDelegate.removeChildren();
    };
    Layer.prototype.moveToFront = function () {
        this._parentChildDelegate.moveToFront();
    };
    Layer.prototype.moveToBack = function () {
        this._parentChildDelegate.moveToBack();
    };
    Layer.prototype.findChildById = function (id) {
        return this._parentChildDelegate.findChildById(id);
    };
    Layer.prototype.getParent = function () {
        return this._scene;
    };
    Layer.prototype.getParentNode = function () {
        return this.parent;
    };
    Layer.prototype.getChildAt = function (index) {
        return this.children[index];
    };
    Layer.prototype.getChildren = function () {
        return this.children;
    };
    Layer.prototype.setScene = function (scene) {
        this._scene = scene;
    };
    Layer.prototype.update = function () {
        var all = this.children;
        for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
            var obj = all_1[_i];
            obj.update();
        }
    };
    Layer.prototype.render = function () {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.render();
        }
    };
    return Layer;
}());



/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathEx; });
/* harmony import */ var _geometry_point2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _engine_geometry_vec4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);



var MathEx;
(function (MathEx) {
    var Mat16Holder = _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_1__[/* mat4 */ "a"].Mat16Holder;
    var Vec4Holder = _engine_geometry_vec4__WEBPACK_IMPORTED_MODULE_2__[/* vec4 */ "a"].Vec4Holder;
    MathEx.isPointInRect = function (point, rect, angle) {
        return point.x > rect.x &&
            point.x < (rect.x + rect.width) &&
            point.y > rect.y &&
            point.y < (rect.y + rect.height);
    };
    MathEx.clamp = function (val, min, max) {
        if (val < min)
            val = min;
        if (val > max)
            val = max;
        return val;
    };
    MathEx.overlapTest = function (a, b) {
        return (a.x < b.x + b.width) &&
            (a.x + a.width > b.x) &&
            (a.y < b.y + b.height) &&
            (a.y + a.height > b.y);
    };
    MathEx.radToDeg = function (rad) {
        return rad * 180 / Math.PI;
    };
    MathEx.degToRad = function (deg) {
        return deg * Math.PI / 180;
    };
    MathEx.rectToPolar = function (point, center) {
        var radius = Math.sqrt(point.x * point.x + center.y * center.y);
        var angle = Math.atan2(center.y - point.y, center.x - point.x);
        return { radius: radius, angle: angle };
    };
    MathEx.polarToRect = function (radius, angle, center) {
        var x = radius * Math.cos(angle);
        var y = radius * Math.sin(angle);
        return new _geometry_point2d__WEBPACK_IMPORTED_MODULE_0__[/* Point2d */ "a"](center.x - x, center.y - y);
    };
    MathEx.getDistanceSquared = function (p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };
    MathEx.closeTo = function (a, b, epsilon) {
        if (epsilon === void 0) { epsilon = 0.01; }
        return Math.abs(a - b) <= epsilon;
    };
    MathEx.getDistance = function (p1, p2) {
        return Math.sqrt(MathEx.getDistanceSquared(p1, p2));
    };
    MathEx.getAngle = function (p1, p2) {
        var dx = p1.x - p2.x;
        var dy = p1.y - p2.y;
        return Math.atan2(dy, dx);
    };
    MathEx.random = function (min, max) {
        if (min > max) {
            var tmp = min;
            min = max;
            max = tmp;
        }
        return Math.random() * (max - min) + min;
    };
    MathEx.randomInt = function (min, max) {
        return ~~MathEx.random(min, max);
    };
    MathEx.randomByte = function (min, max) {
        return MathEx.randomInt(min, max);
    };
    MathEx.unProject = function (winPoint, width, height, viewProjectionMatrix) {
        var x = 2.0 * winPoint.x / width - 1;
        var y = 2.0 * winPoint.y / height - 1;
        var viewProjectionInverse = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_1__[/* mat4 */ "a"].inverse(viewProjectionInverse, viewProjectionMatrix);
        var point3D = Vec4Holder.fromPool();
        point3D.set(x, y, 0, 1);
        var res = Vec4Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_1__[/* mat4 */ "a"].multVecByMatrix(res, viewProjectionInverse, point3D);
        var resultX = (res.x / 2 + 0.5) * width;
        var resultY = (res.y / 2 + 0.5) * height;
        var result = _geometry_point2d__WEBPACK_IMPORTED_MODULE_0__[/* Point2d */ "a"].fromPool();
        result.setXY(resultX, resultY);
        point3D.release();
        res.release();
        viewProjectionInverse.release();
        return result;
    };
})(MathEx || (MathEx = {}));


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mat4; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _debug_debugError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _engine_misc_objectPool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _engine_misc_releaseableEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);




var mat4;
(function (mat4) {
    var Mat16Holder = (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Mat16Holder, _super);
        function Mat16Holder() {
            var _this = _super.call(this) || this;
            _this.mat16 = new Float32Array(16);
            _this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            return _this;
        }
        Mat16Holder.fromPool = function () {
            return Mat16Holder.m16hPool.getFreeObject();
        };
        Mat16Holder.create = function () {
            return new Mat16Holder();
        };
        Mat16Holder.prototype.set = function (v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15) {
            var mat16 = this.mat16;
            mat16[0] = v0;
            mat16[1] = v1;
            mat16[2] = v2;
            mat16[3] = v3;
            mat16[4] = v4;
            mat16[5] = v5;
            mat16[6] = v6;
            mat16[7] = v7;
            mat16[8] = v8;
            mat16[9] = v9;
            mat16[10] = v10;
            mat16[11] = v11;
            mat16[12] = v12;
            mat16[13] = v13;
            mat16[14] = v14;
            mat16[15] = v15;
        };
        Mat16Holder.prototype.fromMat16 = function (mat16) {
            this.set(mat16[0], mat16[1], mat16[2], mat16[3], mat16[4], mat16[5], mat16[6], mat16[7], mat16[8], mat16[9], mat16[10], mat16[11], mat16[12], mat16[13], mat16[14], mat16[15]);
        };
        Mat16Holder.prototype.clone = function () {
            var m = new Mat16Holder();
            for (var i = 0; i < this.mat16.length; i++) {
                m.mat16[i] = this.mat16[i];
            }
            return m;
        };
        Mat16Holder.m16hPool = new _engine_misc_objectPool__WEBPACK_IMPORTED_MODULE_2__[/* ObjectPool */ "a"](Mat16Holder, 256);
        return Mat16Holder;
    }(_engine_misc_releaseableEntity__WEBPACK_IMPORTED_MODULE_3__[/* ReleaseableEntity */ "a"]));
    mat4.Mat16Holder = Mat16Holder;
    mat4.makeIdentity = function (out) {
        out.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    };
    mat4.makeZToWMatrix = function (out, fudgeFactor) {
        out.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, fudgeFactor, 0, 0, 0, 1);
    };
    mat4.make2DProjection = function (out, width, height, depth) {
        out.set(2 / width, 0, 0, 0, 0, -2 / height, 0, 0, 0, 0, 2 / depth, 0, -1, 1, 0, 1);
    };
    mat4.ortho = function (out, left, right, bottom, top, near, far) {
        if (true) {
            if (left === right || bottom === top || near === far) {
                console.error({ left: left, right: right, bottom: bottom, top: top, near: near, far: far });
                throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("Can not create ortho matrix with wrong parameters");
            }
        }
        var lr = 1 / (left - right), bt = 1 / (bottom - top), nf = 1 / (near - far);
        var outMat16 = out.mat16;
        outMat16[0] = -2 * lr;
        outMat16[1] = 0;
        outMat16[2] = 0;
        outMat16[3] = 0;
        outMat16[4] = 0;
        outMat16[5] = -2 * bt;
        outMat16[6] = 0;
        outMat16[7] = 0;
        outMat16[8] = 0;
        outMat16[9] = 0;
        outMat16[10] = 2 * nf;
        outMat16[11] = 0;
        outMat16[12] = (left + right) * lr;
        outMat16[13] = (top + bottom) * bt;
        outMat16[14] = (far + near) * nf;
        outMat16[15] = 1;
    };
    mat4.perspective = function (out, fovy, aspect, near, far) {
        var f = 1.0 / Math.tan(fovy / 2), nf = 1 / (near - far);
        var outMat16 = out.mat16;
        outMat16[0] = f / aspect;
        outMat16[1] = 0;
        outMat16[2] = 0;
        outMat16[3] = 0;
        outMat16[4] = 0;
        outMat16[5] = f;
        outMat16[6] = 0;
        outMat16[7] = 0;
        outMat16[8] = 0;
        outMat16[9] = 0;
        outMat16[10] = (far + near) * nf;
        outMat16[11] = -1;
        outMat16[12] = 0;
        outMat16[13] = 0;
        outMat16[14] = (2 * far * near) * nf;
        outMat16[15] = 0;
    };
    mat4.makeTranslation = function (out, tx, ty, tz) {
        out.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1);
    };
    mat4.makeXSkew = function (out, angle) {
        out.set(1, 0, 0, 0, Math.tan(angle), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    };
    mat4.makeYSkew = function (out, angle) {
        out.set(1, Math.tan(angle), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    };
    mat4.makeXRotation = function (out, angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        out.set(1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1);
    };
    mat4.makeYRotation = function (out, angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        out.set(c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1);
    };
    mat4.makeZRotation = function (out, angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        out.set(c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    };
    mat4.makeRotationReset = function (out) {
        var matrix = out.mat16;
        var d = Math.sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1] + matrix[2] * matrix[2]);
        matrix[0] = d;
        matrix[4] = 0;
        matrix[8] = 0;
        matrix[1] = 0;
        matrix[5] = d;
        matrix[9] = 0;
        matrix[2] = 0;
        matrix[6] = 0;
        matrix[10] = d;
        matrix[3] = 0;
        matrix[7] = 0;
        matrix[11] = 0;
        matrix[15] = 1;
    };
    mat4.makeScale = function (out, sx, sy, sz) {
        out.set(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
    };
    mat4.matrixMultiply = function (out, aHolder, bHolder) {
        var r = out.mat16;
        var a = aHolder.mat16;
        var b = bHolder.mat16;
        r[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
        r[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
        r[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
        r[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];
        r[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
        r[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
        r[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
        r[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];
        r[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
        r[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
        r[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
        r[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];
        r[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
        r[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
        r[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
        r[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];
    };
    mat4.multVecByMatrix = function (out, matrix, vec4Arr) {
        for (var i = 0; i < 4; i++) {
            out.vec4[i] =
                vec4Arr.vec4[0] * matrix.mat16[0 * 4 + i] +
                    vec4Arr.vec4[1] * matrix.mat16[1 * 4 + i] +
                    vec4Arr.vec4[2] * matrix.mat16[2 * 4 + i] +
                    vec4Arr.vec4[3] * matrix.mat16[3 * 4 + i];
        }
    };
    mat4.inverse = function (out, mHolder) {
        var r = out.mat16;
        var m = mHolder.mat16;
        r[0] = m[5] * m[10] * m[15] - m[5] * m[14] * m[11] - m[6] * m[9] * m[15] + m[6] * m[13] * m[11] + m[7] * m[9] * m[14] - m[7] * m[13] * m[10];
        r[1] = -m[1] * m[10] * m[15] + m[1] * m[14] * m[11] + m[2] * m[9] * m[15] - m[2] * m[13] * m[11] - m[3] * m[9] * m[14] + m[3] * m[13] * m[10];
        r[2] = m[1] * m[6] * m[15] - m[1] * m[14] * m[7] - m[2] * m[5] * m[15] + m[2] * m[13] * m[7] + m[3] * m[5] * m[14] - m[3] * m[13] * m[6];
        r[3] = -m[1] * m[6] * m[11] + m[1] * m[10] * m[7] + m[2] * m[5] * m[11] - m[2] * m[9] * m[7] - m[3] * m[5] * m[10] + m[3] * m[9] * m[6];
        r[4] = -m[4] * m[10] * m[15] + m[4] * m[14] * m[11] + m[6] * m[8] * m[15] - m[6] * m[12] * m[11] - m[7] * m[8] * m[14] + m[7] * m[12] * m[10];
        r[5] = m[0] * m[10] * m[15] - m[0] * m[14] * m[11] - m[2] * m[8] * m[15] + m[2] * m[12] * m[11] + m[3] * m[8] * m[14] - m[3] * m[12] * m[10];
        r[6] = -m[0] * m[6] * m[15] + m[0] * m[14] * m[7] + m[2] * m[4] * m[15] - m[2] * m[12] * m[7] - m[3] * m[4] * m[14] + m[3] * m[12] * m[6];
        r[7] = m[0] * m[6] * m[11] - m[0] * m[10] * m[7] - m[2] * m[4] * m[11] + m[2] * m[8] * m[7] + m[3] * m[4] * m[10] - m[3] * m[8] * m[6];
        r[8] = m[4] * m[9] * m[15] - m[4] * m[13] * m[11] - m[5] * m[8] * m[15] + m[5] * m[12] * m[11] + m[7] * m[8] * m[13] - m[7] * m[12] * m[9];
        r[9] = -m[0] * m[9] * m[15] + m[0] * m[13] * m[11] + m[1] * m[8] * m[15] - m[1] * m[12] * m[11] - m[3] * m[8] * m[13] + m[3] * m[12] * m[9];
        r[10] = m[0] * m[5] * m[15] - m[0] * m[13] * m[7] - m[1] * m[4] * m[15] + m[1] * m[12] * m[7] + m[3] * m[4] * m[13] - m[3] * m[12] * m[5];
        r[11] = -m[0] * m[5] * m[11] + m[0] * m[9] * m[7] + m[1] * m[4] * m[11] - m[1] * m[8] * m[7] - m[3] * m[4] * m[9] + m[3] * m[8] * m[5];
        r[12] = -m[4] * m[9] * m[14] + m[4] * m[13] * m[10] + m[5] * m[8] * m[14] - m[5] * m[12] * m[10] - m[6] * m[8] * m[13] + m[6] * m[12] * m[9];
        r[13] = m[0] * m[9] * m[14] - m[0] * m[13] * m[10] - m[1] * m[8] * m[14] + m[1] * m[12] * m[10] + m[2] * m[8] * m[13] - m[2] * m[12] * m[9];
        r[14] = -m[0] * m[5] * m[14] + m[0] * m[13] * m[6] + m[1] * m[4] * m[14] - m[1] * m[12] * m[6] - m[2] * m[4] * m[13] + m[2] * m[12] * m[5];
        r[15] = m[0] * m[5] * m[10] - m[0] * m[9] * m[6] - m[1] * m[4] * m[10] + m[1] * m[8] * m[6] + m[2] * m[4] * m[9] - m[2] * m[8] * m[5];
        var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];
        if ( true && det === 0) {
            console.error(m);
            throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("can not invert matrix with zero determinant");
        }
        for (var i = 0; i < 16; i++)
            r[i] /= det;
    };
    mat4.transpose = function (out, mHolder) {
        var m = mHolder.mat16;
        out.set(m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]);
    };
    var m16h = Mat16Holder.create();
    mat4.makeIdentity(m16h);
    mat4.IDENTITY = m16h.mat16;
    mat4.IDENTITY_HOLDER = new Mat16Holder();
    mat4.IDENTITY_HOLDER.set.apply(mat4.IDENTITY_HOLDER, mat4.IDENTITY);
})(mat4 || (mat4 = {}));


/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KEY_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return KeyPadEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractKeypad; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_geometry_abstract_observableEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



var KEY_STATE;
(function (KEY_STATE) {
    KEY_STATE[KEY_STATE["KEY_JUST_PRESSED"] = 2] = "KEY_JUST_PRESSED";
    KEY_STATE[KEY_STATE["KEY_PRESSED"] = 1] = "KEY_PRESSED";
    KEY_STATE[KEY_STATE["KEY_JUST_RELEASED"] = 0] = "KEY_JUST_RELEASED";
    KEY_STATE[KEY_STATE["KEY_RELEASED"] = -1] = "KEY_RELEASED";
})(KEY_STATE || (KEY_STATE = {}));
var KeyPadEvent = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(KeyPadEvent, _super);
    function KeyPadEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return KeyPadEvent;
}(_engine_geometry_abstract_observableEntity__WEBPACK_IMPORTED_MODULE_1__[/* ObservableEntity */ "a"]));

var AbstractKeypad = (function () {
    function AbstractKeypad(game) {
        this.buffer = [];
        this.game = game;
    }
    AbstractKeypad.prototype.press = function (event) {
        event.keyState = KEY_STATE.KEY_PRESSED;
        this.buffer.push(event);
        this.notify(this.keyPressed, event);
    };
    AbstractKeypad.prototype.release = function (event) {
        event.keyState = KEY_STATE.KEY_JUST_RELEASED;
        this.notify(this.keyReleased, event);
    };
    AbstractKeypad.prototype.update = function () {
        for (var _i = 0, _a = this.buffer; _i < _a.length; _i++) {
            var event = _a[_i];
            if (!event.isCaptured())
                continue;
            var keyVal = event.keyState;
            switch (keyVal) {
                case KEY_STATE.KEY_RELEASED:
                    this.buffer.splice(this.buffer.indexOf(event), 1);
                    event.release();
                    break;
                case KEY_STATE.KEY_JUST_RELEASED:
                    event.keyState = KEY_STATE.KEY_RELEASED;
                    break;
                case KEY_STATE.KEY_JUST_PRESSED:
                    event.keyState = KEY_STATE.KEY_PRESSED;
                    break;
                case KEY_STATE.KEY_PRESSED:
                    this.notify(this.keyHold, event);
                    break;
                default:
                    if (true)
                        throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_2__[/* DebugError */ "a"]("unknown button state: " + keyVal);
                    break;
            }
        }
    };
    AbstractKeypad.prototype.notify = function (eventName, e) {
        this.game.getCurrScene().trigger(eventName, e);
    };
    return AbstractKeypad;
}());



/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCENE_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Scene; });
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _engine_resources_resourceLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _engine_delegates_tweenableDelegate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _engine_delegates_timerDelegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var _engine_delegates_eventEmitterDelegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _engine_geometry_point2d__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _engine_renderable_impl_geometry_rectangle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var _engine_scene_sceneLifeCicleState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26);
/* harmony import */ var _engine_geometry_size__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7);












var IDENTITY_HOLDER = _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_7__[/* mat4 */ "a"].IDENTITY_HOLDER;
var SCENE_EVENTS;
(function (SCENE_EVENTS) {
    SCENE_EVENTS["PRELOADING"] = "preloading";
    SCENE_EVENTS["PROGRESS"] = "progress";
    SCENE_EVENTS["COMPLETED"] = "completed";
    SCENE_EVENTS["CONTINUE"] = "continue";
    SCENE_EVENTS["INACTIVATED"] = "inactivated";
})(SCENE_EVENTS || (SCENE_EVENTS = {}));
var Scene = (function () {
    function Scene(game) {
        this.game = game;
        this.type = "Scene";
        this.colorBG = _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_1__[/* Color */ "a"].WHITE.clone();
        this.pos = new _engine_geometry_point2d__WEBPACK_IMPORTED_MODULE_6__[/* Point2d */ "a"]();
        this.filters = [];
        this.alpha = 1;
        this.size = new _engine_geometry_size__WEBPACK_IMPORTED_MODULE_11__[/* Size */ "a"]();
        this.lifeCycleState = _engine_scene_sceneLifeCicleState__WEBPACK_IMPORTED_MODULE_10__[/* SceneLifeCycleState */ "a"].CREATED;
        this._layers = [];
        this._propertyAnimations = [];
        this._tweenDelegate = new _engine_delegates_tweenableDelegate__WEBPACK_IMPORTED_MODULE_3__[/* TweenableDelegate */ "a"]();
        this._timerDelegate = new _engine_delegates_timerDelegate__WEBPACK_IMPORTED_MODULE_4__[/* TimerDelegate */ "a"]();
        this._eventEmitterDelegate = new _engine_delegates_eventEmitterDelegate__WEBPACK_IMPORTED_MODULE_5__[/* EventEmitterDelegate */ "a"]();
        this.resourceLoader = new _engine_resources_resourceLoader__WEBPACK_IMPORTED_MODULE_2__[/* ResourceLoader */ "a"](game);
        this.size.set(this.game.size);
    }
    Scene.isLayerGuard = function (modelOrLayer) {
        return modelOrLayer.type === 'Layer';
    };
    Scene.prototype.revalidate = function () {
        if (this.size.isZero())
            this.size.set(this.game.size);
    };
    Scene.prototype.getLayers = function () {
        return this._layers;
    };
    Scene.prototype.getDefaultLayer = function () {
        if (!this._layers.length)
            this.appendChild(new _layer__WEBPACK_IMPORTED_MODULE_0__[/* Layer */ "a"](this.game));
        return this._layers[this._layers.length - 1];
    };
    Scene.prototype.getLayerById = function (id) {
        for (var _i = 0, _a = this._layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            if (layer.id === id)
                return layer;
        }
        return undefined;
    };
    Scene.prototype.getLayerAtIndex = function (index) {
        return this._layers[index];
    };
    Scene.prototype.removeChild = function (modelOrLayer) {
        if (Scene.isLayerGuard(modelOrLayer)) {
            var i = this._layers.indexOf(modelOrLayer);
            if ( true && i === -1)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_9__[/* DebugError */ "a"]("can not remove layer: is doesn't belong to target scene");
            this._layers.splice(i, 1);
        }
        else {
            this.getDefaultLayer().removeChild(modelOrLayer);
        }
    };
    Scene.prototype.appendChild = function (modelOrLayer) {
        if (Scene.isLayerGuard(modelOrLayer)) {
            modelOrLayer.setScene(this);
            this._layers.push(modelOrLayer);
        }
        else {
            modelOrLayer.revalidate();
            this.getDefaultLayer().appendChild(modelOrLayer);
        }
    };
    Scene.prototype.prependChild = function (go) {
        this.getDefaultLayer().prependChild(go);
    };
    Scene.prototype.fitSizeToChildren = function () {
        var maxRight = this.game.size.width;
        var maxBottom = this.game.size.height;
        this._layers.forEach(function (l) {
            l.children.forEach(function (c) {
                var right = c.pos.x + c.size.width;
                var bottom = c.pos.y + c.size.height;
                if (right > maxRight)
                    maxRight = right;
                if (bottom > maxBottom)
                    maxBottom = bottom;
            });
        });
        this.size.setWH(maxRight, maxBottom);
    };
    Scene.prototype.update = function () {
        if (!this.resourceLoader.isCompleted()) {
            if (this.preloadingGameObject !== undefined) {
                this.preloadingGameObject.update();
            }
        }
        else {
            this.updateFrame();
        }
    };
    Scene.prototype.renderToTexture = function (target) {
        this.game.getRenderer().getHelper().renderSceneToTexture(this, target);
    };
    Scene.prototype.addPropertyAnimation = function (animation) {
        this._propertyAnimations.push(animation);
    };
    Scene.prototype.addTween = function (t) {
        this._tweenDelegate.addTween(t);
    };
    Scene.prototype.addTweenMovie = function (tm) {
        this._tweenDelegate.addTweenMovie(tm);
    };
    Scene.prototype.tween = function (desc) {
        return this._tweenDelegate.tween(desc);
    };
    Scene.prototype.setTimeout = function (callback, interval) {
        return this._timerDelegate.setTimeout(callback, interval);
    };
    Scene.prototype.setInterval = function (callback, interval) {
        return this._timerDelegate.setInterval(callback, interval);
    };
    Scene.prototype.off = function (eventName, callBack) {
        this._eventEmitterDelegate.off(eventName, callBack);
    };
    Scene.prototype.on = function (eventName, callBack) {
        return this._eventEmitterDelegate.on(eventName, callBack);
    };
    Scene.prototype.once = function (eventName, callBack) {
        this._eventEmitterDelegate.once(eventName, callBack);
    };
    Scene.prototype.trigger = function (eventName, data) {
        this._eventEmitterDelegate.trigger(eventName, data);
    };
    Scene.prototype.findChildById = function (id) {
        for (var _i = 0, _a = this._layers; _i < _a.length; _i++) {
            var l = _a[_i];
            var possibleObject = l.findChildById(id);
            if (possibleObject)
                return possibleObject;
        }
        return undefined;
    };
    Scene.prototype.onPreloading = function () {
        var rect = new _engine_renderable_impl_geometry_rectangle__WEBPACK_IMPORTED_MODULE_8__[/* Rectangle */ "a"](this.game);
        rect.fillColor.setRGB(10, 100, 100);
        rect.size.height = 10;
        this.preloadingGameObject = rect;
    };
    Scene.prototype.onProgress = function (val) {
        if (this.preloadingGameObject !== undefined)
            this.preloadingGameObject.size.width = val * this.game.size.width;
    };
    Scene.prototype.onReady = function () { };
    Scene.prototype.onContinue = function () { };
    Scene.prototype.render = function () {
        var _a, _b;
        var renderer = this.game.getRenderer();
        renderer.transformSave();
        renderer.saveAlphaBlend();
        renderer.clearColor.set(this.colorBG);
        var statePointer = renderer.beforeFrameDraw(this.filters);
        if (this.game.camera.worldTransformDirty) {
            this.game.camera.translate();
            this.game.camera.transform();
            (_a = this.game.camera.worldTransformMatrix).set.apply(_a, this.game.getRenderer().transformGet());
        }
        else {
            (_b = this.game.getRenderer()).transformSet.apply(_b, this.game.camera.worldTransformMatrix.mat16);
        }
        renderer.setAlphaBlend(this.alpha);
        if (!this.resourceLoader.isCompleted()) {
            if (this.preloadingGameObject !== undefined) {
                this.preloadingGameObject.render();
            }
        }
        else {
            for (var _i = 0, _c = this._layers; _i < _c.length; _i++) {
                var l = _c[_i];
                if (l.transformType === _layer__WEBPACK_IMPORTED_MODULE_0__[/* LayerTransformType */ "b"].STICK_TO_CAMERA) {
                    renderer.transformSave();
                    renderer.transformSet.apply(renderer, IDENTITY_HOLDER.mat16);
                }
                l.render();
                if (l.transformType === _layer__WEBPACK_IMPORTED_MODULE_0__[/* LayerTransformType */ "b"].STICK_TO_CAMERA) {
                    renderer.transformRestore();
                }
            }
        }
        renderer.restoreAlphaBlend();
        renderer.transformSave();
        this.onRender();
        renderer.transformRestore();
        if (true) {
            if (this.game.getRenderer().debugTextField &&
                this.game.getRenderer().debugTextField.getFont().getResourceLink() &&
                this.game.getRenderer().debugTextField.getFont().getResourceLink().getTarget()) {
                renderer.transformSave();
                renderer.transformSet.apply(renderer, IDENTITY_HOLDER.mat16);
                this.game.getRenderer().debugTextField.update();
                this.game.getRenderer().debugTextField.render();
                renderer.transformRestore();
            }
        }
        renderer.afterFrameDraw(statePointer);
        renderer.transformRestore();
    };
    Scene.prototype.onInactivated = function () { };
    Scene.prototype.onUpdate = function () { };
    Scene.prototype.onRender = function () { };
    Scene.prototype.updateFrame = function () {
        this.game.camera.update();
        this._tweenDelegate.update();
        this._timerDelegate.update();
        for (var _i = 0, _a = this._propertyAnimations; _i < _a.length; _i++) {
            var a = _a[_i];
            a.update();
        }
        for (var _b = 0, _c = this._layers; _b < _c.length; _b++) {
            var l = _c[_b];
            l.update();
        }
        if (this.game.hasPhysicsSystem())
            this.game.getPhysicsSystem().nextTick(this);
        this.onUpdate();
    };
    return Scene;
}());



/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShaderProgram; });
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _shaderProgramUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var ShaderProgram = (function () {
    function ShaderProgram(_gl, vertexSource, fragmentSource) {
        this._gl = _gl;
        this._attributeSourceNames = [];
        var vShader = Object(_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_1__[/* compileShader */ "b"])(_gl, vertexSource, _gl.VERTEX_SHADER);
        var fShader = Object(_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_1__[/* compileShader */ "b"])(_gl, fragmentSource, _gl.FRAGMENT_SHADER);
        this._program = Object(_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_1__[/* createProgram */ "c"])(_gl, vShader, fShader);
        _gl.deleteShader(vShader);
        _gl.deleteShader(fShader);
        this._uniforms = Object(_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_1__[/* extractUniformsFromShaderBin */ "f"])(_gl, this);
        this._attributes = Object(_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_1__[/* extractAttributes */ "d"])(_gl, this);
        var sourceExtracted = Object(_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_1__[/* extractUniformsAndAttributesFromShaderSource */ "e"])(vertexSource, fragmentSource);
        this._attributeSourceNames = sourceExtracted.attributes;
        this._uniformSourceNames = sourceExtracted.uniforms;
    }
    ShaderProgram.prototype.getProgram = function () {
        return this._program;
    };
    ShaderProgram.prototype.bind = function () {
        if (ShaderProgram.currentProgram === this)
            return;
        this._gl.useProgram(this._program);
        ShaderProgram.currentProgram = this;
    };
    ShaderProgram.prototype.unbind = function () {
        this._gl.useProgram(null);
        ShaderProgram.currentProgram = undefined;
    };
    ShaderProgram.prototype.setUniform = function (name, value) {
        if ( true && !name) {
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("no uniform name was provided!");
        }
        var uniformWrapper = this._uniforms[name];
        if ( true && !uniformWrapper) {
            if (this._uniformSourceNames.indexOf(name) > -1) {
                return;
            }
            console.error('shader program failed', this);
            console.error('uniforms', this._uniforms);
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("no uniform with name " + name + " found!");
        }
        if (true) {
            if (ShaderProgram.currentProgram !== this) {
                console.error(this);
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not set uniform: target program is inactive");
            }
        }
        uniformWrapper.setter(this._gl, uniformWrapper.location, value);
    };
    ShaderProgram.prototype.bindBuffer = function (buffer, attrName) {
        if (true) {
            if (!attrName)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not find attribute location: attrName not defined");
            if (this._attributes[attrName] === undefined) {
                if (this._attributeSourceNames.indexOf(attrName) > -1) {
                    return;
                }
                console.log(this);
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not find attribute location for  " + attrName);
            }
        }
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, buffer.getGlBuffer());
        this.enableAttribute(attrName);
        var attrLocation = this._attributes[attrName];
        this._gl.vertexAttribPointer(attrLocation, buffer.getItemSize(), buffer.getItemType(), false, 0, 0);
    };
    ShaderProgram.prototype.disableAttribute = function (attrName) {
        this.toggleAttribute(attrName, false);
    };
    ShaderProgram.prototype.enableAttribute = function (attrName) {
        this.toggleAttribute(attrName, true);
    };
    ShaderProgram.prototype.destroy = function () {
        this._gl.deleteProgram(this._program);
    };
    ShaderProgram.prototype.toggleAttribute = function (attrName, on) {
        if (this._attributes[attrName] === undefined) {
            console.log(this);
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("unbind error: can not find attribute location for  " + attrName);
        }
        var attrLocation = this._attributes[attrName];
        if (on)
            this._gl.enableVertexAttribArray(attrLocation);
        else
            this._gl.disableVertexAttribArray(attrLocation);
    };
    return ShaderProgram;
}());



/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractDrawer; });
/* harmony import */ var _engine_misc_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _engine_misc_collection_fastMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);



var AbstractDrawer = (function () {
    function AbstractDrawer(gl) {
        this.uniformCache = new _engine_misc_collection_fastMap__WEBPACK_IMPORTED_MODULE_2__[/* FastMap */ "a"]();
        this.texturesToBind = { length: 0, texturesInfo: [] };
        this.gl = gl;
    }
    AbstractDrawer.prototype.destroy = function () {
        if (this.bufferInfo)
            this.bufferInfo.destroy();
        if (this.program !== undefined)
            this.program.destroy();
    };
    AbstractDrawer.prototype.setUniform = function (name, value) {
        if ( true && !name) {
            console.trace();
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("can not set uniform with value " + value + ": name is not provided");
        }
        if ( true && value === null || value === undefined) {
            console.trace();
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("can not set uniform with name " + name + " and value " + value);
        }
        if (this.uniformCache.has(name) && Object(_engine_misc_object__WEBPACK_IMPORTED_MODULE_0__[/* isEqual */ "c"])(this.uniformCache.get(name).value, value))
            return;
        if (Object(_engine_misc_object__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "a"])(value)) {
            if (!this.uniformCache.has(name)) {
                this.uniformCache.put(name, { value: new Float32Array(value.length), dirty: true });
            }
            var uniformInCache = this.uniformCache.get(name);
            var arr = uniformInCache.value;
            arr.set(value);
            uniformInCache.dirty = true;
        }
        else {
            this.uniformCache.put(name, { value: value, dirty: true });
        }
    };
    AbstractDrawer.prototype.attachTexture = function (uniformName, texture) {
        this.texturesToBind.texturesInfo[this.texturesToBind.length] =
            this.texturesToBind.texturesInfo[this.texturesToBind.length] || { uniformName: undefined, texture: undefined };
        this.texturesToBind.texturesInfo[this.texturesToBind.length].uniformName = uniformName;
        this.texturesToBind.texturesInfo[this.texturesToBind.length].texture = texture;
        this.texturesToBind.length++;
    };
    AbstractDrawer.prototype.getAttachedTextureAt = function (i) {
        if ( true && i > this.texturesToBind.length - 1)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("can not find bound texture: out of range: index:" + i + ", length:" + this.texturesToBind.length);
        return this.texturesToBind.texturesInfo[i].texture;
    };
    AbstractDrawer.prototype.setUniformsFromMap = function (batch) {
        var keys = batch.getKeys();
        var values = batch.getValues();
        for (var i = 0; i < keys.length; i++) {
            this.setUniform(keys[i], values[i]);
        }
    };
    AbstractDrawer.prototype.draw = function () {
        this.bind();
        var keys = this.uniformCache.getKeys();
        var values = this.uniformCache.getValues();
        for (var i = 0; i < keys.length; i++) {
            if (!values[i].dirty)
                continue;
            this._setUniform(keys[i], values[i].value);
            values[i].dirty = false;
        }
        for (var i = 0, max = this.texturesToBind.length; i < max; i++) {
            var t = this.texturesToBind.texturesInfo[i];
            t.texture.bind(t.uniformName, i, this.program);
        }
        this.texturesToBind.length = 0;
        this.drawElements();
        this.unbind();
    };
    AbstractDrawer.prototype.bind = function () {
        var _a;
        if ( true && this.program === undefined) {
            console.error(this);
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("can not init drawer: initProgram method must be invoked!");
        }
        if (AbstractDrawer.currentInstance === this)
            return;
        (_a = AbstractDrawer.currentInstance) === null || _a === void 0 ? void 0 : _a.unbind();
        AbstractDrawer.currentInstance = this;
        this.bufferInfo.bind(this.program);
    };
    AbstractDrawer.prototype.unbind = function () {
        this.bufferInfo.unbind(this.program);
        AbstractDrawer.currentInstance = undefined;
    };
    AbstractDrawer.prototype.drawElements = function () {
        this.bufferInfo.draw();
    };
    AbstractDrawer.prototype._setUniform = function (name, value) {
        this.program.setUniform(name, value);
    };
    return AbstractDrawer;
}());



/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseableEntity; });
var ReleaseableEntity = (function () {
    function ReleaseableEntity() {
        this._captured = false;
    }
    ReleaseableEntity.prototype.isCaptured = function () {
        return this._captured;
    };
    ReleaseableEntity.prototype.capture = function () {
        this._captured = true;
        return this;
    };
    ReleaseableEntity.prototype.release = function () {
        this._captured = false;
        return this;
    };
    return ReleaseableEntity;
}());



/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rectangle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _abstract_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);


var Rectangle = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Rectangle, _super);
    function Rectangle(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Rectangle';
        _this.borderRadius = 0;
        _this.size.setWH(16);
        _this.lineWidth = 1;
        return _this;
    }
    Rectangle.prototype.draw = function () {
        this.game.getRenderer().drawRectangle(this);
    };
    Rectangle.prototype.clone = function () {
        var cloned = new Rectangle(this.game);
        this.setClonedProperties(cloned);
        return cloned;
    };
    Rectangle.prototype.setProps = function (props) {
        _super.prototype.setProps.call(this, props);
        if (props.borderRadius !== undefined)
            this.borderRadius = props.borderRadius;
    };
    Rectangle.prototype.setClonedProperties = function (cloned) {
        cloned.borderRadius = this.borderRadius;
        cloned.size.set(this.size);
        cloned.lineWidth = this.lineWidth;
        _super.prototype.setClonedProperties.call(this, cloned);
    };
    return Rectangle;
}(_abstract_shape__WEBPACK_IMPORTED_MODULE_1__[/* Shape */ "a"]));



/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneLifeCycleState; });
var SceneLifeCycleState;
(function (SceneLifeCycleState) {
    SceneLifeCycleState[SceneLifeCycleState["CREATED"] = 0] = "CREATED";
    SceneLifeCycleState[SceneLifeCycleState["PRELOADING"] = 1] = "PRELOADING";
    SceneLifeCycleState[SceneLifeCycleState["COMPLETED"] = 2] = "COMPLETED";
    SceneLifeCycleState[SceneLifeCycleState["INACTIVATED"] = 3] = "INACTIVATED";
})(SceneLifeCycleState || (SceneLifeCycleState = {}));


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ makeIdentityPositionMatrix; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ FLIP_TEXTURE_MATRIX; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ webGlRendererHelper_WebGlRendererHelper; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// CONCATENATED MODULE: ./engine/renderer/abstract/rendererHelper.ts
var RendererHelper = (function () {
    function RendererHelper(game) {
        this.game = game;
    }
    RendererHelper.prototype.renderSceneToTexture = function (scene, renderTarget) {
        return undefined;
    };
    RendererHelper.prototype.renderModelToTexture = function (m, renderTarget, clearColor) {
        return undefined;
    };
    RendererHelper.prototype.createRenderTarget = function (game, size) {
        return undefined;
    };
    RendererHelper.prototype.destroyRenderTarget = function (t) { };
    return RendererHelper;
}());


// EXTERNAL MODULE: ./engine/renderer/webGl/base/frameBufferStack.ts + 3 modules
var frameBufferStack = __webpack_require__(44);

// EXTERNAL MODULE: ./engine/geometry/mat4.ts
var mat4 = __webpack_require__(2);

// EXTERNAL MODULE: ./engine/renderer/webGl/base/matrixStack.ts
var matrixStack = __webpack_require__(33);

// CONCATENATED MODULE: ./engine/renderer/webGl/webGlRendererHelper.ts





var Mat16Holder = mat4["a" /* mat4 */].Mat16Holder;
var makeIdentityPositionMatrix = function (dstX, dstY, destSize) {
    var projectionMatrix = Mat16Holder.fromPool();
    var dstWidth = destSize.width;
    var dstHeight = destSize.height;
    mat4["a" /* mat4 */].ortho(projectionMatrix, 0, dstWidth, 0, dstHeight, -1, 1);
    var scaleMatrix = Mat16Holder.fromPool();
    mat4["a" /* mat4 */].makeScale(scaleMatrix, dstWidth, dstHeight, 1);
    var result = Mat16Holder.fromPool();
    mat4["a" /* mat4 */].matrixMultiply(result, scaleMatrix, projectionMatrix);
    projectionMatrix.release();
    scaleMatrix.release();
    return result;
};
var FLIP_TEXTURE_MATRIX = new matrixStack["a" /* MatrixStack */]().translate(0, 1).scale(1, -1).release().getCurrentValue().clone();
var webGlRendererHelper_WebGlRendererHelper = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(WebGlRendererHelper, _super);
    function WebGlRendererHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebGlRendererHelper.prototype.createRenderTarget = function (game, size) {
        var renderer = this.game.getRenderer();
        return new frameBufferStack["a" /* FrameBufferStack */](game, renderer.getNativeContext(), size);
    };
    WebGlRendererHelper.prototype.renderSceneToTexture = function (scene, renderTarget) {
        var renderer = this.game.getRenderer();
        renderer.setRenderTarget(renderTarget);
        scene.render();
        renderer.setDefaultRenderTarget();
    };
    WebGlRendererHelper.prototype.renderModelToTexture = function (m, renderTarget, clearColor) {
        var renderer = this.game.getRenderer();
        if (m.size.isZero())
            m.revalidate();
        renderer.setRenderTarget(renderTarget);
        var clearBeforeRenderOrig = renderer.clearBeforeRender;
        var clearColorOrig = renderer.clearColor;
        renderer.clearBeforeRender = clearColor !== undefined;
        if (clearColor !== undefined)
            renderer.clearColor.set(clearColor);
        var statePointer = renderer.beforeFrameDraw(m.filters);
        m.render();
        renderer.afterFrameDraw(statePointer);
        renderer.setDefaultRenderTarget();
        renderer.clearBeforeRender = clearBeforeRenderOrig;
        renderer.clearColor.set(clearColorOrig);
    };
    return WebGlRendererHelper;
}(RendererHelper));



/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Texture; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _engine_geometry_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _engine_renderer_webGl_base_abstract_abstractTexture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);




var Texture = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Texture, _super);
    function Texture(gl) {
        var _this = _super.call(this, gl) || this;
        _this.gl = gl;
        _this.samplerType = _this.gl.TEXTURE_2D;
        _this.setRawData(new Uint8Array([0, 255, 0, 255]), 1, 1);
        return _this;
    }
    Texture.prototype.setImage = function (img, size) {
        if (size === void 0) { size = new _engine_geometry_size__WEBPACK_IMPORTED_MODULE_2__[/* Size */ "a"](0, 0); }
        var gl = this.gl;
        if (true) {
            if (!(img || size.width || size.height))
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("texture.setImage: if image is undefined, width and height must be specified: tex.setImage(null,w,h)");
            var maxSupportedSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
            if ( true && !maxSupportedSize)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("Can not obtain MAX_TEXTURE_SIZE value");
            if (size.width > maxSupportedSize || size.height > maxSupportedSize) {
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("can not create texture with size " + size.width + "x" + size.height + ", max supported size is " + maxSupportedSize);
            }
        }
        if (img !== undefined)
            this.size.setWH(img.width, img.height);
        else
            this.size.set(size);
        this.beforeOperation();
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
        if (img) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        }
        else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size.width, size.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        this.setFilters();
        this.setInterpolationMode(_engine_renderer_webGl_base_abstract_abstractTexture__WEBPACK_IMPORTED_MODULE_3__[/* INTERPOLATION_MODE */ "b"].LINEAR);
        this.afterOperation();
    };
    Texture.prototype.toDataArray = function () {
        var gl = this.gl;
        var wxh = this.size.width * this.size.height;
        var fb = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.tex, 0);
        if ( true && gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("wrong framebuffer state!");
        var pixels = new Uint8Array(wxh * 4);
        gl.readPixels(0, 0, this.size.width, this.size.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        return pixels;
    };
    Texture.prototype.toDataUrl = function () {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = this.size.width;
        canvas.height = this.size.height;
        var imgData = ctx.createImageData(this.size.width, this.size.height);
        imgData.data.set(this.toDataArray());
        ctx.putImageData(imgData, 0, 0);
        return canvas.toDataURL();
    };
    Texture.prototype.setRawData = function (data, width, height, mode) {
        if (mode === void 0) { mode = _engine_renderer_webGl_base_abstract_abstractTexture__WEBPACK_IMPORTED_MODULE_3__[/* INTERPOLATION_MODE */ "b"].LINEAR; }
        if (true) {
            var numOfBytes = width * height * 4;
            if (data.length !== numOfBytes) {
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("unexpected Uint8Array length, expected width*height*4 (" + width + "*" + height + "*4=" + numOfBytes + "), but is found " + data.length);
            }
        }
        var gl = this.gl;
        this.beforeOperation();
        this.size.setWH(width, height);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
        this.setFilters();
        this.setInterpolationMode(mode);
        this.afterOperation();
    };
    return Texture;
}(_engine_renderer_webGl_base_abstract_abstractTexture__WEBPACK_IMPORTED_MODULE_3__[/* AbstractTexture */ "a"]));



/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stack; });
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var Stack = (function () {
    function Stack() {
        this._array = new Array(16);
        this._stackPointer = 0;
    }
    Stack.prototype.push = function (obj) {
        this._array[this._stackPointer++] = obj;
    };
    Stack.prototype.pop = function () {
        if ( true && this._stackPointer === 0)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("empty stack");
        this._stackPointer--;
        var res = this._array[this._stackPointer];
        this._array[this._stackPointer] = undefined;
        return res;
    };
    Stack.prototype.replaceLast = function (obj) {
        if (!this._array.length)
            this.push(obj);
        else
            this._array[this._stackPointer - 1] = obj;
    };
    Stack.prototype.getLast = function () {
        if (!this._array)
            return undefined;
        else
            return this._array[this._stackPointer - 1];
    };
    Stack.prototype.getAt = function (i) {
        return this._array[i];
    };
    Stack.prototype.size = function () {
        return this._stackPointer;
    };
    Stack.prototype.isEmpty = function () {
        return this._stackPointer === 0;
    };
    return Stack;
}());



/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return compileShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GL_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return normalizeUniformName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return extractUniformsFromShaderBin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return extractUniformsAndAttributesFromShaderSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return extractAttributes; });
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _engine_misc_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);


var parseErrors = function (log) {
    if (false)
        {}
    var logs = [];
    var result;
    while (!!(result = log.match(/ERROR\:([^\n]+)/))) {
        if (result.index !== undefined)
            log = log.slice((result.index + 1));
        var line = result[1].trim();
        var seps = line.split(':');
        var message = seps.slice(2).join(':').trim();
        var lineNum = +seps[1];
        logs.push({ message: message, lineNum: lineNum });
    }
    return logs;
};
var compileShader = function (gl, shaderSource, shaderType) {
    if (true) {
        if (!shaderSource)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not compile shader: shader source not specified for type " + shaderType);
    }
    var shader = gl.createShader(shaderType);
    if ( true && !shader)
        throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not allocate memory for shader: gl.createShader(shaderType)");
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        var lastError = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        if (lastError !== null) {
            if (true) {
                var parsedLogs = parseErrors(lastError);
                var lines_1 = shaderSource.split('\n');
                var errorMsg_1 = '';
                var arrow_1 = '----->';
                parsedLogs.forEach(function (inf) {
                    var i = inf.lineNum - 1;
                    if (lines_1[i].indexOf(arrow_1) === -1)
                        lines_1[i] = arrow_1 + " " + lines_1[i];
                    errorMsg_1 += lines_1[i] + " <----" + inf.message + "\n";
                });
                console.log(lines_1.join('\n'));
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("Error compiling shader: " + (errorMsg_1 ? errorMsg_1 : lastError));
            }
            else {}
        }
        else {
            throw new Error( true ? 'unknown compilation error' : undefined);
        }
    }
    return shader || undefined;
};
var createProgram = function (gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    if ( true && !program)
        throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not allocate memory for gl.createProgram()");
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        var lastError = gl.getProgramInfoLog(program);
        if (lastError) {
            if (true) {
                var status = gl.getProgramParameter(program, gl.VALIDATE_STATUS);
                console.error('VALIDATE_STATUS', status);
                var vertexSource = gl.getShaderSource(vertexShader);
                var fragmentSource = gl.getShaderSource(fragmentShader);
                console.log(vertexSource);
                console.log('\n\n');
                console.log(fragmentSource);
                gl.deleteProgram(program);
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("Error in program linking. Last error \"" + lastError + "\", status: " + status);
            }
            else {}
        }
        else {
            throw new Error( true ? 'unknown linking error' : undefined);
        }
    }
    return program;
};
var GL_TABLE;
var GL_TYPE;
(function (GL_TYPE) {
    GL_TYPE["FLOAT"] = "float";
    GL_TYPE["FLOAT_VEC2"] = "vec2";
    GL_TYPE["FLOAT_VEC3"] = "vec3";
    GL_TYPE["FLOAT_VEC4"] = "vec4";
    GL_TYPE["INT"] = "int";
    GL_TYPE["INT_VEC2"] = "ivec2";
    GL_TYPE["INT_VEC3"] = "ivec3";
    GL_TYPE["INT_VEC4"] = "ivec4";
    GL_TYPE["BOOL"] = "bool";
    GL_TYPE["BOOL_VEC2"] = "bvec2";
    GL_TYPE["BOOL_VEC3"] = "bvec3";
    GL_TYPE["BOOL_VEC4"] = "bvec4";
    GL_TYPE["FLOAT_MAT2"] = "mat2";
    GL_TYPE["FLOAT_MAT3"] = "mat3";
    GL_TYPE["FLOAT_MAT4"] = "mat4";
    GL_TYPE["SAMPLER_2D"] = "sampler2D";
    GL_TYPE["SAMPLER_CUBE"] = "samplerCube";
})(GL_TYPE || (GL_TYPE = {}));
var mapType = function (gl, type) {
    if (GL_TABLE === undefined) {
        var typeNames = Object.keys(GL_TYPE);
        GL_TABLE = {};
        for (var i = 0; i < typeNames.length; ++i) {
            var tn = typeNames[i];
            GL_TABLE[gl[tn]] = GL_TYPE[tn];
        }
    }
    return GL_TABLE[type];
};
var normalizeUniformName = function (s) {
    if ( true && s.indexOf(' ') > -1)
        throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("bad uniform name: \"" + s + "\", check spaces!");
    else
        return s;
};
var extractUniformsFromShaderBin = function (gl, program) {
    var glProgram = program.getProgram();
    var activeUniforms = gl.getProgramParameter(glProgram, gl.ACTIVE_UNIFORMS);
    var uniforms = {};
    for (var i = 0; i < activeUniforms; i++) {
        var uniformData = gl.getActiveUniform(glProgram, i);
        if ( true && !uniformData)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not receive active uniforms info: gl.getActiveUniform()");
        var type = mapType(gl, uniformData.type);
        var name = normalizeUniformName(uniformData.name);
        var location = gl.getUniformLocation(glProgram, name);
        if ( true && location === null) {
            console.log(program);
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("error finding uniform location: " + uniformData.name);
        }
        uniforms[name] = {
            type: type,
            size: uniformData.size,
            location: location,
            setter: getUniformSetter(uniformData.size, type)
        };
        if (name.indexOf('[') > -1) {
            var arrayName = name.split(/\[/)[0];
            uniforms[arrayName] = uniforms[name];
        }
    }
    return uniforms;
};
var extractUniformsAndAttributesFromShaderSource = function (vertexSource, fragmentSource) {
    var uniforms = [];
    var attributes = [];
    var allTokens = (vertexSource + " " + fragmentSource).split(/[\s;]/).filter(function (it) { return !!it; });
    allTokens.forEach(function (it, i) {
        var possibleUniformName = allTokens[i + 2];
        if (it === 'uniform' && possibleUniformName !== undefined && uniforms.indexOf(possibleUniformName) === -1) {
            uniforms.push(possibleUniformName);
        }
        else {
            var possibleAttributeName = allTokens[i + 2];
            if (it === 'attribute' && possibleAttributeName !== undefined && attributes.indexOf(possibleAttributeName) === -1) {
                attributes.push(possibleAttributeName);
            }
        }
    });
    return { uniforms: uniforms, attributes: attributes };
};
var extractAttributes = function (gl, program) {
    var glProgram = program.getProgram();
    var activeAttributes = gl.getProgramParameter(glProgram, gl.ACTIVE_ATTRIBUTES);
    var attrMap = {};
    for (var i = 0; i < activeAttributes; i++) {
        var attrData = gl.getActiveAttrib(glProgram, i);
        if ( true && !attrData)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not receive active attribute info: gl.getActiveAttrib()");
        var location = gl.getAttribLocation(glProgram, attrData.name);
        if ( true && location < 0) {
            console.log(program);
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("error finding attribute location: " + attrData.name);
        }
        attrMap[attrData.name] = location;
    }
    return attrMap;
};
var isNumber = function (val) {
    if (false)
        {}
    if (isNaN(parseFloat(String(val))) || !isFinite(Number(val)))
        throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not set uniform with value " + val + ": expected argument of type number");
    else
        return true;
};
var isInteger = function (val) {
    if (false)
        {}
    isNumber(val);
    if (val !== ~~val)
        throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not set uniform with value " + val + ": expected argument of integer type, but " + val + " found");
    else
        return true;
};
var isBoolean = function (val) {
    if (false)
        {}
    if (!(val === true || val === false))
        throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not set uniform with value " + val + ": expected argument of boolean type, but " + val + " found");
    else
        return true;
};
var isArrayOfType = function (val, checker, size) {
    if (false)
        {}
    if (!val)
        throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not set uniform  value: " + val);
    if (Object(_engine_misc_object__WEBPACK_IMPORTED_MODULE_1__[/* isCommonArray */ "b"])(val)) {
        console.error(val);
        throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not use primitive array as uniform value. Use Float32Array of Int32Array instead");
    }
    if (!Object(_engine_misc_object__WEBPACK_IMPORTED_MODULE_1__[/* isTypedArray */ "d"])(val)) {
        console.error('Can not set uniform value', val);
        throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not set uniform with value [" + val + "]: expected argument of type Array");
    }
    if (size !== undefined && val.length !== size)
        throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not set uniform with value [" + val + "]: expected array with size " + size + ", but " + val.length + " found");
    for (var i = 0; i < val.length; i++) {
        try {
            checker(val[i]);
        }
        catch (e) {
            console.error('Can not set uniform array item', val);
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not set uniform array item with value [" + val + "]: unexpected array element type: " + val[i]);
        }
    }
    return true;
};
var getUniformSetter = function (size, type) {
    if (size === 1) {
        switch (type) {
            case GL_TYPE.FLOAT: return function (gl, location, value) {
                if (isNumber(value))
                    gl.uniform1f(location, value);
            };
            case GL_TYPE.FLOAT_VEC2: return function (gl, location, value) {
                if (isArrayOfType(value, isNumber, 2))
                    gl.uniform2f(location, value[0], value[1]);
            };
            case GL_TYPE.FLOAT_VEC3: return function (gl, location, value) {
                if (isArrayOfType(value, isNumber, 3))
                    gl.uniform3f(location, value[0], value[1], value[2]);
            };
            case GL_TYPE.FLOAT_VEC4: return function (gl, location, value) {
                if (isArrayOfType(value, isNumber, 4))
                    gl.uniform4f(location, value[0], value[1], value[2], value[3]);
            };
            case GL_TYPE.INT: return function (gl, location, value) {
                if (isInteger(value))
                    gl.uniform1i(location, value);
            };
            case GL_TYPE.INT_VEC2: return function (gl, location, value) {
                if (isArrayOfType(value, isInteger, 2))
                    gl.uniform2i(location, value[0], value[1]);
            };
            case GL_TYPE.INT_VEC3: return function (gl, location, value) {
                if (isArrayOfType(value, isInteger, 3))
                    gl.uniform3i(location, value[0], value[1], value[2]);
            };
            case GL_TYPE.INT_VEC4: return function (gl, location, value) {
                if (isArrayOfType(value, isInteger, 4))
                    gl.uniform4i(location, value[0], value[1], value[2], value[3]);
            };
            case GL_TYPE.BOOL: return function (gl, location, value) {
                if (isBoolean(value))
                    gl.uniform1i(location, value ? 1 : 0);
            };
            case GL_TYPE.BOOL_VEC2: return function (gl, location, value) {
                if (isArrayOfType(value, isBoolean, 2))
                    gl.uniform2i(location, value[0], value[1]);
            };
            case GL_TYPE.BOOL_VEC3: return function (gl, location, value) {
                if (isArrayOfType(value, isBoolean, 3))
                    gl.uniform3i(location, value[0], value[1], value[2]);
            };
            case GL_TYPE.BOOL_VEC4: return function (gl, location, value) {
                if (isArrayOfType(value, isBoolean, 4))
                    gl.uniform4i(location, value[0], value[1], value[2], value[3]);
            };
            case GL_TYPE.FLOAT_MAT2: return function (gl, location, value) {
                if (isArrayOfType(value, isNumber, 2 * 2))
                    gl.uniformMatrix2fv(location, false, value);
            };
            case GL_TYPE.FLOAT_MAT3: return function (gl, location, value) {
                if (isArrayOfType(value, isNumber, 3 * 3))
                    gl.uniformMatrix3fv(location, false, value);
            };
            case GL_TYPE.FLOAT_MAT4: return function (gl, location, value) {
                if (isArrayOfType(value, isNumber, 4 * 4))
                    gl.uniformMatrix4fv(location, false, value);
            };
            case GL_TYPE.SAMPLER_2D: return function (gl, location, value) {
                if (isNumber(value))
                    gl.uniform1i(location, value);
            };
            case GL_TYPE.SAMPLER_CUBE: return function (gl, location, value) {
                if (isNumber(value))
                    gl.uniform1i(location, value);
            };
            default:
                if (true)
                    throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not set uniform for type " + type + " and size " + size);
                break;
        }
    }
    else {
        switch (type) {
            case GL_TYPE.FLOAT: return function (gl, location, value) {
                if (isArrayOfType(value, isNumber, size))
                    gl.uniform1fv(location, value);
            };
            case GL_TYPE.FLOAT_VEC2: return function (gl, location, value) {
                if (isArrayOfType(value, isNumber, size * 2))
                    gl.uniform2fv(location, value);
            };
            case GL_TYPE.FLOAT_VEC3: return function (gl, location, value) {
                if (isArrayOfType(value, isNumber, size * 3))
                    gl.uniform3fv(location, value);
            };
            case GL_TYPE.FLOAT_VEC4: return function (gl, location, value) {
                if (isArrayOfType(value, isNumber, size * 4))
                    gl.uniform4fv(location, value);
            };
            case GL_TYPE.INT: return function (gl, location, value) {
                if (isArrayOfType(value, isInteger, size))
                    gl.uniform1iv(location, value);
            };
            case GL_TYPE.INT_VEC2: return function (gl, location, value) {
                if (isArrayOfType(value, isInteger, size * 2))
                    gl.uniform2iv(location, value);
            };
            case GL_TYPE.INT_VEC3: return function (gl, location, value) {
                if (isArrayOfType(value, isInteger, size * 3))
                    gl.uniform3iv(location, value);
            };
            case GL_TYPE.INT_VEC4: return function (gl, location, value) {
                if (isArrayOfType(value, isInteger, size * 4))
                    gl.uniform4iv(location, value);
            };
            case GL_TYPE.BOOL: return function (gl, location, value) {
                if (isArrayOfType(value, isBoolean, size))
                    gl.uniform1iv(location, value);
            };
            case GL_TYPE.BOOL_VEC2: return function (gl, location, value) {
                if (isArrayOfType(value, isBoolean, size * 2))
                    gl.uniform2iv(location, value);
            };
            case GL_TYPE.BOOL_VEC3: return function (gl, location, value) {
                if (isArrayOfType(value, isBoolean, size * 3))
                    gl.uniform3iv(location, value);
            };
            case GL_TYPE.BOOL_VEC4: return function (gl, location, value) {
                if (isArrayOfType(value, isBoolean, size * 4))
                    gl.uniform4iv(location, value);
            };
            case GL_TYPE.SAMPLER_2D: return function (gl, location, value) {
                if (isArrayOfType(value, isInteger, size))
                    gl.uniform1iv(location, value);
            };
            case GL_TYPE.SAMPLER_CUBE: return function (gl, location, value) {
                if (isArrayOfType(value, isInteger, size))
                    gl.uniform1iv(location, value);
            };
            default:
                if (true)
                    throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not set uniform for type " + type + " and size " + size);
                break;
        }
    }
    throw new Error();
};


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShaderGenerator; });
/* harmony import */ var _base_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var ShaderGenerator = (function () {
    function ShaderGenerator() {
        this._vertexUniforms = [];
        this._fragmentUniforms = [];
        this._attributes = [];
        this._varyings = [];
        this._appendedFragCodeBlocks = [];
        this._appendedVertexCodeBlocks = [];
        this._prependedVertexCodeBlocks = [];
        this._prependedFragCodeBlocks = [];
        this._vertexMainFn = '';
        this._fragmentMainFn = '';
    }
    ShaderGenerator.prototype.addVertexUniform = function (type, name) {
        this._vertexUniforms.push({ type: type, name: name });
        return Object(_base_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_0__[/* normalizeUniformName */ "g"])(name);
    };
    ShaderGenerator.prototype.addScalarFragmentUniform = function (type, name, extractArrayName) {
        if (extractArrayName === void 0) { extractArrayName = false; }
        return this._addFragmentUniform(type, name, extractArrayName);
    };
    ShaderGenerator.prototype.addStructFragmentUniform = function (strucName, uniformName, extractArrayName) {
        if (extractArrayName === void 0) { extractArrayName = false; }
        return this._addFragmentUniform(strucName, uniformName, extractArrayName);
    };
    ShaderGenerator.prototype.addAttribute = function (type, name) {
        this._attributes.push({ type: type, name: name });
        return Object(_base_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_0__[/* normalizeUniformName */ "g"])(name);
    };
    ShaderGenerator.prototype.addVarying = function (type, name) {
        this._varyings.push({ type: type, name: name });
    };
    ShaderGenerator.prototype.appendVertexCodeBlock = function (code) {
        this._appendedVertexCodeBlocks.push(code);
    };
    ShaderGenerator.prototype.appendFragmentCodeBlock = function (code) {
        this._appendedFragCodeBlocks.push(code);
    };
    ShaderGenerator.prototype.prependVertexCodeBlock = function (code) {
        this._prependedVertexCodeBlocks.push(code);
    };
    ShaderGenerator.prototype.prependFragmentCodeBlock = function (code) {
        this._prependedFragCodeBlocks.push(code);
    };
    ShaderGenerator.prototype.setVertexMainFn = function (fnCode) {
        this._vertexMainFn = fnCode;
    };
    ShaderGenerator.prototype.setFragmentMainFn = function (fnCode) {
        this._fragmentMainFn = fnCode;
    };
    ShaderGenerator.prototype.getVertexSource = function () {
        return ("\nprecision mediump float;\n\n" + this._prependedVertexCodeBlocks.map(function (v) { return "" + v; }).join('\n') + "\n\n" + this._vertexUniforms.map(function (u) { return "uniform   " + u.type + " " + u.name + ";"; }).join('\n') + "\n" + this._attributes.map(function (u) { return "attribute " + u.type + " " + u.name + ";"; }).join('\n') + "\n" + this._varyings.map(function (u) { return "varying   " + u.type + " " + u.name + ";"; }).join('\n') + "\n" + this._appendedVertexCodeBlocks.map(function (v) { return "" + v; }).join('\n') + "\n\n" + this._vertexMainFn);
    };
    ShaderGenerator.prototype.getFragmentSource = function () {
        return ("\nprecision mediump float;\n\n" + this._prependedFragCodeBlocks.map(function (v) { return "" + v; }).join('\n') + "\n\n" + this._fragmentUniforms.map(function (u) { return "uniform " + u.type + " " + u.name + ";"; }).join('\n') + "\n" + this._varyings.map(function (u) { return "varying " + u.type + " " + u.name + ";"; }).join('\n') + "\n" + this._appendedFragCodeBlocks.map(function (v) { return "" + v; }).join('\n') + "\n\n" + this._fragmentMainFn + "\n");
    };
    ShaderGenerator.prototype.debug = function () {
        if (false)
            {}
        console.log('// *** vertex shader source ***');
        console.log(this.getVertexSource());
        console.log('// *** fragment shader source ***');
        console.log(this.getFragmentSource());
    };
    ShaderGenerator.prototype._addFragmentUniform = function (type, name, extractArrayName) {
        if (extractArrayName === void 0) { extractArrayName = false; }
        this._fragmentUniforms.push({ type: type, name: name });
        name = Object(_base_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_0__[/* normalizeUniformName */ "g"])(name);
        if (extractArrayName)
            name = name.split('[')[0];
        return name;
    };
    return ShaderGenerator;
}());



/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(326);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plane; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _abstractPrimitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);


var Plane = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Plane, _super);
    function Plane() {
        var _this = _super.call(this) || this;
        _this.vertexArr = [
            0, 0,
            0, 1,
            1, 0,
            1, 1
        ];
        _this.indexArr = [0, 1, 2, 3];
        _this.texCoordArr = [
            0, 0,
            0, 1,
            1, 0,
            1, 1
        ];
        return _this;
    }
    return Plane;
}(_abstractPrimitive__WEBPACK_IMPORTED_MODULE_1__[/* AbstractPrimitive */ "a"]));



/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KEYBOARD_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KeyBoardEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_control_abstract_abstractKeypad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _engine_misc_objectPool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);



var KEYBOARD_EVENTS;
(function (KEYBOARD_EVENTS) {
    KEYBOARD_EVENTS["keyPressed"] = "keyPressed";
    KEYBOARD_EVENTS["keyReleased"] = "keyReleased";
    KEYBOARD_EVENTS["keyHold"] = "keyHold";
})(KEYBOARD_EVENTS || (KEYBOARD_EVENTS = {}));
var KeyBoardEvent = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(KeyBoardEvent, _super);
    function KeyBoardEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyBoardEvent.fromPool = function () {
        return KeyBoardEvent._pool.getFreeObject();
    };
    KeyBoardEvent._pool = new _engine_misc_objectPool__WEBPACK_IMPORTED_MODULE_2__[/* ObjectPool */ "a"](KeyBoardEvent);
    return KeyBoardEvent;
}(_engine_control_abstract_abstractKeypad__WEBPACK_IMPORTED_MODULE_1__[/* KeyPadEvent */ "c"]));



/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./engine/control/keyboard/keyboardControl.ts
var keyboardControl = __webpack_require__(63);

// EXTERNAL MODULE: ./engine/core/game.ts
var core_game = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./engine/scene/scene.ts
var scene = __webpack_require__(21);

// EXTERNAL MODULE: ./engine/renderable/impl/general/drawingSurface.ts
var drawingSurface = __webpack_require__(75);

// CONCATENATED MODULE: ./demo/vTeacher/impl/history.ts
var History = (function () {
    function History() {
        this.commands = [];
    }
    History.prototype.stepBack = function () {
        this.commands.pop();
    };
    History.prototype.getCurrentCommands = function () {
        return this.commands;
    };
    History.prototype.addCommand = function (command) {
        this.commands.push(command);
    };
    History.prototype.addCommands = function (commands) {
        var _a;
        (_a = this.commands).push.apply(_a, commands);
    };
    History.prototype.clear = function () {
        this.commands.length = 0;
    };
    return History;
}());


// EXTERNAL MODULE: ./engine/debug/httpClient.ts
var httpClient = __webpack_require__(121);

// CONCATENATED MODULE: ./demo/vTeacher/impl/comet.ts

var comet_Comet = (function () {
    function Comet(cb, repeat) {
        this.cb = cb;
        this.repeat = repeat;
        this.lastUpdated = 0;
        this.poll();
    }
    Comet.prototype.poll = function () {
        var _this = this;
        httpClient["a" /* httpClient */].post('getCommands', { lastUpdated: this.lastUpdated }, function (resp) {
            var r = resp;
            _this.lastUpdated = r.lastUpdated;
            _this.cb(r);
            if (_this.repeat) {
                _this.tid = setTimeout(function () {
                    _this.poll();
                }, 1000);
            }
        }, function () {
            if (_this.repeat) {
                _this.tid = setTimeout(function () {
                    _this.poll();
                }, 1000);
            }
        }, function (xhr) {
            _this.currentXhr = xhr;
        });
    };
    return Comet;
}());


// EXTERNAL MODULE: ./engine/control/mouse/mouseEvents.ts
var mouseEvents = __webpack_require__(6);

// EXTERNAL MODULE: ./engine/control/keyboard/keyboardEvents.ts
var keyboardEvents = __webpack_require__(32);

// EXTERNAL MODULE: ./engine/control/keyboard/keyboardKeys.ts
var keyboardKeys = __webpack_require__(74);

// CONCATENATED MODULE: ./demo/vTeacher/impl/teacherStuff.ts





var teacherStuff_TeacherStuff = (function () {
    function TeacherStuff(game, board, surface, history) {
        this.game = game;
        this.board = board;
        this.surface = surface;
        this.history = history;
        this.teacherCommands = [];
        this.currentCommand = { points: [] };
        this.listenMouse();
        this.listenKeyboard();
    }
    TeacherStuff.prototype.listenMouse = function () {
        var _this = this;
        this.surface.on(mouseEvents["a" /* MOUSE_EVENTS */].mouseMove, function (e) {
            if (e.isMouseDown) {
                _this.surface.lineTo(e.screenX, e.screenY);
                _this.surface.moveTo(e.screenX, e.screenY);
                _this.currentCommand.points.push(+e.screenX.toFixed(2), +e.screenY.toFixed(2));
            }
        });
        this.surface.on(mouseEvents["a" /* MOUSE_EVENTS */].mouseDown, function (e) {
            _this.surface.moveTo(e.screenX, e.screenY);
            _this.surface.lineTo(e.screenX, e.screenY);
            _this.currentCommand.points.push(+e.screenX.toFixed(2), +e.screenY.toFixed(2));
        });
        this.surface.on(mouseEvents["a" /* MOUSE_EVENTS */].mousePressed, function (e) { return Object(tslib_es6["b" /* __awaiter */])(_this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.surface.clear();
                        this.currentCommand = { points: [], extra: 'clear' };
                        this.teacherCommands.push(this.currentCommand);
                        this.history.clear();
                        return [4, httpClient["a" /* httpClient */].post('addCommands', this.teacherCommands)];
                    case 1:
                        _a.sent();
                        this.teacherCommands = [];
                        return [2];
                }
            });
        }); });
        this.surface.on(mouseEvents["a" /* MOUSE_EVENTS */].mouseUp, function (e) { return Object(tslib_es6["b" /* __awaiter */])(_this, void 0, void 0, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.teacherCommands.push(this.currentCommand);
                        this.history.addCommand(this.currentCommand);
                        this.currentCommand = { points: [] };
                        return [4, httpClient["a" /* httpClient */].post('addCommands', this.teacherCommands)];
                    case 1:
                        _a.sent();
                        this.teacherCommands = [];
                        return [2];
                }
            });
        }); });
    };
    TeacherStuff.prototype.listenKeyboard = function () {
        var _this = this;
        var kb = this.game.getControl('KeyboardControl');
        this.game.getCurrScene().on(keyboardEvents["a" /* KEYBOARD_EVENTS */].keyPressed, function (e) { return Object(tslib_es6["b" /* __awaiter */])(_this, void 0, void 0, function () {
            var historyCommands;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(kb.isPressed(keyboardKeys["a" /* KEYBOARD_KEY */].Z) && kb.isPressed(keyboardKeys["a" /* KEYBOARD_KEY */].CONTROL))) return [3, 2];
                        this.surface.clear();
                        this.history.stepBack();
                        historyCommands = this.history.getCurrentCommands();
                        this.board.execCommands(historyCommands);
                        this.teacherCommands.push({ points: [], extra: historyCommands.length ? 'undo' : 'clear' });
                        return [4, httpClient["a" /* httpClient */].post('addCommands', this.teacherCommands)];
                    case 1:
                        _a.sent();
                        this.teacherCommands = [];
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        }); });
    };
    return TeacherStuff;
}());


// CONCATENATED MODULE: ./demo/vTeacher/impl/board.ts



var board_Board = (function () {
    function Board(game, surface, isTeacher) {
        var _this = this;
        this.game = game;
        this.surface = surface;
        this.isTeacher = isTeacher;
        this.history = new History();
        this.comet = new comet_Comet(function (r) {
            var commands = r.commands;
            commands.forEach(function (command) {
                if (command.extra === 'undo') {
                    _this.surface.clear();
                    _this.history.stepBack();
                    _this.execCommands(_this.history.getCurrentCommands());
                }
                else {
                    _this.history.addCommand(command);
                    _this.execCommand(command);
                }
            });
        }, !this.isTeacher);
        surface.setDrawColor(120, 222, 200);
        surface.setLineWidth(2);
        if (isTeacher)
            this.initTeacherStuff();
    }
    Board.prototype.execCommand = function (command) {
        var _a;
        if (command.extra === 'clear') {
            this.surface.clear();
            this.history.clear();
        }
        else {
            if ((_a = command.points) === null || _a === void 0 ? void 0 : _a.length)
                this.surface.drawPolyline(command.points);
        }
    };
    Board.prototype.execCommands = function (commands) {
        var _this = this;
        commands === null || commands === void 0 ? void 0 : commands.forEach(function (c) { return _this.execCommand(c); });
    };
    ;
    Board.prototype.initTeacherStuff = function () {
        var teacherStuff = new teacherStuff_TeacherStuff(this.game, this, this.surface, this.history);
    };
    return Board;
}());


// CONCATENATED MODULE: ./demo/vTeacher/mainScene.ts




var mainScene_isTeacher = location.href.indexOf('teacher') > 0;
var mainScene_MainScene = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(MainScene, _super);
    function MainScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainScene.prototype.onReady = function () {
        var surface = new drawingSurface["a" /* DrawingSurface */](this.game, this.game.size);
        this.appendChild(surface);
        var board = new board_Board(this.game, surface, mainScene_isTeacher);
    };
    return MainScene;
}(scene["b" /* Scene */]));


// EXTERNAL MODULE: ./engine/renderer/webGl/webGlRenderer.ts + 8 modules
var webGlRenderer = __webpack_require__(51);

// EXTERNAL MODULE: ./engine/control/mouse/mouseControl.ts + 1 modules
var mouseControl = __webpack_require__(61);

// CONCATENATED MODULE: ./demo/vTeacher/index.ts





var vTeacher_game = new core_game["a" /* Game */]({ width: 1024, height: 600, scaleStrategy: core_game["b" /* SCALE_STRATEGY */].FIT });
vTeacher_game.setRenderer(webGlRenderer["a" /* WebGlRenderer */]);
vTeacher_game.addControl(keyboardControl["a" /* KeyboardControl */]);
vTeacher_game.addControl(mouseControl["a" /* MouseControl */]);
var mainScene = new mainScene_MainScene(vTeacher_game);
vTeacher_game.runScene(mainScene);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixStack; });
/* harmony import */ var _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _engine_misc_collection_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);

var Mat16Holder = _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].Mat16Holder;

var MatrixStack = (function () {
    function MatrixStack() {
        this._stack = new _engine_misc_collection_stack__WEBPACK_IMPORTED_MODULE_1__[/* Stack */ "a"]();
        this.restore();
    }
    MatrixStack.prototype.restore = function () {
        if (this._stack.isEmpty())
            this.setIdentity();
        else {
            var last = this._stack.pop();
            last.release();
        }
    };
    MatrixStack.prototype.save = function () {
        var copy = Mat16Holder.fromPool();
        copy.fromMat16(this.getCurrentValue().mat16);
        this._stack.push(copy);
    };
    MatrixStack.prototype.getCurrentValue = function () {
        return this._stack.getLast();
    };
    MatrixStack.prototype.setCurrentValue = function (m) {
        return this._stack.replaceLast(m);
    };
    MatrixStack.prototype.translate = function (x, y, z) {
        if (z === void 0) { z = 0; }
        var t = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].makeTranslation(t, x, y, z);
        var m = this.getCurrentValue();
        var result = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].matrixMultiply(result, t, m);
        this.setCurrentValue(result);
        t.release();
        m.release();
        return this;
    };
    MatrixStack.prototype.setMatrixValues = function (v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15) {
        this.getCurrentValue().set(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15);
        return this;
    };
    MatrixStack.prototype.skewX = function (angle) {
        var t = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].makeXSkew(t, angle);
        var m = this.getCurrentValue();
        var result = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].matrixMultiply(result, t, m);
        this.setCurrentValue(result);
        t.release();
        m.release();
        return this;
    };
    MatrixStack.prototype.skewY = function (angle) {
        var t = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].makeYSkew(t, angle);
        var m = this.getCurrentValue();
        var result = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].matrixMultiply(result, t, m);
        this.setCurrentValue(result);
        t.release();
        m.release();
        return this;
    };
    MatrixStack.prototype.rotateX = function (angleInRadians) {
        var t = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].makeXRotation(t, angleInRadians);
        this._rotate(t);
        t.release();
        return this;
    };
    MatrixStack.prototype.rotateY = function (angleInRadians) {
        var t = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].makeYRotation(t, angleInRadians);
        this._rotate(t);
        t.release();
        return this;
    };
    MatrixStack.prototype.rotateZ = function (angleInRadians) {
        var t = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].makeZRotation(t, angleInRadians);
        this._rotate(t);
        t.release();
        return this;
    };
    MatrixStack.prototype.scale = function (x, y, z) {
        if (z === void 0) { z = 1; }
        var t = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].makeScale(t, x, y, z);
        var m = this.getCurrentValue();
        var result = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].matrixMultiply(result, t, m);
        this.setCurrentValue(result);
        t.release();
        m.release();
        return this;
    };
    MatrixStack.prototype.resetTransform = function () {
        this.getCurrentValue().release();
        var identity = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].makeIdentity(identity);
        this.setCurrentValue(identity);
        return this;
    };
    MatrixStack.prototype.rotationReset = function () {
        var m = this.getCurrentValue();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].makeRotationReset(m);
    };
    MatrixStack.prototype.release = function () {
        for (var i = 0, max = this._stack.size(); i < max; i++) {
            this._stack.getAt(i).release();
        }
        return this;
    };
    MatrixStack.prototype.setIdentity = function () {
        var ident = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].makeIdentity(ident);
        this._stack.push(ident);
    };
    MatrixStack.prototype._rotate = function (rotMat) {
        var m = this.getCurrentValue();
        var result = Mat16Holder.fromPool();
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_0__[/* mat4 */ "a"].matrixMultiply(result, rotMat, m);
        this.setCurrentValue(result);
        m.release();
    };
    return MatrixStack;
}());



/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleRectDrawer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _primitives_plane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _base_shaderProgram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _abstract_abstractDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _base_bufferInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _engine_renderer_webGl_shaders_generators_shaderGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var _engine_renderer_webGl_base_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);








var SimpleRectDrawer = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(SimpleRectDrawer, _super);
    function SimpleRectDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        _this.gen = new _engine_renderer_webGl_shaders_generators_shaderGenerator__WEBPACK_IMPORTED_MODULE_5__[/* ShaderGenerator */ "a"]();
        var gen = _this.gen;
        _this.a_position = gen.addAttribute(_engine_renderer_webGl_base_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_6__[/* GL_TYPE */ "a"].FLOAT_VEC4, 'a_position');
        _this.a_texCoord = gen.addAttribute(_engine_renderer_webGl_base_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_6__[/* GL_TYPE */ "a"].FLOAT_VEC2, 'a_texCoord');
        _this.u_vertexMatrix = gen.addVertexUniform(_engine_renderer_webGl_base_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_6__[/* GL_TYPE */ "a"].FLOAT_MAT4, 'u_vertexMatrix');
        _this.u_textureMatrix = gen.addVertexUniform(_engine_renderer_webGl_base_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_6__[/* GL_TYPE */ "a"].FLOAT_MAT4, 'u_textureMatrix');
        gen.addVarying(_engine_renderer_webGl_base_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_6__[/* GL_TYPE */ "a"].FLOAT_VEC2, 'v_texCoord');
        gen.setVertexMainFn("void main(){\ngl_Position = u_vertexMatrix * a_position;\nv_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy;\n}");
        gen.addScalarFragmentUniform(_engine_renderer_webGl_base_shaderProgramUtils__WEBPACK_IMPORTED_MODULE_6__[/* GL_TYPE */ "a"].SAMPLER_2D, 'texture');
        gen.setFragmentMainFn("void main(){\ngl_FragColor = texture2D(texture, v_texCoord);\n}");
        return _this;
    }
    SimpleRectDrawer.prototype.initProgram = function () {
        if (true) {
            if (!this.gen)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_7__[/* DebugError */ "a"]("can not init simpleRectDrawer instance: ShaderGenerator must be created");
        }
        this.primitive = new _primitives_plane__WEBPACK_IMPORTED_MODULE_1__[/* Plane */ "a"]();
        this.program = new _base_shaderProgram__WEBPACK_IMPORTED_MODULE_2__[/* ShaderProgram */ "a"](this.gl, this.gen.getVertexSource(), this.gen.getFragmentSource());
        this.bufferInfo = new _base_bufferInfo__WEBPACK_IMPORTED_MODULE_4__[/* BufferInfo */ "a"](this.gl, {
            posVertexInfo: { array: this.primitive.vertexArr, type: this.gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: this.primitive.indexArr },
            texVertexInfo: { array: this.primitive.texCoordArr, type: this.gl.FLOAT, size: 2, attrName: 'a_texCoord' },
            drawMethod: _base_bufferInfo__WEBPACK_IMPORTED_MODULE_4__[/* DRAW_METHOD */ "b"].TRIANGLE_STRIP
        });
    };
    return SimpleRectDrawer;
}(_abstract_abstractDrawer__WEBPACK_IMPORTED_MODULE_3__[/* AbstractDrawer */ "a"]));



/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tween; });
/* harmony import */ var _engine_core_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _engine_misc_easing_functions_linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



var Tween = (function () {
    function Tween(tweenDesc) {
        var _a;
        this._propsToChange = [];
        this._startedTime = 0;
        this._currTime = 0;
        this._completed = false;
        this._delayBeforeStart = 0;
        this._currentLoop = 0;
        this._target = tweenDesc.target;
        this._progressFn = tweenDesc.progress;
        this._completeFn = tweenDesc.complete;
        this._easeFn = tweenDesc.ease || _engine_misc_easing_functions_linear__WEBPACK_IMPORTED_MODULE_1__[/* EasingLinear */ "a"];
        this._delayBeforeStart = tweenDesc.delayBeforeStart || 0;
        this._tweenTime = (tweenDesc.time || 1000) + this._delayBeforeStart;
        if ( true && tweenDesc.loop === undefined && tweenDesc.numOfLoops !== undefined) {
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_2__[/* DebugError */ "a"]("loop property need to be set to true if numOfLoops is specified");
        }
        if ( true && tweenDesc.loop === undefined && tweenDesc.yoyo !== undefined) {
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_2__[/* DebugError */ "a"]("loop property need to be set to true if yoyo is true");
        }
        this._loop = tweenDesc.loop || false;
        this._numOfLoops = (_a = tweenDesc.numOfLoops) !== null && _a !== void 0 ? _a : Infinity;
        this._yoyo = tweenDesc.yoyo || false;
        this._desc = this.normalizeDesc(tweenDesc);
    }
    Tween.prototype.update = function () {
        if (this._completed)
            return;
        var currTime = _engine_core_game__WEBPACK_IMPORTED_MODULE_0__[/* Game */ "a"].getInstance().getCurrentTime();
        this._currTime = currTime;
        if (this._startedTime === 0)
            this._startedTime = currTime;
        var curTweenTime = currTime - this._startedTime;
        if (this._currentLoop === 0 && curTweenTime < this._delayBeforeStart)
            return;
        if (curTweenTime > this._tweenTime) {
            if (this._loop) {
                this._startedTime = currTime;
                if (this._currentLoop === this._numOfLoops - 1) {
                    this.complete();
                    return;
                }
                this._currentLoop++;
                curTweenTime = 0;
            }
            else {
                this.complete();
                return;
            }
        }
        if (this._yoyo && this._currentLoop % 2 !== 0) {
            curTweenTime = this._tweenTime - curTweenTime;
        }
        var l = this._propsToChange.length;
        while (l--) {
            var prp = this._propsToChange[l];
            var valFrom = this._desc.from[prp];
            var valTo = this._desc.to[prp];
            var fn = this._easeFn;
            this._target[prp] = fn(curTweenTime, valFrom, valTo - valFrom, this._tweenTime);
        }
        if (this._progressFn)
            this._progressFn(this._target);
    };
    Tween.prototype.reset = function () {
        this._startedTime = 0;
        this._completed = false;
    };
    Tween.prototype.complete = function () {
        if (this._completed)
            return;
        var needReversion = this._yoyo && this._currentLoop % 2 !== 0;
        var target = needReversion ? this._desc.from : this._desc.to;
        for (var _i = 0, _a = this._propsToChange; _i < _a.length; _i++) {
            var k = _a[_i];
            this._target[k] = target[k];
        }
        if (this._progressFn)
            this._progressFn(this._target);
        if (this._completeFn)
            this._completeFn(this._target);
        this._completed = true;
    };
    Tween.prototype.isCompleted = function () {
        return this._completed;
    };
    Tween.prototype.getTarget = function () {
        return this._target;
    };
    Tween.prototype.getTweenTime = function () {
        return this._tweenTime;
    };
    Tween.prototype.normalizeDesc = function (tweenDesc) {
        var _this = this;
        var normalized = tweenDesc;
        normalized.from = normalized.from || {};
        normalized.to = normalized.to || {};
        var allPropsMap = {};
        Object.keys(normalized.from).forEach(function (keyFrom) {
            allPropsMap[keyFrom] = true;
        });
        Object.keys(normalized.to).forEach(function (keyTo) {
            allPropsMap[keyTo] = true;
        });
        this._propsToChange = Object.keys(allPropsMap);
        if (true) {
            this._propsToChange.forEach(function (key) {
                if (!(key in _this._target)) {
                    console.error('target', _this._target);
                    throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_2__[/* DebugError */ "a"]("Can not create tween animation: property \"" + key + "\" does not belong to target object");
                }
            });
        }
        this._propsToChange.forEach(function (prp) {
            if (normalized.from[prp] === undefined)
                normalized.from[prp] = _this._target[prp];
            if (normalized.to[prp] === undefined)
                normalized.to[prp] = _this._target[prp];
        });
        return normalized;
    };
    Tween.prototype.progress = function (_progressFn) {
        this._progressFn = _progressFn;
    };
    return Tween;
}());



/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ eventEmitterDelegate_EventEmitterDelegate; });

// EXTERNAL MODULE: ./engine/control/mouse/mouseEvents.ts
var mouseEvents = __webpack_require__(6);

// EXTERNAL MODULE: ./engine/debug/debugError.ts
var debugError = __webpack_require__(0);

// CONCATENATED MODULE: ./engine/misc/eventEmitter.ts

var eventEmitter_EventEmitter = (function () {
    function EventEmitter() {
        this._events = {};
    }
    EventEmitter.prototype.on = function (eventNameOrList, callBack) {
        var _this = this;
        if (typeof eventNameOrList === 'string') {
            this._on(eventNameOrList, callBack);
        }
        else if (eventNameOrList.splice !== undefined) {
            eventNameOrList.forEach(function (eventName) {
                _this._on(eventName, callBack);
            });
        }
    };
    EventEmitter.prototype.off = function (eventName, callback) {
        if (callback === undefined) {
            if (this._events[eventName] !== undefined)
                this._events[eventName].length = 0;
        }
        else {
            var es = this._events[eventName];
            if (!es)
                return;
            var index = es.indexOf(callback);
            if ( true && index === -1) {
                console.error(callback);
                throw new debugError["a" /* DebugError */]("can not remove event listener " + eventName);
            }
            es.splice(index, 1);
        }
    };
    EventEmitter.prototype.trigger = function (eventName, data) {
        var evnts = this._events[eventName];
        if (!evnts)
            return;
        var l = evnts.length;
        while (l--) {
            if (evnts[l] !== undefined)
                evnts[l](data);
        }
    };
    EventEmitter.prototype._on = function (name, callBack) {
        this._events[name] = this._events[name] || [];
        this._events[name].push(callBack);
    };
    return EventEmitter;
}());


// EXTERNAL MODULE: ./engine/core/game.ts
var game = __webpack_require__(9);

// EXTERNAL MODULE: ./engine/control/gamepad/gamePadEvents.ts
var gamePadEvents = __webpack_require__(49);

// EXTERNAL MODULE: ./engine/control/keyboard/keyboardEvents.ts
var keyboardEvents = __webpack_require__(32);

// CONCATENATED MODULE: ./engine/delegates/eventEmitterDelegate.ts






var getControlErrorMessage = function (controlName, controlClassName) {
    if (false)
        {}
    return "can not listen " + controlName + " events: " + controlName + " control is not added;\ninvoke \"game.addControl(" + controlClassName + ");\"";
};
var eventEmitterDelegate_EventEmitterDelegate = (function () {
    function EventEmitterDelegate() {
    }
    EventEmitterDelegate.prototype.on = function (eventName, callBack) {
        if ( true && eventName in mouseEvents["a" /* MOUSE_EVENTS */]) {
            if (!game["a" /* Game */].getInstance().hasControl('MouseControl'))
                throw new debugError["a" /* DebugError */](getControlErrorMessage('mouse', 'MouseControl'));
        }
        if ( true && eventName in gamePadEvents["a" /* GAME_PAD_EVENTS */]) {
            if (!game["a" /* Game */].getInstance().hasControl('GamePadControl'))
                throw new debugError["a" /* DebugError */](getControlErrorMessage('gamepad', 'GamePadControl'));
        }
        if ( true && eventName in keyboardEvents["a" /* KEYBOARD_EVENTS */]) {
            if (!game["a" /* Game */].getInstance().hasControl('KeyboardControl'))
                throw new debugError["a" /* DebugError */](getControlErrorMessage('keyboard', 'KeyboardControl'));
        }
        if (this._emitter === undefined)
            this._emitter = new eventEmitter_EventEmitter();
        this._emitter.on(eventName, callBack);
        return callBack;
    };
    EventEmitterDelegate.prototype.once = function (eventName, callBack) {
        var _this = this;
        var cb = this.on(eventName, function (_args) {
            _this.off(eventName, cb);
            callBack(_args);
        });
    };
    EventEmitterDelegate.prototype.off = function (eventName, callBack) {
        if (this._emitter !== undefined)
            this._emitter.off(eventName, callBack);
    };
    EventEmitterDelegate.prototype.trigger = function (eventName, data) {
        if (this._emitter !== undefined)
            this._emitter.trigger(eventName, data);
    };
    return EventEmitterDelegate;
}());



/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shape; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _renderableModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _engine_renderable_impl_general_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _engine_geometry_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);





var Shape = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Shape, _super);
    function Shape(game) {
        var _this = _super.call(this, game) || this;
        _this.color = _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_2__[/* Color */ "a"].BLACK.clone();
        _this.lineWidth = 0;
        _this.fillColor = _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_2__[/* Color */ "a"].RGB(100, 100, 100);
        return _this;
    }
    Shape.prototype.cacheAsBitmap = function () {
        var sizeInt = new _engine_geometry_size__WEBPACK_IMPORTED_MODULE_4__[/* Size */ "a"]().setWH(~~this.size.width, ~~this.size.height);
        var renderTarget = this.game.getRenderer().getHelper().
            createRenderTarget(this.game, sizeInt);
        var image = new _engine_renderable_impl_general_image__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "a"](this.game);
        image.size.set(sizeInt);
        this.renderToTexture(renderTarget, _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_2__[/* Color */ "a"].NONE);
        image.setResourceLink(renderTarget.getResourceLink());
        renderTarget.destroy();
        return image;
    };
    Shape.prototype.setProps = function (props) {
        _super.prototype.setProps.call(this, props);
        if (props.color !== undefined)
            this.color.setRGBA(props.color.r, props.color.g, props.color.b, props.color.a);
        if (props.fillColor !== undefined)
            this.fillColor.setRGBA(props.fillColor.r, props.fillColor.g, props.fillColor.b, props.fillColor.a);
        if (props.lineWidth !== undefined)
            this.lineWidth = props.lineWidth;
    };
    Shape.prototype.setClonedProperties = function (cloned) {
        cloned.color.set(this.color);
        cloned.lineWidth = this.lineWidth;
        cloned.fillColor = this.fillColor.clone();
        if (this.fillGradient !== undefined)
            cloned.fillGradient = this.fillGradient.clone();
        cloned.filters = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArrays */ "e"])(this.filters);
        _super.prototype.setClonedProperties.call(this, cloned);
    };
    return Shape;
}(_renderableModel__WEBPACK_IMPORTED_MODULE_1__[/* RenderableModel */ "b"]));



/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Incrementer; });
var val = 0;
var Incrementer = (function () {
    function Incrementer() {
    }
    Incrementer.getValue = function () {
        return val++;
    };
    return Incrementer;
}());



/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OVERFLOW */
/* unused harmony export LAYOUT_SIZE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_geometry_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _abstract_renderableModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);




var OVERFLOW;
(function (OVERFLOW) {
    OVERFLOW[OVERFLOW["HIDDEN"] = 0] = "HIDDEN";
    OVERFLOW[OVERFLOW["VISIBLE"] = 1] = "VISIBLE";
})(OVERFLOW || (OVERFLOW = {}));
var LAYOUT_SIZE;
(function (LAYOUT_SIZE) {
    LAYOUT_SIZE[LAYOUT_SIZE["FIXED"] = 0] = "FIXED";
    LAYOUT_SIZE[LAYOUT_SIZE["WRAP_CONTENT"] = 1] = "WRAP_CONTENT";
    LAYOUT_SIZE[LAYOUT_SIZE["MATCH_PARENT"] = 2] = "MATCH_PARENT";
})(LAYOUT_SIZE || (LAYOUT_SIZE = {}));
var Container = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Container, _super);
    function Container(game) {
        var _this = _super.call(this, game) || this;
        _this.marginLeft = 0;
        _this.marginTop = 0;
        _this.marginRight = 0;
        _this.marginBottom = 0;
        _this.paddingLeft = 0;
        _this.paddingTop = 0;
        _this.paddingRight = 0;
        _this.paddingBottom = 0;
        _this.layoutWidth = LAYOUT_SIZE.WRAP_CONTENT;
        _this.layoutHeight = LAYOUT_SIZE.WRAP_CONTENT;
        _this.overflow = OVERFLOW.HIDDEN;
        _this.drawingRect = new _engine_geometry_rect__WEBPACK_IMPORTED_MODULE_1__[/* Rect */ "a"]();
        _this.maxWidth = 0;
        _this.maxHeight = 0;
        _this._dirty = false;
        return _this;
    }
    Container.normalizeBorders = function (top, right, bottom, left) {
        if (right === undefined && bottom === undefined && left === undefined) {
            right = bottom = left = top;
        }
        else if (bottom === undefined && left === undefined) {
            bottom = top;
            left = right;
        }
        else if (left === undefined) {
            left = right;
        }
        return { top: top, right: right, bottom: bottom, left: left };
    };
    Container.prototype.testLayout = function () {
        if (true) {
            if (this.layoutWidth === LAYOUT_SIZE.FIXED && this.size.width === 0)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__[/* DebugError */ "a"]("layoutWidth is LAYOUT_SIZE.FIXED so width must be specified");
            if (this.layoutHeight === LAYOUT_SIZE.FIXED && this.size.height === 0)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__[/* DebugError */ "a"]("layoutHeight is LAYOUT_SIZE.FIXED so height must be specified");
        }
    };
    Container.prototype.setMargins = function (top, right, bottom, left) {
        var _a;
        (_a = Container.normalizeBorders(top, right, bottom, left), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left);
        this.marginTop = top;
        this.marginRight = right;
        this.marginBottom = bottom;
        this.marginLeft = left;
        this.setDirty();
    };
    Container.prototype.setMarginsTopBottom = function (top, bottom) {
        if (bottom === undefined)
            bottom = top;
        this.paddingTop = top;
        this.paddingBottom = bottom;
        this.setDirty();
    };
    Container.prototype.setMarginsLeftRight = function (left, right) {
        if (right === undefined)
            right = left;
        this.marginLeft = left;
        this.marginRight = right;
        this.setDirty();
    };
    Container.prototype.setPaddings = function (top, right, bottom, left) {
        var _a;
        (_a = Container.normalizeBorders(top, right, bottom, left), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left);
        this.paddingTop = top;
        this.paddingRight = right;
        this.paddingBottom = bottom;
        this.paddingLeft = left;
        this.setDirty();
    };
    Container.prototype.setPaddingsTopBottom = function (top, bottom) {
        if (bottom === void 0) { bottom = top; }
        if (bottom === undefined)
            bottom = top;
        this.paddingTop = top;
        this.paddingBottom = bottom;
        this.setDirty();
    };
    Container.prototype.setPaddingsLeftRight = function (left, right) {
        if (right === void 0) { right = left; }
        this.paddingLeft = left;
        this.paddingRight = right;
        this.setDirty();
    };
    Container.prototype.revalidate = function () {
        this.updateUIRect();
        if (this.background)
            this.background.size.set(this.size);
        _super.prototype.revalidate.call(this);
    };
    Container.prototype.onGeometryChanged = function () {
        this.revalidate();
        this._dirty = false;
    };
    Container.prototype.setWH = function (w, h) {
        this.size.setWH(w, h);
        this.drawingRect.setWH(w, h);
        this.setDirty();
    };
    Container.prototype.calcDrawableRect = function (contentWidth, contentHeight) {
        var paddedWidth = contentWidth + this.paddingLeft + this.paddingRight;
        var paddedHeight = contentHeight + this.paddingTop + this.paddingBottom;
        if (this.background) {
            this.background.setWH(paddedWidth, paddedHeight);
            this.size.set(this.background.size);
        }
        else {
            this.size.setWH(paddedWidth, paddedHeight);
        }
        this.updateUIRect();
    };
    Container.prototype.update = function () {
        if (this.isDirty()) {
            this.onGeometryChanged();
        }
        _super.prototype.update.call(this);
    };
    Container.prototype.translate = function () {
        _super.prototype.translate.call(this);
        this.game.getRenderer().transformTranslate(this.marginLeft, this.marginTop);
    };
    Container.prototype.setDirty = function () {
        this._dirty = true;
    };
    Container.prototype.isDirty = function () {
        return this._dirty;
    };
    Container.prototype.updateUIRect = function () {
        this.size.setWH(this.size.width + this.marginLeft + this.marginRight, this.size.height + this.marginTop + this.marginBottom);
    };
    return Container;
}(_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_2__[/* RenderableModel */ "b"]));



/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point2d; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _misc_objectPool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _abstract_observableEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);




var Point2d = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Point2d, _super);
    function Point2d(x, y, onChangedFn) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = x; }
        var _this = _super.call(this) || this;
        _this._x = 0;
        _this._y = 0;
        if (onChangedFn)
            _this.addOnChangeListener(onChangedFn);
        _this.setXY(x, y);
        return _this;
    }
    Object.defineProperty(Point2d.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this.setX(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point2d.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this.setY(value);
        },
        enumerable: false,
        configurable: true
    });
    Point2d.fromPool = function () {
        return Point2d.pool.getFreeObject();
    };
    Point2d.prototype.setXY = function (x, y) {
        if (y === void 0) { y = x; }
        if ( true && (Number.isNaN(x) || Number.isNaN(y)))
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__[/* DebugError */ "a"]("Point2d: wrong numeric arguments " + x + "," + y);
        var changed = this._x !== x || this._y !== y;
        if (changed) {
            this._x = x;
            this._y = y;
            this.triggerObservable();
        }
        return this;
    };
    Point2d.prototype.setX = function (x) {
        this.setXY(x, this._y);
        return this;
    };
    Point2d.prototype.setY = function (y) {
        this.setXY(this._x, y);
        return this;
    };
    Point2d.prototype.set = function (another) {
        this.setXY(another.x, another.y);
        return this;
    };
    Point2d.prototype.add = function (another) {
        this.addXY(another.x, another.y);
        return this;
    };
    Point2d.prototype.substract = function (another) {
        this.addXY(-another.x, -another.y);
        return this;
    };
    Point2d.prototype.multiply = function (n) {
        this.setXY(this._x * n, this._y * n);
        return this;
    };
    Point2d.prototype.addXY = function (x, y) {
        this.setXY(this._x + x, this._y + y);
        return this;
    };
    Point2d.prototype.addX = function (x) {
        this.addXY(x, 0);
        return this;
    };
    Point2d.prototype.addY = function (y) {
        this.addXY(0, y);
        return this;
    };
    Point2d.prototype.negative = function () {
        this.setXY(-this._x, -this._y);
        return this;
    };
    Point2d.prototype.equal = function (x, y) {
        if (y === void 0) { y = x; }
        return this._x === x && this._y === y;
    };
    Point2d.prototype.equalPoint = function (point) {
        return this.equal(point.x, point.y);
    };
    Point2d.prototype.clone = function () {
        return new Point2d(this._x, this._y);
    };
    Point2d.prototype.fromJSON = function (json) {
        this.setXY(json.x, json.y);
    };
    Point2d.prototype.toJSON = function () {
        return { x: this._x, y: this._y };
    };
    Point2d.prototype.toArray = function () {
        if (this._arr === undefined)
            this._arr = [this._x, this._y];
        else {
            this._arr[0] = this._x;
            this._arr[1] = this._y;
        }
        return this._arr;
    };
    Point2d.pool = new _misc_objectPool__WEBPACK_IMPORTED_MODULE_1__[/* ObjectPool */ "a"](Point2d, 4);
    return Point2d;
}(_abstract_observableEntity__WEBPACK_IMPORTED_MODULE_2__[/* ObservableEntity */ "a"]));



/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentChildDelegate; });
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var ParentChildDelegate = (function () {
    function ParentChildDelegate(model) {
        this.model = model;
    }
    ParentChildDelegate.prototype.appendChild = function (c) {
        if (true) {
            if (c === this.model)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("parent and child objects are the same");
            if (this.model.children.find(function (it) { return it === c; })) {
                console.error(c);
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("this children is already added");
            }
        }
        c.parent = this.model;
        this.model.children.push(c);
        if (this.afterChildAppended !== undefined)
            this.afterChildAppended(c);
    };
    ParentChildDelegate.prototype.appendChildAt = function (c, index) {
        if (true) {
            if (index > this.model.children.length - 1)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not insert element: index is out of range (" + index + "," + (this.model.children.length - 1) + ")");
        }
        c.parent = this.model;
        this.model.children.splice(index, 0, c);
        if (this.afterChildAppended !== undefined)
            this.afterChildAppended(c);
    };
    ParentChildDelegate.prototype.appendChildAfter = function (modelAfter, newChild) {
        var afterIndex = this.model.children.indexOf(modelAfter);
        if (true) {
            if (afterIndex === -1)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not insert element: object is detached");
        }
        if (afterIndex === this.model.children.length - 1)
            this.appendChild(newChild);
        else
            this.appendChildAt(newChild, afterIndex + 1);
    };
    ParentChildDelegate.prototype.appendChildBefore = function (modelBefore, newChild) {
        var beforeIndex = this.model.children.indexOf(modelBefore);
        if (true) {
            if (beforeIndex === -1)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not insert element: object is detached");
        }
        if (beforeIndex === 0)
            this.prependChild(newChild);
        else
            this.appendChildAt(newChild, beforeIndex - 1);
    };
    ParentChildDelegate.prototype.prependChild = function (c) {
        c.parent = this.model;
        this.model.children.unshift(c);
        if (this.afterChildAppended !== undefined)
            this.afterChildAppended(c);
    };
    ParentChildDelegate.prototype.removeChildAt = function (i) {
        var c = this.model.children[i];
        if ( true && !c)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not remove children with index " + i);
        if ( true && c.parent === undefined)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not remove children with index " + i + ": it is already detached");
        c.parent.children.splice(i, 1);
        c.parent = undefined;
        if (this.afterChildRemoved !== undefined)
            this.afterChildRemoved(c);
    };
    ParentChildDelegate.prototype.removeChild = function (child) {
        var parent = child.getParent();
        var i = parent.children.indexOf(child);
        if ( true && i === -1)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not remove child: it doesn't belong to parent");
        parent.children.splice(i, 1);
        child.parent = undefined;
        if (this.afterChildRemoved !== undefined)
            this.afterChildRemoved(child);
    };
    ParentChildDelegate.prototype.removeSelf = function () {
        var parent = this.model.getParent();
        if ( true && parent === undefined)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not remove child: it is already detached");
        var i = parent.children.indexOf(this.model);
        if ( true && i === -1)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not remove child: it doesn't belong to parent");
        parent.children.splice(i, 1);
        this.model.parent = undefined;
        if (this.afterChildRemoved !== undefined)
            this.afterChildRemoved(this.model);
    };
    ParentChildDelegate.prototype.removeChildren = function () {
        for (var i = this.model.children.length - 1; i >= 0; i--) {
            this.removeChildAt(i);
        }
    };
    ParentChildDelegate.prototype.replaceChild = function (c, newChild) {
        var indexOf = this.model.children.indexOf(c);
        if ( true && indexOf === -1)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not replace child: destination node doesn't belong to element");
        this.model.children[indexOf] = newChild;
        c.parent = undefined;
        newChild.parent = this.model;
        if (this.afterChildRemoved !== undefined)
            this.afterChildRemoved(c);
        if (this.afterChildAppended !== undefined)
            this.afterChildAppended(newChild);
    };
    ParentChildDelegate.prototype.moveToFront = function () {
        var parent = this.model.getParent();
        if ( true && !parent)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not move to front: object is detached");
        var parentArray = parent.children;
        var index = parentArray.indexOf(this.model);
        if ( true && index === -1)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not move to front: object is not belong to current scene");
        parentArray.splice(index, 1);
        parentArray.push(this.model);
    };
    ParentChildDelegate.prototype.moveToBack = function () {
        var parent = this.model.getParent();
        if ( true && !parent)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not move to back: object is detached");
        var parentArray = parent.children;
        var index = parentArray.indexOf(this.model);
        if ( true && index === -1)
            throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_0__[/* DebugError */ "a"]("can not move to front: object is not belong to current scene");
        parentArray.splice(index, 1);
        parentArray.unshift(this.model);
    };
    ParentChildDelegate.prototype.findChildById = function (id) {
        if (id === this.model.id)
            return this.model;
        for (var _i = 0, _a = this.model.children; _i < _a.length; _i++) {
            var c = _a[_i];
            var possibleObject = c.findChildById(id);
            if (possibleObject)
                return possibleObject;
        }
        return undefined;
    };
    return ParentChildDelegate;
}());



/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweenableDelegate; });
/* harmony import */ var _engine_animation_tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);

var TweenableDelegate = (function () {
    function TweenableDelegate() {
        this._tweens = [];
        this._tweenMovies = [];
    }
    TweenableDelegate.prototype.tween = function (desc) {
        var t = new _engine_animation_tween__WEBPACK_IMPORTED_MODULE_0__[/* Tween */ "a"](desc);
        if (!this._tweens)
            this._tweens = [];
        this._tweens.push(t);
        return t;
    };
    TweenableDelegate.prototype.addTween = function (t) {
        if (!this._tweens)
            this._tweens = [];
        this._tweens.push(t);
    };
    TweenableDelegate.prototype.addTweenMovie = function (tm) {
        if (!this._tweenMovies)
            this._tweenMovies = [];
        this._tweenMovies.push(tm);
    };
    TweenableDelegate.prototype.update = function () {
        for (var i = 0, l = this._tweens.length; i < l; i++) {
            var t = this._tweens[i];
            t.update();
            if (t.isCompleted()) {
                this._tweens.splice(i, 1);
                l--;
            }
        }
        for (var i = 0, l = this._tweenMovies.length; i < l; i++) {
            var t = this._tweenMovies[i];
            t.update();
            if (t.isCompleted()) {
                this._tweenMovies.splice(i, 1);
                l--;
            }
        }
    };
    return TweenableDelegate;
}());



/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debugUtil; });
var debugUtil;
(function (debugUtil) {
    var map;
    debugUtil.glEnumToString = function (gl, glEnum) {
        if (!map && true) {
            map = {};
            var keymap = gl;
            for (var k in keymap) {
                if (isFinite(keymap[k]))
                    map[keymap[k]] = k;
            }
        }
        return map[glEnum];
    };
})(debugUtil || (debugUtil = {}));


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blender; });
/* harmony import */ var _engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


var Blender = (function () {
    function Blender(_gl) {
        this._gl = _gl;
    }
    Blender.getSingleton = function (gl) {
        if (Blender.instance === undefined)
            Blender.instance = new Blender(gl);
        return Blender.instance;
    };
    Blender.prototype.enable = function () {
        if (this._enabled)
            return;
        this._enabled = true;
        this._gl.enable(this._gl.BLEND);
    };
    Blender.prototype.disable = function () {
        if (this._enabled === false)
            return;
        this._enabled = false;
        this._gl.disable(this._gl.BLEND);
    };
    Blender.prototype.setBlendMode = function (blendMode) {
        if (blendMode === this._lastMode)
            return;
        this._lastMode = blendMode;
        var gl = this._gl;
        switch (blendMode) {
            case _engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_0__[/* BLEND_MODE */ "a"].NORMAL:
                gl.blendEquation(gl.FUNC_ADD);
                gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
                break;
            case _engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_0__[/* BLEND_MODE */ "a"].NORMAL_SEPARATE:
                gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
                break;
            case _engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_0__[/* BLEND_MODE */ "a"].ADDITIVE:
                gl.blendEquation(gl.FUNC_ADD);
                gl.blendFunc(gl.ONE, gl.ONE);
                break;
            case _engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_0__[/* BLEND_MODE */ "a"].SUBSTRACTIVE:
                gl.blendEquation(gl.FUNC_SUBTRACT);
                gl.blendFunc(gl.ONE, gl.ONE);
                break;
            case _engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_0__[/* BLEND_MODE */ "a"].REVERSE_SUBSTRACTIVE:
                gl.blendEquation(gl.FUNC_REVERSE_SUBTRACT);
                gl.blendFunc(gl.ONE, gl.ONE);
                break;
            default:
                if (true) {
                    throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("unknown blend mode: " + blendMode);
                }
                break;
        }
    };
    return Blender;
}());



/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ frameBufferStack_FrameBufferStack; });

// EXTERNAL MODULE: ./engine/debug/debugError.ts
var debugError = __webpack_require__(0);

// EXTERNAL MODULE: ./engine/renderer/webGl/base/texture.ts
var texture = __webpack_require__(28);

// EXTERNAL MODULE: ./engine/resources/resourceLink.ts
var resourceLink = __webpack_require__(10);

// CONCATENATED MODULE: ./engine/renderer/webGl/base/frameBuffer.ts



var frameBuffer_FrameBuffer = (function () {
    function FrameBuffer(_gl, size) {
        this._gl = _gl;
        this._destroyed = false;
        if ( true && !_gl)
            throw new debugError["a" /* DebugError */]("can not create FrameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)");
        this._width = size.width;
        this._height = size.height;
        this.texture = new texture["a" /* Texture */](_gl);
        this.texture.setImage(undefined, size);
        this._init(_gl, size);
        this._link = resourceLink["a" /* ResourceLink */].create(this.texture);
    }
    FrameBuffer.prototype.setInterpolationMode = function (mode) {
        this.texture.setInterpolationMode(mode);
    };
    FrameBuffer.prototype.bind = function () {
        if (true) {
            if (this._destroyed) {
                console.error(this);
                throw new debugError["a" /* DebugError */]("can not bind destroyed frame buffer");
            }
        }
        if (FrameBuffer._currInstance === this)
            return;
        this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this.glFrameBuffer);
        this._gl.viewport(0, 0, ~~this._width, ~~this._height);
        FrameBuffer._currInstance = this;
    };
    FrameBuffer.prototype.unbind = function () {
        this._checkBound();
        this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null);
        FrameBuffer._currInstance = undefined;
    };
    FrameBuffer.prototype.clear = function (color, alphaBlendValue) {
        if (alphaBlendValue === void 0) { alphaBlendValue = 1; }
        this._checkBound();
        var arr = color.asGL();
        this._gl.clearColor(arr[0], arr[1], arr[2], arr[3] * alphaBlendValue);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT);
    };
    FrameBuffer.prototype.destroy = function () {
        this._gl.deleteRenderbuffer(this.glRenderBuffer);
        this._gl.deleteFramebuffer(this.glFrameBuffer);
        this._destroyed = true;
    };
    FrameBuffer.prototype.getTexture = function () {
        return this.texture;
    };
    FrameBuffer.prototype.getResourceLink = function () {
        return this._link;
    };
    FrameBuffer.prototype._init = function (gl, size) {
        this.glRenderBuffer = gl.createRenderbuffer();
        if ( true && !this.glRenderBuffer)
            throw new debugError["a" /* DebugError */]("can not allocate memory for glRenderBuffer");
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.glRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, size.width, size.height);
        this.glFrameBuffer = gl.createFramebuffer();
        if ( true && !this.glFrameBuffer)
            throw new debugError["a" /* DebugError */]("can not allocate memory for glFrameBuffer");
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.glFrameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.getGlTexture(), 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.glRenderBuffer);
        var fbStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if ( true && fbStatus !== gl.FRAMEBUFFER_COMPLETE) {
            throw new debugError["a" /* DebugError */]("frame buffer status error: " + fbStatus + " (expected gl.FRAMEBUFFER_COMPLETE(" + gl.FRAMEBUFFER_COMPLETE + "))");
        }
        this.texture.unbind();
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    FrameBuffer.prototype._checkBound = function () {
        if (true)
            return;
        if (FrameBuffer._currInstance !== this)
            throw new debugError["a" /* DebugError */]("frame buffer is not bound; call bind() method firstly");
    };
    return FrameBuffer;
}());


// EXTERNAL MODULE: ./engine/renderer/common/color.ts
var color = __webpack_require__(5);

// CONCATENATED MODULE: ./engine/renderer/webGl/base/doubleFrameBuffer.ts

var doubleFrameBuffer_DoubleFrameBuffer = (function () {
    function DoubleFrameBuffer(_gl, size) {
        this._gl = _gl;
        this.buffers = [
            new frameBuffer_FrameBuffer(_gl, size),
            new frameBuffer_FrameBuffer(_gl, size)
        ];
    }
    DoubleFrameBuffer.prototype.setInterpolationMode = function (mode) {
        this.buffers[0].getTexture().setInterpolationMode(mode);
        this.buffers[1].getTexture().setInterpolationMode(mode);
    };
    DoubleFrameBuffer.prototype.applyFilters = function (texture, filters) {
        var len = filters.length;
        if (len === 0)
            return texture;
        var filter = filters[0];
        if (!filter.enabled)
            return texture;
        filter.getDrawer().attachTexture('texture', texture);
        filter.doFilter(this.getDestBuffer());
        for (var i = 1; i < len; i++) {
            if (!filters[i].enabled)
                continue;
            this.flip();
            filters[i].getDrawer().attachTexture('texture', this.getSourceBuffer().getTexture());
            filters[i].doFilter(this.getDestBuffer());
        }
        this.flip();
        return this.getSourceBuffer().getTexture();
    };
    DoubleFrameBuffer.prototype.destroy = function () {
        this.buffers.forEach(function (b) { return b.destroy(); });
    };
    DoubleFrameBuffer.prototype.flip = function () {
        var tmp = this.buffers[0];
        this.buffers[0] = this.buffers[1];
        this.buffers[1] = tmp;
    };
    DoubleFrameBuffer.prototype.getSourceBuffer = function () {
        return this.buffers[0];
    };
    DoubleFrameBuffer.prototype.getDestBuffer = function () {
        return this.buffers[1];
    };
    return DoubleFrameBuffer;
}());


// EXTERNAL MODULE: ./engine/renderable/abstract/renderableModel.ts + 2 modules
var renderableModel = __webpack_require__(8);

// EXTERNAL MODULE: ./engine/renderer/webGl/blender/blender.ts
var blender = __webpack_require__(43);

// EXTERNAL MODULE: ./engine/geometry/mat4.ts
var mat4 = __webpack_require__(2);

// EXTERNAL MODULE: ./engine/renderer/webGl/programs/impl/base/simpleRect/simpleRectDrawer.ts
var simpleRectDrawer = __webpack_require__(34);

// EXTERNAL MODULE: ./engine/renderer/webGl/webGlRendererHelper.ts + 1 modules
var webGlRendererHelper = __webpack_require__(27);

// EXTERNAL MODULE: ./engine/renderer/webGl/base/abstract/abstractTexture.ts
var abstractTexture = __webpack_require__(13);

// CONCATENATED MODULE: ./engine/misc/device.ts
var Device = (function () {
    function Device() {
    }
    Device.logInfo = function () {
        console.log({
            isTouch: Device.isTouch,
            isFrame: Device.isFrame,
            isIPhone: Device.isIPhone,
            buildAt: 1596972733198,
            embeddedEngine: Device.embeddedEngine,
        });
    };
    Device.isTouch = ('ontouchstart' in window);
    Device.isFrame = window.top !== window.self;
    Device.isIPhone = navigator.platform.toLowerCase().indexOf('iphone') > -1;
    Device.embeddedEngine = navigator.userAgent === 'vEngine';
    return Device;
}());


// CONCATENATED MODULE: ./engine/renderer/webGl/base/frameBufferStack.ts










var IDENTITY = mat4["a" /* mat4 */].IDENTITY;
var Mat16Holder = mat4["a" /* mat4 */].Mat16Holder;

var FLIP_POSITION_MATRIX;
var NONE_FILTERS = [];
var frameBufferStack_FrameBufferStack = (function () {
    function FrameBufferStack(game, _gl, _size) {
        this.game = game;
        this._gl = _gl;
        this._size = _size;
        this.debug = false;
        this._stack = [];
        this._interpolationMode = abstractTexture["b" /* INTERPOLATION_MODE */].LINEAR;
        this._doubleFrameBuffer = new doubleFrameBuffer_DoubleFrameBuffer(this._gl, this._size);
        this._pixelPerfectMode = false;
        this._blender = blender["a" /* Blender */].getSingleton(this._gl);
        this._stack.push({
            frameBuffer: new frameBuffer_FrameBuffer(this._gl, this._size),
            filters: NONE_FILTERS,
            pointer: { ptr: 0 }
        });
        this._stackPointer = 1;
        this._simpleRectDrawer = new simpleRectDrawer["a" /* SimpleRectDrawer */](_gl);
        this._simpleRectDrawer.initProgram();
        this._blender.enable();
        this._blender.setBlendMode(renderableModel["a" /* BLEND_MODE */].NORMAL);
        var m16hResult = Mat16Holder.fromPool();
        var m16Scale = Mat16Holder.fromPool();
        mat4["a" /* mat4 */].makeScale(m16Scale, this.game.size.width, this.game.size.height, 1);
        var m16Ortho = Mat16Holder.fromPool();
        mat4["a" /* mat4 */].ortho(m16Ortho, 0, this.game.size.width, 0, this.game.size.height, -1, 1);
        mat4["a" /* mat4 */].matrixMultiply(m16hResult, m16Scale, m16Ortho);
        FLIP_POSITION_MATRIX = m16hResult.clone();
        m16hResult.release();
        m16Scale.release();
        m16Ortho.release();
        this._resourceLink = resourceLink["a" /* ResourceLink */].create(this._getFirst().frameBuffer.getTexture());
    }
    FrameBufferStack.prototype.pushState = function (filters, forceDrawChildrenOnNewSurface) {
        var prevPointer = this._getLast().pointer;
        if (filters.length > 0 || forceDrawChildrenOnNewSurface) {
            if (this.debug)
                console.log('state has been pushed');
            if (this._stack[this._stackPointer] === undefined) {
                this._stack[this._stackPointer] = {
                    frameBuffer: new frameBuffer_FrameBuffer(this._gl, this._size),
                    filters: NONE_FILTERS,
                    pointer: { ptr: this._stackPointer }
                };
            }
            this._stack[this._stackPointer].filters = filters;
            this._stack[this._stackPointer].frameBuffer.bind();
            this._stack[this._stackPointer].frameBuffer.clear(color["a" /* Color */].NONE);
            this._stackPointer++;
        }
        else {
            this._getLast().frameBuffer.bind();
        }
        return prevPointer;
    };
    FrameBufferStack.prototype.clear = function (color, alphaBlend) {
        this._getLast().frameBuffer.bind();
        this._getLast().frameBuffer.clear(color, alphaBlend);
    };
    FrameBufferStack.prototype.setInterpolationMode = function (interpolation) {
        this._getLast().frameBuffer.setInterpolationMode(interpolation);
        this._doubleFrameBuffer.setInterpolationMode(interpolation);
        this._interpolationMode = interpolation;
    };
    FrameBufferStack.prototype.getCurrentTargetSize = function () {
        return this._getLast().frameBuffer.getTexture().size;
    };
    FrameBufferStack.prototype.setPixelPerfect = function (mode) {
        this._pixelPerfectMode = mode;
    };
    FrameBufferStack.prototype.getStackSize = function () {
        return this._stackPointer;
    };
    FrameBufferStack.prototype.destroy = function () {
        this._stack.forEach(function (f) { return f.frameBuffer.destroy(); });
        this._doubleFrameBuffer.destroy();
        this._simpleRectDrawer.destroy();
    };
    FrameBufferStack.prototype.reduceState = function (to) {
        if (this._stackPointer === 1)
            return;
        if (this.debug)
            console.log("reducing state from " + (this._stackPointer - 1) + " to " + to.ptr);
        for (var i = this._stackPointer - 1; i > to.ptr; i--) {
            var currItem = this._stack[i];
            var nextItem = this._stack[i - 1];
            var filteredTexture = this._doubleFrameBuffer.applyFilters(currItem.frameBuffer.getTexture(), currItem.filters);
            currItem.filters = NONE_FILTERS;
            nextItem.frameBuffer.bind();
            nextItem.frameBuffer.setInterpolationMode(this._interpolationMode);
            this._simpleRectDrawer.setUniform(this._simpleRectDrawer.u_textureMatrix, IDENTITY);
            var m16h = Object(webGlRendererHelper["c" /* makeIdentityPositionMatrix */])(0, 0, this._getLast().frameBuffer.getTexture().size);
            this._simpleRectDrawer.setUniform(this._simpleRectDrawer.u_vertexMatrix, m16h.mat16);
            this._simpleRectDrawer.attachTexture('texture', filteredTexture);
            this._blender.setBlendMode(renderableModel["a" /* BLEND_MODE */].NORMAL);
            this._simpleRectDrawer.draw();
            m16h.release();
        }
        this._stackPointer = to.ptr + 1;
    };
    FrameBufferStack.prototype.renderToScreen = function () {
        this._blender.setBlendMode(renderableModel["a" /* BLEND_MODE */].NORMAL);
        var needFullScreen = this._pixelPerfectMode || Device.embeddedEngine;
        var w = needFullScreen ? this.game.getRenderer().viewPortSize.width : this.game.size.width;
        var h = needFullScreen ? this.game.getRenderer().viewPortSize.height : this.game.size.height;
        this._getLast().frameBuffer.unbind();
        this._gl.viewport(0, 0, ~~w, ~~h);
        this._simpleRectDrawer.setUniform(this._simpleRectDrawer.u_textureMatrix, webGlRendererHelper["a" /* FLIP_TEXTURE_MATRIX */].mat16);
        this._simpleRectDrawer.setUniform(this._simpleRectDrawer.u_vertexMatrix, FLIP_POSITION_MATRIX.mat16);
        this._simpleRectDrawer.attachTexture('texture', this._getLast().frameBuffer.getTexture());
        this._simpleRectDrawer.draw();
    };
    FrameBufferStack.prototype.getResourceLink = function () {
        return this._resourceLink;
    };
    FrameBufferStack.prototype._getLast = function () {
        return this._stack[this._stackPointer - 1];
    };
    FrameBufferStack.prototype._getFirst = function () {
        return this._stack[0];
    };
    return FrameBufferStack;
}());



/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ resourceLoader_ResourceLoader; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./engine/resources/resourceLink.ts
var resourceLink = __webpack_require__(10);

// EXTERNAL MODULE: ./engine/debug/debugError.ts
var debugError = __webpack_require__(0);

// EXTERNAL MODULE: ./engine/resources/incrementer.ts
var incrementer = __webpack_require__(38);

// CONCATENATED MODULE: ./engine/resources/queue.ts


var queue_TaskRef = (function () {
    function TaskRef() {
        this.id = incrementer["a" /* Incrementer */].getValue();
    }
    return TaskRef;
}());

var queue_Queue = (function () {
    function Queue() {
        this._tasksResolved = 0;
        this._tasks = [];
        this._tasksProgressById = {};
        this._completed = false;
        this._nextTaskIndex = 0;
        this._currProgress = 0;
    }
    Queue.prototype.progressTask = function (taskRef, progress) {
        if (progress === 1)
            return;
        var taskId = taskRef.id;
        this._tasksProgressById[taskId] = progress;
        if (this.onProgress)
            this.onProgress(this.calcProgress());
    };
    Queue.prototype.resolveTask = function (taskRef) {
        var taskId = taskRef.id;
        if (true) {
            if (this._tasksProgressById[taskId] === undefined)
                throw new debugError["a" /* DebugError */]("can not resolve task: no task with id " + taskId);
            if (this._tasksProgressById[taskId] === 1)
                throw new debugError["a" /* DebugError */]("task with id " + taskId + " resolved already");
        }
        this._tasksResolved++;
        this._tasksProgressById[taskId] = 1;
        if (this._tasks.length === this._tasksResolved) {
            if (this.onProgress)
                this.onProgress(1);
            this._completed = true;
            if (this.onResolved)
                this.onResolved();
        }
        else {
            if (this.onProgress)
                this.onProgress(this.calcProgress());
            this._tasks[this._nextTaskIndex++]();
        }
    };
    Queue.prototype.addTask = function (taskFn) {
        var taskRef = new queue_TaskRef();
        this._tasks.push(taskFn);
        this._tasksProgressById[taskRef.id] = 0;
        return taskRef;
    };
    Queue.prototype.isCompleted = function () {
        return this._completed;
    };
    Queue.prototype.calcProgress = function () {
        var _this = this;
        var sum = 0;
        Object.keys(this._tasksProgressById).forEach(function (taskId) {
            sum += _this._tasksProgressById[taskId] || 0;
        });
        var progress = sum / this._tasks.length;
        if (progress > this._currProgress)
            this._currProgress = progress;
        return this._currProgress;
    };
    Queue.prototype.completeForced = function () {
        this._completed = true;
        if (this.onResolved !== undefined)
            this.onResolved();
    };
    Queue.prototype.start = function () {
        if (this.size() === 0) {
            this._completed = true;
            if (this.onResolved)
                this.onResolved();
        }
        else {
            this._tasks[this._nextTaskIndex++]();
        }
    };
    Queue.prototype.size = function () {
        return this._tasks.length;
    };
    return Queue;
}());


// CONCATENATED MODULE: ./engine/resources/urlLoader.ts

var addUrlParameter = function (url, param, value) {
    if (url.indexOf('?') > -1)
        url += '&';
    else
        url += '?';
    return "" + url + param + "=" + value;
};
var loadBase64 = function (urlRequest) {
    return Promise.resolve(urlRequest.url);
};
var loadViaXmlHttp = function (urlRequest, onProgress) {
    if (!urlRequest.method)
        urlRequest.method = 'GET';
    var xhr = new XMLHttpRequest();
    xhr.open(urlRequest.method, addUrlParameter(urlRequest.url, 'modified', 1596972733278), true);
    xhr.responseType = urlRequest.responseType;
    if (xhr.responseType === 'blob') {
        xhr.setRequestHeader('Accept-Ranges', 'bytes');
        xhr.setRequestHeader('Content-Range', 'bytes');
    }
    if (urlRequest.headers) {
        for (var _i = 0, _a = urlRequest.headers; _i < _a.length; _i++) {
            var header = _a[_i];
            xhr.setRequestHeader(header.name, header.value);
        }
    }
    return new Promise(function (resolve, reject) {
        xhr.onload = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                }
                else {
                    var message =  true ? "can not load resource with url '" + urlRequest.url + "', status " + xhr.status : undefined;
                    reject(message);
                }
            }
        };
        if (onProgress) {
            xhr.onprogress = function (e) {
                onProgress(e.loaded / e.total);
            };
        }
        xhr.onerror = function (e) {
            console.error(e);
            var rejectError =  true ? "can not load resource with url " + urlRequest.url : undefined;
            reject(rejectError);
        };
        xhr.ontimeout = function (e) {
            console.error(e);
            var rejectError =  true ? "can not load resource with url " + urlRequest.url : undefined;
            reject(rejectError);
        };
        xhr.send();
    });
};
var urlLoader_UrlLoader = (function () {
    function UrlLoader(urlRequest) {
        this.urlRequest = urlRequest;
    }
    UrlLoader.prototype.getUrl = function () {
        return this.urlRequest.url;
    };
    UrlLoader.prototype.load = function () {
        return Object(tslib_es6["b" /* __awaiter */])(this, void 0, Promise, function () {
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                if (this.getUrl().indexOf('data:') === 0)
                    return [2, loadBase64(this.urlRequest)];
                else
                    return [2, loadViaXmlHttp(this.urlRequest, this.onProgress)];
                return [2];
            });
        });
    };
    return UrlLoader;
}());


// CONCATENATED MODULE: ./engine/resources/resourceUtil.ts


var resourceUtil_ResourceUtil;
(function (ResourceUtil) {
    var _this = this;
    var loadArrayBuffer = function (req, q, taskRef) { return Object(tslib_es6["b" /* __awaiter */])(_this, void 0, Promise, function () {
        var iReq, loader;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (req.substr !== undefined) {
                        iReq = { url: req, responseType: 'arraybuffer', method: 'GET' };
                    }
                    else
                        iReq = req;
                    loader = new urlLoader_UrlLoader(iReq);
                    loader.onProgress = function (n) { return q.progressTask(taskRef, n); };
                    return [4, loader.load()];
                case 1: return [2, _a.sent()];
            }
        });
    }); };
    var createBitmapFromBlob = function (imgBlob) { return Object(tslib_es6["b" /* __awaiter */])(_this, void 0, Promise, function () {
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            return [2, globalThis.createImageBitmap(imgBlob)];
        });
    }); };
    var createHTMLImageFromUrl = function (imgUrl) { return Object(tslib_es6["b" /* __awaiter */])(_this, void 0, Promise, function () {
        var url;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            url = imgUrl.url ? imgUrl.url : imgUrl;
            return [2, new Promise(function (resolve, reject) {
                    var img = new window.Image();
                    img.src = url;
                    img.onload = function () {
                        resolve(img);
                    };
                    img.onerror = function (e) {
                        console.error(e);
                        var msg =  true ? "can not create image. Bad url data: " + url : undefined;
                        reject(msg);
                    };
                })];
        });
    }); };
    ResourceUtil.createImageFromData = function (imageData, q, taskRef) { return Object(tslib_es6["b" /* __awaiter */])(_this, void 0, Promise, function () {
        var isBase64, arrayBuffer, arrayBufferView, imgBlob;
        return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isBase64 = imageData.substr !== undefined && imageData.indexOf('data:image/') === 0;
                    if (!isBase64) return [3, 2];
                    return [4, createHTMLImageFromUrl(imageData)];
                case 1: return [2, _a.sent()];
                case 2:
                    if (!(globalThis.createImageBitmap === undefined)) return [3, 4];
                    return [4, createHTMLImageFromUrl(imageData)];
                case 3: return [2, _a.sent()];
                case 4: return [4, loadArrayBuffer(imageData, q, taskRef)];
                case 5:
                    arrayBuffer = _a.sent();
                    arrayBufferView = new Uint8Array(arrayBuffer);
                    imgBlob = new Blob([arrayBufferView]);
                    return [4, createBitmapFromBlob(imgBlob)];
                case 6: return [2, _a.sent()];
            }
        });
    }); };
})(resourceUtil_ResourceUtil || (resourceUtil_ResourceUtil = {}));

// CONCATENATED MODULE: ./engine/resources/resourceLoader.ts





var createImageFromData = resourceUtil_ResourceUtil.createImageFromData;
var resourceCache;
(function (resourceCache) {
    resourceCache.cache = {};
    resourceCache.clear = function () {
        var keys = Object.keys(resourceCache.cache);
        keys.forEach(function (k) { return delete resourceCache.cache[k]; });
    };
})(resourceCache || (resourceCache = {}));
var resourceLoader_ResourceLoader = (function () {
    function ResourceLoader(game) {
        this.game = game;
        this.q = new queue_Queue();
        this.game = game;
    }
    ResourceLoader.createUrlLoader = function (req, responseType) {
        if (responseType === void 0) { responseType = 'text'; }
        var iReq;
        if (req.substr !== undefined) {
            iReq = { url: req, responseType: responseType, method: 'GET' };
        }
        else
            iReq = req;
        return new urlLoader_UrlLoader(iReq);
    };
    ResourceLoader.prototype.loadTexture = function (req) {
        var _this = this;
        var _a, _b;
        var link = new resourceLink["a" /* ResourceLink */](req);
        if (resourceCache.cache[(_a = req.url) !== null && _a !== void 0 ? _a : req] !== undefined) {
            link.setTarget(resourceCache.cache[(_b = req.url) !== null && _b !== void 0 ? _b : req]);
            return link;
        }
        var taskRef = this.q.addTask(function () { return Object(tslib_es6["b" /* __awaiter */])(_this, void 0, void 0, function () {
            var img, texture, e_1;
            var _a;
            return Object(tslib_es6["d" /* __generator */])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        link.state = resourceLink["b" /* ResourceLinkState */].PENDING;
                        return [4, createImageFromData(req, this.q, taskRef)];
                    case 1:
                        img = _b.sent();
                        texture = this.game.getRenderer().createTexture(img);
                        link.setTarget(texture);
                        resourceCache.cache[(_a = req.url) !== null && _a !== void 0 ? _a : req] = texture;
                        this.q.resolveTask(taskRef);
                        return [3, 3];
                    case 2:
                        e_1 = _b.sent();
                        link.state = resourceLink["b" /* ResourceLinkState */].PENDING_ERROR;
                        console.error(e_1);
                        throw e_1;
                    case 3: return [2];
                }
            });
        }); });
        return link;
    };
    ResourceLoader.prototype.loadCubeTexture = function (leftSide, rightSide, topSide, bottomSide, frontSide, backSide) {
        var _this = this;
        var link = new resourceLink["a" /* ResourceLink */]('');
        var taskRef = this.q.addTask(function () { return Object(tslib_es6["b" /* __awaiter */])(_this, void 0, void 0, function () {
            var imgLeft, imgRight, imgTop, imgBottom, imgFront, imgBack, texture, e_2;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        link.state = resourceLink["b" /* ResourceLinkState */].PENDING;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        return [4, createImageFromData(leftSide, this.q, taskRef)];
                    case 2:
                        imgLeft = _a.sent();
                        return [4, createImageFromData(rightSide, this.q, taskRefsAdditionals[0])];
                    case 3:
                        imgRight = _a.sent();
                        this.q.resolveTask(taskRefsAdditionals[0]);
                        return [4, createImageFromData(topSide, this.q, taskRefsAdditionals[1])];
                    case 4:
                        imgTop = _a.sent();
                        this.q.resolveTask(taskRefsAdditionals[1]);
                        return [4, createImageFromData(bottomSide, this.q, taskRefsAdditionals[2])];
                    case 5:
                        imgBottom = _a.sent();
                        this.q.resolveTask(taskRefsAdditionals[2]);
                        return [4, createImageFromData(frontSide, this.q, taskRefsAdditionals[3])];
                    case 6:
                        imgFront = _a.sent();
                        this.q.resolveTask(taskRefsAdditionals[3]);
                        return [4, createImageFromData(backSide, this.q, taskRefsAdditionals[4])];
                    case 7:
                        imgBack = _a.sent();
                        this.q.resolveTask(taskRefsAdditionals[4]);
                        texture = this.game.getRenderer().createCubeTexture(imgLeft, imgRight, imgTop, imgBottom, imgFront, imgBack);
                        link.setTarget(texture);
                        this.q.resolveTask(taskRef);
                        return [3, 9];
                    case 8:
                        e_2 = _a.sent();
                        link.state = resourceLink["b" /* ResourceLinkState */].PENDING_ERROR;
                        throw e_2;
                    case 9: return [2];
                }
            });
        }); });
        var taskRefsAdditionals = new Array(5);
        for (var i = 0; i < taskRefsAdditionals.length; i++) {
            taskRefsAdditionals[i] = (this.q.addTask(function () { }));
        }
        return link;
    };
    ResourceLoader.prototype.loadText = function (req) {
        return this._loadAndProcessText(req, function (t) { return t; });
    };
    ResourceLoader.prototype.loadJSON = function (req) {
        var postPrecessFn = function (t) { return JSON.parse(t); };
        return this._loadAndProcessText(req, postPrecessFn);
    };
    ResourceLoader.prototype.loadSound = function (req) {
        var _this = this;
        var loader = ResourceLoader.createUrlLoader(req, 'arraybuffer');
        var link = new resourceLink["a" /* ResourceLink */](loader.getUrl());
        var taskRef = this.q.addTask(function () { return Object(tslib_es6["b" /* __awaiter */])(_this, void 0, void 0, function () {
            var buff, e_3;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        link.state = resourceLink["b" /* ResourceLinkState */].PENDING;
                        return [4, loader.load()];
                    case 1:
                        buff = _a.sent();
                        return [4, this.game.getAudioPlayer().loadSound(buff, link)];
                    case 2:
                        _a.sent();
                        this.q.resolveTask(taskRef);
                        link.setTarget(undefined);
                        return [3, 4];
                    case 3:
                        e_3 = _a.sent();
                        console.error(e_3);
                        throw e_3;
                    case 4: return [2];
                }
            });
        }); });
        loader.onProgress = function (n) { return _this.q.progressTask(taskRef, n); };
        return link;
    };
    ResourceLoader.prototype.loadBinary = function (req) {
        var _this = this;
        var loader = ResourceLoader.createUrlLoader(req, 'arraybuffer');
        var link = new resourceLink["a" /* ResourceLink */](loader.getUrl());
        loader.onProgress = function (n) { return _this.q.progressTask(taskRef, n); };
        var taskRef = this.q.addTask(function () { return Object(tslib_es6["b" /* __awaiter */])(_this, void 0, void 0, function () {
            var buff, e_4;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        link.state = resourceLink["b" /* ResourceLinkState */].PENDING;
                        return [4, loader.load()];
                    case 1:
                        buff = _a.sent();
                        link.setTarget(buff);
                        this.q.resolveTask(taskRef);
                        return [3, 3];
                    case 2:
                        e_4 = _a.sent();
                        console.error(e_4);
                        throw e_4;
                    case 3: return [2];
                }
            });
        }); });
        return link;
    };
    ResourceLoader.prototype.addNextTask = function (task) {
        var _this = this;
        var taskRef = this.q.addTask(function () {
            task();
            _this.q.resolveTask(taskRef);
        });
    };
    ResourceLoader.prototype.clearCache = function () {
        resourceCache.clear();
    };
    ResourceLoader.prototype.startLoading = function () {
        this.q.start();
    };
    ResourceLoader.prototype.isCompleted = function () {
        return this.q.isCompleted();
    };
    ResourceLoader.prototype.getProgress = function () {
        return this.q.calcProgress();
    };
    ResourceLoader.prototype.onProgress = function (fn) {
        this.q.onProgress = fn;
    };
    ResourceLoader.prototype.onCompleted = function (fn) {
        this.q.onResolved = fn;
    };
    ResourceLoader.prototype._loadAndProcessText = function (req, postProcess) {
        var _this = this;
        var url = req.url ? req.url : req;
        var link = new resourceLink["a" /* ResourceLink */](url);
        var loader = ResourceLoader.createUrlLoader(req);
        loader.onProgress = function (n) { return _this.q.progressTask(taskRef, n); };
        var taskRef = this.q.addTask(function () { return Object(tslib_es6["b" /* __awaiter */])(_this, void 0, void 0, function () {
            var text, data, e_5;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, loader.load()];
                    case 1:
                        text = _a.sent();
                        data = postProcess(text);
                        link.setTarget(data);
                        this.q.resolveTask(taskRef);
                        return [3, 3];
                    case 2:
                        e_5 = _a.sent();
                        console.error(e_5);
                        throw e_5;
                    case 3: return [2];
                }
            });
        }); });
        return link;
    };
    return ResourceLoader;
}());



/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ timerDelegate_TimerDelegate; });

// EXTERNAL MODULE: ./engine/core/game.ts
var game = __webpack_require__(9);

// EXTERNAL MODULE: ./engine/misc/object.ts
var object = __webpack_require__(14);

// CONCATENATED MODULE: ./engine/misc/timer.ts


var timer_Timer = (function () {
    function Timer(parent, callback, interval, once) {
        this.parent = parent;
        this.once = once;
        this._lastTime = 0;
        this._interval = interval;
        this._callback = callback;
    }
    Timer.prototype.onUpdate = function () {
        var time = game["a" /* Game */].getInstance().getCurrentTime();
        if (!this._lastTime)
            this._lastTime = time;
        var delta = time - this._lastTime;
        if (delta !== 0 && delta > this._interval) {
            this._lastTime = time;
            this._callback();
            if (this.once)
                this.kill();
        }
    };
    Timer.prototype.kill = function () {
        var _this = this;
        Object(object["g" /* removeFromArray */])(this.parent.getTimers(), function (it) { return it === _this; });
    };
    return Timer;
}());


// CONCATENATED MODULE: ./engine/delegates/timerDelegate.ts

var timerDelegate_TimerDelegate = (function () {
    function TimerDelegate() {
    }
    TimerDelegate.prototype.setInterval = function (callback, interval) {
        return this._addTimer(callback, interval, false);
    };
    TimerDelegate.prototype.setTimeout = function (callback, interval) {
        return this._addTimer(callback, interval, true);
    };
    TimerDelegate.prototype.getTimers = function () {
        return this._timers;
    };
    TimerDelegate.prototype.update = function () {
        if (!this._timers)
            return;
        for (var _i = 0, _a = this._timers; _i < _a.length; _i++) {
            var t = _a[_i];
            t.onUpdate();
        }
    };
    TimerDelegate.prototype._addTimer = function (callback, interval, once) {
        var t = new timer_Timer(this, callback, interval, once);
        if (!this._timers)
            this._timers = [];
        this._timers.push(t);
        return t;
    };
    return TimerDelegate;
}());



/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vec4; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_misc_releaseableEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _engine_misc_objectPool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);



var vec4;
(function (vec4) {
    var Vec4Holder = (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Vec4Holder, _super);
        function Vec4Holder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.vec4 = new Float32Array(4);
            return _this;
        }
        Vec4Holder.fromPool = function () {
            return Vec4Holder.pool.getFreeObject();
        };
        Vec4Holder.prototype.set = function (x, y, z, w) {
            var v = this.vec4;
            v[0] = x;
            v[1] = y;
            v[2] = z;
            v[3] = w;
        };
        Object.defineProperty(Vec4Holder.prototype, "x", {
            get: function () {
                return this.vec4[0];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vec4Holder.prototype, "y", {
            get: function () {
                return this.vec4[1];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vec4Holder.prototype, "z", {
            get: function () {
                return this.vec4[2];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vec4Holder.prototype, "w", {
            get: function () {
                return this.vec4[3];
            },
            enumerable: false,
            configurable: true
        });
        Vec4Holder.pool = new _engine_misc_objectPool__WEBPACK_IMPORTED_MODULE_2__[/* ObjectPool */ "a"](Vec4Holder, 32);
        return Vec4Holder;
    }(_engine_misc_releaseableEntity__WEBPACK_IMPORTED_MODULE_1__[/* ReleaseableEntity */ "a"]));
    vec4.Vec4Holder = Vec4Holder;
})(vec4 || (vec4 = {}));


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractPrimitive; });
var AbstractPrimitive = (function () {
    function AbstractPrimitive() {
    }
    return AbstractPrimitive;
}());



/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GAME_PAD_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GamePadEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_control_abstract_abstractKeypad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _engine_misc_objectPool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);



var GAME_PAD_EVENTS;
(function (GAME_PAD_EVENTS) {
    GAME_PAD_EVENTS["buttonPressed"] = "buttonPressed";
    GAME_PAD_EVENTS["buttonReleased"] = "buttonReleased";
    GAME_PAD_EVENTS["buttonHold"] = "buttonHold";
})(GAME_PAD_EVENTS || (GAME_PAD_EVENTS = {}));
var GamePadEvent = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(GamePadEvent, _super);
    function GamePadEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GamePadEvent.fromPool = function () {
        return GamePadEvent.pool.getFreeObject(true);
    };
    GamePadEvent.pool = new _engine_misc_objectPool__WEBPACK_IMPORTED_MODULE_2__[/* ObjectPool */ "a"](GamePadEvent);
    return GamePadEvent;
}(_engine_control_abstract_abstractKeypad__WEBPACK_IMPORTED_MODULE_1__[/* KeyPadEvent */ "c"]));



/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _debug_debugError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _engine_geometry_abstract_observableEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);



var Color = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Color, _super);
    function Color(r, g, b, a) {
        if (r === void 0) { r = 0; }
        if (g === void 0) { g = r; }
        if (b === void 0) { b = g; }
        if (a === void 0) { a = 255; }
        var _this = _super.call(this) || this;
        _this.type = 'Color';
        _this._friezed = false;
        _this.setRGBA(r, g, b, a);
        return _this;
    }
    Color.RGB = function (r, g, b) {
        if (g === void 0) { g = r; }
        if (b === void 0) { b = r; }
        return Color.RGBA(r, g, b, 255);
    };
    Color.HSLA = function (h, s, l, a) {
        var c = new Color();
        c.setHSLA(h, s, l, a);
        return c;
    };
    Color.HSL = function (h, s, l) {
        return Color.HSLA(h, s, l, 255);
    };
    Color.RGBA = function (r, g, b, a) {
        if (g === void 0) { g = r; }
        if (b === void 0) { b = r; }
        if (a === void 0) { a = b; }
        var c = new Color(0, 0, 0);
        c.setRGBA(r, g, b, a);
        return c;
    };
    Color.fromRGBNumeric = function (col) {
        var r = (col & 16711680) >> (4 * 4);
        var g = (col & 65280) >> (4 * 2);
        var b = (col & 255);
        return new Color(r, g, b);
    };
    Color.prototype.setRGBA = function (r, g, b, a) {
        if (a === void 0) { a = 255; }
        this.checkFriezed();
        var changed = this._r !== r || this._g !== g || this._b !== b || this._a !== a;
        if (!changed)
            return;
        this._r = r;
        this._g = g;
        this._b = b;
        this._a = a;
        this.triggerObservable();
        this.normalizeToZeroOne();
    };
    Color.prototype.setRGB = function (r, g, b) {
        this.setRGBA(r, g, b, 255);
    };
    Color.prototype.setHSLA = function (h, s, l, a) {
        h = (h % 360) / 360;
        s /= 100;
        l /= 100;
        var r, g, b;
        if (s === 0) {
            r = g = b = l;
        }
        else {
            var hue2rgb = function (pCol, qCol, t) {
                if (t < 0)
                    t += 1;
                if (t > 1)
                    t -= 1;
                if (t < 1 / 6)
                    return pCol + (qCol - pCol) * 6 * t;
                if (t < 1 / 2)
                    return qCol;
                if (t < 2 / 3)
                    return pCol + (qCol - pCol) * (2 / 3 - t) * 6;
                return pCol;
            };
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        var rResult = Math.round(r * 255);
        var gResult = Math.round(g * 255);
        var bResult = Math.round(b * 255);
        this.setRGBA(rResult, gResult, bResult, a);
    };
    Color.prototype.setHSL = function (h, s, l) {
        this.setHSLA(h, s, l, 255);
    };
    Object.defineProperty(Color.prototype, "r", {
        get: function () {
            return this._r;
        },
        set: function (value) {
            this.setRGBA(value, this._g, this._b, this._a);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "g", {
        get: function () {
            return this._g;
        },
        set: function (value) {
            this.setRGBA(this._r, value, this._b, this._a);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (value) {
            this.setRGBA(this._r, this._g, value, this._a);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (value) {
            this.setRGBA(this._r, this._g, this._b, value);
        },
        enumerable: false,
        configurable: true
    });
    Color.prototype.set = function (another) {
        this.setRGBA(another._r, another._g, another._b, another._a);
    };
    Color.prototype.clone = function () {
        return new Color(this._r, this._g, this._b, this._a);
    };
    Color.prototype.freeze = function () {
        this._friezed = true;
        return this;
    };
    Color.prototype.asGL = function () {
        if (!this._arr)
            this._arr = new Array(3);
        this._arr[0] = this.rNorm;
        this._arr[1] = this.gNorm;
        this._arr[2] = this.bNorm;
        this._arr[3] = this.aNorm;
        return this._arr;
    };
    Color.prototype.asCSS = function () {
        return "rgba(" + this._r + "," + this._g + "," + this._b + "," + this._a / 255 + ")";
    };
    Color.prototype.asRGBNumeric = function () {
        return (this._r << 16) | (this._g << 8) | this._b;
    };
    Color.prototype.toJSON = function () {
        return { r: this._r, g: this._g, b: this._b, a: this._a };
    };
    Color.prototype.fromJSON = function (json) {
        this.setRGBA(json.r, json.g, json.b, json.a);
    };
    Color.prototype.checkFriezed = function () {
        if (this._friezed) {
            if (true) {
                console.error(this);
                throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("the color is friezed and can no be changed");
            }
            else
                {}
        }
    };
    Color.prototype.normalizeToZeroOne = function () {
        this.rNorm = this._r / 0xff;
        this.gNorm = this._g / 0xff;
        this.bNorm = this._b / 0xff;
        this.aNorm = this._a / 0xff;
    };
    Color.WHITE = Color.RGB(255, 255, 255).freeze();
    Color.GREY = Color.RGB(127, 127, 127).freeze();
    Color.BLACK = Color.RGB(0, 0, 0).freeze();
    Color.NONE = Color.RGBA(0, 0, 0, 0).freeze();
    return Color;
}(_engine_geometry_abstract_observableEntity__WEBPACK_IMPORTED_MODULE_2__[/* ObservableEntity */ "a"]));



/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FastMap; });
var FastMap = (function () {
    function FastMap() {
        this._keys = [];
        this._values = [];
    }
    FastMap.prototype.put = function (key, value) {
        var index = this._keys.indexOf(key);
        if (index === -1) {
            this._keys.push(key);
            this._values.push(value);
        }
        else {
            this._values[index] = value;
        }
    };
    FastMap.prototype.get = function (key) {
        var index = this._keys.indexOf(key);
        if (index === -1)
            return undefined;
        return this._values[index];
    };
    FastMap.prototype.has = function (key) {
        var index = this._keys.indexOf(key);
        return index > -1;
    };
    FastMap.prototype.remove = function (key) {
        var index = this._keys.indexOf(key);
        if (index === -1)
            return;
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
    };
    FastMap.prototype.getKeys = function () {
        return this._keys;
    };
    FastMap.prototype.getValues = function () {
        return this._values;
    };
    FastMap.prototype.size = function () {
        return this._keys.length;
    };
    return FastMap;
}());



/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ webGlRenderer_WebGlRenderer; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./engine/debug/debugError.ts
var debugError = __webpack_require__(0);

// EXTERNAL MODULE: ./engine/renderer/webGl/base/shaderProgram.ts
var shaderProgram = __webpack_require__(22);

// EXTERNAL MODULE: ./engine/renderer/webGl/programs/abstract/abstractDrawer.ts
var abstractDrawer = __webpack_require__(23);

// EXTERNAL MODULE: ./engine/renderer/webGl/base/bufferInfo.ts + 2 modules
var base_bufferInfo = __webpack_require__(15);

// EXTERNAL MODULE: ./engine/renderer/webGl/primitives/plane.ts
var plane = __webpack_require__(31);

// EXTERNAL MODULE: ./engine/renderer/webGl/base/shaderProgramUtils.ts
var shaderProgramUtils = __webpack_require__(3);

// EXTERNAL MODULE: ./engine/renderer/webGl/shaders/generators/shaderGenerator.ts
var shaderGenerator = __webpack_require__(30);

// EXTERNAL MODULE: ./engine/renderer/webGl/programs/impl/base/shape/shape.fragment.glsl
var shape_fragment = __webpack_require__(57);

// EXTERNAL MODULE: ./engine/misc/object.ts
var object = __webpack_require__(14);

// EXTERNAL MODULE: ./engine/renderable/impl/general/image.ts
var general_image = __webpack_require__(17);

// CONCATENATED MODULE: ./engine/renderer/webGl/programs/impl/base/shape/shapeDrawer.ts










var SHAPE_TYPE;
(function (SHAPE_TYPE) {
    SHAPE_TYPE[SHAPE_TYPE["ELLIPSE"] = 0] = "ELLIPSE";
    SHAPE_TYPE[SHAPE_TYPE["RECT"] = 1] = "RECT";
})(SHAPE_TYPE || (SHAPE_TYPE = {}));
var FILL_TYPE;
(function (FILL_TYPE) {
    FILL_TYPE[FILL_TYPE["COLOR"] = 0] = "COLOR";
    FILL_TYPE[FILL_TYPE["TEXTURE"] = 1] = "TEXTURE";
    FILL_TYPE[FILL_TYPE["LINEAR_GRADIENT"] = 2] = "LINEAR_GRADIENT";
})(FILL_TYPE || (FILL_TYPE = {}));
var shapeDrawer_ShapeDrawer = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ShapeDrawer, _super);
    function ShapeDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        var gen = new shaderGenerator["a" /* ShaderGenerator */]();
        gen.setVertexMainFn("void main(){\nv_position = a_position;\ngl_Position = u_vertexMatrix * a_position;\n}");
        _this.u_vertexMatrix = gen.addVertexUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_MAT4, 'u_vertexMatrix');
        _this.a_position = gen.addAttribute(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_VEC4, 'a_position');
        gen.addVarying(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_VEC4, 'v_position');
        _this.u_lineWidth = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT, 'u_lineWidth');
        _this.u_rx = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT, 'u_rx');
        _this.u_ry = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT, 'u_ry');
        _this.u_width = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT, 'u_width');
        _this.u_height = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT, 'u_height');
        _this.u_rectOffsetTop = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT, 'u_rectOffsetTop');
        _this.u_rectOffsetLeft = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT, 'u_rectOffsetLeft');
        _this.u_borderRadius = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT, 'u_borderRadius');
        _this.u_color = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_VEC4, 'u_color');
        _this.u_alpha = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT, 'u_alpha');
        _this.u_fillColor = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_VEC4, 'u_fillColor');
        _this.u_fillLinearGradient = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_VEC4, 'u_fillLinearGradient[3]', true);
        _this.u_texRect = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_VEC4, 'u_texRect');
        _this.u_texOffset = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_VEC2, 'u_texOffset');
        gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].SAMPLER_2D, 'texture');
        _this.u_shapeType = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].INT, 'u_shapeType');
        _this.u_fillType = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].INT, 'u_fillType');
        _this.u_arcAngleFrom = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT, 'u_arcAngleFrom');
        _this.u_arcAngleTo = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT, 'u_arcAngleTo');
        _this.u_repeatFactor = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_VEC2, 'u_repeatFactor');
        _this.u_stretchMode = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].INT, 'u_stretchMode');
        _this.u_anticlockwise = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].BOOL, 'u_anticlockwise');
        gen.setFragmentMainFn(Object(object["f" /* parametrizeString */])(shape_fragment, {
            __STRETCH_MODE_STRETCH__: general_image["b" /* STRETCH_MODE */].STRETCH,
            __STRETCH_MODE_REPEAT__: general_image["b" /* STRETCH_MODE */].REPEAT,
            __FILL_TYPE_COLOR__: FILL_TYPE.COLOR,
            __FILL_TYPE_TEXTURE__: FILL_TYPE.TEXTURE,
            __FILL_TYPE_LINEAR_GRADIENT__: FILL_TYPE.LINEAR_GRADIENT,
            __SHAPE_TYPE_ELLIPSE__: SHAPE_TYPE.ELLIPSE,
            __SHAPE_TYPE_RECT__: SHAPE_TYPE.RECT,
            __PI__: Math.PI,
        }));
        _this.program = new shaderProgram["a" /* ShaderProgram */](gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.primitive = new plane["a" /* Plane */]();
        _this.bufferInfo = new base_bufferInfo["a" /* BufferInfo */](gl, {
            posVertexInfo: { array: _this.primitive.vertexArr, type: gl.FLOAT, size: 2, attrName: _this.a_position },
            posIndexInfo: { array: _this.primitive.indexArr },
            drawMethod: base_bufferInfo["b" /* DRAW_METHOD */].TRIANGLE_STRIP,
        });
        return _this;
    }
    return ShapeDrawer;
}(abstractDrawer["a" /* AbstractDrawer */]));


// EXTERNAL MODULE: ./engine/renderer/webGl/base/matrixStack.ts
var base_matrixStack = __webpack_require__(33);

// EXTERNAL MODULE: ./engine/renderer/webGl/base/texture.ts
var base_texture = __webpack_require__(28);

// EXTERNAL MODULE: ./engine/geometry/rect.ts
var geometry_rect = __webpack_require__(11);

// EXTERNAL MODULE: ./engine/core/game.ts
var core_game = __webpack_require__(9);

// EXTERNAL MODULE: ./engine/renderable/impl/ui/components/textField.ts + 2 modules
var components_textField = __webpack_require__(52);

// EXTERNAL MODULE: ./engine/renderer/common/color.ts
var color = __webpack_require__(5);

// EXTERNAL MODULE: ./engine/geometry/size.ts
var geometry_size = __webpack_require__(7);

// EXTERNAL MODULE: ./engine/renderable/impl/general/font.ts
var font = __webpack_require__(53);

// EXTERNAL MODULE: ./engine/misc/collection/stack.ts
var stack = __webpack_require__(29);

// CONCATENATED MODULE: ./engine/renderer/common/alphaBlendStack.ts

var alphaBlendStack_AlphaBlendStack = (function () {
    function AlphaBlendStack() {
        this._stack = new stack["a" /* Stack */]();
        this._stack.push(1);
    }
    AlphaBlendStack.prototype.getCurrentValue = function () {
        return this._stack.getLast();
    };
    AlphaBlendStack.prototype.restore = function () {
        if (this._stack.isEmpty())
            this._stack.push(1);
        else
            this._stack.pop();
    };
    AlphaBlendStack.prototype.save = function () {
        var last = this._stack.getLast();
        this._stack.push(last);
    };
    AlphaBlendStack.prototype.mult = function (alpha) {
        this.setCurrentValue(this.getCurrentValue() * alpha);
    };
    AlphaBlendStack.prototype.setCurrentValue = function (v) {
        this._stack.replaceLast(v);
    };
    return AlphaBlendStack;
}());


// CONCATENATED MODULE: ./engine/renderer/abstract/abstractRenderer.ts






var abstractRenderer_AbstractRenderer = (function () {
    function AbstractRenderer(game) {
        this.game = game;
        this.clearBeforeRender = true;
        this.clearColor = color["a" /* Color */].RGB(0, 0, 0);
        this.viewPortSize = new geometry_size["a" /* Size */]();
        this._alphaBlendStack = new alphaBlendStack_AlphaBlendStack();
        this._fullScreenRequested = false;
        this.game = game;
    }
    AbstractRenderer.prototype.requestFullScreen = function () {
        var _this = this;
        var canRequest = this._requestFullScreen();
        if (canRequest) {
            var fn_1 = function () {
                if (_this._fullScreenRequested)
                    _this._requestFullScreen();
                document.body.removeEventListener('click', fn_1);
            };
            document.body.addEventListener('click', fn_1);
        }
    };
    AbstractRenderer.prototype.cancelFullScreen = function () {
        this._fullScreenRequested = false;
        var doc = globalThis.document;
        if (doc.cancelFullScreen !== undefined) {
            (doc).cancelFullScreen();
        }
        else if (doc.mozCancelFullScreen !== undefined) {
            doc.mozCancelFullScreen();
        }
        else if (doc.webkitCancelFullScreen !== undefined) {
            doc.webkitCancelFullScreen();
        }
    };
    AbstractRenderer.prototype.beforeItemStackDraw = function (filters, forceDrawChildrenOnNewSurface) {
        return undefined;
    };
    AbstractRenderer.prototype.afterItemStackDraw = function (stackPointer) { };
    AbstractRenderer.prototype.beforeFrameDraw = function (filters) {
        return undefined;
    };
    AbstractRenderer.prototype.afterFrameDraw = function (stackPointer) { };
    AbstractRenderer.prototype.destroy = function () {
        globalThis.removeEventListener('resize', this.onResize);
    };
    AbstractRenderer.prototype.killObject = function (r) { };
    AbstractRenderer.prototype.saveAlphaBlend = function () {
        this._alphaBlendStack.save();
    };
    AbstractRenderer.prototype.restoreAlphaBlend = function () {
        this._alphaBlendStack.restore();
    };
    AbstractRenderer.prototype.setAlphaBlend = function (alpha) {
        this._alphaBlendStack.mult(alpha);
    };
    AbstractRenderer.prototype.getAlphaBlend = function () {
        return this._alphaBlendStack.getCurrentValue();
    };
    AbstractRenderer.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (false)
            {}
        var textField = this.debugTextField;
        if (!textField) {
            textField = new components_textField["b" /* TextField */](this.game);
            textField.setFont(font["a" /* Font */].getSystemFont());
            textField.revalidate();
            this.debugTextField = textField;
        }
        textField.setScene(this.game.getCurrScene());
        var res = '';
        Array.prototype.slice.call(arguments).forEach(function (txt) {
            if (txt === undefined)
                txt = 'undefined';
            else if (txt === null)
                txt = 'null';
            else if (txt instanceof HTMLElement) {
                txt = "[object " + txt.tagName + "]";
            }
            else if (txt.toJSON) {
                txt = JSON.stringify(txt.toJSON(), undefined, 4);
            }
            else if (typeof txt === 'function') {
                txt = txt.toString();
            }
            else {
                if (!txt.substr) {
                    try {
                        txt = JSON.stringify(txt);
                    }
                    catch (e) {
                        if (txt.constructor && txt.constructor.name)
                            txt = "[object " + txt.constructor.name + "]";
                        else
                            txt = txt.toString();
                    }
                }
            }
            res += txt + "\n";
        });
        textField.setText(textField.getText() + res);
        textField.onGeometryChanged();
        while (textField.size.height > this.game.size.height) {
            var strings = textField.getText().split('\n');
            strings.shift();
            textField.setText(strings.join('\n'));
            textField.onGeometryChanged();
        }
    };
    AbstractRenderer.prototype.clearLog = function () {
        if (false)
            {}
        if (!this.debugTextField)
            return;
        this.debugTextField.setText('');
    };
    AbstractRenderer.prototype.getHelper = function () {
        return this.rendererHelper;
    };
    AbstractRenderer.prototype.registerResize = function () {
        var _this = this;
        this.onResize();
        globalThis.addEventListener('resize', function () {
            _this.onResize();
            setTimeout(function () { return _this.onResize(); }, 100);
        });
        document.addEventListener('gesturestart', function (e) { return e.preventDefault(); });
        this.container.addEventListener('gesturestart', function (e) { return e.preventDefault(); });
    };
    AbstractRenderer.prototype.onResize = function () {
        var container = this.container;
        var _a = this.getScreenResolution(), innerWidth = _a[0], innerHeight = _a[1];
        if (this.game.scaleStrategy === core_game["b" /* SCALE_STRATEGY */].NO_SCALE)
            return;
        else if (this.game.scaleStrategy === core_game["b" /* SCALE_STRATEGY */].STRETCH) {
            container.style.width = innerWidth + "px";
            container.style.height = innerHeight + "px";
            this.viewPortSize.setWH(innerWidth, innerHeight);
            this.game.scale.setXY(innerWidth / this.game.size.width, innerHeight / this.game.size.height);
            this.game.pos.setXY(0);
        }
        else {
            var canvasRatio = this.game.size.height / this.game.size.width;
            var windowRatio = innerHeight / innerWidth;
            var width = void 0;
            var height = void 0;
            if (windowRatio < canvasRatio) {
                height = innerHeight;
                width = height / canvasRatio;
            }
            else {
                width = innerWidth;
                height = width * canvasRatio;
            }
            this.game.scale.setXY(width / this.game.size.width, height / this.game.size.height);
            this.game.pos.setXY((innerWidth - width) / 2, (innerHeight - height) / 2);
            this.container.style.width = width + 'px';
            this.container.style.height = height + 'px';
            this.container.style.marginTop = this.game.pos.y + "px";
            this.viewPortSize.setWH(width, height);
        }
    };
    AbstractRenderer.prototype.getScreenResolution = function () {
        return [globalThis.innerWidth, globalThis.innerHeight];
    };
    AbstractRenderer.prototype._requestFullScreen = function () {
        var element = this.container;
        this._fullScreenRequested = true;
        var canRequest = false;
        if (element.requestFullScreen) {
            element.requestFullScreen();
            canRequest = true;
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
            canRequest = true;
        }
        else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
            canRequest = true;
        }
        return canRequest;
    };
    return AbstractRenderer;
}());


// CONCATENATED MODULE: ./engine/renderer/abstract/abstractCanvasRenderer.ts


var abstractCanvasRenderer_AbstractCanvasRenderer = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(AbstractCanvasRenderer, _super);
    function AbstractCanvasRenderer(game) {
        var _this = _super.call(this, game) || this;
        var container = document.createElement('canvas');
        document.body.appendChild(container);
        container.setAttribute('width', game.size.width.toString());
        container.setAttribute('height', game.size.height.toString());
        container.ondragstart = function (e) {
            e.preventDefault();
        };
        _this.container = container;
        return _this;
    }
    return AbstractCanvasRenderer;
}(abstractRenderer_AbstractRenderer));


// EXTERNAL MODULE: ./engine/renderer/webGl/programs/impl/base/mesh/mesh.fragment.glsl
var mesh_fragment = __webpack_require__(59);

// EXTERNAL MODULE: ./engine/renderer/webGl/programs/impl/base/mesh/mesh.vertex.glsl
var mesh_vertex = __webpack_require__(58);

// CONCATENATED MODULE: ./engine/renderer/webGl/programs/impl/base/mesh/meshDrawer.ts







var meshDrawer_MeshDrawer = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(MeshDrawer, _super);
    function MeshDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        _this.a_position = 'a_position';
        _this.a_normal = 'a_normal';
        _this.a_texCoord = 'a_texCoord';
        _this.u_modelMatrix = 'u_modelMatrix';
        _this.u_inverseTransposeModelMatrix = 'u_inverseTransposeModelMatrix';
        _this.u_textureMatrix = 'u_textureMatrix';
        _this.u_projectionMatrix = 'u_projectionMatrix';
        _this.u_color = 'u_color';
        _this.u_color_mix = 'u_color_mix';
        _this.u_alpha = 'u_alpha';
        _this.u_reflectivity = 'u_reflectivity';
        _this.u_textureUsed = 'u_textureUsed';
        _this.u_normalsTextureUsed = 'u_normalsTextureUsed';
        _this.u_lightUsed = 'u_lightUsed';
        _this.u_heightMapTextureUsed = 'u_heightMapTextureUsed';
        _this.u_cubeMapTextureUsed = 'u_cubeMapTextureUsed';
        _this.u_heightMapFactor = 'u_heightMapFactor';
        _this.program = new shaderProgram["a" /* ShaderProgram */](gl, mesh_vertex, mesh_fragment);
        return _this;
    }
    MeshDrawer.prototype.bindModel = function (mesh) {
        this.mesh = mesh;
        if (!this.mesh.bufferInfo)
            this._initBufferInfo(mesh.modelPrimitive.drawMethod, mesh.vertexItemSize);
        if (mesh.isLightAccepted() === undefined) {
            mesh.acceptLight(!!this.mesh.bufferInfo.normalBuffer);
        }
        this.bufferInfo = this.mesh.bufferInfo;
    };
    MeshDrawer.prototype.setModelMatrix = function (m) {
        this.setUniform(this.u_modelMatrix, m);
    };
    MeshDrawer.prototype.setInverseTransposeModelMatrix = function (m) {
        this.setUniform(this.u_inverseTransposeModelMatrix, m);
    };
    MeshDrawer.prototype.setProjectionMatrix = function (m) {
        this.setUniform(this.u_projectionMatrix, m);
    };
    MeshDrawer.prototype.setTextureMatrix = function (m) {
        this.setUniform(this.u_textureMatrix, m);
    };
    MeshDrawer.prototype.setAlfa = function (a) {
        this.setUniform(this.u_alpha, a);
    };
    MeshDrawer.prototype.setReflectivity = function (r) {
        this.setUniform(this.u_reflectivity, r);
    };
    MeshDrawer.prototype.setTextureUsed = function (used) {
        this.setUniform(this.u_textureUsed, used);
    };
    MeshDrawer.prototype.setNormalsTextureUsed = function (used) {
        this.setUniform(this.u_normalsTextureUsed, used);
    };
    MeshDrawer.prototype.setHeightMapTextureUsed = function (used) {
        this.setUniform(this.u_heightMapTextureUsed, used);
    };
    MeshDrawer.prototype.setCubeMapTextureUsed = function (used) {
        this.setUniform(this.u_cubeMapTextureUsed, used);
    };
    MeshDrawer.prototype.setHeightMapFactor = function (val) {
        this.setUniform(this.u_heightMapFactor, val);
    };
    MeshDrawer.prototype.setLightUsed = function (used) {
        this.setUniform(this.u_lightUsed, used);
    };
    MeshDrawer.prototype.setColor = function (c) {
        this.setUniform(this.u_color, c.asGL());
    };
    MeshDrawer.prototype.setColorMix = function (val) {
        this.setUniform(this.u_color_mix, val);
    };
    MeshDrawer.prototype.bind = function () {
        if ( true && this.mesh === undefined)
            throw new debugError["a" /* DebugError */]("can not bind modelDrawer;bindModel must be invoked firstly");
        _super.prototype.bind.call(this);
        if (!this.mesh.modelPrimitive.texCoordArr) {
            this.program.disableAttribute(this.a_texCoord);
        }
        else {
            this.program.enableAttribute(this.a_texCoord);
        }
        if (!this.mesh.modelPrimitive.normalArr) {
            this.program.disableAttribute(this.a_normal);
        }
        else {
            this.program.enableAttribute(this.a_normal);
        }
    };
    MeshDrawer.prototype._initBufferInfo = function (drawMethod, vertexSize) {
        if (drawMethod === void 0) { drawMethod = base_bufferInfo["b" /* DRAW_METHOD */].TRIANGLES; }
        if (vertexSize === void 0) { vertexSize = 3; }
        var bufferInfo = {
            posVertexInfo: {
                array: this.mesh.modelPrimitive.vertexArr,
                type: this.gl.FLOAT,
                size: vertexSize, attrName: this.a_position
            },
            drawMethod: drawMethod
        };
        if (this.mesh.modelPrimitive.indexArr) {
            bufferInfo.posIndexInfo = {
                array: this.mesh.modelPrimitive.indexArr
            };
        }
        if (this.mesh.modelPrimitive.normalArr) {
            bufferInfo.normalInfo = {
                array: this.mesh.modelPrimitive.normalArr,
                type: this.gl.FLOAT,
                size: 3,
                attrName: this.a_normal
            };
        }
        if (this.mesh.modelPrimitive.texCoordArr) {
            bufferInfo.texVertexInfo = {
                array: this.mesh.modelPrimitive.texCoordArr,
                type: this.gl.FLOAT,
                size: 2, attrName: this.a_texCoord
            };
        }
        this.mesh.bufferInfo = new base_bufferInfo["a" /* BufferInfo */](this.gl, bufferInfo);
    };
    return MeshDrawer;
}(abstractDrawer["a" /* AbstractDrawer */]));


// EXTERNAL MODULE: ./engine/resources/resourceLink.ts
var resourceLink = __webpack_require__(10);

// EXTERNAL MODULE: ./engine/geometry/mat4.ts
var mat4 = __webpack_require__(2);

// EXTERNAL MODULE: ./engine/renderable/abstract/renderableModel.ts + 2 modules
var renderableModel = __webpack_require__(8);

// EXTERNAL MODULE: ./engine/renderer/webGl/blender/blender.ts
var blender = __webpack_require__(43);

// EXTERNAL MODULE: ./engine/renderer/webGl/debug/debugUtil.ts
var debugUtil = __webpack_require__(42);

// EXTERNAL MODULE: ./engine/renderer/webGl/programs/impl/base/simpleRect/simpleRectDrawer.ts
var simpleRectDrawer = __webpack_require__(34);

// CONCATENATED MODULE: ./engine/renderer/webGl/programs/impl/base/tileMap/tileMapDrawer.ts



var tileMapDrawer_TileMapDrawer = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(TileMapDrawer, _super);
    function TileMapDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        _this.tileSize = [0, 0];
        var gen = _this.gen;
        _this.u_tileSize = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_VEC2, 'u_tileSize');
        gen.setFragmentMainFn("void main(){\nvec2 tileCoord = mod(v_texCoord,u_tileSize);\ngl_FragColor = texture2D(texture, tileCoord);\n}");
        return _this;
    }
    TileMapDrawer.prototype.setTileSize = function (width, height) {
        this.tileSize[0] = width;
        this.tileSize[1] = height;
        this.setUniform(this.u_tileSize, this.tileSize);
    };
    return TileMapDrawer;
}(simpleRectDrawer["a" /* SimpleRectDrawer */]));


// EXTERNAL MODULE: ./engine/renderer/webGl/webGlRendererHelper.ts + 1 modules
var webGlRendererHelper = __webpack_require__(27);

// EXTERNAL MODULE: ./engine/renderer/webGl/base/frameBufferStack.ts + 3 modules
var frameBufferStack = __webpack_require__(44);

// EXTERNAL MODULE: ./engine/renderer/webGl/base/abstract/abstractTexture.ts
var abstractTexture = __webpack_require__(13);

// CONCATENATED MODULE: ./engine/renderer/webGl/base/cubeMapTexture.ts



var cubeMapTexture_CubeMapTexture = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(CubeMapTexture, _super);
    function CubeMapTexture(gl) {
        var _this = _super.call(this, gl) || this;
        _this.gl = gl;
        _this.samplerType = _this.gl.TEXTURE_CUBE_MAP;
        return _this;
    }
    CubeMapTexture.prototype.setImages = function (left, right, top, bottom, front, back) {
        this.validate(left, right, top, bottom, front, back);
        this.init(left, right, top, bottom, front, back);
    };
    CubeMapTexture.prototype.setAsZero = function () {
        var _this = this;
        var gl = this.gl;
        var faceInfos = [
            gl.TEXTURE_CUBE_MAP_POSITIVE_X,
            gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
            gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
            gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
            gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
            gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
        ];
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.tex);
        faceInfos.forEach(function (faceInfo) {
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, _this.tex);
            gl.texImage2D(faceInfo, 0, gl.RGBA, 2, 2, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        });
        gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
    };
    CubeMapTexture.prototype.validate = function (left, right, top, bottom, front, back) {
        if (true) {
            if (!this.gl)
                throw new debugError["a" /* DebugError */]("can not create Texture, gl context not passed to constructor, expected: Texture(gl)");
            var isZeroImage = function (img) {
                return img.width === 0 || img.height === 0;
            };
            var isOfSize = function (img, width, height) {
                return img.width === width && img.height === height;
            };
            if (isZeroImage(top) ||
                isZeroImage(bottom) ||
                isZeroImage(left) ||
                isZeroImage(right) ||
                isZeroImage(top) ||
                isZeroImage(bottom)) {
                throw new debugError["a" /* DebugError */]("can not create cube texture: wrong image is passed");
            }
            var w = top.width, h = top.height;
            if (!isOfSize(bottom, w, h) ||
                !isOfSize(left, w, h) ||
                !isOfSize(right, w, h) ||
                !isOfSize(front, w, h) ||
                !isOfSize(back, w, h)) {
                throw new debugError["a" /* DebugError */]("can not create cube texture: the same size of images is required");
            }
        }
    };
    CubeMapTexture.prototype.init = function (left, right, top, bottom, front, back) {
        var _this = this;
        var gl = this.gl;
        var faceInfos = [
            {
                target: gl.TEXTURE_CUBE_MAP_POSITIVE_X,
                img: left,
            },
            {
                target: gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
                img: right,
            },
            {
                target: gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
                img: top,
            },
            {
                target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
                img: bottom,
            },
            {
                target: gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
                img: back,
            },
            {
                target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
                img: front,
            },
        ];
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.tex);
        this.size.setWH(top.width, top.height);
        faceInfos.forEach(function (faceInfo) {
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, _this.tex);
            gl.texImage2D(faceInfo.target, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, faceInfo.img);
        });
        if (Object(abstractTexture["c" /* isPowerOf2 */])(this.size.width) && Object(abstractTexture["c" /* isPowerOf2 */])(this.size.height)) {
            gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
        }
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
    };
    return CubeMapTexture;
}(abstractTexture["a" /* AbstractTexture */]));


// CONCATENATED MODULE: ./engine/renderer/webGl/programs/impl/base/simpleRect/simpleColoredRectDrawer.ts








var simpleColoredRectDrawer_SimpleColoredRectDrawer = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(SimpleColoredRectDrawer, _super);
    function SimpleColoredRectDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        _this.gl = gl;
        _this.gen = new shaderGenerator["a" /* ShaderGenerator */]();
        var gen = _this.gen;
        gen.addAttribute(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_VEC4, 'a_position');
        _this.u_vertexMatrix = gen.addVertexUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_MAT4, 'u_vertexMatrix');
        _this.u_alpha = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT, 'u_alpha');
        _this.u_color = gen.addScalarFragmentUniform(shaderProgramUtils["a" /* GL_TYPE */].FLOAT_VEC4, 'u_color');
        gen.setVertexMainFn("void main(){\ngl_Position = u_vertexMatrix * a_position;\n}");
        gen.setFragmentMainFn("void main(){\ngl_FragColor = u_color*u_alpha;\n}");
        _this.initProgram();
        return _this;
    }
    SimpleColoredRectDrawer.prototype.initProgram = function () {
        if (true) {
            if (!this.gen)
                throw new debugError["a" /* DebugError */]("can not init simpleRectDrawer instance: ShaderGenerator must be created");
        }
        this.primitive = new plane["a" /* Plane */]();
        this.program = new shaderProgram["a" /* ShaderProgram */](this.gl, this.gen.getVertexSource(), this.gen.getFragmentSource());
        this.bufferInfo = new base_bufferInfo["a" /* BufferInfo */](this.gl, {
            posVertexInfo: { array: this.primitive.vertexArr, type: this.gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: this.primitive.indexArr },
            drawMethod: base_bufferInfo["b" /* DRAW_METHOD */].TRIANGLE_STRIP
        });
    };
    return SimpleColoredRectDrawer;
}(abstractDrawer["a" /* AbstractDrawer */]));


// CONCATENATED MODULE: ./engine/renderer/webGl/webGlRenderer.ts





















var Mat16Holder = mat4["a" /* mat4 */].Mat16Holder;
var glEnumToString = debugUtil["a" /* debugUtil */].glEnumToString;

var getCtx = function (el) {
    var contextAttrs = { alpha: false, premultipliedAlpha: false };
    var possibles = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
    for (var _i = 0, possibles_1 = possibles; _i < possibles_1.length; _i++) {
        var p = possibles_1[_i];
        var ctx = el.getContext(p, contextAttrs);
        if (ctx) {
            return ctx;
        }
    }
    if (true)
        throw new debugError["a" /* DebugError */]("webGl is not accessible on this device");
    return undefined;
};
var SCENE_DEPTH = 1000;
var zToWMatrix = Mat16Holder.create();
mat4["a" /* mat4 */].makeZToWMatrix(zToWMatrix, 1);
var makePositionMatrix = function (rect, viewSize, matrixStack) {
    var projectionMatrix = Mat16Holder.fromPool();
    mat4["a" /* mat4 */].ortho(projectionMatrix, 0, viewSize.width, 0, viewSize.height, -SCENE_DEPTH, SCENE_DEPTH);
    var scaleMatrix = Mat16Holder.fromPool();
    mat4["a" /* mat4 */].makeScale(scaleMatrix, rect.width, rect.height, 1);
    var translationMatrix = Mat16Holder.fromPool();
    mat4["a" /* mat4 */].makeTranslation(translationMatrix, rect.x, rect.y, 0);
    var matrix1 = Mat16Holder.fromPool();
    mat4["a" /* mat4 */].matrixMultiply(matrix1, scaleMatrix, translationMatrix);
    var matrix2 = Mat16Holder.fromPool();
    mat4["a" /* mat4 */].matrixMultiply(matrix2, matrix1, matrixStack.getCurrentValue());
    var matrix3 = Mat16Holder.fromPool();
    mat4["a" /* mat4 */].matrixMultiply(matrix3, matrix2, projectionMatrix);
    var matrix4 = Mat16Holder.fromPool();
    mat4["a" /* mat4 */].matrixMultiply(matrix4, matrix3, zToWMatrix);
    projectionMatrix.release();
    scaleMatrix.release();
    translationMatrix.release();
    matrix1.release();
    matrix2.release();
    matrix3.release();
    return matrix4;
};
var InstanceHolder = (function () {
    function InstanceHolder(clazz) {
        this.clazz = clazz;
    }
    InstanceHolder.prototype.getInstance = function (gl) {
        if (this.instance === undefined)
            this.instance = new this.clazz(gl);
        return this.instance;
    };
    InstanceHolder.prototype.destroy = function () {
        if (this.instance !== undefined)
            this.instance.destroy();
    };
    InstanceHolder.prototype.isInvoked = function () {
        return this.instance !== undefined;
    };
    return InstanceHolder;
}());
var webGlRenderer_WebGlRenderer = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(WebGlRenderer, _super);
    function WebGlRenderer(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'WebGlRenderer';
        _this.rendererHelper = new webGlRendererHelper["b" /* WebGlRendererHelper */](_this.game);
        _this._matrixStack = new base_matrixStack["a" /* MatrixStack */]();
        _this._shapeDrawerHolder = new InstanceHolder(shapeDrawer_ShapeDrawer);
        _this._coloredRectDrawer = new InstanceHolder(simpleColoredRectDrawer_SimpleColoredRectDrawer);
        _this._meshDrawerHolder = new InstanceHolder(meshDrawer_MeshDrawer);
        _this._tileMapDrawerHolder = new InstanceHolder(tileMapDrawer_TileMapDrawer);
        _this._pixelPerfectMode = false;
        _this.registerResize();
        _this._init();
        return _this;
    }
    WebGlRenderer.prototype.setPixelPerfect = function (mode) {
        var interpolation = mode ? abstractTexture["b" /* INTERPOLATION_MODE */].NEAREST : abstractTexture["b" /* INTERPOLATION_MODE */].LINEAR;
        this._currFrameBufferStack.setInterpolationMode(interpolation);
        this._currFrameBufferStack.setPixelPerfect(mode);
        this._pixelPerfectMode = mode;
        this.onResize();
    };
    WebGlRenderer.prototype.drawImage = function (img) {
        if (true) {
            if (!img.getResourceLink()) {
                throw new debugError["a" /* DebugError */]("image resource link is not set");
            }
            if (!img.getResourceLink().getTarget()) {
                console.error(img);
                throw new debugError["a" /* DebugError */]("no target associated with resource link");
            }
            if (img.getResourceLink().state !== resourceLink["b" /* ResourceLinkState */].COMPLETED) {
                throw new debugError["a" /* DebugError */]("can not access resource link: it has wrong state " + img.getResourceLink().state + ", " + resourceLink["b" /* ResourceLinkState */].COMPLETED + " state is expected");
            }
        }
        img.getResourceLink().getTarget().
            setInterpolationMode(img.isPixelPerfect() ? abstractTexture["b" /* INTERPOLATION_MODE */].NEAREST : abstractTexture["b" /* INTERPOLATION_MODE */].LINEAR);
        var texture = img.getResourceLink().getTarget();
        var maxSize = Math.max(img.size.width, img.size.height);
        var sd = this._shapeDrawerHolder.getInstance(this._gl);
        this.prepareGeometryUniformInfo(img);
        sd.setUniform(sd.u_lineWidth, Math.min(img.lineWidth / maxSize, 1));
        sd.setUniform(sd.u_color, img.color.asGL());
        var repeatFactor = geometry_size["a" /* Size */].fromPool();
        repeatFactor.setWH(img.size.width / img.getSrcRect().width, img.size.height / img.getSrcRect().height);
        sd.setUniform(sd.u_repeatFactor, repeatFactor.toArray());
        repeatFactor.release();
        sd.setUniform(sd.u_borderRadius, Math.min(img.borderRadius / maxSize, 1));
        sd.setUniform(sd.u_shapeType, SHAPE_TYPE.RECT);
        sd.setUniform(sd.u_fillType, FILL_TYPE.TEXTURE);
        var _a = texture.size, textureWidth = _a.width, textureHeight = _a.height;
        var _b = img.getSrcRect(), srcRectX = _b.x, srcRectY = _b.y;
        var _c = img.getSrcRect(), destRectWidth = _c.width, destRectHeight = _c.height;
        var destArr = geometry_rect["a" /* Rect */].fromPool().setXYWH(srcRectX / textureWidth, srcRectY / textureHeight, destRectWidth / textureWidth, destRectHeight / textureHeight).release().toArray();
        sd.setUniform(sd.u_texRect, destArr);
        var offSetArr = geometry_size["a" /* Size */].fromPool().setWH(img.offset.x / maxSize, img.offset.y / maxSize).release().toArray();
        sd.setUniform(sd.u_texOffset, offSetArr);
        sd.setUniform(sd.u_stretchMode, img.stretchMode);
        sd.attachTexture('texture', texture);
        sd.draw();
    };
    WebGlRenderer.prototype.drawMesh = function (mesh) {
        var md = this._meshDrawerHolder.getInstance(this._gl);
        md.bindModel(mesh);
        md.bind();
        var modelMatrix = this._matrixStack.getCurrentValue();
        var orthoProjectionMatrix = Mat16Holder.fromPool();
        var currViewSize = this._currFrameBufferStack.getCurrentTargetSize();
        mat4["a" /* mat4 */].ortho(orthoProjectionMatrix, 0, currViewSize.width, 0, currViewSize.height, -SCENE_DEPTH, SCENE_DEPTH);
        var zToWProjectionMatrix = Mat16Holder.fromPool();
        mat4["a" /* mat4 */].matrixMultiply(zToWProjectionMatrix, orthoProjectionMatrix, zToWMatrix);
        var inverseTransposeModelMatrix = Mat16Holder.fromPool();
        mat4["a" /* mat4 */].inverse(inverseTransposeModelMatrix, modelMatrix);
        mat4["a" /* mat4 */].transpose(inverseTransposeModelMatrix, inverseTransposeModelMatrix);
        md.setModelMatrix(modelMatrix.mat16);
        md.setInverseTransposeModelMatrix(inverseTransposeModelMatrix.mat16);
        md.setProjectionMatrix(zToWProjectionMatrix.mat16);
        md.setAlfa(this.getAlphaBlend());
        var isTextureUsed = mesh.texture !== undefined;
        if ( true && isTextureUsed && mesh.modelPrimitive.texCoordArr === undefined)
            throw new debugError["a" /* DebugError */]("can not apply texture without texture coordinates");
        md.setTextureUsed(isTextureUsed);
        if (isTextureUsed)
            md.setTextureMatrix(webGlRendererHelper["a" /* FLIP_TEXTURE_MATRIX */].mat16);
        md.attachTexture('u_texture', isTextureUsed ? mesh.texture : this._nullTexture);
        var isNormalsTextureUsed = mesh.normalsTexture !== undefined;
        md.setNormalsTextureUsed(isNormalsTextureUsed);
        md.attachTexture('u_normalsTexture', isNormalsTextureUsed ? mesh.normalsTexture : this._nullTexture);
        var isHeightMapTextureUsed = mesh.heightMapTexture !== undefined;
        md.setHeightMapTextureUsed(isHeightMapTextureUsed);
        md.attachTexture('u_heightMapTexture', isHeightMapTextureUsed ? mesh.heightMapTexture : this._nullTexture);
        md.setHeightMapFactor(mesh.heightMapFactor);
        var isCubeMapTextureUsed = mesh.cubeMapTexture !== undefined;
        if ( true && !isCubeMapTextureUsed && mesh.reflectivity !== 0)
            throw new debugError["a" /* DebugError */]("can not apply reflectivity without cubeMapTexture");
        md.setCubeMapTextureUsed(isCubeMapTextureUsed);
        md.setReflectivity(mesh.reflectivity);
        md.attachTexture('u_cubeMapTexture', isCubeMapTextureUsed ? mesh.cubeMapTexture : this._nullCubeMapTexture);
        md.setLightUsed(mesh.isLightAccepted() || false);
        md.setColor(mesh.fillColor);
        md.setColorMix(mesh.colorMix);
        if (mesh.depthTest)
            this._gl.enable(this._gl.DEPTH_TEST);
        else
            this._gl.disable(this._gl.DEPTH_TEST);
        md.draw();
        zToWMatrix.release();
        orthoProjectionMatrix.release();
        zToWProjectionMatrix.release();
        inverseTransposeModelMatrix.release();
    };
    WebGlRenderer.prototype.drawRectangle = function (rectangle) {
        if (rectangle.lineWidth === 0 && rectangle.borderRadius === 0 && rectangle.fillGradient === undefined) {
            this.drawSimpleColoredRectangle(rectangle);
        }
        else {
            var _a = rectangle.size, rw = _a.width, rh = _a.height;
            var maxSize = Math.max(rw, rh);
            var sd = this._shapeDrawerHolder.getInstance(this._gl);
            this.prepareGeometryUniformInfo(rectangle);
            this.prepareShapeUniformInfo(rectangle);
            sd.setUniform(sd.u_borderRadius, Math.min(rectangle.borderRadius / maxSize, 1));
            sd.setUniform(sd.u_shapeType, SHAPE_TYPE.RECT);
            sd.attachTexture('texture', this._nullTexture);
            sd.draw();
        }
    };
    WebGlRenderer.prototype.drawLine = function (line) {
        var r = line.getRectangleRepresentation();
        this.drawRectangle(r);
    };
    WebGlRenderer.prototype.drawEllipse = function (ellipse) {
        var maxR = Math.max(ellipse.radiusX, ellipse.radiusY);
        this.prepareGeometryUniformInfo(ellipse);
        this.prepareShapeUniformInfo(ellipse);
        var sd = this._shapeDrawerHolder.getInstance(this._gl);
        sd.setUniform(sd.u_lineWidth, Math.min(ellipse.lineWidth / maxR, 1));
        if (maxR === ellipse.radiusX) {
            sd.setUniform(sd.u_rx, 0.5);
            sd.setUniform(sd.u_ry, ellipse.radiusY / ellipse.radiusX * 0.5);
        }
        else {
            sd.setUniform(sd.u_ry, 0.5);
            sd.setUniform(sd.u_rx, ellipse.radiusX / ellipse.radiusY * 0.5);
        }
        sd.setUniform(sd.u_shapeType, SHAPE_TYPE.ELLIPSE);
        sd.setUniform(sd.u_width, 1);
        sd.setUniform(sd.u_height, 1);
        sd.setUniform(sd.u_rectOffsetLeft, 1);
        sd.setUniform(sd.u_rectOffsetTop, 1);
        sd.setUniform(sd.u_arcAngleFrom, ellipse.arcAngleFrom);
        sd.setUniform(sd.u_arcAngleTo, ellipse.arcAngleTo);
        sd.setUniform(sd.u_anticlockwise, ellipse.anticlockwise);
        sd.attachTexture('texture', this._nullTexture);
        sd.draw();
    };
    WebGlRenderer.prototype.transformSave = function () {
        this._matrixStack.save();
    };
    WebGlRenderer.prototype.transformScale = function (x, y, z) {
        if (z === void 0) { z = 1; }
        if (x === 1 && y === 1 && z === 1)
            return;
        this._matrixStack.scale(x, y, z);
    };
    WebGlRenderer.prototype.transformReset = function () {
        this._matrixStack.resetTransform();
    };
    WebGlRenderer.prototype.transformRotateX = function (angleInRadians) {
        if (angleInRadians === 0)
            return;
        this._matrixStack.rotateX(angleInRadians);
    };
    WebGlRenderer.prototype.transformRotateY = function (angleInRadians) {
        if (angleInRadians === 0)
            return;
        this._matrixStack.rotateY(angleInRadians);
    };
    WebGlRenderer.prototype.transformRotateZ = function (angleInRadians) {
        if (angleInRadians === 0)
            return;
        this._matrixStack.rotateZ(angleInRadians);
    };
    WebGlRenderer.prototype.transformTranslate = function (x, y, z) {
        if (z === void 0) { z = 0; }
        if (x === 0 && y === 0 && z === 0)
            return;
        this._matrixStack.translate(x, y, z);
    };
    WebGlRenderer.prototype.transformRotationReset = function () {
        this._matrixStack.rotationReset();
    };
    WebGlRenderer.prototype.transformSkewX = function (angle) {
        if (angle === 0)
            return;
        this._matrixStack.skewX(angle);
    };
    WebGlRenderer.prototype.transformSkewY = function (angle) {
        if (angle === 0)
            return;
        this._matrixStack.skewY(angle);
    };
    WebGlRenderer.prototype.transformRestore = function () {
        this._matrixStack.restore();
    };
    WebGlRenderer.prototype.transformSet = function (v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15) {
        this._matrixStack.setMatrixValues(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15);
    };
    WebGlRenderer.prototype.transformGet = function () {
        return this._matrixStack.getCurrentValue().mat16;
    };
    WebGlRenderer.prototype.setLockRect = function (rect) {
        this._lockRect = rect;
    };
    WebGlRenderer.prototype.unsetLockRect = function () {
        this._lockRect = undefined;
    };
    WebGlRenderer.prototype.beforeItemStackDraw = function (filters, forceDrawChildrenOnNewSurface) {
        return this._currFrameBufferStack.pushState(filters, forceDrawChildrenOnNewSurface);
    };
    WebGlRenderer.prototype.afterItemStackDraw = function (stackPointer) {
        this._gl.disable(this._gl.DEPTH_TEST);
        this._currFrameBufferStack.reduceState(stackPointer);
    };
    WebGlRenderer.prototype.beforeFrameDraw = function (filters) {
        var ptr = this._currFrameBufferStack.pushState(filters, false);
        if (this.clearBeforeRender) {
            this._currFrameBufferStack.clear(this.clearColor, this.getAlphaBlend());
        }
        return ptr;
    };
    WebGlRenderer.prototype.afterFrameDraw = function (stackPointer) {
        this._currFrameBufferStack.reduceState(stackPointer);
        if (this._currFrameBufferStack === this._origFrameBufferStack) {
            if (this._lockRect !== undefined) {
                var rect = this._lockRect;
                this._gl.enable(this._gl.SCISSOR_TEST);
                this._gl.scissor(~~rect.x, ~~(this.game.size.height - rect.height - rect.y), ~~rect.width, ~~rect.height);
            }
            this._currFrameBufferStack.renderToScreen();
            this._gl.disable(this._gl.SCISSOR_TEST);
        }
    };
    WebGlRenderer.prototype.getError = function () {
        if (false)
            {}
        var err = this._gl.getError();
        if (err !== this._gl.NO_ERROR) {
            return { code: err, desc: glEnumToString(this._gl, err) };
        }
        return undefined;
    };
    WebGlRenderer.prototype.createTexture = function (bitmap) {
        var texture = new base_texture["a" /* Texture */](this._gl);
        texture.setImage(bitmap);
        return texture;
    };
    WebGlRenderer.prototype.createCubeTexture = function (imgLeft, imgRight, imgTop, imgBottom, imgFront, imgBack) {
        var cubeTexture = new cubeMapTexture_CubeMapTexture(this._gl);
        cubeTexture.setImages(imgLeft, imgRight, imgTop, imgBottom, imgFront, imgBack);
        return cubeTexture;
    };
    WebGlRenderer.prototype.getNativeContext = function () {
        return this._gl;
    };
    WebGlRenderer.prototype.setRenderTarget = function (fbs) {
        this._currFrameBufferStack = fbs;
    };
    WebGlRenderer.prototype.setDefaultRenderTarget = function () {
        this._currFrameBufferStack = this._origFrameBufferStack;
    };
    WebGlRenderer.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this._origFrameBufferStack.destroy();
        this._nullTexture.destroy();
        this._nullCubeMapTexture.destroy();
        this._shapeDrawerHolder.destroy();
        this._meshDrawerHolder.destroy();
        this._tileMapDrawerHolder.destroy();
        base_texture["a" /* Texture */].destroyAll();
    };
    WebGlRenderer.prototype.onResize = function () {
        _super.prototype.onResize.call(this);
        if (this._pixelPerfectMode && (this.game.scaleStrategy === core_game["b" /* SCALE_STRATEGY */].STRETCH || this.game.scaleStrategy === core_game["b" /* SCALE_STRATEGY */].FIT)) {
            this.container.width = this.viewPortSize.width;
            this.container.height = this.viewPortSize.height;
        }
        else {
            this.container.width = this.game.size.width;
            this.container.height = this.game.size.height;
        }
    };
    WebGlRenderer.prototype._init = function () {
        var gl = getCtx(this.container);
        if ( true && gl === undefined)
            throw new debugError["a" /* DebugError */]("WebGLRenderingContext is not supported by this device");
        this._gl = gl;
        this._nullTexture = new base_texture["a" /* Texture */](gl);
        this._nullCubeMapTexture = new cubeMapTexture_CubeMapTexture(gl);
        this._nullCubeMapTexture.setAsZero();
        this._blender = blender["a" /* Blender */].getSingleton(gl);
        this._blender.enable();
        this._blender.setBlendMode(renderableModel["a" /* BLEND_MODE */].NORMAL);
        this._origFrameBufferStack = new frameBufferStack["a" /* FrameBufferStack */](this.game, this.getNativeContext(), this.game.size);
        this.setDefaultRenderTarget();
    };
    WebGlRenderer.prototype.drawSimpleColoredRectangle = function (rectangle) {
        var scd = this._coloredRectDrawer.getInstance(this._gl);
        var rect = geometry_rect["a" /* Rect */].fromPool();
        rect.setXYWH(0, 0, rectangle.size.width, rectangle.size.height);
        var size = geometry_size["a" /* Size */].fromPool();
        size.set(this._currFrameBufferStack.getCurrentTargetSize());
        var pos16h = makePositionMatrix(rect, size, this._matrixStack);
        scd.setUniform(scd.u_vertexMatrix, pos16h.mat16);
        pos16h.release();
        rect.release();
        size.release();
        scd.setUniform(scd.u_alpha, this.getAlphaBlend());
        scd.setUniform(scd.u_color, (rectangle.fillColor).asGL());
        scd.draw();
    };
    WebGlRenderer.prototype.prepareGeometryUniformInfo = function (model) {
        if (true) {
            if (!model.size.width || !model.size.height) {
                console.error(model);
                throw new debugError["a" /* DebugError */]("Can not render model with zero size");
            }
        }
        var _a = model.size, rw = _a.width, rh = _a.height;
        var maxSize = Math.max(rw, rh);
        var sd = this._shapeDrawerHolder.getInstance(this._gl);
        var offsetX = 0, offsetY = 0;
        if (maxSize === rw) {
            sd.setUniform(sd.u_width, 1);
            sd.setUniform(sd.u_height, rh / rw);
            offsetY = (maxSize - rh) / 2;
            sd.setUniform(sd.u_rectOffsetLeft, 0);
            sd.setUniform(sd.u_rectOffsetTop, offsetY / maxSize);
        }
        else {
            sd.setUniform(sd.u_height, 1);
            sd.setUniform(sd.u_width, rw / rh);
            offsetX = (maxSize - rw) / 2;
            sd.setUniform(sd.u_rectOffsetLeft, offsetX / maxSize);
            sd.setUniform(sd.u_rectOffsetTop, 0);
        }
        var rect = geometry_rect["a" /* Rect */].fromPool();
        rect.setXYWH(-offsetX, -offsetY, maxSize, maxSize);
        var size = geometry_size["a" /* Size */].fromPool();
        size.set(this._currFrameBufferStack.getCurrentTargetSize());
        var pos16h = makePositionMatrix(rect, size, this._matrixStack);
        sd.setUniform(sd.u_vertexMatrix, pos16h.mat16);
        pos16h.release();
        rect.release();
        size.release();
        sd.setUniform(sd.u_alpha, this.getAlphaBlend());
        sd.setUniform(sd.u_stretchMode, general_image["b" /* STRETCH_MODE */].STRETCH);
        this._blender.setBlendMode(model.blendMode);
        if (model.depthTest)
            this._gl.enable(this._gl.DEPTH_TEST);
        else
            this._gl.disable(this._gl.DEPTH_TEST);
    };
    WebGlRenderer.prototype.prepareShapeUniformInfo = function (model) {
        var maxSize = Math.max(model.size.width, model.size.height);
        var sd = this._shapeDrawerHolder.getInstance(this._gl);
        sd.setUniform(sd.u_lineWidth, Math.min(model.lineWidth / maxSize, 1));
        sd.setUniform(sd.u_color, model.color.asGL());
        if (model.fillGradient !== undefined) {
            sd.setUniform(sd.u_fillLinearGradient, model.fillGradient.asGL());
            sd.setUniform(sd.u_fillType, FILL_TYPE.LINEAR_GRADIENT);
        }
        else {
            sd.setUniform(sd.u_fillColor, model.fillColor.asGL());
            sd.setUniform(sd.u_fillType, FILL_TYPE.COLOR);
        }
    };
    return WebGlRenderer;
}(abstractCanvasRenderer_AbstractCanvasRenderer));



/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ TEXT_ALIGN; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ WORD_BRAKE; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ textField_TextField; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./engine/geometry/rect.ts
var rect = __webpack_require__(11);

// EXTERNAL MODULE: ./engine/debug/debugError.ts
var debugError = __webpack_require__(0);

// EXTERNAL MODULE: ./engine/renderable/impl/ui/abstract/container.ts
var abstract_container = __webpack_require__(39);

// EXTERNAL MODULE: ./engine/renderable/impl/geometry/rectangle.ts
var rectangle = __webpack_require__(25);

// EXTERNAL MODULE: ./engine/renderer/common/color.ts
var color = __webpack_require__(5);

// CONCATENATED MODULE: ./engine/renderable/impl/ui/components/vScroll.ts




var vScroll_VScroll = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(VScroll, _super);
    function VScroll(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'VScroll';
        _this.maxValue = 0;
        _this.value = 0;
        _this._enabled = false;
        var bg = new rectangle["a" /* Rectangle */](game);
        bg.size.width = 5;
        bg.fillColor = new color["a" /* Color */](50, 50, 50, 10);
        bg.color = color["a" /* Color */].NONE.clone();
        var hnd = new rectangle["a" /* Rectangle */](game);
        hnd.size.height = 10;
        hnd.color = color["a" /* Color */].NONE.clone();
        hnd.fillColor = new color["a" /* Color */](10, 10, 10, 100);
        _this.background = bg;
        _this.handler = hnd;
        _this.appendChild(bg);
        _this.appendChild(hnd);
        return _this;
    }
    Object.defineProperty(VScroll.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            this._enabled = value;
            this.visible = value;
        },
        enumerable: false,
        configurable: true
    });
    VScroll.prototype.onGeometryChanged = function () {
        this.handler.size.width = this.background.size.width;
        if (this.value > this.maxValue)
            this.value = this.maxValue;
        if (this.maxValue)
            this.handler.size.height = this.size.height * this.size.height / this.maxValue;
        if (this.maxValue)
            this.handler.pos.y =
                this.size.height * this.value / this.maxValue;
        this.background.revalidate();
        this.handler.revalidate();
        this.calcDrawableRect(this.size.width, this.size.height);
    };
    VScroll.prototype.draw = function () { };
    return VScroll;
}(abstract_container["a" /* Container */]));


// EXTERNAL MODULE: ./engine/misc/mathEx.ts
var mathEx = __webpack_require__(19);

// EXTERNAL MODULE: ./engine/control/mouse/mouseEvents.ts
var mouseEvents = __webpack_require__(6);

// CONCATENATED MODULE: ./engine/renderable/impl/ui/abstract/scrollableContainer.ts





var scrollableContainer_ScrollInfo = (function () {
    function ScrollInfo(game) {
        this.game = game;
        this.offset = 0;
        this.scrollHeight = 0;
        this._scrollVelocity = 0;
        this._deceleration = 0;
        this._enabled = false;
    }
    ScrollInfo.prototype.setEnabled = function (val) {
        this._enabled = val;
        this.vScroll.enabled = val;
    };
    ScrollInfo.prototype.onScroll = function () {
        this.vScroll.maxValue = this.scrollHeight;
        this.vScroll.value = this.offset;
        this.vScroll.onGeometryChanged();
    };
    ScrollInfo.prototype.listenScroll = function (container) {
        var _this = this;
        this._container = container;
        container.on(mouseEvents["a" /* MOUSE_EVENTS */].mouseDown, function (p) {
            _this._lastPoint = {
                point: p,
                time: Date.now()
            };
            _this._prevPoint = {
                point: _this._lastPoint.point,
                time: _this._lastPoint.time
            };
            _this._scrollVelocity = 0;
            _this._deceleration = 0;
        });
        container.on(mouseEvents["a" /* MOUSE_EVENTS */].mouseMove, function (p) {
            if (!p.isMouseDown)
                return;
            var lastPoint = _this._lastPoint;
            _this._lastPoint = {
                point: p,
                time: Date.now()
            };
            if (!lastPoint)
                lastPoint = _this._lastPoint;
            _this._prevPoint = {
                point: lastPoint.point,
                time: lastPoint.time,
            };
            _this.offset -=
                _this._lastPoint.point.screenY - _this._prevPoint.point.screenY;
            if (_this.offset > _this.scrollHeight - _this._container.size.height)
                _this.offset = _this.scrollHeight - _this._container.size.height;
            if (_this.offset < 0)
                _this.offset = 0;
            _this.onScroll();
        });
        container.on(mouseEvents["a" /* MOUSE_EVENTS */].scroll, function (p) {
            _this._scrollVelocity = -p.nativeEvent.wheelDelta;
            _this._deceleration = 0;
        });
        container.on(mouseEvents["a" /* MOUSE_EVENTS */].mouseUp, function (p) {
            if (!_this._lastPoint)
                return;
            if (!_this._prevPoint)
                return;
            if (_this._lastPoint.time === _this._prevPoint.time) {
                _this._scrollVelocity = 0;
            }
            else if (Date.now() - _this._lastPoint.time > 100) {
                _this._scrollVelocity = 0;
            }
            else {
                _this._scrollVelocity = 1000 *
                    (_this._prevPoint.point.screenY - _this._lastPoint.point.screenY) /
                    (_this._lastPoint.time - _this._prevPoint.time);
            }
            _this._deceleration = 0;
        });
        this._initScrollBar();
    };
    ScrollInfo.prototype.getContainerSize = function () {
        return this._container.size;
    };
    ScrollInfo.prototype.update = function () {
        if (!this._enabled)
            return;
        if (this._scrollVelocity)
            this.onScroll();
        var delta = this.game.getDeltaTime();
        if (this._scrollVelocity) {
            this._scrollBy(this._scrollVelocity * delta / 1000);
        }
        this._deceleration = this._deceleration + 0.5 / delta;
        if (delta > 1000) {
            this._scrollVelocity = 0;
            this._deceleration = 0;
        }
        if (this._scrollVelocity > 0)
            this._scrollVelocity -= this._deceleration;
        else if (this._scrollVelocity < 0)
            this._scrollVelocity += this._deceleration;
        if (mathEx["a" /* MathEx */].closeTo(this._scrollVelocity, 0, 3)) {
            this._scrollVelocity = 0;
            this._deceleration = 0;
        }
    };
    ScrollInfo.prototype._initScrollBar = function () {
        this.vScroll = new vScroll_VScroll(this.game);
        this.vScroll.size.width = 5;
        this._container.appendChild(this.vScroll);
    };
    ScrollInfo.prototype._scrollBy = function (val) {
        this.offset += val;
        if (this.offset > this.scrollHeight - this._container.size.height) {
            this.offset = this.scrollHeight - this._container.size.height;
            this._scrollVelocity = 0;
            this._deceleration = 0;
        }
        if (this.offset < 0) {
            this.offset = 0;
            this._scrollVelocity = 0;
            this._deceleration = 0;
        }
        this.onScroll();
    };
    return ScrollInfo;
}());

var scrollableContainer_ScrollableContainer = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ScrollableContainer, _super);
    function ScrollableContainer(game) {
        return _super.call(this, game) || this;
    }
    ScrollableContainer.prototype.getSideScrollSize = function () {
        return this.vScrollInfo.getContainerSize();
    };
    ScrollableContainer.prototype.update = function () {
        if (this.vScrollInfo)
            this.vScrollInfo.update();
        _super.prototype.update.call(this);
    };
    ScrollableContainer.prototype._initScrolling = function (desc) {
        if (desc.vertical) {
            this.vScrollInfo = new scrollableContainer_ScrollInfo(this.game);
            this.vScrollInfo.listenScroll(this);
        }
    };
    ScrollableContainer.prototype.updateScrollSize = function (desireableHeight, allowedHeight) {
        if (!this.vScrollInfo)
            return;
        if (allowedHeight !== 0 && desireableHeight > allowedHeight) {
            this.vScrollInfo.scrollHeight = desireableHeight;
            this.vScrollInfo.setEnabled(true);
        }
        else {
            this.vScrollInfo.setEnabled(false);
        }
        this.vScrollInfo.vScroll.size.height = allowedHeight;
        this.vScrollInfo.vScroll.pos.x = this.size.width - this.vScrollInfo.vScroll.size.width - 2;
        this.vScrollInfo.onScroll();
    };
    return ScrollableContainer;
}(abstract_container["a" /* Container */]));


// EXTERNAL MODULE: ./engine/renderable/impl/general/image.ts
var general_image = __webpack_require__(17);

// EXTERNAL MODULE: ./engine/geometry/size.ts
var size = __webpack_require__(7);

// EXTERNAL MODULE: ./engine/geometry/point2d.ts
var point2d = __webpack_require__(4);

// CONCATENATED MODULE: ./engine/renderable/impl/ui/components/textField.ts







var SPACE = ' ';
var TEXT_ALIGN;
(function (TEXT_ALIGN) {
    TEXT_ALIGN[TEXT_ALIGN["LEFT"] = 0] = "LEFT";
    TEXT_ALIGN[TEXT_ALIGN["RIGHT"] = 1] = "RIGHT";
    TEXT_ALIGN[TEXT_ALIGN["CENTER"] = 2] = "CENTER";
    TEXT_ALIGN[TEXT_ALIGN["JUSTIFY"] = 3] = "JUSTIFY";
})(TEXT_ALIGN || (TEXT_ALIGN = {}));
var WORD_BRAKE;
(function (WORD_BRAKE) {
    WORD_BRAKE[WORD_BRAKE["PREDEFINED"] = 0] = "PREDEFINED";
    WORD_BRAKE[WORD_BRAKE["FIT"] = 1] = "FIT";
})(WORD_BRAKE || (WORD_BRAKE = {}));
var textField_TextInfo = (function () {
    function TextInfo(textField) {
        this.textField = textField;
        this.allCharsCached = [];
        this.size = new size["a" /* Size */]();
        this.pos = new point2d["a" /* Point2d */]();
        this._strings = [];
    }
    TextInfo.prototype.reset = function () {
        this.allCharsCached = [];
        this._strings = [];
        this.pos.setXY(this.textField.paddingLeft, this.textField.paddingTop);
    };
    TextInfo.prototype.newString = function () {
        this.pos.x = this.textField.paddingLeft;
        if (this._strings.length) {
            this.pos.y += this.textField.getFont().fontContext.lineHeight;
        }
        this._strings.push(new textField_StringInfo());
    };
    TextInfo.prototype.addChar = function (c) {
        this._strings[this._strings.length - 1].chars.push(c);
        this.allCharsCached.push(c);
        c.destRect.setPoint(this.pos);
        c.destRect.addXY(c.destOffsetX, c.destOffsetY);
        this.pos.addX(c.sourceRect.width + c.destOffsetX);
    };
    TextInfo.prototype.addWord = function (w) {
        for (var _i = 0, _a = w.chars; _i < _a.length; _i++) {
            var c = _a[_i];
            this.addChar(c);
        }
    };
    TextInfo.prototype.revalidate = function (defaultSymbolHeight) {
        this.size.setWH(this.textField.paddingLeft + this.textField.paddingRight, this.textField.paddingTop + this.textField.paddingBottom);
        for (var _i = 0, _a = this._strings; _i < _a.length; _i++) {
            var s = _a[_i];
            s.calcSize(defaultSymbolHeight);
            this.size.height += s.height;
            if (s.width > this.size.width)
                this.size.width = s.width;
        }
    };
    TextInfo.prototype.align = function (textAlign) {
        for (var _i = 0, _a = this._strings; _i < _a.length; _i++) {
            var s = _a[_i];
            s.align(textAlign, this.textField);
        }
    };
    return TextInfo;
}());
var textField_CharInfo = (function () {
    function CharInfo() {
        this.destRect = new rect["a" /* Rect */]();
        this.sourceRect = new rect["a" /* Rect */]();
        this.destOffsetX = 0;
        this.destOffsetY = 0;
    }
    return CharInfo;
}());
var CharsHolder = (function () {
    function CharsHolder() {
        this.chars = [];
    }
    CharsHolder.prototype.moveBy = function (dx, dy) {
        for (var _i = 0, _a = this.chars; _i < _a.length; _i++) {
            var ch = _a[_i];
            ch.destRect.addXY(dx, dy);
        }
    };
    CharsHolder.prototype.moveTo = function (x, y) {
        var initialOffsetX = 0;
        for (var _i = 0, _a = this.chars; _i < _a.length; _i++) {
            var ch = _a[_i];
            ch.destRect.setXY(initialOffsetX + x, y);
            initialOffsetX += ch.sourceRect.width;
        }
    };
    return CharsHolder;
}());
var textField_WordInfo = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(WordInfo, _super);
    function WordInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 0;
        return _this;
    }
    WordInfo.prototype.revalidate = function () {
        this.width = 0;
        for (var _i = 0, _a = this.chars; _i < _a.length; _i++) {
            var ch = _a[_i];
            this.width += ch.destRect.width;
        }
    };
    WordInfo.prototype.addChar = function (c) {
        this.chars.push(c);
        this.width += c.sourceRect.width;
    };
    return WordInfo;
}(CharsHolder));
var textField_StringInfo = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(StringInfo, _super);
    function StringInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 0;
        _this.height = 0;
        return _this;
    }
    StringInfo.prototype.calcSize = function (defaultSymbolHeight) {
        this.width = 0;
        this.height = defaultSymbolHeight;
        for (var _i = 0, _a = this.chars; _i < _a.length; _i++) {
            var ch = _a[_i];
            this.width += ch.sourceRect.width;
        }
    };
    StringInfo.prototype.align = function (textAlign, textField) {
        var AVAILABLE_WIDTH = textField.size.width - textField.paddingLeft - textField.paddingRight;
        switch (textAlign) {
            case TEXT_ALIGN.LEFT:
                break;
            case TEXT_ALIGN.CENTER:
                var offset = AVAILABLE_WIDTH - this.width;
                if (offset < 0)
                    return;
                offset /= 2;
                this.moveBy(offset, 0);
                break;
            case TEXT_ALIGN.RIGHT:
                offset = AVAILABLE_WIDTH - this.width;
                if (offset < 0)
                    return;
                this.moveBy(offset, 0);
                break;
            case TEXT_ALIGN.JUSTIFY:
                var words = this.toWords();
                if (words.length <= 1)
                    return;
                if (!words[0].chars.length)
                    return;
                var totalWordsWidth = 0;
                for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                    var w = words_1[_i];
                    w.revalidate();
                    totalWordsWidth += w.width;
                }
                var totalSpaceWidth = AVAILABLE_WIDTH - totalWordsWidth;
                var oneSpaceWidth = totalSpaceWidth / (words.length - 1);
                if (oneSpaceWidth > textField.getFont().fontContext.lineHeight * 2)
                    return;
                var initialPosY = this.chars[0].destRect.y;
                var currXPointer = this.chars[0].destRect.x;
                for (var _a = 0, words_2 = words; _a < words_2.length; _a++) {
                    var w = words_2[_a];
                    w.moveTo(currXPointer, initialPosY);
                    currXPointer += w.width + oneSpaceWidth;
                }
                break;
            default:
                if (true)
                    throw new debugError["a" /* DebugError */]("unknown TEXT_ALIGN value: " + textAlign);
        }
    };
    StringInfo.prototype.toWords = function () {
        var res = [];
        var currWord = new textField_WordInfo();
        for (var _i = 0, _a = this.chars; _i < _a.length; _i++) {
            var ch = _a[_i];
            if (ch.symbol === SPACE) {
                if (currWord.chars.length) {
                    res.push(currWord);
                    currWord = new textField_WordInfo();
                }
            }
            else {
                currWord.chars.push(ch);
            }
        }
        if (res.indexOf(currWord) === -1)
            res.push(currWord);
        return res;
    };
    return StringInfo;
}(CharsHolder));
var textField_TextField = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(TextField, _super);
    function TextField(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'TextField';
        _this._textAlign = TEXT_ALIGN.LEFT;
        _this._wordBreak = WORD_BRAKE.PREDEFINED;
        _this._text = '';
        _this._textInfo = new textField_TextInfo(_this);
        _this._symbolImage = new general_image["a" /* Image */](_this.game);
        _this._initScrolling({ vertical: true });
        return _this;
    }
    TextField.prototype.revalidate = function () {
        _super.prototype.revalidate.call(this);
        if ( true && !this._font)
            throw new debugError["a" /* DebugError */]("font is not provided");
        this._font.revalidate();
    };
    TextField.prototype.onGeometryChanged = function () {
        var textInfo = this._textInfo;
        textInfo.reset();
        textInfo.newString();
        var text = this._text;
        if (this._wordBreak === WORD_BRAKE.FIT) {
            text = text.split('\n').map(function (str) { return str.trim(); }).join(' ');
        }
        var strings = text.split('\n');
        var MAX_WIDTH = this.maxWidth - this.paddingLeft - this.paddingRight;
        for (var i = 0; i < strings.length; i++) {
            var str = strings[i];
            if (this._wordBreak === WORD_BRAKE.PREDEFINED) {
                var wordInfo = new textField_WordInfo();
                for (var k = 0; k < str.length; k++) {
                    var charInfo = this._getCharInfo(str[k]);
                    wordInfo.addChar(charInfo);
                }
                textInfo.addWord(wordInfo);
            }
            else {
                var words = str.split(SPACE);
                for (var j = 0; j < words.length; j++) {
                    var w = words[j];
                    var wordInfo = new textField_WordInfo();
                    for (var k = 0; k < w.length; k++) {
                        var charInfo = this._getCharInfo(w[k]);
                        wordInfo.addChar(charInfo);
                    }
                    if (this.maxWidth && textInfo.pos.x + wordInfo.width > MAX_WIDTH && i < words.length - 1) {
                        textInfo.newString();
                    }
                    textInfo.addWord(wordInfo);
                    if (i < str.length - 1) {
                        var spaceChar = this._getCharInfo(SPACE);
                        textInfo.addChar(spaceChar);
                    }
                }
            }
            if (i < strings.length - 1) {
                textInfo.newString();
            }
        }
        textInfo.revalidate(this._font.fontContext.lineHeight);
        this.size.width = textInfo.size.width;
        if (this.maxHeight !== 0 && textInfo.size.height > this.maxHeight) {
            this.size.height = this.maxHeight;
        }
        else {
            this.size.height = textInfo.size.height;
        }
        textInfo.align(this._textAlign);
        this.updateScrollSize(textInfo.size.height, this.size.height);
        _super.prototype.onGeometryChanged.call(this);
    };
    TextField.prototype.setText = function (text) {
        if (text === void 0) { text = ''; }
        this._text = text + '';
        this.setDirty();
    };
    TextField.prototype.setTextAlign = function (ta) {
        this._textAlign = ta;
        this.setDirty();
    };
    TextField.prototype.setWordBreak = function (wb) {
        this._wordBreak = wb;
        this.setDirty();
    };
    TextField.prototype.getText = function () {
        return this._text;
    };
    TextField.prototype.setFont = function (font) {
        this._font = font;
        this.setDirty();
    };
    TextField.prototype.getFont = function () {
        return this._font;
    };
    TextField.prototype.draw = function () {
        if (this.background)
            this.background.render();
        var renderer = this.game.getRenderer();
        renderer.transformSave();
        if (this.vScrollInfo.offset)
            renderer.transformTranslate(0, -this.vScrollInfo.offset, 0);
        this._symbolImage.setResourceLink(this._font.getResourceLink());
        for (var _i = 0, _a = this._textInfo.allCharsCached; _i < _a.length; _i++) {
            var charInfo = _a[_i];
            if (charInfo.destRect.y - this.vScrollInfo.offset > this.size.height)
                continue;
            if (charInfo.destRect.y + charInfo.destRect.height - this.vScrollInfo.offset < 0)
                continue;
            this._symbolImage.getSrcRect().set(charInfo.sourceRect);
            this._symbolImage.size.setWH(charInfo.sourceRect.width, charInfo.sourceRect.height);
            this._symbolImage.pos.setXY(charInfo.destRect.x, charInfo.destRect.y);
            if (this._symbolImage.size.height === 0)
                continue;
            this._symbolImage.render();
        }
        renderer.transformRestore();
    };
    TextField.prototype._getDefaultSymbolRect = function () {
        var defaultChar = SPACE;
        if (!this._font.fontContext.symbols[SPACE]) {
            var firstSymbol = Object.keys(this._font.fontContext.symbols)[0];
            if ( true && !firstSymbol)
                throw new debugError["a" /* DebugError */]("no symbols in font");
            defaultChar = firstSymbol;
        }
        return this._font.fontContext.symbols[defaultChar];
    };
    TextField.prototype._getCharInfo = function (c) {
        var charRect = this._font.fontContext.symbols[c] || this._getDefaultSymbolRect();
        var charInfo = new textField_CharInfo();
        charInfo.symbol = c;
        charInfo.sourceRect = new rect["a" /* Rect */]();
        charInfo.sourceRect.fromJSON(charRect);
        charInfo.destRect.setWH(charRect.width, charRect.height);
        charInfo.destOffsetX = charRect.destOffsetX;
        charInfo.destOffsetY = charRect.destOffsetY;
        return charInfo;
    };
    return TextField;
}(scrollableContainer_ScrollableContainer));



/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Font; });
/* harmony import */ var _engine_core_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _engine_resources_resourceLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);




var getCtx = function (cnv) {
    return cnv.getContext('2d');
};
var FontFactory;
(function (FontFactory) {
    var SYMBOL_PADDING = 4;
    var getFontHeight = function (strFont) {
        var parent = document.createElement("span");
        parent.appendChild(document.createTextNode("height!ДдЙЇ"));
        document.body.appendChild(parent);
        parent.style.cssText = "font: " + strFont + "; white-space: nowrap; display: inline-block;";
        var height = parent.offsetHeight;
        document.body.removeChild(parent);
        return height;
    };
    FontFactory.getFontContext = function (arrFromTo, strFont, w) {
        var cnv = document.createElement('canvas');
        var ctx = getCtx(cnv);
        ctx.font = strFont;
        var lineHeight = getFontHeight(strFont) + 2 * SYMBOL_PADDING;
        var symbols = {};
        var currX = 0, currY = 0, cnvHeight = lineHeight;
        for (var k = 0; k < arrFromTo.length; k++) {
            var arrFromToCurr = arrFromTo[k];
            for (var i = arrFromToCurr.from; i < arrFromToCurr.to; i++) {
                var currentChar = String.fromCharCode(i);
                var context2D = cnv.getContext('2d');
                var textWidth = context2D.measureText(currentChar).width;
                textWidth += 2 * SYMBOL_PADDING;
                if (textWidth === 0)
                    continue;
                if (currX + textWidth > w) {
                    currX = 0;
                    currY += lineHeight;
                    cnvHeight = currY + lineHeight;
                }
                var symbolRect = {};
                symbolRect.x = ~~currX + SYMBOL_PADDING;
                symbolRect.y = ~~currY + SYMBOL_PADDING;
                symbolRect.width = ~~textWidth - 2 * SYMBOL_PADDING;
                symbolRect.height = lineHeight - 2 * SYMBOL_PADDING;
                symbolRect.destOffsetX = symbolRect.destOffsetY = 0;
                symbols[currentChar] = symbolRect;
                currX += textWidth;
            }
        }
        return { symbols: symbols, width: w, height: cnvHeight, lineHeight: lineHeight - 2 * SYMBOL_PADDING };
    };
    var correctColor = function (canvas, color) {
        var _a = color.toJSON(), r = _a.r, g = _a.g, b = _a.b, a = _a.a;
        var ctx = getCtx(canvas);
        var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var clamped = imgData.data;
        for (var i = 0; i < clamped.length; i += 4) {
            var rIndex = i;
            var gIndex = i + 1;
            var bIndex = i + 2;
            var aIndex = i + 3;
            var avg = (clamped[rIndex] + clamped[gIndex] + clamped[bIndex] + clamped[aIndex]) / 4;
            if (avg < 0) {
            }
            else {
                clamped[rIndex] = r;
                clamped[gIndex] = g;
                clamped[bIndex] = b;
                clamped[aIndex] = ~~(clamped[aIndex] * a / 255);
            }
        }
        ctx.putImageData(imgData, 0, 0);
    };
    FontFactory.getFontImageBase64 = function (fontContext, strFont, color) {
        var cnv = document.createElement('canvas');
        cnv.width = fontContext.width;
        cnv.height = fontContext.height;
        var ctx = getCtx(cnv);
        ctx.font = strFont;
        ctx.textBaseline = "top";
        ctx.imageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
        ctx.oImageSmoothingEnabled = false;
        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.fillRect(0, 0, cnv.width, cnv.height);
        ctx.fillStyle = '#fff';
        var symbols = fontContext.symbols;
        Object.keys(symbols).forEach(function (symbol) {
            var rect = symbols[symbol];
            ctx.fillText(symbol, rect.x, rect.y);
        });
        correctColor(cnv, color);
        return cnv.toDataURL();
    };
})(FontFactory || (FontFactory = {}));
var Font = (function () {
    function Font(game) {
        this.game = game;
        this.type = 'Font';
        this.fontSize = 12;
        this.fontFamily = 'Monospace';
        this.fontColor = _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_1__[/* Color */ "a"].BLACK.clone();
    }
    Font.getSystemFont = function () {
        if (Font._systemFontInstance)
            return Font._systemFontInstance;
        var f = new Font(_engine_core_game__WEBPACK_IMPORTED_MODULE_0__[/* Game */ "a"].getInstance());
        f.fontFamily = 'monospace';
        f.fontSize = 12;
        f.createContext();
        var resourceLoader = new _engine_resources_resourceLoader__WEBPACK_IMPORTED_MODULE_3__[/* ResourceLoader */ "a"](_engine_core_game__WEBPACK_IMPORTED_MODULE_0__[/* Game */ "a"].getInstance());
        var link = resourceLoader.loadTexture(f.createBitmap());
        resourceLoader.startLoading();
        f.setResourceLink(link);
        Font._systemFontInstance = f;
        return f;
    };
    Font.fromAtlas = function (game, link, fontContext) {
        var fnt = new Font(game);
        fnt.setResourceLink(link);
        fnt.fontContext = fontContext;
        return fnt;
    };
    Font.prototype.generate = function () {
        this.createContext();
        var base64 = this.createBitmap();
        var link = this.game.getCurrScene().resourceLoader.loadTexture(base64);
        this.setResourceLink(link);
    };
    Font.prototype.asCss = function () {
        return this.fontSize + "px " + this.fontFamily;
    };
    Font.prototype.createContext = function () {
        var ranges = [{ from: 32, to: 126 }, { from: 1040, to: 1116 }];
        var WIDTH = 512;
        this.fontContext = FontFactory.getFontContext(ranges, this.asCss(), WIDTH);
    };
    Font.prototype.createBitmap = function () {
        return FontFactory.getFontImageBase64(this.fontContext, this.asCss(), this.fontColor);
    };
    Font.prototype.revalidate = function () {
        if (true) {
            if (!this.fontContext)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_2__[/* DebugError */ "a"]("font context is not created. Did you invoke font.generate() method?");
            if (!this.getResourceLink())
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_2__[/* DebugError */ "a"]("font without resource link");
        }
    };
    Font.prototype.setResourceLink = function (link) {
        this._resourceLink = link;
    };
    Font.prototype.getResourceLink = function () {
        return this._resourceLink;
    };
    return Font;
}());



/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasingLinear; });
var EasingLinear = function (t, b, c, d) { return c * t / d + b; };


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
/* harmony import */ var _animation_tween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _misc_mathEx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _geometry_rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _geometry_point2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _engine_scene_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);





var Mat16Holder = _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_4__[/* mat4 */ "a"].Mat16Holder;

var DIRECTION_CORRECTION;
(function (DIRECTION_CORRECTION) {
    DIRECTION_CORRECTION[DIRECTION_CORRECTION["RIGHT"] = 0] = "RIGHT";
    DIRECTION_CORRECTION[DIRECTION_CORRECTION["LEFT"] = 1] = "LEFT";
    DIRECTION_CORRECTION[DIRECTION_CORRECTION["UP"] = 2] = "UP";
    DIRECTION_CORRECTION[DIRECTION_CORRECTION["DOWN"] = 3] = "DOWN";
})(DIRECTION_CORRECTION || (DIRECTION_CORRECTION = {}));
var Camera = (function () {
    function Camera(game) {
        var _this = this;
        this.game = game;
        this.pos = new _geometry_point2d__WEBPACK_IMPORTED_MODULE_3__[/* Point2d */ "a"](0, 0);
        this.posZ = 0;
        this.scale = new _geometry_point2d__WEBPACK_IMPORTED_MODULE_3__[/* Point2d */ "a"](1, 1);
        this.worldTransformDirty = true;
        this.worldTransformMatrix = new Mat16Holder();
        this._rect = new _geometry_rect__WEBPACK_IMPORTED_MODULE_2__[/* Rect */ "a"]();
        this._cameraPosCorrection = {
            current: new _geometry_point2d__WEBPACK_IMPORTED_MODULE_3__[/* Point2d */ "a"](),
            max: new _geometry_point2d__WEBPACK_IMPORTED_MODULE_3__[/* Point2d */ "a"]()
        };
        var observer = function () { return _this.worldTransformDirty = true; };
        this.pos.observe(observer);
        this.scale.observe(observer);
        this._rect.observe(observer);
    }
    Camera.prototype.revalidate = function () {
        this._rect.setSize(this.game.size);
        this.worldTransformDirty = true;
    };
    Camera.prototype.followTo = function (gameObject) {
        if (gameObject === undefined) {
            this._objFollowTo = undefined;
            return;
        }
        this._objFollowTo = gameObject;
        this._objFollowToPrevPos = new _geometry_point2d__WEBPACK_IMPORTED_MODULE_3__[/* Point2d */ "a"]();
        this._objFollowToPrevPos.set(this._objFollowTo.pos);
        this.revalidate();
    };
    Camera.prototype.update = function () {
        var gameObject = this._objFollowTo;
        if (gameObject !== undefined) {
            if ((gameObject.pos.x - this._objFollowToPrevPos.x) > 0)
                this._directionCorrection = DIRECTION_CORRECTION.RIGHT;
            else if ((gameObject.pos.x - this._objFollowToPrevPos.x) < 0)
                this._directionCorrection = DIRECTION_CORRECTION.LEFT;
            if ((gameObject.pos.y - this._objFollowToPrevPos.y) > 0)
                this._directionCorrection = DIRECTION_CORRECTION.DOWN;
            else if ((gameObject.pos.y - this._objFollowToPrevPos.y) < 0)
                this._directionCorrection = DIRECTION_CORRECTION.UP;
            this._objFollowToPrevPos.set(gameObject.pos);
            var _a = this.getRect(), width = _a.width, height = _a.height;
            if (this._directionCorrection === DIRECTION_CORRECTION.RIGHT)
                this._cameraPosCorrection.max.x = width / 3;
            else if (this._directionCorrection === DIRECTION_CORRECTION.LEFT)
                this._cameraPosCorrection.max.x = -width / 3;
            else if (this._directionCorrection === DIRECTION_CORRECTION.DOWN)
                this._cameraPosCorrection.max.y = height / 3;
            else if (this._directionCorrection === DIRECTION_CORRECTION.UP)
                this._cameraPosCorrection.max.y = -height / 3;
            var currCorrection = this._cameraPosCorrection.max.
                substract(this._cameraPosCorrection.current).
                multiply(0.05);
            this._cameraPosCorrection.current.add(currCorrection);
            var newPos = _geometry_point2d__WEBPACK_IMPORTED_MODULE_3__[/* Point2d */ "a"].fromPool();
            var pointToFollow = _geometry_point2d__WEBPACK_IMPORTED_MODULE_3__[/* Point2d */ "a"].fromPool();
            var scene = this.game.getCurrScene();
            var w = this.game.size.width;
            var h = this.game.size.height;
            var wDiv2 = w / 2;
            var hDiv2 = h / 2;
            pointToFollow.set(gameObject.pos);
            pointToFollow.addXY(-wDiv2, -hDiv2);
            newPos.x = this.pos.x + (pointToFollow.x + this._cameraPosCorrection.current.x - this.pos.x) * Camera.FOLLOW_FACTOR.x;
            newPos.y = this.pos.y + (pointToFollow.y + this._cameraPosCorrection.current.y - this.pos.y) * Camera.FOLLOW_FACTOR.y;
            if (newPos.x < 0) {
                newPos.x = 0;
            }
            if (newPos.y < 0) {
                newPos.y = 0;
            }
            if (newPos.x > scene.size.width - w) {
                newPos.x = scene.size.width - w;
            }
            if (newPos.y > scene.size.height - h) {
                newPos.y = scene.size.height - h;
            }
            this.pos.set(newPos);
            newPos.release();
            pointToFollow.release();
        }
        if (this._cameraShakeTween !== undefined)
            this._cameraShakeTween.update();
    };
    Camera.prototype.shake = function (amplitude, time) {
        var _this = this;
        var tweenTarget = { time: 0, point: new _geometry_point2d__WEBPACK_IMPORTED_MODULE_3__[/* Point2d */ "a"](0, 0) };
        this._cameraShakeTween = new _animation_tween__WEBPACK_IMPORTED_MODULE_0__[/* Tween */ "a"]({
            target: tweenTarget,
            time: time,
            to: { time: time },
            progress: function () {
                var r1 = _misc_mathEx__WEBPACK_IMPORTED_MODULE_1__[/* MathEx */ "a"].random(-amplitude / 2, amplitude / 2);
                var r2 = _misc_mathEx__WEBPACK_IMPORTED_MODULE_1__[/* MathEx */ "a"].random(-amplitude / 2, amplitude / 2);
                tweenTarget.point.setXY(r1, r2);
            },
            complete: function () { return _this._cameraShakeTween = undefined; }
        });
    };
    Camera.prototype.translate = function () {
        var renderer = this.game.getRenderer();
        renderer.transformTranslate(-this.pos.x, -this.pos.y, 0);
    };
    Camera.prototype.transform = function () {
        var renderer = this.game.getRenderer();
        if (!this.scale.equal(1)) {
            renderer.transformTranslate(this.game.size.width / 2, this.game.size.height / 2, 0);
            renderer.transformScale(this.scale.x, this.scale.y);
            renderer.transformTranslate(-this.game.size.width / 2, -this.game.size.height / 2);
        }
        if (this._cameraShakeTween !== undefined)
            renderer.transformTranslate(this._cameraShakeTween.getTarget().point.x, this._cameraShakeTween.getTarget().point.y);
    };
    Camera.prototype.screenToWorld = function (p, transformType) {
        var mScale = Mat16Holder.fromPool();
        var scaleX = transformType === _engine_scene_layer__WEBPACK_IMPORTED_MODULE_5__[/* LayerTransformType */ "b"].TRANSFORM ? this.scale.x : 1;
        var scaleY = transformType === _engine_scene_layer__WEBPACK_IMPORTED_MODULE_5__[/* LayerTransformType */ "b"].TRANSFORM ? this.scale.y : 1;
        var posX = transformType === _engine_scene_layer__WEBPACK_IMPORTED_MODULE_5__[/* LayerTransformType */ "b"].TRANSFORM ? this.pos.x : 0;
        var posY = transformType === _engine_scene_layer__WEBPACK_IMPORTED_MODULE_5__[/* LayerTransformType */ "b"].TRANSFORM ? this.pos.y : 0;
        _engine_geometry_mat4__WEBPACK_IMPORTED_MODULE_4__[/* mat4 */ "a"].makeScale(mScale, scaleX, scaleY, 1);
        var point2d = _misc_mathEx__WEBPACK_IMPORTED_MODULE_1__[/* MathEx */ "a"].unProject(p, this.game.size.width, this.game.size.height, mScale);
        point2d.addXY(posX / scaleX, posY / scaleY);
        mScale.release();
        return point2d;
    };
    Camera.prototype.getRect = function () {
        this._rect.setXY(this.pos.x, this.pos.y);
        return this._rect;
    };
    Camera.FOLLOW_FACTOR = new _geometry_point2d__WEBPACK_IMPORTED_MODULE_3__[/* Point2d */ "a"](0.1, 0.1);
    return Camera;
}());



/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderableModelWithResourceLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);



var RenderableModelWithResourceLink = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(RenderableModelWithResourceLink, _super);
    function RenderableModelWithResourceLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RenderableModelWithResourceLink.prototype.setResourceLink = function (link) {
        if (true) {
            if (!link) {
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_1__[/* DebugError */ "a"]("can not set resource link: link passed is " + link);
            }
        }
        this._resourceLink = link;
    };
    RenderableModelWithResourceLink.prototype.getResourceLink = function () {
        return this._resourceLink;
    };
    return RenderableModelWithResourceLink;
}(_engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_2__[/* RenderableModel */ "b"]));



/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = [
    "#define HALF                            .5",
    "#define ZERO                            .0",
    "#define ONE                             1.",
    "#define PI                              __PI__",
    "#define TWO_PI                          (__PI__*2.)",
    "#define ERROR_COLOR                     vec4(ONE,ZERO,ZERO,ONE)",
    "#define STRETCH_MODE_STRETCH            __STRETCH_MODE_STRETCH__",
    "#define STRETCH_MODE_REPEAT             __STRETCH_MODE_REPEAT__",
    "#define FILL_TYPE_COLOR                 __FILL_TYPE_COLOR__",
    "#define FILL_TYPE_TEXTURE               __FILL_TYPE_TEXTURE__",
    "#define FILL_TYPE_LINEAR_GRADIENT       __FILL_TYPE_LINEAR_GRADIENT__",
    "#define SHAPE_TYPE_ELLIPSE              __SHAPE_TYPE_ELLIPSE__",
    "#define SHAPE_TYPE_RECT                 __SHAPE_TYPE_RECT__",
    "vec4 getStretchedImage(float tx,float ty){",
    "    vec2 txVec = vec2(tx,ty);",
    "    txVec += fract(u_texOffset);",
    "    txVec = mod(txVec,u_texRect.zw);",
    "    txVec += u_texRect.xy;",
    "    return texture2D(texture, txVec);",
    "}",
    "vec4 getRepeatedImage(float tx,float ty){",
    "    vec2 txVec = vec2(tx,ty)*u_repeatFactor;",
    "    txVec += fract(u_texOffset);",
    "    txVec = mod(txVec,u_texRect.zw);",
    "    txVec += u_texRect.xy;",
    "    return texture2D(texture, txVec);",
    "}",
    "vec4 getFillColor(){",
    "    if (u_fillType==FILL_TYPE_COLOR) return u_fillColor;",
    "    else if (u_fillType==FILL_TYPE_LINEAR_GRADIENT) {",
    "        vec2 polarCoords = vec2(length(v_position.xy),atan(v_position.y/v_position.x));",
    "        polarCoords.y+=u_fillLinearGradient[2].x;",
    "        vec2 rectCoords = vec2(polarCoords.x*cos(polarCoords.y),polarCoords.x*sin(polarCoords.y));",
    "        return mix(u_fillLinearGradient[0],u_fillLinearGradient[1],rectCoords.x);",
    "    }",
    "    else if (u_fillType==FILL_TYPE_TEXTURE) {",
    "        float tx = (v_position.x-u_rectOffsetLeft)/u_width*u_texRect[2];",
    "        float ty = (v_position.y-u_rectOffsetTop)/u_height*u_texRect[3];",
    "        vec4 txVec;",
    "        if (u_stretchMode==STRETCH_MODE_STRETCH) txVec = getStretchedImage(tx,ty);",
    "        else if (u_stretchMode==STRETCH_MODE_REPEAT) txVec = getRepeatedImage(tx,ty);",
    "        else txVec = ERROR_COLOR;",
    "        return txVec;",
    "    }",
    "    else return ERROR_COLOR;",
    "}",
    "float calcRadiusAtPosition(float x,float y) {",
    "    float a = atan(y-HALF,x-HALF);",
    "    float cosA = cos(a);",
    "    float sinA = sin(a);",
    "    return u_rx*u_ry/sqrt(u_rx*u_rx*sinA*sinA+u_ry*u_ry*cosA*cosA);",
    "}",
    "void _drawElliplse(float dist,float rAtCurrAngle){",
    "    if (dist < rAtCurrAngle) {",
    "        if (dist > rAtCurrAngle - u_lineWidth) gl_FragColor = u_color;",
    "        else gl_FragColor = getFillColor();",
    "    } else discard;",
    "}",
    "void drawEllipse(){",
    "    float dist = distance(vec2(HALF, HALF), v_position.xy);",
    "    float rAtCurrAngle = calcRadiusAtPosition(v_position.x, v_position.y);",
    "    bool isArcNotUsed = u_arcAngleFrom==u_arcAngleTo;",
    "    if (dist > rAtCurrAngle) discard;",
    "    if (isArcNotUsed) {",
    "        _drawElliplse(dist,rAtCurrAngle);",
    "    } else {",
    "        float angle = atan(v_position.y-HALF, v_position.x-HALF);",
    "        float angleFrom = u_arcAngleFrom;",
    "        float angleTo =  u_arcAngleTo;",
    "        if (angleFrom<ZERO) angleFrom = TWO_PI + angleFrom;",
    "        if (angleTo<ZERO) angleTo = TWO_PI + angleTo;",
    "        if (angle<ZERO) angle = TWO_PI + angle;",
    "        bool anticlockwise = u_anticlockwise;",
    "        if (angleFrom>angleTo) {",
    "            anticlockwise=!anticlockwise;",
    "            float tmp = angleFrom;",
    "            angleFrom = angleTo;",
    "            angleTo = tmp;",
    "        }",
    "        bool withinArc = (angleFrom<=angle) && (angle<=angleTo);",
    "        if (withinArc) {",
    "            if (anticlockwise) discard;",
    "            else _drawElliplse(dist,rAtCurrAngle);",
    "        }",
    "        else {",
    "            if (!anticlockwise) discard;",
    "            else _drawElliplse(dist,rAtCurrAngle);",
    "        }",
    "    }",
    "}",
    "void drawRect(){",
    "    float x = v_position.x - HALF;",
    "    float y = v_position.y - HALF;",
    "    float distX = abs(x);",
    "    float distY = abs(y);",
    "    float halfW = u_width  * HALF;",
    "    float halfH = u_height * HALF;",
    "    if (distX < halfW && distY < halfH) {",
    "        if (distX>halfW - u_borderRadius && distY>halfH - u_borderRadius) {",
    "            vec2 borderCenter = vec2(ZERO,ZERO);",
    "            float posX = v_position.x, posY = v_position.y;",
    "            if (posX<HALF && posY<HALF) { // top left",
    "                borderCenter = vec2(HALF - halfW + u_borderRadius,HALF - halfH + u_borderRadius);",
    "            }",
    "            else if (posX>HALF && posY<HALF) { // top right",
    "                borderCenter = vec2(HALF + halfW - u_borderRadius,HALF - halfH + u_borderRadius);",
    "            }",
    "            else if (posX<HALF && posY>HALF) { // bottom left",
    "                borderCenter = vec2(HALF - halfW + u_borderRadius,HALF + halfH - u_borderRadius);",
    "            }",
    "            else {  // bottom right",
    "                borderCenter = vec2(HALF + halfW - u_borderRadius,HALF + halfH - u_borderRadius);",
    "            }",
    "            float distToBorderCenter = distance(v_position.xy,borderCenter);",
    "            if (distToBorderCenter>u_borderRadius) discard;",
    "            else if (distToBorderCenter>u_borderRadius-u_lineWidth) gl_FragColor = u_color;",
    "            else gl_FragColor = getFillColor();",
    "        }",
    "        else if (distX > halfW - u_lineWidth || distY > halfH - u_lineWidth) gl_FragColor = u_color;",
    "        else gl_FragColor = getFillColor();",
    "    }",
    "    else discard;",
    "}",
    "void main(){",
    "    if (u_shapeType==SHAPE_TYPE_ELLIPSE) drawEllipse();",
    "    else if (u_shapeType==SHAPE_TYPE_RECT) drawRect();",
    "    else gl_FragColor = ERROR_COLOR;",
    "    gl_FragColor*=u_alpha;",
    "}"
].join('\n');

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports = [
    "precision mediump float;",
    "attribute vec4 a_position;",
    "attribute vec2 a_texCoord;",
    "attribute vec3 a_normal;",
    "uniform mat4 u_modelMatrix;",
    "uniform mat4 u_inverseTransposeModelMatrix;",
    "uniform mat4 u_projectionMatrix;",
    "uniform mat4 u_textureMatrix;",
    "uniform sampler2D u_heightMapTexture;",
    "uniform bool  u_heightMapTextureUsed;",
    "uniform float u_heightMapFactor;",
    "varying vec2 v_texCoord;",
    "varying vec3 v_normal;",
    "varying vec4 v_position;",
    "varying vec3 v_surfaceToLight;",
    "varying vec3 v_surfaceToView;",
    "void main() {",
    "    vec4 position = a_position;",
    "    v_texCoord = (u_textureMatrix * vec4(a_texCoord,1.,1.)).xy;",
    "    v_normal = mat3(u_inverseTransposeModelMatrix) * a_normal;",
    "    if (u_heightMapTextureUsed) {",
    "        vec4 bumpData = texture2D(u_heightMapTexture, v_texCoord);",
    "        position = position + vec4(a_normal,0) * bumpData.r * u_heightMapFactor;",
    "    }",
    "    v_position = u_projectionMatrix * u_modelMatrix * position;",
    "    // compute the vector of the surface to the light",
    "    // and pass it to the fragment shader",
    "    v_surfaceToLight = vec3(600,200,1000) - vec3(u_modelMatrix * position);",
    "    // compute the vector of the surface to the view/camera",
    "    // and pass it to the fragment shader",
    "    v_surfaceToView = normalize(vec3(500,300,1000) - vec3(u_modelMatrix * position));",
    "    gl_Position = v_position;",
    "}"
].join('\n');

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports = [
    "precision mediump float;",
    "varying vec2 v_texCoord;",
    "varying vec3 v_normal;",
    "varying vec4 v_position;",
    "varying vec3 v_surfaceToLight;",
    "varying vec3 v_surfaceToView;",
    "uniform sampler2D u_texture;",
    "uniform sampler2D u_normalsTexture;",
    "uniform samplerCube u_cubeMapTexture;",
    "uniform bool  u_textureUsed;",
    "uniform bool  u_normalsTextureUsed;",
    "uniform bool  u_cubeMapTextureUsed;",
    "uniform float u_alpha;",
    "uniform float u_reflectivity;",
    "uniform bool  u_lightUsed;",
    "uniform vec4  u_color;",
    "uniform float u_color_mix;",
    "uniform mat4  u_modelMatrix;",
    "void main() {",
    "    if (u_textureUsed) gl_FragColor = mix(texture2D(u_texture, v_texCoord),u_color,u_color_mix);",
    "    else gl_FragColor = u_color;",
    "    if (u_lightUsed) {",
    "        vec3 normal = normalize(v_normal);",
    "        vec3 surfaceToLightDirection = normalize(v_surfaceToLight);",
    "        vec3 surfaceToViewDirection = normalize(v_surfaceToView);",
    "        vec3 halfVector = normalize(surfaceToLightDirection + surfaceToViewDirection);",
    "        if (u_normalsTextureUsed) {",
    "            vec4 bumpNormal = texture2D(u_normalsTexture, v_texCoord) * 2. - 1.;",
    "            normal+= bumpNormal.rgb;",
    "            normal = normalize(normal);",
    "        }",
    "        vec3 directionLightPos = vec3(0,0,-100);",
    "        vec3 lightDirection = normalize(directionLightPos);",
    "        float light = max(0.,dot(normal, lightDirection));",
    "        light += max(0.,dot(normal, surfaceToLightDirection));",
    "        float specular = pow(max(dot(normal, halfVector), 0.0), 2.);",
    "        light = clamp(light,.5,1.0);",
    "        //gl_FragColor = vec4(normalize(v_normal)*0.5+0.5,1.0); // to debug normals",
    "        gl_FragColor.rgb *= light;",
    "        gl_FragColor.rgb+=specular;",
    "    }",
    "    if (u_cubeMapTextureUsed) {",
    "        vec3 I = normalize(vec3(v_position));",
    "        vec3 R = reflect(I, normalize(v_normal));",
    "        vec4 reflectionColor = textureCube(u_cubeMapTexture, R);",
    "        gl_FragColor = mix(gl_FragColor,reflectionColor,u_reflectivity);",
    "    }",
    "    gl_FragColor*=u_alpha;",
    "}"
].join('\n');

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOUSE_EVENTS; });
var MOUSE_EVENTS;
(function (MOUSE_EVENTS) {
    MOUSE_EVENTS["click"] = "click";
    MOUSE_EVENTS["mousePressed"] = "mousePressed";
    MOUSE_EVENTS["mouseDown"] = "mouseDown";
    MOUSE_EVENTS["mouseMove"] = "mouseMove";
    MOUSE_EVENTS["mouseLeave"] = "mouseLeave";
    MOUSE_EVENTS["mouseEnter"] = "mouseEnter";
    MOUSE_EVENTS["mouseUp"] = "mouseUp";
    MOUSE_EVENTS["doubleClick"] = "doubleClick";
    MOUSE_EVENTS["scroll"] = "scroll";
    MOUSE_EVENTS["dragStart"] = "dragStart";
    MOUSE_EVENTS["dragMove"] = "dragMove";
    MOUSE_EVENTS["dragStop"] = "dragStop";
})(MOUSE_EVENTS || (MOUSE_EVENTS = {}));


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ polyLine_PolyLine; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./engine/renderable/abstract/shape.ts
var shape = __webpack_require__(37);

// EXTERNAL MODULE: ./engine/renderable/impl/geometry/line.ts
var geometry_line = __webpack_require__(65);

// EXTERNAL MODULE: ./engine/geometry/point2d.ts
var point2d = __webpack_require__(4);

// EXTERNAL MODULE: ./engine/debug/debugError.ts
var debugError = __webpack_require__(0);

// CONCATENATED MODULE: ./engine/renderable/impl/geometry/helpers/arcToBezier.ts
var TAU = Math.PI * 2;
var mapToEllipse = function (_a, rx, ry, cosphi, sinphi, centerx, centery) {
    var x = _a.x, y = _a.y;
    x *= rx;
    y *= ry;
    var xp = cosphi * x - sinphi * y;
    var yp = sinphi * x + cosphi * y;
    return {
        x: xp + centerx,
        y: yp + centery
    };
};
var approxUnitArc = function (ang1, ang2) {
    var a = ang2 === 1.5707963267948966
        ? 0.551915024494
        : ang2 === -1.5707963267948966
            ? -0.551915024494
            : 4 / 3 * Math.tan(ang2 / 4);
    var x1 = Math.cos(ang1);
    var y1 = Math.sin(ang1);
    var x2 = Math.cos(ang1 + ang2);
    var y2 = Math.sin(ang1 + ang2);
    return [
        {
            x: x1 - y1 * a,
            y: y1 + x1 * a
        },
        {
            x: x2 + y2 * a,
            y: y2 - x2 * a
        },
        {
            x: x2,
            y: y2
        }
    ];
};
var vectorAngle = function (ux, uy, vx, vy) {
    var sign = (ux * vy - uy * vx < 0) ? -1 : 1;
    var umag = Math.sqrt(ux * ux + uy * uy);
    var vmag = Math.sqrt(ux * ux + uy * uy);
    var dot = ux * vx + uy * vy;
    var div = dot / (umag * vmag);
    if (div > 1) {
        div = 1;
    }
    if (div < -1) {
        div = -1;
    }
    return sign * Math.acos(div);
};
var getArcCenter = function (px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp) {
    var rxsq = Math.pow(rx, 2);
    var rysq = Math.pow(ry, 2);
    var pxpsq = Math.pow(pxp, 2);
    var pypsq = Math.pow(pyp, 2);
    var radicant = (rxsq * rysq) - (rxsq * pypsq) - (rysq * pxpsq);
    if (radicant < 0) {
        radicant = 0;
    }
    radicant /= (rxsq * pypsq) + (rysq * pxpsq);
    radicant = Math.sqrt(radicant) * (largeArcFlag === sweepFlag ? -1 : 1);
    var centerxp = radicant * rx / ry * pyp;
    var centeryp = radicant * -ry / rx * pxp;
    var centerx = cosphi * centerxp - sinphi * centeryp + (px + cx) / 2;
    var centery = sinphi * centerxp + cosphi * centeryp + (py + cy) / 2;
    var vx1 = (pxp - centerxp) / rx;
    var vy1 = (pyp - centeryp) / ry;
    var vx2 = (-pxp - centerxp) / rx;
    var vy2 = (-pyp - centeryp) / ry;
    var ang1 = vectorAngle(1, 0, vx1, vy1);
    var ang2 = vectorAngle(vx1, vy1, vx2, vy2);
    if (sweepFlag === 0 && ang2 > 0) {
        ang2 -= TAU;
    }
    if (sweepFlag === 1 && ang2 < 0) {
        ang2 += TAU;
    }
    return [centerx, centery, ang1, ang2];
};
var arcToBezier = function (px, py, cx, cy, rx, ry, xAxisRotation, largeArcFlag, sweepFlag) {
    var _a;
    if (xAxisRotation === void 0) { xAxisRotation = 0; }
    if (largeArcFlag === void 0) { largeArcFlag = 0; }
    if (sweepFlag === void 0) { sweepFlag = 0; }
    var curves = [];
    if (rx === 0 || ry === 0) {
        return undefined;
    }
    var sinphi = Math.sin(xAxisRotation * TAU / 360);
    var cosphi = Math.cos(xAxisRotation * TAU / 360);
    var pxp = cosphi * (px - cx) / 2 + sinphi * (py - cy) / 2;
    var pyp = -sinphi * (px - cx) / 2 + cosphi * (py - cy) / 2;
    if (pxp === 0 && pyp === 0) {
        return undefined;
    }
    rx = Math.abs(rx);
    ry = Math.abs(ry);
    var lambda = Math.pow(pxp, 2) / Math.pow(rx, 2) +
        Math.pow(pyp, 2) / Math.pow(ry, 2);
    if (lambda > 1) {
        rx *= Math.sqrt(lambda);
        ry *= Math.sqrt(lambda);
    }
    var centerx, centery, ang1, ang2;
    _a = getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp), centerx = _a[0], centery = _a[1], ang1 = _a[2], ang2 = _a[3];
    var ratio = Math.abs(ang2) / (TAU / 4);
    if (Math.abs(1.0 - ratio) < 0.0000001) {
        ratio = 1.0;
    }
    var segments = Math.max(Math.ceil(ratio), 1);
    ang2 /= segments;
    for (var i = 0; i < segments; i++) {
        curves.push(approxUnitArc(ang1, ang2));
        ang1 += ang2;
    }
    return curves.map(function (curve) {
        var _a = mapToEllipse(curve[0], rx, ry, cosphi, sinphi, centerx, centery), x1 = _a.x, y1 = _a.y;
        var _b = mapToEllipse(curve[1], rx, ry, cosphi, sinphi, centerx, centery), x2 = _b.x, y2 = _b.y;
        var _c = mapToEllipse(curve[2], rx, ry, cosphi, sinphi, centerx, centery), x = _c.x, y = _c.y;
        return { x: x, y: y, x1: x1, y1: y1, x2: x2, y2: y2 };
    });
};

// EXTERNAL MODULE: ./engine/renderable/impl/geometry/helpers/splineFromPoints.ts
var splineFromPoints = __webpack_require__(66);

// CONCATENATED MODULE: ./engine/renderable/impl/geometry/polyLine.ts







var clearString = function (s) {
    return s.replace(/\s\s+/g, ' ').trim();
};
var add = function (a) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var n = Object(tslib_es6["e" /* __spreadArrays */])(a);
    args.forEach(function (p) {
        n[0] += p[0];
        n[1] += p[1];
    });
    return n;
};
var mult = function (a, s) {
    return [a[0] * s, a[1] * s];
};
var polyLine_length = function (a, b) {
    return Math.sqrt(Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]));
};
var getPointOnBezierCurve = function (points, offset, t) {
    var invT = 1 - t;
    return add(mult(points[offset + 0], invT * invT * invT), mult(points[offset + 1], 3 * t * invT * invT), mult(points[offset + 2], 3 * invT * t * t), mult(points[offset + 3], t * t * t));
};
var getPointsOnBezierCurve = function (points, offset, numPoints) {
    var cPoints = [];
    for (var i = 0; i < numPoints - 1; ++i) {
        var t = i / (numPoints - 1);
        cPoints.push(getPointOnBezierCurve(points, offset, t));
    }
    cPoints[cPoints.length - 1] = points[points.length - 1];
    return cPoints;
};
var polyLine_SvgTokenizer = (function () {
    function SvgTokenizer(path) {
        this.path = path;
        this._pos = 0;
        this._CHAR = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this._NUM = '01234567890.';
        this.path = clearString(path);
    }
    SvgTokenizer.prototype.isEof = function () {
        return this._pos === this.path.length;
    };
    SvgTokenizer.prototype.releaseNextToken = function () {
        if ( true && this._lastPos === undefined)
            throw new debugError["a" /* DebugError */]("can not release next token");
        this._pos = this._lastPos;
        this._lastPos = undefined;
    };
    SvgTokenizer.prototype.getNextCommand = function () {
        var tkn = this.getNextToken(this._CHAR, 1);
        if (!tkn)
            tkn = '' + this.getNextNumber();
        return tkn;
    };
    SvgTokenizer.prototype.getNextNumber = function () {
        this.skipWhiteSpaces();
        var lastPos = this._lastPos;
        var sign = 1;
        if (this.path[this._pos] === '-') {
            sign = -1;
            this._pos++;
        }
        var s = this.getNextToken(this._NUM);
        if (this.path[this._pos] === 'e') {
            this._pos++;
            s += 'e' + this.getNextNumber();
        }
        if ( true && s.length === 0) {
            throw new debugError["a" /* DebugError */]("can not read number, wrong next symbol: " + this.path[this._pos]);
        }
        var n = +s;
        if ( true && isNaN(n))
            throw new debugError["a" /* DebugError */]("can not read number: " + (sign === 1 ? '' : '-') + s);
        n *= sign;
        this._lastPos = lastPos;
        return n;
    };
    SvgTokenizer.prototype.skipWhiteSpaces = function () {
        while (!this.isEof()) {
            if ([',', ' '].indexOf(this.path[this._pos]) === -1)
                break;
            this._pos++;
        }
    };
    SvgTokenizer.prototype.getNextToken = function (allowedSymbols, limit) {
        if (limit === void 0) { limit = 0; }
        if ( true && this.isEof())
            throw new debugError["a" /* DebugError */]("unexpected end of string");
        var char;
        var res = '';
        this.skipWhiteSpaces();
        this._lastPos = this._pos;
        while (!this.isEof()) {
            char = this.path[this._pos];
            if (allowedSymbols.indexOf(char) === -1)
                break;
            if (limit > 0 && res.length === limit)
                break;
            res += char;
            this._pos++;
        }
        return res;
    };
    return SvgTokenizer;
}());
var polyLine_PolyLine = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(PolyLine, _super);
    function PolyLine(game) {
        var _this = _super.call(this, game) || this;
        _this.game = game;
        _this._lineWidth = 1;
        _this._borderRadius = 1;
        _this.closed = false;
        _this.interrupted = false;
        _this.color.addOnChangeListener(function () { return _this.passPropertiesChildren(); });
        return _this;
    }
    Object.defineProperty(PolyLine.prototype, "lineWidth", {
        get: function () {
            return this._lineWidth;
        },
        set: function (val) {
            this._lineWidth = val;
            this.passPropertiesChildren();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PolyLine.prototype, "borderRadius", {
        get: function () {
            return this._borderRadius;
        },
        set: function (val) {
            this._borderRadius = val;
            this.passPropertiesChildren();
        },
        enumerable: false,
        configurable: true
    });
    PolyLine.fromMultiCurveSvgPath = function (game, path) {
        var polyLines = [];
        path.split('\n').join(' ').split(/(.*?z)/gi).forEach(function (p) {
            if (!p.trim())
                return;
            var polyLine = PolyLine.fromSvgPath(game, p);
            polyLines.push(polyLine);
        });
        return polyLines;
    };
    PolyLine.fromPoints = function (game, points) {
        if (typeof points === 'string') {
            points = clearString(points).split(/[ |,]/).map(function (it) {
                var n = parseFloat(it);
                if ( true && isNaN(n))
                    throw new debugError["a" /* DebugError */]("can not parse vertex array " + points + ": unexpected value " + it);
                return n;
            });
        }
        if ( true && points.length === 0)
            throw new debugError["a" /* DebugError */]("can not create polyline from empty vertex array");
        var pl = new PolyLine(game);
        pl.moveTo(points[0], points[1]);
        for (var i = 2; i < points.length; i += 2) {
            pl.lineTo(points[i], points[i + 1]);
        }
        return pl;
    };
    PolyLine.fromSvgPath = function (game, path) {
        var pl = new PolyLine(game);
        pl.passMouseEventsThrough = true;
        pl.tokenizer = new polyLine_SvgTokenizer(path);
        var lastCommand;
        while (!pl.tokenizer.isEof()) {
            var command = pl.tokenizer.getNextCommand();
            if (isFinite(+command) && lastCommand) {
                pl.tokenizer.releaseNextToken();
                pl.executeCommand(lastCommand);
            }
            else {
                pl.executeCommand(command);
                lastCommand = command;
            }
        }
        return pl;
    };
    PolyLine.splineFromPoints = function (game, points) {
        return PolyLine.fromSvgPath(game, Object(splineFromPoints["a" /* createSplinePathFromPoints */])(points));
    };
    PolyLine.prototype.moveTo = function (x, y) {
        if (this.children.length > 0)
            this.complete();
        this.lastPoint = new point2d["a" /* Point2d */](x, y);
        if (!this.firstPoint)
            this.firstPoint = new point2d["a" /* Point2d */](x, y);
    };
    PolyLine.prototype.moveBy = function (x, y) {
        var lastX = this.lastPoint ? this.lastPoint.x : 0;
        var lastY = this.lastPoint ? this.lastPoint.y : 0;
        this.moveTo(lastX + x, lastY + y);
    };
    PolyLine.prototype.lineTo = function (x, y) {
        if (!this.lastPoint)
            this.lastPoint = new point2d["a" /* Point2d */]();
        if (!this.firstPoint)
            this.firstPoint = new point2d["a" /* Point2d */](x, y);
        this.addSegment(this.lastPoint.x, this.lastPoint.y, x, y);
        this.lastPoint.setXY(x, y);
    };
    PolyLine.prototype.lineBy = function (x, y) {
        var lastX = this.lastPoint ? this.lastPoint.x : 0;
        var lastY = this.lastPoint ? this.lastPoint.y : 0;
        this.lineTo(lastX + x, lastY + y);
    };
    PolyLine.prototype.arcTo = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
        this._arcTo(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y, false);
    };
    PolyLine.prototype.arcBy = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
        this._arcTo(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y, true);
    };
    PolyLine.prototype.isClosed = function () {
        return (this.closed ||
            this.children[0].pos.equalPoint(this.children[this.children.length - 1].pos));
    };
    PolyLine.prototype.isInterrupted = function () {
        return this.interrupted;
    };
    PolyLine.prototype.close = function () {
        if ( true && !this.firstPoint)
            throw new debugError["a" /* DebugError */]("can not close polyline: no first point defined");
        this.lineTo(this.firstPoint.x, this.firstPoint.y);
        this.closed = true;
        this.complete();
    };
    PolyLine.prototype.clone = function () {
        var l = new PolyLine(this.game);
        this.setClonedProperties(l);
        return l;
    };
    PolyLine.prototype.draw = function () { };
    PolyLine.prototype.setClonedProperties = function (cloned) {
        _super.prototype.setClonedProperties.call(this, cloned);
    };
    PolyLine.prototype.bezierTo = function (p1, p2, p3, p4) {
        var _this = this;
        var l = polyLine_length(p1, p2) + polyLine_length(p2, p3) + polyLine_length(p3, p4);
        var bezier = getPointsOnBezierCurve([p1, p2, p3, p4], 0, l);
        bezier.forEach(function (v) {
            _this.lineTo(v[0], v[1]);
        });
    };
    PolyLine.prototype._arcTo = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y, isRelativeCoordinates) {
        var _this = this;
        if ( true && largeArcFlag !== 0 && largeArcFlag !== 1)
            throw new debugError["a" /* DebugError */]("wrong largeArcFlag value: " + largeArcFlag);
        if ( true && sweepFlag !== 0 && sweepFlag !== 1)
            throw new debugError["a" /* DebugError */]("wrong largeArcFlag value: " + sweepFlag);
        if (isRelativeCoordinates) {
            x += this.lastPoint.x;
            y += this.lastPoint.y;
        }
        var arcs = arcToBezier(this.lastPoint.x, this.lastPoint.y, x, y, rx, ry, xAxisRotation, largeArcFlag, sweepFlag);
        if (arcs !== undefined)
            arcs.forEach(function (arc, i) {
                var xTo = arc.x;
                var yTo = arc.y;
                if (i === arcs.length - 1) {
                    xTo = x;
                    yTo = y;
                }
                _this.bezierTo([_this.lastPoint.x, _this.lastPoint.y], [arc.x1, arc.y1], [arc.x2, arc.y2], [xTo, yTo]);
            });
    };
    PolyLine.prototype.complete = function () {
        this.lastPoint = undefined;
        this.firstPoint = undefined;
        this.interrupted = true;
    };
    PolyLine.prototype.passPropertiesToChild = function (l) {
        l.borderRadius = this.borderRadius;
        l.color = this.color;
        l.fillColor = this.fillColor;
        l.lineWidth = this.lineWidth;
        l.pointTo.forceTriggerChange();
    };
    PolyLine.prototype.passPropertiesChildren = function () {
        var _this = this;
        this.children.forEach(function (l) { return _this.passPropertiesToChild(l); });
    };
    PolyLine.prototype.addSegment = function (x, y, x1, y1) {
        var line = new geometry_line["a" /* Line */](this.game);
        this.passPropertiesToChild(line);
        line.setXYX1Y1(x, y, x1, y1);
        this.appendChild(line);
        var maxW = this.children[0].pos.x + this.children[0].size.width;
        var maxH = this.children[0].pos.y + this.children[0].size.height;
        for (var i = 1; i < this.children.length; i++) {
            if (this.children[i].pos.x + this.children[i].size.width > maxW)
                maxW = this.children[i].pos.x + this.children[i].size.width;
            if (this.children[i].pos.y + this.children[i].size.height > maxH)
                maxH = this.children[i].pos.y + this.children[i].size.height;
        }
        this.size.setWH(maxW, maxH);
    };
    PolyLine.prototype.executeCommand = function (command) {
        var tokenizer = this.tokenizer;
        switch (command) {
            case 'L': {
                this.lineTo(tokenizer.getNextNumber(), tokenizer.getNextNumber());
                break;
            }
            case 'l': {
                this.lineBy(tokenizer.getNextNumber(), tokenizer.getNextNumber());
                break;
            }
            case 'H': {
                this.lineTo(tokenizer.getNextNumber(), this.lastPoint.y);
                break;
            }
            case 'h': {
                this.lineBy(tokenizer.getNextNumber(), 0);
                break;
            }
            case 'V': {
                this.lineTo(this.lastPoint.x, tokenizer.getNextNumber());
                break;
            }
            case 'v': {
                this.lineBy(0, tokenizer.getNextNumber());
                break;
            }
            case 'M': {
                this.moveTo(tokenizer.getNextNumber(), tokenizer.getNextNumber());
                break;
            }
            case 'm': {
                this.moveBy(tokenizer.getNextNumber(), tokenizer.getNextNumber());
                break;
            }
            case 'C': {
                var p1 = [this.lastPoint.x, this.lastPoint.y];
                var p2 = [tokenizer.getNextNumber(), tokenizer.getNextNumber()];
                var p3 = [tokenizer.getNextNumber(), tokenizer.getNextNumber()];
                var p4 = [tokenizer.getNextNumber(), tokenizer.getNextNumber()];
                this.lastBezierPoint = p3;
                this.bezierTo(p1, p2, p3, p4);
                break;
            }
            case 'c': {
                var p1 = [this.lastPoint.x, this.lastPoint.y];
                var p2 = [tokenizer.getNextNumber(), tokenizer.getNextNumber()];
                var p3 = [tokenizer.getNextNumber(), tokenizer.getNextNumber()];
                var p4 = [tokenizer.getNextNumber(), tokenizer.getNextNumber()];
                this.lastBezierPoint = add(p1, p3);
                this.bezierTo(p1, add(p1, p2), add(p1, p3), add(p1, p4));
                break;
            }
            case 'S': {
                var p1 = [this.lastPoint.x, this.lastPoint.y];
                if (!this.lastBezierPoint || ['c', 'C', 'S', 's'].indexOf(tokenizer.lastCommand) === -1) {
                    this.lastBezierPoint = p1;
                }
                var p2 = [2 * p1[0] - this.lastBezierPoint[0], 2 * p1[1] - this.lastBezierPoint[1]];
                var p3 = [tokenizer.getNextNumber(), tokenizer.getNextNumber()];
                var p4 = [tokenizer.getNextNumber(), tokenizer.getNextNumber()];
                this.lastBezierPoint = p3;
                this.bezierTo(p1, p2, p3, p4);
                break;
            }
            case 's': {
                var p1 = [this.lastPoint.x, this.lastPoint.y];
                if (!this.lastBezierPoint || ['c', 'C', 'S', 's'].indexOf(tokenizer.lastCommand) === -1)
                    this.lastBezierPoint = p1;
                var p2 = [2 * p1[0] - this.lastBezierPoint[0], 2 * p1[1] - this.lastBezierPoint[1]];
                var p3 = add(p1, [tokenizer.getNextNumber(), tokenizer.getNextNumber()]);
                var p4 = add(p1, [tokenizer.getNextNumber(), tokenizer.getNextNumber()]);
                this.lastBezierPoint = p3;
                this.bezierTo(p1, p2, p3, p4);
                break;
            }
            case 'Q': {
                var p1 = [this.lastPoint.x, this.lastPoint.y];
                var p2 = [tokenizer.getNextNumber(), tokenizer.getNextNumber()];
                var p3 = [p2[0], p2[1]];
                var p4 = [tokenizer.getNextNumber(), tokenizer.getNextNumber()];
                this.lastBezierPoint = p3;
                this.bezierTo(p1, p2, p3, p4);
                break;
            }
            case 'q': {
                var p1 = [this.lastPoint.x, this.lastPoint.y];
                var p2 = add(p1, [tokenizer.getNextNumber(), tokenizer.getNextNumber()]);
                var p3 = [p2[0], p2[1]];
                var p4 = add(p1, [tokenizer.getNextNumber(), tokenizer.getNextNumber()]);
                this.lastBezierPoint = p3;
                this.bezierTo(p1, p2, p3, p4);
                break;
            }
            case 'T': {
                var p1 = [this.lastPoint.x, this.lastPoint.y];
                if (!this.lastBezierPoint || ['q', 'Q', 'T', 't'].indexOf(tokenizer.lastCommand) === -1)
                    this.lastBezierPoint = p1;
                var p2 = [2 * p1[0] - this.lastBezierPoint[0], 2 * p1[1] - this.lastBezierPoint[1]];
                var p3 = [p2[0], p2[1]];
                var p4 = [tokenizer.getNextNumber(), tokenizer.getNextNumber()];
                this.lastBezierPoint = p3;
                this.bezierTo(p1, p2, p3, p4);
                break;
            }
            case 't': {
                var p1 = [this.lastPoint.x, this.lastPoint.y];
                if (!this.lastBezierPoint || ['q', 'Q', 'T', 't'].indexOf(tokenizer.lastCommand) === -1)
                    this.lastBezierPoint = p1;
                var p2 = [2 * p1[0] - this.lastBezierPoint[0], 2 * p1[1] - this.lastBezierPoint[1]];
                var p3 = [p2[0], p2[1]];
                var p4 = add(p1, [tokenizer.getNextNumber(), tokenizer.getNextNumber()]);
                this.lastBezierPoint = p3;
                this.bezierTo(p1, p2, p3, p4);
                break;
            }
            case 'A':
            case 'a':
                var rx = tokenizer.getNextNumber();
                var ry = tokenizer.getNextNumber();
                var xAxisRotation = tokenizer.getNextNumber();
                var largeArcFlag = tokenizer.getNextNumber();
                var sweepFlag = tokenizer.getNextNumber();
                var x = tokenizer.getNextNumber();
                var y = tokenizer.getNextNumber();
                var relative = command === 'a';
                this._arcTo(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y, relative);
                break;
            case 'Z':
            case 'z':
                this.close();
                break;
            default:
                if (true)
                    throw new debugError["a" /* DebugError */]("unexpected command: '" + command + "'");
                break;
        }
        tokenizer.lastCommand = command;
    };
    return PolyLine;
}(shape["a" /* Shape */]));



/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ mouseControl_MouseControl; });

// EXTERNAL MODULE: ./engine/misc/mathEx.ts
var mathEx = __webpack_require__(19);

// EXTERNAL MODULE: ./engine/geometry/point2d.ts
var point2d = __webpack_require__(4);

// EXTERNAL MODULE: ./engine/geometry/rect.ts
var rect = __webpack_require__(11);

// EXTERNAL MODULE: ./engine/debug/debugError.ts
var debugError = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./engine/misc/objectPool.ts
var objectPool = __webpack_require__(12);

// EXTERNAL MODULE: ./engine/misc/releaseableEntity.ts
var releaseableEntity = __webpack_require__(24);

// CONCATENATED MODULE: ./engine/control/mouse/mousePoint.ts




var MOUSE_BUTTON;
(function (MOUSE_BUTTON) {
    MOUSE_BUTTON[MOUSE_BUTTON["LEFT"] = 0] = "LEFT";
    MOUSE_BUTTON[MOUSE_BUTTON["RIGHT"] = 1] = "RIGHT";
    MOUSE_BUTTON[MOUSE_BUTTON["SCROLL"] = 2] = "SCROLL";
})(MOUSE_BUTTON || (MOUSE_BUTTON = {}));
var mousePoint_MousePoint = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(MousePoint, _super);
    function MousePoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.screenCoordinate = new point2d["a" /* Point2d */]();
        _this.sceneCoordinate = new point2d["a" /* Point2d */]();
        return _this;
    }
    MousePoint.fromPool = function () {
        return MousePoint.mousePointsPool.getFreeObject();
    };
    MousePoint.mousePointsPool = new objectPool["a" /* ObjectPool */](MousePoint);
    return MousePoint;
}(releaseableEntity["a" /* ReleaseableEntity */]));


// EXTERNAL MODULE: ./engine/control/mouse/mouseEvents.ts
var mouseEvents = __webpack_require__(6);

// EXTERNAL MODULE: ./engine/geometry/mat4.ts
var mat4 = __webpack_require__(2);

// EXTERNAL MODULE: ./engine/geometry/vec4.ts
var vec4 = __webpack_require__(47);

// CONCATENATED MODULE: ./engine/control/mouse/mouseControl.ts








var Vec4Holder = vec4["a" /* vec4 */].Vec4Holder;
var pointTopLeft = new Vec4Holder();
pointTopLeft.set(0, 0, 0, 1);
var LEFT_MOUSE_BTN = 0;
var mouseControl_MouseControl = (function () {
    function MouseControl(_game) {
        this._game = _game;
        this.type = 'MouseControl';
        this._objectsCaptured = {};
        this._objectsHovered = {};
        this._objectsFirstHovered = {};
    }
    MouseControl.triggerGameObjectEvent = function (e, eventName, mousePoint, go) {
        var goRect = rect["a" /* Rect */].fromPool();
        var pointBottomRight = Vec4Holder.fromPool();
        pointBottomRight.set(go.size.width, go.size.height, 0, 1);
        var pointTopLeftTransformation = Vec4Holder.fromPool();
        var pointBottomRightTransformation = Vec4Holder.fromPool();
        mat4["a" /* mat4 */].multVecByMatrix(pointTopLeftTransformation, go.worldTransformMatrix, pointTopLeft);
        mat4["a" /* mat4 */].multVecByMatrix(pointBottomRightTransformation, go.worldTransformMatrix, pointBottomRight);
        goRect.setXYWH(pointTopLeftTransformation.x, pointTopLeftTransformation.y, pointBottomRightTransformation.x - pointTopLeftTransformation.x, pointBottomRightTransformation.y - pointTopLeftTransformation.y);
        if (goRect.width < 0) {
            goRect.width = -goRect.width;
            goRect.x -= goRect.width;
        }
        if (goRect.height < 0) {
            goRect.height = -goRect.height;
            goRect.y -= goRect.height;
        }
        pointBottomRight.release();
        pointTopLeftTransformation.release();
        pointBottomRightTransformation.release();
        var screenPoint = point2d["a" /* Point2d */].fromPool();
        screenPoint.setXY(mousePoint.screenCoordinate.x, mousePoint.screenCoordinate.y);
        var res = false;
        if (mathEx["a" /* MathEx */].isPointInRect(screenPoint, goRect)) {
            if (!go.passMouseEventsThrough) {
                mousePoint.target = go;
                var mouseEvent = {
                    screenX: mousePoint.screenCoordinate.x,
                    screenY: mousePoint.screenCoordinate.y,
                    sceneX: mousePoint.sceneCoordinate.x,
                    sceneY: mousePoint.sceneCoordinate.y,
                    objectX: mousePoint.sceneCoordinate.x - go.pos.x,
                    objectY: mousePoint.sceneCoordinate.y - go.pos.y,
                    id: mousePoint.id,
                    target: go,
                    nativeEvent: e,
                    eventName: eventName,
                    isMouseDown: mousePoint.isMouseDown,
                    button: e.button,
                };
                go.trigger(eventName, mouseEvent);
            }
            res = !go.passMouseEventsThrough;
        }
        goRect.release();
        screenPoint.release();
        for (var _i = 0, _a = go.children; _i < _a.length; _i++) {
            var ch = _a[_i];
            var childRes = MouseControl.triggerGameObjectEvent(e, eventName, mousePoint, ch);
            res = res || childRes;
        }
        return res;
    };
    MouseControl.prototype.listenTo = function () {
        var _this = this;
        if ( true && !this._game.getRenderer()) {
            throw new debugError["a" /* DebugError */]("can not initialize mouse control: renderer is not set");
        }
        var container = this._game.getRenderer().container;
        this._container = container;
        container.ontouchstart = function (e) {
            e.preventDefault();
            var l = e.touches.length;
            while (l--) {
                _this.resolveClick(e.touches[l]);
            }
        };
        container.onmousedown = function (e) {
            if (e.button === LEFT_MOUSE_BTN)
                _this.resolveClick(e);
            else {
                _this.resolveButtonPressed(e);
            }
        };
        container.ontouchend = container.ontouchcancel = function (e) {
            e.preventDefault();
            var l = e.changedTouches.length;
            while (l--) {
                _this.resolveMouseUp(e.changedTouches[l]);
            }
        };
        container.onmouseup = function (e) {
            _this.resolveMouseUp(e);
        };
        container.ontouchmove = function (e) {
            e.preventDefault();
            var l = e.touches.length;
            while (l--) {
                _this.resolveMouseMove(e.touches[l], true);
            }
        };
        container.onmousemove = function (e) {
            var isMouseDown = e.buttons === 1;
            _this.resolveMouseMove(e, isMouseDown);
        };
        container.ondblclick = function (e) {
            _this.resolveDoubleClick(e);
        };
        container.onmousewheel = function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.resolveScroll(e);
        };
    };
    MouseControl.prototype.update = function () { };
    MouseControl.prototype.destroy = function () {
        var _this = this;
        if (!this._container)
            return;
        [
            'mouseMove', 'ontouchstart', 'onmousedown',
            'ontouchend', 'onmouseup', 'ontouchmove',
            'onmousemove', 'ondblclick'
        ].forEach(function (evtName) {
            _this._container[evtName] = null;
        });
    };
    MouseControl.prototype.resolveSceneCoordinates = function (mousePoint, layer) {
        var worldPoint = this._game.camera.screenToWorld(mousePoint.screenCoordinate, layer.transformType);
        mousePoint.sceneCoordinate.set(worldPoint);
        worldPoint.release();
    };
    MouseControl.prototype.resolvePoint = function (e) {
        var game = this._game;
        var clientX = e.clientX;
        var clientY = e.clientY;
        var screenX = (clientX - game.pos.x) / game.scale.x;
        var screenY = (clientY - game.pos.y) / game.scale.y;
        var screenPoint = point2d["a" /* Point2d */].fromPool();
        screenPoint.setXY(screenX, screenY);
        var mousePoint = mousePoint_MousePoint.fromPool();
        mousePoint.screenCoordinate.set(screenPoint);
        mousePoint.id = e.identifier || e.pointerId || 0;
        screenPoint.release();
        return mousePoint;
    };
    MouseControl.prototype.triggerEvent = function (e, mouseEvent, isMouseDown) {
        if (isMouseDown === void 0) { isMouseDown = false; }
        var scene = this._game.getCurrScene();
        var mousePoint = this.resolvePoint(e);
        mousePoint.isMouseDown = isMouseDown;
        var isCaptured = false;
        var i = scene.getLayers().length;
        while (i--) {
            var layer = scene.getLayers()[i];
            this.resolveSceneCoordinates(mousePoint, layer);
            var j = layer.children.length;
            while (j--) {
                var go = layer.children[j];
                isCaptured = MouseControl.triggerGameObjectEvent(e, mouseEvent, mousePoint, go);
                if (isCaptured) {
                    mousePoint.target = go;
                    break;
                }
            }
            if (isCaptured)
                break;
        }
        if (mousePoint.target === undefined)
            mousePoint.target = scene;
        scene.trigger(mouseEvent, {
            screenX: mousePoint.screenCoordinate.x,
            screenY: mousePoint.screenCoordinate.y,
            sceneX: mousePoint.sceneCoordinate.x,
            sceneY: mousePoint.sceneCoordinate.y,
            id: mousePoint.id,
            eventName: mouseEvent,
            nativeEvent: e,
            button: e.button,
            isMouseDown: isMouseDown
        });
        return mousePoint;
    };
    MouseControl.prototype.resolveClick = function (e) {
        var point = this.triggerEvent(e, mouseEvents["a" /* MOUSE_EVENTS */].click);
        this.triggerEvent(e, mouseEvents["a" /* MOUSE_EVENTS */].mouseDown).release();
        this._objectsCaptured[point.id] = point.target;
        point.release();
    };
    MouseControl.prototype.resolveButtonPressed = function (e) {
        var point = this.triggerEvent(e, mouseEvents["a" /* MOUSE_EVENTS */].click);
        this.triggerEvent(e, mouseEvents["a" /* MOUSE_EVENTS */].mousePressed).release();
        this._objectsCaptured[point.id] = point.target;
        point.release();
    };
    MouseControl.prototype.resolveMouseMove = function (e, isMouseDown) {
        var point = this.triggerEvent(e, mouseEvents["a" /* MOUSE_EVENTS */].mouseMove, isMouseDown);
        var lastHoveredObject = this._objectsHovered[point.id];
        if (lastHoveredObject !== undefined) {
            if (lastHoveredObject !== point.target) {
                lastHoveredObject.trigger(mouseEvents["a" /* MOUSE_EVENTS */].mouseLeave, point);
                delete this._objectsFirstHovered[point.id];
            }
            else {
                if (this._objectsFirstHovered[point.id] === undefined) {
                    lastHoveredObject.trigger(mouseEvents["a" /* MOUSE_EVENTS */].mouseEnter, point);
                    this._objectsFirstHovered[point.id] = point.target;
                }
            }
        }
        this._objectsHovered[point.id] = point.target;
        point.release();
    };
    MouseControl.prototype.resolveMouseUp = function (e) {
        var point = this.triggerEvent(e, mouseEvents["a" /* MOUSE_EVENTS */].mouseUp);
        var lastCapturedObject = this._objectsCaptured[point.id];
        if (lastCapturedObject !== undefined && point.target !== lastCapturedObject) {
            lastCapturedObject.trigger(mouseEvents["a" /* MOUSE_EVENTS */].mouseUp, point);
        }
        delete this._objectsCaptured[point.id];
        delete this._objectsHovered[point.id];
        point.release();
    };
    MouseControl.prototype.resolveDoubleClick = function (e) {
        this.triggerEvent(e, mouseEvents["a" /* MOUSE_EVENTS */].doubleClick).release();
    };
    MouseControl.prototype.resolveScroll = function (e) {
        this.triggerEvent(e, mouseEvents["a" /* MOUSE_EVENTS */].scroll).release();
    };
    return MouseControl;
}());



/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (true) {
    window.__POLYFILLS_INCLUDED__ = true;
}
if (typeof globalThis === 'undefined')
    window.globalThis = window;
var rafPolyfill = function (f) {
    return setTimeout(f, 17);
};
globalThis.requestAnimationFrame =
    globalThis.requestAnimationFrame ||
        globalThis.webkitRequestAnimationFrame ||
        rafPolyfill;
if (!globalThis.cancelAnimationFrame) {
    globalThis.cancelAnimationFrame = function (id) { return clearTimeout(id); };
}
if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (!this && true) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function' && true) {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardControl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_control_abstract_abstractKeypad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _engine_control_keyboard_keyboardEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);



var KeyboardControl = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(KeyboardControl, _super);
    function KeyboardControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'KeyboardControl';
        _this.keyPressed = _engine_control_keyboard_keyboardEvents__WEBPACK_IMPORTED_MODULE_2__[/* KEYBOARD_EVENTS */ "a"].keyPressed;
        _this.keyHold = _engine_control_keyboard_keyboardEvents__WEBPACK_IMPORTED_MODULE_2__[/* KEYBOARD_EVENTS */ "a"].keyHold;
        _this.keyReleased = _engine_control_keyboard_keyboardEvents__WEBPACK_IMPORTED_MODULE_2__[/* KEYBOARD_EVENTS */ "a"].keyReleased;
        return _this;
    }
    KeyboardControl.prototype.isJustPressed = function (key) {
        var event = this.findEvent(key);
        if (event === undefined)
            return false;
        return event.keyState === _engine_control_abstract_abstractKeypad__WEBPACK_IMPORTED_MODULE_1__[/* KEY_STATE */ "b"].KEY_JUST_PRESSED;
    };
    KeyboardControl.prototype.isReleased = function (key) {
        var event = this.findEvent(key);
        if (event === undefined)
            return false;
        return event.keyState <= _engine_control_abstract_abstractKeypad__WEBPACK_IMPORTED_MODULE_1__[/* KEY_STATE */ "b"].KEY_JUST_RELEASED;
    };
    KeyboardControl.prototype.isJustReleased = function (key) {
        var event = this.findEvent(key);
        if (event === undefined)
            return false;
        return event.keyState === _engine_control_abstract_abstractKeypad__WEBPACK_IMPORTED_MODULE_1__[/* KEY_STATE */ "b"].KEY_JUST_RELEASED;
    };
    KeyboardControl.prototype.listenTo = function () {
        var _this = this;
        this._keyDownListener = function (e) {
            e.preventDefault();
            e.stopPropagation();
            var code = e.keyCode;
            _this.triggerKeyPress(code);
        };
        this._keyUpListener = function (e) {
            var code = e.keyCode;
            _this.triggerKeyRelease(code);
        };
        globalThis.addEventListener('keydown', this._keyDownListener);
        globalThis.addEventListener('keyup', this._keyUpListener);
    };
    KeyboardControl.prototype.triggerKeyPress = function (code) {
        if (this.isPressed(code))
            return;
        var eventFromBuffer = _engine_control_keyboard_keyboardEvents__WEBPACK_IMPORTED_MODULE_2__[/* KeyBoardEvent */ "b"].fromPool();
        if (eventFromBuffer === undefined) {
            if (true)
                console.warn('keyboard pool is full');
            return;
        }
        eventFromBuffer.key = code;
        this.press(eventFromBuffer);
    };
    KeyboardControl.prototype.triggerKeyRelease = function (code) {
        var eventFromBuffer = this.findEvent(code);
        if (eventFromBuffer === undefined)
            return;
        this.release(eventFromBuffer);
    };
    KeyboardControl.prototype.destroy = function () {
        globalThis.removeEventListener('keydown', this._keyDownListener);
        globalThis.removeEventListener('keyup', this._keyUpListener);
    };
    KeyboardControl.prototype.isPressed = function (key) {
        var event = this.findEvent(key);
        if (event === undefined)
            return false;
        return event.keyState >= _engine_control_abstract_abstractKeypad__WEBPACK_IMPORTED_MODULE_1__[/* KEY_STATE */ "b"].KEY_PRESSED;
    };
    KeyboardControl.prototype.findEvent = function (key) {
        for (var _i = 0, _a = this.buffer; _i < _a.length; _i++) {
            var event = _a[_i];
            if (event.key === key)
                return event;
        }
        return undefined;
    };
    return KeyboardControl;
}(_engine_control_abstract_abstractKeypad__WEBPACK_IMPORTED_MODULE_1__[/* AbstractKeypad */ "a"]));



/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Line; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_renderable_abstract_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _engine_geometry_point2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _engine_renderable_impl_geometry_rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);




var Line = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Line, _super);
    function Line(game) {
        var _this = _super.call(this, game) || this;
        _this.borderRadius = 0;
        _this.pointTo = new _engine_geometry_point2d__WEBPACK_IMPORTED_MODULE_2__[/* Point2d */ "a"](0, 0, function () { return _this.onPointChanged(); });
        _this._rectangleRepresentation = new _engine_renderable_impl_geometry_rectangle__WEBPACK_IMPORTED_MODULE_3__[/* Rectangle */ "a"](_this.game);
        _this.lineWidth = 1;
        _this._rectangleRepresentation.lineWidth = 0;
        return _this;
    }
    Line.prototype.setXYX1Y1 = function (x, y, x1, y1) {
        this.pos.setXY(x, y);
        this.pointTo.setXY(x1, y1);
        var dx = this.pointTo.x - this.pos.x;
        var dy = this.pointTo.y - this.pos.y;
        this.pointTo.setXY(dx, dy);
    };
    Line.prototype.clone = function () {
        var l = new Line(this.game);
        this.setClonedProperties(l);
        return l;
    };
    Line.prototype.draw = function () {
        this.game.getRenderer().drawLine(this);
    };
    Line.prototype.translate = function () {
        _super.prototype.translate.call(this);
        this.game.getRenderer().transformTranslate(0, -this.lineWidth / 2);
    };
    Line.prototype.getRectangleRepresentation = function () {
        this._rectangleRepresentation.borderRadius = this.borderRadius;
        this._rectangleRepresentation.fillColor = this.color;
        return this._rectangleRepresentation;
    };
    Line.prototype.setProps = function (props) {
        var _a, _b, _c, _d;
        _super.prototype.setProps.call(this, props);
        this.setXYX1Y1((_b = (_a = props.pos) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : 0, (_d = (_c = props.pos) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0, props.pointTo.x, props.pointTo.y);
        if (props.borderRadius)
            this.borderRadius = props.borderRadius;
    };
    Line.prototype.setClonedProperties = function (cloned) {
        cloned.borderRadius = this.borderRadius;
        cloned.pointTo.set(this.pointTo);
        _super.prototype.setClonedProperties.call(this, cloned);
    };
    Line.prototype.onPointChanged = function () {
        var w = Math.abs(this.pointTo.x);
        var h = Math.abs(this.pointTo.y);
        var l = Math.sqrt(w * w + h * h) + this.lineWidth / 2;
        this.size.setWH(w, h + this.lineWidth);
        this._rectangleRepresentation.size.setWH(l, this.lineWidth);
        this.angle = Math.atan2(this.pointTo.y, this.pointTo.x);
        this.transformPoint.setXY(0, this.lineWidth / 2);
    };
    return Line;
}(_engine_renderable_abstract_shape__WEBPACK_IMPORTED_MODULE_1__[/* Shape */ "a"]));



/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createSplinePathFromPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return describeArc; });
var createSplinePathFromPoints = function (points) {
    var x = [];
    var y = [];
    var cnt = 0;
    for (var i = 0; i < points.length; i = i + 2) {
        x[cnt] = points[i];
        y[cnt] = points[i + 1];
        cnt++;
    }
    var px = computeControlPoints(x);
    var py = computeControlPoints(y);
    var numOfPoints = points.length / 2;
    var pathStr = '';
    for (var i = 0; i < numOfPoints - 1; i++) {
        pathStr += path(i, x[i], y[i], px.p1[i], py.p1[i], px.p2[i], py.p2[i], x[i + 1], y[i + 1]);
    }
    return pathStr;
};
var path = function (i, x1, y1, px1, py1, px2, py2, x2, y2) {
    var res = '';
    if (i === 0)
        res += "M " + x1 + " " + y1 + " ";
    res += " C " + px1 + " " + py1 + " " + px2 + " " + py2 + " " + x2 + " " + y2;
    return res;
};
var computeControlPoints = function (K) {
    var p1 = [];
    var p2 = [];
    var n = K.length - 1;
    var a = [];
    var b = [];
    var c = [];
    var r = [];
    a[0] = 0;
    b[0] = 2;
    c[0] = 1;
    r[0] = K[0] + 2 * K[1];
    for (var i = 1; i < n - 1; i++) {
        a[i] = 1;
        b[i] = 4;
        c[i] = 1;
        r[i] = 4 * K[i] + 2 * K[i + 1];
    }
    a[n - 1] = 2;
    b[n - 1] = 7;
    c[n - 1] = 0;
    r[n - 1] = 8 * K[n - 1] + K[n];
    for (var i = 1; i < n; i++) {
        var m = a[i] / b[i - 1];
        b[i] = b[i] - m * c[i - 1];
        r[i] = r[i] - m * r[i - 1];
    }
    p1[n - 1] = r[n - 1] / b[n - 1];
    for (var i = n - 2; i >= 0; --i) {
        p1[i] = (r[i] - c[i] * p1[i + 1]) / b[i];
    }
    for (var i = 0; i < n - 1; i++) {
        p2[i] = 2 * K[i + 1] - p1[i + 1];
    }
    p2[n - 1] = 0.5 * (K[n] + p1[n - 1]);
    return { p1: p1, p2: p2 };
};
var polarToCartesian = function (centerX, centerY, radius, angle) {
    return {
        x: centerX + (radius * Math.cos(angle)),
        y: centerY + (radius * Math.sin(angle))
    };
};
var describeArc = function (x, y, radius, startAngle, endAngle, anticlockwise) {
    if (anticlockwise === void 0) { anticlockwise = false; }
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';
    return [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
};


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mesh; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);




var Mesh = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Mesh, _super);
    function Mesh(game) {
        var _this = _super.call(this, game) || this;
        _this.game = game;
        _this.heightMapFactor = 0.01;
        _this.fillColor = _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_2__[/* Color */ "a"].BLACK.clone();
        _this.colorMix = 0;
        _this.reflectivity = 0;
        _this.invertY = false;
        _this.vertexItemSize = 3;
        return _this;
    }
    Mesh.prototype.acceptLight = function (val) {
        if ( true && val) {
            if (!this.bufferInfo.normalBuffer) {
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__[/* DebugError */ "a"]("can not accept light: normals are not specified");
            }
        }
        this._lightAccepted = val;
    };
    Mesh.prototype.isLightAccepted = function () {
        return this._lightAccepted;
    };
    Mesh.prototype.revalidate = function () {
        _super.prototype.revalidate.call(this);
        if (true) {
            if (!this.modelPrimitive)
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__[/* DebugError */ "a"]("model primitive is not set");
            if (this.modelPrimitive.vertexArr.length % this.vertexItemSize !== 0) {
                console.error(this);
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__[/* DebugError */ "a"]("Wrong vertexArr size, actual size is " + this.modelPrimitive.vertexArr.length + ",\n                    but number must be a multiple of " + this.vertexItemSize + " ");
            }
        }
    };
    Mesh.prototype.transform = function () {
        _super.prototype.transform.call(this);
        if (this.invertY)
            this.game.getRenderer().transformScale(1, -1, 1);
    };
    Mesh.prototype.draw = function () {
        this.game.getRenderer().drawMesh(this);
    };
    Mesh.prototype.setClonedProperties = function (cloned) {
        cloned.texture = this.texture;
        cloned.cubeMapTexture = this.cubeMapTexture;
        cloned.normalsTexture = this.normalsTexture;
        cloned.heightMapTexture = this.heightMapTexture;
        cloned.heightMapFactor = this.heightMapFactor;
        cloned.fillColor = this.fillColor.clone();
        cloned.colorMix = this.colorMix;
        cloned.reflectivity = this.reflectivity;
        cloned.depthTest = this.depthTest;
        _super.prototype.setClonedProperties.call(this, cloned);
    };
    return Mesh;
}(_engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_1__[/* RenderableModel */ "b"]));



/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NullGameObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


var NullGameObject = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(NullGameObject, _super);
    function NullGameObject(game) {
        var _this = _super.call(this, game) || this;
        _this.game = game;
        return _this;
    }
    NullGameObject.prototype.draw = function () { };
    return NullGameObject;
}(_engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_1__[/* RenderableModel */ "b"]));



/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Size; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _misc_objectPool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _engine_geometry_abstract_observableEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);




var Size = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Size, _super);
    function Size(width, height, onChangedFn) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        var _this = _super.call(this) || this;
        _this._arr = [_this._width, _this._height];
        if (onChangedFn)
            _this.addOnChangeListener(onChangedFn);
        _this.setWH(width, height);
        return _this;
    }
    Object.defineProperty(Size.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (val) {
            if ( true && Number.isNaN(val))
                throw new _engine_debug_debugError__WEBPACK_IMPORTED_MODULE_3__[/* DebugError */ "a"]("Size: wrong numeric argument  " + val);
            var changed = this._width !== val;
            if (changed) {
                this._width = val;
                this.triggerObservable();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Size.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (val) {
            var changed = this._height !== val;
            if (changed) {
                this._height = val;
                this.triggerObservable();
            }
        },
        enumerable: false,
        configurable: true
    });
    Size.fromPool = function () {
        return Size.rectPool.getFreeObject();
    };
    Size.prototype.setW = function (width) {
        this.setWH(width, this._height);
        return this;
    };
    Size.prototype.setH = function (height) {
        this.setWH(this._width, height);
        return this;
    };
    Size.prototype.setWH = function (width, height) {
        if (height === void 0) { height = width; }
        var changed = this._width !== width || this._height !== height;
        if (changed) {
            this._width = width;
            this._height = height;
            this.triggerObservable();
        }
        return this;
    };
    Size.prototype.addWH = function (width, height) {
        if (height === void 0) { height = width; }
        this.setWH(this.width + width, this.height + height);
        return this;
    };
    Size.prototype.set = function (another) {
        this.setWH(another.width, another.height);
        return this;
    };
    Size.prototype.equal = function (w, h) {
        return this._width === w && this._height === h;
    };
    Size.prototype.clone = function () {
        return new Size(this.width, this.height);
    };
    Size.prototype.isZero = function () {
        return this.equal(0, 0);
    };
    Size.prototype.toArray = function () {
        this._arr[0] = this._width;
        this._arr[1] = this._height;
        return this._arr;
    };
    Size.prototype.toJSON = function () {
        return {
            width: this.width,
            height: this.height
        };
    };
    Size.rectPool = new _misc_objectPool__WEBPACK_IMPORTED_MODULE_1__[/* ObjectPool */ "a"](Size);
    return Size;
}(_engine_geometry_abstract_observableEntity__WEBPACK_IMPORTED_MODULE_2__[/* ObservableEntity */ "a"]));



/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ polygon_Polygon; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./engine/renderable/abstract/mesh.ts
var mesh = __webpack_require__(67);

// EXTERNAL MODULE: ./engine/renderer/webGl/primitives/abstractPrimitive.ts
var abstractPrimitive = __webpack_require__(48);

// EXTERNAL MODULE: ./engine/debug/debugError.ts
var debugError = __webpack_require__(0);

// CONCATENATED MODULE: ./engine/renderable/impl/geometry/helpers/earClippingTriangulator.ts

var earClippingTriangulator_EarClippingTriangulator = (function () {
    function EarClippingTriangulator() {
        this.indices = [];
        this.vertexTypes = [];
        this.triangles = [];
    }
    EarClippingTriangulator.areVerticesClockwise = function (vertices, offset, count) {
        if (count <= 2)
            return false;
        var area = 0, p1x, p1y, p2x, p2y;
        for (var i = offset, n = offset + count - 3; i < n; i += 2) {
            p1x = vertices[i];
            p1y = vertices[i + 1];
            p2x = vertices[i + 2];
            p2y = vertices[i + 3];
            area += p1x * p2y - p2x * p1y;
        }
        p1x = vertices[offset + count - 2];
        p1y = vertices[offset + count - 1];
        p2x = vertices[offset];
        p2y = vertices[offset + 1];
        return area + p1x * p2y - p2x * p1y < 0;
    };
    EarClippingTriangulator.computeSpannedAreaSign = function (p1x, p1y, p2x, p2y, p3x, p3y) {
        var area = p1x * (p3y - p2y);
        area += p2x * (p1y - p3y);
        area += p3x * (p2y - p1y);
        if (area === 0)
            return 0;
        return area > 0 ? 1 : -1;
    };
    EarClippingTriangulator.prototype.computeTriangles = function (vertices) {
        this.vertices = vertices;
        var offset = 0;
        var count = vertices.length;
        if ( true && count % 2 !== 0)
            throw new debugError["a" /* DebugError */]("wrong vertices size");
        var vertexCount = this.vertexCount = ~~(count / 2);
        var vertexOffset = ~~(offset / 2);
        this.indices = [];
        if (EarClippingTriangulator.areVerticesClockwise(vertices, offset, count)) {
            for (var i = 0; i < vertexCount; i++)
                this.indices[i] = vertexOffset + i;
        }
        else {
            for (var i = 0, n = vertexCount - 1; i < vertexCount; i++)
                this.indices[i] = vertexOffset + n - i;
        }
        var vertexTypes = [];
        for (var i = 0, n = vertexCount; i < n; ++i)
            vertexTypes.push(this.classifyVertex(i));
        var triangles = this.triangles = [];
        this.vertexTypes = vertexTypes;
        this.triangulate();
        return triangles;
    };
    EarClippingTriangulator.prototype.triangulate = function () {
        var vertexTypes = this.vertexTypes;
        var triangles = this.triangles;
        while (this.vertexCount > 3) {
            var earTipIndex = this.findEarTip();
            this.cutEarTip(earTipIndex);
            var previousIndex = this.previousIndex(earTipIndex);
            var nextIndex = earTipIndex === this.vertexCount ? 0 : earTipIndex;
            vertexTypes[previousIndex] = this.classifyVertex(previousIndex);
            vertexTypes[nextIndex] = this.classifyVertex(nextIndex);
        }
        if (this.vertexCount === 3) {
            var indices = this.indices;
            triangles.push(indices[0]);
            triangles.push(indices[1]);
            triangles.push(indices[2]);
        }
        this.vertexTypes = vertexTypes;
        this.triangles = triangles;
    };
    EarClippingTriangulator.prototype.classifyVertex = function (index) {
        var indices = this.indices;
        var previous = indices[this.previousIndex(index)] * 2;
        var current = indices[index] * 2;
        var next = indices[this.nextIndex(index)] * 2;
        var vertices = this.vertices;
        return EarClippingTriangulator.computeSpannedAreaSign(vertices[previous], vertices[previous + 1], vertices[current], vertices[current + 1], vertices[next], vertices[next + 1]);
    };
    EarClippingTriangulator.prototype.findEarTip = function () {
        var vertexCount = this.vertexCount;
        for (var i = 0; i < vertexCount; i++)
            if (this.isEarTip(i))
                return i;
        var vertexTypes = this.vertexTypes;
        for (var i = 0; i < vertexCount; i++)
            if (vertexTypes[i] !== EarClippingTriangulator._CONCAVE)
                return i;
        return 0;
    };
    EarClippingTriangulator.prototype.isEarTip = function (earTipIndex) {
        var vertexTypes = this.vertexTypes;
        if (vertexTypes[earTipIndex] === EarClippingTriangulator._CONCAVE)
            return false;
        var previousIndex = this.previousIndex(earTipIndex);
        var nextIndex = this.nextIndex(earTipIndex);
        var indices = this.indices;
        var p1 = indices[previousIndex] * 2;
        var p2 = indices[earTipIndex] * 2;
        var p3 = indices[nextIndex] * 2;
        var vertices = this.vertices;
        var p1x = vertices[p1], p1y = vertices[p1 + 1];
        var p2x = vertices[p2], p2y = vertices[p2 + 1];
        var p3x = vertices[p3], p3y = vertices[p3 + 1];
        for (var i = this.nextIndex(nextIndex); i !== previousIndex; i = this.nextIndex(i)) {
            if (vertexTypes[i] !== EarClippingTriangulator._CONVEX) {
                var v = indices[i] * 2;
                var vx = vertices[v];
                var vy = vertices[v + 1];
                if (EarClippingTriangulator.computeSpannedAreaSign(p3x, p3y, p1x, p1y, vx, vy) >= 0) {
                    if (EarClippingTriangulator.computeSpannedAreaSign(p1x, p1y, p2x, p2y, vx, vy) >= 0) {
                        if (EarClippingTriangulator.computeSpannedAreaSign(p2x, p2y, p3x, p3y, vx, vy) >= 0)
                            return false;
                    }
                }
            }
        }
        return true;
    };
    EarClippingTriangulator.prototype.cutEarTip = function (earTipIndex) {
        var indices = this.indices;
        var triangles = this.triangles;
        triangles.push(indices[this.previousIndex(earTipIndex)]);
        triangles.push(indices[earTipIndex]);
        triangles.push(indices[this.nextIndex(earTipIndex)]);
        this.triangles = triangles;
        this.indices.splice(earTipIndex, 1);
        this.vertexTypes.splice(earTipIndex, 1);
        this.vertexCount--;
    };
    EarClippingTriangulator.prototype.previousIndex = function (index) {
        return (index === 0 ? this.vertexCount : index) - 1;
    };
    EarClippingTriangulator.prototype.nextIndex = function (index) {
        return (index + 1) % this.vertexCount;
    };
    EarClippingTriangulator._CONCAVE = -1;
    EarClippingTriangulator._CONVEX = 1;
    return EarClippingTriangulator;
}());


// EXTERNAL MODULE: ./engine/renderable/impl/geometry/polyLine.ts + 1 modules
var polyLine = __webpack_require__(60);

// EXTERNAL MODULE: ./engine/renderable/impl/geometry/helpers/calcNormal.ts
var calcNormal = __webpack_require__(73);

// CONCATENATED MODULE: ./engine/renderable/impl/geometry/helpers/isPolylineClockWise.ts
var isPolylineCloseWise = function (vertices) {
    var sum = 0.0;
    var l = vertices.length;
    for (var i = 0; i < l; i += 2) {
        var v1x = vertices[i];
        var v1y = vertices[(i + 1) % l];
        var v2x = vertices[(i + 2) % l];
        var v2y = vertices[(i + 3) % l];
        sum += (v2x - v1x) * (v2y + v1y);
    }
    return sum > 0.0;
};

// CONCATENATED MODULE: ./engine/renderable/impl/geometry/polygon.ts








var polygon_PolygonPrimitive = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(PolygonPrimitive, _super);
    function PolygonPrimitive() {
        var _this = _super.call(this) || this;
        _this.vertexArr = [];
        return _this;
    }
    return PolygonPrimitive;
}(abstractPrimitive["a" /* AbstractPrimitive */]));
var polygon_Polygon = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(Polygon, _super);
    function Polygon(game) {
        var _this = _super.call(this, game) || this;
        _this.game = game;
        _this.type = 'Polygon';
        _this.invertY = false;
        _this.vertexItemSize = 2;
        return _this;
    }
    Polygon.fromMultiCurveSvgPath = function (game, path) {
        var polygons = [];
        path.split('\n').join(' ').split(/(.*?z)/gi).forEach(function (p) {
            if (!p.trim())
                return;
            var polygon = Polygon.fromSvgPath(game, p);
            polygons.push(polygon);
        });
        return polygons;
    };
    Polygon.createStar = function (game, points, radius, innerRadius, rotation) {
        if (innerRadius === void 0) { innerRadius = radius / 2; }
        if (rotation === void 0) { rotation = 0; }
        var startAngle = (-1 * Math.PI / 2) + rotation;
        var len = points * 2;
        var delta = Math.PI * 2 / len;
        var vertices = [];
        for (var i = 0; i < len; i++) {
            var r = i % 2 ? innerRadius : radius;
            var angle = (i * delta) + startAngle;
            vertices.push((r * Math.cos(angle)), (r * Math.sin(angle)));
        }
        vertices.push(vertices[0], vertices[1]);
        var p = polyLine["a" /* PolyLine */].fromPoints(game, vertices);
        return Polygon.fromPolyline(game, p);
    };
    Polygon.fromPolyline = function (game, p) {
        var vertices = [];
        p.children.forEach(function (l) {
            vertices.push(l.pos.x, l.pos.y);
        });
        if ( true && vertices.length <= 2)
            throw new debugError["a" /* DebugError */]("can not create polygon from polyline with vertices [" + vertices + "]");
        var triangulator = new earClippingTriangulator_EarClippingTriangulator();
        var triangulatedIndices = triangulator.computeTriangles(vertices);
        var triangulatedVertices = [];
        for (var _i = 0, triangulatedIndices_1 = triangulatedIndices; _i < triangulatedIndices_1.length; _i++) {
            var ind = triangulatedIndices_1[_i];
            triangulatedVertices.push(vertices[2 * ind], vertices[2 * ind + 1]);
        }
        var pg = new Polygon(game);
        pg.setVertices(triangulatedVertices);
        pg.size.set(p.size);
        pg._edgeVertices = vertices;
        return pg;
    };
    Polygon.fromSvgPath = function (game, p) {
        if ( true && p.split(/z/gi).length - 1 > 1)
            throw new debugError["a" /* DebugError */]("multiple closing operation ('z') in one svg path. Use static method Polygon.fromMultiCurveSvgPath() instead");
        var polyline = polyLine["a" /* PolyLine */].fromSvgPath(game, p);
        if ( true && !polyline.isClosed())
            throw new debugError["a" /* DebugError */]("can not create polygon from unclosed path");
        if ( true && !polyline.isInterrupted())
            throw new debugError["a" /* DebugError */]("can not create polygon from interrupted path");
        return Polygon.fromPolyline(game, polyline);
    };
    Polygon.fromPoints = function (game, points) {
        return Polygon.fromPolyline(game, polyLine["a" /* PolyLine */].fromPoints(game, points));
    };
    Polygon.prototype.extrudeToMesh = function (depth) {
        var _a;
        var isClockWise = isPolylineCloseWise(this._edgeVertices);
        var primitive = new (function (_super) {
            Object(tslib_es6["c" /* __extends */])(class_1, _super);
            function class_1() {
                var _this = _super.call(this) || this;
                _this.normalArr = [];
                _this.vertexArr = [];
                _this.normalArr = [];
                return _this;
            }
            return class_1;
        }(abstractPrimitive["a" /* AbstractPrimitive */]))();
        var d2 = depth / 2;
        for (var i = 0; i < this.modelPrimitive.vertexArr.length; i += 6) {
            var vertexA1 = this.modelPrimitive.vertexArr[i];
            var vertexA2 = this.modelPrimitive.vertexArr[i + 1];
            var vertexB1 = this.modelPrimitive.vertexArr[i + 2];
            var vertexB2 = this.modelPrimitive.vertexArr[i + 3];
            var vertexC1 = this.modelPrimitive.vertexArr[i + 4];
            var vertexC2 = this.modelPrimitive.vertexArr[i + 5];
            primitive.vertexArr.push(vertexA1, vertexA2, d2, vertexB1, vertexB2, d2, vertexC1, vertexC2, d2);
            primitive.normalArr.push(0, 0, 1, 0, 0, 1, 0, 0, 1);
            primitive.vertexArr.push(vertexA1, vertexA2, -d2, vertexB1, vertexB2, -d2, vertexC1, vertexC2, -d2);
            primitive.normalArr.push(0, 0, -1, 0, 0, -1, 0, 0, -1);
        }
        for (var i = 0; i < this._edgeVertices.length - 2; i += 2) {
            var edgeVertexA1 = this._edgeVertices[i];
            var edgeVertexA2 = this._edgeVertices[i + 1];
            var edgeVertexB1 = this._edgeVertices[i + 2];
            var edgeVertexB2 = this._edgeVertices[i + 3];
            if (!isClockWise) {
                _a = [edgeVertexB1, edgeVertexB2, edgeVertexA1, edgeVertexA2], edgeVertexA1 = _a[0], edgeVertexA2 = _a[1], edgeVertexB1 = _a[2], edgeVertexB2 = _a[3];
            }
            primitive.vertexArr.push(edgeVertexA1, edgeVertexA2, d2, edgeVertexB1, edgeVertexB2, d2, edgeVertexA1, edgeVertexA2, -d2, edgeVertexA1, edgeVertexA2, -d2, edgeVertexB1, edgeVertexB2, d2, edgeVertexB1, edgeVertexB2, -d2);
            var normal = Object(calcNormal["a" /* calcNormal */])({ x: edgeVertexA1, y: edgeVertexA2, z: d2 }, { x: edgeVertexB1, y: edgeVertexB2, z: d2 }, { x: edgeVertexA1, y: edgeVertexA2, z: -d2 });
            primitive.normalArr.push(normal.x, normal.y, normal.z, normal.x, normal.y, normal.z, normal.x, normal.y, normal.z, normal.x, normal.y, normal.z, normal.x, normal.y, normal.z, normal.x, normal.y, normal.z);
        }
        var game = this.game;
        var m = new (function (_super) {
            Object(tslib_es6["c" /* __extends */])(class_2, _super);
            function class_2() {
                var _this = _super.call(this, game) || this;
                _this.invertY = true;
                _this.modelPrimitive = primitive;
                _this.vertexItemSize = 3;
                return _this;
            }
            return class_2;
        }(mesh["a" /* Mesh */]))();
        this.setClonedProperties(m);
        m.depthTest = true;
        return m;
    };
    Polygon.prototype.setVertices = function (vertices) {
        this.modelPrimitive = new polygon_PolygonPrimitive();
        this.modelPrimitive.vertexArr = vertices;
    };
    return Polygon;
}(mesh["a" /* Mesh */]));



/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ellipse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _abstract_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _engine_geometry_point2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



var Ellipse = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(Ellipse, _super);
    function Ellipse(game) {
        var _this = _super.call(this, game) || this;
        _this.game = game;
        _this.type = 'Ellipse';
        _this.center = new _engine_geometry_point2d__WEBPACK_IMPORTED_MODULE_2__[/* Point2d */ "a"]();
        _this.arcAngleFrom = 0;
        _this.arcAngleTo = 0;
        _this.anticlockwise = false;
        _this.radiusX = 10;
        _this.radiusY = 20;
        _this.center.observe(function () {
            var maxR = _this._getMaxRadius();
            _this.pos.setXY(_this.center.x - maxR, _this.center.y - maxR);
        });
        _this.pos.observe(function () {
            var maxR = _this._getMaxRadius();
            _this.center.setXY(_this.pos.x + maxR, _this.pos.y + maxR);
        });
        return _this;
    }
    Object.defineProperty(Ellipse.prototype, "radiusX", {
        get: function () {
            return this._radiusX;
        },
        set: function (value) {
            if (this._radiusX === value)
                return;
            this._radiusX = value;
            this.size.setWH(this._getMaxRadius() * 2);
            this.center.forceTriggerChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "radiusY", {
        get: function () {
            return this._radiusY;
        },
        set: function (value) {
            if (this._radiusY === value)
                return;
            this._radiusY = value;
            this.size.setWH(this._getMaxRadius() * 2);
            this.center.forceTriggerChange();
        },
        enumerable: false,
        configurable: true
    });
    Ellipse.prototype.draw = function () {
        this.game.getRenderer().drawEllipse(this);
    };
    Ellipse.prototype.update = function () {
        _super.prototype.update.call(this);
    };
    Ellipse.prototype.clone = function () {
        var cloned = new Ellipse(this.game);
        this.setClonedProperties(cloned);
        return cloned;
    };
    Ellipse.prototype.setProps = function (props) {
        _super.prototype.setProps.call(this, props);
        if (props.center !== undefined)
            this.center.setXY(props.center.x, props.center.y);
        if (props.arcAngleFrom !== undefined)
            this.arcAngleFrom = props.arcAngleFrom;
        if (props.arcAngleTo !== undefined)
            this.arcAngleTo = props.arcAngleTo;
        if (props.anticlockwise !== undefined)
            this.anticlockwise = props.anticlockwise;
        if (props.radiusX !== undefined)
            this.radiusX = props.radiusX;
        if (props.radiusY !== undefined)
            this.radiusY = props.radiusY;
    };
    Ellipse.prototype.setClonedProperties = function (cloned) {
        cloned.radiusX = this.radiusX;
        cloned.radiusY = this.radiusY;
        cloned.arcAngleFrom = this.arcAngleFrom;
        cloned.arcAngleTo = this.arcAngleTo;
        cloned.anticlockwise = this.anticlockwise;
        _super.prototype.setClonedProperties.call(this, cloned);
    };
    Ellipse.prototype._getMaxRadius = function () {
        return this._radiusX > this._radiusY ? this._radiusX : this._radiusY;
    };
    return Ellipse;
}(_abstract_shape__WEBPACK_IMPORTED_MODULE_1__[/* Shape */ "a"]));



/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calcNormal; });
var calcNormal = function (p1, p2, p3) {
    var a = {
        x: p2.x - p1.x,
        y: p2.y - p1.y,
        z: p2.z - p1.z,
    };
    var b = {
        x: p3.x - p1.x,
        y: p3.y - p1.y,
        z: p3.z - p1.z,
    };
    var n = {
        x: a.y * b.z - a.z * b.y,
        y: a.z * b.x - a.x * b.z,
        z: a.x * b.y - a.y * b.x
    };
    var l = Math.sqrt(n.x * n.x + n.y * n.y + n.z * n.z);
    return {
        x: n.x / l,
        y: n.y / l,
        z: n.z / l
    };
};


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KEYBOARD_KEY; });
var KEYBOARD_KEY;
(function (KEYBOARD_KEY) {
    KEYBOARD_KEY[KEYBOARD_KEY["ENTER"] = 13] = "ENTER";
    KEYBOARD_KEY[KEYBOARD_KEY["DIGIT_0"] = 48] = "DIGIT_0";
    KEYBOARD_KEY[KEYBOARD_KEY["DIGIT_1"] = 49] = "DIGIT_1";
    KEYBOARD_KEY[KEYBOARD_KEY["DIGIT_2"] = 50] = "DIGIT_2";
    KEYBOARD_KEY[KEYBOARD_KEY["DIGIT_3"] = 51] = "DIGIT_3";
    KEYBOARD_KEY[KEYBOARD_KEY["DIGIT_4"] = 52] = "DIGIT_4";
    KEYBOARD_KEY[KEYBOARD_KEY["DIGIT_5"] = 53] = "DIGIT_5";
    KEYBOARD_KEY[KEYBOARD_KEY["DIGIT_6"] = 54] = "DIGIT_6";
    KEYBOARD_KEY[KEYBOARD_KEY["DIGIT_7"] = 55] = "DIGIT_7";
    KEYBOARD_KEY[KEYBOARD_KEY["DIGIT_8"] = 56] = "DIGIT_8";
    KEYBOARD_KEY[KEYBOARD_KEY["DIGIT_9"] = 57] = "DIGIT_9";
    KEYBOARD_KEY[KEYBOARD_KEY["SPACE"] = 32] = "SPACE";
    KEYBOARD_KEY[KEYBOARD_KEY["A"] = 65] = "A";
    KEYBOARD_KEY[KEYBOARD_KEY["B"] = 66] = "B";
    KEYBOARD_KEY[KEYBOARD_KEY["C"] = 67] = "C";
    KEYBOARD_KEY[KEYBOARD_KEY["D"] = 68] = "D";
    KEYBOARD_KEY[KEYBOARD_KEY["E"] = 69] = "E";
    KEYBOARD_KEY[KEYBOARD_KEY["F"] = 70] = "F";
    KEYBOARD_KEY[KEYBOARD_KEY["G"] = 71] = "G";
    KEYBOARD_KEY[KEYBOARD_KEY["H"] = 72] = "H";
    KEYBOARD_KEY[KEYBOARD_KEY["I"] = 73] = "I";
    KEYBOARD_KEY[KEYBOARD_KEY["J"] = 74] = "J";
    KEYBOARD_KEY[KEYBOARD_KEY["K"] = 75] = "K";
    KEYBOARD_KEY[KEYBOARD_KEY["L"] = 76] = "L";
    KEYBOARD_KEY[KEYBOARD_KEY["M"] = 77] = "M";
    KEYBOARD_KEY[KEYBOARD_KEY["N"] = 78] = "N";
    KEYBOARD_KEY[KEYBOARD_KEY["O"] = 79] = "O";
    KEYBOARD_KEY[KEYBOARD_KEY["P"] = 80] = "P";
    KEYBOARD_KEY[KEYBOARD_KEY["Q"] = 81] = "Q";
    KEYBOARD_KEY[KEYBOARD_KEY["R"] = 82] = "R";
    KEYBOARD_KEY[KEYBOARD_KEY["S"] = 83] = "S";
    KEYBOARD_KEY[KEYBOARD_KEY["T"] = 84] = "T";
    KEYBOARD_KEY[KEYBOARD_KEY["U"] = 85] = "U";
    KEYBOARD_KEY[KEYBOARD_KEY["V"] = 86] = "V";
    KEYBOARD_KEY[KEYBOARD_KEY["W"] = 87] = "W";
    KEYBOARD_KEY[KEYBOARD_KEY["X"] = 88] = "X";
    KEYBOARD_KEY[KEYBOARD_KEY["Y"] = 89] = "Y";
    KEYBOARD_KEY[KEYBOARD_KEY["Z"] = 90] = "Z";
    KEYBOARD_KEY[KEYBOARD_KEY["LEFT"] = 37] = "LEFT";
    KEYBOARD_KEY[KEYBOARD_KEY["UP"] = 38] = "UP";
    KEYBOARD_KEY[KEYBOARD_KEY["RIGHT"] = 39] = "RIGHT";
    KEYBOARD_KEY[KEYBOARD_KEY["DOWN"] = 40] = "DOWN";
    KEYBOARD_KEY[KEYBOARD_KEY["ALT"] = 18] = "ALT";
    KEYBOARD_KEY[KEYBOARD_KEY["BACKSPACE"] = 8] = "BACKSPACE";
    KEYBOARD_KEY[KEYBOARD_KEY["CAPS_LOCK"] = 20] = "CAPS_LOCK";
    KEYBOARD_KEY[KEYBOARD_KEY["ESC"] = 27] = "ESC";
    KEYBOARD_KEY[KEYBOARD_KEY["CONTROL"] = 17] = "CONTROL";
    KEYBOARD_KEY[KEYBOARD_KEY["DELETE"] = 46] = "DELETE";
    KEYBOARD_KEY[KEYBOARD_KEY["HOME"] = 36] = "HOME";
    KEYBOARD_KEY[KEYBOARD_KEY["END"] = 35] = "END";
    KEYBOARD_KEY[KEYBOARD_KEY["TAB"] = 9] = "TAB";
})(KEYBOARD_KEY || (KEYBOARD_KEY = {}));


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingSurface; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _engine_renderable_impl_geometry_rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _engine_renderable_impl_general_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _engine_geometry_point2d__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _engine_renderable_impl_geometry_line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65);
/* harmony import */ var _engine_renderable_impl_geometry_ellipse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71);
/* harmony import */ var _engine_renderable_impl_geometry_polygon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70);
/* harmony import */ var _engine_renderable_impl_geometry_polyLine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60);
/* harmony import */ var _engine_renderer_webGl_base_matrixStack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33);
/* harmony import */ var _engine_renderable_impl_general_nullGameObject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69);
/* harmony import */ var _engine_renderable_impl_geometry_helpers_splineFromPoints__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66);













var DrawingSurface = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(DrawingSurface, _super);
    function DrawingSurface(game, size) {
        var _this = _super.call(this, game) || this;
        _this.filters = [];
        _this.setResourceLink = undefined;
        _this.canvasImage = new _engine_renderable_impl_general_image__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "a"](_this.game);
        _this._rect = new _engine_renderable_impl_geometry_rectangle__WEBPACK_IMPORTED_MODULE_2__[/* Rectangle */ "a"](_this.game);
        _this._ellipse = new _engine_renderable_impl_geometry_ellipse__WEBPACK_IMPORTED_MODULE_7__[/* Ellipse */ "a"](_this.game);
        _this._line = new _engine_renderable_impl_geometry_line__WEBPACK_IMPORTED_MODULE_6__[/* Line */ "a"](_this.game);
        _this._nullGameObject = new _engine_renderable_impl_general_nullGameObject__WEBPACK_IMPORTED_MODULE_11__[/* NullGameObject */ "a"](_this.game);
        _this.fillColor = _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_3__[/* Color */ "a"].RGBA(0, 0, 0, 255);
        _this.drawColor = _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_3__[/* Color */ "a"].RGBA(0, 0, 0, 255);
        _this._lineWidth = 1;
        _this._pointMoveTo = new _engine_geometry_point2d__WEBPACK_IMPORTED_MODULE_5__[/* Point2d */ "a"]();
        _this._matrixStack = new _engine_renderer_webGl_base_matrixStack__WEBPACK_IMPORTED_MODULE_10__[/* MatrixStack */ "a"]();
        _this._omitSelfOnRendering = false;
        _this.size.set(size);
        _this.canvasImage.size.set(_this.size);
        _this._renderTarget = _this.game.getRenderer().getHelper().createRenderTarget(_this.game, size);
        _this.canvasImage.setResourceLink(_this._renderTarget.getResourceLink());
        _this.canvasImage.revalidate();
        return _this;
    }
    DrawingSurface.normalizeColor = function (col, g, b, a) {
        if (a === void 0) { a = 255; }
        if (b === undefined) {
            var color = _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_3__[/* Color */ "a"].fromRGBNumeric(col);
            color.a = g;
            return color;
        }
        else {
            return new _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_3__[/* Color */ "a"](col, g, b, a);
        }
    };
    DrawingSurface.prototype.clone = function () { return undefined; };
    DrawingSurface.prototype.draw = function () {
        if (this._omitSelfOnRendering)
            return;
        this.game.getRenderer().drawImage(this.canvasImage);
    };
    DrawingSurface.prototype.getResourceLink = function () {
        return this.canvasImage.getResourceLink();
    };
    DrawingSurface.prototype.setFillColor = function (col, g, b, a) {
        if (a === void 0) { a = 255; }
        this.fillColor.set(DrawingSurface.normalizeColor(col, g, b, a));
    };
    DrawingSurface.prototype.setDrawColor = function (col, g, b, a) {
        if (a === void 0) { a = 255; }
        this.drawColor.set(DrawingSurface.normalizeColor(col, g, b, a));
    };
    DrawingSurface.prototype.setLineWidth = function (v) {
        this._lineWidth = v;
    };
    DrawingSurface.prototype.transformReset = function () {
        this._matrixStack.resetTransform();
    };
    DrawingSurface.prototype.transformSet = function (v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15) {
        this._matrixStack.setMatrixValues(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15);
    };
    DrawingSurface.prototype.transformRestore = function () {
        this._matrixStack.resetTransform();
    };
    DrawingSurface.prototype.transformRotateX = function (angleInRadians) {
        this._matrixStack.rotateX(angleInRadians);
    };
    DrawingSurface.prototype.transformRotateY = function (angleInRadians) {
        this._matrixStack.rotateY(angleInRadians);
    };
    DrawingSurface.prototype.transformRotateZ = function (angleInRadians) {
        this._matrixStack.rotateZ(angleInRadians);
    };
    DrawingSurface.prototype.transformSave = function () {
        this._matrixStack.save();
    };
    DrawingSurface.prototype.transformScale = function (x, y, z) {
        this._matrixStack.scale(x, y, z);
    };
    DrawingSurface.prototype.transformSkewX = function (angle) {
        this._matrixStack.skewX(angle);
    };
    DrawingSurface.prototype.transformSkewY = function (angle) {
        this._matrixStack.skewY(angle);
    };
    DrawingSurface.prototype.transformTranslate = function (x, y, z) {
        this._matrixStack.translate(x, y, z);
    };
    DrawingSurface.prototype.clear = function () {
        this.drawModel(this._nullGameObject, _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_3__[/* Color */ "a"].NONE);
    };
    DrawingSurface.prototype.drawRoundedRect = function (x, y, width, height, radius) {
        this._rect.borderRadius = radius;
        this.drawRect(x, y, width, height);
    };
    DrawingSurface.prototype.drawRect = function (x, y, width, height) {
        this._rect.pos.setXY(x, y);
        this._rect.size.setWH(width, height);
        this.drawSimpleShape(this._rect);
        this._rect.borderRadius = 0;
    };
    DrawingSurface.prototype.drawCircle = function (cx, cy, radius) {
        this.drawEllipse(cx, cy, radius, radius);
    };
    DrawingSurface.prototype.drawEllipse = function (cx, cy, radiusX, radiusY) {
        this._ellipse.radiusX = radiusX;
        this._ellipse.radiusY = radiusY;
        this._ellipse.center.setXY(cx, cy);
        this._ellipse.arcAngleFrom = 0;
        this._ellipse.arcAngleTo = 0;
        this.drawSimpleShape(this._ellipse);
    };
    DrawingSurface.prototype.drawArc = function (cx, cy, radius, startAngle, endAngle, anticlockwise) {
        if (anticlockwise === void 0) { anticlockwise = false; }
        this._ellipse.radiusX = radius;
        this._ellipse.radiusY = radius;
        this._ellipse.center.setXY(cx, cy);
        this._ellipse.arcAngleFrom = startAngle;
        this._ellipse.arcAngleTo = endAngle;
        this._ellipse.anticlockwise = anticlockwise;
        var fillColor = this.fillColor;
        this.fillColor = _engine_renderer_common_color__WEBPACK_IMPORTED_MODULE_3__[/* Color */ "a"].NONE;
        this.drawSimpleShape(this._ellipse);
        this.fillColor = fillColor;
    };
    DrawingSurface.prototype.fillArc = function (cx, cy, radius, startAngle, endAngle, anticlockwise) {
        if (anticlockwise === void 0) { anticlockwise = false; }
        if (Math.abs(Math.abs(startAngle % (Math.PI * 2)) -
            Math.abs(endAngle % (Math.PI * 2))) <= 0.001) {
            var lineWidth = this._lineWidth;
            this._lineWidth = 0;
            this.drawCircle(cx, cy, radius);
            this._lineWidth = lineWidth;
        }
        else {
            if (anticlockwise) {
                var tmp = startAngle;
                startAngle = endAngle;
                endAngle = tmp + 2 * Math.PI;
            }
            var path = Object(_engine_renderable_impl_geometry_helpers_splineFromPoints__WEBPACK_IMPORTED_MODULE_12__[/* describeArc */ "b"])(cx, cy, radius, startAngle, endAngle, anticlockwise) + " z";
            var polygon = _engine_renderable_impl_geometry_polygon__WEBPACK_IMPORTED_MODULE_8__[/* Polygon */ "a"].fromSvgPath(this.game, path);
            polygon.fillColor = this.fillColor;
            this.drawModel(polygon);
        }
    };
    DrawingSurface.prototype.moveTo = function (x, y) {
        this._pointMoveTo.setXY(x, y);
    };
    DrawingSurface.prototype.lineTo = function (x, y) {
        this._line.setXYX1Y1(this._pointMoveTo.x, this._pointMoveTo.y, x, y);
        this.drawSimpleShape(this._line);
    };
    DrawingSurface.prototype.drawPolygon = function (pathOrVertices) {
        if (pathOrVertices.push !== undefined) {
            this.drawPolygonFromVertices(pathOrVertices);
        }
        else {
            this.drawPolygonFromSvgPath(pathOrVertices);
        }
    };
    DrawingSurface.prototype.drawPolyline = function (pathOrVertices) {
        var p;
        if (pathOrVertices.push !== undefined) {
            p = _engine_renderable_impl_geometry_polyLine__WEBPACK_IMPORTED_MODULE_9__[/* PolyLine */ "a"].fromPoints(this.game, pathOrVertices);
        }
        else {
            p = _engine_renderable_impl_geometry_polyLine__WEBPACK_IMPORTED_MODULE_9__[/* PolyLine */ "a"].fromSvgPath(this.game, pathOrVertices);
        }
        p.fillColor = this.fillColor;
        p.color = this.drawColor;
        p.lineWidth = this._lineWidth;
        this.drawModel(p);
    };
    DrawingSurface.prototype.drawModel = function (model, clearColor) {
        var renderer = this.game.getRenderer();
        renderer.transformSave();
        renderer.transformSet.apply(renderer, this._matrixStack.getCurrentValue().mat16);
        this.appendChild(model);
        this._omitSelfOnRendering = true;
        this.renderToTexture(this._renderTarget, clearColor);
        this._omitSelfOnRendering = false;
        this.removeChild(model);
        renderer.transformRestore();
    };
    DrawingSurface.prototype.destroy = function () {
        this._renderTarget.destroy();
    };
    DrawingSurface.prototype.drawPolygonFromSvgPath = function (svgPath) {
        var _this = this;
        var polyLines = _engine_renderable_impl_geometry_polyLine__WEBPACK_IMPORTED_MODULE_9__[/* PolyLine */ "a"].fromMultiCurveSvgPath(this.game, svgPath);
        polyLines.forEach(function (pl) {
            var pg = _engine_renderable_impl_geometry_polygon__WEBPACK_IMPORTED_MODULE_8__[/* Polygon */ "a"].fromPolyline(_this.game, pl);
            pg.fillColor = _this.fillColor;
            _this.drawModel(pg);
        });
        if (this._lineWidth > 0) {
            polyLines.forEach(function (pl) {
                pl.color = _this.drawColor;
                pl.lineWidth = _this._lineWidth;
                _this.drawModel(pl);
            });
        }
    };
    DrawingSurface.prototype.drawPolygonFromVertices = function (vertices) {
        var prev = vertices[vertices.length - 2];
        var last = vertices[vertices.length - 1];
        var first = vertices[0];
        var next = vertices[1];
        if (last !== next && prev !== first)
            vertices = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArrays */ "e"])(vertices, [first, next]);
        var pl = _engine_renderable_impl_geometry_polyLine__WEBPACK_IMPORTED_MODULE_9__[/* PolyLine */ "a"].fromPoints(this.game, vertices);
        pl.color = this.drawColor;
        var pg = _engine_renderable_impl_geometry_polygon__WEBPACK_IMPORTED_MODULE_8__[/* Polygon */ "a"].fromPolyline(this.game, pl);
        pg.fillColor = this.fillColor;
        this.drawModel(pg);
        if (this._lineWidth > 0) {
            pl.lineWidth = this._lineWidth;
            this.drawModel(pl);
        }
    };
    DrawingSurface.prototype.prepareShape = function (shape) {
        shape.fillColor = this.fillColor;
        shape.lineWidth = this._lineWidth;
        shape.color = this.drawColor;
        shape.blendMode = _engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_1__[/* BLEND_MODE */ "a"].NORMAL_SEPARATE;
    };
    DrawingSurface.prototype.drawSimpleShape = function (shape) {
        this.prepareShape(shape);
        this.drawModel(shape);
    };
    return DrawingSurface;
}(_engine_renderable_abstract_renderableModel__WEBPACK_IMPORTED_MODULE_1__[/* RenderableModel */ "b"]));



/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BLEND_MODE; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ renderableModel_RenderableModel; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./engine/debug/debugError.ts
var debugError = __webpack_require__(0);

// EXTERNAL MODULE: ./engine/geometry/point2d.ts
var point2d = __webpack_require__(4);

// EXTERNAL MODULE: ./engine/geometry/rect.ts
var rect = __webpack_require__(11);

// EXTERNAL MODULE: ./engine/delegates/tweenableDelegate.ts
var tweenableDelegate = __webpack_require__(41);

// EXTERNAL MODULE: ./engine/delegates/timerDelegate.ts + 1 modules
var timerDelegate = __webpack_require__(46);

// EXTERNAL MODULE: ./engine/delegates/eventEmitterDelegate.ts + 1 modules
var eventEmitterDelegate = __webpack_require__(36);

// EXTERNAL MODULE: ./engine/resources/incrementer.ts
var incrementer = __webpack_require__(38);

// EXTERNAL MODULE: ./engine/delegates/parentChildDelegate.ts
var parentChildDelegate = __webpack_require__(40);

// EXTERNAL MODULE: ./engine/geometry/size.ts
var size = __webpack_require__(7);

// CONCATENATED MODULE: ./engine/core/baseModel.ts



var baseModel_BaseModel = (function () {
    function BaseModel(game) {
        this.game = game;
        this.size = new size["a" /* Size */]();
        this.pos = new point2d["a" /* Point2d */](0, 0);
        this.posZ = 0;
        if ( true && !game)
            throw new debugError["a" /* DebugError */]("can not create model '" + this.type + "': game instance not passed to model constructor");
    }
    return BaseModel;
}());


// EXTERNAL MODULE: ./engine/geometry/mat4.ts
var mat4 = __webpack_require__(2);

// EXTERNAL MODULE: ./engine/geometry/abstract/observableEntity.ts
var observableEntity = __webpack_require__(16);

// CONCATENATED MODULE: ./engine/renderable/abstract/transformableModel.ts





var Mat16Holder = mat4["a" /* mat4 */].Mat16Holder;

var transformableModel_AnglePoint3d = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(AnglePoint3d, _super);
    function AnglePoint3d(m, zProperty) {
        var _this = _super.call(this) || this;
        _this.m = m;
        _this.zProperty = zProperty;
        _this._x = 0;
        _this._y = 0;
        _this._z = 0;
        return _this;
    }
    Object.defineProperty(AnglePoint3d.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (val) {
            if (val !== this.m[this.zProperty]) {
                this.m[this.zProperty] = val;
                this.triggerObservable();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnglePoint3d.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (this._x !== value) {
                this._x = value;
                this.triggerObservable();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnglePoint3d.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (this._y !== value) {
                this._y = value;
                this.triggerObservable();
            }
        },
        enumerable: false,
        configurable: true
    });
    AnglePoint3d.prototype._setZSilently = function (val) {
        this._z = val;
    };
    AnglePoint3d.prototype.clone = function (m) {
        var a = new AnglePoint3d(m, this.zProperty);
        a._x = this._x;
        a._y = this._y;
        a.z = this.z;
        return a;
    };
    return AnglePoint3d;
}(observableEntity["a" /* ObservableEntity */]));
var transformableModel_ModelPoint2d = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(ModelPoint2d, _super);
    function ModelPoint2d(model) {
        var _this = _super.call(this) || this;
        _this.model = model;
        return _this;
    }
    ModelPoint2d.prototype.setToCenter = function () {
        this.model.revalidate();
        if ( true && !(this.model.size.width && this.model.size.height))
            throw new debugError["a" /* DebugError */]("can not set anchor to center: width or height of transformable object is not set");
        this.setXY(this.model.size.width / 2, this.model.size.height / 2);
    };
    return ModelPoint2d;
}(point2d["a" /* Point2d */]));
var transformableModel_TransformableModel = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(TransformableModel, _super);
    function TransformableModel(game) {
        var _this = _super.call(this, game) || this;
        _this.game = game;
        _this.worldTransformMatrix = new Mat16Holder();
        _this.worldTransformDirty = true;
        _this.children = [];
        _this.scale = new point2d["a" /* Point2d */](1, 1);
        _this.skew = new point2d["a" /* Point2d */](0, 0);
        _this.anchorPoint = new transformableModel_ModelPoint2d(_this);
        _this.transformPoint = new transformableModel_ModelPoint2d(_this);
        _this.angle3d = new transformableModel_AnglePoint3d(_this, 'angle');
        _this.billBoard = false;
        _this._angleVelocity3d = new transformableModel_AnglePoint3d(_this, 'angleVelocity');
        _this._angle = 0;
        var observer = function () { return _this.worldTransformDirty = true; };
        _this.pos.observe(observer);
        _this.scale.observe(observer);
        _this.transformPoint.observe(observer);
        _this.anchorPoint.observe(observer);
        _this.angle3d.observe(observer);
        return _this;
    }
    Object.defineProperty(TransformableModel.prototype, "angle", {
        get: function () {
            return this._angle;
        },
        set: function (val) {
            if (this._angle !== val)
                this.worldTransformDirty = true;
            this._angle = val;
            this.angle3d._setZSilently(val);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformableModel.prototype, "angleVelocity", {
        get: function () {
            return this._angleVelocity3d.z;
        },
        set: function (val) {
            this._angleVelocity3d._setZSilently(val);
        },
        enumerable: false,
        configurable: true
    });
    TransformableModel.prototype.translate = function () {
        var renderer = this.game.getRenderer();
        renderer.transformTranslate(this.pos.x, this.pos.y);
    };
    TransformableModel.prototype.transform = function () {
        var renderer = this.game.getRenderer();
        renderer.transformTranslate(-this.anchorPoint.x, -this.anchorPoint.y, this.posZ);
        renderer.transformTranslate(this.transformPoint.x, this.transformPoint.y);
        renderer.transformRotateZ(this.angle3d.z);
        renderer.transformRotateX(this.angle3d.x);
        renderer.transformRotateY(this.angle3d.y);
        var _a = this.scale.toArray(), x = _a[0], y = _a[1], z = _a[2];
        renderer.transformScale(x, y, z);
        renderer.transformSkewX(this.skew.x);
        renderer.transformSkewY(this.skew.y);
        renderer.transformTranslate(-this.transformPoint.x, -this.transformPoint.y);
        if (this.billBoard)
            renderer.transformRotationReset();
    };
    TransformableModel.prototype.setProps = function (props) {
        if (props.pos !== undefined)
            this.pos.set(props.pos);
        if (props.size !== undefined)
            this.size.set(props.size);
        if (props.scale !== undefined)
            this.scale.set(props.scale);
    };
    TransformableModel.prototype.setClonedProperties = function (cloned) {
        cloned.angle = this.angle;
        cloned.angleVelocity = this.angleVelocity;
        cloned.pos.set(this.pos);
        cloned.scale.set(this.scale);
        cloned.anchorPoint.set(this.anchorPoint);
        cloned.skew.set(this.skew);
        cloned.transformPoint.set(this.transformPoint);
        var angle3dCloned = this.angle3d.clone(this);
        cloned.angle3d.x = angle3dCloned.x;
        cloned.angle3d.y = angle3dCloned.y;
        cloned.angle3d.z = angle3dCloned.z;
    };
    return TransformableModel;
}(baseModel_BaseModel));


// CONCATENATED MODULE: ./engine/renderable/abstract/renderableModel.ts










var BLEND_MODE;
(function (BLEND_MODE) {
    BLEND_MODE[BLEND_MODE["NORMAL"] = 0] = "NORMAL";
    BLEND_MODE[BLEND_MODE["NORMAL_SEPARATE"] = 1] = "NORMAL_SEPARATE";
    BLEND_MODE[BLEND_MODE["ADDITIVE"] = 2] = "ADDITIVE";
    BLEND_MODE[BLEND_MODE["SUBSTRACTIVE"] = 3] = "SUBSTRACTIVE";
    BLEND_MODE[BLEND_MODE["REVERSE_SUBSTRACTIVE"] = 4] = "REVERSE_SUBSTRACTIVE";
})(BLEND_MODE || (BLEND_MODE = {}));
var renderableModel_RenderableModel = (function (_super) {
    Object(tslib_es6["c" /* __extends */])(RenderableModel, _super);
    function RenderableModel(game) {
        var _this = _super.call(this, game) || this;
        _this.game = game;
        _this.alpha = 1;
        _this.visible = true;
        _this.blendMode = BLEND_MODE.NORMAL;
        _this.depthTest = false;
        _this.filters = [];
        _this.forceDrawChildrenOnNewSurface = false;
        _this.children = [];
        _this.velocity = new point2d["a" /* Point2d */](0, 0);
        _this.passMouseEventsThrough = false;
        _this._destRect = new rect["a" /* Rect */]();
        _this._behaviours = [];
        _this._propertyAnimations = [];
        _this._tweenDelegate = new tweenableDelegate["a" /* TweenableDelegate */]();
        _this._timerDelegate = new timerDelegate["a" /* TimerDelegate */]();
        _this._eventEmitterDelegate = new eventEmitterDelegate["a" /* EventEmitterDelegate */]();
        _this._parentChildDelegate = new parentChildDelegate["a" /* ParentChildDelegate */](_this);
        _this.id = "object_" + incrementer["a" /* Incrementer */].getValue();
        _this._parentChildDelegate.afterChildAppended = function (child) {
            child.setLayer(_this._layer);
            child.setScene(_this.game.getCurrScene());
            child.revalidate();
        };
        _this._parentChildDelegate.afterChildRemoved = function (child) {
            child.setLayer(undefined);
            child.setScene(undefined);
        };
        return _this;
    }
    RenderableModel.prototype.revalidate = function () {
        for (var _i = 0, _a = this._behaviours; _i < _a.length; _i++) {
            var b = _a[_i];
            b.revalidate();
        }
    };
    RenderableModel.prototype.getLayer = function () {
        return this._layer;
    };
    RenderableModel.prototype.setLayer = function (value) {
        this._layer = value;
    };
    RenderableModel.prototype.getScene = function () {
        return this._scene;
    };
    RenderableModel.prototype.setScene = function (value) {
        this._scene = value;
    };
    RenderableModel.prototype.getDestRect = function () {
        this._destRect.setPoint(this.pos);
        this._destRect.setSize(this.size);
        return this._destRect;
    };
    RenderableModel.prototype.addBehaviour = function (b) {
        this._behaviours.push(b);
        b.manage(this);
    };
    RenderableModel.prototype.addPropertyAnimation = function (animation) {
        animation.target = this;
        this._propertyAnimations.push(animation);
    };
    RenderableModel.prototype.setWH = function (w, h) {
        if (h === void 0) { h = w; }
        this.setXYWH(this.pos.x, this.pos.y, w, h);
    };
    RenderableModel.prototype.setXYWH = function (x, y, w, h) {
        this.pos.setXY(x, y);
        this.size.setWH(w, h);
    };
    RenderableModel.prototype.setRigidBody = function (rigidBody) {
        this._rigidBody = rigidBody;
        rigidBody.updateBounds(this);
    };
    RenderableModel.prototype.getRigidBody = function () {
        return this._rigidBody;
    };
    RenderableModel.prototype.destroy = function () {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var c = _a[_i];
            c.destroy();
        }
        if ( true && !this.getParent())
            throw new debugError["a" /* DebugError */]("can not kill object: gameObject is detached");
        var parentArray = this.getParent().children;
        var index = parentArray.indexOf(this);
        if ( true && index === -1) {
            console.error(this);
            throw new debugError["a" /* DebugError */]('can not kill: object is not belong to current scene');
        }
        parentArray.splice(index, 1);
        for (var _b = 0, _c = this._behaviours; _b < _c.length; _b++) {
            var b = _c[_b];
            b.destroy();
        }
        this.game.getRenderer().killObject(this);
    };
    RenderableModel.prototype.render = function () {
        if (!this.visible)
            return;
        if (this.alpha === 0)
            return;
        var renderer = this.game.getRenderer();
        if (renderer.getAlphaBlend() === 0)
            return;
        renderer.saveAlphaBlend();
        renderer.transformSave();
        if (this.game.camera.worldTransformDirty || this.worldTransformDirty) {
            this.translate();
            this.transform();
            this.worldTransformMatrix.fromMat16(renderer.transformGet());
        }
        else {
            renderer.transformSet.apply(renderer, this.worldTransformMatrix.mat16);
        }
        renderer.setAlphaBlend(this.alpha);
        var statePointer = renderer.beforeItemStackDraw(this.filters, this.forceDrawChildrenOnNewSurface);
        this.draw();
        if (this.children.length > 0) {
            renderer.transformSave();
            renderer.saveAlphaBlend();
            renderer.transformTranslate(this.anchorPoint.x, this.anchorPoint.y);
            for (var i = 0, max = this.children.length; i < max; i++) {
                var c = this.children[i];
                c.worldTransformDirty = this.worldTransformDirty || c.worldTransformDirty;
                c.render();
            }
            renderer.transformRestore();
            renderer.restoreAlphaBlend();
        }
        renderer.afterItemStackDraw(statePointer);
        renderer.transformRestore();
        renderer.restoreAlphaBlend();
        this.worldTransformDirty = false;
        if ( true && this._rigidBody !== undefined)
            this._rigidBody.debugRender();
    };
    RenderableModel.prototype.update = function () {
        var delta = this.game.getDeltaTime();
        this._tweenDelegate.update();
        this._timerDelegate.update();
        for (var _i = 0, _a = this._behaviours; _i < _a.length; _i++) {
            var bh = _a[_i];
            bh.update();
        }
        for (var _b = 0, _c = this._propertyAnimations; _b < _c.length; _b++) {
            var pa = _c[_b];
            pa.update();
        }
        if (this._rigidBody !== undefined) {
            this._rigidBody.nextTick();
        }
        else {
            if (this.velocity.x)
                this.pos.x += this.velocity.x * delta / 1000;
            if (this.velocity.y)
                this.pos.y += this.velocity.y * delta / 1000;
        }
        if (this._angleVelocity3d.x)
            this.angle3d.x += this._angleVelocity3d.x * delta / 1000;
        if (this._angleVelocity3d.y)
            this.angle3d.y += this._angleVelocity3d.y * delta / 1000;
        if (this._angleVelocity3d.z)
            this.angle3d.z += this._angleVelocity3d.z * delta / 1000;
        for (var _d = 0, _e = this.children; _d < _e.length; _d++) {
            var c = _e[_d];
            c.update();
        }
    };
    RenderableModel.prototype.addTween = function (t) {
        this._tweenDelegate.addTween(t);
    };
    RenderableModel.prototype.addTweenMovie = function (tm) {
        this._tweenDelegate.addTweenMovie(tm);
    };
    RenderableModel.prototype.tween = function (desc) {
        return this._tweenDelegate.tween(desc);
    };
    RenderableModel.prototype.setTimeout = function (callback, interval) {
        return this._timerDelegate.setTimeout(callback, interval);
    };
    RenderableModel.prototype.setInterval = function (callback, interval) {
        return this._timerDelegate.setInterval(callback, interval);
    };
    RenderableModel.prototype.off = function (eventName, callBack) {
        this._eventEmitterDelegate.off(eventName, callBack);
    };
    RenderableModel.prototype.on = function (eventName, callBack) {
        return this._eventEmitterDelegate.on(eventName, callBack);
    };
    RenderableModel.prototype.once = function (eventName, callBack) {
        this._eventEmitterDelegate.once(eventName, callBack);
    };
    RenderableModel.prototype.trigger = function (eventName, data) {
        this._eventEmitterDelegate.trigger(eventName, data);
    };
    RenderableModel.prototype.appendChild = function (newChild) {
        this._parentChildDelegate.appendChild(newChild);
    };
    RenderableModel.prototype.appendChildAt = function (newChild, index) {
        this._parentChildDelegate.appendChildAt(newChild, index);
    };
    RenderableModel.prototype.appendChildAfter = function (modelAfter, newChild) {
        this._parentChildDelegate.appendChildAfter(modelAfter, newChild);
    };
    RenderableModel.prototype.appendChildBefore = function (modelBefore, newChild) {
        this._parentChildDelegate.appendChildBefore(modelBefore, newChild);
    };
    RenderableModel.prototype.prependChild = function (newChild) {
        this._parentChildDelegate.prependChild(newChild);
    };
    RenderableModel.prototype.removeChild = function (c) {
        this._parentChildDelegate.removeChild(c);
    };
    RenderableModel.prototype.getParentNode = function () {
        return undefined;
    };
    RenderableModel.prototype.removeChildAt = function (i) {
        this._parentChildDelegate.removeChildAt(i);
    };
    RenderableModel.prototype.removeChildren = function () {
        this._parentChildDelegate.removeChildren();
    };
    RenderableModel.prototype.removeSelf = function () {
        this._parentChildDelegate.removeSelf();
    };
    RenderableModel.prototype.moveToFront = function () {
        this._parentChildDelegate.moveToFront();
    };
    RenderableModel.prototype.moveToBack = function () {
        this._parentChildDelegate.moveToBack();
    };
    RenderableModel.prototype.findChildById = function (id) {
        return this._parentChildDelegate.findChildById(id);
    };
    RenderableModel.prototype.replaceChild = function (c, newChild) {
        this._parentChildDelegate.replaceChild(c, newChild);
    };
    RenderableModel.prototype.getParent = function () {
        return this.parent || this._layer;
    };
    RenderableModel.prototype.getChildAt = function (index) {
        return this.children[index];
    };
    RenderableModel.prototype.getChildren = function () {
        return this.children;
    };
    RenderableModel.prototype.renderToTexture = function (target, clearColor) {
        this.game.getRenderer().getHelper().renderModelToTexture(this, target, clearColor);
    };
    RenderableModel.prototype.isDetached = function () {
        return this._scene === undefined;
    };
    RenderableModel.prototype.setClonedProperties = function (cloned) {
        cloned.size.set(cloned.size);
        cloned.alpha = this.alpha;
        cloned.blendMode = this.blendMode;
        cloned.visible = this.visible;
        cloned.filters = Object(tslib_es6["e" /* __spreadArrays */])(this.filters);
        cloned.forceDrawChildrenOnNewSurface = this.forceDrawChildrenOnNewSurface;
        if (this.getRigidBody() !== undefined)
            cloned.setRigidBody(this.getRigidBody().clone());
        this.children.forEach(function (c) {
            if ( true && !('clone' in c)) {
                console.error(c);
                throw new debugError["a" /* DebugError */]("can not clone object: cloneable interface is not implemented");
            }
            var clonedChildren = c.clone();
            if ( true && !(clonedChildren instanceof RenderableModel)) {
                console.error(c);
                throw new debugError["a" /* DebugError */]("can not clone object: \"clone\"  method must return Cloneable object");
            }
            cloned.appendChild(clonedChildren);
        });
        cloned.game = this.game;
        _super.prototype.setClonedProperties.call(this, cloned);
    };
    return RenderableModel;
}(transformableModel_TransformableModel));



/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SCALE_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var _engine_misc_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _engine_misc_polyfills__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_engine_misc_polyfills__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderer_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _geometry_point2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _scene_scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _debug_debugError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _engine_misc_collection_stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _engine_geometry_size__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _engine_scene_sceneLifeCicleState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);








var SCALE_STRATEGY;
(function (SCALE_STRATEGY) {
    SCALE_STRATEGY[SCALE_STRATEGY["NO_SCALE"] = 0] = "NO_SCALE";
    SCALE_STRATEGY[SCALE_STRATEGY["FIT"] = 1] = "FIT";
    SCALE_STRATEGY[SCALE_STRATEGY["STRETCH"] = 2] = "STRETCH";
})(SCALE_STRATEGY || (SCALE_STRATEGY = {}));
var Game = (function () {
    function Game(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? 320 : _c, _d = _b.height, height = _d === void 0 ? 240 : _d, _e = _b.scaleStrategy, scaleStrategy = _e === void 0 ? SCALE_STRATEGY.FIT : _e;
        this.size = new _engine_geometry_size__WEBPACK_IMPORTED_MODULE_6__[/* Size */ "a"]();
        this.scale = new _geometry_point2d__WEBPACK_IMPORTED_MODULE_2__[/* Point2d */ "a"](1, 1);
        this.pos = new _geometry_point2d__WEBPACK_IMPORTED_MODULE_2__[/* Point2d */ "a"](0, 0);
        this.camera = new _renderer_camera__WEBPACK_IMPORTED_MODULE_1__[/* Camera */ "a"](this);
        this.fps = 0;
        this._scaleStrategy = SCALE_STRATEGY.FIT;
        this._startedTime = 0;
        this._lastTime = 0;
        this._currTime = 0;
        this._deltaTime = 0;
        this._sceneStack = new _engine_misc_collection_stack__WEBPACK_IMPORTED_MODULE_5__[/* Stack */ "a"]();
        this._running = false;
        this._destroyed = false;
        this._controls = [];
        this._mainLoop = new MainLoop(this);
        Game._instance = this;
        if (true)
            window.game = this;
        this.size.setWH(width, height);
        this._scaleStrategy = scaleStrategy;
        this._startedTime = Date.now();
    }
    Game.getInstance = function () {
        return Game._instance;
    };
    Object.defineProperty(Game.prototype, "scaleStrategy", {
        get: function () {
            return this._scaleStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.addControl = function (C) {
        var instance = new C(this);
        if (true) {
            for (var _i = 0, _a = this._controls; _i < _a.length; _i++) {
                var c = _a[_i];
                if (c.type === instance.type) {
                    throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_4__[/* DebugError */ "a"]("control with type \"" + c.type + "\" added already");
                }
            }
        }
        this._controls.push(instance);
        instance.listenTo();
    };
    Game.prototype.hasControl = function (type) {
        return this.getControl(type) !== undefined;
    };
    Game.prototype.getControl = function (type) {
        for (var _i = 0, _a = this._controls; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.type === type) {
                return c;
            }
        }
        return undefined;
    };
    Game.prototype.setPhysicsSystem = function (s) {
        this._physicsSystem = new s(this);
    };
    Game.prototype.getPhysicsSystem = function () {
        if ( true && this._physicsSystem === undefined)
            throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_4__[/* DebugError */ "a"]("Physics system is not initialized.");
        return this._physicsSystem;
    };
    Game.prototype.hasPhysicsSystem = function () {
        return this._physicsSystem !== undefined;
    };
    Game.prototype.setAudioPLayer = function (p) {
        this._audioPlayer = new p(this);
    };
    Game.prototype.getAudioPlayer = function () {
        if ( true && !this._audioPlayer) {
            throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_4__[/* DebugError */ "a"]('audio player is not set');
        }
        return this._audioPlayer;
    };
    Game.prototype.getCurrentTime = function () {
        return this._lastTime;
    };
    Game.prototype.getDeltaTime = function () {
        return this._deltaTime;
    };
    Game.prototype.getElapsedTime = function () {
        return this._lastTime - this._startedTime;
    };
    Game.prototype.log = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (true)
            (_a = this._renderer).log.apply(_a, args);
    };
    Game.prototype.clearLog = function () {
        if (true)
            this._renderer.clearLog();
    };
    Game.prototype.setRenderer = function (Renderer) {
        this._renderer = new Renderer(this);
    };
    Game.prototype.getRenderer = function () {
        return this._renderer;
    };
    Game.prototype.runScene = function (scene, transition, replaceStack) {
        var _this = this;
        if (replaceStack === void 0) { replaceStack = true; }
        if (replaceStack)
            this._sceneStack.replaceLast({ scene: scene, transition: transition });
        this._prevScene = this._currScene;
        if (this._prevScene !== undefined) {
            this._prevScene.trigger(_scene_scene__WEBPACK_IMPORTED_MODULE_3__[/* SCENE_EVENTS */ "a"].INACTIVATED, undefined);
            this._prevScene.onInactivated();
            this._prevScene.lifeCycleState = _engine_scene_sceneLifeCicleState__WEBPACK_IMPORTED_MODULE_7__[/* SceneLifeCycleState */ "a"].INACTIVATED;
        }
        this._currScene = scene;
        if (this._currSceneTransition !== undefined) {
            this._currSceneTransition.complete();
            this._currSceneTransition = undefined;
        }
        if (transition !== undefined) {
            this._currSceneTransition = transition;
            transition.start(this._prevScene, this._currScene);
            transition.onComplete(function () { return _this._currSceneTransition = undefined; });
        }
        this.revalidate();
        if (!scene.resourceLoader.isCompleted()) {
            this._currScene.trigger(_scene_scene__WEBPACK_IMPORTED_MODULE_3__[/* SCENE_EVENTS */ "a"].PRELOADING);
            scene.onPreloading();
            scene.resourceLoader.onProgress(function () {
                _this._currScene.trigger(_scene_scene__WEBPACK_IMPORTED_MODULE_3__[/* SCENE_EVENTS */ "a"].PROGRESS);
                scene.onProgress(scene.resourceLoader.getProgress());
                _this._currScene.lifeCycleState = _engine_scene_sceneLifeCicleState__WEBPACK_IMPORTED_MODULE_7__[/* SceneLifeCycleState */ "a"].PRELOADING;
            });
            scene.resourceLoader.onCompleted(function () {
                _this._currScene.onReady();
                _this._currScene.onContinue();
                _this._currScene.trigger(_scene_scene__WEBPACK_IMPORTED_MODULE_3__[/* SCENE_EVENTS */ "a"].COMPLETED);
                _this._currScene.lifeCycleState = _engine_scene_sceneLifeCicleState__WEBPACK_IMPORTED_MODULE_7__[/* SceneLifeCycleState */ "a"].COMPLETED;
            });
            scene.resourceLoader.startLoading();
        }
        else {
            this._currScene.trigger(_scene_scene__WEBPACK_IMPORTED_MODULE_3__[/* SCENE_EVENTS */ "a"].CONTINUE);
            this._currScene.lifeCycleState = _engine_scene_sceneLifeCicleState__WEBPACK_IMPORTED_MODULE_7__[/* SceneLifeCycleState */ "a"].COMPLETED;
            this._currScene.onContinue();
        }
        if (!this._running) {
            this._mainLoop.start();
            this._running = true;
        }
    };
    Game.prototype.pushScene = function (scene, transition) {
        this.runScene(scene, transition, false);
        this._sceneStack.push({ scene: scene, transition: transition });
    };
    Game.prototype.popScene = function () {
        var last = this._sceneStack.pop();
        if ( true && !last)
            throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_4__[/* DebugError */ "a"]("can not pop scene: no scene in stack");
        var transition = last.transition ? last.transition.getOppositeTransition() : undefined;
        var prevScene = this._sceneStack.getLast().scene;
        this.runScene(prevScene, transition);
    };
    Game.prototype.getCurrScene = function () {
        if ( true && !this._currScene)
            throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_4__[/* DebugError */ "a"]("current scene is not set yet");
        return this._currScene;
    };
    Game.prototype.update = function () {
        if (this._destroyed)
            return;
        this._lastTime = this._currTime;
        this._currTime = Date.now();
        var currTimeCopy = this._currTime;
        if (!this._lastTime)
            this._lastTime = this._currTime;
        this._deltaTime = this._currTime - this._lastTime;
        if (true) {
            this.fps = ~~(1000 / this._deltaTime);
            var renderError = this._renderer.getError();
            if (renderError !== undefined) {
                throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_4__[/* DebugError */ "a"]("rendering error with code " + renderError.code + " (" + renderError.desc + ")");
            }
        }
        var numOfLoops = (~~(this._deltaTime / Game._UPDATE_TIME_RATE)) || 1;
        this._currTime = this._currTime - numOfLoops * Game._UPDATE_TIME_RATE;
        var currentScene = this._currScene;
        var loopCnt = 0;
        do {
            this._lastTime = this._currTime;
            this._currTime += Game._UPDATE_TIME_RATE;
            this._deltaTime = this._currTime - this._lastTime;
            if (this._currSceneTransition !== undefined)
                this._currSceneTransition.update();
            else
                currentScene.update();
            for (var _i = 0, _a = this._controls; _i < _a.length; _i++) {
                var c = _a[_i];
                c.update();
            }
            loopCnt++;
            if (loopCnt > 10) {
                this._lastTime = this._currTime = currTimeCopy;
                break;
            }
        } while (loopCnt < numOfLoops);
        if (this._currSceneTransition !== undefined)
            this._currSceneTransition.render();
        else
            currentScene.render();
        this.camera.worldTransformDirty = false;
    };
    Game.prototype.destroy = function () {
        this._mainLoop.stop();
        this._destroyed = true;
        for (var _i = 0, _a = this._controls; _i < _a.length; _i++) {
            var c = _a[_i];
            c.destroy();
        }
        if (this._renderer) {
            this._renderer.cancelFullScreen();
            this._renderer.destroy();
        }
        if (this._audioPlayer)
            this._audioPlayer.stopAll();
    };
    Game.prototype.revalidate = function () {
        if ( true && !this._renderer)
            throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_4__[/* DebugError */ "a"]("game renderer is not set");
        this.camera.revalidate();
    };
    Game._UPDATE_TIME_RATE = 20;
    return Game;
}());

if (true) {
    var _cnt_1 = 0;
    Game.prototype.debug2 = function () {
        var val = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            val[_i] = arguments[_i];
        }
        console.log(val);
        _cnt_1++;
        if (_cnt_1 > 16)
            throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_4__[/* DebugError */ "a"]('too many logs');
    };
    if (!window.__POLYFILLS_INCLUDED__)
        throw new _debug_debugError__WEBPACK_IMPORTED_MODULE_4__[/* DebugError */ "a"]("polyfills module is not included!");
}
if (true) {
    var now = Date.now();
    var passed = now - 1596972731210;
    console.log("last compiled " + passed / 1000 + " sec ago");
}
var MainLoop = (function () {
    function MainLoop(game) {
        this.game = game;
    }
    MainLoop.prototype.start = function () {
        var _this = this;
        var game = this.game;
        var updateFn = game.update.bind(game);
        var loopFn = function () {
            updateFn();
            _this.timerId = requestAnimationFrame(loopFn);
        };
        this.timerId = requestAnimationFrame(loopFn);
    };
    MainLoop.prototype.stop = function () {
        cancelAnimationFrame(this.timerId);
    };
    return MainLoop;
}());


/***/ })

/******/ });