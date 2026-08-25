// Exercise 1
const Fullname='Keo Theara';
let age=19;
let University="CADT";
const major='Computer Scientist';
const StudentID='IDTB120271';
const rollStatus='01/09/2025';

// use for console.log the information
console.log(`Information about the student\n ${Fullname}\n ${age}\n ${University}\n ${major}\n ${StudentID}\n ${rollStatus}\n`);


// Exercise 2

// function for sum

const sum=(a,b)=>(a+b);

// function for multipy

const mul=(a,b)=>(a*b);

// function for  subtract

const sub=(a,b)=>(a-b);

const divide=(a,b)=>(a/b);

const modolo=(a,b)=>(a%b);


// use for declare the variable

let num1=18;
let num2=5;

console.log(` The sum of number ${sum(num1,num2)}`);
console.log(`The mul of number ${mul(num1,num2)}`);
console.log(`The sub of number ${sub(num1,num2)}`);
console.log(`The divide of number ${divide(num1,num2)}`);
console.log(`The modolo of number ${modolo(num1,num2)}`);




//Discount Calculator


let parchase=70;

// use the conditon for use the discount

if(parchase>=100){
    parchase=parchase-((parchase*20)/100);
}else if(parchase>=50){
    parchase=parchase-((parchase*10)/100);
}else{
    parchase=parchase;

}

console.log(`total ${parchase}$`);


// FizzBuzz

// use for loop in the exercise

for(let i=1; i<=30; ++i){
   
   
    if( i % 3==0 && i % 5 ==0){
        console.log('FizzBuzz');
    }else  if(i % 3==0){
        console.log('Fizz');
    }else  if(i % 5==0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}

// Exeercise 5

const scores=[85, 72, 90, 56, 68];

// console.log all the score in the array

for (let score of scores){
    console.log(score);
    switch(true){
    case score>=90:
        console.log('grade A');
        break;
    case score>=80:
        console.log('Grade B');
        break;
    case score>=70:
        console.log('Grade C');
        break;
    case score >=60:
        console.log('Grade D');
        break;
    default:
        console.log('Grade F');
        break;       
          
}
}










