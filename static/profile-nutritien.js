var calSum = 0;
var proteinSum = 0;
var carbsSum = 0;
var sugarSum = 0;
var fiberSum = 0;
var fatSum = 0;
var waterSum = 0;
var inputValueName;
var inputValueNum;
var isFood;
var calAmount;
var proteinAmount;
var carbsAmount;
var sugarAmount;
var fiberAmount;
var fatAmount;
var waterAmount;
var selectedFood ={};
var selectedDrink ={};
var isNutin;

$(document).ready(function () {
    $('#nutin-nav').css('font-weight', '500');

    //count sums
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

    //hide-show elements
    $(".th-save-cancel-nutin").hide();
    $('.row.alert-row-house').hide();
    $('.row.alert-row-sport').hide();
    $(".nutritien-intake").show();
    $(".household-stock").hide();
    $(".sport").hide();
    $(".personal").hide();

    //compare ideal and total
    if (parseFloat($('#total-cal-nutin').text()) > parseFloat($('#ideal-cal').text())) {
        $('#total-row-nutin').css('color', 'red');
        $('.row.alert-row-nutin').show();
    }
    else {
        $('.row.alert-row-nutin').hide();
    }

    isNutin = true;
});

//navigation - nutritien intake site
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
    else {
        $('.row.alert-row-nutin').hide();
    }
    $(".nutritien-intake").show();
    $(".household-stock").hide();
    $(".sport").hide();
    $(".personal").hide();
    $('.row.alert-row-house').hide();
    $('.row.alert-row-sport').hide();

    isNutin = true;
});

