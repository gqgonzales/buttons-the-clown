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
