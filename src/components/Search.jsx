import React, { useState, useEffect } from 'react';

const Search = (props) => {
  // moved to App.jsx
  // const [query, setQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  const handleChange = (e) => {
    props.setQuery(e.target.value, ...props.query);
  }

  const addPlaceholder = (e) => {
    setPlaceholder('search for band or album...');
  }

  const removePlaceholder = (e) => {
    setPlaceholder('');
  }

  useEffect( () => {
    if (props.query !== '') {
      let queryFetch = {
        queryFilters: props.selectedFilters,
        queryString: props.query
      }
      fetch('/search', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(queryFetch)
      })
      .then(response => response.json())
      .then((data) => {
        props.setEntries((data.entries));
      })
      return;
    } else {
      props.queryEntries();
        return
    }
  }, [props.query])

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
    </div>
  )
}

export default Search