import { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context/Context';
import MovieList from '../../components/MovieList/MovieList';
import { getTrandMovies } from '../../servise/apiService';
import css from '../HomePage/HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const { setValue } = useContext(Context);

  useEffect(() => {
    setValue('');
  }, [setValue]);

  useEffect(() => {
    getTrandMovies().then(response => setMovies(response.data.results));
  }, []);

  return (
    <section className={css.section}>
      <MovieList movies={movies} page="/" />
    </section>
  );
};

export default HomePage;
