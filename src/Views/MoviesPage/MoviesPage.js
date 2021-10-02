import { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context/Context';
import { getSearchdMovies } from '../../servise/apiService';
import Searchbar from '../../components/Searchbar/Searchbar';
import MovieList from '../../components/MovieList/MovieList';
import css from '../MoviesPage/MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const { value } = useContext(Context);

  useEffect(() => {
    getSearchdMovies(value).then(res => setMovies(res.data.results));
  }, [value]);

  return (
    <div className="App">
      <Searchbar></Searchbar>
      <div className={css.box}>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default MoviesPage;
