const express = require('express')
const router = express.Router()

// require restaurant model
const Anime = require('../models/anime')
const handle404 = require('../lib/custom_errors')

router.post('/animes', (req, res, next) => {
  // store the incoming request's review data
  const reviewData = req.body.review

  // extract the restaurant we want to see on the page
  const animeId = reviewData.animeId
  Anime.findById(animeId)
      // if we cant find a restaurant, cause a 404 not found error to occur
      .then(handle404)
      .then(anime => {
        // create a new review, by pushing it into the restaurant's subdocument array
        anime.reviews.push(reviewData)

        // save the restaurant document
        return anime.save()
      })
      // respond w/ 201 created and our restaurant which contains the new review
      .then(anime => res.status(201).json({ anime }))
  })

module.exports = router
