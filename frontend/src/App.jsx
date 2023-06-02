import React, { useEffect, useState } from 'react';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import axios from "axios"

const App = () => {
  // Extract state and functions from useApplicationData hook
  const {
    likedPhotoArray,
    displayModal,
    modalData,
    onClickLikes,
    onClickModal,
    setDisplayModal
  } = useApplicationData();

  // State variables for photo and topic data
  const [photoData, setPhotos] = useState([]);
  const [topicData, setTopics] = useState([]);

  // Fetch photo and topic data from the API
  useEffect(() => {
    const fetchData = async () => {
      const photosResponse = await axios.get('/api/photos')
      const topicsResponse = await axios.get('/api/topics')
      //const photosResponse = await fetch('/api/photos').then((response) => response.json());
      //const topicsResponse = await fetch('/api/topics').then((response) => response.json());
     setPhotos(photosResponse.data);
     setTopics(topicsResponse.data);
    };
    fetchData();
  }, []);

  // Load topic data based on the selected topic ID
  const onLoadTopic = async (id) => {
    const response = await fetch(`/api/topics/photos/${id}`);
    const data = await response.json();
    setPhotos(data);
  };

  // Render HomeRoute and PhotoDetailsModal
  return (
    <div className="App">
      {/* Render HomeRoute component */}
      <HomeRoute
        topicData={topicData}
        photoData={photoData}
        onClickModal={onClickModal}
        onClickLikes={onClickLikes}
        likedPhotoArray={likedPhotoArray}
        onLoadTopic={onLoadTopic}
      />

      {/* Render PhotoDetailsModal component when displayModal is true */}
      {displayModal && (
        <PhotoDetailsModal
          photoData={photoData}
          onClose={() => setDisplayModal(false)}
          modalData={modalData}
          onClickModal={onClickModal}
          onClickLikes={onClickLikes}
          likedPhotoArray={likedPhotoArray}
        />
      )}
    </div>
  );
};

export default App;