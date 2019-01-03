import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: '输入姓',
  },
  lastName: {
    type: String,
    required: '输入名',
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
  update_date: {
    type: Date,
  }
});