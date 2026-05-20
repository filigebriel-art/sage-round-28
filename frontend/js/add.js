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