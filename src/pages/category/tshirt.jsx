import React, { useEffect, useState } from 'react';
import './category.css';
import Card from '../../components/base/card/card';
import axios from 'axios';

const Tshirt = () => {
    const [ tshirt, setTshirt ] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL_BLANJA}/products`)
        .then((res) => {
            const result = res.data.data
            setTshirt(result)
        })
        .catch((err) => {
            console.log(err);
        })
    })

  return (
    <div className='category-container'>
        <nav className='parameter'>
                <a href="/home">Home</a> &gt;
                <a href="/category">Category</a> &gt;
                <span>T-Shirt</span>
        </nav>
        <div>
            <h1 className='text-4xl py-10 font-semibold'>T-Shirt</h1>
            <div className='flex flex-row gap-6 relative right-5'>
            {tshirt && tshirt.map((item) => (
                    <Card
                    key={item.products_id}
                    image={item.image === "" ? "/src/assets/card/No-image-available.png" : item.image}
                    name={item.name}
                    price={item.price}
                    category={item.category}
                    rating={4.5}
                />
                ))}
            </div>
            {/* <div className='flex flex-row justify-center gap-6 relative right-5 py-5'>
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
            </div> */}
        </div>
    </div>
  )
}

export default Tshirt