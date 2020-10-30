//Hosuehold stock
var drinkFoodHouse = false;
var calSumHouse;
var proteinSumHouse;
var carbsSumHouse;
var sugarSumHouse;
var fiberSumHouse;
var fatSumHouse;
var amountSumHouse;
var inputValueName;
var inputValueNum;
var drinkFood = true;
var calAmount;
var proteinAmount;
var carbsAmount;
var sugarAmount;
var fiberAmount;
var fatAmount;
var amountAmount;

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
    $('.row.alert-row-sport').hide();
    totalCountHouse();
    $('#total-amount-house').html(amountSumHouse);
    $(".th-save-cancel-house").hide();
    if (parseFloat($('#total-cal-house').text()) < parseFloat($('#minimum-cal').text())) {
        $('#total-row-house').css('color', 'red');
        $('.row.alert-row-house').show();
    }
    else{
        $('#total-row-house').css('color', 'black');
        $('.row.alert-row-house').hide();
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
        var amount = parseFloat($('#input-value-g-house').val());
        $('#new-td-row-house').remove();
        if (!drinkFoodHouse) {
            amountAmount = amount;
            calAmount = amount / 10 * 50;
            proteinAmount = amount / 10 * 20;
            carbsAmount = amount / 10 * 1;
            sugarAmount = amount / 10 * 5;
            fiberAmount = amount / 10 * 1;
            fatAmount = amount / 10 * 1;
        }
        else {
            amountAmount = amount;
            calAmount = amount / 100 * 500;
            proteinAmount = amount / 100 * 200;
            carbsAmount = amount / 100 * 10;
            sugarAmount = amount / 100 * 5;
            fiberAmount = amount / 100 * 1;
            fatAmount = amount / 100 * 1;
        }
        $('#household-stock-tbody').find('#new-td-row-house').remove();
        if($("#" + inputValueName).length > 0){
            calAmount += parseFloat($("#"+inputValueName+" .td-cal-house").text());
            $("#"+inputValueName+" .td-cal-house").text(calAmount);
            proteinAmount += parseFloat($("#"+inputValueName+" .td-protein-house").text());
            $("#"+inputValueName+" .td-protein-house").text(proteinAmount);
            carbsAmount += parseFloat($("#"+inputValueName+" .td-carbs-house").text());
            $("#"+inputValueName+" .td-carbs-house").text(carbsAmount);
            fiberAmount += parseFloat($("#"+inputValueName+" .td-fiber-house").text());
            $("#"+inputValueName+" .td-fiber-house").text(fiberAmount);
            sugarAmount += parseFloat($("#"+inputValueName+" .td-sugar-house").text());
            $("#"+inputValueName+" .td-sugar-house").text(sugarAmount);
            fatAmount += parseFloat($("#"+inputValueName+" .td-fat-house").text());
            $("#"+inputValueName+" .td-fat-house").text(fatAmount);
            amountAmount += parseFloat($("#"+inputValueName+" .td-amount-house").text());
            $("#"+inputValueName+" .td-amount-house").text(amountAmount);
        }
        else{
            $('#household-stock-tbody').append($('<tr>')
            .attr('id',inputValueName)
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
                .text(amountAmount)
                .attr('class', 'td-center td-amount-house')
            )

        );}

        totalCountHouse();

        $(".th-add-new-house").show();
        $(".th-save-cancel-house").hide();
        if (parseFloat($('#total-cal-house').text()) < parseFloat($('#minimum-cal').text())) {
            $('#total-row-house').css('color', 'red');
            $('.row.alert-row-house').show();
        }
        else{
            $('#total-row-house').css('color', 'black');
            $('.row.alert-row-house').hide();
        }
    }
})

$(document).on('click', '.th-cancel-house', function () {
    $('#household-stock-tbody').find('#new-td-row-house').remove();
    $(".th-add-new-house").show();
    $(".th-save-cancel-house").hide();
})

function totalCountHouse(){
    calSumHouse = 0;
    proteinSumHouse = 0;
    carbsSumHouse = 0;
    sugarSumHouse = 0;
    fiberSumHouse = 0;
    fatSumHouse = 0;
    amountSumHouse = 0;
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
    
    $(".td-amount-house").each(function () {
        amountSumHouse += parseFloat($(this).text());
    });
    $('#total-amount-house').html(amountSumHouse);
}
