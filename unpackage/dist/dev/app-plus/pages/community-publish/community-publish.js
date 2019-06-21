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
/******/ 	return __webpack_require__(__webpack_require__.s = "F:\\www\\zhanghuai\\盘子App\\pages\\community-publish\\community-publish.nvue?entry");
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

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\community-publish\\community-publish.nvue":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/pages/community-publish/community-publish.nvue ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, plus) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');var _default =
{
  data: function data() {
    return {
      statusBarHeight: '0wx', //状态栏占位高度
      form: {
        content: '' },

      boxWidth: 0,
      images: [] };

  },
  beforeCreate: function beforeCreate() {
    dom.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('https://at.alicdn.com/t/font_1209399_r3baoc5j7ca.ttf')" });

  },
  created: function created() {var _this = this;
    //获取状态栏高度给顶部占位节点
    uni.getSystemInfo({
      success: function success(res) {
        _this.statusBarHeight = res.statusBarHeight + 'wx';
      } });

  },
  mounted: function mounted() {var _this2 = this;
    var result = dom.getComponentRect(this.$refs.box, function (option) {
      _this2.boxWidth = (option.size.width - 36) / 3;
    });
  },
  methods: {
    // 返回上一页
    goBackHandler: function goBackHandler() {
      uni.navigateBack();
    },

    // 发布文章
    publishHandler: function publishHandler() {
      if (this.form.content) {
        plus.nativeUI.toast('发布成功!', {
          verticalAlign: 'center' });

      }
    },

    // 添加上传图片
    addImgHandler: function addImgHandler() {
      var that = this;
      uni.chooseImage({
        count: 9,
        success: function success(files) {
          var tempFilePaths = files.tempFilePaths;
          that.images = tempFilePaths;
        } });

    },

    // 删除图片
    deleteImgHandler: function deleteImgHandler(index) {
      this.images.splice(index, 1);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["weexPlus"]))

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-b2b1226e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\community-publish\\community-publish.nvue":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-b2b1226e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/pages/community-publish/community-publish.nvue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
  "page-header": {
    "backgroundColor": "#F6F6F6"
  },
  "page-header-wrapper": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "100",
    "paddingTop": "0",
    "paddingRight": "20",
    "paddingBottom": "0",
    "paddingLeft": "20"
  },
  "page-header-left": {
    "opacity": 0.9
  },
  "logo": {
    "fontSize": "34",
    "color": "#090909"
  },
  "page-header-center": {
    "flex": 1,
    "paddingTop": "0",
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "20"
  },
  "search-input": {
    "height": "60",
    "fontSize": "28",
    "color": "#ffffff",
    "textAlign": "center",
    "lineHeight": "60",
    "backgroundColor": "rgba(255,255,255,0.2)",
    "borderRadius": "100"
  },
  "page-header-right": {
    "alignItems": "center"
  },
  "contribute-icon": {
    "width": "50",
    "height": "44"
  },
  "contribute-text": {
    "fontSize": "32",
    "color": "#898989"
  },
  "contribute-text-active": {
    "fontSize": "32",
    "color": "#090909"
  },
  "publish-content": {
    "paddingTop": "40",
    "paddingRight": "40",
    "paddingBottom": "40",
    "paddingLeft": "40"
  },
  "textarea": {
    "fontSize": "34",
    "flex": 1,
    "color": "#717171"
  },
  "images": {
    "position": "relative",
    "marginTop": "10",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "flexWrap": "wrap"
  },
  "img-box": {
    "position": "relative",
    "display": "flex",
    "justifyContent": "flex-end",
    "height": "230",
    "overflow": "hidden"
  },
  "img": {
    "height": "220",
    "verticalAlign": "middle",
    "borderWidth": "1",
    "borderRadius": "10",
    "borderStyle": "solid",
    "borderColor": "rgba(0,0,0,0)"
  },
  "publish-box": {
    "height": "230"
  },
  "publish-box-add": {
    "backgroundColor": "#EDEDED",
    "height": "220",
    "lineHeight": "220",
    "display": "flex",
    "justifyContent": "flex-end"
  },
  "icon-add": {
    "borderRadius": "10",
    "fontSize": "100",
    "color": "#CFCFCF",
    "lineHeight": "220",
    "textAlign": "center"
  },
  "delete-img": {
    "position": "absolute",
    "zIndex": 9,
    "right": 0,
    "top": 0,
    "fontSize": "40",
    "color": "#FA9EB6"
  },
  "themes": {
    "paddingTop": 0,
    "paddingRight": "40",
    "paddingBottom": 0,
    "paddingLeft": "40",
    "marginTop": "140"
  },
  "themes-cell": {
    "paddingTop": "35",
    "paddingRight": "10",
    "paddingBottom": "35",
    "paddingLeft": "10",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "let-content": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "label": {
    "fontSize": "35",
    "color": "#020202",
    "marginLeft": "5"
  },
  "iconfont-sm": {
    "fontSize": "36"
  },
  "iconfont-arrow-right": {
    "fontSize": "34",
    "color": "#A7A7A7"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-b2b1226e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\community-publish\\community-publish.nvue":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-b2b1226e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/pages/community-publish/community-publish.nvue ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["page-header"]
  }, [_c('div', {
    style: {
      height: _vm.statusBarHeight
    }
  }), _c('div', {
    staticClass: ["page-header-wrapper"]
  }, [_c('div', {
    staticClass: ["page-header-left"],
    on: {
      "click": _vm.goBackHandler
    }
  }, [_c('text', {
    staticClass: ["logo"]
  }, [_vm._v("取消")])]), _c('div', {
    staticClass: ["page-header-center"]
  }), _c('div', {
    staticClass: ["page-header-right"],
    on: {
      "click": _vm.publishHandler
    }
  }, [_c('text', {
    class: [_vm.form.content ? 'contribute-text-active' : 'contribute-text']
  }, [_vm._v("发布")])])])]), _c('div', {
    staticClass: ["publish-content"]
  }, [_c('textarea', {
    staticClass: ["textarea"],
    attrs: {
      "rows": "6",
      "placeholder": "说点什么吧...",
      "value": (_vm.form.content)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.form, "content", $event.target.attr.value)
      }
    }
  }), _c('div', {
    ref: "box",
    staticClass: ["images"]
  }, [_vm._l((_vm.images), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["img-box"],
      style: {
        width: _vm.boxWidth + 'px'
      }
    }, [_c('image', {
      staticClass: ["img"],
      style: {
        width: (_vm.boxWidth - 10) + 'px'
      },
      attrs: {
        "resize": "cover",
        "src": item
      }
    }), _c('text', {
      staticClass: ["delete-img", "iconfont"],
      on: {
        "click": function($event) {
          _vm.deleteImgHandler(index)
        }
      }
    }, [_vm._v("")])])
  }), _c('div', {
    staticClass: ["img-box", "publish-box"],
    on: {
      "click": _vm.addImgHandler
    }
  }, [_c('div', {
    staticClass: ["publish-box-add"],
    style: {
      width: _vm.boxWidth + 'px'
    }
  }, [_c('text', {
    staticClass: ["iconfont", "icon-add"]
  }, [_vm._v("")])])])], 2)]), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["themes"]
  }, [_c('div', {
    staticClass: ["themes-cell"]
  }, [_c('div', {
    staticClass: ["let-content"]
  }, [_c('text', {
    staticClass: ["iconfont", "iconfont-sm"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["label"]
  }, [_vm._v("添加标签")])]), _c('text', {
    staticClass: ["iconfont", "iconfont-arrow-right"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["themes-cell"]
  }, [_c('div', {
    staticClass: ["let-content"]
  }, [_c('text', {
    staticClass: ["iconfont", "iconfont-sm"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["label"]
  }, [_vm._v("我的位置")])]), _c('text', {
    staticClass: ["iconfont", "iconfont-arrow-right"]
  }, [_vm._v("")])])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\pages\\community-publish\\community-publish.nvue?entry":
/*!***********************************************************************************!*\
  !*** F:/www/zhanghuai/盘子App/pages/community-publish/community-publish.nvue?entry ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-b2b1226e!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./community-publish.nvue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-b2b1226e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\community-publish\\community-publish.nvue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./community-publish.nvue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\community-publish\\community-publish.nvue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-b2b1226e!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./community-publish.nvue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-b2b1226e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\community-publish\\community-publish.nvue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\pages\\community-publish\\community-publish.nvue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b2b1226e"
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