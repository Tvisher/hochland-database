const gallerySliders = document.querySelectorAll('.gallery-slider');
gallerySliders.forEach(el => {
    const sliderGal = new Swiper(el, {
        speed: 800,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: el.querySelector('.swiper-button-next'),
            prevEl: el.querySelector('.swiper-button-prev'),
        },
        pagination: {
            el: el.querySelector('.swiper-pagination'),
            type: 'bullets',
            clickable: 1,
        },
        grabCursor: 1,
    })
})
