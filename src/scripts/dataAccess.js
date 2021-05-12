const applicationState = {
  requests: [],
};

const mainContainer = document.querySelector("#main-container");

const API = "http://localhost:8088";

export const fetchRequests = () => {
  return fetch(`${API}/requests`)
    .then((res) => res.json())
    .then((partyRequests) => {
      applicationState.requests = partyRequests;
    });
};

export const getRequests = () => {
  const copyOfRequests = [...applicationState.requests];
  return copyOfRequests;
};

export const sendRequest = (userPartyRequest) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userPartyRequest),
  };

  return fetch(`${API}/requests`, fetchOptions)
    .then((res) => res.json())
    .then(() => {
      mainContainer.dispatchEvent(
        new CustomEvent("stateChanged")
      );
    });
};

export const deleteRequest = (id) => {
  return fetch(`${API}/requests/${id}`, {
    method: "DELETE",
  }).then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  });
};
