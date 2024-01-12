// EASY TO SOLVE QUESTION 1 -----

const time12h =  "06:15:25 PM";


const date = new Date('2023-01-01 ' + time12h);
const time24h = date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

console.log(time24h);
