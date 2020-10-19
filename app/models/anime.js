const mongoose = require('mongoose')
const reviewSchema = require('./review')

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  translation: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  episodes:{
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Anime', animeSchema)
