const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Game', GameSchema)
