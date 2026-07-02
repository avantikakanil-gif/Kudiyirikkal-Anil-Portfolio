let darkBtn = document.querySelector(".dark");

darkBtn.addEventListener("click", function(){
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
        darkBtn.innerText = "Light Mode";
    } else {
        darkBtn.innerText = "Dark Mode";
    }
});