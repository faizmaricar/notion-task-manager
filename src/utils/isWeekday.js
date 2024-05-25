import { addMilliseconds, isWeekend } from "date-fns";

export default function isWeekday(date) {
  const singaporeDate = addMilliseconds(date, 8 * 60 * 60 * 1000);
  return !isWeekend(singaporeDate);
}
