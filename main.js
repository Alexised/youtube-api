const { YOUTUBE_API_KEY } = require("./config");

if (!YOUTUBE_API_KEY) {
  throw new Error("No API key is provided");
}

function main() {
  console.log("Ready to get Youtube data!");
}

main();