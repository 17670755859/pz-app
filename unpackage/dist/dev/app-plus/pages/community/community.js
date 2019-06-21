// { "framework": "Vue"} 

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
/******/ 	return __webpack_require__(__webpack_require__.s = "F:\\www\\zhanghuai\\盘子App\\pages\\community\\community.nvue?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default, weexPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weexPlus", function() { return weexPlus; });
var isFn = function isFn(v) {
  return typeof v === 'function';
};

var handlePromise = function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
};

var REGEX = /^on|^create|Sync$|Manager$|^pause/;
var API_NORMAL_LIST = ['os', 'subNVue', 'stopRecord', 'stopVoice', 'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading', 'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket', 'pageScrollTo', 'drawCanvas'];

var shouldPromise = function shouldPromise(name) {
  if (REGEX.test(name) && name !== 'createBLEConnection') {
    return false;
  }
  if (~API_NORMAL_LIST.indexOf(name)) {
    return false;
  }
  return true;
};

var promisify = function promisify(api) {
  return function () {
    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return api.apply(undefined, [options].concat(params));
    }
    return handlePromise(new Promise(function (resolve, reject) {
      api.apply(undefined, [Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
      /* eslint-disable no-extend-native */
      Promise.prototype.finally = function (callback) {
        var promise = this.constructor;
        return this.then(function (value) {
          return promise.resolve(callback()).then(function () {
            return value;
          });
        }, function (reason) {
          return promise.resolve(callback()).then(function () {
            throw reason;
          });
        });
      };
    }));
  };
};

var weexPlus = new WeexPlus(weex);

var onMessageCallbacks = [];

var origin = void 0;

function onSubNVueMessage(data, _ref) {
    var id = _ref.id;

    onMessageCallbacks.forEach(function (callback) {
        return callback({
            origin: origin,
            data: data
        });
    });
}

function wrapper(webview) {
    webview.$processed = true;
    if (!webview.__uniapp_mask_id) {
        return;
    }
    origin = webview.__uniapp_host;
    var maskColor = webview.__uniapp_mask;
    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
        maskWebview.setStyle({
            mask: maskColor
        });
    };
    var closeMask = function closeMask() {
        maskWebview.setStyle({
            mask: 'none'
        });
    };
    webview.show = function () {
        showMask();

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return oldShow.apply(webview, args);
    };
    webview.hide = function () {
        closeMask();

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return oldHide.apply(webview, args);
    };
    webview.close = function () {
        closeMask();

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return oldClose.apply(webview, args);
    };
    webview.postMessage = function (data) {
        postMessage({
            type: 'UniAppSubNVue',
            data: data,
            options: {
                id: webview.id
            }
        });
    };
    webview.onMessage = function (callback) {
        onMessageCallbacks.push(callback);
    };
}

var subNVue = {
    getSubNVueById: function getSubNVueById(id) {
        var webview = weexPlus.webview.getWebviewById(id);
        if (webview && !webview.$processed) {
            wrapper(webview);
        }
        return webview;
    }
};

var plus = weex.requireModule('plus');
var globalEvent = weex.requireModule('globalEvent');

var id = 0;
var callbacks = {};

var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

globalEvent.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppJsApi') {
        invoke(e.data.id, e.data.data);
    } else if (e.data.type === 'UniAppSubNVue') {
        onSubNVueMessage(e.data.data, e.data.options);
    } else if (e.data.type === 'onNavigationBarButtonTap') {
        if (typeof onNavigationBarButtonTapCallback === 'function') {
            onNavigationBarButtonTapCallback(e.data.data);
        }
    } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
        if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
            onNavigationBarSearchInputChangedCallback(e.data.data);
        }
    } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
        if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
            onNavigationBarSearchInputConfirmedCallback(e.data.data);
        }
    } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
        if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
            onNavigationBarSearchInputClickedCallback(e.data.data);
        }
    }
});

var createCallback = function createCallback(args, type) {
    var callback = function callback(res) {
        if (isFn(args)) {
            args(res);
        } else if (args) {
            if (~res.errMsg.indexOf(':ok')) {
                isFn(args.success) && args.success(res);
            } else if (~res.errMsg.indexOf(':fail')) {
                isFn(args.fail) && args.fail(res);
            }
            isFn(args.complete) && args.complete(res);
        }
    };
    if (isFn(args) || args && isFn(args.callback)) {
        callback.keepAlive = true;
    }
    return callback;
};

var invoke = function invoke(callbackId, data) {
    var callback = callbacks[callbackId];
    if (callback) {
        callback(data);
        if (!callback.keepAlive) {
            delete callbacks[callbackId];
        }
    } else {
        console.error('callback[' + callbackId + '] is undefined');
    }
};

var publish = function publish(_ref) {
    var id = _ref.id,
        type = _ref.type,
        params = _ref.params;

    callbacks[id] = createCallback(params, type);
    plus.postMessage({
        id: id,
        type: type,
        params: params
    }, UNIAPP_SERVICE_NVUE_ID);
};

function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
}

var createPublish = function createPublish(name) {
    return function (args) {
        publish({
            id: id++,
            type: name,
            params: args
        });
    };
};

var onNavigationBarButtonTapCallback = void 0;
var onNavigationBarSearchInputChangedCallback = void 0;
var onNavigationBarSearchInputConfirmedCallback = void 0;
var onNavigationBarSearchInputClickedCallback = void 0;
function onNavigationBarButtonTap(callback) {
    onNavigationBarButtonTapCallback = callback;
}
function onNavigationBarSearchInputChanged(callback) {
    onNavigationBarSearchInputChangedCallback = callback;
}
function onNavigationBarSearchInputConfirmed(callback) {
    onNavigationBarSearchInputConfirmedCallback = callback;
}
function onNavigationBarSearchInputClicked(callback) {
    onNavigationBarSearchInputClickedCallback = callback;
}

function requireNativePlugin(pluginName) {
  return weex.requireModule(pluginName);
}

var dom = weex.requireModule('dom');

function loadFontFace(_ref) {
  var family = _ref.family,
      source = _ref.source,
      desc = _ref.desc,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  dom.addRule('fontFace', {
    fontFamily: family,
    src: source.replace(/"/g, '\'')
  });
  var res = {
    errMsg: 'loadFontFace:ok',
    status: 'loaded'
  };
  isFn(success) && success(res);
  isFn(complete) && complete(res);
}

var globalEvent$1 = weex.requireModule('globalEvent');

var callbacks$1 = [];

globalEvent$1.addEventListener('plusMessage', function (e) {
  if (e.data.type === 'UniAppReady') {
    ready.isUniAppReady = true;
    if (callbacks$1.length) {
      callbacks$1.forEach(function (callback) {
        return callback();
      });
      callbacks$1 = [];
    }
  }
});

function ready(callback) {
  if (typeof callback === 'function') {
    if (this.isUniAppReady) {
      callback();
    } else {
      callbacks$1.push(callback);
    }
  }
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var stream = weex.requireModule('stream');

// let requestTaskId = 0

var METHOD_GET = 'GET';
var METHOD_POST = 'POST';
var CONTENT_TYPE_JSON = 'application/json';
var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

var serialize = function serialize(data) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
  var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
      return JSON.stringify(data);
    } else {
      return Object.keys(data).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
      }).join('&');
    }
  }
  return data;
};

