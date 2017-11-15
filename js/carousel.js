(function () {
    let deluxeNext = document.getElementById('carousel-next-deluxe'),
        deluxePrev = document.getElementById('carousel-prev-deluxe'),
        deluxeImages = document.getElementsByClassName('deluxe-image'),
        deluxeNumbers = document.getElementsByClassName('deluxe-number'),
        deluxeIndex = 0;

    // DELUXE FUNCTION
    function switchDeluxeImage() {
        document.querySelectorAll('.deluxe-image.active').forEach(function (i) {
            i.classList.remove('active');
        });
        document.querySelectorAll('.deluxe-number.active').forEach(function (item) {
            item.classList.remove('active');
        });
        deluxeImages[deluxeIndex].className += ' active';
        deluxeNumbers[deluxeIndex].className += ' active';
    }
    deluxeNext.addEventListener('click', function () {
        deluxeIndex++;
        if (deluxeIndex >= deluxeImages.length) {
            deluxeIndex = 0;
        }
        switchDeluxeImage();
    });
    deluxePrev.addEventListener('click', function () {
        deluxeIndex--;
        if (deluxeIndex < 0) {
            deluxeIndex = deluxeImages.length - 1;
        }
        switchDeluxeImage();
    });
    for (let i = 0; i < deluxeNumbers.length; i++) {
        deluxeNumbers[i].addEventListener('click', function() {
            let deluxeNumbersIndex = this.innerText.slice(-1);
            deluxeIndex = deluxeNumbersIndex - 1;
            switchDeluxeImage();
        });
    }
    
    //EXECUTIVE FUNCTION
    let executiveNext = document.getElementById('carousel-next-executive'),
        executivePrev = document.getElementById('carousel-prev-executive'),
        executiveImages = document.getElementsByClassName('executive-image'),
        executiveNumbers = document.getElementsByClassName('executive-number'),
        executiveIndex = 0;
    
    function switchExecutiveImage() {
        document.querySelectorAll('.executive-image.active').forEach(function (i) {
            i.classList.remove('active');
        });
        document.querySelectorAll('.executive-number.active').forEach(function (item) {
            item.classList.remove('active');
        });
        executiveImages[executiveIndex].className += ' active';
        executiveNumbers[executiveIndex].className += ' active';
    }
    executiveNext.addEventListener('click', function () {
        executiveIndex++;
        if (executiveIndex >= executiveImages.length) {
            executiveIndex = 0;
        }
        switchExecutiveImage();
    });
    executivePrev.addEventListener('click', function () {
        executiveIndex--;
        if (executiveIndex < 0) {
            executiveIndex = executiveImages.length - 1;
        }
        switchExecutiveImage();
    });
    for (let i = 0; i < executiveNumbers.length; i++) {
        executiveNumbers[i].addEventListener('click', function() {
            let executiveNumbersIndex = this.innerText.slice(-1);
            executiveIndex = executiveNumbersIndex - 1;
            switchExecutiveImage();
        });
    }
    
    //FAMILY FUNCTION
    let familyNext = document.getElementById('carousel-next-family'),
        familyPrev = document.getElementById('carousel-prev-family'),
        familyImages = document.getElementsByClassName('family-image'),
        familyNumbers = document.getElementsByClassName('family-number'),
        familyIndex = 0;
    
    function switchFamilyImage() {
        document.querySelectorAll('.family-image.active').forEach(function (i) {
            i.classList.remove('active');
        });
        document.querySelectorAll('.family-number.active').forEach(function (item) {
            item.classList.remove('active');
        });
        familyImages[familyIndex].className += ' active';
        familyNumbers[familyIndex].className += ' active';
    }
    familyNext.addEventListener('click', function () {
        familyIndex++;
        if (familyIndex >= familyImages.length) {
            familyIndex = 0;
        }
        switchFamilyImage();
    });
    familyPrev.addEventListener('click', function () {
        familyIndex--;
        if (familyIndex < 0) {
            familyIndex = familyImages.length - 1;
        }
        switchFamilyImage();
    });
    for (let i = 0; i < familyNumbers.length; i++) {
        familyNumbers[i].addEventListener('click', function() {
            let familyNumbersIndex = this.innerText.slice(-1);
            familyIndex = familyNumbersIndex - 1;
            switchFamilyImage();
        });
    }
})();
