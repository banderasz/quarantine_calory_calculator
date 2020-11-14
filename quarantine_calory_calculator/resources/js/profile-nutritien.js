//navigation - nutritien intake site
$(document).on('click', '#nutin-nav', function () {
    cancelNewNutin();
    //nav
    $('#nutin-nav').css('font-weight', '500');
    $('#weight-nav').css('font-weight', 'normal');
    $('#house-nav').css('font-weight', 'normal');
    $('#sport-nav').css('font-weight', 'normal');
    $('#personal-nav').css('font-weight', 'normal');
    $('#nutin-nav').css('font-weight', '500');

    //buttons
    $(".th-save-cancel").hide();

    //sites hide&show
    $(".nutritien-intake").show();
    $(".household-stock").hide();
    $(".sport").hide();
    $(".personal").hide();

    //alerts
    $('.row.alert-row-house').hide();
    $('.row.alert-row-sport').hide();

    compareTotalAndIdealNutin();

    isNutin = true;

    $('#recipe-tr-nutin').remove();
    $('#food-tr-nutin').remove();
    $('#drink-tr-nutin').remove();
});

//add new recipe
$(document).on('click', '.th-add-new-recipe-nutin', function () {
    nutinChoosed = nutinIs[0];
    $('#nutritien-intake-tbody').append($('<tr>')
        .attr('id', 'recipe-tr-nutin')
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<select>')
                .attr('class', 'form-control form-control-sm')
                .attr('id', 'recipe-select')
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

    fillRecipeSelect();

    $(".th-add-new-nutin").hide();
    $(".th-save-cancel-nutin").show();
})

//fill select with the options
function fillRecipeSelect() {
    $('#recipe-select option').each(function () {
        $(this).remove();
    })
    $('#recipe-select').append('<option value="" disabled selected hidden>Select the recipe</option>')

    recipes.forEach((value) => {
        $("#recipe-select").append($('<option>')
            .attr('value', value.name)
            .text(value.name)
        )
    })
    $("#recipe-select").append($('<option>')
        .attr('id', 'add-new-recipe-option')
        .text('Add new recipe')
    )
}

//when select add new recipe
$(document).on('change', '#recipe-select', function () {
    if ($(this).children(":selected").attr("id") == 'add-new-recipe-option') {
        $('#recipe-select option[value=""]').attr('selected', 'selected');
        $('#new-recipe-modal').modal('show');
        isNewRecipe = true;
    }
})

//save new recipe
$(document).on('click', '.add-new-recipe-save', function () {
    let nutinIsFilled = true;
    $('#ingredient-table-tbody select').each(function () {
        if (!$(this).val()) {
            nutinIsFilled = false;
        }
    });
    $('#ingredient-table-tbody input').each(function () {
        if (!$(this).val()) {
            nutinIsFilled = false;
        }
    });
    $('#steps-list textarea').each(function () {
        if (!$(this).val()) {
            nutinIsFilled = false;
        }
    });
    if(!$('#new-recipe-name').val() || !$('#recipe-type-select').val()){
        nutinIsFilled = false;
    }
    if (!nutinIsFilled) {
        alert("You didn't fill every box.");
    }
    else {
        let nutinIsNotExists = true;
        let nutinNewRecipe = {};
        let nutinIngredients = [];
        nutinNewRecipe.name = $('#new-recipe-name').val().toLowerCase();
        recipes.forEach((value) => {
            if (value.name.toLowerCase() == nutinNewRecipe.name) {
                nutinIsNotExists = false;
            }
        })

        if (nutinIsNotExists) {
            nutinNewRecipe.name = nutinNewRecipe.name.charAt(0).toUpperCase() + nutinNewRecipe.name.slice(1);
            nutinNewRecipe.type = $('#recipe-type-select option:selected').text();
            nutinNewRecipe.protein = 0;
            nutinNewRecipe.carbs = 0;
            nutinNewRecipe.sugar = 0;
            nutinNewRecipe.fiber = 0;
            nutinNewRecipe.fat = 0;
            nutinNewRecipe.water = 0;
            nutinNewRecipe.amount = 0;
            $('#ingredient-table-tbody tr').each(function () {
                let nutinIngredient = {};
                nutinIngredient.name = $(this).find('.recipe-ingredient-select').find(':selected').text();
                nutinIngredient.amount = parseFloat($(this).find('.recipe-ingredient-amount').val());
                nutinNewRecipe.amount += nutinIngredient.amount;
                if ($(this).find('.recipe-ingredient-unit').text() == 'g') {
                    nutinIngredient.unit = 'g';
                    foods.forEach((value) => {
                        if (value.name == nutinIngredient.name) {
                            nutinNewRecipe.protein += nutinIngredient.amount / 100 * value.protein;
                            nutinNewRecipe.carbs += nutinIngredient.amount / 100 * value.carbs;
                            nutinNewRecipe.sugar += nutinIngredient.amount / 100 * value.sugar;
                            nutinNewRecipe.fiber += nutinIngredient.amount / 100 * value.fiber;
                            nutinNewRecipe.fat += nutinIngredient.amount / 100 * value.fat;
                            nutinNewRecipe.water += nutinIngredient.amount / 100 * value.water;
                        }
                    })
                }
                else {
                    nutinIngredient.unit = 'ml';
                    drinks.forEach((value) => {
                        if (value.name == nutinIngredient.name) {
                            nutinNewRecipe.protein += nutinIngredient.amount / 100 * value.protein;
                            nutinNewRecipe.carbs += nutinIngredient.amount / 100 * value.carbs;
                            nutinNewRecipe.sugar += nutinIngredient.amount / 100 * value.sugar;
                            nutinNewRecipe.fiber += nutinIngredient.amount / 100 * value.fiber;
                            nutinNewRecipe.fat += nutinIngredient.amount / 100 * value.fat;
                            nutinNewRecipe.water += nutinIngredient.amount / 100 * value.water;
                        }
                    })
                }
                nutinIngredients.unshift(nutinIngredient);
            });
            nutinNewRecipe.ingredients = "";
            nutinIngredients.forEach((value) => {
                if (nutinNewRecipe.ingredients != "") {
                    nutinNewRecipe.ingredients += '#!#'
                }
                nutinNewRecipe.ingredients += value.name + "<>" + value.amount + "<>" + value.unit;
            })
            nutinNewRecipe.description = "";
            $('#steps-list textarea').each(function () {
                if (nutinNewRecipe.description != '') {
                    nutinNewRecipe.description += '#!#';
                }
                let desc = $(this).val().trim().charAt(0).toUpperCase() + $(this).val().trim().slice(1);
                nutinNewRecipe.description += desc;
            });
            isNewRecipe = false;

            recipes.unshift(nutinNewRecipe);
            fillRecipeSelect();
            recipesInputEmpty();

            $('#new-recipe-modal').modal('hide');
        }
        else {
            alert("A recipe in this name is already in the database Please rename or cancel the process.");
        }
    }
})

//new food ingredient
$(document).on('click', '.th-add-new-food-recipe', function () {
    $('#ingredient-table-tbody').append($('<tr>')
        .append($('<td>')
            .append($('<select>')
                .attr('class', 'form-control form-control-sm recipe-ingredient-select food-select')
                .prop('required', true)
            ))
        .append($('<td>')
            .append($('<div>')
                .attr('class', 'input-group input-group-sm')
                .append($('<input>')
                    .attr('type', 'number')
                    .attr('class', 'form-control recipe-ingredient-amount')
                    .attr('placeholder', 'Amount in gramms')
                    .prop('required', true)
                )
                .append($('<div>')
                    .attr('class', 'input-group-append')
                    .append($('<span>')
                        .attr('class', 'input-group-text recipe-ingredient-unit')
                        .text('g')
                    )
                )
            )
        )
    )
    $(".food-select").last().empty();
    $(".food-select").last().append('<option value="" disabled selected hidden>Select the food</option>')
    foods.forEach((value) => {
        $(".food-select").last().append($('<option>')
            .attr('value', value.name)
            .text(value.name)
        )
    })
    $(".food-select").last().append($('<option>')
        .attr('class', 'add-new-food-option')
        .attr('value', '')
        .text('Add new food')
    )
});

//new drink ingredient
$(document).on('click', '.th-add-new-drink-recipe', function () {
    $('#ingredient-table-tbody').append($('<tr>')
        .append($('<td>')
            .append($('<select>')
                .attr('class', 'form-control form-control-sm recipe-ingredient-select drink-select')
                .prop('required', true)
            ))
        .append($('<td>')
            .append($('<div>')
                .attr('class', 'input-group input-group-sm')
                .append($('<input>')
                    .attr('type', 'number')
                    .attr('class', 'form-control recipe-ingredient-amount')
                    .attr('placeholder', 'Amount in gramms')
                    .prop('required', true)
                )
                .append($('<div>')
                    .attr('class', 'input-group-append')
                    .append($('<span>')
                        .attr('class', 'input-group-text recipe-ingredient-unit')
                        .text('ml')
                    )
                )
            )
        )
    )
    $(".drink-select").last().empty();
    $(".drink-select").last().append('<option value="" disabled selected hidden>Select the drink</option>')
    drinks.forEach((value) => {
        $(".drink-select").last().append($('<option>')
            .attr('value', value.name)
            .text(value.name)
        )
    })
    $(".drink-select").last().append($('<option>')
        .attr('class', 'add-new-drink-option')
        .attr('value', '')
        .text('Add new drink')
    )
});

//new step
$(document).on('click', '#add-step-btn', function () {
    $('#steps-list').append('<li><textarea class="form-control" rows="3"></textarea></li>')
});

//cancel adding new recipe
$(document).on('click', '.add-new-recipe-close', function () {
    fillRecipeSelect();
    recipesInputEmpty();
    isNewRecipe = false;
})

function recipesInputEmpty() {
    $('#new-recipe-name').val("");
    $('#recipe-type-select').prop('selectedIndex', 0);
    $("#ingredient-table-tbody").empty();
    $("#steps-list").empty();
}

//add new food
$(document).on('click', '.th-add-new-food-nutin', function () {
    nutinChoosed = nutinIs[1];
    $('#nutritien-intake-tbody').append($('<tr>')
        .attr('id', 'food-tr-nutin')
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<select>')
                .attr('class', 'form-control form-control-sm food-select')
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
    $('.food-select').each(function () {
        $(this).empty();
        $(this).append('<option value="" disabled selected hidden>Select the food</option>');

        foods.forEach((value) => {
            $(this).append($('<option>')
                .attr('value', value.name)
                .text(value.name)
            )
        });
        $(this).append($('<option>')
            .attr('class', 'add-new-food-option')
            .attr('value', '')
            .text('Add new food')
        );
    })
}

//when select add new food
$(document).on('change', '.food-select', function () {
    if ($(this).children(":selected").attr("class") == 'add-new-food-option') {
        $('.food-select option[value=""]').attr('selected', 'selected');
        if (isNewRecipe) {
            $('#new-recipe-modal').modal('hide');
        }
        $('#new-food-modal').modal('show');
    }
})

//save new food
$(document).on('click', '#add-new-food-save', function () {
    if ($('#new-food-name').val() == '' || $('#new-food-protein').val() == '' || $('#new-food-carbs').val() == '' || $('#new-food-sugar').val() == ''
        || $('#new-food-fiber').val() == '' || $('#new-food-fat').val() == '' || $('#new-food-water').val() == '') {
        alert("You didn't fill every box.");
    }
    else {
        let nutinIsNotExists = true;
        let nutinNewFood = {};
        nutinNewFood.name = $('#new-food-name').val().toLowerCase();
        nutinNewFood.protein = parseFloat($('#new-food-protein').val());
        nutinNewFood.carbs = parseFloat($('#new-food-carbs').val());
        nutinNewFood.sugar = parseFloat($('#new-food-sugar').val());
        nutinNewFood.fiber = parseFloat($('#new-food-fiber').val());
        nutinNewFood.fat = parseFloat($('#new-food-fat').val());
        nutinNewFood.water = parseFloat($('#new-food-water').val());
        foods.forEach((value) => {
            if (value.name.toLowerCase() == nutinNewFood.name) {
                nutinIsNotExists = false;
            }
        })
        if (nutinIsNotExists) {
            nutinNewFood.name = nutinNewFood.name.charAt(0).toUpperCase() + nutinNewFood.name.slice(1);
            foods.unshift(nutinNewFood);
        }
        else {
            alert("This food is already in the database.")
        }

        if (isNutin) {
            fillFoodSelect();
        }
        else {
            fillFoodSelectHouse();
        }

        foodInputEmpty();
        $('#new-food-modal').modal('hide');
        if (isNewRecipe) {
            $('#new-recipe-modal').modal('show');
        }
    }
})

//cancel adding new food
$(document).on('click', '.add-new-food-close', function () {
    foodInputEmpty();
    if (isNutin && !isNewRecipe) {
        fillFoodSelect();
    }
    else {
        fillFoodSelectHouse();
    }
    if (isNewRecipe) {
        $('#new-recipe-modal').modal('show');
    }
})

function foodInputEmpty() {
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
    nutinChoosed = nutinIs[2];
    $('#nutritien-intake-tbody')
        .append($('<tr>')
            .attr('id', 'drink-tr-nutin')
            .append($('<td>')
                .attr('colspan', '2')
                .append($('<select>')
                    .attr('class', 'form-control form-control-sm drink-select')
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
    $('.drink-select').each(function () {
        $(this).empty();
        $(this).append('<option value="" disabled selected hidden>Select the drink</option>')

        drinks.forEach((value) => {
            $(this).append($('<option>')
                .attr('value', value.name)
                .text(value.name)
            )
        })
        $(this).append($('<option>')
            .attr('class', 'add-new-drink-option')
            .attr('value', '')
            .text('Add new drink')
        )
    })
}

//when select add new drink
$(document).on('change', '.drink-select', function () {
    if ($(this).children(":selected").attr("class") == 'add-new-drink-option') {
        $('.drink-select option[value=""]').attr('selected', 'selected');
        if (isNewRecipe) {
            $('#new-recipe-modal').modal('hide');
        }
        $('#new-drink-modal').modal('show');
    }
})

//save new drink
$(document).on('click', '#add-new-drink-save', function () {
    if ($('#new-drink-name').val() == '' || $('#new-drink-protein').val() == '' || $('#new-drink-carbs').val() == '' || $('#new-drink-sugar').val() == '' || $('#new-drink-fiber').val() == '' || $('#new-drink-fat').val() == '' || $('#new-drink-water').val() == '') {
        alert("You didn't fill every box.");
    }
    else {
        let nutinIsNotExists = true;
        let nutinNewDrink = {};
        nutinNewDrink.name = $('#new-drink-name').val().toLowerCase();
        nutinNewDrink.protein = parseFloat($('#new-drink-protein').val());
        nutinNewDrink.carbs = parseFloat($('#new-drink-carbs').val());
        nutinNewDrink.sugar = parseFloat($('#new-drink-sugar').val());
        nutinNewDrink.fiber = parseFloat($('#new-drink-fiber').val());
        nutinNewDrink.fat = parseFloat($('#new-drink-fat').val());
        nutinNewDrink.water = parseFloat($('#new-drink-water').val());
        drinks.forEach((value) => {
            if (value.name.toLowerCase() == nutinNewDrink.name) {
                nutinIsNotExists = false;
            }
        })
        if (nutinIsNotExists) {
            nutinNewDrink.name = nutinNewDrink.name.charAt(0).toUpperCase() + nutinNewDrink.name.slice(1);
            drinks.unshift(nutinNewDrink);
        }
        else {
            alert("This drink is already in the database.")
        }

        if (isNutin) {
            fillDrinkSelect();
        }
        else {
            fillDrinkSelectHouse();
        }

        drinkInputEmpty();
        $('#new-drink-modal').modal('hide');
        if (isNewRecipe) {
            $('#new-recipe-modal').modal('show');
        }
    }
})

//cancel adding new drink
$(document).on('click', '.add-new-drink-close', function () {
    drinkInputEmpty();
    if (isNutin && !isNewRecipe) {
        fillDrinkSelect();
    }
    else {
        fillDrinkSelectHouse();
    }
    if (isNewRecipe) {
        $('#new-recipe-modal').modal('show');
    }
})

function drinkInputEmpty() {
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
    if ((!$('.food-select').val() && !$('.drink-select').val() && !$('#recipe-select').val()) || (!$('#input-value-g').val() && !$('#input-value-ml').val())) {
        alert("You have to fill every box.");
    }
    else {
        let nutinAmount;
        let baseAmount;
        if (nutinChoosed == nutinIs[0]) {
            nutinInputValueName = $('#recipe-select option:selected').text();
            nutinAmount = parseFloat($('#input-value-g').val());
            recipes.forEach((value) => {
                if (value.name == nutinInputValueName) {
                    newNutin.name = value.name;
                    newNutin.protein = value.protein;
                    newNutin.carbs = value.carbs;
                    newNutin.sugar = value.sugar;
                    newNutin.fiber = value.fiber;
                    newNutin.fat = value.fat;
                    newNutin.water = value.water;
                    baseAmount = value.amount;
                }
            })
            $('#recipe-tr-nutin').remove();
        }
        else if (nutinChoosed == nutinIs[1]) {
            nutinInputValueName = $('.food-select option:selected').text();
            nutinAmount = parseFloat($('#input-value-g').val());
            foods.forEach((value) => {
                if (value.name == nutinInputValueName) {
                    newNutin.name = value.name;
                    newNutin.protein = value.protein;
                    newNutin.carbs = value.carbs;
                    newNutin.sugar = value.sugar;
                    newNutin.fiber = value.fiber;
                    newNutin.fat = value.fat;
                    newNutin.water = value.water;
                }
            })
            baseAmount = 100;
            $('#food-tr-nutin').remove();
        }
        else {
            nutinInputValueName = $('.drink-select option:selected').text();
            nutinAmount = parseFloat($('#input-value-ml').val());
            drinks.forEach((value) => {
                if (value.name == nutinInputValueName) {
                    newNutin.name = value.name;
                    newNutin.protein = value.protein;
                    newNutin.carbs = value.carbs;
                    newNutin.sugar = value.sugar;
                    newNutin.fiber = value.fiber;
                    newNutin.fat = value.fat;
                    newNutin.water = value.water;
                }
            })
            baseAmount = 100;
            $('#drink-tr-nutin').remove();
        }

        //count amounts
        nutinProteinAmount = Math.round(nutinAmount / baseAmount * newNutin.protein);
        nutinCarbsAmount = Math.round(nutinAmount / baseAmount * newNutin.carbs);
        nutinSugarAmount = Math.round(nutinAmount / baseAmount * newNutin.sugar);
        nutinFiberAmount = Math.round(nutinAmount / baseAmount * newNutin.fiber);
        nutinFatAmount = Math.round(nutinAmount / baseAmount * newNutin.fat);
        nutinWaterAmount = Math.round(nutinAmount / baseAmount * newNutin.water);
        nutinCalAmount = nutinProteinAmount * 4 + nutinCarbsAmount * 4 + nutinFatAmount * 9;

        //update sum
        nutinCalSum += nutinCalAmount;
        $('#total-cal-nutin').text(nutinCalSum);
        nutinProteinSum += nutinProteinAmount;
        $('#total-protein-nutin').text(nutinProteinSum);
        nutinCarbsSum += nutinCarbsAmount;
        $('#total-carbs-nutin').text(nutinCarbsSum);
        nutinSugarSum += nutinSugarAmount;
        $('#total-sugar-nutin').text(nutinSugarSum);
        nutinFiberSum += nutinFiberAmount;
        $('#total-fiber-nutin').text(nutinFiberSum);
        nutinFatSum += nutinFatAmount;
        $('#total-fat-nutin').text(nutinFatSum);
        nutinWaterSum += nutinWaterAmount;
        $('#total-water-nutin').text(nutinWaterSum);

        //new table row
        $('#nutritien-intake-tbody').append($('<tr>')

            .append($('<td>')
                .text(nutinInputValueName)
            )
            .append($('<td>')
                .text(nutinCalAmount)
                .attr('class', 'td-center td-cal-nutin')
            )
            .append($('<td>')
                .text(nutinProteinAmount)
                .attr('class', 'td-center td-protein-nutin')
            )
            .append($('<td>')
                .text(nutinCarbsAmount)
                .attr('class', 'td-center td-carbs-nutin')
            )
            .append($('<td>')
                .text(nutinSugarAmount)
                .attr('class', 'td-center td-sugar-nutin')
            )
            .append($('<td>')
                .text(nutinFiberAmount)
                .attr('class', 'td-center td-fiber-nutin')
            )
            .append($('<td>')
                .text(nutinFatAmount)
                .attr('class', 'td-center td-fat-nutin')
            )
            .append($('<td>')
                .text(nutinWaterAmount)
                .attr('class', 'td-center td-water-nutin')
            )

        );

        //add new nutin
        todayNutin.unshift(newNutin);

        //delete from household
        $("#household-stock-tbody tr").each(function () {
            if ($(this).attr("id") == nutinInputValueName && nutinChoosed != nutinIs[0]) {
                if (parseFloat($("#" + nutinInputValueName + " .td-amount-house").text()) - nutinAmount > 0) {
                    let houseCalAmount = parseFloat($("#" + nutinInputValueName + " .td-cal-house").text());
                    $("#" + nutinInputValueName + " .td-cal-house").text(houseCalAmount - nutinCalAmount);
                    let houseProteinAmount = parseFloat($("#" + nutinInputValueName + " .td-protein-house").text());
                    $("#" + nutinInputValueName + " .td-protein-house").text(houseProteinAmount - nutinProteinAmount);
                    let houseCarbsAmount = parseFloat($("#" + nutinInputValueName + " .td-carbs-house").text());
                    $("#" + nutinInputValueName + " .td-carbs-house").text(houseCarbsAmount - nutinCarbsAmount);
                    let houseFiberAmount = parseFloat($("#" + nutinInputValueName + " .td-fiber-house").text());
                    $("#" + nutinInputValueName + " .td-fiber-house").text(houseFiberAmount - nutinFiberAmount);
                    let houseSugarAmount = parseFloat($("#" + nutinInputValueName + " .td-sugar-house").text());
                    $("#" + nutinInputValueName + " .td-sugar-house").text(houseSugarAmount - nutinSugarAmount);
                    let houseFatAmount = parseFloat($("#" + nutinInputValueName + " .td-fat-house").text());
                    $("#" + nutinInputValueName + " .td-fat-house").text(houseFatAmount - nutinFatAmount);
                    let houseAmount = parseFloat($("#" + nutinInputValueName + " .td-amount-house").text());
                    $("#" + nutinInputValueName + " .td-amount-house").text(houseAmount - nutinAmount);
                }
                else {
                    $("#" + nutinInputValueName + " .td-cal-house").text(0);
                    $("#" + nutinInputValueName + " .td-protein-house").text(0);
                    $("#" + nutinInputValueName + " .td-carbs-house").text(0);
                    $("#" + nutinInputValueName + " .td-sugar-house").text(0);
                    $("#" + nutinInputValueName + " .td-fiber-house").text(0);
                    $("#" + nutinInputValueName + " .td-fat-house").text(0);
                    $("#" + nutinInputValueName + " .td-amount-house").text(0);
                }
            }

        })

        if (nutinChoosed == nutinIs[0]) {
            let arr1 = [];
            recipes.forEach((value) => {
                if (value.name == nutinInputValueName) {
                    value.ingredients.split("#!#").forEach((value) => {
                        arr1.push(value.split("<>"));
                    })
                    arr1.forEach((element) => {
                        $("#household-stock-tbody tr").each(function () {
                            if (element[0] == $(this).attr("id")) {
                                nutinAmount = parseFloat(element[1]) / value.amount * nutinAmount;
                                if (parseFloat($("#" + element[0] + " .td-amount-house").text()) - nutinAmount > 0) {
                                    if (element[2] == "g") {
                                        foods.forEach((food) => {
                                            if (food.name == element[0]) {
                                                nutinProteinAmount = Math.round(food.protein / 100 * nutinAmount);
                                                nutinCarbsAmount = Math.round(food.carbs / 100 * nutinAmount);
                                                nutinFiberAmount = Math.round(food.fiber / 100 * nutinAmount);
                                                nutinSugarAmount = Math.round(food.sugar / 100 * nutinAmount);
                                                nutinFatAmount = Math.round(food.fat / 100 * nutinAmount);
                                                nutinCalAmount = nutinProteinAmount * 4 + nutinCarbsAmount * 4 + nutinFatAmount * 9;
                                            }
                                        })
                                    }
                                    else {
                                        drinks.forEach((drink) => {
                                            if (drink.name == element[0]) {
                                                nutinProteinAmount = Math.round(drink.protein / 100 * nutinAmount);
                                                nutinCarbsAmount = Math.round(drink.carbs / 100 * nutinAmount);
                                                nutinFiberAmount = Math.round(drink.fiber / 100 * nutinAmount);
                                                nutinSugarAmount = Math.round(drink.sugar / 100 * nutinAmount);
                                                nutinFatAmount = Math.round(drink.fat / 100 * nutinAmount);
                                                nutinCalAmount = nutinProteinAmount * 4 + nutinCarbsAmount * 4 + nutinFatAmount * 9;
                                            }
                                        })
                                    }
                                    let houseCalAmount = parseFloat($("#" + element[0] + " .td-cal-house").text());
                                    $("#" + element[0] + " .td-cal-house").text(houseCalAmount - nutinCalAmount);
                                    let houseProteinAmount = parseFloat($("#" + element[0] + " .td-protein-house").text());
                                    $("#" + element[0] + " .td-protein-house").text(houseProteinAmount - nutinProteinAmount);
                                    let houseCarbsAmount = parseFloat($("#" + element[0] + " .td-carbs-house").text());
                                    $("#" + element[0] + " .td-carbs-house").text(houseCarbsAmount - nutinCarbsAmount);
                                    let houseFiberAmount = parseFloat($("#" + element[0] + " .td-fiber-house").text());
                                    $("#" + element[0] + " .td-fiber-house").text(houseFiberAmount - nutinFiberAmount);
                                    let houseSugarAmount = parseFloat($("#" + element[0] + " .td-sugar-house").text());
                                    $("#" + element[0] + " .td-sugar-house").text(houseSugarAmount - nutinSugarAmount);
                                    let houseFatAmount = parseFloat($("#" + element[0] + " .td-fat-house").text());
                                    $("#" + element[0] + " .td-fat-house").text(houseFatAmount - nutinFatAmount);
                                    let houseAmount = parseFloat($("#" + element[0] + " .td-amount-house").text());
                                    $("#" + element[0] + " .td-amount-house").text(houseAmount - nutinAmount);
                                }
                                else {
                                    $("#" + element[0] + " .td-cal-house").text(0);
                                    $("#" + element[0] + " .td-protein-house").text(0);
                                    $("#" + element[0] + " .td-carbs-house").text(0);
                                    $("#" + element[0] + " .td-sugar-house").text(0);
                                    $("#" + element[0] + " .td-fiber-house").text(0);
                                    $("#" + element[0] + " .td-fat-house").text(0);
                                    $("#" + element[0] + " .td-amount-house").text(0);
                                }
                            }

                        })
                    })
                }
            })
        }

        //buttons
        $(".th-add-new-nutin").show();
        $(".th-save-cancel-nutin").hide();

        //compare
        compareTotalAndIdealNutin();
    }
});

$(document).on('click', '.th-cancel-nutin', function () {
    cancelNewNutin();
})

function cancelNewNutin() {
    $('#recipe-tr-nutin').remove();
    $('#food-tr-nutin').remove();
    $('#drink-tr-nutin').remove();
    $(".th-add-new-nutin").show();
    $(".th-save-cancel-nutin").hide();
}