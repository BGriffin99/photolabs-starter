import React from 'react';
import TopicListItem from './TopicListItem';

import '../styles/TopicList.scss';

const TopicList = (props) => {
  const renderTopics = () => {
    return props.topicData.map((topic) => (
      <TopicListItem key={topic.id} {...topic} onLoadTopic={props.onLoadTopic} />
    ));
  };

  return (
    <div className="top-nav-bar--topic-list">
      {renderTopics()}
    </div>
  );
};

export default TopicList;