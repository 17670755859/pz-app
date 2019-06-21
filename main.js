import Vue from 'vue'
import App from './App'
import api from './common/request'
import store from './store'
import utils from './common/utils'
import config from './common/config'
import uniSkip from './common/uni-skip.js'

// #ifdef APP-PLUS
const meta = weex.requireModule('meta')
meta.setViewport({
  width: 750,
  roundOffDeviation: false
});
// #endif

Vue.use(utils);
Vue.config.productionTip = false

Vue.prototype.$BaseUrl = config.BaseUrl

Vue.prototype.$api = api

Vue.prototype.$uniSkip = uniSkip

Vue.prototype.$store = store

Vue.prototype.$copy = function(data) {
	return JSON.parse(JSON.stringify(data))
}

App.mpType = 'app'
const app = new Vue({
	store,
  ...App
})
app.$mount()
