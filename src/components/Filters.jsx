import React, { Component, useEffect, useState } from 'react';
import Form from './Form.jsx';
import AddForm from './AddForm.jsx';
import easydropdown from 'easydropdown';
import Select from 'react-select';

const Filters = (props) => {


  const resetFilters = () => {
    props.setSelectedFilters([])
    const collectionSelect = document.getElementById("collection-select");
    const moodSelect = document.getElementById("mood-select");
    const genreSelect = document.getElementById("genre-select");
    const instrumentalSelect = document.getElementById("instrumental-select");
    const ratingSelect = document.getElementById("rating-select");

    // m.options.selectedIndex = -1
    collectionSelect.options[0].selected = true;
    moodSelect.options[0].selected = true;
    genreSelect.options[0].selected = true;
    instrumentalSelect.options[0].selected = true;
    ratingSelect.options[0].selected = true;
    console.log('m.options[0].selected', m.options[0].selected)
   }

   const styleMood = {
    backgroundColor: 'yellow'
  }

  //  useEffect(() => {
  //   const edd = easydropdown.all(
  //       {
  //     behavior: {
  //       liveUpdates: true
  //     }
  //   })
  // })

  return (
    <div>
      <div className="new-entry-popup">
        <div className="new-entry-form">
          <Form
            setButtonClicked={props.setButtonClicked}
            buttonClicked={props.buttonClicked}
            editEntry={props.editEntry}
            moods={props.moods}
            genres={props.genres}
          />
        </div>
      </div>
      <div className="new-add-popup">
        <div className="new-add-form">
          <AddForm
            addId={props.addId}
            setMoods={props.setMoods}
            moods={props.moods}
            setGenres={props.setGenres}
            genres={props.genres}
            setAddButton={props.setAddButton}
            addButton={props.addButton}
          />
        </div>
      </div>
      <div className="filters">
        <p>
          collection
          <br></br>
        <select className="style-select" type="text" name="collection" id="collection-select" onChange={props.handleFilterChange} >
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
              props.moods.map((mood, i) => {
                return <option value={mood} key={i}>{mood}</option>
              })
            }
              <option value="add" data-stat>
               -- ADD MOOD --</option>

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
              props.genres.map((genre, i) => {
                return <option value={genre} key={i}>{genre}</option>
              })
            }
            <option value="add">-- ADD GENRE --</option>
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