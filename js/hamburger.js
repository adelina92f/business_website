$(function(){
    let $nav = $('.navigation');
    let $toggleButton = $('.hamburger');
    $toggleButton.on('click', function(e){
        $toggleButton.toggleClass('is-active');
        $nav.toggleClass('open')
    })
})

$(function(){
    let $topHolder = $('.top-holder');
    let $toggleHamburger = $('.top-hamburger');
    $toggleHamburger.on('click', function(e){
        $toggleHamburger.toggleClass('is-active');
        $topHolder.toggleClass('active')
    })
})


