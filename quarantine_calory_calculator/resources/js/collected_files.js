var joinName;
var joinEmail;
var joinGender;
var joinWeight;
var joinHeight;
var joinActivity;
var joinHousehold;
var joinPass;

$ = window.$;

$(document).on('change', '#new-household-id', function () {
    if (this.checked) {
        $("#household-id").prop('readonly', true);
        $("#household-id").val(Math.random().toString(36).substr(2, 9));
    }
    else {
        $("#household-id").prop('readonly', false);
        $("#household-id").val('');
    }
});

// $(document).on('click', '#join-now-btn', function () {
//     let allAreFilled = true;
//     $('#join-now-form').find('input').filter('[required]').each(function () {
//         if (!$(this).val()) {
//             allAreFilled = false;
//         }
//     })
//
//     $('#join-now-form').find('select').filter('[required]').each(function () {
//         if (!$(this).val()) {
//             allAreFilled = false;
//         }
//     })
//
//     if (allAreFilled) {
//         joinName = $('#person-name').val();
//         capitalize();
//         joinEmail = $('#email-address').val();
//         joinGender = $('#gender option:selected').text();
//         joinWeight = $('#weight').val();
//         joinHeight = $('#height').val();
//         joinActivity = $('#activity-level option:selected').text();
//         joinHousehold = $('#household-id').val();
//         joinPass = $('#password').val();
//         // alert('your registration is succesful')
//         $('#person-name').val('');
//         $('#email-address').val('');
//         $('#gender').prop('selectedIndex', 0);
//         $('#weight').val('');
//         $('#height').val('');
//         $('#activity-level').prop('selectedIndex', 0);
//         $('#household-id').val('');
//         $('#new-household-id').prop('checked', true);
//         $('#password').val('');
//     }
// });

// function capitalize() {
//     var split = joinName.split(' ');
//     for (var i = 0, len = split.length; i < len; i++) {
//         split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
//     }
//     joinName = split.join(' ');
// }


//Global arrays
var foods = []; //{name, protein, carbs, sugar, fiber, fat, water}
var drinks = []; //{name, protein, carbs, sugar, fiber, fat, water}
var recipes = []; //{name, type, protein, carbs, sugar, fiber, fat, water, ingredients, description}
var sports = []; // ez kell ha van idő {name, calories}
var isNutin;
var isNewRecipe = false;

//Nutritien intake site
var nutinCalSum;
var nutinProteinSum;
var nutinCarbsSum;
var nutinSugarSum;
var nutinFiberSum;
var nutinFatSum;
var nutinWaterSum;

var nutinInputValueName;
var nutinInputValueNum;

var nutinIs = ["recipe", "food", "drink"];
var nutinChoosed;

var nutinCalAmount;
var nutinProteinAmount;
var nutinCarbsAmount;
var nutinSugarAmount;
var nutinFiberAmount;
var nutinFatAmount;
var nutinWaterAmount;

var newNutin = {};

var todayNutin = []; // aznapi kajabevitel {name, protein, carbs, sugar, fiber, fat, water}

var nutinHistory1 = 200; //kell
var nutinHistory2 = 300; //kell
var nutinHistory3 = 400; //kell
var nutinHistory4 = 500; //kell
var nutinHistory5 = 200; //kell
var nutinHistory6 = 300; //kell
var nutinHistory7 = 400; //kell

var nutinIdealCal = 2000; //számolni kell
var nutinIdealWater = 2000; //számolni kell

//Household site
var houseIsFood;

var houseCalAmount;
var houseProteinAmount;
var houseCarbsAmount;
var houseSugarAmount;
var houseFiberAmount;
var houseFatAmount;
let houseAmount;

var houseInputValueName;
var houseInputValueNum;

var houseCalSum;
var houseProteinSum;
var houseCarbsSum;
var houseSugarSum;
var houseFiberSum;
var houseFatSum;

var houseSelected = {};

var householdStock = []; //kell {name, carbs, fat, fiber, protein, amount, unit}

var houseMinCal = 20000; //kell számolni

