import React from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // Destructure the props
  const { id, likedPhotos, dispatch } = props;

  // Function to toggle the like status and update likedPhotos state
  const toggleLike = (event) => {
    event.stopPropagation();
    dispatch({ type: "LIKE_PHOTO", payload: { id, status: likedPhotos[id] ? null : true } });
  };

  return (
    <div onClick={toggleLike} className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg">
        {/* Render the FavIcon component with fill based on like status */}
        <FavIcon fill={likedPhotos[id] ? "#C80000" : "#EEEEEE"} />
      </div>
    </div>
  );
};

export default PhotoFavButton;