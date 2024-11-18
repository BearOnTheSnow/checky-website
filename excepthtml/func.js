//footer text
let date = new Date();
let year = date.getFullYear()
document.getElementById("footertext").innerHTML = "&copy; " + year + " Aarav Kaushik";

//animation
let slideindex1 = 1;
let slideindex2 = 1;
let slideindex3 = 1;
let slideindex4 = 1;
nextSlide1(slideindex1);
nextSlide2(slideindex2);
nextSlide3(slideindex3);
nextSlide4(slideindex4);

function addSlide1(n){
    nextSlide1(slideindex1 += n);
}
function addSlide2(n){
    nextSlide2(slideindex2 += n);
}
function addSlide3(n){
    nextSlide3(slideindex3 += n);
}
function addSlide4(n){
    nextSlide4(slideindex4 += n);
}

function nextSlide1(n) {
    let i;
    let slides = document.getElementsByClassName('carousel1');
    if (n > slides.length) {slideindex1 = 1;}
    if (n < 1) {slideindex1 = slides.length;}

    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideindex1-1].style.display = "block";
}

function nextSlide2(n) {
    let i;
    let slides = document.getElementsByClassName('carousel2');
    if (n > slides.length) {slideindex2 = 1;}
    if (n < 1) {slideindex2 = slides.length;}

    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideindex2-1].style.display = "block";
}

function nextSlide3(n) {
    let i;
    let slides = document.getElementsByClassName('carousel3');
    if (n > slides.length) {slideindex3 = 1;}
    if (n < 1) {slideindex3 = slides.length;}

    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideindex3-1].style.display = "block";
}

function nextSlide4(n) {
    let i;
    let slides = document.getElementsByClassName('carousel4');
    if (n > slides.length) {slideindex4 = 1;}
    if (n < 1) {slideindex4 = slides.length;}

    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideindex4-1].style.display = "block";
}

function scrollToSection(section_id) {
    const section = document.getElementById(section_id);
    section.scrollIntoView({behavior: 'smooth'});
}