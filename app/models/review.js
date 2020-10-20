const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}}, {
  timestamps: true
})

module.exports = reviewSchema
// module.exports = mongoose.model('Review', reviewSchema)
