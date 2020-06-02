import React from 'react';

const Entry = (props) => {

  return (
    <div>
      <tr className="entries">
        <td>{props.entry.band}</td>
        <td>{props.entry.album}</td>
        <td>{props.entry.year}</td>
        <td>{props.entry.genre}</td>
        <td>{props.entry.mood}</td>
        <td>{props.entry.rating}</td>
        {/* add LINK column */}
        {/* <td>{entry.link</td> */}
      </tr>
    </div>
  )
}

export default Entry