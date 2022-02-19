

    function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
}
}


    function mOver(obj) {
    obj.innerHTML = "<p><i class=\"fas fa-map-marker-alt\" aria-hidden=\"true\"></i> Turkestan street, Nur-Sultan, Kazakhstan</p>"
}

    function mOut(obj) {
        obj.innerHTML = " <h4 class=\"font-weight-bold\">You can find us here</h4>"
    }


    function playAudio() {
    let sound = document.getElementById("myAudio");
    sound.play();
    setTimeout(function () {
    location.href = '###';
}, sound.duration * 1000);
}



window.addEventListener('scroll',reveal);
function reveal(){
    let reveals = document.querySelectorAll('.reveal');
    for(let i=0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }


    }

}



