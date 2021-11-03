//Write a JavaScript program to calculate number of days left until next Christmas.

function daysLeftToChris(date){
    let todayDate = date;
    let christmasDay = new Date("2021,12,25");
    let daysLeft= 0 ;
    daysLeft += ((christmasDay.getMonth()+1)-(todayDate.getMonth()+1))*(30);
    daysLeft += (christmasDay.getDate())-(todayDate.getDate());
    console.log(`${daysLeft} Days Left Until Christmas!"`);
}
daysLeftToChris(new Date());