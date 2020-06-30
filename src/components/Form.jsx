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


  return (
    <div className="form">
      <form action={formSettings.formAction} method="post">
        <div className="form-title">
         {formSettings.title}
        </div>
          <br/>
          <br/>
        <input type="hidden" name="_id" value={props.editEntry._id}/>

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
      </form>
      <form action="/upload-csv" method="post" encType="multipart/form-data">
      <div className="upload-file">
        <input type="file" id="csv-file"/>
        <button type="submit">UPLOAD</button>
      </div>

      </form>
    </div>
  )
}

export default Form