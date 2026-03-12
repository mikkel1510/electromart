import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ProductDTO} from "../../../shared/dto/ProductDTO";

const Laptops = () => {
  const [listOflaptops, setLaptops] = useState<ProductDTO[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductDTO[]>('http://localhost:3001/get-products-by-category?productType=Laptop');
        setLaptops(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLaptops([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="content-container">
      <h2>Laptops</h2>
      <div className='product-item-container'>
        {listOflaptops.map((laptop, index) => (
          <div className='product-item' key={index}>
            <img src={laptop.imageUrl} alt={laptop.title} style={{ width: '100px', height: '100px' }} />
            <h3>{laptop.title}</h3>
            <p>Price: ${laptop.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Laptops;
