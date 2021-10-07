import React, { Component } from 'react'
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import axios from 'axios';
//import Loader from './Components/Loader';


export class App extends Component {
  state = {
    images: [],
    currentPage: 1,
  };

   onChangeQuery = (query) => {
       axios.get(`https://pixabay.com/api/?key=20298268-ad7854859c2b2dc6e8b44e367&q=${query}&image_type=photo&page=${currentPage}`)
      .then(response => {
      this.setState({ images: response.data.hits, });
    })
  }
  render() {
    
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery}></Searchbar>
        <ul>
          {this.state.images.map(({ id, webformatURL, title }) =>
            <li key={id}>
              <img alt={title } src={webformatURL}></img> </li>)}
        </ul>
    
    {/* <ImageGallery></ImageGallery>  */}
    
      </>
    )
  }
}

export default App

//20298268-ad7854859c2b2dc6e8b44e367