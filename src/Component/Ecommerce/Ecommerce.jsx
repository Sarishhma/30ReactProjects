import React, { useState } from 'react'
import productsData from "./Products";
import { useNavigate } from 'react-router-dom';




export default function Ecommerce({addtocart,cart}) {
    const [category,SetCategory]=useState('all');

    const filterredProducts =
            category==='all'
        ? productsData : productsData.filter(p=>
            p.category === category
        )


  return (
    <div className='text-black'>
        <h1>Ecommerce</h1>
        <p>cart:{cart.length}</p>
        <select onChange={(e)=>SetCategory(e.target.value)} >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
        </select>
       { filterredProducts.map((products)=>(
        <div key={products.id}>
            <h1>{products.name}</h1>
            <h1>${products.price}</h1>
            <h1>{products.category}</h1>
            <button onClick={()=>addtocart(products)}>Add to cart</button>

        </div>
       ))
}
    </div>
  )
}
