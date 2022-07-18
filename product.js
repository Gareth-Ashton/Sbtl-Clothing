

function change(){
  if(document.getElementById("thumbnail2").src == "./img/Design3.jpg"){
    document.getElementById("display-img").src = "./img/Design3.jpg"
  }
else{
  document.getElementById("display-img").src = "./img/Design3.jpg" 
}}

const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle('show');
})
