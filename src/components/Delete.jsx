import React from 'react';

const Delete = () => {
  const [element, setElement] = useState({_id: ''})

  const handleDelete = (e) => {
    fetch('/delete-entry', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(element)
    })
    .then(response => response.json())
    .then(data => props.setEntries(data));
  }

  const hoverElement = (e) => {
    setElement({_id: props.entry._id})
  }

  return (
    <div>
      <br/>
      <h4>
        Delete this item?
      </h4>
      <button>CANCEL</button>
      <button onClick={handleDelete}>DELETE</button>
      </div>
  )
}

export default Delete