import React from 'react';

const Entry = (props) => {

  const handleEdit = (e) => {
    let event = e.target;
    console.log('event---', event)
    // let input = document.createElement('input');
    // node.appendChild(input);
    // node.remove();
    // console.log('node', node)
    // document.ev
    let node = document.getElementsByTagName('td');
      node[0].insertAdjacentHTML('afterend', '<input />')

      console.log('node', node)
  }

  return (
      <tr className="entries">
        <td onClick={handleEdit} >{props.entry.band}</td>
        <td contenteditable='true'>{props.entry.album}</td>
        <td contenteditable='true'>{props.entry.year}</td>
        <td contenteditable='true'>{props.entry.genre}</td>
        <td contenteditable='true'>{props.entry.mood}</td>
        <td contenteditable='true'>{props.entry.rating}</td>
        {/* <td>{entry.link}</td> */}
      </tr>
  )
}

export default Entry