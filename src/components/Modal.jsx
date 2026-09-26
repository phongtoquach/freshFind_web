import "../assets/css/Modal.css";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose} aria-label="Close">
                    ×
                </button>

                {children}
            </div>
        </div>
    );
}

export default Modal;