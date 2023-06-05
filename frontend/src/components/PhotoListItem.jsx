import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  // Destructure the props
  const { id, username, imageSource, hideUserName, likedPhotos, dispatch } = props;

  return (
    <li className='photo-list--item' onClick={() => dispatch({type: "SHOW_MODAL", payload: {id}})}>
      {/* Render the PhotoFavButton component */}
      <PhotoFavButton id={id} likedPhotos={likedPhotos} dispatch={dispatch} />

      {/* Display the photo image */}
      <img src={imageSource} className='photo-list--image' alt='Photo' />

      {/* Display the username if hideUserName is false */}
      {!hideUserName && <p className='photo-list--user-profile'>{username}</p>}
    </li>
  );
};

export default PhotoListItem;