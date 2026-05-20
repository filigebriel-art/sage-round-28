document.getElementById('title').style.color='red'

let name="abebe"
console.log(name)


function externalAlert(){
    alert("external")
}

console.log(name)
let age=22
console.log(age)
age=12
console.log(age)
let x=5 , y=3
console.log(x=y)
let isactive=true
console.log(isactive)


let fruits=["banana" ,"apple","mango"]
console.log(fruits)
console.log(fruits[2])
fruits[0]="papaya"
console.log(fruits)
let a=1 , b=1
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)


function sum(x,y){
    console.log(x+y)
}
sum(50,22)
sum(44,11)


function multiplication(x,y){
    console.log(x*y)
}
multiplication(2,6)
multiplication(4,2)

function average(x,y){
    console.log((x+y)/2)
}
average(30,10)
average(25,25)

function divide(x,y){
    console.log(x/y)

}

divide(25,3)
divide(20,2)



if(age>18){
    console.log("you are adult")
}
else{
    console.log("you are minor")
}

function score(x){
    if(x>50){
        console.log("you pass")
    }else{
        console.log("you fail")
    }
    
}
score(44)
score(66)


for(let i=0; i<=5; i++){
    console.log(i)
}
for(let i=3; i<=6; i++){
    console.log(i)
}

let i=0
while(i<=5){
    console.log(i)
    i++;
}

let title=documentgetElementById('title');
title.innerText="this is first practice on  javascript"