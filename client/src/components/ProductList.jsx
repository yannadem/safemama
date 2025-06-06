import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

export default function ProductList () {
  const [products, setProducts] = useState ([]);
  const [query, setQuery] = useState ('');
  
  useEffect(()=>{
    fetch(`http://localhost:3000/products?search=${query}`)
    .then(res => res.json())
    .then (data => setProducts(data))
    .catch(err => console.error('Error fetching products', err))

  }, [query]);

  return (
    <section>
    <h2>Products</h2>
    <SearchBar onSearch={setQuery}/>
    <ul>
      {
        products.map(prod => (
          <li key={prod._id} className={`product-card ${prod.safety}`}>
            <strong>{prod.name}</strong> - {prod.safety}
            <p>{prod.notes}</p>
            <a href={prod.source} target='_blank'>
              Source
            </a>
          </li>
        ))
      }
    </ul>
    </section>
  );

}