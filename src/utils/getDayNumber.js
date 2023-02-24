export const dayNumbers = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

export default function getDayNumber(day) {
  return dayNumbers[day.toLowerCase()] || 0;
}
