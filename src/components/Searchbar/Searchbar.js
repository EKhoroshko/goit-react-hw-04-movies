import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const history = useHistory();
  const [values, setValues] = useState('');

  const handleSearchMovies = e => {
    e.preventDefault();
    onSubmit(values);
    history.push({
      pathname: `/movies`,
      search: `query=${values}`,
    });
    setValues('');
  };

  const handleChange = e => {
    setValues(e.currentTarget.value.toLowerCase());
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
            placeholder="Search movies"
            value={values}
            onChange={handleChange}
          />
        </form>
      </header>
    </section>
  );
}

Searchbar.propType = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
