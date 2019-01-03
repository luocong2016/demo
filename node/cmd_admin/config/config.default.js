module.exports = {
  port: 8089,
  database: 'mongodb://lutz:crm_lutz@119.27.186.126:27017/crm_admin',
  dataOpt: {
    useNewUrlParser: true
  },
  sessionOpt: {
    name: 'crm_cookie', //cookie的name，默认值是：connect.sid
    secret: 'lutz_crm_admin', // 用来对 session id相关的 cookie 进行签名
    saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
    resave: false, // 是否每次都重新保存会话，建议false
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      // maxAge: 1000 * 60 * 30, // 30 minute
      // maxAge: 1000 * 60 * 60 * 24 * 7, // 7 day
    }
  },
  mongoStore: {
    host: '119.27.186.126',
    port: 27017,
    db: 'crm_admin',
  },
  unless: [ // Unwanted token
    '/user/login',
    '/user/append',
  ],
  unRegPower: [ // Unwanted token RegExp
    '^/image/',
    '^/application/',
    '^/test/',
  ],
};
