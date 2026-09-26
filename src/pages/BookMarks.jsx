import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "../assets/css/BookMarks.css";
import BookmarkContext from "../context/BookmarkContext";
import { useNote } from "../context/NoteContext";
import { getMarketById } from "../services/marketService";
import Modal from "../components/Modal";
import productsData from "../data/products.json";

function Bookmarks() {
  const { marketBookmarks, toggleMarketBookmark, productBookmarks, toggleProductBookmark } = useContext(BookmarkContext);
  const { getNotesByMarketId, addMarketNote, deleteMarketNote, getNotesByProductId, addProductNote, deleteProductNote } = useNote();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newNoteText, setNewNoteText] = useState("");
  const [activeTab, setActiveTab] = useState("markets");

  const bookmarkedMarkets = marketBookmarks
    .map((id) => getMarketById(id))
    .filter(Boolean);

  const getProductById = (id) => productsData.find((p) => p.id === id);

  const bookmarkedProducts = productBookmarks
    .map((id) => getProductById(id))
    .filter(Boolean);

  const handleOpenNotes = (market) => {
    setSelectedMarket(market);
    setIsModalOpen(true);
    setNewNoteText("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMarket(null);
  };

  const handleOpenProductNotes = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
    setNewNoteText("");
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNoteText.trim() && selectedMarket) {
      addMarketNote(selectedMarket.id, newNoteText);
      setNewNoteText("");
    }
  };

  const handleAddProductNote = (e) => {
    e.preventDefault();
    if (newNoteText.trim() && selectedProduct) {
      addProductNote(selectedProduct.id, newNoteText);
      setNewNoteText("");
    }
  };

  const currentMarketNotes = selectedMarket
    ? getNotesByMarketId(selectedMarket.id)
    : [];

  const currentProductNotes = selectedProduct
    ? getNotesByProductId(selectedProduct.id)
    : [];

  return (
    <div className="section bookmarks-container-section">
      <div className="container">
        <div className="header_container">
          <h1 className="header_title">My Bookmarks</h1>
          <p className="header_desc">
            Your saved markets, produce, and personal notes.
          </p>
        </div>
        <div className="bookmark_fav">
          <ul className="bookmark_fav_list">
            <li className="bookmark_fav_item"><button className={`btn_fav ${activeTab === 'markets' ? 'active' : ''}`} onClick={() => setActiveTab("markets")}>
              My Markets</button></li>
            <li className="bookmark_fav_item"><button className={`btn_fav ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab("products")}>
              My Products</button></li>
          </ul>
        </div>
        <div className="container_main">
          {activeTab === "markets" ? (
            bookmarkedMarkets.length === 0 ? (
              <div className="no_saved_container">
                <h2 className="no_saved_header">No saved markets</h2>
                <p className="no_saved_desc">
                  Browse the Market Directory and bookmark your favorite markets.
                </p>

                <Link className="markets_link" to="/markets">
                  Browse Markets
                </Link>
              </div>
            ) : (
              bookmarkedMarkets.map((market) => (
                <div className="saved_container" key={market.id}>
                  <div className="saved_content">
                    <div className="name_note_read_container">
                      <Link
                        to={`/markets/${market.id}/${market.slug}`}
                        className="saved_header"
                      >
                        {market.name}
                      </Link>
                      <button
                        className="name_note_read_btn"
                        onClick={() => handleOpenNotes(market)}
                      >
                        Read my Notes
                      </button>
                    </div>
                    <p className="saved_location">{market.location?.area}</p>
                  </div>

                  <button
                    className="saved_delete_btn"
                    onClick={() => toggleMarketBookmark(market.id)}
                  >
                    <img
                      className="saved_delete_img"
                      src="/images/delete.png"
                      alt=""
                    />
                  </button>
                </div>
              ))
            )
          ) : (
            bookmarkedProducts.length === 0 ? (
              <div className="no_saved_container">
                <h2 className="no_saved_header">No saved products</h2>
                <p className="no_saved_desc">
                  Browse products and bookmark your favorites.
                </p>
                <Link className="markets_link" to="/produce-guide">
                  Browse Products
                </Link>
              </div>
            ) : (
              bookmarkedProducts.map((product) => (
                <div className="saved_container" key={product.id}>
                  <div className="saved_content">
                    <div className="name_note_read_container">
                      <Link
                        to="/produce-guide"
                        className="saved_header"
                      >
                        {product.name}
                      </Link>
                      <button
                        className="name_note_read_btn"
                        onClick={() => handleOpenProductNotes(product)}
                      >
                        Read my Notes
                      </button>
                    </div>
                    <p className="saved_location">{product.description}</p>
                  </div>

                  <button
                    className="saved_delete_btn"
                    onClick={() => toggleProductBookmark(product.id)}
                  >
                    <img
                      className="saved_delete_img"
                      src="/images/delete.png"
                      alt=""
                    />
                  </button>
                </div>
              ))
            )
          )}
        </div>

      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="modal_container">
          <h2 className="modal_header">
            Notes for {selectedMarket?.name}
          </h2>

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
            {currentMarketNotes.length === 0 ? (
              <p className="place_holder_modal">Your notes will appear here.</p>
            ) : (
              <ul className="note_list">
                {currentMarketNotes.map((note) => (
                  <li key={note.id} className="note_item">
                    <span className="note_item_text">{note.text}</span>
                    <button
                      className="note_item_button_x"
                      onClick={() =>
                        deleteMarketNote(selectedMarket.id, note.id)
                      }
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

      <Modal isOpen={isProductModalOpen} onClose={handleCloseProductModal}>
        <div className="modal_container">
          <h2 className="modal_header">
            Notes for {selectedProduct?.name}
          </h2>

          <form onSubmit={handleAddProductNote}>
            <input
              className="modal_input"
              type="text"
              placeholder="Write some things..."
              value={newNoteText}
              onChange={(e) => setNewNoteText(e.target.value)}
            />
          </form>

          <div className="your_note_here_container">
            {currentProductNotes.length === 0 ? (
              <p className="place_holder_modal">Your notes will appear here.</p>
            ) : (
              <ul className="note_list">
                {currentProductNotes.map((note) => (
                  <li key={note.id} className="note_item">
                    <span className="note_item_text">{note.text}</span>
                    <button
                      className="note_item_button_x"
                      onClick={() =>
                        deleteProductNote(selectedProduct.id, note.id)
                      }
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

export default Bookmarks;
