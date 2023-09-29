const menuIcon = document.querySelector("#menu-icon");
const barMenu = document.querySelector(".Navigation");

menuIcon.addEventListener("click",function(){
    if(barMenu.classList.contains("oculto")){
        barMenu.classList.remove("oculto");
    }else{
        barMenu.classList.add("oculto")
    }
})
