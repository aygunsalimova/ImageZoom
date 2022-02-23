$('.image').click(function() {
    $(this).toggleClass('main');
    $(this).toggleClass('image')

})



$(function() {

    $('.image').css('width', '90px');
    $('.image').css('height', '110px');
    $('.image').css('padding-left', '10px');
    $('.image').css('padding-right', '10px');
    $('.image').css('cursor', 'pointer');

    $('.main').css('width', '155px');
    $('.main').css('height', '207px');
    $('.main').css('padding-bottom', '10px');

    $('.secondRow').css('display', 'flex');
    $('.secondRow').css('justify-content', 'center');

    $('.firstRow').css('text-align', 'center');

    $('.cont').css('margin', 'auto');
    $('.cont').css('width', '800px');

})
$(function() {


    $('.image').click(function() {
        let x = $(this).attr('src');

        $('.main'), attr('src', x);
    })


    // $('.main').click(function() {
    //     $(this).addClass('.image')
    // })
})