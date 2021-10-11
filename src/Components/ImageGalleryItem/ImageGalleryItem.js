import React from 'react';

const ImageGalleryItem = ({ id, title, webformatURL, largeImageURL, onClick }) => {
  return(<li key={id}>
      <img alt={title} src={webformatURL} width="200" largeImageURL={largeImageURL} onClick={onClick} />
    </li>)
};
export default ImageGalleryItem;