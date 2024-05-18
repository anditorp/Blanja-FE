import React from 'react';

const Card = ({ image, name, price, category, rating, classname }) => {
    const renderRatingStars = () => {
        const maxRating = 5;
        const filledStars = Math.round(rating);

        const stars = [];

        for (let i = 0; i < maxRating; i++) {
            if (i < filledStars) {
                stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300">&#9734;</span>);
            }
        }

        return stars;
    };

    return (
        <div className={`bg-white w-56 h-72 shadow-md ${classname}`}>
            <img className="py-5 px-3" src={image} alt="image" />
            <h2 className="text-md font-semibold relative bottom-28 pl-6 pr-3">{name}</h2>
            <h2 className="relative bottom-28 text-red-maroon text-xl font-semibold pl-6 pr-3">${price}</h2>
            <p className="relative bottom-28 text-gray-400 text-sm pl-6 pr-3">{category}</p>
            <div className="relative bottom-28 text-yellow-400 pl-6 pr-3">
                {renderRatingStars()}
            </div>
        </div>
    );
};

export default Card;
