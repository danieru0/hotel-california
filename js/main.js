(function() {
    let btnOpen = document.getElementById('hamburger-open'),
        btnClose = document.getElementById('hamburger-close'),
        menu = document.getElementById('menu'),
        header = document.getElementById('header'),
        headerIndex = 0,
        bubble = document.getElementsByClassName('bubble__fill'),
        bubbleBtn = document.getElementsByClassName('bubble');
        
    btnOpen.addEventListener('click', function() {
        menu.style.width = '300px';
    });
    btnClose.addEventListener('click', function() {
        menu.style.width = '0px';
    });
    
    function switchImageHeader() {
        if (headerIndex >= 2 + 1) {
            headerIndex = 0;
        }
        header.style.backgroundImage = 'url(imgs/header-bg-'+headerIndex+'.jpg)';
        document.querySelectorAll('.bubble__fill.active').forEach(function(i) {
            i.classList.remove('active');
        });
        bubble[headerIndex].classList.add('active');
    }
    
    let headerInterval = setInterval(function() {
        headerIndex++;
        switchImageHeader();
    }, 10000);
    
    for (let i = 0; i < bubbleBtn.length; i++) {
        bubbleBtn[i].addEventListener('click', function() {
            headerIndex = this.id;
            switchImageHeader();
        });
    }
})();