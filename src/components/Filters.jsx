import React, { useState, useRef } from 'react';


const Filters = (props) => {

  return (
    <div>
      Filters
        <div>
      <p>Book</p>
        <input type="radio" name="book" id="book" value="canon" onClick={props.handleFilterChange} />
          <label for="canon">canon</label>
        <input type="radio" name="book" id="book" value="research" onClick={props.handleFilterChange} />
          <label for="research">research</label>
        </div>
        <div>
          <p>Mood</p>
          <select type="text" name="mood" id="mood" onChange={props.handleFilterChange}>
          <option disabled selected value> select an mood</option>
          <option value="clear-mood">CLEAR MOOD</option>
          <option value="chill">chill</option>
          <option value="upbeat">upbeat</option>
          <option value="daytime">daytime</option>
        </select>
        </div>
        <div>
          <p>Genre</p>
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
          <p>Instrumental</p>
          <div>
          <input type="radio" name="instrumental" id="instrumental" value="yes" onChange={props.handleFilterChange} />
          <label for="yes">yes</label>
          <input type="radio" name="instrumental" id="instrumental" value="no" onChange={props.handleFilterChange} />
          <label for="no">no</label>
        </div>


        </div>

    </div>
  )
}

export default Filters