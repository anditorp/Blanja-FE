import React from 'react';
import './review.css';

const Review = () => {
  const ratingProducts = {
    total: 4,
    stars: [4, 0, 0, 0, 0]
  };

  return (
    <div className="product-review">
      <div>
        <h1 className='flex text-4xl font-semibold'>Product Review</h1>
      </div>
      <div className='flex justify-between px-0 py-36 absolute'>
        <div className='rating-summary flex flex-col'>
          <div className='rating-score'>
            <span>5.0</span>
            <span className='text-gray-400 text-lg'>/10</span>
          </div>
          <div className='stars'>
            {[...Array(5)].map((_, index) => (
              <span key={index} className='star filled'>&#9733;</span>
            ))}
          </div>
        </div>
      </div>
      <div className='rating-breakdown'>
        {ratingProducts.stars.map((count, index) => (
          <div key={index} className='rating-row'>
            <span className='star filled'>&#9733;</span>
            <span className='star-label'>{5 - index}</span>
            <div className='bar-container'>
              <div className='bar' style={{ width: `${(count / ratingProducts.total) * 100}%` }}></div>
            </div>
            <span className='rating-count'>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review