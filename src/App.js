import React, { Component } from 'react';
import searchIcon from './search-icon.svg';
import './App.css';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import searchYouTube from 'youtube-api-search';

const API_KEY = 'AIzaSyCTvdn3DQI5xJ51twq-c8lbdKmZ5esCoq8';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('cute cat');
  }


  videoSearch(term) {
    searchYouTube({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={searchIcon} className="app-logo" alt="logo" />
          <h1 className="app-title">Search a Video</h1>
        </header>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
