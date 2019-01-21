import React from 'react'

const SearchItem = props => (
  <div>
    <h3>{props.name}</h3>
    <ul>
      <li>Label: {props.label}</li>
      <li>Bin: {props.bin}</li>
    </ul>
  </div>
)

export default SearchItem
