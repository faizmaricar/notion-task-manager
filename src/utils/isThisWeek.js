import { differenceInWeeks, parse, getDay } from "date-fns";

export default function isThisWeek(startTime, from, every, day) {
  return (
    differenceInWeeks(startTime, parse(from, "dd/MM/yyyy", new Date())) ===
      every && getDay(startTime) === day
  );
}
