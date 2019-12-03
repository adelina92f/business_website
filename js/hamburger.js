$(function(){
    let $nav = $('.navigation');
    let $toggleButton = $('.toggle-menu_2');
    $toggleButton.on('click', function(e){
        $toggleButton.toggleClass('is-active');
        $nav.toggleClass('open')
    })
})

$(function(){
    let $topHolder = $('.top-holder');
    let $toggleHamburger = $('.toggle-menu_1');
    $toggleHamburger.on('click', function(e){
        $toggleHamburger.toggleClass('is-active');
        $topHolder.toggleClass('active')
    })
})


