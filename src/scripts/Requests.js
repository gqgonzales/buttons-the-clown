import { getRequests } from "./dataAccess.js";

export const Requests = () => {
  let requests = getRequests();

  let html = `
        <div class="request-object">
        ${requests
          .map((requestObject) => {
            return `
            ID: ${requestObject.id}
            Clown ID: ${requestObject.clownId}
            Family ID: ${requestObject.familyId}
            Address: $${requestObject.address}
            Date: ${requestObject.date}
            Hours: ${requestObject.reservationLength}
            `;
          })
          .join("")}
        </div>
    `;
  return html;
};
