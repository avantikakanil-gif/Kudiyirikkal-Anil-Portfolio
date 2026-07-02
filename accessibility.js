let darkBtn = document.querySelector(".dark");

darkBtn.addEventListener("click", function(){
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
        darkBtn.innerText = "Dark Mode";
    } else {
        darkBtn.innerText = "Light Mode";
    }
});