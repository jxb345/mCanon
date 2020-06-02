import React, { useState, useRef } from 'react';


const Filters = (props) => {

  return (
    <div>
      <div className="filters">
        <p>book</p>
        <select type="text" name="book" id="book" onClick={props.handleFilterChange} >
          <option disabled selected value>select a book</option>
          <option value="book"></option>
          <option value="research"></option>
        </select>
        <div>
          <p>mood</p>
          <select type="text" name="mood" id="mood" onChange={props.handleFilterChange}>
            <option disabled selected value> select an mood</option>
            <option value="clear-mood">CLEAR MOOD</option>
            <option value="chill">chill</option>
            <option value="upbeat">upbeat</option>
            <option value="daytime">daytime</option>
          </select>
        </div>
        <div>
          <p>genre</p>
          <select type="text" name="genre" id="genre" onChange={props.handleFilterChange}>
            <option disabled selected value> select an genre</option>
            <option value="clear-genre">CLEAR GENRE</option>
            <option value="rock">rock</option>
            <option value="rap">rap</option>
            <option value="jazz">jazz</option>
            <option value="blues">blues</option>
            <option value="funk">funk</option>
            <option value="rhythmAndlues">rhythm and blues</option>
            <option value="electronic">electronic</option>
            <option value="country">country</option>
          </select>
        </div>
        <div>
          <p>instrumental</p>
        <select type="text" name="instrumental" id="instrumental" onClick={props.handleFilterChange} >
          <option disabled selected value>instrumental</option>
          <option value="yes"></option>
          <option value="no"></option>
        </select>

        </div>
      </div>

    </div>
  )
}

export default Filters