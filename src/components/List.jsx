import React, { useState, useEffect } from 'react';

const List = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    console.log('fetching...')
    fetch('/query-entries')
      .then(response => response.json())
      .then(data => console.log(data));
  })

  return (
    <div>
      {entries}
    </div>
  )

}

export default List