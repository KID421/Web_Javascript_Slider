var items = document.getElementsByClassName("kid-item");
var index = 0;

var prev = document.getElementById("kid-prev");
var next = document.getElementById("kid-next");

function prevBtn() {
    index--;
    if (index == -1) index = items.length - 1;

    showPicture();
    resetTimer();
}

function nextBtn() {
    index++;
    if (index == items.length) index = 0;

    showPicture();
    resetTimer();
}

function showPicture() {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("kid-active");
    }

    items[index].classList.add("kid-active");

    buttonEffect();
}

prev.onclick = prevBtn;
next.onclick = nextBtn;

function autoPlay() {
    nextBtn();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, 3000);
}

var timer = setInterval(autoPlay, 3000);

var buttons = document.getElementById("kid-button").children;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() { buttonClick(this); };
}

function buttonClick(btn) {
    index = btn.getAttribute("data-item") - 1;

    showPicture();
    resetTimer();
    buttonEffect();    
}

function buttonEffect() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("kid-active-button");
    }

    buttons[index].classList.add("kid-active-button");
}