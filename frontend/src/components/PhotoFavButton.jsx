import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFav, setIsFav] = useState(false);

  const toggleFav = () => {
    setIsFav(prevFav => !prevFav);
  };
  
  return (
    <div className="photo-list__fav-icon" onClick={toggleFav}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
      </div>
    </div>
  );
}

export default PhotoFavButton;