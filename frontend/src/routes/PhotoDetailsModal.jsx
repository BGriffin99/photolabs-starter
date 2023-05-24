import React from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {
  // Check if the current photo is liked
  const liked = props.likedPhotoArray.includes(props.modalData.id);

  return (
    <div className='photo-details-modal'>
      {/* Close button */}
      <button className='photo-details-modal--close-button' onClick={props.onClose}>
        {/* Close icon */}
      </button>

      <div className='photo-details-modal--images' key={props.modalData.id}>
        {/* Photo favorite button */}
        <PhotoFavButton photoId={props.modalData.id} onClickLikes={props.onClickLikes} liked={liked} />

        {/* Display the main photo */}
        <img className='photo-details-modal--image' src={props.modalData.urls.regular} />

        {/* Display the photographer's name */}
        <h2>{props.modalData.user.name}</h2>

        {/* Divider */}
        <hr className='photo-details-modal-line' />

        {/* Header for similar photos */}
        <header className='photo-details-modal--header'>Similar Photos</header>

        {/* Render the PhotoList component to display similar photos */}
        <PhotoList
          photoData={props.photoData}
          onClickLikes={props.onClickLikes}
          likedPhotoArray={props.likedPhotoArray}
          onClickModal={props.onClickModal}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;