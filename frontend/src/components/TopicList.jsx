import React from 'react';
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';
import '../styles/TopicList.scss';

const TopicList = (props) => {
  // Destructure the props
  const { topics, likedPhotos, dispatch } = props;

  // Check if there are any liked photos from the likedPhotos state,
  // used to display the liked notification in the header
  const isFavPhotoExist = Object.values(likedPhotos).find(val => val === true);

  // Map over the topics array and render TopicListItem components for each topic
  const topicsArr = topics.map(topic => (
    <TopicListItem label={topic.title} link={topic.link} key={topic.id} id={topic.id} dispatch={dispatch} />
  ));

  return (
    <div className="top-nav-bar--topic-list">
      {/* Render the TopicListItem components */}
      {topicsArr}

      {/* Render the FavBadge component */}
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopicList;