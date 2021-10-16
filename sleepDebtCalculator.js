// A function that returns a given night's number of sleep
const getSleepHours = day => {
    switch (day){
      case 'Sunday':
          return 4;
          break;

      case 'Monday':
          return 7;
          break;

      case 'Tuesday':
          return 11;
          break;
      
            case 'Wednesday':
          return 9;
          break;
      case 'Thursday':
          return 7;
          break;

      case 'Friday':
          return 8;
          break;

      case 'Saturday':
          return 6;
    }
};

//console.log(getSleepHours('Saturday'));

//function to get the total sleep hours slept.
const getActualSleepHours = () =>
getSleepHours('Sunday') + getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday');

//function to get the ideal sleep hour in a week
const getIdealSleepHours = () =>{
const idealHours = 8;
return idealHours*7;
};

// function to calculate the sleep debt owed.
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
     if (actualSleepHours === idealSleepHours){
        console.log('You have a perfect amount of sleep.')  
     } else if(actualSleepHours > idealSleepHours){
          console.log('You have ' +(actualSleepHours - idealSleepHours) +' hour(s) more sleep than you need.') 
     } else {
            console.log ('You have ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you need. Have some rest!')
     };     
};

calculateSleepDebt();

