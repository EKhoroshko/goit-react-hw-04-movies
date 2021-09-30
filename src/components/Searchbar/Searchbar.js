import { useState } from 'react';
import PropTypes from 'prop-types';
import { getSearchdMovies } from '../../servise/apiService';
import MovieList from '../MovieList/MovieList';
import css from '../Searchbar/Searchbar.module.css';

function Searchbar() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearchMovies = e => {
    e.preventDefault();
    getSearchdMovies(value).then(res => setMovies(res.data.results));
  };

  const handleChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  return (
    <section>
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSearchMovies}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            value={value}
            onChange={handleChange}
          />
        </form>
      </header>
      <div className={css.box}>
        <MovieList movies={movies} page="/movies" />
      </div>
    </section>
  );
}

Searchbar.propType = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
