// Function to calculate sleep debt
function calculateSleepDebt() {
    const daysInWeek = 7;
  
    const sleepHours = {};
    let idealHoursPerNight;
  
    // Get user input for ideal hours per night
    idealHoursPerNight = parseFloat(prompt("Enter your ideal hours of sleep per night:"));
    if (isNaN(idealHoursPerNight)) {
      console.log("Invalid input for ideal hours. Please enter a valid number.");
      return;
    }
  
    // Get user input for sleep hours for each night of the week
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for (let day of daysOfWeek) {
      const hours = parseFloat(prompt(`Enter sleep hours for ${day}:`));
      if (!isNaN(hours)) {
        sleepHours[day] = hours;
      } else {
        console.log(`Invalid input for ${day}. Please enter a valid number.`);
        return;
      }
    }
  
    let actualSleepHours = 0;
  
    // Calculate total actual sleep hours
    for (let day in sleepHours) {
      actualSleepHours += sleepHours[day];
    }
  
    // Calculate ideal sleep hours for the week
    const idealSleepHours = idealHoursPerNight * daysInWeek;
  
    // Calculate sleep debt
    const sleepDebt = idealSleepHours - actualSleepHours;
  
    if (sleepDebt > 0) {
      console.log(`You are ${sleepDebt} hours short of your weekly sleep goal.`);
    } else if (sleepDebt < 0) {
      console.log(`You have exceeded your weekly sleep goal by ${-sleepDebt} hours.`);
    } else {
      console.log(`You have achieved your weekly sleep goal!`);
    }
  }
  
  // Call the function to calculate sleep debt
  calculateSleepDebt();