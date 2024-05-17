import React from 'react';
import './category.css';
import Card from '../../components/base/card/card';

const Category = () => {
  return (
    <div className='category-container'>
        <nav className='parameter'>
                <a href="/">Home</a> &gt;
                <a href="/category">Category</a> &gt;
                <span>T-Shirt</span>
        </nav>
        <div>
            <h1 className='text-4xl py-10 font-semibold'>T-Shirt</h1>
            <div className='flex flex-row justify-center gap-6 relative right-5'>
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="$40"
                    brand="Prada"
                    rating={4.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="$40"
                    brand="Prada"
                    rating={1.0}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="$40"
                    brand="Prada"
                    rating={3.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="$40"
                    brand="Prada"
                    rating={4.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="$40"
                    brand="Prada"
                    rating={3.5}
                />
            </div>
            <div className='flex flex-row justify-center gap-6 relative right-5 py-5'>
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="$40"
                    brand="Prada"
                    rating={4.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="$40"
                    brand="Prada"
                    rating={3.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="$40"
                    brand="Prada"
                    rating={4.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="$40"
                    brand="Prada"
                    rating={4.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="$40"
                    brand="Prada"
                    rating={4.5}
                />
            </div>
        </div>
    </div>
  )
}

export default Category