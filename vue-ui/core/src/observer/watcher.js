import { popTarget, pushTarget } from './dep';

export default class Watcher {
  constructor(vm, expression, cb) {
    this.vm = vm;
    this.cb = cb;
    this.expression = expression;
    this.value = this.getVal();
  }

  getVal() {
    pushTarget(this);

    const { vm, expression } = this;
    let val = vm;

    expression.split('.').forEach(key => {
      val = val[key];
    });

    popTarget();

    return val;
  }

  addDep(dep) {
    dep.addSub(this);
  }

  update() {
    const { vm, expression, cb } = this;

    expression.split('.').forEach(key => {
      val = val[key];
    });
    cb.call(vm, val, this.value);
  }
}
