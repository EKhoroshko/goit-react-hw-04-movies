import axios from 'axios';
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

const KEY = '494b2b5ea2ae23dbb3e89fabdc88e3f6';

async function getTrandMovies() {
  const response = await axios.get(`trending/movie/week?api_key=${KEY}`);
  return response;
}

async function getSearchdMovies(value) {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&include_adult=false&query=${value}`,
  );
  return response;
}

async function getMoviesById(id) {
  const response = await axios.get(`movie/${id}?api_key=${KEY}`);
  return response;
}

async function getMoviesByIdCost(id) {
  const response = await axios.get(`movie/${id}/credits?api_key=${KEY}`);
  return response;
}

async function getMoviesByIdReviews(id) {
  const response = await axios.get(`movie/${id}/reviews?api_key=${KEY}`);
  return response;
}

export {
  getTrandMovies,
  getSearchdMovies,
  getMoviesById,
  getMoviesByIdReviews,
  getMoviesByIdCost,
};
