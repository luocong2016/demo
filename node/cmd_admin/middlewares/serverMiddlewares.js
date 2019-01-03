const config = require('../config/config.default');

function isExist(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    let patt = new RegExp(arr[i]);
    if (patt.test(str)) {
      return true;
    }
  }

  return false;
}

const configurationMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.Origin || req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,X-Requested-With,x-access-token');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', true); // 可以带cookies
  res.header('X-Powered-By', '3.2.1');

  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
};

const rolesMiddleware = (req, res, next) => {
  const { path = '' } = req;

  if (path === '/favicon.ico') {
    res.end();
    return;
  }

  if (config.unless.indexOf(path) !== -1 || isExist(config.unRegPower, path)) { // if path include '/user/', return
    next();

    return;
  }
  if (!req.session || !req.session.user) {
    res.status(401).send({ status: 0, type: 4010000, message: '权限验证错误' });
  } else { // 权限路由扩展
    next();

    return;
  }
};

module.exports = {
  configurationMiddleware,
  rolesMiddleware
};
