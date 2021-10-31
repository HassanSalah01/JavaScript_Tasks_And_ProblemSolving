//Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function triangleArea(a,b,c){
    let s =  (a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}

console.log(triangleArea(5,6,7))