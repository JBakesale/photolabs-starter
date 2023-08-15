import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData"; // Adjust the path as needed

const App = () => {
  const {
    photoId,
    favorites,
    photos,
    topics,
    fetchPhotosByTopic,
    photoClicked,
    closeButtonClicked,
    toggleFavorite,
    isFavorite,
  } = useApplicationData();

  const toggleModalPhoto = function () {
    if (photoId !== 0) {
      return (
        <PhotoDetailsModal
          photos={photos}
          closeButtonClicked={closeButtonClicked}
          photoId={photoId}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
          favorites={favorites}
        />
      );
    }
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        fetchPhotosByTopic={fetchPhotosByTopic}
        photoClicked={photoClicked}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        isFavorite={isFavorite}
      />
      {toggleModalPhoto()}
    </div>
  );
};

export default App;
