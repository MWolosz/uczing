const IDEAL_HOURS_PER_DAY = 8;

const getActualSleepHours = (sleepHours) => Object.keys(sleepHours).reduce((acc, key) => acc + sleepHours[key], 0)

const getIdealSleepHours = () => IDEAL_HOURS_PER_DAY * 7;

const calculateSleepDebt = (sleepHours) => {
  const actualSleepHours = getActualSleepHours(sleepHours);
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours < idealSleepHours) {
    return `You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`;
  }
  if (actualSleepHours > idealSleepHours) {
    return `You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than you needed this week.`;
  }
  return 'You had the perfect amount of sleep';
}


/*******************************************/

const MY_SLEEP_HOURS = {
  'Monday': 8,
  'Tuesday': 6,
  'Wednesday': 7,
  'Thursday': 7,
  'Friday': 8,
  'Saturday': 6,
  'Sunday': 5,
};

console.log(calculateSleepDebt(MY_SLEEP_HOURS));