//Sport site
var sportCalSum;
var sportDurationSum;

var sportSelected = {};

var todaySport = []; //kell ha van idő {name, calories, duration}

var sportHistory1 = 200;
var sportHistory2 = 300;
var sportHistory3 = 400;
var sportHistory4 = 500;
var sportHistory5 = 200;
var sportHistory6 = 300;
var sportHistory7 = 400;

var sportIdealCal = 500; //kell ha van idő (számolni)
var sportIdealDuration = 30; //kell ha van idő (számolni)

//Personal site //Ezek db-ből
var personalName = "Gipsz Jakab"; //kell
var personalEmail = "gipszjakab@gmail.com"; //kell
var personalGender = "Man"; //kell
var personalWeight = 70; //kell
var personalHeight = 185; //kell
var personalActivity = "Moderate"; //kell
var personalHousehold = "123ad560"; //kell

var isDataEdit;

$(document).ready(function () {
    $('#nutin-nav').css('font-weight', '500');

    //hide-show elements
    $(".th-save-cancel-nutin").hide();
    $('.row.alert-row-house').hide();
    $('.row.alert-row-sport').hide();
    $(".nutritien-intake").show();
    $(".household-stock").hide();
    $(".sport").hide();
    $(".personal").hide();

    //fill sites
    nutinSiteFill();
    houseSiteFill();
    sportSiteFill();

    compareTotalAndIdealNutin();

    isNutin = true;
});

function nutinSiteFill() {
    nutinCalSum = 0;
    nutinCarbsSum = 0;
    nutinFatSum = 0;
    nutinFiberSum = 0;
    nutinProteinSum = 0;
    nutinSugarSum = 0;
    nutinWaterSum = 0;

    todayNutin.forEach((value) => {
        $('#nutritien-intake-tbody').append($('<tr>')
            .append($('<td>')
                .text(value.name)
            )
            .append($('<td>')
                .text(value.calories)
                .attr('class', 'td-center td-cal-nutin')
            )
            .append($('<td>')
                .text(value.protein)
                .attr('class', 'td-center td-protein-nutin')
            )
            .append($('<td>')
                .text(value.carbs)
                .attr('class', 'td-center td-carbs-nutin')
            )
            .append($('<td>')
                .text(value.sugar)
                .attr('class', 'td-center td-sugar-nutin')
            )
            .append($('<td>')
                .text(value.fiber)
                .attr('class', 'td-center td-fiber-nutin')
            )
            .append($('<td>')
                .text(value.fat)
                .attr('class', 'td-center td-fat-nutin')
            )
            .append($('<td>')
                .text(value.water)
                .attr('class', 'td-center td-water-nutin')
            )

        );
        nutinCalSum += value.calories;
        nutinCarbsSum += value.carbs;
        nutinFatSum += value.fat;
        nutinFiberSum += value.fiber;
        nutinProteinSum += value.protein;
        nutinSugarSum += value.sugar;
        nutinWaterSum += value.water;
    });

    //fill total row
    $('#total-cal-nutin').text(nutinCalSum);
    $('#total-protein-nutin').text(nutinProteinSum);
    $('#total-carbs-nutin').text(nutinCarbsSum);
    $('#total-sugar-nutin').text(nutinSugarSum);
    $('#total-fiber-nutin').text(nutinFiberSum);
    $('#total-fat-nutin').text(nutinFatSum);
    $('#total-water-nutin').text(nutinWaterSum);

    //fill ideal row
    $('#ideal-cal-nutin').text(nutinIdealCal);
    $('#ideal-water-nutin').text(nutinIdealWater);

    $('#td-history-cal-1-nutin').text(nutinHistory1);
    $('#td-history-cal-2-nutin').text(nutinHistory2);
    $('#td-history-cal-3-nutin').text(nutinHistory3);
    $('#td-history-cal-4-nutin').text(nutinHistory4);
    $('#td-history-cal-5-nutin').text(nutinHistory5);
    $('#td-history-cal-6-nutin').text(nutinHistory6);
    $('#td-history-cal-7-nutin').text(nutinHistory7);
}

