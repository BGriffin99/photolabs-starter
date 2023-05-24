import React from 'react';

import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          username={photo.username}
          imageSource={photo.imageSource}
          id={photo.id}
          hideUserName={photo.hideUserName}
        />
      ))}
    </ul>
  );
};

PhotoList.defaultProps = {
  photos: [
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 1,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 2,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 3,
     hideUserName: false,
    }
   ]
}

export default PhotoList