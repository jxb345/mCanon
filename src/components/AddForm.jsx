import React, { useEffect, useState } from 'react'


const AddForm = (props) => {

  const [ add, setAdd ] = useState('');
  const addPopup = document.getElementsByClassName("new-add-popup")[0];

  const revert = () => {
    setAdd('')
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
    setAdd('')
  }

  useEffect(() => {
    console.log('add uE', add)
  })

  const handleAdd = () => {
    console.log('add', add)
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
    props.setAddButton(!props.addButton)
  }

const handleAddChange = (e) => {
    setAdd(e.target.value, ...add)
  }

  const handleCancel = (e) => {
    addPopup.style.display = "none";
    revert();
  }


  return (
    <div>
      <div className="form-title">
        ADD {props.addId.toUpperCase()}
      </div>
      <input type="text" onChange={handleAddChange} value={add} autoFocus />
      <br/>
      <button type="button" onClick={() => { handleCancel()}} >CANCEL</button>
      <button type="button" onClick={() => { handleAdd() }}>ADD</button>
    </div>
  )
}

export default AddForm