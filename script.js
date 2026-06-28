let projectCard1  = document.querySelector(".project-card-1");
let projectCard2  = document.querySelector(".project-card-2");
let projectCard3  = document.querySelector(".project-card-3");
let projectBtnRightOne = document.querySelector(".project-btn-right-one");
let projectBtnLeftOne = document.querySelector(".project-btn-left-one");
let projectBtnRightDisabled = document.querySelector(".project-btn-right-disabled");
let projectBtnLeftDisabled = document.querySelector(".project-btn-left-disabled");
let projectBtnLeftTwo = document.querySelector(".project-btn-left-two");
let projectBtnRightTwo = document.querySelector(".project-btn-right-two");


function slideCarouselRightOne () {
    projectCard3.style.transform = "translate(-33vw, 0vh)";
    projectCard1.style.transform = "translate(-33vw, 0vh)";
    projectCard2.style.transform = "translate(-33vw, 0vh)";
    projectCard2.style.opacity = "0.3";
    projectCard3.style.opacity = "0.3";
    projectCard1.style.opacity = "1";
    projectBtnRightOne.style.display = "none";
    projectBtnRightDisabled.style.display = "block";
    projectBtnRightDisabled.style.transform = "translateX(-30vw)";
    projectBtnLeftOne.style.display = "none";
    projectBtnLeftDisabled.style.display = "none";
    projectBtnLeftTwo.style.display = "block";
    projectBtnLeftTwo.style.transform = "translateX(-53vw)";
    projectBtnRightTwo.style.display = "none";
}

function slideCarouselRightTwo () {
    projectCard3.style.transform = "translate(0vw, 0vh)";
    projectCard1.style.transform = "translate(0vw, 0vh)";
    projectCard2.style.transform = "translate(0vw, 0vh)";
    projectCard2.style.opacity = "1";
    projectCard1.style.opacity = "0.3";
    projectCard3.style.opacity = "0.3";
    projectBtnRightTwo.style.display = "none";
    projectBtnLeftDisabled.style.display = "none";
    projectBtnRightDisabled.style.display = "none";
    projectBtnLeftTwo.style.display = "none";
    projectBtnLeftOne.style.display = "block";
    projectBtnRightOne.style.display = "block";
}

function slideCarouselLeftOne () {
    projectCard2.style.transform = "translate(33vw, 0vh)";
    projectCard3.style.transform = "translate(33vw, 0vh)";
    projectCard1.style.transform = "translate(33vw, 0vh)";
    projectCard3.style.opacity = "1";
    projectCard2.style.opacity = "0.3";
    projectCard1.style.opacity = "0.3";
    projectBtnLeftOne.style.display = "none";
    projectBtnLeftTwo.style.display = "none";
    projectBtnLeftDisabled.style.display = "block";
    projectBtnLeftDisabled.style.transform = "translateX(-53vw)";
    projectBtnRightTwo.style.display = "block";
    projectBtnRightDisabled.style.display = "none";
    projectBtnRightOne.style.display = "none";
    projectBtnRightTwo.style.transform = "translateX(-30vw)";
}

function slideCarouselLeftTwo () {
    projectCard2.style.transform = "translate(0vw, 0vh)";
    projectCard3.style.transform = "translate(0vw, 0vh)";
    projectCard1.style.transform = "translate(0vw, 0vh)";
    projectCard2.style.opacity = "1";
    projectCard1.style.opacity = "0.3";
    projectCard3.style.opacity = "0.3";
    projectBtnLeftTwo.style.display = "none";
    projectBtnLeftDisabled.style.display = "none";
    projectBtnLeftOne.style.display = "block";
    projectBtnRightDisabled.style.display = "none";
    projectBtnRightOne.style.display = "block";
    projectBtnRightTwo.style.display = "none";
}

projectBtnRightOne.addEventListener ("click", function(){
    slideCarouselRightOne();
});

projectBtnLeftOne.addEventListener("click", function(){
    slideCarouselLeftOne();
});

projectBtnLeftTwo.addEventListener("click", function(){
    slideCarouselLeftTwo();
});

projectBtnRightTwo.addEventListener("click", function(){
    slideCarouselRightTwo();
});