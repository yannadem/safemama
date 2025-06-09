import './App.css';
import ProductList from './components/ProductList';
import NewProductForm from './components/NewProductForm';

export default function App() {


  return (
      <> 
      <header className='hero'> 
      <h1>SafeMama 🍼</h1>
      <p className='tagline'>Check if a product is safe to use during pregnancy</p>
      </header>
      <section className='content-card'> 
      <main>
      <NewProductForm/>
      <ProductList/>
      
    
    </main>
    </section>
    </>
  );
}
