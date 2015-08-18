var clicks = [0, 0];
var images = document.getElementsByClassName('image');
var scores = document.getElementsByClassName('score');
var count;
var max = images.length;
for (count = 0; count < max; count++) {
    var click = clicks[count];
    var score = scores[count];
    images[count].addEventListener('click', (function (click, score) {
        return function () {
            click += 1;
            score.innerHTML = 'Clicks: ' + click;
        };
    })(click, score), false);
}