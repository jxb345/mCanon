import React, { useState, useEffect } from 'react';

const Entry = (props) => {
  const [element, setElement] = useState({_id: ''})

  const handleDelete = (e) => {
    fetch('/delete-entry', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(element)
    })
    .then(response => response.json())
    .then(data => props.setEntries(data));
  }

    const handleEdit = (e) => {
      fetch('/get-one-entry', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(element)
      })
      .then(response => response.json())
      .then((data) => {
        props.setEditEntry(data);
        const popup = document.getElementsByClassName("new-entry-popup")[0];
        popup.style.display = "block";
        props.setEditButton(true)
      })
    }

  const hoverElement = (e) => {
    setElement({_id: props.entry._id})
  }


  return (
    <tr className="entries" onMouseEnter={hoverElement}>
        <td  id="band-edit" >{props.entry.band}</td>
        <td  id="album-edit">{props.entry.album}</td>
        <td  id="year-edit">{props.entry.year}</td>
        <td  id="genre-edit">{props.entry.genre}</td>
        <td  id="mood-edit">{props.entry.mood}</td>
        <td>{props.entry.instrumental}</td>
        <td  id="rating-edit">{props.entry.rating}</td>
        <td>
            <div className="hover-class">
            <div className="test">
              icons
            </div>
            <div className="run">
              <button onClick={handleEdit}>
                <img src="./edit-pencil.png" alt="pencil-image" height="20" width="20"/>
              </button>
              &nbsp;
              <button onClick={handleDelete}>
                <img src="./trash-can.png" alt="trash-can-image" height="20" width="20"/>
              </button>
            </div>
          </div>
          </td>
      </tr>
  )
}

export default Entry