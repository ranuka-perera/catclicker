$(function() {
    var model = {
        "init": function () {
            this.cats = [
                {"name": "Spiffy", "url": "img/unnamed_cat_1.jpg", "desc": "misty Cat", "clicks": 0},
                {"name": "Pludgy", "url": "img/unnamed_cat_2.jpg", "desc": "Big cat", "clicks": 0},
                {"name": "Biffy", "url": "img/Cute-Cat-Wallpaper-HD.jpg", "desc": "Big cat", "clicks": 0},
                {"name": "Kataroma", "url": "img/Cute-Cats-cats-33440930-1280-800.jpg", "desc": "Big cat", "clicks": 0},
                {"name": "Biffyyii", "url": "img/cute_cat_10_hd_backgrounds.jpg", "desc": "Big cat", "clicks": 0}
            ]
        },
        "incrementClick": function (catIndex) {
            this.cats[catIndex].clicks += 1;
        }

    };

    var octo = {
        "getCurrentCat": function () {
            return model.cats[this.currentCatIndex];
        },
        "init": function () {
            this.currentCatIndex = 0;
            model.init();
            view.init();
        },
        "catClicked": function () {
            model.incrementClick(this.currentCatIndex);
            view.showClickCount();
        },
        "getCatList": function () {
            return model.cats;
        },
        "setCurrentCat": function (index) {
            this.currentCatIndex = index;
            view.setMainCat();
        }
    };

    var view = {
        "showClickCount": function () {
            var currentCat = octo.getCurrentCat();
            $('.score').text('Clicks: ' + currentCat.clicks);

        },
        "setMainCat": function () {
            var currentCat = octo.getCurrentCat();
            var mainCatHTML = '<img src="' + currentCat.url + '" alt="' + currentCat.desc + '" class="image"><span>' + currentCat.name + '</span>';
            $('.dynamic-cat').html(mainCatHTML);
            view.showClickCount();
        },
        "init": function () {
            var cats = octo.getCatList();
            var catList_html = '';
            cats.forEach(function (cat, index) {
                catList_html += '<li class="cat-li-item"><span>' + cat.name + '</span><img src="' + cat.url + '" alt="' + cat.desc + '" class="thumb"></li>';
            });
            $('.cat-list').html(catList_html);
            $('.cat-li-item').each(function (index) {
                $(this).click( function () {
                    octo.setCurrentCat(index);
                })
            });
            view.setMainCat();
            $('.cat-info').click(function () {
                octo.catClicked();
            });

        }
    };

    octo.init();
});