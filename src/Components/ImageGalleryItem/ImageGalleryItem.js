import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ id, title, webformatURL, largeImageURL, onClick }) => {
  return(<li key={id} className="ImageGalleryItem">
      <img className= "ImageGalleryItem-image" alt={title} src={webformatURL} largeImageURL={largeImageURL} onClick={onClick} />
    </li>)
};
export default ImageGalleryItem;

