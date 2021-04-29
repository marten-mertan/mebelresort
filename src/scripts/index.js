$(document).ready(function(){
    $(document).on('click', '.js-novostroyky-popup-open', function(e) {
        e.preventDefault();
        $('.js-novostroyky').addClass('popup-open');
        $('.js-novostroyky-step-1').addClass('open');
    });
    $(document).on('click', '.js-novostroyky-popup-close', function(e) {
        e.preventDefault();
        $('.js-novostroyky').removeClass('popup-open');
        $('.js-novostroyky-step-1').removeClass('open');
    });
    $(document).on('click', '.js-novostroyky-popup-open-2', function(e) {
        e.preventDefault();
        $('.js-novostroyky').addClass('popup-open');
        $('.js-novostroyky-step-1').removeClass('open');
        $('.js-novostroyky-step-2').addClass('open');
    });
});