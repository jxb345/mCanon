import React, { useState, useEffect } from 'react';

const List = (props) => {
  // const [entries, setEntries] = useState([]);

  // useEffect(() => {
  //   console.log('fetching...')
  //   fetch('/query-entries', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({})
  //   })
  //     .then(response => response.json())
  //     .then(data => setEntries((data)));
  // }, [])

  return (
    <div>
      <table>
        <thead>
          <tr className="entries">
            <td>band</td>
            <td>album</td>
            <td>year</td>
            <td>genre</td>
            <td>mood</td>
            <td>rating</td>
          </tr>
        </thead>
      {
      props.entries.map(entry => {
        return <tr className="entries">
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