function compareTotalAndIdealNutin(){
    //compare ideal and total
    if (nutinCalSum > nutinIdealCal) {
        $('#total-cal-nutin').css('color', 'red');
        $('#total-protein-nutin').css('color', 'red');
        $('#total-carbs-nutin').css('color', 'red');
        $('#total-sugar-nutin').css('color', 'red');
        $('#total-fiber-nutin').css('color', 'red');
        $('#total-fat-nutin').css('color', 'red');
        $('.row.alert-row-nutin').show();
    }
    else {
        $('#total-cal-nutin').css('color', 'black');
        $('#total-protein-nutin').css('color', 'black');
        $('#total-carbs-nutin').css('color', 'black');
        $('#total-sugar-nutin').css('color', 'black');
        $('#total-fiber-nutin').css('color', 'black');
        $('#total-fat-nutin').css('color', 'black');
        $('.row.alert-row-nutin').hide();
    }

    if (nutinWaterSum < nutinIdealWater) {
        $('#total-water-nutin').css('color', 'red');
        $('.row.alert-row-nutin-water').show();
    }
    else {
        $('#total-water-nutin').css('color', 'black');
        $('.row.alert-row-nutin-water').hide();
    }
}

function houseSiteFill() {
    houseCalSum = 0;
    houseCarbsSum = 0;
    houseFatSum = 0;
    houseFiberSum = 0;
    houseProteinSum = 0;
    houseSugarSum = 0;

    householdStock.forEach((value) => {
        $('#household-stock-tbody').append($('<tr>')
            .attr('id', value.name)
            .append($('<td>')
                .text(value.name)
                .attr('class', 'td-name-house')
            )
            .append($('<td>')
                .text(value.protein*4+value.carbs*4+value.fat*9)
                .attr('class', 'td-center td-cal-house')
            )
            .append($('<td>')
                .text(value.protein)
                .attr('class', 'td-center td-protein-house')
            )
            .append($('<td>')
                .text(value.carbs)
                .attr('class', 'td-center td-carbs-house')
            )
            .append($('<td>')
                .text(value.sugar)
                .attr('class', 'td-center td-sugar-house')
            )
            .append($('<td>')
                .text(value.fiber)
                .attr('class', 'td-center td-fiber-house')
            )
            .append($('<td>')
                .text(value.fat)
                .attr('class', 'td-center td-fat-house')
            )
            .append($('<td>')
                .text(value.amount)
                .attr('class', 'td-right td-amount-house')
            )
            .append($('<td>')
                .text(value.unit)
                .attr('class', 'td-left td-unit-house')
            )
        );
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

    //fill ideal row
    $('#minimum-cal-house').text(houseMinCal);

    //buttons to hide
    $(".th-save-cancel-house").hide();
}

function compareTotalAndMinimumHouse(){
    //compare ideal and total
    if (houseCalSum < houseMinCal) {
        $('#total-row-house').css('color', 'red');
        $('.row.alert-row-house').show();
    }
    else {
        $('#total-row-house').css('color', 'black');
        $('.row.alert-row-house').hide();
    }
}

function sportSiteFill() {
    sportCalSum = 0;
    sportDurationSum = 0;
    todaySport.forEach((value) => {
        $('#sport-tbody').append($('<tr>')
            .append($('<td>')
                .text(value.name)
            )
            .append($('<td>')
                .text(value.calories)
                .attr('class', 'td-center td-cal-sport')
            )
            .append($('<td>')
                .text(value.duration)
                .attr('class', 'td-center td-duration-sport')
            )
        );
        sportCalSum += value.calories;
        sportDurationSum += value.duration;
    });
    $('#total-cal-sport').text(sportCalSum);
    $('#total-duration-sport').text(sportDurationSum);

    $('#ideal-cal-sport').text(sportIdealCal);
    $('#ideal-duration-sport').text(sportIdealDuration);

    $('#td-history-cal-1-sport').text(sportHistory1);
    $('#td-history-cal-2-sport').text(sportHistory2);
    $('#td-history-cal-3-sport').text(sportHistory3);
    $('#td-history-cal-4-sport').text(sportHistory4);
    $('#td-history-cal-5-sport').text(sportHistory5);
    $('#td-history-cal-6-sport').text(sportHistory6);
    $('#td-history-cal-7-sport').text(sportHistory7);
}

function compareTotalAndIdealSport(){
    //compare ideal and total
    if (sportCalSum < sportIdealCal || sportDurationSum < sportIdealDuration) {
        $('#total-row-sport').css('color', 'red');
        $('.row.alert-row-sport').show();
    }
    else {
        $('#total-row-sport').css('color', 'black');
        $('.row.alert-row-sport').hide();
    }
}

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

//navigation - personal site
$(document).on('click', '#personal-nav', function () {
    $('#personal-nav').css('font-weight', '500');
    $('#weight-nav').css('font-weight', 'normal');
    $('#house-nav').css('font-weight', 'normal');
    $('#sport-nav').css('font-weight', 'normal');
    $('#nutin-nav').css('font-weight', 'normal');
    $(".nutritien-intake").hide();
    $(".household-stock").hide();
    $(".sport").hide();
    $(".personal").show();
    $('.row.alert-row-nutin').hide();
    $('.row.alert-row-house').hide();
    $('.row.alert-row-sport').hide();

    //fill data
    fillData();

    //hide-show elements
    viewAfterPasswordEdit();
    viewMode();

    //buttons
    $('#personal-edit').show();
    $('#personal-save-cancel').hide();
});


//edit data button
$(document).on('click', '#personal-edit-btn', function () {
    //hide-show
    editMode();

    //settings
    $('#personal-name-edit-input').attr('value', personalName);
    $('#personal-email-edit-input').attr('value', personalEmail);
    $('#personal-weight-edit-input').attr('value', personalWeight);
    $('#personal-height-edit-input').attr('value', personalHeight);
    $('#gender option[value="' + personalGender + '"]').attr('selected', 'selected');
    $('#activity-level option[value="' + personalActivity + '"]').attr('selected', 'selected');
    $('#personal-household-edit-input').attr('value', personalHousehold);

    //buttons
    $('#personal-edit').hide();
    $('#personal-save-cancel').show();
    isDataEdit = true;
})

//edit password button
$(document).on('click', '#personal-edit-password-btn', function () {
    //hide-show
    editPasswordMode();

    //buttons
    $('#personal-edit').hide();
    $('#personal-save-cancel').show();
    isDataEdit = false;
})

//edited data save button
$(document).on('click', '#personal-save-btn', function () {

    if (isDataEdit) {
        //get changes
        personalName = $('#personal-name-edit-input').val();
        capitalize();
        personalWeight = parseFloat($('#personal-weight-edit-input').val());
        personalHeight = parseFloat($('#personal-height-edit-input').val());
        personalGender = $('#gender option:selected').text();
        personalActivity = $('#activity-level option:selected').text();
        personalHousehold = $('#personal-household-edit-input').val();

        //fill data
        fillData();
    }
    else{
        viewAfterPasswordEdit();
    }

    //hide-show
    viewMode();

    //buttons
    $('#personal-edit').show();
    $('#personal-save-cancel').hide();
})

//cancel edit
$(document).on('click', '#personal-cancel-btn', function () {
    if(!isDataEdit){
        viewAfterPasswordEdit();
    }

    //hide-show
    viewMode();

    //buttons
    $('#personal-edit').show();
    $('#personal-save-cancel').hide();
})

//create new household
$(document).on('change', '#personal-new-household-id', function () {
    if (this.checked) {
        $("#personal-household-edit-input").prop('readonly', true);
        $("#personal-household-edit-input").attr('value', Math.random().toString(36).substr(2, 9));
    }
    else {
        $("#personal-household-edit-input").prop('readonly', false);
        $('#personal-household-edit-input').attr('value', personalHousehold);
    }
});

function fillData() {
    $('#personal-name-span').text(personalName);
    $('#personal-email-span').text(personalEmail);
    $('#personal-gender-span').text(personalGender);
    $('#personal-weight-span').text(personalWeight + ' kg');
    $('#personal-height-span').text(personalHeight + ' cm');
    $('#personal-activity-span').text(personalActivity);
    $('#personal-household-span').text('#' + personalHousehold);
}

function editMode() {
    $('#personal-name').hide();
    $('#personal-name-edit').show();
    $('#personal-email').hide();
    $('#personal-email-edit').show();
    $('#personal-gender').hide();
    $('#personal-gender-edit').show();
    $('#personal-weight').hide();
    $('#personal-weight-edit').show();
    $('#personal-height').hide();
    $('#personal-height-edit').show();
    $('#personal-activity').hide();
    $('#personal-activity-edit').show();
    $('#personal-household').hide();
    $('#personal-household-edit').show();
}

function editPasswordMode() {
    $('.personal-row').hide();
    $('.password-row').show();
}

function viewAfterPasswordEdit() {
    $('.personal-row').show();
    $('.password-row').hide();
}

function viewMode() {
    $('#personal-name').show();
    $('#personal-name-edit').hide();
    $('#personal-email').show();
    $('#personal-email-edit').hide();
    $('#personal-gender').show();
    $('#personal-gender-edit').hide();
    $('#personal-weight').show();
    $('#personal-weight-edit').hide();
    $('#personal-height').show();
    $('#personal-height-edit').hide();
    $('#personal-activity').show();
    $('#personal-activity-edit').hide();
    $('#personal-household').show();
    $('#personal-household-edit').hide();
}

function capitalize() {
    var split = personalName.split(' ');
    for (var i = 0, len = split.length; i < len; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
    }
    personalName = split.join(' ');
}

//navigation - sport site
$(document).on('click', '#sport-nav', function () {
    cancelNewSport();

    //nav
    $('#sport-nav').css('font-weight', '500');
    $('#weight-nav').css('font-weight', 'normal');
    $('#house-nav').css('font-weight', 'normal');
    $('#nutin-nav').css('font-weight', 'normal');
    $('#personal-nav').css('font-weight', 'normal');

    //sites hide&show
    $(".nutritien-intake").hide();
    $(".household-stock").hide();
    $(".sport").show();
    $(".personal").hide();

    //alerts
    $('.row.alert-row-nutin').hide();
    $('.row.alert-row-nutin-water').hide();
    $('.row.alert-row-house').hide();

    //buttons
    $(".th-add-new-sport").show();
    $(".th-save-cancel-sport").hide();

    //compare
    compareTotalAndIdealSport();
});

//add new sport activity
$(document).on('click', '.th-add-new-sport-btn', function () {
    $('#sport-tbody').append($('<tr>')
        .attr('id', 'tr-new-sport')
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<select>')
                .attr('class', 'form-control form-control-sm')
                .attr('id', 'sport-select')
                .prop('required', true)
            )
        )
        .append($('<td>')
            .append($('<div>')
                .attr('class', 'input-group input-group-sm')
                .append($('<input>')
                    .attr('type', 'number')
                    .attr('class', 'form-control')
                    .attr('placeholder', 'Duration in mins')
                    .attr('id', 'input-value-mins')
                    .prop('required', true)
                )
                .append($('<div>')
                    .attr('class', 'input-group-append')
                    .append($('<span>')
                        .attr('class', 'input-group-text')
                        .text('mins')
                    )
                )
            )
        )
    );
    fillSportSelect();
    $(".th-add-new-sport").hide();
    $(".th-save-cancel-sport").show();
})

