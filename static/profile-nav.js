$(document).on('click', '#nutin-nav', function () {
    $('#nutin-nav').css('font-weight', '500');
    $('#weight-nav').css('font-weight', 'normal');
    $('#house-nav').css('font-weight', 'normal');
    $('#sport-nav').css('font-weight', 'normal');
    $('#personal-nav').css('font-weight', 'normal');
    $('#nutin-nav').css('font-weight', '500');
    $(".th-save-cancel").hide();
    if (parseFloat($('#total-cal-nutin').text()) > parseFloat($('#ideal-cal').text())) {
        $('#total-row').css('color', 'red');
        $('.row.alert-row-nutin').show();
    }
    else{
        $('.row.alert-row-nutin').hide();
    }
    $(".nutritien-intake").show();
    $(".household-stock").hide();
    $(".sport").hide();
    $(".personal").hide();
    $('.row.alert-row-house').hide();
});

$(document).on('click', '#sport-nav', function () {
    $('#sport-nav').css('font-weight', '500');
    $('#weight-nav').css('font-weight', 'normal');
    $('#house-nav').css('font-weight', 'normal');
    $('#nutin-nav').css('font-weight', 'normal');
    $('#personal-nav').css('font-weight', 'normal');
    $(".nutritien-intake").hide();
    $(".household-stock").hide();
    $(".sport").show();
    $(".personal").hide();
    $('.row.alert-row-nutin').hide();
    $('.row.alert-row-house').hide();
});
$(document).on('click', '#personal-nav', function () {
    $('#personal-nav').css('font-weight', '500');
    $('#weight-nav').css('font-weight', 'normal');
    $('#house-nav').css('font-weight', 'normal');
    $('#sport-nav').css('font-weight', 'normal');
    $('#nutin-nav').css('font-weight', 'normal');
    $(".nutritien-intake").hide();
    $(".household-stock").hide();
    $(".sport").hide();
    $(".personal").show();
    $('.row.alert-row-nutin').hide();
    $('.row.alert-row-house').hide();
});