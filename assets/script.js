function scopoColor() {
    let colorAraay = [
        color1 = '#3182ce',
        color2 = '#9f7aea',
        color3 = '#48bb78',
        color4 = '#ed64a6'
    ]
    let numberColor = parseInt(Math.random() * colorAraay.length);

    if (colorAraay[numberColor] === '#3182ce') {
        document.querySelectorAll(".title").forEach((e) => {
            e.classList.remove('title-purple', 'title-green', 'title-pink');
            e.classList.add('title-blue');
        });
    }
    if (colorAraay[numberColor] === '#9f7aea') {
        document.querySelectorAll(".title").forEach((e) => {
            e.classList.remove('title-blue', 'title-green', 'title-pink');
            e.classList.add('title-purple');
        });
    }
    if (colorAraay[numberColor] === '#48bb78') {
        document.querySelectorAll(".title").forEach((e) => {
            e.classList.remove('title-blue', 'title-purple', 'title-pink');
            e.classList.add('title-green');
        });

    }
    if (colorAraay[numberColor] === '#ed64a6') {
        document.querySelectorAll(".title").forEach((e) => {
            e.classList.remove('title-blue', 'title-green', 'title-purple');
            e.classList.add('title-pink');
        });
    }

    let color = colorAraay[numberColor];

    // BORDERS 
    document.querySelector(".head").style.borderBottom = `2px solid ${color}`;
    document.querySelector(".a-home-hamburguer").style.borderBottom = `2px solid ${color}`;
    document.querySelector(".a-projects-hamburguer").style.borderBottom = `2px solid ${color}`;
    document.querySelector(".footer-page").style.borderTop = `2px solid ${color}`;
    document.querySelector(".section-hamburguer").style.border = `2px solid ${color}`;
    document.querySelectorAll(".projects").forEach(e => {
        e.style.border = `2px solid ${color}`
    });

    // COLORS
    document.querySelector(".theme").style.color = color;
    document.querySelectorAll(".projects-text").forEach(e => {
        e.style.borderTop = `2px solid ${color}`
    });
    document.querySelectorAll(".button-projects").forEach(e => {
        e.style.border = `2px solid ${color}`
    });

    // BACKROUNDS
    document.querySelector(".button-hamburguer").style.backgroundColor = color;
}
scopoColor()

function scopoTheme() {
    document.body.classList.toggle("theme-white");
    document.body.classList.toggle("theme-dark");
    const theme = document.body.classList[0];
    if (theme === 'theme-dark') {
        document.querySelector('.button-theme').innerHTML = `<ion-icon class="sun-theme-icon theme" name="sunny-outline"></ion-icon>`
    }
    if (theme === 'theme-white') {
        document.querySelector('.button-theme').innerHTML = `<ion-icon class="moon-theme-icon theme" name="moon-outline"></ion-icon>`
    }

}
scopoTheme()

function scopoHamburguer() {
    let buttonHamburguer = document.querySelector(".button-hamburguer");
    let inputHamburguer = document.querySelector("#input-hamburguer");

    buttonHamburguer.onclick = function Open() {
        if (inputHamburguer.checked === false) {
            inputHamburguer.checked = true;
            buttonHamburguer.innerHTML = `Close <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M2.165,19.551C2.351,19.831,2.664,20,3,20h15c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944 C21.649,11.169,21.336,11,21,11h-1V7c0-1.103-0.897-2-2-2h-6.1L9.616,3.213C9.44,3.075,9.224,3,9,3H4C2.897,3,2,3.897,2,5v14 h0.007C2.007,19.192,2.056,19.385,2.165,19.551z M17.341,18H4.517l2.143-5h12.824L17.341,18z M18,7v4H6 c-0.4,0-0.762,0.238-0.919,0.606L4,14.129V7h7.556H12H18z"></path></svg>`;
            close();
        } else if (inputHamburguer.checked === true) {
            inputHamburguer.checked = false;
            buttonHamburguer.innerHTML = `Open
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"> <path d="M20,5h-8.586L9.707,3.293C9.52,3.105,9.265,3,9,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V7 C22,5.897,21.103,5,20,5z M4,19V7h7h1h8l0.002,12H4z"> </path> </svg>`;
        }
    };
}
scopoHamburguer()

const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScroll();
    }, 50));
}