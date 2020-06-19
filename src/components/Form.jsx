const React = require('react');

const Form = () => {

  return (
    <div className="form">
      <form action="/new-entry" method="post">
        <div className="form">
          <div className="form-title">
          NEW ENTRY
          </div>
          <br/>
          <br/>
        <input type="text" name="band" id="band" required placeholder="band"/>
        <br/>
        <br/>
        <input type="text" name="album" id="album" required placeholder="album"/>
        <br/>
        <br/>
        <input type="number" name="year" id="year" min="1900" max="2030" required placeholder="year"/>
        <br/>
        <br/>
        <select type="text" name="genre" id="genre" required>
          <option selected>genre</option>
          <option value="rock">rock</option>
          <option value="rap">rap</option>
          <option value="jazz">jazz</option>
          <option value="blues">blues</option>
          <option value="funk">funk</option>
          <option value="rhythmAndlues">rhythm and blues</option>
          <option value="electronic">electronic</option>
          <option value="country">country</option>
          <option value="+-genre">+ genre</option>
        </select>
        <br/>
        <br/>
        <select type="text" name="mood" id="mood" required>
          <option selected>mood</option>
          <option value="chill">chill</option>
          <option value="upbeat">upbeat</option>
          <option value="daytime">daytime</option>
          <option value="+-mood">+ mood</option>
        </select>
        <br/>
        <br/>
        <select type="text" name="rating" id="rating" required>
          <option selected>rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br/>
        <br/>
        <select type="text" name="book" id="book" required>
        <option selected>book</option>
          <option value="canon">canon</option>
          <option value="research">research</option>
        </select>
        <br/>
        <br/>
        <select type="text" name="instrumental" id="instrumental" required>
          <option selected>instrumental</option>
          <option value="no">no</option>
          <option value="yes">yes</option>
        </select>
        <br/>
        <br/>
          <button>ADD</button>
        </div>
      </form>
    </div>
  )
}

export default Form