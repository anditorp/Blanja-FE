import React, { useEffect, useState } from 'react';
import Card from '../../base/card/card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import defaultImage from '../../../../public/No-image-available.png';

const Recommend = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

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

  const imageDefault = '/notfound.png';

    return (
        <div>
            <h1 className='text-4xl font-semibold'>You can also like this</h1>
            <p className='text-md text-gray-400 py-2'>You’ve never seen it before!</p>
            <div className='flex flex-row justify-center gap-6 py-5 relative right-10'>
                {products && products.map((item) => (
                    <Card
                        key={item.products_id}
                        image={item.image === "" ? imageDefault : item.image}
                        name={item.name}
                        price={item.price}
                        category={item.category}
                        rating={4}
                        onClick={() => navigate(`/products/${item.products_id}`)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Recommend;
