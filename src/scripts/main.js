import { Clowns } from "./Clowns.js";
import { fetchRequests } from "./dataAccess.js";

const mainContainer = document.querySelector("#main-container");

const renderHTML = () => {
  fetchRequests().then(() => {
    mainContainer.innerHTML = Clowns();
  });
};

renderHTML();
