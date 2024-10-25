const login = document.querySelector(".login");
const loginArr = document.querySelector(".login button i");
const arr = document.querySelector(".bestElec .arrow")

var imageSlide = new Array("01.webp","02.webp","03.webp","04.webp","05.webp");
var imageLength = imageSlide.length;
var imageCurrent = -1;

// function for slide the images
function slide () {
    if (imageCurrent == imageLength-1) {
        imageCurrent = 0;
    } else {
        imageCurrent++;
    }
    document.slideshow.src = `Gallery/Offer${imageSlide[imageCurrent]}`;
};

// function for set Time interval
function auto () {
    setInterval(slide, 2000);
};

window.onload = function () {
    slide(); // for show first image
    auto();  // initlize the slider
};


// for Login
login.addEventListener("mouseover", () => {
    loginArr.style.transition = "transform 0.25s ease-in-out";
    loginArr.style.transform = "rotate(180deg)";
    loginArr.style.color = "white"
});

login.addEventListener("mouseout", () => {
    loginArr.style.transition = "transform 0.25s ease-in-out";
    loginArr.style.transform = "rotate(0deg)";
    loginArr.style.color = "#333333"
});

login.addEventListener("click", () => {
    window.open("login/Form.html");
})

arr.addEventListener("click", () => {
    window.open("login/Form.html");
})