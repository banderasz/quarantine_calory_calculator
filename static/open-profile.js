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