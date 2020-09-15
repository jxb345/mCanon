import React, { useEffect, useState } from 'react';
import Form from './Form.jsx';
import AddForm from './AddForm.jsx';

const Filters = (props) => {

  // moved to App.jsx so Form can also have access
  // const initialGenres = [
  //   'blues', 'classical', 'country', 'electronic', 'folk', 'funk', 'rock', 'jazz', 'pop', 'rap', 'rock', 'soul'
  // ]

  // const [ moods, setMoods ] = useState(['upbeat', 'daytime','chill'])
  // const [ genres, setGenres ] = useState(initialGenres)

  const resetFilters = () => {
    props.setSelectedFilters([])
    const collectionSelect = document.getElementById("collection-select");
    const moodSelect = document.getElementById("mood-select");
    const genreSelect = document.getElementById("genre-select");
    const instrumentalSelect = document.getElementById("instrumental-select");
    const ratingSelect = document.getAnimations("rating-select");

    // m.options.selectedIndex = -1
    moodSelect.options[0].selected = true;
    collectionSelect.options[0].selected = true;
    genreSelect.options[0].selected = true;
    instrumentalSelect.options[0].selected = true;
    ratingSelect.options[0].selected = true;



    console.log('m.options[0].selected', m.options[0].selected)
   }

   useEffect(() => {
    console.log('moods', moods)
   })

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
      <div className="new-add-popup">
        <div className="new-add-form">
          <AddForm
            addId={props.addId}
            setMoods={setMoods}
            moods={moods}
            setGenres={setGenres}
            genres={genres}

          />
        </div>
      </div>
      <div className="filters">
        <p>
          collection
          <br></br>
        <select type="text" name="collection" id="collection-select" onChange={props.handleFilterChange} >
          <option value="clear" selected>ALL</option>
          <option value="canon">canon</option>
          <option value="nominee">nominee</option>
        </select>
        </p>
        <div id="test-center">
          <p>
            mood
            <br/>
          <select type="text" name="mood" id="mood-select" onChange={props.handleFilterChange}>
            <option  value="clear" selected>ALL</option>
            {
              moods.map((mood) => {
                return <option value={mood}>{mood}</option>
              })
            }
            {/* <option value="chill">chill</option>
            <option value="upbeat">upbeat</option>
            <option value="daytime">daytime</option> */}
            <option value="add">ADD MOOD</option>

          </select>
          </p>
        </div>
        <div>
          <p>
            genre
            <br/>
          <select type="text" name="genre" id="genre-select" onChange={props.handleFilterChange}>
            <option value="clear" selected>ALL</option>
            {
              genres.map((genre) => {
                return <option value={genre}>{genre}</option>
              })
            }
            {/* <option value="bachata">bachata</option>
            <option value="bassaNova">bassa nova</option> */}
            {/* <option value="blues">blues</option> */}
            {/* <option value="bolero">bolero</option> */}
            {/* <option value="classical">classical</option>
            <option value="country">country</option>
            <option value="electronic">electronic</option>
            <option value="funk">funk</option>
            <option value="folk">folk</option> */}
            {/* <option value="gospel">gospel</option> */}
            {/* <option value="jazz">jazz</option> */}
            {/* <option value="metal">metal</option> */}
            {/* <option value="musicalTheater">musical theater</option> */}
            {/* <option value="pop">pop</option> */}
            {/* <option value="punk rock">punk rock</option> */}
            {/* <option value="reggae">reggae</option> */}
            {/* <option value="rap">rap</option> */}
            {/* <option value="rhythmAndlues">rhythm and blues</option> */}
            {/* <option value="rock">rock</option> */}
            {/* <option value="salsa">salsa</option> */}
            {/* <option value="soul">soul</option> */}
            <option value="add">ADD GENRE</option>
          </select>
          </p>
        </div>
        <div>
          <p>
            instrumental
            <br/>
        <select type="text" name="instrumental" id="instrumental-select" onChange={props.handleFilterChange} >
          <option value="clear" selected>ALL</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
            </p>
        </div>
        <div>
          <p>
            rating
            <br/>
          <select type="text" name="rating" id="rating-select" onChange={props.handleFilterChange}>
            <option  value="clear" selected>ALL</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          </p>
        </div>

      <div className="clear-button">
        <button onClick={resetFilters}>CLEAR</button>
      </div>
      </div>
    </div>
  )
}

export default Filters