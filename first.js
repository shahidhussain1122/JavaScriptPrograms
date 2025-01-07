// javascript first class
// object based language(date obj, string obj, number obj)
// use for client side

// interactive
// dynamic


// content update
// animation
// client side validation


// website (reactjs,vuejs,angularjs)
// mobile app (react native)
// desktop app (electronjs)
// AI (tensorflow,brainjs , d3.js)


// document.write('helo document');

// variable
// datatype premitive(Number(int,float),string,null , undefiend, boolean)
// and non-premitive (array, obj, regExp)
// operators (arithmetic, logical, relational/comperision, assignment, inc/dec, identical and not identical(===,!==))

// 2=="2";
// 2==="2"
// controle structure  (sequential,selection(if,else, else-if,switch),
// var age = 18;
// if(age>18){
// ok
// }
// repetation(for,while,do-while, for-in , for-of))

// write a program to find factorial of any number 
// 5! = 5x4x3x2x1 = 120
var num = 5;
var fact = 1;
for(var i=1;i<=num;i++){
    // fact = fact*i;
    fact*=i;
}
console.log(fact);
// fact  = 1;
// fact  = 2
// fact = 6
// fact  = 24
// fact  = 120


// array  
var fruits = [1,2,'c',"ali"];
console.log(fruits);
for(var j = 0;j<fruits.length;j++){
    console.log(fruits[j]);
}


// max 

var marks = [1,200,400,3,5];
var max = 0;
for(var a = 0;a<marks.length;a++){
    if(marks[a]>max){
        max = marks[a];
    }
}
console.log("Max = "+max);

// min
var min = 10000;
for(var a = 0;a<marks.length;a++){
    if(marks[a]<min){
        min = marks[a];
    }
}
console.log("Min = "+min);

// DOM and BOM



