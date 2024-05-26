import { addMinutes, parse } from "date-fns";

export default function getStartAndEndTime(date, start, duration) {
  const today = new Date();
  const startTime = parse(`${date} ${start}`, "dd MMMM yyyy HH:mm", today);
  const endTime = addMinutes(startTime, duration);

  if (!start && !duration) return [today, null];

  return [startTime, endTime];
}
