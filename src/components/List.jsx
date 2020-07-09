import React, { useState, useEffect, useRef } from 'react';
import Entry from './Entry.jsx';

const List = (props) => {

  const options = document.getElementsByClassName("options");


  return (
    <div className="table-container">
    <table>
        <thead>
          <tr className="entries-headers">
            <th className="sticky-header">band</th>
            <th className="sticky-header">album</th>
            <th className="sticky-header">year</th>
            <th className="sticky-header">genre</th>
            <th className="sticky-header">mood</th>
            <th className="sticky-header">instrumental</th>
            <th className="sticky-header">rating</th>
            <th className="sticky-header"></th>
          </tr>
        </thead>
      {/* <div className=
      "entries-container"
      > */}
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
          setEditEntry={props.setEditEntry}
          // hoverElement={hoverElement}
          // ref={ref => refs[i] = ref}
          />
        })
      }
      {/* </div> */}
      </table>
    </div>
  )

}

export default List