import React from 'react';

const Entry = (props) => {

  // const handleClick = (e) => {
  //  console.log('clicked')

  //   fetch('/delete-entry', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(props.entry)
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log('data', data));
  // }

  // const entryClicked = () => {
  //   props.setClicked(props.entry)
  //   props.handleClick();
  // }

  const handleEdit = (e) => {
    // console.log('e.target.id', e.target.id)
    // const edit = document.getElementById(e.target.id)
    // edit.setAttribute("contenteditable", "true");
    // console.log('e.target', e.target)
    const entries = document.getElementsByClassName("entries");
    console.log('entries', entries)
  }

  const handleMouse = (e) => {
    const test = document.getElementById(e.target.id);
    console.log('test', test.innerHTML)

  }

  return (
      <tr className="entries" onMouseEnter={handleMouse}>
        {/* <td><input type="checkbox" id="select" name="select" onChange={props.handleCheck} /></td> */}
        <td  id="band-edit">{props.entry.band}</td>
        <td  id="album-edit">{props.entry.album}</td>
        <td  id="year-edit">{props.entry.year}</td>
        <td  id="genre-edit">{props.entry.genre}</td>
        <td  id="mood-edit">{props.entry.mood}</td>
        <td  id="rating-edit">{props.entry.rating}</td>
        <td><button id="b" onClick={handleEdit}></button></td>
      </tr>
  )
}

export default Entry