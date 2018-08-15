//which credentials to return

if (proces.env.NODE_ENV === "production") {
  //prod keys
  module.exports = require("./prod");
} else {
  //dev keys
  module.exports = require("./dev");
}
