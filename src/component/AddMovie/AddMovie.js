import React, { useState } from "react";
import Modal from "react-modal";
import "./AddMovie.css";
Modal.setAppElement("#root");

const AddMovie = ({AddNewMovie}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Movie Rate</label>
          <input
            type="text"
            name="rating"
            onChange={(e) => setRating(e.target.value)}
            required
          />
          <label>Movie Release Date</label>
          <input
            type="text"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label>Movie Image</label>
          <input
            type="url"
            name="image"
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <label>Movie Summary</label>
          <textarea
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </form>
        <button
          className="Modal-btn"
          onClick={() => {
            AddNewMovie({
              name: name,
              rating: rating,
              date: date,
              description: description,
              image: image,
            });
            closeModal();
          }}
        >
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;