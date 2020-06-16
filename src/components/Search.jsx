import React from 'react';

const Search = () => {

  const displayForm = () => {
    const popup = document.getElementsByClassName("new-entry-popup")[0];
    console.log('popup', popup)
    popup.style.display = "block";
  }

  return (
    <div>
      <button className="new-entry-btn" onClick={displayForm}>+</button>
      <div className="input-search">
      <input type="text" placeholder="band" />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" placeholder="album" />
      </div>
    </div>
  )
}

export default Search