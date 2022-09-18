let container = document.querySelector(".firstVision");

let containerWidth = container.offsetWidth;
let containerHeight = container.offsetHeight;

trueSize();

window.onresize = function() { trueSize(); };

function trueSize() {
    containerWidth = container.offsetWidth;
    containerHeight = container.offsetHeight;

    if(document.documentElement.clientWidth >= 768) {
        if(containerWidth/16*9 < containerHeight) {
            container.style.height = containerWidth/16*9 + "px";
            document.querySelector(".right").style.height = 100 + containerWidth/16*9 + 100 + "px";
        } else {
            document.querySelector(".right").style.height = 100 + containerHeight + 100 + "px";
            container.style.height = containerHeight + "px";
        }
        document.querySelector(".textBlock").style.width = 45 * Math.ceil(document.querySelector(".textBlock > span").offsetWidth / 45) + "px";
    } else {
        container.style.height = document.documentElement.clientHeight - parseInt(getComputedStyle(document.body, true).paddingTop) - parseInt(getComputedStyle(document.body, true).paddingBottom) + "px";
    }
}