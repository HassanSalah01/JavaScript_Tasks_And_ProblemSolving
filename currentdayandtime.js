let date = new Date(); 
let weekName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Saturday"]; 
console.log(`Today is : ${weekName[date.getDay()]}`); 
console.log(`Current Time Is ${date.getHours()}: ${date.getMinutes()}:${date.getSeconds}`);