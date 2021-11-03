
//Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.

function IsSungday(){
    for (let i = 2014 ; i <= 2050 ; i++){
        const date = new Date(`${i},01,01`);
        if(date.getDay()==0){
            console.log(`1st January is being a Sunday  ${i}`)
        }
    }
}