import React from 'react';

const Delete = () => {

  return (
    <div className="confirm-delete-popup">
      <h1>
        Delete
      </h1>
      <p>
        Are you sure that you want to delete this item?
      </p>
      <button>NO</button>
      <button>YES</button>
    </div>
  )
}

export default Delete