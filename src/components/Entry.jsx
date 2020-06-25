import React, { useState } from 'react';

const Entry = (props) => {
  const [element, setElement] = useState({album: ''})

  const handleDelete = (e) => {
    console.log('id', e)
    console.log('trash button!')
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

    const displayForm = () => {
      const popup = document.getElementsByClassName("new-entry-popup")[0];
      console.log('popup', popup)
      popup.style.display = "block";
    }



  const hoverElement = (e) => {
    console.log('e.current', e.currentTarget.childNodes[1].innerHTML)
    let albumTitle = e.currentTarget.childNodes[1].innerHTML;
    setElement({album: albumTitle})
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
              <button onClick={displayForm}>
                <img src="./edit-pencil.png" alt="pencil-image" height="20" width="20"/>
              </button>
              &nbsp;
              <button onClick={handleDelete}>
                <img src="./trash-can.png" alt="pencil-image" height="20" width="20"/>
              </button>
            </div>
          </div>
          </td>
      </tr>
  )
}

export default Entry