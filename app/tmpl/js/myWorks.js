import config from './config.js';
for (var key in config.myWorks) {
    var tags = (config.myWorks[key].tags).split(",");
    for(var i = 0; i < tags.length; i++) {
        if(config.mySkills[tags[i].trim()]) {
            tags[i] = "<span class='tag' style='color:" + JSON.stringify(config.mySkills[tags[i].trim()].color).replace(/\"/g, "") + ";'>" + tags[i].trim() + "</span>";
        } else {
            tags[i] = "<span class='tag' style='color:#FFFFFF'>" + tags[i].trim() + "</span>";
        }
    }
    var div = document.createElement('div');
    div.className = "work";
    div.innerHTML = "<div class='img' style='background-image: url(\"app/tmpl/img/" + config.myWorks[key].img + "\");'></div>" +
                    "<div class='info'>" +
                        "<p class='name'>" + key + "</p>" +
                        "<span class='year'>" + config.myWorks[key].year + "</span>" +
                        "<div class='tags'>" +
                            tags.join(' ') +
                        "</div>" +
                        "<p class='description'>" + config.myWorks[key].description + "</p>" +
                    "</div>";
    document.querySelector("#works .container").append(div);
}