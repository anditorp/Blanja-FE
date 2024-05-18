import { React, useEffect, useState } from 'react';
import Card from '../../base/card/card';
import axios from 'axios';

const New = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: (`${import.meta.env.VITE_URL_BLANJA}/products`)
        })
            .then((res) => {
                const result = res.data.data
                setProducts(result)
            })
            .catch((err) => {
                console.log(err);
            })
    })

    // console.log(products, '<<<products')

    return (
        <div>
            <h1 className='text-4xl font-semibold'>New</h1>
            <p className='text-md text-gray-400 py-2'>You’ve never seen it before!</p>
            <div className='flex flex-row justify-center gap-6 py-5'>
                {products && products.map((item) => (
                    <Card
                        key={item.products_id}
                        image={item.image === "" ? "/src/assets/card/product.svg" : item.image}
                        name={item.name}
                        price={item.price}
                        category={item.category}
                        rating={4.5}
                    />
                ))}
                {/* 
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
                /> */}
            </div>
            {/* <div className='flex flex-row justify-center gap-6 py-5'>
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
            {/* <div className='flex flex-row justify-center gap-6 py-5'>
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
                    rating={2.5}
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
                    rating={1.5}
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
    )
}

export default New