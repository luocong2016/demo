import router from './router';
// import store from './store';
// import { Message } from 'element-ui';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import storage from '@/utils/storage';
import { whiteList } from '@/config';

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (storage.getItem('token')) {
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      // get userInfo
    }
  } else {
    // has no token
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`); // redirect to login
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
