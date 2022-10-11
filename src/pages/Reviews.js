import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieReviews from 'API/get-movie-reviews';
import ReviewsList from 'components/ReviewsList';





function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => {
      const reviewsArray = [];

      results.map(({ id, author, content }) => {
        const review = {
          id, author, text: content,
        };

        return reviewsArray.push(review);
      });

      setReviews(reviewsArray);
    });
  }, [movieId]);

  return reviews && reviews.length > 0 ? (
    <ReviewsList reviews={reviews} />
  ) : (
    <>
      <h2> We don't have reviews</h2>
    </>
  );
}
export default Reviews;
