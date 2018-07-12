const data = require("./data");
const resolvers = {
  Query: {
    movies() {
      return data.movies;
    },
    movie(root, { id }) {
      return data.movies.find(movie => movie.id === parseInt(id));
    }
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

};
module.exports = resolvers