import React, { useState, useEffect } from 'react';
import { getMoviesService } from 'service/GetMoviesService';

const { useParams } = require('react-router-dom');

export const Reviews = () => {
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMoviesService(URL)
      .then(results => {
        setReviews(results);
      })
      .catch(error => console.error(error));
  }, [URL]);

  return reviews.total_results ? (
    <ul>
      {reviews.results &&
        reviews.results.map(element => {
          return (
            <li key={element.id}>
              <h3>{element.author}</h3>
              <p>{element.content}</p>
            </li>
          );
        })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
};
