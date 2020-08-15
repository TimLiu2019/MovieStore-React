import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLike = (movie)=>{
    const movies =[...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] ={...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
    console.log('Like clicked',movie);
  };
  render() {
    if (this.state.movies.length === 0)
      return <p> There are no movies in the database</p>;
    return (
      <React.Fragment>
        <p> Showing {this.state.movies.length} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Grere</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onClick={() =>this.handleLike(movie)} />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
