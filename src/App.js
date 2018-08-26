import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { kitty } from "./kitty";

const App = () => {
  return (
    <div>
      <h1>Kitty Friends</h1>
      <SearchBox />
      <CardList kitty={kitty} />
    </div>
  );
}

export default App;