var cats_json = {
    "cats": [
        {
            "name": "Spiffy", "url": "img/unnamed_cat_1.jpg", "desc":"misty Cat", "clicks": 0
        },
        {
            "name": "Springgy", "url": "img/unnamed_cat_2.jpg", "desc":"Big cat", "clicks": 0
        },
        {
            "name": "Biffy", "url": "img/Cute-Cat-Wallpaper-HD.jpg", "desc":"Big cat", "clicks": 0
        },
        {
            "name": "Springgy", "url": "img/Cute-Cats-cats-33440930-1280-800.jpg", "desc":"Big cat", "clicks": 0
        },
        {
            "name": "Springgy", "url": "img/cute_cat_10_hd_backgrounds.jpg", "desc":"Big cat", "clicks": 0
        }
    ]
};

var cats = cats_json.cats;
var currentCat = 0;
var score_elm = document.getElementsByClassName('score')[0];

var catList_html = '';
cats.forEach(function (cat, index) {
    catList_html += getCatHTML(cat.name, cat.url, cat.desc)[0];
});
addToCatList(catList_html);

var catList = document.getElementsByClassName('cat-li-item');
for (var index = 0; index < catList.length; index++) {
    var cat = cats[index];
    catList[index].addEventListener('click', (function(cat, index) {
        return function () {
            var mainCatHTML = getCatHTML(cat.name, cat.url, cat.desc)[1];
            document.getElementsByClassName('dynamic-cat')[0].innerHTML = mainCatHTML;
            currentCat = index;
            updateScore();
        }
    })(cat, index), false);
}

document.getElementsByClassName('dynamic-cat')[0].addEventListener('click', function () {
    var cat = cats[currentCat];
    cat.clicks += 1;
    updateScore();
}, false);

function getCatHTML(cat_name, cat_url, alt_text) {

    var listItem = '<li class="cat-li-item"><span>' + cat_name + '</span><img src="' + cat_url + '" alt="' + alt_text + '" class="thumb"></li>';
    var mainCatHTML = '<img src="'+cat_url+'" alt="'+alt_text+'" class="image"><span>'+cat_name+'</span>';
    return [listItem, mainCatHTML];

}
function addToCatList(html_code) {
    var catList = document.getElementsByClassName('cat-list')[0];
    catList.innerHTML = html_code;
}

function updateScore() {
    var score = cats[currentCat].clicks;
    score_elm.textContent = 'Clicks: ' + score;
}