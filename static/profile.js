var calSum = 0;
var proteinSum = 0;
var carbsSum = 0;
var sugarSum = 0;
var fiberSum = 0;
var fatSum = 0;
var waterSum = 0;
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

$(document).ready(function () {
    $('#nutin-nav').css('font-weight', '500');
    $(".td-cal-nutin").each(function () {
        calSum += parseFloat($(this).text());
    });
    $('#total-cal-nutin').html(calSum);
    $(".td-protein-nutin").each(function () {
        proteinSum += parseFloat($(this).text());
    });
    $('#total-protein-nutin').html(proteinSum);

    $(".td-carbs-nutin").each(function () {
        carbsSum += parseFloat($(this).text());
    });
    $('#total-carbs-nutin').html(carbsSum);

    $(".td-sugar-nutin").each(function () {
        sugarSum += parseFloat($(this).text());
    });
    $('#total-sugar-nutin').html(sugarSum);

    $(".td-fiber-nutin").each(function () {
        fiberSum += parseFloat($(this).text());
    });
    $('#total-fiber-nutin').html(fiberSum);

    $(".td-fat-nutin").each(function () {
        fatSum += parseFloat($(this).text());
    });
    $('#total-fat-nutin').html(fatSum);

    $(".td-water-nutin").each(function () {
        waterSum += parseFloat($(this).text());
    });
    $('#total-water-nutin').html(waterSum);
    $(".th-save-cancel-nutin").hide();
    if (parseFloat($('#total-cal-nutin').text()) > parseFloat($('#ideal-cal').text())) {
        $('#total-row-nutin').css('color', 'red');
        $('.row.alert-row-nutin').show();
    }
    else{
        $('.row.alert-row-nutin').hide();
    }
    $('.row.alert-row-house').hide();
    $(".nutritien-intake").show();
    $(".household-stock").hide();
    $(".sport").hide();
    $(".personal").hide();
});

//Nutritien intake
$(document).on('click', '.th-add-new-food-nutin', function () {
    $('#nutritien-intake-tbody').append($('<tr>')
        .attr('id', 'new-td-row')
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<input>')
                .attr('class', 'form-control form-control-sm')
                .attr('placeholder', 'Food name')
                .attr('type', 'text')
                .attr('id', 'input-value-name')
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
                    .attr('id', 'input-value-g')
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
    $(".th-add-new-nutin").hide();
    $(".th-save-cancel-nutin").show();
    drinkFood = true;
})

$(document).on('click', '.th-add-new-drink-nutin', function () {
    $('#nutritien-intake-tbody')
    .append($('<tr>')
        .attr('id','drink-tr')
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<input>')
                .attr('class', 'form-control form-control-sm')
                .attr('placeholder', 'Drink name')
                .attr('type', 'text')
                .attr('id', 'input-value-name')
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
                    .attr('id', 'input-value-dl')
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
    $(".th-add-new-nutin").hide();
    $(".th-save-cancel-nutin").show();
    drinkFood = false;
})

$(document).on('click', '.th-save-nutin', function () {
    if (!$('#input-value-name').val()) {
        if(!$('#input-value-g').val() && !$('#input-value-dl').val()){
            alert('The name and amount box is empty.');
        }
        else{
            alert('The name box is empty.');
        }
    }
    else if (!$('#input-value-g').val() && !$('#input-value-dl').val()) {
        alert('The amount box is empty.');
        console.log($('#input-value-dl').val())
    }
    else {
        inputValueName = $('#input-value-name').val();
        var amount = $('#input-value-g').val();
        $('#drink-tr').remove();
        if (!drinkFood) {
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
        $('#nutritien-intake-tbody').find('#new-td-row').remove();
        $('#nutritien-intake-tbody').append($('<tr>')
            .append($('<td>')
                .text(inputValueName)
            )
            .append($('<td>')
                .text(calAmount)
                .attr('class', 'td-center td-cal-nutin')
            )
            .append($('<td>')
                .text(proteinAmount)
                .attr('class', 'td-center td-protein-nutin')
            )
            .append($('<td>')
                .text(carbsAmount)
                .attr('class', 'td-center td-carbs-nutin')
            )
            .append($('<td>')
                .text(sugarAmount)
                .attr('class', 'td-center td-sugar-nutin')
            )
            .append($('<td>')
                .text(fiberAmount)
                .attr('class', 'td-center td-fiber-nutin')
            )
            .append($('<td>')
                .text(fatAmount)
                .attr('class', 'td-center td-fat-nutin')
            )
            .append($('<td>')
                .text(waterAmount)
                .attr('class', 'td-center td-water-nutin')
            )

        );
        calSum += parseFloat($(".td-cal-nutin").last().text());
        $('#total-cal-nutin').html(calSum);
        proteinSum += parseFloat($(".td-protein-nutin").last().text());
        $('#total-protein-nutin').html(proteinSum);
        carbsSum += parseFloat($(".td-carbs-nutin").last().text());
        $('#total-carbs-nutin').html(carbsSum);
        sugarSum += parseFloat($(".td-sugar-nutin").last().text());
        $('#total-sugar-nutin').html(sugarSum);
        fiberSum += parseFloat($(".td-fiber-nutin").last().text());
        $('#total-fiber-nutin').html(fiberSum);
        fatSum += parseFloat($(".td-fat-nutin").last().text());
        $('#total-fat-nutin').html(fatSum);
        waterSum += parseFloat($(".td-water-nutin").last().text());
        $('#total-water-nutin').html(waterSum);

        $(".th-add-new-nutin").show();
        $(".th-save-cancel-nutin").hide();
        if (parseFloat($('#total-cal-nutin').text()) > parseFloat($('#ideal-cal').text())) {
            $('#total-row-nutin').css('color', 'red');
            $('.row.alert-row-nutin').show();
        }
    }
})

$(document).on('click', '.th-cancel-nutin', function () {
    $('#nutritien-intake-tbody').find('#new-td-row').remove();
    $(".th-add-new-nutin").show();
    $(".th-save-cancel-nutin").hide();
})