import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props;

  return (
    <div className="photo-list__item" key={id}>
      <div className="photo-list__fav-icon-svg">
        <PhotoFavButton />
      </div>
      <img className="photo-list__image" src={imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          <span>{username}</span>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
