import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Title } from './components/title'
import { SearchForm } from './components/search-form'
import { MoviesList } from './components/movies-list';

export class App extends Component {
  state = { usedSearch:false, results: [] }

  _handleResults = (results) => {
    this.setState({results, usedSearch: true})
  }

  _renderResults = () => {
    return this.state.results.length === 0
      ? <p>No results</p>
      : <MoviesList
        movies={this.state.results}
      />
  }

  render() {
    return (
        <div className="App">
          <Title>Search Movies</Title>
          <div className="SearchForm-wrapper">
            <SearchForm onResults={this._handleResults}/>
          </div>
          {
            this.state.usedSearch 
            ? this._renderResults()
            :<small>Please, search something</small>
          }
        </div>
      );
  }
}

