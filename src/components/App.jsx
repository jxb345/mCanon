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
  const [editButton, setEditButton] = useState(false);
  const [editEntry, setEditEntry] = useState([]);

  // moved FROM Search.jsx
  const displayForm = () => {
    const popup = document.getElementsByClassName("new-entry-popup")[0];
    console.log('popup', popup)
    popup.style.display = "block";
  }

  const handleFilterChange = (e) => {
    let currentFilterValue = e.target.value;
    let currentFilterId = e.target.id
    setSelectedFilters(selectedFilters => ({...selectedFilters, [currentFilterId]: currentFilterValue  }));
  }

  const handleClick = (e) => {
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
    <div className="whole-app">
      <div className="title">
        mCanon
      </div>
      <div className="grid">
        <div className="new-area">
          <button className="new-entry-btn" onClick={displayForm}>+</button>
        </div>
        <div className="one">
          <Search  entries={entries} setEntries={setEntries} />
        </div>
        <div className="two">
          <Filters handleFilterChange={handleFilterChange} filter={filter}  setEditButton={setEditButton} editButton={editButton} editEntry={editEntry}/>
          </div>
        <div className="three">
          <List setEntries={setEntries} entries={entries} handleClick={handleClick} clicked={clicked} setClicked={setClicked} setEditButton={setEditButton} setEditEntry={setEditEntry}  />
          </div>
      </div>
    </div>
  )
}

export default App;