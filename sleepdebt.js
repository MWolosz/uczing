const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const getSleepHours = day => {
  switch(day) {
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 6;
    case 'Wednesday':
      return 7;
    case 'Thursday':
      return 7;
    case 'Friday':
      return 8;
    case 'Saturday':
      return 6;
    case 'Sunday':
      return 5;
    default:
      throw new Error('Invalid day.')
  }
};

const getActualSleepHours = (daysArray) => {
  let hours = 0;
  for(let day of daysArray) {
    hours = hours + getSleepHours(day)
  }
  return hours;
}

const getIdealSleepHours = () => {
  const idealHours = 8;
  const daysInWeek = 7;
  return idealHours * daysInWeek;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours(DAYS_OF_WEEK);
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
