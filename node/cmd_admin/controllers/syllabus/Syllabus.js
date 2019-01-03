const SyllabusModel = require('../../models/syllabus/syllabus');
const paramCheck = require('../../utils/paramCheck');
const reg = require('../../utils/reg');
const regArr = [
  {
    key: 'name',
    required: true,
    pattern: reg.designation,
    msg: '课程名称为必须项,且长度在20以内(只能是数字、字母、中文字符)'
  },
  {
    key: 'time',
    required: true,
    pattern: reg.positiveInt,
    msg: '课程时长为必须项,(只能是正整数)'
  },
  {
    key: 'discription',
    required: true,
    msg: '课程描述为必须项'
  }
];

class Syllabus {
  constructor() { }

  async append(req, res, next) {
    const { name, ...other } = req.body;
    const needParams = paramCheck(req.body, regArr);

    if (needParams.length > 0) {
      res.send({ status: 0, type: 4039901, err: needParams });
      return;
    }

    try {
      const syllabusData = await SyllabusModel.findOne({ name });

      if (syllabusData) {
        res.send({ status: 0, type: 4090101 });
        return;
      }

      const newSyllabus = { name, ...other };

      await SyllabusModel.create(newSyllabus);

      const newuserData = await SyllabusModel.findOne({ name });

      res.send({ status: 1, data: newuserData, message: '课程添加成功' });

    } catch (err) {
      res.send({ status: 0, type: 5001012, message: err.message });
    }

  }

  async remove(req, res, next) {
    const { _id } = req.query;

    if (!_id) {
      res.send({ status: 1, type: 4039902, err: '_id' });
      return;
    }

    try {
      const delData = await SyllabusModel.deleteOne({ _id });
      res.send({ status: 1, data: delData, message: '删除成功' });
    } catch (err) {
      res.send({ status: 0, type: 5001012, message: err.message });
    }
  }

  async update(req, res, next) {
    const { _id, ...other } = req.body;

    try {
      await SyllabusModel.updateOne({ _id }, { $set: other });
      const SyllabusData = await SyllabusModel.findOne({ _id });
      res.send({ status: 1, data: SyllabusData, message: '修改成功' });
    } catch (err) {
      res.send({ status: 0, type: 5001012, message: err.message });
    }
  }
}

module.exports = new Syllabus();
