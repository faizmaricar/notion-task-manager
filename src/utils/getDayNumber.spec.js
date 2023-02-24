import {
  nextDay,
  nextMonday,
  nextTuesday,
  nextWednesday,
  nextThursday,
  nextFriday,
  nextSaturday,
  nextSunday,
} from "date-fns";
import { getDayNumber } from "./index";

describe("getDayNumber", () => {
  const date = new Date();
  const getNextDay = (day) => nextDay(date, getDayNumber(day));
  test.each([
    { day: "Sunday", fn: nextSunday },
    { day: "Monday", fn: nextMonday },
    { day: "Tuesday", fn: nextTuesday },
    { day: "Wednesday", fn: nextWednesday },
    { day: "Thursday", fn: nextThursday },
    { day: "Friday", fn: nextFriday },
    { day: "Saturday", fn: nextSaturday },
    { day: "Random", fn: nextSunday },
  ])("$day", ({ day, fn }) => {
    expect(getNextDay(day)).toStrictEqual(fn(date));
  });
});
