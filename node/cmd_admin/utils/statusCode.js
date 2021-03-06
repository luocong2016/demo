module.exports = {

  /* 4xx（请求错误） */
  // 401(未授权) 
  // 用户验证失败
  4010000: '没有登陆账号',
  4010001: '密码或账号为空',
  4010002: '密码或账号错误',

  // 403(服务器已经理解请求，但是拒绝执行它。)
  4039901: '请求非空型参数错误',
  4039902: '传入的参数不存在',

  // 409 (冲突)
  4090001: '账号已经存在',
  4090101: '课程已经存在',
  
  /* 5xx（服务器错误） */
  // 500(服务器错误)
  5001012: '查询条件发生错误',
};

/*
  00 用户
  01 课程
  10 数据库
  99 全局
*/
