import { getRequests, deleteRequest } from "./dataAccess.js";

export const Requests = () => {
  let requests = getRequests();

  let html = `
        <ul class="request-object">
        ${requests
          .map((requestObject) => {
            return `
            <li>
            ID: ${requestObject.id}
            Clown ID: ${requestObject.clownId}
            Family ID: ${requestObject.familyId}
            Address: ${requestObject.address}
            Date: ${requestObject.date}
            Hours: ${requestObject.reservationLength}
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
