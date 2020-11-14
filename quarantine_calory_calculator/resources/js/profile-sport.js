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