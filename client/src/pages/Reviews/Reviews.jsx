
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const RatingAndReview = () => {
  const [rating, setRating] = useState(null);  // Current rating selected by the user
  const [hover, setHover] = useState(null);    // To change star color on hover
  const [reviews, setReviews] = useState([]);  // List of submitted reviews
  const [reviewText, setReviewText] = useState('');  // Text of the current review

  // Submit the review
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && reviewText) {
      const newReview = {
        id: reviews.length + 1,
        rating,
        text: reviewText,
      };
      setReviews([...reviews, newReview]);
      setRating(null);
      setReviewText('');
    }
  };

  // Calculate rating percentages
  const calculatePercentage = (ratingValue) => {
    const totalReviews = reviews.length;
    const ratingCount = reviews.filter((review) => review.rating === ratingValue).length;
    return totalReviews > 0 ? ((ratingCount / totalReviews) * 100).toFixed(1) : 0;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column: Rating and Review Form */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Leave a Review</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Rate your experience:</h3>
            <div className="flex space-x-2">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      className="hidden"
                    />
                    <FaStar
                      className={`cursor-pointer text-3xl ${
                        ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <div className="mb-4">
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              rows="4"
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Right Column: Rating Percentages */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4">Rating Distribution</h3>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => {
            const ratingValue = 5 - i; // Display from 5 stars to 1 star
            return (
              <div key={i} className="flex items-center">
                <span className="flex items-center mr-4">
                  {[...Array(5)].map((_, j) => (
                    <FaStar
                      key={j}
                      className={`text-xl ${
                        j < ratingValue ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </span>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{ width: `${calculatePercentage(ratingValue)}%` }}
                  ></div>
                </div>
                <span className="ml-4 text-gray-600">{calculatePercentage(ratingValue)}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="col-span-1 md:col-span-2 mt-8">
        <h3 className="text-2xl font-semibold mb-4">Reviews:</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Be the first to leave a review!</p>
        ) : (
          <ul className="space-y-4">
            {reviews.map((review) => (
              <li key={review.id} className="bg-white shadow-lg rounded-lg p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((star, i) => (
                    <FaStar
                      key={i}
                      className={`text-2xl ${
                        i + 1 <= review.rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{review.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RatingAndReview;
