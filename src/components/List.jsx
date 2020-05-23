import React, { useState, useEffect } from 'react';

const List = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    console.log('fetching...')
    fetch('/query-entries')
      .then(response => response.json())
      .then(data => setEntries((data)));
  })

  return (
    <div>
      <table>

      {
      entries.map(entry => {
        return <tr>
          <td>{entry}</td>
        </tr>
      })
      }
      </table>
    </div>
  )

}

export default List