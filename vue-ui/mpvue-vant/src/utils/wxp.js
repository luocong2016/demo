function f(fun, obj) {
  return new Promise((resolve, reject) => {
    fun({
      ...obj,
      success: resolve,
      fail: reject
    });
  });
}

const WX = {};

for (let key in wx) {
  WX[key] = obj => f(wx[key], obj)
}

export default WX;
