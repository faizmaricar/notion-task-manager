import { nextMonday, addDays, addHours } from "date-fns";
import addEvent from "./addEvent.js";

const [, , command] = process.argv;

switch (command) {
  case "weekdays":
    const monday = nextMonday(new Date());

    for (let day = 0; day < 5; day++) {
      const date = addDays(monday, day);
      date.setHours(6, 0);
      addEvent("Running", date, addHours(date, 1));

      date.setHours(8, 30);
      addEvent("Work", date, addHours(date, 9));
    }
    break;
  default:
    console.log("Enter command: [ weekdays ]");
}
