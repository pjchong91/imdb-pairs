const data = require("./data");
const resolvers = {
  Query: {
    movies() {
      return data.movies;
    },
    people() {
      return data.people;
    },
    movie(root, { id }) {
      return data.movies.find(movie => movie.id === parseInt(id));
    },
    person(root, { id }) {
      return data.people.find(person => person.id === parseInt(id));
    },

  },

  Movie: {
    director(movie) {
      if (!movie.director) return null;
      return data.people.find(person => person.id === movie.director);
    },
    stars(movie) {
      return data.people.filter(person => (
        person.filmography.find(credit => (
          credit === movie.id && person.id !== movie.director
        ))
      ));
    },
  },

  Person:{
      filmography(person){
          return data.movies.filter(movie => person.filmography.includes(movie.id))
      }
  }

};
module.exports = resolvers