(function () {
    const btn = document.querySelectorAll('.btn-gallery'),
        number = document.querySelectorAll('.gallery__content-box:not(.hide) > .gallery__number'),
        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        gallery = document.querySelectorAll('.gallery__content-box');

    document.addEventListener('DOMContentLoaded', function () {
        changeNumber();
    });

    function changeNumber() {
        let boxNotHide = document.querySelectorAll('.gallery__content-box:not(.hide)');
        for (let i = 0; i < boxNotHide.length; i++) {
            number[i].innerHTML = '0' + numbers[i];
        }
    }

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            let choice = document.querySelectorAll('.gallery__content-box:not(.' + this.value + ')');
            document.querySelectorAll('.btn-gallery.active').forEach(function(i) {
                i.classList.remove('active');
            });
            this.classList.add('active');
            if (!(this.value == "all")) {
                document.querySelectorAll('.gallery__content-box').forEach(function (i) {
                    i.classList.remove('hide');
                });
                choice.forEach(function (i) {
                    i.classList.add('hide');
                });
                let numberHide = document.querySelectorAll('.gallery__content-box:not(.hide) .gallery__number');
                for (let i = 0; i < numberHide.length; i++) {
                    numberHide[i].innerHTML = '0' + numbers[i];
                }
            } else {
                document.querySelectorAll('.gallery__content-box').forEach(function (i) {
                    i.classList.remove('hide');
                });
                let numberHide = document.querySelectorAll('.gallery__content-box:not(.hide) .gallery__number');
                for (let i = 0; i < numberHide.length; i++) {
                    numberHide[i].innerHTML = '0' + numbers[i];
                    if (i > 9) {
                        numberHide[i].innerHTML = numbers[i];
                    }
                }
            }
        });
    }
})();
