import React, { useState, useEffect } from 'react';
import Entry from './Entry.jsx';

const List = (props) => {

  const [icons, setIcons] = useState(false)
  const options = document.getElementsByClassName("options");

  const handleCheck = () => {
    console.log('box ticked')
    setIcons(!icons)
  }

// useEffect( () => {
//   if (icons) {
//     options[0].style.opacity = 1;
//   } else {
//     options[0].style.opacity = 0
//   }
// })

  return (
    <div>
      <table>
        <thead>
          <tr className="entries">
            {/* <td></td> */}
            <td>band</td>
            <td>album</td>
            <td>year</td>
            <td>genre</td>
            <td>mood</td>
            <td>rating</td>
            {/* <td></td> */}
            {/* <td>link</td> */}
          </tr>
          {/* <tr className="options">test</tr> */}
        </thead>
      {
      props.entries.map((entry, i) => {
          return <Entry
                    entry={entry}
                    num={i}
                    handleCheck={handleCheck}
                    handleClick={props.handleClick}
                    clicked={props.clicked}
                    setClicked={props.setClicked}
                  />
      })
      }
      </table>
    </div>
  )

}

export default List