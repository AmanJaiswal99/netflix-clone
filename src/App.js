import React from 'react';
import Row from './components/Row'
import './App.css';
import Original from './components/Original'
import requests from './requests';
import Banner from './components/Banner'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="Trending Today" fetchUrl={requests.fetchTrending}/>
      <Original title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated" fetchUrl={requests.fetchRated}/>
      <Row title="Action" fetchUrl={requests.fetchAction}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedy}/>
      <Row title="Horror" fetchUrl={requests.fetchHorror}/>
      <Row title="Romance" fetchUrl={requests.fetchRomance}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
