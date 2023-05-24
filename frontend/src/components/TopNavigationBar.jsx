import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ topicData, onLoadTopic, likedPhotoArray }) => {
  const renderLogo = () => {
    return <h1 className="top-nav-bar--logo">PhotoLabs</h1>;
  };

  return (
    <div className="top-nav-bar">
      {renderLogo()}
      <TopicList topicData={topicData} onLoadTopic={onLoadTopic} />
      <FavBadge likedPhotoArray={likedPhotoArray} />
    </div>
  );
};

export default TopNavigation;