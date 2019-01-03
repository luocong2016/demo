import proxy from './instance/proxy';
import initOptions from './instance/init';
import Compiler from './compile';
import Watcher from './observer/watcher';
import { callHook } from './instance/lifecycle';

export default class Wue {
  constructor(options) {
    const vm = this;
    vm.$options = options;
    vm.$watch = function(key, cb) {
      new Watcher(vm, key, cb);
    };
    initOptions(vm);
    for (let key in vm._data) {
      proxy(vm, '_data', key);
    }
    callHook(vm, 'created');
    new Compiler(vm.$options.el, vm);
    callHook(vm, 'mounted');
  }
}

const app = new Wue({
  el: '#app',
  data: {
    song: 'Song',
    album: {
      name: 'album-name',
      theme: 'album-theme'
    },
    singer: 'singer',
    msg: 'hello wue',
    deep: {
      a: 1,
      b: 2
    }
  }
});

console.log(app);
