(function () {
    const btn = document.querySelectorAll('.btn-gallery'),
        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        gallery = document.querySelectorAll('.gallery__content-box');

    function changeImageNumber() {
        let boxNotHide = document.querySelectorAll('.gallery__content-box:not(.hide) .gallery__number');
        for (let i = 0; i < boxNotHide.length; i++) {
            boxNotHide[i].innerHTML = '0' + numbers[i];
            if (i >= 9) {
                boxNotHide[i].innerHTML = numbers[i];
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        changeImageNumber();
    });

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            let selectedButton = document.querySelectorAll('.gallery__content-box:not(.' + this.value + ')');
            document.querySelectorAll('.btn-gallery.active').forEach(function (i) {
                i.classList.remove('active');
            });
            this.classList.add('active');
            if (!(this.value == 'all')) {
                document.querySelectorAll('.gallery__content-box').forEach(function (i) {
                    i.classList.remove('hide');
                });
                selectedButton.forEach(function (i) {
                    i.classList.add('hide');
                });
                changeImageNumber();
            } else {
                document.querySelectorAll('.gallery__content-box').forEach(function (i) {
                    i.classList.remove('hide');
                });
                changeImageNumber();
            }
        });
    }
})();
