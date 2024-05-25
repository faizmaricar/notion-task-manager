import { isWeekend } from "date-fns";

export default function isWeekday(date) {
  return !isWeekend(date);
}
