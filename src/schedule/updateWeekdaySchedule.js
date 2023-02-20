import updateSchedule from "./updateSchedule.js";

export default function updateWeekdaySchedule(weekdays) {
  for (let day = 0; day < 5; day++) updateSchedule(weekdays, day);
}
