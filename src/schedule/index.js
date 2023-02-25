import updateWeekdaySchedule from "./updateWeekdaySchedule.js";
import updateSchedule from "./updateSchedule.js";

import { getPath, readYaml } from "../utils/index.js";

export default function schedule() {
  const schedulePath = getPath("schedule.yml");
  const { weekdays, weekly } = readYaml(schedulePath);

  updateWeekdaySchedule(weekdays);
  updateSchedule(weekly);
}
