import * as React from 'react';
import './App.css';
import Row from "./Row";
import Banner from './Banner';
import Navbar from './Navbar';
import req from './request';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner />
    <div className="allRows" style={{margin:"1.5rem 0 0 0"}}>
    <Row title="NETFLUX ORIGINALS" fetch={req.fetchNetflixOriginals} isLargerow="true"/>
    <Row title="TRENDING NOW" fetch={req.fetchTrending} />
    <Row title="TOP RATED" fetch={req.fetchTopRated} />
    <Row title="ACTION MOVIES" fetch={req.fetchActionMovies}/>
    <Row title="COMEDY MOVIES" fetch={req.fetchComedyMovies}/>
    <Row title="HORROR MOVIES" fetch={req.fetchHorrorMovies} />
    <Row title="ROMANTIC MOVIES" fetch={req.fetchRomanceMovies} />
    <Row title="DOCUMENTORIES" fetch={req.fetchDocumantaries}/>
    </div>
    </div>
  );
}

export default App;
