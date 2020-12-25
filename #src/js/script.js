@@include('_alert.js')
@@include('_popup.js')
@@include('_burger.js')
@@include('_map.js')

// ==========================================
// <ВЫДЕЛЕНИЕ АКТИВНОГО МЕНЮ>
// ==========================================
$('a').click(function () {
    $('.active').removeClass('active');
    $(this).addClass('active');
});
// ==========================================
// </ВЫДЕЛЕНИЕ АКТИВНОГО МЕНЮ>
// ==========================================

// ==========================================
// <WEBP IMAGE>
// ==========================================
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
// ==========================================
// </WEBP IMAGE>
// ==========================================

// ==========================================
// <2 СКРИПТА НА ИЗОБРАЖЕНИЯ, ЕСЛИ НЕ ОТОБРАЖАЕТСЯ, АКТИВНЫЙ СКРИПТ ЗАКОМЕНТИРОВАТЬ, А ЗАКОМЕНТИРОВАННЫЙ РАССКОМЕНТИРОВАТЬ>
// ==========================================
function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
ibg();

// function ibg() {
//     $.each($('.ibg'), function (index, val) {
//         if ($(this).find('img').length > 0) {
//             $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
//         }
//     });
// }
// ibg();
// ==========================================
// <2 СКРИПТА НА ИЗОБРАЖЕНИЯ>
// ==========================================

// ==========================================
// <SWIPER SLIDER INIT>
// ==========================================
new Swiper('.client__slider-container', {
    // Свои классы
    containerModifierClass: "client__slider-container",
    wrapperClass: "client__slider-wrapper",
    // slidePrevClass: "",
    // slideNextClass: "",
    // slideActiveClass: "",
    slideClass: "client__slider-slide",
    // Стрелки навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Точки пагинации
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
    // Количество слайдов для показа
    slidesPerView: 1,
    //  Обновить свайпер
    observeParents: true,
    observer: true,
    observeSlideChildren: true,

    // Отступ между слайдами
    spaceBetween: 100,
    // Автопрокрутка слайдов
    autoplay: {
        delay: 2000,
    },
});

// ==========================================

new Swiper('.about__slider-container', {
    // Стрелки навигации
    navigation: {
        nextEl: '.about__button-next',
        prevEl: '.about__button-prev',
    },

    // Точки пагинации
    pagination: {
        el: '.about__slider-pagination',
        clickable: true,
    },

    // Количество слайдов для показа
    slidesPerView: 4,

    // Отступы между слайдами
    spaceBetween: 30,

    // Скрол бар
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            direction: 'vertical',
            loop: false,
            centeredSlides: false,
            slidesPerView: 4,
            autoHeight: false,
            mousewheel: true,
            spaceBetween: 0,
        },
        // when window width is >= 540px
        540: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

// ==========================================
// </SWIPER SLIDER INIT>
// ==========================================