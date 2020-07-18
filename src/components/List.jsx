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
          setEditEntry={props.setEditEntry}
          />
        })
      }
      </table>
    </div>
  )

}

export default List