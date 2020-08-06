import React from 'react';
import Form from './Form.jsx';

const Filters = (props) => {

  const resetFilters = () => {

  }

  return (
    <div>
      <div className="new-entry-popup">
        <div className="new-entry-form">
          <Form
            setButtonClicked={props.setButtonClicked}
            buttonClicked={props.buttonClicked}
            editEntry={props.editEntry} />
        </div>
      </div>
      <div className="filters">
        <p>
          collection
          <br></br>
        <select type="text" name="collection" id="collection" onChange={props.handleFilterChange} >
          <option value="clear">ALL</option>
          <option value="canon">canon</option>
          <option value="nominee">nominee</option>
        </select>
        </p>
        <div>
          <p>
            mood
            <br/>
          <select type="text" name="mood" id="mood" onChange={props.handleFilterChange}>
            <option value="clear">ALL</option>
            <option value="chill">chill</option>
            <option value="upbeat">upbeat</option>
            <option value="daytime">daytime</option>
          </select>
          </p>
        </div>
        <div>
          <p>
            genre
            <br/>
          <select type="text" name="genre" id="genre" onChange={props.handleFilterChange}>
            {/* <option value="clear">ALL</option>
            <option value="rock">rock</option>
            <option value="rap">rap</option>
            <option value="jazz">jazz</option>
            <option value="blues">blues</option>
            <option value="funk">funk</option>
            <option value="folk">folk</option>
            <option value="punk rock">punk rock</option>
            <option value="rhythmAndlues">rhythm and blues</option>
            <option value="electronic">electronic</option>
            <option value="country">country</option> */}
            <option value="clear">ALL</option>
            <option value="bachata">bachata</option>
            <option value="bassaNova">bassa nova</option>
            <option value="blues">blues</option>
            <option value="bolero">bolero</option>
            <option value="classical">classical</option>
            <option value="country">country</option>
            <option value="electronic">electronic</option>
            <option value="funk">funk</option>
            <option value="folk">folk</option>
            <option value="gospel">gospel</option>
            <option value="jazz">jazz</option>
            <option value="metal">metal</option>
            <option value="musicalTheater">musical theater</option>
            <option value="pop">pop</option>
            <option value="punk rock">punk rock</option>
            <option value="reggae">reggae</option>
            <option value="rap">rap</option>
            <option value="rhythmAndlues">rhythm and blues</option>
            <option value="rock">rock</option>
            <option value="salsa">salsa</option>
            <option value="soul">soul</option>
          </select>
          </p>
        </div>
        <div>
          <p>
            instrumental
            <br/>
        <select type="text" name="instrumental" id="instrumental" onChange={props.handleFilterChange} >
          <option value="clear">ALL</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
            </p>
        </div>
      </div>
      <div>
        <button onClick={resetFilters}>RESET</button>
      </div>
    </div>
  )
}

export default Filters