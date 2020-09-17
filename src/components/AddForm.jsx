import React, { useEffect, useState } from 'react'


const AddForm = (props) => {

  const [ add, setAdd ] = useState('');

  const handleAdd = () => {
    console.log('pId', props.addId)
    // if (props.addId === 'genre') {
    //   props.setGenres([add, ...props.genres])
    // } else {
    //   props.setMoods([add, ...props.moods])

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
      // attempt to reset select element to selected optopn
      // const query = document.querySelectorAll('mood-select option')
      // for (var i = 0, l = query.length; i < l; i++) {
      //   console.log('query[i[]', query[i])
      //   query[i].selected = query[i].defaultSelected;
      // }


    const addPopup = document.getElementsByClassName("new-add-popup")[0];
    addPopup.style.display = "none";
  }

const handleAddChange = (e) => {
    setAdd(e.target.value, ...add)
  }

  const handleCancel = () => {
    const addPopup = document.getElementsByClassName("new-add-popup")[0];
    addPopup.style.display = "none";
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