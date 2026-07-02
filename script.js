let projectCard1  = document.querySelector(".project-card-1");
let projectCard2  = document.querySelector(".project-card-2");
let projectCard3  = document.querySelector(".project-card-3");
let projectBtnRightOne = document.querySelector(".project-btn-right-one");
let projectBtnLeftOne = document.querySelector(".project-btn-left-one");
let projectBtnRightDisabled = document.querySelector(".project-btn-right-disabled");
let projectBtnLeftDisabled = document.querySelector(".project-btn-left-disabled");
let projectBtnLeftTwo = document.querySelector(".project-btn-left-two");
let projectBtnRightTwo = document.querySelector(".project-btn-right-two");
let experienceBtnRightOne = document.querySelector(".experience-right-one");
let experienceBtnLeftOne = document.querySelector(".experience-left-one");
let catapultContent = document.querySelector(".catapult-content");
let signatureContent = document.querySelector(".signature-content");
let experienceFlipInner = document.querySelector(".experience-flip-inner");
let catapultImage = document.querySelector(".catapult-image");
let signatureImage = document.querySelector(".signature-image");
let experienceBtnRightTwo = document.querySelector(".experience-right-two");
let experienceBtnLeftTwo = document.querySelector(".experience-left-two");
let style = document.querySelector(".style");
let index = document.querySelector(".index");
let script = document.querySelector(".script");
let python = document.querySelector(".python");
let robotics = document.querySelector(".robotics");
let art = document.querySelector(".art");
let styleContent = document.querySelector(".style-content");
let indexContent = document.querySelector(".index-content");
let scriptContent = document.querySelector(".script-content");
let pythonContent = document.querySelector(".python-content");
let roboticsContent = document.querySelector(".robotics-content");
let artContent = document.querySelector(".art-content");


experienceBtnRightTwo.style.display = "none";
experienceBtnLeftTwo.style.display = "none";
styleContent.style.display = "none";
indexContent.style.display = "none";
scriptContent.style.display = "none";
pythonContent.style.display = "none";
roboticsContent.style.display = "none";
artContent.style.display = "none"; 

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
    console.log(1);
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
    console.log(2);
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
    console.log("4");
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
    console.log("5");
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

projectBtnRightDisabled.addEventListener("click", function(){
    projectCard2.style.transform = "translate(33vw, 0vh)";
    projectCard3.style.transform = "translate(33vw, 0vh)";
    projectCard1.style.transform = "translate(33vw, 0vh)";
    projectCard2.style.opacity = "0.3";
    projectCard1.style.opacity = "0.3";
    projectCard3.style.opacity = "1";
    projectBtnLeftTwo.style.display = "none";
    projectBtnLeftDisabled.style.display = "block";
    projectBtnLeftOne.style.display = "none";
    projectBtnRightDisabled.style.display = "none";
    projectBtnRightOne.style.display = "none";
    projectBtnRightTwo.style.display = "block";
    projectBtnLeftDisabled.style.transform = "translateX(-53vw)";
    projectBtnRightTwo.style.transform = "translateX(-30vw)";
    console.log(3);
});

projectBtnLeftDisabled.addEventListener("click", function(){
    projectCard2.style.transform = "translate(-33vw, 0vh)";
    projectCard3.style.transform = "translate(-33vw, 0vh)";
    projectCard1.style.transform = "translate(-33vw, 0vh)";
    projectCard2.style.opacity = "0.3";
    projectCard1.style.opacity = "1";
    projectCard3.style.opacity = "0.3";

    projectBtnLeftTwo.style.display = "none";
    projectBtnRightDisabled.style.display = "block";
    projectBtnLeftOne.style.display = "none";
    projectBtnLeftDisabled.style.display = "none";
    projectBtnRightOne.style.display = "none";
    projectBtnLeftTwo.style.display = "block";
    projectBtnRightTwo.style.display = "none";
    projectBtnRightDisabled.style.transform = "translateX(-30vw)";
    projectBtnLeftTwo.style.transform = "translateX(-53vw)";
    console.log("6");
});

