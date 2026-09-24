import { useState } from 'react';
import categories from '../data/categories.json';
import products from '../data/products.json';

function ProduceGuide() {
  const [search, setSearch] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');

  const keyword = search.trim();

  const filteredCategories = categories.filter((category) => {
    const matchCategory =
      selectedCategoryId === 'all' || category.id === Number(selectedCategoryId);

    const matchSearch =
      !keyword ||
      category.name.includes(keyword) ||
      category.description.includes(keyword);

    return matchCategory && matchSearch;
  });

  const displayedProducts = products.filter((product) => {
    const matchCategory =
      selectedCategoryId === 'all' || product.categoryId === Number(selectedCategoryId);

    const matchSearch =
      !keyword ||
      product.name.includes(keyword) ||
      product.description.includes(keyword);

    return matchCategory && matchSearch;
  });

  return (
    <main className="produce-guide-page">
      <aside className="produce-sidebar">
        <h2>Search</h2>
        <input
          type="text"
          placeholder="Search produce..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-group">
          <label>Category</label>
          <div className="category-buttons">
            <button
              type="button"
              className={selectedCategoryId === 'all' ? 'category-btn active' : 'category-btn'}
              onClick={() => setSelectedCategoryId('all')}
            >
              All Categories
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={
                  selectedCategoryId === String(category.id)
                    ? 'category-btn active'
                    : 'category-btn'
                }
                onClick={() => setSelectedCategoryId(String(category.id))}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <section className="produce-content">
        <h1>Produce Guide</h1>

        <div className="produce-grid">
          {filteredCategories.map((category) => (
            <article key={category.id} className="produce-card">
              <div className="produce-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>

        <div className="product-list">
          <h2>Products</h2>
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <div key={product.id} className="product-item">
                <strong>{product.name}</strong>
                <img src={product.image} alt={product.name} />
                <span>
                  {categories.find((category) => category.id === product.categoryId)?.name || 'Unknown'}
                </span>
                <p>{product.description}</p>
              </div>
            ))
          ) : (
            <p>No product matches your search.</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProduceGuide;