//Hosuehold stock
var isFoodHouse;
var calSumHouse;
var proteinSumHouse;
var carbsSumHouse;
var sugarSumHouse;
var fiberSumHouse;
var fatSumHouse;
var amountSumHouse;
var selectedFoodHouse = {};
var selectedDrinkHouse = {};

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

    //check the minimum calories for a week
    if (parseFloat($('#total-cal-house').text()) < parseFloat($('#minimum-cal').text())) {
        $('#total-row-house').css('color', 'red');
        $('.row.alert-row-house').show();
    }
    else {
        $('#total-row-house').css('color', 'black');
        $('.row.alert-row-house').hide();
    }

    isNutin = false;
});

$(document).on('click', '.th-add-new-food-house', function () {
    isFoodHouse = true;
    $('#household-stock-tbody').append($('<tr>')
        .attr('id', 'food-tr-house')
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<select>')
                .attr('class', 'form-control form-control-sm')
                .attr('id', 'food-select-house')
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
                    .attr('placeholder', 'Amount in gramms')
                    .attr('id', 'input-value-g-house')
                    .prop('required', 'true')
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

    fillFoodSelectHouse();

    $(".th-add-new-house").hide();
    $(".th-save-cancel-house").show();
})

//fill select with the options
function fillFoodSelectHouse() {
    $('#food-select-house option').each(function () {
        $(this).remove();
    })
    $('#food-select-house').append('<option value="" disabled selected hidden>Select the food</option>')

    foods.forEach((value) => {
        $("#food-select-house").append($('<option>')
            .attr('value', value.name)
            .text(value.name)
        )
    })
    $("#food-select-house").append($('<option>')
        .attr('id', 'add-new-food-option')
        .text('Add new food')
    )
}

//when select add new food
$(document).on('change', '#food-select-house', function () {
    if ($(this).children(":selected").attr("id") == 'add-new-food-option') {
        $('#food-select-house option[value=""]').attr('selected', 'selected');
        $('#new-food-modal').modal('show');
    }
})


//add new drink
$(document).on('click', '.th-add-new-drink-house', function () {
    isFoodHouse = false;
    $('#household-stock-tbody')
        .append($('<tr>')
            .attr('id', 'drink-tr-house')
            .append($('<td>')
                .attr('colspan', '2')
                .append($('<select>')
                    .attr('class', 'form-control form-control-sm')
                    .attr('id', 'drink-select-house')
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
                        .attr('placeholder', 'Amount in ml')
                        .attr('id', 'input-value-ml-house')
                        .prop('required', 'true')
                    )
                    .append($('<div>')
                        .attr('class', 'input-group-append')
                        .append($('<span>')
                            .attr('class', 'input-group-text')
                            .text('ml')
                        )
                    )
                )
            )
            .append($('<td>'))
            .append($('<td>'))
            .append($('<td>'))
            .append($('<td>'))
        );

    fillDrinkSelectHouse();

    $(".th-add-new-house").hide();
    $(".th-save-cancel-house").show();
});

//fill select with the options
function fillDrinkSelectHouse() {
    $('#drink-select-house option').each(function () {
        $(this).remove();
    })
    $('#drink-select-house').append('<option value="" disabled selected hidden>Select the drink</option>')

    drinks.forEach((value) => {
        $("#drink-select-house").append($('<option>')
            .attr('value', value.name)
            .text(value.name)
        )
    })
    $("#drink-select-house").append($('<option>')
        .attr('id', 'add-new-drink-option')
        .text('Add new drink')
    )
}

//when select add new drink
$(document).on('change', '#drink-select-house', function () {
    if ($(this).children(":selected").attr("id") == 'add-new-drink-option') {
        $('#drink-select-house option[value=""]').attr('selected', 'selected');
        $('#new-drink-modal').modal('show');
    }
})

