import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";

const mockProducts = [
  {
    name: "Product 1",
    description: "Description 1",
    image: "image1.jpg",
    tag: "New",
    wasPrice: { cashPrice: { amount: 100, currencyCode: "AUD" } },
    currentPrice: { cashPrice: { amount: 80, currencyCode: "AUD" }, pointsPrice: { amount: 500 } },
  },
  {
    name: "Product 2",
    description: "Description 2",
    imageSrc: "image2.jpg", // alternate image key name
    tag: "Sale",
    wasPrice: { cashPrice: { amount: 200, currencyCode: "AUD" } },
    currentPrice: { cashPrice: { amount: 150, currencyCode: "AUD" }, pointsPrice: { amount: 1000 } },
  },
];

describe("Carousel", () => {
  test("renders all products", () => {
    render(<Carousel products={mockProducts} />);

    const productItems = screen.getAllByRole("img");
    expect(productItems).toHaveLength(mockProducts.length);
  });

  test("displays product name", () => {
    render(<Carousel products={mockProducts} />);

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  test("displays the correct price", () => {
    render(<Carousel products={mockProducts} />);

    mockProducts.forEach((product) => {
      expect(
        screen.getByText(`${product.currentPrice.cashPrice.currencyCode} $${product.currentPrice.cashPrice.amount.toFixed(2)}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`Or ${product.currentPrice.pointsPrice.amount.toLocaleString()} PTS`)
      ).toBeInTheDocument();
    });
  });

  test("displays tag if available", () => {
    render(<Carousel products={mockProducts} />);

    mockProducts.forEach((product) => {
      if (product.tag) {
        expect(screen.getByText(product.tag.toUpperCase())).toBeInTheDocument();
      }
    });
  });

  test("does not crash if image source is missing", () => {
    const productsWithNoImage = [
      {
        name: "Product 3",
        description: "Description 3",
        tag: "New",
        wasPrice: { cashPrice: { amount: 100, currencyCode: "USD" } },
        currentPrice: { cashPrice: { amount: 80, currencyCode: "USD" } },
      },
    ];

    render(<Carousel products={productsWithNoImage} />);
    expect(screen.getByText("Product 3")).toBeInTheDocument();
  });
});