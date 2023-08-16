import React, { useContext } from "react";
import SomeContext from "./SomeContext";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = () => {
  const { favorites } = useContext(SomeContext);

  const isFavorited = favorites.length > 0;

  return (
    <div className="fav-badge">
      <FavIcon selected={!isFavorited} displayAlert={isFavorited} />
    </div>
  );
};

export default FavBadge;
