import React, { useEffect, useRef } from 'react';

const Card = ({ image, name, price, category, rating, classname, onClick }) => {
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
    
    const imageRef = useRef(null);

    useEffect(() => {
        const img = imageRef.current;
        if (img) {
            img.style.width = '100%'
            img.style.height = '100%'
            img.style.objectFit = 'contain'
        }
    }, [])

    return (
        <div onClick={onClick} className={`bg-white w-56 h-72 shadow-md cursor-pointer ${classname}`}>
            <img className="relative bottom-14 px-10" ref={imageRef} src={image} alt="image" />
            <div className='flex flex-col relative bottom-14'>
            <h2 className="text-md font-semibold relative bottom-14 pl-6 pr-3">{name}</h2>
            <h2 className="relative bottom-14 text-red-maroon text-xl font-semibold pl-6 pr-3">${price}</h2>
            <p className="relative bottom-14 text-gray-400 text-sm pl-6 pr-3">{category}</p>
            <div className="relative bottom-14 text-yellow-400 pl-6 pr-3">
                {renderRatingStars()}
            </div>
            </div>
        </div>
    );
};

export default Card;
