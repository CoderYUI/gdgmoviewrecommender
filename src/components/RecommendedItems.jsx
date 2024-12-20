import React from 'react';

const RecommendedItems = ({ movies }) => {
  return (
    <div>
      <h2>Recommended Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h3>{movie.Title}</h3>
            <p>{movie.Plot}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedItems;
