import React, { useState } from 'react';
import { response } from 'express';


const Filters = () => {
  const [whichBook, setWhichBook] = useState('canon');

  const handleBookChange = (e) => {
    console.log('e', e.target.value)
    if (whichBook === 'canon') {
      setWhichBook('research')
    } else {
      setWhichBook('canon');
    }
    console.log('whichBook', whichBook);
    fetch('/query-entries', {
      method: 'post',
      headers: {
        'Content-Type': 'text/html',
      },
      body: whichBook
    })
    .then(response => response.json())
    .then(data => {
      console.log('data', data);
    })

  }

  return (
    <div>
      Filters
      <p>Book</p>
        <div>
        <input type="radio" name="book-filter" id="book-filter" value="canon" onClick={handleBookChange}  />
          <label for="canon">canon</label>
        <input type="radio" name="book-filter" id="book-filter" value="research" onClick={handleBookChange} />
          <label for="research">research</label>
        </div>

    </div>
  )
}

export default Filters