import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({
  photoItem: { location, urls, user, id },
  modal,
  mainPhoto,
  like,
  likePhoto,
  isClicked,
}) => {
  const modalClass = modal ? "photo-details-modal__" : "photo-list__";
  const className =
    modal && mainPhoto ? `${modalClass}image` : `${modalClass}item`;
  const imageClassName =
    modal && mainPhoto ? `${modalClass}image` : `${modalClass}image`;

  return (
    <li className={className}>
      <PhotoFavButton
        isLiked={like[id] || false}
        likePhoto={likePhoto}
        photoId={id}
      />
      <img
        src={urls.regular}
        className={imageClassName}
        onClick={isClicked}
        id={mainPhoto && "main-photo"}
      />

      <div className={`${modalClass}user-details`}>
        <img src={user.profile} className={`${modalClass}user-profile`} />
        <div className={`${modalClass}user-info`}>
          <span>{user.name}</span>
          <span className={`${modalClass}user-location`}>
            {location.city}, {location.country}
          </span>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
