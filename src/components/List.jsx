import React, { useState, useEffect } from 'react';
import Entry from './Entry.jsx';

const List = (props) => {

  return (
    <div>
      <table>
        <thead>
          <tr className="entries">
            <td>band</td>
            <td>album</td>
            <td>year</td>
            <td>genre</td>
            <td>mood</td>
            <td>rating</td>
            {/* <td>link</td> */}
          </tr>
        </thead>
      {
      props.entries.map((entry, i) => {
          return <Entry entry={entry} num={i}/>
      })
      }
      </table>
    </div>
  )

}

export default List