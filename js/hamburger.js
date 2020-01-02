$(function(){
    menuInit();
})

function menuInit(){
    const ACTIVE_CLASS = 'active';
    const NAVIGATIONS_CLASS = '.responsive-nav';
    const TOGGLE_BUTTON_CLASS = '.menu-toggle';

    $('body').on('click', TOGGLE_BUTTON_CLASS, function(e){
        var targetID = $(this).data('target');
        console.log('targetID E ' + targetID);
        var menuState = toggleMenu(targetID);
        toggleButton(this, menuState);
        return false;
    });

    function toggleMenu(id){
        var menu_state = isVisible(id);

        if(menu_state){
            menu_state = closeMenu(id);
        } else {
            menu_state = openMenu(id);
        }

        return menu_state;
    };

    function openMenu(id){
        var $nav = $(id);
        var $navs = $(NAVIGATIONS_CLASS);

        $navs.removeClass(ACTIVE_CLASS); 
        $nav.addClass(ACTIVE_CLASS);
        return true;
    };

    function closeMenu(id){
        var $nav = $(id);
        $nav.removeClass(ACTIVE_CLASS)
        return false;
    };

    function isVisible(id){
        var $object = $(id);
        return $object.hasClass(ACTIVE_CLASS);
    };

    function toggleButton(button, state){
       

        if(state){
            activedButton(button);
        }else{
            deactivedButton(button);
        }
    }

    function activedButton(button){
        var $button = $(button);
        $(TOGGLE_BUTTON_CLASS).removeClass(ACTIVE_CLASS);
        $button.addClass(ACTIVE_CLASS);
    }

    function deactivedButton(button){
        var $button = $(button);
        $button.removeClass(ACTIVE_CLASS);
    }

}


/*$(function(){
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
})*/


