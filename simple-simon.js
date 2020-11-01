(function () {
    "use strict"

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let leftSection = document.getElementById("topLeft")

function backgroundFade (r, g, b) {
    leftSection.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
    leftSection.style.transition =  "background-color 1s";


}




// leftSection.onclick = function () {
//     leftSection.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
// }













})();