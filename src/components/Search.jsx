import React, { useState, useEffect } from 'react';

const Search = (props) => {
  console.log('props', props)
  const [query, setQuery] = useState('');

  const displayForm = () => {
    const popup = document.getElementsByClassName("new-entry-popup")[0];
    console.log('popup', popup)
    popup.style.display = "block";
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log('query---', query)
  }

  useEffect( () => {
    console.log('query', query);
    if (query.length && query.length > 1) {
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
        console.log('search - set entries')
      }
    }
  }, [query])

  return (
    <div>
      <button className="new-entry-btn" onClick={displayForm}>+</button>
      <div className="input-search">
      <input type="text" placeholder="band" onChange={handleChange} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" placeholder="album" onChange={handleChange} />
      </div>
    </div>
  )
}

export default Search