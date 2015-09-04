$(function() {
    var model = {
        "currentCat": null,
        "init": function () {
            this.cats = [
                {"name": "Spiffy", "url": "img/unnamed_cat_1.jpg", "desc": "misty Cat", "clicks": 0},
                {"name": "Pludgy", "url": "img/unnamed_cat_2.jpg", "desc": "Big cat", "clicks": 0},
                {"name": "Biffy", "url": "img/Cute-Cat-Wallpaper-HD.jpg", "desc": "Big cat", "clicks": 0},
                {"name": "Kataroma", "url": "img/Cute-Cats-cats-33440930-1280-800.jpg", "desc": "Big cat", "clicks": 0},
                {"name": "Biffyyii", "url": "img/cute_cat_10_hd_backgrounds.jpg", "desc": "Big cat", "clicks": 0}
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
            mainCatView.init();
            catListView.init();
            mainCatView.render();
        },
        "catClicked": function () {
            model.incrementClick();
            mainCatView.displayClickCount();
        },
        "getCatList": function () {
            return model.cats;
        },
        "setCurrentCat": function (cat) {
            model.setCurrentCat(cat);
            mainCatView.render();
            mainCatView.displayClickCount();
        }
    };

    var catListView = {
        "render": function () {
            var cats = octo.getCatList();
            var catList_html = '';
            cats.forEach(function (cat, index) {
                var url = cat.url;
                //if (/^[.][.][/]/i.test(url)) {
                //    url = url.slice(3);
                //}
                catList_html += '<li class="cat-li-item"><span>' + cat.name + '</span><img src="' + url + '" alt="' + cat.desc + '" class="thumb"></li>';
            });
            $('.cat-list').html(catList_html);
            $('.cat-li-item').each(function (index) {
                $(this).click( function () {
                    //return
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
        "displayClickCount": function () {
            var currentCat = octo.getCurrentCat();
            $('.score').text('Clicks: ' + currentCat.clicks);
        },
        "render": function () {
            var cat = octo.getCurrentCat();
            this.$image.css('background-image', 'url("' + cat.url + '")');
            //$('myObject').css('background-image', 'url(' + encodeURIComponent(imageUrl) + ')');
            this.$catName.text(cat.name);
            this.$image.unbind('click').click(function () {
                octo.catClicked();
            });
        }
    };

    var adminCatView = {

    };

    octo.init();
});