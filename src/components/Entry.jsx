import React from 'react';

const Entry = (props) => {

  const handleClick = (e) => {
   console.log('clicked')
  }

  return (
      <tr className="entries">
        <td contenteditable='true'>{props.entry.band}</td>
        <td contenteditable='true'>{props.entry.album}</td>
        <td contenteditable='true'>{props.entry.year}</td>
        <td contenteditable='true'>{props.entry.genre}</td>
        <td contenteditable='true'>{props.entry.mood}</td>
        <td contenteditable='true'>{props.entry.rating}</td>
        <td onHover={handleClick}>&#10247;</td>
        {/* <td>{entry.link}</td> */}
      </tr>
  )
}

export default Entry