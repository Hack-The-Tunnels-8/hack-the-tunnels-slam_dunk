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
      title: "Apparel",
      description: "T-Shirts, Tank Tops, Hoodies, Shorts, Pants",
      price: 19.99,
      imageUrl: "",
    },
    {
      title: "Jerseys",
      description: "Current, Throwbacks, Fan Favourites",
      price: 24.99,
      imageUrl: "https://sothebys-md.brightspotcdn.com/d5/cb/08699cf345dfb16d6d7d28e33378/bqt8s-1.jpg",
    },
    {
      title: "Accessories",
      description: "Basketballs, Headbands, Lanyards",
      price: 29.99,
      imageUrl: "https://images.footballfanatics.com/nike-white-nba-headband_pi2694000_ff_2694897_full.jpg?_hv=2",
    },
    {
      title: "Footwear",
      description: "LeBrons, Kyries, KDs, & more",
      price: 14.99,
      imageUrl: "https://e7.pngegg.com/pngimages/802/123/png-clipart-sports-shoes-basketball-shoe-sportswear-product-lebron-12-blue-white.png",
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
