import React from "react"
import {Route, NavLink} from "react-router-dom"

import queryString from "query-string"
import $ from "jquery"

import '../styles/App.css'

const NewThingForm = () => (
  <form action="/api/things" method="POST">
    <h2>New Thing</h2>
    <input type="text" name="name"/>
    <input type="text" name="label"/>
    <input type="text" name="bin"/>
    <input type="submit" value="Submit"/>
  </form>
)

const MoveThingForm = () => (
  <form action="/api/thing" method="POST">
    <h2>Move Thing</h2>
    <input type="hidden" name="_method" value="put"/>
    <input type="text" name="label"/>
    <input type="text" name="bin"/>
    <input type="submit" value="Submit"/>
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
              autoComplete="off"
              onSubmit={this.handleSubmit}>
          <h2>Thing Search</h2>
          <input type="text" name="query"
                 value={this.state.query}
                 onChange={this.handleChange}/>
          <input type="submit" value="Search"/>
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
    <NavLink to="/new/thing">New</NavLink>
    <NavLink to="/move/thing">Move</NavLink>
    <NavLink to="/search">Search</NavLink>
    <Route path="/new/thing" component={NewThingForm}/>
    <Route path="/move/thing" component={MoveThingForm}/>
    <Route path="/search" component={SearchThingForm}/>
  </div>
)

export default App
