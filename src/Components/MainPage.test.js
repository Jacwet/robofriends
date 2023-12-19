import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPage from './MainPage';

const mockProps = {
  onRequestRobots: jest.fn(),
  robots: [
    {
      id: 3,
      name: 'John',
      email: 'johnjohn@gmail.com'
    },
    // Add more John elements for testing multiple matches
    {
      id: 4,
      name: 'John',
      email: 'anotherjohn@gmail.com'
    }
  ],
  searchField: 'John',
  isPending: false
}

describe('app test', () => {
  const { asFragment } = render(<MainPage {...mockProps} />);
  beforeEach(() => {
    render(
      <MainPage {...mockProps} />
    )
  })

  
  describe('app test', () => {
    beforeEach(() => {
      render(<MainPage {...mockProps} />);
    });
  
    it('verifies John is in the document and Jane is not', () => {
      const johnElements = screen.getAllByText('John');
  
      // Ensure at least one John element is in the document
      expect(johnElements.length).toBeGreaterThan(0);
  
      // Ensure Jane is not in the document
      const janeElement = screen.queryByText('Jane');
      expect(janeElement).not.toBeInTheDocument();
    });
  });
});