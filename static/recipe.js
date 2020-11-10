var foods = []; //{name, protein, carbs, sugar, fiber, fat, water}
var drinks = []; //{name, protein, carbs, sugar, fiber, fat, water}
var recipes = []; //{name, type, protein, carbs, sugar, fiber, fat, water, ingredients, description}
var isNewRecipe = false;


$(document).ready(function () {
    $('#recipes-type1').css('font-weight', '500');
    fillAllRecipes();
});
function fillAllRecipes() {
    let num = 0;
    $('#recipes-site-content').empty();
    recipes.forEach((value) => {
        if (num % 3 == 0) {
            $('#recipes-site-content').append($('<div>')
                .attr('class', 'row recipe-card')
            )
        }
        $('#recipes-site-content .recipe-card').last().append($('<div>')
            .attr('class', 'col-md-4 align-items-center')
            .append($('<div>')
                .attr('class', 'card recipe-box')
                .append($('<button>')
                    .attr('class', 'card-link btn recipe-card-link')
                    .attr('data-toggle', 'modal')
                    .attr('data-target', '#open-recipe-modal')
                    .attr('id', value.name)
                    .text(value.name)
                )
            )
        )
        num++;
    })

}

$(document).on('click', '#recipes-type1', function () {
    $('#recipes-type1').css('font-weight', '500');
    $('#recipes-type2').css('font-weight', 'normal');
    $('#recipes-type3').css('font-weight', 'normal');
    $('#recipes-type4').css('font-weight', 'normal');
    $('#recipes-type5').css('font-weight', 'normal');
    fillAllRecipes();
});
$(document).on('click', '#recipes-type2', function () {
    $('#recipes-type2').css('font-weight', '500');
    $('#recipes-type1').css('font-weight', 'normal');
    $('#recipes-type3').css('font-weight', 'normal');
    $('#recipes-type4').css('font-weight', 'normal');
    $('#recipes-type5').css('font-weight', 'normal');
    fillFilteredRecipes('Breakfast');
});
$(document).on('click', '#recipes-type3', function () {
    $('#recipes-type3').css('font-weight', '500');
    $('#recipes-type2').css('font-weight', 'normal');
    $('#recipes-type1').css('font-weight', 'normal');
    $('#recipes-type4').css('font-weight', 'normal');
    $('#recipes-type5').css('font-weight', 'normal');
    fillFilteredRecipes('Lunch');
});
$(document).on('click', '#recipes-type4', function () {
    $('#recipes-type4').css('font-weight', '500');
    $('#recipes-type2').css('font-weight', 'normal');
    $('#recipes-type3').css('font-weight', 'normal');
    $('#recipes-type1').css('font-weight', 'normal');
    $('#recipes-type5').css('font-weight', 'normal');
    fillFilteredRecipes('Dinner');
});
$(document).on('click', '#recipes-type5', function () {
    $('#recipes-type5').css('font-weight', '500');
    $('#recipes-type2').css('font-weight', 'normal');
    $('#recipes-type3').css('font-weight', 'normal');
    $('#recipes-type4').css('font-weight', 'normal');
    $('#recipes-type1').css('font-weight', 'normal');
    fillFilteredRecipes('Snack');
});

function fillFilteredRecipes(type) {
    let num = 0;
    $('#recipes-site-content').empty();
    recipes.forEach((value) => {
        if (type == value.type) {
            if (num % 3 == 0) {
                $('#recipes-site-content').append($('<div>')
                    .attr('class', 'row recipe-card')
                )
            }
            $('#recipes-site-content .recipe-card').last().append($('<div>')
                .attr('class', 'col-md-4 align-items-center')
                .append($('<div>')
                    .attr('class', 'card recipe-box')
                    .append($('<button>')
                        .attr('class', 'card-link btn recipe-card-link')
                        .attr('data-toggle', 'modal')
                        .attr('data-target', '#open-recipe-modal')
                        .attr('id', value.name)
                        .text(value.name)
                    )
                )
            )
            num++;
        }
    })
}

//open-recipe
$(document).on('click', '.recipe-card-link', function () {
    let openRecipe = {};
    recipes.forEach((value) => {
        if (value.name == $(this).text()) {
            openRecipe.name = value.name;
            openRecipe.type = value.type;
            openRecipe.protein = Math.round(value.protein);
            openRecipe.carbs = Math.round(value.carbs);
            openRecipe.sugar = Math.round(value.sugar);
            openRecipe.fiber = Math.round(value.fiber);
            openRecipe.fat = Math.round(value.fat);
            openRecipe.water = Math.round(value.water);
            openRecipe.calories = openRecipe.protein * 4 + openRecipe.carbs * 4 + openRecipe.fat * 9;
            openRecipe.ingredients = [];
            value.ingredients.split("#!#").forEach((element) => {
                openRecipe.ingredients.push(element.split("<>"));
            })
            openRecipe.description=value.description.split("#!#");
        }
    })
    $("#open-recipe-name").text(openRecipe.name);
    $("#open-recipe-type").text(openRecipe.type);
    $("#open-recipe-cal").text(openRecipe.calories);
    $("#open-recipe-protein").text(openRecipe.protein);
    $("#open-recipe-carbs").text(openRecipe.carbs);
    $("#open-recipe-sugar").text(openRecipe.sugar);
    $("#open-recipe-fiber").text(openRecipe.fiber);
    $("#open-recipe-fat").text(openRecipe.fat);
    $("#open-recipe-water").text(openRecipe.water);
    $('#open-recipe-tbody').empty();
    openRecipe.ingredients.forEach((value)=>{
        $('#open-recipe-tbody').append($('<tr>')
            .append($('<td>')
                .text(value[0])
            )
            .append($('<td>')
                .text(value[1]+" "+value[2])
            )
        )
    })
    $('#open-recipe-steps').empty();
    openRecipe.description.forEach((value)=>{
        $('#open-recipe-steps').append($('<li>')
            .text(value)
        )
    })

})

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
        nutinNewRecipe.name = $('#new-recipe-name').val().toLowerCase().trim();
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

            recipesInputEmpty();
            fillAllRecipes();

            $('#new-recipe-modal').modal('hide');
        }
        else {
            alert("A recipe in this name is already in the database Please rename or cancel the process.");
        }
    }
});

//cancel adding new recipe
$(document).on('click', '.add-new-recipe-close', function () {
    recipesInputEmpty();
    isNewRecipe = false;
});

function recipesInputEmpty() {
    $('#new-recipe-name').val("");
    $('#recipe-type-select').prop('selectedIndex', 0);
    $("#ingredient-table-tbody").empty();
    $("#steps-list").empty();
}

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

//fill food select with the options
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

        fillFoodSelect();
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
    if (!isNewRecipe) {
        fillFoodSelect();
    }
    else {
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

        fillDrinkSelect();
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
    if (!isNewRecipe) {
        fillDrinkSelect();
    }
    else {
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
