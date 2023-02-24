import { addMinutes, getWeek, nextDay } from "date-fns";
import { getDayNumber } from "../utils/index.js";
import addEvent from "../addEvent.js";

export default function updateSchedule(items, day) {
  for (let item of items) {
    let {
      event,
      day: scheduledDay = day,
      hour = 0,
      minute = 0,
      end = 30,
      every = 1,
    } = item;

    const date = nextDay(new Date(), getDayNumber(scheduledDay));
    const week = getWeek(date);

    date.setHours(hour, minute);

    if (week % every === 0) addEvent(event, date, addMinutes(date, end));
  }
}
