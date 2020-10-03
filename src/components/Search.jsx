import React, { useState, useEffect } from 'react';

const Search = (props) => {
  const [query, setQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value, ...query);
    console.log('query---', query)
  }

  const addPlaceholder = (e) => {
    setPlaceholder('search for band or album...');
  }

  const removePlaceholder = (e) => {
    setPlaceholder('');
  }

  useEffect( () => {
    if (query !== '') {
      console.log('in /search')
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
        console.log('data in /search response', data)
        props.setEntries((data.entries));
        // props.setGenres(props.alphabetize(data.genres));
        // props.setMoods(props.alphabetize(data.moods));
      })
      return () => {
        console.log('search - set entries', props.entries)
      }
    } else {
      props.queryEntries();
        return
    }
  }, [query])

  return (
    <div>
      {/* moved to App.Jsx
     <button className="new-entry-btn" onClick={displayForm}>+</button> */}
      <div className="input-search">
      <input type="text" placeholder={placeholder} onChange={handleChange} onClick={addPlaceholder} onBlur={removePlaceholder} />
      </div>
    </div>
  )
}

export default Search