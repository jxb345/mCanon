import React from 'react';

const Entry = (props) => {
  const run = document.getElementById("run");
  const showIcons = () => {
    console.log('icons!')
    // const test = document.getElementById("test");
    // console.log('test', test)
    // test.style.opacity = 0;
    console.log('run', run)
    run.style.opacity = 1;
  }

  const hideIcons = () => {
    console.log('hide')
    run.style.opacity = 0;
  }

  const handleButton = () => {
    console.log('button!')
  }

  return (
      <tr className="entries">
        <td  id="band-edit">{props.entry.band}</td>
        <td  id="album-edit">{props.entry.album}</td>
        <td  id="year-edit">{props.entry.year}</td>
        <td  id="genre-edit">{props.entry.genre}</td>
        <td  id="mood-edit">{props.entry.mood}</td>
        <td>{props.entry.instrumental}</td>
        <td  id="rating-edit">{props.entry.rating}</td>
        <td>
          <div className="hover-class">
            <div className="test">
              test
            </div>
            <div className="run">
              <img src="./edit-pencil.png" alt="pencil-image" height="20" width="20"/>
              <button onClick={handleButton}>

              <img src="./trash-can.png" alt="pencil-image" height="20" width="20"/>
              </button>
            </div>
          </div>
          </td>
      </tr>
  )
}

export default Entry