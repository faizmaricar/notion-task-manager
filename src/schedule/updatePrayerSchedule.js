import { parse } from "date-fns";
import { addPage } from "../notion/index.js";
import { getPrayerTimes } from "../utils/index.js";
import updateSchedule from "./updateSchedule.js";

export default async function updatePrayerschedule() {
  const now = Date.now();
  const { PrayerDate, Hijri, ...timings } = await getPrayerTimes(now);

  for (let timing in timings) {
    const time = timings[timing];
    const startTime = createStartAndEndTime(
      PrayerDate,
      time,
      timing === "Subuh" || timing === "Syuruk"
    );
    addPage(timing, "Event", startTime);
  }
  updateSchedule(PrayerDate);
}

function createStartAndEndTime(PrayerDate, timing, am = false) {
  const datetimestring = `${PrayerDate} ${timing} ${am ? "AM" : "PM"}`;
  const startTime = parse(datetimestring, "dd MMMM yyyy h:mm a", new Date());
  return startTime;
}
