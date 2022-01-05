
import $ from "jquery";
alert('fuori');

$(document).ready(function(){
    alert('dentro');
    var mia = '<p>test</p>';
    
    $('body').bgcolor = 'green';
    $(this).css('background-color', 'red');
    $("body").css("background-color","blue");
    $(body).append('<p>test</p>');
    $('<p>test</p>').appendTo('body');
    
    
    var string = "<div></div><p>aaaaaaaaaaaa</p>";
    var $dom = $(string).appendTo('body'); // appendTo() is only for purposes of this demo
    $dom.filter("p").text('hello world!');
});