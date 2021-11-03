// Write a JavaScript program where the program takes 
// a random integer between 1 to 10, the user 
// is then prompted to input a guess number. 
// If the user input matches with guess number, 
// the program will display a message "Good Work" 
// otherwise display a message "Not matched"



function checkNumb(){
    let pNumb = prompt("Please Guess A Number between 1-10");
    let randNumb = Math.floor(Math.random()*10+1);
    if(pNumb==randNumb){
        console.log(` Good Work Your Guess Was Right The Number is ${pNumb}`)
    }else{
        console.log(`Not matched The number Was ${randNumb}`)
    }
    
}
checkNumb();