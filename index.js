// console.log( "hello" );
$(function(){
    $('#nameform').on('submit',function(event) {
        event.preventDefault();
        var name = $('#lname').val() + ' ' + $('#fname').val()
        $('.jumbotron').removeClass('d-none');
        $('.jumbotron h1').html(name);
    });
    $('.jumbotron').click(function(event) {
        
    })
});
