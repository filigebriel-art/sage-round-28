let input=document.getElementById("task")
let button=document.getElementById("add")
let list=document.getElementById("list")


button.addEventListener("click",function(){
    let inputValue=input.value

      if(inputValue===""){
        return
    }
    let newTask=document.createElement("li")

    newTask.innerText=inputValue

     let deleteBtn=document.createElement("button")
    deleteBtn.innerText="x"

     newTask.appendChild(deleteBtn)

    list.appendChild(newTask)
     deleteBtn.addEventListener("click",function(){
        newTask.remove()
        newTask.addEventListener("click",function(){
            newTask.classList.toggle("completeds")
        })
   

  

   
   
   
    })
     input.value=""
})