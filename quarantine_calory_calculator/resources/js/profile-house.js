//open householdstock site
$(document).on('click', '#house-nav', function () {
    //cancel previous not completed edit
    cancelNewHouse();

    //nav
    $('#house-nav').css('font-weight', '500');
    $('#weight-nav').css('font-weight', 'normal');
    $('#nutin-nav').css('font-weight', 'normal');
    $('#sport-nav').css('font-weight', 'normal');
    $('#personal-nav').css('font-weight', 'normal');

    //sites to hide & show
    $(".nutritien-intake").hide();
    $(".household-stock").show();
    $(".sport").hide();
    $(".personal").hide();

    //alerts
    $('.row.alert-row-nutin').hide();
    $('.row.alert-row-nutin-water').hide();
    $('.row.alert-row-sport').hide();

    compareTotalAndMinimumHouse();

    isNutin = false;

    //count sums
    countSumHouse();
});

function countSumHouse(){
    houseCalSum = 0;
    houseCarbsSum = 0;
    houseFatSum = 0;
    houseFiberSum = 0;
    houseProteinSum = 0;
    houseSugarSum = 0;

    householdStock.forEach((value) => {
        houseCalSum += value.calories;
        houseCarbsSum += value.carbs;
        houseFatSum += value.fat;
        houseFiberSum += value.fiber;
        houseProteinSum += value.protein;
        houseSugarSum += value.sugar;
    });

    //fill total row
    $('#total-cal-house').text(houseCalSum);
    $('#total-protein-house').text(houseProteinSum);
    $('#total-carbs-house').text(houseCarbsSum);
    $('#total-sugar-house').text(houseSugarSum);
    $('#total-fiber-house').text(houseFiberSum);
    $('#total-fat-house').text(houseFatSum);
}

