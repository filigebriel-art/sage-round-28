function externalAlert(){
    alert("external")
}

//variables
let name="ababa"
console.log(name)
let fruts=[ "papaya","apple","mango"]
    console.log(fruts)
    console.log(fruts[0])
    fruts[0]="carrot"
    console.log(fruts)
function sum(x,y){
    console.log(x+y)
}
function multiplication(x,y){
    console.log(x*y)
}

sum(59,30)
multiplication(4,3)

function average(x,y){
    console.log((x+y)/2)
}
average(20,30)

for (let i=0; i<10; i++){
    console.log(i)
}

let x=0
while(x<5){
    console.log(x)
    x++
}