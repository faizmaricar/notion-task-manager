import { dayNumbers } from "../utils/index.js";
import updateSchedule from "./updateSchedule.js";

const DayNumbers = dayNumbers.days();

export default function updateDailySchedule(days) {
  for (let day in DayNumbers) updateSchedule(days, day);
}
