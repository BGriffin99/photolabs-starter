
import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ username, imageSource, id, hideUserName }) => {
  return (
    <div className = 'photo-list--item'>
      <img className = 'photo-list--image' src={imageSource} alt="Photograph" />
      {!hideUserName && <p>{username}</p>}
      <p>{id}</p>
    </div>
  );
};

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem