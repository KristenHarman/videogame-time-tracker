const deleteBtn = document.querySelectorAll('.del')
const gameItem = document.querySelectorAll('span.not')
const gameComplete = document.querySelectorAll('span.completed')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteGame)
})

Array.from(gameItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(gameComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})



async function deleteGame(){
    const gameId = this.parentNode.dataset.id
    try{
        const response = await fetch('games/deleteGame', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'gameIdFromJSFile': gameId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const gameId = this.parentNode.dataset.id
    try{
        const response = await fetch('games/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'gameIdFromJSFile': gameId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const gameId = this.parentNode.dataset.id
    try{
        const response = await fetch('games/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'gameIdFromJSFile': gameId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
