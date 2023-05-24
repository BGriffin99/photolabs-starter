import React from 'react';

import '../styles/TopicListItem'

const TopicListItem = (props) => {
  const handleLoadTopic = useCallback(() => {
    props.onLoadTopic(props.id);
  }, [props.onLoadTopic, props.id]);

  return (
    <div className="topic-list--item" onClick={handleLoadTopic}>
      <span>
        {props.title}
      </span>
    </div>
  );
};

export default TopicListItem