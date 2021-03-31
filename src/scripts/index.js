$(window).load(function(){
    $('.js-equipment-slider').flexslider({
        animation: "slide",
        animationLoop: true,
        controlNav: false,
        prevText: "",
        nextText: "",
        slideshow: false,
    });

    $(document).on('click', '.js-desc-open', function(e) {
        e.preventDefault();
        let $this = $(this);
        let $parent = $this.parents('.js-item');
        if ($parent.hasClass('desc-opened')){
            $parent.children('.js-desc').slideUp();
            $parent.removeClass('desc-opened');

        } else {
            $parent.children('.js-desc').slideDown();
            $parent.addClass('desc-opened');
        }
    });

    $(document).on('click', '.js-clear-filter', function(e) {
        e.preventDefault();
        $('.js-select select').val(0).trigger("change");
        $('.js-dis-img img').each(function(e) {
            $(this).removeClass('disabled');
        });
    });

    $(document).on('change','.js-dis-select select',function (e) {
        let value =  $(this).val();
        if (!value) {
            $('.js-dis-img img').each(function(e) {
                $(this).removeClass('disabled');
            });
        } else {
            $('.js-dis-img img').each(function(e) {
                let data = $(this).data('displacement').toString();
                $(this).addClass('disabled');
                for (v of value) {
                    if (data == v) {
                        $(this).removeClass('disabled');
                    } 
                }
            });
        }
    });

    $('.js-multiselect').select2({
        tags: false,
        minimumResultsForSearch: Infinity,
        closeOnSelect: false
    });

    $('.js-singleselect').select2({
        tags: false,
        minimumResultsForSearch: Infinity
    });

    $('.js-multiselect').on('select2:opening select2:closing', function( event ) {
        let $searchfield = $(this).parent().find('.select2-search__field');
        $searchfield.prop('disabled', true);
    });
});