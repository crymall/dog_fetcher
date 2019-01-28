import React from "react";

const Image = props => {
  const { imgUrl, addNewFavorite } = props;
  return (
    <img
      src={imgUrl}
      onClick={() => {
        addNewFavorite(imgUrl);
      }}
      className="dog_img"
      alt=""
    />
  );
};

export default Image;
