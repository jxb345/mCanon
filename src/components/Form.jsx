const React = require('react');

const Form = (props) => {
  let formAction;
  let title;
  let genreSelected;
  let moodSelected;
  let ratingSelected;
  let bookSelected;
  let instrumentalSelected;
  let band = '';
  let album = '';
  let year = '';
  let button;


  if (props.editButton) {
    formAction = "/get-one-entry";
    title = 'EDIT ENTRY';
    // genreSelected =
    // moodSelected =
    // ratingSelected =
    button = 'EDIT'
  } else {
    formAction = "/new-entry";
    title ='NEW ENTRY';
    genreSelected = 'genre';
    moodSelected = 'mood';
    ratingSelected = 'rating'
    bookSelected = 'book';
    instrumentalSelected = 'instrumental';
    button = 'ADD'
  }

  return (
    <div className="form">
      <form action={formAction} method="post">
        <div className="form">
          <div className="form-title">
         {title}
{         console.log('formAction', formAction)}

          </div>
          <br/>
          <br/>
        <input type="text" name="band" id="band" required placeholder="band" value={band} />
        <br/>
        <br/>
        <input type="text" name="album" id="album" required placeholder="album" value={album} />
        <br/>
        <br/>
        <input type="number" name="year" id="year" min="1900" max="2030" required placeholder="year" value={year} />
        <br/>
        <br/>
        <select type="text" name="genre" id="genre" required>
          <option selected>{genreSelected}</option>
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
          <option selected>{moodSelected}</option>
          <option value="chill">chill</option>
          <option value="upbeat">upbeat</option>
          <option value="daytime">daytime</option>
          <option value="+-mood">+ mood</option>
        </select>
        <br/>
        <br/>
        <select type="text" name="rating" id="rating" required>
          <option selected>{ratingSelected}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br/>
        <br/>
        <select type="text" name="book" id="book" required>
        <option selected>{bookSelected}</option>
          <option value="canon">canon</option>
          <option value="research">research</option>
        </select>
        <br/>
        <br/>
        <select type="text" name="instrumental" id="instrumental" required>
          <option selected>{instrumentalSelected}</option>
          <option value="no">no</option>
          <option value="yes">yes</option>
        </select>
        <br/>
        <br/>
          <button>{button}</button>
        </div>
      </form>
    </div>
  )
}

export default Form