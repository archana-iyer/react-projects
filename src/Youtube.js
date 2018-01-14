import React, {Component} from 'react';

const API_KEY = 'AIzaSyCTvdn3DQI5xJ51twq-c8lbdKmZ5esCoq8';
const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A';
const result = 20;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
        videos: [],
        selectedVideo: null
      };
      this.videoSearch('funny cat videos');
  }

}
