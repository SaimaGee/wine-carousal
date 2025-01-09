import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended matchers
import Carousel from './Carousel';

const mockProducts = [
  {
    name: 'Prohibition Liquor Company',
    description: 'Prohibition Christmas Gin 500ml',
    image: 'https://unsplash.it/200/200/?random',
    tag: 'Sale',
    wasPrice: {
      cashPrice: { currencyCode: 'AUD', amount: 125 },
      pointsPrice: { amount: 25000 },
    },
    currentPrice: {
      cashPrice: { currencyCode: 'AUD', amount: 119 },
      pointsPrice: { amount: 15000 },
    },
  },
  {
    name: 'Houraisen',
    description: 'Houraisen Beshi Tokubetsu Junmai Sake 720ml',
    image: 'https://unsplash.it/200/200/?random',
    tag: 'Sale',
    wasPrice: {
      cashPrice: { currencyCode: 'AUD', amount: 134 },
      pointsPrice: { amount: 23470 },
    },
    currentPrice: {
      cashPrice: { currencyCode: 'AUD', amount: 129.99 },
      pointsPrice: { amount: 19900 },
    },
  },
];

describe('Carousel Component', () => {
  it('renders correctly with products', () => {
    render(<Carousel products={mockProducts} />);
    
    // Check if the first product name is rendered
    expect(screen.getByText('Prohibition Liquor Company')).toBeInTheDocument();
    expect(screen.getByText('Houraisen')).toBeInTheDocument();
  });

  it('displays product details correctly', () => {
    render(<Carousel products={mockProducts} />);

    // Check if product description is displayed
    expect(screen.getByText('Prohibition Christmas Gin 500ml')).toBeInTheDocument();
    expect(screen.getByText('Houraisen Beshi Tokubetsu Junmai Sake 720ml')).toBeInTheDocument();

    // Check if the tag is displayed
    expect(screen.getByText('Sale')).toBeInTheDocument();

    // Check if the prices are displayed
    expect(screen.getByText('$125')).toBeInTheDocument();
    expect(screen.getByText('$119')).toBeInTheDocument();
    expect(screen.getByText('25,000 PTS')).toBeInTheDocument();
    expect(screen.getByText('15,000 PTS')).toBeInTheDocument();
  });

  it('handles missing data gracefully', () => {
    const incompleteProducts = [
      {
        name: 'Incomplete Product',
        description: 'No price information available',
      },
    ];

    render(<Carousel products={incompleteProducts} />);

    // Check that the product name is displayed
    expect(screen.getByText('Incomplete Product')).toBeInTheDocument();

    // Check that the description is displayed
    expect(screen.getByText('No price information available')).toBeInTheDocument();

    // Ensure no errors occur when data is missing
    expect(screen.queryByText('$')).not.toBeInTheDocument();
  });

  it('renders a placeholder when no products are provided', () => {
    render(<Carousel products={[]} />);

    // Check if a placeholder or fallback message is displayed
    expect(screen.getByText('No products available')).toBeInTheDocument();
  });
});