import { getDay } from "date-fns";

export default function isWeekday(date) {
  return getDay(date) < 6;
}
