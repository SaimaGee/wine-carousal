# Qantas Wine Carousel Application (React)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (preferably LTS)
- npm (Node package manager)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/SaimaGee/wine-carousal
   cd wine-carousal
2. Install the required dependencies:
   ```bash
   npm install
3. Run the development server:
   ```bash
   npm start

   The app should now be running at http://localhost:3000.

## Approach

### Components:
1. **App Component (`App.js`)**
   - The `App` component is responsible for fetching the product data (from `data.json`) and passing it down as a prop to the `Carousel` component. 
   - It assumes the data is structured as `productData.data.search.products`, which contains an array of product objects.
   - The component renders a heading and the `Carousel` component, passing the extracted `products` array to it.

2. **Carousel Component (`Carousel.js`)**
   - The `Carousel` component is designed to display a list of products in a carousel format.
   - It maps over the `products` array and generates a card for each product with details such as name, description, pricing, and an optional tag.
   - It handles two possible keys for images (`image` or `imageSrc`) and checks if pricing information exists for the product (handling `wasPrice` and `currentPrice`).

### Key Features:
- **Dynamic Rendering:** The components render product data dynamically, ensuring that the display adapts to the provided product information.
- **Conditional Rendering:** There is conditional rendering to handle optional fields like the product tag and prices (e.g., `wasPrice`, `currentPrice`).
- **Currency Formatting:** The product prices are formatted to two decimal places, and the points price is formatted with commas.

### Trade-offs:
1. **Data Assumptions:**
   - The code assumes that `data.json` is always structured in a specific format (i.e., `data.data.search.products`). This might not be flexible if the data structure changes or needs to be fetched dynamically from an API. A better approach would be to handle potential variations in data structure or API responses.
   
2. **Image Handling:**
   - There is a check for either `product.image` or `product.imageSrc`. While this ensures the image is loaded, it could be more robust by adding an error fallback for missing or broken images. Currently, if neither `image` nor `imageSrc` is provided, no image will be shown.

3. **Performance Considerations:**
   - This approach works well for a small number of products. However, if the product list grows significantly, the carousel rendering may become less efficient. For a larger list of products, consider implementing pagination, lazy loading, or virtualized lists to improve performance.

4. **Carousel Controls:**
   - The current carousel implementation lacks navigation controls (e.g., next/previous buttons). Implementing these controls would improve user experience but would require additional state management for the current slide index and potentially additional styling.

5. **Responsive Design:**
   - The provided code does not include any special consideration for responsive design. Ideally, a carousel would resize based on screen size and adjust the number of visible items or the layout. Adding responsive CSS or media queries would be necessary to ensure a good user experience on mobile and tablet devices.

6. **Accessibility:**
   - The code does not currently provide accessibility features such as alt text for images (beyond the product name) or keyboard navigation for the carousel. This can be improved by adding proper ARIA roles and keyboard controls for better accessibility.
