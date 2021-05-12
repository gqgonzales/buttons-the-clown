const mainContainer = document.querySelector("#main-container");

export const PartyForm = () => {
  let html = `
  <div class="party-form">
    <div class="field">
      <input
        type="text"
        name="partyParentsName"
        class="input"
        placeholder="Parent's Name"
      />
    </div>
    <div class="field">
    <input
      type="text"
      name="partyChildsName"
      class="input"
      placeholder="Child's Name"
    />
  </div>
  <div class="field">
  <input
    type="text"
    name="partyAddress"
    class="input"
    placeholder="Party Address"
  />
</div>
<div class="field">
<!-- <label for="partyAttendees">Number of guests (including your child)</label> -->
<input
  type="number"
  name="partyAttendees"
  class="input"
  min="1"
  max="20"
  placeholder="Number of guests (including your child)"
/>
</div>
<div class="field">
<input
  type="text"
  name="partyLength"
  class="input"
  placeholder="Party duration (in hours)"
/>
</div>
<div class="field">
<!-- <label class="label" for="partyDate">Date of event</label> -->
<input type="date" name="partyDate" class="input" placeholder="Date of Event (click to select)" />
</div>

<button class="button" id="submitButton">*~*~*~*~*~*~Let's Party*~*~*~*~*~*~</button>
</div>
    `;
  return html;
};
