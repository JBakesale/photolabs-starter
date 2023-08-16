import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import SomeContext from "components/SomeContext";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, openModal, topicClick }) => {
  return (
    <SomeContext.Consumer>
      {(context) => (
        <div className="home-route">
          <TopNavigation topics={topics} topicClick={topicClick} />
          <PhotoList photos={photos} openModal={openModal} />
        </div>
      )}
    </SomeContext.Consumer>
  );
};

export default HomeRoute;
