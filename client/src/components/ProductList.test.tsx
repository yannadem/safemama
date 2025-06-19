import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';


it(' renders title, search bar, product list', () => {
  render(<ProductList />);
  expect(screen.getByText('Products')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
});