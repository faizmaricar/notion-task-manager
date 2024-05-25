import {
  isMonday,
  isTuesday,
  isWednesday,
  isThursday,
  isFriday,
  addMilliseconds,
} from "date-fns";

export default function isWeekday(date) {
  const singaporeDate = addMilliseconds(date, 8 * 60 * 60 * 1000);
  return (
    isMonday(singaporeDate) ||
    isTuesday(singaporeDate) ||
    isWednesday(singaporeDate) ||
    isThursday(singaporeDate) ||
    isFriday(singaporeDate)
  );
}
