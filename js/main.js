var exports = {};

document.addEventListener('DOMContentLoaded', function () {
    var main = new Splide('#main-slider', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false
    });

    var thumbnails = new Splide('#thumbnail-slider', {
        fixedWidth: 266,
        fixedHeight: 200,
        gap: 10,
        rewind: true,
        pagination: false,
        cover: true,
        isNavigation: true,
        breakpoints: {
            600: {
                fixedWidth: 60,
                fixedHeight: 44,
            },
        },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
});

$('.nav-link').on("mouseover", function () {
    anime({
        targets: '.nav-links li:hover',
        keyframes: [{
                backgroundImage: 'linear-gradient(90deg, rgba(215, 215, 215, 0) 0%, rgba(215, 215, 215, 1) 100%), url("../images/watercolor-bg-blue.png")',
                duration: 0
            },
            {
                backgroundImage: 'linear-gradient(90deg, rgba(215, 215, 215, 0) 0%, rgba(215, 215, 215, 1) 0%), url("../images/watercolor-bg-blue.png")',
                duration: 0,
                easing: 'easeInOutSine'
            },
            {
                backgroundImage: 'linear-gradient(90deg, rgba(215, 215, 215, 0) 100%, rgba(215, 215, 215, 1) 0%), url("../images/watercolor-bg-blue.png")',
                duration: 400,
                easing: 'easeInOutSine'
            }
        ]
    })
});

$('.nav-link').on("mouseleave", function () {
    $('.nav-links li').css('background', 'transparent');
    $('.nav-links li').css('background-position', 'center');
    $('.nav-links li').css('background-repeat', 'no-repeat');
    $('.nav-links li').css('background-size', 'cover');
});

let signatureAni = anime({
    targets: '.logo-container img',
    keyframes: [{
            translateX: 200,
            translateY: 200,
            width: '40vw',
            duration: 0
        },
        {
            translateX: 0,
            translateY: 0,
            width: '10vw',
            duration: 1000,
            easing: 'easeInOutSine'
        }
    ],
    delay: 150
});

let leftHeroAni = anime({
    targets: '#left-hero',
    keyframes: [{
            translateX: -500,
            translateY: 500,
            duration: 0
        },
        {
            translateX: 0,
            translateY: 0,
            duration: 750,
            easing: 'easeInOutSine'
        }
    ],
    delay: 1000
});

let rightHeroAni = anime({
    targets: '#right-hero',
    keyframes: [{
            translateX: 500,
            translateY: -500,
            duration: 0
        },
        {
            translateX: 0,
            translateY: 0,
            duration: 300,
            easing: 'easeInOutSine'
        }
    ],
    delay: 750
});
/*
let artistPAni = anime({
    targets: ['#the-artist p', '#the-artist .section-header'],
    keyframes: [{
            translateX: -1000,
            translateY: 0,
            opacity: 0,
            duration: 0,
        },
        {
            translateX: 0,
            opacity: 100,
            duration: 500,
            //easing: 'spring(1, 50, 20, 10)' // mass, stiffness, damping, velocity
            easing: 'easeInOutSine'
        }
    ],
    delay: 1300
});
*/
let artistBgAni = anime({
    targets: ['#the-artist'],
    keyframes: [{
            translateY: 500,
            duration: 0
        },
        {
            translateY: 0,
            duration: 750,
            easing: 'easeInOutSine'
        }
    ],
    delay: 1000
});