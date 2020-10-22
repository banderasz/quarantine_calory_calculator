$(document).ready(function() {
    $('#recipes-type1').css('font-weight','500');
});

$(document).on('click', '#recipes-type1', function() {
    $('#recipes-type1').css('font-weight','500');
    $('#recipes-type2').css('font-weight','normal');
    $('#recipes-type3').css('font-weight','normal');
    $('#recipes-type4').css('font-weight','normal');
    $('#recipes-type5').css('font-weight','normal');
});
$(document).on('click', '#recipes-type2', function() {
    $('#recipes-type2').css('font-weight','500');
    $('#recipes-type1').css('font-weight','normal');
    $('#recipes-type3').css('font-weight','normal');
    $('#recipes-type4').css('font-weight','normal');
    $('#recipes-type5').css('font-weight','normal');
});
$(document).on('click', '#recipes-type3', function() {
    $('#recipes-type3').css('font-weight','500');
    $('#recipes-type2').css('font-weight','normal');
    $('#recipes-type1').css('font-weight','normal');
    $('#recipes-type4').css('font-weight','normal');
    $('#recipes-type5').css('font-weight','normal');
});
$(document).on('click', '#recipes-type4', function() {
    $('#recipes-type4').css('font-weight','500');
    $('#recipes-type2').css('font-weight','normal');
    $('#recipes-type3').css('font-weight','normal');
    $('#recipes-type1').css('font-weight','normal');
    $('#recipes-type5').css('font-weight','normal');
});
$(document).on('click', '#recipes-type5', function() {
    $('#recipes-type5').css('font-weight','500');
    $('#recipes-type2').css('font-weight','normal');
    $('#recipes-type3').css('font-weight','normal');
    $('#recipes-type4').css('font-weight','normal');
    $('#recipes-type1').css('font-weight','normal');
});