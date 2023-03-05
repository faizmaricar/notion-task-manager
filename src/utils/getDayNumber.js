export const dayNumbers = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  weekdays: function () {
    return Object.keys(this)
      .filter((key) => !["saturday", "sunday", "weekdays"].includes(key))
      .reduce((a, b) => ({ ...a, [b]: this[b] }), {});
  },
};

export default function getDayNumber(day) {
  return dayNumbers[day.toLowerCase()] || 0;
}
