(function () {
    "use strict"


    let leftSection = $('#topLeft');


    function backgroundFade () {
        leftSection.toggleClass('opacity');
}

let flash = setInterval(backgroundFade, 1000)


backgroundFade();


})();