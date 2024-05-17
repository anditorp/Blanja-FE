import React, { useState } from 'react';
import './product.css';

import tshirt1 from '../../assets/products/tshirt1.svg';
import ProductInfo from '../../component/module/productpage/productInfo';
import Review from '../../component/module/product review/review';
import Recommend from '../../component/module/recommend/recommend';
import Button from '../../component/base/button/button';
import ButtonWhite from '../../component/base/button/buttonwhite';

const Product = () => {
    const images = [
        tshirt1
    ];

    const totalStars = 5;
    const [mainImage, setMainImage] = useState(images[0]);
    const [selectedColor, setSelectedColor] = useState('black');
    const [size, setSize] = useState('0');
    const [quantity, setQuantity] = useState('0');

    const colors = [
        { name: 'Black', value: 'black' },
        { name: 'Red', value: 'red' },
        { name: 'Blue', value: 'blue' },
        { name: 'Green', value: 'green' }
    ];

    const handleSizeChange = (increment) => {
        setSize(prevSize => Math.max(0, prevSize + increment));
    }

    const handleQuantityChange = (increment) => {
        setQuantity(prevQuantity => Math.max(0, prevQuantity + increment));
    }

    return (
        <div className='product-container'>
            <nav className='parameter'>
                <a href="/">Home</a> &gt;
                <a href="/category">Category</a> &gt;
                <span>T-Shirt</span>
            </nav>
            <div>
                <div className='flex py-10 gap-10'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`thumbnail ${index + 1}`}
                            className='thumbnail'
                            onClick={() => setMainImage(image)}
                        />
                    ))}
                    <div>
                        <h1 className='text-4xl font-semibold'>Baju muslim pria</h1>
                        <p className='text-lg font-medium text-gray-400 py-5'>Zalora Cloth</p>
                        <div className='relative bottom-5 text-gray-400'>
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className='star filled'>&#9733;</span>
                            ))}
                            (10)
                        </div>
                        <div>
                            <p className='text-lg font-medium text-gray-400'>Price</p>
                            <h1 className='text-4xl font-bold'>$ 20.0</h1>
                        </div>
                        <div className='py-5'>
                            <p className='text-gray-700 font-medium'>Color</p>
                            <div className='color-options'>
                                {colors.map((color) => (
                                    <label key={color.value} className='color-label'>
                                        <input
                                            type='radio'
                                            name='color'
                                            value={color.value}
                                            checked={selectedColor === color.value}
                                            onChange={() => setSelectedColor(color.value)}
                                        />
                                        <span className='color-circle' style={{ backgroundColor: color.value }}></span>
                                    </label>
                                ))}
                            </div>
                            <div className='addproduct flex flex-row gap-10 py-5 font-medium'>
                                <div>
                                    <label className='right-4'>Size</label>
                                    <div className='control'>
                                        <button onClick={() => handleSizeChange(-1)}>-</button>
                                        <span>{size}</span>
                                        <button onClick={() => handleSizeChange(+1)}>+</button>
                                    </div>
                                </div>
                                <div>
                                    <label className='right-4'>Quantity</label>
                                    <div className='control'>
                                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={() => handleQuantityChange(+1)}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row gap-5 text-center'>
                                <ButtonWhite 
                                    className="bg-white w-36 text-gray-700 hover:text-white"
                                    name="Chat"
                                />
                                <ButtonWhite 
                                    className="bg-white w-36 text-gray-700 hover:text-white"
                                    name="Add bag"
                                />
                                <Button 
                                    name="Buy Now" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div>
                    <ProductInfo />
                </div>
                <div className='absolute py-88'>
                    <Review />
                </div>
                <div className='relative top-80'>
                    <hr />
                    <div className='py-5'>
                        <Recommend />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
