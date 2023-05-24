import React from 'react';

import PhotoList from './components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(null);

  return (
    <div className="App">
      <PhotoList photos={photos} />
    </div>
  );
};

export default App