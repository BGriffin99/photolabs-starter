import { useState } from "react";
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [displayPhoto, setDisplayPhoto] = useState(false);
  const [bigPhoto, setBigPhoto] = useState(null);
  const [likes, setLikes] = useState(0);

  const photosList = Object.values(photos);
  const topicsList = Object.values(topics);

  const updateLikes = (photoId, increment) => {
    setLikes((prevLikes) => {
      const updatedLikes = increment ? prevLikes + 1 : prevLikes - 1;
      return updatedLikes >= 0 ? updatedLikes : 0;
    });
  };

  return { photosList, topicsList, displayPhoto, setDisplayPhoto, bigPhoto, setBigPhoto, likes, updateLikes };
};

export default useApplicationData;