function request(_ref) {
  var url = _ref.url,
      data = _ref.data,
      header = _ref.header,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'GET' : _ref$method,
      _ref$dataType = _ref.dataType,
      dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
      responseType = _ref.responseType,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  // requestTaskId++
  var aborted = false;

  var hasContentType = false;
  var headers = {};
  if (header) {
    for (var name in header) {
      if (!hasContentType && name.toLowerCase() === 'content-type') {
        hasContentType = true;
        headers['Content-Type'] = header[name];
      } else {
        headers[name] = header[name];
      }
    }
  }
  if (method === METHOD_GET && data) {
    url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') + serialize(data);
  }
  stream.fetch({
    url: url,
    method: method,
    headers: headers,
    type: dataType === 'json' ? 'json' : 'text',
    body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : ''
  }, function (_ref2) {
    var status = _ref2.status,
        ok = _ref2.ok,
        statusText = _ref2.statusText,
        data = _ref2.data,
        headers = _ref2.headers;

    var ret = {};
    if (!status || status === -1 || aborted) {
      ret.errMsg = 'request:fail';
      isFn(fail) && fail(ret);
    } else {
      ret.data = data;
      ret.statusCode = status;
      ret.header = headers;
      isFn(success) && success(ret);
    }
    isFn(complete) && complete(ret);
  });
  return {
    abort: function abort() {
      aborted = true;
    }
  };
}

var storage = weex.requireModule('plusstorage');
var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

function getStorage(_ref) {
  var key = _ref.key,
      data = _ref.data,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
    if (ret.result === 'success') {
      var dataType = ret.data;
      storage.getItem(key, function (res) {
        if (res.result === 'success') {
          var result = res.data;
          if (dataType && result) {
            if (dataType !== 'String') {
              result = JSON.parse(result);
            }
            isFn(success) && success({
              errMsg: 'getStorage:ok',
              data: result
            });
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
        } else {
          res.errMsg = 'setStorage:fail';
          isFn(fail) && fail(res);
        }
        isFn(complete) && complete(res);
      });
    } else {
      ret.errMsg = 'setStorage:fail';
      isFn(fail) && fail(ret);
      isFn(complete) && complete(ret);
    }
  });
}
function setStorage(_ref2) {
  var key = _ref2.key,
      data = _ref2.data,
      success = _ref2.success,
      fail = _ref2.fail,
      complete = _ref2.complete;

  var dataType = 'String';
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    dataType = 'Object';
    data = JSON.stringify(data);
  }
  storage.setItem(key, data, function (res) {
    if (res.result === 'success') {
      storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
        if (ret.result === 'success') {
          isFn(success) && success({
            errMsg: 'setStorage:ok'
          });
        } else {
          ret.errMsg = 'setStorage:fail';
          isFn(fail) && fail(ret);
        }
      });
    } else {
      res.errMsg = 'setStorage:fail';
      isFn(fail) && fail(res);
    }
    isFn(complete) && complete(res);
  });
}

function removeStorage(_ref3) {
  var key = _ref3.key,
      data = _ref3.data,
      success = _ref3.success,
      fail = _ref3.fail,
      complete = _ref3.complete;

  storage.removeItem(key, function (res) {
    if (res.result === 'success') {
      isFn(success) && success({
        errMsg: 'removeStorage:ok'
      });
    } else {
      res.errMsg = 'removeStorage:fail';
      isFn(fail) && fail(res);
    }
    isFn(complete) && complete(res);
  });
  storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
}

function clearStorage(_ref4) {
  var key = _ref4.key,
      data = _ref4.data,
      success = _ref4.success,
      fail = _ref4.fail,
      complete = _ref4.complete;
}

var clipboard = weex.requireModule('clipboard');

function getClipboardData(_ref) {
  var success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  clipboard.getString(function (_ref2) {
    var data = _ref2.data;

    var res = {
      errMsg: 'getClipboardData:ok',
      data: data
    };
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  });
}

function setClipboardData(_ref3) {
  var data = _ref3.data,
      success = _ref3.success,
      fail = _ref3.fail,
      complete = _ref3.complete;

  var res = {
    errMsg: 'setClipboardData:ok'
  };
  clipboard.setString(data);
  isFn(success) && success(res);
  isFn(complete) && complete(res);
}



var api = /*#__PURE__*/Object.freeze({
  loadFontFace: loadFontFace,
  ready: ready,
  request: request,
  getStorage: getStorage,
  setStorage: setStorage,
  removeStorage: removeStorage,
  clearStorage: clearStorage,
  getClipboardData: getClipboardData,
  setClipboardData: setClipboardData,
  onSubNVueMessage: onSubNVueMessage,
  subNVue: subNVue
});

var wx = {
  uploadFile: true,
  downloadFile: true,
  chooseImage: true,
  previewImage: true,
  getImageInfo: true,
  saveImageToPhotosAlbum: true,
  chooseVideo: true,
  saveVideoToPhotosAlbum: true,
  saveFile: true,
  getSavedFileList: true,
  getSavedFileInfo: true,
  removeSavedFile: true,
  openDocument: true,
  setStorage: true,
  getStorage: true,
  getStorageInfo: true,
  removeStorage: true,
  clearStorage: true,
  getLocation: true,
  chooseLocation: true,
  openLocation: true,
  getSystemInfo: true,
  getNetworkType: true,
  makePhoneCall: true,
  scanCode: true,
  setScreenBrightness: true,
  getScreenBrightness: true,
  setKeepScreenOn: true,
  vibrateLong: true,
  vibrateShort: true,
  addPhoneContact: true,
  showToast: true,
  showLoading: true,
  hideToast: true,
  hideLoading: true,
  showModal: true,
  showActionSheet: true,
  setNavigationBarTitle: true,
  setNavigationBarColor: true,
  navigateTo: true,
  redirectTo: true,
  reLaunch: true,
  switchTab: true,
  navigateBack: true,
  getProvider: true,
  login: true,
  getUserInfo: true,
  share: true,
  requestPayment: true,
  subscribePush: true,
  unsubscribePush: true,
  onPush: true,
  offPush: true
};

var uni = {};

var baseUni = {
  os: {
    nvue: true
  }
};

if (typeof Proxy !== 'undefined') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (name === 'os') {
        return {
          nvue: true
        };
      }
      if (name === 'postMessage') {
        return postMessage;
      }
      if (name === 'requireNativePlugin') {
        return requireNativePlugin;
      }
      if (name === 'onNavigationBarButtonTap') {
        return onNavigationBarButtonTap;
      }
      if (name === 'onNavigationBarSearchInputChanged') {
        return onNavigationBarSearchInputChanged;
      }
      if (name === 'onNavigationBarSearchInputConfirmed') {
        return onNavigationBarSearchInputConfirmed;
      }
      if (name === 'onNavigationBarSearchInputClicked') {
        return onNavigationBarSearchInputClicked;
      }
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        return promisify(method);
      }
      return method;
    }
  });
} else {
  Object.keys(baseUni).forEach(function (key) {
    uni[key] = baseUni[key];
  });

  uni.postMessage = postMessage;

  uni.requireNativePlugin = requireNativePlugin;

  uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

  uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

  uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

  uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

  Object.keys(wx).forEach(function (name) {
    var method = api[name];
    if (!method) {
      method = createPublish(name);
    }
    if (shouldPromise(name)) {
      uni[name] = promisify(method);
    } else {
      uni[name] = method;
    }
  });
}

var uni$1 = uni;

/* harmony default export */ __webpack_exports__["default"] = (uni$1);



/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\components\\tab-nvue\\tabbar.nvue":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/components/tab-nvue/tabbar.nvue ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');var _default2 =

