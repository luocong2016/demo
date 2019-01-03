const mongoose = require('mongoose');
const { Schema } = mongoose;

const syllabusSchema = new Schema({
  name: String,
  time: Number,
  discription: String,
  status: { type: Number, default: 1 },
}, { autoIndex: false });

syllabusSchema.index({ id: 1 });

module.exports = mongoose.model('syllabus', syllabusSchema);