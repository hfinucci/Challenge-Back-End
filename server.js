
const HeroesService = require("./service/HeroesService.js")

const express = require("express")
var bodyParser = require('body-parser')
const app = express()

var jsonParser = bodyParser.json()


// ENDPOINTS 

app.post('/api/v1/votes', jsonParser, (request, response) => {
    const result = HeroesService.incrementVote(request.body['superhero'])
    if (result == -1)
        response.send("Error: Invalid request")
    else
        response.send(result)
})

app.get('/api/v1/votes/heroes', (request, response) => {
    const result = HeroesService.getHeroesByVotes()
    if (result.length != 0)
        response.send(result)
    else 
        response.send("No hero was voted")
})

app.get('/api/v1/votes/publisher', (request, response) => {
    const map = HeroesService.getPublisherByVotes()
    const result = []
    map.forEach((value, key) => {
        result.push({"publisher":key, "votes":value})
    });
    response.send(result)
})


app.listen(3000)


