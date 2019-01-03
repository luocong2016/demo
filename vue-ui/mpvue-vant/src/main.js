import Vue from 'vue';
import App from './App';
import store from './store';
import WXP from '@/utils/wxp';
import '../static/iconfont/iconfont.css';

Vue.config.productionTip = false;
App.mpType = 'app';

// 必须初始化
wx.cloud.init({
  traceUser: true
});

Vue.prototype.WXP = WXP;
Vue.prototype.$store = store;
Vue.prototype.db = wx.cloud.database({
  env: 'lutz-8e6d51'
});

const app = new Vue(App);
app.$mount();
