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


  return (
      <tr className="entries">
        <td contenteditable='true'>{props.entry.band}</td>
        <td contenteditable='true'>{props.entry.album}</td>
        <td contenteditable='true'>{props.entry.year}</td>
        <td contenteditable='true'>{props.entry.genre}</td>
        <td contenteditable='true'>{props.entry.mood}</td>
        <td contenteditable='true'>{props.entry.rating}</td>
        <td className="three-dot-menu">
          <button>&#10247;</button>
            <ul>
              <li>
                <button>EDIT</button>
              </li>
              <li>
                <button>DELETE</button>
              </li>
            </ul>
            </td>
      </tr>
  )
}

export default Entry