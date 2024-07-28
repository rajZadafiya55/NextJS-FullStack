'use client'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let data = await fetch('https://dummyjson.com/products');
    let result = await data.json();
    setProducts(result.products)
    console.log(products)
  }, [products])
  return (
    <div>
      <h1>Products</h1>
      {
        products.map((item) => (
          <h3>Name : {item.title}</h3>
        ))
      }
    </div>

  )
}

export default Products