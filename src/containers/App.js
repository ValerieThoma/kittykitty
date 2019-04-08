import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { setSearchField } from "../actions";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const mapStateToProps = (state) => {
  return { searchField: state.searchKitties };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  };
};


class App extends Component {
  constructor() {
    super()
    this.state = {
      kitty: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ kitty: users }));
  }
  
  render () {
    const { kitty, searchField } = this.state;
    const filteredKitties = kitty.filter(kitty => {
      return kitty.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
    return !kitty.length ? <h1 className="tc">
        Loading
      </h1> : <div className="tc">
        <h1 className="f1">Kitty Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList kitty={filteredKitties} />
          </ErrorBoundry>
        </Scroll>
      </div>;
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);