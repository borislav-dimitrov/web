function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function myScrollTo(elementId){
    let element = document.getElementById(elementId);
    let pos = element.offsetTop //getBoundingClientRect().top;
    let navHeight = document.getElementById('myHeader').offsetHeight;
    let drpDwnMenu = document.getElementById('nav-menu');
    let drpDwnIco = document.getElementById('nav-drpdwn-ico');

    window.scrollTo({
        top: pos - navHeight,
        behavior: "smooth"
    });
    // element.scrollIntoView({
    //     block:'end',
    //     behavior:"smooth"});

    // hide menu if open
    if(!drpDwnMenu.classList.contains('hide')){
        drpDwnMenu.classList.add('hide');
        fadeOutIn(drpDwnIco, 'close');
    }
}

function downloadCv(){
    let url = "https://drive.google.com/file/d/1d3HugDY1VdqM_XBv9GAhL7lmB5gMdFr-/view?usp=sharing";

    window.open(url, '_blank').focus();
}