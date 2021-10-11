import React from "react";
import ImageGalleryItem from '../ImageGalleryItem';


const ImageGallery = ({ images, onClick }) => (
  <>
   <ul>
      {images.map(({ id, webformatURL, title, largeImageURL }) => (
            
        <ImageGalleryItem key={id} webformatURL={webformatURL} title={title} largeImageURL={largeImageURL} onClick={ ()=> onClick(largeImageURL)}/>
          ))}
        </ul>
        
    </>
);
export default ImageGallery;
