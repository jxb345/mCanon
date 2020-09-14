import React, { useState } from 'react'


const AddForm = (props) => {

  const [ add, setAdd ] = useState('');

  const handleAdd = () => {
    if (props.addId === 'genre') {
      props.setGenres(add)
    } else {
      props.setMoods(add)
    }
  }

const handleAddChange = (e) => {
    console.log('add', add)
    setAdd(e.target.value, ...add)
  }


  return (
    <div>
      <div className="form-title">
        ADD {props.addId}
      </div>
      <input type="text" onChange={handleAddChange} />
      <br/>
      <button type="submit">Add</button>
      <button type="button" onClick={handleAdd} >Cancel</button>
    </div>
  )
}

export default AddForm