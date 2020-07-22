import React, { useEffect } from 'react';

const Genres = (props) => {

  // filterSelect useState - boolean
  // if filterSelect === true
  // onChange={props.handleFilterChange}
  // <option value="clear">ALL</options>
  // else
  // disabled={formSettings.disabled}
  // <option select>{formSettings.genreSelected}</option>


  useEffect(() => {

    if (props.filterSelect === true) {
      props.setOnChangeAttribute('{props.handleFilterChange}')
      props.setDisabledAttribute('');
      props.setOption('<option value="clear">ALL</option>')
      console.log('props.option', props.option)
    } else {
      props.setDisabledAttribute('disabled={props.formSettings.disabled}')
      props.setOnChangeAttribute('');
      props.setOption('<option selected>{props.formSettings.genreSelected}</option>')
    }
  })

  return (
    <select type="text" name="genre" id="genre"
      onChange={props.onChangeAttribute}
      disabled={props.disabledAttribute}
    >
      {props.option}
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
  )
}

export default Genres