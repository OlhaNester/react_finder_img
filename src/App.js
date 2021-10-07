import React, { Component } from "react";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import axios from "axios";

//import Loader from './Components/Loader';

export class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchQuery();
    }
  };

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchQuery = () => {
    axios
      .get(
        `https://pixabay.com/api/?key=20298268-ad7854859c2b2dc6e8b44e367&q=${this.state.searchQuery}&image_type=photo&page=${this.state.currentPage}&per_page=3`
      )
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery}></Searchbar>
        <ul>
          {this.state.images.map(({ id, webformatURL, title }) => (
            <li key={id}>
              <img alt={title} src={webformatURL} width="200"></img>{" "}
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.fetchQuery}>
          Загрузить еще
        </button>

        {/* <ImageGallery></ImageGallery>  */}
      </>
    );
  }
}

export default App;

//20298268-ad7854859c2b2dc6e8b44e367
