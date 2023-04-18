import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const { id, description, image, location, price } = listing;
  const [isFavorited, setIsFavorited] = useState(false);

  function handleFavoriteClick() {
    setIsFavorited(!isFavorited);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">${price}</span>
        <img src={image} alt={description} />
        
      </div>
      <div className="details">
      <button
          className={`emoji-button favorite ${isFavorited ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
          ⭐
        </button>
        <strong>{description}</strong>
        <br />
        <span>{location}</span>
        <button className="emoji-button delete" onClick={() => onDelete(id)}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;

