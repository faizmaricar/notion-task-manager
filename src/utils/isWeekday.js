import {
  isMonday,
  isTuesday,
  isWednesday,
  isThursday,
  isFriday,
} from "date-fns";

export default function isWeekday(date) {
  return (
    isMonday(date) ||
    isTuesday(date) ||
    isWednesday(date) ||
    isThursday(date) ||
    isFriday(date)
  );
}
