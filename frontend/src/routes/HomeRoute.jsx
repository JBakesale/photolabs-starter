import React from 'react';
import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation like={props.like} />
      <PhotoList
        like={props.like}
        likePhoto={props.likePhoto}
        isClicked={props.isClicked}
        // photos={photos}
      />
    </div>
  );
};

export default HomeRoute;
