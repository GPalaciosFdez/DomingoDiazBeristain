var exports = {};

document.addEventListener('DOMContentLoaded', function () {
    var main = new Splide('#main-slider', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: true
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

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('li>a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('li>a.color-active').removeClass("color-active");
            $('.bg-active').removeClass("bg-active");
            currLink.addClass("color-active");
            currLink.parent().addClass("bg-active");
        } else {
            currLink.removeClass("color-active");
            currLink.parent().removeClass("color-active");
        }
    });
}
$(document).ready(function () {
    $(document).on("scroll", onScroll);
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

let leftHeroAni = anime({
    targets: '#left-hero',
    keyframes: [{
            translateX: -200,
            translateY: 200,
            duration: 0
        },
        {
            translateX: 0,
            translateY: 0,
            duration: 300,
            easing: 'easeInOutSine'
        }
    ]
});

let rightHeroAni = anime({
    targets: '#right-hero',
    keyframes: [{
            translateX: 200,
            translateY: -200,
            duration: 0
        },
        {
            translateX: 0,
            translateY: 0,
            duration: 300,
            easing: 'easeInOutSine'
        }
    ]
});

let artistPAni = anime({
    targets: ['#the-artist p', '#the-artist .section-header'],
    keyframes: [{
            translateX: -500,
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
    delay: 400
});

let artistBgAni = anime({
    targets: ['#the-artist'],
    keyframes: [{
            translateY: 500,
            duration: 0
        },
        {
            translateY: 0,
            duration: 500,
            easing: 'easeInOutSine'
        }
    ]
});