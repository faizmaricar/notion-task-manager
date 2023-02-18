import path from "path";

import readYaml from "./readYaml.js";
import updateWeekdaySchedule from "./updateWeekdaySchedule.js";

export default function updateSchedule() {
  const schedulePath = path.join(
    path.resolve(path.dirname("")),
    "src/schedule.yml"
  );

  const { weekdays } = readYaml(schedulePath);
  updateWeekdaySchedule(weekdays);
}
