import { useState } from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories.json';
import products from '../data/products.json';
import markets from '../data/markets.json';
import '../assets/css/produceGuide.css';
import Modal from "../components/Modal";
import { useBookmark } from "../context/BookmarkContext";
import { useNote } from "../context/NoteContext";

function ProduceGuide() {
  const [search, setSearch] = useState(
    () => new URLSearchParams(window.location.search).get('search') || ''
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newNoteText, setNewNoteText] = useState('');
  const [activeProductId, setActiveProductId] = useState(null);

  const { isProductBookmarked, toggleProductBookmark } = useBookmark();
  const { getNotesByProductId, addProductNote, deleteProductNote } = useNote();

  const keyword = search.trim();

  const displayedProducts = products.filter((product) => {
    const matchCategory =
      selectedCategoryId === 'all' || product.categoryId === Number(selectedCategoryId);

    const matchSearch =
      !keyword ||
      product.name.toLowerCase().includes(keyword.toLowerCase()) ||
      product.description.toLowerCase().includes(keyword.toLowerCase());

    return matchCategory && matchSearch;
  });

  const handleNoteClick = (productId) => {
    setActiveProductId(productId);
    setIsModalOpen(true);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNoteText.trim() && activeProductId) {
      addProductNote(activeProductId, newNoteText);
      setNewNoteText("");
    }
  };

  const productNotes = activeProductId ? getNotesByProductId(activeProductId) : [];
  const activeProduct = products.find(p => p.id === activeProductId);

  return (
    <div className="produce-guide">
      <aside className="sidebar">
        <h2>Search</h2>
        <input
          type="text"
          placeholder="Search produce..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />

        <div className="listCategories">
          <label>Category</label>
          <div className="buttons">
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

      <section className="content">
        <h1>Produce Guide</h1>
        <h2>Discover what is available at local farmers markets. Browse by category or search for specific produce.</h2>
        <div className="product">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <div key={product.id} className="product-items">
                <button
                  className={`bookmark ${isProductBookmarked(product.id) ? 'active' : ''}`}
                  onClick={() => toggleProductBookmark(product.id)}
                >
                  {isProductBookmarked(product.id) ? 'Bookmark' : 'Bookmark'}
                </button>
                {isProductBookmarked(product.id) && (
                  <button className="note" onClick={() => handleNoteClick(product.id)}>Note</button>
                )}
                <img src={product.image} alt={product.name} />
                <div className='container_name_category'>
                  <strong>{product.name}</strong>
                  <span className='category_log'>
                    {categories.find((category) => category.id === product.categoryId)?.name || 'Unknown'}
                  </span>
                </div>
                <p className='description'>{product.description}</p>
                <p className="available-months">
                  <strong>Available: </strong>
                  {product.availableMonths.length === 0
                    ? 'Year-round'
                    : product.availableMonths.map((month) => `Month ${month}`).join(', ')}
                </p>
                <div className="product-markets">
                  <strong>Find at markets:</strong>
                  <ul>
                    {markets
                      .filter((market) => market.productIds.includes(product.id))
                      .map((market) => (
                        <li key={market.id}>
                          <Link to={`/markets/${market.id}/${market.slug}`}>
                            {market.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <p>No product matches your search.</p>
          )}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal_container">
          <h2 className="modal_header">Notes for {activeProduct?.name}</h2>

          <form onSubmit={handleAddNote}>
            <input
              className="modal_input"
              type="text"
              placeholder="Write some things..."
              value={newNoteText}
              onChange={(e) => setNewNoteText(e.target.value)}
            />
          </form>

          <div className="your_note_here_container">
            {productNotes.length === 0 ? (
              <p className="place_holder_modal">Your notes will appear here.</p>
            ) : (
              <ul className="note_list">
                {productNotes.map((note) => (
                  <li key={note.id} className="note_item">
                    <span className="note_item_text">{note.text}</span>
                    <button
                      className="note_item_button_x"
                      onClick={() => deleteProductNote(activeProductId, note.id)}
                    >
                      x
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProduceGuide;
