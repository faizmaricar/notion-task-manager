import { addDays, addMinutes, nextMonday } from "date-fns";
import addEvent from "./addEvent.js";

export default function exportWeekdaySchedule(weekdays) {
  const monday = nextMonday(new Date());

  for (let weekday of weekdays) {
    for (let day = 0; day < 5; day++) {
      const { event, hour, minute = 0, end = 30 } = weekday;
      const date = addDays(monday, day);

      date.setHours(hour, minute);
      addEvent(event, date, addMinutes(date, end));
    }
  }
}
