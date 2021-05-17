// Define values of the appState as empty arrays to be populated by our fetch functions.
const applicationState = {
  requests: [],
  clowns: [],
  clownJobs: [],
  parents: [],
  children: [],
  families: [],
  completions: [],
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

// Need to pass through family ID etc.
export const createPartyRequest = (
  userPartyRequest,
  familyValue
) => {
  // const newFamilyObject = {
  //   parentId: familyValue.parentId,
  //   childId: familyValue.childId,
  // };
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userPartyRequest, familyValue),
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

// Make a create post request. What do you want it to make?

export const createParentObject = (taco) => {
  const fetchParents = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taco),
  };

  return fetch(`${API}/parents`, fetchParents)
    .then((res) => res.json())
    .then((capturedParent) => {
      return capturedParent;
      // mainContainer.dispatchEvent(
      //   new CustomEvent("stateChanged")
      // );
    });
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

export const createChildObject = (kidCreator) => {
  const fetchChildren = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(kidCreator),
  };

  return fetch(`${API}/children`, fetchChildren)
    .then((res) => res.json())
    .then((capturedChild) => {
      return capturedChild;
      // mainContainer.dispatchEvent(
      //   new CustomEvent("stateChanged")
      // );
    });
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

//  THIS AINT WORKIN
export const createFamilyObject = (parentValue, childValue) => {
  const newFamilyObject = {
    parentId: parentValue.id,
    childId: childValue.id,
    lastName: parentValue.lastName,
  };
  const fetchFamilies = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFamilyObject),
  };

  return fetch(`${API}/families`, fetchFamilies)
    .then((res) => res.json())
    .then(() => {
      mainContainer.dispatchEvent(
        new CustomEvent("stateChanged")
      );
    });
};

// ------------------ DELETE REQUESTS ------------------

export const deleteRequest = (id) => {
  return fetch(`${API}/requests/${id}`, {
    method: "DELETE",
  }).then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  });
};

// ------------------ COMPLETIONS ------------------

// fetchCompletions() - This will retrieve all completion objects from the API
export const fetchCompletions = () => {
  return fetch(`${API}/completions`)
    .then((res) => res.json())
    .then((completionObject) => {
      // Store the external state in application state
      applicationState.completions = completionObject;
    });
};

export const getCompletions = () => {
  return [...applicationState.completions];
};

// saveCompletion() - This will perform the POST request to save the completion object to the API
export const saveCompletion = (completion) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(completion),
  };

  return fetch(`${API}/completions`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(
        new CustomEvent("stateChanged")
      );
    });
};
