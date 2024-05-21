import {
  getPath,
  readYaml,
  getStartAndEndTime,
  isWeekday,
} from "../utils/index.js";
import { addPage } from "../notion/index.js";

export default function updateSchedule() {
  const schedulePath = getPath("schedule.yml");
  const items = readYaml(schedulePath);

  for (let item of items) {
    const { title, type, frequency, start, duration } = item;
    const [startTime, endTime] = getStartAndEndTime(start, duration);
    switch (frequency) {
      case "monthly":
      case "weekly":
        break;
      case "daily":
        addPage(title, type, startTime, endTime);
        break;
      case "weekdays":
        if (isWeekday(startTime)) addPage(title, type, startTime, endTime);
      case "weekends":
        break;
      default:
        break;
    }
  }
}
