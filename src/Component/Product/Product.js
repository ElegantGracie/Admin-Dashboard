import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Product.css'
import Dashboard from '../Dashboard/Dashboard';

function Product() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakerapi.it/api/v1/products?_quantity=15')
    .then( response => setProducts(response.data.data) )
  }, [])
  console.log(products);

  return (
    <div className='main'>
      
      <div className='dashboard'>
        <Dashboard />
      </div>

      <div className='container'>
        <div>
          <h1>Products</h1>
        </div>
        <div className='products'>
          
          {
            products ? products.map((product, idx) => (
              <div className='products-card'>
                <div className='products-image'>
                  <img src={product.image} alt='' />
                </div>

                <div className='products-text'>
                  <h4>{product.name}</h4>
                  <p>{product.net_price}</p>
                  <p>{product.taxes}</p>
                  <h5>{product.price}</h5>
                </div>
              </div>
            )) : null
          }
        </div>
      </div>

    </div>
  )
}

export default Product