const Persistence = require("../database/persistence.js")

class HeroesService {
    
    static getHeroesByVotes() {
        return Persistence.getHeroesByVotes()
    }

    static getPublisherByVotes() {
        return Persistence.getPublisherByVotes()
    }

    static incrementVote(superhero) {
        return Persistence.incrementVote(superhero)
    }
}

module.exports = HeroesService