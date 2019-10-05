$(function(){
    initHeroSlider();
    // initActiveButton();
    initTabs();
})

function initHeroSlider(){
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true, 
    loop:true,
    autoplay: {
      delay: 4500, 
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}



function initTabs(){
  let $tabs = $('.tabs');
  let $tabNav = $tabs.find('.tabs-nav');
  let $tabContent = $tabs.find('.tabs-content');

  $tabNav.on('click', 'a', function(e){ 
    e.stopPropagation();
    let $tab = $(this);
    let target_id = $tab.attr('href');
    toggle(target_id)

    return false;
  })

  function toggle(id){
    let $activeLink = $('[href="'+id+'"]');
    let $target = $(id);

    $tabNav.find('.active').removeClass('active')
    $tabContent.find('.active').removeClass('active')

    $activeLink.addClass('active');
    $target.addClass('active')
  }

}

