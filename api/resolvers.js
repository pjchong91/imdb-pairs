const data = require("./data");
const helpers = require("./helpers")
const resolvers = {
  Query: {
    movies() {
      return helpers.getMovies();
    },
    people() {
      return helpers.getPeople();
    },
    movie(root, { id }) {
      return helpers.getMovie();
    },
    person(root, { id }) {
      return helpers.getPerson()
    },

  },

  Movie: {
    director(movie) {
      return helpers.getDirector(movie)
    },
    stars(movie) {
      return helpers.getStars(movie)
    },
  },

  Person:{
    filmography(person){
      return helpers.getFilmography(person)   
    }
  },

  Mutation: {
    addPerson(root, args) {
      return helpers.mutateAddPerson(root, args)
    }
  

  }

};
module.exports = resolvers