import React, { useState, useEffect } from 'react';

const List = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    console.log('fetching...')
    fetch('/query-entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
      .then(response => response.json())
      .then(data => setEntries((data)));
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>band</td>
            <td>album</td>
            <td>year</td>
            <td>genre</td>
            <td>mood</td>
            <td>rating</td>
          </tr>
        </thead>
      {
      entries.map(entry => {
        console.log('entry', entry)
        return <tr>
          <td>{entry.band}</td>
          <td>{entry.album}</td>
          <td>{entry.year}</td>
          <td>{entry.genre}</td>
          <td>{entry.mood}</td>
          <td>{entry.rating}</td>
        </tr>
      })
      }
      </table>
    </div>
  )

}

export default List