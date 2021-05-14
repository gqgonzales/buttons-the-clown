// Define values of the appState as empty arrays to be populated by our fetch functions.
const applicationState = {
  requests: [],
  clowns: [],
  clownJobs: [],
  parents: [],
  children: [],
  families: [],
};

const mainContainer = document.querySelector("#main-container");

const API = "http://localhost:8088";

// ------------------ REQUESTS ------------------
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

// ------------------ CLOWNS ------------------
export const fetchClowns = () => {
  return fetch(`${API}/clowns`)
    .then((res) => res.json())
    .then((clownList) => {
      applicationState.clowns = clownList;
    });
};

export const getClowns = () => {
  return [...applicationState.clowns];
};
// ------------------ CLOWN JOBS ------------------

export const fetchClownJobs = () => {
  return fetch(`${API}/clownJobs`)
    .then((res) => res.json())
    .then((jobList) => {
      applicationState.clownJobs = jobList;
    });
};

export const getClownJobs = () => {
  return [...applicationState.clownJobs];
};

// ------------------ PARENTS ------------------
export const fetchParents = () => {
  return fetch(`${API}/parents`)
    .then((res) => res.json())
    .then((parentList) => {
      applicationState.parents = parentList;
    });
};

export const getParents = () => {
  return [...applicationState.parents];
};

// ------------------ CHILDREN ------------------
export const fetchChildren = () => {
  return fetch(`${API}/children`)
    .then((res) => res.json())
    .then((childList) => {
      applicationState.children = childList;
    });
};

export const getChildren = () => {
  return [...applicationState.children];
};

// ------------------ FAMILIES ------------------
export const fetchFamilies = () => {
  return fetch(`${API}/families`)
    .then((res) => res.json())
    .then((familyList) => {
      applicationState.families = familyList;
    });
};

export const getFamilies = () => {
  return [...applicationState.families];
};

// ------------------ DELETE REQUESTS ------------------

export const deleteRequest = (id) => {
  return fetch(`${API}/requests/${id}`, {
    method: "DELETE",
  }).then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  });
};
