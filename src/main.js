// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入vuex
import Vuex from 'vuex'
import store from './vuex/store'

/*// 引入qs
import qs from 'qs';*/

// 引入自定义布局
import './assets/css/app.css'
import './assets/css/base.css'
import './assets/css/main.css'


// use
Vue.use(ElementUi);
Vue.use(Vuex);

/*Vue.prototype.$qs = qs;*/
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
