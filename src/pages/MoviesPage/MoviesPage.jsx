import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies).catch(console.error);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.query.value.trim();
    setSearchParams({ query: searchQuery });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input name="query" type="text" defaultValue={query} placeholder="Search for a movie" />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};     

export default MoviesPage;

