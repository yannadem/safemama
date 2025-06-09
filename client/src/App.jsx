import './App.css';
import ProductList from './components/ProductList';

export default function App() {


  return (
      <> 
      <header className='hero'> 
      <h1>SafeMama 🍼</h1>
      <p className='tagline'>Check if a product is safe to use during pregnancy</p>
      </header>
      <section className='content-card'> 
      <main>
  
      <ProductList/>
    </main>
    </section>
    </>
  );
}
