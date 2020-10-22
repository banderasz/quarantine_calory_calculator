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

$(document).on('click', '#add-ingredient-btn', function(){
    $('#ingredient-table tbody:last-child').append($('<tr>')
                .append($('<td>')
                    .append($('<input>')
                        .attr('class', 'form-control form-control-sm')
                        .attr('placeholder','Ingredient name')
                        .attr('type','text')
                    )
                )
                .append($('<td>')
                    .append($('<div>')
                        .attr('class', 'input-group input-group-sm')
                        .append($('<input>')
                            .attr('type', 'text')
                            .attr('class', 'form-control')
                        )
                        .append($('<div>')
                            .attr('class', 'input-group-append')
                            .append($('<span>')
                                .attr('class', 'input-group-text')
                                .text('g')
                            )
                        )
                    )
                )
            )
})

$(document).on('click', '#add-step-btn', function(){
    $('#steps-list').append($('<li>')
                .append($('<textarea>')
                    .attr('class', 'form-control')
                    .attr('rows','3')
                )
            )
})
