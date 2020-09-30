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
    if (query.length && query.length > 0) {
      console.log('in /search')
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
      console.log('in /query-entries')
      props.handleForce()
      // fetch('/query-entries', {

      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({})
      // })
      //   .then(response => response.json())
      //   .then((data) => {
      //   props.setEntries(data);
      //   })
      //   return () => {
      //     console.log('search query: 0 characters')
      //   }

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