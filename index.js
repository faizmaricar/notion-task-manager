import schedule from "./src/schedule/index.js";
import updatePrayerschedule from "./src/schedule/updatePrayerSchedule.js";

const [, , command] = process.argv;

switch (command) {
  case "schedule":
    schedule();
    break;
  case "prayer-schedule":
    updatePrayerschedule();
    break;
  default:
    console.log("Enter command: [ weekdays ]");
}
