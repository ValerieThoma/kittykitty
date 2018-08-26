import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      kitty: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ kitty: users }));
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
    if (this.state.kitty.length === 0) {
      return <h1 className='tc'>Loading</h1>
    } else {
      return <div className="tc">
          <h1 className="f1">Kitty Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList kitty={filteredKitties} />
          </Scroll>
        </div>;
    }
  }
}

export default App;