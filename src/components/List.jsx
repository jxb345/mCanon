import React, { useState, useEffect, useRef } from 'react';
import Entry from './Entry.jsx';

const List = (props) => {
  // const [element, setElement] = useState('');


  const options = document.getElementsByClassName("options");


  return (
    <div>
      <table>
        <thead>
          <tr className="entries-headers">
            <th>band</th>
            <th>album</th>
            <th>year</th>
            <th>genre</th>
            <th>mood</th>
            <th>instrumental</th>
            <th>rating</th>
            <th></th>
          </tr>
        </thead>
      {
      props.entries.map((entry, i) => {
          return <Entry
                    entry={entry}
                    key={i}
                    handleClick={props.handleClick}
                    clicked={props.clicked}
                    setClicked={props.setClicked}
                    setEntries={props.setEntries}
                    setEditButton={props.setEditButton}
                    // hoverElement={hoverElement}
                    // ref={ref => refs[i] = ref}
                  />
      })
      }
      </table>
    </div>
  )

}

export default List