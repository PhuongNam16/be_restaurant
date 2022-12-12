const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const userSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    title_note: {
      type: String,
    },
    trade_story: {
      type: String,
    },
    trade_story_note: {
      type: String,
    },
    introduction: {
      type: String,
    },
    hotline: {
      type: String,
    },
    footer_title: {
      type: String,
    },
    list_adrress: {
      type: Array,
    },
    special_menu: {
      type: Array,
    },
    
    news: {
      type: Array,
    }
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);


// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });
/**
 * @typedef User
 */
const Comment = mongoose.model('Contentpagehome', userSchema);

module.exports = Comment;
