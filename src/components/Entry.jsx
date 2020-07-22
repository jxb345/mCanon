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
      console.log('element in handleEdit', element)
      const iconClicked = e.target.id;
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
        if (iconClicked === "edit-pencil") {
          props.setButtonClicked('edit')
        } else {
          props.setButtonClicked('delete')
        }
      })
    }

  const hoverElement = (e) => {
    setElement({_id: props.entry._id})
  }

  return (
      <tr className="entries" onMouseEnter={hoverElement}>
          <td>
            <div className="icons-hover">
              <div className="icons-container">
               <span>
               &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </div>
              <div className="icons">
                <button onClick={handleEdit}>
                  <img id="edit-pencil" src="./edit-pencil.png" alt="pencil-image" height="20" width="20"/>
                </button>
                &nbsp;
                <button onClick={handleEdit}>
                  <img id="delete-trash-can" src="./trash-can.png" alt="trash-can-image" height="20" width="20"/>
                </button>
              </div>
            </div>
            </td>
          <td  id="band-edit" >{props.entry.band}</td>
          <td  id="album-edit">{props.entry.album}</td>
          <td  id="year-edit">{props.entry.year}</td>
          <td  id="genre-edit">{props.entry.genre}</td>
          <td  id="mood-edit">{props.entry.mood}</td>
          <td>{props.entry.instrumental}</td>
          <td  id="rating-edit">{props.entry.rating}</td>
        <div className="confirm-delete-popup">
          <div className="confirm-delete-form">
            <br/>
            <h4>
              Delete this item?
            </h4>
            <button>CANCEL</button>
            <button onClick={handleDelete}>DELETE</button>
          </div>
        </div>
        </tr>

  )
}

export default Entry