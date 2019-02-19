// MENU JAVASCRIPT

// const burger = document.querySelector('.burger');
// const nav = document.querySelector('nav');
// burger.addEventListener('click', function () {
//     burger.classList.toggle('active'),
//         nav.classList.toggle('active');
// })

// MENU JQUERY

$('.burger').on("click", function () {
    $('.burger').toggleClass('active'),
        $('nav').toggleClass('activeNav');
})
$('nav').on('click', function () {
    $('.activeNav').removeClass('activeNav');
})

// AUTOSCROLL


$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $('.menu').addClass('bgc'),
            $('nav li').addClass('bgcNav');
    } else {
        $('.menu').removeClass('bgc'),
            $('nav li').removeClass('bgcNav');
    }
})
$("nav li").on('click', function () {
    const goTo = "." + $(this).attr('id');
    console.log(goTo);
    $('body, html').animate({
        scrollTop: $(goTo).offset().top - $('.menu').outerHeight()
    }, 500)
})

//BORDER NAV

function border() {

    const scrollValue = $(window).scrollTop();
    const about = $('.about').offset().top - $('.menu').outerHeight() - (1);
    const serv = $('.serv').offset().top - $('.menu').outerHeight() - (1);
    const gallery = $('.gallery').offset().top - $('.menu').outerHeight() - (1);
    const blog = $('.blog').offset().top - $('.menu').outerHeight() - (1);
    const contact = $('.contact').offset().top - $('.menu').outerHeight() - (1);

    if (scrollValue < about) {
        $('nav li a').not('#home').removeClass('border');
        $('.hom').addClass('border');
    } else if (scrollValue < serv) {
        $('nav li a').not('#about').removeClass('border');
        $('.abo').addClass('border');
    } else if (scrollValue < gallery) {
        $('nav li a').not('#serv').removeClass('border');
        $('.ser').addClass('border');
    } else if (scrollValue < blog) {
        $('nav li a').not('#gallery').removeClass('border');
        $('.gal').addClass('border');
    } else if (scrollValue < contact) {
        $('nav li a').not('#blog').removeClass('border');
        $('.blo').addClass('border');
    } else {
        $('nav li a').not('#contact').removeClass('border');
        $('.con').addClass('border');
    }
}
$(window).on('scroll', _.debounce((border), 80))

//OUR SERVICES


$(".iconOne").on("click", function () {
    $('.wrapOne').slideToggle("active");
});
$(".iconTwo").on("click", function () {
    $('.wrapTwo').slideToggle("active");
});
$(".iconThree").on("click", function () {
    $('.wrapThree').slideToggle("active");
});
$(".iconFour").on("click", function () {
    $('.wrapFour').slideToggle("active");
});

//GALLERY

$(".showGallery").on("click", function () {
    $(".showMore").slideToggle("active");
    $(".more").toggleClass("showButton");
    $(".less").toggleClass("showButton");
})

// BLOG/CALENDAR

$(".btnCal").on("click", function () {
    $(".showCal").slideToggle("active");
    $(".less2").toggleClass("hide");
    $(".more2").toggleClass("hide");
})