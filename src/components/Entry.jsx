import React, { useState } from 'react';

const Entry = (props) => {
  // const [element, setElement] = useState('')

  const handleDelete = (e) => {
    console.log('id', e)
    console.log('trash button!')
    fetch('/delete-entry', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify('')
    });
    return console.log('response', response.json());
  }

  const handleEdit = () => {
    console.log('edit button')
  }

  // const hoverElement = (e) => {

  //   const target = document.getElementById(e.target.id);
  //   let firstText = "";
  //   for (let i = 0; i < target.childNodes.length; i++) {
  //       let curNode = target.childNodes[i];
  //       if (curNode.nodeName === "#text") {
  //           firstText = curNode.nodeValue;
  //           break;
  //       }
  //   }

  //   console.log('first', firstText)
  //   setElement(target);
  // }

  return (
    <tr className="entries" onMouseEnter={props.hoverElement}>
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
                <img src="./trash-can.png" alt="pencil-image" height="20" width="20"/>
              </button>
            </div>
          </div>
          </td>
      </tr>
  )
}

export default Entry