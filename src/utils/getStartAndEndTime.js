import { addDays, addMinutes, format, parse } from "date-fns";

export default function getStartAndEndTime(start, duration) {
  const today = new Date();
  if (!start && !duration) return [today, null];

  let todayString = format(today, "dd/MM/yyyy");
  todayString = `${todayString} ${start}`;

  const startTime = parse(todayString, "dd/MM/yyyy HHmm", new Date());
  const endTime = addMinutes(startTime, duration);

  return [startTime, endTime];
}
