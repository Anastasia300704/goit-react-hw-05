import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/api';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast).catch(console.error);
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast; 

