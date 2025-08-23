// the cycling
// the

const elements = [
    document.querySelector('.infotick'),
    document.getElementById('mySwatchClock1'),
    document.getElementById('localTime1'),
    document.getElementById('date1')
];
let current = 0;

function cycleInfo() {
    elements.forEach((el, i) => {
        el.style.display = (i === current) ? 'inline' : 'none';
    });
    current = (current + 1) % elements.length;
}
document.getElementById('jsless').innerHTML = ""; // me when no javascript
cycleInfo();
setInterval(cycleInfo, 4000);