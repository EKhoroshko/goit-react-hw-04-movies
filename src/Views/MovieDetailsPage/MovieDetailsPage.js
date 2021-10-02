import { getMoviesById } from '../../servise/apiService';
import { useState, useEffect, Suspense, lazy } from 'react';
import {
  useRouteMatch,
  useLocation,
  useHistory,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import css from '../MovieDetailsPage/MovieDetailsPage.module.css';

const Cost = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

const MovieDetailsPage = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    getMoviesById(match.params.movieId).then(({ data }) => {
      const getDate = data.release_date.slice(0, 4);
      setMovieInfo({ ...data, getDate });
    });
  }, [match.params.movieId]);

  const goBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <div className={css.box}>
      <button className={css.button} type="button" onClick={goBack}>
        Go Back
      </button>
      <div className={css.flex} key={movieInfo.id}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`}
          alt="title"
        />
        <div className={css.wrapper}>
          <h2>
            {movieInfo.title} ({movieInfo.getDate})
          </h2>
          <p> User Score: {movieInfo.vote_average}</p>
          <h4>Overview</h4>
          <p>{movieInfo.overview}</p>
          <h4>Genres:</h4>
          <ul>
            {movieInfo.genres &&
              movieInfo.genres.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <h5>Additional information</h5>
        <ul>
          <li>
            <Link to={`${match.url}/cost`}>Cost</Link>
          </li>
          <li>
            <Link to={`${match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Switch>
            <Route path={`${match.path}/cost`} component={Cost} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
