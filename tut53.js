console.log("This is tutorial 53 ");


//  we have used a function 

    function dost(name0, time="this a default ") {   // we have passed 2  parameter name0 or time;
    console.log(time + " " + name0);
    console.log(name0 + " is a good boy");
}

let name0 = "rashid";
let name1 = "varun";
let name2 = "vishal";
let name3 = "naseem";
let time = "good morning "

// we have a call function
dost(name0,time)   
dost(name1,time)
dost(name2,time)
dost(name3,time);
dost(name3) // if u dont pass any value this will take default value if you passd then dont take default value

// this is a lenghty process down
// console.log(name0+ " is a good boy");
// console.log(name1+ " is a good boy");
// console.log(name2+ " is a good boy");
// console.log(name3+ " is a good boy");


// This is a  return function use 
    function  sum(a,b,c){
    let d = a+b+c;
    return d;
}

let returnVale = sum(2,3,4);
console.log(returnVale);