import React, { useEffect, useState, useRef } from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
import Filters from './Filters.jsx';

const App = () => {

  const whichBook = useRef('');
  const [entries, setEntries] = useState([]);

  const handleFilterChange = (e) => {
    let selectedFilter;
    let filter = e.target.value;
    whichBook.current = filter;

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

  // const handleMoodChange = (e) => {
  //   console.log('e', e.target.value)
  // }

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
      <Filters handleFilterChange={handleFilterChange} whichBook={whichBook}/>
      <List entries={entries} />
    </div>
  )
}

export default App;