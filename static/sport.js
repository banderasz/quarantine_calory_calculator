var inputValueNameSport;
var calAmountSport;
var calSumSport = 0;
var durationSum = 0;

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
    else{
        $('#total-row-sport').css('color', 'black');
        $('.row.alert-row-sport').hide();
    }
});

$(document).on('click', '.th-add-new-sport-btn', function () {
    $('#sport-tbody').append($('<tr>')
        .attr('id', 'new-td-row-sport')
        .append($('<td>')
            .attr('colspan', '2')
            .append($('<input>')
                .attr('class', 'form-control form-control-sm')
                .attr('placeholder', 'Sport name')
                .attr('type', 'text')
                .attr('id', 'input-value-name')
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
    $(".th-add-new-sport").hide();
    $(".th-save-cancel-sport").show();
})

$(document).on('click', '.th-save-sport', function () {
    if (!$('#input-value-name').val() && !$('#input-value-mins').val()) {
        alert('The name and duration box is empty.');
    }
    else if (!$('#input-value-name').val() && $('#input-value-mins').val()) {
        alert('The name box is empty.');
    }
    else if ($('#input-value-name').val() && !$('#input-value-mins').val()) {
        alert('The duration box is empty.');
    }
    else {
        inputValueNameSport = $('#input-value-name').val();
        var duration = $('#input-value-mins').val();
        calAmountSport = duration/60*350;
        $('#sport-tbody').find('#new-td-row-sport').remove();
        $('#sport-tbody').append($('<tr>')
            .append($('<td>')
                .text(inputValueNameSport)
            )
            .append($('<td>')
                .text(calAmountSport)
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
        else{
            $('#total-row-sport').css('color', 'black');
            $('.row.alert-row-sport').hide();
        }
    }
})

$(document).on('click', '.th-cancel-sport', function () {
    $('#sport-tbody').find('#new-td-row-sport').remove();
    $(".th-add-new-sport").show();
    $(".th-save-cancel-sport").hide();
})