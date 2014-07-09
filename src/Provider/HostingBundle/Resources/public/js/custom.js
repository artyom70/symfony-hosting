$(document).ready(function(){
    function sliderChanger(){
        var images = $('.slider > .sliderThumb > a.active').next('a').length;
        if(images == 0) {
            $('.slider > .sliderThumb > a').first().addClass('active');
            $('.slider > .sliderThumb > a').last().removeAttr('class');
            $('.sliderWrapper > a').first().addClass('active');
            $('.sliderWrapper > a').last().removeAttr('class');
        }
        else {
            $('.slider > .sliderThumb > a.active').next().addClass('active');
            $('.slider > .sliderThumb > a.active').prev().removeAttr('class');
            $('.sliderWrapper > a.active').next().addClass('active');
            $('.sliderWrapper > a.active').prev().removeAttr('class');
        }
    }
    $('.slider > .sliderThumb > a').on('click',function(){
        clearInterval(timer);
		console.log($(this));
        $(this).parent().find('a').removeAttr('class');
        $(this).addClass('active');
        var imageLink = $(this).context.rel;
        $('.sliderWrapper > a').removeAttr('class');
        $('.sliderWrapper > a[rel='+ imageLink +']').addClass('active');
		timer = setInterval(sliderChanger, 3000);
		
    })
    var timer = setInterval(sliderChanger, 3000);
})