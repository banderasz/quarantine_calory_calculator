var joinName;
var joinEmail;
var joinGender;
var joinWeight;
var joinHeight;
var joinActivity;
var joinHousehold;
var joinPass;

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

$(document).on('click', '#join-now-btn', function () {
    let allAreFilled = true;
    $('#join-now-form').find('input').filter('[required]').each(function () {
        if (!$(this).val()) {
            allAreFilled = false;
        }
    })

    $('#join-now-form').find('select').filter('[required]').each(function () {
        if (!$(this).val()) {
            allAreFilled = false;
        }
    })

    if (allAreFilled) {
        joinName = $('#person-name').val();
        capitalize();
        joinEmail = $('#email-address').val();
        joinGender = $('#gender option:selected').text();
        joinWeight = $('#weight').val();
        joinHeight = $('#height').val();
        joinActivity = $('#activity-level option:selected').text();
        joinHousehold = $('#household-id').val();
        joinPass = $('#password').val();
        alert('your registration is succesful')
        $('#person-name').val('');
        $('#email-address').val('');
        $('#gender').prop('selectedIndex', 0);
        $('#weight').val('');
        $('#height').val('');
        $('#activity-level').prop('selectedIndex', 0);
        $('#household-id').val('');
        $('#new-household-id').prop('checked', true);
        $('#password').val('');
    }
});

function capitalize() {
    var split = joinName.split(' ');
    for (var i = 0, len = split.length; i < len; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
    }
    joinName = split.join(' ');
}