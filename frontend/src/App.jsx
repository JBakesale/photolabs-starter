import React from "react";
import SomeContext from "components/SomeContext";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    modalOpen,
    openModal,
    closeModal,
    selectedPhoto,
    favorites,
    updateFavPhotoIds,
    photoData,
    topicData,
    fetchPhotosByTopic,
  } = useApplicationData();

  return (
    <SomeContext.Provider value={{ favorites, updateFavPhotoIds }}>
      <div className="App">
        <HomeRoute
          topics={topicData}
          photos={photoData}
          openModal={openModal}
          topicClick={fetchPhotosByTopic}
        />
        <PhotoDetailsModal
          isOpen={modalOpen}
          onClose={closeModal}
          selectedPhoto={selectedPhoto}
        />
      </div>
    </SomeContext.Provider>
  );
};

export default App;
