import React, { useEffect, useState } from 'react';
import Card from '../../base/card/card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Popular = () => {
    const [ popular, setpopular ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL_BLANJA}/products`)
        .then((res) => {
            const result = res.data.data
            setpopular(result)
        })
        .catch((err) => {
            console.log(err);
        })
    })
  return (
    <div>
        <h1 className='text-4xl font-semibold'>Popular</h1>
        <p className='text-md text-gray-400 py-2'>Find clothes that are trending recently</p>
        <div className='flex flex-row justify-center gap-6 py-5'>
                {popular && popular.map((item) => (
                    <Card
                    key={item.products_id}
                    image={item.image === "" ? "/src/assets/card/No-image-available.png" : item.image}
                    name={item.name}
                    price={item.price}
                    category={item.category}
                    rating={4.5}
                    onClick={() => navigate(`/products/${item.products_id}`)}
                />
                ))}
                {/* <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={1.0}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={3.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={4.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={3.5}
                /> */}
            </div>
            {/* <div className='flex flex-row justify-center gap-6 py-5'>
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={4.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={3.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={4.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={4.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={4.5}
                />
            </div> */}
            {/* <div className='flex flex-row justify-center gap-6 py-5'>
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={3.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={2.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={4.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={1.5}
                />
                <Card
                    image="/src/assets/card/product.svg"
                    name="Men's formal suit - Black & White"
                    price="40"
                    brand="Prada"
                    rating={4.5}
                />
            </div> */}
    </div>
  )
}

export default Popular