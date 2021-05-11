import { getRequests } from "./dataAccess.js";

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
            </li>
            `;
          })
          .join("")}
        </ul>
    `;
  return html;
};
