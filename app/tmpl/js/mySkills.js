import config from './config.js';
for (var key in config.mySkills) {
    var color = JSON.stringify(config.mySkills[key].color).replace(/\"/g, "");
    var div = document.createElement('div');
    div.className = "skill";
    div.style.borderColor = color;
    div.innerHTML = key + "<div class='percent' style='color: " + color + "'>" + config.mySkills[key].percent + "<span>%</span></div>";

    document.querySelector("#skills .container").append(div);
  }
