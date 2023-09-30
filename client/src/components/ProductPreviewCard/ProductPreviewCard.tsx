import React from 'react';
import './ProductPreviewCard.style.scss'; // Import styles

// ProductPreviewCard component
interface Props {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

function ProductPreviewCard({ title, description, price, imageUrl }: Props) {
  return (
    <div className="product-preview-card">
      <img className="product-preview-card__image" src={imageUrl} alt={title} />
      <h3 className="product-preview-card__title">{title}</h3>
      <p className="product-preview-card__description">{description}</p>
      <p className="product-preview-card__price">${price}</p>
    </div>
  );
}

function App() {
  // Define data for multiple product cards
  const products = [
    {
      title: "Throwback Jerseys",
      description: "Description for Product 1",
      price: 19.99,
      imageUrl: "https://cdn.vox-cdn.com/thumbor/uchBBEKqjFjdUCYrncfixLKJcMk=/0x0:2000x2000/1200x0/filters:focal(0x0:2000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19279114/Lowry1.png",
    },
    {
      title: "Product 2",
      description: "Description for Product 2",
      price: 24.99,
      imageUrl: "https://example.com/product2.jpg",
    },
    {
      title: "Product 3",
      description: "Description for Product 3",
      price: 29.99,
      imageUrl: "https://example.com/product3.jpg",
    },
    {
      title: "Product 4",
      description: "Description for Product 4",
      price: 14.99,
      imageUrl: "https://example.com/product4.jpg",
    },
    {
      title: "Product 5",
      description: "Description for Product 5",
      price: 34.99,
      imageUrl: "https://example.com/product5.jpg",
    },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <ProductPreviewCard
          key={index}
          title={product.title}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
