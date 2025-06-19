/// <reference types="vitest" />

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewProductForm from './NewProductForm';


describe('NewProductForm', () => {
  it('renders the form with title and submit button', () => {
    render(<NewProductForm />);

    expect(screen.getByText('Add New Product')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create' })).toBeInTheDocument();
  });

  it('allows user to type into the Product Name input', async () => {
  render(<NewProductForm />);
  const input = screen.getByPlaceholderText('Product name');
  await userEvent.type(input, 'Test Product');
  expect(input).toHaveValue('Test Product');
});

  it('allows user to select a safety risk level', async () => {
  render(<NewProductForm />);
  const select = screen.getByLabelText('Risk Level');
  await userEvent.selectOptions(select, 'safe');
  expect(select).toHaveValue('safe');
});

});


