import React, { useEffect, useState, useRef } from 'react';
import List from './List.jsx';
import Search from './Search.jsx';
import Filters from './Filters.jsx';

const App = () => {

  const filter = useRef('');
  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [clicked, setClicked] = useState({});

  const handleFilterChange = (e) => {
    let currentFilterValue = e.target.value;
    let currentFilterId = e.target.id
    setSelectedFilters(selectedFilters => ({...selectedFilters, [currentFilterId]: currentFilterValue  }));
  }

  const handleClick = (e) => {

    console.log('click', clicked)

     fetch('/delete-entry', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(clicked)
     })
     .then(response => response.json())
     .then(data => console.log('data', data));
   }

    useEffect(() => {
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
      <div className="grid">
        <div className="one">
          {/* <Form /> */}
          <Search  entries={entries} setEntries={setEntries} />
        </div>
        <div className="two">
          <Filters handleFilterChange={handleFilterChange} filter={filter} />
          </div>
        <div className="three">
          <List entries={entries} handleClick={handleClick} clicked={clicked} setClicked={setClicked} />
          </div>
      </div>
    </div>
  )
}

export default App;