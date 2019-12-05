import React from 'react';
import './App.css';

function App() {
  //todo: get the list of people, store it in memory -- have a sortValue (default 0) and an isFavorite as part of the objects
  //todo: get the list of planets for the sake of the planet names, store it as well
  //todo: make a "sorted character list" page kind of thing for favorites.
  //todo: figure out how to drag and drop
  //todo: make a favoritesTableRow object to hold the sort value and the person object
  //todo: have a characterGetterService that'll grab data from that api and store it in memory
  //todo: -- implement caching, so it doesn't have to get the stuff again
  //todo: have a planetGetterService that'll grab data from the api, store it in memory, and allow getting planetName by id
  //todo: have a favoritesListService that'll behave like a db for holding the favorited characters(?)
  //todo: -- might not need that if I implement the isFavorite on the characters stored in the characterGetterService
  //todo: -- -- remember to use .filter((item) => item.isFavorite === true) to get the favorites, kind of thing.
  return (
    <div className="App">
      Ook.
    </div>
  );
}

export default App;
