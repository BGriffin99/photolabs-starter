import React from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topicData, likedPhotoArray, onLoadTopic, photoData, onClickLikes, onClickModal }) => {
  const renderTopNavigationBar = () => {
    return (
      <TopNavigationBar
        topicData={topicData}
        likedPhotoArray={likedPhotoArray}
        onLoadTopic={onLoadTopic}
      />
    );
  };

  const renderPhotoList = () => {
    return (
      <PhotoList
        photoData={photoData}
        onClickLikes={onClickLikes}
        onClickModal={onClickModal}
        likedPhotoArray={likedPhotoArray}
        onLoadTopic={onLoadTopic}
      />
    );
  };

  return (
    <div className="home-route">
      {renderTopNavigationBar()}
      {renderPhotoList()}
    </div>
  );
};

export default HomeRoute;