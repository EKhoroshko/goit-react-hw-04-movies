import { useEffect, useState } from 'react';
import { getMoviesByIdReviews } from '../../servise/apiService';
import { useParams } from 'react-router-dom';
import css from '../Reviews/Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const param = useParams();
  const id = param.movieId;

  useEffect(() => {
    getMoviesByIdReviews(id).then(({ data }) => setReviews(data.results));
  }, [id]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(item => (
            <li key={item.id}>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p> We dont have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
