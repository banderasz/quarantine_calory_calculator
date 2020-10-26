//Hosuehold stock
var drinkFoodHouse = false;
var calSumHouse = 0;
var proteinSumHouse = 0;
var carbsSumHouse = 0;
var sugarSumHouse = 0;
var fiberSumHouse = 0;
var fatSumHouse = 0;
var waterSumHouse = 0;
var inputValueName;
var inputValueNum;
var drinkFood = true;
var calAmount;
var proteinAmount;
var carbsAmount;
var sugarAmount;
var fiberAmount;
var fatAmount;
var waterAmount;

$(document).on('click', '#house-nav', function () {
    $('#house-nav').css('font-weight', '500');
    $('#weight-nav').css('font-weight', 'normal');
    $('#nutin-nav').css('font-weight', 'normal');
    $('#sport-nav').css('font-weight', 'normal');
    $('#personal-nav').css('font-weight', 'normal');
    $(".nutritien-intake").hide();
    $(".household-stock").show();
    $(".sport").hide();
    $(".personal").hide();
    $('.row.alert-row-nutin').hide();

    $(".td-cal-house").each(function () {
        calSumHouse += parseFloat($(this).text());
    });
    $('#total-cal-house').html(calSumHouse);
    $(".td-protein-house").each(function () {
        proteinSumHouse += parseFloat($(this).text());
    });
    $('#total-protein-house').html(proteinSumHouse);
    
    $(".td-carbs-house").each(function () {
        carbsSumHouse += parseFloat($(this).text());
    });
    $('#total-carbs-house').html(carbsSumHouse);
    
    $(".td-sugar-house").each(function () {
        sugarSumHouse += parseFloat($(this).text());
    });
    $('#total-sugar-house').html(sugarSumHouse);
    
    $(".td-fiber-house").each(function () {
        fiberSumHouse += parseFloat($(this).text());
    });
    $('#total-fiber-house').html(fiberSumHouse);
    
    $(".td-fat-house").each(function () {
        fatSumHouse += parseFloat($(this).text());
    });
    $('#total-fat-house').html(fatSumHouse);
    
    $(".td-water-house").each(function () {
        waterSumHouse += parseFloat($(this).text());
    });
    $('#total-water-house').html(waterSumHouse);
    $(".th-save-cancel-house").hide();
    if (parseFloat($('#total-cal-house').text()) < parseFloat($('#minimum-cal').text())) {
        $('#total-row-house').css('color', 'red');
    }
});

$(document).on('click', '.th-add-new-food-house', function () {
    $('#household-stock-tbody').append($('<tr>')
        .attr('id', 'new-td-row-house')
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<input>')
                .attr('class', 'form-control form-control-sm')
                .attr('placeholder', 'Food name')
                .attr('type', 'text')
                .attr('id', 'input-value-name-house')
            )
        )
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<div>')
                .attr('class', 'input-group input-group-sm')
                .append($('<input>')
                    .attr('type', 'number')
                    .attr('class', 'form-control')
                    .attr('placeholder', 'Amount in gramms')
                    .attr('id', 'input-value-g-house')
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
    $(".th-add-new-house").hide();
    $(".th-save-cancel-house").show();
    drinkFoodHouse = true;
})

$(document).on('click', '.th-add-new-drink-house', function () {
    $('#household-stock-tbody')
    .append($('<tr>')
        .attr('id','new-td-row-house')
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<input>')
                .attr('class', 'form-control form-control-sm')
                .attr('placeholder', 'Drink name')
                .attr('type', 'text')
                .attr('id', 'input-value-name-house')
                .prop('required', 'true')
            )
        )
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<div>')
                .attr('class', 'input-group input-group-sm')
                .append($('<input>')
                    .attr('type', 'number')
                    .attr('class', 'form-control')
                    .attr('placeholder', 'Amount in dl')
                    .attr('id', 'input-value-dl-house')
                    .prop('required', 'true')
                )
                .append($('<div>')
                    .attr('class', 'input-group-append')
                    .append($('<span>')
                        .attr('class', 'input-group-text')
                        .text('dl')
                    )
                )
            )
        )
        .append($('<td>'))
        .append($('<td>'))
        .append($('<td>'))
        .append($('<td>'))
    );
    $(".th-add-new-house").hide();
    $(".th-save-cancel-house").show();
    drinkFoodHouse = false;
})

