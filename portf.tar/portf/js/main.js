function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function myScrollTo(elementId){
    let element = document.getElementById(elementId);
    element.scrollIntoView({behavior:"smooth"});
}

function downloadCv(){
    let url = "https://drive.google.com/file/d/1ZnHw2w3c-QJVqFDQH6OdbBYm1d69NzMh/view?usp=sharing";

    window.open(url, '_blank').focus();
}