var calSum = 0;
var proteinSum = 0;
var carbsSum = 0;
var sugarSum = 0;
var fiberSum = 0;
var fatSum = 0;
var waterSum = 0;

$(document).ready(function() {
    $('#nutin-nav').css('font-weight','500');
    $(".td-cal").each(function(){
        calSum += parseFloat($(this).text());
      });
    $('#total-cal').html(calSum);

    $(".td-protein").each(function(){
        proteinSum += parseFloat($(this).text());
      });
    $('#total-protein').html(proteinSum);

    $(".td-carbs").each(function(){
        carbsSum += parseFloat($(this).text());
      });
    $('#total-carbs').html(carbsSum);

    $(".td-sugar").each(function(){
        sugarSum += parseFloat($(this).text());
      });
    $('#total-sugar').html(sugarSum);

    $(".td-fiber").each(function(){
        fiberSum += parseFloat($(this).text());
      });
    $('#total-fiber').html(fiberSum);
    
    $(".td-fat").each(function(){
        fatSum += parseFloat($(this).text());
      });
    $('#total-fat').html(fatSum);

    $(".td-water").each(function(){
        waterSum += parseFloat($(this).text());
      });
    $('#total-water').html(waterSum);
    $(".th-save").hide();
});

$(document).on('click', '#nutin-nav', function() {
    $('#nutin-nav').css('font-weight','500');
    $('#weight-nav').css('font-weight','normal');
    $('#house-nav').css('font-weight','normal');
    $('#sport-nav').css('font-weight','normal');
    $('#personal-nav').css('font-weight','normal');
});
$(document).on('click', '#weight-nav', function() {
    $('#weight-nav').css('font-weight','500');
    $('#nutin-nav').css('font-weight','normal');
    $('#house-nav').css('font-weight','normal');
    $('#sport-nav').css('font-weight','normal');
    $('#personal-nav').css('font-weight','normal');
});
$(document).on('click', '#house-nav', function() {
    $('#house-nav').css('font-weight','500');
    $('#weight-nav').css('font-weight','normal');
    $('#nutin-nav').css('font-weight','normal');
    $('#sport-nav').css('font-weight','normal');
    $('#personal-nav').css('font-weight','normal');
});
$(document).on('click', '#sport-nav', function() {
    $('#sport-nav').css('font-weight','500');
    $('#weight-nav').css('font-weight','normal');
    $('#house-nav').css('font-weight','normal');
    $('#nutin-nav').css('font-weight','normal');
    $('#personal-nav').css('font-weight','normal');
});
$(document).on('click', '#personal-nav', function() {
    $('#personal-nav').css('font-weight','500');
    $('#weight-nav').css('font-weight','normal');
    $('#house-nav').css('font-weight','normal');
    $('#sport-nav').css('font-weight','normal');
    $('#nutin-nav').css('font-weight','normal');
});

$(document).on('click', '.th-add-new', function(){
    $('#nutritien-intake-tbody').append($('<tr>')
                .attr('id','new-td-row')
                .append($('<td>')
                    .attr('colspan','2')
                    .append($('<input>')
                        .attr('class', 'form-control form-control-sm')
                        .attr('placeholder','nutritien name')
                        .attr('type','text')
                    )
                )
                .append($('<td>') 
                    .attr('colspan','2')
                    .append($('<div>')
                        .attr('class', 'input-group input-group-sm')
                        .append($('<input>')
                            .attr('type', 'text')
                            .attr('class', 'form-control')
                            .attr('placeholder','number in gramms')
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
                .append($('<td>'))
                .append($('<td>'))
                .append($('<td>'))
                .append($('<td>'))
            );
    $(".th-add-new").hide();
    $(".th-save").show();
})

$(document).on('click', '.th-save', function(){

    $('#nutritien-intake-tbody').find('#new-td-row').remove();
    $('#nutritien-intake-tbody').append($('<tr>')
                .append($('<td>')
                    .text('Meal')
                )
                .append($('<td>')
                    .text('200')
                    .attr('class', 'td-center td-cal')
                )
                .append($('<td>')
                    .text('10')
                    .attr('class', 'td-center td-protein')
                )
                .append($('<td>')
                    .text('10')
                    .attr('class', 'td-center td-carbs')
                )
                .append($('<td>')
                    .text('10')
                    .attr('class', 'td-center td-sugar')
                )
                .append($('<td>')
                    .text('10')
                    .attr('class', 'td-center td-fiber')
                )
                .append($('<td>')
                    .text('10')
                    .attr('class', 'td-center td-fat')
                )
                .append($('<td>')
                    .text('10')
                    .attr('class', 'td-center td-water')
                )
                
            );
            calSum += parseFloat($(".td-cal").last().text());
            $('#total-cal').html(calSum);
            proteinSum += parseFloat($(".td-protein").last().text());
            $('#total-protein').html(proteinSum);
            carbsSum += parseFloat($(".td-carbs").last().text());
            $('#total-carbs').html(carbsSum);
            sugarSum += parseFloat($(".td-sugar").last().text());
            $('#total-sugar').html(sugarSum);
            fiberSum += parseFloat($(".td-fiber").last().text());
            $('#total-fiber').html(fiberSum);
            fatSum += parseFloat($(".td-fat").last().text());
            $('#total-fat').html(fatSum);
            waterSum += parseFloat($(".td-water").last().text());
            $('#total-water').html(waterSum);
    $(".th-add-new").show();
    $(".th-save").hide();
})

$(document).on('click', '#add-step-btn', function(){
    $('#steps-list').append($('<li>')
                .append($('<textarea>')
                    .attr('class', 'form-control')
                    .attr('rows','3')
                )
            )
})
