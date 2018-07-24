/**
 * Zmienne globale
 */
const IDEAL_HOURS_PER_DAY = 8;

/**
 * Funkcje obrabiające dane
 */
const getActualSleepHours = (sleepHours) => Object.keys(sleepHours).reduce((acc, key) => acc + sleepHours[key], 0)

const getIdealSleepHours = () => IDEAL_HOURS_PER_DAY * 7;

/**
 * Controller - funkcja która wie jak korzystac z innych funkcji zeby zwrócic rezultat
 */
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

/**
 * Dane wejsciowe
 */
const MY_SLEEP_WEEKS = [
  {
    'Monday': 4,
    'Tuesday': 5,
    'Wednesday': 3,
    'Thursday': 5,
    'Friday': 8,
    'Saturday': 6,
    'Sunday': 5,
  },
  {
    'Monday': 8,
    'Tuesday': 8,
    'Wednesday': 8,
    'Thursday': 8,
    'Friday': 8,
    'Saturday': 8,
    'Sunday': 8,
  },
  {
    'Monday': 10,
    'Tuesday': 12,
    'Wednesday': 20,
    'Thursday': 7,
    'Friday': 9,
    'Saturday': 10,
    'Sunday': 8,
  }
]

/**
 * Wywołanie aplikacji
 */

const start = () => {
  let i = 1;
  for (const SLEEP_WEEK of MY_SLEEP_WEEKS) {
    console.log(`W tygodniu ${i}`)
    console.log(calculateSleepDebt(SLEEP_WEEK));
    console.log('----------------')
    i++;
  }
}

start()
