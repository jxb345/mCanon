import React from 'react';

const Entry = (props) => {
  console.log('props', props.entry)
  return (
      <tr className="entries">
        <td  id="band-edit">{props.entry.band}</td>
        <td  id="album-edit">{props.entry.album}</td>
        <td  id="year-edit">{props.entry.year}</td>
        <td  id="genre-edit">{props.entry.genre}</td>
        <td  id="mood-edit">{props.entry.mood}</td>
        <td>{props.entry.instrumental}</td>
        <td  id="rating-edit">{props.entry.rating}</td>
      </tr>
  )
}

export default Entry