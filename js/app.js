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

document.addEventListener('click', (e) => {
    const target = e.target;
    const faqEl = target.closest('.faq__list-item')
    if (faqEl) {
        let openEl = document.querySelector('.faq__list-item.show');
        if (openEl && openEl != faqEl) {
            openEl.classList.remove('show');
        }
        faqEl.classList.toggle('show');
    }

})



const historySlider = new Swiper('.history-slider', {
    speed: 800,
    slidesPerView: 'auto',
    spaceBetween: 40,

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        // dragSize: 280
    },
})



$(".category__name").on("click", function () {
    $(this).parent().toggleClass('open');
    const innerMenu = $(this).parent().find('.category__list');
    innerMenu.slideToggle("slow", function () {
        // Animation complete.
    });
});