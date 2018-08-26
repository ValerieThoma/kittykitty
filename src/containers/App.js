 import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
    const { kitty, searchfield } = this.state;
    const filteredKitties = kitty.filter(kitty => {
      return kitty.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    }) 
    return !kitty.length ? 
      <h1 className='tc'>Loading</h1> :
      (
        <div className="tc">
          <h1 className="f1">Kitty Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList kitty={filteredKitties} />
          </Scroll>
        </div>
      );
    }
  }

export default App;