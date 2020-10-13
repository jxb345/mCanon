import React, { useState, useEffect } from 'react';

const Search = (props) => {
  // moved to App.jsx
  // const [query, setQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  const handleChange = (e) => {
    props.setQuery(e.target.value, ...props.query);
  }

  const addPlaceholder = () => {
    setPlaceholder('search for band or album...');
  }

  const removePlaceholder = () => {
    setPlaceholder('');
  }

  const resetSearch = () => {
    props.setQuery('');
    const searchBar = document.querySelector('input');
    searchBar.value = '';
  }

  return (
    <div>
      <div className='input-search'>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onClick={addPlaceholder}
        onBlur={removePlaceholder}
      />

      </div>
      <div className="clear-button">
        <button onClick={resetSearch}>CLEAR</button>
      </div>
    </div>
  )
}

export default Search