experienceBtnRightOne.addEventListener ("click", function(){
    catapultContent.style.transform = "translateY(100vh)";
    experienceFlipInner.style.transform = "rotateY(180deg)";
    catapultImage.style.borderRadius = "50%";
    signatureImage.style.borderRadius = "50%";
    experienceBtnRightOne.style.display = "none";
    experienceBtnRightTwo.style.marginTop = "20vh";
    experienceBtnRightTwo.style.display = "block";
    experienceBtnLeftOne.style.display = "none";
    experienceBtnLeftTwo.style.display = "block";
});

experienceBtnLeftOne.addEventListener ("click", function(){
    catapultContent.style.transform = "translateY(100vh)";
    experienceFlipInner.style.transform = "rotateY(180deg)";
    catapultImage.style.borderRadius = "50%";
    signatureImage.style.borderRadius = "50%";
    experienceBtnRightOne.style.display = "none";
    experienceBtnRightTwo.style.display = "block";
    experienceBtnLeftOne.style.display = "none";
    experienceBtnLeftTwo.style.display = "block";
});

experienceBtnLeftTwo.addEventListener ("click", function(){
    experienceFlipInner.style.transform = "rotateY(0deg)";
    catapultContent.style.transform = "translateY(0vh)";
    experienceBtnRightTwo.style.display = "none";
    experienceBtnLeftTwo.style.display = "none";
    experienceBtnRightOne.style.display = "block";
    experienceBtnLeftOne.style.display = "block";
});

experienceBtnRightTwo.addEventListener ("click", function() {
    experienceFlipInner.style.transform = "rotateY(0deg)";
    catapultContent.style.transform = "translateY(0vh)";
    experienceBtnRightTwo.style.display = "none";
    experienceBtnLeftTwo.style.display = "none";
    experienceBtnRightOne.style.display = "block";
    experienceBtnLeftOne.style.display = "block";
});

art.addEventListener ("click", function(){
    styleContent.style.display = "none";
    indexContent.style.display = "none";
    scriptContent.style.display = "none";
    pythonContent.style.display = "none";
    roboticsContent.style.display = "none";
    artContent.style.display = "block";
    artContent.style.marginTop = "-20vh";
});

robotics.addEventListener ("click", function(){
    styleContent.style.display = "none";
    indexContent.style.display = "none";
    scriptContent.style.display = "none";
    pythonContent.style.display = "none";
    roboticsContent.style.display = "block";
    artContent.style.display = "none";
    roboticsContent.style.marginTop = "-20vh";
});

python.addEventListener ("click", function(){
    styleContent.style.display = "none";
    indexContent.style.display = "none";
    scriptContent.style.display = "none";
    pythonContent.style.display = "block";
    roboticsContent.style.display = "none";
    artContent.style.display = "none";
    pythonContent.style.marginTop = "-20vh";
});

script.addEventListener ("click", function(){
    styleContent.style.display = "none";
    indexContent.style.display = "none";
    scriptContent.style.display = "block";
    pythonContent.style.display = "none";
    roboticsContent.style.display = "none";
    artContent.style.display = "none";
    scriptContent.style.marginTop = "-20vh";
});

index.addEventListener ("click", function(){
    styleContent.style.display = "none";
    indexContent.style.display = "block";
    scriptContent.style.display = "none";
    pythonContent.style.display = "none";
    roboticsContent.style.display = "none";
    artContent.style.display = "none";
    indexContent.style.marginTop = "-20vh";
});

style.addEventListener ("click", function(){
    styleContent.style.display = "block";
    indexContent.style.display = "none";
    scriptContent.style.display = "none";
    pythonContent.style.display = "none";
    roboticsContent.style.display = "none";
    artContent.style.display = "none";
});