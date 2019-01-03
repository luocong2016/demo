const { encryption } = require('../../utils/md5');
const UserModel = require('../../models/user/user');

class User {
  constructor() { }

  async append(req, res, next) {
    const { user, password, roles, ...other } = req.body;

    if (!user || !password) {
      res.send({ status: 0, type: 4040001 });
      return;
    }

    const newpassword = encryption(password);

    try {
      const userData = await UserModel.findOne({ user }, { password: 0 });

      if (userData) {
        res.send({ status: 0, type: 4090001 });
        return;
      }

      const newUser = { user, password: newpassword, ...other };

      await UserModel.create(newUser);

      const newuserData = await UserModel.findOne({ user }, { password: 0 });

      res.send({ status: 1, data: newuserData, message: '用户注册成功' })
    } catch (err) {
      res.send({ status: 0, data: 5001012, message: err.message });

    }
  }

  async updateInfo(req, res, next) {

  }

  async login(req, res, next) {
    if (req.session && req.session.user) {
      try {
        const userData = await UserModel.findOne({ user: req.session.user }, { password: 0 });

        if (!userData) {
          res.send({ status: 0, type: 4040002 });
        } else {
          res.send({ status: 1, data: userData, message: '用户登陆成功' });
        }

      } catch (err) {
        res.send({ status: 0, type: 5001012, message: err.message });
      }

      return;
    }

    const { user, password } = req.body;

    if (!user || !password) {
      res.send({ status: 0, type: 4040001 });
      return;
    }

    const newPassword = encryption(password);

    try {
      const userData = await UserModel.findOne({ user, password: newPassword }, { password: 0 });

      if (!userData) {
        res.send({ status: 0, type: 4040002 });
      } else {
        req.session.user = user; // 登录成功，设置 session
        req.session.roles = userData.roles;
        res.send({ status: 1, data: userData, message: '用户登陆成功' });
      }

    } catch (err) {
      res.send({ status: 0, type: 5001012, message: err.message });
    }

  }

  async logout(req, res, next) {
    if (req.session && req.session.user) {
      res.send({ status: 1, data: { user: req.session.user }, message: '用户退出成功' });
      req.session.destroy(); // 清除session
      return;
    }

    res.send({ status: 0, type: 4010000 });

  }

}

module.exports = new User();
