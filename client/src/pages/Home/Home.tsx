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
      imageUrl: "https://i.postimg.cc/W3Q65rHv/bqt8s-1-removebg-preview.png",
    },
    {
      id: 3,
      title: "Accessories",
      description: "Basketballs, Headbands, Lanyards",
      price: "$",
      imageUrl: "https://i.postimg.cc/CM9nfSWW/Capture-removebg-preview.png",
    },
    {
      id: 4,
      title: "Footwear",
      description: "LeBrons, Kyries, KDs, & more",
      price: "$$-$$$",
      imageUrl: "https://i.postimg.cc/jjNwqNFC/png-clipart-sports-shoes-basketball-shoe-sportswear-product-lebron-12-blue-white-removebg-preview.png",
    },
    
  ];

  return (
    <Page>
      <div className="home-page">
        <h2>Products:</h2>
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
