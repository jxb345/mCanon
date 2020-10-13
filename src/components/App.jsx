import React, { useReducer, useEffect, useState, useRef } from 'react';
import List from './List.jsx';
import Search from './Search.jsx';
import Filters from './Filters.jsx';

const App = () => {

  const [addButton, setAddButton] = useState(false)
  const [addId, setAddId] = useState('');
  const [buttonClicked, setButtonClicked] = useState('');
  const [clicked, setClicked] = useState({});
  const [disabledAttribute, setDisabledAttribute] = useState('');
  const [editEntry, setEditEntry] = useState([]);
  const [entries, setEntries] = useState([]);
  const [filterSelect, setFilterSelect] = useState(true)
  const [genres, setGenres] = useState([])
  const [moods, setMoods] = useState([])
  const [onChangeAttribute, setOnChangeAttribute] = useState('');
  const [option, setOption] = useState('')
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filter = useRef('');

  // moved FROM Search.jsx
  const displayForm = () => {
      setButtonClicked('new');
      const popup = document.getElementsByClassName("new-entry-popup")[0];
      console.log('popup.style', popup.style)
      popup.style.display = "block";
  }

  const displayAdd = () => {
    const addPopup = document.getElementsByClassName("new-add-popup")[0];
    console.log('addPopup.style', addPopup.style)
    addPopup.style.display = "block";
  }

  const titleStyle = {
    color: 'rgb(145, 159, 182)',
    fontSize: '16px'
  }

  const handleFilterChange = (e) => {
    let currentFilterValue = e.target.value;
    let currentFilterId = e.target.id
    let currentName = e.target.name;
    console.log('cN', currentName)
    if (currentFilterValue === 'add') {
      setAddId(currentName)
      displayAdd()
    } else {
      if (currentFilterId === 'collection-select') {
        currentFilterId = 'collection';
      } else if (currentFilterId === 'mood-select') {
        currentFilterId = 'mood';
      } else if (currentFilterId === 'genre-select') {
        currentFilterId = 'genre';
      } else if (currentFilterId === 'rating-select') {
        currentFilterId = 'rating';
      } else {
        currentFilterId = 'instrumental';
      }
      setSelectedFilters(selectedFilters => ({...selectedFilters, [currentFilterId]: currentFilterValue  }));
    }
  }

  const handleClick = (e) => {
    console.log('clicked', clicked)
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

  const queryEntries = () => {

    const alphabetize = (group) => {
      return group.sort();
    }
    let filters = {
      query: query,
      selectedFilters: selectedFilters
    }
    console.log('qyer', query)
    fetch('/query-entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filters)
    })
      .then(response => response.json())
      .then((data) => {
        setEntries((data.entries));
        setGenres(alphabetize(data.genres));
        setMoods(alphabetize(data.moods));
      }
        );
  }

  useEffect(() => {
    queryEntries();
      }, [selectedFilters, addButton, query])

  return (
    <div>
      <div className="title">
        m
        <span style={titleStyle}>C</span>anon
         {/* commented out as it is for authentication  */}
              {/* <span className="username">
                {props.username}
                &nbsp;&nbsp;&nbsp;
                <button className="sign-out-button">
                  sign out
                </button>
              </span> */}
      </div>
      <div className="grid">
        <div className="grid-new-button">
          <button className="new-entry-btn" onClick={displayForm}>+</button>
        </div>
        <div className="grid-search">
          <Search
            entries={entries}
            query={query}
            setQuery={setQuery}
            queryEntries={queryEntries}
            setEntries={setEntries}
            selectedFilters={selectedFilters}
            />
        </div>
        <div className="grid-filters">
          <Filters
            handleFilterChange={handleFilterChange}
            setSelectedFilters={setSelectedFilters}
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
            addId={addId}
            moods={moods}
            genres={genres}
            setGenres={setGenres}
            setMoods={setMoods}
            setAddButton={setAddButton}
            addButton={addButton}
          />

          </div>
        <div className="grid-list">
          <List
            setEntries={setEntries}
            entries={entries}
            handleClick={handleClick}
            clicked={clicked}
            setClicked={setClicked}
            setButtonClicked={setButtonClicked}
            setEditEntry={setEditEntry}
          />
          </div>
      </div>
    </div>
  )
}

export default App;