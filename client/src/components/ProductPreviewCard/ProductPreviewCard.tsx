import React from 'react';
import ProductPreviewCard from './ProductPreviewCard'; // Adjust the import path as needed

function App() {
  // Define data for five different types of items
  const items = [
    {
      title: "Throwback Jerseys",
      description: "An assortment of throwback jerseys for a great price!!",
      price: 19.99,
      imageUrl: "https://cdn.vox-cdn.com/thumbor/uchBBEKqjFjdUCYrncfixLKJcMk=/0x0:2000x2000/1200x0/filters:focal(0x0:2000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19279114/Lowry1.png",
    },
    {
      title: "Item 2",
      description: "Description for Item 2",
      price: 24.99,
      imageUrl: "https://example.com/item2.jpg",
    },
    {
      title: "Item 3",
      description: "Description for Item 3",
      price: 29.99,
      imageUrl: "https://example.com/item3.jpg",
    },
    {
      title: "Item 4",
      description: "Description for Item 4",
      price: 14.99,
      imageUrl: "https://example.com/item4.jpg",
    },
    {
      title: "Item 5",
      description: "Description for Item 5",
      price: 34.99,
      imageUrl: "https://example.com/item5.jpg",
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <ProductPreviewCard
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
