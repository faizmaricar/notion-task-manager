import { dayNumbers } from "../utils/index.js";
import updateSchedule from "./updateSchedule.js";

const weekDayNumbers = dayNumbers.weekdays();

export default function updateWeekdaySchedule(weekdays) {
  for (let day in weekDayNumbers) updateSchedule(weekdays, day);
}
