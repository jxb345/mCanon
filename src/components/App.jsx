import React, { useEffect, useState, useRef } from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
import Filters from './Filters.jsx';

const App = () => {

  const whichBook = useRef('');
  const [entries, setEntries] = useState([]);

  const handleBookChange = (e) => {
    let bookFilter = e.target.value;
    if (bookFilter === 'research') {
      whichBook.current = 'research';
    } else {
      whichBook.current = 'canon';
    }
    console.log('whichBook', whichBook);
    fetch('/query-entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(whichBook)
    })
    .then(response => response.json())
    .then(data => setEntries(data));
  }

    useEffect(() => {
    console.log('fetching...')
    fetch('/query-entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
      .then(response => response.json())
      .then(data => setEntries((data)));
  }, [])


  return (
    <div>
      mCanon
      <Form />
      <Filters handleBookChange={handleBookChange} whichBook={whichBook}/>
      <List entries={entries} />
    </div>
  )
}

export default App;