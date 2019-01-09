import React from "react"
import {Route, NavLink} from "react-router-dom"

import queryString from "query-string"
import $ from "jquery"

import Logo from '../img/logo.svg';
import InlineSVG from 'svg-inline-react';
import SearchIcon from '../img/search.svg';


import '../styles/App.css'

const NewThingForm = () => (
  <form action="/api/things" method="POST" className='inv-form'>
    <h2 className='inv-form__title'>New Thing</h2>
    <div className="inv-form__item">
      <input id="thing-name" type="text" name="thing_name"/>
      <label for="thing-name">Name</label>
    </div>
    <div className="inv-form__item">
      <input id="thing-label" type="text" name="thing_label"/>
      <label for="thing-label">UNIQ</label>
    </div>
    <div className="inv-form__item">
      <input id="bin-label" type="text" name="bin_label"/>
      <label for="bin-label">BIN</label>
    </div>
    <input className='inv-form__submit' type="submit" value="Submit"/>
  </form>
)

const MoveThingForm = () => (
  <form action="/api/thing" method="POST" className='inv-form'>
    <input id='' type="hidden" name="_method" value="put"/>
    <h2 className='inv-form__title'>Move Thing</h2>
    <div className='inv-form__item'>
      <input id='thing-label' type="text" name="thing_label"/>
      <label for='thing-label'>UNIQ</label>
    </div>
    <div className='inv-form__item'>
      <input id='bin-label' type="text" name="bin_label"/>
      <label for='bin-label'>BIN</label>
    </div>
    <input className='inv-form__submit' type="submit" value="Submit"/>
  </form>
)

class SearchThingForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {query: queryString.parse(this.props.location.search).query, searchResults: [], isSubmitted: false, isLoaded: false}
    this.controlled = false

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    $.getJSON("/api/search?"+queryString.stringify({query: this.state.query}),
              null, (data, status) => {this.setState({searchResults: data, isLoaded: true})})
  }

  handleSubmit(event) {
    console.log("handleSubmit")
    this.setState({isSubmitted: true})
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
          <h2 className='inv-form__title'>Thing Search</h2>
          <div className='inv-form__item'>
            <input type="text" name="query"
                   className='inv-form__input'
                   value={this.state.query}
                   onChange={this.handleChange}/>
            <InlineSVG src={SearchIcon}
                       className='inv-form__item__label' />
          </div>

          <button>
            Search
          </button>
        </form>
        <SearchResults results={this.state.searchResults} />
      </React.Fragment>
    )
  }
}

const SearchSuggestions = () => (false)


function SearchResults(results) {
  return (
    <ol className="search-results">
      {""+results.results}
    </ol>
  )
}


const App = () => (
  <div>
    <InlineSVG src={Logo} className="logo"/>
    <nav>
      <NavLink to="/new/thing" className="navlink" activeClassName="navlink--selected">New</NavLink>
      <NavLink to="/move/thing" className="navlink" activeClassName="navlink--selected">Move</NavLink>
      <NavLink to="/search" className="navlink" activeClassName="navlink--selected">Search</NavLink>
    </nav>
    <Route path="/new/thing" component={NewThingForm}/>
    <Route path="/move/thing" component={MoveThingForm}/>
    <Route path="/search" component={SearchThingForm}/>
  </div>
)

export default App
