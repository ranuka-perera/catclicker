var clicks = 0;
var image = document.getElementsByClassName('image-holder')[0];
var score = document.getElementById('score');
image.addEventListener('click', function () {
    clicks += 1;
    score.innerHTML = 'Clicks: ' + clicks;
}, false);