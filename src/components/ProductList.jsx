import { Link } from "react-router-dom";
import "../assets/css/style.css";
function ProductList() {
  return (
    <>
      <div className="product-grid">
        <article className="product-card">
          <img
            alt="Khajur premium dry food"
            src="https://images.unsplash.com/photo-1774334136128-bfdecc1c6446?"
          />
          <h3>Khajur</h3>
          <p className="product-category">Fruit</p>
          <p className="product-price">$15.00</p>
          <p>
            Naturally sweet, soft dates packed with energy and essential
            nutrients.
          </p>
          <Link className="text-link">
            Find at a market <span aria-hidden="true">→</span>
          </Link>
        </article>
        <article className="product-card">
          <img
            alt="Qismis premium dry food"
            src="https://images.unsplash.com/photo-1600189020840-e9918c25269d?"
          />
          <h3>Qismis</h3>
          <p className="product-category">Fruit</p>
          <p className="product-price">$12.00</p>
          <p>
            Sun-dried raisins with a rich flavor, perfect for snacking and
            baking.
          </p>
          <Link className="text-link">
            Find at a market <span aria-hidden="true"></span>
          </Link>
        </article>
        <article className="product-card">
          <img
            alt="Fig premium dry food"
            src="https://images.unsplash.com/photo-1536511397145-ad62741fdf3c?"
          />
          <h3>Fig</h3>
          <p className="product-category">Fruit</p>
          <p className="product-price">$18.00</p>
          <p>
            Premium dried figs, naturally delicious and a wholesome source of
            fiber.
          </p>
          <Link className="text-link">
            Find at a market <span aria-hidden="true">→</span>
          </Link>
        </article>
      </div>
    </>
  );
}

export default ProductList;