$(document).on('click', '.th-save-house', function () {
    if (!$('#input-value-name-house').val()) {
        if(!$('#input-value-g-house').val() && !$('#input-value-dl-house').val()){
            alert('The name and amount box is empty.');
        }
        else{
            alert('The name box is empty.');
        }
    }
    else if (!$('#input-value-g-house').val() && !$('#input-value-dl-house').val()) {
        alert('The amount box is empty.');
    }
    else {
        inputValueName = $('#input-value-name-house').val();
        var amount = $('#input-value-g-house').val();
        $('#new-td-row-house').remove();
        if (!drinkFoodHouse) {
            waterAmount = amount;
            calAmount = 0;
            proteinAmount = 0;
            carbsAmount = 0;
            sugarAmount = 0;
            fiberAmount = 0;
            fatAmount = 0;
        }
        else {
            waterAmount = amount / 100 * 10;
            calAmount = amount / 100 * 500;
            proteinAmount = amount / 100 * 200;
            carbsAmount = amount / 100 * 10;
            sugarAmount = amount / 100 * 5;
            fiberAmount = amount / 100 * 1;
            fatAmount = amount / 100 * 1;
        }
        $('#household-stock-tbody').find('#new-td-row-house').remove();
        $('#household-stock-tbody').append($('<tr>')
            .append($('<td>')
                .text(inputValueName)
            )
            .append($('<td>')
                .text(calAmount)
                .attr('class', 'td-center td-cal-house')
            )
            .append($('<td>')
                .text(proteinAmount)
                .attr('class', 'td-center td-protein-house')
            )
            .append($('<td>')
                .text(carbsAmount)
                .attr('class', 'td-center td-carbs-house')
            )
            .append($('<td>')
                .text(sugarAmount)
                .attr('class', 'td-center td-sugar-house')
            )
            .append($('<td>')
                .text(fiberAmount)
                .attr('class', 'td-center td-fiber-house')
            )
            .append($('<td>')
                .text(fatAmount)
                .attr('class', 'td-center td-fat-house')
            )
            .append($('<td>')
                .text(waterAmount)
                .attr('class', 'td-center td-water-house')
            )

        );
        calSumHouse += parseFloat($(".td-cal-house").last().text());
        $('#total-cal-house').html(calSumHouse);
        proteinSumHouse += parseFloat($(".td-protein-house").last().text());
        $('#total-protein-house').html(proteinSumHouse);
        carbsSumHouse += parseFloat($(".td-carbs-house").last().text());
        $('#total-carbs-house').html(carbsSumHouse);
        sugarSumHouse += parseFloat($(".td-sugar-house").last().text());
        $('#total-sugar-house').html(sugarSumHouse);
        fiberSumHouse += parseFloat($(".td-fiber-house").last().text());
        $('#total-fiber-house').html(fiberSumHouse);
        fatSumHouse += parseFloat($(".td-fat-house").last().text());
        $('#total-fat-house').html(fatSumHouse);
        waterSumHouse += parseFloat($(".td-water-house").last().text());
        $('#total-water-house').html(waterSumHouse);

        $(".th-add-new-house").show();
        $(".th-save-cancel-house").hide();
        if (parseFloat($('#total-cal-house').text()) > parseFloat($('#minimum-cal').text())) {
            $('#total-row-house').css('color', 'red');
            $('.row alert-row').append('<div class="alert alert-danger"> You ate more calorie then the minimum.</div>')
        }
    }
})

$(document).on('click', '.th-cancel-house', function () {
    $('#household-stock-tbody').find('#new-td-row-house').remove();
    $(".th-add-new-house").show();
    $(".th-save-cancel-house").hide();
})
