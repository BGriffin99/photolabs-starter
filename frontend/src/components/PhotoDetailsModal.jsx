import React from "react";
import PhotoList from "./PhotoList";
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = (props) => {
  // Destructure the props
  const { modalShown, photoData, likedPhotos, dispatch, setLikedPhotos } = props;

  // Generate modal only if modalShown state is true
  if (modalShown) {
    const similarArr = photoData.similar_photos;
    return (
      <dialog open className='photo-details-modal' id='modal'>
        {/* Close button */}
        <button className='photo-details-modal--close-button' onClick={() => dispatch({type: "CLOSE_MODAL"})}>X</button>

        {/* Display the main photo */}
        <img className="photo-details-modal--image" src={photoData.urls.full}/>

        {/* Header for similar photos */}
        <p className="photo-details-modal--header">Similar Photos</p>

        {/* Render the PhotoList component to display similar photos */}
        <div className="photo-details-modal--images">
          <PhotoList photos={similarArr} likedPhotos={likedPhotos} dispatch={dispatch} filteredPhotos={[]} />
        </div>
      </dialog>
    );
  } else {
    // If modalShown is false, return null or an empty fragment
    return null;
  }
};

export default PhotoDetailsModal;