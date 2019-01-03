module.exports = {
  // 非负整数
  positiveInt: /^\d+$ 或 ^[1-9]\d*|0$/,
  // 数字|字母|中文 长度在 1-20
  designation: /^[A-Za-z0-9\u4e00-\u9fa5]{1,20}$/,
};
