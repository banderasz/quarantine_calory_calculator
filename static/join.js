/*$("#new-household-id").change(function(){
    console.log("alma");
    if(this.checked){
        $("#household-id").prop('readonly', true);
    }
    else{
        $("#household-id").prop('readonly', false);
    }
});*/

$(document).on('change', '#new-household-id', function() {
    if(this.checked){
        $("#household-id").prop('readonly', true);
    }
    else{
        $("#household-id").prop('readonly', false);
    }
});