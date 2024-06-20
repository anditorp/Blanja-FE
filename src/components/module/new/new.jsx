import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../base/card/card';
import axios from 'axios';

const New = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: (`${import.meta.env.VITE_URL_BLANJA}/products/`)
    })
      .then((res) => {
        const result = res.data.data;
        setProducts(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className='text-4xl font-semibold'>New</h1>
      <p className='text-md text-gray-400 py-2'>You’ve never seen it before!</p>
      <div className='flex flex-row justify-center gap-6 py-5'>
        {products && products.map((item) => (
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
      </div>
    </div>
  );
};

export default New;
