import React from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";


const App = () => {
  return (
    <div className="App">
      <HomeRoute isClicked={isClicked} like={like} likePhoto={toggleLike} />
    </div>
  );
};

export default App;
