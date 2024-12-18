$(document).ready(function () {
    $('.faq-item__head').on('click', function () {
        const $faqItem = $(this).closest('.faq-item');
        $faqItem.toggleClass('active').find('.faq-item__body').slideToggle(700, 'swing');
    });
});
