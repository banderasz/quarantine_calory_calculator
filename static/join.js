var joinName;

$(document).on('change', '#new-household-id', function () {
    if (this.checked) {
        $("#household-id").prop('readonly', true); 
        $("#household-id").val( Math.random().toString(36).substr(2, 9));    
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
        window.location.href = './profile.html'
    }
});

function capitalize() {
    var split = joinName.split(' ');
    for (var i = 0, len = split.length; i < len; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
    }
    joinName = split.join(' ');
}