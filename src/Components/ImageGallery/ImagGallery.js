import React from "react";
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <>
   <ul>
          {images.map(({ id, webformatURL, title }) => (
            <ImageGalleryItem id={id} webformatURL={webformatURL} title={ title}/>
          ))}
        </ul>
        
    </>
);
export default ImageGallery;
