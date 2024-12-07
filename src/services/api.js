import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2M1OWFlYjU5YTU3MzEyZjE2ZDM3ODRhZDFjNWY5ZSIsIm5iZiI6MTczMzQ4MDM4MS44MTc5OTk4LCJzdWIiOiI2NzUyY2ZiZDUxNmVkZWFiMjk5OTM4NDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RHENj0gpLwvXQDeEkdBO-iyJZUxN76ZfODvt1fVmEhA';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_TOKEN,
  },
});

export const searchMovies = async (query) => {
  const response = await axiosInstance.get('/search/movie', {
    params: { query },
  });
  return response.data.results;
};

export const getTrendingMovies = async () => {
  const response = await axiosInstance.get('/trending/movie/day');
  return response.data.results;
};


export const getMovieDetails = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};



