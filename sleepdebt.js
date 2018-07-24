let getSleepHours = day => {
    if (day === 'Monday') {
      return 8;
      } else if (day === 'Tuesday') {
        return 6;
    } else if (day === 'Wednesday') {
      return 7;
    } else if (day === 'Thursday') {
      return 7;
    } else if (day === 'Friday') {
      return 8;
    } else if (day === 'Saturday') {
      return 6;
    } else if (day === 'Sunday') {
      return 5;
    }
    };
    let getActualSleepHours = () =>         getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
    let getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
    };
    let calculateSleepDebt = () => {
      const actualSleepHours = 
            getActualSleepHours();
      const idealSleepHours = 
            getIdealSleepHours();
      if (actualSleepHours === idealSleepHours) {
        return console.log('You had the perfect amount of sleep');
      } else if (actualSleepHours > idealSleepHours) {
        return console.log(`You got ${actualSleepHours-idealSleepHours} hour(s) more sleep than you needed this week.`);
    } else if (actualSleepHours < idealSleepHours) {
        return console.log(`You got ${idealSleepHours-actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`);
    } else {
      return console.log('Error');
    }
    };
    console.log(calculateSleepDebt());