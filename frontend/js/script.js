function externalAlert(){
    alert("External")
}
//variable
let name="abebe";
console.log(name)
name="kebede"
console.log(name)
let age=23
age =30
console.log(age)
let x=2 , y=2
console.log(x+y)
let isActive=true
console.log(isActive)


let fruits=["banana","mango","papaya"]
console.log(fruits)
console.log(fruits[0])




let a=1 ,b='1'
console.log(a==b)
console.log(a===b)
console.log(a!=b)
console.log(a!==b)
//function
function sum(x,y){
    console.log(x+y)
}
sum(50,40)
sum(30,20)
function multiplication(x,y){
    console.log(x*y)
}
multiplication(30,20)
multiplication(3,10)
function average(x,y){
    console.log((x+y)/2)
}
average(30,20)


let myage=19
if(myage>=18){
    console.log("you are an adult")
}else{
    console.log("you are minor")

}

function score(x){
    console.log(x)
    if(score>=50){
        console.log("pass")
    }
    else{
        console.log("failed")
    }
}
score(40)

//loop
for(let i=0; i<5; i++){
    console.log(i)
}

    for(let j=3; j<=9; j++){
        console.log(j)
    }
let i=0
while(i<5){
    console.log(i)
    i++
}


let title= document.getElementById('title');
title.innerText="happy for learning my favorite career"

let title =document.getElementById('title');
title.innerText="This is text from javascript"