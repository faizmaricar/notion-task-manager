import { addDays, addMinutes, format, parse } from "date-fns";

export default function getStartAndEndTime(start, duration) {
  const today = new Date();
  if (!start && !duration) return [addDays(today, 1), null];

  let todayString = format(today, "dd/MM/yyyy");
  todayString = `${todayString} ${start}`;

  const startTime = addDays(
    parse(todayString, "dd/MM/yyyy HHmm", new Date()),
    1
  );
  const endTime = addMinutes(startTime, duration);

  return [startTime, endTime];
}
