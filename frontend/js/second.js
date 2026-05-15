document.getElementById('title').innerHTML="Learning javascript"
document.getElementById('title').style.color='red'

document.getElementById('btn').addEventListener('click',function (){
    document.getElementById('image').src ='./image2.png'

})

const person1 ={
    firstname:"abebe",
    lastname:"daba",
    age:34,
    gender:"M",
    fullName: function(){
        return this.firstname +" "+ this.lastname
    }
}
const person2={
    firstname:"kebede",
    lastname:"dawit",
    age:22,
    gender:"M",
    fullName: function(){
        return this.firstname +" "+ this.lastname

    },
    eat: function(){
    return "eating......."
}
}


console.log(person1.fullName())
console.log(person2.eat ())
let fullName="abebe dawit"
 
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.trim())
console.log(fullName.slice(1,5))


let x =1.1e3
console.log(x)
const array=["banana" ,"apple", "mango", 13, true]
console.log(array[3])
console.log(array[0])


array[4]="avocado"
console.log(array[4])

array.forEach((f)=>{
    console.log(f)
})
const today= new Date()
const someday = new Date("2023-12-3")

console.log(today)
console.log(someday)

console.log(today.getFullYear())
console.log(today.getMonth())

console.log(today<someday)
console.log(someday<today)


// matth

console.log(Math.PI)
console.log(Math.LN2)
console.log(Math.round(3.4))
console.log(Math.ceil(3.1))
console.log(Math.floor(3.9))
console.log(Math.trunc(3.9))


console.log(Math.pow(3,3))
console.log(Math.sqrt(81))
  console.log(Math.random())
//   from o
console.log(Math.random())
// from 0-10
console.log(Math.floor(Math.random()*10))

console.log(Math.floor (Math.random()*100))
console.log(Math.floor( Math.random ()*100/2))


console.log(true && false)
console.log(true || false)
console.log(!false)



let a=20, b=30
a>b ? console.log("correct") :console.log("incorrect")


let name= null
console.log(name?? "guest")

let day=5
switch(day){
    case 0:
        console.log("mon")
         break
    case 1:
        console.log("tu")
        break
    case 2:
        console.log("wed")
        break
    case 3:
        console.log("th")
        break
    case 4:
        console.log("fri")
        break
    case 5:
        console.log("sat")
        break
    case 6:
        console.log("sun")
        break
}