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
/******/ 	return __webpack_require__(__webpack_require__.s = "F:\\www\\zhanghuai\\盘子App\\pages\\login\\login.nvue?entry");
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

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\login\\login.nvue":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:/www/zhanghuai/盘子App/pages/login/login.nvue ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




















































var _index = _interopRequireDefault(__webpack_require__(/*! ../../common/request/index.js */ "F:\\www\\zhanghuai\\盘子App\\common\\request\\index.js"));
var _common = __webpack_require__(/*! ../../common/common.js */ "F:\\www\\zhanghuai\\盘子App\\common\\common.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var domModule = weex.requireModule('dom');Vue.prototype.$api = _index.default;var _default = { data: function data() {return { showPassword: false, form: { phone: '', password: '', clientid: '', // 设备cid
        system: '' // ios or Android
      } };}, created: function created() {(0, _common.clearTabView)();}, methods: { loginHandler: function loginHandler() {var _this = this;this.form.clientid = plus.push.getClientInfo().clientid;this.form.system = plus.os.name;var index = 0;var msgs = ['请输入用户名', '请输入密码', '设备id错误', '系统类型未能识别'];for (var i in this.form) {if (this.form[i] == '') {uni.showToast({ icon: 'none', title: msgs[index] });break;}index++;}if (index !== 4) {return;} /*this.$api.getUserInfo(this.form).then(res => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                         	console.log(res.data);
                                                                                                                                                                                                                                                                                                                                                                                                                                                         })*/uni.showLoading({ title: '登录中...' });setTimeout(function () {if (_this.form.phone == '17670755859' && _this.form.password == '123456') {uni.setStorage({ key: 'token', data: 'eadasfddsfdgdffadsade', success: function success() {uni.navigateBack();} });} else {uni.showToast({ icon: 'none', title: '账号密码错误' });
          uni.hideLoading();
        }
      }, 1500);
    } },

  beforeCreate: function beforeCreate() {
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('https://at.alicdn.com/t/font_1209399_zdx7kh3k9dg.ttf')" });

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-0e131acd!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\login\\login.nvue":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-0e131acd!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:/www/zhanghuai/盘子App/pages/login/login.nvue ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  "logo": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "paddingTop": "50"
  },
  "logo-tips": {
    "width": "154",
    "height": "144"
  },
  "form": {
    "paddingTop": "40",
    "marginTop": "100",
    "marginLeft": "75",
    "marginRight": "75"
  },
  "form-cell": {
    "marginBottom": "60",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#DBDBDB"
  },
  "label": {
    "width": "45"
  },
  "icon-user": {
    "fontSize": "34",
    "color": "#C2C2C2"
  },
  "icon-password": {
    "fontSize": "34",
    "color": "#C2C2C2"
  },
  "icon-eye": {
    "fontSize": "34",
    "color": "#C2C2C2"
  },
  "input": {
    "flex": 1,
    "height": "80",
    "lineHeight": "80"
  },
  "exted": {
    "width": "60"
  },
  "exted-eye": {
    "width": "33",
    "height": "21"
  },
  "exted-eye-close": {
    "width": "31",
    "height": "12"
  },
  "btn": {
    "flex": 1,
    "alignItems": "center",
    "backgroundColor": "#FA9EB6",
    "textAlign": "center",
    "borderRadius": "50"
  },
  "btn-text": {
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "34",
    "height": "90",
    "lineHeight": "90"
  },
  "tips": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": "25"
  },
  "sigin": {
    "fontSize": "28",
    "color": "#8E8E8E"
  },
  "forget": {
    "fontSize": "28",
    "color": "#8E8E8E"
  },
  "footer": {
    "marginTop": "200",
    "marginLeft": "75",
    "marginRight": "75"
  },
  "other": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "other-tips": {
    "width": "260",
    "height": "25"
  },
  "footer-box": {
    "marginTop": "70",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "icon-other": {
    "fontSize": "100",
    "color": "#cccccc"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-0e131acd!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\login\\login.nvue":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-0e131acd!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:/www/zhanghuai/盘子App/pages/login/login.nvue ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["form"]
  }, [_c('div', {
    staticClass: ["form-cell"]
  }, [_vm._m(1), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "用户名/邮箱",
      "type": "text",
      "value": (_vm.form.phone)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.form, "phone", $event.target.attr.value)
      }
    }
  })]), _c('div', {
    staticClass: ["form-cell"]
  }, [_vm._m(2), (_vm.showPassword) ? _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "密码",
      "type": "text",
      "value": (_vm.form.password)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.form, "password", $event.target.attr.value)
      }
    }
  }) : _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "密码",
      "type": "password",
      "value": (_vm.form.password)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.form, "password", $event.target.attr.value)
      }
    }
  }), _c('div', {
    staticClass: ["exted"],
    on: {
      "click": function($event) {
        _vm.showPassword = !_vm.showPassword
      }
    }
  }, [_c('text', {
    staticClass: ["iconfont", "icon-eye"]
  }, [_vm._v(_vm._s(_vm.showPassword ? '\uea3f' : '\ue723'))])])]), _c('div', {
    staticClass: ["form-cell-submit"]
  }, [_c('div', {
    staticClass: ["btn"],
    on: {
      "click": _vm.loginHandler
    }
  }, [_c('text', {
    staticClass: ["btn-text"]
  }, [_vm._v("登录")])]), _vm._m(3)])]), _vm._m(4)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["logo"]
  }, [_c('image', {
    staticClass: ["logo-tips"],
    attrs: {
      "src": "../../static/images/logo.jpg"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["label"]
  }, [_c('text', {
    staticClass: ["iconfont", "icon-user"]
  }, [_vm._v("")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["label"]
  }, [_c('text', {
    staticClass: ["iconfont", "icon-password"]
  }, [_vm._v("")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tips"]
  }, [_c('text', {
    staticClass: ["sigin"]
  }, [_vm._v("立即注册")]), _c('text', {
    staticClass: ["forget"]
  }, [_vm._v("忘记密码")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["footer"]
  }, [_c('div', {
    staticClass: ["other"]
  }, [_c('image', {
    staticClass: ["other-tips"],
    attrs: {
      "src": "../../static/images/other.jpg"
    }
  })]), _c('div', {
    staticClass: ["footer-box"]
  }, [_c('div', [_c('text', {
    staticClass: ["iconfont", "icon-other"]
  }, [_vm._v("")])]), _c('div', [_c('text', {
    staticClass: ["iconfont", "icon-other"]
  }, [_vm._v("")])]), _c('div', [_c('text', {
    staticClass: ["iconfont", "icon-other"]
  }, [_vm._v("")])])])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ "F:\\www\\zhanghuai\\盘子App\\common\\common.js":
/*!***********************************************!*\
  !*** F:/www/zhanghuai/盘子App/common/common.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.createTabView = exports.clearTabView = void 0;var clearTabView = function clearTabView() {

  var view = plus.nativeObj.View.getViewById('tabPersonalClick');
  if (view) {
    view.close();
  }

};exports.clearTabView = clearTabView;
var createTabView = function createTabView() {

  var view = new plus.nativeObj.View('tabPersonalClick', {
    bottom: '0px',
    left: '50%',
    height: '55px',
    dock: 'right',
    backgroundColor: 'rgba(255,255,255,0)' },

  [{
    tag: 'rect',
    id: 'communityId',
    color: 'rgba(255,255,255,0)',
    position: {
      top: '0px',
      left: '0px',
      width: '50%',
      height: '100%' } },


  {
    tag: 'rect',
    id: 'personalId',
    color: 'rgba(255,255,255,0)',
    position: {
      top: '0px',
      left: '50%',
      width: '50%',
      height: '100%' } }]);



  view.show();
  view.addEventListener("click", function (e) {
    uni.navigateTo({
      url: "/pages/login/login",
      animationType: "slide-in-bottom" });

  }, false);

};exports.createTabView = createTabView;var _default =


{
  createTabView: createTabView,
  clearTabView: clearTabView };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["default"]))

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

/***/ "F:\\www\\zhanghuai\\盘子App\\pages\\login\\login.nvue?entry":
/*!***********************************************************!*\
  !*** F:/www/zhanghuai/盘子App/pages/login/login.nvue?entry ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !./node_modules/weex-vue-loader/lib/style-loader!./node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-0e131acd!./node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./login.nvue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-0e131acd!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\login\\login.nvue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/script-loader!babel-loader!./node_modules/weex-vue-loader/lib/selector?type=script&index=0!./login.nvue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\login\\login.nvue")

/* template */
var __vue_template__ = __webpack_require__(/*! !./node_modules/weex-vue-loader/lib/template-compiler?id=data-v-0e131acd!./node_modules/weex-vue-loader/lib/selector?type=template&index=0!./login.nvue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-0e131acd!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!F:\\www\\zhanghuai\\盘子App\\pages\\login\\login.nvue")
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
__vue_options__.__file = "F:\\www\\zhanghuai\\盘子App\\pages\\login\\login.nvue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0e131acd"
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