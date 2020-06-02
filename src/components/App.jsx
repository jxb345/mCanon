import React, { useEffect, useState, useRef } from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
import Filters from './Filters.jsx';

const App = () => {

  const filter = useRef('');
  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState(true);
  const [toggleButton, setToggleButton] = useState('New Entry');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (e) => {
    let currentFilterValue = e.target.value;
    let currentFilterId = e.target.id
    // let currentFilterPair = {[currentFilterId]: currentFilterValue }
    console.log('e.target.id----', e.target.id)
    if (currentFilterValue === 'clear') {
      currentFilterValue = '';
    }
    setSelectedFilters(selectedFilters => ({...selectedFilters, [currentFilterId]: currentFilterValue  }));
  }

  const handleToggle = () => {
    setSearch(!search);
  }

    useEffect(() => {
      console.log('selectedFilters', selectedFilters)
      console.log('fetching...')
      fetch('/query-entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedFilters)
      })
        .then(response => response.json())
        .then(data => setEntries((data)));
        return () => {
          console.log('filter end')
        }
      }, [selectedFilters])

  return (
    <div>
      <div className="title">
        mCanon
      </div>
      {/* <button onClick={handleToggle}>New Entry</button>
      <button onClick={handleToggle}>Search</button> */}
      <div className="grid">
        <div className="one">
          <Form />
        </div>
        <div className="two">
          <Filters handleFilterChange={handleFilterChange} filter={filter} />
          </div>
        <div className="three">
          <List entries={entries} />
          </div>
      </div>
    </div>
  )
}

export default App;