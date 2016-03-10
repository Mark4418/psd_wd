/**
 * Created by Mark on 10-03-2016.
 */
$(function(){
    $('ul li a').on('click', function(){
        $(this).parent().addClass('current').siblings().removeClass('current');
    });
});

// Toggling/switching/pushing the contentarea and mobile navigation into sight - and out again : Using toggleClass to add and remove the Class "active"

$(function(){
    $(".menu-link").click(function(){
        $("#menu").toggleClass("active");
        $(".container").toggleClass("active");
    });
});