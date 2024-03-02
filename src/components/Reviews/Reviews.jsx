import React, { useState, useEffect } from 'react';
import { getMovieReviewsApi } from '../../api/moviesApi';
import './Reviews.css';
import useLocation from '../../hooks/useLocation';

const Reviews = () => {
  const location = useLocation();
  const movieId = location.pathname.split('/')[2];

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await getMovieReviewsApi(movieId);
        setReviews(response.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className="reviews-container">
      <h3 className="reviews-title">Reviews</h3>
      {loading && <p className="reviews-loading">Loading reviews...</p>}
      {error && (
        <p className="reviews-error">Error fetching reviews: {error}</p>
      )}
      <ul className="reviews-list">
        {reviews.map(review => (
          <li className="review-item" key={review.id}>
            {review.author_details.avatar_path && (
              <img
                className="review-author-avatar"
                src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
                alt={review.author}
              />
            )}
            {review.content}
            <p className="review-author">{review.author}</p>
            <p className="review-created-at">
              {new Date(review.created_at).toLocaleDateString()}
            </p>
            <hr />
            <p className="review-rating">
              Rating: {review.author_details.rating}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
