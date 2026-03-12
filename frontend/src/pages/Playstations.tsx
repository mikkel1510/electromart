import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductDTO } from '../../../shared/dto/ProductDTO';

const Playstations = () => {
  const [listOfplaystations, setPlaystations] = useState<ProductDTO[]>([]);

  useEffect(() => {
    const fetchPlaystations = async () => {
      try {
        const response = await axios.get<ProductDTO[]>('http://localhost:3001/get-products-by-category?productType=PlayStation');
        setPlaystations(response.data);
      } catch (error) {
        console.error('Error fetching PlayStations:', error);
        setPlaystations([]);
      }
    };

    fetchPlaystations();
  }, []);

  return (
    <div className="content-container">
      <h2>Playstations</h2>
      <div className='product-item-container'>
        {listOfplaystations.map((playstation, index) => (
          <div className='product-item' key={index}>
            <img src={playstation.imageUrl} alt={playstation.title} style={{ width: '100px', height: '100px' }} />
            <h3>{playstation.title}</h3>
            <p>Price: ${playstation.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Playstations;
