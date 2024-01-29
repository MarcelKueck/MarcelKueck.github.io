var countDownDate = new Date("Sep 03, 2024 22:05:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "We're on our trip!";
    }
});

var audioControl = document.getElementById('audio-control');
var backgroundMusic = document.getElementById('background-music');
audioControl.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        audioControl.textContent = '🔇 Mute Music';
    } else {
        backgroundMusic.pause();
        audioControl.textContent = '🔊 Play Music';
    }
});

document.getElementById('subscribe-button').addEventListener('click', function() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSces4_dk-uy6pNn-JERXpC0vM7lUv6Jp5waQxd5Dsc2hYNRxg/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link', '_blank');
});

var windhoekCoords = [-22.5594, 17.0832];
var map = L.map('map').setView(windhoekCoords, 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker(windhoekCoords).addTo(map);
marker.bindPopup("<b>Windhoek, Namibia</b>").openPopup();
