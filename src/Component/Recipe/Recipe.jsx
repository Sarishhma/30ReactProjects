import React, { useState } from 'react'
import  recipes  from '../data';

export default function Recipe() {
    const [search,setsearch]=useState('')
        const [category,setcategory]=useState("All");

        const filteredRecipe = recipes.filter((recipe)=>{
        const matchSearch = recipe.name.toLowerCase().includes(search.toLowerCase());

        const matchCategory= category ==="All" || recipe.category=== category;
        return matchCategory && matchSearch;
        })
            
  return (
    <div>
        <h1>Recipe App</h1>
        <input type="text" placeholder='search for recipes' value={search} onChange={(e)=>setsearch(e.target.value)} />
        <select value={category} onChange={(e)=>setcategory(e.target.value)}>
            <option value="All">All</option>
            <option value="veg">veg</option>
            <option value="Non-veg">Non -veg</option>
        </select>
        {filteredRecipe.map((m)=>(
            <div key={m.id}>
                <img src={m.image} alt="m.name" />
                 <p>{m.name}</p>
                <p>{m.category}</p>
            </div>
        ))}
    </div>
  )
}
