var calSumSport = 0;
var durationSum = 0;
var selectedSport = {};
var sports = [];

//navigation - sport site
$(document).on('click', '#sport-nav', function () {
    $('#sport-nav').css('font-weight', '500');
    $('#weight-nav').css('font-weight', 'normal');
    $('#house-nav').css('font-weight', 'normal');
    $('#nutin-nav').css('font-weight', 'normal');
    $('#personal-nav').css('font-weight', 'normal');
    $(".nutritien-intake").hide();
    $(".household-stock").hide();
    $(".sport").show();
    $(".personal").hide();
    $('.row.alert-row-nutin').hide();
    $('.row.alert-row-house').hide();
    $(".th-add-new-sport").show();
    $(".th-save-cancel-sport").hide();

    $(".td-cal-sport").each(function () {
        calSumSport += parseFloat($(this).text());
    });
    $('#total-cal-sport').html(calSumSport);
    $(".td-duration-sport").each(function () {
        durationSum += parseFloat($(this).text());
    });
    $('#total-duration').html(durationSum);
    if (parseFloat($('#total-cal-sport').text()) < parseFloat($('#ideal-cal-sport').text())) {
        $('#total-row-sport').css('color', 'red');
        $('.row.alert-row-sport').show();
    }
    else {
        $('#total-row-sport').css('color', 'black');
        $('.row.alert-row-sport').hide();
    }
});

//add new sport activity
$(document).on('click', '.th-add-new-sport-btn', function () {
    $('#sport-tbody').append($('<tr>')
        .attr('id', 'new-td-row-sport')
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<select>')
                .attr('class', 'form-control form-control-sm')
                .attr('placeholder', 'Sport name')
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

$(document).on('change', '#sport-select', function () {
    if ($(this).children(":selected").attr("id") == 'add-new-sport-option') {
        $('#sport-select option[value=""]').attr('selected', 'selected');
        $('#new-sport-modal').modal('show');
    }
})

//save new sport activity
$(document).on('click', '.th-save-sport', function () {
    var allOK = true;
    if (!$('#sport-select option:selected').val() || !$('#input-value-mins').val()) {
        allOK = false;
        alert("Fill all input fields.")
    }
    if (allOK) {
        var inputValueNameSport = $('#sport-select option:selected').text();
        console.log(inputValueNameSport);
        sports.forEach((value) => {
            console.log(value.name)
            if (value.name == inputValueNameSport) {
                selectedSport.name = value.name;
                console.log(selectedSport.name);
                selectedSport.calories = value.calories;
                console.log(selectedSport.calories);
            }
        })
        var duration = $('#input-value-mins').val();
        var calAmountSport = duration / 60 * selectedSport.calories;
        $('#sport-tbody').find('#new-td-row-sport').remove();
        $('#sport-tbody').append($('<tr>')
            .append($('<td>')
                .text(inputValueNameSport)
            )
            .append($('<td>')
                .text(calAmountSport.toFixed(0))
                .attr('class', 'td-center td-cal-sport')
            )
            .append($('<td>')
                .text(duration)
                .attr('class', 'td-center td-duration-sport')
            )
        );
        calSumSport += parseFloat($(".td-cal-sport").last().text());
        $('#total-cal-sport').html(calSumSport);
        durationSum += parseFloat($(".td-duration-sport").last().text());
        $('#total-duration').html(durationSum);

        $(".th-add-new-sport").show();
        $(".th-save-cancel-sport").hide();
        if (parseFloat($('#total-cal-sport').text()) < parseFloat($('#ideal-cal-sport').text())) {
            $('#total-row-sport').css('color', 'red');
            $('.row.alert-row-sport').show();
        }
        else {
            $('#total-row-sport').css('color', 'black');
            $('.row.alert-row-sport').hide();
        }
    }
})

//cancel adding new sport activity
$(document).on('click', '.th-cancel-sport', function () {
    $('#sport-tbody').find('#new-td-row-sport').remove();
    $(".th-add-new-sport").show();
    $(".th-save-cancel-sport").hide();
})

//save new sport activity
$(document).on('click', '#add-new-sport-save', function () {
    if (!$('#new-sport-name').val()) {
        alert("You didn't fill every box.")
    }
    else {
        var isNotExists = true;
        var newSport = {};
        newSport.name = $('#new-sport-name').val().toLowerCase();
        newSport.calories = parseFloat($('#new-sport-cals').val());
        sports.forEach((value) => {
            if (value.name.toLowerCase() == newSport.name) {
                isNotExists =false;
            }
        })
        if (isNotExists) {
            newSport.name = newSport.name.charAt(0).toUpperCase() + newSport.name.slice(1);
            sports.push(newSport);
        }
        else{
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