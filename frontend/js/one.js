document.getElementById('title').innerHTML="sounds good"
document.getElementById('title').style.color="blue"

document.getElementById('btn').addEventListener('click',function(){
    document.getElementById('image').src='./image2.png'
})



const person1 = {
    firstname:"abebe",
    lastname:"belay",
    age:22,
    gender:'m',
    fullName:function(){
       return this.firstname +" "+ this.lastname
    }


}
const person2={
    firstname:"kebede",lastname:"asnake",age:33,gender:"M",
    fullName:function(){
        return this.firstname +""+this.lastname
    },

    eat:function(){
        return "eating..."
    }
}
console.log(person1.fullName())
console.log(person2.eat())


let fullName="belay alemayehu"
console.log(fullName.toUpperCase())
