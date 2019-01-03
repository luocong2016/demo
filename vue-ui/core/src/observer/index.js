import Dep from './dep';

class Observer {
  constructor(val) {
    this.walk(val);
  }

  walk(obj) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {
        this.walk(obj[key]);
      }
      defineReactive(obj, key, obj[key]);
    });
  }
}

function defineReactive(obj, key, value) {
  const dep = new Dep();

  Object.defineProperty(obj, key, {
    set(newVal) {
      if (newVal === value) {
        return;
      }
      value = newVal;
      dep.notify();
    },
    get() {
      if (Dep.target) {
        dep.addDepend();
      }
      return value;
    }
  });
}

export default function observer(val) {
  return new Observer(val);
}
