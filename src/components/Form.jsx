const React = require('react');

const Form = () => {

  return (
    <div>
      <form action="post">
        <div className="form">
        <label for="band">Band</label>
        <input type="text" name="band" id="band" required/>
        <label for="album">Album</label>
        <input type="text" name="album" id="album" required/>
        <label for="genre">Genre</label>
        <select type="text" name="genre" id="genre" required>
          <option value="rock">rock</option>
          <option value="rap">rap</option>
          <option value="jazz">jazz</option>
          <option value="blues">blues</option>
          <option value="funk">funk</option>
          <option value="rhythmAndlues">rhythm and blues</option>
        </select>
        <label for="mood">Mood</label>
        <select type="text" name="mood" id="mood" required>
          <option value="chill">chill</option>
          <option value="upbeat">upbeat</option>
          <option value="daytime">daytime</option>
        </select>
        <p>Instrumental</p>
        <div>
        <input type="radio" name="instrumental" id="yes" value="yes" checked />
          <label for="yes">yes</label>
        <input type="radio" name="instrumental" id="no" value="no" />
          <label for="no">no</label>
        </div>
          <option value="canon">canon</option>
          <option value="research">research</option>
        <label for="year">Year</label>
        <input type="number" name="year" id="year" min="4" max="4" required/>
        <label for="rating">Rating</label>
        <select type="text" name="rating" id="rating" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label for="book">Book</label>
        <select type="text" name="book" id="book" required>
          <option value="canon">canon</option>
          <option value="research">research</option>
        </select>
        </div>
      </form>
    </div>
  )
}

export default Form