const nav= document.getElementById("nav-links");

const burger= document.querySelector(".burger");
const links= document.querySelectorAll(".nav-link")


burger.addEventListener("click",()=>{
    nav.classList.toggle("activated");
    nav.classList.add("transition");
    burger.classList.toggle("clicked");
    
    links.forEach( (link, index) => {
        
        link.classList.toggle("activated");
    });

})