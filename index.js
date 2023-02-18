import updateSchedule from "./src/updateSchedule.js";

const [, , command] = process.argv;

switch (command) {
  case "schedule":
    updateSchedule();
    break;
  default:
    console.log("Enter command: [ weekdays ]");
}
