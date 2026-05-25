let input=document.getElementById("input area")
let button=document.getElementById("add")
let list=document.getElementById("list")

const Dark=document.createElement("button")
document.body.appendChild(Dark)
Dark.innerText="mode"
let toggle=false
Dark.addEventListener("click",function(){
    if(toggle==false){
        document.body.style.backgroundColor="black"
        toggle=true
    }
    else{
        document.body.style.backgroundColor="white"
        toggle=false
    }
})
button.addEventListener("click",function(){
    let inputValue=input.value
    if(inputValue===""){
        return
    }
    let newTask=document.createElement("li")
    newTask.innerText=inputValue
    list.appendChild(newTask)



 let deleteBtn=document.createElement("button")
     deleteBtn.innertext="x"
 document.appendChild(deleteBtn)

input.value=""
})