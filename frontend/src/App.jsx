import React from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './components/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

import './App.scss';

const App = () => {
  // Use the useApplicationData hook to access the state and dispatch function
  const { state, dispatch } = useApplicationData();

  return (
    <div className="App">
      {/* Render the HomeRoute component and pass necessary props */}
      <HomeRoute
        topics={state.topics}
        photos={state.photos}
        likedPhotos={state.likedPhotos}
        dispatch={dispatch}
        filteredPhotos={state.filteredPhotos}
      />
      {/* Render the PhotoDetailsModal component and pass necessary props */}
      <PhotoDetailsModal
        photoData={state.photoData}
        modalShown={state.modalShown}
        likedPhotos={state.likedPhotos}
        dispatch={dispatch}
      />
    </div>
  );
};

export default App;