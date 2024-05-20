import updateWeekdaySchedule from "./updateWeekdaySchedule.js";
import updateSchedule from "./updateSchedule.js";
import updateDailySchedule from "./updateDailySchedule.js";

import { getPath, readYaml } from "../utils/index.js";

export default function schedule() {
  const schedulePath = getPath("schedule.yml");
  const { weekdays, weekly, daily } = readYaml(schedulePath);

  updateDailySchedule(daily);
  updateWeekdaySchedule(weekdays);
  updateSchedule(weekly);
}
