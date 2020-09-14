import { useEffect } from "react"
import React from 'react'


const AddForm = (props) => {

  return (
    <div>
      <div className="form-title">
        ADD {props.addId}
      </div>
      <input type="text"/>
      <br/>
      <button type="submit">Add</button>
      <button type="submit">Cancel</button>
    </div>
  )
}

export default AddForm