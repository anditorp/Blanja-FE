import React, { useEffect, useState } from 'react';
import Card from '../../base/card/card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './popular.css';

const Popular = () => {
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 5,
        page: 1,
        totalData: 0,
    });
    const navigate = useNavigate();

    const fetchData = (page) => {
        axios({
            method: "GET",
            url: `${import.meta.env.VITE_URL_BLANJA}/products`,
            params: {
                page: page,
                limit: pagination.limit,
            },
        })
            .then((res) => {
                const result = res.data.data;
                const { limit, page, totalData } = res.data.pagination;
                setProducts(result);
                setPagination({ limit, page, totalData });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData(1);
    }, []);

    const seeMore = () => {
        navigate('/search');
    }

    return (
        <div>
            <h1 className='text-4xl font-semibold'>Popular</h1>
            <p className='text-md text-gray-400 py-2'>Find clothes that are trending recently</p>
            <div className='grid-container'>
                {products && products.map((item) => (
                    <div className='grid-item' key={item.products_id}>
                        <Card
                            image={item.image === "" ? "/src/assets/card/No-image-available.png" : item.image}
                            name={item.name}
                            price={item.price}
                            category={item.category}
                            rating={4.5}
                            onClick={() => navigate(`/products/${item.products_id}`)}
                        />
                    </div>
                ))}
                <div onClick={seeMore} className='relative top-5 cursor-pointer text-gray-500 hover:text-red-maroon text-2xl z-10'>
                    <p><strong>See More...</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Popular