/*var logInObj ={
    isloggedIn: false,
    isLoggedInListener: function(bool){},
    set isLoggedInSet(bool){
        this.isloggedIn = bool;
        this.isLoggedInListener(bool);
    },
    registerListener: function(listener){
        this.isLoggedInListener = listener;
    }
}

logInObj.registerListener(function(bool){
    $('')
})*/

$(document).on('click', '#join-now', function(){
    //isloggedIn =true;
    $('.logged-in').css('display','inline');
    $('.logged-out').css('display','none');
})