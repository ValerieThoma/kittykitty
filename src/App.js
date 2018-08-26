import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { kitty } from './kitty';

class App extends Component {
  constructor() {
    super()
    this.state = {
      kitty: kitty,
      searchfield: ''
    }
  }

  onSearchChange = (event) =>  {
    this.setState( {searchfield : event.target.value  })
  }
  
  render () {
    const filteredKitties = this.state.kitty.filter(kitty => {
      return kitty.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>Kitty Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList kitty={filteredKitties} />
      </div>
    );
  }
  
}

export default App;