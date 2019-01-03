module.exports = function (obj = {}, arr = []) {
  const temp = [];

  arr.forEach(function (item, i) {
    const val = obj[item.key];
    const noEmptyBool = (val == null || val === '');

    if (item.required && noEmptyBool) {
      temp.push({
        key: item.key,
        msg: item.msg
      });

      return;
    }

    if (item.pattern && !noEmptyBool) {
      if (!item.pattern.test(val)) {
        temp.push({
          key: item.key,
          msg: item.msg
        });

        return;
      }
    }

  });

  return temp;
};


