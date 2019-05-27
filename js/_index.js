window.onload=function () {
    var fs = parseInt($("html").css("font-size")) / 50;
    let banner = new Swiper(".banner .swiper-container", {
        speed: 700,
        pagination: {
            el: ".banner .swiper-pagination"
        }
    })
    let energy = new Swiper(".product-energy .swiper-container", {
        speed: 700,
        resistanceRatio: 0.5,
        slidesPerView: 2,
        spaceBetween: fs * 10,
        // loop: true,
        // freeMode: true,
        navigation: {
            nextEl: '.product-energy .swiper-button-next',
            prevEl: '.product-energy .swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    })

    let rubbish = new Swiper(".product-rubbish .swiper-container", {
        speed: 700,
        resistanceRatio: 0.5,
        slidesPerView: 2,
        spaceBetween: fs * 10,
        // loop: true,
        // freeMode: true,
        navigation: {
            nextEl: '.product-rubbish .swiper-button-next',
            prevEl: '.product-rubbish .swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    })
    let rural = new Swiper(".product-rural .swiper-container", {
        speed: 700,
        resistanceRatio: 0.5,
        slidesPerView: 2,
        spaceBetween: fs * 10,
        // loop: true,
        // freeMode: true,
        navigation: {
            nextEl: '.product-rural .swiper-button-next',
            prevEl: '.product-rural .swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    })
    let robot = new Swiper(".product-robot .swiper-container", {
        speed: 700,
        resistanceRatio: 0.5,
        slidesPerView: 2,
        spaceBetween: fs * 10,
        // loop: true,
        // freeMode: true,
        navigation: {
            nextEl: '.product-robot .swiper-button-next',
            prevEl: '.product-robot .swiper-button-prev',
        },
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // }
    })
    let news = new Swiper(".news .swiper-container", {
        // loop: true,
        speed: 600,
        resistanceRatio: 0.5,
        spaceBetween: 10,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".news .swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        }
    })

    $(".product-energy .list-tab ul li").on("click", function () {
        var _index = $(this).index()
        $(this).addClass('active').siblings().removeClass('active')
        $(".product-energy .list-item").eq(_index).addClass('show').siblings().removeClass('show');
    })
    $(".product-rubbish .list-tab ul li").on("click", function () {
        var _index = $(this).index()
        $(this).addClass('active').siblings().removeClass('active')
        $(".product-rubbish .list-item").eq(_index).addClass('show').siblings().removeClass('show');
    })
    $(".product-rural .list-tab ul li").on("click", function () {
        var _index = $(this).index()
        $(this).addClass('active').siblings().removeClass('active')
        $(".product-rural .list-item").eq(_index).addClass('show').siblings().removeClass('show');
    })
    $(".product-sewage .list-tab ul li").on("click", function () {
        var _index = $(this).index()
        $(this).addClass('active').siblings().removeClass('active')
        $(".product-sewage .list-item").eq(_index).addClass('show').siblings().removeClass('show');
    })
}