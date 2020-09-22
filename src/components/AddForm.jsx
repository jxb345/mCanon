import React, { useEffect, useState } from 'react'


const AddForm = (props) => {

  const [ add, setAdd ] = useState('');
  const addPopup = document.getElementsByClassName("new-add-popup")[0];

  const revert = () => {
    let queryOption = '';
    if (props.addId === 'genre') {
     queryOption = "#genre-select option";
    } else {
      queryOption = "#mood-select option"
    }
    const revertToSelected = document.querySelectorAll(queryOption);
    for (let i = 0; i < revertToSelected.length; i += 1) {
      console.log('revertToSelected[i].value', revertToSelected[i].value)
      if (revertToSelected[i].value === 'clear') {
        revertToSelected[i].selected = revertToSelected[i];
      }
    }
  }

  const handleAdd = () => {
    let addition = {
      id: props.addId,
      add: add
    }

    fetch('/genres-moods', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(addition)
    })
    .then(response => response.json)
    .then(data => console.log('data', data))
    revert();
    addPopup.style.display = "none";
    setAdd('')
  }

const handleAddChange = (e) => {
    setAdd(e.target.value, ...add)
  }

  const handleCancel = (e) => {
    addPopup.style.display = "none";
    setAdd('')
    revert();
  }


  return (
    <div>
      <div className="form-title">
        ADD {props.addId}
      </div>
      <input type="text" onChange={handleAddChange} />
      <br/>
      <button type="button" onClick={() => { handleAdd() }}>ADD</button>
      <button type="button" onClick={() => { handleCancel()}} >Cancel</button>
    </div>
  )
}

export default AddForm