{
  props: {
    drag: {
      type: Boolean,
      default: true },

    tabBars: {
      type: Array,
      default: function _default(e) {
        return [];
      } },

    tabIndex: {
      type: Number,
      default: 0 } },


  watch: {
    tabIndex: function tabIndex(newVal) {
      this.change(newVal);
    } },

  methods: {
    change: function () {var _change = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(index, e) {var ret, el, elSize, idx, newEl;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:

                ret = {
                  index: index };


                this.$emit('tabChange', ret);
                el = this.$refs[this.tabBars[index].id + index][0];_context.next = 5;return (
                  this.getElSize(el));case 5:elSize = _context.sent;if (!(
                elSize.left + elSize.width > 750)) {_context.next = 11;break;}
                idx = index - 4;
                newEl = this.$refs[this.tabBars[idx].id + idx][0];
                dom.scrollToElement(newEl, {});return _context.abrupt("return");case 11:


                if (elSize.left < 0) {
                  dom.scrollToElement(el, {});
                }case 12:case "end":return _context.stop();}}}, _callee, this);}));function change(_x, _x2) {return _change.apply(this, arguments);}return change;}(),


    getElSize: function getElSize(el) {//得到元素的size
      return new Promise(function (res, rej) {
        var result = dom.getComponentRect(el, function (option) {
          res(option.size);
        });
      });
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\community\\community.nvue":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/pages/community/community.nvue ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
































































var _index = _interopRequireDefault(__webpack_require__(/*! ./index */ "F:\\www\\zhanghuai\\盘子App\\pages\\community\\index.js"));
var _tabbar = _interopRequireDefault(__webpack_require__(/*! @/components/tab-nvue/tabbar.nvue */ "F:\\www\\zhanghuai\\盘子App\\components\\tab-nvue\\tabbar.nvue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var domModule = weex.requireModule('dom');var _default = { /**
                                                            * 大部分js可以复用vue中写的
                                                            * 直接混入即可
                                                            */mixins: [_index.default], components: { uniTabBar: _tabbar.default }, data: function data() {return {};}, beforeCreate: function beforeCreate() {domModule.addRule('fontFace', { 'fontFamily': "iconfont", 'src': "url('https://at.alicdn.com/t/font_1209399_p4k4ixzgsz.ttf')" });}, created: function created() {// 监听原生导航事件
    uni.onNavigationBarButtonTap(function (e) {if (e.index == 0) {uni.navigateTo({ url: '/pages/community-publish/community-publish', animationType: "slide-in-bottom" });}}); //获取数据，方法通过mixin混入
    this.loadTabbars();}, methods: { tabChange: function tabChange(e) {this.tabCurrentIndex = e.index; //第一次切换tab，动画结束后需要加载数据
      var tabItem = this.tabBars[this.tabCurrentIndex];if (this.tabCurrentIndex !== 0 && tabItem.loaded !== true) {this.loadNewsList('add');tabItem.loaded = true;}}, //下拉刷新
    onRefresh: function onRefresh(e) {this.loadNewsList('refresh');}, //加载更多
    loadMore: function loadMore(tabItem) {this.loadNewsList('add');} } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-060c6b4d!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\community\\community.nvue":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-060c6b4d!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/pages/community/community.nvue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "content": {
    "flex": 1,
    "backgroundColor": "#ffffff"
  },
  "slider": {
    "flex": 1,
    "backgroundColor": "#f8f8f8"
  },
  "list-content": {
    "flex": 1
  },
  "box-cell": {
    "width": "750"
  },
  "loading": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "750",
    "height": "80"
  },
  "loading-text": {
    "fontSize": "28",
    "color": "#888888"
  },
  "loading-icon": {
    "height": "40",
    "width": "40",
    "color": "#999999",
    "marginRight": "10"
  },
  "icon-delete": {
    "fontSize": "36",
    "marginRight": "10"
  },
  "community-list": {
    "flex": 1,
    "paddingTop": "23",
    "paddingRight": "23",
    "paddingBottom": "23",
    "paddingLeft": "23",
    "backgroundColor": "#ffffff",
    "marginTop": "20"
  },
  "community-header": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "community-header-user": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "community-header-user-info": {
    "marginLeft": "30"
  },
  "community-header-user-info-name": {
    "fontSize": "33",
    "color": "#3d3d3d"
  },
  "community-header-user-info-time": {
    "fontSize": "25",
    "color": "#B0B0B0",
    "marginTop": "4"
  },
  "community-header-operate-follow": {
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "row",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#FA9EB6",
    "borderRadius": "10",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "community-header-operate-follow-iconfont": {
    "fontSize": "24",
    "color": "#FA9EB6"
  },
  "community-header-operate-follow-text": {
    "fontSize": "24",
    "color": "#FA9EB6"
  },
  "community-body": {
    "marginTop": "20"
  },
  "community-body-content-text": {
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "rgba(0,0,0,0)",
    "fontSize": "30",
    "color": "#373737",
    "lines": 3
  },
  "community-body-image": {
    "borderStyle": "solid",
    "borderColor": "rgba(0,0,0,0)",
    "borderWidth": "1",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "flexWrap": "wrap",
    "marginTop": "20"
  },
  "community-body-image-item": {
    "flex": 1,
    "marginTop": 0,
    "marginRight": "5",
    "marginBottom": 0,
    "marginLeft": "5",
    "height": "230",
    "borderRadius": "10",
    "overflow": "hidden"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-7c23269d!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\components\\tab-nvue\\tabbar.nvue":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-7c23269d!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/components/tab-nvue/tabbar.nvue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wrap": {
    "height": "90",
    "width": "750",
    "flexDirection": "row",
    "fontSize": "30",
    "borderBottomWidth": "1",
    "borderColor": "#eeeeee",
    "backgroundColor": "#FFFFFF"
  },
  "tab-bar": {
    "justifyContent": "space-between",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "scroll": {
    "height": "90",
    "width": "750",
    "flexDirection": "row"
  },
  "tab-bar-item": {
    "height": "90",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tab-bar-scroll-width": {
    "width": "150"
  },
  "tab-bar-title": {
    "height": "90",
    "lineHeight": "90",
    "fontSize": "30",
    "color": "#303133",
    "borderBottomWidth": "4",
    "borderColor": "rgba(0,0,0,0)"
  },
  "active": {
    "color": "#FA9EB6",
    "borderColor": "#FA9EB6"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-060c6b4d!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\community\\community.nvue":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-060c6b4d!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/pages/community/community.nvue ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('uni-tab-bar', {
    attrs: {
      "drag": true,
      "tabBars": _vm.tabBars,
      "tabIndex": _vm.tabCurrentIndex
    },
    on: {
      "tabChange": _vm.tabChange
    }
  }), _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "index": _vm.tabCurrentIndex,
      "infinite": false
    },
    on: {
      "change": _vm.tabChange
    }
  }, _vm._l((_vm.tabBars), function(tabItem, tabIndex) {
    return _c('list', {
      key: tabIndex,
      staticClass: ["list-content"]
    }, [_c('refresh', {
      staticClass: ["loading"],
      attrs: {
        "display": tabItem.refreshing ? 'show' : 'hide'
      },
      on: {
        "refresh": _vm.onRefresh
      }
    }, [_c('loading-indicator', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (tabItem.refreshing),
        expression: "tabItem.refreshing"
      }],
      staticClass: ["loading-icon"]
    }), _c('text', {
      staticClass: ["loading-text"]
    }, [_vm._v(_vm._s(tabItem.refreshing ? '正在加载..' : '下拉刷新数据'))])]), _vm._l((tabItem.newsList), function(item, index) {
      return _c('cell', {
        key: index,
        staticClass: ["box-cell"],
        appendAsTree: true,
        attrs: {
          "append": "tree"
        }
      }, [_c('div', {
        staticClass: ["community-list"]
      }, [_c('div', {
        staticClass: ["community-header"]
      }, [_c('div', {
        staticClass: ["community-header-user"]
      }, [_vm._m(0, true), _c('div', {
        staticClass: ["community-header-user-info"]
      }, [_c('text', {
        staticClass: ["community-header-user-info-name"]
      }, [_vm._v(_vm._s(item.author))]), _c('text', {
        staticClass: ["community-header-user-info-time"]
      }, [_vm._v(_vm._s(item.time))])])]), _c('div', {
        staticClass: ["community-header-operate"]
      }, [(item.follow == 0) ? _c('div', {
        staticClass: ["community-header-operate-follow"]
      }, [_c('text', {
        staticClass: ["iconfont", "community-header-operate-follow-iconfont"]
      }, [_vm._v("")]), _c('text', {
        staticClass: ["community-header-operate-follow-text"]
      }, [_vm._v("关注")])]) : _c('div', {
        staticClass: ["community-header-operate-delete"],
        on: {
          "click": function($event) {
            _vm.deleteList(index)
          }
        }
      }, [_c('text', {
        staticClass: ["iconfont", "icon-delete"]
      }, [_vm._v("")])])])]), _c('div', {
        staticClass: ["community-body"]
      }, [_c('div', {
        staticClass: ["community-body-content"],
        on: {
          "click": function($event) {
            _vm.navToDetails(item)
          }
        }
      }, [_c('text', {
        staticClass: ["community-body-content-text"]
      }, [_vm._v(_vm._s(item.title))])]), _c('div', {
        staticClass: ["community-body-image"]
      }, _vm._l((item.images), function(img, imgIndex) {
        return _c('image', {
          key: imgIndex,
          staticClass: ["community-body-image-item"],
          attrs: {
            "resize": "cover",
            "src": img
          },
          on: {
            "click": function($event) {
              _vm.previewImageHandler(item.images, imgIndex)
            }
          }
        })
      }))])])])
    }), _c('loading', {
      staticClass: ["loading"],
      attrs: {
        "display": tabItem.loadMoreStatus == 1 ? 'show' : 'hide'
      },
      on: {
        "loading": function($event) {
          _vm.loadMore(tabItem)
        }
      }
    }, [_c('loading-indicator', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (tabItem.loadMoreStatus == 1),
        expression: "tabItem.loadMoreStatus == 1"
      }],
      staticClass: ["loading-icon"]
    }), _c('text', {
      staticClass: ["loading-text"]
    }, [_vm._v(_vm._s(tabItem.loadMoreStatus == 0 ? '上拉显示更多' : tabItem.loadMoreStatus == 1 ? '正在加载..' : '没有更多数据了'))])])], 2)
  }))], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["community-header-user-head"]
  }, [_c('image', {
    staticStyle: {
      width: "84px",
      height: "84px"
    },
    attrs: {
      "src": "../../static/img/avator.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-7c23269d!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\components\\tab-nvue\\tabbar.nvue":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-7c23269d!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/components/tab-nvue/tabbar.nvue ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.drag) ? _c('div', {
    staticClass: ["wrap", "tab-bar-scroll"]
  }, [_c('scroller', {
    staticClass: ["scroll"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.tabBars), function(tabBar, t) {
    return _c('div', {
      key: t,
      ref: tabBar.id + t,
      refInFor: true,
      staticClass: ["tab-bar-item", "tab-bar-scroll-width"],
      on: {
        "click": function($event) {
          _vm.change(t)
        }
      }
    }, [_c('text', {
      staticClass: ["tab-bar-title"],
      class: [_vm.tabIndex === t ? 'active' : '']
    }, [_vm._v(_vm._s(tabBar.name))])])
  }))]) : _c('div', {
    staticClass: ["wrap", "tab-bar"]
  }, _vm._l((_vm.tabBars), function(tabBar, t) {
    return _c('div', {
      key: t,
      ref: tabBar.id + t,
      refInFor: true,
      staticClass: ["tab-bar-item"],
      on: {
        "click": function($event) {
          _vm.change(t)
        }
      }
    }, [_c('text', {
      staticClass: ["tab-bar-title"],
      class: [_vm.tabIndex === t ? 'active' : '']
    }, [_vm._v(_vm._s(tabBar.name))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\Json.js":
/*!**************************************!*\
  !*** F:/www/zhanghuai/盘子App/Json.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 首页tab
var navs = [{
  url: '../../static/img/navs-01.jpg',
  title: '门店',
  path: '/pages/store-list/store-list',
  type: 'navigate' },

{
  url: '../../static/img/navs-02.jpg',
  title: '主题',
  path: '/pages/theme/theme',
  type: 'switchTab' },

{
  url: '../../static/img/navs-03.jpg',
  title: '客片',
  path: '/pages/wedding/wedding',
  type: 'navigate' },

{
  url: '../../static/img/navs-04.jpg',
  title: '视频',
  path: '/pages/videos/videos',
  type: 'navigate' },

{
  url: '../../static/img/navs-05.jpg',
  title: '汉服',
  path: '/pages/hanfu/hanfu',
  type: 'navigate' },

{
  url: '../../static/img/navs-06.jpg',
  title: '影视合作',
  path: '/pages/yshz/yshz',
  type: 'navigate' },

{
  url: '../../static/img/navs-07.jpg',
  title: '明星合作',
  path: '/pages/mxhz/mxhz',
  type: 'navigate' },

{
  url: '../../static/img/navs-08.jpg',
  title: '积分兑换',
  path: '/pages/integral-list/integral-list',
  type: 'navigate' },

{
  url: '../../static/img/navs-09.jpg',
  title: '变一变',
  path: '/pages/cross-dress/cross-dress',
  type: 'navigate' },

{
  url: '../../static/img/navs-10.jpg',
  title: '我的照片',
  path: '/pages/photo/photo',
  type: 'navigate' }];


// 
var swiperBanner = [{
  id: '1',
  url: 'http://mmm.pznrfsy.com//uploads/20190520/4eea6b8b8cb89f4bd161f80ff1cfe749.jpg',
  title: '' },

{
  id: '2',
  url: 'http://mmm.pznrfsy.com//uploads/20190520/5ecce9e948cbd8ee2d72509cef2387ce.png',
  title: '' },

{
  id: '3',
  url: 'http://mmm.pznrfsy.com//uploads/20190520/ebc961e3002c51302ef4607aae588d87.png',
  title: '' }];



// 首页列表数据
var indexList = {
  themes: [{
    id: '1',
    url: 'http://mmm.pznrfsy.com//uploads/20190510/0716ee7bb77a0e466b54d1c59bf7a5f4.jpg',
    name: '【新白娘子传奇·白素贞】' },

  {
    id: '2',
    url: 'http://mmm.pznrfsy.com//uploads/20190510/0fe81686e5f3e7502f39688054b4acc9.jpg',
    name: '【新白娘子传奇·情侣】' },

  {
    id: '3',
    url: 'http://mmm.pznrfsy.com//uploads/20190510/3ebdfb53ae82ae55ce1e6fe3f83c74ab.jpg',
    name: '【凝脂】' },

  {
    id: '4',
    url: 'http://mmm.pznrfsy.com//uploads/20190510/6fb68dbc0a9fdb7362daca109fe7b801.jpg',
    name: '【丹唇】' }],


  wedding: [{
    id: '1',
    name: '五月第二季客片欣赏',
    url: 'http://mmm.pznrfsy.com//uploads/20190525/bbda513f916e429ff0e2c1f7b5d4d326.jpg' },

  {
    id: '2',
    name: '五月第一季客片欣赏',
    url: 'http://mmm.pznrfsy.com//uploads/20190522/02374100724e3d47a6598494082bf69f.jpg' },

  {
    id: '3',
    name: '四月第四季客片欣赏',
    url: 'http://mmm.pznrfsy.com//uploads/20190522/cb353daf606c1c2040df7785b5b7d934.jpg' },

  {
    id: '4',
    name: '四月第三季客片欣赏',
    url: 'http://mmm.pznrfsy.com//uploads/20190520/4ff5da63e923292e154cfe7283e7dc43.jpg' }]



  // 社区tab
};var tabBarCommunity = [{
  name: '热门',
  id: 1 },

{
  name: '关注',
  id: 2 },

{
  name: '影视',
  id: 3 },

{
  name: '客片',
  id: 4 },

{
  name: '变装',
  id: 5 },

{
  name: '同城',
  id: 6 }];



// 主题
var themeTab = [{
  id: 1,
  name: '最新' },

{
  id: 2,
  name: '热拍' },

{
  id: 3,
  name: '影视' },

{
  id: 4,
  name: '情侣' },

{
  id: 5,
  name: '闺蜜' },

{
  id: 6,
  name: '亲子' },

{
  id: 7,
  name: '外景' }];



// 主题列表
var themeList = [{
  id: 1,
  name: '明星主题同款 | 【竹】',
  url: '../../static/img/theme-01.jpg',
  love: false,
  loveNum: 150,
  see: 1240 },

{
  id: 2,
  name: '明星主题同款 | 【侯月】',
  url: '../../static/img/theme-02.jpg',
  love: false,
  loveNum: 180,
  see: 1410 },

{
  id: 3,
  name: '明星主题同款 | 【扶摇】',
  url: '../../static/img/theme-03.jpg',
  love: true,
  loveNum: 562,
  see: 97812 },

{
  id: 4,
  name: '明星主题同款 | 【知】',
  url: '../../static/img/theme-04.jpg',
  love: false,
  loveNum: 99,
  see: 140 },

{
  id: 5,
  name: '明星主题同款 | 【花世间】',
  url: '../../static/img/theme-05.jpg',
  love: false,
  loveNum: 541,
  see: 6500 }];


// 社区列表
var newsList = [{
  id: 1,
  title: '从亲密无间到相爱相杀，这就是人类一败涂地的真相',
  author: '无名小辈',
  images: [
  'http://mmm.pznrfsy.com//uploads/20190306/7b47da3250fc342c713f72aa4566f4e2.jpg',
  'http://mmm.pznrfsy.com//uploads/20190530/820d6a9fcbd343b7fe9713c68c10fc07.jpg',
  'http://mmm.pznrfsy.com//uploads/20190401/d95302efae854d2a81d74110e30c365a.jpg'],

  time: '2小时前',
  type: 3,
  follow: 0 },


{
  id: 2,
  title: '别再玩手机了，赶紧学前端，晚一年能少掉5根头发',
  author: '爱考过',
  images: [
  'http://mmm.pznrfsy.com//uploads/20190411/4dfd207daa607143a65f56ee41695350.jpg'],

  time: '30分钟前',
  type: 1,
  follow: 1 },

{
  id: 3,
  title: '将府公园成居民身边“大绿肺”',
  author: '林黛玉',
  images: [
  'http://mmm.pznrfsy.com//uploads/20190508/4b4c6de4349b8cdb1bc2537971ae0078.jpg'],

  time: '2小时前',
  type: 3,
  follow: 0 },

{
  id: 4,
  title: '骨傲天最偏爱的五位部下 这么多强者还比不过一只仓鼠',
  author: '神说要唱歌',
  images: [
  'http://mmm.pznrfsy.com//uploads/20190510/6fb68dbc0a9fdb7362daca109fe7b801.jpg'],

  time: '2019-04-10 11:43',
  type: 2,
  follow: 0 },

{
  id: 5,
  title: '继国通倒下后，又一公司放弃快递业务，曾砸20亿战“三通一达”',
  author: '爱情是多花',
  images: [
  'http://mmm.pznrfsy.com//uploads/20190510/c012b9a5a625af88b807ff600a38fbf0.jpg',
  'http://mmm.pznrfsy.com//uploads/20190510/6288319a84a0f22d52d6d2dbeff67f1f.jpg',
  'http://mmm.pznrfsy.com//uploads/20190525/bbda513f916e429ff0e2c1f7b5d4d326.jpg'],

  time: '5分钟前',
  type: 3,
  follow: 0 },

{
  id: 6,
  title: '奔驰车主哭诉维权续：双方再次协商无果',
  author: '张总',
  images: [],
  time: '5分钟前',
  type: 4,
  follow: 0 },

{
  id: 7,
  title: '靠跑车激发潜能，奔驰Pro跑车首测，怎么那么像意大利跑车设计',
  author: '漫步云端',
  images: [
  'http://mmm.pznrfsy.com//uploads/20190411/4dfd207daa607143a65f56ee41695350.jpg',
  'http://mmm.pznrfsy.com//uploads/20190510/c012b9a5a625af88b807ff600a38fbf0.jpg',
  'http://mmm.pznrfsy.com//uploads/20190520/9c556a00231a6b60e4c7e4d9aa065763.png'],

  time: '2019-04-14 ：10:58',
  type: 3,
  follow: 0 },

{
  id: 8,
  title: '起来有多可怕，看完这3段代码眼睛湿润了!',
  author: 'Alone',
  images: [
  'http://mmm.pznrfsy.com//uploads/20190520/206584a36e1fdf00e2129d9cdcb88a4e.png',
  'http://mmm.pznrfsy.com//uploads/20190520/ebc961e3002c51302ef4607aae588d87.png',
  'http://mmm.pznrfsy.com//uploads/20190520/5ecce9e948cbd8ee2d72509cef2387ce.png'],

  time: '2019-04-14 ：10:58',
  type: 3,
  follow: 0 }];



// 门店列表
var storeList = [{
  id: 1,
  name: '北京总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/5e00905f25da46cdac727a897bc19922.png' },

{
  id: 2,
  name: '北京朝阳',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/d39c63a062a5fb86ade24cf791e37f11.png' },

{
  id: 3,
  name: '上海总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/e29bf1feffa02576a67bf8d2c77d9f64.png' },

{
  id: 4,
  name: '上海静安',
  url: 'http://mmm.pznrfsy.com//uploads/20181228/f28236037bd64ea38901d0b77a3cd8d9.png' },

{
  id: 5,
  name: '深圳总店',
  url: 'http://mmm.pznrfsy.com//uploads/20181228/63f75300a02187e9480d0f0779902e70.png' },

{
  id: 6,
  name: '深圳南山',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/988da82a3579ae57ccb6e91f9daac300.png' },

{
  id: 7,
  name: '广州总店',
  url: 'http://mmm.pznrfsy.com//uploads/20181228/a28fe0378c11766df198cd84d939a83a.png' },

{
  id: 8,
  name: '广州天河',
  url: 'http://mmm.pznrfsy.com//uploads/20181228/a28fe0378c11766df198cd84d939a83a.png' },

{
  id: 9,
  name: '杭州总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/711bd07d3f33c2ddd3fbf31939bced61.png' },

{
  id: 10,
  name: '杭州拱墅',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/ffd5098508efa8c318a92202f2f78ec9.png' },

{
  id: 11,
  name: '苏州总店',
  url: 'http://mmm.pznrfsy.com//uploads/20181228/5f42d0e1be80bcf913662adb2b7e46de.png' },

{
  id: 12,
  name: '天津总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/122e576d69bbec109829cd89e1bbf889.png' },

{
  id: 13,
  name: '天津和平',
  url: 'http://mmm.pznrfsy.com//uploads/20181228/82146768ba134c9ce20599f8b58f7fe3.png' },

{
  id: 14,
  name: '南京总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/20ff3a037dd44cac97fd28e286178f1a.png' },

{
  id: 15,
  name: '长沙总店',
  url: 'http://mmm.pznrfsy.com//uploads/20181229/14dabb5fad8c9b4df09d45190707985f.png' },

{
  id: 16,
  name: '武汉总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/5d90a2ec5a9eef453c51f2b78b7aeba9.png' },

{
  id: '17',
  name: '长春总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/8d4bede6a847a8fcf045e23c1eb20190.png' },

{
  id: '18',
  name: '青岛总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/8afaae13d37ed833f3402a673c1b08d8.png' },

{
  id: '19',
  name: '厦门总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/579fafbe4c89ad99faed82c2781925d4.png' },

{
  id: '20',
  name: '昆明总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/b47cda9d8107b76eecbe5de7ea0f2921.png' },

{
  id: '21',
  name: '郑州总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/dde974f265dac7f163f2bc65c53fd395.png' },

{
  id: '22',
  name: '太原总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/8a18a825de2055f3a28ec13eaab99b82.png' },

{
  id: '23',
  name: '济南总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/a5e6a1f70e9f6393cd9f448a36aa4f00.png' },

{
  id: '24',
  name: '石家庄店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/d91c7dbad14f2b7147a886d21ddc6d84.png' },

{
  id: '25',
  name: '沈阳总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/6c4b316ea28f0e9a1d9c11f98b7fb6a9.png' },

{
  id: '26',
  name: '常州总店',
  url: 'http://mmm.pznrfsy.com//uploads/20190515/522c11570338b71914017e7442e1df73.png' }];



// 主题详情
var themeInfo = [{
  title: '2019新款主题 |【新白娘子传奇·白素贞】',
  horizontal: [
  'http://mmm.pznrfsy.com//uploads/20190530/01160a1788d4fa032e2bab20614e9a80.jpg',
  'http://mmm.pznrfsy.com//uploads/20190530/597286acc171f4b3078663cf4bd3bfcf.jpg',
  'http://mmm.pznrfsy.com//uploads/20190530/f532b6b8f02512baf8d58df0218ebd15.jpg',
  'http://mmm.pznrfsy.com//uploads/20190530/b40fb0b0a2dbe16458836dcda7c9c1a1.jpg',
  'http://mmm.pznrfsy.com//uploads/20190530/d6f428e9afcde715c3161f902ec20de8.jpg'],

  vertical: [
  'http://mmm.pznrfsy.com//uploads/20190530/3f504fea8ded398f3e77d1bb5f8b3498.jpg',
  'http://mmm.pznrfsy.com//uploads/20190530/064cf34a1dcd020441efed862bfaf653.jpg',
  'http://mmm.pznrfsy.com//uploads/20190530/be0a603c799d3b9b5861912ae0a9000b.jpg'] },


{
  title: '2019新款主题 |【新白娘子传奇·情侣】',
  horizontal: [
  'http://mmm.pznrfsy.com//uploads/20190530/747298d1b4b8763620c799d536733f62.jpg',
  'http://mmm.pznrfsy.com//uploads/20190530/f1ca936a4ab3170a667a3c40a34fa76e.jpg',
  'http://mmm.pznrfsy.com//uploads/20190530/5002986b4d39cd9845f3cffe21bcec10.jpg'],

  vertical: [
  'http://mmm.pznrfsy.com//uploads/20190530/8515ed6af34027a19f4d929afff3bfdf.jpg',
  'http://mmm.pznrfsy.com//uploads/20190530/4b431c5c6ce980c3ee081508d1b6c737.jpg',
  'http://mmm.pznrfsy.com//uploads/20190530/60bb4164e353afd01698a27313e0601b.jpg'] },


{
  title: '2019新款主题 |【凝脂】',
  horizontal: [
  'http://mmm.pznrfsy.com//uploads/20190402/427a5a6c8d146e40dab291b3686d7c2b.jpg',
  'http://mmm.pznrfsy.com//uploads/20190402/d01e1f5f449a55ab1de098717a114efa.jpg'],

  vertical: [
  'http://mmm.pznrfsy.com//uploads/20190402/5996b932efea04e314246ab08715438f.jpg',
  'http://mmm.pznrfsy.com//uploads/20190402/381bbc30c25d5ce14f040fa929779b04.jpg'] },


{
  title: '2019新款主题 |【丹唇】',
  horizontal: [
  'http://mmm.pznrfsy.com//uploads/20190402/cd1b3e37a90aafb5de5fdfad40283bdb.jpg',
  'http://mmm.pznrfsy.com//uploads/20190402/ce99bcb0a2f53971e0208a732a6d12c8.jpg'],

  vertical: [
  'http://mmm.pznrfsy.com//uploads/20190402/15d1a980d1df85cb38377e02c13effb6.jpg',
  'http://mmm.pznrfsy.com//uploads/20190402/c27097330db5642bc7697bab0923f480.jpg'] }];




// 客户评价
var comments = [{
  id: 'id1',
  img_path: '../../static/img/comment-01.jpg' },

{
  id: 'id2',
  img_path: '../../static/img/comment-02.jpg' },

{
  id: 'id3',
  img_path: '../../static/img/taoxi.png' }];



// 客片详情
var weddingInfo = [{
  id: '1',
  title: '五月第二季客片欣赏',
  horizontal: [
  'http://mmm.pznrfsy.com//uploads/20190525/4f4401be94652cb8b619edf427eb21bc.jpg',
  'http://mmm.pznrfsy.com//uploads/20190525/21d4ceb2bd7b5f951d57c33824ae0104.jpg',
  'http://mmm.pznrfsy.com//uploads/20190525/a030ca4dba102000055fa914ad884663.jpg'],

  vertical: [
  'http://mmm.pznrfsy.com//uploads/20190525/f5cdba90eccad302f41d5cc2cdcceded.jpg',
  'http://mmm.pznrfsy.com//uploads/20190525/0197dc9b7712bf2b8baaab50aa92ec29.jpg'] },


{
  id: '2',
  title: '五月第一季客片欣赏',
  horizontal: [
  'http://mmm.pznrfsy.com//uploads/20190522/588660963a3390825aeac3b15a861d08.jpg',
  'http://mmm.pznrfsy.com//uploads/20190522/d8562610e25213f51f39fd47c4a30e0e.jpg',
  'src="http://mmm.pznrfsy.com//uploads/20190522/50226e1ccc456a4bd83ac1af538ed543.jpg"'],

  vertical: [] },

{
  id: '3',
  title: '四月第四季客片欣赏',
  horizontal: [
  'http://mmm.pznrfsy.com//uploads/20190514/20551af1f71801d5d489b3db6601eb6d.jpg',
  'http://mmm.pznrfsy.com//uploads/20190514/7d3c9d479c5f02676cc7cfd3501d0da9.jpg',
  'http://mmm.pznrfsy.com//uploads/20190514/4df9dde07f6b95f2e7fddaaea3627e86.jpg'],

  vertical: [] },

{
  id: '4',
  title: '四月第三季客片欣赏',
  horizontal: [
  'http://mmm.pznrfsy.com//uploads/20190512/f8421350ae5f56bc6d48f10c84e9e82f.jpg',
  'http://mmm.pznrfsy.com//uploads/20190512/0a226d797d30171ed10a5e956a8ff44d.jpg',
  'http://mmm.pznrfsy.com//uploads/20190512/d6db915e3b856cc240532eb132bd3979.jpg'],

  vertical: [] }];



// 门店详情
var storeInfo = [{
  name: '北京总店',
  content: '',
  address: '北京市丰台区西三环内南路55号顺和智库财富广场二层西侧D区',
  phone: '010-57528182',
  url: 'www.panzi.cc' },

{
  name: '',
  content: '',
  imgs: '' },

{
  name: '',
  content: '',
  imgs: '' },

{
  name: '',
  content: '',
  imgs: '' },

{
  name: '',
  content: '',
  imgs: '' },

{
  name: '',
  content: '',
  imgs: '' },

{
  name: '',
  content: '',
  imgs: '' },

{
  name: '',
  content: '',
  imgs: '' },

{
  name: '',
  content: '',
  imgs: '' },

{
  name: '',
  content: '',
  imgs: '' },

{
  name: '',
  content: '',
  imgs: '' },

{
  name: '',
  content: '',
  imgs: '' }];



// 客片
var weddings = [
{ id: 1, url: 'http://mmm.pznrfsy.com//uploads/20190525/bbda513f916e429ff0e2c1f7b5d4d326.jpg' },
{ id: 2, url: 'http://mmm.pznrfsy.com//uploads/20190522/02374100724e3d47a6598494082bf69f.jpg' },
{ id: 3, url: 'http://mmm.pznrfsy.com//uploads/20190522/cb353daf606c1c2040df7785b5b7d934.jpg' },
{ id: 4, url: 'http://mmm.pznrfsy.com//uploads/20190520/4ff5da63e923292e154cfe7283e7dc43.jpg' },
{ id: 5, url: 'http://mmm.pznrfsy.com//uploads/20190508/a9b05bd79ae1955c895c2696f664e25c.jpg' },
{ id: 6, url: 'http://mmm.pznrfsy.com//uploads/20190508/682efd44cc363109a88f74298a907047.jpg' },
{ id: 7, url: 'http://mmm.pznrfsy.com//uploads/20190426/0a5198b74f3cffad3f1f8100ba213c15.jpg' }];


// 明星体验师
var starList = [
{ id: 1, name: '明星体验师 | 【张含韵】', url: 'http://mmm.pznrfsy.com//uploads/20190520/9c556a00231a6b60e4c7e4d9aa065763.png' },
{ id: 2, name: '明星体验师 | 【安以轩】', url: 'http://mmm.pznrfsy.com//uploads/20190520/4eea6b8b8cb89f4bd161f80ff1cfe749.jpg' },
{ id: 3, name: '明星体验师 | 【母其弥雅】', url: 'http://mmm.pznrfsy.com//uploads/20190520/5ecce9e948cbd8ee2d72509cef2387ce.png' },
{ id: 4, name: '明星体验师 | 【李念】', url: 'http://mmm.pznrfsy.com//uploads/20190520/ebc961e3002c51302ef4607aae588d87.png' },
{ id: 5, name: '明星体验师 | 【李思思】', url: 'http://mmm.pznrfsy.com//uploads/20190520/206584a36e1fdf00e2129d9cdcb88a4e.png' }];


// 积分列表
var integralList = [
{ id: 1, name: '2017热拍主题 |【花间晴岚】', num: '2300', peple: '1.3万', url: 'http://mmm.pznrfsy.com//uploads/20181228/1f1d417321ab36a399afc4e4e5377b16.jpg' },
{ id: 2, name: '2017热拍主题 |【琉璃翠】', num: '1500', peple: '1.8万', url: 'http://mmm.pznrfsy.com//uploads/20181228/8dae681741ed40141e1fe55c3f0a91e7.jpg' },
{ id: 3, name: '2018热拍主题 |【挽青袖】', num: '5400', peple: '8740', url: 'http://mmm.pznrfsy.com//uploads/20181228/c7bf0ee11d41bdc7ab1f9d465888862a.jpg' },
{ id: 4, name: '2011热拍主题 |【惹红尘】', num: '6520', peple: '3250', url: 'http://mmm.pznrfsy.com//uploads/20181228/8a1d3fcde844ff5277ab49f2b2f6dd42.jpg' },
{ id: 5, name: '2017热拍主题 |【不入梨园】', num: '1880', peple: '2.3万', url: 'http://mmm.pznrfsy.com//uploads/20181228/4a737c410192a0a39067ec8db58899f9.jpg' },
{ id: 6, name: '2017热拍主题 |【墨】', num: '3400', peple: '4.2万', url: 'http://mmm.pznrfsy.com//uploads/20181228/bd79f1033ee7de6a111c11d94ecb2147.jpg' }];


var photos = [
'http://mmm.pznrfsy.com//uploads/20190408/768b9753143b2bbaac36418221f79b6d.jpg',
'http://mmm.pznrfsy.com//uploads/20190329/a7526d6743eed1a3b9a3af5d4a8337ee.jpg',
'http://mmm.pznrfsy.com//uploads/20190305/e665d639f66f99a4dff0f79afc23fc5f.jpg',
'http://mmm.pznrfsy.com//uploads/20190214/ade1e77c98e48cf50feed2bacb42f8e3.jpg',
'http://mmm.pznrfsy.com//uploads/20190201/d8dcb0fc4053f07a2f33656c4e528a27.jpg',
'http://mmm.pznrfsy.com//uploads/20190123/24a5e3881f1aba7df7345c6bfed73c40.jpg',
'http://mmm.pznrfsy.com//uploads/20190118/f9f7d39c920e7b66280d634637b1f8b6.jpg',
'http://mmm.pznrfsy.com//uploads/20190107/6264db3999323a1c6c5eebcccfc87caf.jpg',
'http://mmm.pznrfsy.com//uploads/20190104/0fc02397ed979002fa85cbef622690ae.jpg',
'http://mmm.pznrfsy.com//uploads/20181228/416f414820f9d3d952b5070388468e07.jpg',
'http://mmm.pznrfsy.com//uploads/20181228/39fdefdea9f53495eba4e852d2872bc4.jpg',
'http://mmm.pznrfsy.com//uploads/20181228/47442abda312d1c1f2d126fe2e99a91f.jpg',
'http://mmm.pznrfsy.com//uploads/20181228/2ab1418aab9aa6d99afca24eeea52789.jpg'];


var address = [
{
  id: '1',
  name: '张怀',
  phone: '17670755859',
  province: '湖南省',
  city: '长沙市',
  area: '天心区',
  road: '华远国际中心·36楼',
  tag: '公司',
  type: '01' },

{
  id: '2',
  name: '张怀',
  phone: '17670755859',
  province: '湖南省',
  city: '长沙市',
  area: '西湖公园',
  road: '枫林一路575号',
  tag: '家',
  type: '00' },

{
  id: '3',
  name: '张怀',
  phone: '17670755859',
  province: '湖南省',
  city: '长沙市',
  area: '天心区',
  road: '劳动西路259号，城市风情',
  tag: '家',
  type: '00' }];



// 社区热门列表
var rmDatas = [1, 2, 3, 4, 5, 6];var _default =
{
  navs: navs,
  swiperBanner: swiperBanner,
  rmDatas: rmDatas,
  themeTab: themeTab,
  newsList: newsList,
  themeList: themeList,
  storeList: storeList,
  tabBarCommunity: tabBarCommunity,
  indexList: indexList,
  themeInfo: themeInfo,
  comments: comments,
  weddingInfo: weddingInfo,
  weddings: weddings,
  starList: starList,
  integralList: integralList,
  photos: photos,
  address: address };exports.default = _default;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\common\\uni-skip.js":
/*!*************************************************!*\
  !*** F:/www/zhanghuai/盘子App/common/uni-skip.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, plus) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var key = 'skipSetStorageKey';
var skipSetStorage = function skipSetStorage(data, callback) {
  var param = typeof data.data != 'object' ? {} : data.data;
  var storage = JSON.stringify(param);
  uni.setStorage({
    key: key,
    data: storage,
    success: function success() {
      callback;
    } });

};
var _getParams = function getParams(callback) {
  setTimeout(function () {
    uni.getStorage({
      key: key,
      success: function success(res) {
        var data = JSON.parse(res.data);
        callback(data);
        uni.removeStorage({
          key: key });

      } });

  }, 1);
};var _default =

{
  navigateTo: function navigateTo(data) {
    skipSetStorage(data, uni.navigateTo(data));
  },
  redirectTo: function redirectTo(data) {
    skipSetStorage(data, uni.redirectTo(data));
  },
  reLaunch: function reLaunch(data) {
    skipSetStorage(data, uni.reLaunch(data));
  },
  switchTab: function switchTab(data) {
    skipSetStorage(data, uni.switchTab(data));
  },
  navigateBack: function navigateBack(data) {
    var num = isNaN(data.delta) ? 1 : parseInt(data.delta);
    try {
      uni.postMessage({
        lastNum: num,
        data: data,
        watchParams: true });

      skipSetStorage(data, uni.navigateBack(data));
    } catch (e) {
      var pages = getCurrentPages();
      var page = pages[pages.length - num - 1];
      var currentWebview = page.$getAppWebview();
      skipSetStorage(data, uni.navigateBack(data));
      plus.webview.postMessageToUniNView({
        data: data,
        watchParams: true },

      currentWebview.id);

    }

  },
  getParams: function getParams(callback) {
    _getParams(callback);
  },
  watchParams: function watchParams(callback) {
    try {
      var globalEvent = weex.requireModule('globalEvent');
      globalEvent.addEventListener("plusMessage", function (e) {
        if (e.data.watchParams == true) {
          _getParams(callback);
        }
      });
    } catch (e) {
      _getParams(callback);
    }

  },
  onUniNViewMessage: function onUniNViewMessage(e) {
    if (e.data.lastNum) {
      var pages = getCurrentPages();
      console.log(e.data.lastNum, " at common\\uni-skip.js:83");
      var page = pages[pages.length - e.data.lastNum - 1];
      var currentWebview = page.$getAppWebview();
      plus.webview.postMessageToUniNView({
        data: e.data.data,
        watchParams: true },

      currentWebview.id);

    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["weexPlus"]))

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\components\\tab-nvue\\tabbar.nvue":
/*!**************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/components/tab-nvue/tabbar.nvue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-7c23269d!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./tabbar.nvue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-7c23269d!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\components\\tab-nvue\\tabbar.nvue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./tabbar.nvue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\components\\tab-nvue\\tabbar.nvue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-7c23269d!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./tabbar.nvue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-7c23269d!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\components\\tab-nvue\\tabbar.nvue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\components\\tab-nvue\\tabbar.nvue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7c23269d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\pages\\community\\community.nvue?entry":
/*!*******************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/pages/community/community.nvue?entry ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-060c6b4d!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./community.nvue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-060c6b4d!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\community\\community.nvue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./community.nvue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\community\\community.nvue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-060c6b4d!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./community.nvue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-060c6b4d!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\community\\community.nvue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\pages\\community\\community.nvue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-060c6b4d"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\pages\\community\\index.js":
/*!*******************************************************!*\
  !*** F:/www/zhanghuai/盘子App/pages/community/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _Json = _interopRequireDefault(__webpack_require__(/*! @/Json */ "F:\\www\\zhanghuai\\盘子App\\Json.js"));
var _uniSkip = _interopRequireDefault(__webpack_require__(/*! ../../common/uni-skip.js */ "F:\\www\\zhanghuai\\盘子App\\common\\uni-skip.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Vue.prototype.$uniSkip = _uniSkip.default;var _default =
{
  data: {
    tabBars: [],
    tabCurrentIndex: 0 },


  methods: {
    loadTabbars: function loadTabbars() {
      var tabList = _Json.default.tabBarCommunity;
      tabList.forEach(function (item) {
        item.newsList = [];
        item.loadMoreStatus = 0; //加载更多 0加载前，1加载中，2没有更多了
        item.refreshing = 0;
      });
      this.tabBars = tabList;
      this.loadNewsList('add');
    },
    //新闻列表
    loadNewsList: function loadNewsList(type) {var _this = this;
      var tabItem = this.tabBars[this.tabCurrentIndex];

      //type add 加载更多 refresh下拉刷新
      if (type === 'add') {
        if (tabItem.loadMoreStatus === 2) {
          tabItem.loadMoreStatus = 1;
          setTimeout(function () {
            tabItem.loadMoreStatus = 2;
          }, 100);
          return;
        }
        tabItem.loadMoreStatus = 1;
      } else

      if (type === 'refresh') {
        tabItem.refreshing = true;
      }


      //setTimeout模拟异步请求数据
      setTimeout(function () {
        var list = _Json.default.newsList;
        list.sort(function (a, b) {
          return Math.random() > .5 ? -1 : 1; //静态数据打乱顺序
        });
        if (type === 'refresh') {
          tabItem.newsList = []; //刷新前清空数组
        }
        list.forEach(function (item) {
          tabItem.newsList.push(item);
        });
        //下拉刷新 关闭刷新动画
        if (type === 'refresh') {
          _this.$refs.mixPulldownRefresh && _this.$refs.mixPulldownRefresh.endPulldownRefresh();

          tabItem.refreshing = false;

          tabItem.loadMoreStatus = 0;
        }
        //上滑加载 处理状态
        if (type === 'add') {
          tabItem.loadMoreStatus = tabItem.newsList.length > 40 ? 2 : 0;
        }
      }, 600);
    },
    //新闻详情
    navToDetails: function navToDetails(item) {
      var data = {
        id: item.id,
        title: item.title,
        author: item.author,
        time: item.time,
        images: item.images };

      this.$uniSkip.navigateTo({
        url: '/pages/community-info/community-info',
        data: data });

    },

    // 删除动态
    deleteList: function deleteList(index) {
      this.tabBars[this.tabCurrentIndex].newsList.splice(index, 1);
    },

    // 预览图片
    previewImageHandler: function previewImageHandler(images, index) {
      plus.nativeUI.previewImage(images, {
        current: index,
        indicator: 'number',
        onLongPress: function onLongPress(event) {

          var url = event.url; // 长按图片的url地址
          var bts = [{
            title: "保存到本地" }];


          plus.nativeUI.actionSheet({
            title: "保存图片",
            cancel: "取消",
            buttons: bts },
          function (e) {
            if (e.index == 1) {
              // 保存图片
              plus.gallery.save(url, function () {
                plus.nativeUI.toast('保存成功', {
                  verticalAlign: 'center' });

              }, function () {
                plus.nativeUI.toast('操作失败', {
                  verticalAlign: 'center' });

              });
            }
          });
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["weexPlus"]))

/***/ })

/******/ });