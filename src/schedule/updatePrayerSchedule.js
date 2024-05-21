import { addMinutes, parse } from "date-fns";
import { addPage } from "../notion/index.js";
import { getPrayerTimes } from "../utils/index.js";

export default async function updatePrayerschedule() {
  const now = Date.now();
  const { PrayerDate, Hijri, Syuruk, ...timings } = await getPrayerTimes(now);

  for (let timing in timings) {
    const time = timings[timing];
    const [startTime, endTime] = createStartAndEndTime(
      PrayerDate,
      time,
      timing === "Subuh"
    );
    addPage(timing, "Event", startTime);
  }
}

function createStartAndEndTime(PrayerDate, timing, am = false) {
  const datetimestring = `${PrayerDate} ${timing} ${am ? "AM" : "PM"}`;
  const startTime = parse(datetimestring, "dd MMMM yyyy h:mm a", new Date());
  const endTime = addMinutes(startTime, 5);
  return [startTime, endTime];
}
