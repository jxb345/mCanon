import React, { useEffect, useState } from 'react'


const AddForm = (props) => {

  const [ add, setAdd ] = useState('');

  const handleAdd = () => {
    console.log('handleAdd')
    if (props.addId === 'genre') {
      props.setGenres([add, ...props.genres])
    } else {
      props.setMoods([add, ...props.moods])
    }
  }

const handleAddChange = (e) => {
    setAdd(e.target.value, ...add)
  }



  return (
    <div>
      <div className="form-title">
        ADD {props.addId}
      </div>
      <input type="text" onChange={handleAddChange} />
      <br/>
      <button type="button" onClick={() => { handleAdd() }}>ADD</button>
      <button type="button" >Cancel</button>
    </div>
  )
}

export default AddForm