const Game = require('../models/Game')

module.exports = {
    getGames: async (req,res)=>{
        console.log(req.user)
        try{
            const gameItems = await Game.find({userId:req.user.id})
            const gamesLeft = await Game.countDocuments({userId:req.user.id,completed: false})
            res.render('games.ejs', {games: gameItems, left: gamesLeft,  user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createGame: async (req, res)=>{
        try{
            await Game.create({title: req.body.gameItem, hours: req.body.hoursPlayed, day: req.body.dayPlayed,
            completed: false, userId: req.user.id})
            console.log('Game has been added!')
            res.redirect('/games')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Game.findOneAndUpdate({_id:req.body.gameIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.redirect('/games')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Game.findOneAndUpdate({_id:req.body.gameIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteGame: async (req, res)=>{
        console.log(req.body.gameIdFromJSFile)
        try{
            await Game.findOneAndDelete({_id:req.body.gameIdFromJSFile})
            console.log('Deleted Game')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    