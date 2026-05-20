document.getElementById('title').innerText="it helps more"
document.getElementById('title').style.color='red '
document.getElementById('btn').addEventListener('click',function(){
      document.getElementById('image').src="./image2.png"
})


person1={
    firstname:"belay",lastname:"hagos",age:33, gender:"M",
    fulname:function(){
        return this.firstname+" "+ this.lastname
    }
}
console.log(person1.fulname())
person2={
    firstname:"abebe",lastname:"daba",age:44, gendet:"m",
    fulname:function(){
        return this.firstname+ " "+this.lastname
    },
    eat:function(){
        return 'eating...'
    }
}
console.log(person2.fulname())
console.log(person2.eat())

let fullname="belay hadgu"
console.log(fullname.toUpperCase())
console.log(fullname.toLowerCase())
console.log(fullname.trim())
console.log(fullname.slice(1,4))

let x=1.2e3
console.log(x)

const array=["banana","apple","mango"]
console.log(array)

array.forEach((f)=>{
    console.log(f)
})
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
const today= new Date()
console.log(today)
const someday=new Date(3000,6.7)
console.log(someday)
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today>someday)
console.log(someday>today)

console.log(Math.PI)
console.log(Math.LN10)
console.log(Math.LN2)


console.log(Math.round(3.5))
console.log(Math.ceil(3.2))
console.log(Math.floor(-3.6))
console.log(Math.trunc(-4.9))
console.log(Math.pow(3,4))
console.log(Math.sqrt(81))

console.log(Math.random())
console.log(Math.floor(Math.random()*-10))
console.log(Math.trunc(Math.random()*-10))
console.log(Math.floor(Math.random()*100))


console.log(true && false)
console.log(true || false)
console.log(!false)

let a=20,b=39
a>b ? console.log("correct"):console.log("incorrect")

let name=null
console.log(name??"guest")
let day=9
switch(day){
    case 1:
        console.log("mon")
         break
    case 2:
        console.log("tue")
         break
    case 3:
        console.log("wed")
         break
    case 4:
       console.log("thue")
        break
    case 5:
        console.log("frie")
        break
    case 6:
        console.log("sat")
         break
    case 7:
        console.log("sun")
        break

        default:
        console.log("day not found")
        }
        document.getElementById('title').style.color='yellow'

        
        document.getElementById('here').addEventListener('click',function(){
            document.getElementById('image').src="./image2.png"
        })
        let button=document.getElementById('me');
        button.addEventListener('click',function(){
            console.log("clicked");
        });
let button = document.getElementById("me");

button.addEventListener("click", function() {
    console.log("Button clicked");
});