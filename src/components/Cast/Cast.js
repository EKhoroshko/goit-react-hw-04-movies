import { getMoviesByIdCost } from '../../servise/apiService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from '../Cast/Cast.module.css';

const Cost = () => {
  const [cost, setCost] = useState([]);
  const param = useParams();
  const id = param.movieId;

  useEffect(() => {
    getMoviesByIdCost(id).then(({ data }) => setCost(data.cast));
  }, [id]);

  return (
    <div className={css.box}>
      {cost.length > 0 ? (
        <ul className={css.list}>
          {cost.map(item => (
            <li className={css.item} key={item.id}>
              <img
                className={css.avatar}
                src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                alt={item.name}
              />
              <p className={css.text}>{item.name}</p>
              <p className={css.descr}>Character: {item.character} </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We dont have any cost for this movie</p>
      )}
    </div>
  );
};

export default Cost;
