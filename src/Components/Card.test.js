import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe("Card test", () => {
  const renderCard= () =>
    render(
      <Card
        name="John Doe"
        email="abc@abc.com"
      />
    );

  test("renders Card", () => {
    renderCard();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument
    expect(screen.getByText(/abc@abc.com/i)).toBeInTheDocument
  });
});