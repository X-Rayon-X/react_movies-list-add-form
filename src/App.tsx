import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';

export const App = () => {
  const addMovie = (movie: Movie) => {
    const newMovie = {
      ...movie,
      imdbId: movie.imdbUrl.slice(-9),
    };

    moviesFromServer.push(newMovie);
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={moviesFromServer} />
      </div>
      <div className="sidebar">
        <NewMovie onAdd={addMovie} />
      </div>
    </div>
  );
};
