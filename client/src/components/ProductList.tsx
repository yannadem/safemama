import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import './ProductList.css';

interface InitialProducts {
  _id: string;
  name: string;
  safety: string;
  category: string;
  notes: string;
  source: string
}

export default function ProductList () {
  const [products, setProducts] = useState<InitialProducts[]>([]);
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('All');

  useEffect(() => {

    let url = `http://localhost:3000/products?search=${query}`;
    if (category !== 'All') {
      url += `&category=${category}`;
    }


    fetch(url)
      .then(res => res.json())
      .then((data: InitialProducts[]) => setProducts(data))
      .catch(err => console.error('Error fetching products', err))

  }, [query, category]);

  // New Delete handler
  const handleDelete = async (id: string) => {
    try {

      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete product');

      // Update list of products
      setProducts(products.filter(prod => prod._id !== id));

    } catch (error) {

      console.error(error);

    }
  };


  return (
    <section>
      <h2>Products</h2>
      <SearchBar onSearch={setQuery} />
      <CategoryFilter onSelectCategory={(cat: string) => {
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

              <div>
                {/* Addition of Delete Product Button */}
                <button
                  onClick={() => handleDelete(prod._id)}
                  aria-label={`Delete product ${prod.name}`}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>


            </li>
          ))
        }
      </ul>
    </section>
  );

}