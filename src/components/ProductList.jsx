import { Link } from "react-router-dom";
import "../assets/css/style.css";

function ProductList({ items = [] }) {
  if (!items || items.length === 0) {
    return <p>Không có sản phẩm nào.</p>;
  }

  return (
    <div className="product-grid">
      {items.map((product) => (
        <article key={product.id} className="product-card">
          <img
            alt={product.name}
            src={product.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?"}
          />
          <h3>{product.name}</h3>
          <p className="product-category">Product</p>
          <p className="product-price">Fresh</p>
          <p>{product.description}</p>
          <Link className="text-link" to={`/markets`}>
            Find at a market <span aria-hidden="true">→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}

export default ProductList;
