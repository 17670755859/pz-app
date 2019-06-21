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
/******/ 	return __webpack_require__(__webpack_require__.s = "F:\\www\\zhanghuai\\盘子App\\pages\\personal\\personal.nvue?entry");
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

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\personal\\personal.nvue":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/pages/personal/personal.nvue ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;







































































var _index = _interopRequireDefault(__webpack_require__(/*! ../../common/request/index.js */ "F:\\www\\zhanghuai\\盘子App\\common\\request\\index.js"));
var _config = _interopRequireDefault(__webpack_require__(/*! @/common/config.js */ "F:\\www\\zhanghuai\\盘子App\\common\\config.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var height = 0,tmpy = 0,scrollTop = 0,activeScrollTop = 0;var dom = weex.requireModule('dom');Vue.prototype.$api = _index.default;var _default = { data: function data() {return { statusbarHeight: 0, // 系统状态栏高度
      afterHeaderOpacity: 0, btnColor: 'white', // 导航头部按钮颜色切换 黑-白
      tabBars: [], user: {}, // 用户信息
      baseUrl: _config.default.BaseUrl, routes: [{ icon: "\uE616", title: '我的积分', path: '' }, { icon: "\uE628", title: '我发布的', path: 'publish-list' }, { icon: "\uE611", title: '排行榜', path: 'ranking-list' }, { icon: "\uE634", title: '我的收藏', path: 'collection' }, { icon: "\uE655", title: '关于我们', path: 'ours' }] };}, beforeCreate: function beforeCreate() {dom.addRule('fontFace', { 'fontFamily': "iconfont", 'src': "url('https://at.alicdn.com/t/font_1209399_7d4srvzxnx.ttf')" });}, created: function created() {this.statusbarHeight = plus.navigator.getStatusbarHeight();this.getTabBars(); // this.getUserInfo();
  }, methods: { getTabBars: function getTabBars() {this.tabBars = [{ title: '待发货', icon: "\uE636" }, { title: '待收货', icon: "\uE68E" }, { title: '评论', icon: "\uE601" }, { title: '退换/售后', icon: "\uE60E" }];}, // 获取用户信息
    getUserInfo: function getUserInfo() {var that = this;uni.getStorage({ key: 'token', success: function success(res) {that.$api.getUserInfo({ token: res.data }).then(function (res) {that.user = res.data;});} });}, // 滚动监听 设置导航头部渐变
    onScroll: function onScroll(e) {scrollTop = Math.abs(e.contentOffset.y);tmpy = this.statusbarHeight * 2 + 88; // 渐变框高度
      activeScrollTop = scrollTop > tmpy ? tmpy : scrollTop; // 当前滑动高度
      this.btnColor = activeScrollTop >= tmpy / 2 ? 'black' : 'white';this.afterHeaderOpacity = activeScrollTop / tmpy;}, goRouter: function goRouter(path) {uni.navigateTo({ url: '/pages/' + path + '/' + path });} } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-46008cb2!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\personal\\personal.nvue":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-46008cb2!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/pages/personal/personal.nvue ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "textAlign": "center"
  },
  "content": {
    "flex": 1,
    "backgroundColor": "#EAEAEA"
  },
  "scroll-wrapper": {
    "flex": 1
  },
  "header": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0
  },
  "header-content": {
    "position": "relative",
    "height": "90"
  },
  "avator-content": {
    "width": "120",
    "height": "120",
    "borderRadius": "100",
    "overflow": "hidden"
  },
  "avator": {
    "width": "120",
    "height": "120",
    "borderRadius": "100",
    "overflow": "hidden"
  },
  "header-title": {
    "position": "absolute",
    "left": "140",
    "right": "140",
    "textAlign": "center",
    "color": "#000000",
    "fontSize": "32",
    "lineHeight": "88"
  },
  "header-ft": {
    "flexDirection": "row",
    "alignItems": "center",
    "position": "absolute",
    "right": 0,
    "top": 0,
    "height": "88",
    "textAlign": "center",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10"
  },
  "header-btn": {
    "position": "relative",
    "marginLeft": "10",
    "paddingTop": "8",
    "paddingRight": "8",
    "paddingBottom": "8",
    "paddingLeft": "8"
  },
  "icon-message": {
    "fontSize": "44"
  },
  "icon-setting": {
    "fontSize": "44"
  },
  "redDot": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "width": "15",
    "height": "15",
    "borderRadius": 50,
    "backgroundColor": "#FF0000"
  },
  "personal-content": {
    "position": "relative",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "head-bg": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "head-content": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginLeft": "35"
  },
  "name-box": {
    "flexDirection": "row",
    "alignItems": "flex-end"
  },
  "people-name": {
    "color": "#FFFFFF",
    "fontSize": "33",
    "marginRight": "10"
  },
  "qiandao-box": {
    "marginTop": "10",
    "borderRadius": "30",
    "width": "160",
    "height": "46",
    "backgroundColor": "#FAB4C6"
  },
  "sigin": {
    "height": "46"
  },
  "member-btn": {
    "position": "absolute",
    "zIndex": 8,
    "width": "206",
    "height": "124",
    "right": 0,
    "bottom": "4"
  },
  "order-content": {
    "marginLeft": "25",
    "marginRight": "25",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "15",
    "marginTop": "35"
  },
  "order-title": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "order-text-left": {
    "fontSize": "34",
    "color": "#1e1b1c"
  },
  "order-right": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "order-text-right": {
    "fontSize": "26",
    "color": "#8f8f8f",
    "marginRight": "10"
  },
  "icon-arrowRight": {
    "fontSize": "26",
    "color": "#8f8f8f"
  },
  "order-body": {
    "borderTopStyle": "solid",
    "borderTopWidth": "1",
    "borderTopColor": "#DCDCDC",
    "paddingTop": "30",
    "paddingRight": "12",
    "paddingBottom": "20",
    "paddingLeft": "12",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "order-body-item": {
    "flex": 1
  },
  "item-logo": {
    "position": "relative"
  },
  "tab-icon": {
    "fontSize": "60",
    "color": "#979797"
  },
  "item-title": {
    "fontSize": "26",
    "color": "#505050",
    "textAlign": "center",
    "marginTop": "20"
  },
  "route-content": {
    "marginTop": "30",
    "marginLeft": "25",
    "marginRight": "25",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "15"
  },
  "route-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": "30",
    "paddingRight": "20",
    "paddingBottom": "40",
    "paddingLeft": "40"
  },
  "route-item-left": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "route-item-icon": {
    "fontSize": "36",
    "color": "#979797"
  },
  "route-item-label": {
    "fontSize": "30",
    "marginLeft": "15"
  },
  "route-right": {
    "fontSize": "30",
    "color": "#C7C7C7"
  },
  "bottom-line": {
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#EEEEEE"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-46008cb2!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\personal\\personal.nvue":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-46008cb2!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/pages/personal/personal.nvue ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["header"],
    style: {
      height: _vm.statusbarHeight * 2 + 88,
      backgroundColor: 'rgba(255,255,255,' + _vm.afterHeaderOpacity + ')'
    }
  }, [_c('div', {
    staticClass: ["header-status"],
    style: {
      height: _vm.statusbarHeight * 2
    }
  }), _c('div', {
    staticClass: ["header-content"]
  }, [_c('text', {
    staticClass: ["header-title"],
    style: {
      opacity: _vm.afterHeaderOpacity
    }
  }, [_vm._v("我的")]), _c('div', {
    staticClass: ["header-ft"]
  }, [_c('div', {
    staticClass: ["header-btn"],
    on: {
      "click": function($event) {
        _vm.goRouter('setting')
      }
    }
  }, [_c('text', {
    staticClass: ["iconfont", "icon-setting"],
    style: {
      color: _vm.btnColor,
      opacity: 1
    }
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["header-btn"],
    on: {
      "click": function($event) {
        _vm.goRouter('message-list')
      }
    }
  }, [_c('text', {
    staticClass: ["redDot"]
  }), _c('text', {
    staticClass: ["iconfont", "icon-message"],
    style: {
      color: _vm.btnColor
    }
  }, [_vm._v("")])])])])]), _c('scroller', {
    staticClass: ["scroll-wrapper"],
    attrs: {
      "showScrollbar": false
    },
    on: {
      "scroll": _vm.onScroll
    }
  }, [_c('div', {
    staticClass: ["personal-content"],
    style: {
      height: _vm.statusbarHeight * 2 + 308
    }
  }, [_c('image', {
    staticClass: ["head-bg"],
    attrs: {
      "src": "../../static/images/info-banner.png",
      "resize": "cover"
    }
  }), _c('div', {
    staticClass: ["head-content"]
  }, [_c('div', {
    staticClass: ["avator-content"]
  }, [_c('image', {
    staticClass: ["avator"],
    attrs: {
      "src": "../../static/img/order-avator.jpg"
    },
    on: {
      "click": function($event) {
        _vm.goRouter('settingInfo')
      }
    }
  })]), _c('div', {
    staticStyle: {
      marginLeft: "15px"
    }
  }, [_vm._m(0), _c('div', {
    staticClass: ["qiandao-box"],
    on: {
      "click": function($event) {
        _vm.goRouter('sign')
      }
    }
  }, [_c('image', {
    staticClass: ["sigin"],
    attrs: {
      "src": "../../static/images/sigin.png"
    }
  })])])]), _c('image', {
    staticClass: ["member-btn"],
    attrs: {
      "src": "../../static/images/huiyuan-fuli.png"
    }
  })]), _c('div', {
    staticClass: ["order-content"]
  }, [_c('div', {
    staticClass: ["order-title"]
  }, [_c('text', {
    staticClass: ["order-text-left"]
  }, [_vm._v("我的订单")]), _c('div', {
    staticClass: ["order-right"],
    on: {
      "click": function($event) {
        _vm.goRouter('order')
      }
    }
  }, [_c('text', {
    staticClass: ["order-text-right"]
  }, [_vm._v("查看全部")]), _c('text', {
    staticClass: ["iconfont", "icon-arrowRight"]
  }, [_vm._v("")])])]), _c('div', {
    staticClass: ["order-body"]
  }, _vm._l((_vm.tabBars), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["order-body-item"],
      on: {
        "click": function($event) {
          _vm.goRouter('order')
        }
      }
    }, [_c('div', {
      staticClass: ["item-logo"]
    }, [_c('text', {
      staticClass: ["iconfont", "tab-icon"]
    }, [_vm._v(_vm._s(item.icon))])]), _c('text', {
      staticClass: ["item-title"]
    }, [_vm._v(_vm._s(item.title))])])
  }))]), _c('div', {
    staticClass: ["route-content"]
  }, _vm._l((_vm.routes), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["route-item"],
      class: [index < _vm.routes.length ? 'bottom-line' : ''],
      on: {
        "click": function($event) {
          _vm.goRouter(item.path)
        }
      }
    }, [_c('div', {
      staticClass: ["route-item-left"]
    }, [_c('text', {
      staticClass: ["route-item-icon", "iconfont"]
    }, [_vm._v(_vm._s(item.icon))]), _c('text', {
      staticClass: ["route-item-label"]
    }, [_vm._v(_vm._s(item.title))])]), _c('text', {
      staticClass: ["iconfont", "route-right"]
    }, [_vm._v("")])])
  })), _c('div', {
    staticStyle: {
      height: "40px"
    }
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["name-box"]
  }, [_c('text', {
    staticClass: ["people-name"]
  }, [_vm._v("我是昵称")]), _c('image', {
    staticStyle: {
      width: "103px",
      height: "27px"
    },
    attrs: {
      "src": "../../static/images/vip.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\common\\config.js":
/*!***********************************************!*\
  !*** F:/www/zhanghuai/盘子App/common/config.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var config = {
  Interface: 'https://panziapp.pznrfsy.com/appapi/v1/',
  BaseUrl: 'https://panziapp.pznrfsy.com' };var _default =


config;exports.default = _default;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\common\\request\\index.js":
/*!******************************************************!*\
  !*** F:/www/zhanghuai/盘子App/common/request/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.communityZan = exports.communityInfo = exports.communityList = exports.communityTab = exports.perfectUserInfo = exports.getUserInfo = exports.loginOut = exports.login = exports.register = exports.testPhone = exports.getCode = exports.banner = exports.test = void 0;var _interface = _interopRequireDefault(__webpack_require__(/*! ./interface */ "F:\\www\\zhanghuai\\盘子App\\common\\request\\interface.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 将业务所有接口统一起来便于维护
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
var test = function test(data) {
  /* http.config.baseUrl = "http://localhost:8080/api/"
                                //设置请求前拦截器
                                http.interceptor.request = (config) => {
                                	config.header = {
                                		"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                                	}
                                } */
  //设置请求结束后拦截器
  _interface.default.interceptor.response = function (response) {
    //判断返回状态 执行相应操作
    return response;
  };

  return _interface.default.request({
    baseUrl: 'https://unidemo.dcloud.net.cn/',
    url: 'ajax/echo/text?name=uni-app',
    dataType: 'text',
    data: data });

};

// 轮播图
exports.test = test;var banner = function banner(data) {
  return _interface.default.request({
    url: '/index/column',
    method: 'GET',
    data: data
    // handle:true
  });
};

// 获取验证码
exports.banner = banner;var getCode = function getCode(data) {
  return _interface.default.request({
    url: '/member/send_sms',
    method: 'GET',
    data: data });

};

// 验证手机是否已注册
exports.getCode = getCode;var testPhone = function testPhone(data) {
  return _interface.default.request({
    url: '/member/verify_tel',
    method: 'GET',
    data: data });

};

// 注册账号
exports.testPhone = testPhone;var register = function register(data) {
  return _interface.default.request({
    url: '/member/register',
    method: 'POST',
    data: data });

};

// 登录
exports.register = register;var login = function login(data) {
  return _interface.default.request({
    url: '/member/login',
    method: 'POST',
    data: data });

};

// 推出登录
exports.login = login;var loginOut = function loginOut(data) {
  return _interface.default.request({
    url: '/member/login_out',
    method: 'POST',
    data: data });

};

// 获取用户信息
exports.loginOut = loginOut;var getUserInfo = function getUserInfo(data) {
  return _interface.default.request({
    url: '/member/info_member',
    method: 'GET',
    data: data });

};

// 完善用户信息
exports.getUserInfo = getUserInfo;var perfectUserInfo = function perfectUserInfo(data) {
  return _interface.default.request({
    url: '/member/edit_member',
    method: 'POST',
    data: data });

};

// 社区导航分类
exports.perfectUserInfo = perfectUserInfo;var communityTab = function communityTab(data) {
  return _interface.default.request({
    url: '/sns/category',
    method: 'GET',
    data: data });

};

// 社区列表
exports.communityTab = communityTab;var communityList = function communityList(data) {
  return _interface.default.request({
    url: '/sns/index_list',
    method: 'GET',
    data: data });

};

// 社区列表 --> 详情
exports.communityList = communityList;var communityInfo = function communityInfo(data) {
  return _interface.default.request({
    url: '/sns/details',
    method: 'GET',
    data: data });

};

// 社区文章点赞
exports.communityInfo = communityInfo;var communityZan = function communityZan(data) {
  return _interface.default.request({
    url: '/sns/edit_sns',
    method: 'GET',
    data: data });

};
// 默认全部导出  import api from '@/common/vmeitime-http/'
exports.communityZan = communityZan;var _default = {
  test: test,
  banner: banner,
  login: login,
  getCode: getCode,
  loginOut: loginOut,
  register: register,
  testPhone: testPhone,
  getUserInfo: getUserInfo,
  communityZan: communityZan,
  communityTab: communityTab,
  communityList: communityList,
  communityInfo: communityInfo,
  perfectUserInfo: perfectUserInfo };exports.default = _default;

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\common\\request\\interface.js":
/*!**********************************************************!*\
  !*** F:/www/zhanghuai/盘子App/common/request/interface.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, plus) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _config2 = _interopRequireDefault(__webpack_require__(/*! ../config */ "F:\\www\\zhanghuai\\盘子App\\common\\config.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  config: {
    baseUrl: _config2.default.Interface, // 线上接口
    header: _defineProperty({
      'Content-Type': 'application/json;charset=UTF-8' }, "Content-Type",
    'application/x-www-form-urlencoded'),

    data: {},
    method: "GET",
    dataType: "json", /* 如设为json，会对返回的数据做一次 JSON.parse */
    responseType: "text",
    success: function success() {},
    fail: function fail() {},
    complete: function complete() {} },

  interceptor: {
    request: null,
    response: null },

  request: function request(options) {var _this = this;
    if (!options) {
      options = {};
    }
    var token = uni.getStorageSync('token') || 'null';
    options.baseUrl = options.baseUrl || this.config.baseUrl;
    options.dataType = options.dataType || this.config.dataType;
    options.url = options.baseUrl + options.url;
    options.data = options.data || {};
    options.method = options.method || this.config.method;
    // if (token !== 'null') {
    Object.assign(options.data, { token: options.data.token || token });
    return new Promise(function (resolve, reject) {
      var _config = null;

      options.complete = function (response) {
        var statusCode = response.statusCode;
        response.config = _config;
        if (true) {
          if (statusCode === 200) {
            // console.log("【" + _config.requestId + "】 结果：" + JSON.stringify(response.data))
          }
        }
        if (_this.interceptor.response) {
          var newResponse = _this.interceptor.response(response);
          if (newResponse) {
            response = newResponse;
          }
        }
        // 统一的响应日志记录
        _reslog(response);
        if (statusCode === 200) {//成功
          console.log(JSON.stringify(response.data), " at common\\request\\interface.js:53");
          if (response.data.code == 200) {
            uni.hideLoading();
            resolve(response.data);
          } else {

            plus.nativeUI.toast(response.data.msg, { verticalAlign: 'center' });

            uni.hideLoading();
            resolve(false);
          }
        } else {
          reject(response);
        }
      };

      _config = Object.assign({}, _this.config, options);
      _config.requestId = new Date().getTime();

      if (_this.interceptor.request) {
        _this.interceptor.request(_config);
      }

      // 统一的请求日志记录
      _reqlog(_config);

      if (true) {
        // console.log("【" + _config.requestId + "】 地址：" + _config.url)
        if (_config.data) {
          // console.log("【" + _config.requestId + "】 参数：" + JSON.stringify(_config.data))
        }
      }

      uni.request(_config);
    });
    // }
  },
  get: function get(url, data, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'GET';
    return this.request(options);
  },
  post: function post(url, data, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'POST';
    return this.request(options);
  },
  put: function put(url, data, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'PUT';
    return this.request(options);
  },
  delete: function _delete(url, data, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'DELETE';
    return this.request(options);
  } };



/**
        * 请求接口日志记录
        */exports.default = _default;
function _reqlog(req) {
  if (true) {
    // console.log("【" + req.requestId + "】 地址：" + req.url)
    if (req.data) {
      // console.log("【" + req.requestId + "】 请求参数：" + JSON.stringify(req.data))
    }
  }
  //TODO 调接口异步写入日志数据库
}

/**
   * 响应接口日志记录
   */
function _reslog(res) {
  var _statusCode = res.statusCode;
  if (true) {
    // console.log("【" + res.config.requestId + "】 地址：" + res.config.url)
    if (res.config.data) {

    } // console.log("【" + res.config.requestId + "】 请求参数：" + JSON.stringify(res.config.data))
    // console.log("【" + res.config.requestId + "】 响应结果：" + JSON.stringify(res))
  }
  //TODO 除了接口服务错误外，其他日志调接口异步写入日志数据库
  switch (_statusCode) {
    case 200:
      break;
    case 401:
      break;
    case 404:
      break;
    default:
      break;}

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["weexPlus"]))

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\pages\\personal\\personal.nvue?entry":
/*!*****************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/pages/personal/personal.nvue?entry ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-46008cb2!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./personal.nvue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-46008cb2!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\personal\\personal.nvue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./personal.nvue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\personal\\personal.nvue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-46008cb2!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./personal.nvue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-46008cb2!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\personal\\personal.nvue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\pages\\personal\\personal.nvue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-46008cb2"
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