// 正则匹配 {{}}
const reg = /\{\{(.*?)\}\}/g;

export default class compiler {
  constructor(el, vm) {
    vm.$el = document.querySelector(el);
    this.replace(vm.$el, vm);
  }

  replace(frag, vm) {
    Array.from(frag.childNodes).forEach(node => {
      const txt = node.textContent;

      // 即是文本节点又有大括号的情况{{}}
      if (node.nodeType === 3 && reg.test(txt)) {
        const arr = RegExp.$1.split('.');
        let val = vm;
        arr.forEach(key => {
          val = val[key];
        });

        // 用 trim 方法去除首尾空格
        node.textContent = txt.replace(reg, val).trim();

        vm.$watch(RegExp.$1, function(newVal) {
          node.textContent = txt.replace(reg, newVal).trim();
        });
      }

      // 元素节点
      if (node.nodeType === 1) {
        // 获取dom上的所有属性，类数组
        const nodeAttr = node.attributes;

        Array.from(nodeAttr).forEach(attr => {
          const name = attr.name;
          const exp = attr.value;

          if (name.includes('v-')) {
            node.value = vm[exp];
          }

          // 监听变化
          vm.$watch(exp, function(newVal) {
            node.value = newVal;
          });

          node.addEventListener('input', e => {
            const newVal = e.target.value;
            const arr = exp.split('.');
            const val = vm;

            arr.forEach((key, i) => {
              if (i === arr.length - 1) {
                val[key] = newVal;
                return;
              }
              val = val[key];
            });
          });
        });
      }

      // 还有子节点，继续递归 replace
      if (node.childNodes && node.childNodes.length) {
        this.replace(node, vm);
      }
    });
  }
}
