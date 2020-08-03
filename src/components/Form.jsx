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
    musicCollectionSelected: '',
    instrumentalSelected: ''
  })
  const [editBand, setEditBand] = useState('');
  const [editAlbum, setEditAlbum] = useState('');
  const [editYear, setEditYear] = useState('');
  const manual = document.getElementsByClassName("tab-content-manual")[0];
  const manualButton = document.getElementById("add-one-button");
  const upload = document.getElementsByClassName("tab-content-upload")[0];
  const uploadButton = document.getElementById("upload-button");

  useEffect(() => {
    console.log('buttonClicked', props.buttonClicked)

    if (props.buttonClicked === 'edit') {
      // need to account for entry having "" for either mood,
      // genre, or instrumental; if that is the case, then
      // need to replace "" with 'mood', 'genre', or 'instrumental'
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
        musicCollectionSelected: props.editEntry.musicCollection,
        instrumentalSelected: props.editEntry.instrumental,
        disabled: ''
      })
      setEditBand(props.editEntry.band);
      setEditAlbum(props.editEntry.album);
      setEditYear(props.editEntry.year);

    } else if (props.buttonClicked === 'new') {
      setFormSettings({
        formAction: '/new-entry',
        title: 'NEW ENTRY',
        button: 'ADD',
        genreSelected: 'genre',
        moodSelected: 'mood',
        ratingSelected: 'rating',
        musicCollectionSelected: 'collection',
        instrumentalSelected: 'instrumental',
        button: 'ADD',
        disabled: ''
      })
    } else {
      // delete button settings
      setFormSettings({
        formAction: '/delete-entry',
        title: 'DELETE ENTRY',
        button: 'DELETE',
        band: props.editEntry.band,
        album: props.editEntry.album,
        year: props.editEntry.year,
        genreSelected: props.editEntry.genre,
        moodSelected: props.editEntry.mood,
        ratingSelected: props.editEntry.rating,
        musicCollectionSelected: props.editEntry.musicCollection,
        instrumentalSelected: props.editEntry.instrumental,
        disabled: 'disabled'
      })
      setEditBand(props.editEntry.band);
      setEditAlbum(props.editEntry.album);
      setEditYear(props.editEntry.year);

    }
  }, [props.buttonClicked, props.editEntry])

  const handleCancel = () => {
    props.setButtonClicked('');
    // console.log('props', props)
    const popup = document.getElementsByClassName("new-entry-popup")[0];
    popup.style.display = "none";
    manual.style.display = 'block';
    // manualButton.style.opacity = '100%'
    // uploadButton.style.opacity = '40%'
    upload.style.display = 'none';
  }

  const handleChange = (e) => {
    const targetId = e.target.id;
    const targetValue = e.target.value;
    if (targetId === 'band-input') {
      setEditBand(targetValue);
    } else if (targetId === 'album-input') {
      setEditAlbum(targetValue);
    } else {
      let convertedYear = parseInt(targetValue)
      setEditYear(parseInt(convertedYear));
    }
  }

  const handleTabs = (action) => {
    if (action === 'add-one') {
      manualButton.style.opacity = '100%'
      manual.style.display = 'block';
      uploadButton.style.opacity = '40%'
      upload.style.display = 'none';
    } else {
      manual.style.display = 'none';
      manualButton.style.opacity = '40%';
      upload.style.display = 'block';
      uploadButton.style.opacity = '100%'
    }
  }

  return (
    <div className="tabs-new-entry">
      <div className="form">
        <form action={formSettings.formAction} method="post">
          <div className="form-title">
            {formSettings.title}
          </div>
          {
            props.buttonClicked === 'new' ?
              <div className="tabs-new-entry-links">
                <button type="button" id="add-one-button" onClick={() => { handleTabs('add-one') }}>
                  ADD ONE
                </button>
                <button type="button" id="upload-button" onClick={() => { handleTabs('upload') }}>
                  ADD MANY
                </button>
              </div>
              :
              <div className="edit-delete-form">
                <br/>
                {/* <br/> */}
              </div>
          }


          <div id="add-one-entry" className="tab-content-manual">
            <input type="hidden" name="_id" value={props.editEntry._id} />
            <input type="text" name="band" id="band-input" required placeholder="band" value={editBand} onChange={handleChange} disabled={formSettings.disabled} />
            <br />
            <br />
            <input type="text" name="album" id="album-input" required placeholder="album" value={editAlbum} onChange={handleChange} disabled={formSettings.disabled} />
            <br />
            <br />
            <input type="number" name="year" id="year-input" min="1900" max="2030" placeholder="year" value={editYear} onChange={handleChange} disabled={formSettings.disabled} />
            <br />
            <br />
            <select type="text" name="genre" id="genre" disabled={formSettings.disabled}>
              <option selected>{formSettings.genreSelected}</option>
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
            <br />
            <br />
            <select type="text" name="mood" id="mood" disabled={formSettings.disabled}>
              <option selected>{formSettings.moodSelected}</option>
              <option value="chill">chill</option>
              <option value="upbeat">upbeat</option>
              <option value="daytime">daytime</option>
            </select>
            <br />
            <br />
            <select type="text" name="rating" id="rating" disabled={formSettings.disabled}>
              <option selected>{formSettings.ratingSelected}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <br />
            <br />
            <select type="text" name="musicCollection" id="musicCollection" disabled={formSettings.disabled}>
              <option selected>{formSettings.musicCollectionSelected}</option>
              <option value="canon">canon</option>
              <option value="nominee">nominee</option>
            </select>
            <br />
            <br />
            <select type="text" name="instrumental" id="instrumental" disabled={formSettings.disabled}>
              <option selected>{formSettings.instrumentalSelected}</option>
              <option value="no">no</option>
              <option value="yes">yes</option>
            </select>
            <br />
            <br />
            <div>
              <button type="button" onClick={handleCancel}>CANCEL</button>
              <button id="form-action-button">{formSettings.button}</button>
            </div>
          </div>
        </form>
        <div id="upload-csv-tab" className="tab-content-upload">
          <form action="/upload-csv" method="post" enctype="multipart/form-data">
            <div>
              <br />
              {/* <br /> */}
              <a href="" />
              <label for='file-upload' className="custom-file-upload">
                select CSV file
              </label>
              <input id="file-upload" type="file" name="csv-file" />
              <br />
              <button id="upload-cancel-button" type="button" onClick={handleCancel}>CANCEL</button>
              <button >UPLOAD</button>
            </div>
          </form>
          <br />
          <br />
          <div className="tip-upload-csv">
            <a href="./../../mcanon-template.csv" download>download CSV template</a>
            <img src="./../../info-icon.jpg" alt="information-icon" height="17px" width="17px" />
            <div className="tip-upload-csv-question">
              <div className="tip-upload-csv-title">
                <strong> To Use The CSV Template File: </strong><br />
              </div>
              <div>
              1. Click the link above to download. <br />
              2. Open the template file. <br />
              3. Fill in the template file for each row. <br />
              4. Select and upload your edited file. <br />
              </div>
              <div className="tip-upload-csv-items">
                BAND: <i>name of the band</i> <br />
                   ALBUM: <i>
                  title of the album
                     </i>
                <br />
                   YEAR: <i>
                  four digit number (i.e., 1991)
                    </i>
                <br />
                   GENRE: <i>
                  see dropdown for all options
                     </i>
                <br />
                   MOOD: <i>
                  upbeat, daytime, or chill
                     </i>
                <br />
                   RATING: <i>
                  1, 2, or 3
                     </i>
                <br />
                   COLLECTION: <i>
                  canon or nominee
                   </i>
                <br />
                 INSTRUMENTAL: <i>
                  yes or no
                       </i>
                <br />
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default Form