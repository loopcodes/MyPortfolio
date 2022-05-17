const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const menubtn = document.querySelector('.menu-btn');
const scrollup = document.querySelector('.scroll-up-btn');
const html = document.querySelector('.home');
const typedText = document.querySelector('.typed-text');
const sliders = document.querySelectorAll('.column');
const faders = document.querySelectorAll(".fade-in")




window.addEventListener("scroll",() => {
    if(window.scrollY > 20){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
    if(window.scrollY > 500){
        scrollup.classList.add("show");
    }else{
        scrollup.classList.remove("show");
    }
});

menubtn.addEventListener("click",() => {
    if(menubtn.firstElementChild.classList.contains("fa-bars")){
        menubtn.firstElementChild.classList.replace("fa-bars", "fa-times");
    }else{
        menubtn.firstElementChild.classList.replace("fa-times", "fa-bars");
    }

    menu.classList.toggle("active");
});

scrollup.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


var i = 0;
var txt = "Frontend Developer.";
var speed = 100;
var backspeed = 60;

function typed(){
    document.getElementById("live").innerHTML +=txt.charAt(i);
    i++;
    setTimeout(typed,speed,backspeed);
}
typed();



const textArray = ["HTML.", "CSS.", "ANGULAR.", "NODE.JS.", "JAVASCRIPT.", "TYPESCRIPT.", "BOOTSTRAP.", "JSON.", "FIREBASE.",];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;


function type(){
    if(charIndex < textArray[textArrayIndex].length){
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
    }else{
        setTimeout(erase, newTextDelay);
    }
}

function erase(){
    if(charIndex > 0){      
        typedText.textContent = textArray[textArrayIndex].substring(0,charIndex-1);  
        charIndex--;
        setTimeout(erase, erasingDelay);
    }else{
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}
type();


document.addEventListener("DOMContentLoader", function(){
    setTimeout(type, newTextDelay +250);
});



const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};


const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "osuigwepaul.o@gmail.com",
        Password : "Hustle001",
        To : 'osuigwepaul.o@gmail.com',
        From : document.getElementById("email").value,
        Subject :  document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value +
                "<br> Email: " + document.getElementById("email").value +
                "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}