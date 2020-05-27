import React, { useState, useRef } from 'react';


const Filters = (props) => {
  console.log('props in filters', props);
  // const [whichBook, setWhichBook] = useState('');
  // const whichBook = useRef('');

  // const handleBookChange = (e) => {
  //   let bookFilter = e.target.value;
  //   if (bookFilter === 'research') {
  //     whichBook.current = 'research';
  //   } else {
  //     whichBook.current = 'canon';
  //   }
  //   console.log('whichBook', whichBook);
  //   fetch('/query-entries', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(whichBook)
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log('data'));
  // }

  return (
    <div>
      Filters
      <p>Book</p>
        <div>
        <input type="radio" name="book-filter" id="book-filter" value="canon" onClick={props.handleBookChange}  />
          <label for="canon">canon</label>
        <input type="radio" name="book-filter" id="book-filter" value="research" onClick={props.handleBookChange} />
          <label for="research">research</label>
        </div>

    </div>
  )
}

export default Filters