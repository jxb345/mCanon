import React, { useState, useEffect } from 'react';
import Entry from './Entry.jsx';

const List = (props) => {

  const options = document.getElementsByClassName("options");

  return (
    <div>
      <table>
        <thead>
          <tr className="entries">
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
                    num={i}
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