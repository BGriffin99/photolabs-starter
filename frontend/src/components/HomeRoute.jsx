import React from "react";
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  // Destructure the props
  const { topics, photos, dispatch, likedPhotos, filteredPhotos } = props;

  return (
    <div className="home-route">
      {/* Render the TopNavigation component */}
      <TopNavigation topics={topics} likedPhotos={likedPhotos} dispatch={dispatch} />

      {/* Render the PhotoList component */}
      <PhotoList photos={photos} likedPhotos={likedPhotos} dispatch={dispatch} filteredPhotos={filteredPhotos} />
    </div>
  );
};

export default HomeRoute;