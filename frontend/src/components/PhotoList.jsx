import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const photoList = props.photos.map((photo) => {
    const { id, location, urls, user, similarPhotos } = photo;
    const photoObj = {
      location,
      urls: { regular: urls.regular, full: urls.full },
      user: {
        name: user.name,
        profile: user.profile,
      },
      id,
    };

    return (
      <PhotoListItem
        photoItem={photoObj}
        key={id}
        like={props.like}
        likePhoto={props.likePhoto}
        isClicked={() => props.isClicked(photoObj, similarPhotos)}
        modal={props.modal}
      />
    );
  });

  return (
    <ul className={!props.modal ? "photo-list" : "similar-photos"}>
      {photoList}
    </ul>
  );
};

export default PhotoList;
