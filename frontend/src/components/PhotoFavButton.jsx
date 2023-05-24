import React, { useCallback, useState } from "react";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleIconClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="photo-list--fav-icon" onClick={handleIconClick}>
      <div
        className={`photo-list--fav-icon-svg ${
          isFavorited ? "highlighted" : ""
        }`}
      >
        <FavIcon className={isFavorited ? "highlighted" : ""} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
