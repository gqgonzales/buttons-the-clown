import {
  createPartyRequest,
  createParentObject,
  createChildObject,
  createFamilyObject,
} from "./dataAccess.js";
const mainContainer = document.querySelector("#main-container");

export const PartyForm = () => {
  let html = `
  <div class="party-form">
    <div class="field">
      <input
        type="text"
        name="partyParentsName"
        class="input"
        placeholder="Parent's First Name"
      />
    </div>

    <div class="party-form">
    <div class="field">
      <input
        type="text"
        name="partyLastName"
        class="input"
        placeholder="Last Name"
      />
    </div>

    <div class="field">
    <input
      type="text"
      name="partyChildsName"
      class="input"
      placeholder="Child's First Name"
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
  name="partyDuration"
  class="input"
  placeholder="Party duration (in hours)"
/>
</div>

<div class="field">
<label for="partyDate">When do you need us?:</label>
<input type="date" name="partyDate" class="input" placeholder="Date of Event (click to select)" />
</div>

<button class="button" id="submitButton">
*~*~*~*~*~*~Let's Party*~*~*~*~*~*
</button>
</div>
    `;
  return html;
};

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitButton") {
    // Get what the user typed into the form fields
    const partyParentsName = document.querySelector(
      "input[name='partyParentsName']"
    ).value;
    const partyLastName = document.querySelector(
      "input[name='partyLastName']"
    ).value;
    const partyChildsName = document.querySelector(
      "input[name='partyChildsName']"
    ).value;
    const partyAddress = document.querySelector(
      "input[name='partyAddress']"
    ).value;
    const partyAttendees = document.querySelector(
      "input[name='partyAttendees']"
    ).value;
    const partyDuration = document.querySelector(
      "input[name='partyDuration']"
    ).value;
    const partyDate = document.querySelector(
      "input[name='partyDate']"
    ).value;
    // const clownId = document.querySelector(
    //   "input[name='partyClowns']"
    // ).value;

    // Make an object out of the user input
    // Turn me into a request object instead!
    const filledOutRequestForm = {
      parentsName: partyParentsName,
      lastName: partyLastName,
      childsName: partyChildsName,
      address: partyAddress,
      attendees: partyAttendees,
      reservationLength: partyDuration,
      date: partyDate,
    };

    //Make more objects here!
    const generatedParentObject = {
      firstName: partyParentsName,
      lastName: partyLastName,
    };

    const generatedChildObject = {
      firstName: partyChildsName,
      lastName: partyLastName,
    };

    const generatedFamilyObject = {
      lastName: partyLastName,
    };
    // Send the data to the API for permanent storage

    createParentObject(generatedParentObject).then(
      (capturedParent) => {
        createChildObject(generatedChildObject).then(
          (capturedChild) => {
            createFamilyObject(capturedParent, capturedChild);
          }
        );
      }
    );
    createFamilyObject(generatedFamilyObject);
    createPartyRequest(filledOutRequestForm);
    // Hold off on the .then()
  }
});
