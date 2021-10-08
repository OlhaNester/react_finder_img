import React from 'react';

const ImageGalleryItem = ({id, title, webformatURL  }) => (
    <li key={id}>
              <img alt={title} src={webformatURL} width="200"></img>{" "}
            </li>
);
export default ImageGalleryItem;