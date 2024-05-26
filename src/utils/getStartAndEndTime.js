import { addMinutes, parse } from "date-fns";

export default function getStartAndEndTime(start, duration) {
  const today = new Date();

  const startTime = parse(
    start,
    "HHmm",
    new Date(today.getTime() + 8 * 60 * 60 * 1000)
  );

  const endTime = addMinutes(startTime, duration);

  if (!start && !duration) return [today, null];

  return [startTime, endTime];
}
