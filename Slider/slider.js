const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bot")

let slideNumber = 1;
const width = 500;
const length = images.length;

// Make dot show corresponding slide
for(let i = 0; i < length; i++){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
};

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
    buttons.forEach((button)=>{
        button.style.backgroundColor = "transparent";
    });
};

buttons.forEach((button,i)=> {
    button.addEventListener("click", () => {
        slider.style.transform = `translateX(-${i * width}px)`;
        resetBg();
        buttons[i].style.backgroundColor = "white";
        slidNumber = i + 1;
    })
})


// Slide Mover
const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * width}px)`;
    slideNumber++;
};

const  getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2) * width}px)`;
    slideNumber--;
};

const getLastSlide = () => {
    slider.style.transform = `translate(-${(length-1) * width}px)`;
    slideNumber = length;
};

right.addEventListener("click", () => {
    slideNumber < length? nextSlide() : getFirstSlide();
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "white";
});

left.addEventListener("click", () => {
    slideNumber < 1? getLastSlide() : prevSlide();
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "white";
});