import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Page, ProductPreviewCard } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import "./Home.style.scss";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const json = await ServiceAPI.fetchProducts();
      setProducts(json.data.products);
    };

    fetchData();
  }, []);

  //Hard coded products because of database issues
  const newProducts = [
    {
      id: 1,
      title: "Apparel",
      description: "T-Shirts, Tank Tops, Hoodies, Shorts, Pants",
      price: "$$",
      imageUrl: "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png",
    },
    {
      id: 2,
      title: "Jerseys",
      description: "Current, Throwbacks, Fan Favourites",
      price: "$$$",
      imageUrl: "https://sothebys-md.brightspotcdn.com/d5/cb/08699cf345dfb16d6d7d28e33378/bqt8s-1.jpg",
    },
    {
      id: 3,
      title: "Accessories",
      description: "Basketballs, Headbands, Lanyards",
      price: "$",
      imageUrl: "https://images.footballfanatics.com/nike-white-nba-headband_pi2694000_ff_2694897_full.jpg?_hv=2",
    },
    {
      id: 4,
      title: "Footwear",
      description: "LeBrons, Kyries, KDs, & more",
      price: "$$-$$$",
      imageUrl: "https://e7.pngegg.com/pngimages/802/123/png-clipart-sports-shoes-basketball-shoe-sportswear-product-lebron-12-blue-white.png",
    },
    
  ];

  return (
    <Page>
      <div className="home-page">
        <h1 className="home-page__title">Home</h1>
        <h2>Products:</h2>
        <p>Hello World</p>
        <div className="home-page__products">
          {newProducts.map((product) => (
            <Link to={`/products/${product.id}`} key={`${product.id}`}>
              <ProductPreviewCard
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                key={`${product.id}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </Page>
  );
}

export default Home;
