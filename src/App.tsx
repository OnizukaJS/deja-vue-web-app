import React from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import SearchContextProvider from "./context/SearchContextProvider";
import useFetchTopRatedMovies from "./hooks/useFetchTopRatedMovies";
import Content from "./pages/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchContextProvider>
        <Content />
      </SearchContextProvider>
      <Footer />
    </div>
  );
}

export default App;
