import config from './config.js';
for (var key in config.firstVision.Skills) {
    var color = JSON.stringify(config.firstVision.Skills[key]).replace(/\"/g, "");
    var div = document.createElement('div');
    div.style.display = "inline";
    div.innerHTML = "<div class='skill' style='background-color: " + color + "'>" + key + "</div>";

    document.querySelector("#firstVision .skills").append(div);
}
if(Object.keys(config.firstVision.Skills).length > 2) {
    (document.querySelector("#firstVision .skills")).style.display = "block";
}