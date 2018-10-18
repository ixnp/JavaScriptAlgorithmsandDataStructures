//https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem

// HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. If the amount spent by a client on a particular day is greater than or equal to 2x the client's median spending for a trailing number of days, they send the client a notification about potential fraud. The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.

// Given the number d of trailing days  and a client's total daily expenditures for a period of n days, find and print the number of times the client will receive a notification over all n days.
// For example, d=3  and expenditures = [10,20,30,40,50]. On the first three days, they just collect spending data. At day 4, we have trailing expenditures of [10,20,30]. The median is 20  and the day's expenditure is 40 . Because 40 >= 2x20, there will be a notice. The next day, our trailing expenditures are[20,30,40]  and the expenditures are 50 . This is less than 2x30 so no notice will be sent. Over the period, there was one notice sent.

// Note: The median of a list of numbers can be found by arranging all the numbers from smallest to greatest. If there is an odd number of numbers, the middle one is picked. If there is an even number of numbers, median is then defined to be the average of the two middle values.

//My Notes:
// create a day var = to d+1
// From start of Arr to d find median
// multiply median by 2 
// if median > day send notice 
// day++, d++, start++ 
//while day <= expenditures.length
//added console.log to make it clear


function bank(d,exp){
  let day = d+1
  let start = 0;
  let trail = [];
  let medianNum = 0;
  let counter = 0;
  let median = 0;
    for(let i = start; i < d; i++){
    trail.push(exp[i]);
    }
  while (day <= exp.length){
    let trail = [];
    for(let i = start; i < d; i++){
    trail.push(exp[i]);
    }
   
    if(trail.length % 2 !== 0){
      medianNum = Math.floor(trail.length/2);
      median = trail[medianNum];
    } else {
      median = (trail[Math.floor(trail.length/2)] + trail[Math.ceil(trail.length/2)])/2;
    }
 console.log('trail: ',trail,', ', 'median*2: ', median*2 , ', ', 'day exp: ', exp[day]);
    if(exp[day] >= (median*2)){
      counter++
    }
    start++
    d++
    day++

  }
  return counter;

}

// bank(3,[10,20,30,40,50]);
// output 2
// bank(3,[10,20,30,40,50,10,13,15,40]);
//output2