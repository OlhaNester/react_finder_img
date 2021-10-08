import React, { Component } from "react";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import newsApi from "./Components/Services/newsApi";


//import Loader from './Components/Loader';

export class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchQuery !== this.state.searchQuery) {
      
      this.fetchQuery();
    }
  };

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, images: [], error: null });
  };
  

  fetchQuery = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };
    this.setState({ isLoading: true });
    newsApi.fetchQuery(options).then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      }).catch(error=>this.setState({error})).finally(()=>this.setState({isLoading: false}));
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery}></Searchbar>
        {this.state.isLoading && <p>Loading...</p> }
        <ImageGallery images={this.state.images} />
        { this.state.images.length>0 && !this.state.isLoading && (<button type="button" onClick={this.fetchQuery}>
          Загрузить еще
    </button>)}

       
      </>
    );
  }
}

export default App;

//20298268-ad7854859c2b2dc6e8b44e367
