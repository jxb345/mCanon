import React, { useState, useEffect, useRef } from 'react';
import Entry from './Entry.jsx';
import Delete from './Delete.jsx';

const List = (props) => {

  const options = document.getElementsByClassName("options");


  return (
    <div className="table-container">

      <table>
        <thead>
          <tr className="entries-headers">
            <th className="column-icons"></th>
            <th className="column-wide">band</th>
            <th className="column-wide">album</th>
            <th className="column-slim">year</th>
            <th className="column-slim">genre</th>
            <th className="column-slim">mood</th>
            <th className="column-slim">instrumental</th>
            <th className="column-slim">rating</th>
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
          setButtonClicked={props.setButtonClicked}
          setEditEntry={props.setEditEntry}
          editEntry={props.editEntry}
          />
        })
      }
      </table>
    </div>
  )

}

export default List