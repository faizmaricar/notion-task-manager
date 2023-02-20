import { addMinutes, getWeek, nextDay } from "date-fns";
import addEvent from "../addEvent.js";

export default function updateSchedule(items, day) {
  for (let item of items) {
    let {
      event,
      day: scheduledDay,
      hour = 0,
      minute = 0,
      end = 30,
      every = 1,
    } = item;

    scheduledDay = day || 0;

    const date = nextDay(new Date(), scheduledDay);
    const week = getWeek(date);

    date.setHours(hour, minute);

    if (week % every === 0) {
      addEvent(event, date, addMinutes(date, end));
    }
  }
}
