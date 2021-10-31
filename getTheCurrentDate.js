// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


function dayMonthYear(){
    let date = new Date();
    let month = date.getMonth < 10 ? "0"+date.getMonth()+1 :date.getMonth()+1;
    let day = date.getDate < 10 ? "0"+date.getDate() : date.getDate();
    let year = date.getFullYear();
    console.log(`${month} : ${day} : ${year}`);
    console.log(`${month} / ${day} / ${year}`);
    console.log(`${day} : ${month} : ${year}`);
    console.log(`${day} / ${month} / ${year}`);
}
dayMonthYear()