import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import './ProductList.css';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {

    let url = `http://localhost:3000/products?search=${query}`;
    if (category !== 'All') {
      url += `&category=${category}`;
    }


    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products', err))

  }, [query, category]);

  return (
    <section>
      <h2>Products</h2>
      <SearchBar onSearch={setQuery} />
      <CategoryFilter onSelectCategory={(cat) => {  
        setCategory(cat);
      }} />


      <ul>
        {
          products.map(prod => (
            <li key={prod._id} className={`product-card ${prod.safety}`}>
              <strong>{prod.name}</strong> - {prod.safety}
              <p>{prod.notes}</p>
              <a className="source" href={prod.source} target='_blank'>
                Source
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );

}