console.log("test");

function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "sidebar") {
      x.className += " responsive";
    } else {
      x.className = "sidebar";
    }
  }