//when select add new sport
$(document).on('change', '#sport-select', function () {
    if ($(this).children(":selected").attr("id") == 'add-new-sport-option') {
        $('#sport-select option[value=""]').attr('selected', 'selected');
        $('#new-sport-modal').modal('show');
    }
})

//save new sport activity
$(document).on('click', '.th-save-sport', function () {
    if (!$('#sport-select option:selected').val() || !$('#input-value-mins').val()) {
        alert("Fill all input fields.")
    }
    else {
        let sportInputValueName = $('#sport-select option:selected').text();
        sports.forEach((value) => {
            if (value.name == sportInputValueName) {
                sportSelected.name = value.name;
                sportSelected.calories = value.calories;
            }
        });
        let sportDuration = parseFloat($('#input-value-mins').val());
        $('#sport-tbody').find('#tr-new-sport').remove();
        let sportCalAmount = sportDuration / 60 * sportSelected.calories;
        $('#sport-tbody').append($('<tr>')
            .append($('<td>')
                .text(sportInputValueName)
            )
            .append($('<td>')
                .text(sportCalAmount)
                .attr('class', 'td-center td-cal-sport')
            )
            .append($('<td>')
                .text(sportDuration)
                .attr('class', 'td-center td-duration-sport')
            )
        );
        let sportNewToday = {};
        sportNewToday.name = sportInputValueName;
        sportNewToday.calories = sportCalAmount;
        sportNewToday.duration = sportDuration;

        todaySport.push(sportNewToday);

        //count sum
        sportCalSum += sportCalAmount;
        $('#total-cal-sport').html(sportCalSum);
        sportDurationSum += sportDuration;
        $('#total-duration').html(sportDurationSum);

        //buttons
        $(".th-add-new-sport").show();
        $(".th-save-cancel-sport").hide();

        compareTotalAndIdealSport();
    }
})

