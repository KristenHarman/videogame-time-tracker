const express = require('express')
const router = express.Router()
const gamesController = require('../controllers/games') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, gamesController.getGames)

router.post('/createGame', gamesController.createGame)

router.put('/markComplete', gamesController.markComplete)

// router.put('/decHealth', gamesController.decHealth)

router.put('/markIncomplete', gamesController.markIncomplete)

router.delete('/deleteGame', gamesController.deleteGame)

module.exports = router