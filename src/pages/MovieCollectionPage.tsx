import React from 'react';
import movieData from '../MovieData.json';

function MovieCollectionPage() {
  return (
    <div>
      <h1>Movie Collection</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
            {/* pull data from our data file and put it onto the page, repeatedly */}
          {movieData.MovieData.map((movie, index) => (
            <tr key={index}>
              <td>{movie.Category}</td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Director}</td>
              <td>{movie.Rating}</td>
              <td>{movie.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieCollectionPage;