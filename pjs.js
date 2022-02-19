function ratestar() {
    let a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf006;";
    setTimeout(function () {
        a.innerHTML = "&#xf123;";
    }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf005;";
    }, 2000);
}
ratestar();
setInterval(ratestar, 3000);

let slideIndex = 1;
const sliders  = document.querySelectorAll(".slide-in");
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}

    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -125px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
function playAudio() {
    let sound = document.getElementById("myAudio");
    sound.play();
    setTimeout(function () {
        location.href = '#start';
    }, sound.duration * 1000);
}
const sound = document.getElementById("myAudio");
function playPlus(){
    sound.play();
    setTimeout(function (){
        plusSlides(1);
    }, sound.duration*1000);
}
function playMinus(){
    sound.play();
    setTimeout(function (){
        plusSlides(-1);
    }, sound.duration*1000);
}
function myFunction() {
    let dot = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dot.style.display === "none") {
        dot.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dot.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}