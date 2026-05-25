let dark=false
document.getElementById("btn").addEventListener("click",function(){
    if(dark==false){
        document.body.style.backgroundColor="blue";
        document.body.style.color="black"
        document.getElementById("dark").innerText="Dark mode"
        dark=true
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="red"
        document.getElementById("dark").innerText="Light mode"
        dark=false
    }
})

let password=false
document.getElementById("see").addEventListener("click",function(){
    if(password==false){
        document.getElementById("password").type="text"
        document.getElementById("see").innerText="Hide"
        password=true
    }
    else{
        document.getElementById("password").type="password"
        document.getElementById("see").innerText="show"
        password=false
        
    }
})



let count=0;
document.getElementById("add").addEventListener("click",function(){
    count=count +1
    document.getElementById("count").innerText=count
})
document.getElementById("substract").addEventListener("click",function(){
    count=count-1
    document.getElementById("count").innerText=count
})
document.getElementById("reset").addEventListener("click",function(){
    count=0
    document.getElementById("count").innerText=count
})


document.getElementById("add").addEventListener("click",function(){
let inputValue=document.getElementById("task").value

let newTask=document.createElement("li")
newTask.innerText=inputValue
document.getElementById("list").appendChild(newTask)


})
