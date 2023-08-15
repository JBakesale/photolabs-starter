import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_FAV_STATUS: "SET_FAV_STATUS",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
  RELOAD_PHOTOS: "RELOAD_PHOTOS",
};

const API = {
  GET_PHOTOS: "/api/photos",
  GET_TOPICS: "/api/topics",
  GET_PHOTOS_BY_TOPICS: "/api/topics/photos/",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favStatus: {
          ...state.favStatus,
          [action.id]: 1,
        },
        isFavPhotoExist: 1,
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      const updateFavStatus = {
        ...state.favStatus,
        [action.id]: 0,
      };
      const isFavExist = Object.values(updateFavStatus).some(
        (status) => status === 1
      );
      return {
        ...state,
        favStatus: updateFavStatus,
        isFavPhotoExist: isFavExist ? 1 : 0,
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        selectedPhoto: action.photo,
        modalVisible: true,
      };

    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        selectedPhoto: null,
        modalVisible: false,
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.photos,
      };

    case ACTIONS.SET_FAV_STATUS:
      return {
        ...state,
        favStatus: action.favStatus,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.topics,
      };

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export default function useApplication() {
  const [state, dispatch] = useReducer(reducer, {
    photos: [],
    topics: [],
    selectedPhoto: null,
    modalVisible: false,
    isFavPhotoExist: 0,
    favStatus: {},
  });

  useEffect(() => {
    // Fetch photos and topics using fetch API
    const photosPromise = fetch(API.GET_PHOTOS).then((res) => res.json());
    const topicsPromise = fetch(API.GET_TOPICS).then((res) => res.json());

    Promise.all([photosPromise, topicsPromise])
      .then((arrayOfResponses) => {
        const photos = arrayOfResponses[0];
        const topics = arrayOfResponses[1];

        // Set the photos and topics in the state
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos: photos });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics: topics });

        // Initialize favStatus with 0 for each photo
        const initialFavStatus = photos.reduce((acc, photo) => {
          acc[photo.id] = 0;
          return acc;
        }, {});

        // Set the initialized favStatus in the state
        dispatch({ type: ACTIONS.SET_FAV_STATUS, favStatus: initialFavStatus });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, photo });

    fetch(API.GET_PHOTOS)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.status}`);
        }
        return response.json();
      })
      .then((photosData) => {
        const selectedPhotoIds = photo.similar_photos.map((photo) => photo.id);
        const filteredPhotoObjs = photosData.filter((photo) =>
          selectedPhotoIds.includes(photo.id)
        );

        dispatch({
          type: ACTIONS.SET_SIMILAR_PHOTOS,
          similarPhotos: filteredPhotoObjs,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  const toggleFavSelect = (id) => {
    if (state.favStatus[id]) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, id });
    }
  };

  const getPhotosByTopic = (topicId) => {
    fetch(API.GET_PHOTOS_BY_TOPICS + topicId)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos: data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const reloadPhotos = () => {
    fetch(API.GET_PHOTOS)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos: data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const filterSimilarPhotos = (selectedPhoto) => {
    if (selectedPhoto && selectedPhoto.similar_photos) {
      const selectedPhotoIds = selectedPhoto.similar_photos.map(
        (photo) => photo.id
      );
      const filteredPhotoObjs = state.photos.filter((photo) =>
        selectedPhotoIds.includes(photo.id)
      );
      return filteredPhotoObjs;
    }
    return [];
  };

  return {
    state,
    openModal,
    closeModal,
    toggleFavSelect,
    getPhotosByTopic,
    reloadPhotos,
    filterSimilarPhotos,
  };
}
