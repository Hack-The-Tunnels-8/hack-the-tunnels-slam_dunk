import "./ProductPreviewCard.style.scss";

interface Props {
  title: string;
  description: string;
  price: number;
  imageUrl: "https://cdn.imgbin.com/15/3/14/imgbin-miami-heat-chicago-bulls-nba-jersey-swingman-nba-tp8z3TSyh4NdzNPK6zxTT7580.jpg";
}

function ProductPreviewcard({ title, description, price, imageUrl }: Props) {
  return (
    <div className="product-preview-card">
      <img className="product-preview-card__image" src={imageUrl} alt={title} />
      <h3 className="product-preview-card__title">{title}</h3>
      <p className="product-preview-card__description">{description}</p>
      <p className="product-preview-card__price">${price}</p>
    </div>
  );
}

export default ProductPreviewcard;
