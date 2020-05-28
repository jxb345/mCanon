import React, { useEffect, useState, useRef } from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
import Filters from './Filters.jsx';

const App = () => {

  const filter = useRef('');
  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState(true);
  const [toggleButton, setToggleButton] = useState('New Entry');

  const handleFilterChange = (e) => {
    let selectedFilter = e.target.value;
    filter.current = selectedFilter;

    fetch('/query-entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filter)
    })
    .then(response => response.json())
    .then(data => setEntries(data));
  }

  const handleToggle = () => {
    setSearch(!search);
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
      <button onClick={handleToggle}>New Entry</button>
      <button onClick={handleToggle}>Search</button>

      {search
        ? <Filters handleFilterChange={handleFilterChange} filter={filter}/>
        : <Form />
      }
      <List entries={entries} />
    </div>
  )
}

export default App;