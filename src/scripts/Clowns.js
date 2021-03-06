import { PartyForm } from "./PartyForm.js";
import { Requests } from "./Requests.js";

export const Clowns = () => {
  return `
    <h1 class="main-header">
    Buttons and Lollipop! The Clowns! Ha! Hire us for your next birthday bash!
  </h1>
  
  <section class="party-form-container">
  <h2>Hire Us!</h2>
      ${PartyForm()}
  </section>
  
  <section class="partyRequests">
  <h2>Party Requests</h2>
    ${Requests()}
    </section>

<div class="ballon-container">
<div class="balloons" style='position:relative; padding-bottom:calc(100.00% + 44px)'><iframe src='https://gfycat.com/ifr/ForsakenValidGiraffe' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div><p> <a href="https://gfycat.com/forsakenvalidgiraffe">via Gfycat</a></p>
</div>`;
};
