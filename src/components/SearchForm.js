import React from "react"

import InlineSVG from 'svg-inline-react';
import queryString from "query-string"
import $ from "jquery"

import SearchResults from './SearchResults'

import SearchIcon from '../img/search.svg'

/* state.search = {
  query: "",
  searchResults: [],
  isSubmitted: false,
  isLoaded: false
}*/

class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {query: queryString.parse(this.props.location.search).query} //searchResults: [], isSubmitted: false, isLoaded: false}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    if (typeof(this.state.query) != "undefined") {
      $.getJSON("/api/search?"+queryString.stringify({query: this.state.query}),
                null, (data, status) => {
                  this.setState({searchResults: data, isLoaded: true})
                })
    }
  }

  handleSubmit(event) {
    console.log("handleSubmit")
    this.props.history.push("/search?" + queryString.stringify({query: this.state.query}))
    $.getJSON("/api/search?"+queryString.stringify({query: this.state.query}),
              null, (data, status) => {this.setState({searchResults: data, isLoaded: true})})
    event.preventDefault()
  }
  handleChange(event) {
    console.log("handleChange")
    this.setState({query: event.target.value})
  }
  render() {
    return (
      <React.Fragment>
        <form action="/search" method="GET"
              className='inv-form'
              autoComplete="off"
              onSubmit={this.handleSubmit}>
          <h3 style={{textAlign: 'center', border:'3px solid red'}}>API Not Implemented Yet</h3>
          <h2 className='inv-form__title'>Thing Search</h2>
          <div className='inv-form__item'>
            <input id="search-input" type="text" name="query"
                   className='inv-form__input'
                   value={this.state.query}
                   onChange={this.handleChange}/>
            <label className='inv-form__item__label' htmlFor="search-input">
              <InlineSVG src={SearchIcon}/>
            </label>
          </div>

          <button className='inv-form__submit'>
            Search
          </button>
        </form>
        <SearchResults results={this.state.searchResults} />
      </React.Fragment>
    )
  }
}

export default SearchForm
