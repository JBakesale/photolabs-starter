const useLike = () => {
  const [like, setLike] = useState({});

  const toggleLike = (photoId) => {
    setLike((prevLike) => ({
      ...prevLike,
      [photoId]: !prevLike[photoId],
    }));
  };

  return {
    like,
    toggleLike,
  };
};
