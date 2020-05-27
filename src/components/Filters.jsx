import React, { useState, useRef } from 'react';


const Filters = () => {
  // const [whichBook, setWhichBook] = useState('');
  const whichBook = useRef('');

  const handleBookChange = (e) => {
    let bookFilter = e.target.value;
    console.log('bookFilter', typeof bookFilter)
    if (bookFilter === 'research') {
      whichBook.current = 'research';
    } else {
      whichBook.current = 'canon';
    }
    console.log('whichBook', whichBook);
    fetch('/query-entries', {
      data: whichBook.current
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