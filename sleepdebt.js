const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const IDEAL_HOURS_PER_DAY = 8;

const MY_SLEEP_HOURS = {
  'Monday': 8,
  'Tuesday': 6,
  'Wednesday': 7,
  'Thursday': 7,
  'Friday': 8,
  'Saturday': 6,
  'Sunday': 5,
};

const getSleepHours = day => {
  return MY_SLEEP_HOURS[day];
};

const getActualSleepHours = () => {
  let hours = 0;
  for(let day of DAYS_OF_WEEK) {
    hours = hours + getSleepHours(day)
  }
  return hours;
}

const getIdealSleepHours = () => {
  return IDEAL_HOURS_PER_DAY * DAYS_OF_WEEK.length;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours < idealSleepHours) {
    return `You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`;
  }
  if (actualSleepHours > idealSleepHours) {
    return `You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than you needed this week.`;
  }
  return 'You had the perfect amount of sleep';
}

console.log(calculateSleepDebt());
