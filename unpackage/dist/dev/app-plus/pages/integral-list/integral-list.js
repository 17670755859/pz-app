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
/******/ 	return __webpack_require__(__webpack_require__.s = "F:\\www\\zhanghuai\\盘子App\\pages\\integral-list\\integral-list.nvue?entry");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-button/index.vue ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













var _type = __webpack_require__(/*! ./type */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\type.js");function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =

{
  props: {
    text: {
      type: String,
      default: '确认' },

    size: {
      type: String,
      default: 'full' },

    type: {
      type: String,
      default: 'red' },

    disabled: {
      type: Boolean,
      default: false },

    isHighlight: {
      type: Boolean,
      default: false },

    btnStyle: Object,
    textStyle: Object,
    disabledStyle: Object },

  computed: {
    mrBtnStyle: function mrBtnStyle() {var
      type = this.type,disabled = this.disabled,btnStyle = this.btnStyle,size = this.size,disabledStyle = this.disabledStyle;

      var mrBtnStyle = _objectSpread({},
      _type.STYLE_MAP[type],
      _type.BUTTON_STYLE_MAP[size],
      btnStyle);


      var disabledInStyle = { opacity: 0.2 };
      if (type === 'white') {
        disabledInStyle = { backgroundColor: 'rgba(0, 0, 0, 0.1)' };
      }

      return disabled ? _objectSpread({},
      mrBtnStyle,
      disabledInStyle,
      disabledStyle, {
        borderWidth: 0 }) :
      mrBtnStyle;
    },
    mrTextStyle: function mrTextStyle() {var
      type = this.type,disabled = this.disabled,textStyle = this.textStyle,size = this.size;
      var mrTextStyle = _objectSpread({}, _type.TEXT_STYLE_MAP[type], textStyle, _type.TEXT_FONTSIZE_STYLE_MAP[size]);
      return disabled ? _objectSpread({}, mrTextStyle, { color: '#FFFFFF' }) : mrTextStyle;
    } },

  methods: {
    onClicked: function onClicked(e) {var
      type = this.type,disabled = this.disabled;
      this.$emit('wxcButtonClicked', { e: e, type: type, disabled: disabled });
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-cell/index.vue ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;







































































































var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default2 = { props: { label: { type: String, default: '' }, title: { type: String, default: '' }, extraContent: { type: String, default: '' }, desc: { type: String, default: '' }, link: { type: String, default: '' }, hasTopBorder: { type: Boolean, default: false }, hasMargin: { type: Boolean, default: false }, hasBottomBorder: { type: Boolean, default: true }, hasArrow: { type: Boolean, default: false }, arrowIcon: { type: String, default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png' }, hasVerticalIndent: { type: Boolean, default: true }, cellStyle: { type: Object, default: function _default() {return {};} }, autoAccessible: { type: Boolean, default: true } }, methods: { cellClicked: function cellClicked(e) {var link = this.link;this.$emit('wxcCellClicked', { e: e });link && _utils.default.goToH5Page(link, true);} } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox-list\\index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-checkbox-list/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













var _index = _interopRequireDefault(__webpack_require__(/*! ../wxc-checkbox/index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default2 = { components: { WxcCheckbox: _index.default }, props: { list: { type: Array, default: function _default() {return [];} }, config: { type: Object, default: function _default() {return {};} } },
  data: function data() {return {
      checkedList: [] };},

  created: function created() {var _this = this;var
    list = this.list;
    if (list && list.length > 0) {
      list.forEach(function (item, i) {
        item.checked && _this.checkedList.push(item.value);
      });
    }
  },
  methods: {
    wxcCheckBoxItemChecked: function wxcCheckBoxItemChecked(e) {
      if (e.checked) {
        this.checkedList.push(e.value);
      } else {
        var index = this.checkedList.indexOf(e.value);
        this.checkedList.splice(index, 1);
      }
      this.$emit('wxcCheckBoxListChecked', { checkedList: this.checkedList });
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.vue":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-checkbox/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





























var _wxcCell = _interopRequireDefault(__webpack_require__(/*! ../wxc-cell */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.js"));
var _type = __webpack_require__(/*! ./type */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\type.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}var _default2 =

{
  components: { WxcCell: _wxcCell.default },
  props: {
    hasTopBorder: {
      type: Boolean,
      default: false },

    hasBottomBorder: {
      type: Boolean,
      default: true },

    title: {
      type: String,
      require: true },

    value: {
      type: [String, Number, Object],
      require: true },

    disabled: {
      type: Boolean,
      default: false },

    checked: {
      type: Boolean,
      default: false },

    config: {
      type: Object,
      default: function _default() {return {};} } },


  data: function data() {return {
      icon: [_type.CHECKED, _type.UNCHECKED, _type.CHECKED_DISABLED, _type.UNCHECKED_DISABLED],
      color: '#3D3D3D',
      innerChecked: false };},

  computed: {
    checkIcon: function checkIcon() {var
      icon = this.icon,disabled = this.disabled,innerChecked = this.innerChecked,config = this.config;
      var mergeIcon = _toConsumableArray(icon);
      config.checkedIcon && (mergeIcon[0] = config.checkedIcon);
      config.unCheckedIcon && (mergeIcon[1] = config.unCheckedIcon);
      config.checkedDisabledIcon && (mergeIcon[2] = config.checkedDisabledIcon);
      config.unCheckedDisabledIcon && (mergeIcon[3] = config.unCheckedDisabledIcon);
      if (disabled) {
        return mergeIcon[innerChecked ? 2 : 3];
      } else {
        return mergeIcon[innerChecked ? 0 : 1];
      }
    },
    textColor: function textColor() {var
      innerChecked = this.innerChecked,disabled = this.disabled,config = this.config;
      var checkedColor = config.checkedColor ? config.checkedColor : '#EE9900';
      return innerChecked && !disabled ? checkedColor : '#3D3D3D';
    } },

  watch: {
    checked: function checked(newChecked) {
      this.innerChecked = newChecked;
    } },

  created: function created() {var
    checked = this.checked;
    this.innerChecked = checked;
  },
  methods: {
    wxcCellClicked: function wxcCellClicked() {var
      disabled = this.disabled,innerChecked = this.innerChecked,value = this.value;
      if (!disabled) {
        this.innerChecked = !innerChecked;
        this.$emit('wxcCheckBoxItemChecked', { value: value, checked: this.innerChecked });
      }
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\index.vue":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-city/index.vue ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

































var _defaultData = _interopRequireDefault(__webpack_require__(/*! ./default-data */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\default-data.js"));
var Util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\util.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));
var _tab = _interopRequireDefault(__webpack_require__(/*! ./tab.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\tab.vue"));
var _wxcSearchbar = _interopRequireDefault(__webpack_require__(/*! ../wxc-searchbar */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.js"));
var _wxcResult = _interopRequireDefault(__webpack_require__(/*! ../wxc-result */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\index.js"));
var _wxcIndexlist = _interopRequireDefault(__webpack_require__(/*! ../wxc-indexlist */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.js"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default2 =

{
  components: { wxcTab: _tab.default, WxcSearchbar: _wxcSearchbar.default, WxcResult: _wxcResult.default, WxcIndexlist: _wxcIndexlist.default },
  props: {
    animationType: {
      type: String,
      default: 'push' },

    inputConfig: {
      type: Object,
      default: function _default() {return {};} },

    sourceData: {
      type: Object,
      default: function _default() {return _defaultData.default;} },

    cityStyleType: {
      type: String,
      default: 'list' },

    currentLocation: String,
    cityHeight: {
      type: Number,
      default: 0 },

    showTab: {
      type: Boolean,
      default: false },

    showIndex: {
      type: Boolean,
      default: true },

    showNavHeader: {
      type: Boolean,
      default: true } },


  data: function data() {return {
      tId: null,
      saveDefaultSourceData: {},
      cityData: {},
      onlyShowList: false,
      result: {
        noGoods: {
          pic: 'https://img.alicdn.com/tfs/TB1SpPHkf2H8KJjy0FcXXaDlFXa-200-200.png',
          button: '',
          content: '搜索无结果' } } };},



  created: function created() {
    this.cityData = this.sourceData;
    this.saveDefaultSourceData = this.sourceData;
  },
  computed: {
    cityExtendStyle: function cityExtendStyle() {
      return _utils.default.uiStyle.pageTransitionAnimationStyle(this.animationType);
    },
    currentCityLocationConfig: function currentCityLocationConfig() {
      if (this.currentLocation) {
        return {
          type: this.cityStyleType,
          title: '定位',
          list: [
          { name: this.currentLocation, isLocation: true }] };


      } else {
        return {};
      }
    },
    normalList: function normalList() {
      return Util.getCities(this.cityData.cities);
    },
    hotListConfig: function hotListConfig() {
      return {
        type: this.cityStyleType,
        title: '热门',
        list: Util.getCities(this.cityData.hotCity) };

    },
    showError: function showError() {var
      normalList = this.normalList,hotListConfig = this.hotListConfig;
      return normalList && normalList.length < 1 && hotListConfig && hotListConfig.list && hotListConfig.list.length < 1;
    },
    listHeight: function listHeight() {
      // 兼容去头逻辑
      var pageHeight = _utils.default.env.getPageHeight();var

      cityHeight = this.cityHeight;
      if (cityHeight && !isNaN(cityHeight) && cityHeight > 0) {
        pageHeight = cityHeight;
      }
      // searchInput 84
      var tabHeight = this.showTab ? 90 : 0;
      return pageHeight - 84 - tabHeight;
    },
    mergeInputConfig: function mergeInputConfig() {
      return _objectSpread({
        autofocus: false,
        alwaysShowCancel: true,
        placeholder: '中文/拼音/首字母' },
      this.inputConfig);

    } },

  methods: {
    onTabSwitch: function onTabSwitch(e) {
      this.$emit('wxcTabSwitch', e);
    },
    switchTab: function switchTab() {var _this = this;var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      setTimeout(function () {
        _this.$refs['wxc-tab'].switchTab(i);
      }, 100);
    },
    onItemClick: function onItemClick(e) {
      this.$refs['wxc-searchbar'].autoBlur();
      this.show(false);
      this.$emit('wxcCityItemSelected', { item: e.item });
    },
    onInput: function onInput(e) {var _this2 = this;
      clearTimeout(this.tId);var
      cities = this.cityData.cities;var
      value = e.value;
      if (value !== '' && cities && cities.length > 0) {
        var queryData = Util.query(cities, String(value).trim());
        this.cityData = {
          cities: queryData,
          hotCity: [] };

        this.onlyShowList = true;
      } else {
        this.cityData = this.saveDefaultSourceData;
        this.onlyShowList = false;
      }
      this.tId = setTimeout(function () {
        _this2.$emit('wxcCityOnInput', {
          value: e.value });

      }, 300);
    },
    onCancel: function onCancel() {
      this.autoBlur();
      this.show(false);
      this.$emit('wxcCityCanceled', {});
    },
    onSubmit: function onSubmit(e) {
      this.autoBlur();
      this.$emit('wxcCityOnKeyUpEnter', { value: e.value });
    },
    autoBlur: function autoBlur() {
      var inputRef = this.$refs['wxc-searchbar'];
      inputRef && inputRef.autoBlur();
    },
    show: function show() {var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var ref = this.$refs.city;
      if (this.animationType === 'push') {
        _utils.default.animation.pageTransitionAnimation(ref, "translateX(".concat(status ? -750 : 750, "px)"), status, callback);
      } else if (this.animationType === 'model') {
        _utils.default.animation.pageTransitionAnimation(ref, "translateY(".concat(status ? -_utils.default.env.getScreenHeight() : _utils.default.env.getScreenHeight(), "px)"), status, callback);
      }
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\tab.vue":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-city/tab.vue ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  props: {},
  data: function data() {return {
      checkedIndex: 0 };},

  methods: {
    switchTab: function switchTab(index) {
      var animation = weex.requireModule('animation');
      this.checkedIndex = index;
      this.$emit('wxcTabSwitch', {
        index: index });

      animation.transition(this.$refs['tab-bar'], {
        styles: {
          transform: "translateX(".concat(index * 375, "px)") },

        duration: 150, // ms
        timingFunction: 'ease',
        delay: 0 // ms
      }, function () {
      });
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-countdown\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-countdown/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
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
var _default =
{
  props: {
    // 时间戳
    time: {
      type: Number,
      default: 1501200000000 },

    // 倒计时的间隔,单位为"毫秒"
    interval: {
      type: Number,
      default: 1000 },

    tpl: {
      type: String,
      default: '{h}:{m}:{s}' },

    // 最外层包裹 style
    timeWrapStyle: Object,
    // 数字盒子 style
    timeBoxStyle: Object,
    // : 盒子Style
    dotBoxStyle: Object,
    // 数字文字 Style
    timeTextStyle: Object,
    // : 文字Style
    dotTextStyle: Object },

  data: function data() {return {
      NOW_DATE: new Date().getTime(),
      completed: false,
      tplIndexOfDays: -1,
      tplIndexOfHours: -1,
      tplIndexOfMinutes: -1,
      tplIndexOfSeconds: -1,
      TIME_WRAP_STYLE: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '12px',
        marginRight: '12px' },

      TIME_BOX_STYLE: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        height: '30px',
        width: '30px' },

      DOT_BOX_STYLE: {
        width: '18px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center' },

      TIME_TEXT_STYLE: {
        color: '#FFCC80',
        fontSize: '18px' },

      DOT_TEXT_STYLE: {
        color: '#333333',
        fontSize: '18px',
        fontWeight: 'bold' } };},


  mounted: function mounted() {var _this = this;
    setInterval(function () {
      _this.NOW_DATE = new Date().getTime();
    }, this.interval);

    this.tplIndexOfDays = this.tpl.indexOf('d');
    this.tplIndexOfHours = this.tpl.indexOf('h');
    this.tplIndexOfMinutes = this.tpl.indexOf('m');
    this.tplIndexOfSeconds = this.tpl.indexOf('s');
  },
  computed: {
    mrTimeWrapStyle: function mrTimeWrapStyle() {
      return _objectSpread({},
      this.TIME_WRAP_STYLE,
      this.timeWrapStyle);

    },
    mrTimeBoxStyle: function mrTimeBoxStyle() {
      return _objectSpread({},
      this.TIME_BOX_STYLE,
      this.timeBoxStyle);

    },
    mrDotBoxStyle: function mrDotBoxStyle() {
      return _objectSpread({},
      this.DOT_BOX_STYLE,
      this.dotBoxStyle);

    },
    mrTimeTextStyle: function mrTimeTextStyle() {
      return _objectSpread({},
      this.TIME_TEXT_STYLE,
      this.timeTextStyle);

    },
    mrDotTextStyle: function mrDotTextStyle() {
      return _objectSpread({},
      this.DOT_TEXT_STYLE,
      this.dotTextStyle);

    },

    countDownData: function countDownData() {
      var timeSpacing = this.time - this.NOW_DATE;

      // 倒计时结束了
      if (timeSpacing < 0) {
        if (this.completed === false) {
          this.$emit('wxcOnComplete');
        }
        this.completed = true;
        return {
          day: '00',
          hour: '00',
          minute: '00',
          second: '00' };

      }

      var day = 0;
      var hour = 0;
      var minute = 0;
      var second = 0;

      if (this.tplIndexOfDays !== -1) {
        day = Math.floor(timeSpacing / (24 * 60 * 60 * 1000));
        hour = Math.floor(timeSpacing % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
      } else {
        day = 0;
        hour = Math.floor(timeSpacing / (60 * 60 * 1000));
      }

      if (this.tplIndexOfHours !== -1) {
        hour = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000) / (60 * 60 * 1000));
        minute = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000) % (60 * 60 * 1000) / (60 * 1000));
      } else {
        hour = 0;
        minute = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000) / (60 * 1000));
      }

      if (this.tplIndexOfMinutes !== -1) {
        minute = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000) / (60 * 1000));
        second = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000) % (60 * 1000) / 1000);
      } else {
        minute = 0;
        second = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000) / 1000);
      }

      return {
        day: day < 10 ? '0' + day : '' + day,
        hour: hour < 10 ? '0' + hour : '' + hour,
        minute: minute < 10 ? '0' + minute : '' + minute,
        second: second < 10 ? '0' + second : '' + second };

    } },


  methods: {
    getDot: function getDot(prevTagIndex) {var nextTagIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      if (nextTagIndex === -1) {
        return this.tpl.slice(prevTagIndex + 2);
      }
      return this.tpl.slice(prevTagIndex + 2, nextTagIndex - 1);
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-dialog/index.vue ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





















































































































var _wxcOverlay = _interopRequireDefault(__webpack_require__(/*! ../wxc-overlay */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.js"));
var _type = __webpack_require__(/*! ./type */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\type.js");
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { components: { WxcOverlay: _wxcOverlay.default }, props: { show: { type: Boolean, default: false }, single: { type: Boolean, default: false }, title: { type: String, default: '' }, content: { type: String, default: '' }, top: { type: Number, default: 400 }, cancelText: { type: String, default: '取消' }, confirmText: { type: String, default: '确定' }, mainBtnColor: { type: String, default: '#EE9900' }, secondBtnColor: { type: String, default: '#666666' }, showNoPrompt: { type: Boolean, default: false }, noPromptText: { type: String, default: '不再提示' }, isChecked: { type: Boolean, default: false }, left: { type: Number, default: 0 } }, data: function data() {return { noPromptIcon: _type.UN_CHECKED, pageHeight: 1334, isWeb: _utils.default.env.isWeb() };}, created: function created() {var _weex$config$env = weex.config.env,deviceHeight = _weex$config$env.deviceHeight,deviceWidth = _weex$config$env.deviceWidth;this.pageHeight = deviceHeight / deviceWidth * 750;}, methods: { secondaryClicked: function secondaryClicked() {this.$emit('wxcDialogCancelBtnClicked', { type: 'cancel' });}, primaryClicked: function primaryClicked(e) {this.$emit('wxcDialogConfirmBtnClicked', { type: 'confirm' });}, noPromptClicked: function noPromptClicked(e) {var isChecked = !this.isChecked;this.noPromptIcon = isChecked ? _type.CHECKED : _type.UN_CHECKED;this.$emit('wxcDialogNoPromptClicked', { isChecked: isChecked });} } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-ep-slider/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;































var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));
var _bindEnv = _interopRequireDefault(__webpack_require__(/*! ../utils/bind-env */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\bind-env.js"));
var _indexWeex = _interopRequireDefault(__webpack_require__(/*! weex-bindingx/lib/index.weex.js */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-bindingx\\lib\\index.weex.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var swipeBack = weex.requireModule('swipeBack');var animation = weex.requireModule('animation');var _default2 = { props: { sliderId: { type: [String, Number], default: 1 }, panOffset: { type: Number, default: 80 }, cardLength: { type: Number, default: 1 }, selectIndex: { type: Number, default: 0 }, enableSwipe: { type: Boolean, default: true }, containerS: { type: Object, default: function _default() {return { position: 'relative', width: 750, height: 352 };} },


    cardS: {
      type: Object,
      default: function _default() {return {
          width: 360,
          height: 300,
          spacing: 0,
          scale: 0.75 };} },


    autoPlay: {
      type: Boolean,
      default: false },

    interval: {
      type: [Number, String],
      default: 1200 } },


  data: function data() {return {
      isMoving: false,
      gesToken: 0,
      startX: 0,
      startTime: 0,
      currentIndex: 0,
      autoPlayTimer: null };},

  computed: {
    cardList: function cardList() {
      return new Array(this.cardLength + 1).join().split('');
    },
    cardWidth: function cardWidth() {
      return (this.cardLength - 1) * this.cardS.width + this.containerS.width + 235;
    } },

  created: function created() {
    this.currentIndex = this.selectIndex;
  },
  mounted: function mounted() {var _this = this;
    // ios和页面返回冲突，组件里面将ios系统横滑返回禁止
    if (swipeBack && swipeBack.forbidSwipeBack) {
      swipeBack.forbidSwipeBack(true);
    }

    setTimeout(function () {
      var sliderCtn = _this.$refs["sliderCtn_".concat(_this.sliderId)];
      if (_bindEnv.default.supportsEB() && sliderCtn && sliderCtn.ref) {
        _indexWeex.default.prepare && _indexWeex.default.prepare({
          anchor: sliderCtn.ref,
          eventType: 'pan' });

      }
    }, 20);
    this.checkNeedAutoPlay();
  },
  methods: {
    onPanStart: function onPanStart(e) {
      if (_bindEnv.default.supportsEB()) {
        return;
      }
      this.clearAutoPlay();
      this.startX = e.changedTouches[0].clientX;
      this.startTime = Date.now();
    },
    onPanMove: function onPanMove(e) {
      if (_bindEnv.default.supportsEB()) {
        return;
      }
      var moveX = e.changedTouches[0].clientX - this.startX;
      var index = this.loopedIndex(this.currentIndex, this.cardLength);
      var cardLength = this.cardLength;
      var currentCardLeft = this.currentIndex * (this.cardS.width + this.cardS.spacing);

      var sliderCtn = this.$refs["sliderCtn_".concat(this.sliderId)];
      sliderCtn && animation.transition(sliderCtn, {
        styles: {
          transform: "translateX(".concat(moveX - currentCardLeft, "px)") },

        timingFunction: 'ease',
        delay: 0,
        duration: 0 },
      function () {
      });

      if (this.cardS.scale !== 1) {
        var currentCard = this.$refs["card".concat(this.loopedIndex(index, cardLength), "_").concat(this.sliderId)][0];
        currentCard && animation.transition(currentCard, {
          styles: {
            transform: "scale(".concat(1 - Math.abs(moveX) / this.cardS.width * (1 - this.cardS.scale), ")") },

          timingFunction: 'ease',
          delay: 0,
          duration: 0 },
        function () {
        });
        // 左边的卡片
        var leftCard = this.$refs["card".concat(this.loopedIndex(index - 1, cardLength), "_").concat(this.sliderId)][0];
        // loop 函数负数返回 0，这里有点冲突
        if (leftCard && index !== 0) {
          animation.transition(leftCard, {
            styles: {
              transform: "scale(".concat(1 - Math.abs(moveX - this.cardS.width) / this.cardS.width * (1 - this.cardS.scale), ")") },

            timingFunction: 'ease',
            delay: 0,
            duration: 0 },
          function () {
          });
        }
        // 右边卡片
        var rightCard = this.$refs["card".concat(this.loopedIndex(index + 1, cardLength), "_").concat(this.sliderId)][0];
        rightCard && animation.transition(rightCard, {
          styles: {
            transform: "scale(".concat(1 - Math.abs(this.cardS.width + moveX) / this.cardS.width * (1 - this.cardS.scale), ")") },

          timingFunction: 'ease',
          delay: 0,
          duration: 0 },
        function () {
        });
      }
    },
    onEpPanStart: function onEpPanStart(e) {var _this2 = this;
      if (_bindEnv.default.supportsEB() && e.state === 'start') {
        this.clearAutoPlay();
        setTimeout(function () {
          var sliderCtn = _this2.$refs["sliderCtn_".concat(_this2.sliderId)];
          _this2.bindExp(sliderCtn);
        }, 0);
      }
    },
    onPanEnd: function onPanEnd(e) {
      if (_bindEnv.default.supportsEB()) {
        return;
      }
      this.panEnd(e);
    },
    panEnd: function panEnd(e) {var _this3 = this;
      this.isMoving = true;
      var moveX = e.deltaX;

      if (_utils.default.env.isWeb()) {
        moveX = e.changedTouches[0].clientX - this.startX;
      }

      var originIndex = this.currentIndex;
      var selectIndex = originIndex;
      var duration = Date.now() - this.startTime;
      var panOffset = this.panOffset || this.cardS.width / 2;
      var isPullMore = selectIndex === this.cardLength - 1 && (moveX < -68 || moveX < -10 && duration < 200);

      if (isPullMore) {
        this.$emit('wxcEpSliderPullMore', { currentIndex: selectIndex });
      }

      if (moveX < -panOffset || moveX < -10 && duration < 200) {
        if (selectIndex !== this.cardLength - 1) {
          selectIndex++;
        }
      } else if (moveX > panOffset || moveX > 10 && duration < 500) {
        if (selectIndex !== 0) {
          selectIndex--;
        }
      }

      this.slideTo(originIndex, selectIndex);
      setTimeout(function () {_this3.checkNeedAutoPlay();}, 3000);
    },
    slideTo: function slideTo(originIndex, selectIndex) {var _this4 = this;
      var currentCardScale = 1;
      var rightCardScale = this.cardS.scale;
      var leftCardScale = this.cardS.scale;
      var duration = selectIndex === 0 && originIndex === this.cardLength - 1 && this.cardLength !== 2 ? 0.00001 : 300;
      this.$emit('wxcEpSliderCurrentIndexSelected', { currentIndex: selectIndex });
      if (originIndex < selectIndex) {
        currentCardScale = this.cardS.scale;
        rightCardScale = 1;
      } else if (originIndex > selectIndex) {
        currentCardScale = this.cardS.scale;
        leftCardScale = 1;
      }
      var currentCard = this.$refs["card".concat(this.loopedIndex(originIndex, this.cardLength), "_").concat(this.sliderId)][0];
      currentCard && animation.transition(currentCard, {
        styles: {
          transform: "scale(".concat(currentCardScale, ")") },

        timingFunction: 'ease',
        duration: duration },
      function () {
      });

      var leftCard = this.$refs["card".concat(this.loopedIndex(originIndex - 1, this.cardLength), "_").concat(this.sliderId)][0];
      if (this.isMoving && leftCard && originIndex !== 0) {
        animation.transition(leftCard, {
          styles: {
            transform: "scale(".concat(leftCardScale, ")") },

          timingFunction: 'ease',
          duration: duration },
        function () {
        });
      }
      var rightCard = this.$refs["card".concat(this.loopedIndex(originIndex + 1, this.cardLength), "_").concat(this.sliderId)][0];
      if (rightCard && originIndex !== this.cardLength - 1) {
        animation.transition(rightCard, {
          styles: {
            transform: "scale(".concat(rightCardScale, ")") },

          timingFunction: 'ease',
          duration: duration },
        function () {
        });
      }

      var sliderCtn = this.$refs["sliderCtn_".concat(this.sliderId)];
      sliderCtn && animation.transition(sliderCtn, {
        styles: {
          transform: "translateX(-".concat(selectIndex * (this.cardS.width + this.cardS.spacing), "px)") },

        timingFunction: 'ease',
        duration: duration },
      function () {
        _this4.isMoving = false;
        if (originIndex !== selectIndex) {
          _this4.currentIndex = selectIndex;
        }
      });
    },
    // 使index维持在0-length之间循环
    loopedIndex: function loopedIndex(index, total) {
      if (index < 0) {
        index = index + (1 - index / total) * total;
      }
      return parseInt(index % total);
    },
    bindExp: function bindExp(element) {var _this5 = this;
      if (element && element.ref) {
        if (this.isMoving && this.gesToken !== 0) {
          _indexWeex.default.unbind({
            eventType: 'pan',
            token: this.gesToken });

          this.gesToken = 0;
          return;
        }

        this.startTime = Date.now();
        var index = this.loopedIndex(this.currentIndex, this.cardLength);
        var sliderCtn = this.$refs["sliderCtn_".concat(this.sliderId)];
        var currentCard = this.$refs["card".concat(index, "_").concat(this.sliderId)][0];
        var rightCard = null;
        var leftCard = null;
        var currentCardLeft = this.currentIndex * (this.cardS.width + this.cardS.spacing);

        // 卡片容器
        var sliderCtnExp = "x - ".concat(currentCardLeft);
        var args = [
        {
          element: sliderCtn.ref,
          property: 'transform.translateX',
          expression: sliderCtnExp }];



        if (this.cardS.scale !== 1) {
          var currentCardExp = "1-abs(x)/".concat(this.cardS.width, "*").concat(1 - this.cardS.scale);
          var leftCardExp = "1-abs(x-".concat(this.cardS.width, ")/").concat(this.cardS.width, "*").concat(1 - this.cardS.scale);
          var rightCardExp = "1-abs(".concat(this.cardS.width, "+x)/").concat(this.cardS.width, "*").concat(1 - this.cardS.scale);

          args.push({
            element: currentCard.ref,
            property: 'transform.scale',
            expression: currentCardExp });


          if (index === 0 && this.$refs["card".concat(index + 1, "_").concat(this.sliderId)]) {
            rightCard = this.$refs["card".concat(index + 1, "_").concat(this.sliderId)][0];
            args.push({
              element: rightCard.ref,
              property: 'transform.scale',
              expression: rightCardExp });

          } else if (index === this.cardLength - 1 && this.$refs["card".concat(index - 1, "_").concat(this.sliderId)]) {
            leftCard = this.$refs["card".concat(index - 1, "_").concat(this.sliderId)][0];
            args.push({
              element: leftCard.ref,
              property: 'transform.scale',
              expression: leftCardExp });

          } else if (this.$refs["card".concat(index - 1, "_").concat(this.sliderId)]) {
            // 左边卡片
            leftCard = this.$refs["card".concat(index - 1, "_").concat(this.sliderId)][0];
            args.push({
              element: leftCard.ref,
              property: 'transform.scale',
              expression: leftCardExp });

            // 右边卡片
            rightCard = this.$refs["card".concat(index + 1, "_").concat(this.sliderId)][0];
            args.push({
              element: rightCard.ref,
              property: 'transform.scale',
              expression: rightCardExp });

          }
        }

        var gesTokenObj = _indexWeex.default.bind({
          anchor: element.ref,
          eventType: 'pan',
          props: args },
        function (e) {
          if (!_this5.isMoving && (e.state === 'end' || e.state === 'cancel' || e.state === 'exit')) {
            _this5.panEnd(e);
          }
        });

        this.gesToken = gesTokenObj.token;
      }
    },
    checkNeedAutoPlay: function checkNeedAutoPlay() {var _this6 = this;
      if (this.autoPlay) {
        this.clearAutoPlay();
        this.autoPlayTimer = setInterval(function () {
          _this6.slideTo(_this6.currentIndex, _this6.loopedIndex(_this6.currentIndex + 1, _this6.cardLength));
        }, parseInt(this.interval));
      }
    },
    clearAutoPlay: function clearAutoPlay() {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    },
    rebind: function rebind() {
      var sliderCtn = this.$refs["sliderCtn_".concat(this.sliderId)];
      if (sliderCtn && sliderCtn.ref) {
        _indexWeex.default.unbind({
          eventType: 'pan',
          token: this.gesToken });

        this.gesToken = 0;
        this.bindExp(sliderCtn);
      }
    },
    manualSetPage: function manualSetPage(selectIndex) {var _this7 = this;
      this.clearAutoPlay();
      var step = this.currentIndex < selectIndex ? 1 : -1;
      this.slideTo(this.loopedIndex(selectIndex - step, this.cardLength), selectIndex);
      setTimeout(function () {
        _this7.checkNeedAutoPlay();
      }, 3000);
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-grid-select/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





















var _option = _interopRequireDefault(__webpack_require__(/*! ./option.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\option.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default2 =

{
  components: { Option: _option.default },
  props: {
    // 标识, 当界面展示多个grid, 防止v-for :key重复
    id: {
      type: String,
      default: 'one' },

    // 列数
    cols: {
      type: Number,
      default: 4 },

    // 是否单选
    single: {
      type: Boolean,
      default: false },

    // 数据
    list: {
      type: Array,
      default: function _default() {return [];} },

    // 选择个数限制
    limit: {
      type: Number },

    // 用户自定义样式，用于个性化设置option样式
    customStyles: {
      type: Object,
      default: function _default() {return {};} } },


  data: function data() {
    return {
      dList: this.initList() };

  },
  computed: {
    cHackList: function cHackList() {var
      list = this.list,cols = this.cols;
      var remainder = list.length % cols;
      var len = remainder ? cols - remainder : 0;

      return Array.apply(null, { length: len });
    } },

  watch: {
    list: function list() {
      this.dList = this.initList();
    } },

  created: function created() {
    // 行间距
    this.lineSpacing = this.customStyles.lineSpacing || '12px';
  },
  methods: {
    onSelect: function onSelect(index) {
      var checked = this.dList[index].checked;
      if (this.limit <= this.checkedCount && !checked) {
        this.$emit('overLimit', this.limit);
      } else {
        this.updateList(index);
        this.$emit('select', {
          selectIndex: index,
          checked: !checked,
          checkedList: this.dList.filter(function (item) {return item.checked;}) });

      }
    },
    initList: function initList() {
      var single = this.single;
      var checkedCount = 0;

      var dList = this.list.map(function (item, i) {var
        checked = item.checked,disabled = item.disabled;
        disabled = !!disabled;
        // disabled为true时认为checked无效，同时单选模式下只认为第一个checked为true的为有效值
        checked = !disabled && !!checked && (!single || checkedCount === 0);
        if (item.checked) checkedCount += 1;
        return _objectSpread({},
        item, {
          checked: checked,
          disabled: disabled });

      });

      this.checkedCount = checkedCount;
      return dList;
    },
    updateList: function updateList(index) {
      var single = this.single;
      var checkedCount = 0;
      this.dList = this.dList.map(function (item, i) {
        if (single) {
          item.checked = index === i && !item.checked;
        } else {
          if (i === index) item.checked = !item.checked;
        }
        if (item.checked) checkedCount += 1;
        return item;
      });
      this.checkedCount = checkedCount;
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\option.vue":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-grid-select/option.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  props: {
    index: {
      type: Number,
      default: -1 },

    // 是否选中
    checked: {
      type: Boolean,
      default: false },

    // 是否可选
    disabled: {
      type: Boolean,
      default: false },

    // 标题
    title: {
      type: String,
      default: '' },

    width: {
      type: String,
      default: '166px' },

    height: {
      type: String,
      default: '72px' },

    // 默认 x
    icon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB1IAByhgMPMeJjy1XdXXasrXXa-38-34.png' },

    // 正常状态文字色值
    color: {
      type: String,
      default: '#3d3d3d' },

    // 选中状态文字色值
    checkedColor: {
      type: String,
      default: '#3d3d3d' },

    // 不可选状态文字色值
    disabledColor: {
      type: String,
      default: '#9b9b9b' },

    // 正常状态边框色值
    borderColor: {
      type: String,
      default: 'transparent' },

    // 选中状态边框色值
    checkedBorderColor: {
      type: String,
      default: '#ffb200' },

    // 不可选状态边框色值
    disabledBorderColor: {
      type: String,
      default: 'transparent' },

    // 正常状态背景色值
    backgroundColor: {
      type: String,
      default: '#f6f6f6' },

    // 选中状态背景色值
    checkedBackgroundColor: {
      type: String,
      default: '#ffffff' },

    // 不可选状态背景色值
    disabledBackgroundColor: {
      type: String,
      default: '#f6f6f6' } },


  computed: {
    cWrapperStyle: function cWrapperStyle() {var
      checked = this.checked,disabled = this.disabled,width = this.width,height = this.height,borderColor = this.borderColor,checkedBorderColor = this.checkedBorderColor,disabledBorderColor = this.disabledBorderColor,backgroundColor = this.backgroundColor,checkedBackgroundColor = this.checkedBackgroundColor,disabledBackgroundColor = this.disabledBackgroundColor;
      return {
        width: width,
        height: height,
        borderColor: disabled ? disabledBorderColor : checked ? checkedBorderColor : borderColor,
        backgroundColor: disabled ? disabledBackgroundColor : checked ? checkedBackgroundColor : backgroundColor };

    },
    cTitleStyle: function cTitleStyle() {var
      checked = this.checked,disabled = this.disabled,color = this.color,checkedColor = this.checkedColor,disabledColor = this.disabledColor;
      return {
        color: disabled ? disabledColor : checked ? checkedColor : color };

    } },

  methods: {
    onClick: function onClick() {
      if (!this.disabled) {
        this.$emit('select', this.index);
      }
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\index.vue":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-icon/index.vue ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\type.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var dom = weex.requireModule('dom');var _default2 =

{
  props: {
    name: {
      default: 'success',
      type: String },

    size: {
      default: 'small',
      type: String },

    iconStyle: {
      type: Object,
      default: function _default() {return {};} } },


  data: function data() {return {
      Icon: _type.default };},

  beforeCreate: function beforeCreate() {
    dom.addRule('fontFace', {
      'fontFamily': "weexUiIconFont",
      'src': "url('https://at.alicdn.com/t/font_520368_r89ekv69euahsemi.ttf')" });

  },
  computed: {
    mergeStyle: function mergeStyle() {var
      iconStyle = this.iconStyle,size = this.size;
      var fontSize = '48px';
      switch (size) {
        case 'xs':
          fontSize = '24px';
          break;
        case 'small':
          fontSize = '48px';
          break;
        case 'medium':
          fontSize = '72px';
          break;
        case 'big':
          fontSize = '128px';
          break;
        default:
          fontSize = '48px';}

      return _objectSpread({
        fontFamily: 'weexUiIconFont',
        fontSize: fontSize },
      iconStyle);

    } },

  methods: {
    itemClicked: function itemClicked(name) {
      this.$emit('wxcIconClicked', {
        name: name });

    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-indexlist/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













































































var Format = _interopRequireWildcard(__webpack_require__(/*! ./format */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\format.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}} //
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
var dom = weex.requireModule('dom');var _default2 = { props: { height: { type: [Number, String], default: _utils.default.env.getPageHeight() }, normalList: { type: Array, default: function _default() {return [];} }, onlyShowList: { type: Boolean, default: false }, showIndex: { type: Boolean, default: true }, needAnimation: { type: Boolean, default: true }, hotListConfig: { type: Object, default: function _default() {return {};} }, // 城市选择子组件 特殊情况支持
    cityLocationConfig: { type: Object, default: function _default() {return {};} }, headerStyle: { type: Object, default: function _default() {return {};} }, navStyle: { type: Object, default: function _default() {return {};} }, navTextStyle: { type: Object, default: function _default() {return {};} }, popStyle: { type: Object, default: function _default() {return {};} }, popTextStyle: { type: Object, default: function _default() {return {};} }, itemStyle: { type: Object, default: function _default() {return {};} }, itemTextStyle: { type: Object, default: function _default() {return {};} }, itemDescStyle: { type: Object, default: function _default() {return {};} }, groupWrapStyle: { type: Object, default: function _default() {return {};} }, groupItemStyle: { type: Object, default: function _default() {return {};} }, groupItemTextStyle: { type: Object, default: function _default() {return {};} }, groupItemDescStyle: {
      type: Object,
      default: function _default() {return {};} } },


  created: function created() {
    this.isIPhoneX = _utils.default.env.isIPhoneX();
  },
  computed: {
    formatList: function formatList() {var
      normalList = this.normalList,hotListConfig = this.hotListConfig,cityLocationConfig = this.cityLocationConfig;
      return Format.totalList(normalList, hotListConfig, cityLocationConfig);
    } },

  data: function data() {return {
      popKeyShow: false,
      popKey: '',
      navOffsetY: 0,
      timer: null };},

  methods: {
    itemClicked: function itemClicked(item) {
      this.$emit('wxcIndexlistItemClicked', {
        item: item });

    },
    go2Key: function go2Key(key) {var _this = this;
      var keyEl = this.$refs['index-item-title-' + key][0];
      keyEl && dom.scrollToElement(keyEl, {
        offset: 0,
        animated: this.needAnimation });

      this.popKey = key;
      this.popKeyShow = true;
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.popKeyShow = false;
      }, 600);
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lightbox\\index.vue":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lightbox/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;










































var _wxcMask = _interopRequireDefault(__webpack_require__(/*! ../wxc-mask */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-mask\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default2 =

{
  components: {
    WxcMask: _wxcMask.default },

  props: {
    width: {
      type: [Number, String],
      default: 750 },

    height: {
      type: [Number, String],
      default: 750 },

    show: {
      type: Boolean,
      default: false },

    imageList: Array,
    indicatorColor: {
      type: Object,
      default: function _default() {return {
          'item-color': 'rgba(255, 195, 0, .5)',
          'item-selected-color': '#ffc300',
          'item-size': '20px' };} },


    index: {
      type: [Number, String],
      default: 0 },

    interval: {
      type: [Number, String],
      default: 3000 },

    opacity: {
      type: [Number, String],
      default: 0.6 } },


  computed: {
    indicatorStyle: function indicatorStyle() {
      return _objectSpread({
        width: this.width + 'px' },
      this.indicatorColor);

    } },

  methods: {
    maskOverlayClick: function maskOverlayClick() {
      this.$emit('wxcLightboxOverlayClicked', {});
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-loading/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








































































var _type = __webpack_require__(/*! ./type */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\type.js");
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
//
//
//
//
//
//
//
//
var _default2 = { props: { show: { type: Boolean, default: false }, loadingText: { type: String, default: '' }, type: { type: String, default: 'default' }, interval: { type: [Number, String], default: 0 }, needMask: { type: Boolean, default: false }, maskStyle: { type: Object, default: function _default() {return {};} } }, data: function data() {return { showLoading: false, tid: 0 };}, watch: { show: function show() {this.setShow();} }, computed: { loading: function loading() {var loading = {};switch (this.type) {case 'trip':loading = { url: _type.GIF, class: 'trip-loading' };break;default:loading = { url: _type.BLACK_GIF, class: 'default-loading' };}return loading;}, topPosition: function topPosition() {return (_utils.default.env.getPageHeight() - 200) / 2;} }, created: function created() {this.setShow();}, methods: { maskClicked: function maskClicked() {this.needMask && this.$emit('wxcLoadingMaskClicked', {});}, setShow: function setShow() {var _this = this;var interval = this.interval,show = this.show,showLoading = this.showLoading;var stInterval = parseInt(interval);clearTimeout(this.tid);if (show) {if (showLoading) {
          return;
        }
        if (stInterval === 0) {
          this.showLoading = true;
        } else {
          this.tid = setTimeout(function () {
            _this.showLoading = true;
          }, stInterval);
        }
      } else {
        this.showLoading = false;
      }
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lottery-rain/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

























var _rainItem = _interopRequireDefault(__webpack_require__(/*! ./rain-item.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\rain-item.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { components: { RainItem: _rainItem.default }, props: { picList: Array, config: Object, wrapStyle: Object }, methods: { wxcLotteryRainCaught: function wxcLotteryRainCaught(e) {this.$emit('wxcLotteryRainCaught', { rainId: e.rainId });}, destroy: function destroy() {var picList = this.picList;var length = picList.length;for (var i = 0; i < length; i++) {this.$refs["rain-item-".concat(i)][0].destroy();}} } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\rain-item.vue":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lottery-rain/rain-item.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




















var Ani = _interopRequireWildcard(__webpack_require__(/*! ./libs/animate.js */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\libs\\animate.js"));
var CFG = _interopRequireWildcard(__webpack_require__(/*! ./libs/config.js */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\libs\\config.js"));
var _region = _interopRequireDefault(__webpack_require__(/*! ./libs/region.js */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\libs\\region.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default2 =

{
  props: {
    src: String,
    rainId: [String, Number],
    config: {
      type: Object,
      default: function _default() {return {};} } },


  computed: {
    // 合并用户配置和默认
    cfg: function cfg() {
      return _objectSpread({},
      CFG.DEFAULT,
      this.config);

    } },

  data: function data() {return {
      showItem: false,
      hiding: false,
      pos: {},
      showTimer: null,
      hideTimer: null,
      intervalTimer: null };},

  created: function created() {var _this$cfg =
    this.cfg,width = _this$cfg.width,height = _this$cfg.height;
    this.pos = _region.default.get(width, height);
  },
  mounted: function mounted() {
    this.start();
  },
  methods: {
    start: function start() {var _this = this;var
      cfg = this.cfg;
      var random = Math.round(Math.random() * cfg.randomTime);
      var showTime = cfg.showTime + random;
      var intervalTime = Math.max(cfg.intervalTime, cfg.showAniTime + showTime + cfg.hideAniTime) + random;

      this.onShow = function () {
        _this.hideTimer = setTimeout(function () {
          _this.hide();
        }, showTime);
      };

      this.onHide = function () {
        _region.default.remove(_this.pos);
        _this.pos = {};
        _this.showItem = false;
        _this.hiding = false;var _this$cfg2 =
        _this.cfg,width = _this$cfg2.width,height = _this$cfg2.height;
        _this.pos = _region.default.get(width, height);
      };

      this.showTimer = setTimeout(function () {
        _this.show();
      }, random);

      this.intervalTimer = setInterval(function () {
        _this.show();
      }, intervalTime);
    },

    hide: function hide() {var
      cfg = this.cfg,rainId = this.rainId;
      this.hiding = true;
      clearTimeout(this.showTimer);
      clearTimeout(this.hideTimer);
      Ani.hidePig(this.$refs["rain-item-".concat(rainId)], cfg.hideAniTime, this.onHide);
    },

    show: function show() {var
      cfg = this.cfg,rainId = this.rainId;
      this.showItem = true;
      Ani.showPig(this.$refs["rain-item-".concat(rainId)], cfg.showAniTime, this.onShow);
    },

    caught: function caught() {var _this2 = this;var
      rainId = this.rainId,hiding = this.hiding;
      if (hiding) return;
      clearTimeout(this.showTimer);
      clearTimeout(this.hideTimer);
      Ani.shakePig(this.$refs["rain-item-".concat(rainId)], function () {
        _this2.hide();
      });
      this.$emit('wxcLotteryRainCaught', { rainId: rainId });
    },

    destroy: function destroy() {
      _region.default.remove(this.pos);
      clearTimeout(this.showTimer);
      clearTimeout(this.hideTimer);
      clearInterval(this.intervalTimer);
      this.showItem = false;
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-mask\\index.vue":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-mask/index.vue ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

































































var _wxcOverlay = _interopRequireDefault(__webpack_require__(/*! ../wxc-overlay */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
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
var animation = weex.requireModule('animation');var _default2 = { components: { WxcOverlay: _wxcOverlay.default }, props: { height: { type: [String, Number], default: 800 }, width: { type: [String, Number], default: 702 }, top: { type: Number, default: 0 }, show: { type: Boolean, default: false }, showClose: { type: Boolean, default: false }, duration: { type: [String, Number], default: 300 }, hasOverlay: { type: Boolean, default: true }, hasAnimation: { type: Boolean, default: true }, timingFunction: { type: Array, default: function _default() {return ['ease-in', 'ease-out'];} }, overlayCfg: { type: Object, default: function _default() {return { hasAnimation: true, timingFunction: ['ease-in', 'ease-out'], canAutoClose: true, duration: 300, opacity: 0.6 };} }, borderRadius: { type: [String, Number], default: 0 }, overlayCanClose: { type: Boolean, default: true }, maskBgColor: { type: String, default: '#ffffff' }, opacity: { type: [Number, String],
      default: 0.6 } },


  data: function data() {return {
      closeIcon: 'https://gw.alicdn.com/tfs/TB1qDJUpwMPMeJjy1XdXXasrXXa-64-64.png',
      maskTop: 264,
      opened: false };},

  computed: {
    mergeOverlayCfg: function mergeOverlayCfg() {
      return _objectSpread({},
      this.overlayCfg, {
        hasAnimation: this.hasAnimation });

    },
    maskStyle: function maskStyle() {var
      width = this.width,height = this.height,showClose = this.showClose,hasAnimation = this.hasAnimation,opened = this.opened,top = this.top;
      var newHeight = showClose ? height - 0 + 100 : height;var _weex$config$env =
      weex.config.env,deviceHeight = _weex$config$env.deviceHeight,deviceWidth = _weex$config$env.deviceWidth,platform = _weex$config$env.platform;
      var _deviceHeight = deviceHeight || 1334;
      var isWeb = typeof window === 'object' && platform.toLowerCase() === 'web';
      var navHeight = isWeb ? 0 : 130;
      var pageHeight = _deviceHeight / deviceWidth * 750 - navHeight;
      return {
        width: width + 'px',
        height: newHeight + 'px',
        left: (750 - width) / 2 + 'px',
        top: (top || (pageHeight - height) / 2) + 'px',
        opacity: hasAnimation && !opened ? 0 : 1 };

    },
    contentStyle: function contentStyle() {
      return {
        width: this.width + 'px',
        backgroundColor: this.maskBgColor,
        height: this.height + 'px',
        borderRadius: this.borderRadius + 'px' };

    },
    shouldShow: function shouldShow() {var _this = this;var
      show = this.show,hasAnimation = this.hasAnimation;
      hasAnimation && setTimeout(function () {
        _this.appearMask(show);
      }, 50);
      return show;
    } },

  methods: {
    closeIconClicked: function closeIconClicked() {
      this.appearMask(false);
    },
    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
      if (this.hasAnimation) {
        this.appearMask(false);
        this.$emit('wxcOverlayBodyClicking', {});
      }
    },
    wxcOverlayBodyClicked: function wxcOverlayBodyClicked() {
      if (!this.hasAnimation) {
        this.appearMask(false);
        this.$emit('wxcOverlayBodyClicked', {});
      }
    },
    needEmit: function needEmit() {var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.opened = bool;
      !bool && this.$emit('wxcMaskSetHidden', {});
    },
    appearMask: function appearMask(bool) {var _this2 = this;var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;var
      hasAnimation = this.hasAnimation,timingFunction = this.timingFunction;
      var maskEl = this.$refs['wxc-mask'];
      if (hasAnimation && maskEl) {
        animation.transition(maskEl, {
          styles: {
            opacity: bool ? 1 : 0 },

          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0 },
        function () {
          _this2.needEmit(bool);
        });
      } else {
        this.needEmit(bool);
      }
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-minibar/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
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

var Navigator = weex.requireModule('navigator');var _default =
{
  props: {
    backgroundColor: {
      type: String,
      default: '#FFC900' },

    leftButton: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png' },

    textColor: {
      type: String,
      default: '#3D3D3D' },

    rightButton: {
      type: String,
      default: '' },

    title: {
      type: String,
      default: '标题' },

    leftText: {
      type: String,
      default: '' },

    rightText: {
      type: String,
      default: '' },

    useDefaultReturn: {
      type: Boolean,
      default: true },

    show: {
      type: Boolean,
      default: true },

    barStyle: {
      type: Object } },


  computed: {
    newBarStyle: function newBarStyle() {var
      backgroundColor = this.backgroundColor,barStyle = this.barStyle;
      return _objectSpread({
        backgroundColor: backgroundColor },
      barStyle);

    } },

  methods: {
    leftButtonClicked: function leftButtonClicked() {
      if (this.useDefaultReturn) {
        Navigator.pop({}, function (e) {
        });
      }
      this.$emit('wxcMinibarLeftButtonClicked', {});
    },
    rightButtonClicked: function rightButtonClicked() {
      var hasRightContent = this.rightText || this.rightButton || this.$slots && this.$slots.right;
      hasRightContent && this.$emit('wxcMinibarRightButtonClicked', {});
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-noticebar/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






























































var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\type.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { props: { notice: { type: String, default: '' }, noticeUrl: { type: String, default: '' }, mode: { type: String, default: '' }, lines: { type: [Number, String], default: 1 }, type: { type: String, default: '' }, spm: { type: String, default: '' } }, computed: { contentWidth: function contentWidth() {return this.mode ? 605 : 683;}, modeIcon: function modeIcon() {var modeIcon;switch (this.mode) {case 'link':modeIcon = _type.default.linkIcon;break;case 'closable':modeIcon = _type.default.closeIcon;break;default:modeIcon = '';}return modeIcon;}, typeIcon: function typeIcon() {var typeIcon;switch (this.type) {case 'success':typeIcon = _type.default.successIcon;break;case 'error':typeIcon = _type.default.errorIcon;break;case 'info':typeIcon = _type.default.infoIcon;break;case 'question':typeIcon = _type.default.questionIcon;break;case 'warn':
          typeIcon = _type.default.warnIcon;
          break;
        case 'time':
          typeIcon = _type.default.timeIcon;
          break;
        case 'redbag':
          typeIcon = _type.default.redbag;
          break;
        default:
          typeIcon = '';}

      return typeIcon;
    } },

  data: function data() {return {
      show: true };},

  methods: {
    noticeBarClicked: function noticeBarClicked() {var
      mode = this.mode,noticeUrl = this.noticeUrl,spm = this.spm;
      if (mode === 'link' && noticeUrl) {var
        ttid = weex.config.env.ttid;
        _utils.default.goToH5Page(noticeUrl, spm, ttid, true);
        this.$emit('wxcNoticebarLinkClicked', { url: noticeUrl });
      }
    },
    noticeIconClicked: function noticeIconClicked() {var
      mode = this.mode;
      if (mode === 'closable') {
        this.show = false;
        this.$emit('wxcNoticebarCloseClicked', {});
      } else {
        this.noticeBarClicked();
      }
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-overlay/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



























var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
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
var animation = weex.requireModule('animation');var _default2 = { props: { show: { type: Boolean, default: true }, left: _defineProperty({ default: Number }, "default", 0), hasAnimation: { type: Boolean, default: true }, duration: { type: [Number, String], default: 300 }, timingFunction: { type: Array, default: function _default() {return ['ease-in', 'ease-out'];} }, opacity: { type: [Number, String], default: 0.6 },

    canAutoClose: {
      type: Boolean,
      default: true } },


  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: "rgba(0, 0, 0,".concat(this.opacity, ")"),
        left: _utils.default.env.isWeb() ? this.left + 'px' : 0 };

    },
    shouldShow: function shouldShow() {var _this = this;var
      show = this.show,hasAnimation = this.hasAnimation;
      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    } },

  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {var _this2 = this;var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;var
      hasAnimation = this.hasAnimation,timingFunction = this.timingFunction,canAutoClose = this.canAutoClose;
      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0 },

          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0 },
        function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-page-calendar/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













































var Format = _interopRequireWildcard(__webpack_require__(/*! ./format */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\format.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));





var _wxcMinibar = _interopRequireDefault(__webpack_require__(/*! ../wxc-minibar */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}} //
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
var isWeb = _utils.default.env.isWeb();var dom = weex.requireModule('dom');var _default2 = { components: { WxcMinibar: _wxcMinibar.default }, props: { selectedDate: Array, animationType: { type: String, default: 'push' }, dateRange: { type: Array, required: true, default: function _default() {return [];} }, minibarCfg: { type: Object, default: function _default() {return { 'title': '选择日期', 'background-color': '#FFC900', 'text-color': '#3D3D3D' };} }, showHeader: { type: Boolean, default: false }, selectedNote: { type: Array, default: function _default() {return ['开始', '到达', '往返'];} }, isRange: { type: Boolean, default: false }, needDestroy: { type: Boolean, default: false }, descList: { type: Array, default: function _default() {return [];} }, selectedCellStyle: { type: Object, default: function _default() {return {};} },

    selectedTextStyle: {
      type: Object,
      default: function _default() {return {};} } },


  data: function data() {return {
      isShow: false,
      reSelect: true,
      today: Format.getToDay(),
      departDate: '',
      arriveDate: '' };},

  computed: {
    calendarExtendStyle: function calendarExtendStyle() {
      return _utils.default.uiStyle.pageTransitionAnimationStyle(this.animationType);
    },
    monthsArray: function monthsArray() {var
      range = this.dateRange,today = this.today,departDate = this.departDate,arriveDate = this.arriveDate,selectedNote = this.selectedNote,descList = this.descList;
      var param = { range: range, today: today, departDate: departDate, arriveDate: arriveDate, selectedNote: selectedNote, descList: descList };
      return Format.generateDateCell(param);
    } },

  created: function created() {
    this.isIPhoneX = _utils.default.env.isIPhoneX();
    this.showTitle = isWeb || this.showHeader;
    this.detectShow();
  },
  mounted: function mounted() {var _this = this;var
    needDestroy = this.needDestroy;
    var hold = isWeb ? 700 : 100;
    !needDestroy && setTimeout(function () {
      _this.isShow = true;
      _this.scrollToDate();
    }, hold);
  },
  watch: {
    needDestroy: function needDestroy(newVal, preVal) {var _this2 = this;
      if (!newVal && newVal !== preVal) {
        setTimeout(function () {
          _this2.isShow = true;
        }, 200);
      }
    } },

  methods: {
    minibarLeftButtonClick: function minibarLeftButtonClick() {var _this3 = this;
      setTimeout(function () {
        _this3.hide();
        _this3.$emit('wxcPageCalendarBackClicked', {});
      }, 100);
    },
    onClickDate: function onClickDate(datConfig) {
      var self = this;
      if (datConfig.disabled || datConfig.isEmpty) return;

      if (self.reSelect) {
        self.departDate = '';
        self.arriveDate = '';
        self.reSelect = false;
      }

      if (self.isRange) {
        if (self.departDate && Date.parse(self.departDate) <= Date.parse(datConfig.date)) {
          self.arriveDate = datConfig.date;
        } else {
          self.departDate = datConfig.date;
        }
        if (self.departDate && self.arriveDate) {
          self.dispatchDateChange([self.departDate, self.arriveDate]);
        }
      } else {
        self.departDate = datConfig.date;
        self.dispatchDateChange([self.departDate]);
      }
    },
    scrollToDate: function scrollToDate() {var _this4 = this;
      setTimeout(function () {
        if (_this4.departDate) {
          var el = _this4.$refs.departDate[0];
          el && dom.getComponentRect && dom.getComponentRect(el, function (e) {
            if (e && e.result) {var
              bottom = e.size.bottom;var
              env = weex.config.env;
              // 误差
              var height = env.deviceHeight / env.deviceWidth * 750 - 50;
              if (bottom > height || bottom === 0) {
                dom.scrollToElement(el, { offset: -146, animated: false });
              }
            }
          });
        }
      }, 10);
    },
    dispatchDateChange: function dispatchDateChange(dateArr) {var _this5 = this;
      var duration = isWeb ? 400 : 600;
      setTimeout(function () {
        _this5.hide();
      }, duration);
      this.$emit('wxcPageCalendarDateSelected', {
        date: dateArr });

    },
    detectShow: function detectShow() {
      if (this.isRange && this.selectedDate.length >= 2) {
        this.departDate = this.selectedDate[0];
        this.arriveDate = this.selectedDate[1];
      } else if (this.selectedDate.length >= 1) {
        this.departDate = this.selectedDate[0];
        this.arriveDate = '';
      }
    },
    _animate: function _animate(status) {var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var ref = this.$refs.pageCalendar;
      if (this.animationType === 'push') {
        _utils.default.animation.pageTransitionAnimation(ref, "translateX(".concat(status ? -750 : 750, "px)"), status, callback);
      } else if (this.animationType === 'model') {
        _utils.default.animation.pageTransitionAnimation(ref, "translateY(".concat(status ? -_utils.default.env.getScreenHeight() : _utils.default.env.getScreenHeight(), "px)"), status, callback);
      }
    },
    show: function show() {var
      needDestroy = this.needDestroy;
      needDestroy && (this.isShow = true);
      this.reSelect = true;
      this.detectShow();
      this._animate(true);
      needDestroy && this.scrollToDate();
    },
    hide: function hide() {
      this.needDestroy && (this.isShow = false);
      this.reSelect = false;
      this._animate(false);
      this.$emit('wxcPageCalendarHide', {});
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-pan-item\\index.vue":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-pan-item/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;























var _indexWeex = _interopRequireDefault(__webpack_require__(/*! weex-bindingx/lib/index.weex.js */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-bindingx\\lib\\index.weex.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));
var _bindEnv = _interopRequireDefault(__webpack_require__(/*! ../utils/bind-env */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\bind-env.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { props: { url: { type: String, default: '' }, needSlider: { type: Boolean, default: true } }, data: function data() {return { isPanning: false, appearMap: [], supportAndroid: _bindEnv.default.supportsEBForAndroid() };}, mounted: function mounted() {var _this = this;setTimeout(function () {if (_this.supportAndroid && _this.needSlider) {var element = _this.$refs['wxc-pan-item'];_indexWeex.default.prepare && _indexWeex.default.prepare({ anchor: element.ref,
          eventType: 'pan' });

      }
    }, 300);
  },
  methods: {
    itemClicked: function itemClicked() {
      if (this.isPanning) {
        return;
      }
      this.url && _utils.default.goToH5Page(this.url, true);
      this.$emit('wxcPanItemClicked', { extId: this.extId });
    },

    dispatchPan: function dispatchPan(e) {var _this2 = this;
      if (this.supportAndroid && this.needSlider) {
        if (e.state === 'start') {
          this.isPanning = true;
          var element = this.$refs['wxc-pan-item'];
          element && this.$emit('wxcPanItemPan', { element: element });
        } else if (e.state === 'end') {
          setTimeout(function () {
            _this2.isPanning = false;
          }, 50);
        }
      }
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-part-loading\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-part-loading/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;















var _type = __webpack_require__(/*! ../wxc-loading/type */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\type.js"); //
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
var _default = { props: { show: { type: Boolean, default: false }, width: { type: [Number, String], default: 36 }, height: { type: [Number, String], default: 36 } },

  data: function data() {return {
      PART: _type.PART };},

  computed: {
    loadingStyle: function loadingStyle() {var
      height = this.height,width = this.width;
      return {
        height: "".concat(height, "px"),
        width: "".concat(width, "px") };

    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popover\\index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-popover/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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

var animation = weex.requireModule('animation');var _default2 =
{
  props: {
    buttons: {
      type: Array,
      default: [] },

    position: {
      type: Object,
      default: function _default() {return {
          x: 0,
          y: 0 };} },


    arrowPosition: {
      type: Object,
      default: function _default() {return {
          pos: 'top',
          x: 0,
          y: 0 };} },


    coverColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)' },

    hasAnimation: {
      type: Boolean,
      default: true },

    textStyle: {
      type: Object,
      default: function _default() {return {};} } },


  data: function data() {return {
      show: false,
      showIn: false };},

  computed: {
    coverStyle: function coverStyle() {
      return this.coverColor ? { backgroundColor: this.coverColor, opacity: this.hasAnimation || !this.showIn ? '0' : '1' } : '';
    },
    transformOrigin: function transformOrigin() {var _this$arrowPosition =
      this.arrowPosition,_this$arrowPosition$x = _this$arrowPosition.x,x = _this$arrowPosition$x === void 0 ? 0 : _this$arrowPosition$x,_this$arrowPosition$y = _this$arrowPosition.y,y = _this$arrowPosition$y === void 0 ? 0 : _this$arrowPosition$y,_this$arrowPosition$p = _this$arrowPosition.pos,pos = _this$arrowPosition$p === void 0 ? 'top' : _this$arrowPosition$p;
      var _origins = [];
      switch (pos) {
        case 'top':
        case 'bottom':
          _origins = [x < 0 ? 'right' : 'left', pos];
          break;
        case 'left':
        case 'right':
          _origins = [pos, y < 0 ? 'bottom' : 'top'];
          break;}

      return _origins.join(' ');
    },
    contentTransform: function contentTransform() {var _this$arrowPosition$p2 =
      this.arrowPosition.pos,pos = _this$arrowPosition$p2 === void 0 ? 'top' : _this$arrowPosition$p2;var _this$arrowPosition2 =
      this.arrowPosition,_this$arrowPosition2$ = _this$arrowPosition2.x,x = _this$arrowPosition2$ === void 0 ? 0 : _this$arrowPosition2$,_this$arrowPosition2$2 = _this$arrowPosition2.y,y = _this$arrowPosition2$2 === void 0 ? 0 : _this$arrowPosition2$2;
      var _translates = ['scale(0)'];
      if (x >= 0 && x < 22) {
        x = 22;
      } else if (x < 0 && x > -22) {
        x = -22;
      }
      if (y >= 0 && y < 22) {
        y = 22;
      } else if (y < 0 && y > -22) {
        y = -22;
      }
      switch (pos) {
        case 'top':
        case 'bottom':
          _translates[1] = "translateX(".concat(x < 0 ? x - 15 : x + 15, "px)");
          break;
        case 'left':
        case 'right':
          _translates[1] = "translateY(".concat(y < 0 ? y - 15 : y + 15, "px)");
          break;}

      return _translates.join(' ');
    },
    contentStyle: function contentStyle() {var _this$position =
      this.position,_this$position$x = _this$position.x,x = _this$position$x === void 0 ? 0 : _this$position$x,_this$position$y = _this$position.y,y = _this$position$y === void 0 ? 0 : _this$position$y;
      var style = {};
      x < 0 ? style.right = "".concat(-x, "px") : style.left = "".concat(x, "px");
      y < 0 ? style.bottom = "".concat(-y, "px") : style.top = "".concat(y, "px");
      style.opacity = this.hasAnimation || !this.showIn ? '0' : '1';
      style.transform = this.hasAnimation || !this.showIn ? this.contentTransform : 'scale(1)';
      style.transformOrigin = this.transformOrigin;
      return style;
    },
    arrowStyle: function arrowStyle() {var _this$arrowPosition3 =
      this.arrowPosition,_this$arrowPosition3$ = _this$arrowPosition3.x,x = _this$arrowPosition3$ === void 0 ? 0 : _this$arrowPosition3$,_this$arrowPosition3$2 = _this$arrowPosition3.y,y = _this$arrowPosition3$2 === void 0 ? 0 : _this$arrowPosition3$2;var _this$arrowPosition$p3 =
      this.arrowPosition.pos,pos = _this$arrowPosition$p3 === void 0 ? 'top' : _this$arrowPosition$p3;
      var style = {};
      switch (pos) {
        case 'top':
          style.top = '6px';
        case 'bottom': //eslint-disable-line
          !style.top && (style.bottom = '6px');
          style.transform = 'scaleX(0.8) rotate(45deg)';
          if (x >= 0 && x < 22) {
            x = 22;
          } else if (x < 0 && x > -22) {
            x = -22;
          }
          x < 0 ? style.right = "".concat(-x, "px") : style.left = "".concat(x, "px");
          break;
        case 'left':
          style.left = '6px';
        case 'right': //eslint-disable-line
          !style.left && (style.right = '6px');
          style.transform = 'scaleY(0.8) rotate(45deg)';
          if (y >= 0 && y < 22) {
            y = 22;
          } else if (y < 0 && y > -22) {
            y = -22;
          }
          y < 0 ? style.bottom = "".concat(-y, "px") : style.top = "".concat(y, "px");
          break;
        default:
          break;}

      return style;
    } },

  methods: {
    wxcPopoverShow: function wxcPopoverShow() {var _this = this;
      if (this.animationLock) {
        return;
      }
      this.show = true;
      if (this.hasAnimation) {
        setTimeout(function () {return _this.wxcPopoverAnimationShow();}, 40);
      } else {
        setTimeout(function () {return _this.showIn = true;}, 40);
      }
    },
    /**
       * smooth in
       **/
    wxcPopoverAnimationShow: function wxcPopoverAnimationShow() {var _this2 = this;
      var popoverEl = this.$refs['wxc-popover'];
      var coverEl = this.$refs['wxc-cover'];
      if (!coverEl || !popoverEl) {
        return;
      }
      this.setAnimationLock();
      var a1End = false;
      var a2End = false;
      animation.transition(popoverEl, {
        styles: {
          opacity: 1,
          transform: 'scale(1)',
          transformOrigin: this.transformOrigin },

        delay: 0,
        duration: 250,
        timingFunction: 'ease-out' },
      function (e) {
        a1End = true;
        if (a1End && a2End) {
          _this2.animationLock = false;
        }
      });

      animation.transition(coverEl, {
        styles: {
          opacity: 1 },

        delay: 0,
        duration: 250,
        timingFunction: 'ease-in' },
      function (e) {
        a2End = true;
        if (a1End && a2End) {
          _this2.animationLock = false;
        }
      });
    },
    wxcButtonClicked: function wxcButtonClicked(index, key) {
      if (this.animationLock) {
        return;
      }
      this.$emit('wxcPopoverButtonClicked', { key: key, index: index });
      this.hideAction();
    },
    /**
          * 隐藏操作
          */
    hideAction: function hideAction() {var _this3 = this;
      if (this.animationLock) {
        return;
      }
      if (this.hasAnimation) {
        this.setAnimationLock();
        var popoverEl = this.$refs['wxc-popover'];
        var coverEl = this.$refs['wxc-cover'];
        if (!popoverEl || !coverEl) {
          return;
        }
        var a1End = false;
        var a2End = false;
        animation.transition(popoverEl, {
          styles: {
            opacity: 0,
            transform: this.contentTransform,
            transformOrigin: this.transformOrigin },

          duration: 250 },
        function () {
          a1End = true;
          if (a1End && a2End) {
            _this3.show = false;
            _this3.showIn = false;
            _this3.animationLock = false;
          }
        });
        animation.transition(coverEl, {
          styles: {
            opacity: 0 },

          duration: 250 },
        function () {
          a2End = true;
          if (a1End && a2End) {
            _this3.show = false;
            _this3.showIn = false;
            _this3.animationLock = false;
          }
        });
      } else {
        this.show = false;
        this.showIn = false;
      }
    },
    /**
          * 设置动画锁
          */
    setAnimationLock: function setAnimationLock() {
      this.animationLock = true;
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-popup/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
























































var _wxcOverlay = _interopRequireDefault(__webpack_require__(/*! ../wxc-overlay */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
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
var animation = weex.requireModule('animation');var platform = weex.config.env.platform;var isWeb = typeof window === 'object' && platform.toLowerCase() === 'web';var _default2 = { components: { WxcOverlay: _wxcOverlay.default }, props: { show: { type: Boolean, default: false }, pos: { type: String, default: 'bottom' }, popupColor: { type: String, default: '#FFFFFF' }, overlayCfg: { type: Object, default: function _default() {return { hasAnimation: true, timingFunction: ['ease-in', 'ease-out'], duration: 300, opacity: 0.6 };} }, height: { type: [Number, String], default: 840 }, standOut: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 750 }, animation: { type: Object, default: function _default() {return { timingFunction: 'ease-in' };} } }, data: function data() {return { haveOverlay: true, isOverShow: true };}, computed: { isNeedShow: function isNeedShow() {var _this = this;setTimeout(function () {_this.appearPopup(_this.show);}, 50);
      return this.show;
    },
    _height: function _height() {
      this.appearPopup(this.show, 150);
      return this.height;
    },
    padStyle: function padStyle() {var
      pos = this.pos,width = this.width,height = this.height,popupColor = this.popupColor,standOut = this.standOut;
      var stand = parseInt(standOut, 10);
      var style = {
        width: "".concat(width, "px"),
        backgroundColor: popupColor };

      pos === 'top' && (style = _objectSpread({},
      style, {
        top: "".concat(-height + stand, "px"),
        height: "".concat(height, "px") }));

      pos === 'bottom' && (style = _objectSpread({},
      style, {
        bottom: "".concat(-height + stand, "px"),
        height: "".concat(height, "px") }));

      pos === 'left' && (style = _objectSpread({},
      style, {
        left: "".concat(-width + stand, "px") }));

      pos === 'right' && (style = _objectSpread({},
      style, {
        right: "".concat(-width + stand, "px") }));

      return style;
    } },

  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // 在支付宝上面有点击穿透问题
      var platform = weex.config.env.platform;
      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    hide: function hide() {
      this.appearPopup(false);
      this.$refs.overlay.appearOverlay(false);
    },
    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
      this.isShow && this.appearPopup(false);
    },
    appearPopup: function appearPopup(bool) {var _this2 = this;var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
      this.isShow = bool;
      var popupEl = this.$refs['wxc-popup'];
      if (!popupEl) {
        return;
      }
      animation.transition(popupEl, _objectSpread({
        styles: {
          transform: this.getTransform(this.pos, this.width, this.height, !bool) },

        duration: duration,
        delay: 0 },
      this.animation),
      function () {
        if (!bool) {
          _this2.$emit('wxcPopupOverlayClicked', { pos: _this2.pos });
        }
      });
    },
    getTransform: function getTransform(pos, width, height, bool) {
      var _size = pos === 'top' || pos === 'bottom' ? height : width;
      bool && (_size = 0);
      var _transform;
      switch (pos) {
        case 'top':
          _transform = "translateY(".concat(_size, "px)");
          break;
        case 'bottom':
          _transform = "translateY(-".concat(_size, "px)");
          break;
        case 'left':
          _transform = "translateX(".concat(_size, "px)");
          break;
        case 'right':
          _transform = "translateX(-".concat(_size, "px)");
          break;}

      return _transform;
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-progress\\index.vue":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-progress/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  props: {
    barColor: {
      type: String,
      default: '#FFC900' },

    barWidth: {
      type: Number,
      default: 600 },

    barHeight: {
      type: Number,
      default: 8 },

    barRadius: {
      type: Number,
      default: 0 },

    value: {
      type: Number,
      default: 0 },

    backgroundColor: {
      type: String,
      default: '#f2f3f4' } },


  computed: {
    runWayStyle: function runWayStyle() {var
      barWidth = this.barWidth,barHeight = this.barHeight,barRadius = this.barRadius,backgroundColor = this.backgroundColor;
      return {
        width: barWidth + 'px',
        height: barHeight + 'px',
        borderRadius: barRadius + 'px',
        backgroundColor: backgroundColor };

    },
    progressStyle: function progressStyle() {var
      value = this.value,barWidth = this.barWidth,barHeight = this.barHeight,barColor = this.barColor,barRadius = this.barRadius;
      var newValue = value < 0 ? 0 : value > 100 ? 100 : value;
      return {
        backgroundColor: barColor,
        borderRadius: barRadius + 'px',
        height: barHeight + 'px',
        width: newValue / 100 * barWidth + 'px' };

    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\index.vue":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-radio/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


















var _item = _interopRequireDefault(__webpack_require__(/*! ./item.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\item.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default2 = { components: { wxcRadio: _item.default }, props: { list: { type: Array, default: function _default() {return [];} }, config: { type: Object, default: function _default() {return {};} } }, data: function data() {return { checkedIndex: -1 };}, computed: { updateList: function updateList() {var
      checkedIndex = this.checkedIndex,list = this.list;
      var updateList = [];
      list && list.forEach(function (item, i) {
        item.checked = i === checkedIndex;
        updateList.push(item);
      });
      return updateList;
    } },

  watch: {
    list: function list(newList) {
      this.setListChecked(newList);
    } },

  created: function created() {
    this.setListChecked(this.list);
  },
  methods: {
    setListChecked: function setListChecked(list) {var _this = this;
      if (list && list.length > 0) {
        list.forEach(function (item, i) {
          item.checked && (_this.checkedIndex = i);
        });
      }
    },
    wxcRadioItemChecked: function wxcRadioItemChecked(i, e) {
      var oldIndex = this.checkedIndex;var _this$list$i =
      this.list[i],value = _this$list$i.value,title = _this$list$i.title;
      this.checkedIndex = i;
      this.$emit('wxcRadioListChecked', { value: value, title: title, oldIndex: oldIndex, index: i });
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\item.vue":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-radio/item.vue ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
































var _wxcCell = _interopRequireDefault(__webpack_require__(/*! ../wxc-cell */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.js"));
var _type = __webpack_require__(/*! ./type.js */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\type.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default2 = { components: { WxcCell: _wxcCell.default }, props: { hasTopBorder: { type: Boolean, default: false }, title: { type: String, require: true }, value: { type: [String, Number, Object], require: true }, disabled: { type: Boolean, default: false }, checked: { type: Boolean, default: false }, config: { type: Object, default: function _default() {return {};} } }, data: function data() {return { icon: [_type.CHECKED, _type.DISABLED] };},
  computed: {
    radioIcon: function radioIcon() {var
      icon = this.icon,disabled = this.disabled,checked = this.checked,config = this.config;
      var mergeIcon = icon;
      config.checkedIcon && (mergeIcon[0] = config.checkedIcon);
      config.disabledIcon && (mergeIcon[1] = config.disabledIcon);
      return checked ? mergeIcon[disabled ? 1 : 0] : '';
    },
    backgroundColor: function backgroundColor() {var
      disabled = this.disabled;
      return disabled ? '#F2F3F4' : '#FFFFFF';
    },
    color: function color() {var
      disabled = this.disabled,checked = this.checked,config = this.config;
      var checkedColor = '#EE9900';
      config.checkedColor && (checkedColor = config.checkedColor);
      return checked && !disabled ? checkedColor : '#3D3D3D';
    } },

  methods: {
    wxcCellClicked: function wxcCellClicked() {var
      disabled = this.disabled,value = this.value;
      if (!disabled) {
        this.$emit('wxcRadioItemChecked', { value: value, disabled: disabled });
      }
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-refresher\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-refresher/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



























var _index = _interopRequireDefault(__webpack_require__(/*! weex-bindingx/lib/index.weex */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-bindingx\\lib\\index.weex.js"));
var _bindEnv = _interopRequireDefault(__webpack_require__(/*! ../utils/bind-env */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\bind-env.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var animation = weex.requireModule('animation'); // 减少打包体积
var ICON_ARROW_DOWN = 'https://img.alicdn.com/tfs/TB1A8faeTtYBeNjy1XdXXXXyVXa-48-48.png';var _default = { props: { scrollerRef: String, maxTime: { type: Number, default: 0 }, mainText: { type: String, default: '下拉即可刷新...' }, pullingText: { type: String, default: '释放即可刷新...' }, refreshingText: { type: String, default: '加载中...' }, textWidth: { type: Number, default: 200 } },


  data: function data() {
    return {
      ICON_ARROW_DOWN: ICON_ARROW_DOWN,
      refreshing: false,
      couldUnLash: false };

  },
  computed: {
    newStyleFlag: function newStyleFlag() {
      return this.scrollerRef && _bindEnv.default.supportsEBForIos();
    },
    refresherText: function refresherText() {
      return this.refreshing ? this.refreshingText : this.pText;
    },
    pText: function pText() {
      return this.couldUnLash ? this.pullingText : this.mainText;
    } },

  created: function created() {
    this.newStyleFlag && this.animationBinding();
  },
  beforeDestroy: function beforeDestroy() {
    this.bindingsDestroy();
  },
  methods: {
    onRefresh: function onRefresh(event) {var _this = this;
      this.$emit('wxcRefresh', event);
      this.refreshing = true;
      this.newStyleFlag && this.cycleGoRound();
      if (this.maxTime <= 0) return;
      this.timeoutSto && clearTimeout(this.timeoutSto);
      this.timeoutSto = setTimeout(function () {
        _this.$emit('wxcTimeout');
        _this.wxcCancel();
      }, this.maxTime);
    },
    /**
        * 取消 refreshing
        */
    wxcCancel: function wxcCancel() {
      this.refreshing = false;
      this.timeoutSto && clearTimeout(this.timeoutSto);
      this.roundingDestroy();
    },
    /**
        * 下拉事件
        */
    onPullingDown: function onPullingDown(event) {
      this.$emit('wxcPullingDown', event);
      var pd = event.pullingDistance * (_utils.default.env.isIOS() ? -1 : 1);
      pd > (_utils.default.env.isAndroid() ? 200 : 140) ? this.couldUnLash = true : this.couldUnLash = false;
      if (this.refreshing && pd < 20) {
        this.timeoutSto && clearTimeout(this.timeoutSto);
        this.refreshing = false;
        this.roundingDestroy();
      }
    },
    /**
        * 注册 bindingx
        */
    animationBinding: function animationBinding() {var _this2 = this;
      setTimeout(function () {
        // 降级版本取不到，需要注意
        var scroller = _this2.$parent.$refs[_this2.scrollerRef].ref;
        var cover2 = _this2.$refs['cover2'].ref;
        var coverCycle = _this2.$refs['cover-cycle'].ref;

        var bindingResult = _index.default.bind({
          eventType: 'scroll',
          anchor: scroller,
          props: [
          {
            element: cover2,
            property: 'transform.rotateZ',
            expression: 'y>-140?(y%75/150*-360):156' },

          {
            element: coverCycle,
            property: 'opacity',
            expression: 'y<-75 ?1:0' }] },


        function (e) {});
        _this2.bindingToken = bindingResult.token;
      }, 300);
    },
    /**
        * 旋转动作
        */
    cycleGoRound: function cycleGoRound() {
      if (_utils.default.env.isAndroid()) return;
      var cycle = this.$refs['cycle'].ref;
      this.arrowShow(false);
      if (!cycle) {
        return;
      }
      var roundingResult = _index.default.bind({
        eventType: 'timing',
        props: [
        {
          element: cycle,
          property: 'transform.rotateZ',
          expression: 't*0.72' }] },


      function (e) {
      });
      this.roundingToken = roundingResult.token;
    },
    /**
        * 箭头显隐控制
        */
    arrowShow: function arrowShow() {var _show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var arrow = this.$refs['arrow'];
      arrow && animation.transition(arrow, {
        styles: {
          opacity: _show ? 1 : 0,
          transform: _show ? "scale(1)" : "scale(0.5)" },

        duration: 300,
        delay: 0 },
      function () {
      });
    },
    /**
        * 完整 bindingx 销毁
        */
    bindingsDestroy: function bindingsDestroy() {
      if (this.bindingToken !== 0) {
        _index.default && _index.default.unbind({
          eventType: 'scroll',
          token: this.bindingToken });

        this.bindingToken = 0;
      }
      this.roundingDestroy();
    },
    /**
        * 旋转 bindingx 销毁
        */
    roundingDestroy: function roundingDestroy() {
      if (this.roundingToken !== 0) {
        _index.default && _index.default.unbind({
          eventType: 'timing',
          token: this.roundingToken });

        this.roundingToken = 0;
      }
      this.arrowShow(true);
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-result/index.vue ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


















































































var _type = _interopRequireDefault(__webpack_require__(/*! ./type */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\type.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default2 = { props: { type: { type: String, default: 'errorPage' }, show: { type: Boolean, default: true }, wrapStyle: Object, paddingTop: { type: [Number, String], default: 232 }, customSet: { type: Object, default: function _default() {return {};} } }, computed: { resultType: function resultType() {var type = this.type,customSet = this.customSet;var allTypes = _utils.default.isEmptyObject(customSet) ? _type.default : _utils.default.mergeDeep(_type.default, customSet);var types = allTypes['errorPage'];if (Object.keys(allTypes).indexOf(type) > -1) {types = allTypes[type];}return types;}, setPaddingTop: function setPaddingTop() {var paddingTop = this.paddingTop;return "".concat(paddingTop, "px");} }, methods: { handleTouchEnd: function handleTouchEnd(e) {// web上面有点击穿透问题
      var platform = weex.config.env.platform;platform === 'Web' && e.preventDefault && e.preventDefault();}, onClick: function onClick() {var type = this.type;this.$emit('wxcResultButtonClicked', { type: type });} } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
















































var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default2 = { components: { WxcRichTextText: __webpack_require__(/*! ./wxc-rich-text-text.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue"), WxcRichTextLink: __webpack_require__(/*! ./wxc-rich-text-link.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-link.vue"), WxcRichTextIcon: __webpack_require__(/*! ./wxc-rich-text-icon.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-icon.vue"), WxcRichTextTag: __webpack_require__(/*! ./wxc-rich-text-tag.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue") }, props: { configList: { type: [Array, String], default: function _default() {return [];} }, hasTextMargin: { type: Boolean, default: true } }, data: function data() {return {};}, computed: { isNotEmptyArray: function isNotEmptyArray() {return _utils.default.isNonEmptyArray(this.configList);}, isString: function isString() {return _utils.default.isString(this.configList);} }, methods: { linkClick: function linkClick(e) {this.$emit('wxcRichTextLinkClick', e);} } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-icon.vue":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-icon.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default2 =
{
  props: {
    iconSrc: String,
    iconStyle: {
      type: Object,
      default: function _default() {return {
          height: 24 };} } },



  data: function data() {return {
      width: 90 };},

  computed: {
    computedStyle: function computedStyle() {var
      width = this.width,iconStyle = this.iconStyle;
      if (iconStyle && iconStyle.width && iconStyle.height) {
        return {
          width: "".concat(iconStyle.width, "px"),
          height: "".concat(iconStyle.height, "px") };

      } else {
        return {
          width: "".concat(width, "px"),
          height: "".concat(iconStyle.height, "px") };

      }
    } },

  methods: {
    onLoad: function onLoad(e) {
      if (e.success && e.size && e.size.naturalWidth > 0) {
        var width = e.size.naturalWidth;
        var height = e.size.naturalHeight;
        this.width = width * (this.iconStyle.height / height);
      }
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-link.vue":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-link.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));
var _wxcRichTextText = _interopRequireDefault(__webpack_require__(/*! ./wxc-rich-text-text.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default2 = { components: { WxcRichTextText: _wxcRichTextText.default }, props: { linkValue: { type: [String, Number], default: '' }, hasTextMargin: { type: Boolean, default: true }, linkHref: {
      type: String,
      default: '' },

    linkTheme: {
      type: String,
      default: 'black' },

    linkStyle: {
      type: Object,
      default: function _default() {return {};} } },


  data: function data() {return {
      defObj: {} };},

  methods: {
    onLinkClick: function onLinkClick(e) {
      this.$emit('wxcRichTextLinkClick', { element: e, href: this.linkHref });
      _utils.default.goToH5Page(this.linkHref);
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-tag.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
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
//
//
//
//
//
//
//
var _default2 =
{
  props: {
    tagValue: {
      type: [String, Number],
      default: '' },

    tagTheme: {
      type: String,
      default: 'blue' },

    tagStyle: {
      type: Object,
      default: function _default() {return {};} } },


  computed: {
    newTheme: function newTheme() {
      var tagStyle = this.tagStyle;
      var tagValue = this.tagValue;
      var divStyle = {};
      var textStyle = {};
      if (tagStyle && tagStyle.fontSize) {
        textStyle = _objectSpread({},
        textStyle, {
          fontSize: "".concat(tagStyle.fontSize, "px") });

      }
      if (tagStyle && tagStyle.color) {
        textStyle = _objectSpread({},
        textStyle, {
          color: tagStyle.color });

      }

      if (tagStyle && tagStyle.borderColor) {
        divStyle = _objectSpread({},
        divStyle, {
          borderColor: tagStyle.borderColor });

      }

      if (tagStyle && tagStyle.borderWidth) {
        divStyle = _objectSpread({},
        divStyle, {
          borderWidth: "".concat(tagStyle.borderWidth, "px") });

      }

      if (tagStyle && tagStyle.borderRadius) {
        divStyle = _objectSpread({},
        divStyle, {
          borderRadius: "".concat(tagStyle.borderRadius, "px") });

      }

      if (tagStyle && tagStyle.backgroundColor) {
        divStyle = _objectSpread({},
        divStyle, {
          backgroundColor: tagStyle.backgroundColor });

      }

      if (tagStyle && tagStyle.height) {
        divStyle = _objectSpread({},
        divStyle, {
          height: "".concat(tagStyle.height, "px") });

      }

      if (tagStyle && tagStyle.width) {
        divStyle = _objectSpread({},
        divStyle, {
          width: "".concat(tagStyle.width, "px") });

      }

      if (tagValue && tagValue.length === 1) {
        divStyle = _objectSpread({},
        divStyle, {
          paddingLeft: 0,
          paddingRight: 0 });

      }

      return {
        divStyle: divStyle,
        textStyle: textStyle };

    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-text.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
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
var _default2 =
{
  props: {
    textValue: {
      type: String,
      default: '' },

    textTheme: {
      type: String,
      default: 'gray' },

    textStyle: {
      type: Object,
      default: function _default() {return {};} },

    hasTextMargin: {
      type: Boolean,
      default: true } },


  computed: {
    themeStyle: function themeStyle() {
      var style = {};
      var textStyle = this.textStyle;
      if (textStyle && textStyle.fontSize) {
        style = _objectSpread({},
        style, {
          fontSize: "".concat(textStyle.fontSize, "px"),
          height: "".concat(textStyle.fontSize * 1.2, "px") });

      }
      if (textStyle && textStyle.color) {
        style = _objectSpread({},
        style, {
          color: textStyle.color });

      }
      return style;
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-searchbar/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

































































































































































































var _type = __webpack_require__(/*! ./type */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\type.js"); //
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
//
//
//
var _default2 = { props: { disabled: { type: Boolean, default: false }, alwaysShowCancel: { type: Boolean, default: false }, inputType: { type: String, default: 'text' }, returnKeyType: { type: String, default: 'default' }, mod: { type: String, default: 'default' }, autofocus: { type: Boolean, default: false }, theme: { type: String, default: 'gray' }, barStyle: { type: Object, default: function _default() {return {};} }, defaultValue: { type: String, default: '' }, placeholder: { type: String, default: '搜索' }, cancelLabel: { type: String, default: '取消 ' }, depName: { type: String, default: '杭州' } }, computed: { needShowCancel: function needShowCancel() {return this.alwaysShowCancel || this.showCancel;}, buttonStyle: function buttonStyle() {var barStyle = this.barStyle;if (barStyle.backgroundColor) {return { backgroundColor: barStyle.backgroundColor };}return {};} }, data: function data() {return { inputIcon: _type.INPUT_ICON, closeIcon: _type.CLOSE_ICON, arrowIcon: _type.ARROW_ICON, showCancel: false, showClose: false, value: '' };}, created: function created() {this.defaultValue && (this.value = this.defaultValue);if (this.disabled) {this.showCancel = false;this.showClose = false;}}, methods: { onBlur: function onBlur() {var self = this;setTimeout(function () {self.showCancel = false;self.detectShowClose();self.$emit('wxcSearchbarInputOnBlur', { value: self.value });}, 10);}, autoBlur: function autoBlur() {this.$refs['search-input'].blur();}, onFocus: function onFocus() {if (this.isDisabled) {return;}this.showCancel = true;this.detectShowClose();this.$emit('wxcSearchbarInputOnFocus', { value: this.value });}, closeClicked: function closeClicked() {this.value = '';this.showCancel && (this.showCancel = false);this.showClose && (this.showClose = false);this.$emit('wxcSearchbarCloseClicked', { value: this.value });this.$emit('wxcSearchbarInputOnInput', { value: this.value });}, onInput: function onInput(e) {this.value = e.value;this.showCancel = true;this.detectShowClose();this.$emit('wxcSearchbarInputOnInput', { value: this.value });}, onSubmit: function onSubmit(e) {this.onBlur();this.value = e.value;this.showCancel = true;this.detectShowClose();this.$emit('wxcSearchbarInputReturned', { value: this.value });}, cancelClicked: function cancelClicked() {this.showCancel && (this.showCancel = false);this.showClose && (this.showClose = false);this.$emit('wxcSearchbarCancelClicked', { value: this.value });}, detectShowClose: function detectShowClose() {this.showClose = this.value.length > 0 && this.showCancel;}, depClicked: function depClicked() {this.$emit('wxcSearchbarDepChooseClicked', {});}, inputDisabledClicked: function inputDisabledClicked() {this.$emit('wxcSearchbarInputDisabledClicked', {});}, setValue: function setValue(value) {this.value = value;} } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-simple-flow\\index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-simple-flow/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default2 =
{
  props: {
    list: {
      type: Array,
      required: true },

    themeColor: {
      type: Object,
      default: function _default() {return {};} } },


  computed: {
    cItems: function cItems() {
      return this.adapter(this.list);
    } },

  methods: {
    adapter: function adapter(items) {var _this$themeColor =







      this.themeColor,lineColor = _this$themeColor.lineColor,pointInnerColor = _this$themeColor.pointInnerColor,pointBorderColor = _this$themeColor.pointBorderColor,highlightTitleColor = _this$themeColor.highlightTitleColor,highlightPointInnerColor = _this$themeColor.highlightPointInnerColor,highlightPointBorderColor = _this$themeColor.highlightPointBorderColor;
      var len = items.length;
      var pre = Date.now();

      return items.map(function (item, index) {
        item.key = "".concat(pre, "_").concat(index);
        item.__titleLineClass__ = [];
        item.__contentClass__ = [];
        item.__contentLineClass__ = [];
        item.__pointClass__ = [];
        item.__titleTextClass__ = [];
        item.__pointStyle__ = {};
        item.__lineStyle__ = {};
        item.__titleStyle__ = {};

        if (lineColor) item.__lineStyle__.backgroundColor = lineColor;
        if (pointInnerColor) item.__pointStyle__.backgroundColor = pointInnerColor;
        if (pointBorderColor) item.__pointStyle__.borderColor = pointBorderColor;

        if (index === 0) {
          item.__titleLineClass__.push('first-one-title-line');
        }

        if (index === len - 1) {
          item.__titleLineClass__.push('last-one-title-line');
          item.__contentClass__.push('last-one-content');
          item.__contentLineClass__.push('last-one-content-line');
        }

        if (item.highlight) {
          item.__pointClass__.push('highlight-point');
          item.__titleTextClass__.push('text-highlight-title');
          if (highlightTitleColor) item.__titleStyle__.color = highlightTitleColor;
          if (highlightPointInnerColor) item.__pointStyle__.backgroundColor = highlightPointInnerColor;
          if (highlightPointBorderColor) item.__pointStyle__.borderColor = highlightPointBorderColor;
        }
        return item;
      });
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slide-nav\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-slide-nav/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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

var DOM = weex.requireModule('dom');
var Animation = weex.requireModule('animation');
var OFFSET_ACCURACY = 10;
var SCALE = weex.config.env.platform.toLowerCase() === 'web' ? 2 : 1;

function _toNum(str) {
  return typeof str === 'number' ? str : parseFloat((str || '').replace(/px$/i, ''));
}

function _getHeight(element, callback) {
  if (!element) {
    return;
  }
  if (element.__cacheHeight) {
    element.__cacheHeight && callback && callback(element.__cacheHeight);
  } else {
    DOM.getComponentRect(element, function (res) {
      var height = (parseFloat(res && res.size && res.size.height) || 0) / SCALE;
      height && callback && callback(element.__cacheHeight = height);
    });
  }
}var _default =

{

  props: {
    position: {
      'type': String,
      'default': 'top' },


    height: [String, Number] },


  data: function data() {
    return {
      visible: true };

  },

  watch: {
    visible: function visible(newVal) {
      newVal ? this._slideIn() : this._slideOut();
    } },


  created: function created() {
    this._height = _toNum(this.height) || 0;
    this._isBottom = this.position === 'bottom';
    this._direction = this._isBottom ? 1 : -1;
  },

  methods: {

    _slideOut: function _slideOut() {var _this = this;
      this.getHeight(function (height) {
        _this.$emit('slideOut');
        _this.slideY(height * _this._direction * SCALE, function () {
          _this.$emit('slideOutEnd');
        });
      });
    },

    _slideIn: function _slideIn() {var _this2 = this;
      this.getHeight(function (height) {
        _this2.$emit('slideIn');
        _this2.slideY(0, function () {
          _this2.$emit('slideInEnd');
        });
      });
    },

    getHeight: function getHeight(callback) {
      return _getHeight(this.$refs.wrapper, callback);
    },

    slideOut: function slideOut() {
      this.visible = false;
    },

    slideIn: function slideIn() {
      this.visible = true;
    },

    slideY: function slideY(y, callback) {
      Animation.transition(this.$refs.wrapper, {
        styles: { transform: 'translateY(' + y + 'px)' },
        duration: 150, //ms
        timingFunction: 'ease',
        delay: 0 //ms
      }, callback);
    } },


  handleTouchStart: function handleTouchStart(e) {
    var touch = e.changedTouches[0];
    this._touchParams = {
      pageY: touch.screenY,
      startY: touch.screenY,
      lastPageY: touch.screenY,
      timeStamp: e.timeStamp,
      direction: -1 };

  },

  handleTouchMove: function handleTouchMove(e, bottomNav) {
    var tp = this._touchParams;
    var touch = e.changedTouches[0];
    var offsetY;

    // 安卓下滚动的时候经常不触发touchstart事件
    if (!tp || tp.hasEnd) {
      return this._touchParams = {
        pageY: touch.screenY,
        startY: touch.screenY,
        lastPageY: touch.screenY,
        timeStamp: e.timeStamp,
        direction: -1 };

    }

    offsetY = touch.screenY - tp.pageY;

    tp.lastPageY = tp.pageY;
    tp.lastDirection = tp.direction;
    tp.direction = offsetY > 0 ? 1 : -1;

    if (tp.lastDirection !== tp.direction) {
      tp.startY = tp.lastPageY;
    }

    tp.pageY = touch.screenY;
    tp.offsetY = tp.pageY - tp.startY;

    if (!this.__scrollable && bottomNav) {
      if (tp.offsetY <= -OFFSET_ACCURACY) {
        bottomNav.slideOut();
      } else if (tp.offsetY >= OFFSET_ACCURACY) {
        bottomNav.slideIn();
      }
    }
  },

  handleTouchEnd: function handleTouchEnd() {
    var tp = this._touchParams;
    tp && (tp.hasEnd = true);
  },

  handleScroll: function handleScroll(e, scroller, topNav, bottomNav, startThreshold) {var _this3 = this;var moveThreshold = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;
    var scrollY = e.contentOffset.y;
    var nav = topNav || bottomNav;
    var scrollFn = function scrollFn(maxScrollY) {
      if (-scrollY > maxScrollY) {
        return;
      }
      maxScrollY = Math.abs(maxScrollY);
      if (Math.abs(scrollY) < startThreshold) {
        if (Math.abs(scrollY) >= maxScrollY - OFFSET_ACCURACY) {
          var tp = _this3._touchParams;
          if (!tp) {
            return;
          }
          var offsetY = tp.offsetY;
          if (offsetY < -OFFSET_ACCURACY) {
            bottomNav && bottomNav.slideOut();
          } else if (offsetY > OFFSET_ACCURACY) {
            bottomNav && bottomNav.slideIn();
          }
        } else {
          topNav && topNav.slideIn();
          bottomNav && bottomNav.slideIn();
        }
      } else {
        var _tp = _this3._touchParams;
        if (!_tp) {
          return;
        }
        var _offsetY = _tp.offsetY;
        if (Math.abs(_offsetY) >= moveThreshold) {
          if (_offsetY > 0) {
            topNav && topNav.slideIn();
            bottomNav && bottomNav.slideIn();
          } else {
            topNav && topNav.slideOut();
            bottomNav && bottomNav.slideOut();
          }
        }
      }
    };

    var maxScrollYCheck = function maxScrollYCheck(maxScrollY) {
      if (!_this3.__scrollable) {
        return;
      }
      if (startThreshold) {
        scrollFn(maxScrollY);
      } else {
        nav.getHeight(function (navHeight) {
          startThreshold = navHeight;
          scrollFn(maxScrollY);
        });
      }
    };

    if (!nav) {
      return;
    }

    _getHeight(scroller, function (scrollerHeight) {
      var maxScrollY = e.contentSize.height - scrollerHeight;
      _this3.__scrollable = maxScrollY >= OFFSET_ACCURACY;

      if (bottomNav) {
        bottomNav.getHeight(function (height) {
          _this3.__scrollable = maxScrollY >= height;
          maxScrollYCheck(maxScrollY);
        });
      } else {
        maxScrollYCheck(maxScrollY);
      }
    });
  } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slider-bar\\index.vue":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-slider-bar/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;















































var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));
var _bindEnv = _interopRequireDefault(__webpack_require__(/*! ../utils/bind-env */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\bind-env.js"));
var _indexWeex = _interopRequireDefault(__webpack_require__(/*! weex-bindingx/lib/index.weex.js */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-bindingx\\lib\\index.weex.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var animation = weex.requireModule('animation');var dom = weex.requireModule('dom');var _default = { data: function data() {return { env: 'weex', diffX1: 0, diffX2: 0, barWidth: 0, preventMoveEvent: true, minDist: 0, selectRange: [0, 0], blockRadius: 28, DPR: 1, timeout: 100, isAndroid: _utils.default.env.isAndroid() };}, props: { length: { type: Number, default: 500 }, height: { type: Number, default: 4 }, // 是否双滑块模式
    range: { type: Boolean, default: false }, // 最小值
    min: { type: Number, default: 0 }, // 最大值
    max: { type: Number, default: 100 }, // 最小取值范围，用于范围选择范围最小差值
    minDiff: { type: Number, default: 5 }, // 设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]
    value: { type: [Number, Array], default: 0 },
    // 设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]
    defaultValue: {
      type: [Number, Array],
      default: 0 },

    // 值为 true 时，滑块为禁用状态
    disabled: {
      type: Boolean,
      default: false },

    invalidColor: {
      type: String,
      default: '#E0E0E0' },

    validColor: {
      type: String,
      default: '#EE9900' },

    disabledColor: {
      type: String,
      default: '#AAA' } },


  watch: {
    value: function value(e) {
      if (!this.range) {
        this.diffX1 = this._getDiffX(e || this.defaultValue);
      } else {
        this.diffX1 = this._getDiffX(e[0] || this.defaultValue[0]);
        this.diffX2 = this._getDiffX(e[1] || this.defaultValue[1]);
        this.barWidth = this.diffX2 - this.diffX1;
      }
    } },

  created: function created() {
    if (_utils.default.env.isWeb()) {
      this.env = 'web';
      this.DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    } else {
      this.DPR = weex.config.env.scale;
    }
  },
  mounted: function mounted() {var _this = this;
    this.block1 = this.$refs['slide-block-1']; // 左侧滑块
    this.block2 = this.$refs['slide-block-2']; // 右侧滑块
    this.valueBar = this.$refs['value-bar']; // 黄色值条
    this.barContainer = this.$refs['bar-container']; // 滚动条容器

    if (!this.range) {
      this.diffX1 = this._getDiffX(this.value || this.defaultValue);
    } else {
      this.diffX1 = this._getDiffX(this.value[0] || this.defaultValue[0]);
      this.diffX2 = this._getDiffX(this.value[1] || this.defaultValue[1]);
      this.barWidth = this.diffX2 - this.diffX1;
    }

    // 是否支持expresstionBinding
    if (_bindEnv.default.supportsEB() && _indexWeex.default.prepare) {
      this.block1 && _indexWeex.default.prepare({
        anchor: this.block1.ref,
        eventType: 'pan' });

      this.block2 && _indexWeex.default.prepare({
        anchor: this.block2.ref,
        eventType: 'pan' });

      this.valueBar && _indexWeex.default.prepare({
        anchor: this.valueBar.ref,
        eventType: 'pan' });

    }

    if (this.range) {
      this.selectRange = this.value || this.defaultValue; // 初始化范围选择返回数据
      this.minDist = this.minDiff / (this.max - this.min) * this.length; // 滑块1、2之前最小间距
    }

    // 由于weex在mounted后渲染是异步的不能确保元素渲染完成，需要异步执行
    setTimeout(function () {
      dom.getComponentRect(_this.barContainer, function (option) {var
        left = option.size.left;
        _this.leftDiffX = left;
      });
    }, 100);
  },

  computed: {
    containerStyle: function containerStyle() {
      return {
        width: "".concat(this.length + 56, "px"),
        height: '56px' };

    },
    rangeBarStyle: function rangeBarStyle() {
      return {
        width: "".concat(this.length, "px"),
        height: "".concat(this.height, "px"),
        flexDirection: 'row',
        backgroundColor: this.invalidColor };

    },
    valueBarStyle: function valueBarStyle() {
      var left = 0;
      var width = 0;

      if (!this.range) {
        left = this.diffX1 - this.length;
        width = this.length;
      } else {
        left = this.diffX1;
        width = this.diffX2 - this.diffX1;
      }

      return {
        width: width + 'px',
        height: this.height + 'px',
        transform: "translateX(".concat(left, "px)"),
        backgroundColor: this.disabled ? this.disabledColor : this.validColor };

    },
    blockStyle1: function blockStyle1() {
      var left = this.diffX1;
      return {
        transform: "translateX(".concat(left, "px)") };

    },
    blockStyle2: function blockStyle2() {
      return {
        transform: "translateX(".concat(this.diffX2, "px)") };

    } },

  methods: {

    // 更新单选值或最小值
    weexHandler1: function weexHandler1(e) {var _this2 = this;
      var self = this;
      switch (e.state) {
        case 'start':
          self.bindBlock1();
          break;
        case 'move':
          dom.getComponentRect(this.block1, function (option) {var
            left = option.size.left;
            var value = _this2._getValue(left - _this2.leftDiffX);
            if (!_this2.range) {
              _this2.$emit('updateValue', value);
            } else {
              _this2.selectRange[0] = value;
              _this2.$emit('updateValue', _this2.selectRange);
            }
          });
          break;
        case 'end':
          break;
        default:
          break;}

    },

    // 更新最大值
    weexHandler2: function weexHandler2(e) {var _this3 = this;
      var self = this;

      switch (e.state) {
        case 'start':
          self.bindBlock2();
          break;
        case 'move':
          dom.getComponentRect(this.block2, function (option) {var
            left = option.size.left;
            _this3.selectRange[1] = _this3._getValue(left - _this3.leftDiffX);
            _this3.$emit('updateValue', _this3.selectRange);
          });
          break;
        case 'end':
          break;
        default:
          break;}

    },

    weexStartHandler1: function weexStartHandler1() {var _this4 = this;
      // 由于android端不支持 horizontalpan 的move事件，使用setInterval hack方案
      if (!this.isAndroid) {
        return;
      }
      this.firstInterval = setInterval(function () {
        dom.getComponentRect(_this4.block1, function (option) {var
          left = option.size.left;
          var value = _this4._getValue(left - _this4.leftDiffX);
          if (!_this4.range) {
            _this4.$emit('updateValue', value);
          } else {
            _this4.selectRange[0] = value;
            _this4.$emit('updateValue', _this4.selectRange);
          }
        });
      }, this.timeout);
    },

    weexStartHandler2: function weexStartHandler2() {var _this5 = this;
      if (!this.isAndroid) {
        return;
      }
      // 由于android端不支持 horizontalpan 的move事件，使用setInterval hack方案
      this.secondInterval = setInterval(function () {
        dom.getComponentRect(_this5.block2, function (option) {var
          left = option.size.left;
          _this5.selectRange[1] = _this5._getValue(left - _this5.leftDiffX);
          _this5.$emit('updateValue', _this5.selectRange);
        });
      }, this.timeout);
    },

    // 清除定时器
    weexEndHandler: function weexEndHandler() {
      if (!this.isAndroid) {
        return;
      }
      this.firstInterval && clearInterval(this.firstInterval);
      this.secondInterval && clearInterval(this.secondInterval);
    },

    webStartHandler: function webStartHandler(e) {
      if (this.env === 'weex') {
        return;
      }
      this.startX = e.touch.clientX;
      this.startDiffX1 = this.diffX1;
      this.startDiffX2 = this.diffX2;
    },

    webMoveHandler1: function webMoveHandler1(e) {
      if (this.env === 'weex' || this.disabled) {
        return;
      }

      var deltaX = (e.touch.clientX - this.startX) * this.DPR;
      var diff = this.startDiffX1 + deltaX;

      var max = this.length;
      if (this.range) {
        max = this.diffX2 - this.minDist;
      }

      if (diff > 0 && diff < max) {
        this.diffX1 = diff;
        animation.transition(this.block1, {
          styles: {
            transform: "translateX(".concat(this.diffX1, "px)") } },

        function () {});
        if (!this.range) {
          this.$emit('updateValue', this._getValue(this.diffX1));
        } else {
          this.selectRange[0] = this._getValue(this.diffX1);
          this.$emit('updateValue', this.selectRange);
        }
      }
    },

    webMoveHandler2: function webMoveHandler2(e) {
      if (this.env === 'weex' || this.disabled) {
        return;
      }

      var deltaX = (e.touch.clientX - this.startX) * this.DPR;
      var diff = this.startDiffX2 + deltaX;
      var min = this.diffX1 + this.minDist;
      var max = this.length;

      if (diff > min && diff < max) {
        this.diffX2 = diff;
        animation.transition(this.block2, {
          styles: {
            transform: "translateX(".concat(this.diffX2, "px)") } },

        function () {});
        if (!this.range) {
          this.$emit('updateValue', this._getValue(this.diffX2));
        } else {
          this.selectRange[1] = this._getValue(this.diffX2);
          this.$emit('updateValue', this.selectRange);
        }
      }
    },

    bindBlock1: function bindBlock1() {
      var self = this;

      // 如果禁用，不行进行表达式绑定
      if (self.disabled) {
        _indexWeex.default.unbind({
          token: this.gesToken1,
          eventType: 'pan' });

        this.gesToken1 = 0;
        return;
      }

      // 初始化按钮&条的大小范围
      var blockMax1 = 0;
      if (self.range) {
        blockMax1 = self.diffX2 - self.minDist;
      } else {
        blockMax1 = self.length;
      }

      var barMax1 = self.diffX2;

      if (!self.range) {

        var startLeft = self.diffX1 - blockMax1 - self.minDist;

        var props = [{
          element: self.block1.ref,
          property: 'transform.translateX',
          expression: "min(".concat(blockMax1, ", max(x + ").concat(self.diffX1, ", 0))") },
        {
          element: self.valueBar.ref,
          property: 'transform.translateX',
          expression: "min(0, max(x + ".concat(startLeft, ", -").concat(blockMax1, "))") }];


        var gesTokenObj = _indexWeex.default.bind({
          anchor: self.block1.ref,
          eventType: 'pan',
          props: props },
        function (e) {
          if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
            var range = self.getRange();
            // 限制diffX1范围
            self.diffX1 = self._restrictValue(range.rangeX1, self.diffX1 + e.deltaX);
            self.bindBlock1();
          }
        });
        this.gesToken1 = gesTokenObj.token;
      } else {

        // 选范围
        var _props = [{
          element: self.block1.ref,
          property: 'transform.translateX',
          expression: "min(".concat(blockMax1, ", max(x + ").concat(self.diffX1, ", 0))") },
        {
          element: self.valueBar.ref,
          property: 'transform.translateX',
          expression: "min(".concat(blockMax1, ", max(x + ").concat(self.diffX1, ", 0))") },
        {
          element: self.valueBar.ref,
          property: 'width',
          expression: "min(".concat(barMax1, ", max(0, ").concat(self.barWidth, " - x))") }];


        var _gesTokenObj = _indexWeex.default.bind({
          anchor: self.block1.ref,
          eventType: 'pan',
          props: _props },
        function (e) {
          if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
            var range = self.getRange();
            self.barWidth = self._restrictValue(range.rangeX1, self.barWidth - e.deltaX);
            self.diffX1 = self._restrictValue(range.rangeX1, self.diffX1 + e.deltaX);
            self.bindBlock1();
          }
        });
        this.gesToken1 = _gesTokenObj.token;
      }
    },

    bindBlock2: function bindBlock2() {
      var self = this;

      // 如果禁用，不行进行表达式绑定
      if (self.disabled) {
        _indexWeex.default.unbind({
          token: this.gesToken2,
          eventType: 'pan' });

        this.gesToken2 = 0;
        return;
      }

      // 初始化按钮&条的大小范围
      var blockMax1 = 0;
      if (self.range) {
        blockMax1 = self.diffX2 - self.minDist;
      } else {
        blockMax1 = self.length;
      }

      var blockMax2 = self.length;
      var blockMin2 = self.diffX1 + self.minDist;
      var barMax2 = self.length - self.diffX1;

      var props = [{
        element: self.block2.ref,
        property: 'transform.translateX',
        expression: "min(".concat(blockMax2, ", max(x + ").concat(self.diffX2, ", ").concat(blockMin2, "))") },
      {
        element: self.valueBar.ref,
        property: 'width',
        expression: "min(".concat(barMax2, ", max(0, x + ").concat(self.barWidth, "))") }];


      var gesTokenObj = _indexWeex.default.bind({
        anchor: self.block2.ref,
        eventType: 'pan',
        props: props },
      function (e) {
        if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
          var range = self.getRange();
          self.barWidth = self._restrictValue([0, self.length - self.diffX1], self.barWidth + e.deltaX);
          self.diffX2 = self._restrictValue(range.rangeX2, self.diffX2 + e.deltaX);
          self.bindBlock2();
        }
      });
      this.gesToken2 = gesTokenObj.token;
    },

    // 获取diffx1 diffx2 取值范围
    getRange: function getRange() {
      if (!this.range) {
        return {
          rangeX1: [0, this.length] };

      } else {
        return {
          rangeX1: [0, this.diffX2 - this.minDist],
          rangeX2: [this.diffX1 + this.minDist, this.length] };

      }
    },

    // 限制取值范围
    _restrictValue: function _restrictValue(range, value) {
      if (range && range.length && range.length === 2) {
        if (value < range[0]) {
          return range[0];
        } else if (value > range[1]) {
          return range[1];
        } else {
          return value;
        }
      }
      return;
    },

    // 根据x方向偏移量计算value
    _getValue: function _getValue(diffX) {
      return Math.round(diffX / this.length * (this.max - this.min) + this.min);
    },

    // 根据value和length计算x方向偏移值
    _getDiffX: function _getDiffX(value) {
      return (value - this.min) / (this.max - this.min) * this.length;
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.vue":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-special-rich-text/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;















































































var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));





var _wxcRichTextText = _interopRequireDefault(__webpack_require__(/*! ../wxc-rich-text/wxc-rich-text-text.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue"));
var _wxcRichTextTag = _interopRequireDefault(__webpack_require__(/*! ../wxc-rich-text/wxc-rich-text-tag.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _weex$config$env = weex.config.env,appName = _weex$config$env.appName,osName = _weex$config$env.osName,deviceWidth = _weex$config$env.deviceWidth;var needHack = (_utils.default.env.isAlipay() || appName === 'UC' || appName === 'TUnionSDK') && osName !== 'iOS' || _utils.default.env.isAndroid();var isPad = osName === 'iOS' && deviceWidth > 1300;var _default2 =

{
  components: {
    WxcRichTextText: _wxcRichTextText.default,
    WxcRichTextTag: _wxcRichTextTag.default },

  props: {
    configList: {
      type: [Array, String],
      default: function _default() {return {};} } },


  data: function data() {return {
      iconWidth: 90,
      iconHeight: 24,
      needHack: needHack };},

  computed: {
    newList: function newList() {var
      configList = this.configList,iconHeight = this.iconHeight,iconWidth = this.iconWidth,needHack = this.needHack;
      if (_utils.default.isNonEmptyArray(configList) && configList.length === 2) {
        var r1 = configList[0];
        var r2 = configList[1];
        var iconStyle = r1.style;
        var textStyle = r2.style;
        var style = {};
        var fontSize = 24;
        var tagWidth = iconStyle && iconStyle.width ? iconStyle.width : 24;

        if (textStyle && textStyle.fontSize && !isNaN(textStyle.fontSize)) {
          fontSize = textStyle.fontSize;
          style = {
            fontSize: "".concat(textStyle.fontSize, "px"),
            lineHeight: "".concat(Number(textStyle.fontSize * 1.4).toFixed(2), "px") };

        }

        if (textStyle && textStyle.color) {
          style = _objectSpread({},
          style, {
            color: textStyle.color });

        }

        if (textStyle && textStyle.lines) {
          style = _objectSpread({},
          style, {
            lines: textStyle.lines });

        }

        if (r1.type === 'icon' && iconStyle && iconStyle.height && !iconStyle.width) {
          tagWidth = parseInt(iconWidth * (iconStyle.height / iconHeight));
          r1 = _objectSpread({},
          r1, {
            style: {
              width: tagWidth + 'px',
              height: iconStyle.height + 'px' } });


        }

        if (r1.type === 'icon' && !(iconStyle && iconStyle.height)) {
          r1 = _objectSpread({},
          r1, {
            style: {
              width: iconWidth + 'px',
              height: iconHeight + 'px' } });


        }

        if (r1.type === 'tag' && iconStyle && iconStyle.width) {
          r1 = _objectSpread({},
          r1, {
            style: _objectSpread({}, iconStyle, { width: null }) });

        }

        var blank = '';
        var num = Math.ceil(tagWidth / fontSize) + 1;

        if (r1.type === 'tag' && r1.value) {
          num = this.countString(r1.value);
        }

        var tagMoreBlank = (!isPad && num < 7 ? '  ' : '') + (needHack ? '  ' : '') + (isPad && num < 3 ? '    ' : '');
        var iconMoreBlank = num > 2 ? needHack ? '     ' : '   ' : ' ';
        if (r1.type === 'tag') {
          blank = new Array(num).join('  ') + tagMoreBlank;
        } else if (r1.type === 'icon') {
          blank = new Array(num).join('  ') + iconMoreBlank;
        }
        blank += isPad && num > 2 ? '     ' : '';
        var newValue = r2.value ? blank + " ".concat(r2.value) : '';

        r2 = _objectSpread({},
        r2, {
          style: style,
          value: newValue });


        return [r1, r2];
      } else {
        return configList;
      }
    },
    top: function top() {var
      configList = this.configList,needHack = this.needHack;
      if (_utils.default.isNonEmptyArray(configList) && configList.length === 2) {
        var iconStyle = configList[0].style;
        var textStyle = configList[1].style;
        var fontSize = 24;
        var tagHeight = iconStyle && iconStyle.height ? iconStyle.height : 26;
        if (textStyle && textStyle.fontSize) {
          fontSize = textStyle.fontSize;
        }
        var d = needHack ? 1.1 : 1.4;
        return Math.ceil((fontSize * d - tagHeight) / 2);
      } else {
        return 0;
      }
    } },

  methods: {
    onLoad: function onLoad(e) {
      if (e.success && e.size && e.size.naturalWidth > 0) {var _e$size =
        e.size,naturalWidth = _e$size.naturalWidth,naturalHeight = _e$size.naturalHeight;
        this.iconWidth = naturalWidth;
        this.iconHeight = naturalHeight;
      } else {var
        configList = this.configList;
        if (_utils.default.isNonEmptyArray(configList) && configList.length === 2) {var
          style = configList[0].style;
          if (style && style.height && style.width) {
            this.iconWidth = style.width;
            this.iconHeight = style.height;
          }
        }
      }
    },
    countString: function countString(str) {
      var chineseRegex = /[^ -~]/g;
      return str.replace(chineseRegex, '**').length;
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-stepper\\index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-stepper/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  props: {
    min: {
      type: [String, Number],
      default: 1 },

    max: {
      type: [String, Number],
      default: 100 },

    step: {
      type: [String, Number],
      default: 1 },

    disabled: {
      type: Boolean,
      default: false },

    defaultValue: {
      type: [String, Number],
      default: 1 },

    readOnly: {
      type: Boolean,
      default: false } },


  computed: {
    disableStyle: function disableStyle() {
      if (this.disabled) {
        return {
          color: '#cccccc' };

      }
    },
    valueString: function valueString() {
      return this.value.toString();
    } },

  data: function data() {return {
      value: 1,
      isLess: false,
      isOver: false };},

  watch: {
    defaultValue: function defaultValue(newNum) {
      this.value = newNum;
    } },

  created: function created() {
    this.value = parseInt(this.defaultValue, 10);
    if (this.disabled) {
      this.isLess = true;
      this.isOver = true;
    }
  },
  methods: {
    minusClicked: function minusClicked() {
      if (this.disabled) {
        return;
      }
      var isMinOver = this.value <= this.min;
      var nowNum = this.value - parseInt(this.step, 10);
      if (isMinOver) {
        this.$emit('wxcStepperValueIsMinOver', { value: this.value });
      } else {
        this.value = nowNum;
        this.resetDisabledStyle();
      }
      // 由于此处已经减step
      if (nowNum <= this.min) {
        this.value = parseInt(this.min, 10);
        this.isLess = true;
      }
      this.$emit('wxcStepperValueChanged', { value: this.value });
    },
    plusClicked: function plusClicked() {
      if (this.disabled) {
        return;
      }
      var isMaxOver = this.value >= this.max;
      var nowNum = this.value + parseInt(this.step, 10);
      if (isMaxOver) {
        this.$emit('wxcStepperValueIsMaxOver', { value: this.value });
      } else {
        this.value = nowNum;
        this.resetDisabledStyle();
      }
      // 由于此处已经加step
      if (nowNum >= this.max) {
        this.value = parseInt(this.max, 10);
        this.isOver = true;
      }
      this.$emit('wxcStepperValueChanged', { value: this.value });
    },
    onInput: function onInput(e) {
      this.correctInputValue(e.value);
    },
    onBlur: function onBlur(e) {
      this.correctInputValue(e.value);
    },
    correctInputValue: function correctInputValue(v) {
      if (/^[1-9]\d{0,}$/.test(v) && parseInt(v, 10) >= this.min && parseInt(v, 10) <= this.max) {
        this.value = parseInt(v, 10);
      }
      this.$emit('wxcStepperValueChanged', { value: this.value });
    },

    resetDisabledStyle: function resetDisabledStyle() {
      this.isLess = false;
      this.isOver = false;
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-swipe-action\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-swipe-action/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





























































var _indexWeex = _interopRequireDefault(__webpack_require__(/*! weex-bindingx/lib/index.weex.js */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-bindingx\\lib\\index.weex.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var animation = weex.requireModule("animation");var _default = { props: { data: { type: Array, default: [] } }, data: function data() {return { mobileX: 0, webStarX: 0, saveIdx: null, isAndroid: _utils.default.env.isAndroid() };}, methods: { special: function special(dom, styles) {animation.transition(dom, { styles: styles, duration: 200, //ms
        timingFunction: "ease", delay: 100 //ms
      });}, onRightNode: function onRightNode(pNode, node, i) {node.onPress();if (pNode.autoClose) this.special(this.$refs.skid[i], { transform: "translate(0, 0)" });}, onNodeClick: function onNodeClick(node, i) {if (this.mobileX < 0) {this.mobileX = 0;this.special(this.$refs.skid[this.saveIdx], { transform: "translate(0, 0)" });this.isAndroid && this.special(this.$refs.skid[i], { transform: "translate(0, 0)" });} else {this.$emit("onNodeClick", node, i);}}, onPanEnd: function onPanEnd(e, node, i) {if (_utils.default.env.isWeb()) {var webEndX = e.changedTouches[0].pageX;this.movingDistance(webEndX - this.webStarX, node, this.$refs.skid[i]);}}, onPanStart: function onPanStart(e, node, i) {var saveIdx = this.saveIdx;if (saveIdx !== i && saveIdx !== null) {this.special(this.$refs.skid[saveIdx], { transform: "translate(0, 0)" });this.mobileX = 0;}this.saveIdx = i;!_utils.default.env.isWeb() ? this.mobile(e, node, i) : this.web(e, node, i);
      e.stopPropagation();
    },
    web: function web(e, node, i) {
      this.webStarX = e.changedTouches[0].pageX;
    },
    mobile: function mobile(e, node, i) {var _this = this;
      var el = this.$refs["skid"][i];
      _indexWeex.default.bind(
      {
        anchor: el.ref,
        eventType: "pan",
        props: [
        {
          element: el.ref,
          property: "transform.translateX",
          expression: "x+".concat(this.isAndroid ? 0 : this.mobileX) }] },



      function (e) {var
        state = e.state,deltaX = e.deltaX;
        if (state === "end") {
          _this.mobileX += deltaX;
          _this.movingDistance(_this.mobileX, node, el);
        }
      });

    },
    movingDistance: function movingDistance(scope, node, el) {
      var len = node.right ? node.right.length : 0;
      var distance = len * -100;
      if (scope < -30) {
        this.special(el, {
          transform: "translate(".concat(distance, "px, 0)") });

        this.mobileX = distance;
      } else {
        this.special(el, {
          transform: "translate(0, 0)" });

        this.mobileX = 0;
      }
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-bar\\index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-bar/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;























































































































var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var dom = weex.requireModule('dom');var animation = weex.requireModule('animation');var _default2 = { props: { tabTitles: { type: Array, default: function _default() {return [];} }, tabStyles: { type: Object, default: function _default() {return { bgColor: '#FFFFFF', titleColor: '#666666', activeTitleColor: '#3D3D3D', activeBgColor: '#FFFFFF', isActiveTitleBold: true, iconWidth: 70, iconHeight: 70, width: 160, height: 120, fontSize: 24, activeBottomColor: '#FFC900', activeBottomWidth: 120, activeBottomHeight: 6, textPaddingLeft: 10, textPaddingRight: 10 };} }, titleType: { type: String, default: 'icon' }, titleUseSlot: { type: Boolean, default: false }, isTabView: { type: Boolean, default: true }, duration: { type: [Number, String], default: 300 }, timingFunction: { type: String, default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }, wrapBgColor: { type: String, default: '#f2f3f4' } }, data: function data() {return { currentPage: 0, translateX: 0 };}, created: function created() {var titleType = this.titleType,tabStyles = this.tabStyles;if (titleType === 'iconFont' && tabStyles.iconFontUrl) {dom.addRule('fontFace', { 'fontFamily': "wxcIconFont", 'src': "url('".concat(tabStyles.iconFontUrl, "')") });}this.isIPhoneX = _utils.default.env.isIPhoneX();}, methods: { next: function next() {var page = this.currentPage;if (page < this.tabTitles.length - 1) {page++;}this.setPage(page);}, prev: function prev() {var page = this.currentPage;if (page > 0) {page--;}this.setPage(page);}, setPage: function setPage(page) {var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;if (!this.isTabView) {this.currentPage = page;this._animateTransformX(page, animated);this.$emit('wxcTabBarCurrentTabSelected', { page: page });this.jumpOut(url);return;}var previousPage = this.currentPage;var currentTabEl = this.$refs["wxc-tab-title-".concat(page)][0];var width = this.tabStyles.width;var appearNum = parseInt(750 / width);var tabsNum = this.tabTitles.length;var offset = page > appearNum ? -(750 - width) / 2 : -width * 2;if (appearNum < tabsNum) {(previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, { offset: offset, animated: animated });page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, { offset: -width * page, animated: animated });}this.currentPage = page;this._animateTransformX(page, animated);this.$emit('wxcTabBarCurrentTabSelected', { page: page });}, jumpOut: function jumpOut(url) {url && _utils.default.goToH5Page(url);}, _animateTransformX: function _animateTransformX(page, animated) {var duration = this.duration,timingFunction = this.timingFunction;var computedDur = animated ? duration : 0.00001;
      var containerEl = this.$refs["tab-container"];
      var dist = page * 750;
      animation.transition(containerEl, {
        styles: {
          transform: "translateX(".concat(-dist, "px)") },

        duration: computedDur,
        timingFunction: timingFunction,
        delay: 0 },
      function () {
      });
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\full-page.vue":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-page/full-page.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






























































































var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));
var _bindEnv = _interopRequireDefault(__webpack_require__(/*! ../utils/bind-env */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\bind-env.js"));
var _indexWeex = _interopRequireDefault(__webpack_require__(/*! weex-bindingx/lib/index.weex.js */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-bindingx\\lib\\index.weex.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var dom = weex.requireModule('dom');var animation = weex.requireModule('animation');var swipeBack = weex.requireModule('swipeBack');var expressionBinding = weex.requireModule('expressionBinding');var isIos = _utils.default.env.isIOS();var _default2 = { props: { tabTitles: { type: Array, default: function _default() {return [];} }, panDist: { type: Number, default: 200 }, spmC: { type: [String, Number], default: '' }, tabStyles: { type: Object, default: function _default() {return { titleColor: '#666666', activeTitleColor: '#3D3D3D', isActiveTitleBold: true, width: 160, height: 40, fontSize: 24, textPaddingLeft: 10, textPaddingRight: 10 };} }, titleType: { type: String, default: 'icon' }, tabPageHeight: { type: [String, Number], default: 1334 }, needSlider: { type: Boolean, default: true }, duration: { type: [Number, String], default: 300 }, timingFunction: { type: String, default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' } }, data: function data() {return { currentPage: 0, isMoving: false, deltaX: 0 };}, mounted: function mounted() {// ios 下面禁止左滑出去
    if (swipeBack && swipeBack.forbidSwipeBack) {swipeBack.forbidSwipeBack(true);}if (_bindEnv.default.supportsEBForIos() && this.needSlider) {var tabPageEl = this.$refs['tab-page-wrap'];_indexWeex.default.prepare && _indexWeex.default.prepare({ anchor: tabPageEl.ref, eventType: 'pan' });}}, methods: { next: function next() {var page = this.currentPage;if (page < this.tabTitles.length - 1) {page++;}this.setPage(page);}, prev: function prev() {var page = this.currentPage;if (page > 0) {page--;}this.setPage(page);}, startHandler: function startHandler(e) {if (_bindEnv.default.supportsEBForIos() && this.isTabView && this.needSlider) {this.bindExp(this.$refs['tab-page-wrap']);}}, bindExp: function bindExp(element) {var _this = this;
      if (element && element.ref) {

        if (this.isMoving && this.gesToken !== 0) {
          _indexWeex.default.unbind({
            eventType: 'pan',
            token: this.gesToken });

          this.gesToken = 0;
          return;
        }

        var tabElement = this.$refs['tab-container'];var
        currentPage = this.currentPage,panDist = this.panDist;
        var dist = currentPage * 750;

        // x-dist

        var props = [{
          element: tabElement.ref,
          property: 'transform.translateX',
          expression: "{\"type\":\"CallExpression\",\"children\":[{\"type\":\"Identifier\",\"value\":\"min\"},{\"type\":\"Arguments\",\"children\":[{\"type\":\"NumericLiteral\",\"value\":0},{\"type\":\"CallExpression\",\"children\":[{\"type\":\"Identifier\",\"value\":\"max\"},{\"type\":\"Arguments\",\"children\":[{\"type\":\"NumericLiteral\",\"value\":".concat(-(tabTitles.length - 1) * 750, "},{\"type\":\"-\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":").concat(dist, "}]}]}]}]}]}") }];


        var gesTokenObj = _indexWeex.default.bind({
          anchor: element.ref,
          eventType: 'pan',
          props: props },
        function (e) {var
          deltaX = e.deltaX,state = e.state;
          if (state === 'end') {
            if (deltaX < -panDist) {
              _this.next();
            } else if (deltaX > panDist) {
              _this.prev();
            } else {
              _this.setPage(currentPage);
            }
          }
        });
        this.gesToken = gesTokenObj.token;
      }
    },
    setPage: function setPage(page) {
      if (this.isMoving === true) {
        return;
      }
      this.isMoving = true;
      var previousPage = this.currentPage;
      var currentTabEl = this.$refs["wxc-tab-title-".concat(page)][0];var
      width = this.tabStyles.width;
      var appearNum = parseInt(750 / width);
      var tabsNum = this.tabTitles.length;
      var computedPage = tabsNum > appearNum ? 2 : page;
      var offset = page > appearNum ? -(750 - width) / 2 : -width * computedPage;

      (previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
        offset: offset });


      page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
        offset: -width * page });

      this._animateTransformX(page);
      this.isMoving = false;
      this.currentPage = page;
      this.$emit('wxcTabPageCurrentTabSelected', { page: page });
    },
    _animateTransformX: function _animateTransformX(page) {var
      duration = this.duration,timingFunction = this.timingFunction;
      var containerEl = this.$refs["tab-container"];
      var dist = page * 750;
      animation.transition(containerEl, {
        styles: {
          transform: "translateX(".concat(-dist, "px)") },

        duration: duration,
        timingFunction: timingFunction,
        delay: 0 },
      function () {
      });
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.vue":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-page/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




























































































































var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));
var _bindEnv = _interopRequireDefault(__webpack_require__(/*! ../utils/bind-env */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\bind-env.js"));
var _indexWeex = _interopRequireDefault(__webpack_require__(/*! weex-bindingx/lib/index.weex.js */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-bindingx\\lib\\index.weex.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var dom = weex.requireModule('dom');var animation = weex.requireModule('animation');var swipeBack = weex.requireModule('swipeBack');var _default2 = { props: { tabTitles: { type: Array, default: function _default() {return [];} }, panDist: { type: Number, default: 200 }, spmC: { type: [String, Number], default: '' }, titleUseSlot: { type: Boolean, default: false }, tabStyles: { type: Object, default: function _default() {return { bgColor: '#FFFFFF', titleColor: '#666666', activeTitleColor: '#3D3D3D', activeBgColor: '#FFFFFF', isActiveTitleBold: true, iconWidth: 70, iconHeight: 70, width: 160, height: 120, fontSize: 24, hasActiveBottom: true, activeBottomColor: '#FFC900', activeBottomWidth: 120, activeBottomHeight: 6, textPaddingLeft: 10, textPaddingRight: 10, leftOffset: 0, rightOffset: 0, normalBottomColor: '#F2F2F2', normalBottomHeight: 0, hasRightIcon: false };} }, titleType: { type: String, default: 'icon' }, tabPageHeight: { type: [String, Number], default: 1334 }, needSlider: { type: Boolean, default: true }, isTabView: { type: Boolean, default: true }, duration: { type: [Number, String], default: 300 }, timingFunction: { type: String, default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }, wrapBgColor: { type: String, default: '#f2f3f4' }, clickAnimation: { type: Boolean, default: true }, rightIconStyle: { type: Object, default: function _default() {return { top: 0, right: 0, paddingLeft: 20, paddingRight: 20 };} } }, data: function data() {return { currentPage: 0, gesToken: 0, isMoving: false, startTime: 0, deltaX: 0, translateX: 0 };}, created: function created() {var titleType = this.titleType,tabStyles = this.tabStyles;if (titleType === 'iconFont' && tabStyles.iconFontUrl) {dom.addRule('fontFace', { 'fontFamily': 'wxcIconFont', 'src': "url(".concat(tabStyles.iconFontUrl, ")") });}}, mounted: function mounted() {if (swipeBack && swipeBack.forbidSwipeBack) {swipeBack.forbidSwipeBack(true);}if (_bindEnv.default.supportsEBForIos() && this.isTabView && this.needSlider) {var tabPageEl = this.$refs['tab-page-wrap'];_indexWeex.default.prepare && _indexWeex.default.prepare({ anchor: tabPageEl.ref, eventType: 'pan' });}}, methods: { next: function next() {var page = this.currentPage;if (page < this.tabTitles.length - 1) {
        page++;
      }
      this.setPage(page);
    },
    prev: function prev() {
      var page = this.currentPage;
      if (page > 0) {
        page--;
      }
      this.setPage(page);
    },
    startHandler: function startHandler() {
      if (_bindEnv.default.supportsEBForIos() && this.isTabView && this.needSlider) {
        this.bindExp(this.$refs['tab-page-wrap']);
      }
    },
    bindExp: function bindExp(element) {var _this = this;
      if (element && element.ref) {
        if (this.isMoving && this.gesToken !== 0) {
          _indexWeex.default.unbind({
            eventType: 'pan',
            token: this.gesToken });

          this.gesToken = 0;
          return;
        }

        var tabElement = this.$refs['tab-container'];var
        currentPage = this.currentPage,panDist = this.panDist;
        var dist = currentPage * 750;

        // x-dist
        var props = [{
          element: tabElement.ref,
          property: 'transform.translateX',
          expression: "x-".concat(dist) }];


        var gesTokenObj = _indexWeex.default.bind({
          anchor: element.ref,
          eventType: 'pan',
          props: props },
        function (e) {var
          deltaX = e.deltaX,state = e.state;
          if (state === 'end') {
            if (deltaX < -panDist) {
              _this.next();
            } else if (deltaX > panDist) {
              _this.prev();
            } else {
              _this.setPage(currentPage);
            }
          }
        });
        this.gesToken = gesTokenObj.token;
      }
    },
    setPage: function setPage(page) {var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (!this.isTabView) {
        this.jumpOut(url);
        return;
      }
      if (this.isMoving === true) {
        return;
      }
      this.isMoving = true;
      var previousPage = this.currentPage;
      var currentTabEl = this.$refs["wxc-tab-title-".concat(page)][0];var
      width = this.tabStyles.width;
      var appearNum = parseInt(750 / width);
      var tabsNum = this.tabTitles.length;
      var offset = page > appearNum ? -(750 - width) / 2 : -width * 2;

      if (appearNum < tabsNum) {
        (previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
          offset: offset, animated: animated });


        page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
          offset: -width * page,
          animated: animated });

      }

      this.isMoving = false;
      this.currentPage = page;
      this._animateTransformX(page, animated);
      this.$emit('wxcTabPageCurrentTabSelected', { page: page });
    },
    jumpOut: function jumpOut(url) {
      url && _utils.default.goToH5Page(url);
    },
    _animateTransformX: function _animateTransformX(page, animated) {var
      duration = this.duration,timingFunction = this.timingFunction;
      var computedDur = animated ? duration : 0.00001;
      var containerEl = this.$refs["tab-container"];
      var dist = page * 750;
      animation.transition(containerEl, {
        styles: {
          transform: "translateX(".concat(-dist, "px)") },

        duration: computedDur,
        timingFunction: timingFunction,
        delay: 0 },
      function () {
      });
    } } };exports.default = _default2;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tag\\index.vue":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tag/index.vue ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  props: {
    type: {
      type: String,
      default: 'solid' },

    value: {
      type: [String, Number],
      default: '测试测试' },

    tagColor: {
      type: String,
      default: '#ff5000' },

    fontColor: {
      type: String,
      default: '#333333' },

    specialIcon: {
      type: String,
      default: '' },

    img: {
      type: String,
      default: '' } },


  computed: {
    showSolid: function showSolid() {var
      type = this.type,value = this.value;
      return type === 'solid' && value !== '';
    },
    showHollow: function showHollow() {var
      type = this.type,value = this.value;
      return type === 'hollow' && value !== '';
    },
    showSpecial: function showSpecial() {var
      type = this.type,value = this.value,specialIcon = this.specialIcon;
      return type === 'special' && value !== '' && specialIcon !== '';
    },
    showImage: function showImage() {var
      type = this.type,img = this.img;
      return type === 'image' && img !== '';
    },
    tagTextStyle: function tagTextStyle() {var
      tagColor = this.tagColor,showSolid = this.showSolid;
      return showSolid ? { backgroundColor: tagColor } : { borderColor: tagColor };
    } },

  data: function data() {return {
      imgWidth: 90 };},

  methods: {
    onLoad: function onLoad(e) {
      if (e.success && e.size && e.size.naturalWidth > 0) {
        var width = e.size.naturalWidth;
        var height = e.size.naturalHeight;
        this.imgWidth = width * (24 / height);
      }
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\integral-list\\integral-list.nvue":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/pages/integral-list/integral-list.nvue ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;














































var _Json = _interopRequireDefault(__webpack_require__(/*! @/Json.js */ "F:\\www\\zhanghuai\\盘子App\\Json.js"));

var _uniSkip = _interopRequireDefault(__webpack_require__(/*! ../../common/uni-skip.js */ "F:\\www\\zhanghuai\\盘子App\\common\\uni-skip.js"));

var _weexUi = __webpack_require__(/*! weex-ui */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\index.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var domModule = weex.requireModule('dom');Vue.prototype.$uniSkip = _uniSkip.default;var _default = { components: { WxcIcon: _weexUi.WxcIcon }, data: function data() {return { currentIndex: 0, loadMoreStatus: 0, // 当前加载状态
      tabBars: [{ title: '综合' }, { title: '销量' }, { title: '新品' }, { title: '价格', sorts: true }], dataList: [[], []] };}, beforeCreate: function beforeCreate() {domModule.addRule('fontFace', { 'fontFamily': "iconfont", 'src': "url('https://at.alicdn.com/t/font_1209399_nqqplnfj0qi.ttf')" });}, created: function created() {this.getDataList();}, methods: { // 获取列表
    getDataList: function getDataList() {var data = _Json.default.integralList;for (var i = 0; i < data.length; i++) {if (i % 2 == 0) {this.dataList[0].push(data[i]);} else {this.dataList[1].push(data[i]);}}},

    //加载更多
    loadMore: function loadMore(tabItem) {
      this.loadIntegralList();
    },

    // 
    loadIntegralList: function loadIntegralList() {var _this = this;
      if (this.loadMoreStatus === 2) {
        this.loadMoreStatus = 1;
        setTimeout(function () {
          _this.loadMoreStatus = 2;
        }, 100);
        return;
      }
      this.loadMoreStatus = 1;

      setTimeout(function () {
        var list = _Json.default.integralList;
        list.sort(function (a, b) {
          return Math.random() > .5 ? -1 : 1; //静态数据打乱顺序
        });
        list.forEach(function (v, i) {
          if (i % 2 == 0) {
            _this.dataList[0].push(v);
          } else {
            _this.dataList[1].push(v);
          }
        });
        _this.loadMoreStatus = 0;
      }, 600);
    },

    // tab切换
    sortHandler: function sortHandler(index) {var _this2 = this;
      this.currentIndex = index;
      this.dataList = [[], []];
      var list = _Json.default.integralList;
      list.sort(function (a, b) {
        return Math.random() > .5 ? -1 : 1; //静态数据打乱顺序
      });
      list.forEach(function (v, i) {
        if (i % 2 == 0) {
          _this2.dataList[0].push(v);
        } else {
          _this2.dataList[1].push(v);
        }
      });
    },

    // 查询
    searchHandler: function searchHandler() {
      this.$uniSkip.navigateTo({
        url: '/pages/search/search' });

    },

    // 跳转详情
    goDetails: function goDetails(data) {
      this.$uniSkip.navigateTo({
        url: '/pages/integral-info/integral-info',
        data: data });

    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-03c50060!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-03c50060!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-grid-select/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "grid-select": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-03d162ea!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-03d162ea!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-city/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-city": {
    "position": "fixed",
    "width": "750",
    "backgroundColor": "#F2F3F4"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-0517b2dc!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-0517b2dc!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-result/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wrap": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "wxc-result": {
    "width": "750",
    "flex": 1,
    "alignItems": "center",
    "backgroundColor": "#f2f3f4"
  },
  "result-image": {
    "width": "320",
    "height": "320"
  },
  "result-content": {
    "marginTop": "36",
    "alignItems": "center"
  },
  "content-text": {
    "fontSize": "30",
    "color": "#A5A5A5",
    "height": "42",
    "lineHeight": "42",
    "textAlign": "center"
  },
  "content-desc": {
    "marginTop": "10"
  },
  "result-button": {
    "marginTop": "60",
    "borderWidth": "1",
    "borderColor": "#979797",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "6",
    "width": "240",
    "height": "72",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "button-text": {
    "color": "#666666",
    "fontSize": "30"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-12c36652!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tag\\index.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-12c36652!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tag/index.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "tag-item": {
    "height": "24",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingBottom": "2"
  },
  "tag-border": {
    "borderBottomLeftRadius": "4",
    "borderBottomRightRadius": "4",
    "borderTopLeftRadius": "4",
    "borderTopRightRadius": "4"
  },
  "tag-hollow": {
    "borderWidth": "1"
  },
  "tag-image": {
    "height": "24"
  },
  "tag-special": {
    "borderWidth": "1",
    "flexDirection": "row"
  },
  "left-image": {
    "width": "20",
    "height": "20"
  },
  "tag-left": {
    "width": "24",
    "height": "24",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tag-text": {
    "fontSize": "20",
    "height": "22",
    "lineHeight": "22",
    "paddingLeft": "6",
    "paddingRight": "6"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-14e99c79!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-14e99c79!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-loading/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "loading-container": {
    "position": "relative"
  },
  "loading-need-mask": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.2)"
  },
  "wxc-loading": {
    "position": "fixed",
    "left": "287",
    "top": "500",
    "zIndex": 9999
  },
  "loading-box": {
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "20",
    "width": "175",
    "height": "175",
    "backgroundColor": "rgba(0,0,0,0.8)"
  },
  "trip-loading": {
    "backgroundColor": "rgba(0,0,0,0.2)"
  },
  "loading-trip-image": {
    "height": "75",
    "width": "75"
  },
  "loading-text": {
    "color": "#ffffff",
    "fontSize": "24",
    "lineHeight": "30",
    "height": "30",
    "marginTop": "8",
    "textOverflow": "ellipsis",
    "width": "140",
    "textAlign": "center"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-14f8a7e6!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-simple-flow\\index.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-14f8a7e6!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-simple-flow/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "flex-row": {
    "flexDirection": "row"
  },
  "full-rest": {
    "flex": 1
  },
  "root": {
    "paddingTop": "28",
    "paddingBottom": "24",
    "backgroundColor": "#ffffff"
  },
  "content": {
    "paddingTop": "9",
    "paddingBottom": "42",
    "paddingLeft": "70",
    "paddingRight": "70"
  },
  "last-one-content": {
    "paddingBottom": 0
  },
  "title": {
    "paddingLeft": "70",
    "paddingRight": "70"
  },
  "line": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": "38",
    "width": "2",
    "backgroundColor": "#FFC300"
  },
  "first-one-title-line": {
    "top": "20"
  },
  "last-one-title-line": {
    "bottom": "20"
  },
  "last-one-content-line": {
    "width": 0
  },
  "point": {
    "position": "absolute",
    "top": "13",
    "left": "32",
    "width": "14",
    "height": "14",
    "backgroundColor": "#FFF0BD",
    "borderStyle": "solid",
    "borderWidth": "2",
    "borderColor": "#EE9900",
    "borderRadius": "100"
  },
  "highlight-point": {
    "top": "7",
    "left": "26",
    "width": "26",
    "height": "26",
    "backgroundColor": "#EE9900",
    "borderStyle": "solid",
    "borderWidth": "6",
    "borderColor": "#FFE78D"
  },
  "text-title": {
    "fontSize": "30",
    "color": "#3d3d3d"
  },
  "text-highlight-title": {
    "color": "#EE9900"
  },
  "text-desc": {
    "fontSize": "24",
    "color": "#a5a5a5",
    "marginBottom": "12"
  },
  "text-date": {
    "fontSize": "24",
    "color": "#a5a5a5"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-1615087b!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-1615087b!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-rich-text": {
    "alignItems": "center",
    "flexDirection": "row"
  },
  "default-text": {
    "color": "#A5A5A5",
    "fontSize": "24",
    "lineHeight": "30"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-16c3fbb1!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-16c3fbb1!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-button/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-btn": {
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "12",
    "opacity": 1
  },
  "wxc-btn-highlight": {
    "opacity:active": 0.8
  },
  "btn-text": {
    "textOverflow": "ellipsis",
    "lines": 1,
    "color": "#ffffff"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-1ef72fd7!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\index.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-1ef72fd7!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lottery-rain/index.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-lottery-rain": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "rgba(133,11,11,0.8)"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-237296c2!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-237296c2!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-checkbox/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "checkbox": {
    "width": "48",
    "height": "48"
  },
  "title-text": {
    "fontSize": "30"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-2ba60c78!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-2ba60c78!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-icon/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "icon-font": {
    "color": "#666666"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-30f40d9e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\rain-item.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-30f40d9e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lottery-rain/rain-item.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "rain-item": {
    "position": "absolute",
    "opacity": 0
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-33efb36e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-countdown\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-33efb36e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-countdown/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "time-dot-wrap": {
    "flexDirection": "row",
    "alignItems": "center"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-35d2faed!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-35d2faed!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-indexlist/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "index-list": {
    "width": "750",
    "height": "1334"
  },
  "index-list-title": {
    "borderBottomWidth": "1",
    "borderBottomColor": "rgba(32,35,37,0.15)",
    "backgroundColor": "#FBFBFB",
    "fontSize": "24",
    "color": "#666666",
    "height": "48",
    "lineHeight": "48",
    "paddingLeft": "24",
    "width": "750"
  },
  "group-title": {
    "borderBottomWidth": 0,
    "paddingBottom": 0,
    "height": "60",
    "paddingTop": "24"
  },
  "index-list-item": {
    "width": "750",
    "flexDirection": "row",
    "alignItems": "center",
    "borderBottomWidth": "1",
    "borderBottomColor": "#e0e0e0",
    "height": "92",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#FFFFFF"
  },
  "iphone-x": {
    "height": "68"
  },
  "title": {
    "fontSize": "32",
    "color": "#3D3D3D"
  },
  "desc": {
    "fontSize": "24",
    "color": "#A5A5A5",
    "marginLeft": "30"
  },
  "index-list-nav": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "marginBottom": "60",
    "marginTop": "60",
    "paddingBottom": "20",
    "paddingTop": "20",
    "width": "70"
  },
  "list-nav-key": {
    "textAlign": "center",
    "fontSize": "24",
    "height": "40",
    "color": "#666666"
  },
  "index-list-pop": {
    "position": "fixed",
    "top": "550",
    "left": "316",
    "width": "120",
    "height": "120",
    "textAlign": "center",
    "justifyContent": "center",
    "backgroundColor": "rgba(32,35,37,0.6)",
    "borderBottomLeftRadius": "60",
    "borderBottomRightRadius": "60",
    "borderTopLeftRadius": "60",
    "borderTopRightRadius": "60",
    "paddingLeft": 0,
    "paddingRight": 0,
    "paddingTop": "35",
    "paddingBottom": "35",
    "color": "#ffffff"
  },
  "list-pop-text": {
    "fontSize": "40",
    "textAlign": "center",
    "color": "#ffffff"
  },
  "group": {
    "paddingBottom": "18",
    "paddingRight": "70",
    "backgroundColor": "#FBFBFB"
  },
  "group-list": {
    "flexDirection": "row",
    "marginLeft": "18",
    "marginTop": "18"
  },
  "group-item": {
    "width": "146",
    "height": "64",
    "borderWidth": "1",
    "borderColor": "#e0e0e0",
    "marginRight": "18",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#ffffff"
  },
  "item-name": {
    "fontSize": "24",
    "lineHeight": "26",
    "color": "#333333"
  },
  "item-desc": {
    "marginTop": "2",
    "color": "#999999",
    "fontSize": "20",
    "textAlign": "center"
  },
  "location-icon": {
    "width": "32",
    "height": "32",
    "marginRight": "8"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-362fa32b!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-mask\\index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-362fa32b!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-mask/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
  },
  "wxc-mask": {
    "position": "fixed",
    "top": "300",
    "left": "60",
    "width": "702",
    "height": "800"
  },
  "mask-bottom": {
    "width": "100",
    "height": "100",
    "backgroundColor": "rgba(0,0,0,0)",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "mask-close-icon": {
    "width": "64",
    "height": "64"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-3aa1dec6!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\item.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-3aa1dec6!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-radio/item.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "radio": {
    "width": "36",
    "height": "36"
  },
  "title-text": {
    "fontSize": "30",
    "height": "40",
    "lineHeight": "40"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-404f2e8e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-404f2e8e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-page-calendar/index.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-page-calendar": {
    "position": "fixed",
    "width": "750",
    "color": "#333333",
    "backgroundColor": "#ffffff"
  },
  "flex-item": {
    "flex": 1,
    "textAlign": "center"
  },
  "calendar-weekday": {
    "height": "60",
    "backgroundColor": "#ffffff",
    "borderBottomWidth": "1",
    "borderTopWidth": "1",
    "borderColor": "#e2e2e2",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center"
  },
  "weekday-text": {
    "color": "#000000",
    "flex": 1,
    "fontSize": "24",
    "textAlign": "center"
  },
  "calendar-list": {
    "flex": 1
  },
  "month-text": {
    "fontSize": "32",
    "height": "60",
    "lineHeight": "60",
    "width": "750",
    "textAlign": "center",
    "alignItems": "center",
    "backgroundColor": "#f2f3f4"
  },
  "calendar-row": {
    "height": "140",
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "borderBottomWidth": "1",
    "borderColor": "#f2f3f4",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "row-item": {
    "flex": 1,
    "height": "140",
    "paddingTop": "10",
    "paddingBottom": "10",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "iphone-x": {
    "height": "68"
  },
  "calendar-note": {
    "height": "36",
    "lineHeight": "36",
    "fontSize": "24",
    "color": "#000000",
    "textAlign": "center"
  },
  "calendar-day": {
    "height": "48",
    "lineHeight": "48",
    "fontSize": "36",
    "color": "#000000",
    "textAlign": "center"
  },
  "calendar-ext": {
    "height": "36",
    "lineHeight": "36",
    "color": "#999999",
    "textAlign": "center",
    "fontSize": "24",
    "textOverflow": "ellipsis"
  },
  "calendar-holiday": {
    "color": "#FF5000"
  },
  "calendar-rest": {
    "color": "#FF5000"
  },
  "item-row-selected": {
    "color": "#ffffff",
    "backgroundColor": "#FFC900",
    "textAlign": "center"
  },
  "item-text-selected": {
    "color": "#3d3d3d",
    "textAlign": "center"
  },
  "calendar-disabled": {
    "color": "#CCCCCC"
  },
  "cell-disabled": {
    "backgroundColor": "#FBFBFB"
  },
  "calendar-day-include": {
    "backgroundColor": "#FFF7D6"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-4cc181ee!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-4cc181ee!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-tag.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-tag": {
    "borderColor": "#3d3d3d",
    "borderWidth": "2",
    "borderRadius": "4",
    "marginRight": "6",
    "backgroundColor": "rgba(0,0,0,0)",
    "paddingLeft": "6",
    "paddingRight": "6",
    "height": "26",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "tag-text": {
    "fontSize": "20",
    "color": "#3d3d3d"
  },
  "black": {
    "color": "#3D3D3D"
  },
  "yellow": {
    "color": "#EE9900"
  },
  "blue": {
    "color": "#30A0FF"
  },
  "gray": {
    "color": "#A5A5A5"
  },
  "red": {
    "color": "#FF5000"
  },
  "border-black": {
    "borderColor": "#A5A5A5"
  },
  "border-yellow": {
    "borderColor": "#EE9900"
  },
  "border-blue": {
    "borderColor": "#30A0FF"
  },
  "border-gray": {
    "borderColor": "#A5A5A5"
  },
  "border-red": {
    "borderColor": "#FF5000"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-4e9daa4e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-4e9daa4e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-text.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-text": {
    "fontSize": "24",
    "color": "#3d3d3d"
  },
  "black": {
    "color": "#3D3D3D"
  },
  "yellow": {
    "color": "#EE9900"
  },
  "blue": {
    "color": "#30A0FF"
  },
  "gray": {
    "color": "#A5A5A5"
  },
  "red": {
    "color": "#FF5000"
  },
  "margin-text": {
    "marginRight": "6"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-55652bce!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-stepper\\index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-55652bce!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-stepper/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-stepper": {
    "flexDirection": "row"
  },
  "stepper-plus": {
    "width": "56",
    "height": "56",
    "backgroundColor": "#ededed",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6"
  },
  "stepper-minus": {
    "width": "56",
    "height": "56",
    "backgroundColor": "#ededed",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6"
  },
  "stepper-input": {
    "borderWidth": 0,
    "textAlign": "center",
    "color": "#3d3d3d",
    "fontSize": "30",
    "lineHeight": "56",
    "height": "56",
    "width": "86"
  },
  "stepper-icon": {
    "fontSize": "36",
    "color": "#666666",
    "marginTop": "-4"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-59cfae47!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-59cfae47!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-dialog/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
  },
  "dialog-box": {
    "position": "fixed",
    "left": "96",
    "width": "558",
    "backgroundColor": "#FFFFFF"
  },
  "dialog-content": {
    "paddingTop": "36",
    "paddingBottom": "36",
    "paddingLeft": "36",
    "paddingRight": "36"
  },
  "content-title": {
    "color": "#333333",
    "fontSize": "36",
    "textAlign": "center",
    "marginBottom": "24"
  },
  "content-subtext": {
    "color": "#666666",
    "fontSize": "26",
    "lineHeight": "36",
    "textAlign": "center"
  },
  "dialog-footer": {
    "flexDirection": "row",
    "alignItems": "center",
    "borderTopColor": "#F3F3F3",
    "borderTopWidth": "1"
  },
  "footer-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "flex": 1,
    "height": "90"
  },
  "cancel": {
    "borderRightColor": "#F3F3F3",
    "borderRightWidth": "1"
  },
  "btn-text": {
    "fontSize": "36",
    "color": "#666666"
  },
  "no-prompt": {
    "width": "486",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "marginTop": "24"
  },
  "no-prompt-icon": {
    "width": "24",
    "height": "24",
    "marginRight": "12"
  },
  "no-prompt-text": {
    "fontSize": "24",
    "color": "#A5A5A5"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-59e992e6!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-59e992e6!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-overlay/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-5b136518!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lightbox\\index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-5b136518!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lightbox/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "indicator": {
    "position": "absolute",
    "itemColor": "rgba(255,195,0,0.5)",
    "itemSelectedColor": "#ffc300",
    "itemSize": "20",
    "height": "20",
    "bottom": "24"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-5be4d681!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\full-page.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-5be4d681!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-page/full-page.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-tab-page": {
    "width": "750",
    "backgroundColor": "#f2f3f4"
  },
  "tab-title-list": {
    "width": "750",
    "position": "absolute",
    "flexDirection": "row"
  },
  "title-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "borderBottomStyle": "solid"
  },
  "border-bottom": {
    "position": "absolute",
    "bottom": 0
  },
  "tab-page-wrap": {
    "width": "750"
  },
  "tab-container": {
    "flex": 1,
    "flexDirection": "row",
    "position": "absolute"
  },
  "tab-text": {
    "lines": 1,
    "textOverflow": "ellipsis"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-5e741b9a!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-icon.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-5e741b9a!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-icon.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-image": {
    "width": "90",
    "height": "24",
    "marginRight": "6"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-6c9ca210!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-6c9ca210!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-noticebar/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-noticebar": {
    "width": "750",
    "paddingTop": "10",
    "paddingBottom": "10",
    "paddingLeft": "24",
    "backgroundColor": "#FFF7D6",
    "borderBottomWidth": "1",
    "borderTopWidth": "1",
    "borderColor": "#FFEEAE",
    "borderStyle": "solid",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "noticebar-content": {
    "color": "#EE9900",
    "fontSize": "26",
    "lineHeight": "36",
    "width": "592",
    "textOverflow": "ellipsis"
  },
  "more-click-content": {
    "width": "64",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "mode-ICON": {
    "width": "32",
    "height": "32"
  },
  "type-ICON": {
    "width": "32",
    "height": "32"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-6cfbfb32!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-6cfbfb32!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-special-rich-text/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-special-rich-text": {
    "position": "relative"
  },
  "tag-div": {
    "position": "absolute",
    "top": 0,
    "color": "#A5A5A5",
    "fontSize": "24",
    "lineHeight": "30"
  },
  "wxc-text": {
    "fontSize": "24",
    "lineHeight": "34",
    "color": "#3d3d3d",
    "lines": 2,
    "textOverflow": "ellipsis",
    "overflow": "hidden"
  },
  "black": {
    "color": "#3D3D3D"
  },
  "yellow": {
    "color": "#EE9900"
  },
  "blue": {
    "color": "#30A0FF"
  },
  "gray": {
    "color": "#A5A5A5"
  },
  "red": {
    "color": "#FF5000"
  },
  "margin-text": {
    "marginRight": "6"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-6e13e4c4!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slide-nav\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-6e13e4c4!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-slide-nav/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "slide-nav": {
    "position": "absolute",
    "zIndex": 1000
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-6fd6bf00!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-6fd6bf00!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-ep-slider/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "position": "absolute",
    "top": 0
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-755de790!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-755de790!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-radio/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-7c9b0a21!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-7c9b0a21!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-cell/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#ffffff"
  },
  "cell-margin": {
    "marginBottom": "24"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-arrow-icon": {
    "width": "22",
    "height": "22"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4",
    "marginRight": "30"
  },
  "extra-content-text": {
    "fontSize": "28",
    "color": "#999999",
    "marginRight": "4"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-7d99a728!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-swipe-action\\index.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-7d99a728!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-swipe-action/index.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#dddddd",
    "borderTopWidth": "1",
    "borderTopColor": "#dddddd"
  },
  "border": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#dddddd"
  },
  "wxc-skid": {
    "flexDirection": "row",
    "height": "90",
    "backgroundColor": "#FFFFFF"
  },
  "box-right": {
    "flexDirection": "row",
    "alignItems": "center",
    "lineHeight": "90"
  },
  "box-center": {
    "width": "735",
    "lineHeight": "90",
    "backgroundColor": "#FFFFFF",
    "marginLeft": "15"
  },
  "box-center-last": {
    "width": "750",
    "marginLeft": 0,
    "paddingLeft": "15"
  },
  "child": {
    "width": "100",
    "textAlign": "center",
    "color": "#FFFFFF",
    "backgroundColor": "#dddddd",
    "lineHeight": "90"
  },
  "text": {
    "fontSize": "30"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-87a2d234!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slider-bar\\index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-87a2d234!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-slider-bar/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "slider-bar-container": {
    "height": "56",
    "justifyContent": "center",
    "alignItems": "center",
    "overflow": "hidden"
  },
  "range-bar": {
    "overflow": "hidden"
  },
  "value-bar": {
    "height": "4",
    "overflow": "hidden"
  },
  "slide-block": {
    "width": "56",
    "height": "56",
    "backgroundColor": "#ffffff",
    "borderRadius": "28",
    "borderWidth": "1",
    "borderColor": "rgba(0,0,0,0.1)",
    "position": "absolute",
    "left": 0,
    "bottom": 0
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-911d1bb0!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-911d1bb0!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-searchbar/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-search-bar": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "backgroundColor": "#ffffff",
    "width": "750",
    "height": "84",
    "flexDirection": "row"
  },
  "wxc-search-bar-yellow": {
    "backgroundColor": "#ffc900"
  },
  "search-bar-input": {
    "position": "absolute",
    "top": "10",
    "paddingTop": 0,
    "paddingBottom": 0,
    "paddingRight": "40",
    "paddingLeft": "60",
    "fontSize": "26",
    "width": "624",
    "height": "64",
    "lineHeight": "64",
    "backgroundColor": "#E5E5E5",
    "borderRadius": "6"
  },
  "search-bar-input-yellow": {
    "backgroundColor": "#fff6d6"
  },
  "search-bar-icon": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "left": "34",
    "top": "28"
  },
  "search-bar-close": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "right": "120",
    "top": "28"
  },
  "search-bar-button": {
    "width": "94",
    "height": "36",
    "fontSize": "30",
    "textAlign": "center",
    "backgroundColor": "#ffffff",
    "marginTop": "16",
    "marginRight": 0,
    "color": "#333333",
    "position": "absolute",
    "right": "8",
    "top": "9"
  },
  "search-bar-button-yellow": {
    "backgroundColor": "#FFC900"
  },
  "input-has-dep": {
    "paddingLeft": "240",
    "width": "710"
  },
  "bar-dep": {
    "width": "170",
    "paddingRight": "12",
    "paddingLeft": "12",
    "height": "42",
    "alignItems": "center",
    "flexDirection": "row",
    "position": "absolute",
    "left": "24",
    "top": "22",
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#C7C7C7"
  },
  "bar-dep-yellow": {
    "borderRightColor": "#C7C7C7"
  },
  "dep-text": {
    "flex": 1,
    "textAlign": "center",
    "fontSize": "26",
    "color": "#666666",
    "marginRight": "6",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "dep-arrow": {
    "width": "24",
    "height": "24"
  },
  "icon-has-dep": {
    "left": "214"
  },
  "disabled-input": {
    "width": "750",
    "height": "64",
    "position": "absolute",
    "left": 0,
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "has-dep-disabled": {
    "width": "550",
    "left": "200"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-9721ffa6!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\tab.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-9721ffa6!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-city/tab.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "tab-box": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "tab-item": {
    "flex": 1,
    "height": "90",
    "backgroundColor": "#ffffff",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tab-item-text": {
    "textAlign": "center",
    "color": "#000000",
    "fontSize": "28"
  },
  "text-selected": {
    "fontWeight": "bold"
  },
  "tab-item-selected-bar": {
    "width": "750",
    "backgroundColor": "#f2f3f4"
  },
  "tab-item-selected-bar-in": {
    "width": "375",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row",
    "height": "6"
  },
  "tab-item-active": {
    "backgroundColor": "#ffb200",
    "width": "92",
    "height": "6"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-a8f27ea8!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-progress\\index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-a8f27ea8!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-progress/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-progress": {
    "backgroundColor": "#f2f3f4"
  },
  "progress": {
    "position": "absolute",
    "backgroundColor": "#FFC900"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-bc6e133e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\integral-list\\integral-list.nvue":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-bc6e133e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/pages/integral-list/integral-list.nvue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
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
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "content": {
    "flex": 1,
    "backgroundColor": "#FFFFFF"
  },
  "scroll": {
    "flex": 1,
    "paddingTop": 0,
    "paddingRight": "25",
    "paddingBottom": 0,
    "paddingLeft": "25"
  },
  "header-content": {
    "paddingTop": 0,
    "paddingRight": "24",
    "paddingBottom": 0,
    "paddingLeft": "24"
  },
  "search-content": {
    "flexDirection": "row",
    "alignItems": "center",
    "borderRadius": "30",
    "backgroundColor": "#F4F4F4",
    "height": "70",
    "lineHeight": "70",
    "paddingLeft": "45"
  },
  "iconfont-search": {
    "fontSize": "26",
    "color": "#818181"
  },
  "placholder": {
    "fontSize": "26",
    "color": "#818181",
    "marginLeft": "10"
  },
  "tab-content": {
    "flexDirection": "row",
    "paddingTop": "40",
    "paddingRight": "10",
    "paddingBottom": "20",
    "paddingLeft": "10"
  },
  "tab-item": {
    "marginRight": "70",
    "flexDirection": "row",
    "alignItems": "center",
    "borderRadius": "40"
  },
  "tab": {
    "color": "#212121",
    "fontSize": "28",
    "borderRadius": "50",
    "paddingTop": "2",
    "paddingRight": "10",
    "paddingBottom": "2",
    "paddingLeft": "10"
  },
  "tab-active": {
    "color": "#FFFFFF",
    "backgroundColor": "#FBA7B7"
  },
  "product-content": {
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "product-list": {
    "flex": 1,
    "marginTop": 0,
    "marginRight": "5",
    "marginBottom": 0,
    "marginLeft": "5"
  },
  "product-box": {
    "marginBottom": "10",
    "borderRadius": "8",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#EEEEEE"
  },
  "product-box-name-text": {
    "fontSize": "30",
    "color": "#323436",
    "lines": 1
  },
  "product-img": {
    "height": "300"
  },
  "product-footer": {
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15"
  },
  "product-bottom": {
    "marginTop": "10",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "jifen": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "jifen-num": {
    "fontSize": "38",
    "color": "#FFB074"
  },
  "jifen-conpy": {
    "fontSize": "24",
    "color": "#878787"
  },
  "want": {
    "fontSize": "24",
    "color": "#878787"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-c65c4d52!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\option.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-c65c4d52!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-grid-select/option.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "grid-option": {
    "justifyContent": "center",
    "borderRadius": "8",
    "borderWidth": "2",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "text-title": {
    "lines": 2,
    "lineHeight": "30",
    "textOverflow": "ellipsis",
    "textAlign": "center",
    "fontSize": "26"
  },
  "image-checked": {
    "position": "absolute",
    "right": 0,
    "bottom": 0,
    "width": "38",
    "height": "34"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-c9a0bd76!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-refresher\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-c9a0bd76!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-refresher/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-refresher": {
    "height": "140",
    "width": "750",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "center",
    "paddingTop": "50"
  },
  "cycle-container": {
    "position": "relative",
    "width": "60",
    "height": "60"
  },
  "u-cover": {
    "position": "absolute",
    "width": "30",
    "height": "60",
    "top": 0,
    "backgroundColor": "#ffffff",
    "overflow": "hidden",
    "right": 0
  },
  "c1": {
    "zIndex": 1
  },
  "c2": {
    "zIndex": 2,
    "transformOrigin": "left center",
    "transform": "rotateZ(0deg)"
  },
  "u-cover-cycle": {
    "position": "absolute",
    "width": "60",
    "height": "60",
    "right": 0,
    "top": 0,
    "boxSizing": "border-box",
    "borderWidth": "2",
    "borderColor": "#666666",
    "borderStyle": "solid",
    "borderRadius": 100,
    "opacity": 0
  },
  "cover1": {
    "opacity": 1
  },
  "indicator": {
    "marginRight": "20",
    "height": "60",
    "width": "60",
    "color": "#666666"
  },
  "arrow-down": {
    "position": "relative",
    "top": "15",
    "left": "-45",
    "width": "30",
    "height": "30"
  },
  "u-txt": {
    "fontSize": "24",
    "lineHeight": "40",
    "color": "#999999",
    "marginTop": "10",
    "marginLeft": "10",
    "height": "40",
    "lines": 1
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-d86a0074!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-d86a0074!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-page/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-tab-page": {
    "width": "750"
  },
  "tab-title-list": {
    "flexDirection": "row"
  },
  "title-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "borderBottomStyle": "solid"
  },
  "border-bottom": {
    "position": "absolute",
    "bottom": 0
  },
  "tab-page-wrap": {
    "width": "750",
    "overflow": "hidden"
  },
  "tab-container": {
    "flex": 1,
    "flexDirection": "row",
    "position": "absolute"
  },
  "tab-text": {
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "rightIcon": {
    "position": "fixed",
    "backgroundColor": "#ffffff",
    "boxShadow": "-50px 0 20px #ffffff"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-d8a6c350!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-bar\\index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-d8a6c350!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-bar/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-tab-page": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "tab-title-list": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "title-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "borderBottomStyle": "solid"
  },
  "tab-page-wrap": {
    "width": "750",
    "flex": 1,
    "overflow": "hidden"
  },
  "tab-container": {
    "flex": 1,
    "flexDirection": "row",
    "position": "absolute"
  },
  "tab-text": {
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "desc-tag": {
    "position": "absolute",
    "top": "10",
    "right": "20",
    "borderBottomRightRadius": "14",
    "borderBottomLeftRadius": 0,
    "borderTopLeftRadius": "14",
    "borderTopRightRadius": "14",
    "backgroundColor": "#FF5E00",
    "height": "26",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "dot": {
    "width": "12",
    "height": "12",
    "borderBottomRightRadius": "12",
    "borderBottomLeftRadius": "12",
    "borderTopLeftRadius": "12",
    "borderTopRightRadius": "12",
    "position": "absolute",
    "top": "10",
    "right": "40",
    "backgroundColor": "#FF5E00"
  },
  "desc-text": {
    "fontSize": "18",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-dc4a90ce!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-dc4a90ce!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-minibar/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-minibar": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#009ff0"
  },
  "left": {
    "width": "180",
    "paddingLeft": "32"
  },
  "middle-title": {
    "fontSize": "30",
    "color": "#ffffff",
    "height": "36",
    "lineHeight": "34"
  },
  "right": {
    "width": "180",
    "paddingRight": "32",
    "alignItems": "flex-end"
  },
  "left-button": {
    "width": "21",
    "height": "36"
  },
  "right-button": {
    "width": "32",
    "height": "32"
  },
  "icon-text": {
    "fontSize": "28",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-e59faabc!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popover\\index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-e59faabc!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-popover/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "zIndex": 999
  },
  "g-cover": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.4)",
    "zIndex": 1
  },
  "g-popover": {
    "position": "fixed",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "zIndex": 10
  },
  "u-popover-arrow": {
    "position": "absolute",
    "borderRadius": "4",
    "width": "30",
    "height": "30",
    "backgroundColor": "#ffffff"
  },
  "u-popover-inner": {
    "borderRadius": "10",
    "backgroundColor": "#ffffff"
  },
  "i-btn": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginLeft": "20",
    "marginRight": "20",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderBottomWidth": "1",
    "borderBottomColor": "#dddddd"
  },
  "i-btn-noborder": {
    "borderBottomColor": "#ffffff"
  },
  "btn-icon": {
    "width": "32",
    "height": "32",
    "marginRight": "16"
  },
  "btn-text": {
    "flex": 1,
    "height": "80",
    "fontSize": "30",
    "lineHeight": "80"
  },
  "text-align-center": {
    "textAlign": "center"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-e9d000ae!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-e9d000ae!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-popup/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-popup": {
    "position": "fixed",
    "width": "750"
  },
  "top": {
    "left": 0,
    "right": 0
  },
  "bottom": {
    "left": 0,
    "right": 0
  },
  "left": {
    "bottom": 0,
    "top": 0
  },
  "right": {
    "bottom": 0,
    "top": 0
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-03c50060!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.vue":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-03c50060!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-grid-select/index.vue ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid-select"]
  }, [_vm._l((_vm.dList), function(item, index) {
    return _c('option', _vm._b({
      key: index,
      style: {
        marginTop: index >= _vm.cols ? _vm.lineSpacing : null
      },
      attrs: {
        "index": index
      },
      on: {
        "select": function($event) {
          _vm.onSelect(index)
        }
      }
    }, 'option', Object.assign({}, _vm.customStyles, item), false))
  }), _vm._l((_vm.cHackList), function(item, index) {
    return _c('option', _vm._b({
      key: _vm.id + index,
      style: {
        opacity: 0,
        marginTop: _vm.dList.length >= _vm.cols ? _vm.lineSpacing : null
      }
    }, 'option', Object.assign({}, _vm.customStyles, item), false))
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-03d162ea!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-03d162ea!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-city/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "city",
    staticClass: ["wxc-city"],
    style: _vm.cityExtendStyle
  }, [_c('wxc-searchbar', _vm._b({
    ref: "wxc-searchbar",
    on: {
      "wxcSearchbarInputOnInput": _vm.onInput,
      "wxcSearchbarInputReturned": _vm.onSubmit,
      "wxcSearchbarCancelClicked": _vm.onCancel
    }
  }, 'wxc-searchbar', _vm.mergeInputConfig, false)), (_vm.showTab) ? _c('wxc-tab', {
    ref: "wxc-tab",
    on: {
      "wxcTabSwitch": _vm.onTabSwitch
    }
  }) : _vm._e(), _c('wxc-indexlist', {
    attrs: {
      "normalList": _vm.normalList,
      "hotListConfig": _vm.hotListConfig,
      "navStyle": {
        top: '24px'
      },
      "height": _vm.listHeight,
      "showIndex": _vm.showIndex,
      "onlyShowList": !_vm.showNavHeader || _vm.onlyShowList,
      "cityLocationConfig": _vm.currentCityLocationConfig
    },
    on: {
      "wxcIndexlistItemClicked": _vm.onItemClick
    }
  }), (_vm.showError) ? _c('wxc-result', {
    attrs: {
      "type": "noGoods",
      "wrapStyle": {
        top: '84px'
      },
      "show": true,
      "customSet": _vm.result
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-0517b2dc!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-0517b2dc!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-result/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wrap"],
    style: _vm.wrapStyle
  }, [_c('div', {
    staticClass: ["wxc-result"],
    style: {
      paddingTop: _vm.setPaddingTop
    }
  }, [_c('image', {
    staticClass: ["result-image"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.resultType.pic
    }
  }), (_vm.resultType.content) ? _c('div', {
    staticClass: ["result-content"]
  }, [_c('text', {
    staticClass: ["content-text"]
  }, [_vm._v(_vm._s(_vm.resultType.content))]), (_vm.resultType.desc) ? _c('text', {
    staticClass: ["content-text", "content-desc"]
  }, [_vm._v(_vm._s(_vm.resultType.desc))]) : _vm._e()]) : _vm._e(), (_vm.resultType.button) ? _c('div', {
    staticClass: ["result-button"],
    on: {
      "touchend": _vm.handleTouchEnd,
      "click": _vm.onClick
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v(_vm._s(_vm.resultType.button))])]) : _vm._e()])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-12c36652!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tag\\index.vue":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-12c36652!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tag/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showSolid || _vm.showHollow) ? _c('div', {
    class: ['tag-item', 'tag-border', _vm.showHollow && 'tag-hollow'],
    style: _vm.tagTextStyle
  }, [_c('text', {
    staticClass: ["tag-text"],
    style: {
      color: _vm.fontColor
    }
  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e(), (_vm.showImage) ? _c('image', {
    staticClass: ["tag-image"],
    style: {
      width: _vm.imgWidth + 'px'
    },
    attrs: {
      "src": _vm.img,
      "ariaHidden": true
    },
    on: {
      "load": _vm.onLoad
    }
  }) : _vm._e(), (_vm.showSpecial) ? _c('div', {
    staticClass: ["tag-special", "tag-border"],
    style: {
      borderColor: _vm.tagColor
    },
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.value
    }
  }, [_c('div', {
    staticClass: ["tag-left"],
    style: {
      backgroundColor: _vm.tagColor
    }
  }, [_c('image', {
    staticClass: ["left-image"],
    attrs: {
      "src": _vm.specialIcon
    }
  })]), _c('text', {
    staticClass: ["tag-text"],
    style: {
      color: _vm.fontColor
    }
  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-14e99c79!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-14e99c79!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-loading/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['loading-container', _vm.showLoading && _vm.needMask && 'loading-need-mask'],
    style: _vm.maskStyle,
    on: {
      "click": _vm.maskClicked
    }
  }, [(_vm.showLoading) ? _c('div', {
    staticClass: ["wxc-loading"],
    style: {
      top: _vm.topPosition + 'px'
    }
  }, [_c('div', {
    class: ['loading-box', _vm.loading.class],
    attrs: {
      "ariaHidden": true
    }
  }, [_c('image', {
    staticClass: ["loading-trip-image"],
    attrs: {
      "src": _vm.loading.url,
      "resize": "contain",
      "quality": "original"
    }
  }), (_vm.loadingText) ? _c('text', {
    staticClass: ["loading-text"]
  }, [_vm._v(_vm._s(_vm.loadingText))]) : _vm._e()])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-14f8a7e6!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-simple-flow\\index.vue":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-14f8a7e6!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-simple-flow/index.vue ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["root"]
  }, _vm._l((_vm.cItems), function(item, index) {
    return _c('div', {
      key: item.key,
      attrs: {
        "accessible": true,
        "ariaLabel": ((item.title) + "," + (item.desc?item.desc:'') + "," + (item.date?item.date:'') + "," + (item.highlight?'已完成':'等待完成'))
      }
    }, [_c('div', {
      staticClass: ["title", "flex-row"]
    }, [_c('div', {
      staticClass: ["line"],
      class: item.__titleLineClass__,
      style: item.__lineStyle__
    }), _c('div', {
      staticClass: ["point"],
      class: item.__pointClass__,
      style: item.__pointStyle__
    }), _c('text', {
      staticClass: ["text-title", "full-rest"],
      class: item.__titleTextClass__,
      style: item.__titleStyle__
    }, [_vm._v(_vm._s(item.title))])]), _c('div', {
      staticClass: ["content", "flex-row"],
      class: item.__contentClass__
    }, [_c('div', {
      staticClass: ["line"],
      class: item.__contentLineClass__,
      style: item.__lineStyle__
    }), _c('div', {
      staticClass: ["full-rest"]
    }, [(item.desc) ? _c('text', {
      staticClass: ["text-desc"]
    }, [_vm._v(_vm._s(item.desc))]) : _vm._e(), (item.date) ? _c('text', {
      staticClass: ["text-date"]
    }, [_vm._v(_vm._s(item.date))]) : _vm._e()])])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-1615087b!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.vue":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-1615087b!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isNotEmptyArray) ? _c('div', {
    staticClass: ["wxc-rich-text"]
  }, _vm._l((_vm.configList), function(v) {
    return _c('div', [(v.type == 'text' && v.value) ? _c('wxc-rich-text-text', {
      attrs: {
        "textValue": v.value,
        "textStyle": v.style,
        "hasTextMargin": _vm.hasTextMargin,
        "textTheme": v.theme
      }
    }) : _vm._e(), (v.type == 'link' && v.href && v.value) ? _c('wxc-rich-text-link', {
      attrs: {
        "linkValue": v.value,
        "linkHref": v.href,
        "linkStyle": v.style,
        "hasTextMargin": _vm.hasTextMargin,
        "linkTheme": v.theme
      },
      on: {
        "wxcRichTextLinkClick": _vm.linkClick
      }
    }) : _vm._e(), (v.type == 'icon' && v.src) ? _c('wxc-rich-text-icon', {
      attrs: {
        "iconSrc": v.src,
        "iconStyle": v.style
      }
    }) : _vm._e(), (v.type == 'tag' && v.value) ? _c('wxc-rich-text-tag', {
      attrs: {
        "tagValue": v.value,
        "tagTheme": v.theme,
        "tagStyle": v.style
      }
    }) : _vm._e()], 1)
  })) : _vm._e(), (_vm.isString) ? _c('text', {
    staticClass: ["default-text"]
  }, [_vm._v(_vm._s(_vm.configList))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-16c3fbb1!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-16c3fbb1!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-button/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-btn', _vm.isHighlight && !_vm.disabled && 'wxc-btn-highlight'],
    style: _vm.mrBtnStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.text
    },
    on: {
      "click": _vm.onClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: _vm.mrTextStyle
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-1ef72fd7!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\index.vue":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-1ef72fd7!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lottery-rain/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-lottery-rain"],
    style: _vm.wrapStyle
  }, _vm._l((_vm.picList), function(src, i) {
    return _c('rain-item', {
      key: "i",
      ref: ("rain-item-" + i),
      refInFor: true,
      attrs: {
        "src": src,
        "rainId": i
      },
      on: {
        "wxcLotteryRainCaught": _vm.wxcLotteryRainCaught
      }
    })
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-237296c2!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.vue":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-237296c2!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-checkbox/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('wxc-cell', {
    attrs: {
      "hasTopBorder": _vm.hasTopBorder,
      "hasBottomBorder": _vm.hasBottomBorder,
      "accessible": true,
      "ariaLabel": (_vm.title + ",状态为" + (_vm.checked ? '已选中' : '未选中') + "," + (_vm.disabled ? '不可更改' : '点击可切换'))
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [_c('text', {
    staticClass: ["title-text"],
    style: {
      color: _vm.textColor
    },
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _c('image', {
    staticClass: ["checkbox"],
    attrs: {
      "slot": "value",
      "src": _vm.checkIcon
    },
    slot: "value"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-2ba60c78!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-2ba60c78!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-icon/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["icon-font"],
    style: _vm.mergeStyle,
    on: {
      "click": function($event) {
        _vm.itemClicked(_vm.name)
      }
    }
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-30f40d9e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\rain-item.vue":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-30f40d9e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lottery-rain/rain-item.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.showItem && _vm.src) ? _c('image', {
    ref: ("rain-item-" + _vm.rainId),
    staticClass: ["rain-item"],
    style: _vm.pos,
    attrs: {
      "src": _vm.src
    },
    on: {
      "click": _vm.caught
    }
  }) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-32c52142!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-pan-item\\index.vue":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-32c52142!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-pan-item/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.supportAndroid) ? _c('div', {
    ref: "wxc-pan-item",
    on: {
      "horizontalpan": _vm.dispatchPan,
      "appear": _vm.onItemAppear,
      "disappear": _vm.onItemDisAppear,
      "click": _vm.itemClicked
    }
  }, [_vm._t("default")], 2) : _c('div', {
    ref: "wxc-pan-item",
    on: {
      "click": _vm.itemClicked
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-33efb36e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-countdown\\index.vue":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-33efb36e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-countdown/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: _vm.mrTimeWrapStyle
  }, [_c('div', {
    staticClass: ["time-dot-wrap"]
  }, [(_vm.tplIndexOfDays !== -1) ? _c('div', {
    style: _vm.mrTimeBoxStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": ((_vm.countDownData.day) + "天")
    }
  }, [_c('text', {
    style: _vm.mrTimeTextStyle
  }, [_vm._v(_vm._s(_vm.countDownData.day))])]) : _vm._e(), (_vm.tplIndexOfDays !== -1) ? _c('div', {
    style: _vm.mrDotBoxStyle,
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    style: _vm.mrDotTextStyle
  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfDays, _vm.tplIndexOfHours)))])]) : _vm._e(), (_vm.tplIndexOfHours !== -1) ? _c('div', {
    style: _vm.mrTimeBoxStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": ((_vm.countDownData.hour) + "时")
    }
  }, [_c('text', {
    style: _vm.mrTimeTextStyle
  }, [_vm._v(_vm._s(_vm.countDownData.hour))])]) : _vm._e(), (_vm.tplIndexOfHours !== -1) ? _c('div', {
    style: _vm.mrDotBoxStyle,
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    style: _vm.mrDotTextStyle
  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfHours, _vm.tplIndexOfMinutes)))])]) : _vm._e(), (_vm.tplIndexOfMinutes !== -1) ? _c('div', {
    style: _vm.mrTimeBoxStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": ((_vm.countDownData.minute) + "分")
    }
  }, [_c('text', {
    style: _vm.mrTimeTextStyle
  }, [_vm._v(_vm._s(_vm.countDownData.minute))])]) : _vm._e(), (_vm.tplIndexOfMinutes !== -1) ? _c('div', {
    style: _vm.mrDotBoxStyle,
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    style: _vm.mrDotTextStyle
  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfMinutes, _vm.tplIndexOfSeconds)))])]) : _vm._e(), (_vm.tplIndexOfSeconds !== -1) ? _c('div', {
    style: _vm.mrTimeBoxStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": ((_vm.countDownData.second) + "秒")
    }
  }, [_c('text', {
    style: _vm.mrTimeTextStyle
  }, [_vm._v(_vm._s(_vm.countDownData.second))])]) : _vm._e(), (_vm.tplIndexOfSeconds !== -1) ? _c('div', {
    style: _vm.mrDotBoxStyle,
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    style: _vm.mrDotTextStyle
  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfSeconds, -1)))])]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-35d2faed!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.vue":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-35d2faed!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-indexlist/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('list', {
    staticClass: ["index-list"],
    style: {
      height: _vm.height + 'px'
    }
  }, [_c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_vm._t("head")], 2), _vm._l((_vm.formatList), function(v, i) {
    return _c('cell', {
      key: i,
      ref: 'index-item-title-' + v.title,
      refInFor: true,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [(!_vm.onlyShowList) ? _c('text', {
      class: ['index-list-title', v.type && v.type == 'group' && 'group-title'],
      style: _vm.headerStyle
    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (v.type && v.type === 'group' && !_vm.onlyShowList) ? _c('div', {
      staticClass: ["group"],
      style: _vm.groupWrapStyle
    }, _vm._l((v.data), function(group, index) {
      return _c('div', {
        key: index,
        staticClass: ["group-list"]
      }, _vm._l((group), function(item, i) {
        return _c('div', {
          key: i,
          staticClass: ["group-item"],
          style: _vm.groupItemStyle,
          attrs: {
            "accessible": true,
            "ariaLabel": ((item.name) + "," + (item.desc?item.desc:''))
          },
          on: {
            "click": function($event) {
              _vm.itemClicked(item)
            }
          }
        }, [(item.isLocation) ? _c('image', {
          staticClass: ["location-icon"],
          attrs: {
            "src": "https://gw.alicdn.com/tfs/TB1JUiUPFXXXXXUXXXXXXXXXXXX-32-32.png"
          }
        }) : _vm._e(), _c('div', [_c('text', {
          staticClass: ["item-name"],
          style: _vm.groupItemTextStyle
        }, [_vm._v(_vm._s(item.name))]), (item.desc) ? _c('text', {
          staticClass: ["item-desc"],
          style: _vm.groupItemDescStyle
        }, [_vm._v(_vm._s(item.desc))]) : _vm._e()])])
      }))
    })) : _vm._e(), (v.type === 'list') ? _c('div', _vm._l((v.data), function(item, index) {
      return _c('div', {
        key: index,
        staticClass: ["index-list-item"],
        style: _vm.itemStyle,
        attrs: {
          "accessible": true,
          "ariaLabel": ((item.name) + "," + (item.desc?item.desc:''))
        },
        on: {
          "click": function($event) {
            _vm.itemClicked(item)
          }
        }
      }, [_c('text', {
        staticClass: ["title"],
        style: _vm.itemTextStyle
      }, [_vm._v(_vm._s(item.name))]), _c('text', {
        staticClass: ["desc"],
        style: _vm.itemDescStyle
      }, [_vm._v(_vm._s(item.desc))])])
    })) : _vm._e()])
  }), (_vm.isIPhoneX) ? _c('cell', {
    staticClass: ["iphone-x"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }) : _vm._e()], 2), (_vm.showIndex && !_vm.onlyShowList) ? _c('div', {
    staticClass: ["index-list-nav"],
    style: _vm.navStyle
  }, _vm._l((_vm.formatList), function(item, index) {
    return _c('text', {
      key: index,
      staticClass: ["list-nav-key"],
      style: _vm.navTextStyle,
      attrs: {
        "title": item.title
      },
      on: {
        "click": function($event) {
          _vm.go2Key(item.title)
        }
      }
    }, [_vm._v(_vm._s(item.title))])
  })) : _vm._e(), (_vm.popKeyShow) ? _c('div', {
    staticClass: ["index-list-pop"],
    style: _vm.popStyle
  }, [_c('text', {
    staticClass: ["list-pop-text"],
    style: _vm.popTextStyle
  }, [_vm._v(_vm._s(_vm.popKey))])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-362fa32b!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-mask\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-362fa32b!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-mask/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    attrs: {
      "show": _vm.show && _vm.hasOverlay,
      "canAutoClose": _vm.overlayCanClose,
      "opacity": _vm.opacity
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking,
      "wxcOverlayBodyClicked": _vm.wxcOverlayBodyClicked
    }
  }, 'wxc-overlay', _vm.mergeOverlayCfg, false)) : _vm._e(), (_vm.show) ? _c('div', {
    ref: "wxc-mask",
    staticClass: ["wxc-mask"],
    style: _vm.maskStyle,
    attrs: {
      "hack": _vm.shouldShow
    }
  }, [_c('div', {
    style: _vm.contentStyle
  }, [_vm._t("default")], 2), (_vm.showClose) ? _c('div', {
    staticClass: ["mask-bottom"],
    style: {
      width: _vm.width + 'px'
    },
    on: {
      "click": _vm.closeIconClicked
    }
  }, [_c('image', {
    staticClass: ["mask-close-icon"],
    attrs: {
      "src": _vm.closeIcon,
      "ariaLabel": "关闭"
    }
  })]) : _vm._e()]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-3aa1dec6!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\item.vue":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-3aa1dec6!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-radio/item.vue ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('wxc-cell', {
    attrs: {
      "hasTopBorder": _vm.hasTopBorder,
      "cellStyle": {
        backgroundColor: _vm.backgroundColor
      },
      "accessible": true,
      "ariaLabel": (_vm.title + ",状态为" + (_vm.checked?'已选中':'未选中') + "," + (_vm.disabled?'不可更改':''))
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [_c('text', {
    staticClass: ["title-text"],
    style: {
      color: _vm.color
    },
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.radioIcon) ? _c('image', {
    staticClass: ["radio"],
    attrs: {
      "slot": "value",
      "src": _vm.radioIcon
    },
    slot: "value"
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-404f2e8e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.vue":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-404f2e8e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-page-calendar/index.vue ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "pageCalendar",
    staticClass: ["wxc-page-calendar"],
    style: _vm.calendarExtendStyle
  }, [_c('wxc-minibar', _vm._b({
    attrs: {
      "show": _vm.showTitle,
      "useDefaultReturn": false
    },
    on: {
      "wxcMinibarLeftButtonClicked": _vm.minibarLeftButtonClick
    }
  }, 'wxc-minibar', _vm.minibarCfg, false)), (_vm.isShow) ? _c('div', {
    staticClass: ["calendar-weekday"]
  }, _vm._l((['日', '一', '二', '三', '四', '五', '六']), function(week, k) {
    return _c('text', {
      key: k,
      staticClass: ["flex-item", "weekday-text"],
      attrs: {
        "ariaLabel": ("周" + week)
      }
    }, [_vm._v(_vm._s(week))])
  })) : _vm._e(), (_vm.isShow) ? _c('list', {
    staticClass: ["calendar-list"]
  }, [_vm._l((_vm.monthsArray), function(month, index) {
    return _c('cell', {
      key: index,
      class: [!month.title && 'calendar-row'],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [(month.title) ? _c('text', {
      staticClass: ["month-text"]
    }, [_vm._v(_vm._s(month.title))]) : _vm._l((month), function(cell, rowIndex) {
      return _c('div', {
        key: (index + "-" + rowIndex),
        ref: cell.ref,
        refInFor: true,
        class: ['row-item', cell.cellClass],
        style: cell.isSelected ? _vm.selectedCellStyle : {},
        attrs: {
          "accessible": true,
          "ariaLabel": ((cell.text?cell.text:'') + "," + (cell.note?cell.note:'') + "," + (cell.ext?cell.ext:''))
        },
        on: {
          "click": function($event) {
            _vm.onClickDate(cell)
          }
        }
      }, [_c('text', {
        class: ['calendar-note', cell.cls],
        style: cell.isSelected ? _vm.selectedTextStyle : {}
      }, [_vm._v(_vm._s(cell.note))]), _c('text', {
        class: ['calendar-day', cell.cls],
        style: cell.isSelected ? _vm.selectedTextStyle : {}
      }, [_vm._v(_vm._s(cell.text))]), _c('text', {
        class: ['calendar-ext', cell.cls],
        style: cell.isSelected ? _vm.selectedTextStyle : {}
      }, [_vm._v(_vm._s(cell.ext))])])
    })], 2)
  }), (_vm.isIPhoneX) ? _c('cell', {
    staticClass: ["iphone-x"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }) : _vm._e()], 2) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-4cc181ee!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-4cc181ee!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-tag.vue ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-tag', 'border-' + _vm.tagTheme],
    style: _vm.newTheme.divStyle
  }, [_c('text', {
    class: ['tag-text', _vm.tagTheme],
    style: _vm.newTheme.textStyle
  }, [_vm._v(_vm._s(_vm.tagValue))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-4e9daa4e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-4e9daa4e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-text.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    class: ['wxc-text', _vm.textTheme, _vm.hasTextMargin ? 'margin-text' : ''],
    style: _vm.themeStyle
  }, [_vm._v(_vm._s(_vm.textValue))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-4f186536!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox-list\\index.vue":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-4f186536!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-checkbox-list/index.vue ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.list), function(item, i) {
    return _c('wxc-checkbox', _vm._b({
      key: i,
      attrs: {
        "config": _vm.config
      },
      on: {
        "wxcCheckBoxItemChecked": _vm.wxcCheckBoxItemChecked
      }
    }, 'wxc-checkbox', item, false))
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-55652bce!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-stepper\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-55652bce!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-stepper/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-stepper"]
  }, [_c('div', {
    staticClass: ["stepper-minus"],
    attrs: {
      "ariaLabel": "减数",
      "accessible": true
    },
    on: {
      "click": _vm.minusClicked
    }
  }, [_c('text', {
    staticClass: ["stepper-icon"],
    style: {
      color: _vm.isLess ? '#cccccc' : '#666666'
    }
  }, [_vm._v("-")])]), _c('input', {
    staticClass: ["stepper-input"],
    style: _vm.disableStyle,
    attrs: {
      "type": "number",
      "value": _vm.valueString,
      "disabled": _vm.disabled || _vm.readOnly
    },
    on: {
      "input": _vm.onInput,
      "blur": _vm.onBlur
    }
  }), _c('div', {
    staticClass: ["stepper-plus"],
    attrs: {
      "ariaLabel": "加数",
      "accessible": true
    },
    on: {
      "click": _vm.plusClicked
    }
  }, [_c('text', {
    staticClass: ["stepper-icon"],
    style: {
      color: _vm.isOver ? '#cccccc' : '#666666'
    }
  }, [_vm._v("+")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-59cfae47!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-59cfae47!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-dialog/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.show) ? _c('wxc-overlay', {
    attrs: {
      "left": _vm.left,
      "show": true,
      "hasAnimation": false
    }
  }) : _vm._e(), (_vm.show) ? _c('div', {
    staticClass: ["dialog-box"],
    style: {
      top: _vm.top + 'px',
      left: ((_vm.isWeb ? _vm.left : 0) + 96) + 'px'
    }
  }, [_c('div', {
    staticClass: ["dialog-content"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["content-title"]
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._t("content", [_c('text', {
    staticClass: ["content-subtext"]
  }, [_vm._v(_vm._s(_vm.content))])]), (_vm.showNoPrompt) ? _c('div', {
    staticClass: ["no-prompt"],
    on: {
      "click": _vm.noPromptClicked
    }
  }, [_c('image', {
    staticClass: ["no-prompt-icon"],
    attrs: {
      "src": _vm.noPromptIcon
    }
  }), _c('text', {
    staticClass: ["no-prompt-text"]
  }, [_vm._v(_vm._s(_vm.noPromptText))])]) : _vm._e()], 2), _c('div', {
    staticClass: ["dialog-footer"]
  }, [(!_vm.single) ? _c('div', {
    staticClass: ["footer-btn", "cancel"],
    on: {
      "click": _vm.secondaryClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: {
      color: _vm.secondBtnColor
    }
  }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e(), _c('div', {
    staticClass: ["footer-btn", "confirm"],
    on: {
      "click": _vm.primaryClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: {
      color: _vm.mainBtnColor
    }
  }, [_vm._v(_vm._s(_vm.confirmText))])])])]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-59e992e6!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-59e992e6!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-overlay/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-5b136518!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lightbox\\index.vue":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-5b136518!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lightbox/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('wxc-mask', {
    attrs: {
      "width": _vm.width,
      "height": _vm.height,
      "ariaHidden": "true",
      "maskBgColor": "transparent",
      "overlayOpacity": "0.8",
      "show": _vm.show,
      "opacity": _vm.opacity,
      "showClose": false
    },
    on: {
      "wxcMaskSetHidden": _vm.maskOverlayClick
    }
  }, [(_vm.show) ? _c('slider', {
    style: {
      height: _vm.height + 'px'
    },
    attrs: {
      "autoPlay": "false",
      "index": _vm.index,
      "interval": _vm.interval
    }
  }, [_vm._l((_vm.imageList), function(v, index) {
    return _c('div', {
      key: index,
      style: {
        height: _vm.height + 'px'
      }
    }, [_c('image', {
      style: {
        height: _vm.height + 'px',
        width: _vm.width + 'px'
      },
      attrs: {
        "resize": "cover",
        "src": v.src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"],
    style: _vm.indicatorStyle
  })], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-5be4d681!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\full-page.vue":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-5be4d681!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-page/full-page.vue ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-tab-page"],
    style: {
      height: (_vm.tabPageHeight) + 'px'
    }
  }, [_c('div', {
    ref: "tab-page-wrap",
    staticClass: ["tab-page-wrap"],
    style: {
      height: _vm.tabPageHeight + 'px'
    },
    attrs: {
      "preventMoveEvent": true
    },
    on: {
      "horizontalpan": _vm.startHandler
    }
  }, [_c('div', {
    ref: "tab-container",
    staticClass: ["tab-container"]
  }, [_vm._t("default")], 2)]), _c('scroller', {
    ref: "tab-title-list",
    staticClass: ["tab-title-list"],
    style: {
      backgroundColor: _vm.tabStyles.bgColor,
      height: (_vm.tabStyles.height) + 'px',
      top: _vm.tabStyles.top + 'px'
    },
    attrs: {
      "showScrollbar": false,
      "scrollDirection": "horizontal",
      "dataSpm": _vm.spmC
    }
  }, _vm._l((_vm.tabTitles), function(v, index) {
    return _c('div', {
      key: index,
      ref: 'wxc-tab-title-' + index,
      refInFor: true,
      staticClass: ["title-item"],
      style: {
        width: _vm.tabStyles.width + 'px',
        height: _vm.tabStyles.height + 'px',
        backgroundColor: _vm.currentPage == index ? _vm.tabStyles.activeBgColor : _vm.tabStyles.bgColor
      },
      attrs: {
        "accessible": true,
        "ariaLabel": ("" + (v.title?v.title:'标签'+index))
      },
      on: {
        "click": function($event) {
          _vm.setPage(index, v.url)
        }
      }
    }, [(_vm.titleType == 'icon') ? _c('image', {
      style: {
        width: _vm.tabStyles.iconWidth + 'px',
        height: _vm.tabStyles.iconHeight + 'px'
      },
      attrs: {
        "src": _vm.currentPage == index ? v.activeIcon : v.icon
      }
    }) : _vm._e(), _c('text', {
      staticClass: ["tab-text"],
      style: {
        fontSize: _vm.tabStyles.fontSize + 'px',
        fontWeight: (_vm.currentPage == index && _vm.tabStyles.isActiveTitleBold) ? 'bold' : 'normal',
        color: _vm.currentPage == index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
        paddingLeft: (_vm.tabStyles.textPaddingLeft ? _vm.tabStyles.textPaddingLeft : 10) + 'px',
        paddingRight: (_vm.tabStyles.textPaddingRight ? _vm.tabStyles.textPaddingRight : 10) + 'px'
      }
    }, [_vm._v(_vm._s(v.title))]), (_vm.tabStyles.hasActiveBottom) ? _c('div', {
      staticClass: ["border-bottom"],
      style: {
        width: _vm.tabStyles.activeBottomWidth + 'px',
        left: (_vm.tabStyles.width - _vm.tabStyles.activeBottomWidth) / 2 + 'px',
        height: _vm.tabStyles.activeBottomHeight + 'px',
        backgroundColor: _vm.currentPage == index ? _vm.tabStyles.activeBottomColor : 'transparent'
      }
    }) : _vm._e()])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-5cc432ca!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-link.vue":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-5cc432ca!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-link.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "click": _vm.onLinkClick
    }
  }, [_c('wxc-rich-text-text', {
    attrs: {
      "textValue": _vm.linkValue,
      "hasTextMargin": _vm.hasTextMargin,
      "textStyle": _vm.linkStyle ? _vm.linkStyle : _vm.defObj,
      "textTheme": _vm.linkTheme ? _vm.linkTheme : 'black'
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-5e741b9a!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-icon.vue":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-5e741b9a!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-icon.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('image', {
    staticClass: ["wxc-image"],
    style: {
      width: _vm.computedStyle.width,
      height: _vm.computedStyle.height
    },
    attrs: {
      "src": _vm.iconSrc,
      "ariaHidden": true
    },
    on: {
      "load": _vm.onLoad
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-6c9ca210!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\index.vue":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-6c9ca210!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-noticebar/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wxc-noticebar"],
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.notice
    },
    on: {
      "click": _vm.noticeBarClicked
    }
  }, [(_vm.typeIcon) ? _c('image', {
    staticClass: ["type-ICON"],
    attrs: {
      "src": _vm.typeIcon
    }
  }) : _vm._e(), _c('text', {
    staticClass: ["noticebar-content"],
    style: {
      width: _vm.contentWidth + 'px',
      lines: _vm.lines
    }
  }, [_vm._v(_vm._s(_vm.notice))]), (_vm.modeIcon) ? _c('div', {
    staticClass: ["more-click-content"],
    attrs: {
      "mode": _vm.mode
    },
    on: {
      "click": _vm.noticeIconClicked
    }
  }, [_c('image', {
    staticClass: ["mode-ICON"],
    attrs: {
      "src": _vm.modeIcon
    }
  })]) : _vm._e()]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-6cfbfb32!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.vue":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-6cfbfb32!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-special-rich-text/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-special-rich-text"],
    on: {
      "click": function($event) {
        _vm.$emit('wxcSpecialRichTextClick')
      }
    }
  }, [_c('div', {
    staticClass: ["tag-div"],
    style: Object.assign({
      top: _vm.top + 'px'
    }, _vm.newList[0].tagDivStyle)
  }, [(_vm.newList[0] && _vm.newList[0].type === 'icon' && _vm.newList[0].src) ? _c('image', {
    staticClass: ["wxc-image"],
    style: _vm.newList[0].style,
    attrs: {
      "src": _vm.newList[0].src,
      "quality": "original",
      "original": true,
      "ariaHidden": true
    },
    on: {
      "load": _vm.onLoad
    }
  }) : _vm._e(), (_vm.newList[0] && _vm.newList[0].type === 'tag' && _vm.newList[0].value) ? _c('wxc-rich-text-tag', {
    attrs: {
      "tagValue": _vm.newList[0].value,
      "tagTheme": _vm.newList[0].theme,
      "tagStyle": _vm.newList[0].style
    }
  }) : _vm._e()], 1), (_vm.newList[0] && _vm.newList[0].type === 'text' && _vm.newList[0].value) ? _c('text', {
    class: ['wxc-text', _vm.newList[0].theme],
    style: _vm.newList[0].style
  }, [_vm._v(_vm._s(_vm.newList[0].value))]) : _vm._e(), (_vm.newList[1] && _vm.newList[1].value) ? _c('text', {
    class: ['wxc-text', _vm.newList[1].theme],
    style: _vm.newList[1].style
  }, [_vm._v(_vm._s(_vm.newList[1].value))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-6e13e4c4!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slide-nav\\index.vue":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-6e13e4c4!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-slide-nav/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "wrapper",
    staticClass: ["slide-nav"]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-6fd6bf00!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.vue":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-6fd6bf00!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-ep-slider/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: _vm.containerS
  }, [_c('div', {
    ref: ("sliderCtn_" + _vm.sliderId),
    style: {
      width: _vm.cardWidth + 'px',
      height: _vm.cardS.height + 'px',
      transform: ("translateX(-" + (_vm.currentIndex * (_vm.cardS.width + _vm.cardS.spacing)) + "px)")
    },
    on: {
      "panstart": _vm.onPanStart,
      "panmove": _vm.onPanMove,
      "panend": _vm.onPanEnd,
      "horizontalpan": _vm.onEpPanStart
    }
  }, [_vm._l((_vm.cardList), function(v, index) {
    return _c('div', {
      ref: ("card" + index + "_" + _vm.sliderId),
      refInFor: true,
      staticClass: ["slider"],
      style: {
        transform: ("scale(" + (index===_vm.currentIndex ? 1 : _vm.cardS.scale) + ")"),
        left: ((index * (_vm.cardS.width+_vm.cardS.spacing)) + "px"),
        marginLeft: (((_vm.containerS.width - _vm.cardS.width) / 2) + "px"),
        width: _vm.cardS.width + 'px',
        height: _vm.cardS.height + 'px'
      }
    }, [_vm._t(("card" + index + "_" + _vm.sliderId))], 2)
  }), _vm._t("pull-more")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-7495c521!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-part-loading\\index.vue":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-7495c521!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-part-loading/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('image', {
    style: _vm.loadingStyle,
    attrs: {
      "src": _vm.PART,
      "resize": "contain",
      "quality": "original"
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-755de790!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\index.vue":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-755de790!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-radio/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.updateList), function(item, i) {
    return _c('wxc-radio', _vm._b({
      key: i,
      attrs: {
        "config": _vm.config
      },
      on: {
        "wxcRadioItemChecked": function($event) {
          _vm.wxcRadioItemChecked(i, $event)
        }
      }
    }, 'wxc-radio', item, false))
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-7c9b0a21!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-7c9b0a21!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-cell/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.extraContent) ? _c('text', {
    staticClass: ["extra-content-text"]
  }, [_vm._v(_vm._s(_vm.extraContent))]) : _vm._e(), (_vm.hasArrow) ? _c('image', {
    staticClass: ["cell-arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-7d99a728!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-swipe-action\\index.vue":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-7d99a728!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-swipe-action/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, _vm._l((_vm.data), function(item, i) {
    return _c('div', {
      key: 'skid-' + i,
      ref: "skid",
      refInFor: true,
      staticClass: ["wxc-skid"],
      style: {
        width: (750 + item.right.length * 100) + 'px'
      },
      on: {
        "click": function($event) {
          _vm.onNodeClick(item, i)
        },
        "touchstart": function (e) { return !_vm.isAndroid && _vm.onPanStart(e, item, i); },
        "horizontalpan": function (e) { return _vm.isAndroid && _vm.onPanStart(e, item, i); },
        "touchend": function (e) { return _vm.onPanEnd(e, item, i); }
      }
    }, [_c('text', {
      class: ['box-center', 'border', 'text', i + 1 === _vm.data.length && 'box-center-last']
    }, [_vm._v(_vm._s(item.title))]), _c('div', {
      staticClass: ["box-right"]
    }, _vm._l((item.right), function(child, childIdx) {
      return _c('text', {
        key: 'child-' + childIdx,
        staticClass: ["child", "text"],
        style: child.style || {},
        on: {
          "click": function($event) {
            _vm.onRightNode(item, child, i)
          }
        }
      }, [_vm._v(_vm._s(child.text))])
    }))])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-87a2d234!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slider-bar\\index.vue":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-87a2d234!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-slider-bar/index.vue ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "bar-container",
    staticClass: ["slider-bar-container"],
    style: _vm.containerStyle
  }, [_c('div', {
    staticClass: ["range-bar"],
    style: _vm.rangeBarStyle
  }, [_c('div', {
    ref: "value-bar",
    staticClass: ["value-bar"],
    style: _vm.valueBarStyle
  }, [_c('div')])]), _c('div', {
    ref: "slide-block-1",
    staticClass: ["slide-block"],
    style: _vm.blockStyle1,
    attrs: {
      "preventMoveEvent": _vm.preventMoveEvent
    },
    on: {
      "panstart": _vm.webStartHandler,
      "panmove": _vm.webMoveHandler1,
      "touchstart": _vm.weexStartHandler1,
      "touchend": _vm.weexEndHandler,
      "horizontalpan": _vm.weexHandler1
    }
  }, [_c('div')]), (_vm.range) ? _c('div', {
    ref: "slide-block-2",
    staticClass: ["slide-block"],
    style: _vm.blockStyle2,
    attrs: {
      "preventMoveEvent": _vm.preventMoveEvent
    },
    on: {
      "panstart": _vm.webStartHandler,
      "panmove": _vm.webMoveHandler2,
      "touchstart": _vm.weexStartHandler2,
      "touchend": _vm.weexEndHandler,
      "horizontalpan": _vm.weexHandler2
    }
  }, [_c('div')]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-911d1bb0!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.vue":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-911d1bb0!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-searchbar/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.mod === 'default') ? _c('div', {
    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme],
    style: _vm.barStyle
  }, [_c('input', {
    ref: "search-input",
    class: ['search-bar-input', 'search-bar-input-' + _vm.theme],
    style: {
      width: _vm.needShowCancel ? '624px' : '710px'
    },
    attrs: {
      "returnKeyType": _vm.returnKeyType,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "value": _vm.value,
      "type": _vm.inputType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), (_vm.disabled) ? _c('div', {
    staticClass: ["disabled-input"],
    on: {
      "click": _vm.inputDisabledClicked
    }
  }) : _vm._e(), _c('image', {
    staticClass: ["search-bar-icon"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.inputIcon
    }
  }), (_vm.showClose) ? _c('image', {
    staticClass: ["search-bar-close"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.closeIcon
    },
    on: {
      "click": _vm.closeClicked
    }
  }) : _vm._e(), (_vm.needShowCancel) ? _c('text', {
    class: ['search-bar-button', 'search-bar-button-' + _vm.theme],
    style: _vm.buttonStyle,
    on: {
      "click": _vm.cancelClicked
    }
  }, [_vm._v(_vm._s(_vm.cancelLabel))]) : _vm._e()]) : _vm._e(), (_vm.mod === 'hasDep') ? _c('div', {
    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme],
    style: _vm.barStyle
  }, [_c('input', {
    class: ['search-bar-input', 'input-has-dep', 'search-bar-input-' + _vm.theme],
    attrs: {
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "returnKeyType": _vm.returnKeyType,
      "value": _vm.value,
      "type": _vm.inputType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), (_vm.disabled) ? _c('div', {
    staticClass: ["disabled-input", "has-dep-disabled"],
    on: {
      "click": _vm.inputDisabledClicked
    }
  }) : _vm._e(), _c('div', {
    class: ['bar-dep', '.bar-dep-' + _vm.theme],
    on: {
      "click": _vm.depClicked
    }
  }, [_c('text', {
    staticClass: ["dep-text"]
  }, [_vm._v(_vm._s(_vm.depName))]), _c('image', {
    staticClass: ["dep-arrow"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  })]), _c('image', {
    staticClass: ["search-bar-icon", "icon-has-dep"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.inputIcon
    }
  })]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-9721ffa6!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\tab.vue":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-9721ffa6!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-city/tab.vue ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["tab-box"]
  }, _vm._l((['国内', '国际']), function(name, i) {
    return _c('div', {
      key: i,
      staticClass: ["tab-item"],
      on: {
        "click": function($event) {
          _vm.switchTab(i)
        }
      }
    }, [_c('text', {
      staticClass: ["['tab-item-text',", "i===checkedIndex", "&&", "'text-selected']"]
    }, [_vm._v(_vm._s(name))])])
  })), _c('div', {
    staticClass: ["tab-item-selected-bar"]
  }, [_c('div', {
    ref: "tab-bar",
    staticClass: ["tab-item-selected-bar-in"]
  }, [_c('div', {
    staticClass: ["tab-item-active"]
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-a8f27ea8!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-progress\\index.vue":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-a8f27ea8!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-progress/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-progress"],
    style: _vm.runWayStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": ("进度为百分之" + _vm.value)
    }
  }, [_c('div', {
    staticClass: ["progress"],
    style: _vm.progressStyle
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-bc6e133e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\integral-list\\integral-list.nvue":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-bc6e133e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/pages/integral-list/integral-list.nvue ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["header-content"]
  }, [_c('div', {
    staticClass: ["search-content"],
    on: {
      "click": _vm.searchHandler
    }
  }, [_c('text', {
    staticClass: ["iconfont", "iconfont-search"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["placholder"]
  }, [_vm._v("搜索店内宝贝...")])]), _c('div', {
    staticClass: ["tab-content"]
  }, _vm._l((_vm.tabBars), function(tab, index) {
    return _c('div', {
      key: index,
      staticClass: ["tab-item"],
      class: [_vm.currentIndex == index ? 'tab-active' : ''],
      on: {
        "click": function($event) {
          _vm.sortHandler(index)
        }
      }
    }, [_c('text', {
      staticClass: ["tab"],
      class: [_vm.currentIndex == index ? 'tab-active' : '']
    }, [_vm._v(_vm._s(tab.title))]), (tab.sorts) ? _c('text', {
      staticClass: ["iconfont", "iconfont-sort"],
      class: [_vm.currentIndex == index ? 'tab-active' : '']
    }, [_vm._v("")]) : _vm._e()])
  }))]), _c('scroller', {
    staticClass: ["scroll"]
  }, [_c('div', {
    staticClass: ["product-content"]
  }, _vm._l((_vm.dataList), function(v, i) {
    return _c('div', {
      key: i,
      staticClass: ["product-list"]
    }, _vm._l((v), function(t, k) {
      return _c('div', {
        key: k,
        staticClass: ["product-box"],
        on: {
          "click": function($event) {
            _vm.goDetails(t)
          }
        }
      }, [_c('image', {
        staticClass: ["product-img"],
        attrs: {
          "src": t.url,
          "resize": "cover"
        }
      }), _c('div', {
        staticClass: ["product-footer"]
      }, [_c('div', {
        staticClass: ["product-box-name"]
      }, [_c('text', {
        staticClass: ["product-box-name-text"]
      }, [_vm._v(_vm._s(t.name))])]), _c('div', {
        staticClass: ["product-bottom"]
      }, [_c('div', {
        staticClass: ["jifen"]
      }, [_c('text', {
        staticClass: ["jifen-num"]
      }, [_vm._v(_vm._s(t.num))]), _c('text', {
        staticClass: ["jifen-conpy"]
      }, [_vm._v("积分")])]), _c('text', {
        staticClass: ["want"]
      }, [_vm._v(_vm._s(t.people) + "人想要")])])])])
    }))
  })), _c('loading', {
    staticClass: ["loading"],
    attrs: {
      "display": _vm.loadMoreStatus == 1 ? 'show' : 'hide'
    },
    on: {
      "loading": function($event) {
        _vm.loadMore()
      }
    }
  }, [_c('loading-indicator', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loadMoreStatus == 1),
      expression: "loadMoreStatus == 1"
    }],
    staticClass: ["loading-icon"]
  }), _c('text', {
    staticClass: ["loading-text"]
  }, [_vm._v(_vm._s(_vm.loadMoreStatus == 0 ? '上拉显示更多' : _vm.loadMoreStatus == 1 ? '正在加载..' : '没有更多数据了'))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-c65c4d52!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\option.vue":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-c65c4d52!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-grid-select/option.vue ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid-option"],
    style: _vm.cWrapperStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": (_vm.title + "," + (_vm.checked?'已选中':'未选中'))
    },
    on: {
      "click": _vm.onClick
    }
  }, [(_vm.title) ? _c('text', {
    staticClass: ["text-title"],
    style: _vm.cTitleStyle
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (_vm.checked && _vm.icon) ? _c('image', {
    staticClass: ["image-checked"],
    attrs: {
      "src": _vm.icon
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-c9a0bd76!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-refresher\\index.vue":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-c9a0bd76!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-refresher/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('refresh', {
    staticClass: ["wxc-refresher"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onRefresh,
      "pullingdown": _vm.onPullingDown
    }
  }, [(_vm.newStyleFlag) ? _c('div', {
    ref: "cycle",
    staticClass: ["cycle-container"]
  }, [_c('div', {
    ref: "cover1",
    staticClass: ["u-cover", "c1"]
  }, [_c('div', {
    staticClass: ["u-cover-cycle", "cover1"]
  })]), _c('div', {
    ref: "cover2",
    staticClass: ["u-cover", "c2"]
  }, [_c('div', {
    ref: "cover-cycle",
    staticClass: ["u-cover-cycle"]
  })])]) : _vm._e(), (_vm.newStyleFlag) ? _c('image', {
    ref: "arrow",
    staticClass: ["arrow-down"],
    attrs: {
      "src": _vm.ICON_ARROW_DOWN,
      "resize": "contain"
    }
  }) : _c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["u-txt"],
    style: {
      width: (_vm.textWidth + "px")
    }
  }, [_vm._v(_vm._s(_vm.refresherText))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-d86a0074!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.vue":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-d86a0074!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-page/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-tab-page"],
    style: {
      height: (_vm.tabPageHeight) + 'px',
      backgroundColor: _vm.wrapBgColor
    }
  }, [_c('scroller', {
    ref: "tab-title-list",
    staticClass: ["tab-title-list"],
    style: {
      backgroundColor: _vm.tabStyles.bgColor,
      height: (_vm.tabStyles.height) + 'px',
      paddingLeft: (_vm.tabStyles.leftOffset ? _vm.tabStyles.leftOffset : 0) + 'px',
      paddingRight: _vm.tabStyles.rightOffset
    },
    attrs: {
      "showScrollbar": false,
      "scrollDirection": "horizontal",
      "dataSpm": _vm.spmC
    }
  }, [_vm._l((_vm.tabTitles), function(v, index) {
    return _c('div', {
      key: index,
      ref: 'wxc-tab-title-' + index,
      refInFor: true,
      staticClass: ["title-item"],
      style: {
        width: _vm.tabStyles.width + 'px',
        height: _vm.tabStyles.height + 'px',
        backgroundColor: _vm.currentPage === index ? _vm.tabStyles.activeBgColor : _vm.tabStyles.bgColor,
        borderBottomWidth: _vm.tabStyles.normalBottomHeight,
        borderBottomColor: _vm.tabStyles.normalBottomColor
      },
      attrs: {
        "accessible": true,
        "ariaLabel": ("" + (v.title?v.title:'标签'+index))
      },
      on: {
        "click": function($event) {
          _vm.setPage(index, v.url, _vm.clickAnimation)
        }
      }
    }, [(_vm.titleType === 'icon' && !_vm.titleUseSlot) ? _c('image', {
      style: {
        width: _vm.tabStyles.iconWidth + 'px',
        height: _vm.tabStyles.iconHeight + 'px'
      },
      attrs: {
        "src": _vm.currentPage === index ? v.activeIcon : v.icon
      }
    }) : _vm._e(), (_vm.titleType === 'iconFont' && v.codePoint && !_vm.titleUseSlot) ? _c('text', {
      staticClass: ["icon-font"],
      style: {
        fontFamily: 'wxcIconFont',
        fontSize: _vm.tabStyles.iconFontSize + 'px',
        color: _vm.currentPage === index ? _vm.tabStyles.activeIconFontColor : _vm.tabStyles.iconFontColor
      }
    }, [_vm._v(_vm._s(v.codePoint))]) : _vm._e(), (!_vm.titleUseSlot) ? _c('text', {
      staticClass: ["tab-text"],
      style: {
        fontSize: _vm.tabStyles.fontSize + 'px',
        fontWeight: (_vm.currentPage === index && _vm.tabStyles.isActiveTitleBold) ? 'bold' : 'normal',
        color: _vm.currentPage === index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
        paddingLeft: (_vm.tabStyles.textPaddingLeft ? _vm.tabStyles.textPaddingLeft : 10) + 'px',
        paddingRight: (_vm.tabStyles.textPaddingRight ? _vm.tabStyles.textPaddingRight : 10) + 'px'
      }
    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (_vm.tabStyles.hasActiveBottom && !_vm.titleUseSlot) ? _c('div', {
      staticClass: ["border-bottom"],
      style: {
        width: _vm.tabStyles.activeBottomWidth + 'px',
        left: (_vm.tabStyles.width - _vm.tabStyles.activeBottomWidth) / 2 + 'px',
        height: _vm.tabStyles.activeBottomHeight + 'px',
        backgroundColor: _vm.currentPage === index ? _vm.tabStyles.activeBottomColor : 'transparent'
      }
    }) : _vm._e(), (_vm.titleUseSlot) ? _vm._t(("tab-title-" + index)) : _vm._e()], 2)
  }), (_vm.tabStyles.hasRightIcon) ? _c('div', {
    staticClass: ["rightIcon"],
    style: {
      top: _vm.rightIconStyle.top,
      right: _vm.rightIconStyle.right,
      paddingLeft: _vm.rightIconStyle.paddingLeft,
      paddingRight: _vm.rightIconStyle.paddingRight
    }
  }, [_vm._t("rightIcon")], 2) : _vm._e()], 2), _c('div', {
    ref: "tab-page-wrap",
    staticClass: ["tab-page-wrap"],
    style: {
      height: (_vm.tabPageHeight - _vm.tabStyles.height) + 'px'
    },
    on: {
      "horizontalpan": _vm.startHandler
    }
  }, [_c('div', {
    ref: "tab-container",
    staticClass: ["tab-container"]
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-d8a6c350!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-bar\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-d8a6c350!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-bar/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-tab-page"],
    style: {
      backgroundColor: _vm.wrapBgColor
    }
  }, [_c('div', {
    ref: "tab-page-wrap",
    staticClass: ["tab-page-wrap"]
  }, [_c('div', {
    ref: "tab-container",
    staticClass: ["tab-container"]
  }, [_vm._t("default")], 2)]), _c('div', {
    staticClass: ["tab-title-list"],
    style: {
      backgroundColor: _vm.tabStyles.bgColor,
      height: (_vm.tabStyles.height + (_vm.isIPhoneX ? 78 : 0)) + 'px',
      paddingBottom: _vm.isIPhoneX ? '78px' : '0'
    }
  }, _vm._l((_vm.tabTitles), function(v, index) {
    return _c('div', {
      key: index,
      ref: 'wxc-tab-title-' + index,
      refInFor: true,
      staticClass: ["title-item"],
      style: {
        width: _vm.tabStyles.width + 'px',
        height: _vm.tabStyles.height + 'px',
        backgroundColor: _vm.currentPage == index ? _vm.tabStyles.activeBgColor : _vm.tabStyles.bgColor
      },
      attrs: {
        "accessible": true,
        "ariaLabel": ("" + (v.title?v.title:'标签'+index))
      },
      on: {
        "click": function($event) {
          _vm.setPage(index, v.url)
        }
      }
    }, [(_vm.titleType === 'icon' && !_vm.titleUseSlot) ? _c('image', {
      style: {
        width: _vm.tabStyles.iconWidth + 'px',
        height: _vm.tabStyles.iconHeight + 'px'
      },
      attrs: {
        "src": _vm.currentPage == index ? v.activeIcon : v.icon
      }
    }) : _vm._e(), (_vm.titleType === 'iconFont' && v.codePoint && !_vm.titleUseSlot) ? _c('text', {
      style: {
        fontFamily: 'wxcIconFont',
        fontSize: _vm.tabStyles.iconFontSize + 'px',
        marginBottom: _vm.tabStyles.iconFontMarginBottom ? (_vm.tabStyles.iconFontMarginBottom + 'px') : '8px',
        color: _vm.currentPage == index ? _vm.tabStyles.activeIconFontColor : _vm.tabStyles.iconFontColor
      }
    }, [_vm._v(_vm._s(v.codePoint))]) : _vm._e(), (!_vm.titleUseSlot) ? _c('text', {
      staticClass: ["tab-text"],
      style: {
        fontSize: _vm.tabStyles.fontSize + 'px',
        fontWeight: (_vm.currentPage == index && _vm.tabStyles.isActiveTitleBold) ? 'bold' : 'normal',
        color: _vm.currentPage == index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
        paddingLeft: _vm.tabStyles.textPaddingLeft + 'px',
        paddingRight: _vm.tabStyles.textPaddingRight + 'px'
      }
    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (v.badge && !_vm.titleUseSlot) ? _c('div', {
      staticClass: ["desc-tag"]
    }, [_c('text', {
      staticClass: ["desc-text"]
    }, [_vm._v(_vm._s(v.badge))])]) : _vm._e(), (v.dot && !v.badge && !_vm.titleUseSlot) ? _c('div', {
      staticClass: ["dot"]
    }) : _vm._e(), (_vm.titleUseSlot) ? _vm._t(("tab-title-" + index)) : _vm._e()], 2)
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-dc4a90ce!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-dc4a90ce!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-minibar/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wxc-minibar"],
    style: _vm.newBarStyle
  }, [_c('div', {
    staticClass: ["left"],
    attrs: {
      "ariaLabel": "返回",
      "accessible": true
    },
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_vm._t("left", [(_vm.leftButton && !_vm.leftText) ? _c('image', {
    staticClass: ["left-button"],
    attrs: {
      "src": _vm.leftButton
    }
  }) : _vm._e(), (_vm.leftText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.leftText))]) : _vm._e()])], 2), _vm._t("middle", [_c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right", [(_vm.rightButton && !_vm.rightText) ? _c('image', {
    staticClass: ["right-button"],
    attrs: {
      "src": _vm.rightButton,
      "ariaHidden": true
    }
  }) : _vm._e(), (_vm.rightText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()])], 2)], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-e59faabc!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popover\\index.vue":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-e59faabc!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-popover/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [(_vm.show) ? _c('div', {
    ref: "wxc-cover",
    staticClass: ["g-cover"],
    style: _vm.coverStyle,
    on: {
      "click": _vm.hideAction
    }
  }) : _vm._e(), (_vm.show && _vm.buttons.length) ? _c('div', {
    ref: "wxc-popover",
    staticClass: ["g-popover"],
    style: _vm.contentStyle
  }, [_c('div', {
    staticClass: ["u-popover-arrow"],
    style: _vm.arrowStyle
  }), _c('div', {
    staticClass: ["u-popover-inner"]
  }, _vm._l((_vm.buttons), function(item, i) {
    return _c('div', {
      key: i,
      class: ['i-btn', i === _vm.buttons.length - 1 ? 'i-btn-noborder' : ''],
      on: {
        "click": function($event) {
          _vm.wxcButtonClicked(i, item.key)
        }
      }
    }, [(item.icon) ? _c('image', {
      staticClass: ["btn-icon"],
      attrs: {
        "src": item.icon
      }
    }) : _vm._e(), _c('text', {
      staticClass: ["btn-text"],
      style: _vm.textStyle
    }, [_vm._v(_vm._s(item.text))])])
  }))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-e9d000ae!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-e9d000ae!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-popup/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    ref: "overlay",
    attrs: {
      "show": _vm.haveOverlay && _vm.isOverShow
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking
    }
  }, 'wxc-overlay', _vm.overlayCfg, false)) : _vm._e()], 1), (_vm.show) ? _c('div', {
    ref: "wxc-popup",
    class: ['wxc-popup', _vm.pos],
    style: _vm.padStyle,
    attrs: {
      "height": _vm._height,
      "hack": _vm.isNeedShow
    },
    on: {
      "click": function () {}
    }
  }, [_vm._t("default")], 2) : _vm._e()])
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\querystringify\\index.js":
/*!*******************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/querystringify/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encodeURIComponent(key);
      value = encodeURIComponent(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\requires-port\\index.js":
/*!******************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/requires-port/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\url-parse\\index.js":
/*!**************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/url-parse/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(/*! requires-port */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\requires-port\\index.js")
  , qs = __webpack_require__(/*! querystringify */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\querystringify\\index.js")
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;


/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-bindingx\\lib\\index.weex.js":
/*!***************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-bindingx/lib/index.weex.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

;(function (fn) {
  if (true) {
    module.exports = fn();
  } else { var root; }
})(function () {
  return (/******/function (modules) {// webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/}
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/}
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/}
        /******/};
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {return module['default'];} :
        /******/function getModuleExports() {return module;};
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/};
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {return Object.prototype.hasOwnProperty.call(object, property);};
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/}(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
                     Copyright 2018 Alibaba Group
                    
                     Licensed under the Apache License, Version 2.0 (the "License");
                     you may not use this file except in compliance with the License.
                     You may obtain a copy of the License at
                    
                     http://www.apache.org/licenses/LICENSE-2.0
                    
                     Unless required by applicable law or agreed to in writing, software
                     distributed under the License is distributed on an "AS IS" BASIS,
                     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     See the License for the specific language governing permissions and
                     limitations under the License.
                     */



      Object.defineProperty(exports, "__esModule", {
        value: true });


      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};

      var _bindingxParser = __webpack_require__(1);

      var isWeb = false;
      var isWeex = true;

      function requireModule(moduleName) {
        try {
          if ((typeof weex === 'undefined' ? 'undefined' : _typeof(weex)) !== undefined && weex.requireModule) {
            // eslint-disable-line
            return weex.requireModule(moduleName); // eslint-disable-line
          }
        } catch (err) {}
        return window.require('@weex-module/' + moduleName);
      }

      var isSupportNewBinding = true;
      var isSupportBinding = true;
      var WeexBinding = void 0;
      var WebBinding = {};

      try {
        WeexBinding = requireModule('bindingx');
        isSupportNewBinding = true;
      } catch (e) {
        isSupportNewBinding = false;
      }
      if (!WeexBinding || !WeexBinding.bind) {
        try {
          WeexBinding = requireModule('binding');
          isSupportNewBinding = true;
        } catch (e) {
          isSupportNewBinding = false;
        }
      }
      isSupportNewBinding = !!(WeexBinding && WeexBinding.bind && WeexBinding.unbind);
      if (!isSupportNewBinding) {
        try {
          WeexBinding = requireModule('expressionBinding');
          isSupportBinding = true;
        } catch (err) {
          isSupportBinding = false;
        }
      }
      isSupportBinding = !!(WeexBinding && (WeexBinding.bind || WeexBinding.createBinding));


      function formatExpression(expression) {
        if (expression === undefined) return;
        try {
          expression = JSON.parse(expression);
        } catch (err) {}
        var resultExpression = {};
        if (typeof expression === 'string') {
          resultExpression.origin = expression;
        } else if (expression) {
          resultExpression.origin = expression.origin;
          resultExpression.transformed = expression.transformed;
        }
        if (!resultExpression.transformed && !resultExpression.origin) return;
        resultExpression.transformed = resultExpression.transformed || (0, _bindingxParser.parse)(resultExpression.origin);
        return resultExpression;
      }

      // 统一回调参数
      function fixCallback(callback) {
        return function () {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (typeof callback === 'function') {
            return callback({
              state: params.state === 'end' ? 'exit' : params.state,
              t: params.t !== undefined ? params.t : params.deltaT });

          }
        };
      }

      exports.default = {
        // 是否支持新版本的binding
        isSupportNewBinding: isSupportNewBinding,
        // 是否支持binding
        isSupportBinding: isSupportBinding,
        _bindingInstances: [],
        /**
                                * 绑定
                                * @param options 参数
                                * @example
                                {
                                  anchor:blockRef,
                                  eventType:'pan',
                                  props: [
                                  {
                                    element:blockRef,
                                    property:'transform.translateX',
                                    expression:{
                                      origin:"x+1",
                                      transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
                                    }
                                  }
                                 ]
                                }
                                */
        bind: function bind(options) {
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

          if (!options) {
            throw new Error('should pass options for binding');
          }

          options.exitExpression = formatExpression(options.exitExpression);

          if (options.props) {
            options.props.forEach(function (prop) {
              prop.expression = formatExpression(prop.expression);
            });
          }

          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.bind(options, options && options.eventType === 'timing' ? fixCallback(callback) : callback);
            } else {
              WeexBinding.enableBinding(options.anchor, options.eventType);
              // 处理expression的参数格式
              var expressionArgs = options.props.map(function (prop) {
                return {
                  element: prop.element,
                  property: prop.property,
                  expression: prop.expression.transformed };

              });
              WeexBinding.createBinding(options.anchor, options.eventType, '', expressionArgs, callback);
            }
          }
        },

        /**
            *  @param {object} options
            *  @example
            *  {eventType:'pan',
            *   token:self.gesToken}
            */
        unbind: function unbind(options) {
          if (!options) {
            throw new Error('should pass options for binding');
          }

          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.unbind(options);
            } else {
              return WeexBinding.disableBinding(options.anchor, options.eventType);
            }
          }
        },
        unbindAll: function unbindAll() {
          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.unbindAll();
            } else {
              return WeexBinding.disableAll();
            }
          }
        },
        prepare: function prepare(options) {
          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.prepare(options);
            } else {
              return WeexBinding.enableBinding(options.anchor, options.eventType);
            }
          }
        },
        getComputedStyle: function getComputedStyle(el) {
          if (isSupportNewBinding) {
            return WeexBinding.getComputedStyle(el);
          } else {
            return {};
          }
        } };

      module.exports = exports['default'];

      /***/},
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";


      module.exports = __webpack_require__(2);

      /***/},
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";


      var lex = {
        InputElementDiv: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
        InputElementRegExp: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
        ReservedWord: '<Keyword>|<NullLiteral>|<BooleanLiteral>',
        WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/,
        LineTerminator: /[\n\r\u2028\u2029]/,
        Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/,
        NullLiteral: /null(?![_$a-zA-Z0-9])/,
        BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/,
        Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/,
        Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/,
        DivPunctuator: /\/=|\//,
        NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/,
        StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/,
        RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/ };


      function XRegExp(xregexps, rootname, flag) {
        var expnames = [rootname];

        function buildRegExp(source) {
          var regexp = new RegExp();
          regexp.compile(source.replace(/<([^>]+)>/g,
          function (all, expname) {
            if (!xregexps[expname])
            return '';
            expnames.push(expname);
            if (xregexps[expname] instanceof RegExp)
            return '(' + xregexps[expname].source + ')';
            return '(' + buildRegExp(xregexps[expname]).source + ')';
          }), flag);
          return regexp;
        }

        var regexp = buildRegExp(xregexps[rootname]);
        this.exec = function (string) {
          var matches = regexp.exec(string);
          if (matches == null)
          return null;
          var result = new String(matches[0]);
          for (var i = 0; i < expnames.length; i++) {
            if (matches[i])
            result[expnames[i]] = matches[i];}
          return result;
        };
        Object.defineProperty(this, 'lastIndex',
        {
          'get': function get() {
            return regexp.lastIndex;
          },
          'set': function set(v) {
            regexp.lastIndex = v;
          } });

      }

      function LexicalParser() {
        var inputElementDiv = new XRegExp(lex, 'InputElementDiv', 'g');
        var inputElementRegExp = new XRegExp(lex, 'InputElementRegExp', 'g');
        var source;
        Object.defineProperty(this, 'source', {
          'get': function get() {
            return source;
          },
          'set': function set(v) {
            source = v;
            inputElementDiv.lastIndex = 0;
            inputElementRegExp.lastIndex = 0;
          } });

        this.reset = function () {
          inputElementDiv.lastIndex = 0;
          inputElementRegExp.lastIndex = 0;
        };
        this.getNextToken = function (useDiv) {
          var lastIndex = inputElementDiv.lastIndex;
          var inputElement;
          if (useDiv)
          inputElement = inputElementDiv;else

          inputElement = inputElementRegExp;
          var token = inputElement.exec(source);
          if (token && inputElement.lastIndex - lastIndex > token.length) {
            throw new SyntaxError('Unexpected token ILLEGAL');
          }
          inputElementDiv.lastIndex = inputElement.lastIndex;
          inputElementRegExp.lastIndex = inputElement.lastIndex;
          return token;
        };
      }

      var rules = {
        'IdentifierName': [['Identifier']],
        'Literal': [['NullLiteral'], ['BooleanLiteral'], ['NumericLiteral'], ['StringLiteral'], ['RegularExpressionLiteral']],
        'PrimaryExpression': [['Identifier'], ['Literal'], ['(', 'Expression', ')']],
        'CallExpression': [['PrimaryExpression', 'Arguments'], ['CallExpression', 'Arguments']],
        'Arguments': [['(', ')'], ['(', 'ArgumentList', ')']],
        'ArgumentList': [['ConditionalExpression'], ['ArgumentList', ',', 'ConditionalExpression']],
        'LeftHandSideExpression': [['PrimaryExpression'], ['CallExpression']],
        'UnaryExpression': [['LeftHandSideExpression'], ['void', 'UnaryExpression'], ['+', 'UnaryExpression'], ['-', 'UnaryExpression'], ['~', 'UnaryExpression'], ['!', 'UnaryExpression']],
        'ExponentiationExpression': [['UnaryExpression'], ['ExponentiationExpression', '**', 'UnaryExpression']],
        'MultiplicativeExpression': [['MultiplicativeExpression', '/', 'ExponentiationExpression'], ['ExponentiationExpression'], ['MultiplicativeExpression', '*', 'ExponentiationExpression'], ['MultiplicativeExpression', '%', 'ExponentiationExpression']],
        'AdditiveExpression': [['MultiplicativeExpression'], ['AdditiveExpression', '+', 'MultiplicativeExpression'], ['AdditiveExpression', '-', 'MultiplicativeExpression']],
        'ShiftExpression': [['AdditiveExpression'], ['ShiftExpression', '<<', 'AdditiveExpression'], ['ShiftExpression', '>>', 'AdditiveExpression'], ['ShiftExpression', '>>>', 'AdditiveExpression']],
        'RelationalExpression': [['ShiftExpression'], ['RelationalExpression', '<', 'ShiftExpression'], ['RelationalExpression', '>', 'ShiftExpression'], ['RelationalExpression', '<=', 'ShiftExpression'], ['RelationalExpression', '>=', 'ShiftExpression'], ['RelationalExpression', 'instanceof', 'ShiftExpression'], ['RelationalExpression', 'in', 'ShiftExpression']],
        'EqualityExpression': [['RelationalExpression'], ['EqualityExpression', '==', 'RelationalExpression'], ['EqualityExpression', '!=', 'RelationalExpression'], ['EqualityExpression', '===', 'RelationalExpression'], ['EqualityExpression', '!==', 'RelationalExpression']],
        'BitwiseANDExpression': [['EqualityExpression'], ['BitwiseANDExpression', '&', 'EqualityExpression']],
        'BitwiseXORExpression': [['BitwiseANDExpression'], ['BitwiseXORExpression', '^', 'BitwiseANDExpression']],
        'BitwiseORExpression': [['BitwiseXORExpression'], ['BitwiseORExpression', '|', 'BitwiseXORExpression']],
        'LogicalANDExpression': [['BitwiseORExpression'], ['LogicalANDExpression', '&&', 'BitwiseORExpression']],
        'LogicalORExpression': [['LogicalANDExpression'], ['LogicalORExpression', '||', 'LogicalANDExpression']],
        'ConditionalExpression': [['LogicalORExpression'], ['LogicalORExpression', '?', 'LogicalORExpression', ':', 'LogicalORExpression']],
        'Expression': [['ConditionalExpression'], ['Expression', ',', 'ConditionalExpression']],
        'Program': [['Expression']] };



      function Symbol(symbolName, token) {
        this.name = symbolName;
        this.token = token;
        this.childNodes = [];
        this.toString = function (indent) {
          if (!indent)
          indent = '';
          if (this.childNodes.length == 1)
          return this.childNodes[0].toString(indent);
          var str = indent + this.name + (this.token != undefined && this.name != this.token ? ':' + this.token : '') + '\n';
          for (var i = 0; i < this.childNodes.length; i++) {
            str += this.childNodes[i].toString(indent + '    ');}
          return str;
        };
      }

      function SyntacticalParser() {
        var currentRule;
        var root = {
          Program: '$' };

        var hash = {};

        function closureNode(node) {

          hash[JSON.stringify(node)] = node;

          var queue = Object.getOwnPropertyNames(node);
          while (queue.length) {
            var symbolName = queue.shift();
            if (!rules[symbolName])
            continue;
            rules[symbolName].forEach(function (rule) {
              if (!node[rule[0]])
              queue.push(rule[0]);
              var rulenode = node;
              var lastnode = null;
              rule.forEach(function (symbol) {
                if (!rulenode[symbol])
                rulenode[symbol] = {};
                lastnode = rulenode;
                rulenode = rulenode[symbol];
              });
              if (node[symbolName].$div)
              rulenode.$div = true;
              rulenode.$reduce = symbolName;
              rulenode.$count = rule.length;
            });
          }

          for (var p in node) {
            if (typeof node[p] != 'object' || p.charAt(0) == '$' || node[p].$closure)
            continue;
            if (hash[JSON.stringify(node[p])])
            node[p] = hash[JSON.stringify(node[p])];else
            {
              closureNode(node[p]);
            }
          }
          node.$closure = true;
        }

        closureNode(root);
        var symbolStack = [];
        var statusStack = [root];
        var current = root;
        this.insertSymbol = function insertSymbol(symbol, haveLineTerminator) {
          while (!current[symbol.name] && current.$reduce) {
            var count = current.$count;
            var newsymbol = new Symbol(current.$reduce);
            while (count--) {
              newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();}
            current = statusStack[statusStack.length - 1];
            this.insertSymbol(newsymbol);
          }
          current = current[symbol.name];
          symbolStack.push(symbol), statusStack.push(current);
          if (!current)
          throw new Error();
          return current.$div;
        };
        this.reset = function () {
          current = root;
          symbolStack = [];
          statusStack = [root];
        };
        Object.defineProperty(this, 'grammarTree', {
          'get': function get() {
            try {
              while (current.$reduce) {
                var count = current.$count;
                var newsymbol = new Symbol(current.$reduce);
                while (count--) {
                  newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();}
                current = statusStack[statusStack.length - 1];
                this.insertSymbol(newsymbol);
              }
              if (symbolStack.length > 0 && current[';']) {
                this.insertSymbol(new Symbol(';', ';'));
                return this.grammarTree;
              }
              if (symbolStack.length != 1 || symbolStack[0].name != 'Program')
              throw new Error();
            } catch (e) {
              throw new SyntaxError('Unexpected end of input');
            }
            return symbolStack[0];
          } });

      }

      function Parser() {
        this.lexicalParser = new LexicalParser();
        this.syntacticalParser = new SyntacticalParser();
        var terminalSymbols = ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'RegularExpressionLiteral', 'Identifier', '**', '=>', '{', '}', '(', ')', '[', ']', '.', ';', ',', '<', '>', '<=', '>=', '==', '!=', '===', '!==', '+', '-', '*', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=', '*=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', '/', '/=', 'instanceof', 'typeof', 'new', 'void', 'debugger', 'this', 'delete', 'in'];
        var terminalSymbolIndex = {};
        terminalSymbols.forEach(function (e) {
          Object.defineProperty(terminalSymbolIndex, e, {});
        });
        this.reset = function () {
          this.lexicalParser.reset();
          this.syntacticalParser.reset();
        };
        this.parse = function (source, onInputElement) {var _this = this;
          var token;
          var haveLineTerminator = false;
          this.lexicalParser.source = source;
          var useDiv = false;
          while (token = this.lexicalParser.getNextToken(useDiv)) {
            if (onInputElement)
            onInputElement(token);
            try {
              if (Object.getOwnPropertyNames(token).some(
              function (e) {
                if (terminalSymbolIndex.hasOwnProperty(e)) {
                  useDiv = _this.syntacticalParser.insertSymbol(new Symbol(e, token), haveLineTerminator);
                  haveLineTerminator = false;
                  return true;
                } else
                return false;
              }))
              continue;
              if ((token.Keyword || token.Punctuator || token.DivPunctuator) && terminalSymbolIndex.hasOwnProperty(token.toString())) {
                useDiv = this.syntacticalParser.insertSymbol(new Symbol(token.toString(), token), haveLineTerminator);
              }
            } catch (e) {
              throw new SyntaxError('Unexpected token ' + token);
            }
          }
          return this.syntacticalParser.grammarTree;
        };
      }

      var parser = new Parser();

      function JavaScriptExpression(text) {
        parser.reset();
        this.tree = parser.parse(text);
        this.paths = [];
        var context = Object.create(null);
        var me = this;
        var pathIndex = Object.create(null);
        this.isSimple;
        this.isConst;
        walk(this.tree);
        checkSimple(this.tree);
        if (this.paths.length === 0) {
          this.isConst = true;
        }
        this.setter = function (path) {
          var curr = context;
          for (var i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]])
            curr[path[i]] = Object.create(null);
            curr = curr[path[i]];
          }
          return {
            isCompleted: function isCompleted() {
              for (var p in pathIndex) {
                if (!pathIndex[p])
                return false;}
              return true;
            },
            set: function set(value) {
              if (!pathIndex[path.join('.')]) {
                pathIndex[path.join('.')] = true;
              }
              curr[path[i]] = value;
              if (this.isCompleted()) {
                return me.exec();
              } else {
                return undefined;
              }
            } };

        };

        this.valueOf = this.exec = function () {
          try {
            return function () {
              return eval(text);
            }.call(context);
          } catch (e) {
          }
        };

        function checkSimple(symbol) {

          var curr = symbol;
          while (curr.childNodes.length <= 1 && curr.name !== 'MemberExpression') {
            curr = curr.childNodes[0];
          }
          // TODO: need to point out "[……]"
          if (curr.name === 'MemberExpression') {
            me.isSimple = true;
          } else {
            me.isSimple = false;
          }
        }

        function walk(symbol) {
          if (symbol.name === 'CallExpression' && symbol.childNodes[symbol.childNodes.length - 1].name !== 'CallExpression') {
            var path = getPath(symbol.childNodes[1]);
            walk(symbol.childNodes[0]);
          } else if (symbol.name === 'NewExpression' && symbol.childNodes.length === 1) {
            var path = getPath(symbol.childNodes[0]);
          } else if (symbol.name === 'MemberExpression' && symbol.childNodes.length === 1) {
            var path = getPath(symbol);
          } else {
            for (var i = 0; i < symbol.childNodes.length; i++) {
              walk(symbol.childNodes[i]);}
          }

        }


        function getPath(symbol) {
          // [["PrimaryExpression"], ["MemberExpression", "[", "Expression", "]"], ["MemberExpression", ".", "IdentifierName"], ["new", "MemberExpression", "Arguments"]],

          if (symbol.childNodes[0].name === 'IdentifierName') {// MemberExpression : MemberExpression "." IdentifierName
            var path = getPath(symbol.childNodes[2]);
            if (path)
            path = path.concat(symbol.childNodes[0].childNodes[0].token.toString());
            createPath(path);
            return path;

          } else if (symbol.childNodes[0].name === 'PrimaryExpression') {// MemberExpression : PrimaryExpression
            if (symbol.childNodes[0].childNodes[0].name === 'Identifier') {
              var path = [symbol.childNodes[0].childNodes[0].token.toString()];
              createPath(path);
              return path;
            } else {
              return null;
            }
          } else if (symbol.childNodes[0].name === ']') {// MemberExpression : MemberExpression "[" Expression "]"
            getPath(symbol.childNodes[3]);
            walk(symbol.childNodes[1]);
            return null;

          } else if (symbol.childNodes[0].name === 'Arguments') {// MemberExpression : "new" MemberExpression Arguments
            walk(symbol.childNodes[0]);
            walk(symbol.childNodes[1]);
            return null;
          } else {
            for (var i = 0; i < symbol.childNodes.length; i++) {
              walk(symbol.childNodes[i]);}
          }
        }


        function createPath(path) {
          var curr = context;
          for (var i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]])
            curr[path[i]] = Object.create(null);
            curr = curr[path[i]];
          }
          me.paths.push(path);
          pathIndex[path.join('.')] = false;
        }
      }

      function visit(tree) {
        var childNodes = tree.childNodes.slice().reverse();
        var children = childNodes.filter(function (e) {return (
            !e.token || !e.token.Punctuator);});
        if (tree.name === 'UnaryExpression') {
          // negative number support
          if (childNodes.length === 2 && childNodes[0].name === '-' && children.length === 1) {
            var res = visit(children[0]);
            res.value = -res.value;
            return res;
          }
        }

        if (tree.name === 'Arguments') {
          var argumentList = [];
          var listNode = children[0];
          while (listNode) {
            if (listNode.childNodes.length === 3) {
              argumentList.unshift(listNode.childNodes[0]);
              listNode = listNode.childNodes[2];
            }
            if (listNode.childNodes.length === 1) {
              argumentList.unshift(listNode.childNodes[0]);
              listNode = null;
            }
          }
          return {
            type: 'Arguments',
            children: argumentList.map(function (e) {return visit(e);}) };

        }


        if (children && children.length === 1) {
          var res = visit(children[0]);
          return res;
        }

        if (tree.token && ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'Identifier'].some(function (e) {return tree.token[e];})) {
          var type = Object.keys(tree.token).filter(function (e) {return e.match(/Literal/) || e.match(/Identifier/);})[0];
          var value = {
            'NullLiteral': null,
            'BooleanLiteral': Boolean(tree.token),
            'NumericLiteral': Number(tree.token),
            'StringLiteral': tree.token,
            'Identifier': tree.token }[
          type];

          return {
            type: type,
            value: value };

        }

        if (tree.name === 'CallExpression')
        return {
          type: 'CallExpression',
          children: [visit(childNodes[0]), visit(childNodes[1])] };


        return {
          type: childNodes.filter(function (e) {return e.token && e.token.Punctuator;})[0].name,
          children: childNodes.filter(function (e) {return !e.token || !e.token.Punctuator;}).map(function (e) {return visit(e);}) };

      }

      function parse(originExp) {
        var exp = new JavaScriptExpression(originExp);
        return JSON.stringify(visit(exp.tree), null);
      }

      module.exports = {
        parse: parse };


      /***/}]));
});;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\index.js":
/*!************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "BindEnv", { enumerable: true, get: function get() {return _bindEnv.default;} });Object.defineProperty(exports, "Utils", { enumerable: true, get: function get() {return _utils.default;} });Object.defineProperty(exports, "WxcButton", { enumerable: true, get: function get() {return _wxcButton.default;} });Object.defineProperty(exports, "WxcCell", { enumerable: true, get: function get() {return _wxcCell.default;} });Object.defineProperty(exports, "WxcCheckbox", { enumerable: true, get: function get() {return _wxcCheckbox.default;} });Object.defineProperty(exports, "WxcCheckboxList", { enumerable: true, get: function get() {return _wxcCheckboxList.default;} });Object.defineProperty(exports, "WxcCity", { enumerable: true, get: function get() {return _wxcCity.default;} });Object.defineProperty(exports, "WxcCountdown", { enumerable: true, get: function get() {return _wxcCountdown.default;} });Object.defineProperty(exports, "WxcDialog", { enumerable: true, get: function get() {return _wxcDialog.default;} });Object.defineProperty(exports, "WxcEpSlider", { enumerable: true, get: function get() {return _wxcEpSlider.default;} });Object.defineProperty(exports, "WxcFullPage", { enumerable: true, get: function get() {return _wxcFullPage.default;} });Object.defineProperty(exports, "WxcGridSelect", { enumerable: true, get: function get() {return _wxcGridSelect.default;} });Object.defineProperty(exports, "WxcIcon", { enumerable: true, get: function get() {return _wxcIcon.default;} });Object.defineProperty(exports, "WxcIndexlist", { enumerable: true, get: function get() {return _wxcIndexlist.default;} });Object.defineProperty(exports, "WxcLightbox", { enumerable: true, get: function get() {return _wxcLightbox.default;} });Object.defineProperty(exports, "WxcLoading", { enumerable: true, get: function get() {return _wxcLoading.default;} });Object.defineProperty(exports, "WxcLotteryRain", { enumerable: true, get: function get() {return _wxcLotteryRain.default;} });Object.defineProperty(exports, "WxcMask", { enumerable: true, get: function get() {return _wxcMask.default;} });Object.defineProperty(exports, "WxcMinibar", { enumerable: true, get: function get() {return _wxcMinibar.default;} });Object.defineProperty(exports, "WxcNoticebar", { enumerable: true, get: function get() {return _wxcNoticebar.default;} });Object.defineProperty(exports, "WxcOverlay", { enumerable: true, get: function get() {return _wxcOverlay.default;} });Object.defineProperty(exports, "WxcPageCalendar", { enumerable: true, get: function get() {return _wxcPageCalendar.default;} });Object.defineProperty(exports, "WxcPanItem", { enumerable: true, get: function get() {return _wxcPanItem.default;} });Object.defineProperty(exports, "WxcPartLoading", { enumerable: true, get: function get() {return _wxcPartLoading.default;} });Object.defineProperty(exports, "WxcPopover", { enumerable: true, get: function get() {return _wxcPopover.default;} });Object.defineProperty(exports, "WxcPopup", { enumerable: true, get: function get() {return _wxcPopup.default;} });Object.defineProperty(exports, "WxcProgress", { enumerable: true, get: function get() {return _wxcProgress.default;} });Object.defineProperty(exports, "WxcRadio", { enumerable: true, get: function get() {return _wxcRadio.default;} });Object.defineProperty(exports, "WxcRefresher", { enumerable: true, get: function get() {return _wxcRefresher.default;} });Object.defineProperty(exports, "WxcResult", { enumerable: true, get: function get() {return _wxcResult.default;} });Object.defineProperty(exports, "WxcRichText", { enumerable: true, get: function get() {return _wxcRichText.default;} });Object.defineProperty(exports, "WxcSearchbar", { enumerable: true, get: function get() {return _wxcSearchbar.default;} });Object.defineProperty(exports, "WxcSimpleFlow", { enumerable: true, get: function get() {return _wxcSimpleFlow.default;} });Object.defineProperty(exports, "WxcSlideNav", { enumerable: true, get: function get() {return _wxcSlideNav.default;} });Object.defineProperty(exports, "WxcSliderBar", { enumerable: true, get: function get() {return _wxcSliderBar.default;} });Object.defineProperty(exports, "WxcSpecialRichText", { enumerable: true, get: function get() {return _wxcSpecialRichText.default;} });Object.defineProperty(exports, "WxcStepper", { enumerable: true, get: function get() {return _wxcStepper.default;} });Object.defineProperty(exports, "WxcSwipeAction", { enumerable: true, get: function get() {return _wxcSwipeAction.default;} });Object.defineProperty(exports, "WxcTabBar", { enumerable: true, get: function get() {return _wxcTabBar.default;} });Object.defineProperty(exports, "WxcTabPage", { enumerable: true, get: function get() {return _wxcTabPage.default;} });Object.defineProperty(exports, "WxcTag", { enumerable: true, get: function get() {return _wxcTag.default;} });




var _bindEnv = _interopRequireDefault(__webpack_require__(/*! ./packages/bind-env */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\bind-env\\index.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ./packages/utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));
var _wxcButton = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-button */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\index.js"));
var _wxcCell = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-cell */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.js"));
var _wxcCheckbox = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-checkbox */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.js"));
var _wxcCheckboxList = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-checkbox-list */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox-list\\index.js"));
var _wxcCity = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-city */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\index.js"));
var _wxcCountdown = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-countdown */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-countdown\\index.js"));
var _wxcDialog = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-dialog */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.js"));
var _wxcEpSlider = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-ep-slider */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.js"));
var _wxcFullPage = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-full-page */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-full-page\\index.js"));
var _wxcGridSelect = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-grid-select */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.js"));
var _wxcIcon = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-icon */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\index.js"));
var _wxcIndexlist = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-indexlist */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.js"));
var _wxcLightbox = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-lightbox */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lightbox\\index.js"));
var _wxcLoading = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-loading */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\index.js"));
var _wxcLotteryRain = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-lottery-rain */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\index.js"));
var _wxcMask = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-mask */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-mask\\index.js"));
var _wxcMinibar = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-minibar */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.js"));
var _wxcNoticebar = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-noticebar */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\index.js"));
var _wxcOverlay = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-overlay */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.js"));
var _wxcPageCalendar = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-page-calendar */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.js"));
var _wxcPanItem = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-pan-item */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-pan-item\\index.js"));
var _wxcPartLoading = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-part-loading */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-part-loading\\index.js"));
var _wxcPopover = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-popover */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popover\\index.js"));
var _wxcPopup = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-popup */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popup\\index.js"));
var _wxcProgress = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-progress */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-progress\\index.js"));
var _wxcRadio = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-radio */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\index.js"));
var _wxcRefresher = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-refresher */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-refresher\\index.js"));
var _wxcResult = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-result */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\index.js"));
var _wxcRichText = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-rich-text */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.js"));
var _wxcSearchbar = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-searchbar */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.js"));
var _wxcSimpleFlow = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-simple-flow */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-simple-flow\\index.js"));
var _wxcSlideNav = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-slide-nav */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slide-nav\\index.js"));
var _wxcSliderBar = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-slider-bar */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slider-bar\\index.js"));
var _wxcSpecialRichText = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-special-rich-text */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.js"));
var _wxcStepper = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-stepper */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-stepper\\index.js"));
var _wxcSwipeAction = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-swipe-action */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-swipe-action\\index.js"));
var _wxcTabBar = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-tab-bar */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-bar\\index.js"));
var _wxcTabPage = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-tab-page */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.js"));
var _wxcTag = _interopRequireDefault(__webpack_require__(/*! ./packages/wxc-tag */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tag\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\bind-env\\index.js":
/*!******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/bind-env/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _bindEnv.default;} });

var _bindEnv = _interopRequireDefault(__webpack_require__(/*! ../utils/bind-env */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\bind-env.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\bind-env.js":
/*!******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/utils/bind-env.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



var _indexWeex = _interopRequireDefault(__webpack_require__(/*! weex-bindingx/lib/index.weex.js */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-bindingx\\lib\\index.weex.js"));
var _index = _interopRequireDefault(__webpack_require__(/*! ./index */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                       * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                       * Created by Tw93 on 18/03/22
                                                                                                                                                       */var BindEnv = { supportsEB: function supportsEB() {
    return _indexWeex.default.isSupportBinding && !_index.default.env.isWeb();
  },

  /**
      * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
      * @returns {boolean}
      */
  supportsEBForAndroid: function supportsEBForAndroid() {
    return _index.default.env.isAndroid() && BindEnv.supportsEB();
  },

  /**
      * 判断IOS容器是否支持是否支持expressionBinding
      * @returns {boolean}
      */
  supportsEBForIos: function supportsEBForIos() {
    return _index.default.env.isIOS() && BindEnv.supportsEB();
  } };var _default =


BindEnv;exports.default = _default;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js":
/*!***************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/utils/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




var _urlParse = _interopRequireDefault(__webpack_require__(/*! url-parse */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\url-parse\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var Utils = {
  UrlParser: _urlParse.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {sources[_key - 1] = arguments[_key];}
    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({},
            key, {}));

          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {var

      bundleUrl =
      weex.config.bundleUrl;
      return "http".concat(/^https:/.test(bundleUrl) ? 's' : '', ":").concat(url);
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString() },
    callback);
  },
  env: {
    isTaobao: function isTaobao() {var
      appName = weex.config.env.appName;
      return /(tb|taobao|淘宝)/i.test(appName);
    },
    isTrip: function isTrip() {var
      appName = weex.config.env.appName;
      return appName === 'LX';
    },
    isBoat: function isBoat() {var
      appName = weex.config.env.appName;
      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {var
      platform = weex.config.env.platform;
      return typeof window === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {var
      platform = weex.config.env.platform;
      return platform.toLowerCase() === 'ios';
    },
    /**
        * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
        * @returns {boolean}
        */
    isIPhoneX: function isIPhoneX() {var
      deviceHeight = weex.config.env.deviceHeight;
      if (Utils.env.isWeb()) {
        return typeof window !== undefined && window.screen && window.screen.width && window.screen.height && (
        parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812 ||
        parseInt(window.screen.width, 10) === 414 && parseInt(window.screen.height, 10) === 896);
      }
      return Utils.env.isIOS() && (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight === 1792 || deviceHeight === 1624);
    },
    isAndroid: function isAndroid() {var
      platform = weex.config.env.platform;
      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {var
      appName = weex.config.env.appName;
      return appName === 'AP';
    },
    isTmall: function isTmall() {var
      appName = weex.config.env.appName;
      return /(tm|tmall|天猫)/i.test(appName);
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },
    /**
        * 获取weex屏幕真实的设置高度，需要减去导航栏高度
        * @returns {Number}
        */
    getPageHeight: function getPageHeight() {var
      env = weex.config.env;
      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },
    /**
        * 获取weex屏幕真实的设置高度
        * @returns {Number}
        */
    getScreenHeight: function getScreenHeight() {var
      env = weex.config.env;
      return env.deviceHeight / env.deviceWidth * 750;
    } },


  /**
          * 版本号比较
          * @memberOf Utils
          * @param currVer {string}
          * @param promoteVer {string}
          * @returns {boolean}
          * @example
          *
          * const { Utils } = require('@ali/wx-bridge');
          * const { compareVersion } = Utils;
          * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
          */
  compareVersion: function compareVersion() {var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';
    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },
  /**
      * 分割数组
      * @param arr 被分割数组
      * @param size 分割数组的长度
      * @returns {Array}
      */
  arrayChunk: function arrayChunk() {var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },
  /*
      * 截断字符串
      * @param str 传入字符串
      * @param len 截断长度
      * @param hasDot 末尾是否...
      * @returns {String}
      */
  truncateString: function truncateString(str, len) {var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },
  /*
      * 转换 obj 为 url params参数
      * @param obj 传入字符串
      * @returns {String}
      */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },
  /*
      * 转换 url params参数为obj
      * @param str 传入url参数字符串
      * @returns {Object}
      */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e, " at node_modules\\weex-ui\\packages\\utils\\index.js:250");
    }
    return obj;
  },
  animation: {
    /**
                * 返回定义页面转场动画起初的位置
                * @param ref
                * @param transform 运动类型
                * @param status
                * @param callback 回调函数
                */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform },

        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    } },

  uiStyle: {
    /**
              * 返回定义页面转场动画起初的位置
              * @param animationType 页面转场动画的类型 push，model
              * @param size 分割数组的长度
              * @returns {}
              */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px' };

      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px' };

      }
      return {};
    } } };var _default =



Utils;exports.default = _default;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\index.js":
/*!********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-button/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue":
/*!*********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-button/index.vue ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-16c3fbb1!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-16c3fbb1!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-16c3fbb1!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-16c3fbb1!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-16c3fbb1"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-button\\type.js":
/*!*******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-button/type.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.TEXT_FONTSIZE_STYLE_MAP = exports.BUTTON_STYLE_MAP = exports.TEXT_STYLE_MAP = exports.STYLE_MAP = void 0;var STYLE_MAP = {
  red: {
    backgroundColor: '#FF5000' },

  yellow: {
    backgroundColor: '#FFC900' },

  white: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A5A5A5',
    borderWidth: '1px' },

  blue: {
    backgroundColor: '#0F8DE8' },

  green: {
    backgroundColor: '#19be6b' } };exports.STYLE_MAP = STYLE_MAP;



var TEXT_STYLE_MAP = {
  red: {
    color: '#FFFFFF' },

  yellow: {
    color: '#FFFFFF' },

  blue: {
    color: '#FFFFFF' },

  white: {
    color: '#3D3D3D' },

  green: {
    color: '#FFFFFF' } };exports.TEXT_STYLE_MAP = TEXT_STYLE_MAP;



var BUTTON_STYLE_MAP = {
  full: {
    width: '702px',
    height: '88px' },

  big: {
    width: '339px',
    height: '70px' },

  medium: {
    width: '218px',
    height: '60px' },

  small: {
    width: '157px',
    height: '44px' } };exports.BUTTON_STYLE_MAP = BUTTON_STYLE_MAP;



var TEXT_FONTSIZE_STYLE_MAP = {
  full: {
    fontSize: '36px' },

  big: {
    fontSize: '32px' },

  medium: {
    fontSize: '28px' },

  small: {
    fontSize: '24px' } };exports.TEXT_FONTSIZE_STYLE_MAP = TEXT_FONTSIZE_STYLE_MAP;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.js":
/*!******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-cell/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue":
/*!*******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-cell/index.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-7c9b0a21!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-7c9b0a21!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-7c9b0a21!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-7c9b0a21!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7c9b0a21"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox-list\\index.js":
/*!***************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-checkbox-list/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox-list\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox-list\\index.vue":
/*!****************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-checkbox-list/index.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox-list\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-4f186536!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-4f186536!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox-list\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox-list\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.js":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-checkbox/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.vue":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-checkbox/index.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-237296c2!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-237296c2!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-237296c2!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-237296c2!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-237296c2"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-checkbox\\type.js":
/*!*********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-checkbox/type.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.UNCHECKED_DISABLED = exports.CHECKED_DISABLED = exports.UNCHECKED = exports.CHECKED = void 0; /**
                                                                                                                                                                                  * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                  * Created by Tw93 on 2017/10/21.
                                                                                                                                                                                  */

var CHECKED = 'https://gw.alicdn.com/tfs/TB14fp2pwMPMeJjy1XbXXcwxVXa-72-72.png';exports.CHECKED = CHECKED;
var UNCHECKED = 'https://gw.alicdn.com/tfs/TB1U6SbpwMPMeJjy1XcXXXpppXa-72-72.png';exports.UNCHECKED = UNCHECKED;
var CHECKED_DISABLED = 'https://gw.alicdn.com/tfs/TB1aPabpwMPMeJjy1XcXXXpppXa-72-72.png';exports.CHECKED_DISABLED = CHECKED_DISABLED;
var UNCHECKED_DISABLED = 'https://gw.alicdn.com/tfs/TB1lTuzpwoQMeJjy0FoXXcShVXa-72-72.png';exports.UNCHECKED_DISABLED = UNCHECKED_DISABLED;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\default-data.js":
/*!*************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-city/default-data.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Created by dianwoda on 2018/1/31.
                                                                                                      */var _default =
{
  hotCity: [
  { cityName: '北京', pinYin: 'beijing', py: 'bj' },
  { cityName: '上海', pinYin: 'shanghai', py: 'sh' },
  { cityName: '天津', pinYin: 'tianjin', py: 'tj' },
  { cityName: '青岛', pinYin: 'qingdao', py: 'qd' },
  { cityName: '南京', pinYin: 'nanjing', py: 'nj' },
  { cityName: '杭州', pinYin: 'hangzhou', py: 'hz' },
  { cityName: '厦门', pinYin: 'xiamen', py: 'xm' },
  { cityName: '成都', pinYin: 'chengdu', py: 'cd' },
  { cityName: '深圳', pinYin: 'shenzhen', py: 'sz' },
  { cityName: '广州', pinYin: 'guangzhou', py: 'gz' },
  { cityName: '沈阳', pinYin: 'shenyang', py: 'sy' },
  { cityName: '武汉', pinYin: 'wuhan', py: 'wh' }],

  cities: [
  { cityName: '北京', pinYin: 'beijing', py: 'bj' },
  { cityName: '包头', pinYin: 'baotou', py: 'bt' },
  { cityName: '北海', pinYin: 'beihai', py: 'bh' },
  { cityName: '宝鸡', pinYin: 'baoji', py: 'bj' },
  { cityName: '成都', pinYin: 'chengdu', py: 'cd' },
  { cityName: '重庆', pinYin: 'chongqing', py: 'cq' },
  { cityName: '长沙', pinYin: 'changsha', py: 'cs' },
  { cityName: '长春', pinYin: 'changchun', py: 'cc' },
  { cityName: '常州', pinYin: 'changzhou', py: 'cz' },
  { cityName: '常德', pinYin: 'changde', py: 'cd' },
  { cityName: '沧州', pinYin: 'cangzhou', py: 'cz' },
  { cityName: '承德', pinYin: 'chengde', py: 'cd' },
  { cityName: '长治', pinYin: 'changzhi', py: 'cz' },
  { cityName: '滁州', pinYin: 'chuzhou', py: 'cz' },
  { cityName: '大连', pinYin: 'dalian', py: 'dl' },
  { cityName: '东莞', pinYin: 'dongguan', py: 'dg' },
  { cityName: '大同', pinYin: 'datong', py: 'dt' },
  { cityName: '达州', pinYin: 'dazhou', py: 'dz' },
  { cityName: '鄂尔多斯', pinYin: 'eerduosi', py: 'eeds' },
  { cityName: '恩施', pinYin: 'enshi', py: 'es' },
  { cityName: '福州', pinYin: 'fuzhou', py: 'fz' },
  { cityName: '佛山', pinYin: 'foshan', py: 'fs' },
  { cityName: '抚顺', pinYin: 'fushun', py: 'fs' },
  { cityName: '抚州', pinYin: 'fuzhou', py: 'fz' },
  { cityName: '防城港', pinYin: 'fangchenggang', py: 'fcg' },
  { cityName: '广州', pinYin: 'guangzhou', py: 'gz' },
  { cityName: '贵阳', pinYin: 'guiyang', py: 'gy' },
  { cityName: '桂林', pinYin: 'guilin', py: 'gl' },
  { cityName: '广元', pinYin: 'guangyuan', py: 'gy' },
  { cityName: '广安', pinYin: 'guangan', py: 'ga' },
  { cityName: '杭州', pinYin: 'hangzhou', py: 'hz' },
  { cityName: '哈尔滨', pinYin: 'haerbin', py: 'heb' },
  { cityName: '合肥', pinYin: 'hefei', py: 'hf' },
  { cityName: '呼和浩特', pinYin: 'huhehaote', py: 'hhht' },
  { cityName: '海口', pinYin: 'haikou', py: 'hk' },
  { cityName: '黄山', pinYin: 'huangshan', py: 'hs' },
  { cityName: '呼伦贝尔', pinYin: 'hulunbeier', py: 'hlbe' },
  { cityName: '邯郸', pinYin: 'handan', py: 'hd' },
  { cityName: '衡阳', pinYin: 'hengyang', py: 'hy' },
  { cityName: '汉中', pinYin: 'hanzhong', py: 'hz' },
  { cityName: '济南', pinYin: 'jinan', py: 'jn' },
  { cityName: '济宁', pinYin: 'jining', py: 'jn' },
  { cityName: '九江', pinYin: 'jiujiang', py: 'jj' },
  { cityName: '景德镇', pinYin: 'jingdezhen', py: 'jdz' },
  { cityName: '吉林', pinYin: 'jilin', py: 'jl' },
  { cityName: '江门', pinYin: 'jiangmen', py: 'jm' },
  { cityName: '晋城', pinYin: 'jincheng', py: 'jc' },
  { cityName: '嘉峪关', pinYin: 'jiayuguan', py: 'jyg' },
  { cityName: '酒泉', pinYin: 'jiuquan', py: 'jq' },
  { cityName: '昆明', pinYin: 'kunming', py: 'km' },
  { cityName: '克拉玛依', pinYin: 'kelamayi', py: 'klmy' },
  { cityName: '兰州', pinYin: 'lanzhou', py: 'lz' },
  { cityName: '丽江', pinYin: 'lijiang', py: 'lj' },
  { cityName: '洛阳', pinYin: 'luoyang', py: 'ly' },
  { cityName: '柳州', pinYin: 'liuzhou', py: 'lz' },
  { cityName: '泸州', pinYin: 'luzhou', py: 'lz' },
  { cityName: '拉萨', pinYin: 'lasa', py: 'ls' },
  { cityName: '临汾', pinYin: 'linfen', py: 'lf' },
  { cityName: '乐山', pinYin: 'leshan', py: 'ls' },
  { cityName: '聊城', pinYin: 'liaocheng', py: 'lc' },
  { cityName: '丽水', pinYin: 'lishui', py: 'ls' },
  { cityName: '绵阳', pinYin: 'mianyang', py: 'my' },
  { cityName: '梅州', pinYin: 'meizhou', py: 'mz' },
  { cityName: '眉山', pinYin: 'meishan', py: 'ms' },
  { cityName: '南昌', pinYin: 'nanchang', py: 'nc' },
  { cityName: '南京', pinYin: 'nanjing', py: 'nj' },
  { cityName: '南宁', pinYin: 'nanning', py: 'nn' },
  { cityName: '宁波', pinYin: 'ningbo', py: 'nb' },
  { cityName: '南通', pinYin: 'nantong', py: 'nt' },
  { cityName: '南充', pinYin: 'nanchong', py: 'nc' },
  { cityName: '内江', pinYin: 'neijiang', py: 'nj' },
  { cityName: '萍乡', pinYin: 'pingxiang', py: 'px' },
  { cityName: '攀枝花', pinYin: 'panzhihua', py: 'pzh' },
  { cityName: '青岛', pinYin: 'qingdao', py: 'qd' },
  { cityName: '泉州', pinYin: 'quanzhou', py: 'qz' },
  { cityName: '上海', pinYin: 'shanghai', py: 'sh' },
  { cityName: '深圳', pinYin: 'shenzhen', py: 'sz' },
  { cityName: '沈阳', pinYin: 'shenyang', py: 'sy' },
  { cityName: '石家庄', pinYin: 'shijiazhuang', py: 'sjz' },
  { cityName: '苏州', pinYin: 'suzhou', py: 'sz' },
  { cityName: '三亚', pinYin: 'sanya', py: 'sy' },
  { cityName: '汕头', pinYin: 'shantou', py: 'st' },
  { cityName: '上饶', pinYin: 'shangrao', py: 'sr' },
  { cityName: '遂宁', pinYin: 'suining', py: 'sn' },
  { cityName: '宿迁', pinYin: 'suqian', py: 'sq' },
  { cityName: '天津', pinYin: 'tianjin', py: 'tj' },
  { cityName: '太原', pinYin: 'taiyuan', py: 'ty' },
  { cityName: '台州', pinYin: 'taizhou', py: 'tz' },
  { cityName: '唐山', pinYin: 'tangshan', py: 'ts' },
  { cityName: '铁岭', pinYin: 'tieling', py: 'tl' },
  { cityName: '武汉', pinYin: 'wuhan', py: 'wh' },
  { cityName: '无锡', pinYin: 'wuxi', py: 'wx' },
  { cityName: '温州', pinYin: 'wenzhou', py: 'wz' },
  { cityName: '乌鲁木齐', pinYin: 'wulumuqi', py: 'wlmq' },
  { cityName: '威海', pinYin: 'weihai', py: 'wh' },
  { cityName: '渭南', pinYin: 'weinan', py: 'wn' },
  { cityName: '西安', pinYin: 'xian', py: 'xa' },
  { cityName: '厦门', pinYin: 'xiamen', py: 'xm' },
  { cityName: '香港', pinYin: 'xianggang', py: 'xg' },
  { cityName: '徐州', pinYin: 'xuzhou', py: 'xz' },
  { cityName: '西宁', pinYin: 'xining', py: 'xn' },
  { cityName: '襄阳', pinYin: 'xiangyang', py: 'xy' },
  { cityName: '新余', pinYin: 'xinyu', py: 'xy' },
  { cityName: '许昌', pinYin: 'xuchang', py: 'xc' },
  { cityName: '信阳', pinYin: 'xinyang', py: 'xy' },
  { cityName: '银川', pinYin: 'yinchuan', py: 'yc' },
  { cityName: '宜昌', pinYin: 'yichang', py: 'yc' },
  { cityName: '烟台', pinYin: 'yantai', py: 'yt' },
  { cityName: '扬州', pinYin: 'yangzhou', py: 'yz' },
  { cityName: '宜宾', pinYin: 'yibin', py: 'yb' },
  { cityName: '运城', pinYin: 'yuncheng', py: 'yc' },
  { cityName: '榆林', pinYin: 'yulin', py: 'yl' },
  { cityName: '盐城', pinYin: 'yancheng', py: 'yc' },
  { cityName: '岳阳', pinYin: 'yueyang', py: 'yy' },
  { cityName: '延安', pinYin: 'yanan', py: 'ya' },
  { cityName: '鹰潭', pinYin: 'yingtan', py: 'yt' },
  { cityName: '永州', pinYin: 'yongzhou', py: 'yz' },
  { cityName: '郑州', pinYin: 'zhengzhou', py: 'zz' },
  { cityName: '珠海', pinYin: 'zhuhai', py: 'zh' },
  { cityName: '张家界', pinYin: 'zhangjiajie', py: 'zzj' },
  { cityName: '中山', pinYin: 'zhongshan', py: 'zs' },
  { cityName: '遵义', pinYin: 'zunyi', py: 'zy' },
  { cityName: '湛江', pinYin: 'zhanjiang', py: 'zj' },
  { cityName: '株洲', pinYin: 'zhuzhou', py: 'zz' },
  { cityName: '肇庆', pinYin: 'zhaoqing', py: 'zq' },
  { cityName: '枣庄', pinYin: 'zaozhuang', py: 'zz' },
  { cityName: '舟山', pinYin: 'zhoushan', py: 'zs' },
  { cityName: '自贡', pinYin: 'zigong', py: 'zg' },
  { cityName: '资阳', pinYin: 'ziyang', py: 'zy' },
  { cityName: '张掖', pinYin: 'zhangye', py: 'zy' }] };exports.default = _default;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\index.js":
/*!******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-city/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\index.vue":
/*!*******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-city/index.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-03d162ea!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-03d162ea!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-03d162ea!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-03d162ea!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-03d162ea"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\tab.vue":
/*!*****************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-city/tab.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-9721ffa6!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./tab.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-9721ffa6!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\tab.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./tab.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\tab.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-9721ffa6!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./tab.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-9721ffa6!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\tab.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\tab.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9721ffa6"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-city\\util.js":
/*!*****************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-city/util.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getCities = getCities;exports.query = query;var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function getCities(list) {var showDesc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (list && list.length > 0) {
    var result = list.map(function (v) {
      var o = Object.assign({}, v);

      if (o.suggestName) {
        o.name = o.suggestName;
      }

      if (o.stationName && !o.name) {
        o.name = o.stationName;
      }

      if (o.cityName && !o.name) {
        o.name = o.cityName;
      }

      if (o.code && showDesc) {
        o.desc = o.code;
      }
      return o;
    });
    return result;
  } else {
    return [];
  }
}

function query(source, text) {
  var res = [];
  res = source.filter(function (item) {
    var arr = [];
    var isHave = false;
    Object.keys(item).forEach(function (prop) {
      var itemStr = item[prop];
      _utils.default.isString(itemStr) && itemStr.split(',').forEach(function (val) {
        arr.push(val);
      });
    });
    arr.some(function (val) {
      isHave = new RegExp('^' + text).test(val);
      return isHave;
    });
    return isHave;
  });
  return res;
}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-countdown\\index.js":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-countdown/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-countdown\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-countdown\\index.vue":
/*!************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-countdown/index.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-33efb36e!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-33efb36e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-countdown\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-countdown\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-33efb36e!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-33efb36e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-countdown\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-countdown\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-33efb36e"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.js":
/*!********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-dialog/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue":
/*!*********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-dialog/index.vue ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-59cfae47!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-59cfae47!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-59cfae47!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-59cfae47!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-59cfae47"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-dialog\\type.js":
/*!*******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-dialog/type.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.UN_CHECKED = exports.CHECKED = void 0; /**
                                                                                                                           * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                           * Created by Tw93 on 2016/10/29.
                                                                                                                           */

var CHECKED = 'https://gw.alicdn.com/tfs/TB1UT3VpgMPMeJjy1XdXXasrXXa-42-42.png';exports.CHECKED = CHECKED;
var UN_CHECKED = 'https://gw.alicdn.com/tfs/TB1hE3VpgMPMeJjy1XdXXasrXXa-42-42.png';exports.UN_CHECKED = UN_CHECKED;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.js":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-ep-slider/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.vue":
/*!************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-ep-slider/index.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-6fd6bf00!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-6fd6bf00!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-6fd6bf00!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-6fd6bf00!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6fd6bf00"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-full-page\\index.js":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-full-page/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _fullPage.default;} });

var _fullPage = _interopRequireDefault(__webpack_require__(/*! ../wxc-tab-page/full-page.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\full-page.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.js":
/*!*************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-grid-select/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.vue":
/*!**************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-grid-select/index.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-03c50060!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-03c50060!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-03c50060!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-03c50060!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-03c50060"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\option.vue":
/*!***************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-grid-select/option.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-c65c4d52!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./option.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-c65c4d52!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\option.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./option.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\option.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-c65c4d52!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./option.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-c65c4d52!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\option.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-grid-select\\option.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c65c4d52"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\index.js":
/*!******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-icon/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\index.vue":
/*!*******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-icon/index.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-2ba60c78!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-2ba60c78!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-2ba60c78!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-2ba60c78!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2ba60c78"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-icon\\type.js":
/*!*****************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-icon/type.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  less: "\uE6A5",
  'more_unfold': "\uE6A6",
  back: "\uE697",
  more: "\uE6A7",
  add: "\uE6B9",
  subtract: "\uE6FE",
  close: "\uE69A",
  cry: "\uE69C",
  delete: "\uE69D",
  help: "\uE6A3",
  refresh: "\uE6AA",
  search: "\uE6AC",
  success: "\uE6B1",
  warning: "\uE6B6",
  wrong: "\uE6B7",
  clock: "\uE6BB",
  scanning: "\uE6EC",
  filter: "\uE6F1",
  map: "\uE715",
  play: "\uE719" };exports.default = _default;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\format.js":
/*!************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-indexlist/format.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.totalList = totalList;exports.getSpecialData = getSpecialData;




var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                        * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                        * Created by Tw93 on 17/11/01
                                                                                                                                                        */ /**
                                                                                                                                                            * 根据26个字母取每一项首字母对数据进行排序,处理数据变换
                                                                                                                                                            * @return {[array]}
                                                                                                                                                            */function totalList(source, hotListConfig, cityLocationConfig) {
  var LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var res = [];
  LETTERS.split('').forEach(function (letter) {
    var _data = source.filter(function (item) {
      if (item.pinYin) {
        return item.pinYin.slice(0, 1).toLowerCase() === letter.toLowerCase();
      } else if (item.py) {
        return item.py.slice(0, 1).toLowerCase() === letter.toLowerCase();
      } else {
        return false;
      }
    });
    if (_data.length) {
      res.push({
        title: letter,
        data: _data,
        type: 'list' });

    }
  });

  // 处理热门数据
  var hotList = getSpecialData(hotListConfig);
  hotList && res.unshift(hotList);

  // 处理特殊定位数据
  var cityLocation = getSpecialData(cityLocationConfig);
  cityLocation && res.unshift(cityLocation);

  return res;
}

function getSpecialData(data) {
  if (data && data.type && data.list && data.list.length > 0) {var
    type = data.type,title = data.title,list = data.list;
    return {
      title: title,
      type: type,
      data: type === 'group' ? _utils.default.arrayChunk(list) : list };

  } else {
    return null;
  }
}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.js":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-indexlist/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.vue":
/*!************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-indexlist/index.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-35d2faed!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-35d2faed!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-35d2faed!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-35d2faed!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-35d2faed"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lightbox\\index.js":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lightbox/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lightbox\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lightbox\\index.vue":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lightbox/index.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-5b136518!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-5b136518!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lightbox\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lightbox\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-5b136518!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-5b136518!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lightbox\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lightbox\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5b136518"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\index.js":
/*!*********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-loading/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\index.vue":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-loading/index.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-14e99c79!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-14e99c79!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-14e99c79!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-14e99c79!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-14e99c79"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-loading\\type.js":
/*!********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-loading/type.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.PART = exports.BLACK_GIF = exports.GIF = void 0; /**
                                                                                                                                     * Created by Tw93 on 2016/10/29.
                                                                                                                                     */

var GIF = 'https://img.alicdn.com/tfs/TB1aks3PpXXXXcXXFXXXXXXXXXX-150-150.gif';exports.GIF = GIF;
var BLACK_GIF = 'https://img.alicdn.com/tfs/TB1Ep_9NVXXXXb8XVXXXXXXXXXX-74-74.gif';exports.BLACK_GIF = BLACK_GIF;
var PART = 'https://gtms02.alicdn.com/tfs/TB1y4QbSXXXXXbgapXXXXXXXXXX-50-50.gif';exports.PART = PART;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\index.js":
/*!**************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lottery-rain/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\index.vue":
/*!***************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lottery-rain/index.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-1ef72fd7!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-1ef72fd7!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-1ef72fd7!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-1ef72fd7!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1ef72fd7"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\libs\\animate.js":
/*!*********************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lottery-rain/libs/animate.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.showPig = showPig;exports.hidePig = hidePig;exports.shakePig = shakePig;






var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                           * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                           * Created by Tw93 on 2017/09/06.
                                                                                                                                                           * 红包雨动画类
                                                                                                                                                           */var animation = weex.requireModule('animation');var isIos = _utils.default.env.isIOS();function showPig(ref, duration, callback) {
  ref && animation.transition(ref, {
    styles: {
      transform: 'translate(0, -140px)',
      opacity: 1 },

    duration: duration,
    timingFunction: 'ease-in' },
  function () {
    callback && callback();
  });
}

function hidePig(ref, duration, callback) {
  ref && animation.transition(ref, {
    styles: {
      transform: 'translate(0, 0)',
      opacity: 0 },

    duration: duration,
    timingFunction: 'ease-out' },
  function () {
    callback && callback();
  });
}

function shakePig(ref, callback) {
  var duration = isIos ? 20 : 10;
  ref && animation.transition(ref, {
    styles: {
      transform: 'rotate(12deg) translate(0, -140px)' },

    duration: duration,
    timingFunction: 'ease-in' },
  function () {
    animation.transition(ref, {
      styles: {
        transform: 'rotate(0) translate(0, -140px)' },

      duration: duration,
      timingFunction: 'ease-out' },
    function () {
      animation.transition(ref, {
        styles: {
          transform: 'rotate(-12deg) translate(0, -140px)' },

        duration: duration,
        timingFunction: 'ease-in' },
      function () {
        animation.transition(ref, {
          styles: {
            transform: 'rotate(0) translate(0, -140px)' },

          duration: duration,
          timingFunction: 'ease-out' },
        function () {
          callback && callback();
        });
      });
    });
  });
}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\libs\\config.js":
/*!********************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lottery-rain/libs/config.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.DEFAULT = void 0;var DEFAULT = {
  intervalTime: 400,
  hideAniTime: 300,
  showAniTime: 300,
  showTime: 400,
  randomTime: 300,
  width: 241,
  height: 206 };exports.DEFAULT = DEFAULT;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\libs\\region.js":
/*!********************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lottery-rain/libs/region.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\utils\\index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                           * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                           * Created by Tw93 on 2017/09/06.
                                                                                                                                                           * 红包雨区域检测类
                                                                                                                                                           */var Region = { regions: [], isCross: function isCross(region) {var
    regions = this.regions;

    region.right = region.left + region.width;
    region.bottom = region.top + region.height;

    for (var i = 0; i < regions.length; i++) {
      var curRegion = regions[i];
      // 两区域相交
      curRegion.right = curRegion.left + curRegion.width;
      curRegion.bottom = curRegion.top + curRegion.height;
      if (!(region.left > curRegion.right || region.right < curRegion.left || region.bottom < curRegion.top || region.top > curRegion.bottom)) {
        return true;
      }
    }
    return false;
  },
  get: function get(width, height) {
    if (!width || !height) {
      return;
    }
    var i = 1000;
    var viewWidth = 750;
    var viewHeight = _utils.default.env.getPageHeight();
    var wrapWidth = viewWidth - width;
    var wrapHeight = viewHeight - height - 140;
    wrapHeight = wrapHeight < 0 ? 0 : wrapHeight;
    wrapWidth = wrapWidth < 0 ? 0 : wrapWidth;

    var region = {
      left: '-9999px',
      top: '-9999px',
      width: width + 'px',
      height: height + 'px' };

    while (i--) {
      region.left = Math.round(Math.random() * wrapWidth) + 'px';
      region.top = Math.round(Math.random() * wrapHeight + height) + 'px';
      if (!this.isCross(region)) {
        this.add(region);
        return region;
      }
    }
  },
  buildRandom: function buildRandom() {
    return new Date().getTime() + '_' + parseInt(Math.random() * 1000000);
  },
  add: function add(region) {var
    regions = this.regions;
    region.id = this.buildRandom();
    regions.push(region);
  },
  remove: function remove(region) {var
    regions = this.regions;
    if (!region) return;
    for (var i = 0; i < regions.length; i++) {
      if (region.id === regions[i].id) {
        regions.splice(i, 1);
      }
    }
  } };var _default =


Region;exports.default = _default;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\rain-item.vue":
/*!*******************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-lottery-rain/rain-item.vue ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-30f40d9e!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./rain-item.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-30f40d9e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\rain-item.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./rain-item.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\rain-item.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-30f40d9e!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./rain-item.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-30f40d9e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\rain-item.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-lottery-rain\\rain-item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-30f40d9e"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-mask\\index.js":
/*!******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-mask/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-mask\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-mask\\index.vue":
/*!*******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-mask/index.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-362fa32b!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-362fa32b!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-mask\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-mask\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-362fa32b!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-362fa32b!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-mask\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-mask\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-362fa32b"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.js":
/*!*********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-minibar/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-minibar/index.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-dc4a90ce!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-dc4a90ce!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-dc4a90ce!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-dc4a90ce!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-dc4a90ce"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\index.js":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-noticebar/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\index.vue":
/*!************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-noticebar/index.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-6c9ca210!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-6c9ca210!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-6c9ca210!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-6c9ca210!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6c9ca210"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-noticebar\\type.js":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-noticebar/type.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Created by Tw93 on 2016/10/29.
                                                                                                      */var _default =

{
  closeIcon: 'https://gw.alicdn.com/tfs/TB1THvhpwMPMeJjy1XcXXXpppXa-32-32.png',
  linkIcon: 'https://gw.alicdn.com/tfs/TB1utlZpwMPMeJjy1XdXXasrXXa-32-32.png',
  infoIcon: 'https://gw.alicdn.com/tfs/TB1xdlZpwMPMeJjy1XdXXasrXXa-32-32.png',
  warnIcon: 'https://gw.alicdn.com/tfs/TB1TCvhpwMPMeJjy1XcXXXpppXa-32-32.png',
  successIcon: 'https://gw.alicdn.com/tfs/TB12Em8pwMPMeJjy1XbXXcwxVXa-32-32.png',
  errorIcon: 'https://gw.alicdn.com/tfs/TB1UCvhpwMPMeJjy1XcXXXpppXa-32-32.png',
  questionIcon: 'https://gw.alicdn.com/tfs/TB1vJlZpwMPMeJjy1XdXXasrXXa-32-32.png',
  timeIcon: 'https://gw.alicdn.com/tfs/TB1eSzhpwMPMeJjy1XcXXXpppXa-30-30.png',
  redbag: 'https://gw.alicdn.com/tfs/TB1dCzhpwMPMeJjy1XcXXXpppXa-32-32.png' };exports.default = _default;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.js":
/*!*********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-overlay/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-overlay/index.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-59e992e6!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-59e992e6!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-59e992e6!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-59e992e6!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-59e992e6"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\format.js":
/*!****************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-page-calendar/format.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports._getTraditionalHoliday = _getTraditionalHoliday;exports._isDate = _isDate;exports._checkHash = _checkHash;exports.getTime = getTime;exports._isInRange = _isInRange;exports._isInSelectRange = _isInSelectRange;exports._fixNum = _fixNum;exports._isWeekend = _isWeekend;exports._isToday = _isToday;exports._getMonthDays = _getMonthDays;exports._getPadding = _getPadding;exports._unique = _unique;exports.getToDay = getToDay;exports.getWeekRows = getWeekRows;exports.generateDateCell = generateDateCell;exports.GLOBAL_HOLIDAY = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Tw93 on 2017/07/29.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// 国际节日
var GLOBAL_HOLIDAY = {
  '01-01': '元旦',
  '02-14': '情人',
  '05-01': '劳动',
  '06-01': '儿童',
  '10-01': '国庆',
  '12-25': '圣诞' };


// 传统节日
exports.GLOBAL_HOLIDAY = GLOBAL_HOLIDAY;var TRADITIONAL_HOLIDAY = {
  '除夕': ['2015-02-18', '2016-02-07', '2017-01-27', '2018-02-15', '2019-02-04', '2020-01-24'],
  '春节': ['2015-02-19', '2016-02-08', '2017-01-28', '2018-02-16', '2019-02-05', '2020-01-25'],
  '元宵': ['2015-03-05', '2016-02-22', '2017-02-11', '2018-03-02', '2019-02-19', '2020-02-08'],
  '清明': ['2015-04-05', '2016-04-04', '2017-04-04', '2018-04-05', '2019-04-05', '2020-04-04'],
  '端午': ['2015-06-20', '2016-06-09', '2017-05-30', '2018-06-18', '2019-06-07', '2020-06-25'],
  '中秋': ['2015-09-27', '2016-09-15', '2017-10-04', '2018-09-24', '2019-09-13', '2020-10-01'],
  '重阳': ['2015-10-21', '2016-10-09', '2017-10-28', '2018-10-17', '2019-10-07', '2020-10-25'] };


// 放假日
var REST_DAYS = ['2017-10-01', '2017-10-02', '2017-10-03', '2017-10-04', '2017-10-05', '2017-10-06', '2017-10-07', '2017-10-08'];

// 工作日
var WORK_DAYS = ['2017-09-30'];

function _getTraditionalHoliday() {
  var HOLIDAY_TEMP = {};

  var keys = Object.keys(TRADITIONAL_HOLIDAY);
  keys.forEach(function (k) {
    var arr = TRADITIONAL_HOLIDAY[k];
    arr.forEach(function (i) {
      HOLIDAY_TEMP[i] = k;
    });
  });
  return HOLIDAY_TEMP;
}

function _isDate(obj) {
  var type = obj === null ? String(obj) : {}.toString.call(obj) || 'object';
  return type === '[object date]';
}

/**
   * 检测Hash
   *
   * @method _checkHash
   * @private
   */
function _checkHash(url, hash) {
  return url && url.match(/#/) && url.replace(/^.*#/, '') === hash;
}

/**
   * 获取当前日期的毫秒数
   * @method getTime
   * @param {String} date
   * @return {Number}
   */
function getTime(date) {
  if (_isDate(date)) {
    return new Date(date).getTime();
  } else {
    try {
      return new Date(date.replace(/-/g, '/')).getTime();
    } catch (e) {
      return 0;
    }
  }
}

function _isInRange(range, date) {
  var start = getTime(range[0]);
  var end = getTime(range[1]);
  var d = getTime(date);
  return start <= d && end >= d;
}

function _isInSelectRange(range, date) {
  var start = getTime(range[0]);
  var end = getTime(range[1]);
  var d = getTime(date);
  return start < d && end > d;
}

function _fixNum(num) {
  return (num < 10 ? '0' : '') + num;
}

/**
   * 是否是周末
   * @method isWeekend
   * @param {String} date
   * @return {Boolean}
   */
function _isWeekend(date) {
  var day = new Date(date.replace(/-/g, '/')).getDay();
  return day === 0 || day === 6;
}

/**
   * 是否是今天
   * @method isToday
   * @param {String} date
   * @return {Boolean}
   */
function _isToday(today, date) {
  return getTime(today) === getTime(date);
}

/**
   * 检查是否是闰年
   * @method _checkLeapYear
   * @param {Number} y 年份
   * @param {Date} t today
   * @protected
   */
function _getMonthDays(y, t) {
  var MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var year = y || t.getFullYear();
  var isLeapYear = false;

  if (year % 100) {
    isLeapYear = !(year % 4);
  } else {
    isLeapYear = !(year % 400);
  }

  if (isLeapYear) {
    MONTH_DAYS[1] = 29;
  } else {
    MONTH_DAYS[1] = 28;
  }
  return MONTH_DAYS;
}

/**
   * 当月1号前面有多少空格
   * @method _getPadding
   * @protected
   */
function _getPadding(year, month) {
  var date = new Date(year + '/' + month + '/1');
  return date.getDay();
}

function _unique(array) {
  return Array.prototype.filter.call(array, function (item, index) {
    return array.indexOf(item) === index;
  });
}

function getToDay() {
  return new Date().getFullYear() + '-' + _fixNum(new Date().getMonth() + 1) + '-' + _fixNum(new Date().getDate());
}

function getWeekRows(y, m, today, dateRange, departDate, arriveDate, selectedNote, descList) {
  var monthDays = _getMonthDays(y, today);
  var padding = _getPadding(y, m, 7);
  var num = monthDays[m - 1] + padding;
  var rows = Math.ceil(num / 7);
  var remain = num % 7;
  var rowsData = [];

  for (var i = 1; i <= rows; i++) {
    var cells = [];

    for (var j = 1; j <= 7; j++) {
      var cell = {};
      // 前后空格
      if (i === 1 && j <= padding || remain && i === rows && j > remain) {
        cell.isEmpty = true;
      } else {(function () {
          var d = (i - 1) * 7 + j - padding;
          var date = y + '-' + _fixNum(m) + '-' + _fixNum(d);
          var cls = [];
          var ref = '';
          var cellClass = [];
          var isInRange = _isInRange(dateRange, date);
          var disabled = false;
          var global = _fixNum(m) + '-' + _fixNum(d);
          var note = '';
          var ext = '';
          var isSelected = false;

          if (descList && descList.length > 0) {
            var nowDesc = descList.filter(function (item) {return item.date === date;});
            if (nowDesc && nowDesc.length > 0) {
              ext = nowDesc[0].value;
              if (nowDesc[0].emphasize) {
                cls.push('calendar-holiday');
              }
            }
          }

          // 国际节日
          if (GLOBAL_HOLIDAY[global]) {
            note = GLOBAL_HOLIDAY[global];
            cls.push('calendar-holiday');
          }

          var tHoliday = _getTraditionalHoliday()[date];

          // 传统节日
          if (tHoliday) {
            note = tHoliday;
            cls.push('calendar-holiday');
          }
          // 放假日
          if (REST_DAYS.indexOf(date) > -1) {
            cls.push('calendar-holiday');
          }

          // 工作日
          if (WORK_DAYS.indexOf(date) > -1) {
            cls.push('calendar-work');
          }

          // 周末
          if (_isWeekend(date)) {
            cls.push('calendar-holiday');
          }

          // 今天
          if (_isToday(today, date)) {
            cls.push('calendar-today');
            note = '今天';
          }

          // 不在日期范围内
          if (!isInRange) {
            disabled = true;
          }

          if (disabled) {
            cls = [];
            cls.push('calendar-disabled');
            cellClass.push('cell-disabled');
          }

          if (!ext && disabled && isInRange) {
            ext = '不可选';
          }

          if (departDate === date || arriveDate === date) {
            note = departDate === date ? selectedNote[0] : selectedNote[1];
            ref = departDate === date ? 'departDate' : 'arriveDate';
            if (departDate === arriveDate && selectedNote.length >= 3) {
              note = selectedNote[2];
            }
            isSelected = true;
            cls.push('item-text-selected');
            cellClass.push('item-row-selected');
          }

          if (departDate && arriveDate && _isInSelectRange([departDate, arriveDate], date)) {
            cellClass.push('calendar-day-include');
          }

          cell = {
            isSelected: isSelected,
            isEmpty: false,
            ref: ref,
            cls: _unique(cls).join(' '),
            cellClass: _unique(cellClass).join(' '),
            note: note,
            date: date,
            ext: ext,
            disabled: disabled,
            text: d };})();

      }
      cells.push(cell);
    }

    rowsData.push(cells);
  }

  return rowsData;
}

function generateDateCell(_ref) {var range = _ref.range,today = _ref.today,departDate = _ref.departDate,arriveDate = _ref.arriveDate,selectedNote = _ref.selectedNote,descList = _ref.descList;
  var start = new Date(range[0].replace(/-/g, '/'));
  var end = new Date(range[1].replace(/-/g, '/'));
  var startYear = start.getFullYear();
  var startMonth = start.getMonth() + 1;
  var endYear = end.getFullYear();
  var endMonth = end.getMonth() + 1;

  var l = (endYear - startYear) * 12 + endMonth - startMonth + 1;
  var y = startYear;
  var n = startMonth;
  var months = [];

  for (var i = 0; i < l; i++) {
    if (n > 12) {
      n = 1;
      y++;
    }
    months.push.apply(months, [
    { title: "".concat(y, "-").concat(_fixNum(n)) }].concat(_toConsumableArray(
    getWeekRows(y, n, today, range, departDate, arriveDate, selectedNote, descList))));

    n++;
  }
  return months;
}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.js":
/*!***************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-page-calendar/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.vue":
/*!****************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-page-calendar/index.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-404f2e8e!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-404f2e8e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-404f2e8e!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-404f2e8e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-404f2e8e"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-pan-item\\index.js":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-pan-item/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-pan-item\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-pan-item\\index.vue":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-pan-item/index.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-pan-item\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-32c52142!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-32c52142!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-pan-item\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-pan-item\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-part-loading\\index.js":
/*!**************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-part-loading/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-part-loading\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-part-loading\\index.vue":
/*!***************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-part-loading/index.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-part-loading\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-7495c521!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-7495c521!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-part-loading\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-part-loading\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popover\\index.js":
/*!*********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-popover/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popover\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popover\\index.vue":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-popover/index.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-e59faabc!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-e59faabc!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popover\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popover\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-e59faabc!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-e59faabc!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popover\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popover\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e59faabc"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popup\\index.js":
/*!*******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-popup/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue":
/*!********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-popup/index.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-e9d000ae!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-e9d000ae!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-e9d000ae!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-e9d000ae!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e9d000ae"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-progress\\index.js":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-progress/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-progress\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-progress\\index.vue":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-progress/index.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-a8f27ea8!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-a8f27ea8!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-progress\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-progress\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-a8f27ea8!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-a8f27ea8!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-progress\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-progress\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a8f27ea8"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\index.js":
/*!*******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-radio/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\index.vue":
/*!********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-radio/index.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-755de790!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-755de790!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-755de790!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-755de790!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-755de790"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\item.vue":
/*!*******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-radio/item.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-3aa1dec6!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./item.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-3aa1dec6!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\item.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./item.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\item.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-3aa1dec6!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./item.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-3aa1dec6!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\item.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3aa1dec6"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-radio\\type.js":
/*!******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-radio/type.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.DISABLED = exports.CHECKED = void 0;var CHECKED = 'https://gw.alicdn.com/tfs/TB1Y9vlpwMPMeJjy1XcXXXpppXa-72-72.png';exports.CHECKED = CHECKED;
var DISABLED = 'https://gw.alicdn.com/tfs/TB1PtN3pwMPMeJjy1XdXXasrXXa-72-72.png';exports.DISABLED = DISABLED;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-refresher\\index.js":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-refresher/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-refresher\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-refresher\\index.vue":
/*!************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-refresher/index.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-c9a0bd76!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-c9a0bd76!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-refresher\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-refresher\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-c9a0bd76!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-c9a0bd76!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-refresher\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-refresher\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c9a0bd76"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\index.js":
/*!********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-result/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue":
/*!*********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-result/index.vue ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-0517b2dc!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-0517b2dc!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-0517b2dc!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-0517b2dc!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0517b2dc"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-result\\type.js":
/*!*******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-result/type.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                      * Created by Tw93 on 2016/11/4.
                                                                                                      */var _default =

{
  errorPage: {
    pic: 'https://img.alicdn.com/tfs/TB17blphfDH8KJjy1XcXXcpdXXa-320-320.png',
    content: '抱歉出错了，我们正在全力解决中',
    button: '再试一次',
    title: '出错啦' },

  noGoods: {
    pic: 'https://img.alicdn.com/tfs/TB1mPWEeOqAXuNjy1XdXXaYcVXa-320-320.png',
    content: '主人，这里什么都没有找到',
    button: '再试一次',
    title: '暂无商品' },

  noNetwork: {
    pic: 'https://img.alicdn.com/tfs/TB1jkA5g9_I8KJjy0FoXXaFnVXa-320-320.png',
    content: '哎呀，没有网络了......',
    button: '刷新一下',
    title: '无网络' },

  errorLocation: {
    pic: 'https://img.alicdn.com/tfs/TB1zXXahhrI8KJjy0FpXXb5hVXa-320-320.png',
    content: '哎呀，定位失败了......',
    button: '刷新一下',
    title: '定位失败' } };exports.default = _default;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.js":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.vue":
/*!************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/index.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-1615087b!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-1615087b!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-1615087b!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-1615087b!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1615087b"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-icon.vue":
/*!*************************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-icon.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-5e741b9a!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./wxc-rich-text-icon.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-5e741b9a!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-icon.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./wxc-rich-text-icon.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-icon.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-5e741b9a!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./wxc-rich-text-icon.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-5e741b9a!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-icon.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-icon.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5e741b9a"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-link.vue":
/*!*************************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-link.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./wxc-rich-text-link.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-link.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-5cc432ca!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./wxc-rich-text-link.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-5cc432ca!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-link.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-link.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue":
/*!************************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-tag.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-4cc181ee!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./wxc-rich-text-tag.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-4cc181ee!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./wxc-rich-text-tag.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-4cc181ee!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./wxc-rich-text-tag.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-4cc181ee!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-tag.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4cc181ee"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue":
/*!*************************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-text.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-4e9daa4e!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./wxc-rich-text-text.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-4e9daa4e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./wxc-rich-text-text.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-4e9daa4e!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./wxc-rich-text-text.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-4e9daa4e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-rich-text\\wxc-rich-text-text.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4e9daa4e"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.js":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-searchbar/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.vue":
/*!************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-searchbar/index.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-911d1bb0!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-911d1bb0!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-911d1bb0!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-911d1bb0!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-911d1bb0"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-searchbar\\type.js":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-searchbar/type.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.ARROW_ICON = exports.CLOSE_ICON = exports.INPUT_ICON = void 0; /**
                                                                                                                                                   * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                   * Created by Tw93 on 2016/10/31.
                                                                                                                                                   */

var INPUT_ICON = "https://gw.alicdn.com/tfs/TB1FZB.pwMPMeJjy1XdXXasrXXa-30-30.png";exports.INPUT_ICON = INPUT_ICON;
var CLOSE_ICON = "https://gw.alicdn.com/tfs/TB1sZB.pwMPMeJjy1XdXXasrXXa-24-24.png";exports.CLOSE_ICON = CLOSE_ICON;
var ARROW_ICON = "https://gw.alicdn.com/tfs/TB1vZB.pwMPMeJjy1XdXXasrXXa-24-24.png";exports.ARROW_ICON = ARROW_ICON;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-simple-flow\\index.js":
/*!*************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-simple-flow/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-simple-flow\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-simple-flow\\index.vue":
/*!**************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-simple-flow/index.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-14f8a7e6!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-14f8a7e6!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-simple-flow\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-simple-flow\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-14f8a7e6!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-14f8a7e6!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-simple-flow\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-simple-flow\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-14f8a7e6"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slide-nav\\index.js":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-slide-nav/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slide-nav\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slide-nav\\index.vue":
/*!************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-slide-nav/index.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-6e13e4c4!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-6e13e4c4!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slide-nav\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slide-nav\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-6e13e4c4!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-6e13e4c4!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slide-nav\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slide-nav\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6e13e4c4"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slider-bar\\index.js":
/*!************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-slider-bar/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slider-bar\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slider-bar\\index.vue":
/*!*************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-slider-bar/index.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-87a2d234!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-87a2d234!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slider-bar\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slider-bar\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-87a2d234!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-87a2d234!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slider-bar\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-slider-bar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-87a2d234"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.js":
/*!*******************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-special-rich-text/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.vue":
/*!********************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-special-rich-text/index.vue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-6cfbfb32!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-6cfbfb32!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-6cfbfb32!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-6cfbfb32!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-special-rich-text\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6cfbfb32"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-stepper\\index.js":
/*!*********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-stepper/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-stepper\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-stepper\\index.vue":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-stepper/index.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-55652bce!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-55652bce!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-stepper\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-stepper\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-55652bce!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-55652bce!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-stepper\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-stepper\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-55652bce"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-swipe-action\\index.js":
/*!**************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-swipe-action/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-swipe-action\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-swipe-action\\index.vue":
/*!***************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-swipe-action/index.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-7d99a728!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-7d99a728!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-swipe-action\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-swipe-action\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-7d99a728!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-7d99a728!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-swipe-action\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-swipe-action\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7d99a728"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-bar\\index.js":
/*!*********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-bar/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-bar\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-bar\\index.vue":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-bar/index.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-d8a6c350!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-d8a6c350!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-bar\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-bar\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-d8a6c350!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-d8a6c350!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-bar\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-bar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d8a6c350"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\full-page.vue":
/*!***************************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-page/full-page.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-5be4d681!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./full-page.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-5be4d681!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\full-page.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./full-page.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\full-page.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-5be4d681!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./full-page.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-5be4d681!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\full-page.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\full-page.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5be4d681"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.js":
/*!**********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-page/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.vue":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tab-page/index.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-d86a0074!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-d86a0074!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-d86a0074!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-d86a0074!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d86a0074"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tag\\index.js":
/*!*****************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tag/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "default", { enumerable: true, get: function get() {return _index.default;} });var _index = _interopRequireDefault(__webpack_require__(/*! ./index.vue */ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tag\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tag\\index.vue":
/*!******************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/node_modules/weex-ui/packages/wxc-tag/index.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-12c36652!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-12c36652!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tag\\index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tag\\index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-12c36652!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-12c36652!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tag\\index.vue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\node_modules\\weex-ui\\packages\\wxc-tag\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-12c36652"
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

/***/ "F:\\www\\zhanghuai\\盘子App\\pages\\integral-list\\integral-list.nvue?entry":
/*!***************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/pages/integral-list/integral-list.nvue?entry ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-bc6e133e!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./integral-list.nvue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-bc6e133e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\integral-list\\integral-list.nvue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./integral-list.nvue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\integral-list\\integral-list.nvue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-bc6e133e!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./integral-list.nvue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-bc6e133e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\integral-list\\integral-list.nvue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\pages\\integral-list\\integral-list.nvue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-bc6e133e"
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


/***/ })

/******/ });