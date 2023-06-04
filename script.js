let dayNight = document.querySelector(".dayNight");
let header = document.querySelector("header");

dayNight.addEventListener("click",()=>{
    header.classList.toggle("night");
})