$(document).on('click', '.th-save-house', function () {
    //not every input is filled
    if ((!$('#food-select-house').val() && !$('#drink-select-house').val()) || (!$('#input-value-g-house').val() && !$('#input-value-ml-house').val())) {
        alert("You have to fill every box.");
    }
    //every input is filled
    else {
        var amount;
        var unit;
        if (isFoodHouse) {
            inputValueName = $('#food-select-house option:selected').text();
            amount = parseFloat($('#input-value-g-house').val());
            foods.forEach((value) => {
                if (value.name == inputValueName) {
                    selectedFoodHouse.name = value.name;
                    selectedFoodHouse.protein = value.protein;
                    selectedFoodHouse.carbs = value.carbs;
                    selectedFoodHouse.sugar = value.sugar;
                    selectedFoodHouse.fiber = value.fiber;
                    selectedFoodHouse.fat = value.fat;
                }
            })
            $('#food-tr-house').remove();

            proteinAmount = (amount / 100 * selectedFoodHouse.protein).toFixed(0);
            carbsAmount = (amount / 100 * selectedFoodHouse.carbs).toFixed(0);
            sugarAmount = (amount / 100 * selectedFoodHouse.sugar).toFixed(0);
            fiberAmount = (amount / 100 * selectedFoodHouse.fiber).toFixed(0);
            fatAmount = (amount / 100 * selectedFoodHouse.fat).toFixed(0);

            calAmount = proteinAmount * 4 + carbsAmount * 4 + fatAmount * 9;

            unit = "g";
        }
        else {
            inputValueName = $('#drink-select-house option:selected').text();
            amount = $('#input-value-ml-house').val();
            drinks.forEach((value) => {
                if (value.name == inputValueName) {
                    selectedDrinkHouse.name = value.name;
                    selectedDrinkHouse.protein = value.protein;
                    selectedDrinkHouse.carbs = value.carbs;
                    selectedDrinkHouse.sugar = value.sugar;
                    selectedDrinkHouse.fiber = value.fiber;
                    selectedDrinkHouse.fat = value.fat;
                }
            })
            $('#drink-tr-house').remove();

            proteinAmount = (amount / 100 * selectedDrinkHouse.protein).toFixed(0);
            carbsAmount = (amount / 100 * selectedDrinkHouse.carbs).toFixed(0);
            sugarAmount = (amount / 100 * selectedDrinkHouse.sugar).toFixed(0);
            fiberAmount = (amount / 100 * selectedDrinkHouse.fiber).toFixed(0);
            fatAmount = (amount / 100 * selectedDrinkHouse.fat).toFixed(0);

            calAmount = proteinAmount * 4 + carbsAmount * 4 + fatAmount * 9;

            unit = "ml";
        }

        var isExists = false;
        //if the nutritien is already in the household stock
        $("#household-stock-tbody tr").each(function () {
            if ($(this).attr("id") == inputValueName) {
                calAmount += parseFloat($("#" + inputValueName + " .td-cal-house").text());
                $("#" + inputValueName + " .td-cal-house").text(calAmount);
                proteinAmount += parseFloat($("#" + inputValueName + " .td-protein-house").text());
                $("#" + inputValueName + " .td-protein-house").text(proteinAmount);
                carbsAmount += parseFloat($("#" + inputValueName + " .td-carbs-house").text());
                $("#" + inputValueName + " .td-carbs-house").text(carbsAmount);
                fiberAmount += parseFloat($("#" + inputValueName + " .td-fiber-house").text());
                $("#" + inputValueName + " .td-fiber-house").text(fiberAmount);
                sugarAmount += parseFloat($("#" + inputValueName + " .td-sugar-house").text());
                $("#" + inputValueName + " .td-sugar-house").text(sugarAmount);
                fatAmount += parseFloat($("#" + inputValueName + " .td-fat-house").text());
                $("#" + inputValueName + " .td-fat-house").text(fatAmount); 
                amount += parseFloat($("#" + inputValueName + " .td-amount-house").text());
                $("#" + inputValueName + " .td-amount-house").text(amount);
                isExists = true;
            }
        })

        //if the nutritien is not in the household stock yet
        if(!isExists) {
            $('#household-stock-tbody').append($('<tr>')
                .attr('id', inputValueName)
                .append($('<td>')
                    .text(inputValueName)
                    .attr('class', 'td-name-house')
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
                    .text(amount)
                    .attr('class', 'td-right td-amount-house')
                )
                .append($('<td>')
                    .text(unit)
                    .attr('class', 'td-left td-unit-house')
                )

            );
        }

        totalCountHouse();

        $(".th-add-new-house").show();
        $(".th-save-cancel-house").hide();
        if (parseFloat($('#total-cal-house').text()) < parseFloat($('#minimum-cal').text())) {
            $('#total-row-house').css('color', 'red');
            $('.row.alert-row-house').show();
        }
        else {
            $('#total-row-house').css('color', 'black');
            $('.row.alert-row-house').hide();
        }
    }
})

$(document).on('click', '.th-cancel-house', function () {
    if (isFoodHouse) {
        $('#food-tr-house').remove();
    }
    else {
        $('#drink-tr-house').remove();
    }
    $(".th-add-new-house").show();
    $(".th-save-cancel-house").hide();
})

function totalCountHouse() {
    calSumHouse = 0;
    proteinSumHouse = 0;
    carbsSumHouse = 0;
    sugarSumHouse = 0;
    fiberSumHouse = 0;
    fatSumHouse = 0;
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
}
