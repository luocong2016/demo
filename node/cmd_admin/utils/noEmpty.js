module.exports = function (obj = {}, arr = []) {
  const temp = [];
  let val;

  for (let i = 0; i < arr; i++) {
    val = obj[arr[i]];

    if (val == null || val === '') {
      temp.push(arr[i]);
    }
  }

  return temp;
};
