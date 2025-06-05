import { useState, useEffect } from "react";

export default function ProductList () {
  const [products, setProducts] = useState ([]);
  
  useEffect(()=>{
    fetch('http://localhost:3000/products') // back endpoint
    .then(res => res.json())
    .then (data => setProducts(data))
    .catch(err => console.error('Error fetching products', err))

  }, []);

  return (
    <section>
    <h2>Products</h2>
    <ul>
      {
        products.map(prod => (
          <li key={prod._id}>
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