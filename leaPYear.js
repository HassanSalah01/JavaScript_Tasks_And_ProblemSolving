// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leapyear(a){
    if(a%100==0 && a%400==0)
    return true;
    else if(a%100!=0 && a%4==0 ){
        return true;
    }else{
        return false;
    }
}

console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));
 






