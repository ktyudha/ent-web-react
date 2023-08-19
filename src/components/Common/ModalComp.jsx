import React, { useState } from "react";
import ReactModal from "react-modal";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        Open Modal
      </button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <h2 className="text-2xl mb-4">Modal Title</h2>
          <p>This is the content of the modal.</p>
          <button className="btn btn-primary mt-4" onClick={closeModal}>
            Close
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default Modal;
