function navDrpDown(){
    let btn = document.getElementById('nav-drpdwn-btn');
    let drpDwnMenu = document.getElementById('nav-menu');
    let drpDwnIco = document.getElementById('nav-drpdwn-ico');
    let header = document.getElementById('myHeader');

    btn.addEventListener('click',
     function(e) {
        e.stopPropagation();
        if(drpDwnMenu.classList.contains('hide')){
            drpDwnMenu.classList.remove('hide');
            fadeOutIn(drpDwnIco, 'open');
        }else if(!drpDwnMenu.classList.contains('hide')){
            drpDwnMenu.classList.add('hide');
            fadeOutIn(drpDwnIco, 'close');
        }
    }
    , false);

    header.addEventListener('click',
    function(e){
        e.stopPropagation();
    }
    ,false);

    drpDwnMenu.addEventListener('click',
    function(e){
        e.stopPropagation();
    }
    ,false);

    $('body, html').click(function(e){
        if(!drpDwnMenu.classList.contains('hide')){
            drpDwnMenu.classList.add('hide')
            fadeOutIn(drpDwnIco, 'close');
        }
    })
}

function fadeOutIn(element, state) {
    var op = 1; // initial opacity
    var timer = setInterval(function() {

        if (op <= 0.1) {
            clearInterval(timer);
            if (state === 'open') {
                element.src = '/images/menu_x.png';
            }
            if (state === 'close') {
                element.src = '/images/menu.png';
            }
            fadeIn(element);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

function fadeIn(element) {
    var op = 0.1; // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function() {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}