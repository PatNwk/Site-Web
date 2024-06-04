
const burgerBtn = document.querySelector("#burger");
const navMenu = document.querySelector(".nav")
const txtAnime = document.querySelector(".services");
burgerBtn.addEventListener('click', burgerClick);


function burgerClick() {
    burgerBtn.classList.toggle("active");
    if(burgerBtn.classList.contains("active")){
        navMenu.classList.add("active")
    }else{
        navMenu.classList.remove("active")
    }
} 



