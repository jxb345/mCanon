import React, { useState, useEffect } from 'react';

const Search = (props) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log('query---', query)
  }

  useEffect( () => {
    if (query.length && query.length > 0) {
      fetch('/search', {
        method: 'POST',
        headers: {
          'Content-type': 'text/plain'
        },
        body: query
      })
      .then(response => response.json())
      .then(data => props.setEntries(data))
      return () => {
        console.log('search - set entries', props.entries)
      }
    } else {
      fetch('/query-entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      })
        .then(response => response.json())
        .then(data => props.setEntries((data)));
        return () => {
          console.log('search query: 0 characters')
        }

    }
  }, [query])

  return (
    <div>
      {/* moved to App.Jsx
     <button className="new-entry-btn" onClick={displayForm}>+</button> */}
      <div className="input-search">
      <input type="text" onChange={handleChange} />
      </div>
    </div>
  )
}

export default Search