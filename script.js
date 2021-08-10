
window.addEventListener('resize', function (event) {
    let media = window.matchMedia("(min-width: 400px)");
    if (media.matches) {
        document.getElementById("myNav").removeAttribute("style");
    }
});

function myFunction() {
    let height = document.getElementById("myNav").style.height;
    if (height == "100%") {
        document.getElementById("myNav").style.height = "0%";
    } else {
        document.getElementById("myNav").style.height = "100%";
    }
}

function closeNav(){
    let media = window.matchMedia("(max-width: 400px)");
    if (media.matches) {
        document.getElementById("myNav").removeAttribute("style");
    }
}
