const data = require("./data");
const helpers = {
  getMovies() {
    return data.movies;
  },
  getPeople() {
    return data.people;
  },
  getMovie() {
    return data.movies.find(movie => movie.id === parseInt(id));
  },
  getPerson() {
    return data.people.find(person => person.id === parseInt(id));
  },
  getDirector(movie) {
    if (!movie.director) return null;
    return data.people.find(person => person.id === movie.director);
  },
  getStars(movie) {
    return data.people.filter(person => (
      person.filmography.find(credit => (
        credit === movie.id && person.id !== movie.director
      ))
    ));
  },
  getFilmography(person) {
    return data.movies.filter(movie => person.filmography.includes(movie.id))
  },
  mutateAddPerson(root, args) {
    const newPerson = {
      id: data.people.length + 1,
      name: args.name,
      birthday: args.birthday,
      placeOfBirth: args.placeOfBirth,
      bio: args.bio,
      filmography: args.filmography
    }
    data.people.push(newPerson);
    return newPerson;
  }
  }

module.exports = helpers;