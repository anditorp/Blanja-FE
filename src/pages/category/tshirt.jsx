import React, { useEffect, useState } from 'react';
import './category.css';
import Card from '../../components/base/card/card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Tshirt = () => {
    const navigate = useNavigate();
    const [ tshirt, setTshirt ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL_BLANJA}/products/category/t-shirt`)
            .then((res) => {
                const result = res.data.data
                setTshirt(result);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    })

    const imageDefault = '../../../public/No-image-available.png';

    return (
        <div className='category-container'>
            <nav className='parameter'>
                <a href="/home">Home</a> &gt;
                <a href="/category">Category</a> &gt;
                <span>T-Shirt</span>
            </nav>
            <div>
                <h1 className='text-4xl py-10 font-semibold'>T-Shirt</h1>
                <div className='flex justify-center'>
                {loading ? (
                    <p className='text-4xl font-medium'>Loading...</p>
                ) : tshirt.length > 0 ? (
                    <div className='flex flex-row gap-6 relative right-5'>
                        {tshirt && tshirt.map((item) => (
                            <Card
                                key={item.products_id}
                                image={item.image || imageDefault}
                                name={item.name}
                                price={item.price}
                                category={item.category}
                                rating={4.5}
                                onClick={() => navigate(`/products/${item.products_id}`)}
                            />
                        ))}
                    </div>
                ) : (
                    <p className='text-4xl font-medium'>T-Shirt Unavailable</p>
                )}
                </div>
            </div>
        </div>
    );
}

export default Tshirt