import {
  getPath,
  readYaml,
  getStartAndEndTime,
  isWeekday,
  isThisWeek,
} from "../utils/index.js";
import { addPage } from "../notion/index.js";
import { addMilliseconds, getDay, isWeekend } from "date-fns";

export default function updateSchedule() {
  const schedulePath = getPath("schedule.yml");
  const items = readYaml(schedulePath);

  for (let item of items) {
    const {
      title,
      type,
      frequency,
      start,
      duration,
      day,
      from,
      every = 1,
    } = item;
    const [startTime, endTime] = getStartAndEndTime(start, duration);

    const now = new Date();
    const sgDate = addMilliseconds(now, 8 * 60 * 60 * 1000);

    switch (frequency) {
      case "monthly":
        if (getDay(sgDate) === day) addPage(title, type, startTime, endTime);
      case "weekly":
        if (isThisWeek(startTime, from, every, day))
          addPage(title, type, startTime, endTime);
        break;
      case "daily":
        addPage(title, type, startTime, endTime);
        break;
      case "weekdays":
        if (!isWeekend(sgDate)) addPage(title, type, startTime, endTime);
      case "weekends":
        if (isWeekend(sgDate)) addPage(title, type, startTime, endTime);
        break;
      default:
        break;
    }
  }
}
