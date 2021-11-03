// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
function add (a){
    const inp1 = document.getElementById("txt1").value;
    const inp2 = document.getElementById("txt2").value;
    a==2 && Number(inp2)!=0 ? 
        document.getElementById("answer").innerHTML = Number(inp1)/Number(inp2):
        document.getElementById("answer").innerHTML = Number(inp1)*Number(inp2);
}