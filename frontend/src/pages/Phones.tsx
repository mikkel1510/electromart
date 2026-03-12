import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductDTO } from '../../../shared/dto/ProductDTO';

const Phones = () => {
  const [listOfphones, setPhones] = useState<ProductDTO[]>([]);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get<ProductDTO[]>('http://localhost:3001/get-products-by-category?productType=Phone');
        setPhones(response.data);
      } catch (error) {
        console.error('Error fetching phones:', error);
        setPhones([]);
      }
    };

    fetchPhones();
  }, []);

  return (
    <div className="content-container">
      <h2>Phones</h2>
      <div className='product-item-container'>
        {listOfphones.map((phone, index) => (
          <div className='product-item' key={index}>
            <img src={phone.imageUrl} alt={phone.title} style={{ width: '100px', height: '100px' }} />
            <h3>{phone.title}</h3>
            <p>Price: ${phone.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Phones;
