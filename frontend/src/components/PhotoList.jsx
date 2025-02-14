import React, { useContext } from "react";
import PhotoListItem from "./PhotoListItem";
import SomeContext from "./SomeContext";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, openModal }) => {
  const { favorites, updateFavPhotoIds } = useContext(SomeContext); 

  const photoListItem = photos.map((photo) => {
    const isFavorited = favorites.includes(photo.id);

    return (
      <PhotoListItem
        onClick={() => openModal(photo)}
        key={photo.id}
        city={photo.location.city}
        country={photo.location.country}
        imageSource={photo.urls.regular}
        profile={photo.user.profile}
        name={photo.user.name}
        isFavorited={isFavorited}
        onToggleFavorite={() => updateFavPhotoIds(photo.id)}
      />
    );
  });

  return <ul className="photo-list">{photoListItem}</ul>;
};

export default PhotoList;
