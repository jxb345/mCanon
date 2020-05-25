import React, { useState } from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
import Filters from './Filters.jsx';

const App = () => {

  const [filters, setFilters] = useState([]);

  return (
    <div>
      mCanon
      <Form />
      <Filters filters />
      <List />
    </div>
  )
}

export default App;