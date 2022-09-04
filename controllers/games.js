const Game = require('../models/Game')

module.exports = {
    getGames: async (req,res)=>{
        console.log(req.user)
        try{
            const gameItems = await Game.find({userId:req.user.id})
            const gamesLeft = await Game.countDocuments({userId:req.user.id,completed: false})
            res.render('games.ejs', {games: gameItems, left: gamesLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createGame: async (req, res)=>{
        try{
            await Game.create({game: req.body.gameItem,
            completed: false, userId: req.user.id})
            console.log('Game has been added!')
            res.redirect('/games')
        }catch(err){
            console.log(err)
        }
    },
    // decHealth: async (req, res) => {
    //     try{
    //         await Game.findOneAndUpdate({_id:req.body.gameIdFromJSFile},{
    //             health:  {$gte: 0}}, 
    //             { $inc: {health: -10 } })
    //             console.log('Health  has been decreased!')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    markComplete: async (req, res)=>{
        try{
            await Game.findOneAndUpdate({_id:req.body.gameIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
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