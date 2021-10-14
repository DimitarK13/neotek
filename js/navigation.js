const ul = document.querySelector(".products");
ul.style.display = "none";

document.querySelector("#prod").addEventListener("click", function(){
    if(ul.style.display == "none"){
        ul.style.display = "";
    } else{
        ul.style.display = "none";
    }
})