//cancel adding new sport activity
$(document).on('click', '.th-cancel-sport', function () {
    cancelNewSport();
})

//close adding new sport activity today
function cancelNewSport(){
    $('#tr-new-sport').remove();
    $(".th-add-new-sport").show();
    $(".th-save-cancel-sport").hide();
}

//save new sport activity
$(document).on('click', '#add-new-sport-save', function () {
    if (!$('#new-sport-name').val() || !$('#new-sport-cals').val()) {
        alert("You didn't fill every box.")
    }
    else {
        let sportIsNotExists = true;
        let newSport = {};
        newSport.name = $('#new-sport-name').val().toLowerCase();
        newSport.calories = parseFloat($('#new-sport-cals').val());
        sports.forEach((value) => {
            if (value.name.toLowerCase() == newSport.name) {
                sportIsNotExists = false;
            }
        })
        if (sportIsNotExists) {
            newSport.name = newSport.name.charAt(0).toUpperCase() + newSport.name.slice(1);
            sports.push(newSport);
        }
        else {
            alert("This sport is already in the database.")
        }
        fillSportSelect();
        $('#new-sport-modal').modal('hide');
        $('#new-sport-name').val('');
        $('#new-sport-cals').val('');
    }
})

//cancel adding new sport activity
$(document).on('click', '.add-new-sport-close', function () {
    $('#new-sport-name').val('');
    $('#new-sport-cals').val('');
    fillSportSelect();
})

function fillSportSelect() {
    $('#sport-select option').each(function () {
        $(this).remove();
    })
    $('#sport-select').append('<option value="" disabled selected hidden>Select the sport</option>')

    sports.forEach((value) => {
        $("#sport-select").append($('<option>')
            .attr('value', value.name)
            .text(value.name)
        )
    })
    $("#sport-select").append($('<option>')
        .attr('id', 'add-new-sport-option')
        .text('Add new sport')
    )
}

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


var lastWidth = $(window).width();
var navText = document.getElementsByClassName("navbar-text hide");
$(window).ready(function(){
    if (lastWidth < 992) {
        for (let i = 0; i < navText.length; i++) {
            navText.item(i).style.display = "none";
        }
    }
    else {
        for (var i = 0; i < navText.length; i++) {
            navText.item(i).style.display = "inline";
        }
    }
})
$(window).resize(function () {
    if ($(window).width() != lastWidth) {
        lastWidth = $(window).width();
        if (lastWidth < 992) {
            for (let i = 0; i < navText.length; i++) {
                navText.item(i).style.display = "none";
            }
        }
        else {
            for (var i = 0; i < navText.length; i++) {
                navText.item(i).style.display = "inline";
            }
        }
    }
})

