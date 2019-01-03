export default function proxy(target, sourceKey, key) {
  Object.defineProperty(target, key, {
    configurable: true,
    get: function() {
      return target[sourceKey][key];
    },
    set: function(newVal) {
      target[sourceKey][key] = newVal;
    }
  });
}