//new element to the householdstock
$(document).on('click', '.th-add-new-food-house', function () {
    houseIsFood = true;
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
    houseIsFood = false;
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
        let houseUnit;
        if (houseIsFood) {
            houseInputValueName = $('#food-select-house option:selected').text();
            houseAmount = parseFloat($('#input-value-g-house').val());
            houseSelected.amount = houseAmount;
            foods.forEach((value) => {
                if (value.name == houseInputValueName) {
                    houseSelected.name = value.name;
                    houseSelected.protein = value.protein;
                    houseSelected.carbs = value.carbs;
                    houseSelected.sugar = value.sugar;
                    houseSelected.fiber = value.fiber;
                    houseSelected.fat = value.fat;
                }
            })
            $('#food-tr-house').remove();
            houseUnit = "g";
        }
        else {
            houseInputValueName = $('#drink-select-house option:selected').text();
            houseAmount = $('#input-value-ml-house').val();
            drinks.forEach((value) => {
                if (value.name == houseInputValueName) {
                    houseSelected.name = value.name;
                    houseSelected.protein = value.protein;
                    houseSelected.carbs = value.carbs;
                    houseSelected.sugar = value.sugar;
                    houseSelected.fiber = value.fiber;
                    houseSelected.fat = value.fat;
                }
            })
            $('#drink-tr-house').remove();
            houseUnit = "ml";
        }
        houseSelected.unit = houseUnit;
        houseProteinAmount = Math.round(houseAmount / 100 * houseSelected.protein);
        houseCarbsAmount = Math.round(houseAmount / 100 * houseSelected.carbs);
        houseSugarAmount = Math.round(houseAmount / 100 * houseSelected.sugar);
        houseFiberAmount = Math.round(houseAmount / 100 * houseSelected.fiber);
        houseFatAmount = Math.round(houseAmount / 100 * houseSelected.fat);

        houseCalAmount = houseProteinAmount * 4 + houseCarbsAmount * 4 + houseFatAmount * 9;

        let houseIsExists = false;
        //if the nutritien is already in the household stock
        $("#household-stock-tbody tr").each(function () {
            if ($(this).attr("id") == houseInputValueName) {
                houseCalAmount += parseFloat($("#" + houseInputValueName + " .td-cal-house").text());
                $("#" + houseInputValueName + " .td-cal-house").text(houseCalAmount);
                houseProteinAmount += parseFloat($("#" + houseInputValueName + " .td-protein-house").text());
                $("#" + houseInputValueName + " .td-protein-house").text(houseProteinAmount);
                houseCarbsAmount += parseFloat($("#" + houseInputValueName + " .td-carbs-house").text());
                $("#" + houseInputValueName + " .td-carbs-house").text(houseCarbsAmount);
                houseFiberAmount += parseFloat($("#" + houseInputValueName + " .td-fiber-house").text());
                $("#" + houseInputValueName + " .td-fiber-house").text(houseFiberAmount);
                houseSugarAmount += parseFloat($("#" + houseInputValueName + " .td-sugar-house").text());
                $("#" + houseInputValueName + " .td-sugar-house").text(houseSugarAmount);
                houseFatAmount += parseFloat($("#" + houseInputValueName + " .td-fat-house").text());
                $("#" + houseInputValueName + " .td-fat-house").text(houseFatAmount);
                houseAmount += parseFloat($("#" + houseInputValueName + " .td-amount-house").text());
                $("#" + houseInputValueName + " .td-amount-house").text(houseAmount);
                householdStock.forEach((element)=>{
                    if(element.name == houseInputValueName){
                        element.protein = houseProteinAmount;
                        element.carbs = houseCarbsAmount;
                        element.sugar = houseSugarAmount;
                        element.fiber = houseFiberAmount;
                        element.fat = houseFatAmount;
                        element.amount = houseAmount;
                        element.unit = houseUnit;
                    }
                })
                houseIsExists = true;
            }
        })

        //if the nutritien is not in the household stock yet
        if (!houseIsExists) {
            $('#household-stock-tbody').append($('<tr>')
                .attr('id', houseInputValueName)
                .append($('<td>')
                    .text(houseInputValueName)
                    .attr('class', 'td-name-house')
                )
                .append($('<td>')
                    .text(houseCalAmount)
                    .attr('class', 'td-center td-cal-house')
                )
                .append($('<td>')
                    .text(houseProteinAmount)
                    .attr('class', 'td-center td-protein-house')
                )
                .append($('<td>')
                    .text(houseCarbsAmount)
                    .attr('class', 'td-center td-carbs-house')
                )
                .append($('<td>')
                    .text(houseSugarAmount)
                    .attr('class', 'td-center td-sugar-house')
                )
                .append($('<td>')
                    .text(houseFiberAmount)
                    .attr('class', 'td-center td-fiber-house')
                )
                .append($('<td>')
                    .text(houseFatAmount)
                    .attr('class', 'td-center td-fat-house')
                )
                .append($('<td>')
                    .text(houseAmount)
                    .attr('class', 'td-right td-amount-house')
                )
                .append($('<td>')
                    .text(houseUnit)
                    .attr('class', 'td-left td-unit-house')
                )

            );
            householdStock.push(houseSelected);
        }
        //count sum
        houseCalSum += houseCalAmount;
        houseCarbsSum += houseCarbsAmount;
        houseFatSum += houseFatAmount;
        houseFiberSum += houseFiberAmount;
        houseProteinSum += houseProteinAmount;
        houseSugarSum += houseSugarAmount;

        //fill total row
        $('#total-cal-house').text(houseCalSum);
        $('#total-protein-house').text(houseProteinSum);
        $('#total-carbs-house').text(houseCarbsSum);
        $('#total-sugar-house').text(houseSugarSum);
        $('#total-fiber-house').text(houseFiberSum);
        $('#total-fat-house').text(houseFatSum);

        //buttons
        $(".th-add-new-house").show();
        $(".th-save-cancel-house").hide();

        compareTotalAndMinimumHouse();
    }
})

$(document).on('click', '.th-cancel-house', function () {
    cancelNewHouse();
})

function cancelNewHouse(){
    $('#food-tr-house').remove();
    $('#drink-tr-house').remove();
    $(".th-add-new-house").show();
    $(".th-save-cancel-house").hide();
}