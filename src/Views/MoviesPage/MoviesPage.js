import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearchdMovies } from '../../servise/apiService';
import Searchbar from '../../components/Searchbar/Searchbar';
import MovieList from '../../components/MovieList/MovieList';
import css from '../MoviesPage/MoviesPage.module.css';

const MoviesPage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (location.state) {
      setSearch(location.state.searc);
    }
    if (search) {
      getSearchdMovies(search).then(res => setMovies(res.data.results));
    }
  }, [location.state, search]);

  const handleGetVAlue = value => {
    setSearch(value);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleGetVAlue} />
      <div className={css.box}>
        <MovieList movies={movies} query={search} />
      </div>
    </div>
  );
};

export default MoviesPage;
