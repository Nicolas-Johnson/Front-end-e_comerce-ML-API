import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Content from '../src/components/Content';

test('Testa o App', () => {
  const myApp = render(<App />);
  const texto = myApp.getByText(/my app/);
  //const content = myApp.getByRole('Route');

  expect(texto).toBeInTheDocument();
  //expect (content).toBeInTheDocument();


  
});
