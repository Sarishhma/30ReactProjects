import React, { useState } from 'react'

export default function Cart({cart}) {
  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

