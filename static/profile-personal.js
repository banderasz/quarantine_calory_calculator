var personalName = "Gipsz Jakab";
var personalEmail = "gipszjakab@gmail.com";
var personalGender = "Man";
var personalWeight = 70;
var personalHeight = 185;
var personalActivity = "Moderate";
var personalHousehold = "123ad560";
var isDataEdit;


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