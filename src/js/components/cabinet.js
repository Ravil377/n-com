var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        const prevActive = document.querySelector(".active");
        prevActive?.classList.remove("active");
        const prevPanel = prevActive.nextElementSibling;
        if(prevPanel) {
            prevPanel.style.display = "none";
        }
        var panel = this.nextElementSibling;
        if (panel.style.display === "flex") {
            panel.style.display = "none";
        } else {
            panel.style.display = "flex";
            this.classList.toggle("active");
        }
    });
}