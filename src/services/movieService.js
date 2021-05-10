import http from "./httpService";
//import { apiUrl } from "../config.json";
const apiEndpoint = "/movies";
//const apiEndpoint = apiUrl + "/movies";
export function getMovies() {
  return http.get(apiEndpoint);
}
export function getMovie(movieId) {
  return http.get(apiEndpoint + "/" + movieId);
}
const getMovieUrl = id => {
  return `${apiEndpoint}/${id}`;
};
export function saveMovie(movie) {
  if (movie._id) {
    console.log("movie id", movie._id);
    // pass all movie key value to body
    const body = { ...movie };
    // delete movieId property
    delete body._id;
    return http.put(getMovieUrl(movie._id), body);
  }
  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  console.log("delete movieid", movieId);
  return http.delete(getMovieUrl(movieId));
}
