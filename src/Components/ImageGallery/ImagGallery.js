import React from "react";
import ImageGalleryItem from '../ImageGalleryItem';
import "./ImageGallery.css";


const ImageGallery = ({ images, onClick }) => (
  <>
   <ul className="ImageGallery">
      {images.map(({ id, webformatURL, title, largeImageURL }) => (
            
        <ImageGalleryItem key={id} webformatURL={webformatURL} title={title} largeImageURL={largeImageURL} onClick={ ()=> onClick(largeImageURL)}/>
          ))}
        </ul>
        
    </>
);
export default ImageGallery;
