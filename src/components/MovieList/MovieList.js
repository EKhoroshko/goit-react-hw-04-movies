import { NavLink, useLocation } from 'react-router-dom';
import css from '../MovieList/MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(item => (
        <li className={css.item} key={item.id}>
          <NavLink
            className={css.selected}
            to={{ pathname: `/movies/${item.id}`, state: { from: location } }}
          >
            <h3 className={css.title}>{item.title}</h3>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
