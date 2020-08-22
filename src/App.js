import React from "react";
import Row from "./Row";
import requests from "./requests";
import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        islargeRow
      />
      <Row title="trending" fetchUrl={requests.fetchTrending} />
      <Row title="top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="romance movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="documentaries" fetchUrl={requests.fetchDocumantries} />
    </div>
  );
}
