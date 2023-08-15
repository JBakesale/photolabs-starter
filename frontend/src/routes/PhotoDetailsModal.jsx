import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import ModalPhoto from "components/ModalPhoto";

const PhotoDetailsModal = (props) => {
  const { photos } = props;

  const photo = photos.find((photo) => photo.id === props.photoId);
  const { id, location, urls, user, category } = photo;

  const favorite = props.isFavorite(id);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => props.closeButtonClicked()}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <div className="photo-details-modal__top-bar">
          <ModalPhoto
            key={id}
            id={id}
            location={location}
            urls={urls}
            user={user}
            toggleFavorite={() => props.toggleFavorite(id)}
            favorite={favorite}
            modal={true}
          />
        </div>
      </div>
      <hr className="modalBar"></hr>
      <span className="photo-details-modal__top-bar">Similar Photos</span>
      <div className="photo-details-modal--images">
        <PhotoList
          photos={Object.values(photo.similar_photos)}
          isFavorite={props.isFavorite}
          toggleFavorite={props.toggleFavorite}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
