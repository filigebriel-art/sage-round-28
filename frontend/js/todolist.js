
document.getElementById("add").addEventListener("click",function(){
let inputValue=document.getElementById("task").value

let newTask=document.createElement("li")
newTask.innerText=inputValue
document.getElementById("list").appendChild(newTask)
let input = document.getElementById("task")
input.value= ""
input.focus()

})
