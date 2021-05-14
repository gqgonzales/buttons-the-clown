import {
  getRequests,
  deleteRequest,
  getClowns,
  getFamilies,
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
            Clown needed at ${requestObject.address} on ${
              requestObject.date
            } for ${requestObject.reservationLength} hours.
            <select class="clowns" id="clowns">
              <option value="">Choose</option>
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
