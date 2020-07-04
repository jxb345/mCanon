import React, { useState, useEffect } from 'react';

const Form = (props) => {
  const [formSettings, setFormSettings] = useState({
    formAction: '',
     title: '',
      button: '',
      band: '',
      album: '',
      year: '',
      genreSelected: '',
      moodSelected: '',
      ratingSelected: '',
      bookSelected: '',
      instrumentalSelected: ''
    })
    const [editBand, setEditBand] = useState('');
    const [editAlbum, setEditAlbum] = useState('');
    const [editYear, setEditYear] = useState('');


  useEffect(() => {
    if (props.editButton) {
      setFormSettings({
        formAction: '/edit-entry',
        title: 'EDIT ENTRY',
        button: 'EDIT',
        band: props.editEntry.band,
        album: props.editEntry.album,
        year: props.editEntry.year,
        genreSelected: props.editEntry.genre,
        moodSelected: props.editEntry.mood,
        ratingSelected: props.editEntry.rating,
        bookSelected: props.editEntry.book,
        instrumentalSelected: props.editEntry.instrumental,
      })
      setEditBand(props.editEntry.band);
      setEditAlbum(props.editEntry.album);
      setEditYear(props.editEntry.year);

    } else {
      setFormSettings({
        formAction: '/new-entry',
        title: 'NEW ENTRY',
        button: 'ADD',
        genreSelected: 'genre',
        moodSelected: 'mood',
        ratingSelected: 'rating',
        bookSelected: 'book',
        instrumentalSelected: 'instrumental',
        button: 'ADD'
      })
    }
  }, [props.editButton])

  const handleCancel = () => {
    const popup = document.getElementsByClassName("new-entry-popup")[0];
    popup.style.display = "none";
  }


  const handleChange = (e) => {
    const targetId = e.target.id;
    const targetValue = e.target.value;
    if (targetId === 'band-input') {
      setEditBand(targetValue);
    } else if (targetId === 'album-input') {
      setEditAlbum(targetValue);
      console.log('edit album', editAlbum)
    } else {
      let convertedYear = parseInt(targetValue)
      console.log('convertedYear', typeof convertedYear)
      setEditYear(parseInt(convertedYear));

    }
  }

  const handleTabs = (action) => {
    const manual = document.getElementsByClassName("tab-content-manual")[0];
    const manualButton = document.getElementById("add-one-button");
    const upload = document.getElementsByClassName("tab-content-upload")[0];
    const uploadButton = document.getElementById("upload-button");

    console.log('action', action)
    if (action === 'add-one') {
      manual.style.display = 'block';
      manualButton.style.backgroundColor = 'rgb(120, 166, 240)';
      uploadButton.style.backgroundColor = 'lightgray'
      upload.style.display = 'none';
    } else {
      console.log('manual', manual)
      manual.style.display = 'none';
      manualButton.style.backgroundColor = 'lightgray';
      console.log('manualButton', manualButton)
      upload.style.display = 'block';
      uploadButton.style.backgroundColor = 'rgb(120, 166, 240)';
    }
  }

  return (
    <div className="tabs-new-entry">
      <div className="form">
        <form action={formSettings.formAction} method="post">
          <div className="form-title">
          {formSettings.title}
          </div>
          <div className="tabs-new-entry-links">
            <button type="button" id="add-one-button" onClick={() => { handleTabs('add-one')}}>
              ADD ONE
            </button>
            <button type="button" id="upload-button" onClick={() => { handleTabs('upload')}}>
              UPLOAD CSV
            </button>
            </div>

          <div id="add-one-entry" className="tab-content-manual">
          <input type="hidden" name="_id" value={props.editEntry._id}/>
          <div>
            Add One Entry
          </div>
          <input type="text" name="band" id="band-input" required placeholder="band" value={editBand} onChange={handleChange}/>
          <br/>
          <br/>
          <input type="text" name="album" id="album-input" required placeholder="album" value={editAlbum} onChange={handleChange} />
          <br/>
          <br/>
          <input type="number" name="year" id="year-input" min="1900" max="2030" required placeholder="year" value={editYear} onChange={handleChange} />
          <br/>
          <br/>
          <select type="text" name="genre" id="genre" required>
            <option selected>{formSettings.genreSelected}</option>
            <option value="rock">rock</option>
            <option value="rap">rap</option>
            <option value="jazz">jazz</option>
            <option value="blues">blues</option>
            <option value="funk">funk</option>
            <option value="punk rock">punk rock</option>
            <option value="rhythmAndlues">rhythm and blues</option>
            <option value="electronic">electronic</option>
            <option value="country">country</option>
            <option value="+-genre">+ genre</option>
          </select>
          <br/>
          <br/>
          <select type="text" name="mood" id="mood" required>
            <option selected>{formSettings.moodSelected}</option>
            <option value="chill">chill</option>
            <option value="upbeat">upbeat</option>
            <option value="daytime">daytime</option>
            <option value="+-mood">+ mood</option>
          </select>
          <br/>
          <br/>
          <select type="text" name="rating" id="rating" required>
            <option selected>{formSettings.ratingSelected}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <br/>
          <br/>
          <select type="text" name="book" id="book" required>
          <option selected>{formSettings.bookSelected}</option>
            <option value="canon">canon</option>
            <option value="research">research</option>
          </select>
          <br/>
          <br/>
          <select type="text" name="instrumental" id="instrumental" required>
            <option selected>{formSettings.instrumentalSelected}</option>
            <option value="no">no</option>
            <option value="yes">yes</option>
          </select>
          <br/>
          <br/>
            <button onClick={handleCancel}>CANCEL</button>
            <button>{formSettings.button}</button>
          {/* </div> */}
          </div>
        </form>
        <div id="upload-csv-tab" className="tab-content-upload">
          <form action="/upload-csv" method="post" enctype="multipart/form-data">
          <div className="upload-file">
            <a href=""  />
            <input type="file" name="csv-file"/>
            <br/>
            <button >UPLOAD</button>
            <br/>
            <br/>
            <a href="data:text/csv;charset=utf-8," download="mcanon-template.csv">download CSV template</a>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form