import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props;


  return (
    <li className="">
      <PhotoFavButton
        isLiked={props.like[id] || false}
        likePhoto={props.likePhoto}
        photoId={id}
      />


      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          <span>{username}</span>
          <span className="photo-list__user-location">
            {location.city}, {location.country}
          </span>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
