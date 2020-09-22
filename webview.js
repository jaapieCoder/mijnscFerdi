"use strict";

module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    const badgeDiv = document.getElementsByClassName("js-badge--alerts");
    for (let i = 0; i < badgeDiv.length; i++) {
      let div = badgeDiv[i];
      if(div.hasAttribute("data-badge")) {
        
        let count = div.getAttribute("data-badge");
        direct = isNaN(count) ? 0 : count;
      }
    }

    Franz.setBadge(direct, indirect);
  }

  Franz.loop(getMessages);
}
