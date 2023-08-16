import React, { useContext } from "react";

import SomeContext from "./SomeContext";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss";
import FavIcon from "./FavIcon";

const TopNavigation = ({ topics, topicClick }) => {
  const { favorites } = useContext(SomeContext);
  const likedPhotoCount = favorites.length;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className="top-nav-bar">
        <TopicList topics={topics} topicClick={topicClick} />
        {likedPhotoCount > 0 ? (
          <FavIcon selected={true} displayAlert={true} />
        ) : (
          <FavBadge isFavorited={false} />
        )}
      </span>
    </div>
  );
};

export default TopNavigation;
