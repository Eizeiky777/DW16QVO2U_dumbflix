import React, { Component } from 'react';
import Header from './components/beranda/header';
import Banner from './components/beranda/jumbotron';
import MovieList from './components/beranda/movielist';

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Banner />
        <MovieList />
      </div>
    );
  }
}

export default App;
