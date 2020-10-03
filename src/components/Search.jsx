import React, { useState, useEffect } from 'react';

const Search = (props) => {
  const [query, setQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value, ...query);
  }

  const addPlaceholder = (e) => {
    setPlaceholder('search for band or album...');
  }

  const removePlaceholder = (e) => {
    setPlaceholder('');
  }

  useEffect( () => {
    if (query !== '') {
      let queryFetch = {
        queryFilters: props.selectedFilters,
        queryString: query
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
  }, [query])

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