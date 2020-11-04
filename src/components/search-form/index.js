import React, { Component } from 'react';
const API_KEY = process.env.REACT_APP_OMDB_API_KEY

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleOnSubmit = (e) => {
        e.preventDefault();
        const {inputMovie} = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then((res) => res.json())
        .then(data => {
            const { Search, totalResults } = data
            this.props.onResults(Search ? Search : [])
        })
    }

    render() {
        return (
            <form onSubmit={this._handleOnSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Movie to search.."
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}