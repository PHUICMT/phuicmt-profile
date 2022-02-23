let ghpages = require("gh-pages");
let moment = require("moment");
ghpages.publish(
  "out",
  {
    branch: "page",
    dotfiles: true,
    message: `🚀 Deploy at [${moment().format("DD/MM/YY")}]`,
  },
  () => {
    console.log("Deployed...");
  }
);
