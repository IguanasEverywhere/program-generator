const InputForm = () => {

  return (
    <form>
      <label htmlFor="userInstrument">I Play</label><br></br>
      <select id="userInstrument" name="userInstrument">
        <option value="piano">Piano</option>
        <option value="violin">Violin</option>
        <option value="viola">Viola</option>
        <option value="cello">Cello</option>
        <option value="bass">Double Bass</option>
      </select>

      <p>Other instruments I'm playing with</p>
      <label htmlFor="withPiano">Piano</label>
      <input id="withPiano" type="checkbox"></input>
      <label htmlFor="withViolin">Violin</label>
      <input id="withViolin" type="checkbox"></input>
      <label htmlFor="withViola">Viola</label>
      <input id="withViola" type="checkbox"></input>
      <label htmlFor="withCello">Cello</label>
      <input id="withCello" type="checkbox"></input>
      <label htmlFor="withBass">Bass</label>
      <input id="withBass" type="checkbox"></input>

      <label htmlFor="programLength">How Long is the program?</label>
      <select id="programLength" name="programLength">
        <option value="30">30 mins</option>
        <option value="60">60 mins</option>
        <option value="90">90 mins</option>
        <option value="120">120 mins</option>
      </select>

      <label htmlFor="audience">Who's the audience?</label>
      <select id="audience" name="audience">
        <option value="retirement">Retirement Home</option>
        <option value="church">Church Congegration</option>
        <option value="academic">Academic or High Brow Audience</option>
        <option value="friends">Friends and Family</option>
      </select>

    </form>
  )
}

export default InputForm;