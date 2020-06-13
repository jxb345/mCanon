import React, { useState, useRef } from 'react';


const Filters = (props) => {

  return (
    <div>
      <div className="filters">
        <p>
          book
          <br></br>
        <select type="text" name="book" id="book" onChange={props.handleFilterChange} >
          <option value="clear">BOTH BOOKS</option>
          <option value="book"></option>
          <option value="research"></option>
        </select>
        </p>
        <div>
          <p>
            mood
            <br/>
          <select type="text" name="mood" id="mood" onChange={props.handleFilterChange}>
            <option value="clear">ALL MOODS</option>
            <option value="chill">chill</option>
            <option value="upbeat">upbeat</option>
            <option value="daytime">daytime</option>
          </select>
          </p>
        </div>
        <div>
          <p>
            genre
            <br/>
          <select type="text" name="genre" id="genre" onChange={props.handleFilterChange}>
            <option value="clear">ALL GENRES</option>
            <option value="rock">rock</option>
            <option value="rap">rap</option>
            <option value="jazz">jazz</option>
            <option value="blues">blues</option>
            <option value="funk">funk</option>
            <option value="rhythmAndlues">rhythm and blues</option>
            <option value="electronic">electronic</option>
            <option value="country">country</option>
          </select>
          </p>
        </div>
        <div>
          <p>
            instrumental
            <br/>
        <select type="text" name="instrumental" id="instrumental" onChange={props.handleFilterChange} >
          <option value="clear">ALL</option>
          <option value="yes"></option>
          <option value="no"></option>
        </select>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Filters