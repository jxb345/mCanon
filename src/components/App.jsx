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
  const [buttonClicked, setButtonClicked] = useState('');
  const [editEntry, setEditEntry] = useState([]);
  const [onChangeAttribute, setOnChangeAttribute] = useState('');
  const [disabledAttribute, setDisabledAttribute] = useState('');
  const [option, setOption] = useState('')
  const [filterSelect, setFilterSelect] = useState(true)

  // moved FROM Search.jsx
  const displayForm = () => {
    setButtonClicked('new');
    const popup = document.getElementsByClassName("new-entry-popup")[0];
    console.log('popup.style', popup.style)
    popup.style.display = "block";
  }

  const titleStyle = {
    color: 'rgb(145, 159, 182)'
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
          console.log('buttonClicked', buttonClicked)
        }
      }, [selectedFilters])

  return (
    <div>
      <div className="title">
        m<span style={titleStyle}>C</span>anon
      </div>
      <div className="grid">
        <div className="grid-new-button">
          <button className="new-entry-btn" onClick={displayForm}>+</button>
        </div>
        <div className="grid-search">
          <Search  entries={entries} setEntries={setEntries} />
        </div>
        <div className="grid-filters">
          <Filters
            handleFilterChange={handleFilterChange}
            filter={filter}
            setButtonClicked={setButtonClicked}
            buttonClicked={buttonClicked}
            editEntry={editEntry}
            option={option}
            setOption={setOption}
            onChangeAttribute={onChangeAttribute}
            setOnChangeAttribute={setOnChangeAttribute}
            disabledAttribute={disabledAttribute}
            setDisabledAttribute={setDisabledAttribute}
            filterSelect={filterSelect}
          />

          </div>
        <div className="grid-list">
          <List setEntries={setEntries} entries={entries} handleClick={handleClick} clicked={clicked} setClicked={setClicked} setButtonClicked={setButtonClicked} setEditEntry={setEditEntry}  />
          </div>
      </div>
    </div>
  )
}

export default App;