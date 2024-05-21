import { differenceInWeeks, parse, getDay } from "date-fns";

export default function isThisWeek(startTime, from, every, day) {
  const weeks = differenceInWeeks(
    startTime,
    parse(from, "dd/MM/yyyy", new Date())
  );
  return weeks % every === 0 && getDay(startTime) === day;
}
