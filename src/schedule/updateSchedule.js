import { addMinutes, getWeek, nextDay } from "date-fns";

import { getDayNumber } from "../utils/index.js";
import { addEvent } from "../notion/index.js";

export default function updateSchedule(events, day) {
  for (let event of events) {
    let {
      event: name,
      day: scheduledDay = day,
      hour = 0,
      minute = 0,
      end = 30,
      every = 1,
    } = event;

    const today = new Date();
    const dayNumber = getDayNumber(scheduledDay);
    const date = nextDay(today, dayNumber);
    let week = getWeek(date);
    dayNumber > 0 && week++;

    date.setHours(hour, minute);

    const endTime = addMinutes(date, end);

    if (week % every === 0) addEvent(name, date, endTime);
  }
}
