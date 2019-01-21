import React from "react"
import { connect } from 'react-redux'

import InlineSVG from 'svg-inline-react';
import QueryString from "query-string"
import $ from "jquery"

import SearchResults from './SearchResults'

import SearchIcon from '../img/search.svg'

import { setQuery, setSearchResults } from '../actions'
import initialState from '../initialState'


class SearchForm extends React.Component {
  constructor(props) {
    super(props)



    this.state = {inputState: ''}
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const query = QueryString.parse(this.props.location.search).query
    if(this.props.query == initialState.query) {
      this.setState({inputState: query})      
      this.props.setQuery(query)
    }
    if(this.props.loaded === initialState.loaded) {
      console.log("initial load")
      $.getJSON("/api/search?"+QueryString.stringify({query}),
                null, (data, status) => {
                  this.props.setSearchResults(data)
                })
    }
  }

  handleSubmit(event) {
    const queryString = QueryString.stringify({query: this.state.inputState})
    this.props.history.push("/search?" + queryString)
    $.getJSON("/api/search?"+queryString, null,
              (data, status) => {
                this.props.setSearchResults(data)
              })
    event.preventDefault()
  }
  
  handleChange(event) {
    this.setState({inputState: event.target.value})
  }
  
  render() {
    return (
      <React.Fragment>
        <form action="/search" method="GET"
              className='inv-form'
              autoComplete="off"
              onSubmit={this.handleSubmit}>
          <h2 className='inv-form__title'>Thing Search</h2>
          <div className='inv-form__item'>
            <input id="search-input" type="text" name="query"
                   className='inv-form__input'
                   value={this.state.inputState}
                   onChange={this.handleChange}/>
            <label className='inv-form__item__label' htmlFor="search-input">
              <InlineSVG src={SearchIcon}/>
            </label>
          </div>

          <button className='inv-form__submit'>
            Search
          </button>
        </form>
        <SearchResults results={this.props.searchResults} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  setQuery: setQuery,
  setSearchResults: setSearchResults
}

export default connect(mapStateToProps, mapDispatchToProps)(
  SearchForm
)
