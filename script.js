let projectCard1  = document.querySelector(".project-card-1");
let projectCard2  = document.querySelector(".project-card-2");
let projectCard3  = document.querySelector(".project-card-3");
let projectBtnRightOne = document.querySelector(".project-btn-right-one");
let projectBtnRightTwo = document.querySelector(".project-btn-right-two");
let projectBtnLeftOne = document.querySelector(".project-btn-left-one");


function slideCarouselRightOne () {
    projectCard3.style.transform = "translate(-33vw, 0vh)";
    projectCard1.style.transform = "translate(-33vw, 0vh)";
    projectCard2.style.transform = "translate(-33vw, 0vh)";
    projectCard2.style.opacity = "0.3";
    projectCard3.style.opacity = "0.3";
    projectCard1.style.opacity = "1";
}

function slideCarouselRightTwo () {
    projectCard2.style.transform = "translate(-33vw, 0vh)";
    projectCard3.style.transform = "translate(-33vw, 0vh)";
    projectCard1.style.transform = "translate(-33vw, 0vh)";
    projectCard3.style.opacity = "1";
    projectCard2.style.opacity = "0.3";
    projectCard1.style.opacity = "0.3";
}

projectBtnRightOne.addEventListener ("click", function(){
    slideCarouselRightOne();
    projectBtnRightOne.style.display = "none";
    projectBtnRightTwo.style.display = "block";
});

projectBtnRightTwo.addEventListener("click", function(){
    slideCarouselRightTwo();
});