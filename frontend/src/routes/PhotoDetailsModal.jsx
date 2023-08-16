import React, { useContext } from "react";
import SomeContext from "components/SomeContext";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhoto, openModal }) => {
  if (!isOpen || !selectedPhoto) return null;

  const similarPhotos = Object.values(selectedPhoto.similar_photos);
  const { favorites, updateFavPhotoIds } = useContext(SomeContext);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-list__item">
        <PhotoFavButton
          isFavorited={favorites.includes(selectedPhoto.id)}
          onClick={() => updateFavPhotoIds(selectedPhoto.id)}
        />
        <img
          className="photo-details-modal__image"
          src={selectedPhoto.urls.regular}
          alt={`Photo ${selectedPhoto.id}`}
        />
      </div>
      <p className="photo-details-modal__header">Similar Photos</p>
      <div className="photo-details-modal__images ">
        <PhotoList photos={similarPhotos} openModal={openModal} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
