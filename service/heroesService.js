const Persistence = require("../database/persistence.js")

// En este caso la capa de servicios es trivial, pero en un proyecto real aca se encontraria la
// logica de negocios.

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