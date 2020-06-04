import React from 'react';

const Entry = (props) => {

  const handleClick = (e) => {
   console.log('clicked')

    fetch('/delete-entry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props.entry)
    })
    .then(response => response.json())
    .then(date => console.log('data', data));
  }


  return (
      <tr className="entries">
        <td contenteditable='true'>{props.entry.band}</td>
        <td contenteditable='true'>{props.entry.album}</td>
        <td contenteditable='true'>{props.entry.year}</td>
        <td contenteditable='true'>{props.entry.genre}</td>
        <td contenteditable='true'>{props.entry.mood}</td>
        <td contenteditable='true'>{props.entry.rating}</td>
        <td onClick={handleClick}>&#10247;</td>
        {/* <td>{entry.link}</td> */}
      </tr>
  )
}

export default Entry