import {
  getRequests,
  deleteRequest,
  getClowns,
  getFamilies,
  getCompletions,
  saveCompletion,
} from "./dataAccess.js";

export const Requests = () => {
  let requests = getRequests();
  let clowns = getClowns();
  let families = getFamilies();

  let html = `
        <ul class="request-object">
        ${requests
          .map((requestObject) => {
            return `
            <li class="request-li">
            The ${families.lastName} family is throwing a party! 
            Laughs needed at ${requestObject.address} on ${
              requestObject.date
            } for ${requestObject.reservationLength} hours.
            <select class="clowns" id="clowns">
              <option value="">Who's gonna clown?</option>
              ${clowns
                .map((clown) => {
                  return `<option value="${requestObject.id}--${clown.id}">${clown.name}</option>`;
                })
                .join("")}
            </select>
            <button class="request__delete"
                      id="request--${requestObject.id}">
                      Delete
                    </button>
            </li>
            `;
          })
          .join("")}
        </ul>
    `;
  return html;
};

const mainContainer = document.querySelector("#main-container");

mainContainer.addEventListener("click", (click) => {
  if (click.target.id.startsWith("request--")) {
    const [, requestId] = click.target.id.split("--");
    deleteRequest(parseInt(requestId));
  }
});

//  It should create a new state object,
// and then send that state to a function in your data access module which will POST it to the API.

mainContainer.addEventListener("change", (event) => {
  if (event.target.id === "clowns") {
    const clownId = event.target.id;
    const requestId = event.target.value;

    /*
              This object should have 3 properties
                 1. requestId
                 2. clownId
                 3. date_created
          */
    const completion = {
      requestId,
      clownId,
      date_created:
        new Date().toLocaleTimeString() +
        " " +
        new Date().toLocaleDateString(),
    };

    /*
              Invoke the function that performs the POST request
              to the `completions` resource for your API. Send the
              completion object as a parameter.
    */
    saveCompletion(completion);
  }
});
