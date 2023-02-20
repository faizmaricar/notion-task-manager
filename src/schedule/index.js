import path from "path";

import updateWeekdaySchedule from "./updateWeekdaySchedule.js";
import updateSchedule from "./updateSchedule.js";

import readYaml from "../readYaml.js";

export default function schedule() {
  const schedulePath = path.join(
    path.resolve(path.dirname("")),
    "src/schedule/schedule.yml"
  );

  const { weekdays, weekly } = readYaml(schedulePath);

  updateWeekdaySchedule(weekdays);
  updateSchedule(weekly);
}
