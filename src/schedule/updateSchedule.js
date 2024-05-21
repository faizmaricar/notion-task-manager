import {
  getPath,
  readYaml,
  getStartAndEndTime,
  isWeekday,
  isThisWeek,
} from "../utils/index.js";
import { addPage } from "../notion/index.js";
import { isWeekend } from "date-fns";

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
    switch (frequency) {
      case "monthly":
      case "weekly":
        if (isThisWeek(startTime, from, every, day))
          addPage(title, type, startTime, endTime);
        break;
      case "daily":
        addPage(title, type, startTime, endTime);
        break;
      case "weekdays":
        if (isWeekday(startTime)) addPage(title, type, startTime, endTime);
      case "weekends":
        if (isWeekend(startTime)) addPage(title, type, startTime, endTime);
        break;
      default:
        break;
    }
  }
}
