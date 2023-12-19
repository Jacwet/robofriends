import React from 'react';
import {render, fireEvent, screen, wrapper, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import CounterButton from './CounterButton';


const mockColor = 'red'

it('renders', () => {
  const { asFragment } = render(<CounterButton color={mockColor} />);
  expect(asFragment()).toMatchSnapshot();
});

it('correctly incraments the counter', async () => {
  render(<CounterButton color={mockColor} />)
  const button = screen.getByRole('button')
  await button.click();
  expect(button).toHaveTextContent("1")

})

it('correctly incraments the counter2', async () => {
  render(<CounterButton color={'red'} />)
  const button = screen.getByRole('button')
  expect(button).toHaveTextContent("blue")
})