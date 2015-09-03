$(function() {
    var model = {
        "currentCat": null,
        "init": function () {
            this.cats = [
                {"name": "Spiffy", "url": "../img/unnamed_cat_1.jpg", "desc": "misty Cat", "clicks": 0},
                {"name": "Pludgy", "url": "../img/unnamed_cat_2.jpg", "desc": "Big cat", "clicks": 0},
                {"name": "Biffy", "url": "../img/Cute-Cat-Wallpaper-HD.jpg", "desc": "Big cat", "clicks": 0},
                {"name": "Kataroma", "url": "../img/Cute-Cats-cats-33440930-1280-800.jpg", "desc": "Big cat", "clicks": 0},
                {"name": "Biffyyii", "url": "../img/cute_cat_10_hd_backgrounds.jpg", "desc": "Big cat", "clicks": 0}
            ];
            this.currentCat = this.cats[0];
        },
        "incrementClick": function () {
            this.currentCat.clicks += 1;
        },
        "setCurrentCat": function (cat) {
            this.currentCat = cat;
        }

    };

    var octo = {
        "getCurrentCat": function () {
            return model.currentCat;
        },
        "init": function () {
            this.currentCatIndex = 0;
            model.init();
            catListView.init();
        },
        "catClicked": function () {
            model.incrementClick(this.currentCatIndex);
            catListView.showClickCount();
        },
        "getCatList": function () {
            return model.cats;
        },
        "setCurrentCat": function (cat) {
            model.setCurrentCat(cat);
            mainCatView.render();
        }
    };

    var catListView = {
        "render": function () {
            var cats = octo.getCatList();
            var catList_html = '';
            cats.forEach(function (cat, index) {
                catList_html += '<li class="cat-li-item"><span>' + cat.name + '</span><img src="' + cat.url + '" alt="' + cat.desc + '" class="thumb"></li>';
            });
            $('.cat-list').html(catList_html);
            $('.cat-li-item').each(function (index) {
                $(this).click( function () {
                    octo.setCurrentCat(cats[index]);
                })
            });

        },
        "init": function () {
            this.render();
        }
    };

    var mainCatView = {
        "init": function () {
            this.$catName = $('#cat-name');
            this.$image = $('.image')
        },
        "showClickCount": function () {
            var currentCat = octo.getCurrentCat();
            $('.score').text('Clicks: ' + currentCat.clicks);
        },
        "render": function () {
            var cat = octo.getCurrentCat();
            this.$image.css('background-image', 'url("' + cat.url + '")');
            var currentCat = octo.getCurrentCat();
            $('myObject').css('background-image', 'url(' + encodeURIComponent(imageUrl) + ')');
            var mainCatHTML = '<img src="' + currentCat.url + '" alt="' + currentCat.desc + '" class="image"><span>' + currentCat.name + '</span>';
            $('.dynamic-cat').html(mainCatHTML);
            catListView.showClickCount();
            $('.cat-info').click(function () {
                octo.catClicked();
            });
        }
    };

    var adminCatView = {

    };

    octo.init();
});