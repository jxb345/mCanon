import React, { useState, useEffect } from 'react';

const Search = (props) => {
  const [query, setQuery] = useState('');

  // moved to App.jsx
  // const displayForm = () => {
  //   const popup = document.getElementsByClassName("new-entry-popup")[0];
  //   console.log('popup', popup)
  //   popup.style.display = "block";
  // }

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log('query---', query)
  }

  useEffect( () => {
    console.log('query', query);
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
      <input type="text" placeholder="band or album" onChange={handleChange} />
      </div>
    </div>
  )
}

export default Search