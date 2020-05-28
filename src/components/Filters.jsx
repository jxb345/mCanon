import React, { useState, useRef } from 'react';


const Filters = (props) => {
  console.log('props in filters', props);

  return (
    <div>
      Filters
        <div>
      <p>Book</p>
        <input type="radio" name="book-filter" id="book-filter" value="canon" onClick={props.handleBookChange}  />
          <label for="canon">canon</label>
        <input type="radio" name="book-filter" id="book-filter" value="research" onClick={props.handleBookChange} />
          <label for="research">research</label>
        </div>
        <div>
          <p>Mood</p>
          <select type="text" name="mood" id="mood" onChange={props.handleMoodChange}>
          <option disabled selected value> select an mood</option>
          <option value="chill">chill</option>
          <option value="upbeat">upbeat</option>
          <option value="daytime">daytime</option>
        </select>
        </div>

    </div>
  )
}

export default Filters