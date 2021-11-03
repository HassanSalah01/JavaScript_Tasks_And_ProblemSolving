//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front
 
let word = " Welcome To Our WebSite ";
let wordIntoArray = word.split("");
 setInterval(()=>{
       wordIntoArray.unshift(wordIntoArray.pop());
   let newWord = wordIntoArray.toString();
   let b = newWord.replaceAll(",","");
   console.log(b);
   document.getElementById("txt").innerHTML = b;
  
  },(500))