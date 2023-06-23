

import * as mod from "/coffee_data.js";

import("/coffee_data.js").then((mod2) => {
  // Logs "then() called"
  console.log(mod === mod2); // false
});