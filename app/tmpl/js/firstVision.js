let container = document.querySelector(".firstVision");

let containerWidth = container.offsetWidth;
let containerHeight = container.offsetHeight;

//header('Cache-Control: no-cache, no-store, must-revalidate'); // HTTP 1.1.
//header('Pragma: no-cache'); // HTTP 1.0.
//header('Expires: 0'); // Proxies.

trueSize();

window.onresize = function() { trueSize(); };

function trueSize() {
    containerWidth = container.offsetWidth;
    containerHeight = container.offsetHeight;

    if(document.documentElement.clientWidth >= 768 || (document.documentElement.clientWidth/document.documentElement.clientHeight <= 3/2)) {
        container.style.height = null;
        container.style.maxHeight = containerWidth/16*9 + "px";
        document.querySelector(".right").style.maxHeight = containerWidth/16*9 + 100 + "px";
        document.querySelector(".textBlock").style.width = 55 * Math.ceil(document.querySelector(".textBlock > span").offsetWidth / 45) + "px";
    } else {
        container.style.height = document.documentElement.clientHeight - parseInt(getComputedStyle(document.body, true).paddingTop) - parseInt(getComputedStyle(document.body, true).paddingBottom) + "px";
        container.style.maxHeight = null;
    }
}