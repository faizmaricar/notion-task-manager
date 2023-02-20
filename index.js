import schedule from "./src/schedule/index.js";

const [, , command] = process.argv;

switch (command) {
  case "schedule":
    schedule();
    break;
  default:
    console.log("Enter command: [ weekdays ]");
}
