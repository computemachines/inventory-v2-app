import React from 'react'

const SearchItem = props => (
  <li key={props.key}>
    <h3>{props.name}</h3>
    <ul>
      <li>Label: {props.label}</li>
      <li>Bin: {props.bin}</li>
    </ul>
  </li>
)

export default SearchItem
