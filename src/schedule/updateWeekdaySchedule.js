import { dayNumbers } from "../utils/index.js";
import updateSchedule from "./updateSchedule.js";

export default function updateWeekdaySchedule(weekdays) {
  for (let day in dayNumbers) updateSchedule(weekdays, day);
}