//add new food
$(document).on('click', '.th-add-new-food-nutin', function () {
    isFood = true;
    $('#nutritien-intake-tbody').append($('<tr>')
        .attr('id', 'food-tr')
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<select>')
                .attr('class', 'form-control form-control-sm')
                .attr('id', 'food-select')
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
                    .attr('id', 'input-value-g')
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

    fillFoodSelect();

    $(".th-add-new-nutin").hide();
    $(".th-save-cancel-nutin").show();
})

//fill select with the options
function fillFoodSelect() {
    $('#food-select option').each(function () {
        $(this).remove();
    })
    $('#food-select').append('<option value="" disabled selected hidden>Select the food</option>')

    foods.forEach((value) => {
        $("#food-select").append($('<option>')
            .attr('value', value.name)
            .text(value.name)
        )
    })
    $("#food-select").append($('<option>')
        .attr('id', 'add-new-food-option')
        .text('Add new food')
    )
}

//when select add new food
$(document).on('change', '#food-select', function () {
    if ($(this).children(":selected").attr("id") == 'add-new-food-option') {
        $('#food-select option[value=""]').attr('selected', 'selected');
        $('#new-food-modal').modal('show');
    }
})

//save new food
$(document).on('click', '#add-new-food-save', function () {
    if ($('#new-food-name').val() == '' || $('#new-food-protein').val() == '' || $('#new-food-carbs').val() == '' || $('#new-food-sugar').val() == '' || $('#new-food-fiber').val() == '' || $('#new-food-fat').val() == '' || $('#new-food-water').val() == '') {
        alert("You didn't fill every box.");
    }
    else {
        var isNotExists = true;
        var newFood = {};
        newFood.name = $('#new-food-name').val().toLowerCase();
        newFood.protein = parseFloat($('#new-food-protein').val());
        newFood.carbs = parseFloat($('#new-food-carbs').val());
        newFood.sugar = parseFloat($('#new-food-sugar').val());
        newFood.fiber = parseFloat($('#new-food-fiber').val());
        newFood.fat = parseFloat($('#new-food-fat').val());
        newFood.water = parseFloat($('#new-food-water').val());
        foods.forEach((value) => {
            if (value.name.toLowerCase() == newFood.name) {
                isNotExists = false;
            }
        })
        if (isNotExists) {
            newFood.name = newFood.name.charAt(0).toUpperCase() + newFood.name.slice(1);
            foods.push(newFood);
        }
        else {
            alert("This food is already in the database.")
        }

        if(isNutin){
            fillFoodSelect();
        }
        else{
            fillFoodSelectHouse();
        }
        
        foodInputEmpty();
        $('#new-food-modal').modal('hide');
    }
})

//cancel adding new food
$(document).on('click', '.add-new-food-close', function () {
    foodInputEmpty();
    if(isNutin){
            fillFoodSelect();
        }
        else{
            fillFoodSelectHouse();
        }
})

function foodInputEmpty(){
        $('#new-food-name').val('');
        $('#new-food-protein').val('');
        $('#new-food-carbs').val('');
        $('#new-food-sugar').val('');
        $('#new-food-fiber').val('');
        $('#new-food-fat').val('');
        $('#new-food-water').val('');
}


//add new drink
$(document).on('click', '.th-add-new-drink-nutin', function () {
    isFood = false;
    $('#nutritien-intake-tbody')
        .append($('<tr>')
            .attr('id', 'drink-tr')
            .append($('<td>')
                .attr('colspan', '2')
                .append($('<select>')
                    .attr('class', 'form-control form-control-sm')
                    .attr('id', 'drink-select')
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
                        .attr('id', 'input-value-ml')
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

    fillDrinkSelect();

    $(".th-add-new-nutin").hide();
    $(".th-save-cancel-nutin").show();
})

//fill select with the options
function fillDrinkSelect() {
    $('#drink-select option').each(function () {
        $(this).remove();
    })
    $('#drink-select').append('<option value="" disabled selected hidden>Select the drink</option>')

    drinks.forEach((value) => {
        $("#drink-select").append($('<option>')
            .attr('value', value.name)
            .text(value.name)
        )
    })
    $("#drink-select").append($('<option>')
        .attr('id', 'add-new-drink-option')
        .text('Add new drink')
    )
}

//when select add new drink
$(document).on('change', '#drink-select', function () {
    if ($(this).children(":selected").attr("id") == 'add-new-drink-option') {
        $('#drink-select option[value=""]').attr('selected', 'selected');
        $('#new-drink-modal').modal('show');
    }
})

//save new drink
$(document).on('click', '#add-new-drink-save', function () {
    if ($('#new-drink-name').val() == '' || $('#new-drink-protein').val() == '' || $('#new-drink-carbs').val() == '' || $('#new-drink-sugar').val() == '' || $('#new-drink-fiber').val() == '' || $('#new-drink-fat').val() == '' || $('#new-drink-water').val() == '') {
        alert("You didn't fill every box.");
    }
    else {
        var isNotExists = true;
        var newDrink = {};
        newDrink.name = $('#new-drink-name').val().toLowerCase();
        newDrink.protein = parseFloat($('#new-drink-protein').val());
        newDrink.carbs = parseFloat($('#new-drink-carbs').val());
        newDrink.sugar = parseFloat($('#new-drink-sugar').val());
        newDrink.fiber = parseFloat($('#new-drink-fiber').val());
        newDrink.fat = parseFloat($('#new-drink-fat').val());
        newDrink.water = parseFloat($('#new-drink-water').val());
        drinks.forEach((value) => {
            if (value.name.toLowerCase() == newDrink.name) {
                isNotExists = false;
            }
        })
        if (isNotExists) {
            newDrink.name = newDrink.name.charAt(0).toUpperCase() + newDrink.name.slice(1);
            drinks.push(newDrink);
        }
        else {
            alert("This drink is already in the database.")
        }

        if(isNutin){
            fillDrinkSelect();
        }
        else{
            fillDrinkSelectHouse();
        }

        drinkInputEmpty();
        $('#new-drink-modal').modal('hide');
    }
})

//cancel adding new drink
$(document).on('click', '.add-new-drink-close', function () {
    drinkInputEmpty();
    if(isNutin){
        fillDrinkSelect();
    }
    else{
        fillDrinkSelectHouse();
    }
})

function drinkInputEmpty(){
        $('#new-drink-name').val('');
        $('#new-drink-protein').val('');
        $('#new-drink-carbs').val('');
        $('#new-drink-sugar').val('');
        $('#new-drink-fiber').val('');
        $('#new-drink-fat').val('');
        $('#new-drink-water').val('');
}

//save adding new nutritien intake
$(document).on('click', '.th-save-nutin', function () {
    if ((!$('#food-select').val() && !$('#drink-select').val()) || (!$('#input-value-g').val() && !$('#input-value-ml').val())) {
        alert("You have to fill every box.");
    }
    else {
        var amount;
        if(isFood){
            inputValueName = $('#food-select option:selected').text();
            amount = $('#input-value-g').val();
            foods.forEach((value) => {
                if (value.name == inputValueName) {
                    selectedFood.name = value.name;
                    selectedFood.protein = value.protein;
                    selectedFood.carbs = value.carbs;
                    selectedFood.sugar = value.sugar;
                    selectedFood.fiber = value.fiber;
                    selectedFood.fat = value.fat;
                    selectedFood.water = value.water;
                }
            })
            $('#food-tr').remove();
            
            proteinAmount = amount / 100 * selectedFood.protein;
            carbsAmount = amount / 100 * selectedFood.carbs;
            sugarAmount = amount / 100 * selectedFood.sugar;
            fiberAmount = amount / 100 * selectedFood.fiber;
            fatAmount = amount / 100 * selectedFood.fat;
            waterAmount = amount / 100 * selectedFood.water;

            calAmount = proteinAmount*4 + carbsAmount*4 + fatAmount*4;
        }
        else{
            inputValueName = $('#drink-select option:selected').text();
            amount = $('#input-value-ml').val();
            drinks.forEach((value) => {
                if (value.name == inputValueName) {
                    selectedDrink.name = value.name;
                    selectedDrink.protein = value.protein;
                    selectedDrink.carbs = value.carbs;
                    selectedDrink.sugar = value.sugar;
                    selectedDrink.fiber = value.fiber;
                    selectedDrink.fat = value.fat;
                    selectedDrink.water = value.water;
                }
            })
            $('#drink-tr').remove();

            proteinAmount = amount / 100 * selectedDrink.protein;
            carbsAmount = amount / 100 * selectedDrink.carbs;
            sugarAmount = amount / 100 * selectedDrink.sugar;
            fiberAmount = amount / 100 * selectedDrink.fiber;
            fatAmount = amount / 100 * selectedDrink.fat;
            waterAmount = amount / 100 * selectedDrink.water;

            calAmount = proteinAmount*4 + carbsAmount*4 + fatAmount*4;
        }
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
    if(isFood){
        $('#food-tr').remove();
    }
    else{
        $('#drink-tr').remove();
    }
    $(".th-add-new-nutin").show();
    $(".th-save-cancel-nutin").hide();
})