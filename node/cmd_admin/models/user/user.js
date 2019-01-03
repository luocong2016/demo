const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  user: String,
  password: String,
  name: String,
  phone: Number,
  avatar: String,
  sex: { type: Number, default: 1 },
  status: { type: Number, default: 1 },
  roles: { type: Array, default: ['0'] },
  log: Array,
  create_time: { type: Date, default: Date.now },
  wechat: {
    authentication: String,
  },
  
}, { autoIndex: false }  // index 会显著影响性能
);

userSchema.index({ id: 1 });

module.exports = mongoose.model('User', userSchema);
